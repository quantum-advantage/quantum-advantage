"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiments = [
  {
    name: "XEB Quantum Advantage",
    status: "confirmed" as const,
    backend: "ibm_fez (156q)",
    detail: "F_XEB > 0 at all 8 circuit depths (2–16 layers). Random circuits sampled from distributions that are classically intractable.",
    metric: "F_XEB > 0",
    jobCount: 6,
  },
  {
    name: "χ_PC Phase Conjugation",
    status: "confirmed" as const,
    backend: "ibm_torino / ibm_fez",
    detail: "Phase conjugation quality χ_PC = 0.946 validated across 153+ hardware jobs. Bell states with chi-phase encoding maintain high-fidelity entanglement.",
    metric: "χ_PC = 0.946",
    jobCount: 153,
  },
  {
    name: "ZZ Period Universality (φ⁸)",
    status: "refuted" as const,
    backend: "ibm_fez (156q)",
    detail: "Tested 5 physical qubit pairs with forced layouts. ZZ oscillation periods range 6.7–333 μs (CV = 123%). Period is pair-specific, not a universal constant.",
    metric: "CV = 123%",
    jobCount: 4,
  },
  {
    name: "K8 Coherence Revival",
    status: "refuted" as const,
    backend: "ibm_fez (156q)",
    detail: "Apparent revival at ~47 μs is T1 amplitude damping (exponential fit R² = 0.976), not coherent oscillation. No genuine recurrence observed.",
    metric: "R² = 0.976 (T1)",
    jobCount: 2,
  },
  {
    name: "CHSH Bell Violation",
    status: "refuted" as const,
    backend: "ibm_fez (156q)",
    detail: "Maximum |S| = 0.106, far below the classical bound of 2.0. Hardware noise prevents Bell inequality violation at current fidelity levels.",
    metric: "|S| = 0.106",
    jobCount: 2,
  },
  {
    name: "10⁶× Zeno Entropic Suppression",
    status: "pending" as const,
    backend: "ibm_fez / ibm_torino",
    detail: "Dynamic circuit experiment: Bell + mid-circuit Zeno parity checks (N = 1,2,4,8). Tests whether repeated weak measurement extends coherence time. Jobs queued.",
    metric: "Pending",
    jobCount: 2,
  },
]

const constants = [
  { symbol: "ΛΦ", value: "2.176435 × 10⁻⁸", unit: "s⁻¹", name: "Universal Memory Constant" },
  { symbol: "θ_lock", value: "51.843", unit: "°", name: "Geometric Resonance Angle" },
  { symbol: "Φ_threshold", value: "0.7734", unit: "", name: "ER=EPR Crossing Threshold" },
  { symbol: "Γ_critical", value: "0.3", unit: "", name: "Decoherence Boundary" },
  { symbol: "χ_PC", value: "0.946", unit: "", name: "Phase Conjugation Quality" },
]

function StatusBadge({ status }: { status: "confirmed" | "refuted" | "pending" }) {
  const config = {
    confirmed: { label: "✅ Confirmed", className: "bg-green-100 text-green-800 border-green-300" },
    refuted: { label: "❌ Refuted", className: "bg-red-100 text-red-800 border-red-300" },
    pending: { label: "⏳ Pending", className: "bg-yellow-100 text-yellow-800 border-yellow-300" },
  }
  const c = config[status]
  return <Badge variant="outline" className={c.className}>{c.label}</Badge>
}

