import { createClient } from './supabase/client';
import type { User } from '@supabase/supabase-js';

const supabase = createClient();

export interface UserProfile {
  id: string;
  user_id: string;
  role: 'admin' | 'user' | null;
  display_name: string | null;
  email: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface AuthUser extends User {
  profile?: UserProfile | null;
}

// Get user profile from Supabase
export async function getUserProfile(userId: string): Promise<UserProfile | null> {
  try {
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching user profile:', error);
      return null;
    }

    return profile;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
}

// Create user profile in Supabase
export async function createUserProfile(user: User): Promise<UserProfile> {
  try {
    const profileData = {
      user_id: user.id,
      email: user.email,
      display_name: user.user_metadata?.full_name || user.email,
      role: 'user' as const, // Default role
    };

    const { data: profile, error } = await supabase
      .from('profiles')
      .insert(profileData)
      .select()
      .single();

    if (error) {
      throw error;
    }

    return profile;
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
}

// Sign up with email/password
export async function signUp(email: string, password: string, displayName?: string) {
  try {
    if (!email || !password) {
      throw new Error('Please fill in all fields');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Please enter a valid email address');
    }

    if (password.length < 6) {
      throw new Error('Password must be at least 6 characters long');
    }

    const { data, error: signUpError } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          full_name: displayName || email,
          display_name: displayName || email,
        },
      },
    });

    if (signUpError) {
      throw signUpError;
    }

    if (!data.user) {
      throw new Error('No user returned from signup');
    }

    // Create user profile if session exists (email confirmation disabled)
    if (data.session) {
      const profile = await createUserProfile(data.user);
      return { user: data.user, profile, session: data.session };
    }

    return { user: data.user, profile: null, session: null };
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
}

// Sign in with email/password
export async function signIn(email: string, password: string) {
  try {
    if (!email || !password) {
      throw new Error('Please fill in all fields');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Please enter a valid email address');
    }

    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (signInError) {
      if (signInError.message.includes('Invalid login credentials')) {
        throw new Error('Invalid email or password');
      } else if (signInError.message.includes('Email not confirmed')) {
        throw new Error('Please confirm your email address');
      } else {
        throw new Error(signInError.message);
      }
    }

    if (!data.user) {
      throw new Error('No user returned from login');
    }

    // Get or create user profile
    let profile = await getUserProfile(data.user.id);
    
    if (!profile) {
      profile = await createUserProfile(data.user);
    }

    return { user: data.user, profile, session: data.session };
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
}

// Sign in with Google OAuth
export async function signInWithGoogle() {
  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Google sign-in error:', error);
    throw error;
  }
}

// Sign out
export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      throw error;
    }

    return true;
  } catch (error) {
    console.error('Sign out error:', error);
    throw error;
  }
}

// Get current user session
export async function getCurrentUser(): Promise<AuthUser | null> {
  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    
    if (error) {
      throw error;
    }

    if (!user) {
      return null;
    }

    const profile = await getUserProfile(user.id);
    
    return {
      ...user,
      profile,
    };
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

// Get current session
export async function getCurrentSession() {
  try {
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) {
      throw error;
    }

    return session;
  } catch (error) {
    console.error('Error getting current session:', error);
    return null;
  }
}

// Check if user is admin
export async function isAdmin(): Promise<boolean> {
  try {
    const user = await getCurrentUser();
    return user?.profile?.role === 'admin';
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
} 