import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type React from "react" // Import React
import { WhatsAppButton } from "@/components/whatsapp-button"
import { usePathname } from "next/navigation"
import ClientLayoutShell from "@/components/client-layout-shell";

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
        <div id="portal-root" />
        <ClientLayoutShell>
          {children}
        </ClientLayoutShell>
      </body>
    </html>
  )
}