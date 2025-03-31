import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal, FadeInStagger, HoverScale } from "@/components/ui/animations"
import { Check, Download, FileText, ArrowRight, Wind, Droplets, Gauge, Zap, Building, Store, ExternalLink } from "lucide-react"
import Link from "next/link"

const airCurtains = {
  name: "Premium Air Curtains",
  description:
    "High-efficiency air curtains designed to create an invisible barrier of air that helps to prevent the exchange of outdoor and indoor air, providing energy-saving solutions for entrances and openings.",
  category: "Air Curtains",
  images: [
    {
      src: "/images/products/air-curtains/main.jpg",
      alt: "Premium Air Curtain - Commercial Installation",
    },
    {
      src: "/images/products/air-curtains/installation-1.jpg",
      alt: "Air Curtain - Entrance Installation",
    },
    {
      src: "/images/products/air-curtains/installation-2.jpg",
      alt: "Air Curtain - Building Entrance",
    },
    {
      src: "/images/products/air-curtains/installation-3.jpg",
      alt: "Air Curtain - Commercial Application",
    },
  ],
  features: [
    "Creates effective thermal barrier between indoor and outdoor environments",
    "Available in multiple standard sizes (90cm, 120cm, 150cm, 180cm, 200cm)",
    "Energy-efficient operation reduces heating and cooling costs",
    "Helps prevent dust, insects, and pollutants from entering",
    "Modern design integrates well with commercial entrances",
    "Low noise operation suitable for customer-facing environments",
    "Easy installation with multiple mounting options",
    "Minimal maintenance requirements",
  ],
  specifications: [
    {
      category: "Technical Specifications",
      items: [
        { label: "Available Sizes", value: "90cm, 120cm, 150cm, 180cm, 200cm" },
        { label: "Air Velocity", value: "8-10 m/s" },
        { label: "Maximum Installation Height", value: "3.5m" },
        { label: "Housing Material", value: "Powder Coated Steel / Aluminum" },
        { label: "Noise Level", value: "55-62 dB(A)" },
        { label: "Protection Class", value: "IP20" },
      ],
    },
    {
      category: "Performance Data",
      items: [
        { label: "Power Supply", value: "220-240V/50Hz" },
        { label: "Power Consumption", value: "3-12 kW (size dependent)" },
        { label: "Air Volume", value: "1000-3000 m³/h" },
        { label: "Temperature Rise", value: "5-15°C" },
        { label: "Control Options", value: "Remote/Manual/BMS Integration" },
      ],
    },
  ],
  applications: [
    "Commercial Entrances",
    "Retail Storefronts",
    "Shopping Centers",
    "Hotels & Hospitality",
    "Hospitals & Healthcare",
    "Industrial Facilities",
    "Warehouses & Loading Bays",
    "Public Buildings",
  ],
  benefits: [
    {
      title: "Energy Efficiency",
      description: "Reduces heating/cooling costs by preventing air exchange between indoor and outdoor environments",
      icon: Zap,
    },
    {
      title: "Climate Control",
      description: "Maintains consistent indoor temperature despite frequent door opening",
      icon: Gauge,
    },
    {
      title: "Clean Environment",
      description: "Prevents dust, insects, and pollutants from entering the building",
      icon: Wind,
    },
    {
      title: "Customer Comfort",
      description: "Creates a more comfortable environment for customers and staff",
      icon: Droplets,
    },
  ],
  documents: [
    {
      name: "Technical Data Sheet",
      type: "PDF",
      size: "2.1 MB",
      icon: FileText,
    },
    {
      name: "Installation Guide",
      type: "PDF",
      size: "1.5 MB",
      icon: FileText,
    },
    {
      name: "Product Catalog",
      type: "PDF",
      size: "3.7 MB",
      icon: FileText,
    },
  ],
}

const relatedProducts = [
  {
    name: "Flexible Ducts",
    description: "Ensures flexible air distribution and adaptability in HVAC installations.",
    image: "/placeholder.svg",
    slug: "flexible-ducts",
  },
  {
    name: "Air Outlet Grilles & Dampers",
    description: "Designed for effective air distribution and airflow management.",
    image: "/placeholder.svg",
    slug: "air-outlet-grilles-dampers",
  },
]

