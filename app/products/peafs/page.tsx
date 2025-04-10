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

export default function PeafsPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative aspect-square">
          <Image
            src="/images/products/flexible-ducts/Peafs.webp"
            alt="PEAFS"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-600 mb-4">PEAFS</h1>
          <p className="text-gray-600 mb-6">
            PEAFS non-insulated PE flexible air ducts are specifically produced for low and medium pressure heating, cooling, ventilation, air conditioning, exhaust and dust extraction systems.
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
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="specifications">TECHNICIAL SPECIFICATIONS</TabsTrigger>
          <TabsTrigger value="features">GENERAL FEATURES</TabsTrigger>
        </TabsList>

        <TabsContent value="specifications">
          <Table>
            <TableBody>
              <TableRow>
                <TableHead>Duct Construction</TableHead>
                <TableCell>1 ply PE</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Nominal Thickness</TableHead>
                <TableCell>100 micron</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Diameter Range(Ø)</TableHead>
                <TableCell>82-800 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Wire Spacing</TableHead>
                <TableCell>55mm (Ø ≥ 127 MM )</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Operating Temperature Range</TableHead>
                <TableCell>-30° / +70 °C</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Air Velocity</TableHead>
                <TableCell>30 m/s (max)</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Operating Pressure</TableHead>
                <TableCell>+3000Pa (max)</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Standard Length</TableHead>
                <TableCell>10m</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Packing</TableHead>
                <TableCell>Single Cardboard Box</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Reaction on to Fire</TableHead>
                <TableCell>-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="features">
          <div className="space-y-8">
            <div className="space-y-4">
              <p>
                PEAFS is highly resilient and can be used in applications with excessive vibration and/or perpetual motion systems.
              </p>
              <p>
                PE flexible air ducts are airtight.
              </p>
              <p>
                PEAFS is manufactured from hardwearing PE strip reinforced with high tension steel spring wire.
              </p>
              <p>
                PEAFS is highly elastic and flexible. It can be easily fitted to circular, oval or rectangular connectors.
              </p>
              <p>
                The dimensions, tolerances and mechanical resistance of PEAFS are tested, classified & certified according to EN 13180 standard.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Properties & Advantages</h3>
            </div>

            <div>
              <h3 className="font-semibold mb-4">PE CONSTRUCTION</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Highly vibration resistant</li>
                <li>Suitable for dust/particle transport</li>
                <li>Impermeable to UV rays</li>
                <li>Resistant to chemicals</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">FLEXIBLE & SEAMLESS CONSTRUCTION</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Easy storage</li>
                <li>Easily transported</li>
                <li>Low installation cost</li>
                <li>High resistance to wear and tear</li>
                <li>Airtight</li>
                <li>Low energy consumption</li>
                <li>Low operation and maintenance costs</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">SMOOTH INNER SURFACE</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Minimal pressure loss</li>
                <li>Low operational cost</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">HIGH TENSION STEEL WIRE</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Highly durable</li>
                <li>Highly resistant to deformation</li>
                <li>Easily installed</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 