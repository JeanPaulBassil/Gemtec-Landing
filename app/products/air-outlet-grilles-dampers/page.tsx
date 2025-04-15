import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  {
    id: 1,
    name: "Aluminum Jet Ring Diffuser JD-VF",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "High-performance jet ring diffuser for optimal air distribution",
    link: "/products/aluminum-jet-ring-diffuser"
  },
  {
    id: 2,
    name: "Aluminum Round Air Diffuser (RCD-VD)",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "Round air diffuser for ceiling applications with adjustable airflow pattern",
    link: "/products/aluminum-round-air-diffuser"
  },
  {
    id: 3,
    name: "Round Steel VCD",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "Volume control damper for precise airflow regulation in HVAC systems",
    link: "/products/round-steel-vcd"
  },
  {
    id: 4,
    name: "Circular Diffuser Panel Ceiling Replacement Diffuser",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "Replacement ceiling diffuser with modern design for enhanced air distribution",
    link: "/products/circular-diffuser-panel"
  },
  {
    id: 5,
    name: "Back Draught Damper",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "Prevents unwanted airflow reversal in ventilation systems",
    link: "/products/back-draught-damper"
  },
  {
    id: 6,
    name: "Opposed Blades Damper (OBD-VB)",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "Precision airflow control with opposed blade mechanism",
    link: "/products/opposed-blades-damper"
  },
  {
    id: 7,
    name: "Rectangular Air Duct Volume Control Damper",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "Regulates airflow in rectangular duct systems with precision control",
    link: "/products/rectangular-air-duct-damper"
  },
  {
    id: 8,
    name: "Round Air Diffuser Ceiling Diffuser (RCD-VA)",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "Premium ceiling diffuser with adjustable airflow patterns",
    link: "/products/round-air-diffuser-ceiling"
  },
  {
    id: 9,
    name: "Linear Slot Air Diffuser (LSD-VA)",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "Sleek linear slot design for aesthetic integration in modern interiors",
    link: "/products/linear-slot-air-diffuser"
  },
  {
    id: 10,
    name: "Square Swirl Diffuser (SD-VD)",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "Efficient air distribution with swirl pattern for optimal mixing",
    link: "/products/square-swirl-diffuser"
  },
  {
    id: 11,
    name: "Square Swirl Diffuser SD-VA",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "Premium square diffuser with adjustable swirl pattern",
    link: "/products/square-swirl-diffuser-sd-va"
  },
  {
    id: 12,
    name: "Round Swirl Air Diffuser (SD-VC)",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "Circular swirl diffuser for uniform air distribution in large spaces",
    link: "/products/round-swirl-air-diffuser"
  },
  {
    id: 13,
    name: "Single Deflection Grille (SDG-VA)",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "One-way air direction control for targeted ventilation",
    link: "/products/single-deflection-grille"
  },
  {
    id: 14,
    name: "Double Deflection Grille (DDG-VA)",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "Two-way airflow control for maximum flexibility",
    link: "/products/double-deflection-grille"
  },
  {
    id: 15,
    name: "Return Air Grille (RAG-VA)",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "Efficient return air solution with minimal pressure drop",
    link: "/products/return-air-grille"
  },
  {
    id: 16,
    name: "Eggcrate Return Air Grille (ECG-VA)",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "Eggcrate design for high volume air return with low resistance",
    link: "/products/eggcrate-return-air-grille"
  },
  {
    id: 17,
    name: "Fixed Blade Louver (FBL-VA)",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "Weather-resistant louver for outdoor air intake or exhaust",
    link: "/products/fixed-blade-louver"
  },
  {
    id: 18,
    name: "Ceiling Diffuser with Removable Core (CD-RC)",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "Easy-to-maintain diffuser with removable center core",
    link: "/products/ceiling-diffuser-removable-core"
  },
  {
    id: 19,
    name: "Adjustable Jet Nozzle Diffuser (JND-VA)",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "Long-throw air diffuser with adjustable direction",
    link: "/products/adjustable-jet-nozzle-diffuser"
  },
  {
    id: 20,
    name: "Perforated Face Diffuser (PFD-VA)",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "Aesthetically pleasing diffuser with uniform airflow",
    link: "/products/perforated-face-diffuser"
  },
  {
    id: 21,
    name: "Floor Grille (FG-VA)",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "Durable floor grille designed for foot traffic with optimal airflow",
    link: "/products/floor-grille"
  },
  {
    id: 22,
    name: "Motorized Damper (MD-VA)",
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "Electronically controlled damper for automated systems",
    link: "/products/motorized-damper"
  },
  // Products 23-44 are placeholders and will need to be filled with actual product data
  ...[...Array(22)].map((_, index) => ({
    id: index + 23,
    name: `Air Grille/Damper Product ${index + 23}`,
    imageUrl: "/images/products/air-outlet-grilles-dampers/placeholder.jpg",
    description: "Premium HVAC component for optimal air distribution",
    link: `/products/air-grille-damper-${index + 23}`
  }))
]

export default function AirOutletGrillesDampersPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Air Management Systems
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none text-white drop-shadow-sm">
              Air Outlet Grilles & Dampers
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              Premium air outlet grilles and dampers designed for optimal air distribution, flow regulation, and ventilation control in HVAC systems.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950">Our Product Range</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive selection of air outlet grilles and dampers for residential, commercial, and industrial applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative h-52">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-blue-950">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {product.link && (
                    <div className="mt-4">
                      <Link href={product.link} className="text-blue-600 font-medium hover:text-blue-700">
                        Learn more
                      </Link>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-950 mb-6">Need Technical Assistance?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team of experts is ready to help you select the right air outlet grilles and dampers for your specific requirements.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
} 