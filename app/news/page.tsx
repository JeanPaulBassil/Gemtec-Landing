import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "News | GEMTEC",
  description: "Stay updated with the latest news and updates from GEMTEC",
}

export default function NewsPage() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Latest News</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay informed about our latest developments, industry insights, and company updates
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* News Card 1 */}
        <Link href="/news/1" className="block">
          <article className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 h-full">
            <div className="relative h-48">
              <Image
                src="/images/news-placeholder.jpg"
                alt="News Title"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-blue-600 mb-2">March 15, 2024</div>
              <h2 className="text-xl font-semibold mb-3">GEMTEC Expands Operations to New Markets</h2>
              <p className="text-gray-600 mb-4">
                We are excited to announce our expansion into new markets, bringing our innovative HVAC solutions to more customers worldwide.
              </p>
              <div className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </article>
        </Link>

        {/* News Card 2 */}
        <Link href="/news/2" className="block">
          <article className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 h-full">
            <div className="relative h-48">
              <Image
                src="/images/news-placeholder.jpg"
                alt="News Title"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-blue-600 mb-2">March 10, 2024</div>
              <h2 className="text-xl font-semibold mb-3">New Product Launch: Energy-Efficient Solutions</h2>
              <p className="text-gray-600 mb-4">
                Introducing our latest line of energy-efficient HVAC products, designed to reduce environmental impact while maximizing performance.
              </p>
              <div className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </article>
        </Link>

        {/* News Card 3 */}
        <Link href="/news/3" className="block">
          <article className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 h-full">
            <div className="relative h-48">
              <Image
                src="/images/news-placeholder.jpg"
                alt="News Title"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-blue-600 mb-2">March 5, 2024</div>
              <h2 className="text-xl font-semibold mb-3">GEMTEC Wins Industry Innovation Award</h2>
              <p className="text-gray-600 mb-4">
                We are proud to announce that GEMTEC has been recognized for our innovative contributions to the HVAC industry.
              </p>
              <div className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </div>
  )
} 