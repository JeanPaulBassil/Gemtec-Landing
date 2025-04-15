import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Share2 } from "lucide-react"

export default function AirDeflectorPage() {
  return (
    <>
      <section className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-square border rounded-lg overflow-hidden bg-white">
            <Image
              src="/images/products/flexible-ducts/AIR DEFLECTOR.webp"
              alt="Air Deflector"
              fill
              className="object-contain p-6"
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <Badge variant="default" className="mb-2 bg-amber-500 hover:bg-amber-600">NEW PRODUCT</Badge>
              <h1 className="text-4xl font-bold tracking-tight text-blue-950">AIR DEFLECTOR</h1>
              <p className="mt-2 text-xl text-gray-600">Keep your kitchen warm and your mind at ease with the Air Deflector.</p>
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
                <div className="grid md:grid-cols-1 gap-8">
                  <div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Badge className="mt-1 rounded-full bg-blue-100 text-blue-700" variant="outline">•</Badge>
                        <div>
                          <p>With its ideal design, it supplies optimum fresh air indoors.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="mt-1 rounded-full bg-blue-100 text-blue-700" variant="outline">•</Badge>
                        <div>
                          <p>Provides fresh air.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="mt-1 rounded-full bg-blue-100 text-blue-700" variant="outline">•</Badge>
                        <div>
                          <p>With it's unique transparent design, it is suitable for all types of windows.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="mt-1 rounded-full bg-blue-100 text-blue-700" variant="outline">•</Badge>
                        <div>
                          <p>It is odorless and made of crystal polystrene.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="mt-1 rounded-full bg-blue-100 text-blue-700" variant="outline">•</Badge>
                        <div>
                          <p>It is durable against external factors such as acids, alkali and oils.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Badge className="mt-1 rounded-full bg-blue-100 text-blue-700" variant="outline">•</Badge>
                        <div>
                          <p>It can be cleaned with all types of cleaning agents.</p>
                        </div>
                      </li>
                    </ul>
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
              Contact our technical team for detailed specifications and installation guidelines for Air Deflector.
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