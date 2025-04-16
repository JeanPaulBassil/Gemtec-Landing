import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const peFlexibleDucts = {
  name: "PE Flexible Air Ducts",
  description: "Our PE Flexible Air Ducts collection offers high-quality solutions for various ventilation and air conditioning applications. Choose from our range of specialized products designed to meet different requirements.",
  category: "Flexible Ducts",
  types: [
    {
      name: "ISOAFS PE.W",
      description: "Thermally insulated PE flexible air duct with water vapor barrier",
      image: "/images/products/flexible-ducts/ISOAFS-PE.W.webp",
      link: "/products/isoafs-pe-w",
      features: [
        "Water vapor barrier",
        "Thermal insulation",
        "High flexibility",
        "Durable construction"
      ]
    },
    {
      name: "PEAFS",
      description: "Non-insulated PE flexible air duct for ventilation systems",
      image: "/images/products/flexible-ducts/Peafs.webp",
      link: "/products/peafs",
      features: [
        "Lightweight design",
        "Easy installation",
        "Cost-effective",
        "Versatile application"
      ]
    },
    {
      name: "ISOAFS-PE",
      description: "Thermally insulated PE flexible air duct for HVAC systems",
      image: "/images/products/flexible-ducts/Isoafs-PE.webp",
      link: "/products/isoafs-pe",
      features: [
        "Superior insulation",
        "High durability",
        "Temperature stability",
        "Professional grade"
      ]
    }
  ]
}

export default function PeFlexibleDuctsPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">{peFlexibleDucts.name}</h1>
            <p className="text-xl text-gray-600">{peFlexibleDucts.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {peFlexibleDucts.types.map((type) => (
              <Card key={type.name} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src={type.image}
                      alt={type.name}
                      fill
                      className="object-contain p-6"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{type.name}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <div className="space-y-2 mb-6">
                    {type.features.map((feature) => (
                      <Badge key={feature} variant="outline" className="mr-2">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Link href={type.link}>
                    <Button className="w-full">Learn More</Button>
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