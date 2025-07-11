import { notFound } from "next/navigation"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal, FadeInStagger, HoverScale } from "@/components/ui/animations"
import { Check, Download, FileText, ArrowRight, Package, Tag, Calendar, Eye } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"

interface Product {
  id: string;
  name: string;
  description: string | null;
  specifications: string | null;
  image_urls: string[];
  category_id: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  product_categories?: {
    id: string;
    name: string;
  } | null;
}

interface ProductPageProps {
  params: {
    slug: string;
  };
}

async function getProduct(slug: string): Promise<Product | null> {
  const supabase = await createClient();
  
  // First get all products and find the one with matching slug
  const { data: products, error } = await supabase
    .from('products')
    .select(`
      *,
      product_categories (
        id,
        name
      )
    `)
    .eq('is_active', true);

  if (error) {
    console.error('Error fetching product:', error);
    return null;
  }

  // Find product by slug (generated from name)
  const product = products?.find((p: any) => 
    p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug
  );

  return product || null;
}

async function getRelatedProducts(categoryId: string | null, currentProductId: string): Promise<Product[]> {
  if (!categoryId) return [];
  
  const supabase = await createClient();
  
  const { data: products, error } = await supabase
    .from('products')
    .select(`
      *,
      product_categories (
        id,
        name
      )
    `)
    .eq('category_id', categoryId)
    .eq('is_active', true)
    .neq('id', currentProductId)
    .limit(4);

  if (error) {
    console.error('Error fetching related products:', error);
    return [];
  }

  return products || [];
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug);
  
  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(product.category_id, product.id);

  // Parse specifications
  let specifications = {};
  try {
    if (product.specifications) {
      specifications = JSON.parse(product.specifications);
    }
  } catch (error) {
    console.error('Error parsing specifications:', error);
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <section className="relative py-24 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container relative">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Link href="/products" className="text-blue-200 hover:text-white transition-colors">
                Products
              </Link>
              <span className="text-blue-300">/</span>
              {product.product_categories && (
                <>
                  <span className="text-blue-200">{product.product_categories.name}</span>
                  <span className="text-blue-300">/</span>
                </>
              )}
              <span className="text-white">{product.name}</span>
            </div>
            
            {product.product_categories && (
              <Badge variant="secondary" className="mb-6">
                <Tag className="h-3 w-3 mr-1" />
                {product.product_categories.name}
              </Badge>
            )}
            
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white mb-6">
              {product.name}
            </h1>
            
            {product.description && (
              <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
                {product.description}
              </p>
            )}
            
            <div className="flex items-center gap-4 mt-8 text-sm text-blue-200">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Added {formatDate(product.created_at)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                <span>{product.image_urls.length} image{product.image_urls.length !== 1 ? 's' : ''}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-6">
              {product.image_urls.length > 0 ? (
                <>
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <Image
                      src={product.image_urls[0]}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {product.image_urls.length > 1 && (
                    <div className="grid grid-cols-3 gap-4">
                      {product.image_urls.slice(1, 4).map((imageUrl, index) => (
                        <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                          <Image 
                            src={imageUrl} 
                            alt={`${product.name} - Image ${index + 2}`} 
                            fill 
                            className="object-cover" 
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                  <Package className="h-16 w-16 text-gray-400" />
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Product Details</h2>
                <p className="text-gray-600 leading-relaxed">
                  {product.description || "No detailed description available for this product."}
                </p>
              </div>

              {/* Specifications */}
              {Object.keys(specifications).length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <dl className="grid grid-cols-1 gap-4">
                      {Object.entries(specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between border-b border-gray-200 pb-2">
                          <dt className="font-medium text-gray-900 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}:
                          </dt>
                          <dd className="text-gray-600 text-right ml-4">{String(value)}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="flex-1">
                  <Button className="w-full">
                    Request Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/products" className="flex-1">
                  <Button variant="outline" className="w-full">
                    View All Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="container">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight">Related Products</h2>
                <p className="mt-4 text-lg text-gray-600">
                  You may also be interested in these products
                </p>
              </div>
            </ScrollReveal>

            <FadeInStagger>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct) => {
                  const relatedSlug = relatedProduct.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  return (
                    <HoverScale key={relatedProduct.id}>
                      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="relative aspect-video bg-gray-100">
                          {relatedProduct.image_urls[0] ? (
                            <Image
                              src={relatedProduct.image_urls[0]}
                              alt={relatedProduct.name}
                              fill
                              className="object-cover"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Package className="h-8 w-8 text-gray-400" />
                            </div>
                          )}
                        </div>
                        <CardHeader>
                          {relatedProduct.product_categories && (
                            <Badge variant="secondary" className="w-fit mb-2">
                              {relatedProduct.product_categories.name}
                            </Badge>
                          )}
                          <CardTitle className="line-clamp-2">{relatedProduct.name}</CardTitle>
                          <CardDescription className="line-clamp-3">
                            {relatedProduct.description || "No description available"}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Link href={`/products/${relatedSlug}`}>
                            <Button variant="ghost" className="p-0 h-auto font-semibold">
                              Learn More
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </CardContent>
                      </Card>
                    </HoverScale>
                  );
                })}
              </div>
            </FadeInStagger>
          </div>
        </section>
      )}
    </>
  );
}

