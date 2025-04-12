import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AluminiumFlexibleAirDuctsPage() {
  const products = [
    {
      name: "SONOAFS-ALU.F PLUS",
      image: "/air duct/Aluminium Flexible Air Ducts/SONOAFS-ALU.F PLUS.webp",
      description: "Premium insulated aluminum flexible duct with enhanced acoustic properties",
      features: [
        "Superior sound insulation",
        "Premium grade aluminum",
        "Enhanced durability"
      ]
    },
    {
      name: "SONOAFS-ALU.F FORTE",
      image: "/air duct/Aluminium Flexible Air Ducts/SONOAFS-ALU.F FORTE.webp",
      description: "Heavy-duty acoustic aluminum duct for demanding applications",
      features: [
        "Reinforced construction",
        "Maximum sound reduction",
        "Industrial grade"
      ]
    },
    {
      name: "SONOAFS-ALU.F",
      image: "/air duct/Aluminium Flexible Air Ducts/SONOAFS-ALU.F.webp",
      description: "Standard acoustic aluminum flexible duct for general HVAC use",
      features: [
        "Balanced performance",
        "Versatile application",
        "Cost-effective solution"
      ]
    },
    {
      name: "SONOAFS-ALU.70 FORTE",
      image: "/air duct/Aluminium Flexible Air Ducts/SONOAFS-ALU.70 FORTE.webp",
      description: "70mm reinforced acoustic aluminum duct for specialized installations",
      features: [
        "70mm diameter",
        "Enhanced strength",
        "Professional grade"
      ]
    },
    {
      name: "SONOAFS-ALU.70",
      image: "/air duct/Aluminium Flexible Air Ducts/SONOAFS-ALU.70.webp",
      description: "70mm standard acoustic aluminum duct for specific requirements",
      features: [
        "70mm specification",
        "Standard performance",
        "Reliable construction"
      ]
    },
    {
      name: "ISOAFS-ALU.45",
      image: "/air duct/Aluminium Flexible Air Ducts/ISOAFS-ALU.45.webp",
      description: "45mm insulated aluminum duct for compact installations",
      features: [
        "45mm profile",
        "Thermal insulation",
        "Space-efficient design"
      ]
    },
    {
      name: "ISOAFS-ALU.F PLUS",
      image: "/air duct/Aluminium Flexible Air Ducts/ISOAFS-ALU.F PLUS.webp",
      description: "Premium insulated aluminum duct with superior thermal properties",
      features: [
        "Enhanced insulation",
        "Premium materials",
        "Superior performance"
      ]
    },
    {
      name: "ISOAFS-ALU.F FORTE",
      image: "/air duct/Aluminium Flexible Air Ducts/ISOAFS-ALU.F FORTE.webp",
      description: "Heavy-duty insulated aluminum duct for demanding environments",
      features: [
        "Maximum durability",
        "Superior insulation",
        "Industrial strength"
      ]
    },
    {
      name: "ISOAFS-ALU.F RECTANGULAR",
      image: "/air duct/Aluminium Flexible Air Ducts/ISOAFS-ALU.F RECTANGULAR.webp",
      description: "Rectangular profile insulated aluminum duct for special applications",
      features: [
        "Rectangular design",
        "Space optimization",
        "Efficient airflow"
      ]
    },
    {
      name: "ISOAFS-ALU.F",
      image: "/air duct/Aluminium Flexible Air Ducts/ISOAFS-ALU.F.webp",
      description: "Standard insulated aluminum flexible duct for general use",
      features: [
        "Standard insulation",
        "Versatile application",
        "Reliable performance"
      ]
    },
    {
      name: "ISOAFS-ALU.70 FORTE",
      image: "/air duct/Aluminium Flexible Air Ducts/ISOAFS-ALU.70 FORTE.webp",
      description: "70mm heavy-duty insulated aluminum duct",
      features: [
        "70mm specification",
        "Reinforced design",
        "Maximum durability"
      ]
    },
    {
      name: "ISOAFS-ALU.70 RECTANGULAR",
      image: "/air duct/Aluminium Flexible Air Ducts/ISOAFS-ALU.70 RECTANGULAR.webp",
      description: "70mm rectangular insulated aluminum duct",
      features: [
        "70mm rectangular profile",
        "Space-efficient",
        "Optimized flow"
      ]
    },
    {
      name: "ISOAFS-ALU.70",
      image: "/air duct/Aluminium Flexible Air Ducts/ISOAFS-ALU.70.webp",
      description: "70mm standard insulated aluminum flexible duct",
      features: [
        "70mm diameter",
        "Standard insulation",
        "General purpose"
      ]
    },
    {
      name: "ALUAFS.F MARINE",
      image: "/air duct/Aluminium Flexible Air Ducts/ALUAFS.F MARINE.webp",
      description: "Marine-grade aluminum flexible duct for maritime and coastal applications",
      features: [
        "Corrosion resistant",
        "Marine certified",
        "High performance in harsh environments"
      ],
      link: "/products/aluafs-f-marine"
    },
    {
      name: "ALUAFS.F FORTE",
      image: "/air duct/Aluminium Flexible Air Ducts/ALUAFS.F FORTE.webp",
      description: "Heavy-duty non-insulated aluminum flexible duct",
      features: [
        "Maximum strength",
        "Non-insulated design",
        "Industrial use"
      ]
    },
    {
      name: "ALUAFS.F",
      image: "/air duct/Aluminium Flexible Air Ducts/ALUAFS.F.webp",
      description: "Standard non-insulated aluminum flexible duct",
      features: [
        "Basic configuration",
        "Cost-effective",
        "General application"
      ]
    }
  ]

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-blue-900 mb-6">
              Aluminium Flexible Air Ducts
            </h1>
            <p className="text-xl text-gray-600">
              Premium aluminum flexible ducting solutions engineered for superior durability and performance. 
              Available in various specifications including insulated, acoustic, and specialized configurations.
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
                  {product.link && (
                    <div className="mt-4">
                      <Link href={product.link} className="inline-flex items-center text-blue-600 hover:text-blue-800">
                        View Details
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  )}
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