"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, GitCompare, TrendingUp, TrendingDown } from "lucide-react"
import { AnimatedNumber } from "@/components/ui/animated-number"

interface PhysicsExperiment {
  problem_type: string
  description: string
  initial_gamma: number
  final_gamma: number
  resolution_metric: number
  mechanism: string
  timesteps: number
  proof_hash: string
  timestamp: number
}

interface ExperimentComparisonProps {
  experiments: PhysicsExperiment[]
  onClose: () => void
}

export function ExperimentComparison({ experiments, onClose }: ExperimentComparisonProps) {
  if (experiments.length === 0) return null

  const calculateDifference = (a: number, b: number) => {
    const diff = ((b - a) / a) * 100
    return { diff, isPositive: diff > 0 }
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <GitCompare className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold">Experiment Comparison</h2>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiments.map((exp, index) => (
            <Card key={index} className="p-4 space-y-4">
              {/* Header */}
              <div className="space-y-2">
                <Badge variant="outline" className="text-xs">
                  {exp.problem_type.replace(/_/g, " ")}
                </Badge>
                <h3 className="font-semibold text-sm leading-tight">{exp.description}</h3>
              </div>

              {/* Metrics */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Resolution</span>
                  <span className="text-lg font-bold text-secondary">
                    <AnimatedNumber
                      value={exp.resolution_metric * 100}
                      decimals={2}
                      suffix="%"
                    />
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Γ Reduction</span>
                  <span className="text-lg font-bold text-primary">
                    <AnimatedNumber
                      value={exp.initial_gamma - exp.final_gamma}
                      decimals={3}
                    />
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Timesteps</span>
                  <span className="text-lg font-bold text-accent">
                    <AnimatedNumber value={exp.timesteps} />
                  </span>
                </div>

                <div className="pt-2 border-t border-border/50">
                  <p className="text-xs text-muted-foreground mb-1">Mechanism</p>
                  <Badge variant="outline" className="font-mono text-xs">
                    {exp.mechanism}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Comparison Insights */}
        {experiments.length >= 2 && (
          <div className="mt-6 space-y-4">
            <h3 className="font-semibold text-lg">Comparison Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Resolution Comparison */}
              <Card className="p-4">
                <p className="text-sm text-muted-foreground mb-2">Resolution Range</p>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Highest:</span>
                    <span className="font-bold text-secondary">
                      {(
                        Math.max(...experiments.map((e) => e.resolution_metric)) * 100
                      ).toFixed(2)}
                      %
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Lowest:</span>
                    <span className="font-bold">
                      {(
                        Math.min(...experiments.map((e) => e.resolution_metric)) * 100
                      ).toFixed(2)}
                      %
                    </span>
                  </div>
                </div>
              </Card>

              {/* Gamma Comparison */}
              <Card className="p-4">
                <p className="text-sm text-muted-foreground mb-2">Γ Reduction Range</p>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Best:</span>
                    <span className="font-bold text-primary">
                      {Math.max(
                        ...experiments.map((e) => e.initial_gamma - e.final_gamma)
                      ).toFixed(3)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Worst:</span>
                    <span className="font-bold">
                      {Math.min(
                        ...experiments.map((e) => e.initial_gamma - e.final_gamma)
                      ).toFixed(3)}
                    </span>
                  </div>
                </div>
              </Card>

              {/* Timesteps Comparison */}
              <Card className="p-4">
                <p className="text-sm text-muted-foreground mb-2">Computational Cost</p>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Most:</span>
                    <span className="font-bold text-accent">
                      {Math.max(...experiments.map((e) => e.timesteps)).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Least:</span>
                    <span className="font-bold">
                      {Math.min(...experiments.map((e) => e.timesteps)).toLocaleString()}
                    </span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )}
      </Card>
    </div>
  )
}
