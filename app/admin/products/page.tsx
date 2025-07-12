'use client';

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { 
  Package, 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  AlertCircle,
  CheckCircle,
  RefreshCw,
  Tag,
  DollarSign,
  FileText,
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";
import { getProductImageUrl } from "@/lib/image-utils";

interface Product {
  id: string;
  name: string;
  description: string | null;
  specifications: string | null;
  image_urls: string[];
  category_id: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  product_categories?: {
    id: string;
    name: string;
  } | null;
}

interface ProductCategory {
  id: string;
  name: string;
  description: string | null;
}

interface ProductFormData {
  name: string;
  description: string;
  specifications: string;
  image_urls: string;
  category_id: string;
  is_active: boolean;
}

const initialFormData: ProductFormData = {
  name: '',
  description: '',
  specifications: '',
  image_urls: '',
  category_id: '',
  is_active: true,
};

const SUPABASE_BUCKET = "product-images";

export default function ProductsAdmin() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState<ProductFormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<Partial<ProductFormData>>({});
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedProductForView, setSelectedProductForView] = useState<Product | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const { toast } = useToast();
  const supabase = createClient();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [products, searchQuery, filterStatus]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch products with category information
      const { data: productsData, error: productsError } = await supabase
        .from('products')
        .select(`
          *,
          product_categories (
            id,
            name
          )
        `)
        .order('created_at', { ascending: false });

      if (productsError) throw productsError;

      // Fetch categories for the form
      const { data: categoriesData, error: categoriesError } = await supabase
        .from('product_categories')
        .select('*')
        .order('name');

      if (categoriesError) throw categoriesError;

      setProducts(productsData || []);
      setCategories(categoriesData || []);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = () => {
    let filtered = products;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.product_categories?.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply status filter
    if (filterStatus !== 'all') {
      filtered = filtered.filter(product => 
        filterStatus === 'active' ? product.is_active : !product.is_active
      );
    }

    setFilteredProducts(filtered);
  };

  const validateForm = (): boolean => {
    const errors: Partial<ProductFormData> = {};

    if (!formData.name.trim()) {
      errors.name = 'Product name is required';
    }

    if (!formData.description.trim()) {
      errors.description = 'Description is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Helper to upload images to Supabase Storage
  const uploadImages = async (files: File[]): Promise<string[]> => {
    setUploading(true);
    const urls: string[] = [];
    for (const file of files) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
      const { data, error } = await supabase.storage.from(SUPABASE_BUCKET).upload(fileName, file, {
        cacheControl: '3600',
        upsert: false,
      });
      if (error) {
        toast({
          title: "Upload Error",
          description: error.message,
          variant: "destructive",
        });
        continue;
      }
      const { data: publicUrlData } = supabase.storage.from(SUPABASE_BUCKET).getPublicUrl(fileName);
      if (publicUrlData?.publicUrl) {
        urls.push(publicUrlData.publicUrl);
      }
    }
    setUploading(false);
    return urls;
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      setActionLoading(isEditMode ? 'update' : 'create');
      let imageUrlsArray: string[] = [];
      if (imageFiles.length > 0) {
        imageUrlsArray = await uploadImages(imageFiles);
      } else if (isEditMode && selectedProduct) {
        imageUrlsArray = selectedProduct.image_urls;
      }

      const productData = {
        name: formData.name.trim(),
        description: formData.description.trim(),
        specifications: formData.specifications.trim() || null,
        image_urls: imageUrlsArray,
        category_id: formData.category_id || null,
        is_active: formData.is_active,
      };

      if (isEditMode && selectedProduct) {
        // Update existing product
        const { error } = await supabase
          .from('products')
          .update(productData)
          .eq('id', selectedProduct.id);

        if (error) throw error;

        // Update local state instead of refetching
        const updatedProduct = { ...selectedProduct, ...productData };
        setProducts(prev => prev.map(p => p.id === selectedProduct.id ? updatedProduct : p));

        toast({
          title: "Success",
          description: "Product updated successfully",
        });
      } else {
        // Create new product
        const { data: newProduct, error } = await supabase
          .from('products')
          .insert(productData)
          .select(`
            *,
            product_categories (
              id,
              name
            )
          `)
          .single();

        if (error) throw error;

        // Add to local state instead of refetching
        if (newProduct) {
          setProducts(prev => [newProduct, ...prev]);
        }

        toast({
          title: "Success",
          description: "Product created successfully",
        });
      }

      // Reset form and close dialog
      setFormData(initialFormData);
      setFormErrors({});
      setIsEditMode(false);
      setSelectedProduct(null);
      setShowDialog(false);
      setImageFiles([]);
    } catch (err) {
      console.error('Error saving product:', err);
      toast({
        title: "Error",
        description: "Failed to save product",
        variant: "destructive",
      });
    } finally {
      setActionLoading(null);
      setUploading(false);
    }
  };

  const handleEdit = (product: Product) => {
    setSelectedProduct(product);
    setFormData({
      name: product.name,
      description: product.description || '',
      specifications: product.specifications || '',
      image_urls: '', // not used anymore
      category_id: product.category_id || '',
      is_active: product.is_active,
    });
    setImageFiles([]);
    setIsEditMode(true);
    setShowDialog(true);
  };

  const handleDelete = async (product: Product) => {
    if (!confirm(`Are you sure you want to delete "${product.name}"?`)) {
      return;
    }

    // Store original products for potential rollback
    const originalProducts = products;
    
    // Optimistic update - remove immediately
    setProducts(prev => prev.filter(p => p.id !== product.id));
    
    // Close modal if it's open for this product
    if (selectedProductForView?.id === product.id) {
      setShowImageModal(false);
      setSelectedProductForView(null);
    }

    try {
      setActionLoading(product.id);
      
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', product.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Product deleted successfully",
      });
    } catch (err) {
      console.error('Error deleting product:', err);
      
      // Revert optimistic update on error
      setProducts(originalProducts);
      
      toast({
        title: "Error",
        description: "Failed to delete product",
        variant: "destructive",
      });
    } finally {
      setActionLoading(null);
    }
  };

  const toggleProductStatus = async (product: Product) => {
    const newStatus = !product.is_active;
    
    // Optimistic update - update UI immediately
    setProducts(prev => prev.map(p => 
      p.id === product.id ? { ...p, is_active: newStatus } : p
    ));

    try {
      setActionLoading(product.id);
      
      const { error } = await supabase
        .from('products')
        .update({ is_active: newStatus })
        .eq('id', product.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: `Product ${product.is_active ? 'deactivated' : 'activated'} successfully`,
      });
    } catch (err) {
      console.error('Error toggling product status:', err);
      
      // Revert optimistic update on error
      setProducts(prev => prev.map(p => 
        p.id === product.id ? { ...p, is_active: !newStatus } : p
      ));
      
      toast({
        title: "Error",
        description: "Failed to update product status",
        variant: "destructive",
      });
    } finally {
      setActionLoading(null);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusBadge = (isActive: boolean) => {
    return isActive ? (
      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-800">
        <CheckCircle className="h-3 w-3 mr-1" />
        Active
      </span>
    ) : (
      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-red-100 text-red-800">
        <AlertCircle className="h-3 w-3 mr-1" />
        Inactive
      </span>
    );
  };

  const handleViewProduct = (product: Product) => {
    setSelectedProductForView(product);
    setCurrentImageIndex(0);
    setShowImageModal(true);
  };

  const handleNextImage = () => {
    if (selectedProductForView && selectedProductForView.image_urls.length > 0) {
      setCurrentImageIndex((prev) => 
        prev < selectedProductForView.image_urls.length - 1 ? prev + 1 : 0
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProductForView && selectedProductForView.image_urls.length > 0) {
      setCurrentImageIndex((prev) => 
        prev > 0 ? prev - 1 : selectedProductForView.image_urls.length - 1
      );
    }
  };

  // Add keyboard navigation for image modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showImageModal) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          handlePrevImage();
          break;
        case 'ArrowRight':
          e.preventDefault();
          handleNextImage();
          break;
        case 'Escape':
          e.preventDefault();
          setShowImageModal(false);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showImageModal, selectedProductForView]);

  const getProductImagePreview = (product: Product) => {
    const imageUrl = getProductImageUrl(product, 0);
    return imageUrl || '/placeholder.svg';
  };

  const activeCount = products.filter(p => p.is_active).length;

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
        <p className="text-red-600">{error}</p>
        <Button onClick={fetchData} className="mt-4">
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <TooltipProvider>
      <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Products</h1>
          <p className="mt-2 text-gray-600">
            Manage your product catalog and inventory
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                onClick={fetchData}
                disabled={loading}
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Reload products from database</p>
            </TooltipContent>
          </Tooltip>
          <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <Tooltip>
              <TooltipTrigger asChild>
                <DialogTrigger asChild>
                  <Button
                    onClick={() => {
                      setFormData(initialFormData);
                      setFormErrors({});
                      setIsEditMode(false);
                      setSelectedProduct(null);
                      setImageFiles([]);
                    }}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Product
                  </Button>
                </DialogTrigger>
              </TooltipTrigger>
              <TooltipContent>
                <p>Create a new product</p>
              </TooltipContent>
            </Tooltip>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                  {isEditMode ? 'Edit Product' : 'Add New Product'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Product Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter product name"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="category">Category</Label>
                    <Select 
                      value={formData.category_id} 
                      onValueChange={(value: string) => setFormData({ ...formData, category_id: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Enter product description"
                    rows={3}
                  />
                  {formErrors.description && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.description}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="specifications">Specifications</Label>
                  <Textarea
                    id="specifications"
                    value={formData.specifications}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, specifications: e.target.value })}
                    placeholder="Enter product specifications"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="image_upload">Product Images</Label>
                  <Input
                    id="image_upload"
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageChange}
                    disabled={uploading}
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    {/* Show previews for new uploads */}
                    {imageFiles.map((file, idx) => (
                      <div key={idx} className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 border">
                      <img
                        src={URL.createObjectURL(file)}
                        alt="Preview"
                          className="w-full h-full object-cover"
                      />
                        <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-1 rounded-bl">
                          New
                        </div>
                      </div>
                    ))}
                    {/* Show previews for existing images when editing */}
                    {isEditMode && imageFiles.length === 0 && selectedProduct?.image_urls.map((url, idx) => (
                      <div key={idx} className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 border">
                        <Image
                        src={url}
                        alt="Product"
                          fill
                          className="object-cover"
                          sizes="80px"
                      />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Upload one or more images. Max file size: 5MB each.
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="is_active"
                    checked={formData.is_active}
                    onCheckedChange={(checked: boolean) => setFormData({ ...formData, is_active: checked })}
                  />
                  <Label htmlFor="is_active">Active</Label>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={actionLoading === 'create' || actionLoading === 'update'}
                  >
                    {actionLoading === 'create' || actionLoading === 'update' ? (
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    ) : null}
                    {isEditMode ? 'Update' : 'Create'} Product
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{products.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{activeCount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Inactive</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{products.length - activeCount}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Products</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={filterStatus === 'all' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilterStatus('all')}
                  >
                    All
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Show all products</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={filterStatus === 'active' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilterStatus('active')}
                  >
                    Active ({activeCount})
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Show only active products</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={filterStatus === 'inactive' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setFilterStatus('inactive')}
                  >
                    Inactive ({products.length - activeCount})
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Show only inactive products</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <CardTitle>Products ({filteredProducts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {filteredProducts.length === 0 ? (
            <div className="text-center py-8">
              <Package className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No products found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Images</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProducts.map((product) => (
                    <TableRow key={product.id} className="hover:bg-gray-50 transition-colors">
                      <TableCell>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 cursor-pointer hover:scale-105 transition-transform" onClick={() => handleViewProduct(product)}>
                              <Image
                                src={getProductImagePreview(product)}
                                alt={product.name}
                                fill
                                className="object-cover"
                                sizes="48px"
                              />
                              {product.image_urls.length > 1 && (
                                <div className="absolute bottom-0 right-0 bg-black/70 text-white text-xs px-1 rounded-tl">
                                  {product.image_urls.length}
                                </div>
                              )}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Click to view all {product.image_urls.length || 1} image{(product.image_urls.length || 1) !== 1 ? 's' : ''}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TableCell>
                      <TableCell>
                        {getStatusBadge(product.is_active)}
                      </TableCell>
                      <TableCell className="font-medium">
                        <div className="max-w-48 truncate">
                        {product.name}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-gray-600">
                        {product.product_categories?.name || 'No category'}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <ImageIcon className="h-4 w-4 text-gray-500" />
                          <span className="text-sm text-gray-600">
                            {product.image_urls.length}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm text-gray-600">
                        {formatDate(product.created_at)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-1">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleViewProduct(product)}
                              >
                                <Eye className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>View product details and images</p>
                            </TooltipContent>
                          </Tooltip>
                          
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleEdit(product)}
                              >
                                <Edit className="h-4 w-4" />
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Edit product information</p>
                            </TooltipContent>
                          </Tooltip>
                          
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => toggleProductStatus(product)}
                                disabled={actionLoading === product.id}
                              >
                                {actionLoading === product.id ? (
                                  <RefreshCw className="h-4 w-4 animate-spin" />
                                ) : product.is_active ? (
                                  <AlertCircle className="h-4 w-4" />
                                ) : (
                                  <CheckCircle className="h-4 w-4" />
                                )}
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{product.is_active ? 'Deactivate product' : 'Activate product'}</p>
                            </TooltipContent>
                          </Tooltip>
                          
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleDelete(product)}
                                disabled={actionLoading === product.id}
                              >
                                {actionLoading === product.id ? (
                                  <RefreshCw className="h-4 w-4 animate-spin" />
                                ) : (
                                  <Trash2 className="h-4 w-4" />
                                )}
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Delete product permanently</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Product Image Preview Modal */}
      <Dialog open={showImageModal} onOpenChange={setShowImageModal}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between">
              <span className="truncate">{selectedProductForView?.name}</span>
              <div className="flex items-center space-x-2">
                <div className="hidden sm:block text-xs text-gray-500">
                  Use ← → arrows to navigate, ESC to close
                </div>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowImageModal(false)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Close modal</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </DialogTitle>
          </DialogHeader>
          
          {selectedProductForView && (
            <div className="space-y-6">
              {/* Product Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Product Details</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Status:</span>
                        <span>{getStatusBadge(selectedProductForView.is_active)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Category:</span>
                        <span className="text-sm">{selectedProductForView.product_categories?.name || 'No category'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Created:</span>
                        <span className="text-sm">{formatDate(selectedProductForView.created_at)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Images:</span>
                        <span className="text-sm">{selectedProductForView.image_urls.length}</span>
                      </div>
                    </div>
                  </div>
                  
                  {selectedProductForView.description && (
                    <div>
                      <h4 className="font-medium mb-2">Description</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {selectedProductForView.description}
                      </p>
                    </div>
                  )}
                  
                  {selectedProductForView.specifications && (
                    <div>
                      <h4 className="font-medium mb-2">Specifications</h4>
                      <div className="text-sm text-gray-600 max-h-32 overflow-y-auto">
                        <pre className="whitespace-pre-wrap font-sans">
                          {selectedProductForView.specifications}
                        </pre>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Image Gallery */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Images</h3>
                  
                  {selectedProductForView.image_urls.length > 0 ? (
                    <div className="space-y-4">
                      {/* Main Image */}
                      <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                        <Image
                          src={selectedProductForView.image_urls[currentImageIndex] || '/placeholder.svg'}
                          alt={`${selectedProductForView.name} - Image ${currentImageIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                        
                        {/* Navigation arrows */}
                        {selectedProductForView.image_urls.length > 1 && (
                          <>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="secondary"
                                  size="sm"
                                  className="absolute left-2 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100"
                                  onClick={handlePrevImage}
                                >
                                  <ChevronLeft className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Previous image (←)</p>
                              </TooltipContent>
                            </Tooltip>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="secondary"
                                  size="sm"
                                  className="absolute right-2 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100"
                                  onClick={handleNextImage}
                                >
                                  <ChevronRight className="h-4 w-4" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Next image (→)</p>
                              </TooltipContent>
                            </Tooltip>
                            
                            {/* Image counter */}
                            <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                              {currentImageIndex + 1} of {selectedProductForView.image_urls.length}
                            </div>
                          </>
                        )}
                      </div>
                      
                      {/* Thumbnail strip */}
                      {selectedProductForView.image_urls.length > 1 && (
                        <div className="flex space-x-2 overflow-x-auto pb-2">
                          {selectedProductForView.image_urls.map((imageUrl, index) => (
                            <Tooltip key={index}>
                              <TooltipTrigger asChild>
                                <button
                                  onClick={() => setCurrentImageIndex(index)}
                                  className={`relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0 border-2 transition-colors ${
                                    index === currentImageIndex ? 'border-blue-500' : 'border-transparent'
                                  }`}
                                >
                                  <Image
                                    src={imageUrl}
                                    alt={`${selectedProductForView.name} - Thumbnail ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    sizes="64px"
                                  />
                                </button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>View image {index + 1}</p>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="aspect-square rounded-lg bg-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">No images available</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex justify-end space-x-2 pt-4 border-t">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setShowImageModal(false);
                        handleEdit(selectedProductForView);
                      }}
                    >
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Product
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Edit this product's information</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      onClick={() => setShowImageModal(false)}
                    >
                      Close
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Close preview modal (ESC)</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </div>
          )}
                 </DialogContent>
       </Dialog>
      </div>
    </TooltipProvider>
  );
} 