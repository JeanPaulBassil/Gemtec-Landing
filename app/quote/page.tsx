import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function QuotePage() {
  return (
      <section className="relative py-24 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Request a Quote
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Tell us about your project and we'll provide you with a customized quote
            </p>
          </div>
        </div>
      </section>

      <section
  className =
    "py-24" >
    (
      <div className="container max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
            <CardDescription>
              Please provide as much detail as possible to help us understand your requirements.
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                <Input placeholder="Company name" />
              </div>
              <div className="space-y-2">
                <Input placeholder="Phone number" />
              </div>
              <div className="space-y-2">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Product category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="accessories">Accessories</SelectItem>
                    <SelectItem value="grilles">Air Outlet Grilles & Dampers</SelectItem>
                    <SelectItem value="curtains">Air Curtains</SelectItem>
                    <SelectItem value="fans">Fans</SelectItem>
                    <SelectItem value="ducts">Flexible Ducts</SelectItem>
                    <SelectItem value="insulation">Insulation</SelectItem>
                    <SelectItem value="pir">PIR Panels</SelectItem>
                    <SelectItem value="attenuators">Sound Attenuators</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="industrial">Industrial</SelectItem>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Textarea placeholder="Project description and requirements" className="min-h-[150px]" />
              </div>
              <div className="space-y-2">
                <Input type="date" placeholder="Desired completion date" />
              </div>
              <Button className="w-full btn-secondary">Submit Quote Request</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  </section>
  )
}

