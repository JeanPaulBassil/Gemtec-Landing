import { Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { 
  ArrowRight, 
  ChevronRight, 
  Box, 
  Images, 
  FileText, 
  Award, 
  ListTree,
  Search,
  Filter,
  Layers, 
  Tag,
  InfoIcon,
  ShieldCheck
} from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"

// Define types for our data model
interface ProductImage {
  id: string;
  imageUrl: string;
  altText?: string;
  order?: number;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  subtitle?: string;
  specifications?: string;
  certificates?: string;
  generalFeatures?: string;
  categoryId: string;
  images: ProductImage[];
}

interface Category {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
  children: Category[];
}

interface SubCategory {
  id: string;
  name: string;
  slug: string;
  parentId: string;
}

// Mock data based on the schema
const categories: Category[] = [
  {
    id: "cat-1",
    name: "Air Distribution",
    slug: "air-distribution",
    parentId: null,
    children: [
      {
        id: "cat-1-1",
        name: "Flexible Ducts",
        slug: "flexible-ducts",
        parentId: "cat-1",
        children: []
      },
      {
        id: "cat-1-2",
        name: "Rigid Ducts",
        slug: "rigid-ducts",
        parentId: "cat-1",
        children: []
      }
    ]
  },
  {
    id: "cat-2",
    name: "Insulation",
    slug: "insulation",
    parentId: null,
    children: []
  },
  {
    id: "cat-3",
    name: "Ventilation Equipment",
    slug: "ventilation-equipment",
    parentId: null,
    children: [
      {
        id: "cat-3-1",
        name: "Fans",
        slug: "fans",
        parentId: "cat-3",
        children: []
      },
      {
        id: "cat-3-2",
        name: "Air Curtains",
        slug: "air-curtains",
        parentId: "cat-3",
        children: []
      }
    ]
  },
  {
    id: "cat-4",
    name: "Accessories",
    slug: "accessories",
    parentId: null,
    children: []
  }
];

const products: Product[] = [
  {
    id: "prod-1",
    name: "ISOAFS-ALU-UL",
    slug: "isoafs-alu-ul",
    subtitle: "Premium Insulated Flexible Air Duct",
    specifications: `{"Material":"Aluminum","Diameter Range":"4\\" to 20\\"","Temperature Range":"-20°F to 250°F","Pressure Rating":"Positive: 10\\" w.g., Negative: 5\\" w.g.","Velocity Max":"5000 FPM","Standard Length":"25ft","Certifications":"UL-181, NFPA 90A & 90B"}`,
    certificates: "UL-181, NFPA 90A & 90B Compliant, ETL Listed",
    generalFeatures: "- Superior thermal insulation\n- Fire-resistant construction\n- Low air leakage\n- Excellent sound attenuation\n- Easy installation with standard connectors",
    categoryId: "cat-1-1",
    images: [
      {
        id: "img-1-1",
        imageUrl: "https://images.unsplash.com/photo-1621619856624-54b6f2510a0f?q=80&w=1000&auto=format&fit=crop",
        altText: "ISOAFS-ALU-UL Flexible Air Duct",
        order: 1
      },
      {
        id: "img-1-2",
        imageUrl: "https://images.unsplash.com/photo-1563456020159-b74d00b7a710?q=80&w=1000&auto=format&fit=crop",
        altText: "ISOAFS-ALU-UL Installation Example",
        order: 2
      }
    ]
  },
  {
    id: "prod-2",
    name: "SEMIAFS",
    slug: "semiafs",
    subtitle: "Semi-Flexible Air Duct",
    specifications: `{"Material":"Galvanized Steel","Diameter Range":"3\\" to 18\\"","Temperature Range":"-30°F to 400°F","Pressure Rating":"Positive: 12\\" w.g., Negative: 8\\" w.g.","Velocity Max":"6000 FPM","Standard Length":"10ft","Certifications":"SMACNA"}`,
    certificates: "SMACNA Standards Compliant, ISO 9001 Manufacturing",
    generalFeatures: "- Highly durable construction\n- Superior pressure handling\n- Excellent for high-temperature applications\n- Low-noise performance\n- Corrosion-resistant materials",
    categoryId: "cat-1-1",
    images: [
      {
        id: "img-2-1",
        imageUrl: "https://images.unsplash.com/photo-1581094314192-104893ff2341?q=80&w=1000&auto=format&fit=crop",
        altText: "SEMIAFS Semi-Flexible Air Duct",
        order: 1
      }
    ]
  },
  {
    id: "prod-3",
    name: "PVCAFS Heavy",
    slug: "pvcafs-heavy",
    subtitle: "Heavy-Duty PVC Flexible Air Duct",
    specifications: `{"Material":"PVC with Steel Wire Reinforcement","Diameter Range":"4\\" to 24\\"","Temperature Range":"0°F to 180°F","Pressure Rating":"Positive: 6\\" w.g., Negative: 3\\" w.g.","Velocity Max":"4000 FPM","Standard Length":"25ft","Certifications":"UL-181"}`,
    certificates: "UL-181 Class 1 Air Duct, RoHS Compliant",
    generalFeatures: "- Chemical resistant construction\n- Suitable for industrial exhausts\n- Moisture resistant\n- Highly flexible design\n- UV stabilized materials",
    categoryId: "cat-1-1",
    images: [
      {
        id: "img-3-1",
        imageUrl: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1000&auto=format&fit=crop",
        altText: "PVCAFS Heavy PVC Air Duct",
        order: 1
      }
    ]
  },
  {
    id: "prod-4",
    name: "PIR Panel 30P200",
    slug: "pir-panels-30p200",
    subtitle: "High Performance Insulation Panel",
    specifications: `{"Core Material":"Polyisocyanurate Foam","Thickness":"30mm","R-Value":"R-8.3","Facing":"Aluminum Foil","Standard Size":"48\\" x 96\\"","Fire Rating":"Class A"}`,
    certificates: "ASTM E84, NFPA 90A, UL 723",
    generalFeatures: "- Superior thermal performance\n- Lightweight construction\n- Easy to fabricate and install\n- Excellent moisture resistance\n- High structural integrity",
    categoryId: "cat-2",
    images: [
      {
        id: "img-4-1",
        imageUrl: "https://images.unsplash.com/photo-1530469525856-cf37954301f7?q=80&w=1000&auto=format&fit=crop",
        altText: "PIR Panel 30P200",
        order: 1
      }
    ]
  },
  {
    id: "prod-5",
    name: "Industrial Axial Fan AX-450",
    slug: "industrial-axial-fan-ax450",
    subtitle: "High Performance Industrial Ventilation",
    specifications: `{"Diameter":"450mm","Airflow":"Up to 8500 m³/h","Power":"1.1 kW","RPM":"1450","Noise Level":"72 dB(A)","IP Rating":"IP55","Voltage":"230V/400V"}`,
    certificates: "CE, ISO 9001, ErP 2015 Compliant",
    generalFeatures: "- Heavy-duty steel construction\n- Aerodynamically optimized blade design\n- Low energy consumption\n- Variable speed capability\n- Weather-resistant finish\n- Long service life",
    categoryId: "cat-3-1",
    images: [
      {
        id: "img-5-1",
        imageUrl: "https://images.unsplash.com/photo-1591439346018-9d5df732ab7a?q=80&w=1000&auto=format&fit=crop",
        altText: "Industrial Axial Fan AX-450",
        order: 1
      }
    ]
  },
  {
    id: "prod-6",
    name: "Air Curtain AC-1500",
    slug: "air-curtain-ac1500",
    subtitle: "Commercial Entrance Air Barrier",
    specifications: `{"Length":"1500mm","Airflow":"Up to 2500 m³/h","Power":"9 kW Heating / 0.4 kW Fan","Air Speed":"10-12 m/s","Noise Level":"55-62 dB(A)","Installation Height":"Up to 3m","Control":"Remote + BMS Integration"}`,
    certificates: "CE, ISO 9001, UKCA",
    generalFeatures: "- Energy-saving operation\n- Multiple heating stages\n- Sleek modern design\n- Low noise performance\n- Easy installation\n- Recirculating air technology",
    categoryId: "cat-3-2",
    images: [
      {
        id: "img-6-1",
        imageUrl: "https://images.unsplash.com/photo-1603509273577-dbb23eb666c6?q=80&w=1000&auto=format&fit=crop",
        altText: "Air Curtain AC-1500",
        order: 1
      }
    ]
  }
];

function ProductCard({ product }: { product: Product }) {
  // Parse specifications from JSON string with error handling
  let specs = {};
  try {
    specs = JSON.parse(product.specifications || "{}");
  } catch (error) {
    console.error(`Error parsing specifications for ${product.name}:`, error);
    // Continue with empty specs object
  }
  
  const mainImage = product.images[0]?.imageUrl || "";
  
  return (
    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-zinc-200 hover:border-blue-200 group">
      <div className="relative">
        <AspectRatio ratio={16/9} className="bg-zinc-100">
          {mainImage ? (
            <Image
              src={mainImage}
              alt={product.images[0]?.altText || product.name}
              fill
              className="object-cover rounded-t-lg transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-zinc-200">
              <Box className="h-10 w-10 text-zinc-400" />
            </div>
          )}
        </AspectRatio>
        {product.images.length > 1 && (
          <Badge className="absolute bottom-2 right-2 gap-1 bg-white/80 text-zinc-700 hover:bg-white/90">
            <Images className="h-3 w-3" />
            <span>{product.images.length}</span>
          </Badge>
        )}
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">{product.name}</CardTitle>
        {product.subtitle && (
          <CardDescription className="line-clamp-2">{product.subtitle}</CardDescription>
        )}
      </CardHeader>
      
      <CardContent className="mt-2">
        <Tabs defaultValue="specs" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-3">
            <TabsTrigger value="specs" className="text-xs">
              <FileText className="h-3 w-3 mr-1" />
              Specs
            </TabsTrigger>
            <TabsTrigger value="features" className="text-xs">
              <ListTree className="h-3 w-3 mr-1" />
              Features
            </TabsTrigger>
            <TabsTrigger value="certs" className="text-xs">
              <Award className="h-3 w-3 mr-1" />
              Certs
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="specs" className="h-40 overflow-auto">
            <dl className="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
              {Object.entries(specs).slice(0, 6).map(([key, value]) => (
                <div key={key} className="contents">
                  <dt className="text-zinc-500 font-medium">{key}</dt>
                  <dd className="text-zinc-800">{String(value)}</dd>
                </div>
              ))}
            </dl>
          </TabsContent>
          
          <TabsContent value="features" className="h-40 overflow-auto">
            <div className="text-sm space-y-1">
              {product.generalFeatures?.split('\n').map((feature, idx) => (
                <p key={idx} className="flex">
                  <span className="text-blue-500 mr-2">{feature.startsWith('-') ? '•' : ''}</span>
                  <span>{feature.replace(/^- /, '')}</span>
                </p>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="certs" className="h-40 overflow-auto">
            <div className="flex flex-wrap gap-2">
              {product.certificates?.split(',').map((cert, idx) => (
                <Badge key={idx} variant="outline" className="py-1 flex items-center">
                  <ShieldCheck className="h-3 w-3 mr-1 text-green-600" />
                  {cert.trim()}
                </Badge>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      
      <CardFooter className="pt-2 mt-auto">
        <Link href={`/products/${product.slug}`} className="w-full">
          <Button variant="default" className="w-full group" size="sm">
            <span>View Details</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

function CategoryFilter({ categories }: { categories: Category[] }) {
  return (
    <div className="bg-white border rounded-lg mb-8 shadow-sm">
      <div className="p-4 border-b">
        <h3 className="font-medium flex items-center gap-2">
          <Layers className="h-4 w-4 text-blue-600" />
          Categories
        </h3>
      </div>
      <div className="p-2">
        <ul className="space-y-1">
          {categories.map((category) => (
            <li key={category.id}>
              <Link 
                href={`#${category.slug}`}
                className="flex items-center justify-between p-2 rounded-md hover:bg-blue-50 transition-colors"
              >
                <span className="text-sm font-medium">{category.name}</span>
                {category.children.length > 0 && (
                  <Badge variant="outline" className="text-xs">
                    {category.children.length}
                  </Badge>
                )}
              </Link>
              
              {category.children.length > 0 && (
                <ul className="pl-4 pt-1 pb-2 space-y-1">
                  {category.children.map((child) => (
                    <li key={child.id}>
                      <Link 
                        href={`#${child.slug}`}
                        className="flex items-center p-1.5 rounded hover:bg-blue-50 transition-colors"
                      >
                        <ChevronRight className="h-3 w-3 text-zinc-400 mr-1" />
                        <span className="text-xs">{child.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <>
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-blue-900/50 border border-blue-800 rounded-full text-blue-100">
              <span className="font-medium text-sm tracking-wide">Product Catalog</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl/none text-white drop-shadow-sm">
              Explore Our Products
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              High-quality HVAC solutions designed for performance and reliability
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-zinc-50">
        <div className="container">
          <div className="max-w-5xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
              <Input 
                placeholder="Search products by name, specifications or features..."
                className="pl-10 py-6 bg-white border-zinc-200 focus-visible:ring-blue-500"
              />
              <Button size="icon" className="absolute right-1 top-1/2 -translate-y-1/2">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3">
              <div className="sticky top-24">
                <Suspense fallback={<div className="h-80 bg-zinc-100 animate-pulse rounded-lg" />}>
                  <CategoryFilter categories={categories} />
                </Suspense>
                
                <div className="bg-white border rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-blue-600 mb-3">
                    <InfoIcon className="h-4 w-4" />
                    <h3 className="font-medium">Need Assistance?</h3>
                  </div>
                  <p className="text-sm text-zinc-600 mb-4">
                    Contact our product specialists for custom requirements or technical support.
                  </p>
                  <Button variant="outline" className="w-full">
                    Request Quote
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-9">
              {categories.filter(c => c.parentId === null).map((category) => (
                <div key={category.id} id={category.slug} className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold flex items-center">
                      <Tag className="h-5 w-5 mr-2 text-blue-600" />
                      {category.name}
                    </h2>
                    <Link href={`/products/category/${category.slug}`}>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                        View All
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  
                  {category.children.length > 0 ? (
                    <>
                      {category.children.map((subcat) => {
                        const subcatProducts = products.filter(p => p.categoryId === subcat.id);
                        if (subcatProducts.length === 0) return null;
                        
                        return (
                          <div key={subcat.id} id={subcat.slug} className="mb-10">
                            <h3 className="text-lg font-medium mb-4 ml-1 text-zinc-700 flex items-center">
                              <ChevronRight className="h-4 w-4 mr-1 text-blue-600" />
                              {subcat.name}
                            </h3>
                            
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                              {subcatProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                              ))}
                            </div>
                            
                            <Separator className="mt-10 mb-10" />
                          </div>
                        );
                      })}
                    </>
                  ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {products.filter(p => p.categoryId === category.id).map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

