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
  ],
  features: [
    "Premium-grade materials for extended durability",
    "Precision engineering for optimal airflow efficiency",
    "Low noise operation across all product types",
    "Multiple sizing options to suit various applications",
    "Easy installation with integrated mounting features",
    "Contemporary designs that complement modern interiors",
    "Weather-resistant options for exterior applications",
    "Maintenance-friendly construction for long-term performance"
  ],
  applications: [
    "Residential HVAC Systems",
    "Commercial Buildings",
    "Office Environments",
    "Retail Spaces",
    "Educational Facilities",
    "Healthcare Settings",
    "Hospitality Industry",
    "Industrial Ventilation",
    "Transportation Terminals",
    "Clean Room Environments"
  ],
  benefits: [
    {
      title: "Optimized Airflow",
      description: "Precisely engineered for ideal air distribution patterns",
      icon: Wind,
    },
    {
      title: "Energy Efficiency",
      description: "Designed to minimize resistance and reduce HVAC energy consumption",
      icon: Zap,
    },
    {
      title: "Comfort Control",
      description: "Improves environmental comfort through balanced ventilation",
      icon: Gauge,
    },
    {
      title: "Lasting Performance",
      description: "Durable construction ensures long service life with minimal maintenance",
      icon: Shield,
    }
  ],
  specifications: {
    material: "Aluminum, ABS, Polymer Blends",
    finishes: "White, Satin, Metallic (standard options)",
    mountingOptions: "Screw-mount, Spring-clips, Magnetic, Adhesive",
    airflowCapacity: "Varies by model (30-500 CFM)",
    sizeRange: "4\" to 24\" diameter, 6\"x6\" to 30\"x30\" square/rectangular",
    noiseLevel: "<25dB at recommended airflow rates",
    warranty: "5-year limited warranty on most models",
    standards: "Compliant with ASHRAE and HVAC industry standards"
  }
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
              Explore our comprehensive selection of ventilation grills and air distribution solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {grillsProducts.types.map((product, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full relative">
                {product.isNew && (
                  <Badge variant="default" className="absolute top-3 left-3 z-10 bg-amber-500 hover:bg-amber-600">
                    NEW PRODUCT
                  </Badge>
                )}
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
                  {grillsProducts.features.map((feature, index) => (
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
                  {grillsProducts.applications.map((application, index) => (
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
                {Object.entries(grillsProducts.specifications).map(([key, value], index) => (
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

      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950">Key Benefits</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Why choose our premium ventilation grills
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {grillsProducts.benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-950 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-950 mb-6">Ready to Improve Your Ventilation?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our expert team is ready to help you select the perfect grills solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Download Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 