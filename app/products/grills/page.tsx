import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, ArrowRight, Shield, Wind, Gauge, Zap } from "lucide-react"
import Link from "next/link"

const grillsProducts = {
  name: "Grills",
  description: "Premium air grills designed for optimal air distribution and ventilation in various environments. Our range includes door transfer grills, air deflectors, gravity louvers, linear grills, and smart outlets to meet diverse airflow requirements.",
  category: "Air Distribution",
  types: [
    {
      name: "Door Transfer Grills",
      description: "Efficient air transfer solutions for doorways and internal partitions",
      image: "/images/products/flexible-ducts/Door Transfer Grills.webp",
      isNew: false,
      link: "/products/door-transfer-grills",
      features: [
        "Allows airflow between rooms",
        "Easy installation",
        "Multiple size options",
        "Durable construction"
      ]
    },
    {
      name: "Air Deflector",
      description: "Directional air flow control for optimal room ventilation",
      image: "/images/products/flexible-ducts/AIR DEFLECTOR.webp",
      isNew: false,
      link: "/products/air-deflector",
      features: [
        "Adjustable airflow direction",
        "Improves air distribution",
        "Easy mounting options",
        "Modern design"
      ]
    },
    {
      name: "Gravity Louvers with 4 Set Collar",
      description: "Self-regulating ventilation with integrated mounting collar",
      image: "/images/products/flexible-ducts/GRAVITY LOUVERS WITH 4 SET COLLAR.webp",
      isNew: false,
      link: "/products/gravity-louvers-4-set-collar",
      features: [
        "Automatic opening/closing",
        "Pre-installed collar for easy connection",
        "Weather-resistant construction",
        "Low maintenance"
      ]
    },
    {
      name: "Round Linear Grills with Adjustable Collar",
      description: "Circular grills with precision airflow adjustment capability",
      image: "/images/products/flexible-ducts/ROUND LINEAR GRILLS WITH ADJUSTABLE COLLAR.webp",
      isNew: false,
      link: "/products/round-linear-grills-adjustable",
      features: [
        "Adjustable collar for precise flow",
        "360° air distribution",
        "Easy installation",
        "Durable construction"
      ]
    },
    {
      name: "Round Linear Grills with Collar",
      description: "Standard circular grills with integrated mounting collar",
      image: "/images/products/flexible-ducts/ROUND LINEAR GRILLS WITH COLLAR.webp",
      isNew: false,
      link: "/products/round-linear-grills",
      features: [
        "Fixed collar for secure mounting",
        "Even air distribution",
        "Professional finish",
        "Multiple size options"
      ]
    },
    {
      name: "C Smart Cowl Outlet",
      description: "Advanced smart outlet with integrated control features",
      image: "/images/products/flexible-ducts/C SMART COWL OUTLET.webp",
      isNew: false,
      link: "/products/c-smart-cowl-outlet",
      features: [
        "Smart airflow regulation",
        "Weather-resistant design",
        "Low profile appearance",
        "Durable construction"
      ]
    },
    {
      name: "G Smart Gravity Louver",
      description: "Louvres balanced for optimal air flow and pressure control",
      image: "/images/products/flexible-ducts/G SMART GRAVITY LOUVER.webp",
      isNew: false,
      link: "/products/g-smart-gravity-louver",
      features: [
        "Gravity-operated mechanism",
        "No power required",
        "Prevents backflow",
        "Quiet operation"
      ]
    },
    {
      name: "L Smart Linear Grill",
      description: "Premium linear grill with smart airflow distribution technology",
      image: "/images/products/flexible-ducts/L SMART LINEAR GRILL.webp",
      isNew: false,
      link: "/products/l-smart-linear-grill",
      features: [
        "Optimized linear airflow pattern",
        "Contemporary design",
        "Multiple installation options",
        "Durable materials"
      ]
    }
  ]
}

export default function GrillsPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {grillsProducts.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none text-white drop-shadow-sm">
              {grillsProducts.name}
            </h1>
            <p className="mt-6 text-xl text-blue-100">{grillsProducts.description}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950">Our Grills Product Range</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive selection of air grills designed for various applications and environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {grillsProducts.types.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {product.isNew && (
                    <Badge className="absolute top-4 right-4 bg-blue-600">New</Badge>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={product.link}>
                    <Button className="w-full">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 