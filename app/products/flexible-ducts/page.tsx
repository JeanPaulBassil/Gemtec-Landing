import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal, FadeInStagger, HoverScale } from "@/components/ui/animations"
import { Check, ArrowRight, Wind, Droplets, Gauge, Zap, Building, Shield } from "lucide-react"
import Link from "next/link"

const flexibleDucts = {
  name: "Flexible Air Ducts",
  description:
    "Our Gemtec flexible air ducts are acoustically insulated and available in different materials including aluminium, PVC, and stainless steel. They are designed for efficient and flexible air distribution in HVAC systems.",
  category: "Flexible Ducts",
  mainCategories: [
    {
      title: "Acoustic Air Duct",
      description: "High-performance acoustic insulated ducts for superior noise reduction.",
      image: "/images/products/flexible-ducts/AcousticAirDuct.webp",
      features: [
        "Superior sound insulation",
        "Multiple layer construction",
        "Professional grade materials",
        "Ideal for noise-sensitive applications"
      ]
    },
    {
      title: "Air Control Equipment",
      description: "Comprehensive range of air control components for precise airflow management.",
      image: "/images/products/flexible-ducts/Air controlEquipments.webp",
      features: [
        "Precise flow control",
        "Multiple configuration options",
        "Professional installation",
        "High-quality materials"
      ]
    },
    {
      title: "Air Disc Valves",
      description: "Premium air disc valves for efficient air distribution and control.",
      image: "/images/products/flexible-ducts/AirDiskValves.webp",
      features: [
        "Precise air control",
        "Easy adjustment",
        "Multiple sizes available",
        "Professional finish"
      ]
    }
  ],
  productTypes: [
    {
      name: "Air Duct Equipment",
      image: "/images/products/flexible-ducts/AirDuctEquipments.webp",
      description: "Essential components and accessories for complete duct system installation"
    },
    {
      name: "Aluminium & PVC Combined Flexible Air Ducts",
      image: "/images/products/flexible-ducts/Aluminum&PVCCombinedFlexibleAirDucts.webp",
      description: "Hybrid solution combining durability of aluminum with PVC flexibility"
    },
    {
      name: "Aluminium Flexible Air Ducts",
      image: "/images/products/flexible-ducts/AluminumFlexibleAirDucts.webp",
      description: "Premium aluminum ducts for superior durability and performance"
    },
    {
      name: "Anti-Microbial Flexible Air Duct",
      image: "/images/products/flexible-ducts/Anti-MicrobialFlexibleAirDuct.webp",
      description: "Specialized ducts with antimicrobial properties for healthcare environments"
    },
    {
      name: "Circular Duct Type Silencer",
      image: "/images/products/flexible-ducts/CircularDuctTypeSilencer.webp",
      description: "Advanced noise reduction solution for HVAC systems"
    },
    {
      name: "Clip Ducting Industrial Hose",
      image: "/images/products/flexible-ducts/ClipDuctingIndustrialHose.webp",
      description: "Heavy-duty industrial hose with clip-lock system"
    },
    {
      name: "Duct Insulation Sleeve",
      image: "/images/products/flexible-ducts/DuctInsulationSleeve.webp",
      description: "High-performance insulation sleeves for thermal efficiency"
    },
    {
      name: "Ecosoft Series",
      image: "/images/products/flexible-ducts/EcosoftSeries.webp",
      description: "Eco-friendly flexible duct solutions with superior performance"
    },
    {
      name: "Flexible Connector",
      image: "/images/products/flexible-ducts/FlexibleConnector.webp",
      description: "Professional grade connectors for secure duct joints"
    },
    {
      name: "Grills",
      image: "/images/products/flexible-ducts/Grills.webp",
      description: "Premium air grills for efficient air distribution"
    },
    {
      name: "Hydroponic Flexible Air Ducts",
      image: "/images/products/flexible-ducts/HydroponicFlexibleAirDucts.webp",
      description: "Specialized ducts for hydroponic growing environments"
    },
    {
      name: "Marine Certified Flexible Air Duct",
      image: "/images/products/flexible-ducts/MarineCertifiedFlexibleAirDuct.webp",
      description: "Certified ducts meeting marine industry standards"
    },
    {
      name: "Montage Elements",
      image: "/images/products/flexible-ducts/MonatgeElements.webp",
      description: "Complete mounting and installation components"
    },
    {
      name: "Nonwoven Flexible Air Ducts",
      image: "/images/products/flexible-ducts/NonvonenFlexibleAirDUcts.webp",
      description: "Lightweight and durable nonwoven duct solutions"
    },
    {
      name: "PE Flexible Air Ducts",
      image: "/images/products/flexible-ducts/PeFlexibleAirDucts.webp",
      description: "Polyethylene ducts for specialized applications"
    },
    {
      name: "Polyester Flexible Air Ducts",
      image: "/images/products/flexible-ducts/PolyesterFlexibleAirDucts.webp",
      description: "High-quality polyester ducts for versatile use"
    },
    {
      name: "PVC Flexible Air Ducts",
      image: "/images/products/flexible-ducts/PVCFlexibleAirDucts.webp",
      description: "Versatile PVC ducts for standard applications"
    },
    {
      name: "Semi Flexible Air Ducts",
      image: "/images/products/flexible-ducts/SemiFlexibleAirDucts.webp",
      description: "Semi-rigid ducts for specific installation requirements"
    },
    {
      name: "TPU Industrial Hose",
      image: "/images/products/flexible-ducts/TPUIndustrialHose.webp",
      description: "Thermoplastic polyurethane hoses for industrial use"
    },
    {
      name: "UL Listed Flexible Air Connector",
      image: "/images/products/flexible-ducts/ULListedFlexibleAirConnector.webp",
      description: "UL certified connectors for safety compliance",
      link: "/products/ul-listed-flexible-air-connector"
    }
  ],
  features: [
    "Wide range of materials: Aluminum, PVC, PE, and specialized combinations",
    "Multiple diameter options to suit various applications",
    "Superior acoustic and thermal insulation properties",
    "Anti-microbial options for healthcare environments",
    "Marine-certified variants available",
    "Easy installation and maintenance",
    "Excellent flexibility for complex routing",
    "Fire-resistant options for enhanced safety",
  ],
  applications: [
    "Commercial HVAC Systems",
    "Industrial Ventilation",
    "Healthcare Facilities",
    "Marine Applications",
    "Clean Rooms",
    "Food Processing",
    "Pharmaceutical Manufacturing",
    "Data Centers",
  ],
  benefits: [
    {
      title: "Versatile Solutions",
      description: "Wide range of materials and types to meet any application requirement",
      icon: Wind,
    },
    {
      title: "Superior Performance",
      description: "Excellent acoustic and thermal insulation properties",
      icon: Gauge,
    },
    {
      title: "Enhanced Safety",
      description: "Fire-resistant and anti-microbial options available",
      icon: Shield,
    },
    {
      title: "Easy Installation",
      description: "Flexible design allows for quick and efficient installation",
      icon: Building,
    },
  ],
}

