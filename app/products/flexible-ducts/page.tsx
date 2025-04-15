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
      title: "Air Control Equipment",
      description: "Comprehensive range of air control components for precise airflow management.",
      image: "/images/products/flexible-ducts/Air controlEquipments.webp",
      link: "/products/air-control-equipment",
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
      link: "/products/air-disc-valves",
      features: [
        "Precise air control",
        "Easy adjustment",
        "Multiple sizes available",
        "Professional finish"
      ]
    },
    {
      title: "Aluminium Flexible Air Ducts",
      description:
        "High-quality aluminum ducts for superior performance and durability.",
      image: "/images/products/flexible-ducts/Alumsemi.webp",
      features: [
        "High temperature resistance",
        "Excellent durability",
        "Superior ventilation performance",
      ],
      link: "/products/aluminium-flexible-air-ducts",
    },
    {
      title: "Anti-Microbial Flexible Air Duct",
      description:
        "Specialized ducts with anti-microbial properties for clean air environments.",
      image: "/images/products/flexible-ducts/Semiafs-Antimicrobial.webp",
      features: [
        "Prevents microbial growth",
        "Ideal for healthcare facilities",
        "Maintains air quality",
      ],
      link: "/products/anti-microbial-flexible-air-duct",
    },
  ],
  productTypes: [
    {
      name: "Air Duct Equipment",
      image: "/images/products/flexible-ducts/AirDuctEquipments.webp",
      description: "Essential components and accessories for complete duct system installation",
      link: "/products/air-duct-equipments"
    },
    {
      name: "Aluminium & PVC Combined Flexible Air Ducts",
      image: "/images/products/flexible-ducts/Aluminum&PVCCombinedFlexibleAirDucts.webp",
      description: "Hybrid solution combining durability of aluminum with PVC flexibility",
      link: "/products/flexible-ducts/aluminium-pvc-combined"
    },
    {
      name: "Aluminium Flexible Air Ducts",
      image: "/images/products/flexible-ducts/AluminumFlexibleAirDucts.webp",
      description: "Premium aluminum ducts for superior durability and performance",
      link: "/products/flexible-ducts/aluminium-flexible-air-ducts"
    },
    {
      name: "Anti-Microbial Flexible Air Duct",
      image: "/images/products/flexible-ducts/Anti-MicrobialFlexibleAirDuct.webp",
      description: "Specialized ducts with antimicrobial properties for healthcare environments",
      link: "/products/flexible-ducts/anti-microbial-flexible-air-duct"
    },
    {
      name: "Circular Duct Type Silencer",
      image: "/images/products/flexible-ducts/CircularDuctTypeSilencer.webp",
      description: "Specialized silencers for circular duct systems",
      link: "/products/flexible-ducts/circular-duct-type-silencer"
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
      description: "Premium air grills for efficient air distribution",
      link: "/products/grills"
    },
    {
      name: "Hydroponic Flexible Air Ducts",
      image: "/images/products/flexible-ducts/HydroponicFlexibleAirDucts.webp",
      description: "Specialized ducts for hydroponic growing environments",
      link: "/products/hydroponic-flexible-air-ducts"
    },
    {
      name: "Marine Certified Flexible Air Duct",
      image: "/images/products/flexible-ducts/MarineCertifiedFlexibleAirDuct.webp",
      description: "Certified ducts meeting marine industry standards",
      link: "/products/marine-certified-flexible-air-duct"
    },
    {
      name: "Montage Elements",
      image: "/images/products/flexible-ducts/MonatgeElements.webp",
      link: "/products/montage-elements",
      description: "Installation accessories for flexible duct systems"
    },
    {
      name: "Nonwoven Flexible Air Ducts",
      image: "/images/products/flexible-ducts/NonvonenFlexibleAirDUcts.webp",
      link: "/products/nonwoven-flexible-air-ducts",
      description: "Specialized acoustically insulated flexible air ducts"
    },
    {
      name: "PE Flexible Air Ducts",
      image: "/images/products/flexible-ducts/Peafs.webp",
      link: "/products/pe-flexible-air-ducts",
      description: "Polyethylene ducts for specialized applications"
    },
    {
      name: "Polyester Flexible Air Ducts",
      image: "/images/products/flexible-ducts/ISOAFS-POLY-ECOSOFT.webp",
      link: "/products/polyester-flexible-air-ducts",
      description: "Premium polyester ducts offering excellent flexibility and durability"
    },
    {
      name: "PVC Flexible Air Ducts",
      image: "/images/products/flexible-ducts/PVCFlexibleAirDucts.webp",
      link: "/products/pvc-flexible-air-ducts",
      description: "Versatile PVC ducts for standard applications"
    },
    {
      name: "Semi Flexible Air Ducts",
      image: "/images/products/flexible-ducts/SemiFlexibleAirDucts.webp",
      link: "/products/semi-flexible-air-ducts",
      description: "Semi-rigid ducts for specific installation requirements"
    },
    {
      name: "TPU Industrial Hose",
      image: "/images/products/flexible-ducts/TPUIndustrialHose.webp",
      link: "/products/tpu-industrial-hose",
      description: "Premium thermoplastic polyurethane industrial hoses for various industrial applications."
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
  // Define types for our products
  type ProductFeature = string;
  
  interface Product {
    name: string;
    image: string;
    description: string;
    link?: string;
    features?: ProductFeature[];
  }

  // Combine mainCategories and productTypes into a single array
  const allProducts: Product[] = [
    ...flexibleDucts.mainCategories.map(category => ({
      name: category.title,
      image: category.image,
      description: category.description,
      link: category.link,
      features: category.features
    })),
    ...flexibleDucts.productTypes
  ];

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
            <h2 className="text-3xl font-bold text-blue-950">All Product Categories</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of flexible duct solutions for all applications
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product, index) => (
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
                      {product.features && (
                        <ul className="space-y-2 mt-4">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="flex items-center mt-4 text-blue-600 font-medium">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
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
                      {product.features && (
                        <ul className="space-y-2 mt-4">
                          {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </>
                )}
              </Card>
            ))}
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