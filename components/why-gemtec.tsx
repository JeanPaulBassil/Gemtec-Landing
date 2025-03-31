"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Globe, Settings, Headphones } from "lucide-react"
import { FadeInStagger, ScrollReveal, HoverScale } from "@/components/ui/animations"

const features = [
  {
    title: "Certified Quality",
    description: "Our products meet international standards, ensuring durability and top-tier performance.",
    icon: Award,
  },
  {
    title: "Global Presence",
    description:
      "With operations in Lebanon, Ghana, and Nigeria, we provide localized support and fast delivery times.",
    icon: Globe,
  },
  {
    title: "Custom Solutions",
    description: "We specialize in customized HVAC components designed to meet the specific needs of our clients.",
    icon: Settings,
  },
  {
    title: "Expert Support",
    description: "Our dedicated team provides outstanding pre-sales and after-sales support.",
    icon: Headphones,
  },
]

export default function WhyGemtec() {
  return (
    <section className="py-24">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-primary font-semibold">Why Choose Us</span>
            <h2 className="text-3xl font-bold tracking-tight mt-2">Why GEMTEC</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Partner with an industry leader committed to quality, reliability, and customer satisfaction.
            </p>
          </div>
        </ScrollReveal>
        <FadeInStagger>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <HoverScale key={feature.title}>
                <Card className="text-center card-hover relative overflow-hidden h-[250px]">
                  <div className="absolute top-0 left-0 w-2 h-full bg-secondary/20" />
                  <CardHeader>
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-primary/10">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="line-clamp-1">{feature.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{feature.description}</CardDescription>
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

