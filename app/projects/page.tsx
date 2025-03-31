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
    logo: "/Projects and partnerships/Kingspan.png",
  },
  {
    name: "AFS",
    logo: "/Projects and partnerships/AFS logo.jpeg",
  },
  {
    name: "Blauberg",
    logo: "/Projects and partnerships/Blauberg Logo.jpeg",
  },
  {
    name: "Tecnifan",
    logo: "/Projects and partnerships/Tecnifan Logo.jpeg",
  },
  {
    name: "Comefri",
    logo: "/Projects and partnerships/Comefri Logo.png",
  },
  {
    name: "Izocam",
    logo: "/Projects and partnerships/Izocam Logo.png",
  },
  {
    name: "Sisteven",
    logo: "/Projects and partnerships/Sisteven Logo.webp",
  },
  {
    name: "S&P",
    logo: "/Projects and partnerships/S&P Logo.png",
  },
  {
    name: "Ulpatek",
    logo: "/Projects and partnerships/Ulpatek Logo.webp",
  },
  {
    name: "Vents",
    logo: "/Projects and partnerships/Vents Logo.jpg",
  },
  {
    name: "Airsum",
    logo: "/Projects and partnerships/Airsum Logo.jpg",
  },
  {
    name: "Hira",
    logo: "/Projects and partnerships/Hira Industries logo.jpeg",
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
              Partnerships
            </h1>
            <p className="mt-6 text-lg text-gray-300">Collaborating with industry leaders for exceptional HVAC solutions</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-accent to-accent/50">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold tracking-wider uppercase text-sm">Trusted Partnerships</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2">Our Strategic Allies</h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Collaborating with industry-leading manufacturers to deliver exceptional HVAC solutions worldwide
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-7xl mx-auto">
            <FadeInStagger>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {partners.map((partner) => (
                  <HoverScale key={partner.name}>
                    <div className="group relative h-full">
                      <Card className="relative overflow-hidden border bg-white/5 backdrop-blur-sm transition-all duration-500 h-full shadow-sm hover:shadow-xl hover:border-secondary/50 group-hover:bg-white/10">
                        <CardHeader className="space-y-0 pb-0 pt-5">
                          <div className="h-28 relative mb-3 flex items-center justify-center p-5">
                            <Image
                              src={partner.logo || "/placeholder.svg"}
                              alt={partner.name}
                              fill
                              className="object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                              quality={90}
                            />
                          </div>
                        </CardHeader>
                        <CardContent className="text-center pb-6">
                          <div className="h-px w-1/3 mx-auto bg-gradient-to-r from-transparent via-secondary/30 to-transparent my-2"></div>
                          <h3 className="font-medium text-base transition-colors group-hover:text-secondary truncate px-2">{partner.name}</h3>
                        </CardContent>
                      </Card>
                    </div>
                  </HoverScale>
                ))}
              </div>
            </FadeInStagger>
            
            <div className="mt-16 text-center">
              <p className="text-muted-foreground italic mb-5">
                "Together with our partners, we deliver exceptional quality and innovation in every project."
              </p>
              <Button asChild variant="secondary" className="group transition-all duration-300 hover:shadow-lg">
                <Link href="/contact" className="flex items-center gap-2">
                  Become a Partner
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
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
    </>
  )
}

