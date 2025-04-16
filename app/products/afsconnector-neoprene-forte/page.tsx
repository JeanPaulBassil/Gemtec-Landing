import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AfsconnectorNeopreneFortePage() {
  return (
    <>
      <section className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square border rounded-lg overflow-hidden bg-white">
            <Image
              src="/images/products/flexible-ducts/AFSCONNECTOR%5BNEOPRENE%20FORTE%5D.webp"
              alt="AFSCONNECTOR[Neoprene Forte]"
              fill
              className="object-contain p-6"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-blue-950">AFSCONNECTOR[Neoprene Forte]</h1>
              <div className="mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Flexible duct connector – neoprene coated fiber glass fabric</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Suitable for high velocity applications and outdoor conditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>High resistance to alkalies and gasoline</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="container py-8">
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="w-full max-w-3xl mx-auto bg-white border border-gray-200 rounded-t-lg p-1 z-10 relative">
            <TabsTrigger value="technical" className="w-full text-sm md:text-base">TECHNICAL SPECIFICATIONS</TabsTrigger>
            <TabsTrigger value="certificates" className="w-full text-sm md:text-base">CERTIFICATES</TabsTrigger>
            <TabsTrigger value="general" className="w-full text-sm md:text-base">GENERAL FEATURES</TabsTrigger>
          </TabsList>

          <div className="bg-gray-50 border border-gray-200 rounded-lg -mt-1 pt-4">
            <TabsContent value="technical" className="py-6 px-4 md:px-8">
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="pt-0 px-0">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-medium">Base Fabric</td>
                          <td className="py-3 px-4">Fiberglass</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-medium">Coating</td>
                          <td className="py-3 px-4">Neoprene (Both Sides)</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-medium">Construction</td>
                          <td className="py-3 px-4">Galvanized Steel Plate + Coated Fabric + Galvanized Steel Plate</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-medium">Coated Fabric Weight</td>
                          <td className="py-3 px-4">880 g/m2</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-medium">Coated Fabric Thickness</td>
                          <td className="py-3 px-4">720 micron</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-medium">Tear Strength</td>
                          <td className="py-3 px-4"></td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-medium">Color</td>
                          <td className="py-3 px-4">Black</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-medium">Temperature Range</td>
                          <td className="py-3 px-4"></td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-medium">Fire Resistance</td>
                          <td className="py-3 px-4">Non-Combustible (Fabric) - Fire Retardant (Coating)</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">Packing</td>
                          <td className="py-3 px-4"></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="certificates" className="py-6 px-4 md:px-8">
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="pt-0 px-0">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white rounded-lg overflow-hidden">
                      <tbody>
                        <tr>
                          <td className="py-3 px-4 font-medium">AMERIKA (USA)</td>
                          <td className="py-3 px-4">NFPA 701 (USA)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="general" className="py-6 px-4 md:px-8">
              <Card className="border-0 shadow-none bg-transparent">
                <CardContent className="pt-0 px-0">
                  <div className="text-gray-700 bg-white p-4 md:p-6 rounded-lg">
                    <p className="mb-4">
                      HVAC system carries the conditioned and fresh air to the occupants of a building. Meantime, the operation of the fan or blower used as the mechanical part of the system creates noise and vibration. This noise and vibration is also carried by metal ducts throughout the whole system. Flexible duct connectors are used between mechanical equipment and ductwork in order to keep the noise and vibration at the source and in order not to transmit it to the ductwork.
                    </p>
                    <p className="mb-4">
                      Higher the elasticity, higher the vibration isolation ability for the flexible duct connector. Hence elastomeric materials are used as the flexible connector material. AFSCONNECTOR[NEOPRENE] FORTE is produced using neoprene coated fiber class.
                    </p>
                    <p className="mb-4">
                      APPLICATION
                    </p>
                    <p className="mb-4">
                      AFSCONNECTOR[NEOPRENE] FORTE is specifically designed for heating, cooling, ventilation and air conditioning systems.
                    </p>
                    <p className="mb-4">
                      AFSCONNECTOR[NEOPRENE] FORTE is used to connect mechanical equipment and rigid air duct or two rigid air ducts, providing dampening against vibration and absorbing lateral movements.
                    </p>
                    <p className="mb-4">
                      GENERAL PROPERTIES
                    </p>
                    <p className="mb-4">
                      AFSCONNECTOR[NEOPRENE] FORTE is leak proof (airtight & waterproof).
                    </p>
                    <p className="mb-4">
                      They are suitable for rectangular, oval and circular applications and easy to install.
                    </p>
                    <p className="mb-4">
                      LOCKING SYSTEM
                    </p>
                    <p className="mb-4">
                      AFSCONNECTOR[NEOPRENE] FORTE is produced using a special SAFE SEAM technique from galvanized steel plate +heavy coated fabric + galvanized steel plate. The SAFE SEAM clamp system ensures that the coated fabric and the galvanized steel plates are inseparable.
                    </p>
                    <p className="mb-4">
                      SPECIAL SIZE
                    </p>
                    <p>
                      100x120x100 mm AFSCONNECTOR[NEOPRENE] FORTE's wide galvanized steel plates make it compatible with roll forming and flange manufacture systems.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </section>
    </>
  )
} 