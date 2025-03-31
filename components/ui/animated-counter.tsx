"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
}

export function AnimatedCounter({ end, duration = 2000, suffix = "", prefix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(count)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
      const startTime = Date.now()
      const startValue = 0

      const updateCounter = () => {
        const now = Date.now()
        const progress = Math.min((now - startTime) / duration, 1)

        const currentCount = Math.round(startValue + (end - startValue) * progress)
        setCount(currentCount)
        countRef.current = currentCount

        if (progress < 1) {
          requestAnimationFrame(updateCounter)
        }
      }

      requestAnimationFrame(updateCounter)
    }
  }, [isInView, end, duration, hasAnimated])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

