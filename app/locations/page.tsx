import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, ExternalLink, Clock } from "lucide-react"

const offices = [
  {
    country: "Lebanon",
    title: "Head Office",
    address: "Hamoudeh Building, GF, Tayouneh - Beirut",
    phone: ["+9611 380 377", "+9611 275 277", "009611389377"],
    email: "info@gemtec-int.com",
    mapUrl: "https://maps.google.com",
    workingHours: {
      weekdays: "Monday - Friday: 8:00 AM - 5:00 PM",
      saturday: "Saturday: 8:00 AM - 1:00 PM",
      sunday: "Sunday: Closed",
    },
  },
  {
    country: "Lebanon",
    title: "Branch Office",
    address: "Mar Mkhayel",
    phone: ["+9611 380 377"],
    email: "info@gemtec-int.com",
    mapUrl: "https://maps.google.com",
    workingHours: {
      weekdays: "Monday - Friday: 8:00 AM - 5:00 PM",
      saturday: "Saturday: 8:00 AM - 1:00 PM",
      sunday: "Sunday: Closed",
    },
  },
  {
    country: "Ghana",
    title: "Manufacturing Facility",
    address: "New Spintex Road, Near Palace Mall",
    phone: ["+233 (0) 30 394 3715", "+233 (0) 500 010 003", "+233 53 335 0141"],
    email: "info@gemtec-int.com",
    mapUrl: "https://maps.google.com",
    workingHours: {
      weekdays: "Monday - Friday: 7:00 AM - 4:00 PM",
      saturday: "Saturday: 8:00 AM - 2:00 PM",
      sunday: "Sunday: Closed",
    },
  },
  {
    country: "Nigeria",
    title: "Manufacturing Facility",
    address: "Plot 3 Billings way, Ikeja Lagos, Victoria Island",
    email: "info@gemtec-int.com",
    mapUrl: "https://maps.google.com",
    workingHours: {
      weekdays: "Monday - Friday: 8:00 AM - 5:00 PM",
      saturday: "Saturday: 9:00 AM - 2:00 PM",
      sunday: "Sunday: Closed",
    },
  },
]

export default function LocationsPage() {
  return (
    <>
      <section className="relative py-24 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Our Global Offices
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Strategic locations serving international markets with local expertise
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {offices.map((office) => (
              <Card key={office.country + office.title} className="flex flex-col h-[400px]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {office.country}
                  </CardTitle>
                  <CardDescription>{office.title}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{office.address}</p>
                    {office.phone && (
                      <div className="space-y-1">
                        {office.phone.map((number) => (
                          <p key={number} className="flex items-center gap-2 text-sm">
                            <Phone className="h-4 w-4 text-primary" />
                            <a href={`tel:${number}`} className="hover:text-primary">
                              {number}
                            </a>
                          </p>
                        ))}
                      </div>
                    )}
                    <p className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-primary" />
                      <a href={`mailto:${office.email}`} className="hover:text-primary">
                        {office.email}
                      </a>
                    </p>
                    <div className="space-y-1 pt-2">
                      <div className="flex items-start gap-2">
                        <Clock className="h-4 w-4 text-primary mt-1" />
                        <div className="text-sm space-y-1">
                          <p className="text-muted-foreground">{office.workingHours.weekdays}</p>
                          <p className="text-muted-foreground">{office.workingHours.saturday}</p>
                          <p className="text-muted-foreground">{office.workingHours.sunday}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-auto pt-4">
                    <Button variant="outline" className="w-full" asChild>
                      <a href={office.mapUrl} target="_blank" rel="noopener noreferrer">
                        <MapPin className="mr-2 h-4 w-4" />
                        Show on Map
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

