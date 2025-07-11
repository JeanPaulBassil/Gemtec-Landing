'use client';

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MessageSquare, 
  FileText, 
  Package, 
  FolderOpen, 
  Users, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Briefcase
} from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

interface DashboardStats {
  totalContacts: number;
  unreadContacts: number;
  totalQuotes: number;
  unprocessedQuotes: number;
  totalProducts: number;
  activeProducts: number;
  totalProjects: number;
  totalPositions: number;
  activePositions: number;
  totalApplications: number;
  pendingApplications: number;
  totalNews: number;
  publishedNews: number;
}

interface RecentActivity {
  id: string;
  type: 'contact' | 'quote' | 'product' | 'project';
  title: string;
  description: string;
  timestamp: string;
  status?: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalContacts: 0,
    unreadContacts: 0,
    totalQuotes: 0,
    unprocessedQuotes: 0,
    totalProducts: 0,
    activeProducts: 0,
    totalProjects: 0,
    totalPositions: 0,
    activePositions: 0,
    totalApplications: 0,
    pendingApplications: 0,
    totalNews: 0,
    publishedNews: 0,
  });
  
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const supabase = createClient();

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch stats in parallel
      const [
        contactsResult,
        quotesResult,
        productsResult,
        projectsResult,
        positionsResult,
        applicationsResult,
        newsResult,
        recentContactsResult,
        recentQuotesResult,
      ] = await Promise.all([
        supabase
          .from('contact_messages')
          .select('id, is_read', { count: 'exact' }),
        supabase
          .from('quote_requests')
          .select('id, is_processed', { count: 'exact' }),
        supabase
          .from('products')
          .select('id, is_active', { count: 'exact' }),
        supabase
          .from('projects')
          .select('id', { count: 'exact' }),
        supabase
          .from('job_offerings')
          .select('id, is_active', { count: 'exact' }),
        supabase
          .from('job_applications')
          .select('id, status', { count: 'exact' }),
        supabase
          .from('news_articles')
          .select('id, is_published', { count: 'exact' }),
        supabase
          .from('contact_messages')
          .select('id, name, email, subject, created_at, is_read')
          .order('created_at', { ascending: false })
          .limit(5),
        supabase
          .from('quote_requests')
          .select('id, name, email, project_description, created_at, is_processed')
          .order('created_at', { ascending: false })
          .limit(5),
      ]);

      // Process stats
      const contacts = contactsResult.data || [];
      const quotes = quotesResult.data || [];
      const products = productsResult.data || [];
      const projects = projectsResult.data || [];
      const positions = positionsResult.data || [];
      const applications = applicationsResult.data || [];
      const news = newsResult.data || [];

      setStats({
        totalContacts: contactsResult.count || 0,
        unreadContacts: contacts.filter((c: any) => !c.is_read).length,
        totalQuotes: quotesResult.count || 0,
        unprocessedQuotes: quotes.filter((q: any) => !q.is_processed).length,
        totalProducts: productsResult.count || 0,
        activeProducts: products.filter((p: any) => p.is_active).length,
        totalProjects: projectsResult.count || 0,
        totalPositions: positionsResult.count || 0,
        activePositions: positions.filter((p: any) => p.is_active).length,
        totalApplications: applicationsResult.count || 0,
        pendingApplications: applications.filter((a: any) => a.status === 'submitted').length,
        totalNews: newsResult.count || 0,
        publishedNews: news.filter((n: any) => n.is_published).length,
      });

      // Process recent activity
      const recentContacts = (recentContactsResult.data || []).map((contact: any) => ({
        id: contact.id,
        type: 'contact' as const,
        title: `New message from ${contact.name}`,
        description: contact.subject || 'No subject',
        timestamp: contact.created_at,
        status: contact.is_read ? 'read' : 'unread',
      }));

      const recentQuotes = (recentQuotesResult.data || []).map((quote: any) => ({
        id: quote.id,
        type: 'quote' as const,
        title: `Quote request from ${quote.name}`,
        description: quote.project_description.substring(0, 100) + '...',
        timestamp: quote.created_at,
        status: quote.is_processed ? 'processed' : 'pending',
      }));

      // Combine and sort recent activity
      const allActivity = [...recentContacts, ...recentQuotes]
        .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
        .slice(0, 10);

      setRecentActivity(allActivity);
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      setError('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'contact':
        return <MessageSquare className="h-4 w-4" />;
      case 'quote':
        return <FileText className="h-4 w-4" />;
      case 'product':
        return <Package className="h-4 w-4" />;
      case 'project':
        return <FolderOpen className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'unread':
        return <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-red-100 text-red-800">Unread</span>;
      case 'read':
        return <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800">Read</span>;
      case 'pending':
        return <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800">Pending</span>;
      case 'processed':
        return <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-800">Processed</span>;
      default:
        return <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800">{status}</span>;
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
        <Button onClick={fetchDashboardData} className="mt-4">
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="mt-2 text-gray-600">
          Welcome back! Here's an overview of your business activities.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contact Messages</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalContacts}</div>
            <p className="text-xs text-muted-foreground">
              {stats.unreadContacts} unread
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Quote Requests</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalQuotes}</div>
            <p className="text-xs text-muted-foreground">
              {stats.unprocessedQuotes} pending
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalProducts}</div>
            <p className="text-xs text-muted-foreground">
              {stats.activeProducts} active
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Projects</CardTitle>
            <FolderOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalProjects}</div>
            <p className="text-xs text-muted-foreground">
              Total projects
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Job Positions</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalPositions}</div>
            <p className="text-xs text-muted-foreground">
              {stats.activePositions} active
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Applications</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalApplications}</div>
            <p className="text-xs text-muted-foreground">
              {stats.pendingApplications} pending
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">News Articles</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalNews}</div>
            <p className="text-xs text-muted-foreground">
              {stats.publishedNews} published
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>
            Latest contacts, quotes, and updates
          </CardDescription>
        </CardHeader>
        <CardContent>
          {recentActivity.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              No recent activity to display
            </p>
          ) : (
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex-shrink-0">
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{activity.title}</p>
                    <p className="text-sm text-gray-600 truncate">
                      {activity.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    {activity.status && getStatusBadge(activity.status)}
                    <span className="text-sm text-gray-500">
                      {formatDate(activity.timestamp)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Link href="/admin/contacts">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <MessageSquare className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <p className="font-medium">View Contacts</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/quotes">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <FileText className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <p className="font-medium">View Quotes</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/products">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Package className="h-8 w-8 mx-auto mb-2 text-purple-600" />
              <p className="font-medium">Manage Products</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/projects">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <FolderOpen className="h-8 w-8 mx-auto mb-2 text-orange-600" />
              <p className="font-medium">Manage Projects</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/positions">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Briefcase className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
              <p className="font-medium">Manage Positions</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/applications">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-pink-600" />
              <p className="font-medium">View Applications</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/admin/news">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <FileText className="h-8 w-8 mx-auto mb-2 text-indigo-600" />
              <p className="font-medium">Manage News</p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
} 