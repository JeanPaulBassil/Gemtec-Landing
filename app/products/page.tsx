import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Fan, Gauge, Wind, Box, Waves, Shield, Layout, Speaker } from "lucide-react"
import Link from "next/link"

const products = [
  {
    title: "Air Outlet Grilles & Dampers",
    description: "Designed for effective air distribution and airflow management.",
    icon: Wind,
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
    details: ["Centrifugal fans", "Axial fans", "Industrial fans", "Commercial fans"],
  },
  {
    title: "PIR Panels",
    description: "Pre-insulated panels designed for superior thermal performance.",
    icon: Layout,
    details: ["20P80 panels", "30P200 panels", "4m length sections"],
  },
  {
    title: "Flexible Ducts",
    description: "Ensures flexible air distribution and adaptability in HVAC installations.",
    icon: Waves,
    details: ["Aluminium", "PVC", "Stainless steel", "Acoustically insulated"],
  },
  {
    title: "Insulation",
    description: "High-performance thermal insulation solutions for HVAC applications.",
    icon: Shield,
    details: ["Fiberglass", "Rubber foam", "Rockwool", "XLPE insulation"],
  },
  {
    title: "Air Curtains",
    description: "Helps maintain air separation between indoor and outdoor spaces.",
    icon: Box,
    details: ["90cm", "120cm", "150cm", "180cm", "200cm"],
  },
  {
    title: "Sound Attenuators",
    description: "Engineered to reduce noise levels in HVAC systems.",
    icon: Speaker,
    details: ["Custom designs", "Engineer-crafted", "Fast turnaround"],
  },
  {
    title: "Accessories",
    description: "High-quality HVAC accessories from industry-leading brands.",
    icon: Gauge,
    details: ["Aluminium filters", "Backdraft dampers", "Cable ties", "Corner elements", "Duct sealant"],
  },
]

export default function ProductsPage() {
  return (
    <>
      <section className="relative py-24 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Our Products
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Comprehensive HVAC solutions for industrial, commercial, and residential applications
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Card key={product.title} className="flex flex-col">
                <CardHeader>
                  <product.icon className="h-8 w-8 mb-4 text-primary" />
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 mb-6">
                    {product.details.map((detail) => (
                      <li key={detail} className="text-sm text-muted-foreground">
                        • {detail}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="p-0 h-auto font-semibold" asChild>
                    <Link href={`/products/${product.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

