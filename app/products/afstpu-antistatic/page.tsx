import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AFSTPUAntistaticPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="relative aspect-square">
                  <Image
                    src="/images/products/flexible-ducts/AFSTPU(ANTISTATIC).webp"
                    alt="AFSTPU(ANTISTATIC)"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-green-500 hover:bg-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Share
                </Button>
                <Button size="lg" variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                  </svg>
                  Email
                </Button>
                <Button size="lg" variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  Share
                </Button>
                <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                  Tweet
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                  Share
                </Button>
                <Button size="lg" variant="outline" className="border-gray-400 text-gray-600 hover:bg-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Print
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-blue-600">AFSTPU(ANTISTATIC)</h1>
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
                      <td className="py-3 px-4">-40 °C / +90 °C</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Standard Length</td>
                      <td className="py-3 px-4">6 m / 10 m</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Packing</td>
                      <td className="py-3 px-4">Transparent plastic bag</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Certificates</td>
                      <td className="py-3 px-4"></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Electrical and Surface Resistance</td>
                      <td className="py-3 px-4">&lt; 10⁹ (DIN EN ISO 8031)</td>
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
                      <td className="py-3 px-4 font-medium">ELECTRICAL AND SURFACE RESISTANCE</td>
                      <td className="py-3 px-4">&lt; 10⁹ (DIN EN ISO 8031)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                <p className="text-gray-700">AFSTPU(ANTISTATIC) is produced by %100 thermoplastic polyester polyurethane and reinforced by high tension copper coated steel wire. There are three standard types of thickness for various applications.</p>
                <p className="text-gray-700">AFSTPU(ANTISTATIC) is suitable for applications that require high pressure and vacuum resistance. It has leak proof structure and its flexibility is convenient to use in wood industry, metal industry, metal processing, welding extraction, surface cleaning, glass, cement, ceramic, paper and automotive industries.</p>
                <p className="text-gray-700">Due to its high resistance to chemicals, AFSTPU(ANTISTATIC) is long lasting solution for industrial applications.</p>
                
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
                  <p className="font-semibold mb-2">AFSTPU(ANTISTATIC)05 & AFSTPU(ANTISTATIC)07</p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li className="text-gray-700">30mm ≤ Ø ≤ 76mm, roll</li>
                    <li className="text-gray-700">80mm ≤ Ø ≤ 100mm, folded</li>
                    <li className="text-gray-700">127mm ≤ Ø ≤ 500mm, straight</li>
                  </ul>
                  
                  <p className="font-semibold mt-4 mb-2">AFSTPU(ANTISTATIC)10</p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li className="text-gray-700">30mm ≤ Ø ≤ 78mm, roll</li>
                    <li className="text-gray-700">80mm ≤ Ø ≤ 100mm, folded</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Need More Information?</h2>
            <p className="text-blue-700 mb-6">Contact our technical team for detailed specifications and customized solutions.</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Request Information</Button>
          </div>
        </div>
      </section>
    </>
  )
} 