import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function VinylafsPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="relative aspect-square">
                  <Image
                    src="/images/products/flexible-ducts/Vinylafs.webp"
                    alt="VINYLAFS"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-blue-600">VINYLAFS</h1>
                <p className="text-xl text-gray-600 mt-6">
                  VINYLAFS non-insulated PVC flexible air ducts are specifically produced for heating, cooling, ventilation, air conditioning systems under low and medium pressure.
                </p>
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
                      <td className="py-3 px-4">1 ply PVC</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Nominal Thickness</td>
                      <td className="py-3 px-4">60 micron</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Diameter Range(Ø)</td>
                      <td className="py-3 px-4">82 - 203 mm</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Wire Spacing</td>
                      <td className="py-3 px-4">45 mm (Ø ≥ 127 mm)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Operating Temperature Range</td>
                      <td className="py-3 px-4">-20 °C / +70 °C</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Air Velocity</td>
                      <td className="py-3 px-4">20 m/s (max)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Operating Pressure</td>
                      <td className="py-3 px-4">1500 Pa (max)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Standard Length</td>
                      <td className="py-3 px-4">6 m</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Packing</td>
                      <td className="py-3 px-4">Special design cardboard box</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Reaction on to Fire</td>
                      <td className="py-3 px-4">Fire retardant</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Available Options Upon Request</td>
                      <td className="py-3 px-4">White, grey and black color options, Rectangular type, Customized lengths Plastic bag packing, Bulk packing, Shrink packing, Net packing KIT applications</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="certificates" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse mb-6">
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 font-medium border">ROHS COMPLIANT</td>
                      <td className="py-3 px-4 border"></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium border">REACH COMPLIANT</td>
                      <td className="py-3 px-4 border"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                <ul className="space-y-2 pl-5 list-disc">
                  <li>VINYLAFS non-insulated PVC flexible air ducts are specifically produced for heating, cooling, ventilation, air conditioning systems under low and medium pressure.</li>
                  <li>It is produced from PVC strips with high tension steel spring wire.</li>
                </ul>
                
                <h3 className="text-lg font-bold mt-6">Properties & Advantages</h3>
                <h4 className="font-bold">PVC CONSTRUCTION</h4>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li>Highly vibration resistant</li>
                  <li>Impermeable to UV rays</li>
                  <li>Resistant to chemicals</li>
                </ul>
                
                <h4 className="font-bold">FLEXIBLE AND SEAMLESS CONSTRUCTION</h4>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li>Easy storage</li>
                  <li>Easily transported</li>
                  <li>Airtight</li>
                  <li>Low energy consumption</li>
                  <li>Low operational and maintenance costs</li>
                </ul>
                
                <h4 className="font-bold">SMOOTH INNER SURFACE</h4>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li>Minimum pressure loss</li>
                  <li>Low operational cost</li>
                </ul>
                
                <h4 className="font-bold">HIGH TENSION STEEL WIRE</h4>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li>Highly durable</li>
                  <li>Highly resistant to deformation</li>
                  <li>Easily installed</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
} 