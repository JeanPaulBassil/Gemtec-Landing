'use client';

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Users, 
  Search, 
  Eye, 
  Trash2, 
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  Calendar,
  FileText,
  Download,
  Briefcase
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface JobApplication {
  id: string;
  job_offering_id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string | null;
  current_location: string | null;
  years_of_experience: number | null;
  highest_education: string | null;
  cover_letter: string | null;
  resume_url: string | null;
  status: 'submitted' | 'under_review' | 'interviewed' | 'hired' | 'rejected';
  created_at: string;
  updated_at: string;
  job_offering?: {
    id: string;
    title: string;
  };
}

export default function ApplicationsAdmin() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'submitted' | 'under_review' | 'interviewed' | 'hired' | 'rejected'>('all');
  const [selectedApplication, setSelectedApplication] = useState<JobApplication | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  
  const { toast } = useToast();
  const supabase = createClient();

  useEffect(() => {
    fetchApplications();
  }, []);

  useEffect(() => {
    filterApplications();
  }, [applications, searchQuery, filterStatus]);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('job_applications')
        .select(`
          *,
          job_offering:job_offerings(id, title)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setApplications(data || []);
    } catch (err) {
      console.error('Error fetching applications:', err);
      setError('Failed to load job applications');
    } finally {
      setLoading(false);
    }
  };

  const filterApplications = () => {
    let filtered = applications;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(application => 
        application.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        application.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        application.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        application.job_offering?.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        application.current_location?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply status filter
    if (filterStatus !== 'all') {
      filtered = filtered.filter(application => application.status === filterStatus);
    }

    setFilteredApplications(filtered);
  };

  const updateApplicationStatus = async (id: string, status: JobApplication['status']) => {
    try {
      setActionLoading(id);
      
      const { error } = await supabase
        .from('job_applications')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      // Update local state
      setApplications(applications.map(app => 
        app.id === id ? { ...app, status } : app
      ));

      if (selectedApplication?.id === id) {
        setSelectedApplication({ ...selectedApplication, status });
      }

      toast({
        title: "Success",
        description: `Application status updated to ${status.replace('_', ' ')}`,
      });
    } catch (err) {
      console.error('Error updating application status:', err);
      toast({
        title: "Error",
        description: "Failed to update application status",
        variant: "destructive",
      });
    } finally {
      setActionLoading(null);
    }
  };

  const deleteApplication = async (id: string) => {
    if (!confirm('Are you sure you want to delete this application?')) {
      return;
    }

    try {
      setActionLoading(id);
      
      console.log('Attempting to delete application with ID:', id);
      
      const { data, error } = await supabase
        .from('job_applications')
        .delete()
        .eq('id', id)
        .select(); // Add select to see what was actually deleted

      if (error) {
        console.error('Supabase delete error:', error);
        throw error;
      }

      console.log('Delete response:', data);

      // Update local state
      setApplications(applications.filter(app => app.id !== id));

      if (selectedApplication?.id === id) {
        setSelectedApplication(null);
      }

      toast({
        title: "Success",
        description: "Application deleted successfully",
      });
    } catch (err: any) {
      console.error('Error deleting application:', err);
      
      let errorMessage = "Failed to delete application";
      
      if (err.message) {
        errorMessage = err.message;
      } else if (err.details) {
        errorMessage = err.details;
      }
      
      toast({
        title: "Error",
        description: errorMessage,
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

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      submitted: { color: 'bg-blue-100 text-blue-800', icon: Clock },
      under_review: { color: 'bg-yellow-100 text-yellow-800', icon: AlertCircle },
      interviewed: { color: 'bg-purple-100 text-purple-800', icon: User },
      hired: { color: 'bg-green-100 text-green-800', icon: CheckCircle },
      rejected: { color: 'bg-red-100 text-red-800', icon: AlertCircle },
    };

    const config = statusConfig[status as keyof typeof statusConfig];
    const Icon = config.icon;

    return (
      <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${config.color}`}>
        <Icon className="h-3 w-3 mr-1" />
        {status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
      </span>
    );
  };

  const getStatusCount = (status: string) => {
    return applications.filter(app => app.status === status).length;
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
        <Button onClick={fetchApplications} className="mt-4">
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
          <h1 className="text-3xl font-bold text-gray-900">Job Applications</h1>
          <p className="mt-2 text-gray-600">
            Review and manage job applications from candidates
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={fetchApplications}
            disabled={loading}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applications.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Submitted</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{getStatusCount('submitted')}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Under Review</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{getStatusCount('under_review')}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interviewed</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{getStatusCount('interviewed')}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hired</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{getStatusCount('hired')}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Applications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search applications..."
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
                variant={filterStatus === 'submitted' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('submitted')}
              >
                Submitted ({getStatusCount('submitted')})
              </Button>
              <Button
                variant={filterStatus === 'under_review' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('under_review')}
              >
                Under Review ({getStatusCount('under_review')})
              </Button>
              <Button
                variant={filterStatus === 'interviewed' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('interviewed')}
              >
                Interviewed ({getStatusCount('interviewed')})
              </Button>
              <Button
                variant={filterStatus === 'hired' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('hired')}
              >
                Hired ({getStatusCount('hired')})
              </Button>
              <Button
                variant={filterStatus === 'rejected' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('rejected')}
              >
                Rejected ({getStatusCount('rejected')})
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Applications Table */}
      <Card>
        <CardHeader>
          <CardTitle>Job Applications ({filteredApplications.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {filteredApplications.length === 0 ? (
            <div className="text-center py-8">
              <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No applications found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Status</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Experience</TableHead>
                    <TableHead>Resume</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredApplications.map((application) => (
                    <TableRow key={application.id}>
                      <TableCell>
                        {getStatusBadge(application.status)}
                      </TableCell>
                      <TableCell className="font-medium">
                        {application.first_name} {application.last_name}
                      </TableCell>
                      <TableCell>
                        {application.job_offering?.title || 'Unknown Position'}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 mr-1 text-gray-400" />
                          {application.email}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                          {application.current_location || 'Not specified'}
                        </div>
                      </TableCell>
                      <TableCell>
                        {application.years_of_experience ? `${application.years_of_experience} years` : 'Not specified'}
                      </TableCell>
                      <TableCell>
                        {application.resume_url ? (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => window.open(application.resume_url!, '_blank')}
                          >
                            <Download className="h-4 w-4 mr-1" />
                            Resume
                          </Button>
                        ) : (
                          <span className="text-sm text-gray-500">No resume</span>
                        )}
                      </TableCell>
                      <TableCell>
                        {formatDate(application.created_at)}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setSelectedApplication(application)}
                              >
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-4xl">
                              <DialogHeader>
                                <DialogTitle>Application Details</DialogTitle>
                              </DialogHeader>
                              {selectedApplication && (
                                <div className="space-y-6">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                      <label className="text-sm font-medium text-gray-700 flex items-center">
                                        <User className="h-4 w-4 mr-1" />
                                        Full Name
                                      </label>
                                      <p className="mt-1 font-medium">{selectedApplication.first_name} {selectedApplication.last_name}</p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-700 flex items-center">
                                        <Mail className="h-4 w-4 mr-1" />
                                        Email
                                      </label>
                                      <p className="mt-1">{selectedApplication.email}</p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-700 flex items-center">
                                        <Phone className="h-4 w-4 mr-1" />
                                        Phone
                                      </label>
                                      <p className="mt-1">{selectedApplication.phone_number || 'Not provided'}</p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-700 flex items-center">
                                        <MapPin className="h-4 w-4 mr-1" />
                                        Location
                                      </label>
                                      <p className="mt-1">{selectedApplication.current_location || 'Not specified'}</p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-700 flex items-center">
                                        <Clock className="h-4 w-4 mr-1" />
                                        Experience
                                      </label>
                                      <p className="mt-1">{selectedApplication.years_of_experience ? `${selectedApplication.years_of_experience} years` : 'Not specified'}</p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-700 flex items-center">
                                        <GraduationCap className="h-4 w-4 mr-1" />
                                        Education
                                      </label>
                                      <p className="mt-1">{selectedApplication.highest_education || 'Not specified'}</p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-700 flex items-center">
                                        <Briefcase className="h-4 w-4 mr-1" />
                                        Position
                                      </label>
                                      <p className="mt-1">{selectedApplication.job_offering?.title || 'Unknown Position'}</p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-700 flex items-center">
                                        <Calendar className="h-4 w-4 mr-1" />
                                        Applied
                                      </label>
                                      <p className="mt-1">{formatDate(selectedApplication.created_at)}</p>
                                    </div>
                                  </div>
                                  
                                  {selectedApplication.cover_letter && (
                                    <div>
                                      <label className="text-sm font-medium text-gray-700 flex items-center">
                                        <FileText className="h-4 w-4 mr-1" />
                                        Cover Letter
                                      </label>
                                      <div className="mt-1 p-3 bg-gray-50 rounded-lg">
                                        <p className="whitespace-pre-wrap">{selectedApplication.cover_letter}</p>
                                      </div>
                                    </div>
                                  )}
                                  
                                  {selectedApplication.resume_url && (
                                    <div>
                                      <label className="text-sm font-medium text-gray-700 flex items-center">
                                        <FileText className="h-4 w-4 mr-1" />
                                        Resume
                                      </label>
                                      <div className="mt-1">
                                        <Button
                                          variant="outline"
                                          size="sm"
                                          onClick={() => window.open(selectedApplication.resume_url!, '_blank')}
                                        >
                                          <Download className="h-4 w-4 mr-1" />
                                          Download Resume
                                        </Button>
                                      </div>
                                    </div>
                                  )}
                                  
                                  <div className="flex items-center space-x-2">
                                    <span className="text-sm font-medium text-gray-700">Status:</span>
                                    {getStatusBadge(selectedApplication.status)}
                                    <Select
                                      value={selectedApplication.status}
                                      onValueChange={(value) => updateApplicationStatus(selectedApplication.id, value as JobApplication['status'])}
                                    >
                                      <SelectTrigger className="w-48">
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="submitted">Submitted</SelectItem>
                                        <SelectItem value="under_review">Under Review</SelectItem>
                                        <SelectItem value="interviewed">Interviewed</SelectItem>
                                        <SelectItem value="hired">Hired</SelectItem>
                                        <SelectItem value="rejected">Rejected</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                          
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteApplication(application.id)}
                            disabled={actionLoading === application.id}
                          >
                            {actionLoading === application.id ? (
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