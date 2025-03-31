import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal, FadeInStagger, HoverScale } from "@/components/ui/animations"
import { Download, FileText, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const brands = {
  tecnifan: {
    name: "Tecnifan",
    description: "High-performance industrial fans and ventilation systems",
    logo: "/placeholder.svg",
    catalogues: [
      {
        name: "General Catalogue 2024",
        description: "Complete range of Tecnifan products and specifications",
        file: "/placeholder.pdf",
        size: "15.2 MB",
      },
      {
        name: "Technical Manual",
        description: "Detailed technical specifications and installation guides",
        file: "/placeholder.pdf",
        size: "8.5 MB",
      },
    ],
    categories: [
      {
        name: "Centrifugal Fans",
        products: [
          {
            name: "TDA Series",
            description: "Double inlet centrifugal fans with forward curved blades",
            image: "/placeholder.svg",
            features: [
              "Air flow up to 5,000 m³/h",
              "Static pressure up to 500 Pa",
              "Low noise level",
              "Multiple mounting positions",
            ],
          },
          {
            name: "TBA Series",
            description: "Backward curved centrifugal fans for industrial applications",
            image: "/placeholder.svg",
            features: [
              "Air flow up to 10,000 m³/h",
              "High efficiency",
              "Robust construction",
              "Variable speed control",
            ],
          },
        ],
      },
      {
        name: "Axial Fans",
        products: [
          {
            name: "TAX Series",
            description: "High-performance axial fans for ventilation systems",
            image: "/placeholder.svg",
            features: [
              "Direct drive motor",
              "Aluminum die-cast impeller",
              "Multiple diameter options",
              "IP55 protection",
            ],
          },
        ],
      },
    ],
  },
  blauberg: {
    name: "Blauberg",
    description: "Premium ventilation equipment with German engineering excellence",
    logo: "/placeholder.svg",
    catalogues: [
      {
        name: "Product Catalogue 2024",
        description: "Full range of Blauberg ventilation solutions",
        file: "/placeholder.pdf",
        size: "12.8 MB",
      },
      {
        name: "Installation Guide",
        description: "Comprehensive installation and maintenance manual",
        file: "/placeholder.pdf",
        size: "6.3 MB",
      },
    ],
    categories: [
      {
        name: "Residential Fans",
        products: [
          {
            name: "Calm Series",
            description: "Ultra-quiet bathroom and kitchen exhaust fans",
            image: "/placeholder.svg",
            features: [
              "Silent operation <25dB(A)",
              "Energy-efficient EC motor",
              "Built-in humidity sensor",
              "Modern design",
            ],
          },
          {
            name: "Smart Series",
            description: "Smart controlled ventilation fans with WiFi connectivity",
            image: "/placeholder.svg",
            features: ["Mobile app control", "Automatic mode", "Temperature sensor", "Schedule programming"],
          },
        ],
      },
      {
        name: "Commercial Fans",
        products: [
          {
            name: "Turbo Series",
            description: "High-capacity inline duct fans for commercial spaces",
            image: "/placeholder.svg",
            features: ["High pressure capability", "Metal housing", "Speed controller compatible", "Easy maintenance"],
          },
        ],
      },
    ],
  },
}

export default function FansPage() {
  return (
    <>
      <section className="relative py-24 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Fans
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              High-efficiency fans for improved air circulation and ventilation
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <Tabs defaultValue="tecnifan" className="space-y-8">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="tecnifan">Tecnifan</TabsTrigger>
              <TabsTrigger value="blauberg">Blauberg</TabsTrigger>
            </TabsList>

            {Object.entries(brands).map(([key, brand]) => (
              <TabsContent key={key} value={key} className="space-y-12">
                <div className="flex items-center gap-6">
                  <div className="relative w-32 h-16">
                    <Image src={brand.logo || "/placeholder.svg"} alt={brand.name} fill className="object-contain" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{brand.name}</h2>
                    <p className="text-muted-foreground">{brand.description}</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <ScrollReveal>
                    <h3 className="text-xl font-semibold mb-6">Product Catalogues</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {brand.catalogues.map((catalogue) => (
                        <Card key={catalogue.name} className="card-hover">
                          <CardHeader>
                            <FileText className="h-8 w-8 text-primary mb-2" />
                            <CardTitle>{catalogue.name}</CardTitle>
                            <CardDescription>{catalogue.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                              <span>PDF Document</span>
                              <span>{catalogue.size}</span>
                            </div>
                            <Button className="w-full" variant="outline">
                              <Download className="mr-2 h-4 w-4" />
                              Download Catalogue
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </ScrollReveal>

                  {brand.categories.map((category) => (
                    <div key={category.name} className="space-y-6">
                      <ScrollReveal>
                        <h3 className="text-xl font-semibold">{category.name}</h3>
                      </ScrollReveal>
                      <FadeInStagger>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {category.products.map((product) => (
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
                                  <CardTitle className="text-lg">{product.name}</CardTitle>
                                  <CardDescription>{product.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                  <ul className="space-y-2 mb-6">
                                    {product.features.map((feature, index) => (
                                      <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                                        <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                                        {feature}
                                      </li>
                                    ))}
                                  </ul>
                                  <Button variant="outline" className="w-full">
                                    View Details
                                  </Button>
                                </CardContent>
                              </Card>
                            </HoverScale>
                          ))}
                        </div>
                      </FadeInStagger>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-24 bg-accent">
        <div className="container">
          <Card className="bg-primary/5 border-none">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Need Help Selecting the Right Fan?</CardTitle>
              <CardDescription>
                Our team of experts is ready to help you choose the perfect solution for your needs
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center gap-4">
              <Button asChild className="btn-secondary">
                <Link href="/contact">Contact Sales Team</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/quote">Request a Quote</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}

