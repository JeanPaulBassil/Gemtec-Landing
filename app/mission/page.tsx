import { Building2, Globe2, Users2 } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function MissionPage() {
  return (
    <>
      <section className="relative py-24 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Our Mission & Vision
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Driving innovation and setting industry standards in HVAC solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent" />
              <CardHeader>
                <CardTitle className="text-2xl">Vision Statement</CardTitle>
                <CardDescription>Leading the Future of HVAC</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  At GEMTEC Group, our vision is to be the regional leader in HVAC accessories driving innovation and
                  setting industry standards.
                </p>
              </CardContent>
            </Card>
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-transparent to-transparent" />
              <CardHeader>
                <CardTitle className="text-2xl">Mission Statement</CardTitle>
                <CardDescription>Enhancing Performance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  At GEMTEC Group, our mission is to provide innovative and reliable HVAC accessories that enhance the
                  performance, efficiency, and sustainability of heating, ventilation and air conditioning systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter">Company Overview</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A legacy of innovation and excellence in HVAC solutions
            </p>
          </div>
          <div className="grid gap-12">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                In 2021, GEMTEC took a significant step forward by establishing a factory for "Air Outlet Grille" and
                various "dampers" in Accra, Ghana, expanding its activities and gaining a competitive advantage to enter
                the international market. In 2023, we marked another significant milestone in the Nigerian market by
                inaugurating a new factory. These strategic moves enable us to better meet the increasing demands of the
                market and further reduce delivery lead time.
              </p>
              <p className="text-lg leading-relaxed">
                At GEMTEC, customer satisfaction is a top priority, and the company is known for providing tailor-made
                products that meet the unique needs of its customers. Backed by a team of competent professionals across
                various departments, GEMTEC ensures high-quality pre-sales and after-sales services to its clients,
                ensuring their complete satisfaction.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <Globe2 className="w-8 h-8 text-primary mb-4" />
                  <CardTitle>Global Presence</CardTitle>
                  <CardDescription>Strategic locations in Lebanon, Ghana, and Nigeria</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Building2 className="w-8 h-8 text-primary mb-4" />
                  <CardTitle>Manufacturing Excellence</CardTitle>
                  <CardDescription>State-of-the-art facilities for HVAC products</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Users2 className="w-8 h-8 text-primary mb-4" />
                  <CardTitle>Expert Team</CardTitle>
                  <CardDescription>Dedicated professionals across all departments</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter">Organization Structure</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our dedicated team working together to deliver excellence
            </p>
          </div>
          <div className="relative">
            <div className="max-w-4xl mx-auto">
              <Image
                src="/Mission Images/worker.png"
                alt="GEMTEC Organization Team"
                width={800}
                height={600}
                className="rounded-lg border shadow-lg"
                priority
              />
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div className="space-y-2">
                <h3 className="font-semibold">Management</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>CEO & General Manager</li>
                  <li>Managing Director</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Operations</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Engineering Department</li>
                  <li>Production Department</li>
                  <li>Quality Control Department</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Support</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>Marketing & Development</li>
                  <li>HR Department</li>
                  <li>Finance Department</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter">Global Presence</h2>
            <p className="mt-4 text-lg text-muted-foreground">Strategic locations serving international markets</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Lebanon</CardTitle>
                <CardDescription>Head Office</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Hamoudeh Building, GF, Tayouneh - Beirut
                  <br />
                  Tel: +9611 380 377 / +9611 275 277
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ghana</CardTitle>
                <CardDescription>Manufacturing Facility</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  New Spintex Road, Near Palace Mall
                  <br />
                  Tel: +233 (0) 30 394 3715
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Nigeria</CardTitle>
                <CardDescription>Manufacturing Facility</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Plot 3 Billings way, Ikeja Lagos
                  <br />
                  Victoria Island
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

