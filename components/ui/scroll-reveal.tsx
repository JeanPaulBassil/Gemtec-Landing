"use client"

import { motion } from "framer-motion"

export const ScrollReveal = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5 }}
    className={className}
  >
    {children}
  </motion.div>
)

