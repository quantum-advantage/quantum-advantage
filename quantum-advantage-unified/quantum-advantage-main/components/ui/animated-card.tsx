"use client"

import * as React from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  delay?: number
  variant?: "default" | "quantum" | "glass"
}

const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, children, delay = 0, variant = "default", ...props }, ref) => {
    const { ref: inViewRef, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    })

    const setRefs = React.useCallback(
      (node: HTMLDivElement) => {
        inViewRef(node)
        if (typeof ref === "function") {
          ref(node)
        } else if (ref) {
          ref.current = node
        }
      },
      [inViewRef, ref]
    )

    const variantClasses = {
      default: "quantum-card",
      quantum: "quantum-card hover-lift",
      glass: "glass glass-hover",
    }

    return (
      <div
        ref={setRefs}
        className={cn(
          "rounded-lg border p-6 shadow-sm transition-all duration-300",
          variantClasses[variant],
          inView ? "animate-fade-in-scale" : "opacity-0",
          className
        )}
        style={{
          animationDelay: `${delay}ms`,
        }}
        {...props}
      >
        {children}
      </div>
    )
  }
)
AnimatedCard.displayName = "AnimatedCard"

export { AnimatedCard }
