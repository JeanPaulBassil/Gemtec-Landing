import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ScrollReveal, FadeInStagger, HoverScale } from "@/components/ui/animations"
import { ClipboardCheck, Target, Users2, BarChart, Shield, Award, FileCheck, Scale, CheckCircle } from "lucide-react"
import Link from "next/link"

const qualityCommitments = [
  {
    icon: Shield,
    title: "Dedicated Quality Control",
    description: "We operate a dedicated Quality Control department that coordinates with our production team to monitor, test, and validate all manufactured components.",
  },
  {
    icon: Target,
    title: "International Standards",
    description: "We conduct performance tests, endurance assessments, and material verifications in alignment with globally recognized standards such as EN and UL.",
  },
  {
    icon: BarChart,
    title: "Continuous Improvement",
    description: "We continuously invest in improving our production processes and testing capabilities through R&D, aligning with the latest industry innovations and sustainability goals.",
  },
  {
    icon: Award,
    title: "Global Partnerships",
    description: "We maintain collaborative partnerships with leading certification bodies and international labs to ensure our systems are benchmarked against global best practices.",
  },
]

const qualityProcess = [
  {
    icon: ClipboardCheck,
    title: "Raw Material Inspection",
    description: "Our quality control process begins with the inspection of raw materials",
  },
  {
    icon: Scale,
    title: "Production Monitoring",
    description: "Continuous monitoring through every stage of production—from fabrication to final testing",
  },
  {
    icon: FileCheck,
    title: "Product Evaluation",
    description: "Each product is carefully evaluated to ensure both functional and aesthetic integrity",
  },
  {
    icon: CheckCircle,
    title: "Customer Delivery",
    description: "Quality assurance before products reach our customers",
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
                <CardDescription className="max-w-4xl mx-auto text-lg leading-relaxed">
                  At GEMTEC Group, we are committed to delivering HVAC products and solutions that meet the highest standards of quality, performance, and reliability. Our Quality Control procedures are designed to ensure compliance with international standards while meeting the unique expectations of our customers across every market we serve.
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
              <span className="text-primary font-semibold">Our Process</span>
              <h2 className="text-3xl font-bold tracking-tight mt-2">Quality Control Process</h2>
              <p className="mt-4 text-lg text-muted-foreground">Our comprehensive approach to quality assurance</p>
            </div>
          </ScrollReveal>

          <FadeInStagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {qualityProcess.map((item) => (
                <HoverScale key={item.title}>
                  <Card className="card-hover h-[200px]">
                    <CardHeader>
                      <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-primary" />
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
            <div className="grid md:grid-cols-2 gap-8">
              {qualityCommitments.map((commitment) => (
                <HoverScale key={commitment.title}>
                  <Card className="card-hover">
                    <CardHeader>
                      <div className="mb-4 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                        <commitment.icon className="h-6 w-6 text-secondary" />
                      </div>
                      <CardTitle>{commitment.title}</CardTitle>
                      <CardDescription className="text-base">{commitment.description}</CardDescription>
                    </CardHeader>
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
            <Card className="bg-primary/5 border-none">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold mb-4">"Quality is not an act—it is our culture."</CardTitle>
                <CardDescription className="max-w-4xl mx-auto text-lg leading-relaxed">
                  We believe that quality assurance is not limited to a checklist, but is a mindset ingrained in every employee, every process, and every product we deliver. This dedication allows us to build long-term partnerships and continuously exceed customer expectations across all regions we serve.
                </CardDescription>
              </CardHeader>
            </Card>
          </ScrollReveal>
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
            <CardContent className="flex justify-center gap-4">
              <Button asChild className="btn-secondary">
                <Link href="/certifications">View Certifications</Link>
              </Button>
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

