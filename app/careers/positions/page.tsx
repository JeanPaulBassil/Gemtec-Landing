import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import { FadeInStagger, HoverScale } from "@/components/ui/animations"

const positions = [
  {
    id: "hvac-design-engineer",
    title: "HVAC Design Engineer",
    location: "Beirut, Lebanon",
    type: "Full-time",
    department: "Engineering",
    description: "Design and develop HVAC systems for commercial and industrial applications.",
    requirements: [
      "Bachelor's degree in Mechanical Engineering",
      "3+ years of HVAC design experience",
      "Proficiency in AutoCAD and HVAC design software",
      "Strong analytical and problem-solving skills",
    ],
  },
  {
    id: "production-supervisor",
    title: "Production Supervisor",
    location: "Accra, Ghana",
    type: "Full-time",
    department: "Manufacturing",
    description: "Oversee manufacturing operations and ensure quality standards in our production facility.",
    requirements: [
      "Bachelor's degree in Engineering or related field",
      "5+ years of manufacturing experience",
      "Strong leadership and communication skills",
      "Experience with lean manufacturing principles",
    ],
  },
  {
    id: "sales-engineer",
    title: "Sales Engineer",
    location: "Lagos, Nigeria",
    type: "Full-time",
    department: "Sales",
    description: "Drive sales growth and provide technical support to clients in the region.",
    requirements: [
      "Bachelor's degree in Engineering",
      "2+ years of sales experience in HVAC industry",
      "Strong technical knowledge of HVAC systems",
      "Excellent communication and negotiation skills",
    ],
  },
  {
    id: "quality-control-specialist",
    title: "Quality Control Specialist",
    location: "Accra, Ghana",
    type: "Full-time",
    department: "Quality Assurance",
    description: "Ensure product quality meets international standards and company specifications.",
    requirements: [
      "Bachelor's degree in Engineering or related field",
      "3+ years of quality control experience",
      "Knowledge of ISO standards and quality management systems",
      "Strong attention to detail and analytical skills",
    ],
  },
  {
    id: "marketing-manager",
    title: "Marketing Manager",
    location: "Beirut, Lebanon",
    type: "Full-time",
    department: "Marketing",
    description: "Develop and implement marketing strategies for our HVAC products and solutions.",
    requirements: [
      "Bachelor's degree in Marketing or related field",
      "5+ years of B2B marketing experience",
      "Experience in digital marketing and content strategy",
      "Strong project management skills",
    ],
  },
]

export default function PositionsPage() {
  return (
    <>
      <section className="relative py-24 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              All Positions
            </h1>
            <p className="mt-6 text-lg text-gray-300">Find your perfect role in our growing team</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="mb-12">
            <Card className="p-6">
              <div className="grid gap-4 md:grid-cols-4">
                <div className="relative md:col-span-2">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input className="pl-9" placeholder="Search positions..." />
                </div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="lebanon">Lebanon</SelectItem>
                    <SelectItem value="ghana">Ghana</SelectItem>
                    <SelectItem value="nigeria">Nigeria</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </Card>
          </div>

          <FadeInStagger>
            <div className="grid gap-6">
              {positions.map((position) => (
                <HoverScale key={position.id}>
                  <Card className="card-hover">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="space-y-1">
                          <CardTitle>{position.title}</CardTitle>
                          <CardDescription>
                            {position.location} • {position.type} • {position.department}
                          </CardDescription>
                        </div>
                        <Button asChild className="btn-secondary">
                          <Link href={`/careers/apply?position=${position.id}`}>
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-muted-foreground">{position.description}</p>
                        <div>
                          <h4 className="font-semibold mb-2">Requirements:</h4>
                          <ul className="list-disc list-inside space-y-1">
                            {position.requirements.map((req) => (
                              <li key={req} className="text-sm text-muted-foreground">
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </section>
    </>
  )
}

