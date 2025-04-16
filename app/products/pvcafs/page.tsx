import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PvcafsPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="relative aspect-square">
                  <Image
                    src="/images/products/flexible-ducts/Pvcafs.webp"
                    alt="PVCAFS"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-blue-600">PVCAFS</h1>
                <p className="text-xl text-gray-600 mt-6">
                  PVCAFS non-insulated reinforced PVC flexible air ducts are specifically produced for low and medium pressure heating, cooling, ventilation, air conditioning, exhaust and dust extraction systems.
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
                      <td className="py-3 px-4">1Ply PVC Coated Polyester</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Nominal Thickness</td>
                      <td className="py-3 px-4">220 Micron</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Diameter Range(Ø)</td>
                      <td className="py-3 px-4">52-800 mm</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Wire Spacing</td>
                      <td className="py-3 px-4">55mm ( Ø ≥127 mm )</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Operating Temperature Range</td>
                      <td className="py-3 px-4">-30 °C / +70 °C</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Air Velocity</td>
                      <td className="py-3 px-4">30 m/s (maksimum)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Operating Pressure</td>
                      <td className="py-3 px-4">+3000 Pa (max)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Standard Length</td>
                      <td className="py-3 px-4">52-76 mm (6M) - 82 - 800mm (10M)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Packing</td>
                      <td className="py-3 px-4">Single Cardboard Box</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Reaction on to Fire</td>
                      <td className="py-3 px-4">-</td>
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
                      <td className="py-3 px-4 font-medium border">Sert42</td>
                      <td className="py-3 px-4 border"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                <ul className="space-y-2 pl-5 list-disc">
                  <li>PVCAFS non-insulated reinforced PVC flexible air ducts are specifically produced for low and medium pressure heating, cooling, ventilation, air conditioning, exhaust and dust extraction systems.</li>
                  <li>PVCAFS is manufactured from hardwearing PVC canvas strip reinforced with high tension steel spring wire.</li>
                  <li>PVCAFS is highly elastic and flexible. It can be easily fitted to circular, oval or rectangular connectors.</li>
                  <li>The dimensions, tolerances and mechanical resistance of PVCAFS are tested, classified & certified according to EN 13180 standard.</li>
                </ul>
                
                <h3 className="text-lg font-bold mt-6">Properties & Advantages</h3>
                <h4 className="font-bold">REINFORCED PVC CONSTRUCTION</h4>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li>Highly vibration resistant</li>
                  <li>Suitable for dust/particle transport</li>
                  <li>Impermeable to UV rays</li>
                  <li>Resistant to chemicals</li>
                </ul>
                
                <h4 className="font-bold">FLEXIBLE & SEAMLESS CONSTRUCTION</h4>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li>Easy storage</li>
                  <li>Easily transported</li>
                  <li>Low installation cost</li>
                  <li>High resistance to wear and tear</li>
                  <li>Airtight</li>
                  <li>Low energy consumption</li>
                  <li>Low operation and maintenance costs</li>
                </ul>
                
                <h4 className="font-bold">SMOOTH INNER SURFACE</h4>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li>Minimal pressure loss</li>
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