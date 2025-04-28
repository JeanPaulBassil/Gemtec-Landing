import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "News Article | GEMTEC",
  description: "Read the latest news and updates from GEMTEC",
}

export default function NewsArticlePage({ params }: { params: { id: string } }) {
  return (
    <div className="container py-12">
      <Link 
        href="/news" 
        className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center mb-8"
      >
        <svg
          className="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to News
      </Link>

      <article className="max-w-4xl mx-auto">
        <div className="relative h-96 mb-8">
          <Image
            src="/images/news-placeholder.jpg"
            alt="News Title"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="text-sm text-blue-600 mb-4">March 15, 2024</div>
        <h1 className="text-4xl font-bold mb-6">GEMTEC Expands Operations to New Markets</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="lead text-xl text-gray-600 mb-8">
            We are excited to announce our expansion into new markets, bringing our innovative HVAC solutions to more customers worldwide.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <h2>Expanding Our Reach</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <h2>New Opportunities</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>

          <blockquote>
            "This expansion represents a significant milestone in our company's growth and our commitment to serving customers globally."
            <footer>- John Doe, CEO of GEMTEC</footer>
          </blockquote>

          <h2>Looking to the Future</h2>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
      </article>
    </div>
  )
} 