import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CircularDuctTypeSilencerPage() {
  const products = [
    {
      name: "ACOUSTIC SEMIAFS",
      image: "/air duct/Circular Duct Type Silencer/ACOUSTIC SEMIAFS.webp",
      description: "Acoustic semi-flexible silencer for noise reduction in duct systems",
      features: [
        "Semi-flexible construction",
        "Enhanced acoustic properties",
        "Versatile application"
      ]
    },
    {
      name: "SILENCERAFS",
      image: "/air duct/Circular Duct Type Silencer/SILENCERAFS.webp",
      description: "Standard circular duct type silencer for general applications",
      features: [
        "Basic noise reduction",
        "Circular design",
        "Cost-effective solution"
      ]
    },
    {
      name: "SOUNDROPAFS",
      image: "/air duct/Circular Duct Type Silencer/SOUNDROPAFS.webp",
      description: "Premium sound attenuation solution for demanding environments",
      features: [
        "Superior sound reduction",
        "High-performance materials",
        "Professional grade certification"
      ]
    },
    {
      name: "SEMIRIGID SILENCER",
      image: "/air duct/Circular Duct Type Silencer/SEMIRIGID SILENCER.webp",
      description: "Semi-rigid silencer for specialized installations",
      features: [
        "Semi-rigid construction",
        "Enhanced durability",
        "Space-efficient design"
      ]
    },
    {
      name: "SILENCERAFS.F PLUS B",
      image: "/air duct/Circular Duct Type Silencer/SILENCERAFS.F PLUS B.webp",
      description: "Premium black silencer with enhanced noise reduction",
      features: [
        "Black outer layer",
        "Enhanced acoustic properties",
        "Aesthetic design"
      ]
    },
    {
      name: "SOUNDROPAFS-NW",
      image: "/air duct/Circular Duct Type Silencer/SOUNDROPAFS-NW.webp",
      description: "Non-woven sound attenuation solution for specialized applications",
      features: [
        "Non-woven construction",
        "Lightweight design",
        "Versatile application"
      ]
    },
    {
      name: "SOUNDROPAFS.P",
      image: "/air duct/Circular Duct Type Silencer/SOUNDROPAFS.P.png",
      description: "Premium sound attenuation solution with enhanced performance",
      features: [
        "Premium materials",
        "Enhanced acoustic properties",
        "Professional grade certification"
      ]
    },
    {
      name: "SOUNDROPAFS-NW.P",
      image: "/air duct/Circular Duct Type Silencer/SOUNDROPAFS-NW.P.webp",
      description: "Premium non-woven sound attenuation solution",
      features: [
        "Premium non-woven construction",
        "Enhanced performance",
        "Specialized applications"
      ]
    }
  ]

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold text-blue-900 mb-6">
              Circular Duct Type Silencers
            </h1>
            <p className="text-xl text-gray-600">
              Specialized acoustic solutions for noise reduction in circular duct systems, 
              engineered for optimal sound attenuation and airflow performance.
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
              Contact our team for detailed product information and customized solutions for your specific noise reduction requirements.
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