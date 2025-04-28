import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users2, Globe2, Award, Target } from "lucide-react"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const milestones = [
  {
    year: "2021",
    title: "Ghana Expansion",
    description: "Established factory for Air Outlet Grille and Dampers in Accra, Ghana",
  },
  {
    year: "2023",
    title: "Nigeria Growth",
    description: "Inaugurated new office in Nigeria",
  },
  {
    year: "2025",
    title: "The Next Chapter",
    description: "Innovation continues. Stay tuned for our next breakthrough...",
    highlight: true
  },
]

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "Committed to delivering top-quality HVAC solutions that exceed industry standards",
  },
  {
    icon: Users2,
    title: "Customer Focus",
    description: "Dedicated to understanding and meeting unique customer requirements",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Strategic presence in multiple regions to serve international markets",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "Continuously advancing our technology and solutions",
  },
]

const stats = [
  {
    icon: Building2,
    value: 3,
    label: "Manufacturing Facilities",
    suffix: "+",
  },
  {
    icon: Users2,
    value: 500,
    label: "Employees Worldwide",
    suffix: "+",
  },
  {
    icon: Globe2,
    value: 25,
    label: "Countries Served",
    suffix: "+",
  },
  {
    icon: Award,
    value: 15,
    label: "Years of Excellence",
    suffix: "+",
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="relative py-24 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              About GEMTEC
            </h1>
            <p className="mt-6 text-lg text-gray-300">A legacy of innovation and excellence in HVAC solutions</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-1">
                <span className="text-sm font-medium text-secondary">Our Story</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">Company Overview</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  GEMTEC is a leading company with a strong reputation in the HVAC industry, specializing in supplying and delivering certified products and customized solutions.
                </p>
                <p>
                  Established in 1995 under the name "Gulf Electro-Mechanical Technologies Company" and headquartered in Beirut, Lebanon, GEMTEC has a long history of success in the regional markets, particularly in the Arabian Gulf and the UAE, spanning over 15 years.
                </p>
                <p>
                  GEMTEC has established itself as a leading provider of certified HVAC products and solutions. Our
                  journey began with a vision to revolutionize the HVAC industry through innovation and excellence.
                </p>
                <p>
                  In 2021, we took a significant step forward by establishing a factory for Air Outlet Grille and
                  various dampers in Accra, Ghana, expanding our activities and gaining a competitive advantage in the
                  international market.
                </p>
                <p>
                  By 2023, we marked another milestone with the inauguration of a new factory in Nigeria, further
                  strengthening our presence in the African market and reducing delivery lead times for our customers.
                </p>
              </div>
            </div>
            <div className="relative aspect-square">
              <Image 
                src="/about images/About us images.png" 
                alt="GEMTEC Company Overview" 
                fill 
                className="object-cover rounded-lg" 
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 section-accent">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold">Our Values</span>
            <h2 className="text-3xl font-bold tracking-tight mt-2">What Drives Us</h2>
            <p className="mt-4 text-lg text-muted-foreground">Our core values shape everything we do at GEMTEC</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="card-hover">
                <CardHeader>
                  <div className="mb-4 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                  <CardDescription>{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="text-center mb-12">
            <span className="text-secondary font-semibold">Our Journey</span>
            <h2 className="text-3xl font-bold tracking-tight mt-2">Key Milestones</h2>
            <p className="mt-4 text-lg text-muted-foreground">Significant moments in our growth and expansion</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative pl-8 border-l-2 ${milestone.highlight ? 'border-secondary' : 'border-secondary/20'} last:border-transparent transition-all duration-500 ${milestone.highlight ? 'hover:scale-105 hover:pl-10' : ''}`}
                >
                  <div className={`absolute left-0 top-0 w-4 h-4 rounded-full ${milestone.highlight ? 'bg-secondary animate-pulse' : 'bg-secondary/20'} -translate-x-[9px] flex items-center justify-center`}>
                    <div className={`${milestone.highlight ? 'w-2.5 h-2.5' : 'w-2 h-2'} rounded-full ${milestone.highlight ? 'bg-white' : 'bg-secondary'}`} />
                  </div>
                  <div className={`space-y-2 ${milestone.highlight ? 'bg-gradient-to-r from-secondary/10 to-transparent p-4 rounded-lg' : ''}`}>
                    <div className={`${milestone.highlight ? 'text-secondary font-bold text-lg' : 'text-secondary font-semibold'}`}>{milestone.year}</div>
                    <h3 className={`${milestone.highlight ? 'text-2xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent' : 'text-xl font-semibold'}`}>{milestone.title}</h3>
                    <p className={`${milestone.highlight ? 'text-base font-medium' : 'text-muted-foreground'}`}>{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <Card key={stat.label} className="text-center card-hover">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-4xl font-bold">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </CardTitle>
                    <CardDescription>{stat.label}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-blue-950 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Global Manufacturing Excellence</h2>
            <p className="text-lg text-gray-300 mt-4">
              Our state-of-the-art manufacturing facilities in Ghana and Nigeria enable us to serve our customers with
              faster delivery times and localized support. We maintain the highest standards of quality across all our
              operations.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-white text-2xl">Ghana Facility</CardTitle>
                <CardDescription className="text-gray-300 mt-2">
                  Specialized in Air Outlet Grilles and damper production
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
                    Advanced manufacturing technology
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
                    Quality control excellence
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
                    Established in 2021
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 transform transition-all duration-300 hover:translate-y-[-8px] hover:shadow-xl">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-white text-2xl">Nigeria Facility</CardTitle>
                <CardDescription className="text-gray-300 mt-2">
                  Advanced manufacturing and distribution center
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
                    State-of-the-art equipment
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
                    Strategic market location
                  </li>
                  <li className="flex items-center justify-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
                    Inaugurated in 2023
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

