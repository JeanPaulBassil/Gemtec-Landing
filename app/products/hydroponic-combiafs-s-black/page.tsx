import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HydroponicCombiafsBlackPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="relative aspect-square">
                  <Image
                    src="/images/products/flexible-ducts/Hydroponic Combiafs.s black.webp"
                    alt="HYDROPONIC COMBIAFS.S BLACK"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-blue-600">HYDROPONIC COMBIAFS.S BLACK</h1>
                <p className="text-xl text-gray-600 mt-6">
                  Premium black flexible air duct for controlled environment agriculture. Designed specifically for hydroponic growing environments with optimal airflow and climate control for enhanced plant growth and productivity.
                </p>
                
                <div className="mt-8">
                  <h2 className="text-2xl font-semibold text-blue-800 mb-4">Application Areas</h2>
                  <ul className="space-y-2">
                    <li className="text-gray-700">Ventilation heating and cooling</li>
                    <li className="text-gray-700">Hydroponic ventilation</li>
                    <li className="text-gray-700">Indoor agriculture</li>
                    <li className="text-gray-700">Grow rooms</li>
                    <li className="text-gray-700">Low and medium pressure applications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container">
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full md:w-fit grid-cols-2 mb-8">
              <TabsTrigger value="technical" className="text-sm md:text-base">TECHNICAL SPECIFICATIONS</TabsTrigger>
              <TabsTrigger value="features" className="text-sm md:text-base">GENERAL FEATURES</TabsTrigger>
            </TabsList>
            
            <TabsContent value="technical" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Duct Construction</td>
                      <td className="py-3 px-4">1 ply Aluminium + 2 ply Polyester ( Black) + 1 ply PVC ( Black)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Nominal Thickness</td>
                      <td className="py-3 px-4">125 micron</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Diameter Range(Ø)</td>
                      <td className="py-3 px-4">102 mm - 508 mm</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Wire Spacing</td>
                      <td className="py-3 px-4">40 mm (≥ Ø 127 mm)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Operating Temperature Range</td>
                      <td className="py-3 px-4">-30°C / + 120°C</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Air Velocity</td>
                      <td className="py-3 px-4">30 m/s (max.)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Operating Pressure</td>
                      <td className="py-3 px-4">3000 Pa (maximum)</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Standard Length</td>
                      <td className="py-3 px-4">5 m / 10 m</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Packing</td>
                      <td className="py-3 px-4">Single cardboard box</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Reaction to Fire</td>
                      <td className="py-3 px-4">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-blue-800">HYDROPONIC (HYDRO CRUNCH) SYSTEMS</h2>
                <p className="text-gray-700">
                  Hydroponics (sometimes referred to as hydro-crunch) are defined as soilless agriculture systems. These systems are new generation greenhouses that can be installed easily and individually even at homes. NASA also uses these systems for the space experiments. By means of these systems, it is possible to grow plants by consuming less water and achieve high efficiency.
                </p>
                <p className="text-gray-700">
                  The ventilation of the system is crucial for the plants to be able to photosynthesize. Ventilation is also important to prevent the overheating of the reflectors which are substituted the sunlight. Therefore, the ventilation of the hydroponics could be examined into two main topics;
                </p>
                
                <ol className="list-decimal pl-5 space-y-2">
                  <li className="text-gray-700">Ventilation of the growing area</li>
                  <li className="text-gray-700">Ventilation or cooling the reflector</li>
                </ol>
                
                <h3 className="text-lg font-semibold text-blue-800 mt-6">1.VENTILATION OF THE GROWING AREA</h3>
                <p className="text-gray-700">
                  The proper ventilation should be maintained in order to balance the CO2 concentration and control the humidity levels inside the greenhouses. Two basic ventilation systems are used in the hydroponics.
                </p>
                
                <ol className="list-decimal pl-5 space-y-2">
                  <li className="text-gray-700">Passive Intake System: While a fan is exhausting the dirty air in the greenhouse, the fresh air supply is provided by the holes.</li>
                  <li className="text-gray-700">Active intake system: While a fan is exhausting the dirty air in the greenhouse, the fresh air supply is provided with another fan.</li>
                </ol>
                
                <p className="text-gray-700">
                  While the plants are growing, there are massive amount of unpleasant smell and humidity occur. To be able to remove this smell and humid air from the environment and to supply the proper amount of air for the photosynthesis, a well-designed ventilation system should be installed to the growing room.
                </p>
                <p className="text-gray-700">
                  Also, the importance of the quality of the products will be used in the ventilation system should be considered to avoid the growth of mold and fungus.
                </p>
                
                <h3 className="text-lg font-semibold text-blue-800 mt-6">2. VENTILATION / COOLING OF THE REFLECTOR</h3>
                <p className="text-gray-700">
                  Sunlight is another important parameter for the plants. Because of the hydroponics are closed systems, the reflectors are used to substitute the sunlight. The ventilation of the reflector should be arrange to prevent the overheating by using proper fan and the flexible ducts. The ducts are used for cooling the reflector should be select carefully to avoid effecting the light quality of the reflector.
                </p>
                <p className="text-gray-700">
                  Also depends on the system the reflector might be in motion, therefore, the flexible ducts should resist the possible damages caused by this movement.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
} 