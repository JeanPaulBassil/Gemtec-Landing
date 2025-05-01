import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Building } from "lucide-react"

const offices = [
  {
    country: "Lebanon",
    title: "Head Office",
    address: "Hamoudeh Building, GF, Tayouneh - Beirut",
    phone: ["+9611 380 377", "+9611 275 277", "009611389377"],
    email: "info@gemtec-int.com",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.966193134545!2d35.49994047619233!3d33.86060757319092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f174d1ddf5ca5%3A0xa27feca7b42b1a40!2sTayouneh%2C%20Beirut%2C%20Lebanon!5e0!3m2!1sen!2sus!4v1719592926633!5m2!1sen!2sus",
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
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.817082508558!2d35.52821147608726!3d33.89522077333724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f16e4f165bfd3%3A0x5df97cf0129f56e8!2sMar%20Mikhael%2C%20Beirut%2C%20Lebanon!5e0!3m2!1sen!2sus!4v1719596126453!5m2!1sen!2sus",
    workingHours: {
      weekdays: "Monday - Friday: 8:00 AM - 5:00 PM",
      saturday: "Saturday: 8:00 AM - 1:00 PM",
      sunday: "Sunday: Closed",
    },
  },
  {
    country: "Ghana",
    title: "Factory and Showroom",
    address: "New Spintex Road, Near Palace Mall",
    phone: ["+233 (0) 30 394 3715", "+233 (0) 500 010 003", "+233 53 335 0141"],
    email: "info@gemtec-int.com",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.3476868462584!2d-0.12619748857465894!3d5.6648716330064955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b079b683ac7%3A0xebe40a5b9d2a179c!2sSpintex%20Rd%2C%20Accra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1719596190878!5m2!1sen!2sus",
    workingHours: {
      weekdays: "Monday - Friday: 7:00 AM - 4:00 PM",
      saturday: "Saturday: 8:00 AM - 2:00 PM",
      sunday: "Sunday: Closed",
    },
  },
  {
    country: "Nigeria",
    title: "Office",
    address: "Plot 3 Billings way, Ikeja Lagos, Victoria Island",
    email: "info@gemtec-int.com",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8201673150487!2d3.3595249864131963!3d6.544490023441618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d79a9a0e15f%3A0xb031a63cac4f2d54!2sIkeja%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1719596250551!5m2!1sen!2sus",
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
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-2 bg-blue-900/50 border border-blue-800 rounded-full text-blue-100">
              <span className="font-medium text-sm tracking-wide">Global Presence</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl/none text-white drop-shadow-sm">
              Our Global Offices
            </h1>
            <p className="mt-6 text-xl text-blue-100">
              Strategic locations serving international markets with local expertise
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-blue-50/50 to-transparent">
        <div className="container max-w-7xl">
          <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-2">
            {offices.map((office) => (
              <Card key={office.country + office.title} className="flex flex-col overflow-hidden shadow-xl rounded-xl border-0">
                <CardHeader className="bg-gradient-to-r from-blue-700 to-blue-800 text-white p-6">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Building className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center text-xl">
                        {office.title}
                      </CardTitle>
                      <CardDescription className="text-blue-100 mt-0.5">{office.country}</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <div className="w-full h-[280px] bg-gray-50 relative">
                  <iframe 
                    src={office.mapEmbed}
                    width="100%" 
                    height="100%" 
                    style={{ 
                      border: 0,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%'
                    }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${office.country} - ${office.title} Location`}
                  ></iframe>
                </div>
                
                <CardContent className="p-6 space-y-5 bg-white">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-blue-950">Address</h3>
                      <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                    </div>
                  </div>
                  
                  {office.phone && (
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-blue-950">Phone</h3>
                        <div className="space-y-1 mt-1">
                          {office.phone.map((number) => (
                            <p key={number} className="text-sm text-muted-foreground">
                              <a href={`tel:${number}`} className="hover:text-blue-600 transition-colors">
                                {number}
                              </a>
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-blue-950">Email</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        <a href={`mailto:${office.email}`} className="hover:text-blue-600 transition-colors">
                          {office.email}
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm text-blue-950">Business Hours</h3>
                      <div className="space-y-1 mt-1">
                        <p className="text-sm text-muted-foreground">{office.workingHours.weekdays}</p>
                        <p className="text-sm text-muted-foreground">{office.workingHours.saturday}</p>
                        <p className="text-sm text-muted-foreground">{office.workingHours.sunday}</p>
                      </div>
                    </div>
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

