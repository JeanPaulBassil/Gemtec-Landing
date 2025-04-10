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
  ],
  features: [
    "High-quality PE construction",
    "Various insulation options",
    "Professional-grade materials",
    "Certified manufacturing",
    "Multiple size options",
    "Easy installation"
  ],
  applications: [
    "HVAC Systems",
    "Ventilation",
    "Air Conditioning",
    "Industrial Applications",
    "Commercial Buildings",
    "Residential Projects"
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

      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Key Features</h2>
              <ul className="space-y-4">
                {peFlexibleDucts.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Applications</h2>
              <ul className="space-y-4">
                {peFlexibleDucts.applications.map((application) => (
                  <li key={application} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{application}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Get Started with PE Flexible Air Ducts</h2>
            <p className="text-blue-700 mb-6">Contact our expert team to find the perfect solution for your needs</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Request a Quote</Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">Download Catalog</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 