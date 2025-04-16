import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AFSTPUElasticPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="relative aspect-square">
                  <Badge 
                    className="absolute top-4 left-4 z-10 bg-orange-500 hover:bg-orange-600"
                  >
                    NEW PRODUCT
                  </Badge>
                  <Image
                    src="/images/products/flexible-ducts/AFSTPU ELASTIC.webp"
                    alt="AFSTPU ELASTIC"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-blue-600">AFSTPU ELASTIC</h1>
                <div className="mt-4 space-y-3 text-gray-700">
                  <p>For hydrolytic resistance wall thickness should be ≥ 1 mm.</p>
                  <p>Not suitable for long term, continuous liquid contact.</p>
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
                      <td className="py-3 px-4">Thermoplastic Ester Based PU (Transparent)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Thickness</td>
                      <td className="py-3 px-4">0.5 - 1 mm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Color</td>
                      <td className="py-3 px-4">Transparent</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Wire</td>
                      <td className="py-3 px-4">-</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Diameter Range(Ø)</td>
                      <td className="py-3 px-4">Ø80 mm - Ø203 mm</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Operating Temperature Range</td>
                      <td className="py-3 px-4">-40 °C / +90 °C short term: 120 °C</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Standard Length</td>
                      <td className="py-3 px-4">-</td>
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
                <p className="text-gray-700">It is used as a transport hose in places that may be exposed to mechanical effects such as impact.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
} 