'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Search } from "lucide-react"
import Link from "next/link"
import { FadeInStagger, HoverScale } from "@/components/ui/animations"
import { useJobOfferings } from "@/hooks/use-job-offerings"

export default function PositionsPage() {
  const {
    filteredJobOfferings,
    loading,
    error,
    searchQuery,
    setSearchQuery,
    selectedLocation,
    setSelectedLocation,
    selectedDepartment,
    setSelectedDepartment,
    locations,
    departments
  } = useJobOfferings();

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
                  <Input 
                    className="pl-9" 
                    placeholder="Search positions..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {locations.filter(loc => loc !== 'all').map(location => (
                      <SelectItem key={location} value={location}>
                        {location.charAt(0).toUpperCase() + location.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger>
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    {departments.filter(dept => dept !== 'all').map(department => (
                      <SelectItem key={department} value={department}>
                        {department.charAt(0).toUpperCase() + department.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </Card>
          </div>

          {error ? (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold mb-2 text-red-600">Error loading positions</h3>
              <p className="text-muted-foreground">Please try again later</p>
            </div>
          ) : loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : filteredJobOfferings.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold mb-2">No positions found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          ) : (
            <FadeInStagger>
              <div className="grid gap-6">
                {filteredJobOfferings.map((position) => (
                  <HoverScale key={position.id}>
                    <Card className="card-hover">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <CardTitle>{position.title}</CardTitle>
                            <CardDescription>
                              {position.cityName}, {position.countryName} • {position.positionType} • {position.department}
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
                          <div>
                            <h4 className="font-semibold mb-2">Requirements:</h4>
                            <ul className="list-disc list-inside space-y-1">
                              {position.requirements.map((req) => (
                                <li key={req.id} className="text-sm text-muted-foreground">
                                  {req.title}
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
          )}
        </div>
      </section>
    </>
  )
}

