"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { FadeInStagger, ScrollReveal, HoverScale } from "@/components/ui/animations"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"

// Use all 12 partners from the projects page
const partners = [
  {
    name: "Kingspan",
    logo: "/Projects and partnerships/Kingspan.png",
  },
  {
    name: "AFS",
    logo: "/Projects and partnerships/AFS logo.jpeg",
  },
  {
    name: "Blauberg",
    logo: "/Projects and partnerships/Blauberg Logo.jpeg",
  },
  {
    name: "Tecnifan",
    logo: "/Projects and partnerships/Tecnifan Logo.jpeg",
  },
  {
    name: "Comefri",
    logo: "/Projects and partnerships/Comefri Logo.png",
  },
  {
    name: "Izocam",
    logo: "/Projects and partnerships/Izocam Logo.png",
  },
  {
    name: "Sisteven",
    logo: "/Projects and partnerships/Sisteven Logo.webp",
  },
  {
    name: "S&P",
    logo: "/Projects and partnerships/S&P Logo.png",
  },
  {
    name: "Ulpatek",
    logo: "/Projects and partnerships/Ulpatek Logo.webp",
  },
  {
    name: "Vents",
    logo: "/Projects and partnerships/Vents Logo.jpg",
  },
  {
    name: "Airsum",
    logo: "/Projects and partnerships/Airsum Logo.jpg",
  },
  {
    name: "Hira",
    logo: "/Projects and partnerships/Hira Industries logo.jpeg",
  },
]

// Configure autoplay options
const autoplayOptions = {
  delay: 4000,
  rootNode: (emblaRoot: HTMLElement) => emblaRoot.parentElement,
  stopOnInteraction: false,
  stopOnMouseEnter: true,
}

export default function Projects() {
  const isMobile = useIsMobile()
  const [slidesInView, setSlidesInView] = useState(4)
  
  // Update number of slides in view based on window width - show fewer slides to make them bigger
  useEffect(() => {
    const updateSlidesInView = () => {
      const width = window.innerWidth;
      if (width < 640) setSlidesInView(1);
      else if (width < 1024) setSlidesInView(2);
      else if (width < 1280) setSlidesInView(3);
      else setSlidesInView(3); // Changed from 4 to 3 for larger logos
    };
    
    updateSlidesInView();
    window.addEventListener('resize', updateSlidesInView);
    return () => window.removeEventListener('resize', updateSlidesInView);
  }, []);
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(true)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>
      {/* Add subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/25 [mask-image:linear-gradient(0deg,transparent,black,transparent)]"></div>
      {/* Add decorative blurred circles */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-96 h-96 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-10 blur-3xl"></div>

      <div className="container relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wide uppercase bg-blue-50 px-4 py-1.5 rounded-full text-sm">Trusted Partners</span>
            <h2 className="text-4xl font-bold tracking-tight mt-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
              Partnerships
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Collaborating with leading global brands to deliver excellence in HVAC solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-full px-4">
          <div className="overflow-hidden -mx-4" ref={emblaRef}>
            <div className="flex">
              {partners.map((partner) => (
                <div 
                  key={partner.name} 
                  className="flex-shrink-0 px-4"
                  style={{ flex: `0 0 ${100 / slidesInView}%` }}
                >
                  <HoverScale>
                    <Card className="bg-white/60 backdrop-blur-sm hover:bg-white transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/50 rounded-xl overflow-hidden">
                      <CardContent className="flex items-center justify-center p-3 sm:p-4 h-[120px] sm:h-[140px]">
                        <div className="relative w-[90%] h-[90%] transition-transform duration-300">
                          <Image
                            src={partner.logo || "/placeholder.svg"}
                            alt={partner.name}
                            fill
                            className="object-contain filter contrast-125 drop-shadow-sm"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            priority
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10 hover:bg-blue-50 hover:text-blue-600 transition-colors border-gray-200"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10 hover:bg-blue-50 hover:text-blue-600 transition-colors border-gray-200"
              onClick={scrollNext}
              disabled={!canScrollNext}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

