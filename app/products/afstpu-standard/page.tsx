import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AFSTPUStandardPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="relative aspect-square">
                  <Image
                    src="/images/products/flexible-ducts/AFSTPU(STANDARD).webp"
                    alt="AFSTPU(STANDARD)"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-blue-600">AFSTPU(STANDARD)</h1>
                <div className="mt-6 space-y-3">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>High abrasion resistance</li>
                    <li>High resistance to puncture</li>
                    <li>High pressure resistance in vacuum and blowing</li>
                    <li>Tightness</li>
                    <li>Three standard thickness options</li>
                    <li>Flexibility</li>
                    <li>For hydrolytic resistance wall thickness should be ≥ 1 mm.</li>
                    <li>Not suitable for long term, continuous liquid contact.</li>
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
                      <td className="py-3 px-4 font-medium">Wall</td>
                      <td className="py-3 px-4">Ester-based PU</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Thickness</td>
                      <td className="py-3 px-4">0,5 - 0,7 - 1,0 mm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Color</td>
                      <td className="py-3 px-4">Transparent</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Wire</td>
                      <td className="py-3 px-4">Coated Spring Steel Wire</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Diameter Range(Ø)</td>
                      <td className="py-3 px-4">Ø30 mm - Ø500 mm</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Operating Temperature Range</td>
                      <td className="py-3 px-4">-40 °C / +90 °C short term: 120 °C</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Standard Length</td>
                      <td className="py-3 px-4">6 m / 10 m</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Packing</td>
                      <td className="py-3 px-4">Transparent plastic bag</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Certificates</td>
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
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">DIN 4102-1B2 (RAW MATERIAL)</td>
                      <td className="py-3 px-4"></td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">DIN 4102-1B1</td>
                      <td className="py-3 px-4"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                <p className="text-gray-700">AFSTPU(STANDARD) is produced by %100 thermoplastic polyester polyurethane and reinforced by high tension copper coated steel wire. There are three standard types of thickness for various applications.</p>
                <p className="text-gray-700">AFSTPU(STANDARD) is suitable for applications that require high pressure and vacuum resistance. It has leak proof structure and its flexibility is convenient to use in wood industry, metal industry, metal processing, welding extraction, surface cleaning, glass, cement, ceramic, paper and automotive industries.</p>
                <p className="text-gray-700">Due to its high resistance to chemicals, AFSTPU(STANDARD) is long lasting solution for industrial applications.</p>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">PROPERTIES & ADVANTAGES</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li className="text-gray-700">Chemical resistance</li>
                    <li className="text-gray-700">High flow rate</li>
                    <li className="text-gray-700">Superior abrasion resistance</li>
                    <li className="text-gray-700">Long shelf life</li>
                    <li className="text-gray-700">Flex & Shock resistance</li>
                    <li className="text-gray-700">Lightweight by Design</li>
                    <li className="text-gray-700">Clean core tubes (non-contaminating)</li>
                  </ul>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">PACKING DETAILS</h3>
                  <p className="font-semibold mb-2">AFSTPU(STANDARD)05 & AFSTPU(STANDARD)07</p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li className="text-gray-700">30mm ≤ Ø ≤ 76mm, roll</li>
                    <li className="text-gray-700">80mm ≤ Ø ≤ 100mm, folded</li>
                    <li className="text-gray-700">127mm ≤ Ø ≤ 500mm, straight</li>
                  </ul>
                  
                  <p className="font-semibold mt-4 mb-2">AFSTPU(STANDARD)10</p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li className="text-gray-700">30mm ≤ Ø ≤ 76mm, roll</li>
                    <li className="text-gray-700">80mm ≤ Ø ≤ 100mm, folded</li>
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