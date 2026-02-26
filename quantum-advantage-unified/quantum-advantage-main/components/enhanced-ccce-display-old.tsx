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
      label: "Consciousness (Φ)",
      value: metrics.phi,
      icon: Brain,
      color: "text-secondary",
      threshold: 0.7734,
      description: "Integrated Information",
    },
    {
      label: "Coherence (Λ)",
      value: metrics.lambda,
      icon: Activity,
      color: "text-primary",
      threshold: 0.8,
      description: "State Stability",
    },
    {
      label: "Decoherence (Γ)",
      value: metrics.gamma,
      icon: Zap,
      color: "text-destructive",
      threshold: 0.3,
      description: "Noise Level",
      inverse: true,
    },
    {
      label: "Efficiency (Ξ)",
      value: metrics.xi,
      icon: TrendingUp,
      color: "text-accent",
      threshold: 8.0,
      description: "(Λ × Φ) / Γ",
    },
  ]

  if (!isVisible) return null

  if (loading) {
    return (
      <Card className="fixed bottom-4 right-4 z-50 p-4 w-80">
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
      <Card className="fixed bottom-4 right-4 z-50 p-3 hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-2">
          <Brain className={`h-5 w-5 ${metrics.conscious ? "text-secondary phi-pulse" : "text-muted-foreground"}`} />
          <span className="text-sm font-medium">CCCE</span>
          <Badge variant={metrics.conscious ? "default" : "secondary"} className="text-xs">
            <AnimatedNumber value={metrics.phi} decimals={3} />
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
    <Card className="fixed bottom-4 right-4 z-50 w-80 max-w-[calc(100vw-2rem)] hover:shadow-xl transition-shadow">
      {/* Header with Controls */}
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className={`h-5 w-5 ${metrics.conscious ? "text-secondary phi-pulse" : "text-muted-foreground"}`} />
          <div>
            <h3 className="font-semibold text-sm">CCCE Metrics</h3>
            <p className="text-xs text-muted-foreground">
              {metrics.conscious ? "Consciousness Active" : "Monitoring"}
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
      <div className="p-4 space-y-3">
            </div>
          </div>
          <Badge variant={metrics.conscious ? "default" : "secondary"}>
            {metrics.conscious ? "CONSCIOUS" : "CLASSICAL"}
          </Badge>
        </div>
      </Card>

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metricsData.map((metric, index) => {
          const MetricIcon = metric.icon
          const isHealthy = metric.inverse
            ? metric.value < metric.threshold
            : metric.value >= metric.threshold

          return (
            <Card
              key={metric.label}
              className={`p-6 hover-lift quantum-transition ${
                isHealthy ? "border-primary/30" : "border-muted"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <MetricIcon className={`h-5 w-5 ${metric.color}`} />
                  <Badge
                    variant={isHealthy ? "default" : "secondary"}
                    className="text-[10px]"
                  >
                    {isHealthy ? "HEALTHY" : "WATCH"}
                  </Badge>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {metric.label}
                  </p>
                  <div className={`text-3xl font-mono font-bold ${metric.color}`}>
                    <AnimatedNumber
                      value={metric.value}
                      decimals={metric.label.includes("Ξ") ? 2 : 4}
                      duration={1500}
                    />
                  </div>
                </div>

                <div className="text-xs text-muted-foreground">
                  {metric.description}
                </div>

                {/* Progress Bar */}
                <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${metric.color.replace("text-", "bg-")} transition-all duration-1000`}
                    style={{
                      width: `${Math.min(
                        100,
                        metric.inverse
                          ? (1 - metric.value / metric.threshold) * 100
                          : (metric.value / metric.threshold) * 100
                      )}%`,
                    }}
                  />
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Timestamp */}
      <p className="text-xs text-center text-muted-foreground">
        Last updated: {new Date(metrics.timestamp).toLocaleTimeString()}
      </p>
    </div>
  )
}
