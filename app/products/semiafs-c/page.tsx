import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SEMIAFSCPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="relative aspect-square">
                  <Image
                    src="/images/products/flexible-ducts/Semiaf.C.webp"
                    alt="SEMIAFS.C"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-blue-600">SEMIAFS.C</h1>
                <div className="mt-6 space-y-3">
                  <p className="text-gray-700">
                    SEMIAFS.C aluminium semi flexible air ducts are flexible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full md:w-fit grid-cols-1 mb-8">
              <TabsTrigger value="general" className="text-sm md:text-base">GENERAL FEATURES</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                <p className="text-gray-700">SEMIAFS.C aluminium semi flexible air ducts are flexible, extendable and highly reliable for low and medium pressure air conditioning, ventilation and boiler systems.</p>
                <p className="text-gray-700">SEMIAFS.C is elastic, flexible and stretchable.</p>
                <p className="text-gray-700">Oval and circular connectors are easily installed.</p>
                <p className="text-gray-700">SEMIAFS.C is secured using an "INTERLOCK" crimp system. "INTERLOCK" crimp systems minimize separation of the duct when it is stretched or bent.</p>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Properties & Advantages</h3>
                  <p className="font-medium mb-2">PURE ALUMINIUM BODY</p>
                  <ul className="space-y-2 list-disc pl-5 mb-6">
                    <li className="text-gray-700">Non-combustible</li>
                    <li className="text-gray-700">Impermeable to UV rays</li>
                    <li className="text-gray-700">Highly resistant to UV rays</li>
                    <li className="text-gray-700">Resistant to chemicals</li>
                    <li className="text-gray-700">Easy care</li>
                  </ul>
                  
                  <p className="font-medium mb-2">SEMI-FLEXIBLE & INTERLOCK CONSTRUCTION</p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li className="text-gray-700">Easy transport & storage</li>
                    <li className="text-gray-700">Quick and easy installation</li>
                    <li className="text-gray-700">Inseparable</li>
                    <li className="text-gray-700">Leak proof</li>
                    <li className="text-gray-700">Airtight</li>
                    <li className="text-gray-700">Energy efficiency</li>
                    <li className="text-gray-700">Low operational and maintenance cost</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
} 