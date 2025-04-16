import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Facebook, Linkedin, Mail, Printer, Twitter } from "lucide-react"

export default function AluafsMarinePage() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="relative aspect-square w-full bg-white rounded-lg overflow-hidden shadow-md">
          <Image
            src="/images/products/flexible-ducts/Aluafs.F Marine.webp"
            alt="ALUAFS.F MARINE"
            fill
            className="object-contain p-4"
          />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h1 className="text-3xl font-bold text-blue-900">ALUAFS.F MARINE</h1>
            <Badge className="bg-blue-600">Marine Grade</Badge>
          </div>
          <p className="text-gray-700 mb-6 text-lg">
            Premium non-insulated aluminum flexible air duct specifically engineered for marine environments, 
            offering superior corrosion resistance, high mechanical strength, and reliability in harsh saltwater conditions.
          </p>
        </div>
      </div>

      <Tabs defaultValue="specs" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="specs">TECHNICAL SPECIFICATIONS</TabsTrigger>
          <TabsTrigger value="certificates">CERTIFICATES</TabsTrigger>
          <TabsTrigger value="features">GENERAL FEATURES</TabsTrigger>
        </TabsList>
        <TabsContent value="specs" className="p-4 border rounded-lg mt-2">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium bg-gray-50">Construction Material</td>
                  <td className="py-3 px-4">Marine-grade aluminum laminated with PET</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium bg-gray-50">Wire Type</td>
                  <td className="py-3 px-4">High tension spring steel wire with anti-corrosion coating</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium bg-gray-50">Aluminum Thickness</td>
                  <td className="py-3 px-4">45 microns</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium bg-gray-50">Diameter Range</td>
                  <td className="py-3 px-4">102 mm to 508 mm</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium bg-gray-50">Operating Temperature</td>
                  <td className="py-3 px-4">-30°C to +140°C</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium bg-gray-50">Operating Pressure</td>
                  <td className="py-3 px-4">Up to 3000 Pa</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium bg-gray-50">Maximum Air Velocity</td>
                  <td className="py-3 px-4">30 m/s</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4 font-medium bg-gray-50">Standard Length</td>
                  <td className="py-3 px-4">10 m</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium bg-gray-50">Packing</td>
                  <td className="py-3 px-4">Single cardboard box with moisture protection</td>
                </tr>
              </tbody>
            </table>
          </div>
        </TabsContent>
        <TabsContent value="certificates" className="p-4 border rounded-lg mt-2">
          <ul className="space-y-3 list-disc pl-5">
            <li>
              <span className="font-medium">EN 13180:</span> Ventilation for buildings - Ductwork - Dimensions and mechanical requirements for flexible ducts
            </li>
            <li>
              <span className="font-medium">ISO 9001:2015:</span> Quality Management System
            </li>
            <li>
              <span className="font-medium">MED (Marine Equipment Directive):</span> 2014/90/EU compliant
            </li>
            <li>
              <span className="font-medium">ASTM B117:</span> Salt Spray (Fog) Test - Superior corrosion resistance
            </li>
            <li>
              <span className="font-medium">IMO Resolution MSC.307(88):</span> International Maritime Organization fire test procedures for maritime applications
            </li>
          </ul>
        </TabsContent>
        <TabsContent value="features" className="p-4 border rounded-lg mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Marine-Grade Construction</h3>
                <p className="text-gray-600">
                  Fabricated with specialized marine-grade aluminum that resists saltwater corrosion and degradation in high-humidity environments. Enhanced with PET lamination for added durability.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Mechanical Resilience</h3>
                <p className="text-gray-600">
                  Reinforced with corrosion-resistant spring steel wire that maintains structural integrity in demanding marine conditions. Designed to withstand vibration and movement typical on vessels.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Extended Temperature Range</h3>
                <p className="text-gray-600">
                  Capable of operating effectively across extreme temperature variations from -30°C to +140°C, ensuring reliable performance in various marine climates and engine room environments.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Maritime Compliance</h3>
                <p className="text-gray-600">
                  Meets international maritime standards and regulations including MED 2014/90/EU and IMO fire safety requirements, ensuring suitability for installation on commercial vessels and offshore platforms.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 