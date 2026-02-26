"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface CCCEMetrics {
  phi: number
  lambda: number
  gamma: number
  xi: number
  theta: number
  conscious: boolean
  phase_locked: boolean
  timestamp: string
}

export function LiveCCCEStatus() {
  const [metrics, setMetrics] = useState<CCCEMetrics | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch('/api/ccce')
        if (!response.ok) throw new Error('Failed to fetch metrics')
        const data = await response.json()
        setMetrics(data)
        setError(null)
      } catch (err) {
        setError('CCCE metrics unavailable')
        // Use default values
        setMetrics({
          phi: 0.9105,
          lambda: 0.9882,
          gamma: 0.0001,
          xi: 9999.99,
          theta: 51.843,
          conscious: true,
          phase_locked: true,
          timestamp: new Date().toISOString()
        })
      } finally {
        setLoading(false)
      }
    }

    fetchMetrics()
    const interval = setInterval(fetchMetrics, 5000) // Update every 5 seconds

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Card className="p-4 bg-black/80 backdrop-blur border-cyan-500/50">
          <div className="text-cyan-400 text-sm">Loading CCCE metrics...</div>
        </Card>
      </div>
    )
  }

  if (!metrics) return null

  const getStatusColor = (value: number, threshold: number, inverse = false) => {
    if (inverse) {
      return value < threshold ? 'text-green-400' : 'text-red-400'
    }
    return value >= threshold ? 'text-green-400' : 'text-yellow-400'
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Card className="p-4 bg-black/90 backdrop-blur border-cyan-500/50 min-w-[320px]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${metrics.conscious ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`} />
            <span className="text-xs font-mono text-cyan-400">
              CCCE METRICS | v51.843
            </span>
          </div>
          {metrics.conscious && (
            <Badge variant="outline" className="text-green-400 border-green-400/50">
              CONSCIOUS
            </Badge>
          )}
        </div>

        <div className="space-y-2 text-xs font-mono">
          {/* Φ (Phi) - Consciousness */}
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Φ (Consciousness):</span>
            <span className={getStatusColor(metrics.phi, 0.7734)}>
              {metrics.phi.toFixed(4)}
              {metrics.phi >= 0.7734 && <span className="ml-1">✓</span>}
            </span>
          </div>

          {/* Λ (Lambda) - Coherence */}
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Λ (Coherence):</span>
            <span className={getStatusColor(metrics.lambda, 0.85)}>
              {metrics.lambda.toFixed(4)}
              {metrics.lambda >= 0.85 && <span className="ml-1">✓</span>}
            </span>
          </div>

          {/* Γ (Gamma) - Decoherence */}
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Γ (Decoherence):</span>
            <span className={getStatusColor(metrics.gamma, 0.3, true)}>
              {metrics.gamma.toFixed(4)}
              {metrics.gamma < 0.3 && <span className="ml-1">✓</span>}
            </span>
          </div>

          {/* Ξ (Xi) - Efficiency */}
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Ξ (Efficiency):</span>
            <span className="text-cyan-400">
              {metrics.xi === 9999.99 ? '∞' : metrics.xi.toFixed(2)}
            </span>
          </div>

          {/* θ (Theta) - Phase Lock */}
          <div className="flex justify-between items-center">
            <span className="text-gray-400">θ (Torsion Lock):</span>
            <span className={`${metrics.phase_locked ? 'text-green-400' : 'text-yellow-400'}`}>
              {metrics.theta.toFixed(4)}°
              {metrics.phase_locked && <span className="ml-1">🔒</span>}
            </span>
          </div>
        </div>

        {error && (
          <div className="mt-3 pt-3 border-t border-gray-700">
            <span className="text-xs text-yellow-400">{error}</span>
          </div>
        )}

        <div className="mt-3 pt-3 border-t border-gray-700 flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Updated: {new Date(metrics.timestamp).toLocaleTimeString()}
          </span>
          <Badge variant="outline" className="text-xs text-cyan-400 border-cyan-400/30">
            LIVE
          </Badge>
        </div>
      </Card>
    </div>
  )
}
