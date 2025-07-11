"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Fan, Gauge, Wind, Box, Waves, Shield, Layout, Speaker, ChevronRight, ArrowUpRight, Tag } from "lucide-react"
import { FadeInStagger, ScrollReveal, HoverScale } from "@/components/ui/animations"
import { createClient } from "@/lib/supabase/client"
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link"

interface ProductCategory {
  id: string;
  name: string;
  description: string | null;
  parent_id: string | null;
  created_at: string;
  updated_at: string;
  product_count?: number;
  slug: string;
}

// Icon mapping for categories
const getIconForCategory = (categoryName: string) => {
  const name = categoryName.toLowerCase();
  if (name.includes('fan')) return Fan;
  if (name.includes('grille') || name.includes('damper') || name.includes('air')) return Wind;
  if (name.includes('pir') || name.includes('panel')) return Layout;
  if (name.includes('duct') || name.includes('flexible')) return Waves;
  if (name.includes('insulation')) return Shield;
  if (name.includes('curtain')) return Box;
  if (name.includes('sound') || name.includes('attenuator')) return Speaker;
  if (name.includes('accessory') || name.includes('equipment')) return Gauge;
  return Tag; // Default icon
};

export default function ProductCategories() {
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const { toast } = useToast();
  const supabase = createClient();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch root categories (no parent)
      const { data: categoriesData, error: categoriesError } = await supabase
        .from('product_categories')
        .select('*')
        .is('parent_id', null)
        .order('name');

      if (categoriesError) throw categoriesError;

      // Get product counts for each category
      const { data: productCounts, error: productCountsError } = await supabase
        .from('products')
        .select('category_id')
        .eq('is_active', true)
        .not('category_id', 'is', null);

      if (productCountsError) throw productCountsError;

      // Count products per category
      const counts = productCounts.reduce((acc, product) => {
        if (product.category_id) {
          acc[product.category_id] = (acc[product.category_id] || 0) + 1;
        }
        return acc;
      }, {} as Record<string, number>);

      // Add product counts and slugs to categories
      const categoriesWithData = (categoriesData || []).map(category => ({
        ...category,
        product_count: counts[category.id] || 0,
        slug: category.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
      }));

      setCategories(categoriesWithData);
    } catch (err) {
      console.error('Error fetching categories:', err);
      setError('Failed to load product categories');
      toast({
        title: "Error",
        description: "Failed to load product categories. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="py-24 section-accent">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight">Our Product Range</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Comprehensive HVAC solutions tailored for various industrial, commercial, and residential applications.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-48 bg-gray-200 animate-pulse rounded-xl"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 section-accent">
        <div className="container">
          <div className="text-center">
            <p className="text-red-600">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 section-accent">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Our Product Range</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive HVAC solutions tailored for various industrial, commercial, and residential applications.
            </p>
          </div>
        </ScrollReveal>
        <FadeInStagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = getIconForCategory(category.name);
              return (
                <HoverScale key={category.id}>
                  <Link href={`/products?category=${category.id}`} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl group/card">
                    <Card className="h-full border-0 bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover/card:border-primary/20">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-3 bg-primary/10 rounded-lg">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover/card:text-primary transition-colors" />
                        </div>
                        <CardTitle className="text-lg leading-tight group-hover/card:text-primary transition-colors">
                          {category.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pb-4">
                        <CardDescription className="text-sm leading-relaxed">
                          {category.description || `High-quality ${category.name.toLowerCase()} solutions for your HVAC needs.`}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <div className="flex items-center justify-between w-full">
                          <span className="text-sm text-muted-foreground">
                            {category.product_count} product{category.product_count !== 1 ? 's' : ''}
                          </span>
                          <ChevronRight className="h-4 w-4 text-muted-foreground group-hover/card:text-primary group-hover/card:translate-x-1 transition-all" />
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                </HoverScale>
              );
            })}
          </div>
        </FadeInStagger>
      </div>
    </section>
  );
}

