import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal, FadeInStagger, HoverScale } from "@/components/ui/animations"
import { Check, Download, FileText, ArrowRight } from "lucide-react"

const product = {
  name: "AirFlow Pro Series - Commercial Air Outlet Grille",
  description:
    "High-performance air outlet grille designed for optimal air distribution in commercial spaces. Features adjustable vanes and precision engineering for maximum efficiency.",
  category: "Air Outlet Grilles & Dampers",
  images: [
    {
      src: "/placeholder.svg",
      alt: "AirFlow Pro Series - Front View",
    },
    {
      src: "/placeholder.svg",
      alt: "AirFlow Pro Series - Side View",
    },
    {
      src: "/placeholder.svg",
      alt: "AirFlow Pro Series - Installation View",
    },
    {
      src: "/placeholder.svg",
      alt: "AirFlow Pro Series - Detail View",
    },
  ],
  features: [
    "Adjustable double deflection vanes",
    "Heavy-duty aluminum construction",
    "Powder-coated finish",
    "Custom sizes available",
    "Easy installation system",
    "Aerodynamic profile for reduced noise",
  ],
  specifications: [
    {
      category: "Technical Specifications",
      items: [
        { label: "Material", value: "Extruded Aluminum" },
        { label: "Standard Sizes", value: "100mm to 1000mm" },
        { label: "Finish", value: "Powder Coated RAL 9010" },
        { label: "Frame Type", value: "Type-1 (Standard)" },
        { label: "Vane Spacing", value: "20mm" },
      ],
    },
    {
      category: "Performance Data",
      items: [
        { label: "Air Flow Rate", value: "Up to 500 m³/h" },
        { label: "Pressure Drop", value: "10-30 Pa" },
        { label: "Free Area", value: "82%" },
        { label: "Noise Level", value: "<25 dB(A)" },
      ],
    },
  ],
  applications: [
    "Office Buildings",
    "Shopping Centers",
    "Hotels",
    "Hospitals",
    "Educational Institutions",
    "Retail Spaces",
  ],
  documents: [
    {
      name: "Technical Data Sheet",
      type: "PDF",
      size: "2.4 MB",
      icon: FileText,
    },
    {
      name: "Installation Guide",
      type: "PDF",
      size: "1.8 MB",
      icon: FileText,
    },
    {
      name: "CAD Drawing",
      type: "DWG",
      size: "3.1 MB",
      icon: FileText,
    },
  ],
}

const relatedProducts = [
  {
    name: "VentGuard Damper System",
    description: "Multi-blade damper system for precise airflow control.",
    image: "/placeholder.svg",
    category: "Air Outlet Grilles & Dampers",
  },
  {
    name: "AeroFlex Diffuser",
    description: "Adjustable ceiling diffuser with modern design.",
    image: "/placeholder.svg",
    category: "Air Outlet Grilles & Dampers",
  },
]

export default function ProductPage() {
  return (
    <>
      <section className="relative py-24 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {product.category}
            </Badge>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              {product.name}
            </h1>
            <p className="mt-6 text-lg text-gray-300">{product.description}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <Image
                  src={product.images[0].src || "/placeholder.svg"}
                  alt={product.images[0].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Key Features</h2>
                <ul className="grid gap-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Applications</h2>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((application, index) => (
                    <Badge key={index} variant="outline">
                      {application}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-secondary">
                  Request a Quote
                </Button>
                <Button size="lg" variant="outline">
                  Download Specifications
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent">
        <div className="container">
          <Tabs defaultValue="specifications" className="space-y-8">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
            </TabsList>
            <TabsContent value="specifications" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {product.specifications.map((spec, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{spec.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {spec.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex justify-between">
                            <span className="text-muted-foreground">{item.label}</span>
                            <span className="font-medium">{item.value}</span>
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
                {product.documents.map((doc, index) => (
                  <Card key={index} className="card-hover">
                    <CardHeader>
                      <doc.icon className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">{doc.name}</CardTitle>
                      <CardDescription>
                        {doc.type} • {doc.size}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="w-full">
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

      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold">Related Products</span>
              <h2 className="text-3xl font-bold tracking-tight mt-2">You May Also Like</h2>
            </div>
          </ScrollReveal>

          <FadeInStagger>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {relatedProducts.map((product) => (
                <HoverScale key={product.name}>
                  <Card className="card-hover">
                    <div className="relative aspect-video">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover rounded-t-lg"
                      />
                    </div>
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2">
                        {product.category}
                      </Badge>
                      <CardTitle className="line-clamp-2">{product.name}</CardTitle>
                      <CardDescription className="line-clamp-3">{product.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="p-0 h-auto font-semibold">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </HoverScale>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </section>
    </>
  )
}

