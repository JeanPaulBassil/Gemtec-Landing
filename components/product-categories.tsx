"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Fan, Gauge, Wind, Box, Waves, Shield, Layout, Speaker } from "lucide-react"
import { FadeInStagger, ScrollReveal, HoverScale } from "@/components/ui/animations"

const products = [
  {
    title: "Air Outlet Grilles & Dampers",
    description: "Designed for effective air distribution and airflow management.",
    icon: Wind,
  },
  {
    title: "Fans",
    description: "High-efficiency fans for improved air circulation and ventilation.",
    icon: Fan,
  },
  {
    title: "PIR Panels",
    description: "Pre-insulated panels designed for superior thermal performance.",
    icon: Layout,
  },
  {
    title: "Flexible Ducts",
    description: "Ensures flexible air distribution and adaptability in HVAC installations.",
    icon: Waves,
  },
  {
    title: "Insulation",
    description: "High-performance thermal insulation solutions for HVAC applications.",
    icon: Shield,
  },
  {
    title: "Air Curtains",
    description: "Helps maintain air separation between indoor and outdoor spaces.",
    icon: Box,
  },
  {
    title: "Sound Attenuators",
    description: "Engineered to reduce noise levels in HVAC systems.",
    icon: Speaker,
  },
  {
    title: "Accessories",
    description: "High-quality HVAC accessories from industry-leading brands.",
    icon: Gauge,
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
                <Card key={product.title} className="card-hover h-[250px]">
                  <CardHeader>
                    <div className="mb-4 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <product.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="line-clamp-1">{product.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{product.description}</CardDescription>
                  </CardHeader>
                </Card>
              </HoverScale>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </section>
  )
}

