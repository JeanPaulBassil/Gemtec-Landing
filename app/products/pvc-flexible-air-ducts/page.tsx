import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const pvcFlexibleAirDucts = {
  name: "PVC Flexible Air Ducts",
  description: "Premium PVC flexible air ducts designed for superior performance in ventilation and air conditioning systems. Our range of PVC ducts provides excellent durability, flexibility, and resistance properties for various industrial and commercial applications.",
  category: "Flexible Ducts",
  types: [
    {
      name: "ISOAFS-PVC",
      description: "Insulated flexible PVC air duct for thermal efficiency",
      image: "/images/products/flexible-ducts/Isoafs-PVC.webp",
      link: "/products/isoafs-pvc",
      features: [
        "Thermal insulation",
        "Excellent noise reduction",
        "High flexibility",
        "PVC construction"
      ]
    },
    {
      name: "VINYLAFS",
      description: "Vinyl flexible air duct for versatile applications",
      image: "/images/products/flexible-ducts/Vinylafs.webp",
      link: "/products/vinylafs",
      features: [
        "Lightweight design",
        "Chemical resistance",
        "Easy installation",
        "Cost-effective solution"
      ]
    },
    {
      name: "PVCAFS.MI",
      description: "Special PVC air duct with improved mechanical properties",
      image: "/images/products/flexible-ducts/Pvcafs.M1.webp",
      link: "/products/pvcafs-mi",
      features: [
        "Impact resistance",
        "Abrasion resistant",
        "Medium-duty applications",
        "Enhanced durability"
      ]
    },
    {
      name: "PVCAFS",
      description: "Standard flexible PVC air duct for general applications",
      image: "/images/products/flexible-ducts/Pvcafs.webp",
      link: "/products/pvcafs",
      features: [
        "General purpose use",
        "Good flexibility",
        "Tear resistance",
        "Wide diameter range"
      ]
    },
    {
      name: "PVCAFS-HEAVY",
      description: "Heavy-duty PVC flexible air duct for demanding industrial environments",
      image: "/images/products/flexible-ducts/Pvcafs-HEAVY.webp",
      link: "/products/pvcafs-heavy",
      features: [
        "Heavy-duty construction",
        "Industrial strength",
        "Reinforced structure",
        "High pressure resistance"
      ]
    },
    {
      name: "ISOAFS VINYL",
      description: "Insulated vinyl flexible air duct combining thermal efficiency with vinyl benefits",
      image: "/images/products/flexible-ducts/Isoafs VINYL.webp",
      link: "/products/isoafs-vinyl",
      features: [
        "Thermal insulation",
        "Vinyl construction",
        "Weather resistant",
        "Moisture protection"
      ]
    }
  ]
}

export default function PVCFlexibleAirDuctsPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {pvcFlexibleAirDucts.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none text-white drop-shadow-sm">
              {pvcFlexibleAirDucts.name}
            </h1>
            <p className="mt-6 text-xl text-blue-100">{pvcFlexibleAirDucts.description}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950">Our PVC Flexible Air Duct Products</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of PVC flexible ducts for diverse applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pvcFlexibleAirDucts.types.map((product, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative h-48">
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

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Contact our expert team today to discuss your PVC Flexible Air Duct requirements and receive a customized quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-blue-900">
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 