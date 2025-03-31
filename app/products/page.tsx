import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ArrowUpRight, Fan, Gauge, Wind, Box, Waves, Shield, Layout, Speaker } from "lucide-react"
import Link from "next/link"
import { HoverScale } from "@/components/ui/animations"

const products = [
  {
    title: "Air Outlet Grilles & Dampers",
    description: "Designed for effective air distribution and airflow management.",
    icon: Wind,
    slug: "air-outlet-grilles-dampers",
    details: [
      "Square ceiling diffusers",
      "Round ceiling diffusers",
      "Single deflection grilles",
      "Double deflection grilles",
    ],
  },
  {
    title: "Fans",
    description: "High-efficiency fans for improved air circulation and ventilation.",
    icon: Fan,
    slug: "fans",
    details: ["Centrifugal fans", "Axial fans", "Industrial fans", "Commercial fans"],
  },
  {
    title: "PIR Panels",
    description: "Pre-insulated panels designed for superior thermal performance.",
    icon: Layout,
    slug: "pir-panels",
    details: ["20P80 panels", "30P200 panels", "4m length sections"],
  },
  {
    title: "Flexible Ducts",
    description: "Ensures flexible air distribution and adaptability in HVAC installations.",
    icon: Waves,
    slug: "flexible-ducts",
    details: ["Aluminium", "PVC", "Stainless steel", "Acoustically insulated"],
  },
  {
    title: "Insulation",
    description: "High-performance thermal insulation solutions for HVAC applications.",
    icon: Shield,
    slug: "insulation",
    details: ["Fiberglass", "Rubber foam", "Rockwool", "XLPE insulation"],
  },
  {
    title: "Air Curtains",
    description: "Helps maintain air separation between indoor and outdoor spaces.",
    icon: Box,
    slug: "air-curtains",
    details: ["90cm", "120cm", "150cm", "180cm", "200cm"],
  },
  {
    title: "Sound Attenuators",
    description: "Engineered to reduce noise levels in HVAC systems.",
    icon: Speaker,
    slug: "sound-attenuators",
    details: ["Custom designs", "Engineer-crafted", "Fast turnaround"],
  },
  {
    title: "Accessories",
    description: "High-quality HVAC accessories from industry-leading brands.",
    icon: Gauge,
    slug: "accessories",
    details: ["Aluminium filters", "Backdraft dampers", "Cable ties", "Corner elements", "Duct sealant"],
  },
]

export default function ProductsPage() {
  return (
    <>
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-blue-900/50 border border-blue-800 rounded-full text-blue-100">
              <span className="font-medium text-sm tracking-wide">Product Catalog</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl/none text-white drop-shadow-sm">
              Our Products
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              Comprehensive HVAC solutions for industrial, commercial, and residential applications
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <HoverScale key={product.title}>
                <Link 
                  href={`/products/${product.slug}`}
                  className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-xl border border-transparent hover:border-blue-200 bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50 overflow-hidden relative group cursor-pointer">
                    {/* Corner indicator */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 transform translate-x-6 -translate-y-6 rotate-12 transition-transform duration-300 group-hover:translate-x-0 group-hover:-translate-y-0 group-hover:rotate-0"></div>
                    <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2">
                      <ArrowUpRight className="h-5 w-5 text-white" />
                    </div>
                    
                    <CardHeader>
                      <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-200 group-hover:shadow-md mb-4">
                        <product.icon className="h-7 w-7 text-blue-700" />
                      </div>
                      <CardTitle className="group-hover:text-blue-700 transition-colors duration-300">{product.title}</CardTitle>
                      <CardDescription className="line-clamp-2 mt-1">{product.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <ul className="space-y-1.5">
                        {product.details.slice(0, 3).map((detail) => (
                          <li key={detail} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-blue-500 mr-2 leading-tight">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                        {product.details.length > 3 && (
                          <li className="text-sm text-blue-700 font-medium">+ {product.details.length - 3} more</li>
                        )}
                      </ul>
                    </CardContent>
                    
                    <CardFooter className="mt-auto pt-2">
                      <div className="text-sm text-blue-700 font-medium flex items-center mt-2">
                        View full details
                        <svg 
                          className="ml-1 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </HoverScale>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

