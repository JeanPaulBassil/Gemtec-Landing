"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Fan, Gauge, Wind, Box, Waves, Shield, Layout, Speaker, ChevronRight, ArrowUpRight } from "lucide-react"
import { FadeInStagger, ScrollReveal, HoverScale } from "@/components/ui/animations"
import Link from "next/link"

const products = [
  {
    title: "Air Outlet Grilles & Dampers",
    description: "Designed for effective air distribution and airflow management.",
    icon: Wind,
    slug: "air-outlet-grilles-dampers"
  },
  {
    title: "Fans",
    description: "High-efficiency fans for improved air circulation and ventilation.",
    icon: Fan,
    slug: "fans"
  },
  {
    title: "PIR Panels",
    description: "Pre-insulated panels designed for superior thermal performance.",
    icon: Layout,
    slug: "pir-panels"
  },
  {
    title: "Flexible Ducts",
    description: "Ensures flexible air distribution and adaptability in HVAC installations.",
    icon: Waves,
    slug: "flexible-ducts"
  },
  {
    title: "Insulation",
    description: "High-performance thermal insulation solutions for HVAC applications.",
    icon: Shield,
    slug: "insulation"
  },
  {
    title: "Air Curtains",
    description: "Helps maintain air separation between indoor and outdoor spaces.",
    icon: Box,
    slug: "air-curtains"
  },
  {
    title: "Sound Attenuators",
    description: "Engineered to reduce noise levels in HVAC systems.",
    icon: Speaker,
    slug: "sound-attenuators"
  },
  {
    title: "Accessories",
    description: "High-quality HVAC accessories from industry-leading brands.",
    icon: Gauge,
    slug: "accessories"
  },
]

export default function ProductCategories() {
  return (
    <section className="py-24 section-accent">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">Our Product Range</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Comprehensive HVAC solutions tailored for various industrial, commercial, and residential applications.
            </p>
          </div>
        </ScrollReveal>
        <FadeInStagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <HoverScale key={product.title}>
                <Link href={`/products/${product.slug}`} className="block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl group/card">
                  <Card className="h-full transition-all duration-300 hover:shadow-xl border border-transparent hover:border-blue-200 bg-white hover:bg-gradient-to-br hover:from-white hover:to-blue-50 overflow-hidden relative group cursor-pointer">
                    
                    {/* Corner indicator */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 transform translate-x-6 -translate-y-6 rotate-12 transition-transform duration-300 group-hover:translate-x-0 group-hover:-translate-y-0 group-hover:rotate-0"></div>
                    <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2">
                      <ArrowUpRight className="h-5 w-5 text-white" />
                    </div>
                    
                    <CardHeader className="pb-2 relative">
                      <div className="flex justify-between items-start">
                        <div className="mb-4 w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-200 group-hover:shadow-md">
                          <product.icon className="h-7 w-7 text-blue-700" />
                        </div>
                      </div>
                      <CardTitle className="text-xl line-clamp-1 group-hover:text-blue-700 transition-colors duration-300">{product.title}</CardTitle>
                      <CardDescription className="line-clamp-2 mt-1">{product.description}</CardDescription>
                    </CardHeader>
                    
                    <CardFooter className="pt-0 pb-5">
                      <div className="flex items-center text-blue-700 font-medium mt-4 opacity-80 group-hover:opacity-100 transition-all duration-300 text-sm">
                        <span className="mr-1">View product details</span>
                        <ChevronRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              </HoverScale>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </section>
  )
}

