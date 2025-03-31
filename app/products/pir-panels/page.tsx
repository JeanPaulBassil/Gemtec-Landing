import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal, FadeInStagger, HoverScale } from "@/components/ui/animations"
import { Check, ArrowRight, Layers, ShieldCheck, Gauge, Ruler, Building, Flame } from "lucide-react"
import Link from "next/link"

const pirPanels = {
  name: "PalDuct PIR System",
  description:
    "The PalDuct PIR System is an advanced and innovative pre-insulated rectangular HVAC ductwork system. It comprises Kingspan PalDuct PIR panels, fabrication methods, coupling systems and a complete line of accessories to produce ductwork in sections up to 4 m long. There are two available PalDuct PIR Panels, 20P80 and 30P200, that can be used in the fabrication of the PalDuct PIR.",
  category: "PIR Panels",
  images: [
    {
      src: "/images/products/pir-panels/main.jpg",
      alt: "PalDuct PIR System - Complete Solution",
    },
    {
      src: "/images/products/pir-panels/panel-1.jpg",
      alt: "PalDuct PIR Panel - 20P80",
    },
    {
      src: "/images/products/pir-panels/panel-2.jpg",
      alt: "PalDuct PIR Panel - 30P200",
    },
    {
      src: "/images/products/pir-panels/installation.jpg",
      alt: "PalDuct PIR System - Professional Installation",
    },
  ],
  features: [
    "Advanced pre-insulated rectangular HVAC ductwork system",
    "Utilizes high-quality Kingspan PalDuct PIR panels",
    "Two panel options: 20P80 and 30P200 for different applications",
    "Sections up to 4 meters long for efficient installation",
    "Comprehensive coupling systems for secure connections",
    "Complete line of accessories for versatile applications",
    "Superior insulation properties for energy efficiency",
    "Lightweight yet durable construction",
  ],
  applications: [
    "Commercial Buildings",
    "Shopping Centers",
    "Hospitals & Healthcare",
    "Educational Facilities",
    "Data Centers",
    "Industrial Facilities",
    "Airports & Transportation",
    "Clean Rooms",
  ],
  benefits: [
    {
      title: "Thermal Efficiency",
      description: "Superior insulation properties reduce energy loss throughout HVAC systems",
      icon: Gauge,
    },
    {
      title: "Quick Installation",
      description: "Pre-insulated panels and 4m sections allow for faster project completion",
      icon: Building,
    },
    {
      title: "Durability",
      description: "High-quality materials ensure long-lasting performance in various environments",
      icon: ShieldCheck,
    },
    {
      title: "Versatility",
      description: "Two panel options (20P80 and 30P200) address different project requirements",
      icon: Layers,
    },
  ],
}

const relatedProducts = [
  {
    name: "Insulation",
    description: "High-quality thermal insulation solutions for optimal energy efficiency.",
    image: "/placeholder.svg",
    slug: "insulation",
  },
  {
    name: "Flexible Ducts",
    description: "Acoustically insulated flexible air ducts for efficient air distribution.",
    image: "/placeholder.svg",
    slug: "flexible-ducts",
  },
]

export default function PIRPanelsPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-green-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-teal-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {pirPanels.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none text-white drop-shadow-sm">
              {pirPanels.name}
            </h1>
            <p className="mt-6 text-xl text-green-100">{pirPanels.description}</p>
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
                  alt={pirPanels.images[0].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {pirPanels.images.slice(1).map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-gray-100">
                    <Image src="/placeholder.svg" alt={image.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-green-950">Key Features</h2>
                <ul className="grid gap-3">
                  {pirPanels.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-green-950">Applications</h2>
                <div className="flex flex-wrap gap-2">
                  {pirPanels.applications.map((application, index) => (
                    <Badge key={index} variant="outline" className="bg-green-50 hover:bg-green-100 text-green-800 border-green-200">
                      {application}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-50/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-950">Key Benefits</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our PalDuct PIR System provides exceptional performance for modern HVAC applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {pirPanels.benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-green-700" />
                  </div>
                  <CardTitle className="text-xl text-green-950">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-950">Related Products</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our other premium solutions that complement our PalDuct PIR System
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedProducts.map((product, index) => (
              <Link key={index} href={`/products/${product.slug}`}>
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-green-950 mb-2">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                    <div className="flex items-center mt-4 text-green-600 font-medium">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-900 to-green-950">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-green-100 mb-8">
              Contact our expert team today to discuss your HVAC ductwork requirements and receive a customized quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-green-900">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-green-300 text-green-100 hover:bg-green-800">
                Contact Sales Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 