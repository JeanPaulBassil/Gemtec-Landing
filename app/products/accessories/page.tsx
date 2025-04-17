import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal, FadeInStagger, HoverScale } from "@/components/ui/animations"
import { Check, Download, FileText, ArrowRight, Gauge } from "lucide-react"
import Link from "next/link"

const product = {
  name: "HVAC Accessories",
  description:
    "We offer a wide range of accessories from top brands such as AFS, Ulpatek, and Vents. Our accessories include aluminium filters, backdraft dampers, cable ties, corner elements, duct sealant, duct connectors, damper quadrants, and more.",
  category: "Accessories",
  images: [
    {
      src: "/placeholder.svg",
      alt: "Flange Profile",
    },
    {
      src: "/placeholder.svg",
      alt: "Flange Clamps",
    },
    {
      src: "/placeholder.svg",
      alt: "Flange Corner",
    },
    {
      src: "/placeholder.svg",
      alt: "AFS Brand Logo",
    },
  ],
  features: [
    "High-quality accessories from leading manufacturers",
    "Comprehensive range for all HVAC applications",
    "Durable materials for long-lasting performance",
    "Reliable components for your installations",
    "Compatible with standard HVAC systems",
    "Various sizes and specifications available",
  ],
  specifications: [
    {
      category: "Flange Profile Specifications",
      items: [
        { label: "Product Code", value: "GE 0220 / GE 0230 / GE 0240" },
        { label: "Product Description", value: "20MM/30MM/40MM Flange with sealant" },
        { label: "Standard Length", value: "4000mm" },
        { label: "Material", value: "GLV" },
      ],
    },
    {
      category: "Flange Dimensions",
      items: [
        { label: "H", value: "20mm" },
        { label: "W", value: "30mm" },
        { label: "S", value: "2.5mm" },
        { label: "D", value: "M8x25mm" },
        { label: "L", value: "30mm" },
      ],
    },
    {
      category: "Flange Corner Packaging",
      items: [
        { label: "Size H20", value: "500PCS/CTN" },
        { label: "Size H30", value: "250PCS/CTN" },
        { label: "Size H40", value: "100PCS/CTN" },
      ],
    },
  ],
  applications: [
    "Commercial Buildings",
    "Industrial Facilities",
    "Office Complexes",
    "Residential Projects",
    "Educational Institutions",
    "Healthcare Facilities",
  ],
}

export default function AccessoriesPage() {
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
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt="HVAC Accessories"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: "Flange Profile", image: "/placeholder.svg" },
                  { name: "Flange Clamps", image: "/placeholder.svg" },
                  { name: "Flange Corner", image: "/placeholder.svg" },
                ].map((item, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                    <div className="absolute inset-0 bg-black/20 flex items-end">
                      <div className="w-full p-2 bg-black/50 text-white text-sm text-center">
                        {item.name}
                      </div>
                    </div>
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
                <Button size="lg" className="btn-secondary" asChild>
                  <Link href="/quote">Request a Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
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
          </Tabs>
        </div>
      </section>
    </>
  )
} 