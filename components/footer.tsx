import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row mb-8">
          <div className="mb-8 md:mb-0 md:mr-12">
            <h1 className="text-3xl font-bold tracking-wider mb-6">GEMTEC</h1>
            <p className="max-w-xs text-sm text-gray-400">
              GEMTEC is a leading provider of certified HVAC products and solutions, with a focus on innovation,
              quality, and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 flex-1">
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-gray-400 hover:text-secondary">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/mission" className="text-sm text-gray-400 hover:text-secondary">
                    Mission
                  </Link>
                </li>
                <li>
                  <Link href="/certifications" className="text-sm text-gray-400 hover:text-secondary">
                    Certifications
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-sm text-gray-400 hover:text-secondary">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm text-gray-400 hover:text-secondary">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-sm text-gray-400">Lebanon - Tayouneh Office</li>
                <li className="text-sm text-gray-400">Lebanon - Mar Mkhayel Office</li>
                <li className="text-sm text-gray-400">Ghana Office</li>
                <li className="text-sm text-gray-400">Nigeria Office</li>
                <li className="text-sm text-gray-400">info@gemtec.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 mb-20">
          <div className="text-sm text-gray-400 space-y-1 md:space-y-0">
            <p>© {new Date().getFullYear()} GEMTEC. All rights reserved.</p>
            <p className="md:mt-1">Developed by Jean-Paul Bassil, Charbel Bassil and Etienne Tabchoury</p>
          </div>
          <div className="flex space-x-8">
            <Link href="https://www.facebook.com/gemtec.ltd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="https://www.instagram.com/gemtec_group" className="text-gray-400 hover:text-secondary">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

