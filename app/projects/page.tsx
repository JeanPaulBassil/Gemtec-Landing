import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Factory, School, Building } from "lucide-react"
import { ScrollReveal, FadeInStagger, HoverScale } from "@/components/ui/animations"
import Link from "next/link"
import { AnimatedCounter } from "@/components/ui/animated-counter"

const featuredProjects = [
  {
    title: "Dubai Commercial Tower HVAC Upgrade",
    description: "Complete HVAC system modernization for a 40-story commercial tower in Dubai.",
    image: "/placeholder.svg",
    category: "Commercial",
    icon: Building2,
    details: [
      "Installation of high-efficiency air handling units",
      "Smart building automation integration",
      "Energy consumption reduced by 35%",
      "Improved indoor air quality",
    ],
  },
  {
    title: "Ghana Manufacturing Facility",
    description: "State-of-the-art ventilation system for a large manufacturing facility in Accra.",
    image: "/placeholder.svg",
    category: "Industrial",
    icon: Factory,
    details: [
      "Custom-designed industrial ventilation",
      "Temperature-controlled production zones",
      "Dust extraction system implementation",
      "24/7 operation capability",
    ],
  },
  {
    title: "Lebanese University Campus",
    description: "Comprehensive HVAC solution for a new university campus in Beirut.",
    image: "/placeholder.svg",
    category: "Educational",
    icon: School,
    details: [
      "Multi-zone climate control",
      "Laboratory-specific ventilation",
      "Energy-efficient design",
      "Smart scheduling system",
    ],
  },
  {
    title: "Nigerian Office Complex",
    description: "Modern air conditioning system for a multi-tenant office complex in Lagos.",
    image: "/placeholder.svg",
    category: "Commercial",
    icon: Building,
    details: [
      "Variable refrigerant flow system",
      "Individual zone control",
      "Remote monitoring capability",
      "Backup power integration",
    ],
  },
]

const partners = [
  {
    name: "Kingspan",
    logo: "/placeholder.svg",
    description: "Global leader in high-performance insulation and building envelope solutions.",
    projects: 15,
    yearsPartnership: 8,
  },
  {
    name: "AFS",
    logo: "/placeholder.svg",
    description: "Innovative air filtration systems and clean air solutions provider.",
    projects: 12,
    yearsPartnership: 5,
  },
  {
    name: "Blauberg",
    logo: "/placeholder.svg",
    description: "Premium ventilation equipment manufacturer with German engineering excellence.",
    projects: 20,
    yearsPartnership: 6,
  },
  {
    name: "Tecnifan",
    logo: "/placeholder.svg",
    description: "Specialized in high-performance industrial fans and ventilation systems.",
    projects: 18,
    yearsPartnership: 7,
  },
]

const testimonials = [
  {
    quote:
      "GEMTEC's expertise and professional approach made our complex HVAC upgrade project seamless and successful.",
    author: "Ahmed Hassan",
    position: "Facility Manager",
    company: "Dubai Commercial Tower",
  },
  {
    quote:
      "The energy efficiency improvements we've seen since implementing GEMTEC's solutions have exceeded our expectations.",
    author: "Grace Mensah",
    position: "Operations Director",
    company: "Ghana Manufacturing Co.",
  },
  {
    quote:
      "Their attention to detail and commitment to quality made them the perfect partner for our campus development project.",
    author: "Dr. Sarah Khoury",
    position: "Campus Development Head",
    company: "Lebanese University",
  },
]

const projectStats = [
  {
    value: 200,
    suffix: "+",
    label: "Completed Projects",
  },
  {
    value: 95,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    value: 15,
    suffix: "+",
    label: "Industry Awards",
  },
  {
    value: 50,
    suffix: "M+",
    prefix: "$",
    label: "Project Value Delivered",
  },
]

export default function ProjectsPage() {
  return (
    <>
      <section className="relative py-24 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Projects & Partnerships
            </h1>
            <p className="mt-6 text-lg text-gray-300">Delivering excellence through collaboration and innovation</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold">Featured Projects</span>
              <h2 className="text-3xl font-bold tracking-tight mt-2">Success Stories</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Explore our portfolio of successful HVAC implementations across various sectors
              </p>
            </div>
          </ScrollReveal>

          <FadeInStagger>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <HoverScale key={project.title}>
                  <Card className="card-hover">
                    <CardHeader>
                      <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <project.icon className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-primary">{project.category}</span>
                      </div>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {project.details.map((detail) => (
                          <li key={detail} className="text-sm text-muted-foreground flex items-center gap-2">
                            <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                            {detail}
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
              <span className="text-secondary font-semibold">Our Partners</span>
              <h2 className="text-3xl font-bold tracking-tight mt-2">Strategic Partnerships</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Collaborating with industry leaders to deliver exceptional HVAC solutions
              </p>
            </div>
          </ScrollReveal>

          <FadeInStagger>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner) => (
                <HoverScale key={partner.name}>
                  <Card className="card-hover">
                    <CardHeader>
                      <div className="h-20 relative mb-4">
                        <Image
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <CardTitle className="text-center">{partner.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-sm text-muted-foreground mb-4">{partner.description}</p>
                      <div className="flex justify-center gap-8 text-sm">
                        <div>
                          <div className="font-bold text-primary">{partner.projects}</div>
                          <div className="text-muted-foreground">Projects</div>
                        </div>
                        <div>
                          <div className="font-bold text-primary">{partner.yearsPartnership}</div>
                          <div className="text-muted-foreground">Years</div>
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
              <span className="text-secondary font-semibold">Our Impact</span>
              <h2 className="text-3xl font-bold tracking-tight mt-2">By the Numbers</h2>
              <p className="mt-4 text-lg text-muted-foreground">Delivering excellence through measurable results</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {projectStats.map((stat) => (
                <Card key={stat.label} className="text-center card-hover">
                  <CardHeader>
                    <CardTitle className="text-4xl font-bold">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                    </CardTitle>
                    <CardDescription>{stat.label}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-primary font-semibold">Testimonials</span>
              <h2 className="text-3xl font-bold tracking-tight mt-2">Client Success Stories</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Hear what our clients say about their experience working with GEMTEC
              </p>
            </div>
          </ScrollReveal>

          <FadeInStagger>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <HoverScale key={testimonial.author}>
                  <Card className="card-hover">
                    <CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <p className="text-lg italic text-muted-foreground">"{testimonial.quote}"</p>
                          <div>
                            <div className="font-semibold">{testimonial.author}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                          </div>
                        </div>
                      </CardContent>
                    </CardHeader>
                  </Card>
                </HoverScale>
              ))}
            </div>
          </FadeInStagger>

          <div className="mt-16 text-center">
            <Button size="lg" asChild className="btn-secondary">
              <Link href="/quote">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

