import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function MetalClampsPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative aspect-square">
          <Image
            src="/images/products/flexible-ducts/Metal Clamps.webp"
            alt="METAL CLAMPS"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-600 mb-4">METAL CLAMPS</h1>
          <p className="text-gray-600 mb-6">
            Metal clamps are produced specifically for all kinds of flexible air duct connections.
          </p>
          <div className="flex gap-4">
            <Button size="lg">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              Share
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="specifications" className="w-full">
        <TabsList className="grid w-full md:grid-cols-2 grid-cols-1 mb-8">
          <TabsTrigger value="specifications">TECHNICAL SPECIFICATIONS</TabsTrigger>
          <TabsTrigger value="features">GENERAL FEATURES</TabsTrigger>
        </TabsList>

        <TabsContent value="specifications">
          <Table>
            <TableBody>
              <TableRow>
                <TableHead>Clamp Construction</TableHead>
                <TableCell>AISI 430 Stainless Steel</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Locking Device Construction</TableHead>
                <TableCell>Nickel Plated Housing, Zinc Plated Screw</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Packing (Clamp)</TableHead>
                <TableCell>Single Plastic Cassette</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Quantity of Locking Device</TableHead>
                <TableCell>50 Pieces Per Box</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Standart Length (Clamp)</TableHead>
                <TableCell>30 m</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Clamp Width</TableHead>
                <TableCell>9 mm</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="mt-8">
            <p className="mb-4">Metal clamps are produced specifically for all kinds of flexible air duct connections.</p>
            <p className="mb-4">They consist of stainless steel strip and locking devices.</p>
            <p className="mb-4">Strip steel bands are produced 9 mm wide and 0.6 mm thick from AISI 430 quality stainless steel strip. Strip steel band edges are rounded to prevent damage while connecting flexible air ducts.</p>
            <p className="mb-4">Strip steel bands are packed in 30 m lengths in a plastic dispenser.</p>
            <p className="mb-4">The locking devices provide easy and fast clamping. The screw head is specially shaped so that simple tools like a screwdriver or spanner can be used. Housings are nickel plated and screws are zinc plated.</p>
            <p className="mb-4">The strip steel bonding and clip system is easily cut and installed, that makes it the fastest fixing system available. The band is cut, folded through the slot on the clamp, and taking care of the direction of the dimples on the strip, installed around the duct.</p>
          </div>
        </TabsContent>

        <TabsContent value="features">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-4">GENERAL FEATURES</h2>
              <p className="mb-4">
                Metal clamps are produced specifically for all kinds of flexible air duct connections.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Properties & Advantages</h3>
            </div>

            <div>
              <h3 className="font-semibold mb-4">STAINLESS STEEL STRIP</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>AISI 430 quality stainless steel</li>
                <li>Non-flammable</li>
                <li>Inseparable</li>
                <li>Highly corrosion resistant</li>
                <li>Resistant to chemicals</li>
                <li>Maintenance free</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">LOCKING DEVICES</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Non-flammable</li>
                <li>Nickel plated housing</li>
                <li>Zinc plated screw</li>
                <li>Fast and simple installation</li>
                <li>Resistance to chemicals</li>
                <li>Low installation cost</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">STRIP STEEL CONSTRUCTION</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Easy to store</li>
                <li>Easy to transport</li>
                <li>Easy to install</li>
                <li>Low installation cost</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">TECHNICAL PROPERTIES</h3>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <section className="mt-12">
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Need More Information?</h2>
          <p className="text-blue-800 mb-6">Contact our technical team for detailed specifications and customized solutions</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Request Information</Button>
        </div>
      </section>
    </div>
  )
} 