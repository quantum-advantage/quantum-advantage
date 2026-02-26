"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"

interface AnimatedNumberProps {
  value: number
  duration?: number
  decimals?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function AnimatedNumber({
  value,
  duration = 2000,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedNumberProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true

    let startTime: number | null = null
    const startValue = 0
    const endValue = value

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Ease-out cubic function for smooth deceleration
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentCount = startValue + (endValue - startValue) * easeOutCubic

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, value, duration])

  const formattedValue = count.toFixed(decimals)

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formattedValue}
      {suffix}
    </span>
  )
}