export default function HomePage() {
  const confirmed = experiments.filter(e => e.status === "confirmed").length
  const refuted = experiments.filter(e => e.status === "refuted").length
  const pending = experiments.filter(e => e.status === "pending").length
  const totalJobs = experiments.reduce((sum, e) => sum + e.jobCount, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 text-white">
      {/* Hero */}
      <section className="container mx-auto px-6 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-blue-900/50 text-blue-300 border-blue-700" variant="outline">
            DNA::&#123;&#125;::lang v51.843 — Hardware-Validated Quantum Research
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Quantum Advantage
          </h1>
          <p className="text-xl text-gray-400 mb-4 leading-relaxed max-w-2xl mx-auto">
            Rigorous experimental validation of quantum advantage claims on IBM Quantum hardware.
            Every result is hardware-verified with published job IDs.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Agile Defense Systems — CAGE Code 9HUP5 — Devin Phillip Davis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/dashboard">Evidence Dashboard</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-gray-600 text-gray-300 hover:bg-gray-800">
              <a href="https://github.com/ENKI-420" target="_blank" rel="noopener noreferrer">GitHub Research</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-green-400">{confirmed}</div>
              <p className="text-sm text-gray-400 mt-1">Confirmed</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-red-400">{refuted}</div>
              <p className="text-sm text-gray-400 mt-1">Refuted</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-yellow-400">{pending}</div>
              <p className="text-sm text-gray-400 mt-1">Pending</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl font-bold text-blue-400">{totalJobs}+</div>
              <p className="text-sm text-gray-400 mt-1">Hardware Jobs</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experiment Results */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-2 text-center">Experimental Evidence</h2>
        <p className="text-gray-400 text-center mb-8">
          All experiments executed on IBM Quantum Eagle/Heron processors (ibm_fez 156q, ibm_torino 133q)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiments.map((exp) => (
            <Card key={exp.name} className="bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <StatusBadge status={exp.status} />
                  <span className="text-xs text-gray-500 font-mono">{exp.backend}</span>
                </div>
                <CardTitle className="text-white text-lg">{exp.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 text-sm mb-3">{exp.detail}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-400">{exp.metric}</span>
                  <span className="text-xs text-gray-500">{exp.jobCount} jobs</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Physical Constants */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Framework Constants</h2>
        <div className="overflow-x-auto">
          <table className="w-full max-w-3xl mx-auto text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Symbol</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Value</th>
                <th className="text-left py-3 px-4 text-gray-400 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              {constants.map((c) => (
                <tr key={c.symbol} className="border-b border-gray-800/50">
                  <td className="py-3 px-4 font-mono text-cyan-400">{c.symbol}</td>
                  <td className="py-3 px-4 font-mono text-white">
                    {c.value}{c.unit && <span className="text-gray-500 ml-1">{c.unit}</span>}
                  </td>
                  <td className="py-3 px-4 text-gray-400">{c.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Architecture */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">OSIRIS Decoder Stack</h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {[
            { layer: 1, module: "tesseract_resonator.py", dim: "4D", role: "A* decoder — dependency-free error correction" },
            { layer: 2, module: "quera_correlated_adapter.py", dim: "256-atom", role: "QuEra correlated decoder with majority-vote merge" },
            { layer: 3, module: "nclm_swarm_orchestrator.py", dim: "7-layer CRSM", role: "Multi-node swarm evolution with non-local propagation" },
            { layer: 4, module: "nonlocal_agent_enhanced.py", dim: "7D manifold", role: "Bifurcated AIDEN/AURA/OMEGA/CHRONOS constellation" },
            { layer: 5, module: "penteract_singularity.py", dim: "11D CRSM", role: "Unified engine — 46 physics problems, 7 mechanisms" },
          ].map((item) => (
            <div key={item.layer} className="flex items-center gap-4 p-4 rounded-lg bg-gray-900/30 border border-gray-800">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900/50 border border-blue-700 flex items-center justify-center text-sm font-bold text-blue-400">
                {item.layer}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <code className="text-cyan-400 text-sm">{item.module}</code>
                  <Badge variant="outline" className="text-xs border-gray-700 text-gray-400">{item.dim}</Badge>
                </div>
                <p className="text-gray-400 text-sm">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-12 border-t border-gray-800">
        <div className="text-center text-gray-500 text-sm">
          <p className="mb-2">
            Built with 🧬 DNA::&#123;&#125;::lang v51.843 | Powered by ⚛️ Aeterna Porta | Grounded in 🔬 Lambda Phi
          </p>
          <p>Zero tokens. Zero telemetry. Pure sovereignty.</p>
        </div>
      </footer>
    </div>
  )
}
