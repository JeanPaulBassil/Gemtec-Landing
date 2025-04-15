import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Facebook, Linkedin, Mail, Printer, Twitter } from "lucide-react"

export default function IsoafsAluFEcosoftMarinePage() {
  return (
    <>
      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <div className="relative aspect-square">
                <Image
                  src="/images/products/flexible-ducts/Isoafs-Alu.F Ecosoft Marine.webp"
                  alt="ISOAFS-ALU.F ECOSOFT MARINE"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-blue-950">ISOAFS-ALU.F ECOSOFT MARINE</h1>
              <ul className="mt-6 space-y-2 text-gray-600">
                <li>Suitable for low and medium pressure ventilation and air conditioning systems,</li>
                <li>Thermally insulated,</li>
                <li>Aluminium inner and outer face,</li>
                <li>MARINE certified,</li>
                <li>A+ labelled</li>
                <li>Insulated with formaldehyde free glass wool</li>
                <li>M0+M1 certified according to France national reaction to fire standard</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" variant="outline" className="gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Facebook className="h-4 w-4" />
                Share
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Twitter className="h-4 w-4" />
                Tweet
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Linkedin className="h-4 w-4" />
                Share
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Printer className="h-4 w-4" />
                Print
              </Button>
            </div>
          </div>
        </div>

        <Tabs defaultValue="technical" className="mt-12">
          <TabsList className="w-full justify-start h-auto flex-wrap border-b rounded-none">
            <TabsTrigger value="technical" className="text-base">
              TECHNICAL SPECIFICATIONS
            </TabsTrigger>
            <TabsTrigger value="certificates" className="text-base">
              CERTIFICATES
            </TabsTrigger>
            <TabsTrigger value="general" className="text-base">
              GENERAL FEATURES
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="mt-8">
            <Card>
              <CardContent className="p-6">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Inner Duct Construction</td>
                      <td>3 ply Aluminium + 1 ply Polyester</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Nominal Thickness of Inner Duct</td>
                      <td>74 micron</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Jacket Construction</td>
                      <td>1 ply Aluminium + 2 ply Polyester</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Nominal Thickness of Jacket</td>
                      <td>45 micron</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Insulation-Thickness-Density</td>
                      <td>Glasswool 25 mm - 16 kg/m³</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Diameter Range(Ø)</td>
                      <td>82 mm - 800 mm</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Wire Spacing</td>
                      <td>-</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Operating Temperature Range</td>
                      <td>-30°C / +250°C</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Air Velocity</td>
                      <td>30 m/s (maximum)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Operating Pressure</td>
                      <td>3000 Pa (maximum)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Standard Length</td>
                      <td>10 m</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">Packing</td>
                      <td>Single cardboard box</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Reaction to Fire</td>
                      <td>Difficult to Ignite</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certificates" className="mt-8">
            <Card>
              <CardContent className="p-6">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 font-medium">FRANSA (FRANCE)</td>
                      <td>A+ Etiketli</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 font-medium">AVRUPA (EUROPE) / AMERIKA (USA)</td>
                      <td className="flex items-center gap-2">
                        <Badge variant="outline" className="rounded-full">
                          <Image src="/images/certificates/marine.png" alt="Marine Certificate" width={20} height={20} className="mr-1" />
                          Marine
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">FRANSA (FRANCE)</td>
                      <td>M0 + M1</td>
                    </tr>
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="general" className="mt-8">
            <Card>
              <CardContent className="p-6">
                <ul className="space-y-3 text-gray-600">
                  <li>It is a thermally insulated aluminum flexible air duct specifically produced for low and medium pressure ventilation and air conditioning systems.</li>
                  <li>It is produced from multi-layer aluminium and polyester, strengthened with high tension hard steel spring wire, surrounded with glass wool insulation and an aluminium vapor barrier.</li>
                  <li>Its dimensions, tolerances and mechanical resistance are tested, classified & certified according to EN 13180 standard.</li>
                  <li>ISOAFS-ALU.F ECOSOFT MARINE flexible air ducts are airtight.</li>
                  <li>It has high elasticity and flexibility. It can be easily fitted to circular, oval or rectangular connectors.</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
} 