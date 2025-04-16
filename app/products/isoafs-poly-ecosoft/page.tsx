import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IsoafsPolyEcosoftPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="relative aspect-square">
                  <Image
                    src="/images/products/flexible-ducts/isoafs-poly-ecosoft.webp"
                    alt="ISOAFS POLY ECOSOFT"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-blue-600">ISOAFS POLY ECOSOFT</h1>
                <div className="space-y-2 mt-6">
                  <p className="text-blue-700">•Smooth inner core</p>
                  <p className="text-blue-700">•Lightweight</p>
                  <p className="text-blue-700">•Economic solution for low pressure system</p>
                  <p className="text-blue-700">•Ecological insulation</p>
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
              <TabsTrigger value="features" className="text-sm md:text-base">GENERAL FEATURES</TabsTrigger>
            </TabsList>
            
            <TabsContent value="technical" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Inner Duct Construction</td>
                      <td className="py-3 px-4">2 ply black polyester</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Nominal Thickness of Inner Duct</td>
                      <td className="py-3 px-4">30 micron</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Jacket Construction</td>
                      <td className="py-3 px-4">2 ply metallized polyester</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Nominal Thickness of Jacket</td>
                      <td className="py-3 px-4">30 micron</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Insulation-Thickness-Density</td>
                      <td className="py-3 px-4">Glass wool - 25 mm - 16 kg/m³</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Diameter Range(Ø)</td>
                      <td className="py-3 px-4">82 mm - 508 mm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Wire Spacing</td>
                      <td className="py-3 px-4">50 mm (Ø ≥ 140 mm)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Operating Temperature Range</td>
                      <td className="py-3 px-4">-30 °C / +120 °C</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Air Velocity</td>
                      <td className="py-3 px-4">30 m/s (max)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Operating Pressure</td>
                      <td className="py-3 px-4">+3000 Pa (max)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Standard Lenght</td>
                      <td className="py-3 px-4">7,6 m</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Packing</td>
                      <td className="py-3 px-4">Single cardboard box</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Reaction to Fire</td>
                      <td className="py-3 px-4">-</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Barrier Construction</td>
                      <td className="py-3 px-4">-</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Nominal Thickness of Barrier</td>
                      <td className="py-3 px-4">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                <p className="text-gray-700">ISOAFS POLY ECOSOFT thermally insulated polyester flexible air ducts are specifically produced for low and medium pressure heating, cooling, ventilation, exhaust and air conditioning systems.</p>
                <p className="text-gray-700">ISOAFS POLY ECOSOFT is highly elastic and flexible. It can be easily fitted to circular or oval connectors.</p>
                <p className="text-gray-700">The dimensions, tolerances and mechanical resistance of ISOAFS POLY ECOSOFT are tested, classified & certified according to EN 13180 standard.</p>
                
                <h3 className="text-lg font-bold mt-6">Properties & Advantages</h3>
                
                <h4 className="font-bold">POLYESTER LAMINATED INNER DUCT</h4>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li>Resistant to chemicals</li>
                  <li>Maintenance free</li>
                </ul>
                
                <h4 className="font-bold">FLEXIBLE & SEAMLESS CONSTRUCTION</h4>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li>Easy storage</li>
                  <li>Easily transported</li>
                  <li>Low installation cost</li>
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

                <h4 className="font-bold">GLASS WOOL INSULATION</h4>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li>Heat resistant (Certified, EN 13501-1, Class A1)</li>
                  <li>No fiber erosion</li>
                  <li>Minimal energy loss</li>
                  <li>Perfect insulation property</li>
                  <li>Non-condensation property</li>
                </ul>

                <h4 className="font-bold">REINFORCED METALLIZED POLYESTER JACKET</h4>
                <ul className="space-y-2 pl-5 list-disc mb-4">
                  <li>High resistance to wear and tear</li>
                  <li>Impermeable to UV rays</li>
                  <li>Reflection property</li>
                  <li>Resistant to chemicals</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
} 