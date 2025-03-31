import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, GraduationCap, Clock, Globe2, Heart, Laptop } from "lucide-react"
import { ScrollReveal, FadeInStagger, HoverScale, FadeIn } from "@/components/ui/animations"
import Link from "next/link"

const openings = [
  {
    title: "HVAC Design Engineer",
    location: "Beirut, Lebanon",
    type: "Full-time",
    description: "Design and develop HVAC systems for commercial and industrial applications.",
    requirements: [
      "Bachelor's degree in Mechanical Engineering",
      "3+ years of HVAC design experience",
      "Proficiency in AutoCAD and HVAC design software",
      "Strong analytical and problem-solving skills",
    ],
  },
  {
    title: "Production Supervisor",
    location: "Accra, Ghana",
    type: "Full-time",
    description: "Oversee manufacturing operations and ensure quality standards in our production facility.",
    requirements: [
      "Bachelor's degree in Engineering or related field",
      "5+ years of manufacturing experience",
      "Strong leadership and communication skills",
      "Experience with lean manufacturing principles",
    ],
  },
  {
    title: "Sales Engineer",
    location: "Lagos, Nigeria",
    type: "Full-time",
    description: "Drive sales growth and provide technical support to clients in the region.",
    requirements: [
      "Bachelor's degree in Engineering",
      "2+ years of sales experience in HVAC industry",
      "Strong technical knowledge of HVAC systems",
      "Excellent communication and negotiation skills",
    ],
  },
]

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive medical insurance and wellness programs for you and your family.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Continuous learning opportunities through training programs and certifications.",
  },
  {
    icon: Globe2,
    title: "Global Opportunities",
    description: "Work with international teams and potential for global mobility across our locations.",
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible working hours and paid time off to help you maintain a healthy balance.",
  },
  {
    icon: Laptop,
    title: "Modern Workspace",
    description: "State-of-the-art facilities and tools to help you perform at your best.",
  },
  {
    icon: Briefcase,
    title: "Career Growth",
    description: "Clear career progression paths and opportunities for advancement.",
  },
]

export default function CareersPage() {
  return (
    <>
      <section className="relative py-24 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Join Our Team
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Build your career with a company that's shaping the future of HVAC technology
            </p>
            <FadeIn delay={0.5}>
              <div className="mt-10 flex items-center gap-x-6">
                <Button size="lg" asChild className="btn-secondary gap-2">
                  <Link href="/careers/positions">
                    View All Positions
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="btn-outline">
                  <Link href="/careers/apply">Apply Now</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold">Benefits & Perks</span>
              <h2 className="text-3xl font-bold tracking-tight mt-2">Why Work With Us</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We offer competitive compensation and benefits to help you thrive both personally and professionally
              </p>
            </div>
          </ScrollReveal>

          <FadeInStagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit) => (
                <HoverScale key={benefit.title}>
                  <Card className="card-hover">
                    <CardHeader>
                      <div className="mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <benefit.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{benefit.title}</CardTitle>
                      <CardDescription>{benefit.description}</CardDescription>
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
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold">Open Positions</span>
              <h2 className="text-3xl font-bold tracking-tight mt-2">Current Opportunities</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Explore our current job openings and find your next career opportunity
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6">
            {openings.map((job) => (
              <HoverScale key={job.title}>
                <Card className="card-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <CardTitle>{job.title}</CardTitle>
                        <CardDescription>
                          {job.location} • {job.type}
                        </CardDescription>
                      </div>
                      <Button className="btn-secondary">
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">{job.description}</p>
                      <div>
                        <h4 className="font-semibold mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {job.requirements.map((req) => (
                            <li key={req} className="text-sm text-muted-foreground">
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </HoverScale>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold tracking-tight">Application Process</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our hiring process is designed to be transparent and efficient
              </p>
            </ScrollReveal>

            <div className="mt-16 grid gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Submit Application</CardTitle>
                  <CardDescription>Apply through our online portal with your resume and cover letter</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>2. Initial Review</CardTitle>
                  <CardDescription>
                    Our HR team will review your application and reach out if there's a potential match
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>3. Interviews</CardTitle>
                  <CardDescription>Participate in technical and cultural fit interviews with the team</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>4. Decision & Offer</CardTitle>
                  <CardDescription>
                    Successful candidates will receive an offer letter with detailed terms
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="mt-12">
              <Button size="lg" asChild className="btn-secondary">
                <Link href="/careers/positions">
                  View All Positions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

