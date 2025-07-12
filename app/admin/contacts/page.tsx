'use client';

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  MessageSquare, 
  Search, 
  Eye, 
  Trash2, 
  Mail, 
  Calendar, 
  User,
  AlertCircle,
  CheckCircle,
  Filter,
  RefreshCw
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { useToast } from "@/components/ui/use-toast";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
}

export default function ContactsAdmin() {
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'read' | 'unread'>('all');
  const [selectedContact, setSelectedContact] = useState<ContactMessage | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  
  const { toast } = useToast();
  const supabase = createClient();

  // Debug function to check user authentication and role
  const debugUserAuth = async () => {
    try {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      console.log('=== AUTH DEBUG ===');
      console.log('Session error:', sessionError);
      console.log('Session:', session);
      
      if (session) {
        console.log('User ID:', session.user.id);
        console.log('User email:', session.user.email);
        
        // Check user profile
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('user_id', session.user.id)
          .single();
          
        console.log('Profile error:', profileError);
        console.log('Profile:', profile);
        
        // Test if we can read contact messages
        const { data: contacts, error: contactsError } = await supabase
          .from('contact_messages')
          .select('count(*)')
          .single();
          
        console.log('Contacts read test error:', contactsError);
        console.log('Contacts count:', contacts);
      }
      console.log('=== END AUTH DEBUG ===');
    } catch (error) {
      console.error('Debug auth error:', error);
    }
  };

  useEffect(() => {
    fetchContacts();
    debugUserAuth(); // Add debug call
  }, []);

  useEffect(() => {
    filterContacts();
  }, [contacts, searchQuery, filterStatus]);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setContacts(data || []);
    } catch (err) {
      console.error('Error fetching contacts:', err);
      setError('Failed to load contact messages');
    } finally {
      setLoading(false);
    }
  };

  const filterContacts = () => {
    let filtered = contacts;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(contact => 
        contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.subject?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        contact.message.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply status filter
    if (filterStatus !== 'all') {
      filtered = filtered.filter(contact => 
        filterStatus === 'read' ? contact.is_read : !contact.is_read
      );
    }

    setFilteredContacts(filtered);
  };

  const markAsRead = async (id: string) => {
    try {
      setActionLoading(id);
      
      const { error } = await supabase
        .from('contact_messages')
        .update({ is_read: true })
        .eq('id', id);

      if (error) throw error;

      // Update local state
      setContacts(contacts.map(contact => 
        contact.id === id ? { ...contact, is_read: true } : contact
      ));

      if (selectedContact?.id === id) {
        setSelectedContact({ ...selectedContact, is_read: true });
      }

      toast({
        title: "Success",
        description: "Message marked as read",
      });
    } catch (err) {
      console.error('Error marking as read:', err);
      toast({
        title: "Error",
        description: "Failed to mark message as read",
        variant: "destructive",
      });
    } finally {
      setActionLoading(null);
    }
  };

  const deleteContact = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact message?')) {
      return;
    }

    try {
      setActionLoading(id);
      
      // Get current session for debugging
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
      if (sessionError) {
        console.error('Session error:', sessionError);
        throw new Error('Authentication session error');
      }
      
      if (!session) {
        console.error('No session found');
        throw new Error('No authentication session found');
      }
      
      console.log('Attempting to delete contact message with ID:', id);
      console.log('User ID:', session.user.id);
      
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Supabase delete error:', error);
        throw error;
      }

      console.log('Delete successful, updating local state');
      
      // Update local state - optimistic update
      setContacts(prev => prev.filter(contact => contact.id !== id));

      if (selectedContact?.id === id) {
        setSelectedContact(null);
      }

      toast({
        title: "Success",
        description: "Contact message deleted successfully",
      });
    } catch (err) {
      console.error('Error deleting contact:', err);
      
      // Rollback optimistic update on error
      await fetchContacts();
      
      toast({
        title: "Error", 
        description: err instanceof Error ? err.message : "Failed to delete contact message",
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

  const getStatusBadge = (isRead: boolean) => {
    return isRead ? (
      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-800">
        <CheckCircle className="h-3 w-3 mr-1" />
        Read
      </span>
    ) : (
      <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-red-100 text-red-800">
        <AlertCircle className="h-3 w-3 mr-1" />
        Unread
      </span>
    );
  };

  const unreadCount = contacts.filter(c => !c.is_read).length;

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
        <Button onClick={fetchContacts} className="mt-4">
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
          <h1 className="text-3xl font-bold text-gray-900">Contact Messages</h1>
          <p className="mt-2 text-gray-600">
            Manage and respond to customer inquiries
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={fetchContacts}
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
            <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{contacts.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unread</CardTitle>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{unreadCount}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Read</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{contacts.length - unreadCount}</div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Messages</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search messages..."
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
                variant={filterStatus === 'unread' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('unread')}
              >
                Unread ({unreadCount})
              </Button>
              <Button
                variant={filterStatus === 'read' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilterStatus('read')}
              >
                Read ({contacts.length - unreadCount})
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Messages Table */}
      <Card>
        <CardHeader>
          <CardTitle>Messages ({filteredContacts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {filteredContacts.length === 0 ? (
            <div className="text-center py-8">
              <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No messages found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Status</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredContacts.map((contact) => (
                    <TableRow key={contact.id}>
                      <TableCell>
                        {getStatusBadge(contact.is_read)}
                      </TableCell>
                      <TableCell className="font-medium">
                        {contact.name}
                      </TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell>
                        {contact.subject || 'No subject'}
                      </TableCell>
                      <TableCell>
                        {formatDate(contact.created_at)}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setSelectedContact(contact)}
                              >
                                <Eye className="h-4 w-4 mr-1" />
                                View
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl">
                              <DialogHeader>
                                <DialogTitle>Contact Message Details</DialogTitle>
                              </DialogHeader>
                              {selectedContact && (
                                <div className="space-y-4">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                      <label className="text-sm font-medium text-gray-700">Name</label>
                                      <p className="mt-1">{selectedContact.name}</p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-700">Email</label>
                                      <p className="mt-1">{selectedContact.email}</p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-700">Subject</label>
                                      <p className="mt-1">{selectedContact.subject || 'No subject'}</p>
                                    </div>
                                    <div>
                                      <label className="text-sm font-medium text-gray-700">Date</label>
                                      <p className="mt-1">{formatDate(selectedContact.created_at)}</p>
                                    </div>
                                  </div>
                                  <div>
                                    <label className="text-sm font-medium text-gray-700">Message</label>
                                    <div className="mt-1 p-3 bg-gray-50 rounded-lg">
                                      <p className="whitespace-pre-wrap">{selectedContact.message}</p>
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    {getStatusBadge(selectedContact.is_read)}
                                    {!selectedContact.is_read && (
                                      <Button
                                        size="sm"
                                        onClick={() => markAsRead(selectedContact.id)}
                                        disabled={actionLoading === selectedContact.id}
                                      >
                                        {actionLoading === selectedContact.id ? (
                                          <RefreshCw className="h-4 w-4 mr-1 animate-spin" />
                                        ) : (
                                          <CheckCircle className="h-4 w-4 mr-1" />
                                        )}
                                        Mark as Read
                                      </Button>
                                    )}
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                          
                          {!contact.is_read && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => markAsRead(contact.id)}
                              disabled={actionLoading === contact.id}
                            >
                              {actionLoading === contact.id ? (
                                <RefreshCw className="h-4 w-4 animate-spin" />
                              ) : (
                                <CheckCircle className="h-4 w-4" />
                              )}
                            </Button>
                          )}
                          
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => deleteContact(contact.id)}
                            disabled={actionLoading === contact.id}
                          >
                            {actionLoading === contact.id ? (
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