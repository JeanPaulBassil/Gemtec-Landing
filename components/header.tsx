"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import type React from "react" // Added import for React

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const MobileNavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  )

  const DesktopNav = () => (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 w-[400px]">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">About Us</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Learn about our history and values
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/mission"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Mission</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Our commitment to innovation and excellence
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/locations"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Office Locations</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Find our offices in Lebanon, Ghana, and Nigeria
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/projects"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Partnerships</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Explore our strategic partnerships with industry leaders
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/certifications"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Certifications</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Our quality standards and industry certifications
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/quality-policy"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Quality Policy</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Our commitment to quality standards and continuous improvement
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Careers</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    href="/careers"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">Join Our Team</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Explore career opportunities and join us in shaping the future of HVAC
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/careers/positions"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">All Positions</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Browse our current job openings
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="/careers/apply"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium leading-none">Apply Now</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Submit your application for open positions
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/contact"
              className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
            >
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center justify-between py-3">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20Feb%2010%202025%20Remove%20Background-rkTp8SxyCxNUDz5svIyaKJH9SsDFze.png"
            alt="GEMTEC GROUP"
            width={450}
            height={187}
            className="h-24 w-auto max-w-none"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-6">
              <div className="space-y-4">
                <div className="font-medium">About Us</div>
                <div className="pl-1 space-y-1">
                  <MobileNavItem href="/about">About Us</MobileNavItem>
                  <MobileNavItem href="/mission">Mission</MobileNavItem>
                  <MobileNavItem href="/locations">Office Locations</MobileNavItem>
                  <MobileNavItem href="/projects">Partnerships</MobileNavItem>
                  <MobileNavItem href="/certifications">Certifications</MobileNavItem>
                  <MobileNavItem href="/quality-policy">Quality Policy</MobileNavItem>
                </div>
              </div>
              <div className="space-y-4">
                <div className="font-medium">Careers</div>
                <div className="pl-1 space-y-1">
                  <MobileNavItem href="/careers">Join Our Team</MobileNavItem>
                  <MobileNavItem href="/careers/positions">All Positions</MobileNavItem>
                  <MobileNavItem href="/careers/apply">Apply Now</MobileNavItem>
                </div>
              </div>
              <MobileNavItem href="/contact">Contact</MobileNavItem>
              <div className="space-y-4 mt-4">
                <Button asChild variant="outline" className="w-full" onClick={() => setIsOpen(false)}>
                  <Link href="/quote">Get a Quote</Link>
                </Button>
                <Button asChild className="w-full" onClick={() => setIsOpen(false)}>
                  <Link href="/products">Explore Products</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="outline" className="btn-outline">
            <Link href="/quote">Get a Quote</Link>
          </Button>
          <Button asChild className="btn-secondary">
            <Link href="/products">Explore Products</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

