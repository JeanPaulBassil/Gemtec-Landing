import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Share2 } from "lucide-react"

export default function DoorTransferGrillsPage() {
  return (
    <>
      <section className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square border rounded-lg overflow-hidden bg-white">
            <Image
              src="/images/products/flexible-ducts/Door Transfer Grills.webp"
              alt="Door Transfer Grills"
              fill
              className="object-contain p-6"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-blue-950">DOOR TRANSFER GRILLS</h1>
              <p className="mt-2 text-xl text-gray-600">Door Transfer Grills.</p>
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
                          <p>Allows air circulations</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="mt-1 rounded-full bg-blue-100 text-blue-700" variant="outline">•</Badge>
                        <div>
                          <p>Double sided</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="mt-1 rounded-full bg-blue-100 text-blue-700" variant="outline">•</Badge>
                        <div>
                          <p>Overlapping V-shaped blades</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="mt-1 rounded-full bg-blue-100 text-blue-700" variant="outline">•</Badge>
                        <div>
                          <p>For mounting on doors in WC areas, showers, swimming pools etc.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="mt-1 rounded-full bg-blue-100 text-blue-700" variant="outline">•</Badge>
                        <div>
                          <p>Various color options on demand</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="mt-1 rounded-full bg-blue-100 text-blue-700" variant="outline">•</Badge>
                        <div>
                          <p>Both parts of the grill are joined together by screws</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="mt-1 rounded-full bg-blue-100 text-blue-700" variant="outline">•</Badge>
                        <div>
                          <p>Easy and practical montage</p>
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
                            <th className="py-2 px-4 text-left font-medium">SIZE</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b bg-blue-50">
                            <td className="py-3 px-4 font-medium">CONAIR 019 Ölçü</td>
                            <td className="py-3 px-4">300 x 80 mm</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium">CONAIR 020 Ölçü</td>
                            <td className="py-3 px-4">404 x 90 mm</td>
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
      
      <section className="container py-12">
        <div className="bg-blue-50 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-blue-950 mb-4">Need More Information?</h2>
            <p className="text-gray-600 mb-6">
              Contact our technical team for detailed specifications and installation guidelines for Door Transfer Grills.
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