import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const montageElements = {
  name: "Montage Elements",
  description: "Professional installation accessories for flexible duct systems.",
  category: "Air Duct Accessories",
  types: [
    {
      name: "Nylon Clamps & Plier",
      description: "Lightweight and UV-resistant nylon clamps for flexible duct connections.",
      image: "/images/products/flexible-ducts/Nylon Clamps & plier.webp",
      link: "/products/nylon-clamps-plier",
      features: ["Quick and easy installation", "Secure and airtight connections", "UV-resistant material"],
    },
    {
      name: "Metal Clamps",
      description: "Heavy-duty galvanized steel clamps for industrial-grade duct connections.",
      image: "/images/products/flexible-ducts/Metal Clamps.webp",
      link: "/products/metal-clamps",
      features: ["High tensile strength", "Corrosion resistant", "For demanding applications"],
    },
    {
      name: "AFS Tape",
      description: "Professional-grade aluminum foil tape for air duct sealing.",
      image: "/images/products/flexible-ducts/Afs Tape.webp",
      link: "/products/afs-tape",
      features: ["Strong adhesion", "High temperature resistance", "Creates airtight seals"],
    },
    {
      name: "AFS Pin",
      description: "Mounting pins for secure installation and support of flexible air ducts.",
      image: "/images/products/flexible-ducts/Afs Pin.webp",
      link: "/products/afs-pin",
      features: ["Prevents duct sagging", "Multiple mounting options", "Professional installation"],
    },
  ]
}

export default function MontageElementsPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">{montageElements.name}</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">{montageElements.description}</p>
        </div>

        {/* Product Types */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Product Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {montageElements.types.map((type) => (
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