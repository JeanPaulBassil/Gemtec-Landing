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

export default function AfsPinPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative aspect-square">
          <Image
            src="/images/products/flexible-ducts/Afs Pin.webp"
            alt="AFS PIN"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-600 mb-4">AFS PIN</h1>
          <p className="text-gray-600 mb-6">
            AFS self-adhesive pins are designed for fitting insulation materials to smooth surfaces without using any additional tools.
          </p>
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
                <TableHead>Construction</TableHead>
                <TableCell>Aluminium</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Dimensions</TableHead>
                <TableCell>Ø 3 mm ± 0.3 mm Ø 2.2 mm ± 0.2 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Adhesive</TableHead>
                <TableCell>Acrylic Adhesive</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Length</TableHead>
                <TableCell>30 mm to 200 mm (1.18" to 7.87")</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="mt-8">
            <p className="mb-4">It is great for quick and easy application.</p>
            <p className="mb-4">It can be used for fitting rigid or flexible insulation materials such as glass wool, rock wool, polistren, polyethylene foam, insulation cork boards, etc.</p>
            <p className="mb-4">Operational temperature range of AFS PIN is – 10<sup>O</sup>C / +80<sup>O</sup>C. Application temperature has to be above + 10<sup>O</sup>C. The surface applied on has to be free of any residues, dust, grease, oil, etc.</p>
            <p className="mb-4">AFS self-adhesive pins are packed in cardboard boxes after being PE bagged. This unique packing secures conditions that hold its adhesive properties. They can be transported, stocked and used safely, easily and practically.</p>
          </div>
        </TabsContent>

        <TabsContent value="features">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-4">GENERAL FEATURES</h2>
              <p className="mb-4">
                AFS self-adhesive pins are designed for fitting insulation materials to smooth surfaces without using any additional tools.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Properties & Advantages</h3>
            </div>

            <div>
              <h3 className="font-semibold mb-4">ALUMINIUM PIN</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Easy to cut, bend and mount</li>
                <li>Corrosion free</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">ALUMINIUM PIN WITH SAFE TIP</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provides safe working environment</li>
                <li>Needs no pin cap</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">REINFORCED GALVANIZED STEEL BASE</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Ensures a flat base</li>
                <li>Ensures maximum adherence</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">GALVANIZED WASHERS</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Easy to fit, impossible to remove</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
} 