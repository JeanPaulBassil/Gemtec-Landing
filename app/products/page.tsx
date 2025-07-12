'use client';

import { useState, useEffect, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  ArrowRight, 
  ChevronRight, 
  Box, 
  Images, 
  FileText, 
  Award, 
  ListTree,
  Search,
  Filter,
  Layers, 
  Tag,
  InfoIcon,
  ShieldCheck
} from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { createClient } from "@/lib/supabase/client"
import { useToast } from "@/components/ui/use-toast"
import { useSearchParams } from 'next/navigation'

// Define types for our data model
interface ProductCategory {
  id: string;
  name: string;
  description: string | null;
  parent_id: string | null;
  created_at: string;
  updated_at: string;
  children?: ProductCategory[];
  slug: string;
}

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
  slug: string;
}

function ProductCard({ product }: { product: Product }) {
  // Parse specifications from JSON string with error handling
  let specs = {};
  let specsParseError = false;
  try {
    if (product.specifications) {
      specs = JSON.parse(product.specifications);
    }
  } catch (error) {
    specsParseError = true;
    // Continue with empty specs object
  }
  
  const mainImage = product.image_urls[0] || "";
  
  return (
    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-zinc-200 hover:border-blue-200 group">
      <div className="relative">
        <AspectRatio ratio={16/9} className="bg-zinc-100">
          {mainImage ? (
            <Image
              src={mainImage}
              alt={product.name}
              fill
              className="object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-200">
              <Box className="h-10 w-10 text-zinc-400" />
            </div>
          )}
        </AspectRatio>
        {product.image_urls.length > 1 && (
          <Badge className="absolute bottom-2 right-2 gap-1 bg-white/80 text-zinc-700 hover:bg-white/90">
            <Images className="h-3 w-3" />
            <span>{product.image_urls.length}</span>
          </Badge>
        )}
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{product.name}</CardTitle>
        {product.description && (
          <CardDescription className="line-clamp-2">{product.description}</CardDescription>
        )}
      </CardHeader>
      
      <CardContent className="flex-1">
        <Tabs defaultValue="specs" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="specs" className="text-xs">
              <FileText className="h-3 w-3 mr-1" />
              Specs
            </TabsTrigger>
            <TabsTrigger value="features" className="text-xs">
              <Award className="h-3 w-3 mr-1" />
              Features
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="specs" className="h-32 overflow-auto">
            <div className="space-y-1">
              {Object.entries(specs).length > 0 ? (
                Object.entries(specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-zinc-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                    <span className="font-medium text-right ml-2">{String(value)}</span>
                  </div>
                ))
              ) : product.specifications && specsParseError ? (
                <p className="text-sm text-zinc-600 whitespace-pre-line">{product.specifications}</p>
              ) : (
                <p className="text-sm text-zinc-500">No specifications available</p>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="features" className="h-32 overflow-auto">
            <div className="space-y-1">
              <p className="text-sm text-zinc-600">
                {product.description || "No features description available"}
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      
      <CardFooter className="pt-2 mt-auto">
        <Link href={`/products/${product.slug}`} className="w-full">
          <Button variant="default" className="w-full group" size="sm">
            <span>View Details</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

function CategoryFilter({ categories, onCategorySelect }: { 
  categories: ProductCategory[]; 
  onCategorySelect: (categoryId: string | null) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    onCategorySelect(categoryId);
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <ListTree className="h-5 w-5 text-blue-600" />
          Categories
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <Button
          variant={selectedCategory === null ? "default" : "ghost"}
          className="w-full justify-start"
          onClick={() => handleCategoryClick(null)}
        >
          All Products
        </Button>
        
        {categories.filter(c => !c.parent_id).map((category) => (
          <div key={category.id}>
            <Button
              variant={selectedCategory === category.id ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => handleCategoryClick(category.id)}
            >
              <Tag className="h-4 w-4 mr-2" />
              {category.name}
            </Button>
            
            {/* Show subcategories if they exist */}
            {categories.filter(c => c.parent_id === category.id).map((subCategory) => (
              <Button
                key={subCategory.id}
                variant={selectedCategory === subCategory.id ? "default" : "ghost"}
                className="w-full justify-start ml-6"
                onClick={() => handleCategoryClick(subCategory.id)}
              >
                <ChevronRight className="h-3 w-3 mr-2" />
                {subCategory.name}
              </Button>
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

function ProductsPageContent() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const { toast } = useToast();
  const supabase = createClient();
  const searchParams = useSearchParams();

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Set initial category from URL parameter
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  useEffect(() => {
    filterProducts();
  }, [products, searchQuery, selectedCategory]);

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
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (productsError) throw productsError;

      // Fetch categories
      const { data: categoriesData, error: categoriesError } = await supabase
        .from('product_categories')
        .select('*')
        .order('name');

      if (categoriesError) throw categoriesError;

      // Add slug to products and categories
      const productsWithSlugs = (productsData || []).map(product => ({
        ...product,
        slug: product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      }));

      const categoriesWithSlugs = (categoriesData || []).map(category => ({
        ...category,
        slug: category.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      }));

      setProducts(productsWithSlugs);
      setCategories(categoriesWithSlugs);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('Failed to load products and categories');
      toast({
        title: "Error",
        description: "Failed to load products. Please try again.",
        variant: "destructive",
      });
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
        product.specifications?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.product_categories?.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(product => 
        product.category_id === selectedCategory
      );
    }

    setFilteredProducts(filtered);
  };

  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">{error}</p>
        <Button onClick={fetchData} className="mt-4">
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <>
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-blue-900/50 border border-blue-800 rounded-full text-blue-100">
              <span className="font-medium text-sm tracking-wide">Product Catalog</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl/none text-white drop-shadow-sm">
              Explore Our Products
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              High-quality HVAC solutions designed for performance and reliability
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-zinc-50">
        <div className="container">
          <div className="max-w-5xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <Input 
                placeholder="Search products by name, specifications or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 py-6 bg-white border-zinc-200 focus-visible:ring-blue-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3">
              <div className="sticky top-24">
                <CategoryFilter 
                  categories={categories} 
                  onCategorySelect={handleCategorySelect}
                />
                
                <div className="bg-white border rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-blue-600 mb-3">
                    <InfoIcon className="h-4 w-4" />
                    <h3 className="font-medium">Need Assistance?</h3>
                  </div>
                  <p className="text-sm text-zinc-600 mb-4">
                    Contact our product specialists for custom requirements or technical support.
                  </p>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Request Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-9">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <Box className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 text-lg">No products found</p>
                  <p className="text-gray-400 text-sm mt-2">
                    Try adjusting your search or category filters
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    }>
      <ProductsPageContent />
    </Suspense>
  );
}

