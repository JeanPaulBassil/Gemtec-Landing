import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, Building2, Factory, Award, Globe2 } from "lucide-react"
import { ScrollReveal, FadeInStagger, HoverScale } from "@/components/ui/animations"
import Image from "next/image"
import Link from "next/link"

const featuredNews = {
  title: "GEMTEC Expands Operations with New Nigeria Facility",
  description:
    "Marking a significant milestone in our growth, GEMTEC inaugurates a state-of-the-art manufacturing facility in Lagos, Nigeria.",
  image: "/placeholder.svg",
  date: "February 1, 2024",
  category: "Company News",
  readTime: "5 min read",
}

const newsCategories = ["All", "Company News", "Product Updates", "Industry Insights", "Events", "Awards"]

const newsArticles = [
  {
    title: "GEMTEC Wins Excellence in Manufacturing Award 2023",
    description:
      "Recognition for outstanding contribution to manufacturing excellence and innovation in the HVAC industry.",
    image: "/placeholder.svg",
    date: "December 15, 2023",
    category: "Awards",
    icon: Award,
  },
  {
    title: "New Energy-Efficient Air Distribution System Launched",
    description:
      "Introducing our latest innovation in air distribution technology, designed for maximum energy efficiency.",
    image: "/placeholder.svg",
    date: "December 1, 2023",
    category: "Product Updates",
    icon: Factory,
  },
  {
    title: "GEMTEC Participates in Nigeria HVAC Expo 2023",
    description: "Showcasing our latest products and innovations at Nigeria's largest HVAC industry exhibition.",
    image: "/placeholder.svg",
    date: "November 20, 2023",
    category: "Events",
    icon: Building2,
  },
  {
    title: "Expanding Our Global Distribution Network",
    description:
      "New partnerships established to strengthen our presence in key markets across Africa and the Middle East.",
    image: "/placeholder.svg",
    date: "November 10, 2023",
    category: "Company News",
    icon: Globe2,
  },
]

export default function NewsPage() {
  return (
    <>
      <section className="relative py-24 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              News & Updates
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Stay informed about GEMTEC's latest developments, achievements, and industry insights
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="relative aspect-video lg:aspect-auto">
                  <Image
                    src={featuredNews.image || "/placeholder.svg"}
                    alt={featuredNews.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <Badge variant="secondary">{featuredNews.category}</Badge>
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {featuredNews.date}
                        </div>
                      </div>
                      <h2 className="text-3xl font-bold tracking-tight">{featuredNews.title}</h2>
                      <p className="text-muted-foreground">{featuredNews.description}</p>
                    </div>
                    <Button className="w-fit btn-secondary" asChild>
                      <Link href="/news/gemtec-expands-operations-nigeria">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-accent">
        <div className="container">
          <div className="space-y-12">
            <div className="flex flex-wrap gap-4 justify-center">
              {newsCategories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "secondary" : "outline"}
                  className={category === "All" ? "" : "bg-background"}
                >
                  {category}
                </Button>
              ))}
            </div>

            <FadeInStagger>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {newsArticles.map((article) => (
                  <HoverScale key={article.title}>
                    <Card className="card-hover">
                      <div className="relative aspect-video">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover rounded-t-lg"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-4 mb-2">
                          <Badge variant="secondary">{article.category}</Badge>
                          <div className="text-sm text-muted-foreground flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {article.date}
                          </div>
                        </div>
                        <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                        <CardDescription className="line-clamp-3">{article.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button variant="ghost" className="p-0 h-auto font-semibold" asChild>
                          <Link href={`/news/${article.title.toLowerCase().replace(/\s+/g, "-")}`}>
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </HoverScale>
                ))}
              </div>
            </FadeInStagger>

            <div className="flex justify-center">
              <Button size="lg" variant="outline">
                Load More Articles
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <Card className="bg-primary/5 border-none">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Subscribe to Our Newsletter</CardTitle>
              <CardDescription>
                Stay updated with our latest news, product launches, and industry insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Enter your email" type="email" />
                <Button className="btn-secondary whitespace-nowrap">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}

