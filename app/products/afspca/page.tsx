import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AFSPCAPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm relative">
                <div className="absolute top-3 left-3 z-10">
                  <Badge className="bg-amber-500 hover:bg-amber-600">NEW PRODUCT</Badge>
                </div>
                <div className="relative aspect-square">
                  <Image
                    src="/images/products/flexible-ducts/AFSPCA.webp"
                    alt="AFSPCA"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-blue-600">AFSPCA</h1>
                <div className="mt-6 space-y-3">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>UV Resistance</li>
                    <li>Water Tightness</li>
                    <li>TPVC wear belt provides extra resistance to abrasion</li>
                  </ul>
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
                      <td className="py-3 px-4 font-medium">Wall</td>
                      <td className="py-3 px-4">-</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Thickness</td>
                      <td className="py-3 px-4">0,5 mm - 750-1100 DTEX</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Color</td>
                      <td className="py-3 px-4">Yellow - Black</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Wire</td>
                      <td className="py-3 px-4">Ø 152 - 185 : 55 mm / Ø 203 - 710 : 75 mm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Diameter Range(Ø)</td>
                      <td className="py-3 px-4">152 - 710 mm</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Operating Temperature Range</td>
                      <td className="py-3 px-4">-30 °C / +70 °C</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Standard Length</td>
                      <td className="py-3 px-4">6 m / 10 m</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Packing</td>
                      <td className="py-3 px-4">Single Cardboard Box</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Certificates</td>
                      <td className="py-3 px-4">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                <p className="text-gray-700">It is produced to be used for the transfer of hot or cold air in the environments that require mobility, especially in the aviation sector. In addition, thanks to its zippered and impact-resistant structure it provides ease of solution in long-length applications such as mining and tunnel ventilation. The zippered structure, by making it disassembled, helps to store the product after use.</p>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Application Areas:</h3>
                  <p className="text-gray-700">Construction Site Heating, Drying of Buildings, Drying Buildings, Drying Grain, Blower Hose, Hot Air, Heating Fans, Hay Blowers, Fan Hose, Air-Conditioning And Ventilaiton Technology, Drying Technology, Hot Air Hoses, Wind Generator Plants, Shipyards Ventilation, Tent Heating, Tent Air-Conditioning.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
} 