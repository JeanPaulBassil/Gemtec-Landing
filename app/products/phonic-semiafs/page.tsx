import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PhonicSemiafsPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="relative aspect-square">
                  <Image
                    src="/images/products/flexible-ducts/Phonic Semiafs.webp"
                    alt="PHONIC SEMIAFS"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-blue-600">PHONIC SEMIAFS</h1>
                <div className="mt-6 space-y-3">
                  <p className="text-gray-700">
                    PHONIC SEMIAFS aluminium semi flexible air ducts are flexible, extendable and highly reliable for low and medium pressure air conditioning, ventilation and boiler systems.
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
            <TabsList className="grid w-full md:w-fit grid-cols-2 mb-8">
              <TabsTrigger value="technical" className="text-sm md:text-base">TECHNICAL SPECIFICATIONS</TabsTrigger>
              <TabsTrigger value="general" className="text-sm md:text-base">GENERAL FEATURES</TabsTrigger>
            </TabsList>
            
            <TabsContent value="technical" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Inner Duct Construction</td>
                      <td className="py-3 px-4">1 ply Corrugated Aluminum (Perforated)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Nominal Thickness of Inner Duct</td>
                      <td className="py-3 px-4">90 Micron</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Diameter Range(Ø)</td>
                      <td className="py-3 px-4">80 mm - 400 mm</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Jacket Construction</td>
                      <td className="py-3 px-4">1 ply Corrugated Aluminium</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Nominal Thickness of Jacket</td>
                      <td className="py-3 px-4">90 Micron</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Collar Type</td>
                      <td className="py-3 px-4"></td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Insulation-Thickness-Density</td>
                      <td className="py-3 px-4">Glass Wool - 25 mm /50 mm - 16 kg/m³</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Operating Temperature Range</td>
                      <td className="py-3 px-4">- 25 °C / + 250 °C</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Air Velocity</td>
                      <td className="py-3 px-4">20 m/s</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Operating Pressure</td>
                      <td className="py-3 px-4">2000 Pa (Max)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Standard Length(excluding collar)</td>
                      <td className="py-3 px-4">1 m/2 m</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Standard Length(including collar)</td>
                      <td className="py-3 px-4"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="general" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                <p className="text-gray-700">PHONIC SEMIAFS aluminium semi flexible air ducts are flexible, extendable and highly reliable for low and medium pressure air conditioning, ventilation and boiler systems.</p>
                <p className="text-gray-700">Airtight PHONIC SEMIAFS is produced from perforated aluminium surrounded with glass wool insulation and an aluminium vapour barrier.</p>
                <p className="text-gray-700">Oval and circular connectors are easily installed.</p>
                <p className="text-gray-700">PHONIC SEMIAFS is secured using an "INTERLOCK" crimp system. "INTERLOCK" crimp systems minimize separation of the duct when it is stretched or bent.</p>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Properties & Advantages</h3>
                  <p className="font-medium mb-2">PURE ALUMINIUM BODY</p>
                  <ul className="space-y-2 list-disc pl-5 mb-6">
                    <li className="text-gray-700">Non-flammable</li>
                    <li className="text-gray-700">Resistant to chemicals</li>
                  </ul>
                  
                  <p className="font-medium mb-2">SEMI-FLEXIBLE & INTERLOCK CONSTRUCTION</p>
                  <ul className="space-y-2 list-disc pl-5 mb-6">
                    <li className="text-gray-700">Easy transport & storage</li>
                    <li className="text-gray-700">Quick and easy installation</li>
                    <li className="text-gray-700">Inseparable</li>
                    <li className="text-gray-700">Leak proof</li>
                    <li className="text-gray-700">Airtight</li>
                    <li className="text-gray-700">Energy efficiency</li>
                    <li className="text-gray-700">Low operational and maintenance cost</li>
                  </ul>
                  
                  <p className="font-medium mb-2">GLASS WOOL INSULATION</p>
                  <ul className="space-y-2 list-disc pl-5 mb-6">
                    <li className="text-gray-700">Heat resistant (Certified, EN 13501-1, Class A1)</li>
                    <li className="text-gray-700">No fiber erosion</li>
                    <li className="text-gray-700">Minimal energy loss</li>
                    <li className="text-gray-700">Perfect insulation property</li>
                    <li className="text-gray-700">Non-condensation</li>
                  </ul>
                  
                  <p className="font-medium mb-2">ALUMINIUM JACKET</p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li className="text-gray-700">Non-flammable</li>
                    <li className="text-gray-700">Resistant to chemicals</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
} 