import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal, FadeInStagger, HoverScale } from "@/components/ui/animations"
import { Check, ArrowRight, Shield, Gauge, Award, Sparkles } from "lucide-react"
import Link from "next/link"

const ulListedConnector = {
  name: "UL Listed Flexible Air Connector",
  description: "Premium UL certified flexible air connectors designed for superior performance and safety in HVAC systems. Our connectors meet the highest industry standards and provide reliable, efficient air distribution solutions.",
  category: "Flexible Air Connectors",
  products: [
    {
      name: "ISOAFS- ALU UL",
      description: "High-performance aluminum UL listed flexible air connector with superior insulation",
      image: "/images/products/flexible-ducts/ISOAFS- ALU UL.webp",
      link: "/products/isoafs-alu-ul",
      features: [
        "UL Listed certification",
        "Premium aluminum construction",
        "Enhanced thermal insulation",
        "Professional-grade durability"
      ]
    },
    {
      name: "ALUAFS UL",
      description: "Premium aluminum UL listed flexible air connector for professional HVAC applications",
      image: "/images/products/flexible-ducts/ULListedFlexibleAirConnector.webp",
      link: "/products/aluafs-ul",
      features: [
        "UL safety certification",
        "High-grade aluminum material",
        "Superior flexibility",
        "Enhanced air flow performance"
      ]
    }
  ],
  features: [
    "UL Listed certification ensuring highest safety standards",
    "Premium-grade aluminum construction for durability",
    "Advanced thermal and acoustic insulation properties",
    "Professional installation compatibility",
    "Flexible design for easy routing and installation",
    "Fire-resistant properties meeting UL requirements",
    "Multiple size options available",
    "Long service life and reliable performance"
  ],
  applications: [
    "Commercial HVAC Systems",
    "Industrial Ventilation",
    "Safety-Critical Installations",
    "Professional Air Distribution",
    "Certified Building Projects",
    "High-Performance HVAC",
    "Commercial Buildings",
    "Industrial Facilities"
  ],
  benefits: [
    {
      title: "UL Certified Safety",
      description: "Meets rigorous UL safety standards for peace of mind",
      icon: Shield,
    },
    {
      title: "Premium Performance",
      description: "Superior airflow and thermal properties",
      icon: Gauge,
    },
    {
      title: "Quality Assured",
      description: "Certified materials and construction",
      icon: Award,
    },
    {
      title: "Professional Grade",
      description: "Designed for professional HVAC applications",
      icon: Sparkles,
    },
  ],
  specifications: {
    construction: "Premium grade aluminum with reinforced structure",
    certification: "UL Listed",
    sizes: "Multiple diameter options available",
    temperature: "-30°C to +140°C",
    pressure: "Up to 2500 Pa positive pressure",
    fireRating: "Meets UL fire safety requirements",
    insulation: "High-performance thermal and acoustic insulation",
    compatibility: "Standard HVAC system compatibility"
  }
}

export default function ULListedConnectorPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {ulListedConnector.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none text-white drop-shadow-sm">
              {ulListedConnector.name}
            </h1>
            <p className="mt-6 text-xl text-blue-100">{ulListedConnector.description}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950">Our UL Listed Products</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our range of UL certified flexible air connectors
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {ulListedConnector.products.map((product, index) => (
              <Link key={index} href={product.link || "#"} className={`block ${!product.link && 'pointer-events-none'}`}>
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative h-72">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-950">{product.name}</CardTitle>
                    <CardDescription className="text-lg">{product.description}</CardDescription>
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
                    {product.link && (
                      <div className="mt-4 flex items-center justify-center">
                        <div className="bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors inline-flex items-center">
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Removing Key Features, Applications, Technical Specifications, Key Benefits, and Ready to Get Started sections */}
    </>
  )
} 