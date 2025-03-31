"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { FadeIn, SlideIn } from "@/components/ui/animations"
import { BackgroundSlideshow } from "./background-slideshow"

export default function Hero() {
  return (
    <section className="relative h-[600px] sm:h-auto">
      <BackgroundSlideshow />
      <div className="relative h-full flex flex-col justify-center mx-auto max-w-7xl px-4 py-16 sm:py-32 sm:px-6 lg:px-8">
        <div className="max-w-2xl z-10">
          <FadeIn delay={0.2}>
            <div className="mb-4 sm:mb-8 inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 border border-white/20">
              <span className="text-sm font-semibold text-white">Leading HVAC Solutions Provider</span>
            </div>
          </FadeIn>
          <SlideIn delay={0.3}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white lg:text-6xl">
              Innovating Ventilation, Enhancing Performance
            </h1>
          </SlideIn>
          <FadeIn delay={0.4}>
            <p className="mt-4 sm:mt-6 text-base sm:text-xl text-gray-200">
              High-quality HVAC solutions for a more efficient and sustainable future. Trusted by industries worldwide
              for certified air distribution and ventilation products.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div className="mt-6 sm:mt-10 flex flex-wrap items-center justify-start gap-4">
              <Button size="lg" className="btn-secondary gap-2 min-w-[160px] max-w-[200px]">
                Explore Our Products
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="btn-outline min-w-[120px] max-w-[160px]">
                Get a Quote
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

