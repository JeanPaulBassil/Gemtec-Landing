"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button size="lg" className="rounded-full bg-green-500 hover:bg-green-600 shadow-lg h-14 w-14" asChild>
        <a
          href="https://wa.me/+96171380377"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>
    </motion.div>
  )
}

