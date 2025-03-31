"use client"

import { motion } from "framer-motion"

export function LoadingSpinner({ className = "" }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        className="h-8 w-8 rounded-full border-2 border-secondary border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}

