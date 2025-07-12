'use client';

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  FileText, 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  RefreshCw,
  CheckCircle,
  AlertCircle,
  Eye
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import Image from "next/image";

interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  summary?: string | null;
  content: string;
  featured_image?: string | null;
  is_published: boolean;
  published_at?: string | null;
  author?: string | null;
  created_at: string;
  updated_at: string;
}

interface NewsFormData {
  title: string;
  slug: string;
  summary: string;
  content: string;
  featured_image: string;
  author: string;
  is_published: boolean;
}

const initialFormData: NewsFormData = {
  title: '',
  slug: '',
  summary: '',
  content: '',
  featured_image: '',
  author: '',
  is_published: false,
};

const SUPABASE_BUCKET = "news-images";

export default function NewsAdmin() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'published' | 'draft'>('all');
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState<NewsFormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<Partial<NewsFormData>>({});
  const [showDialog, setShowDialog] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  
  const { toast } = useToast();
  const supabase = createClient();

  useEffect(() => {
    fetchArticles();
  }, []);

  useEffect(() => {
    filterArticles();
  }, [articles, searchQuery, filterStatus]);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('news_articles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setArticles(data || []);
    } catch (err) {
      console.error('Error fetching articles:', err);
      setError('Failed to load news articles');
    } finally {
      setLoading(false);
    }
  };

  const filterArticles = () => {
    let filtered = articles;

    if (searchQuery) {
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.summary?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterStatus !== 'all') {
      filtered = filtered.filter(article => 
        filterStatus === 'published' ? article.is_published : !article.is_published
      );
    }

    setFilteredArticles(filtered);
  };

  const validateForm = (): boolean => {
    const errors: Partial<NewsFormData> = {};

    if (!formData.title.trim()) {
      errors.title = 'Title is required';
    }

    if (!formData.content.trim()) {
      errors.content = 'Content is required';
    }

    if (!formData.slug.trim()) {
      errors.slug = 'Slug is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      setActionLoading(isEditMode ? 'update' : 'create');
      let featuredImageUrl = formData.featured_image;
      if (imageFile) {
        setUploading(true);
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}.${fileExt}`;
        const { data, error } = await supabase.storage.from(SUPABASE_BUCKET).upload(fileName, imageFile, {
          cacheControl: '3600',
          upsert: false,
        });
        if (error) {
          toast({
            title: "Upload Error",
            description: error.message,
            variant: "destructive",
          });
          setUploading(false);
          setActionLoading(null);
          return;
        }
        const { data: publicUrlData } = supabase.storage.from(SUPABASE_BUCKET).getPublicUrl(fileName);
        if (publicUrlData?.publicUrl) {
          featuredImageUrl = publicUrlData.publicUrl;
        }
        setUploading(false);
      }

      const articleData = {
        title: formData.title.trim(),
        slug: formData.slug.trim(),
        summary: formData.summary.trim() || null,
        content: formData.content.trim(),
        featured_image: featuredImageUrl || null,
        author: formData.author.trim() || null,
        is_published: formData.is_published,
        published_at: formData.is_published ? new Date().toISOString() : null,
      };

      if (isEditMode && selectedArticle) {
        // Update existing article
        const { error } = await supabase
          .from('news_articles')
          .update(articleData)
          .eq('id', selectedArticle.id);

        if (error) throw error;

        // Update local state instead of refetching
        const updatedArticle = { ...selectedArticle, ...articleData };
        setArticles(prev => prev.map(a => a.id === selectedArticle.id ? updatedArticle : a));

        toast({
          title: "Success",
          description: "News article updated successfully",
        });
      } else {
        // Create new article
        const { data: newArticle, error } = await supabase
          .from('news_articles')
          .insert(articleData)
          .select('*')
          .single();

        if (error) throw error;

        // Add to local state instead of refetching
        if (newArticle) {
          setArticles(prev => [newArticle, ...prev]);
        }

        toast({
          title: "Success",
          description: "News article created successfully",
        });
      }

      // Reset form and close dialog
      setFormData(initialFormData);
      setFormErrors({});
      setIsEditMode(false);
      setSelectedArticle(null);
      setShowDialog(false);
      setImageFile(null);
    } catch (err) {
      console.error('Error saving article:', err);
      toast({
        title: "Error",
        description: "Failed to save news article",
        variant: "destructive",
      });
    } finally {
      setActionLoading(null);
    }
  };

  const handleEdit = (article: NewsArticle) => {
    setFormData({
      title: article.title,
      slug: article.slug,
      summary: article.summary || '',
      content: article.content,
      featured_image: article.featured_image || '',
      author: article.author || '',
      is_published: article.is_published,
    });
    setFormErrors({});
    setIsEditMode(true);
    setSelectedArticle(article);
    setImageFile(null);
    setShowDialog(true);
  };

  const deleteArticle = async (article: NewsArticle) => {
    if (!confirm(`Are you sure you want to delete "${article.title}"?`)) {
      return;
    }

    // Store original articles for potential rollback
    const originalArticles = articles;
    
    // Optimistic update - remove immediately
    setArticles(prev => prev.filter(a => a.id !== article.id));

    try {
      setActionLoading(article.id);
      
      const { error } = await supabase
        .from('news_articles')
        .delete()
        .eq('id', article.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "News article deleted successfully",
      });
    } catch (err) {
      console.error('Error deleting article:', err);
      
      // Revert optimistic update on error
      setArticles(originalArticles);
      
      toast({
        title: "Error",
        description: "Failed to delete news article",
        variant: "destructive",
      });
    } finally {
      setActionLoading(null);
    }
  };

  const toggleArticleStatus = async (article: NewsArticle) => {
    const newStatus = !article.is_published;
    const newPublishedAt = newStatus ? new Date().toISOString() : null;
    
    // Optimistic update - update UI immediately
    setArticles(prev => prev.map(a => 
      a.id === article.id ? { ...a, is_published: newStatus, published_at: newPublishedAt } : a
    ));

    try {
      setActionLoading(article.id);
      
      const { error } = await supabase
        .from('news_articles')
        .update({ 
          is_published: newStatus,
          published_at: newPublishedAt
        })
        .eq('id', article.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: `News article ${article.is_published ? 'unpublished' : 'published'} successfully`,
      });
    } catch (err) {
      console.error('Error toggling article status:', err);
      
      // Revert optimistic update on error
      setArticles(prev => prev.map(a => 
        a.id === article.id ? { ...a, is_published: !newStatus, published_at: article.published_at } : a
      ));
      
      toast({
        title: "Error",
        description: "Failed to update news article status",
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

  const getStatusBadge = (isPublished: boolean) => {
    return isPublished ? (
      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-800">
        <CheckCircle className="h-3 w-3 mr-1" />
        Published
      </span>
    ) : (
      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800">
        <AlertCircle className="h-3 w-3 mr-1" />
        Draft
      </span>
    );
  };

  const publishedCount = articles.filter(a => a.is_published).length;
  const draftCount = articles.filter(a => !a.is_published).length;

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
        <Button onClick={fetchArticles} className="mt-4">
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">News Articles</h1>
          <p className="mt-2 text-gray-600">
            Manage news articles and blog posts
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={fetchArticles}
            disabled={loading}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Dialog open={showDialog} onOpenChange={setShowDialog}>
            <DialogTrigger asChild>
              <Button
                onClick={() => {
                  setFormData(initialFormData);
                  setFormErrors({});
                  setIsEditMode(false);
                  setSelectedArticle(null);
                  setImageFile(null);
                }}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add News
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>
                  {isEditMode ? 'Edit News Article' : 'Add New News Article'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Enter article title"
                    />
                    {formErrors.title && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.title}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="slug">Slug *</Label>
                    <Input
                      id="slug"
                      value={formData.slug}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, slug: e.target.value })}
                      placeholder="article-slug"
                    />
                    {formErrors.slug && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.slug}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, author: e.target.value })}
                    placeholder="Enter author name"
                  />
                </div>

                <div>
                  <Label htmlFor="summary">Summary</Label>
                  <Textarea
                    id="summary"
                    value={formData.summary}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, summary: e.target.value })}
                    placeholder="Enter article summary"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="featured_image">Featured Image</Label>
                  <Input
                    id="featured_image"
                    type="file"
                    accept="image/*"
                    onChange={e => {
                      if (e.target.files && e.target.files[0]) {
                        setImageFile(e.target.files[0]);
                      } else {
                        setImageFile(null);
                      }
                    }}
                    disabled={uploading}
                  />
                  <div className="mt-2">
                    {/* Preview for new upload */}
                    {imageFile && (
                      <Image
                        src={URL.createObjectURL(imageFile)}
                        alt="Preview"
                        width={120}
                        height={80}
                        className="rounded border"
                      />
                    )}
                    {/* Preview for existing image when editing */}
                    {!imageFile && formData.featured_image && (
                      <Image
                        src={formData.featured_image}
                        alt="Featured"
                        width={120}
                        height={80}
                        className="rounded border"
                      />
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Upload an image (max 5MB). If you don't select a new image, the existing one will be kept.
                  </p>
                </div>

                <div>
                  <Label htmlFor="content">Content *</Label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Enter article content (HTML supported)"
                    rows={10}
                  />
                  {formErrors.content && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.content}</p>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="is_published"
                    checked={formData.is_published}
                    onCheckedChange={(checked: boolean) => setFormData({ ...formData, is_published: checked })}
                  />
                  <Label htmlFor="is_published">Published</Label>
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
                    {isEditMode ? 'Update' : 'Create'} Article
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
            <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{articles.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{publishedCount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Drafts</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{draftCount}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Articles</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant={filterStatus === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('all')}
              >
                All
              </Button>
              <Button
                variant={filterStatus === 'published' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('published')}
              >
                Published ({publishedCount})
              </Button>
              <Button
                variant={filterStatus === 'draft' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('draft')}
              >
                Drafts ({draftCount})
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Articles Table */}
      <Card>
        <CardHeader>
          <CardTitle>News Articles ({filteredArticles.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {filteredArticles.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No news articles found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Status</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Published</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredArticles.map((article) => (
                    <TableRow key={article.id}>
                      <TableCell>
                        {getStatusBadge(article.is_published)}
                      </TableCell>
                      <TableCell className="font-medium">
                        {article.title}
                      </TableCell>
                      <TableCell>
                        {article.author || 'Unknown'}
                      </TableCell>
                      <TableCell>
                        {article.published_at ? formatDate(article.published_at) : 'Not published'}
                      </TableCell>
                      <TableCell>
                        {formatDate(article.created_at)}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setSelectedArticle(article)}
                              >
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>Article Preview</DialogTitle>
                              </DialogHeader>
                              {selectedArticle && (
                                <div className="space-y-4">
                                  <div>
                                    <label className="text-sm font-medium text-gray-700">Title</label>
                                    <p className="mt-1 font-medium">{selectedArticle.title}</p>
                                  </div>
                                  
                                  {selectedArticle.summary && (
                                    <div>
                                      <label className="text-sm font-medium text-gray-700">Summary</label>
                                      <p className="mt-1">{selectedArticle.summary}</p>
                                    </div>
                                  )}
                                  
                                  <div>
                                    <label className="text-sm font-medium text-gray-700">Content</label>
                                    <div className="mt-1 p-3 bg-gray-50 rounded-lg">
                                      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
                                    </div>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                          
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => toggleArticleStatus(article)}
                            disabled={actionLoading === article.id}
                          >
                            {actionLoading === article.id ? (
                              <RefreshCw className="h-4 w-4 animate-spin" />
                            ) : article.is_published ? (
                              <AlertCircle className="h-4 w-4" />
                            ) : (
                              <CheckCircle className="h-4 w-4" />
                            )}
                          </Button>
                          
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(article)}
                            disabled={actionLoading === article.id}
                          >
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteArticle(article)}
                            disabled={actionLoading === article.id}
                          >
                            {actionLoading === article.id ? (
                              <RefreshCw className="h-4 w-4 animate-spin" />
                            ) : (
                              <Trash2 className="h-4 w-4" />
                            )}
                          </Button>
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
    </div>
  );
} 