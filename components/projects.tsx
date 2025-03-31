"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { FadeInStagger, ScrollReveal, HoverScale } from "@/components/ui/animations"

const partners = [
  { name: "Kingspan", logo: "/placeholder.svg" },
  { name: "AFS", logo: "/placeholder.svg" },
  { name: "Blauberg", logo: "/placeholder.svg" },
  { name: "Tecnifan", logo: "/placeholder.svg" },
]

export default function Projects() {
  return (
    <section className="py-24 section-accent">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold">Our Partners</span>
            <h2 className="text-3xl font-bold tracking-tight mt-2">Projects & Partnerships</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Successfully executed projects across various regions, partnering with leading global brands.
            </p>
          </div>
        </ScrollReveal>
        <FadeInStagger>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <HoverScale key={partner.name}>
                <Card className="bg-white card-hover">
                  <CardContent className="flex items-center justify-center p-6">
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={partner.name}
                      width={150}
                      height={60}
                      className="object-contain"
                    />
                  </CardContent>
                </Card>
              </HoverScale>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </section>
  )
}

