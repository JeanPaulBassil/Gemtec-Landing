import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type React from "react" // Import React
import { WhatsAppButton } from "@/components/whatsapp-button"
import { QueryProvider } from "@/lib/providers/query-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "GEMTEC - HVAC Solutions Provider",
  description: "Leading provider of certified HVAC products and solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <QueryProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            {children}
            <Footer />
            <WhatsAppButton />
          </div>
        </QueryProvider>
      </body>
    </html>
  )
}



import './globals.css'