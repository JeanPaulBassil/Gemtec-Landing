"use client"

import { useEffect, useCallback, useState, useRef } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    image: "/Carousel Images/Carousel Image -1- .jpeg",
    title: "Professional HVAC Solutions",
  },
  {
    id: 2,
    image: "/Carousel Images/Carousel Image -2- .jpeg",
    title: "Industrial Ventilation Systems",
  },
  {
    id: 3,
    image: "/Carousel Images/Carousel Image -3-.jpeg",
    title: "Commercial Air Distribution",
  },
  {
    id: 4,
    image: "/Carousel Images/Carousel Image -4-.jpeg",
    title: "Sustainable Climate Control",
  },
  {
    id: 5,
    image: "/Carousel Images/Carousel Image -5-.jpeg",
    title: "Advanced HVAC Technology",
  },
  {
    id: 6,
    image: "/Carousel Images/Carousel Image -6-.jpeg",
    title: "Energy-Efficient Solutions",
  },
  {
    id: 7,
    image: "/Carousel Images/Carousel Image -7-.jpeg",
    title: "Global HVAC Excellence",
  },
]

export function BackgroundSlideshow() {
  // The animation duration in milliseconds
  const OPTIONS = { loop: true }
  const SLIDE_ANIMATION_DURATION = 300 // in milliseconds - much faster transition
  const SLIDE_INTERVAL = 3000 // 3 seconds between slides
  
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  // Reset timer function
  const resetAutoplayTimer = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current)
    }
    
    autoplayTimerRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext()
    }, SLIDE_INTERVAL)
  }, [emblaApi, SLIDE_INTERVAL])

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi) return

    resetAutoplayTimer()
    
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current)
      }
    }
  }, [emblaApi, resetAutoplayTimer])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main carousel container */}
      <div className="relative h-full overflow-hidden" ref={emblaRef}>
        <div className="h-full flex">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="flex-[0_0_100%] min-w-0 relative h-full"
              onClick={resetAutoplayTimer}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                quality={90}
              />
              {/* Dark overlay for better text visibility */}
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2 z-10">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-all duration-300",
              index === selectedIndex
                ? "w-4 bg-white"
                : "bg-white/50 hover:bg-white/75"
            )}
            onClick={() => {
              emblaApi?.scrollTo(index)
              resetAutoplayTimer()
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Add smooth animations with CSS */}
      <style jsx global>{`
        .embla__container {
          transition: transform ${SLIDE_ANIMATION_DURATION}ms cubic-bezier(0.2, 0, 0.2, 1);
        }
      `}</style>
    </div>
  )
}

