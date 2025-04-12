import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const marineCertifiedDucts = {
  name: "Marine Certified Flexible Air Duct",
  description: "Premium marine-grade flexible air ducts designed specifically for maritime applications with superior durability, corrosion resistance, and compliance with marine industry standards.",
  category: "Flexible Ducts",
  types: [
    {
      name: "SONOAFS-ALU.F ECOSOFT MARINE",
      description: "Acoustic insulated marine-grade aluminum flexible air duct with eco-friendly materials",
      image: "/images/products/flexible-ducts/Sonoafs-Alu.fb ecosoft Marine.webp",
      link: "/products/sonoafs-alu-fb-ecosoft-marine",
      features: [
        "Acoustic insulation",
        "Marine certified",
        "Eco-friendly materials",
        "Superior durability"
      ]
    },
    {
      name: "ISOAFS-ALU.F ECOSOFT MARINE",
      description: "Thermally insulated marine-grade aluminum flexible air duct for marine environments",
      image: "/images/products/flexible-ducts/Isoafs-alu.f Ecosoft Marine.webp",
      link: "/products/isoafs-alu-f-ecosoft-marine",
      features: [
        "Thermal insulation",
        "Marine certified",
        "Eco-friendly construction",
        "Corrosion resistant"
      ]
    },
    {
      name: "ALUAFS.F MARINE",
      description: "Non-insulated marine-grade aluminum flexible air duct for versatile marine applications",
      image: "/images/products/flexible-ducts/Aluafs.F Marine.webp",
      link: "/products/aluafs-f-marine",
      features: [
        "Lightweight design",
        "Marine certified",
        "High flexibility",
        "Salt-water resistant"
      ]
    }
  ]
}

export default function MarineCertifiedFlexibleAirDuctPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {marineCertifiedDucts.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none text-white drop-shadow-sm">
              {marineCertifiedDucts.name}
            </h1>
            <p className="mt-6 text-xl text-blue-100">{marineCertifiedDucts.description}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950">Our Marine Certified Products</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of flexible ducts designed specifically for marine applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marineCertifiedDucts.types.map((product, index) => (
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

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Contact our expert team today to discuss your marine ventilation requirements and receive a customized quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-blue-900">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-100 hover:bg-blue-800">
                Download Marine Catalog
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 