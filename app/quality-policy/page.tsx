import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollReveal, FadeInStagger, HoverScale } from "@/components/ui/animations"
import { ClipboardCheck, Target, Users2, BarChart, Shield, Award, FileCheck, Scale } from "lucide-react"
import Link from "next/link"

const objectives = [
  {
    icon: Target,
    title: "Customer Satisfaction",
    description: "Exceed customer expectations through continuous improvement of our products and services.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Maintain rigorous quality control processes throughout our manufacturing and delivery operations.",
  },
  {
    icon: Users2,
    title: "Employee Development",
    description: "Invest in training and development to ensure our team maintains the highest standards of quality.",
  },
  {
    icon: BarChart,
    title: "Performance Monitoring",
    description: "Regular monitoring and measurement of our quality performance indicators.",
  },
]

const commitments = [
  {
    title: "ISO 9001:2015 Compliance",
    description: "Adherence to international quality management system standards",
    items: [
      "Regular internal and external audits",
      "Documentation of all processes",
      "Continuous system improvement",
      "Risk-based thinking approach",
    ],
  },
  {
    title: "Product Excellence",
    description: "Commitment to manufacturing excellence and product quality",
    items: [
      "Strict quality control measures",
      "Regular product testing",
      "Material quality verification",
      "Performance validation",
    ],
  },
  {
    title: "Customer Focus",
    description: "Dedication to meeting and exceeding customer requirements",
    items: [
      "Regular customer feedback collection",
      "Quick response to inquiries",
      "Customized solutions",
      "After-sales support",
    ],
  },
]

const implementation = [
  {
    icon: ClipboardCheck,
    title: "Documentation",
    description: "Comprehensive documentation of all quality processes and procedures",
  },
  {
    icon: Scale,
    title: "Measurement",
    description: "Regular measurement and monitoring of quality objectives",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Employee recognition program for quality excellence",
  },
  {
    icon: FileCheck,
    title: "Auditing",
    description: "Regular internal and external quality audits",
  },
]

export default function QualityPolicyPage() {
  return (
    <>
      <section className="relative py-24 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Quality Policy
            </h1>
            <p className="mt-6 text-lg text-gray-300">Our commitment to excellence and continuous improvement</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <Card className="bg-primary/5 border-none">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Quality Policy Statement</CardTitle>
                <CardDescription className="max-w-3xl mx-auto text-lg">
                  GEMTEC is committed to providing high-quality HVAC products and services that consistently meet or
                  exceed customer requirements and applicable regulatory standards. We achieve this through continuous
                  improvement of our processes, products, and people.
                </CardDescription>
              </CardHeader>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-accent">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold">Our Objectives</span>
              <h2 className="text-3xl font-bold tracking-tight mt-2">Quality Objectives</h2>
              <p className="mt-4 text-lg text-muted-foreground">Clear targets that guide our commitment to quality</p>
            </div>
          </ScrollReveal>

          <FadeInStagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {objectives.map((objective) => (
                <HoverScale key={objective.title}>
                  <Card className="card-hover h-[200px]">
                    <CardHeader>
                      <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <objective.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{objective.title}</CardTitle>
                      <CardDescription>{objective.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </HoverScale>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold">Our Commitments</span>
              <h2 className="text-3xl font-bold tracking-tight mt-2">Quality Commitments</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our dedication to maintaining the highest standards of quality
              </p>
            </div>
          </ScrollReveal>

          <FadeInStagger>
            <div className="grid md:grid-cols-3 gap-8">
              {commitments.map((commitment) => (
                <HoverScale key={commitment.title}>
                  <Card className="card-hover h-[350px]">
                    <CardHeader>
                      <CardTitle>{commitment.title}</CardTitle>
                      <CardDescription>{commitment.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {commitment.items.map((item, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Shield className="h-4 w-4 text-primary shrink-0" />
                            {item}
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

      <section className="py-24 bg-accent">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold">Implementation</span>
              <h2 className="text-3xl font-bold tracking-tight mt-2">Quality Implementation</h2>
              <p className="mt-4 text-lg text-muted-foreground">How we put our quality policy into practice</p>
            </div>
          </ScrollReveal>

          <FadeInStagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {implementation.map((item) => (
                <HoverScale key={item.title}>
                  <Card className="card-hover h-[200px]">
                    <CardHeader>
                      <div className="mb-4 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-secondary" />
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
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
              <CardTitle className="text-2xl">Learn More About Our Quality Standards</CardTitle>
              <CardDescription>
                Discover how our quality policy translates into superior products and services
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button asChild variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}

