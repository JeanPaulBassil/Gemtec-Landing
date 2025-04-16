import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const nonwovenDucts = {
  name: "Nonwoven Flexible Air Ducts",
  description: "Specialized acoustically insulated flexible air ducts for noise reduction in HVAC systems.",
  category: "Flexible Ducts",
  types: [
    {
      name: "SONOAFS-NW",
      description: "Acoustically insulated nonwoven flexible air duct with sound attenuation properties",
      image: "/images/products/flexible-ducts/Sonoafs-NW.webp",
      link: "/products/sonoafs-nw",
      features: [
        "Sound attenuation",
        "Superior acoustic insulation",
        "Low pressure drop",
        "Durable construction"
      ]
    },
    {
      name: "SONOAFS-NW.PE",
      description: "Acoustically insulated PE nonwoven flexible air duct with enhanced durability",
      image: "/images/products/flexible-ducts/Sonoafs-NW.PE.webp",
      link: "/products/sonoafs-nw-pe",
      features: [
        "PE outer jacket",
        "Sound dampening",
        "Moisture resistant",
        "Professional grade"
      ]
    }
  ]
}

export default function NonwovenFlexibleAirDuctsPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">{nonwovenDucts.name}</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">{nonwovenDucts.description}</p>
        </div>

        {/* Product Types */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Product Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nonwovenDucts.types.map((type) => (
              <Card key={type.name} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <Image
                      src={type.image}
                      alt={type.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">{type.name}</h3>
                    <p className="text-gray-600">{type.description}</p>
                    <div className="space-y-2">
                      {type.features.map((feature) => (
                        <p key={feature} className="text-blue-700">•{feature}</p>
                      ))}
                    </div>
                    <Link href={type.link}>
                      <Button className="mt-4">Learn More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 