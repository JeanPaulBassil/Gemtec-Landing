import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { ScrollReveal, FadeInStagger, HoverScale } from "@/components/ui/animations"

const article = {
  title: "GEMTEC Expands Operations with New Nigeria Facility",
  description:
    "Marking a significant milestone in our growth, GEMTEC inaugurates a state-of-the-art manufacturing facility in Lagos, Nigeria.",
  content: [
    {
      type: "paragraph",
      content:
        "GEMTEC, a leading provider of HVAC solutions, today announced the successful inauguration of its new manufacturing facility in Lagos, Nigeria. This strategic expansion marks a significant milestone in the company's growth journey and reinforces its commitment to serving the African market with locally manufactured, high-quality HVAC products.",
    },
    {
      type: "image",
      src: "/placeholder.svg",
      alt: "New Nigeria Facility",
      caption: "GEMTEC's state-of-the-art manufacturing facility in Lagos, Nigeria",
    },
    {
      type: "paragraph",
      content:
        "The new facility, spanning over 10,000 square meters, is equipped with cutting-edge technology and automation systems, enabling GEMTEC to significantly increase its production capacity and reduce delivery times for customers in the region. This expansion is expected to create over 200 new jobs and contribute to the local economy.",
    },
    {
      type: "quote",
      content:
        "This new facility represents our commitment to the African market and our vision of becoming the leading HVAC solutions provider in the region. By manufacturing locally, we can better serve our customers with faster delivery times and more competitive pricing.",
      author: "Mohammed Ibrahim",
      position: "CEO, GEMTEC Group",
    },
    {
      type: "paragraph",
      content:
        "The facility will primarily focus on manufacturing air outlet grilles, dampers, and other essential HVAC components. With this new addition, GEMTEC now operates three manufacturing facilities across Lebanon, Ghana, and Nigeria, strengthening its position as a regional leader in the HVAC industry.",
    },
  ],
  date: "February 1, 2024",
  category: "Company News",
  readTime: "5 min read",
  author: {
    name: "Sarah Johnson",
    position: "Communications Director",
    image: "/placeholder.svg",
  },
}

const relatedArticles = [
  {
    title: "GEMTEC Wins Excellence in Manufacturing Award 2023",
    description:
      "Recognition for outstanding contribution to manufacturing excellence and innovation in the HVAC industry.",
    image: "/placeholder.svg",
    date: "December 15, 2023",
    category: "Awards",
  },
  {
    title: "New Energy-Efficient Air Distribution System Launched",
    description:
      "Introducing our latest innovation in air distribution technology, designed for maximum energy efficiency.",
    image: "/placeholder.svg",
    date: "December 1, 2023",
    category: "Product Updates",
  },
]

export default function NewsArticlePage() {
  return (
    <>
      <section className="relative py-24 bg-gradient-to-r from-blue-950 to-blue-900">
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Badge variant="secondary">{article.category}</Badge>
              <div className="text-sm text-gray-300 flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {article.date}
              </div>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              {article.title}
            </h1>
            <p className="mt-6 text-lg text-gray-300">{article.description}</p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={article.author.image || "/placeholder.svg"}
                    alt={article.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-white">{article.author.name}</div>
                  <div className="text-sm text-gray-300">{article.author.position}</div>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-600" />
              <div className="text-sm text-gray-300">{article.readTime}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg">
              {article.content.map((block, index) => {
                if (block.type === "paragraph") {
                  return (
                    <ScrollReveal key={index}>
                      <p className="text-muted-foreground">{block.content}</p>
                    </ScrollReveal>
                  )
                }
                if (block.type === "image") {
                  return (
                    <ScrollReveal key={index}>
                      <figure className="my-8">
                        <div className="relative aspect-video rounded-lg overflow-hidden">
                          <Image src={block.src || "/placeholder.svg"} alt={block.alt} fill className="object-cover" />
                        </div>
                        <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                          {block.caption}
                        </figcaption>
                      </figure>
                    </ScrollReveal>
                  )
                }
                if (block.type === "quote") {
                  return (
                    <ScrollReveal key={index}>
                      <blockquote className="my-8 border-l-4 border-primary pl-6 italic">
                        <p className="text-xl text-muted-foreground">{block.content}</p>
                        <footer className="mt-2 text-sm">
                          <strong>{block.author}</strong>
                          <span className="text-muted-foreground">, {block.position}</span>
                        </footer>
                      </blockquote>
                    </ScrollReveal>
                  )
                }
              })}
            </div>

            <div className="mt-12 flex items-center justify-between border-t border-b py-6">
              <div className="text-sm text-muted-foreground">Share this article:</div>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-secondary font-semibold">Related Articles</span>
              <h2 className="text-3xl font-bold tracking-tight mt-2">More News & Updates</h2>
            </div>
          </ScrollReveal>

          <FadeInStagger>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {relatedArticles.map((article) => (
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
                      <Button variant="ghost" className="p-0 h-auto font-semibold">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </HoverScale>
              ))}
            </div>
          </FadeInStagger>
        </div>
      </section>
    </>
  )
}

