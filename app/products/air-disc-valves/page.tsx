import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, Wind, Gauge, Settings, Sliders } from "lucide-react"
import Link from "next/link"

const airDiscValves = {
  name: "Air Disc Valves",
  description: "Premium quality air disc valves designed for efficient air distribution and precise control in HVAC systems. Our range includes ceiling diffusers, metal air disc valves, and smart air disc valves.",
  category: "Flexible Ducts",
  products: [
    {
      name: "CEILING DIFFUSER",
      description: "High-performance ceiling diffusers designed for optimal air distribution in commercial and residential spaces.",
      image: "/air duct/air disc valves/ceiling diffuser.webp",
      link: "/products/air-disc-valves/ceiling-diffuser",
      features: [
        "Premium white finish",
        "Circular design with multiple air channels",
        "Efficient air distribution",
        "Easy ceiling installation",
        "Suitable for various indoor environments"
      ]
    },
    {
      name: "METAL AIR DISC VALVES",
      description: "Durable metal air disc valves that provide reliable airflow control with superior longevity.",
      image: "/air duct/air disc valves/METAL AIR DISC VALVES.webp",
      link: "/products/air-disc-valves/metal-air-disc-valves",
      features: [
        "High-quality metal construction",
        "Professional grade performance",
        "Adjustable airflow settings",
        "Corrosion-resistant finish",
        "Suitable for commercial applications"
      ]
    },
    {
      name: "P SMART AIR DISC VALVES",
      description: "Innovative P Smart air disc valves featuring advanced design for improved airflow efficiency.",
      image: "/air duct/air disc valves/P SMART AIR DISC VALVES.webp",
      link: "/products/air-disc-valves/p-smart-air-disc-valves",
      features: [
        "Modern aerodynamic design",
        "Enhanced airflow control",
        "Precision engineering",
        "Multiple size options",
        "Silent operation"
      ]
    }
  ],
  features: [
    "High-quality materials for extended service life",
    "Precision engineered for optimal airflow distribution",
    "Multiple size options to suit various applications",
    "Easy installation and maintenance",
    "Compatible with standard HVAC systems",
    "Adjustable airflow settings for custom control",
    "Efficient air distribution with minimal noise",
    "Modern designs to complement interior aesthetics"
  ],
  applications: [
    "Commercial Office Buildings",
    "Residential Spaces",
    "Healthcare Facilities",
    "Educational Institutions",
    "Retail Environments",
    "Hospitality Venues",
    "Industrial Facilities",
    "Data Centers"
  ],
  benefits: [
    {
      title: "Optimal Airflow",
      description: "Designed for efficient air distribution throughout spaces",
      icon: Wind,
    },
    {
      title: "Precise Control",
      description: "Adjustable settings for customized airflow management",
      icon: Sliders,
    },
    {
      title: "Durability",
      description: "Constructed with high-quality materials for long service life",
      icon: Settings,
    },
    {
      title: "Energy Efficiency",
      description: "Helps optimize HVAC system performance and energy use",
      icon: Gauge,
    },
  ],
  specifications: {
    materials: "High-grade metal and polymer options",
    sizes: "Multiple diameter configurations available",
    installation: "Compatible with standard duct systems",
    adjustment: "Variable settings for airflow control",
    finish: "Professional white and metallic options",
    airflow: "Optimized for balanced air distribution",
    noise: "Designed for quiet operation",
    compatibility: "Suitable for use with most HVAC systems"
  }
}

export default function AirDiscValvesPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {airDiscValves.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none text-white drop-shadow-sm">
              {airDiscValves.name}
            </h1>
            <p className="mt-6 text-xl text-blue-100">{airDiscValves.description}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950">Our Air Disc Valve Products</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of air disc valves for efficient air distribution
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {airDiscValves.products.map((product, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <Link href={product.link}>
                  <div className="relative h-72">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-950">{product.name}</CardTitle>
                    <CardDescription className="text-base">{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center text-blue-600 font-medium">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-blue-950">Key Features</h2>
                <ul className="grid gap-3">
                  {airDiscValves.features.map((feature, index) => (
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
                  {airDiscValves.applications.map((application, index) => (
                    <Badge key={index} variant="outline" className="bg-blue-50 hover:bg-blue-100 text-blue-800 border-blue-200">
                      {application}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-blue-950">Technical Specifications</h2>
              <div className="grid gap-4">
                {Object.entries(airDiscValves.specifications).map(([key, value], index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-white shadow-sm">
                    <div className="flex-1">
                      <h3 className="font-semibold text-blue-950 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
                      <p className="text-gray-600 mt-1">{value}</p>
                    </div>
                  </div>
                ))}
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
              Why choose our Air Disc Valve products
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {airDiscValves.benefits.map((benefit, index) => (
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

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Contact our expert team today to discuss your Air Disc Valve requirements and receive a customized quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-blue-900">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-100 hover:bg-blue-800">
                Download Specifications
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 