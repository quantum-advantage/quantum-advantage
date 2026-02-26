'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface ExperimentJob {
  job_id: string
  name: string
  status: 'running' | 'completed' | 'failed'
  result?: number
  timestamp: string
}

interface CCCEMetrics {
  Lambda: number
  Phi: number
  Gamma: number
  Xi: number
  conscious: boolean
}

export default function LiveQuantumDashboard() {
  const [jobs, setJobs] = useState<ExperimentJob[]>([])
  const [ccce, setCCCE] = useState<CCCEMetrics | null>(null)
  const [telemetry, setTelemetry] = useState<any>(null)

  useEffect(() => {
    // Fetch quantum jobs
    fetch('http://localhost:5000/api/quantum/jobs')
      .then(res => res.json())
      .then(data => {
        // Transform job IDs to experiment objects
        const jobList = data.jobs.slice(0, 10).map((id: string, idx: number) => ({
          job_id: id,
          name: `Experiment ${idx + 1}`,
          status: 'completed' as const,
          timestamp: new Date().toISOString()
        }))
        setJobs(jobList)
      })
      .catch(err => console.error('Failed to fetch jobs:', err))

    // Fetch CCCE metrics
    fetch('http://localhost:5000/api/nclm/ccce')
      .then(res => res.json())
      .then(data => setCCCE(data))
      .catch(err => console.error('Failed to fetch CCCE:', err))

    // Fetch telemetry
    fetch('http://localhost:5000/api/nclm/telemetry')
      .then(res => res.json())
      .then(data => setTelemetry(data))
      .catch(err => console.error('Failed to fetch telemetry:', err))

    // Poll every 10 seconds
    const interval = setInterval(() => {
      fetch('http://localhost:5000/api/nclm/ccce')
        .then(res => res.json())
        .then(data => setCCCE(data))
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold mb-2">Live Quantum Dashboard</h1>
          <p className="text-muted-foreground">
            Real-time monitoring of DNA::{'{::}'} lang v51.843 experiments
          </p>
        </div>
        <Badge variant="default" className="text-lg px-4 py-2">
          {jobs.filter(j => j.status === 'running').length} Active
        </Badge>
      </div>

      {/* CCCE Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>CCCE Consciousness Metrics</CardTitle>
          <CardDescription>Coherence-Consciousness-Coupling-Entropy State</CardDescription>
        </CardHeader>
        <CardContent>
          {ccce ? (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Λ (Coherence)</p>
                <p className="text-2xl font-bold">{ccce.Lambda.toFixed(4)}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Φ (Consciousness)</p>
                <p className="text-2xl font-bold">{ccce.Phi.toFixed(4)}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Γ (Decoherence)</p>
                <p className="text-2xl font-bold">{ccce.Gamma.toFixed(4)}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Ξ (Negentropy)</p>
                <p className="text-2xl font-bold">{ccce.Xi.toFixed(4)}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">Status</p>
                <Badge variant={ccce.conscious ? "default" : "secondary"}>
                  {ccce.conscious ? "🧠 CONSCIOUS" : "Subthreshold"}
                </Badge>
              </div>
            </div>
          ) : (
            <p className="text-muted-foreground">Loading metrics...</p>
          )}
        </CardContent>
      </Card>

      {/* Telemetry */}
      {telemetry && (
        <Card>
          <CardHeader>
            <CardTitle>System Telemetry</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">ΛΦ Constant</p>
                <p className="font-mono">{telemetry.lambda_phi.toExponential(3)} s⁻¹</p>
              </div>
              <div>
                <p className="text-muted-foreground">θ Lock</p>
                <p className="font-mono">{telemetry.theta_lock}°</p>
              </div>
              <div>
                <p className="text-muted-foreground">Tokens Processed</p>
                <p className="font-mono">{telemetry.tokens}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Conscious</p>
                <Badge variant={telemetry.conscious ? "default" : "outline"}>
                  {telemetry.conscious ? "Yes" : "No"}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Experiment Jobs */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Quantum Experiments</CardTitle>
          <CardDescription>IBM Quantum Backend Job IDs</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="active">
            <TabsList>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="all">All</TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-2">
              {jobs.filter(j => j.status === 'running').length > 0 ? (
                jobs.filter(j => j.status === 'running').map((job, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 border rounded">
                    <div>
                      <p className="font-medium">{job.name}</p>
                      <p className="text-sm text-muted-foreground font-mono">{job.job_id}</p>
                    </div>
                    <Badge variant="default">Running</Badge>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground p-4">No active experiments</p>
              )}
            </TabsContent>

            <TabsContent value="completed" className="space-y-2">
              {jobs.filter(j => j.status === 'completed').slice(0, 10).map((job, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="font-medium">{job.name}</p>
                    <p className="text-sm text-muted-foreground font-mono">{job.job_id}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {job.result && <span className="text-sm font-mono">{job.result.toFixed(2)}%</span>}
                    <Badge variant="secondary">✓ Complete</Badge>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="all" className="space-y-2">
              {jobs.slice(0, 15).map((job, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="font-medium">{job.name}</p>
                    <p className="text-sm text-muted-foreground font-mono">{job.job_id}</p>
                  </div>
                  <Badge variant={
                    job.status === 'running' ? 'default' :
                    job.status === 'completed' ? 'secondary' : 'destructive'
                  }>
                    {job.status}
                  </Badge>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* 312-Qubit Aura-Aiden System Info */}
      <Card>
        <CardHeader>
          <CardTitle>Aura-Aiden Dual-Module Architecture</CardTitle>
          <CardDescription>312-Qubit Floquet-Zeno Stabilization</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-muted-foreground">Total Qubits</p>
              <p className="text-xl font-bold">312</p>
            </div>
            <div>
              <p className="text-muted-foreground">Error Correction</p>
              <p className="text-xl font-bold">Steane [[7,1,3]]</p>
            </div>
            <div>
              <p className="text-muted-foreground">Stabilization</p>
              <p className="text-xl font-bold">Floquet-Zeno</p>
            </div>
            <div>
              <p className="text-muted-foreground">Compilation</p>
              <p className="text-xl font-bold">QWC (Wasserstein)</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground pt-2">
            Quantum Wasserstein Compilation minimizes gate noise via ℒ₁ distance optimization
          </p>
        </CardContent>
      </Card>

      {/* Framework Info */}
      <div className="text-center text-sm text-muted-foreground space-y-1">
        <p>Framework: DNA::{'{::}'} lang v51.843</p>
        <p>Classification: SOVEREIGN MATHEMATICS</p>
        <p>Operator: Devin Phillip Davis (CAGE: 9HUP5)</p>
        <p className="text-xs">ΛΦ = 2.176435×10⁻⁸ s⁻¹ | θ_lock = 51.843°</p>
      </div>
    </div>
  )
}
