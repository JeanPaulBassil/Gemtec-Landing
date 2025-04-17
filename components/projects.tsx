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
  
  // Update number of slides in view based on window width
  useEffect(() => {
    const updateSlidesInView = () => {
      const width = window.innerWidth;
      if (width < 640) setSlidesInView(1);
      else if (width < 1024) setSlidesInView(2);
      else if (width < 1280) setSlidesInView(3);
      else setSlidesInView(4);
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
    <section className="py-24 section-accent">
      <div className="container">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-secondary font-semibold">Our Partners</span>
            <h2 className="text-3xl font-bold tracking-tight mt-2">Projects & Partnerships</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Successfully executed projects across various regions, partnering with leading global brands.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {partners.map((partner) => (
                <div 
                  key={partner.name} 
                  className="flex-shrink-0 px-2 sm:px-4"
                  style={{ flex: `0 0 ${100 / slidesInView}%` }}
                >
                  <HoverScale>
                    <Card className="bg-white card-hover">
                      <CardContent className="flex items-center justify-center p-2 sm:p-6 h-[100px] sm:h-[120px]">
                        <div className="relative w-full h-full">
                          <Image
                            src={partner.logo || "/placeholder.svg"}
                            alt={partner.name}
                            fill
                            className="object-contain p-2"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={scrollNext}
              disabled={!canScrollNext}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

