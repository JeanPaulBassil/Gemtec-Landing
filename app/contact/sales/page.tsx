"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollReveal } from "@/components/ui/animations"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import { useState } from "react"
import { Building2, Users2, Clock, Mail, Phone } from "lucide-react"

const productCategories = [
  "Air Outlet Grilles & Dampers",
  "Fans",
  "PIR Panels",
  "Flexible Ducts",
  "Insulation",
  "Air Curtains",
  "Sound Attenuators",
  "Accessories",
]

const salesTeam = [
  {
    region: "Lebanon",
    name: "Sales Team Lebanon",
    email: "sales.lebanon@gemtec-int.com",
    phone: "+961 1 380 377",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM",
  },
  {
    region: "Ghana",
    name: "Sales Team Ghana",
    email: "sales.ghana@gemtec-int.com",
    phone: "+233 (0) 30 394 3715",
    hours: "Mon-Fri: 7:00 AM - 4:00 PM",
  },
  {
    region: "Nigeria",
    name: "Sales Team Nigeria",
    email: "sales.nigeria@gemtec-int.com",
    phone: "Contact via email",
    hours: "Mon-Fri: 8:00 AM - 5:00 PM",
  },
]

export default function SalesContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    // Handle form submission here
  }

  return (
    <>
      <section className="relative py-24 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Contact Sales Team
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Get in touch with our sales team for product inquiries and quotations
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <Card>
                  <CardHeader>
                    <CardTitle>Sales Inquiry Form</CardTitle>
                    <CardDescription>
                      Please fill out the form below and our sales team will get back to you within 24 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First name</Label>
                            <Input id="firstName" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last name</Label>
                            <Input id="lastName" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Business email</Label>
                          <Input id="email" type="email" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone number</Label>
                          <Input id="phone" type="tel" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company">Company name</Label>
                          <Input id="company" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="position">Job title</Label>
                          <Input id="position" required />
                        </div>

                        <div className="space-y-2">
                          <Label>Company type</Label>
                          <RadioGroup defaultValue="contractor" className="flex flex-wrap gap-4">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="contractor" id="contractor" />
                              <Label htmlFor="contractor">Contractor</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="distributor" id="distributor" />
                              <Label htmlFor="distributor">Distributor</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="consultant" id="consultant" />
                              <Label htmlFor="consultant">Consultant</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="other" id="other" />
                              <Label htmlFor="other">Other</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="products">Products of interest</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select product category" />
                            </SelectTrigger>
                            <SelectContent>
                              {productCategories.map((category) => (
                                <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
                                  {category}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="region">Preferred sales region</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select region" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="lebanon">Lebanon</SelectItem>
                              <SelectItem value="ghana">Ghana</SelectItem>
                              <SelectItem value="nigeria">Nigeria</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message</Label>
                          <Textarea
                            id="message"
                            placeholder="Please provide details about your inquiry"
                            className="min-h-[150px]"
                            required
                          />
                        </div>
                      </div>

                      <Button type="submit" className="w-full btn-secondary" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <LoadingSpinner className="mr-2" />
                            Submitting...
                          </>
                        ) : (
                          "Submit Inquiry"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>

            <div className="space-y-6">
              <ScrollReveal>
                <div className="space-y-6">
                  {salesTeam.map((team) => (
                    <Card key={team.region} className="card-hover">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Building2 className="h-5 w-5 text-primary" />
                          {team.region}
                        </CardTitle>
                        <CardDescription>{team.name}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4 text-primary shrink-0" />
                          <a href={`mailto:${team.email}`} className="hover:text-primary">
                            {team.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-primary shrink-0" />
                          <span>{team.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="h-4 w-4 text-primary shrink-0" />
                          <span>{team.hours}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <Card className="bg-primary/5 border-none">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users2 className="h-5 w-5 text-primary" />
                      Need Technical Support?
                    </CardTitle>
                    <CardDescription>
                      Our technical team is ready to assist you with product specifications and technical inquiries.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline" asChild>
                      <a href="mailto:technical@gemtec-int.com">Contact Technical Support</a>
                    </Button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

