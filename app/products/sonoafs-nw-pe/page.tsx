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

export default function SonoafsNwPePage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative aspect-square">
          <Image
            src="/images/products/flexible-ducts/Sonoafs-NW.PE.webp"
            alt="SONOAFS-NW.PE"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-600 mb-4">SONOAFS-NW.PE</h1>
          <p className="text-gray-600 mb-6">
            Thermally & Acoustically Insulated Non-woven Flexible Air Ducts
          </p>
        </div>
      </div>

      <Tabs defaultValue="specifications" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="specifications">TECHNICAL SPECIFICATIONS</TabsTrigger>
          <TabsTrigger value="features">GENERAL FEATURES</TabsTrigger>
        </TabsList>

        <TabsContent value="specifications">
          <Table>
            <TableBody>
              <TableRow>
                <TableHead>Inner Duct Construction</TableHead>
                <TableCell>Non-woven fabric</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Nominal Thickness of Inner Duct</TableHead>
                <TableCell>600 Micron</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Barrier Construction</TableHead>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Barrier Thickness</TableHead>
                <TableCell>-</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Outer Jacket Construction</TableHead>
                <TableCell>1 ply PE</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Nominal Thickness of Jacket</TableHead>
                <TableCell>100 Micron</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Insulation-Thickness-Density</TableHead>
                <TableCell>Glass Wool - 25 mm - 16 kg/m³</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Diameter Range(Ø)</TableHead>
                <TableCell>65 mm - 630 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Wire Spacing</TableHead>
                <TableCell>Ø82-Ø102 - 30mm ≥Ø127- 40 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Operating Temperature Range</TableHead>
                <TableCell>- 20 °C / + 90 °C</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Air Velocity</TableHead>
                <TableCell>20 m/s</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Operating Pressure</TableHead>
                <TableCell>1500 Pa (Max)</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Standard Lenght</TableHead>
                <TableCell>6 m</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Packing</TableHead>
                <TableCell>Single Cardboard Box</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Reaction to Fire</TableHead>
                <TableCell>-</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TabsContent>

        <TabsContent value="features">
          <div className="space-y-4">
            <p>
              SONOAFS-NW thermally and acoustically insulated flexible air ducts are specifically produced for low and medium pressure heating, cooling, ventilation, exhaust and air conditioning systems.
            </p>
            <p>
              SONOAFS-NW has high elasticity and flexibility. It can be easily fitted to circular, oval or rectangular connectors.
            </p>
            <p>
              The fire resistance of SONOAFS-NW has been tested and certified by various international bodies.
            </p>

            <div className="mt-6">
              <h3 className="font-semibold mb-4">Properties & Advantages</h3>
            </div>

            <div>
              <h3 className="font-semibold mb-4">NONWOVEN CONSTRUCTION</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Difficult to ignite</li>
                <li>High resistance to UV rays</li>
                <li>Dampens mechanical vibration</li>
                <li>Excellent sound attenuation</li>
                <li>Fibre-migration proof</li>
                <li>Resistant to chemicals</li>
                <li>Suitable for IT Centers, computer rooms, hospitals & schools</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">FLEXIBLE & SEAMLESS CONSTRUCTION</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Easy to store</li>
                <li>Easy to transport</li>
                <li>Low installation cost</li>
                <li>Low operation and maintenance costs</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">SMOOTH INNER SURFACE</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Minimum pressure loss</li>
                <li>Dust proof interior</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">HIGH TENSION STEEL WIRE</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>High durability</li>
                <li>High resistance to deformation</li>
                <li>Easy to install</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">GLASS WOOL INSULATION</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Heat resistant (Certified, EN 13501-1, Class A1)</li>
                <li>No fiber erosion</li>
                <li>Minimal energy loss</li>
                <li>Perfect insulation property</li>
                <li>No-condensation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">PE OUTER JACKET</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>High vibration resistance</li>
                <li>High resistance to wear and tear</li>
                <li>Impermeable to UV rays</li>
                <li>Resistant to chemicals</li>
                <li>Easy care</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 