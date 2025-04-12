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

export default function NylonClampsPlierPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative aspect-square">
          <Image
            src="/images/products/flexible-ducts/Nylon Clamps & plier.webp"
            alt="NYLON CLAMPS & PLIER"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-600 mb-4">NYLON CLAMPS & PLIER</h1>
          <p className="text-gray-600 mb-6">
            Nylon clamps and plier.
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

      <Tabs defaultValue="features" className="w-full">
        <TabsList className="grid w-full md:grid-cols-2 grid-cols-1 mb-8">
          <TabsTrigger value="features">GENERAL FEATURES</TabsTrigger>
          <TabsTrigger value="storage">STORAGE RECOMMENDATIONS</TabsTrigger>
        </TabsList>

        <TabsContent value="features">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-4">GENERAL FEATURES</h2>
              <p className="mb-4">
                Nylon clamps are specifically produced for all kinds of flexible air duct connections. Although not as strong as metal clamps, they are more economical.
              </p>
              <p className="mb-4">
                Nylon clamp edges are rounded to provide safer working environment.
              </p>
              <p className="mb-4">
                Self-locking system makes it easy and quick to apply.
              </p>
              <p className="mb-4">
                Nylon clamp pliers are specifically produced for an easy application and tightening of Nylon Clamps.
              </p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="storage">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold mb-4">Recommendations to usage and storage</h2>
              <ul className="space-y-2">
                <li>• After opening the package, products should be used as quickly as possible.</li>
                <li>• The product should only be stored in its original sealed packages.</li>
                <li>• Do not expose to the product direct sunlight.</li>
                <li>• Do not stock the product in the area of direct sunlight.</li>
                <li>• Keep away the heat source (honeycomb radiator, etc.) and do not stock near them.</li>
                <li>• The optimal stock condition is 23°C and the relative humidity is the 50%.</li>
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