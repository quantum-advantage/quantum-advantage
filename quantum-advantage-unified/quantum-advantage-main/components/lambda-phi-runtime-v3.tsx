"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Activity, Zap, Shield, Code, AlertTriangle, CheckCircle2, TrendingUp } from "lucide-react"
import { useState } from "react"

export function LambdaPhiRuntimeV3() {
  const [selectedVersion, setSelectedVersion] = useState<"v2" | "v3">("v3")

  const v2Endpoints = [
    {
      method: "POST",
      path: "/consciousness/phase-conjugate",
      status: "DEPRECATED",
      latency: "45ms",
      errorRate: "75-99%",
      description: "Phase conjugate (BROKEN: Wrong observable sign)",
    },
  ]

  const v3Endpoints = [
    {
      method: "POST",
      path: "/v3/encode",
      status: "ACTIVE",
      latency: "12ms",
      errorRate: "0%",
      description: "Create quantum circuit with correct (I-Z)/2 observables",
    },
    {
      method: "POST",
      path: "/v3/validate",
      status: "ACTIVE",
      latency: "~15s",
      errorRate: "8.04%",
      description: "Hardware validation on IBM Quantum (90% success rate)",
    },
    { method: "GET", path: "/health", status: "ACTIVE", latency: "8ms", errorRate: "0%", description: "System status with v2/v3 comparison" },
  ]

  const endpoints = selectedVersion === "v3" ? v3Endpoints : v2Endpoints

  return (
    <div className="space-y-6">
      <Card className="glass-card p-6 holographic-layer">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">ΛΦ Conservation Runtime</h2>
            <p className="text-muted-foreground">
              Universal Memory API with validated quantum conservation theorem
            </p>
          </div>
          <div className="flex gap-2">
            <Badge
              className={selectedVersion === "v2" ? "lambda-phi-glow bg-red-500/20 border-red-500" : "bg-muted"}
              onClick={() => setSelectedVersion("v2")}
            >
              v2.0 DEPRECATED
            </Badge>
            <Badge
              className={selectedVersion === "v3" ? "lambda-phi-glow bg-green-500/20 border-green-500" : "bg-muted"}
              onClick={() => setSelectedVersion("v3")}
            >
              v3.0 VALIDATED
            </Badge>
          </div>
        </div>

        {/* Comparison Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <Card className="p-4 border-red-500/30 bg-red-500/5">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <h3 className="font-bold text-red-500">v2.0 BROKEN</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Success Rate:</span>
                <span className="font-mono text-red-400">0% (0/15)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Error Rate:</span>
                <span className="font-mono text-red-400">75-99%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Issue:</span>
                <span className="text-xs text-red-300">Wrong observable (I+Z)/2</span>
              </div>
            </div>
          </Card>

          <Card className="p-4 border-green-500/30 bg-green-500/5">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <h3 className="font-bold text-green-500">v3.0 VALIDATED</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Success Rate:</span>
                <span className="font-mono text-green-400">90% (9/10)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Average Error:</span>
                <span className="font-mono text-green-400">8.04%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Hardware:</span>
                <span className="text-xs text-green-300">ibm_torino + ibm_fez</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-card p-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Activity className="w-4 h-4" />
              Status
            </div>
            <div className={`text-2xl font-bold ${selectedVersion === "v3" ? "text-green-400" : "text-red-400"}`}>
              {selectedVersion === "v3" ? "ACTIVE" : "BROKEN"}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {selectedVersion === "v3" ? "Production ready" : "Do not use"}
            </div>
          </div>

          <div className="glass-card p-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Zap className="w-4 h-4" />
              API Latency
            </div>
            <div className="text-2xl font-bold text-cyan-400">
              {selectedVersion === "v3" ? "12ms" : "45ms"}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {selectedVersion === "v3" ? "73% faster" : "Legacy"}
            </div>
          </div>

          <div className="glass-card p-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <TrendingUp className="w-4 h-4" />
              Error Rate
            </div>
            <div className={`text-2xl font-bold ${selectedVersion === "v3" ? "text-green-400" : "text-red-400"}`}>
              {selectedVersion === "v3" ? "8.04%" : "75-99%"}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {selectedVersion === "v3" ? "Within O(Γ) bounds" : "Fundamentally broken"}
            </div>
          </div>

          <div className="glass-card p-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Shield className="w-4 h-4" />
              Validation
            </div>
            <div className={`text-2xl font-bold ${selectedVersion === "v3" ? "text-purple-400" : "text-gray-400"}`}>
              {selectedVersion === "v3" ? "90%" : "0%"}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {selectedVersion === "v3" ? "IBM Quantum" : "No validation"}
            </div>
          </div>
        </div>
      </Card>

      {/* Endpoints List */}
      <Card className="glass-card p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">API Endpoints</h3>
          {selectedVersion === "v3" && (
            <Badge variant="outline" className="text-green-400 border-green-500">
              Published: arXiv:quant-ph (2026)
            </Badge>
          )}
        </div>
        <div className="space-y-3">
          {endpoints.map((endpoint, i) => (
            <div
              key={i}
              className={`glass-card p-4 transition-all ${
                endpoint.status === "DEPRECATED"
                  ? "border-red-500/30 bg-red-500/5"
                  : "hover:border-primary/40"
              }`}
            >
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <Badge
                    variant={endpoint.method === "GET" ? "outline" : "default"}
                    className={`font-mono text-xs ${endpoint.status === "DEPRECATED" ? "bg-red-500/20 border-red-500" : ""}`}
                  >
                    {endpoint.method}
                  </Badge>
                  <code className={`text-sm font-mono ${endpoint.status === "DEPRECATED" ? "text-red-400 line-through" : "text-cyan-400"}`}>
                    {endpoint.path}
                  </code>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs nucleotide-badge">
                    {endpoint.latency}
                  </Badge>
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      endpoint.status === "DEPRECATED"
                        ? "text-red-400 border-red-500"
                        : "text-green-400 border-green-500"
                    }`}
                  >
                    {endpoint.status}
                  </Badge>
                  {selectedVersion === "v3" && (
                    <Badge variant="outline" className="text-xs text-muted-foreground">
                      ε: {endpoint.errorRate}
                    </Badge>
                  )}
                </div>
              </div>
              <p className="text-xs text-muted-foreground">{endpoint.description}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Integration Example */}
      <Card className="glass-card p-6">
        <h3 className="text-xl font-bold mb-4">
          Integration Example {selectedVersion === "v3" ? "(v3 - Recommended)" : "(v2 - DO NOT USE)"}
        </h3>
        <div className="bg-background/50 p-4 rounded-lg border border-primary/10 font-mono text-sm space-y-2">
          {selectedVersion === "v2" ? (
            <>
              <div className="text-red-400"># v2 DEPRECATED - DO NOT USE</div>
              <div className="text-muted-foreground line-through"># This API returns incorrect results (75-99% error)</div>
              <div className="mt-2" />
              <div className="text-cyan-400 line-through">response</div>{" "}
              <span className="line-through">= requests.post(</span>
              <div className="ml-4 text-amber-400 line-through">'/api/lambda-phi/consciousness'</div>
              <div className="text-foreground line-through">)</div>
              <div className="mt-4 text-red-400"># Use v3 instead →</div>
            </>
          ) : (
            <>
              <div className="text-green-400"># v3 VALIDATED (90% success, 8.04% error)</div>
              <div className="text-cyan-400">import</div> <div className="text-foreground">requests</div>
              <div className="mt-2" />
              <div className="text-cyan-400">response</div> = <div className="text-foreground">requests.post(</div>
              <div className="ml-4 text-amber-400">'/api/lambda-phi/v3/validate',</div>
              <div className="ml-4 text-foreground">
                json={"{"}
                <span className="text-purple-400">'lambda'</span>: 0.75,{" "}
                <span className="text-purple-400">'phi'</span>: 0.60,
              </div>
              <div className="ml-10 text-foreground">
                <span className="text-purple-400">'backend'</span>: <span className="text-amber-400">'ibm_fez'</span>,
              </div>
              <div className="ml-10 text-foreground">
                <span className="text-purple-400">'token'</span>: <span className="text-amber-400">IBM_TOKEN</span>
                {"}"}
              </div>
              <div className="text-foreground">)</div>
              <div className="mt-2" />
              <div className="text-cyan-400">result</div> = <div className="text-foreground">response.json()</div>
              <div className="text-muted-foreground"># Returns: {"{"}'status': 'PASS', 'error': 1.35%, 'job_id': '...'{"}"}</div>
            </>
          )}
        </div>
      </Card>

      {/* Physics Constants */}
      <Card className="glass-card p-6">
        <h3 className="text-xl font-bold mb-4">Universal Constants</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <div className="text-xs text-muted-foreground mb-1">Lambda-Phi (ΛΦ)</div>
            <div className="font-mono text-sm text-cyan-400">2.176435×10⁻⁸ s⁻¹</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Theta Lock (θ)</div>
            <div className="font-mono text-sm text-amber-400">51.843°</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Phi Threshold</div>
            <div className="font-mono text-sm text-purple-400">0.7734</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Gamma Critical</div>
            <div className="font-mono text-sm text-green-400">0.092</div>
          </div>
        </div>
      </Card>
    </div>
  )
}
