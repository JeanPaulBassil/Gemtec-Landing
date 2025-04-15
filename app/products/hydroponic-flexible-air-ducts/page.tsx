import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, ArrowRight, Shield, Wind, Gauge, Zap } from "lucide-react"
import Link from "next/link"

const hydroponicDucts = {
  name: "Hydroponic Flexible Air Ducts",
  description: "Specialized flexible air ducts designed specifically for hydroponic growing environments. Our hydroponic ducts provide optimal airflow and climate control for enhanced plant growth and productivity.",
  category: "Flexible Ducts",
  types: [
    {
      name: "HYDROPONIC COMBIAFS.S BLACK",
      description: "Premium black flexible air duct for controlled environment agriculture",
      image: "/images/products/flexible-ducts/Hydroponic Combiafs.s black.webp",
      link: "/products/hydroponic-combiafs-s-black",
      features: [
        "Specialized for hydroponic systems",
        "Durable black construction",
        "High flexibility",
        "UV resistant"
      ]
    },
    {
      name: "HYDROPONIC COMBIAFS.S WHITE",
      description: "High-performance white flexible air duct for clean room hydroponic applications",
      image: "/images/products/flexible-ducts/Hydroponic combiafs.s white.webp",
      link: "/products/hydroponic-combiafs-s-white",
      features: [
        "White finish for light reflection",
        "Clean room compatible",
        "Temperature stable",
        "Moisture resistant"
      ]
    },
    {
      name: "HYDROPONIC ALUAFS ANTIMOLD",
      description: "Antimicrobial aluminum flexible air duct for mold prevention in hydroponic environments",
      image: "/images/products/flexible-ducts/Hydroponic aluafs antimold.webp",
      link: "/products/hydroponic-aluafs-antimold",
      features: [
        "Anti-mold properties",
        "Aluminum construction",
        "Inhibits microbial growth",
        "Extends system lifespan"
      ]
    },
    {
      name: "HYDROPONIC ALUAFS SHINE",
      description: "Reflective aluminum flexible air duct for improved light distribution in hydroponic setups",
      image: "/images/products/flexible-ducts/Hydroponic aluafs shine.webp",
      link: "/products/hydroponic-aluafs-shine",
      features: [
        "Highly reflective surface",
        "Maximizes light efficiency",
        "Heat reflective properties",
        "Premium aluminum construction"
      ]
    }
  ],
  features: [
    "Specialized construction for hydroponic environments",
    "Anti-microbial and anti-mold properties for clean growing conditions",
    "Superior flexibility for complex installation requirements",
    "Temperature and humidity resistant materials",
    "Various reflective properties for light management",
    "Available in multiple diameters to suit different system sizes",
    "Custom lengths available for specialized installations",
    "Designed for optimal airflow in controlled growing environments"
  ],
  applications: [
    "Commercial Hydroponic Farms",
    "Vertical Farming Systems",
    "Indoor Growing Facilities",
    "Cannabis Cultivation",
    "Greenhouse Climate Control",
    "Aeroponic Systems",
    "Research Facilities",
    "Controlled Environment Agriculture",
    "Urban Farming Operations",
    "Home Hydroponic Setups"
  ],
  benefits: [
    {
      title: "Optimized Growth",
      description: "Precise climate control for enhanced plant development and yields",
      icon: Shield,
    },
    {
      title: "System Longevity",
      description: "Anti-microbial properties extend equipment lifespan and reduce maintenance",
      icon: Wind,
    },
    {
      title: "Energy Efficiency",
      description: "Improved airflow characteristics reduce power consumption in HVAC systems",
      icon: Gauge,
    },
    {
      title: "Climate Control",
      description: "Superior performance in maintaining ideal growing conditions",
      icon: Zap,
    }
  ],
  specifications: {
    material: "Various (Aluminum, Composite, Specialized Polymers)",
    temperatureRange: "-20°C to +80°C",
    wallThickness: "100-200 microns (depending on model)",
    innerDiameter: "100mm to 400mm (standard sizes)",
    colors: "Black, White, Silver/Aluminum",
    pressureRating: "Up to 2000 Pa",
    antimicrobialTreatment: "Available on select models",
    standardLength: "6m, 10m (custom lengths available)"
  }
}

export default function HydroponicFlexibleAirDuctsPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {hydroponicDucts.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none text-white drop-shadow-sm">
              {hydroponicDucts.name}
            </h1>
            <p className="mt-6 text-xl text-blue-100">{hydroponicDucts.description}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950">Our Hydroponic Flexible Air Duct Products</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our specialized range of flexible air ducts designed for hydroponic growing environments
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hydroponicDucts.types.map((product, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative">
                <div className="relative h-52">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-blue-950">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {product.link && (
                    <div className="mt-4">
                      <Link href={product.link} className="flex items-center text-blue-600 font-medium hover:text-blue-700">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </CardContent>
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
                  {hydroponicDucts.features.map((feature, index) => (
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
                  {hydroponicDucts.applications.map((application, index) => (
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
                {Object.entries(hydroponicDucts.specifications).map(([key, value], index) => (
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
              Why choose our Hydroponic Flexible Air Ducts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {hydroponicDucts.benefits.map((benefit, index) => (
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
              Contact our expert team today to discuss your hydroponic ventilation requirements and receive a customized quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-blue-900">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-100 hover:bg-blue-800">
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 