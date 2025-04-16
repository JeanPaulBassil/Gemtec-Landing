import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AluafsULPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="relative aspect-square">
                  <Image
                    src="/images/products/flexible-ducts/ULListedFlexibleAirConnector.webp"
                    alt="ALUAFS UL Connector"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-blue-600">ALUAFS UL</h1>
                <p className="text-xl text-gray-600 mt-2">Non-insulated aluminium flexible air connectors</p>
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
                      <td className="py-3 px-4">3 ply aluminum + 2 ply polyester</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Nominal Thickness</td>
                      <td className="py-3 px-4">70 micron</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Diameter Range(Ø)</td>
                      <td className="py-3 px-4">2" - 10"</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Wire Spacing</td>
                      <td className="py-3 px-4">35mm (Ø ≥ 127 MM )</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Operating Temperature Range</td>
                      <td className="py-3 px-4">-18° / +130 °C (0 °F / 265 °F)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Air Velocity</td>
                      <td className="py-3 px-4">30 m/s (max) (5910 ft/min)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Operating Pressure</td>
                      <td className="py-3 px-4">+3000Pa (max)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Standard Length</td>
                      <td className="py-3 px-4">25 ft / 10m</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Packing</td>
                      <td className="py-3 px-4">Single Cardboard Box</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Reaction on to Fire</td>
                      <td className="py-3 px-4">Difficult to ignite</td>
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
                      <th className="py-3 px-4 text-left font-bold text-gray-700 border">UL 181 LISTED CLASS 1 AIR CONNECTOR</th>
                      <th className="py-3 px-4 text-left font-bold text-gray-700 border"></th>
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
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                <p className="text-gray-700">
                  ALUAFS.70 UL non-insulated aluminium flexible air connectors are specifically produced for low and medium pressure 
                  heating, cooling, ventilation, exhaust and air conditioning systems.
                </p>
                <p className="text-gray-700">
                  Airtight ALUAFS.70 UL is produced from multi-layer aluminium and polyester, strengthened with high tension hard steel 
                  spring wire.
                </p>
                <p className="text-gray-700">
                  ALUAFS.70 UL has high elasticity and flexibility. It can be easily fitted to circular, oval or rectangular connectors.
                </p>
                <p className="text-gray-700">
                  The fire resistance of ALUAFS.70 UL has been tested and certified by various international bodies. In case of fire, no toxic or 
                  poisonous gases are released.
                </p>
                <p className="text-gray-700">
                  The dimensions, tolerances and mechanical resistance of ALUAFS.70 UL are tested, classified and certified according to EN 13180.
                </p>
                
                <div className="pt-4">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Properties & Advantages</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">ALUMINIUM LAMINATED BODY</h4>
                      <ul className="space-y-1 pl-5 list-disc">
                        <li>Highly resistant to UV rays</li>
                        <li>Resistant to chemicals</li>
                        <li>Highly resistant to UV rays</li>
                        <li>Resistant to chemicals</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">FLEXIBLE & SEAMLESS CONSTRUCTION</h4>
                      <ul className="space-y-1 pl-5 list-disc">
                        <li>Easy storage</li>
                        <li>Easily transported</li>
                        <li>Low installation cost</li>
                        <li>High resistance to wear and tear</li>
                        <li>Airtight</li>
                        <li>Low energy consumption</li>
                        <li>Low operational and maintenance cost</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">SMOOTH INNER SURFACE</h4>
                      <ul className="space-y-1 pl-5 list-disc">
                        <li>Minimal pressure loss</li>
                        <li>Low operational cost</li>
                        <li>Anti-static / Dust proof interior</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 mb-2">ZINC COATED STEEL WIRE</h4>
                      <ul className="space-y-1 pl-5 list-disc">
                        <li>Highly durable</li>
                        <li>Highly resistant to deformation</li>
                        <li>Easily installed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
} 