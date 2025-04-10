import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CeilingDiffuserPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="relative aspect-square">
                  <Image
                    src="/air duct/air disc valves/ceiling diffuser.webp"
                    alt="CEILING DIFFUSER"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-green-500 hover:bg-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Share
                </Button>
                <Button size="lg" variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                  </svg>
                  Email
                </Button>
                <Button size="lg" variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                  Share
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-blue-600">CEILING DIFFUSER</h1>
                <p className="text-xl text-gray-600 mt-6">
                  High-quality ceiling diffusers designed for optimal air distribution in commercial and residential spaces. Featuring a premium white finish and circular design with multiple air channels, these diffusers provide efficient air circulation throughout any room.
                </p>
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
                      <td className="py-3 px-4 font-medium">Type</td>
                      <td className="py-3 px-4">Ceiling Diffuser</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Material</td>
                      <td className="py-3 px-4">High-quality white polymer</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Design</td>
                      <td className="py-3 px-4">Circular with concentric rings for balanced air distribution</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Installation</td>
                      <td className="py-3 px-4">Ceiling mount with secure fastening system</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Application</td>
                      <td className="py-3 px-4">Commercial and residential HVAC systems</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="py-3 px-4 font-medium">Finish</td>
                      <td className="py-3 px-4">Clean white finish to blend with most ceilings</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Sizes Available</td>
                      <td className="py-3 px-4">Multiple diameters for various applications</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-6">
                <ul className="space-y-2 pl-5 list-disc">
                  <li>Designed for balanced and efficient air distribution</li>
                  <li>Clean white finish that integrates seamlessly with ceiling designs</li>
                  <li>Multi-ring design for optimal airflow pattern control</li>
                  <li>Durable construction for long-term reliability</li>
                  <li>Engineered to minimize noise during operation</li>
                  <li>Easy installation with standard ceiling mounting options</li>
                  <li>Suitable for a wide range of HVAC applications</li>
                  <li>Optimized for both cooling and heating air distribution</li>
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