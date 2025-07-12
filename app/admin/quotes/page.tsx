'use client';

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  FileText, 
  Search, 
  Eye, 
  Trash2, 
  CheckCircle, 
  AlertCircle,
  Clock,
  RefreshCw,
  Building,
  Phone,
  Mail,
  Calendar,
  User
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  project_description: string;
  budget_range: string | null;
  timeline: string | null;
  is_processed: boolean;
  created_at: string;
}

export default function QuotesAdmin() {
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [filteredQuotes, setFilteredQuotes] = useState<QuoteRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'processed' | 'pending'>('all');
  const [selectedQuote, setSelectedQuote] = useState<QuoteRequest | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  
  const { toast } = useToast();
  const supabase = createClient();

  useEffect(() => {
    fetchQuotes();
  }, []);

  useEffect(() => {
    filterQuotes();
  }, [quotes, searchQuery, filterStatus]);

  const fetchQuotes = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('quote_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setQuotes(data || []);
    } catch (err) {
      console.error('Error fetching quotes:', err);
      setError('Failed to load quote requests');
    } finally {
      setLoading(false);
    }
  };

  const filterQuotes = () => {
    let filtered = quotes;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(quote => 
        quote.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quote.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quote.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        quote.project_description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply status filter
    if (filterStatus !== 'all') {
      filtered = filtered.filter(quote => 
        filterStatus === 'processed' ? quote.is_processed : !quote.is_processed
      );
    }

    setFilteredQuotes(filtered);
  };

  const markAsProcessed = async (id: string) => {
    try {
      setActionLoading(id);
      
      const { error } = await supabase
        .from('quote_requests')
        .update({ is_processed: true })
        .eq('id', id);

      if (error) throw error;

      // Update local state
      setQuotes(quotes.map(quote => 
        quote.id === id ? { ...quote, is_processed: true } : quote
      ));

      if (selectedQuote?.id === id) {
        setSelectedQuote({ ...selectedQuote, is_processed: true });
      }

      toast({
        title: "Success",
        description: "Quote request marked as processed",
      });
    } catch (err) {
      console.error('Error marking as processed:', err);
      toast({
        title: "Error",
        description: "Failed to mark quote request as processed",
        variant: "destructive",
      });
    } finally {
      setActionLoading(null);
    }
  };

  const deleteQuote = async (id: string) => {
    if (!confirm('Are you sure you want to delete this quote request?')) {
      return;
    }

    try {
      setActionLoading(id);
      
      const { error } = await supabase
        .from('quote_requests')
        .delete()
        .eq('id', id);

      if (error) throw error;

      // Update local state
      setQuotes(quotes.filter(quote => quote.id !== id));

      if (selectedQuote?.id === id) {
        setSelectedQuote(null);
      }

      toast({
        title: "Success",
        description: "Quote request deleted successfully",
      });
    } catch (err) {
      console.error('Error deleting quote:', err);
      toast({
        title: "Error",
        description: "Failed to delete quote request",
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

  const getStatusBadge = (isProcessed: boolean) => {
    return isProcessed ? (
      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-800">
        <CheckCircle className="h-3 w-3 mr-1" />
        Processed
      </span>
    ) : (
      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800">
        <Clock className="h-3 w-3 mr-1" />
        Pending
      </span>
    );
  };

  const pendingCount = quotes.filter(q => !q.is_processed).length;

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
        <Button onClick={fetchQuotes} className="mt-4">
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
          <h1 className="text-3xl font-bold text-gray-900">Quote Requests</h1>
          <p className="mt-2 text-gray-600">
            Manage customer quote requests and proposals
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={fetchQuotes}
            disabled={loading}
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{quotes.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{pendingCount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Processed</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{quotes.length - pendingCount}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Requests</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search quote requests..."
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
                variant={filterStatus === 'pending' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('pending')}
              >
                Pending ({pendingCount})
              </Button>
              <Button
                variant={filterStatus === 'processed' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('processed')}
              >
                Processed ({quotes.length - pendingCount})
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quote Requests Table */}
      <Card>
        <CardHeader>
          <CardTitle>Quote Requests ({filteredQuotes.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {filteredQuotes.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No quote requests found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Status</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredQuotes.map((quote) => (
                    <TableRow key={quote.id}>
                      <TableCell>
                        {getStatusBadge(quote.is_processed)}
                      </TableCell>
                      <TableCell className="font-medium">
                        {quote.name}
                      </TableCell>
                      <TableCell>
                        {quote.company || 'N/A'}
                      </TableCell>
                      <TableCell>{quote.email}</TableCell>
                      <TableCell>
                        {formatDate(quote.created_at)}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setSelectedQuote(quote)}
                              >
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-3xl">
                              <DialogHeader>
                                <DialogTitle>Quote Request Details</DialogTitle>
                              </DialogHeader>
                              {selectedQuote && (
                                <div className="space-y-6">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                      <label className="text-sm font-medium text-gray-700 flex items-center">
                                        <User className="h-4 w-4 mr-1" />
                                        Name
                                      </label>
                                      <p className="mt-1 font-medium">{selectedQuote.name}</p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-700 flex items-center">
                                        <Mail className="h-4 w-4 mr-1" />
                                        Email
                                      </label>
                                      <p className="mt-1">{selectedQuote.email}</p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-700 flex items-center">
                                        <Building className="h-4 w-4 mr-1" />
                                        Company
                                      </label>
                                      <p className="mt-1">{selectedQuote.company || 'Not specified'}</p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-700 flex items-center">
                                        <Phone className="h-4 w-4 mr-1" />
                                        Phone
                                      </label>
                                      <p className="mt-1">{selectedQuote.phone || 'Not specified'}</p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-700 flex items-center">
                                        <Calendar className="h-4 w-4 mr-1" />
                                        Date
                                      </label>
                                      <p className="mt-1">{formatDate(selectedQuote.created_at)}</p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-700">Timeline</label>
                                      <p className="mt-1">{selectedQuote.timeline || 'Not specified'}</p>
                                    </div>
                                  </div>
                                  
                                  <div>
                                    <label className="text-sm font-medium text-gray-700">Project Description</label>
                                    <div className="mt-1 p-4 bg-gray-50 rounded-lg">
                                      <p className="whitespace-pre-wrap">{selectedQuote.project_description}</p>
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-center space-x-2">
                                    {getStatusBadge(selectedQuote.is_processed)}
                                    {!selectedQuote.is_processed && (
                                      <Button
                                        size="sm"
                                        onClick={() => markAsProcessed(selectedQuote.id)}
                                        disabled={actionLoading === selectedQuote.id}
                                      >
                                        {actionLoading === selectedQuote.id ? (
                                          <RefreshCw className="h-4 w-4 mr-1 animate-spin" />
                                        ) : (
                                          <CheckCircle className="h-4 w-4 mr-1" />
                                        )}
                                        Mark as Processed
                                      </Button>
                                    )}
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                          
                          {!quote.is_processed && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => markAsProcessed(quote.id)}
                              disabled={actionLoading === quote.id}
                            >
                              {actionLoading === quote.id ? (
                                <RefreshCw className="h-4 w-4 animate-spin" />
                              ) : (
                                <CheckCircle className="h-4 w-4" />
                              )}
                            </Button>
                          )}
                          
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteQuote(quote.id)}
                            disabled={actionLoading === quote.id}
                          >
                            {actionLoading === quote.id ? (
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