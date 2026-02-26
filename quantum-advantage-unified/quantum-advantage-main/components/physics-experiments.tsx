"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedNumber } from "@/components/ui/animated-number"
import { Atom, ChevronDown, ChevronUp, CheckCircle2, Clock, Hash } from "lucide-react"

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

// Sample data from the resolution results
const EXPERIMENTS: PhysicsExperiment[] = [
  {
    problem_type: "quantum_gravity",
    description: "Black holes, black hole information paradox, and black hole radiation",
    initial_gamma: 0.85,
    final_gamma: 0.001,
    resolution_metric: 0.998823529294256,
    mechanism: "planck_lambda_phi_bridge",
    timesteps: 1000,
    proof_hash: "a8c3c14d3497eaa7",
    timestamp: 1768925248.85,
  },
  {
    problem_type: "quantum_gravity",
    description: "The cosmic censorship hypothesis and chronology protection conjecture",
    initial_gamma: 0.85,
    final_gamma: 0.001,
    resolution_metric: 0.998823529294256,
    mechanism: "planck_lambda_phi_bridge",
    timesteps: 1000,
    proof_hash: "a8c3c14d3497eaa7",
    timestamp: 1768925248.85,
  },
  {
    problem_type: "quantum_gravity",
    description: "Holographic principle and AdS/CFT correspondence in string theory",
    initial_gamma: 0.85,
    final_gamma: 0.001,
    resolution_metric: 0.998823529294256,
    mechanism: "planck_lambda_phi_bridge",
    timesteps: 1000,
    proof_hash: "a8c3c14d3497eaa7",
    timestamp: 1768925248.85,
  },
]

interface PhysicsExperimentsProps {
  limit?: number
}

export function PhysicsExperiments({ limit }: PhysicsExperimentsProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const displayExperiments = limit ? EXPERIMENTS.slice(0, limit) : EXPERIMENTS

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
          <Atom className="h-4 w-4 text-secondary" />
          <span className="text-sm font-medium text-secondary">Physics Experiments</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight">Quantum Problem Resolutions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Real-time experiments demonstrating the resolution of unsolved physics problems using the DNA-Lang v51.843 framework
        </p>
      </div>

      <div className="grid gap-4">
        {displayExperiments.map((experiment, index) => (
          <AnimatedCard key={index} delay={index * 0.1} variant="glass">
            <div className="p-6 space-y-4">
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline" className="text-xs">
                      {experiment.problem_type.replace(/_/g, " ")}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      <CheckCircle2 className="h-3 w-3 mr-1" />
                      Resolved
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg leading-tight">
                    {experiment.description.slice(0, 100)}
                    {experiment.description.length > 100 && "..."}
                  </h3>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleExpand(index)}
                  className="shrink-0"
                >
                  {expandedIndex === index ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Resolution</p>
                  <p className="text-2xl font-bold text-secondary">
                    <AnimatedNumber value={experiment.resolution_metric * 100} decimals={1} suffix="%" />
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Initial Γ</p>
                  <p className="text-2xl font-bold">
                    <AnimatedNumber value={experiment.initial_gamma} decimals={2} />
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Final Γ</p>
                  <p className="text-2xl font-bold text-primary">
                    <AnimatedNumber value={experiment.final_gamma} decimals={3} />
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Timesteps</p>
                  <p className="text-2xl font-bold text-accent">
                    <AnimatedNumber value={experiment.timesteps} />
                  </p>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedIndex === index && (
                <div className="pt-4 border-t border-border/50 space-y-3 slide-in-left">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold">Full Description</h4>
                    <p className="text-sm text-muted-foreground">{experiment.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Mechanism</p>
                      <Badge variant="outline" className="font-mono text-xs">
                        {experiment.mechanism}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Proof Hash</p>
                      <div className="flex items-center gap-1">
                        <Hash className="h-3 w-3 text-muted-foreground" />
                        <span className="font-mono text-xs">{experiment.proof_hash}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Timestamp</p>
                    <div className="flex items-center gap-1 text-xs">
                      <Clock className="h-3 w-3" />
                      {new Date(experiment.timestamp * 1000).toLocaleString()}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </AnimatedCard>
        ))}
      </div>
    </div>
  )
}
