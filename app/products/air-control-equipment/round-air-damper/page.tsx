import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RoundAirDamperPage() {
  return (
    <>
      {/* Hero section with gradient background */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 opacity-10 bg-grid-blue-500/5"></div>
        <div className="absolute top-0 right-0 -mt-12 -mr-12 h-64 w-64 rounded-full bg-blue-400 opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 h-64 w-64 rounded-full bg-blue-400 opacity-5 blur-3xl"></div>
        
        <div className="container relative z-10">
          <Link href="/products/air-control-equipment" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            <span>Back to Air Control Equipment</span>
          </Link>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 transition-transform hover:shadow-xl hover:-translate-y-1 duration-300">
                <div className="relative aspect-square">
                  <Image
                    src="/air duct/Air control equipments/ROUND AIR DAMPER.webp"
                    alt="ROUND AIR DAMPER"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Badge variant="outline" className="bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200 px-3 py-1">
                  Precise Control
                </Badge>
                <Badge variant="outline" className="bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200 px-3 py-1">
                  HVAC Approved
                </Badge>
                <Badge variant="outline" className="bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200 px-3 py-1">
                  Metal Construction
                </Badge>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-green-500 hover:bg-green-600 rounded-full shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Share
                </Button>
                <Button size="lg" variant="outline" className="border-red-500 text-red-500 hover:bg-red-50 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                  </svg>
                  Email
                </Button>
                <Button size="lg" variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  Share
                </Button>
                <Button size="lg" variant="outline" className="border-gray-400 text-gray-600 hover:bg-gray-50 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                  </svg>
                  Print
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">Premium Product</Badge>
                <h1 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">ROUND AIR DAMPER</span>
                </h1>
                <div className="w-20 h-1 bg-blue-600 rounded mb-6"></div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our Round Air Dampers provide precise airflow control in HVAC systems. These adjustable dampers enable efficient regulation of air volume, making them essential components for balanced ventilation systems.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-100 rounded-full p-1 text-blue-600">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700">Precise airflow adjustment and regulation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-100 rounded-full p-1 text-blue-600">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700">Durable metal construction</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-100 rounded-full p-1 text-blue-600">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700">Easy integration with existing systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 bg-blue-100 rounded-full p-1 text-blue-600">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-gray-700">Available in multiple sizes</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product details with tabs */}
      <section className="py-16 bg-white border-t border-b border-gray-100">
        <div className="container">
          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full md:w-fit grid-cols-2 mb-10 bg-blue-50 p-1 rounded-lg">
              <TabsTrigger value="technical" className="text-sm md:text-base rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">
                TECHNICAL SPECIFICATIONS
              </TabsTrigger>
              <TabsTrigger value="features" className="text-sm md:text-base rounded-md data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm">
                GENERAL FEATURES
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="technical" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Technical Specifications</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-medium text-blue-800">Material</td>
                      <td className="py-4 px-4">Durable metal construction</td>
                    </tr>
                    <tr className="border-b bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="py-4 px-4 font-medium text-blue-800">Size Range</td>
                      <td className="py-4 px-4">Multiple sizes available</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-medium text-blue-800">Application</td>
                      <td className="py-4 px-4">HVAC systems, ventilation control</td>
                    </tr>
                    <tr className="border-b bg-gray-50 hover:bg-gray-100 transition-colors">
                      <td className="py-4 px-4 font-medium text-blue-800">Function</td>
                      <td className="py-4 px-4">Precise airflow adjustment and regulation</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-medium text-blue-800">Installation</td>
                      <td className="py-4 px-4">Easy integration with existing systems</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">General Features</h2>
              <div className="space-y-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="mt-1 bg-blue-100 rounded-full p-1.5 text-blue-600 flex-shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <p className="text-gray-700">It is used to prevent reverse of air flow in circular duct systems.</p>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 bg-blue-100 rounded-full p-1.5 text-blue-600 flex-shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <p className="text-gray-700">The case is made of galvanized steel and the blades are made of aluminium.</p>
                  </li>
                </ul>
                
                <div className="mt-8 bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="font-medium text-gray-800 mb-3">Available Diameters:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                    <div className="bg-white px-3 py-2 rounded-md shadow-sm border border-gray-200">
                      <p className="text-gray-700 font-medium text-center">102 mm</p>
                    </div>
                    <div className="bg-white px-3 py-2 rounded-md shadow-sm border border-gray-200">
                      <p className="text-gray-700 font-medium text-center">127 mm</p>
                    </div>
                    <div className="bg-white px-3 py-2 rounded-md shadow-sm border border-gray-200">
                      <p className="text-gray-700 font-medium text-center">152 mm</p>
                    </div>
                    <div className="bg-white px-3 py-2 rounded-md shadow-sm border border-gray-200">
                      <p className="text-gray-700 font-medium text-center">160 mm</p>
                    </div>
                    <div className="bg-white px-3 py-2 rounded-md shadow-sm border border-gray-200">
                      <p className="text-gray-700 font-medium text-center">203 mm</p>
                    </div>
                    <div className="bg-white px-3 py-2 rounded-md shadow-sm border border-gray-200">
                      <p className="text-gray-700 font-medium text-center">254 mm</p>
                    </div>
                    <div className="bg-white px-3 py-2 rounded-md shadow-sm border border-gray-200">
                      <p className="text-gray-700 font-medium text-center">315 mm</p>
                    </div>
                    <div className="bg-white px-3 py-2 rounded-md shadow-sm border border-gray-200">
                      <p className="text-gray-700 font-medium text-center">356 mm</p>
                    </div>
                    <div className="bg-white px-3 py-2 rounded-md shadow-sm border border-gray-200">
                      <p className="text-gray-700 font-medium text-center">406 mm</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 -mt-20 -ml-20 h-80 w-80 rounded-full bg-blue-100 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 -mb-20 -mr-20 h-80 w-80 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="bg-white rounded-2xl p-10 shadow-xl border border-gray-100 max-w-4xl mx-auto text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 opacity-50"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Need More Information?</h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Contact our technical team for detailed specifications, customized solutions, and expert advice on implementing ROUND AIR DAMPER in your projects.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full shadow-md px-8 py-6 text-lg">
                  Request Information
                </Button>
                <Button size="lg" variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50 rounded-full px-8 py-6 text-lg">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 