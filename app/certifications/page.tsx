import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollReveal, FadeInStagger, HoverScale } from "@/components/ui/animations"
import { Download, Shield, Award, CheckCircle } from "lucide-react"
import Image from "next/image"

const certifications = [
  {
    name: "ISO 9001:2015",
    description: "Quality Management System Certification",
    image: "/placeholder.svg",
    issuer: "Bureau Veritas",
    validUntil: "2025",
    details: [
      "International standard for quality management systems",
      "Demonstrates ability to consistently provide products meeting customer requirements",
      "Enhances customer satisfaction through effective system processes",
      "Regular audits ensure continuous compliance",
    ],
  },
  {
    name: "ISO 14001:2015",
    description: "Environmental Management System Certification",
    image: "/placeholder.svg",
    issuer: "Bureau Veritas",
    validUntil: "2025",
    details: [
      "Environmental management system certification",
      "Commitment to environmental protection",
      "Sustainable manufacturing practices",
      "Waste reduction and energy efficiency",
    ],
  },
  {
    name: "AHRI Certification",
    description: "Air-Conditioning, Heating, and Refrigeration Institute",
    image: "/placeholder.svg",
    issuer: "AHRI",
    validUntil: "2024",
    details: [
      "Performance certification for HVAC equipment",
      "Independent third-party testing",
      "Meets international standards",
      "Regular performance verification",
    ],
  },
  {
    name: "CE Marking",
    description: "European Conformity Certification",
    image: "/placeholder.svg",
    issuer: "European Union",
    validUntil: "Permanent",
    details: [
      "Compliance with EU health, safety, and environmental standards",
      "Product safety certification",
      "Meets European market requirements",
      "Regular compliance updates",
    ],
  },
]

const standards = [
  {
    name: "Quality Standards",
    icon: Shield,
    items: [
      "ASTM Standards Compliance",
      "EN Standards Adherence",
      "BS Standards Conformity",
      "DIN Standards Compliance",
    ],
  },
  {
    name: "Testing Protocols",
    icon: CheckCircle,
    items: ["Air Flow Testing", "Noise Level Testing", "Pressure Drop Testing", "Material Quality Testing"],
  },
  {
    name: "Industry Recognition",
    icon: Award,
    items: ["HVAC Excellence", "Energy Efficiency Ratings", "Environmental Compliance", "Safety Standards"],
  },
]

export default function CertificationsPage() {
  return (
    <>
      <section className="relative py-24 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Our Certifications
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Committed to excellence through international certifications and quality standards
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold">Quality Assurance</span>
              <h2 className="text-3xl font-bold tracking-tight mt-2">Industry Certifications</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our commitment to quality is validated by international certifying bodies
              </p>
            </div>
          </ScrollReveal>

          <FadeInStagger>
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert) => (
                <HoverScale key={cert.name}>
                  <Card className="card-hover h-[500px] flex flex-col">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16">
                          <Image
                            src={cert.image || "/placeholder.svg"}
                            alt={cert.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <CardTitle>{cert.name}</CardTitle>
                          <CardDescription>{cert.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4 flex-1">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Issuing Body:</span>
                          <span className="font-medium">{cert.issuer}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Valid Until:</span>
                          <span className="font-medium">{cert.validUntil}</span>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-medium">Key Aspects:</h4>
                          <ul className="text-sm space-y-1">
                            {cert.details.map((detail, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-primary mt-1 shrink-0" />
                                <span className="text-muted-foreground">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-auto pt-4">
                          <Button className="w-full" variant="outline">
                            <Download className="mr-2 h-4 w-4" />
                            Download Certificate
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </section>

      <section className="py-24 bg-accent">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold">Compliance</span>
              <h2 className="text-3xl font-bold tracking-tight mt-2">Quality Standards</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Meeting and exceeding international industry standards
              </p>
            </div>
          </ScrollReveal>

          <FadeInStagger>
            <div className="grid md:grid-cols-3 gap-8">
              {standards.map((standard) => (
                <HoverScale key={standard.name}>
                  <Card className="card-hover h-[300px] flex flex-col">
                    <CardHeader>
                      <standard.icon className="h-8 w-8 text-primary mb-4" />
                      <CardTitle>{standard.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3">
                        {standard.items.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </HoverScale>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <Card className="bg-primary/5 border-none">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Need More Information?</CardTitle>
              <CardDescription>
                Contact us for detailed information about our certifications and quality standards
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button className="btn-secondary">Contact Our Team</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}

