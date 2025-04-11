import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AntiMicrobialFlexibleAirDuctPage() {
  const products = [
    {
      name: "SONOAFS-ALU.F HYGIENE",
      image: "/air duct/Anti-Microbial Flexible Air Duct/SONOAFS-ALU.F HYGIENE.webp",
      description: "Premium acoustic antimicrobial flexible duct with enhanced protection",
      features: [
        "Superior antimicrobial protection",
        "Enhanced acoustic properties",
        "Healthcare grade materials"
      ]
    },
    {
      name: "SONOAFS-ALU HYGIENE",
      image: "/air duct/Anti-Microbial Flexible Air Duct/SONOAFS-ALU HYGIENE.webp",
      description: "Standard acoustic antimicrobial duct for healthcare environments",
      features: [
        "Antimicrobial protection",
        "Acoustic insulation",
        "Versatile application"
      ]
    },
    {
      name: "SONOAFS-ALU HYGIENE ECOSOFT",
      image: "/air duct/Anti-Microbial Flexible Air Duct/SONOAFS-ALU HYGIENE ECOSOFT.webp",
      description: "Eco-friendly acoustic antimicrobial duct for sustainable healthcare facilities",
      features: [
        "Eco-friendly materials",
        "Antimicrobial treatment",
        "Sustainable solution"
      ]
    },
    {
      name: "SONOAFS-ALU.B HYGIENE ECOSOFT",
      image: "/air duct/Anti-Microbial Flexible Air Duct/SONOAFS-ALU.B HYGIENE ECOSOFT.webp",
      description: "Eco-friendly acoustic antimicrobial duct with black outer layer",
      features: [
        "Black outer layer",
        "Eco-friendly construction",
        "Antimicrobial properties"
      ]
    },
    {
      name: "ISOAFS-ALU.F HYGIENE",
      image: "/air duct/Anti-Microbial Flexible Air Duct/ISOAFS-ALU.F HYGIENE.webp",
      description: "Premium insulated antimicrobial duct for demanding healthcare environments",
      features: [
        "Maximum antimicrobial protection",
        "Reinforced construction",
        "Hospital grade certification"
      ]
    },
    {
      name: "ISOAFS-ALU HYGIENE",
      image: "/air duct/Anti-Microbial Flexible Air Duct/ISOAFS-ALU HYGIENE.webp",
      description: "Standard insulated antimicrobial duct for general healthcare use",
      features: [
        "Basic antimicrobial protection",
        "Thermal insulation",
        "Cost-effective solution"
      ]
    },
    {
      name: "ISOAFS-ALU HYGIENE.W",
      image: "/air duct/Anti-Microbial Flexible Air Duct/ISOAFS-ALU HYGIENE.W.webp",
      description: "White insulated antimicrobial duct for aesthetic healthcare environments",
      features: [
        "White outer layer",
        "Antimicrobial treatment",
        "Aesthetic design"
      ]
    },
    {
      name: "ISOAFS-ALU.F HYGIENE ECOSOFT",
      image: "/air duct/Anti-Microbial Flexible Air Duct/ISOAFS-ALU.F HYGIENE ECOSOFT.webp",
      description: "Eco-friendly insulated antimicrobial duct for sustainable healthcare facilities",
      features: [
        "Eco-friendly materials",
        "Enhanced insulation",
        "Sustainable solution"
      ]
    },
    {
      name: "ALUAFS.F HYGIENE",
      image: "/air duct/Anti-Microbial Flexible Air Duct/ALUAFS.F HYGIENE.webp",
      description: "Standard non-insulated antimicrobial flexible duct",
      features: [
        "Basic configuration",
        "Cost-effective",
        "General healthcare use"
      ]
    },
    {
      name: "ALUAFS HYGIENE",
      image: "/air duct/Anti-Microbial Flexible Air Duct/ALUAFS HYGIENE.webp",
      description: "Basic non-insulated antimicrobial flexible duct",
      features: [
        "Simple design",
        "Antimicrobial treatment",
        "Economical option"
      ]
    }
  ]

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-blue-900 mb-6">
              Anti-Microbial Flexible Air Ducts
            </h1>
            <p className="text-xl text-gray-600">
              Specialized flexible ducting solutions with antimicrobial properties, 
              engineered for healthcare environments where hygiene and air quality are paramount.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.name} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative aspect-[4/3] w-full bg-white">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl text-blue-900 mb-4">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4">
                    {product.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">
              Need Technical Specifications?
            </h2>
            <p className="text-gray-600 mb-8">
              Contact our team for detailed product information and customized solutions for your specific healthcare requirements.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Request Information
            </Button>
          </div>
        </div>
      </section>
    </>
  )
} 