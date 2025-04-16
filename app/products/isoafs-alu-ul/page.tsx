import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IsoafsAluULPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="relative aspect-square">
                  <Image
                    src="/images/products/flexible-ducts/ISOAFS- ALU UL.webp"
                    alt="ISOAFS- ALU UL"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-blue-600">ISOAFS- ALU UL</h1>
                <p className="text-xl text-gray-600 mt-6">
                  Our new product has the most trusted mark, globally. For a product to be "UL Listed", UL Laboratories thoroughly test and confirm that the product meets all of their rigorous requirements. Once all the tests are passed, products are added to UL's Online Certification Directory. AFS takes pride as the only European manufacturer of UL listed flexible air ducts.
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
                      <td className="py-3 px-4 font-medium">Inner Duct Construction</td>
                      <td className="py-3 px-4">2 ply polyester + 1 ply aluminium</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Nominal Thickness of Inner Duct</td>
                      <td className="py-3 px-4">45 micron</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Jacket Construction</td>
                      <td className="py-3 px-4">-</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Nominal Thickness of Jacket</td>
                      <td className="py-3 px-4">45 micron</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Insulation-Thickness-Density</td>
                      <td className="py-3 px-4">Glasswool 25 mm - 20 kg/m³</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Diameter Range(Ø)</td>
                      <td className="py-3 px-4">2" - 18"</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Wire Spacing</td>
                      <td className="py-3 px-4">40 mm (Ø ≥ 127 mm)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Operating Temperature Range</td>
                      <td className="py-3 px-4">-17°C / +130°C</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Air Velocity</td>
                      <td className="py-3 px-4">15 m/s (3000 fit/min)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Operating Pressure</td>
                      <td className="py-3 px-4">3000 Pa (maximum)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Standard Lenght</td>
                      <td className="py-3 px-4">7.6m</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Packing</td>
                      <td className="py-3 px-4">Single Cardboard Box</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Reaction to Fire</td>
                      <td className="py-3 px-4">Fire Retardant</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="certificates" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse mb-6">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-4 text-left font-bold text-gray-700 border" colSpan={2}>UL 181 LISTED CLASS 1 AIR CONNECTOR</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 font-medium border">AMERIKA (USA)</td>
                      <td className="py-3 px-4 border flex items-center">
                        <div className="w-8 h-8 mr-3">
                          <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                            <path d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z" fill="white"/>
                            <path d="M25 45C36.0457 45 45 36.0457 45 25C45 13.9543 36.0457 5 25 5C13.9543 5 5 13.9543 5 25C5 36.0457 13.9543 45 25 45Z" fill="white"/>
                            <path d="M19.7917 34.375H16.0417V15.625H19.7917V34.375Z" fill="black"/>
                            <path d="M26.2499 34.375H23.9583V15.625H26.2499V34.375Z" fill="black"/>
                            <path d="M33.9583 34.375H30.2083V15.625H33.9583V34.375Z" fill="black"/>
                            <path d="M15.625 30.625V27.5H34.375V30.625H15.625Z" fill="black"/>
                            <path d="M15.625 22.5V19.375H34.375V22.5H15.625Z" fill="black"/>
                          </svg>
                        </div>
                        <span>UL 181 Listed Air Duct</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium border">AMERIKA BIRLEŞIK DEVLETLERI (USA)</td>
                      <td className="py-3 px-4 border">NFPA 90A & 90B</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                <ul className="space-y-2 pl-5 list-disc">
                  <li>UL Listed & Labeled</li>
                  <li>Formaldehyde free, super soft feel ECOSE technology glass wool</li>
                  <li>Produced from multi-layer aluminium and polyester, reinforced with high tension steel wire</li>
                  <li>Highly resistant to corrosion and rust</li>
                  <li>Tear and puncture resistant reinforced jacket</li>
                  <li>Resist to mold and spore growth</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
} 