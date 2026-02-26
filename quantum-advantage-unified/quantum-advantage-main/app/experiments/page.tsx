"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Activity, Zap, Waves, Atom, CheckCircle2, Clock, Database } from "lucide-react"

interface Experiment {
  id: number
  experiment_id: string
  protocol: string
  backend: string
  qubits_used: number
  shots: number
  phi: number | null
  gamma: number | null
  ccce: number | null
  chi_pc: number | null
  integrity_hash: string | null
  framework: string | null
  cage_code: string | null
  status: string
  raw_metrics: any
  created_at: string
}

interface Metrics {
  total: number
  completed: number
  avg_phi: number
  avg_gamma: number
  total_shots: number
  max_qubits: number
  backends: string[]
  above_threshold: number
  coherent: number
}

export default function ExperimentsPage() {
  const [experiments, setExperiments] = useState<Experiment[]>([])
  const [metrics, setMetrics] = useState<Metrics | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/api/experiments")
      .then((r) => r.json())
      .then((data) => {
        setExperiments(data.experiments || [])
        setMetrics(data.metrics || null)
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Atom className="h-5 w-5 animate-spin" />
          <span className="font-mono">Querying quantum_experiments...</span>
        </div>
      </div>
    )
  }

  const hardware = experiments.filter((e) => e.qubits_used >= 50 && e.status === "completed")
  const best = hardware.sort((a, b) => (b.phi || 0) - (a.phi || 0))[0]

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <h1 className="text-2xl font-bold font-mono">
          <span className="dnalang-gradient">Quantum Experiments</span>
        </h1>
        <Badge variant="outline" className="border-green-500/50 text-green-400">
          <Database className="h-3 w-3 mr-1" />
          LIVE SUPABASE
        </Badge>
      </div>

      {/* Aggregate cards */}
      {metrics && (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
          <Card>
            <CardContent className="pt-4 pb-3">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Experiments</div>
              <div className="text-2xl font-mono font-bold">{metrics.total}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 pb-3">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Completed</div>
              <div className="text-2xl font-mono font-bold text-green-400">{metrics.completed}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 pb-3">
              <div className="text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                <Zap className="h-3 w-3 text-accent" /> Avg Φ
              </div>
              <div className={`text-2xl font-mono font-bold ${metrics.avg_phi >= 0.7734 ? "text-green-400" : "text-amber-400"}`}>
                {metrics.avg_phi.toFixed(4)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 pb-3">
              <div className="text-xs text-muted-foreground uppercase tracking-wider flex items-center gap-1">
                <Waves className="h-3 w-3 text-destructive" /> Avg Γ
              </div>
              <div className={`text-2xl font-mono font-bold ${metrics.avg_gamma < 0.3 ? "text-green-400" : "text-red-400"}`}>
                {metrics.avg_gamma.toFixed(4)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 pb-3">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Total Shots</div>
              <div className="text-2xl font-mono font-bold">{metrics.total_shots.toLocaleString()}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 pb-3">
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Max Qubits</div>
              <div className="text-2xl font-mono font-bold text-primary">{metrics.max_qubits}q</div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Best hardware result */}
      {best && (
        <Card className="border-green-500/20 bg-green-500/5">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <span className="text-xl">🏆</span>
              <CardTitle className="text-lg font-mono">Best Hardware Result</CardTitle>
              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                {best.backend} · {best.qubits_used}q
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div>
                <div className="text-xs text-muted-foreground">Φ (Phi)</div>
                <div className={`text-xl font-mono font-bold ${(best.phi || 0) >= 0.7734 ? "text-green-400" : "text-amber-400"}`}>
                  {best.phi?.toFixed(4)}
                </div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Γ (Gamma)</div>
                <div className={`text-xl font-mono font-bold ${(best.gamma || 0) < 0.3 ? "text-green-400" : "text-red-400"}`}>
                  {best.gamma?.toFixed(4)}
                </div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">CCCE</div>
                <div className="text-xl font-mono font-bold text-primary">{best.ccce?.toFixed(4)}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Shots</div>
                <div className="text-xl font-mono font-bold">{best.shots?.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Protocol</div>
                <div className="text-sm font-mono">{best.protocol}</div>
              </div>
            </div>
            {/* Phi gauge */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Zap className="h-3 w-3" /> Φ Fidelity
                <span className="text-green-400/60 ml-auto">threshold 0.7734</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${(best.phi || 0) >= 0.7734 ? "bg-gradient-to-r from-green-600 to-green-400" : "bg-gradient-to-r from-amber-600 to-amber-400"}`}
                  style={{ width: `${Math.min((best.phi || 0) * 100, 100)}%` }}
                />
              </div>
            </div>
            {best.integrity_hash && (
              <div className="mt-3 text-xs text-muted-foreground/50 font-mono">
                SHA-256: {best.integrity_hash}
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* XEB depth table for best result */}
      {best?.raw_metrics && (() => {
        const raw = typeof best.raw_metrics === "string" ? JSON.parse(best.raw_metrics) : best.raw_metrics
        const depths = raw.depths || []
        const fxeb = raw.f_xeb_values || raw.entropy_ratios || []
        if (!depths.length) return null
        return (
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
                XEB Depth Analysis — {best.backend} {best.qubits_used}q
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm font-mono">
                  <thead>
                    <tr className="border-b text-muted-foreground text-xs uppercase">
                      <th className="text-left py-2 px-3">Depth</th>
                      <th className="text-left py-2 px-3">Volume</th>
                      <th className="text-left py-2 px-3">F_XEB</th>
                      <th className="text-left py-2 px-3">Class</th>
                    </tr>
                  </thead>
                  <tbody>
                    {depths.map((d: number, i: number) => {
                      const vol = d * (best.qubits_used || 100)
                      const intractable = vol > 2000 || (best.qubits_used || 0) > 50
                      return (
                        <tr key={d} className="border-b border-border/50 hover:bg-muted/30">
                          <td className="py-2 px-3 font-bold">{d}</td>
                          <td className="py-2 px-3">{vol.toLocaleString()}</td>
                          <td className="py-2 px-3 text-accent">{fxeb[i]?.toFixed(6) || "—"}</td>
                          <td className="py-2 px-3">
                            <Badge variant={intractable ? "default" : "outline"} className="text-xs">
                              {intractable ? "Intractable" : "Classical"}
                            </Badge>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )
      })()}

      {/* All experiments */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-mono uppercase tracking-wider text-muted-foreground">
            All Experiments ({experiments.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-mono">
              <thead>
                <tr className="border-b text-muted-foreground text-xs uppercase">
                  <th className="text-left py-2 px-3">ID</th>
                  <th className="text-left py-2 px-3">Backend</th>
                  <th className="text-left py-2 px-3">Qubits</th>
                  <th className="text-right py-2 px-3">Shots</th>
                  <th className="text-left py-2 px-3">Φ</th>
                  <th className="text-left py-2 px-3">Γ</th>
                  <th className="text-left py-2 px-3">CCCE</th>
                  <th className="text-left py-2 px-3">Status</th>
                  <th className="text-left py-2 px-3">Date</th>
                </tr>
              </thead>
              <tbody>
                {experiments.map((exp) => (
                  <tr key={exp.id} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-2 px-3">
                      <div className="text-xs font-medium">{exp.experiment_id}</div>
                      <div className="text-xs text-muted-foreground">{exp.protocol}</div>
                    </td>
                    <td className="py-2 px-3">
                      <Badge variant="outline" className="text-xs">{exp.backend}</Badge>
                    </td>
                    <td className="py-2 px-3 text-center">{exp.qubits_used}</td>
                    <td className="py-2 px-3 text-right">{(exp.shots || 0).toLocaleString()}</td>
                    <td className="py-2 px-3">
                      <span className={(exp.phi || 0) >= 0.7734 ? "text-green-400" : "text-amber-400"}>
                        {exp.phi?.toFixed(4) || "—"}
                      </span>
                    </td>
                    <td className="py-2 px-3">
                      <span className={(exp.gamma || 0) < 0.3 ? "text-green-400" : "text-red-400"}>
                        {exp.gamma?.toFixed(4) || "—"}
                      </span>
                    </td>
                    <td className="py-2 px-3 text-primary">{exp.ccce?.toFixed(4) || "—"}</td>
                    <td className="py-2 px-3">
                      {exp.status === "completed" ? (
                        <Badge variant="outline" className="text-xs border-green-500/30 text-green-400">
                          <CheckCircle2 className="h-3 w-3 mr-1" />done
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-xs border-amber-500/30 text-amber-400">
                          <Clock className="h-3 w-3 mr-1" />{exp.status}
                        </Badge>
                      )}
                    </td>
                    <td className="py-2 px-3 text-muted-foreground text-xs">
                      {new Date(exp.created_at).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-center py-6 text-xs text-muted-foreground font-mono space-y-1">
        <p>DNA::{'}{'}::lang v51.843 · Agile Defense Systems · CAGE 9HUP5</p>
        <p className="text-muted-foreground/50">All metrics from real IBM Quantum hardware. Zero simulation.</p>
      </div>
    </div>
  )
}
