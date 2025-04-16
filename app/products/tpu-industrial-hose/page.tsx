import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, ArrowRight, Shield, Wind, Gauge, Zap } from "lucide-react"
import Link from "next/link"

const tpuIndustrialHose = {
  name: "TPU Industrial Hose",
  description: "Premium thermoplastic polyurethane industrial hoses designed for superior durability and flexibility in demanding environments. Our TPU hoses provide excellent abrasion resistance and reliable performance across various industrial applications.",
  category: "Industrial Hoses",
  types: [
    {
      name: "AFSTPU.MED",
      description: "Medical grade TPU hose for healthcare and pharmaceutical applications",
      image: "/images/products/flexible-ducts/AFSTPU.MED.webp",
      isNew: true,
      link: "/products/afstpu-med",
      features: [
        "Medical grade materials",
        "Sterilization compatible",
        "FDA compliant",
        "Flexible and durable"
      ]
    },
    {
      name: "AFSTPU ELASTIC",
      description: "Highly elastic TPU hose with superior flexibility for dynamic applications",
      image: "/images/products/flexible-ducts/AFSTPU ELASTIC.webp",
      isNew: true,
      link: "/products/afstpu-elastic",
      features: [
        "Enhanced elasticity",
        "Excellent rebound properties",
        "Maintains shape under pressure",
        "Wide temperature range"
      ]
    },
    {
      name: "TPVC TRANSPARENT",
      description: "Crystal clear TPU hose allowing visual monitoring of flow",
      image: "/images/products/flexible-ducts/TPVC TRANSPARENT.webp",
      link: "/products/tpvc-transparent",
      features: [
        "Transparent construction",
        "Visual flow monitoring",
        "High clarity maintained over time",
        "Chemical resistant"
      ]
    },
    {
      name: "AFSTPVC",
      description: "Robust TPU-PVC composite hose for industrial environments",
      image: "/images/products/flexible-ducts/AFSTPVC.webp",
      link: "/products/afstpvc",
      features: [
        "Composite construction",
        "Enhanced durability",
        "Resistant to kinking",
        "Industrial grade"
      ]
    },
    {
      name: "AFSTPU(STANDARD)",
      description: "Standard TPU hose for general industrial applications",
      image: "/images/products/flexible-ducts/AFSTPU(STANDARD).webp",
      link: "/products/afstpu-standard",
      features: [
        "Versatile application",
        "Cost-effective solution",
        "Good abrasion resistance",
        "Standard industrial compliance"
      ]
    },
    {
      name: "AFSTPU(FOODGRADE)",
      description: "Food-safe TPU hose for food and beverage processing",
      image: "/images/products/flexible-ducts/AFSTPU(FOODGRADE).webp",
      link: "/products/afstpu-foodgrade",
      features: [
        "Food-grade materials",
        "Meets FDA requirements",
        "Easy cleaning and sanitizing",
        "Taste and odor neutral"
      ]
    },
    {
      name: "AFSTPU(ANTISTATIC)",
      description: "Antistatic TPU hose for applications requiring static dissipation",
      image: "/images/products/flexible-ducts/AFSTPU(ANTISTATIC).webp",
      link: "/products/afstpu-antistatic",
      features: [
        "Static dissipative properties",
        "Prevents dust attraction",
        "Safe for volatile environments",
        "Compliant with ESD standards"
      ]
    },
    {
      name: "AFSPCA",
      description: "Advanced composite hose for specialized industrial applications",
      image: "/images/products/flexible-ducts/AFSPCA.webp",
      isNew: true,
      link: "/products/afspca",
      features: [
        "Advanced composite materials",
        "Superior mechanical properties",
        "Extended service life",
        "Premium performance"
      ]
    }
  ],
  features: [
    "Exceptional abrasion resistance for extended service life",
    "Superior flexibility across wide temperature range (-40°C to +90°C)",
    "Excellent chemical resistance to oils, fuels, and many solvents",
    "High tensile strength and tear resistance",
    "Various wall thicknesses available for different pressure requirements",
    "Multiple color options for easy identification",
    "Custom lengths and diameters available",
    "Low friction inner surface for improved flow characteristics"
  ],
  applications: [
    "Material Handling",
    "Pneumatic Systems",
    "Food Processing",
    "Medical Equipment",
    "Automotive Industry",
    "Chemical Transfer",
    "Dust Collection",
    "Robotics",
    "Pharmaceutical Processing",
    "Vacuum Systems"
  ],
  benefits: [
    {
      title: "Durability",
      description: "Exceptional resistance to wear, abrasion, and environmental factors",
      icon: Shield,
    },
    {
      title: "Flexibility",
      description: "Maintains flexibility at both high and low temperatures",
      icon: Wind,
    },
    {
      title: "Performance",
      description: "Outstanding flow characteristics with minimal pressure drop",
      icon: Gauge,
    },
    {
      title: "Efficiency",
      description: "Lightweight construction reduces system load and energy consumption",
      icon: Zap,
    }
  ],
  specifications: {
    material: "Thermoplastic Polyurethane (TPU)",
    temperatureRange: "-40°C to +90°C",
    wallThickness: "0.5mm to 2.0mm (depending on model)",
    innerDiameter: "6mm to 50mm (standard sizes)",
    colors: "Clear, Black, Blue, Yellow (standard colors)",
    pressureRating: "Up to 15 bar (depending on diameter and wall thickness)",
    minBendRadius: "2x to 4x inner diameter",
    standardLength: "25m, 50m rolls (custom lengths available)"
  }
}

export default function TPUIndustrialHosePage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {tpuIndustrialHose.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none text-white drop-shadow-sm">
              {tpuIndustrialHose.name}
            </h1>
            <p className="mt-6 text-xl text-blue-100">{tpuIndustrialHose.description}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950">Our TPU Industrial Hose Products</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of TPU industrial hoses for diverse applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tpuIndustrialHose.types.map((product, index) => (
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