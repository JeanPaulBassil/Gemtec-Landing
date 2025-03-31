import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal, FadeInStagger, HoverScale } from "@/components/ui/animations"
import { Check, ArrowRight, Wind, Droplets, Gauge, Zap, Building } from "lucide-react"
import Link from "next/link"

const flexibleDucts = {
  name: "AFS Flexible Ducts",
  description:
    "Our AFS flexible air ducts are acoustically insulated and available in different materials including aluminium, PVC, and stainless steel. They are designed for efficient and flexible air distribution in HVAC systems.",
  category: "Flexible Ducts",
  images: [
    {
      src: "/images/products/flexible-ducts/main.jpg",
      alt: "AFS Flexible Duct - Aluminum and Insulated",
    },
    {
      src: "/images/products/flexible-ducts/steel.jpg",
      alt: "Stainless Steel Flexible Duct - Industrial Grade",
    },
    {
      src: "/images/products/flexible-ducts/pvc.jpg",
      alt: "PVC Flexible Duct - Commercial Installation",
    },
    {
      src: "/images/products/flexible-ducts/installation.jpg",
      alt: "Flexible Duct - HVAC System Installation",
    },
  ],
  features: [
    "Superior acoustic insulation for quiet operation",
    "Multiple material options: aluminum, PVC, and stainless steel",
    "Standard diameters from 100mm to 500mm",
    "Exceptional flexibility for complex installation environments",
    "Reinforced construction for durability and longevity",
    "Fire-resistant materials available (class 0, class 1)",
    "Temperature resistance from -30°C to +140°C (material dependent)",
    "Low air leakage design for improved system efficiency",
  ],
  applications: [
    "Commercial HVAC Systems",
    "Industrial Ventilation",
    "Residential Air Conditioning",
    "Clean Rooms & Laboratories",
    "Hospitals & Healthcare Facilities",
    "Food Processing Plants",
    "Pharmaceutical Manufacturing",
    "Data Centers",
  ],
  benefits: [
    {
      title: "Installation Flexibility",
      description: "Easily navigates around obstacles and fits into tight spaces where rigid ducts cannot",
      icon: Wind,
    },
    {
      title: "Acoustic Performance",
      description: "Reduces noise transmission through HVAC systems for quieter indoor environments",
      icon: Droplets,
    },
    {
      title: "Energy Efficiency",
      description: "Superior insulation reduces energy loss and improves overall system efficiency",
      icon: Zap,
    },
    {
      title: "Versatile Application",
      description: "Multiple material options ensure compatibility with various environmental requirements",
      icon: Building,
    },
  ],
}

const relatedProducts = [
  {
    name: "Air Curtains",
    description: "High-efficiency air curtains for thermal separation and energy conservation.",
    image: "/placeholder.svg",
    slug: "air-curtains",
  },
  {
    name: "Sound Attenuators",
    description: "Advanced sound attenuation solutions for HVAC noise reduction.",
    image: "/placeholder.svg",
    slug: "sound-attenuators",
  },
]

export default function FlexibleDuctsPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {flexibleDucts.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none text-white drop-shadow-sm">
              {flexibleDucts.name}
            </h1>
            <p className="mt-6 text-xl text-blue-100">{flexibleDucts.description}</p>
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
                  alt={flexibleDucts.images[0].alt}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {flexibleDucts.images.slice(1).map((image, index) => (
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
                  {flexibleDucts.features.map((feature, index) => (
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
                  {flexibleDucts.applications.map((application, index) => (
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
              Our flexible ducts provide exceptional advantages for modern HVAC installations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {flexibleDucts.benefits.map((benefit, index) => (
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

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950">Related Products</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our other premium HVAC solutions that complement our flexible ducts
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
                    <h3 className="text-xl font-semibold text-blue-950 mb-2">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                    <div className="flex items-center mt-4 text-blue-600 font-medium">
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

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Contact our expert team today to discuss your flexible duct requirements and receive a customized quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-blue-900">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-100 hover:bg-blue-800">
                Contact Sales Team
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 