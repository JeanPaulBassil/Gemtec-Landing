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
  FolderOpen, 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  RefreshCw,
  Package,
  AlertCircle,
  Upload,
  X
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface Project {
  id: string;
  title: string;
  description: string | null;
  photo_url: string | null;
  items_supplied: string[];
  location: string | null;
  brands: string[];
  created_at: string;
  updated_at: string;
}

interface ProjectFormData {
  title: string;
  description: string;
  location: string;
  items_supplied: string;
  brands: string;
  photo_url: string;
}

const initialFormData: ProjectFormData = {
  title: '',
  description: '',
  location: '',
  items_supplied: '',
  brands: '',
  photo_url: '',
};

export default function ProjectsAdmin() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState<ProjectFormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<Partial<ProjectFormData>>({});
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  
  const { toast } = useToast();
  const supabase = createClient();

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    filterProjects();
  }, [projects, searchQuery]);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setProjects(data || []);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError('Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  const filterProjects = () => {
    let filtered = projects;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.location?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProjects(filtered);
  };

  const validateForm = (): boolean => {
    const errors: Partial<ProjectFormData> = {};

    if (!formData.title.trim()) {
      errors.title = 'Project title is required';
    }

    if (!formData.description.trim()) {
      errors.description = 'Description is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Error",
          description: "Please select an image file",
          variant: "destructive",
        });
        return;
      }
      
      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "Error",
          description: "File size must be less than 5MB",
          variant: "destructive",
        });
        return;
      }
      
      setSelectedFile(file);
    }
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    try {
      setUploading(true);
      
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `project-images/${fileName}`;

      // Try different bucket names in case the default doesn't exist
      const bucketNames = ['images', 'project-images', 'uploads', 'public'];
      let uploadError: any = null;
      let successfulBucket = null;

      for (const bucketName of bucketNames) {
        try {
          const { error } = await supabase.storage
            .from(bucketName)
            .upload(filePath, file);

          if (!error) {
            successfulBucket = bucketName;
            break;
          } else {
            uploadError = error;
          }
        } catch (err) {
          uploadError = err;
          continue;
        }
      }

      if (!successfulBucket) {
        console.error('Storage upload error:', uploadError);
        throw new Error(`Failed to upload to any storage bucket. Please check your Supabase storage configuration. Error: ${uploadError?.message || 'Unknown error'}`);
      }

      const { data: { publicUrl } } = supabase.storage
        .from(successfulBucket)
        .getPublicUrl(filePath);

      return publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      
      // Provide more specific error messages
      let errorMessage = 'Failed to upload image';
      if (error instanceof Error) {
        if (error.message.includes('bucket')) {
          errorMessage = 'Storage bucket not found. Please create a storage bucket in your Supabase dashboard.';
        } else if (error.message.includes('permission')) {
          errorMessage = 'Permission denied. Please check your storage policies.';
        } else {
          errorMessage = error.message;
        }
      }
      
      toast({
        title: "Upload Error",
        description: errorMessage,
        variant: "destructive",
      });
      return null;
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      setActionLoading(isEditMode ? 'update' : 'create');

      let photoUrl: string | null = formData.photo_url;

      // Upload new image if selected
      if (selectedFile) {
        const uploadedUrl = await uploadImage(selectedFile);
        if (uploadedUrl) {
          photoUrl = uploadedUrl;
        } else {
          // If upload fails, ask user if they want to continue without image
          const shouldContinue = confirm('Failed to upload image. Would you like to continue without an image?');
          if (!shouldContinue) {
            setActionLoading(null);
            return;
          }
          // Keep the existing photo_url if editing, or null if creating new
          photoUrl = isEditMode ? (formData.photo_url || null) : null;
        }
      }

      const projectData = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        location: formData.location.trim() || null,
        items_supplied: formData.items_supplied.trim() ? formData.items_supplied.split(',').map(item => item.trim()) : [],
        brands: formData.brands.trim() ? formData.brands.split(',').map(brand => brand.trim()) : [],
        photo_url: photoUrl || null,
      };

      if (isEditMode && selectedProject) {
        // Update existing project
        const { error } = await supabase
          .from('projects')
          .update(projectData)
          .eq('id', selectedProject.id);

        if (error) throw error;

        // Update local state instead of refetching
        const updatedProject = { ...selectedProject, ...projectData };
        setProjects(prev => prev.map(p => p.id === selectedProject.id ? updatedProject : p));

        toast({
          title: "Success",
          description: "Project updated successfully",
        });
      } else {
        // Create new project
        const { data: newProject, error } = await supabase
          .from('projects')
          .insert(projectData)
          .select('*')
          .single();

        if (error) throw error;

        // Add to local state instead of refetching
        if (newProject) {
          setProjects(prev => [newProject, ...prev]);
        }

        toast({
          title: "Success",
          description: "Project created successfully",
        });
      }

      // Reset form and close dialog
      setFormData(initialFormData);
      setFormErrors({});
      setSelectedFile(null);
      setIsEditMode(false);
      setSelectedProject(null);
      setShowDialog(false);
    } catch (err) {
      console.error('Error saving project:', err);
      toast({
        title: "Error",
        description: "Failed to save project",
        variant: "destructive",
      });
    } finally {
      setActionLoading(null);
    }
  };

  const handleEdit = (project: Project) => {
    setSelectedProject(project);
    setFormData({
      title: project.title,
      description: project.description || '',
      location: project.location || '',
      items_supplied: project.items_supplied.join(', '),
      brands: project.brands.join(', '),
      photo_url: project.photo_url || '',
    });
    setSelectedFile(null);
    setIsEditMode(true);
    setShowDialog(true);
  };

  const handleDelete = async (project: Project) => {
    if (!confirm(`Are you sure you want to delete "${project.title}"?`)) {
      return;
    }

    // Store original projects for potential rollback
    const originalProjects = projects;
    
    // Optimistic update - remove immediately
    setProjects(prev => prev.filter(p => p.id !== project.id));

    try {
      setActionLoading(project.id);
      
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', project.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Project deleted successfully",
      });
    } catch (err) {
      console.error('Error deleting project:', err);
      
      // Revert optimistic update on error
      setProjects(originalProjects);
      
      toast({
        title: "Error",
        description: "Failed to delete project",
        variant: "destructive",
      });
    } finally {
      setActionLoading(null);
    }
  };

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
        <Button onClick={fetchProjects} className="mt-4">
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
          <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
          <p className="mt-2 text-gray-600">
            Manage your project portfolio and showcase work
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={fetchProjects}
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
                  setSelectedProject(null);
                }}
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Project
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>
                  {isEditMode ? 'Edit Project' : 'Add New Project'}
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="title">Project Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, title: e.target.value })}
                      placeholder="Enter project title"
                    />
                    {formErrors.title && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.title}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Enter project location"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="items_supplied">Items Supplied</Label>
                    <Input
                      id="items_supplied"
                      value={formData.items_supplied}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, items_supplied: e.target.value })}
                      placeholder="Enter items supplied (comma separated)"
                    />
                  </div>
                  <div>
                    <Label htmlFor="brands">Brands</Label>
                    <Input
                      id="brands"
                      value={formData.brands}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, brands: e.target.value })}
                      placeholder="Enter brands (comma separated)"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="photo">Project Image</Label>
                  <div className="space-y-2">
                    {selectedFile ? (
                      <div className="flex items-center space-x-2 p-2 border rounded-md bg-gray-50">
                        <img 
                          src={URL.createObjectURL(selectedFile)} 
                          alt="Preview" 
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium">{selectedFile.name}</p>
                          <p className="text-xs text-gray-500">
                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => setSelectedFile(null)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : formData.photo_url ? (
                      <div className="flex items-center space-x-2 p-2 border rounded-md bg-gray-50">
                        <img 
                          src={formData.photo_url} 
                          alt="Current" 
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium">Current image</p>
                          <p className="text-xs text-gray-500">Click upload to replace</p>
                        </div>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => setFormData({ ...formData, photo_url: '' })}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : null}
                    
                    <div className="flex items-center justify-center w-full">
                      <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-2 text-gray-400" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                        </div>
                        <input 
                          id="file-upload" 
                          type="file" 
                          className="hidden" 
                          accept="image/*"
                          onChange={handleFileSelect}
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Description *</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Enter project description"
                    rows={4}
                  />
                  {formErrors.description && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.description}</p>
                  )}
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
                    disabled={actionLoading === 'create' || actionLoading === 'update' || uploading}
                  >
                    {actionLoading === 'create' || actionLoading === 'update' || uploading ? (
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                    ) : null}
                    {uploading ? 'Uploading...' : isEditMode ? 'Update' : 'Create'} Project
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
            <FolderOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{projects.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projects with Photos</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{projects.filter(p => p.photo_url).length}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Projects</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Projects Table */}
      <Card>
        <CardHeader>
          <CardTitle>Projects ({filteredProjects.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {filteredProjects.length === 0 ? (
            <div className="text-center py-8">
              <FolderOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No projects found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Image</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Items Supplied</TableHead>
                    <TableHead>Brands</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProjects.map((project) => (
                    <TableRow key={project.id}>
                      <TableCell>
                        {project.photo_url ? (
                          <img 
                            src={project.photo_url} 
                            alt={project.title}
                            className="w-12 h-12 object-cover rounded"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                            <Package className="h-6 w-6 text-gray-400" />
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="font-medium">
                        {project.title}
                      </TableCell>
                      <TableCell>{project.location || 'N/A'}</TableCell>
                      <TableCell>
                        {project.items_supplied.length > 0 ? project.items_supplied.join(', ') : 'N/A'}
                      </TableCell>
                      <TableCell>
                        {project.brands.length > 0 ? project.brands.join(', ') : 'N/A'}
                      </TableCell>
                      <TableCell>
                        {formatDate(project.created_at)}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(project)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(project)}
                            disabled={actionLoading === project.id}
                          >
                            {actionLoading === project.id ? (
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