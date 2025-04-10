import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, ShieldCheck, Wrench, Layers, HardHat } from "lucide-react"
import Link from "next/link"

const airDuctEquipments = {
  name: "Air Duct Equipments",
  description: "Essential accessories and components for installing and maintaining high-performance duct systems. Our range includes professional-grade gasket tapes and clamps designed for secure, airtight connections in HVAC installations.",
  category: "Flexible Ducts",
  products: [
    {
      name: "GASKET TAPE",
      description: "High-quality sealing tape designed for creating airtight connections in HVAC duct systems.",
      image: "/air duct/Air duct equipments/GASKET TAPE.webp",
      link: "/products/air-duct-equipments/gasket-tape",
      features: [
        "Superior adhesive properties",
        "Excellent air sealing capabilities",
        "Durable and long-lasting",
        "Easy application",
        "Professional-grade quality"
      ]
    },
    {
      name: "PRATI G CLAMPS",
      description: "Heavy-duty metal clamps for secure fastening of duct connections in professional HVAC installations.",
      image: "/air duct/Air duct equipments/PRATI G CLAMPS.webp",
      link: "/products/air-duct-equipments/prati-g-clamps",
      features: [
        "Superior clamping strength",
        "Durable metal construction",
        "Corrosion-resistant",
        "Easy installation",
        "Reliable long-term performance"
      ]
    }
  ],
  features: [
    "Professional-grade materials for exceptional durability",
    "Designed for secure and airtight duct connections",
    "Compatible with standard HVAC duct systems",
    "Easy installation and maintenance",
    "Tested for long-term reliability",
    "Suitable for commercial and residential applications",
    "Helps maintain system efficiency and performance",
    "Prevents air leakage and energy loss"
  ],
  applications: [
    "Commercial HVAC Systems",
    "Residential Duct Installations",
    "Industrial Ventilation",
    "Air Distribution Networks",
    "HVAC System Maintenance",
    "New Construction Projects",
    "System Upgrades and Retrofits",
    "Professional Ductwork Installation"
  ],
  benefits: [
    {
      title: "Enhanced System Integrity",
      description: "Ensures secure connections for reliable system performance",
      icon: ShieldCheck,
    },
    {
      title: "Professional Installation",
      description: "Simplifies installation process with quality components",
      icon: HardHat,
    },
    {
      title: "Improved Efficiency",
      description: "Prevents air leakage for optimal system efficiency",
      icon: Layers,
    },
    {
      title: "Durability",
      description: "Long-lasting materials for extended service life",
      icon: Wrench,
    },
  ],
  specifications: {
    materials: "High-grade adhesives and galvanized steel",
    compatibility: "Works with standard duct systems and components",
    applications: "Commercial, residential, and industrial HVAC systems",
    installation: "Professional-grade for easy application",
    performance: "Designed for optimal air sealing and connection integrity",
    durability: "Engineered for long-term reliability in variable conditions",
    standards: "Manufactured to meet industry installation requirements",
    maintenance: "Minimal maintenance requirements after proper installation"
  }
}

export default function AirDuctEquipmentsPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {airDuctEquipments.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none text-white drop-shadow-sm">
              {airDuctEquipments.name}
            </h1>
            <p className="mt-6 text-xl text-blue-100">{airDuctEquipments.description}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950">Our Duct Equipment Products</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our range of professional HVAC duct accessories and components
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {airDuctEquipments.products.map((product, index) => (
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
                  {airDuctEquipments.features.map((feature, index) => (
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
                  {airDuctEquipments.applications.map((application, index) => (
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
                {Object.entries(airDuctEquipments.specifications).map(([key, value], index) => (
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
              Why choose our Air Duct Equipment products
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {airDuctEquipments.benefits.map((benefit, index) => (
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
              Contact our expert team today to discuss your Air Duct Equipment requirements and receive a customized quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-blue-900">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-100 hover:bg-blue-800">
                Download Catalogue
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 