export default function AirCurtainsPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {airCurtains.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none text-white drop-shadow-sm">
              {airCurtains.name}
            </h1>
            <p className="mt-6 text-xl text-blue-100">{airCurtains.description}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl border border-gray-100">
                <Image
                  src="/placeholder.svg"
                  alt={airCurtains.images[0].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {airCurtains.images.slice(1).map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-gray-100">
                    <Image src="/placeholder.svg" alt={image.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-blue-950">Key Features</h2>
                <ul className="grid gap-3">
                  {airCurtains.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-blue-950">Applications</h2>
                <div className="flex flex-wrap gap-2">
                  {airCurtains.applications.map((application, index) => (
                    <Badge key={index} variant="outline" className="bg-blue-50 hover:bg-blue-100 text-blue-800 border-blue-200">
                      {application}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Request a Quote
                </Button>
                <Button size="lg" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                  <Download className="mr-2 h-4 w-4" />
                  Download Specifications
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950">Key Benefits</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our air curtains provide multiple advantages for commercial and industrial facilities
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {airCurtains.benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-blue-700" />
                  </div>
                  <CardTitle className="text-xl text-blue-950">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <Tabs defaultValue="specifications" className="space-y-8">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            <TabsContent value="specifications" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {airCurtains.specifications.map((spec, index) => (
                  <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <CardHeader className="bg-gray-50 border-b border-gray-200">
                      <CardTitle className="text-blue-900">{spec.category}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        {spec.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex justify-between border-b border-gray-100 pb-2">
                            <span className="text-gray-600">{item.label}</span>
                            <span className="font-medium text-blue-950">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="documents">
              <div className="grid md:grid-cols-3 gap-6">
                {airCurtains.documents.map((doc, index) => (
                  <Card key={index} className="hover:shadow-md transition-all duration-300 hover:border-blue-200">
                    <CardHeader>
                      <doc.icon className="h-8 w-8 text-blue-600 mb-2" />
                      <CardTitle className="text-lg">{doc.name}</CardTitle>
                      <CardDescription>
                        {doc.type} • {doc.size}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" className="w-full text-blue-700 border-blue-200 hover:bg-blue-50">
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold">Our Air Curtains in Action</h2>
              <p className="mt-4 text-blue-100 text-lg">
                Our air curtains are available in various sizes (90cm, 120cm, 150cm, 180cm, 200cm) and are designed to create a barrier of air that helps to prevent the exchange of outdoor and indoor air, providing energy-saving solutions for entrances and openings.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <Building className="h-5 w-5 text-blue-300 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Commercial Buildings</h3>
                    <p className="text-blue-200 text-sm mt-1">Perfect for office entrances, retail stores, and shopping centers to maintain comfortable indoor temperatures.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Store className="h-5 w-5 text-blue-300 mt-1 shrink-0" />
                  <div>
                    <h3 className="font-semibold">Retail Applications</h3>
                    <p className="text-blue-200 text-sm mt-1">Enhances customer comfort while reducing energy costs for stores with high foot traffic.</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button className="bg-white text-blue-700 hover:bg-blue-50">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-2xl">
              <Image 
                src="/placeholder.svg" 
                alt="Air Curtain Installation" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-blue-600 font-semibold">Related Products</span>
              <h2 className="text-3xl font-bold tracking-tight mt-2 text-blue-950">You May Also Like</h2>
            </div>
          </ScrollReveal>

          <FadeInStagger>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {relatedProducts.map((product) => (
                <HoverScale key={product.name}>
                  <Link href={`/products/${product.slug}`} className="block">
                    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                      <div className="relative aspect-video">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold group-hover:text-blue-700 transition-colors duration-300">{product.name}</h3>
                        <p className="mt-2 text-gray-600">{product.description}</p>
                        <div className="mt-4 flex items-center text-blue-700 font-medium text-sm">
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </HoverScale>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </section>
    </>
  )
} 