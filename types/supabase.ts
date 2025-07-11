export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          user_id: string;
          role: "admin" | "user" | null;
          display_name: string | null;
          email: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          role?: "admin" | "user" | null;
          display_name?: string | null;
          email?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          role?: "admin" | "user" | null;
          display_name?: string | null;
          email?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "profiles_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      projects: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          photo_url: string | null;
          items_supplied: string[];
          location: string | null;
          brands: string[];
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string | null;
          photo_url?: string | null;
          items_supplied?: string[];
          location?: string | null;
          brands?: string[];
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string | null;
          photo_url?: string | null;
          items_supplied?: string[];
          location?: string | null;
          brands?: string[];
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      job_offerings: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          location: string | null;
          employment_type: "full-time" | "part-time" | "contract" | null;
          salary_range: string | null;
          requirements: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description?: string | null;
          location?: string | null;
          employment_type?: "full-time" | "part-time" | "contract" | null;
          salary_range?: string | null;
          requirements?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string | null;
          location?: string | null;
          employment_type?: "full-time" | "part-time" | "contract" | null;
          salary_range?: string | null;
          requirements?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      contact_messages: {
        Row: {
          id: string;
          name: string;
          email: string;
          subject: string | null;
          message: string;
          created_at: string;
          is_read: boolean;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          subject?: string | null;
          message: string;
          created_at?: string;
          is_read?: boolean;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          subject?: string | null;
          message?: string;
          created_at?: string;
          is_read?: boolean;
        };
        Relationships: [];
      };
      quote_requests: {
        Row: {
          id: string;
          name: string;
          email: string;
          company: string | null;
          phone: string | null;
          project_description: string;
          budget_range: string | null;
          timeline: string | null;
          created_at: string;
          is_processed: boolean;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          company?: string | null;
          phone?: string | null;
          project_description: string;
          budget_range?: string | null;
          timeline?: string | null;
          created_at?: string;
          is_processed?: boolean;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          company?: string | null;
          phone?: string | null;
          project_description?: string;
          budget_range?: string | null;
          timeline?: string | null;
          created_at?: string;
          is_processed?: boolean;
        };
        Relationships: [];
      };
      job_applications: {
        Row: {
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
          status: "submitted" | "under_review" | "interviewed" | "hired" | "rejected";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          job_offering_id: string;
          first_name: string;
          last_name: string;
          email: string;
          phone_number?: string | null;
          current_location?: string | null;
          years_of_experience?: number | null;
          highest_education?: string | null;
          cover_letter?: string | null;
          resume_url?: string | null;
          status?: "submitted" | "under_review" | "interviewed" | "hired" | "rejected";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          job_offering_id?: string;
          first_name?: string;
          last_name?: string;
          email?: string;
          phone_number?: string | null;
          current_location?: string | null;
          years_of_experience?: number | null;
          highest_education?: string | null;
          cover_letter?: string | null;
          resume_url?: string | null;
          status?: "submitted" | "under_review" | "interviewed" | "hired" | "rejected";
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "job_applications_job_offering_id_fkey";
            columns: ["job_offering_id"];
            referencedRelation: "job_offerings";
            referencedColumns: ["id"];
          },
        ];
      };
      news_articles: {
        Row: {
          id: string;
          title: string;
          slug: string;
          content: string;
          excerpt: string | null;
          featured_image_url: string | null;
          author_id: string | null;
          is_published: boolean;
          published_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          content: string;
          excerpt?: string | null;
          featured_image_url?: string | null;
          author_id?: string | null;
          is_published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          content?: string;
          excerpt?: string | null;
          featured_image_url?: string | null;
          author_id?: string | null;
          is_published?: boolean;
          published_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "news_articles_author_id_fkey";
            columns: ["author_id"];
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
      product_categories: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          parent_id: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          parent_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          parent_id?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "product_categories_parent_id_fkey";
            columns: ["parent_id"];
            referencedRelation: "product_categories";
            referencedColumns: ["id"];
          },
        ];
      };
      products: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          specifications: string | null;
          image_urls: string[];
          category_id: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          specifications?: string | null;
          image_urls?: string[];
          category_id?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          specifications?: string | null;
          image_urls?: string[];
          category_id?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey";
            columns: ["category_id"];
            referencedRelation: "product_categories";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
} 