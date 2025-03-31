import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal, FadeInStagger, HoverScale } from "@/components/ui/animations"
import { Check, ArrowRight, Thermometer, Zap, Waves, ShieldCheck, BarChart3, Building } from "lucide-react"
import Link from "next/link"

const insulation = {
  name: "Thermal Insulation Solutions",
  description:
    "We offer high-quality insulation solutions from Isocam and Aerofoam, including fiberglass, rubber foam, rockwool, and XLPE insulation. Our insulation products help to improve energy efficiency, reduce heat transfer, and enhance the performance of HVAC systems.",
  category: "Insulation",
  images: [
    {
      src: "/images/products/insulation/main.jpg",
      alt: "Premium Thermal Insulation Materials",
    },
    {
      src: "/images/products/insulation/fiberglass.jpg",
      alt: "Fiberglass Insulation - High Performance",
    },
    {
      src: "/images/products/insulation/rubber-foam.jpg",
      alt: "Rubber Foam Insulation - Flexible Application",
    },
    {
      src: "/images/products/insulation/rockwool.jpg",
      alt: "Rockwool Insulation - Fire Resistant",
    },
    {
      src: "/images/products/insulation/xlpe.jpg",
      alt: "XLPE Insulation - Cross-linked Polyethylene",
    },
    {
      src: "/images/products/insulation/installation.jpg",
      alt: "Insulation - Professional Installation",
    },
  ],
  features: [
    "Premium materials from trusted manufacturers Isocam and Aerofoam",
    "Multiple insulation types: fiberglass, rubber foam, rockwool, and XLPE",
    "Excellent thermal resistance properties",
    "Superior sound absorption capabilities",
    "Fire-resistant options for enhanced safety",
    "Moisture-resistant varieties available",
    "Easy installation and application",
    "Long service life with minimal maintenance",
  ],
  applications: [
    "HVAC Systems",
    "Commercial Buildings",
    "Industrial Facilities",
    "Residential Construction",
    "Cold Storage",
    "Pipework Systems",
    "Ductwork",
    "Acoustic Treatment",
  ],
  benefits: [
    {
      title: "Energy Efficiency",
      description: "Significantly reduces energy consumption by minimizing heat transfer",
      icon: Zap,
    },
    {
      title: "Thermal Control",
      description: "Maintains optimal temperatures in both hot and cold environments",
      icon: Thermometer,
    },
    {
      title: "Noise Reduction",
      description: "Absorbs sound vibrations for quieter and more comfortable spaces",
      icon: Waves,
    },
    {
      title: "Condensation Control",
      description: "Prevents moisture buildup and associated problems in HVAC systems",
      icon: ShieldCheck,
    },
  ],
}

const relatedProducts = [
  {
    name: "Flexible Ducts",
    description: "Acoustically insulated flexible air ducts for efficient air distribution.",
    image: "/placeholder.svg",
    slug: "flexible-ducts",
  },
  {
    name: "PIR Panels",
    description: "High-performance insulation panels for structural applications.",
    image: "/placeholder.svg",
    slug: "pir-panels",
  },
]

export default function InsulationPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-indigo-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-sky-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {insulation.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none text-white drop-shadow-sm">
              {insulation.name}
            </h1>
            <p className="mt-6 text-xl text-indigo-100">{insulation.description}</p>
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
                  alt={insulation.images[0].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-5 gap-4">
                {insulation.images.slice(1).map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-gray-100">
                    <Image src="/placeholder.svg" alt={image.alt} fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-indigo-950">Key Features</h2>
                <ul className="grid gap-3">
                  {insulation.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-indigo-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-indigo-950">Applications</h2>
                <div className="flex flex-wrap gap-2">
                  {insulation.applications.map((application, index) => (
                    <Badge key={index} variant="outline" className="bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border-indigo-200">
                      {application}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  Request a Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-50/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-indigo-950">Key Benefits</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our insulation solutions deliver exceptional performance for various applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {insulation.benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-indigo-700" />
                  </div>
                  <CardTitle className="text-xl text-indigo-950">{benefit.title}</CardTitle>
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
            <h2 className="text-3xl font-bold text-indigo-950">Related Products</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our other premium solutions that complement our insulation products
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
                    <h3 className="text-xl font-semibold text-indigo-950 mb-2">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                    <div className="flex items-center mt-4 text-indigo-600 font-medium">
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

      <section className="py-20 bg-gradient-to-br from-indigo-900 to-indigo-950">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-indigo-100 mb-8">
              Contact our expert team today to discuss your insulation requirements and receive a customized quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-indigo-900">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-indigo-300 text-indigo-100 hover:bg-indigo-800">
                Contact Sales Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 