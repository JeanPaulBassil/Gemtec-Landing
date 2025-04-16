import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CSmartCowlOutletPage() {
  return (
    <>
      <section className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square border rounded-lg overflow-hidden bg-white">
            <Image
              src="/images/products/flexible-ducts/C SMART COWL OUTLET.webp"
              alt="C Smart Cowl Outlet"
              fill
              className="object-contain p-6"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-blue-950">C SMART COWL OUTLET</h1>
              <p className="mt-2 text-xl text-gray-600">C Smart Cowl Outlet</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="container py-8">
        <Tabs defaultValue="features" className="w-full">
          <TabsList className="w-full max-w-md">
            <TabsTrigger value="features" className="w-full">GENERAL FEATURES</TabsTrigger>
          </TabsList>
          
          <TabsContent value="features" className="py-6">
            <Card>
              <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Badge className="mt-1 rounded-full bg-blue-100 text-blue-700" variant="outline">•</Badge>
                        <div>
                          <p>Exchangeable collars</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="mt-1 rounded-full bg-blue-100 text-blue-700" variant="outline">•</Badge>
                        <div>
                          <p>Aesthetic New design</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="mt-1 rounded-full bg-blue-100 text-blue-700" variant="outline">•</Badge>
                        <div>
                          <p>Excellent design for both supply and exhaust ventilation</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="mt-1 rounded-full bg-blue-100 text-blue-700" variant="outline">•</Badge>
                        <div>
                          <p>Easy and practical montage to both walls and ducts</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="mt-1 rounded-full bg-blue-100 text-blue-700" variant="outline">•</Badge>
                        <div>
                          <p>Manufactured from ABS plastic</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="mt-1 rounded-full bg-blue-100 text-blue-700" variant="outline">•</Badge>
                        <div>
                          <p>Easy maintenance</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="mt-1 rounded-full bg-blue-100 text-blue-700" variant="outline">•</Badge>
                        <div>
                          <p>For outdoors suitable for tumble drier extraction</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="mt-1 rounded-full bg-blue-100 text-blue-700" variant="outline">•</Badge>
                        <div>
                          <p>Mosquito net standart</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-blue-600 text-white">
                            <th className="py-2 px-4 text-left font-medium">MODEL</th>
                            <th className="py-2 px-4 text-left font-medium">SIZE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b bg-blue-50">
                            <td className="py-3 px-4 font-medium">CONAIR 1048 Ölçü</td>
                            <td className="py-3 px-4">162 x 162 mm (No collar)</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-4 font-medium">CONAIR 1049 Ölçü</td>
                            <td className="py-3 px-4">162 x 162 x Ø99 mm</td>
                          </tr>
                          <tr className="border-b bg-blue-50">
                            <td className="py-3 px-4 font-medium">CONAIR 1050 Ölçü</td>
                            <td className="py-3 px-4">162 x 162 x Ø124 mm</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium">CONAIR 1051 Ölçü</td>
                            <td className="py-3 px-4">162 x 162 x Ø149 mm</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </>
  )
} 