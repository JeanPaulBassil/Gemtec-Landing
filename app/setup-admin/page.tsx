'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { createClient } from '@/lib/supabase/client';
import { signUp, signIn } from '@/lib/auth';
import { useRouter } from 'next/navigation';

export default function SetupAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [loading, setLoading] = useState(false);
  const [existingAdmins, setExistingAdmins] = useState<any[]>([]);
  const [checkingAdmins, setCheckingAdmins] = useState(true);
  
  const { toast } = useToast();
  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    checkExistingAdmins();
  }, []);

  const checkExistingAdmins = async () => {
    try {
      const { data: admins, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('role', 'admin');

      if (error) {
        console.error('Error checking admins:', error);
      } else {
        setExistingAdmins(admins || []);
      }
    } catch (error) {
      console.error('Error checking admins:', error);
    } finally {
      setCheckingAdmins(false);
    }
  };

  const handleCreateAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password || !displayName) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true);
      
      // Try to sign up first
      const { user } = await signUp(email, password, displayName);
      
      if (user) {
        // Update the user's profile to admin role
        const { error: updateError } = await supabase
          .from('profiles')
          .update({ role: 'admin' })
          .eq('user_id', user.id);

        if (updateError) {
          console.error('Error updating profile:', updateError);
          throw updateError;
        }

        toast({
          title: "Success",
          description: "Admin account created successfully!",
        });

        // Sign in and redirect to admin
        await signIn(email, password);
        router.push('/admin');
      }
    } catch (error: any) {
      console.error('Error creating admin:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to create admin account",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleMakeAdmin = async (userId: string) => {
    try {
      setLoading(true);
      
      const { error } = await supabase
        .from('profiles')
        .update({ role: 'admin' })
        .eq('user_id', userId);

      if (error) {
        throw error;
      }

      toast({
        title: "Success",
        description: "User promoted to admin successfully!",
      });

      await checkExistingAdmins();
    } catch (error: any) {
      console.error('Error promoting user:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to promote user to admin",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (checkingAdmins) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Admin Setup</CardTitle>
            <CardDescription>
              Set up admin access for your Gemtec application
            </CardDescription>
          </CardHeader>
          <CardContent>
            {existingAdmins.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Existing Admins</h3>
                <div className="space-y-2">
                  {existingAdmins.map((admin) => (
                    <div key={admin.id} className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <p className="font-medium">{admin.display_name}</p>
                      <p className="text-sm text-gray-600">{admin.email}</p>
                    </div>
                  ))}
                </div>
                <Button 
                  onClick={() => router.push('/admin')}
                  className="mt-4"
                >
                  Go to Admin Dashboard
                </Button>
              </div>
            )}

            <form onSubmit={handleCreateAdmin} className="space-y-4">
              <h3 className="text-lg font-semibold">Create New Admin Account</h3>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@gemtec.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter a secure password"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="displayName">Display Name</Label>
                <Input
                  id="displayName"
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Admin User"
                  required
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? 'Creating Admin...' : 'Create Admin Account'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 