import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"

const polyesterDucts = {
  name: "Polyester Flexible Air Ducts",
  description: "High-quality polyester flexible air ducts designed for superior performance in ventilation and air conditioning systems. Our range includes both insulated and non-insulated options for diverse applications.",
  category: "Flexible Ducts",
  types: [
    {
      name: "ISOAFS POLY ECOSOFT",
      description: "Thermally insulated polyester flexible air duct with eco-friendly design",
      image: "/images/products/flexible-ducts/isoafs-poly-ecosoft.webp",
      link: "/products/isoafs-poly-ecosoft",
      features: [
        "Thermal insulation",
        "Eco-friendly materials",
        "High flexibility",
        "Superior durability"
      ]
    },
    {
      name: "POLYAFS",
      description: "Non-insulated polyester flexible air duct for versatile applications",
      image: "/images/products/flexible-ducts/polyafs.webp",
      link: "/products/polyafs",
      features: [
        "Lightweight design",
        "High strength",
        "Easy installation",
        "Cost-effective"
      ]
    },
    {
      name: "ISOAFS-POLY",
      description: "Premium insulated polyester flexible air duct for demanding applications",
      image: "/images/products/flexible-ducts/isoafs-poly.webp",
      link: "/products/isoafs-poly",
      features: [
        "Advanced insulation",
        "Premium construction",
        "Maximum durability",
        "Superior performance"
      ]
    }
  ]
}

export default function PolyesterFlexibleAirDuctsPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {polyesterDucts.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none text-white drop-shadow-sm">
              {polyesterDucts.name}
            </h1>
            <p className="mt-6 text-xl text-blue-100">{polyesterDucts.description}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950">Our Polyester Flexible Air Duct Products</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of polyester flexible ducts for diverse applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {polyesterDucts.types.map((product, index) => (
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
    </>
  )
} 