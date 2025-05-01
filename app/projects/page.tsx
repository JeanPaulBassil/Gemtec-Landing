import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Factory, School, Building, MapPin, Package } from "lucide-react"
import { ScrollReveal, FadeInStagger, HoverScale } from "@/components/ui/animations"
import Link from "next/link"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import ProjectList from "@/components/project-list"

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

const projectStats = [
  {
    value: 150,
    label: "Projects Completed",
    prefix: "",
    suffix: "+"
  },
  {
    value: 12,
    label: "Partner Brands",
    prefix: "",
    suffix: "+"
  },
  {
    value: 5,
    label: "Countries",
    prefix: "",
    suffix: "+"
  },
  {
    value: 10,
    label: "Years Experience",
    prefix: "",
    suffix: "+"
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
          <ProjectList />
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {projectStats.map((stat, index) => (
              <Card key={index} className="bg-white border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center">
                    {stat.prefix && (
                      <span className="text-gray-400 text-lg">{stat.prefix}</span>
                    )}
                    <span className="text-4xl font-bold text-blue-600">
                      <AnimatedCounter
                        end={stat.value}
                        prefix=""
                        suffix=""
                      />
                    </span>
                    {stat.suffix && (
                      <span className="text-gray-400 text-lg">{stat.suffix}</span>
                    )}
                  </div>
                  <p className="mt-2 text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

