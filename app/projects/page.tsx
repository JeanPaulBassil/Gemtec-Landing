import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Factory, School, Building, MapPin, Package } from "lucide-react"
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

// This will be replaced with data from your CMS
const projects = [
  {
    id: 1,
    title: "Modern Office Complex",
    photo: "/projects/office-complex.jpg",
    itemsSupplied: [
      "HVAC Systems",
      "Electrical Equipment",
      "Plumbing Systems",
      "Fire Safety Equipment"
    ],
    location: "Beirut, Lebanon",
    brands: ["Mitsubishi", "Schneider Electric", "Grundfos", "Tyco"]
  },
  {
    id: 2,
    title: "Luxury Hotel Renovation",
    photo: "/projects/hotel-renovation.jpg",
    itemsSupplied: [
      "Smart Building Systems",
      "Energy Management Solutions",
      "Security Systems",
      "Water Treatment Systems"
    ],
    location: "Accra, Ghana",
    brands: ["Siemens", "Honeywell", "Johnson Controls", "ABB"]
  }
]

export default function ProjectsPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-blue-900/50 border border-blue-800 rounded-full text-blue-100">
              <span className="font-medium text-sm tracking-wide">Our Portfolio</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl/none text-white drop-shadow-sm">
              Featured Projects
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              Discover our successful projects and the innovative solutions we've implemented
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="container max-w-7xl">
          <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-2">
            {projects.map((project) => (
              <Card key={project.id} className="flex flex-col overflow-hidden shadow-xl rounded-xl border-0">
                <div className="relative h-64 w-full">
                  <Image
                    src={project.photo}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <CardHeader className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-6">
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  <CardDescription className="text-blue-100">
                    <div className="flex items-center gap-2 mt-2">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-6 space-y-6 bg-white">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <Package className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-blue-950">Items Supplied</h3>
                        <ul className="mt-2 space-y-1">
                          {project.itemsSupplied.map((item, index) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <Building2 className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-blue-950">Brands Supplied</h3>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {project.brands.map((brand, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                            >
                              {brand}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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

