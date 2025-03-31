import Hero from "@/components/hero"
import ProductCategories from "@/components/product-categories"
import WhyGemtec from "@/components/why-gemtec"
import Projects from "@/components/projects"

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <ProductCategories />
      <WhyGemtec />
      <Projects />
    </main>
  )
}

