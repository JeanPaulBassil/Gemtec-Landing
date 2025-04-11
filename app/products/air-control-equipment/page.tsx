import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, ArrowRight, Wind, Gauge, Settings, Sliders } from "lucide-react"
import Link from "next/link"

const airControlEquipment = {
  name: "Air Control Equipment",
  description: "Professional grade air control components designed for precise airflow management in HVAC systems. Our products ensure efficient air distribution and optimal system performance.",
  category: "Flexible Ducts",
  products: [
    {
      name: "PLASTIC BACK DROUGHT SHUTTER",
      description: "Durable plastic back drought shutters designed to prevent backdraft and maintain proper airflow in ventilation systems.",
      image: "/PLASTIC BLACK DROUGHT SHUTTER.png",
      link: "/products/air-control-equipment/plastic-back-drought-shutter",
      features: [
        "Durable plastic construction",
        "Prevents unwanted air backflow",
        "Smooth operation",
        "Easy installation",
        "Available in various sizes"
      ]
    },
    {
      name: "METAL BACK DROUGHT SHUTTERS",
      description: "Robust metal back drought shutters providing superior protection against backdraft in ventilation systems.",
      image: "/air duct/Air control equipments/METAL BACK DROUGHT SHUTTERS.webp",
      link: "/products/air-control-equipment/metal-back-drought-shutters",
      features: [
        "Premium metal construction",
        "Enhanced durability for commercial applications",
        "Effective backflow prevention",
        "Professional installation options",
        "Multiple size configurations available"
      ]
    },
    {
      name: "ROUND AIR DAMPER",
      description: "Precision engineered round air dampers for accurate airflow control in HVAC systems.",
      image: "/air duct/Air control equipments/ROUND AIR DAMPER.webp",
      link: "/products/air-control-equipment/round-air-damper",
      features: [
        "Precise airflow adjustment",
        "Durable metal construction",
        "Available in multiple sizes",
        "Suitable for various HVAC applications",
        "Easy integration with existing systems"
      ]
    }
  ],
  features: [
    "Professional grade construction for long-term reliability",
    "Precision engineered for accurate airflow control",
    "Multiple size options to suit various applications",
    "Easy installation and maintenance",
    "Compatible with standard HVAC systems",
    "Optimal performance in commercial and residential settings",
    "Effective prevention of air backflow",
    "Smooth operation with minimal noise"
  ],
  applications: [
    "Commercial HVAC Systems",
    "Residential Ventilation",
    "Industrial Air Management",
    "Clean Room Applications",
    "Kitchen Extraction Systems",
    "Bathroom Ventilation",
    "Office Building HVAC",
    "Retail Space Ventilation"
  ],
  benefits: [
    {
      title: "Precise Control",
      description: "Accurate regulation of airflow for optimal system performance",
      icon: Sliders,
    },
    {
      title: "Superior Durability",
      description: "Built with high-quality materials for long service life",
      icon: Settings,
    },
    {
      title: "Improved Efficiency",
      description: "Helps maintain proper system airflow balance",
      icon: Gauge,
    },
    {
      title: "Versatile Applications",
      description: "Suitable for a wide range of HVAC installations",
      icon: Wind,
    },
  ],
  specifications: {
    materials: "High-grade plastic and metal options",
    sizes: "Multiple diameter configurations available",
    installation: "Compatible with standard duct systems",
    operation: "Manual adjustment with smooth action",
    maintenance: "Low maintenance design for long service life",
    efficiency: "Optimized for minimal airflow restriction",
    applications: "Suitable for commercial and residential use",
    standards: "Compliant with industry ventilation standards"
  }
}

export default function AirControlEquipmentPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {airControlEquipment.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none text-white drop-shadow-sm">
              {airControlEquipment.name}
            </h1>
            <p className="mt-6 text-xl text-blue-100">{airControlEquipment.description}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950">Our Air Control Products</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of air control components
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {airControlEquipment.products.map((product, index) => (
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
                  {airControlEquipment.features.map((feature, index) => (
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
                  {airControlEquipment.applications.map((application, index) => (
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
                {Object.entries(airControlEquipment.specifications).map(([key, value], index) => (
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
              Why choose our Air Control Equipment products
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {airControlEquipment.benefits.map((benefit, index) => (
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
              Contact our expert team today to discuss your Air Control Equipment requirements and receive a customized quote for your project.
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