const relatedProducts = [
  {
    name: "Air Curtains",
    description: "High-efficiency air curtains for thermal separation and energy conservation.",
    image: "/placeholder.svg",
    slug: "air-curtains",
  },
  {
    name: "Sound Attenuators",
    description: "Advanced sound attenuation solutions for HVAC noise reduction.",
    image: "/placeholder.svg",
    slug: "sound-attenuators",
  },
]

export default function FlexibleDuctsPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800">
        <div className="absolute inset-0 opacity-20 bg-grid-white/5"></div>
        <div className="absolute right-0 -mt-32 -mr-32 h-96 w-96 rounded-full bg-blue-500 opacity-20 blur-3xl"></div>
        <div className="absolute left-0 mt-32 ml-8 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              {flexibleDucts.category}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl/none text-white drop-shadow-sm">
              {flexibleDucts.name}
            </h1>
            <p className="mt-6 text-xl text-blue-100">{flexibleDucts.description}</p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950">Main Product Categories</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of flexible duct solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {flexibleDucts.mainCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-950">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950">Specialized Product Types</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our specialized flexible duct solutions for specific applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {flexibleDucts.productTypes.map((product, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                {product.link ? (
                  <Link href={product.link}>
                    <div className="relative h-48">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-blue-950 mb-2">{product.name}</h3>
                      <p className="text-gray-600">{product.description}</p>
                      {product.link && (
                        <div className="flex items-center mt-4 text-blue-600 font-medium">
                          Learn more
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      )}
                    </CardContent>
                  </Link>
                ) : (
                  <>
                    <div className="relative h-48">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-blue-950 mb-2">{product.name}</h3>
                      <p className="text-gray-600">{product.description}</p>
                    </CardContent>
                  </>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-blue-950">Key Features</h2>
                <ul className="grid gap-3">
                  {flexibleDucts.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-blue-950">Applications</h2>
                <div className="flex flex-wrap gap-2">
                  {flexibleDucts.applications.map((application, index) => (
                    <Badge key={index} variant="outline" className="bg-blue-50 hover:bg-blue-100 text-blue-800 border-blue-200">
                      {application}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Request a Quote
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl border border-gray-100">
                <Image 
                  src={flexibleDucts.productTypes[0].image} 
                  alt="Flexible Duct Installation" 
                  fill 
                  className="object-contain p-4" 
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl border border-gray-100">
                <Image 
                  src={flexibleDucts.productTypes[1].image} 
                  alt="Flexible Duct Applications" 
                  fill 
                  className="object-contain p-4" 
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl border border-gray-100">
                <Image 
                  src={flexibleDucts.productTypes[2].image} 
                  alt="Flexible Duct Materials" 
                  fill 
                  className="object-contain p-4" 
                />
              </div>
              <div className="relative aspect-square rounded-xl overflow-hidden shadow-xl border border-gray-100">
                <Image 
                  src={flexibleDucts.productTypes[3].image} 
                  alt="Flexible Duct Types" 
                  fill 
                  className="object-contain p-4" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-50/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950">Key Benefits</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our flexible ducts provide exceptional advantages for modern HVAC installations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            {flexibleDucts.benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6 text-blue-700" />
                  </div>
                  <CardTitle className="text-xl text-blue-950">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-950">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-blue-100 mb-8">
              Contact our expert team today to discuss your flexible duct requirements and receive a customized quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-blue-900">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-blue-300 text-blue-100 hover:bg-blue-800">
                Contact Sales Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-950">Related Products</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our other premium HVAC solutions that complement our flexible ducts
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedProducts.map((product, index) => (
              <Link key={index} href={`/products/${product.slug}`}>
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="relative h-48">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-blue-950 mb-2">{product.name}</h3>
                    <p className="text-gray-600">{product.description}</p>
                    <div className="flex items-center mt-4 text-blue-600 font-medium">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
} 