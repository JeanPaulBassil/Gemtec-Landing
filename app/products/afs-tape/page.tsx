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

export default function AfsTapePage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative aspect-square">
          <Image
            src="/images/products/flexible-ducts/Afs Tape.webp"
            alt="AFS TAPE"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-600 mb-4">AFS TAPE</h1>
          <p className="text-gray-600 mb-6">
            AFS TAPE self adhesive aluminium foil tapes are specifically produced for heating, cooling, ventilation, air conditioning and exhaust systems.
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
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold"></TableHead>
                <TableHead className="font-bold">AFSTAPE</TableHead>
                <TableHead className="font-bold">PLAIN 30 Micron</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableHead>Tensile Strength</TableHead>
                <TableCell colSpan={2}>45 N / 25 mm</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Length</TableHead>
                <TableCell colSpan={2}>40 m</TableCell>
              </TableRow>
              <TableRow>
                <TableHead>Standart Dimensions – width</TableHead>
                <TableCell colSpan={2}>48 mm, 72 mm, 96 mm</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div className="mt-8">
            <h3 className="font-semibold mb-4">REMARKS</h3>
            <p className="mb-4">AFS TAPE should be kept at room temperature and stored away from wet and heat sources, humid locations and extreme conditions.</p>
            <p className="mb-4">The surface applied on has to be free of any residues, dust, grease, oil, etc.</p>
          </div>
        </TabsContent>

        <TabsContent value="features">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-4">GENERAL FEATURES</h2>
              <p className="mb-4">
                AFS TAPE self adhesive aluminium foil tapes are specifically produced for heating, cooling, ventilation, air conditioning and exhaust systems.
              </p>
            </div>

            <div>
              <p className="mb-4">AFS TAPEs use acrylic based adhesives.</p>
              <p className="mb-4">AFS TAPEs provide excellent performance in conditions of high humidity and at high and low temperatures.</p>
              <p className="mb-4">Compared to rubber based adhesives, AFS TAPEs are more reliable wherever resistance to cracks, UV exposure and solvents are required.</p>
              <p className="mb-4">They have reflective property and are also leak-proof.</p>
              <p className="mb-4">The bonding strength of AFS TAPEs increases after application through self cross linking properties of its acrylic polymers.</p>
              <p className="mb-4">AFS TAPEs provide excellent vapour sealing on fiberglass and rock-wool duct-board and blanket systems, sheet metal and plastic duct even applied to rough and wet surfaces.</p>
              <p className="mb-4">AFS TAPE is a superior quality insulation material.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">AFSTAPE</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Excellent peel adhesion</li>
                <li>Resistant to water & fire</li>
                <li>Strong initial & permanent bonding</li>
                <li>Outstanding temperature & aging resistance</li>
              </ul>
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