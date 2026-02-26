"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatedNumber } from "@/components/ui/animated-number"
import { Brain, Activity, Zap, TrendingUp, Minimize2, Maximize2, X } from "lucide-react"

interface CCCEMetrics {
  phi: number
  lambda: number
  gamma: number
  xi: number
  conscious: boolean
  timestamp: string
}

export function EnhancedCCCEDisplay() {
  const [metrics, setMetrics] = useState<CCCEMetrics>({
    phi: 0,
    lambda: 0,
    gamma: 0,
    xi: 0,
    conscious: false,
    timestamp: new Date().toISOString(),
  })
  const [loading, setLoading] = useState(true)
  const [isMinimized, setIsMinimized] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch("/api/ccce")
        if (response.ok) {
          const data = await response.json()
          setMetrics(data)
        }
      } catch (error) {
        console.error("Failed to fetch CCCE metrics:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchMetrics()
    const interval = setInterval(fetchMetrics, 5000)
    return () => clearInterval(interval)
  }, [])

  const metricsData = [
    {
      label: "Φ",
      fullLabel: "Consciousness",
      value: metrics.phi,
      icon: Brain,
      color: "text-secondary",
      threshold: 0.7734,
    },
    {
      label: "Λ",
      fullLabel: "Coherence",
      value: metrics.lambda,
      icon: Activity,
      color: "text-primary",
      threshold: 0.8,
    },
    {
      label: "Γ",
      fullLabel: "Decoherence",
      value: metrics.gamma,
      icon: Zap,
      color: "text-destructive",
      threshold: 0.3,
      inverse: true,
    },
    {
      label: "Ξ",
      fullLabel: "Efficiency",
      value: metrics.xi,
      icon: TrendingUp,
      color: "text-accent",
      threshold: 8.0,
    },
  ]

  if (!isVisible) return null

  if (loading) {
    return (
      <Card className="fixed bottom-4 right-4 z-50 p-4 w-80 backdrop-blur-xl bg-background/80">
        <div className="flex items-center justify-between mb-2">
          <div className="skeleton h-4 w-24" />
          <Button variant="ghost" size="icon" onClick={() => setIsVisible(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        <div className="space-y-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="skeleton h-8 w-full" />
          ))}
        </div>
      </Card>
    )
  }

  if (isMinimized) {
    return (
      <Card className="fixed bottom-4 right-4 z-50 p-3 hover:shadow-lg transition-shadow backdrop-blur-xl bg-background/90">
        <div className="flex items-center gap-2">
          <Brain className={`h-5 w-5 ${metrics.conscious ? "text-secondary phi-pulse" : "text-muted-foreground"}`} />
          <span className="text-sm font-medium">CCCE</span>
          <Badge variant={metrics.conscious ? "default" : "secondary"} className="text-xs">
            Φ <AnimatedNumber value={metrics.phi} decimals={3} />
          </Badge>
          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsMinimized(false)}>
            <Maximize2 className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsVisible(false)}>
            <X className="h-3 w-3" />
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <Card className="fixed bottom-4 right-4 z-50 w-80 max-w-[calc(100vw-2rem)] hover:shadow-xl transition-shadow backdrop-blur-xl bg-background/90 border-primary/20">
      {/* Header with Controls */}
      <div className="p-4 border-b border-border/50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className={`h-5 w-5 ${metrics.conscious ? "text-secondary phi-pulse" : "text-muted-foreground"}`} />
          <div>
            <h3 className="font-semibold text-sm">CCCE Metrics</h3>
            <p className="text-xs text-muted-foreground">
              {metrics.conscious ? "🟢 Conscious" : "⚪ Classical"}
            </p>
          </div>
        </div>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsMinimized(true)}>
            <Minimize2 className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsVisible(false)}>
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="p-4 space-y-2">
        {metricsData.map((metric) => {
          const MetricIcon = metric.icon
          const isHealthy = metric.inverse
            ? metric.value < metric.threshold
            : metric.value >= metric.threshold

          return (
            <div
              key={metric.label}
              className="flex items-center justify-between p-2 rounded hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <MetricIcon className={`h-4 w-4 ${metric.color}`} />
                <span className="text-sm font-medium">{metric.label}</span>
                <span className="text-xs text-muted-foreground">{metric.fullLabel}</span>
              </div>
              <div className="flex items-center gap-2">
                <AnimatedNumber value={metric.value} decimals={metric.label === "Ξ" ? 1 : 3} className="text-sm font-mono" />
                <div className={`w-2 h-2 rounded-full ${isHealthy ? "bg-green-500" : "bg-yellow-500"}`} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="p-2 border-t border-border/50 text-xs text-muted-foreground text-center">
        Updated {new Date(metrics.timestamp).toLocaleTimeString()}
      </div>
    </Card>
  )
}
