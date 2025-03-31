import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-200">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20Feb%2010%202025%20Remove%20Background-rkTp8SxyCxNUDz5svIyaKJH9SsDFze.png"
              alt="GEMTEC GROUP"
              width={150}
              height={62}
              className="h-10 w-auto"
            />
            <p className="text-sm text-gray-400">
              A globally recognized leader in the HVAC industry, specializing in air distribution, filtration, and
              insulation solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-sm text-gray-400 hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-400 hover:text-white">
                  Careers
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
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <div className="space-y-4">
              <p className="text-sm text-gray-400">Stay updated with our latest news and products.</p>
              <div className="flex gap-2">
                <Input type="email" placeholder="Your email" className="bg-blue-900/50 border-blue-900" />
                <Button variant="secondary" className="text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400 space-y-1 md:space-y-0">
            <p>© {new Date().getFullYear()} GEMTEC. All rights reserved.</p>
            <p className="md:mt-1">Developed by Jean-Paul Bassil</p>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-secondary">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-secondary">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-secondary">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-secondary">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

