import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AluminiumPVCCombinedPage() {
  const products = [
    {
      name: "ISOAFS COMBI",
      image: "/air duct/Aluminium & PVC Combined Flexible Air Ducts/ISOAFS COMBI.webp",
      description: "Premium insulated flexible duct combining aluminum and PVC with superior thermal properties",
      features: [
        "Thermal insulation",
        "Combined aluminum and PVC construction",
        "Premium quality materials"
      ]
    },
    {
      name: "COMBIAFS-S",
      image: "/air duct/Aluminium & PVC Combined Flexible Air Ducts/COMBIAFS-S.webp",
      description: "Standard combined aluminum and PVC flexible duct for versatile HVAC applications",
      features: [
        "Standard grade construction",
        "Versatile application",
        "Cost-effective solution"
      ]
    },
    {
      name: "COMBIAFS RECTANGULAR",
      image: "/air duct/Aluminium & PVC Combined Flexible Air Ducts/COMBIAFS RECTANGULAR.webp",
      description: "Rectangular profile combined duct designed for space-efficient installations",
      features: [
        "Rectangular profile",
        "Space-efficient design",
        "Easy installation"
      ]
    },
    {
      name: "COMBIAFS HEAVY",
      image: "/air duct/Aluminium & PVC Combined Flexible Air Ducts/COMBIAFS HEAVY.webp",
      description: "Heavy-duty combined flexible duct for demanding industrial applications",
      features: [
        "Heavy-duty construction",
        "Industrial grade",
        "Enhanced durability"
      ]
    },
    {
      name: "COMBIAFS FORTE",
      image: "/air duct/Aluminium & PVC Combined Flexible Air Ducts/COMBIAFS FORTE.webp",
      description: "Reinforced aluminum-PVC duct offering enhanced durability and performance",
      features: [
        "Reinforced construction",
        "High performance",
        "Superior strength"
      ]
    },
    {
      name: "COMBIAFS",
      image: "/air duct/Aluminium & PVC Combined Flexible Air Ducts/COMBIAFS.webp",
      description: "Standard combined flexible duct suitable for general HVAC installations",
      features: [
        "General purpose",
        "Reliable performance",
        "Standard specifications"
      ]
    }
  ]

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-blue-900 mb-6">
              Aluminium & PVC Combined Flexible Air Ducts
            </h1>
            <p className="text-xl text-gray-600">
              Advanced flexible ducting solutions combining the durability of aluminum with the flexibility of PVC, 
              engineered for optimal performance in modern HVAC systems.
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
              Contact our team for detailed product information and customized solutions for your specific requirements.
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