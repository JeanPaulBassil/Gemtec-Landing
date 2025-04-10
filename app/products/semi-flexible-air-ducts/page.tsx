import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, ArrowRight, Shield, Wind, Gauge, Zap } from "lucide-react"
import Link from "next/link"

const semiFlexibleAirDucts = {
  name: "Semi Flexible Air Ducts",
  description: "Premium semi-rigid aluminum air ducts designed for superior durability and airflow in HVAC systems. Our semi-flexible ducts provide excellent structural integrity while maintaining the flexibility needed for complex installations.",
  category: "Air Ducts & Ventilation",
  types: [
    {
      name: "SEMIAFS",
      description: "Standard semi-flexible aluminum air duct for general HVAC applications",
      image: "/images/products/flexible-ducts/Semiafs.webp",
      link: "/products/semiafs",
      isNew: false,
      features: [
        "Durable aluminum construction",
        "Semi-rigid design for stability",
        "Excellent air flow characteristics",
        "Easy installation"
      ]
    },
    {
      name: "SEMIAFS-INOX",
      description: "Stainless steel semi-flexible air duct for corrosive environments",
      image: "/images/products/flexible-ducts/Semiafs-Inox.webp",
      link: "/products/semiafs-inox",
      isNew: false,
      features: [
        "Corrosion resistant stainless steel",
        "High temperature applications",
        "Superior durability in harsh conditions",
        "Chemical resistant"
      ]
    },
    {
      name: "SEMIAFS.C",
      description: "Semi-flexible aluminum air duct designed for extended lengths",
      image: "/images/products/flexible-ducts/Semiaf.C.webp",
      link: "/products/semiafs-c",
      isNew: false,
      features: [
        "Extended length capability",
        "Consistent diameter throughout",
        "Reinforced structure",
        "Optimized for straight runs"
      ]
    },
    {
      name: "PHONIC SEMIAFS",
      description: "Sound-attenuating semi-flexible air duct with thermal insulation",
      image: "/images/products/flexible-ducts/Phonic Semiafs.webp",
      link: "/products/phonic-semiafs",
      isNew: false,
      features: [
        "Sound dampening design",
        "Thermal insulation layer",
        "Reduced noise transmission",
        "Energy efficient"
      ]
    }
  ],
  features: [
    "Semi-rigid construction maintains shape while allowing directional changes",
    "Superior structural integrity compared to fully flexible ducts",
    "Excellent airflow characteristics with minimal pressure drop",
    "Aluminum and stainless steel options for various environmental needs",
    "Designed for commercial and industrial HVAC applications",
    "Mechanically robust with high crush resistance",
    "Available with acoustic and thermal insulation options",
    "Variety of diameters and lengths to suit different requirements"
  ],
  applications: [
    "Commercial HVAC Systems",
    "Industrial Ventilation",
    "Kitchen Extraction",
    "Hospital Air Systems",
    "Clean Room Environments",
    "Marine Applications",
    "Data Center Cooling",
    "Manufacturing Facilities",
    "Sound Attenuation Systems",
    "High Temperature Exhaust"
  ],
  benefits: [
    {
      title: "Structural Integrity",
      description: "Maintains shape and resists crushing while allowing necessary flexibility",
      icon: Shield,
    },
    {
      title: "Airflow Efficiency",
      description: "Smooth interior surface minimizes pressure drop and optimizes air movement",
      icon: Wind,
    },
    {
      title: "Installation Versatility",
      description: "Easier to work with than rigid ducting while providing better performance than fully flexible options",
      icon: Gauge,
    },
    {
      title: "System Longevity",
      description: "Durable materials and construction ensure extended service life and reliability",
      icon: Zap,
    }
  ],
  specifications: {
    material: "Aluminum, Stainless Steel, or Composite depending on model",
    temperatureRange: "-30°C to +250°C (varies by type)",
    wallThickness: "0.1mm to 0.15mm (standard)",
    diameterRange: "80mm to 500mm (standard sizes)",
    compressionRatio: "Up to 1:5 depending on model",
    pressureRating: "Up to 2500 Pa positive pressure",
    standardLength: "3m and 6m sections (custom lengths available)",
    fireRating: "Available with various fire-rated options depending on model"
  }
}

export default function SemiFlexibleAirDuctsPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {semiFlexibleAirDucts.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none text-white drop-shadow-sm">
              {semiFlexibleAirDucts.name}
            </h1>
            <p className="mt-6 text-xl text-blue-100">{semiFlexibleAirDucts.description}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950">Our Semi Flexible Air Duct Products</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of semi-flexible air ducts for diverse applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {semiFlexibleAirDucts.types.map((product, index) => (
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
                  {semiFlexibleAirDucts.features.map((feature, index) => (
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
                  {semiFlexibleAirDucts.applications.map((application, index) => (
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
                {Object.entries(semiFlexibleAirDucts.specifications).map(([key, value], index) => (
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
              Why choose our Semi Flexible Air Ducts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {semiFlexibleAirDucts.benefits.map((benefit, index) => (
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
              Contact our expert team today to discuss your Semi Flexible Air Duct requirements and receive a customized quote for your project.
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