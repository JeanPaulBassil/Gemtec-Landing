'use client';

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Briefcase, 
  Search, 
  Plus, 
  Edit, 
  Trash2, 
  RefreshCw,
  MapPin,
  Clock,
  DollarSign,
  AlertCircle,
  CheckCircle,
  Eye
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface JobPosition {
  id: string;
  title: string;
  description: string | null;
  location: string | null;
  employment_type: 'full-time' | 'part-time' | 'contract' | null;
  salary_range: string | null;
  requirements: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface JobPositionFormData {
  title: string;
  description: string;
  location: string;
  employment_type: string;
  salary_range: string;
  requirements: string;
  is_active: boolean;
}

const initialFormData: JobPositionFormData = {
  title: '',
  description: '',
  location: '',
  employment_type: '',
  salary_range: '',
  requirements: '',
  is_active: true,
};

export default function PositionsAdmin() {
  const [positions, setPositions] = useState<JobPosition[]>([]);
  const [filteredPositions, setFilteredPositions] = useState<JobPosition[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive'>('all');
  const [selectedPosition, setSelectedPosition] = useState<JobPosition | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState<JobPositionFormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<Partial<JobPositionFormData>>({});
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  
  const { toast } = useToast();
  const supabase = createClient();

  useEffect(() => {
    fetchPositions();
  }, []);

  useEffect(() => {
    filterPositions();
  }, [positions, searchQuery, filterStatus]);

  const fetchPositions = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('job_offerings')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setPositions(data || []);
    } catch (err) {
      console.error('Error fetching positions:', err);
      setError('Failed to load job positions');
    } finally {
      setLoading(false);
    }
  };

  const filterPositions = () => {
    let filtered = positions;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(position => 
        position.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        position.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        position.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply status filter
    if (filterStatus !== 'all') {
      filtered = filtered.filter(position => 
        filterStatus === 'active' ? position.is_active : !position.is_active
      );
    }

    setFilteredPositions(filtered);
  };

  const validateForm = (): boolean => {
    const errors: Partial<JobPositionFormData> = {};

    if (!formData.title.trim()) {
      errors.title = 'Title is required';
    }

    if (!formData.description.trim()) {
      errors.description = 'Description is required';
    }

    if (!formData.location.trim()) {
      errors.location = 'Location is required';
    }

    if (!formData.employment_type || formData.employment_type === '') {
      errors.employment_type = 'Employment type is required';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      setActionLoading('submit');
      
      const positionData = {
        title: formData.title.trim(),
        description: formData.description.trim(),
        location: formData.location.trim(),
        employment_type: formData.employment_type as 'full-time' | 'part-time' | 'contract',
        salary_range: formData.salary_range.trim() || null,
        requirements: formData.requirements.trim() || null,
        is_active: formData.is_active,
      };

      if (isEditMode && selectedPosition) {
        const { error } = await supabase
          .from('job_offerings')
          .update(positionData)
          .eq('id', selectedPosition.id);

        if (error) throw error;

        // Update local state instead of refetching
        const updatedPosition = { ...selectedPosition, ...positionData };
        setPositions(prev => prev.map(p => p.id === selectedPosition.id ? updatedPosition : p));

        toast({
          title: "Success",
          description: "Job position updated successfully",
        });
      } else {
        const { data: newPosition, error } = await supabase
          .from('job_offerings')
          .insert(positionData)
          .select('*')
          .single();

        if (error) throw error;

        // Add to local state instead of refetching
        if (newPosition) {
          setPositions(prev => [newPosition, ...prev]);
        }

        toast({
          title: "Success",
          description: "Job position created successfully",
        });
      }

      // Reset form and close dialog
      setFormData(initialFormData);
      setFormErrors({});
      setIsEditMode(false);
      setSelectedPosition(null);
      setShowDialog(false);
    } catch (err) {
      console.error('Error saving position:', err);
      toast({
        title: "Error",
        description: "Failed to save job position",
        variant: "destructive",
      });
    } finally {
      setActionLoading(null);
    }
  };

  const handleEdit = (position: JobPosition) => {
    setSelectedPosition(position);
    setFormData({
      title: position.title,
      description: position.description || '',
      location: position.location || '',
      employment_type: position.employment_type || '',
      salary_range: position.salary_range || '',
      requirements: position.requirements || '',
      is_active: position.is_active,
    });
    setFormErrors({});
    setIsEditMode(true);
    setShowDialog(true);
  };

  const handleDelete = async (position: JobPosition) => {
    if (!confirm(`Are you sure you want to delete "${position.title}"?`)) {
      return;
    }

    // Store original positions for potential rollback
    const originalPositions = positions;
    
    // Optimistic update - remove immediately
    setPositions(prev => prev.filter(p => p.id !== position.id));

    try {
      setActionLoading(position.id);
      
      const { error } = await supabase
        .from('job_offerings')
        .delete()
        .eq('id', position.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Job position deleted successfully",
      });
    } catch (err) {
      console.error('Error deleting position:', err);
      
      // Revert optimistic update on error
      setPositions(originalPositions);
      
      toast({
        title: "Error",
        description: "Failed to delete job position",
        variant: "destructive",
      });
    } finally {
      setActionLoading(null);
    }
  };

  const togglePositionStatus = async (position: JobPosition) => {
    const newStatus = !position.is_active;
    
    // Optimistic update - update UI immediately
    setPositions(prev => prev.map(p => 
      p.id === position.id ? { ...p, is_active: newStatus } : p
    ));

    try {
      setActionLoading(position.id);
      
      const { error } = await supabase
        .from('job_offerings')
        .update({ is_active: newStatus })
        .eq('id', position.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: `Job position ${position.is_active ? 'deactivated' : 'activated'} successfully`,
      });
    } catch (err) {
      console.error('Error toggling position status:', err);
      
      // Revert optimistic update on error
      setPositions(prev => prev.map(p => 
        p.id === position.id ? { ...p, is_active: !newStatus } : p
      ));
      
      toast({
        title: "Error",
        description: "Failed to update job position status",
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
      hour: '2-digit',
      minute: '2-digit',
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

  const getEmploymentTypeBadge = (type: string | null) => {
    if (!type) return <span className="text-gray-500">Not specified</span>;
    
    const colors = {
      'full-time': 'bg-blue-100 text-blue-800',
      'part-time': 'bg-yellow-100 text-yellow-800',
      'contract': 'bg-purple-100 text-purple-800',
    };
    
    return (
      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${colors[type as keyof typeof colors]}`}>
        {type.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
      </span>
    );
  };

  const activeCount = positions.filter(p => p.is_active).length;

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
        <Button onClick={fetchPositions} className="mt-4">
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
          <h1 className="text-3xl font-bold text-gray-900">Job Positions</h1>
          <p className="mt-2 text-gray-600">
            Manage job openings and career opportunities
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={fetchPositions}
            disabled={loading}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button
            onClick={() => {
              setFormData(initialFormData);
              setFormErrors({});
              setIsEditMode(false);
              setSelectedPosition(null);
              setShowDialog(true);
            }}
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Position
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Positions</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{positions.length}</div>
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
            <div className="text-2xl font-bold text-red-600">{positions.length - activeCount}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Positions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search positions..."
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
                variant={filterStatus === 'active' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('active')}
              >
                Active ({activeCount})
              </Button>
              <Button
                variant={filterStatus === 'inactive' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('inactive')}
              >
                Inactive ({positions.length - activeCount})
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Positions Table */}
      <Card>
        <CardHeader>
          <CardTitle>Job Positions ({filteredPositions.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {filteredPositions.length === 0 ? (
            <div className="text-center py-8">
              <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No job positions found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Status</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Salary</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPositions.map((position) => (
                    <TableRow key={position.id}>
                      <TableCell>
                        {getStatusBadge(position.is_active)}
                      </TableCell>
                      <TableCell className="font-medium">
                        {position.title}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                          {position.location || 'Remote'}
                        </div>
                      </TableCell>
                      <TableCell>
                        {getEmploymentTypeBadge(position.employment_type)}
                      </TableCell>
                      <TableCell>
                        {position.salary_range || 'Not specified'}
                      </TableCell>
                      <TableCell>
                        {formatDate(position.created_at)}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setSelectedPosition(position)}
                              >
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl">
                              <DialogHeader>
                                <DialogTitle>Job Position Details</DialogTitle>
                              </DialogHeader>
                              {selectedPosition && (
                                <div className="space-y-4">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                      <label className="text-sm font-medium text-gray-700">Title</label>
                                      <p className="mt-1 font-medium">{selectedPosition.title}</p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-700">Location</label>
                                      <p className="mt-1">{selectedPosition.location || 'Remote'}</p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-700">Employment Type</label>
                                      <p className="mt-1">{getEmploymentTypeBadge(selectedPosition.employment_type)}</p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-700">Salary Range</label>
                                      <p className="mt-1">{selectedPosition.salary_range || 'Not specified'}</p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-700">Status</label>
                                      <p className="mt-1">{getStatusBadge(selectedPosition.is_active)}</p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-700">Created</label>
                                      <p className="mt-1">{formatDate(selectedPosition.created_at)}</p>
                                    </div>
                                  </div>
                                  
                                  <div>
                                    <label className="text-sm font-medium text-gray-700">Description</label>
                                    <div className="mt-1 p-3 bg-gray-50 rounded-lg">
                                      <p className="whitespace-pre-wrap">{selectedPosition.description}</p>
                                    </div>
                                  </div>
                                  
                                  {selectedPosition.requirements && (
                                    <div>
                                      <label className="text-sm font-medium text-gray-700">Requirements</label>
                                      <div className="mt-1 p-3 bg-gray-50 rounded-lg">
                                        <p className="whitespace-pre-wrap">{selectedPosition.requirements}</p>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                          
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(position)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => togglePositionStatus(position)}
                            disabled={actionLoading === position.id}
                          >
                            {actionLoading === position.id ? (
                              <RefreshCw className="h-4 w-4 animate-spin" />
                            ) : position.is_active ? (
                              <AlertCircle className="h-4 w-4" />
                            ) : (
                              <CheckCircle className="h-4 w-4" />
                            )}
                          </Button>
                          
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDelete(position)}
                            disabled={actionLoading === position.id}
                          >
                            {actionLoading === position.id ? (
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

      {/* Add/Edit Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {isEditMode ? 'Edit Job Position' : 'Add New Job Position'}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className={formErrors.title ? 'border-red-500' : ''}
                />
                {formErrors.title && (
                  <p className="text-sm text-red-500 mt-1">{formErrors.title}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="location">Location *</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className={formErrors.location ? 'border-red-500' : ''}
                />
                {formErrors.location && (
                  <p className="text-sm text-red-500 mt-1">{formErrors.location}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="employment_type">Employment Type *</Label>
                <Select
                  value={formData.employment_type}
                  onValueChange={(value) => setFormData({ ...formData, employment_type: value as any })}
                >
                  <SelectTrigger className={formErrors.employment_type ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select employment type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full-time">Full Time</SelectItem>
                    <SelectItem value="part-time">Part Time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                  </SelectContent>
                </Select>
                {formErrors.employment_type && (
                  <p className="text-sm text-red-500 mt-1">{formErrors.employment_type}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="salary_range">Salary Range</Label>
                <Input
                  id="salary_range"
                  value={formData.salary_range}
                  onChange={(e) => setFormData({ ...formData, salary_range: e.target.value })}
                  placeholder="e.g., $50,000 - $70,000"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className={formErrors.description ? 'border-red-500' : ''}
              />
              {formErrors.description && (
                <p className="text-sm text-red-500 mt-1">{formErrors.description}</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="requirements">Requirements</Label>
              <Textarea
                id="requirements"
                value={formData.requirements}
                onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                rows={3}
                placeholder="List job requirements..."
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                id="is_active"
                checked={formData.is_active}
                onCheckedChange={(checked) => setFormData({ ...formData, is_active: checked })}
              />
              <Label htmlFor="is_active">Active Position</Label>
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
                disabled={actionLoading === 'submit'}
              >
                {actionLoading === 'submit' ? (
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                ) : null}
                {isEditMode ? 'Update Position' : 'Create Position'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
} 