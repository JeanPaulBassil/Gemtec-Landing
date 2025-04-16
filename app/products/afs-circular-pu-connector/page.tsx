import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AfsCircularPuConnectorPage() {
  return (
    <>
      <section className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square border rounded-lg overflow-hidden bg-white">
            <Image
              src="/images/products/flexible-ducts/AFS%20CIRCULAR%20PU%20CONNECTOR.webp"
              alt="AFS Circular PU Connector"
              fill
              className="object-contain p-6"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-blue-950">AFS CIRCULAR PU CONNECTOR</h1>
              <div className="mt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Flexible ara bağlantı elemanı – PU kaplı cam elyaf kumaş</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>UV dayanımlı – dış ortam uygulamaları için uygun</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>Aşınmaya karşı yüksek direnç</span>
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
                          <td className="py-3 px-4">Both sides PU</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-medium">Construction</td>
                          <td className="py-3 px-4"></td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-medium">Coated Fabric Weight</td>
                          <td className="py-3 px-4">480 g/m²</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-medium">Coated Fabric Thickness</td>
                          <td className="py-3 px-4">450 micron</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-medium">Tear Strength</td>
                          <td className="py-3 px-4"></td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4 font-medium">Color</td>
                          <td className="py-3 px-4"></td>
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
                          <td className="py-3 px-4">Single Cardboard Box</td>
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
                        <tr className="border-b">
                          <td className="py-3 px-4 font-medium">FRANSA (FRANCE)</td>
                          <td className="py-3 px-4">M0</td>
                        </tr>
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
                      Higher the elasticity, higher the vibration isolation ability for the flexible duct connector. Hence elastomeric materials are used as the flexible connector material. AFS CIRCULAR PU CONNECTOR is produced using PU coated fiber glass.
                    </p>
                    <p className="mb-4">
                      AFS CIRCULAR DUCT CONNECTOR is the perfect solution for noise and vibration caused by ventilation equipment transmitted through air duct system.
                    </p>
                    <p>
                      The circular Connector is available in kit form with two fastening metal clamps in plastic bags.
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