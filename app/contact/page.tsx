import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function ContactPage() {
  return (
    <>
      <section className="relative py-24 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Contact Us
            </h1>
            <p className="mt-6 text-lg text-gray-300">Get in touch with our team for any inquiries</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">Get in Touch</h2>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Input placeholder="First name" />
                  </div>
                  <div className="space-y-2">
                    <Input placeholder="Last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="Email" />
                </div>
                <div className="space-y-2">
                  <Input placeholder="Subject" />
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="Message" className="min-h-[150px]" />
                </div>
                <Button className="w-full btn-secondary">Send Message</Button>
              </form>
            </div>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Head Office</CardTitle>
                  <CardDescription>Lebanon</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Tayouneh Office</p>
                      <p className="text-sm">Hamoudeh Building, GF, Tayouneh - Beirut</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1" />
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Mar Mkhayel Office</p>
                      <p className="text-sm">Mar Mkhayel</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-primary mt-1" />
                    <div className="space-y-1">
                      <p className="text-sm">+9611 380 377 / +9611 275 277</p>
                    </div>
                  </div>
                  {/* <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-primary mt-1" />
                    <p className="text-sm">info@gemtec-int.com</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <p className="text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  </div> */}
                </CardContent>
              </Card>
              <div className="aspect-video relative rounded-lg overflow-hidden border">
                <Image src="/placeholder.svg" alt="Office Location Map" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

