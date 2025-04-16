import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SEMIAFSPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="relative aspect-square">
                  <Image
                    src="/images/products/flexible-ducts/Semiafs.webp"
                    alt="SEMIAFS"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-blue-600">SEMIAFS</h1>
                <div className="mt-6 space-y-3">
                  <p className="text-gray-700">
                    SEMIAFS aluminium semi flexible air ducts are flexible, extendable and highly reliable for low and medium pressure air conditioning, ventilation and boiler systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container">
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full md:w-fit grid-cols-3 mb-8">
              <TabsTrigger value="technical" className="text-sm md:text-base">TECHNICAL SPECIFICATIONS</TabsTrigger>
              <TabsTrigger value="certificates" className="text-sm md:text-base">CERTIFICATES</TabsTrigger>
              <TabsTrigger value="features" className="text-sm md:text-base">GENERAL FEATURES</TabsTrigger>
            </TabsList>
            
            <TabsContent value="technical" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Duct Construction</td>
                      <td className="py-3 px-4">Corrugated aluminium continuous system</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Nominal Thickness</td>
                      <td className="py-3 px-4">90 micron</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Diameter Range(Ø)</td>
                      <td className="py-3 px-4">80 - 800 mm</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Wire Spacing</td>
                      <td className="py-3 px-4">-</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Operating Temperature Range</td>
                      <td className="py-3 px-4">-25 °C / +250 °C</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Air Velocity</td>
                      <td className="py-3 px-4">25 m/s (max)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Operating Pressure</td>
                      <td className="py-3 px-4">±5000 Pa (max)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Standard Length</td>
                      <td className="py-3 px-4">1.5 m / 3.0 m / 5.0 m Fully extended</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Packing</td>
                      <td className="py-3 px-4">Single nylon package (Bulk packing)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Reaction on to Fire</td>
                      <td className="py-3 px-4">Non-combustible</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Avalable Options Upon Request</td>
                      <td className="py-3 px-4">Customized lengths, 120 micron aluminium, Bulk packing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="certificates" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse mb-6">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">AVRUPA (EUROPE)</td>
                      <td className="py-3 px-4">Class A1 - EN 13501-1</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">FLAME SPREAD INDEX:0, [UL 723 AS PER UL 181] LETTER / MED APPROVAL -</td>
                      <td className="py-3 px-4"></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">ROHS COMPLIANT</td>
                      <td className="py-3 px-4"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                <p className="text-gray-700">SEMIAFS aluminium semi flexible air ducts are flexible, extendable and highly reliable for low and medium pressure air conditioning, ventilation and boiler systems. SEMIAFS is elastic, flexible and stretchable. Oval and circular connectors are easily installed. SEMIAFS is secured using an "INTERLOCK" crimp system. "INTERLOCK" crimp systems minimize separation of the duct when it is stretched or bent.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
} 