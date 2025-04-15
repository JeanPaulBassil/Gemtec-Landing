import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Share2 } from "lucide-react"

export default function LSmartLinearGrillPage() {
  return (
    <>
      <section className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square border rounded-lg overflow-hidden bg-white">
            <Image
              src="/images/products/flexible-ducts/L SMART LINEAR GRILL.webp"
              alt="L Smart Linear Grill"
              fill
              className="object-contain p-6"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <p className="text-xl font-semibold text-blue-600">Versatile Smart Series</p>
              <h1 className="text-4xl font-bold tracking-tight text-blue-950">L SMART LINEAR GRILLS</h1>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-8">
              <Button size="sm" variant="outline" className="rounded-full">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
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
                    </ul>
                  </div>
                  
                  <div>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-blue-600 text-white">
                            <th className="py-2 px-4 text-left font-medium">MODEL</th>
                            <th className="py-2 px-4 text-left font-medium">NOMINAL SIZE</th>
                            <th className="py-2 px-4 text-left font-medium">Ø D</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b bg-blue-50">
                            <td className="py-3 px-4 font-medium">CONAIR 1040</td>
                            <td className="py-3 px-4">No Collar</td>
                            <td className="py-3 px-4">No Collar</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-3 px-4 font-medium">CONAIR 1041</td>
                            <td className="py-3 px-4">Ø 100</td>
                            <td className="py-3 px-4">Ø 99</td>
                          </tr>
                          <tr className="border-b bg-blue-50">
                            <td className="py-3 px-4 font-medium">CONAIR 1042</td>
                            <td className="py-3 px-4">Ø 125</td>
                            <td className="py-3 px-4">Ø 124</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium">CONAIR 1043</td>
                            <td className="py-3 px-4">Ø 150</td>
                            <td className="py-3 px-4">Ø 149</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4 text-blue-700">DIMENSIONS (mm)</h3>
                      <div className="text-center">
                        <p className="text-sm text-blue-600 mb-2">Overall dimensions: 162 x 162 mm</p>
                        <p className="text-sm text-blue-600">Depth: 22-26 mm</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
      
      <section className="container py-12">
        <div className="bg-blue-50 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">Need More Information?</h2>
            <p className="text-gray-600 mb-6">
              Contact our technical team for detailed specifications and installation guidelines for the L Smart Linear Grill.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Request Information
            </Button>
          </div>
        </div>
      </section>
    </>
  )
} 