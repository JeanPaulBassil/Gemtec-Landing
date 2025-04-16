import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, ArrowRight, Shield, Wind, Gauge, Zap } from "lucide-react"
import Link from "next/link"

const flexibleConnector = {
  name: "Flexible Connector",
  description: "High-quality flexible connectors and adapters designed for reliable connections in various ventilation and air duct systems. Our connectors ensure secure and efficient connections between ducts and equipment.",
  category: "Air Duct Accessories",
  types: [
    {
      name: "AFS CIRCULAR PU CONNECTOR",
      description: "Durable polyurethane circular connector for versatile applications",
      image: "/images/products/flexible-ducts/AFS%20CIRCULAR%20PU%20CONNECTOR.webp",
      link: "/products/afs-circular-pu-connector",
      features: [
        "High durability material",
        "Excellent air sealing",
        "Easy installation",
        "Various sizes available"
      ]
    },
    {
      name: "AFSCONNECTOR[SILICONE]",
      description: "Silicone-based connector offering flexible and heat-resistant solutions",
      image: "/images/products/flexible-ducts/AFSCONNECTOR%5BSILICONE%5D.webp",
      link: "/products/afsconnector-silicone",
      features: [
        "Heat resistant up to 180°C",
        "Highly flexible material",
        "Chemical resistant",
        "Long service life"
      ]
    },
    {
      name: "AFSCONNECTOR[NEOPRENE FORTE]",
      description: "Reinforced neoprene connector for demanding environments",
      image: "/images/products/flexible-ducts/AFSCONNECTOR%5BNEOPRENE%20FORTE%5D.webp",
      link: "/products/afsconnector-neoprene-forte",
      features: [
        "Extra strength reinforcement",
        "Weather resistant",
        "Vibration dampening",
        "Industrial grade"
      ]
    },
    {
      name: "AFSCONNECTOR[NEOPRENE]",
      description: "Standard neoprene connector for general applications",
      image: "/images/products/flexible-ducts/AFSCONNECTOR%5BNEOPRENE%5D.webp",
      link: "/products/afsconnector-neoprene",
      features: [
        "Good durability",
        "Cost-effective solution",
        "Oil resistant",
        "Standard compliance"
      ]
    },
    {
      name: "AFSCONNECTOR(PU) FORTE",
      description: "Reinforced polyurethane connector for high-stress applications",
      image: "/images/products/flexible-ducts/AFSCONNECTOR%28PU%29%20FORTE.webp",
      link: "/products/afsconnector-pu-forte",
      features: [
        "Heavy-duty construction",
        "Abrasion resistant",
        "High pressure rating",
        "Premium performance"
      ]
    },
    {
      name: "AFSCONNECTOR[PU]",
      description: "Standard polyurethane connector for versatile use",
      image: "/images/products/flexible-ducts/AFSCONNECTOR%5BPU%5D.webp",
      link: "/products/afsconnector-pu",
      features: [
        "Versatile application",
        "Moisture resistant",
        "Good chemical resistance",
        "Range of sizes"
      ]
    },
    {
      name: "AFSCONNECTOR[PVC] INOX",
      description: "PVC connector with stainless steel reinforcement for corrosive environments",
      image: "/images/products/flexible-ducts/AFSCONNECTOR%5BPVC%5D%20INOX.webp",
      link: "/products/afsconnector-pvc-inox",
      features: [
        "Stainless steel reinforced",
        "Corrosion resistant",
        "High pressure capability",
        "Extended service life"
      ]
    },
    {
      name: "AFSCONNECTOR[PVC] ATEX",
      description: "ATEX-compliant PVC connector for explosive atmospheres",
      image: "/images/products/flexible-ducts/AFSCONNECTOR%5BPVC%5D%20ATEX.webp",
      link: "/products/afsconnector-pvc-atex",
      features: [
        "ATEX certified",
        "Anti-static properties",
        "Flame retardant",
        "Safety compliant"
      ]
    },
    {
      name: "AFSCONNECTOR[PVC]",
      description: "Standard PVC connector for general ventilation applications",
      image: "/images/products/flexible-ducts/AFSCONNECTOR%5BPVC%5D.webp",
      link: "/products/afsconnector-pvc",
      features: [
        "Cost-effective",
        "General purpose use",
        "Moderate chemical resistance",
        "Easy installation"
      ]
    }
  ],
  features: [
    "Secure connections between air ducts and equipment",
    "Multiple material options for different environments and requirements",
    "Various sizes available to accommodate different duct diameters",
    "Excellent vibration dampening properties",
    "Quick and easy installation with various mounting options",
    "Options for high-temperature applications up to 180°C",
    "ATEX-certified options for explosive environments",
    "Reinforced models for high-pressure applications"
  ],
  applications: [
    "HVAC Systems",
    "Industrial Ventilation",
    "Dust Collection Systems",
    "Exhaust Systems",
    "Air Conditioning",
    "Clean Room Environments",
    "Marine Applications",
    "Food Processing",
    "Pharmaceutical Facilities"
  ],
  benefits: [
    {
      title: "Reliability",
      description: "Secure connections that maintain integrity during operation",
      icon: Shield,
    },
    {
      title: "Flexibility",
      description: "Accommodates movement and misalignment between connected components",
      icon: Wind,
    },
    {
      title: "Performance",
      description: "Optimized airflow with minimal pressure drop",
      icon: Gauge,
    },
    {
      title: "Efficiency",
      description: "Quick installation and maintenance, reducing downtime",
      icon: Zap,
    }
  ]
}

export default function FlexibleConnectorPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {flexibleConnector.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none text-white drop-shadow-sm">
              {flexibleConnector.name}
            </h1>
            <p className="mt-6 text-xl text-blue-100">{flexibleConnector.description}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950">Our Flexible Connector Products</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of flexible connectors for diverse applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flexibleConnector.types.map((product, index) => (
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
    </>
  )
} 