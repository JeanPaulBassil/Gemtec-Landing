import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PlasticBackDroughtShutterPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="relative aspect-square">
                  <Image
                    src="/PLASTIC BLACK DROUGHT SHUTTER.png"
                    alt="Plastic Back Drought Shutter"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-blue-600">PLASTIC BACK DROUGHT SHUTTER</h1>
                <p className="text-xl text-gray-600 mt-6">
                  Plastic Back Drought Shutter is designed for domestic and light commercial applications. It features a multiblade shutter to prevent outside air from passing through the unit in reverse direction when the fan is not operating.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full md:w-fit grid-cols-3 mb-8">
              <TabsTrigger value="technical" className="text-sm md:text-base">GENERAL FEATURES</TabsTrigger>
              <TabsTrigger value="certificates" className="text-sm md:text-base">CERTIFICATES</TabsTrigger>
              <TabsTrigger value="features" className="text-sm md:text-base">TECHNICAL SPECIFICATIONS</TabsTrigger>
            </TabsList>
            
            <TabsContent value="technical" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Subcategory</td>
                      <td className="py-3 px-4">AIR CONTROL EQUIPMENTS</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">CONAIR 061 Ölçü</td>
                      <td className="py-3 px-4">Ø125 – Ø99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="certificates" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse mb-6">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="py-3 px-4 text-left font-bold text-gray-700 border" colSpan={2}>CERTIFICATIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-4 font-medium border">Certification</td>
                      <td className="py-3 px-4 border">CE Certified</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                <ul className="space-y-2 pl-5 list-disc">
                  <li>Ideal for domestic and light commercial applications</li>
                  <li>Multiblade shutter to prevent outside air from passing through the unit in reverse direction when the fan is not operating</li>
                  <li>Easy installation and maintenance</li>
                  <li>Durable construction</li>
                  <li>Energy efficient design</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Need More Information?</h2>
            <p className="text-blue-700 mb-6">Contact our technical team for detailed specifications and customized solutions.</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Request Information</Button>
          </div>
        </div>
      </section>
    </>
  )
} 