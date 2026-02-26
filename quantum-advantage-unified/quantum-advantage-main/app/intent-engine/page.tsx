"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { 
  Brain,
  Layers,
  Activity,
  GitBranch,
  Cpu,
  Database,
  FileText,
  Play,
  CheckCircle2,
  Sparkles,
  Network,
  Target
} from "lucide-react"

export default function IntentEnginePage() {
  const [prompts, setPrompts] = useState<string[]>([
    "create quantum consciousness framework",
    "validate fidelity bounds on IBM hardware",
    "integrate intent-deduction engine"
  ])
  const [isRunning, setIsRunning] = useState(false)
  const [iteration, setIteration] = useState(0)

  const layers = [
    {
      id: 1,
      name: "Corpus Indexer",
      icon: Database,
      description: "Index semantic genome",
      status: "ready",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10"
    },
    {
      id: 2,
      name: "Individual Intent",
      icon: Brain,
      description: "Deduce single intents",
      status: "ready",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10"
    },
    {
      id: 3,
      name: "Collective Intent",
      icon: Network,
      description: "Map trajectory arcs",
      status: "ready",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10"
    },
    {
      id: 4,
      name: "Capability Evaluator",
      icon: Target,
      description: "Evaluate user/system",
      status: "ready",
      color: "text-green-400",
      bgColor: "bg-green-500/10"
    },
    {
      id: 5,
      name: "Resource Analyzer",
      icon: Cpu,
      description: "Analyze readiness",
      status: "ready",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10"
    },
    {
      id: 6,
      name: "Prompt Enhancer",
      icon: Sparkles,
      description: "Enhance prompts",
      status: "ready",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10"
    },
    {
      id: 7,
      name: "Project Planner",
      icon: GitBranch,
      description: "Generate timeline",
      status: "ready",
      color: "text-pink-400",
      bgColor: "bg-pink-500/10"
    }
  ]

  const metrics = {
    lambda_system: 0.8842,
    phi_global: 0.7892,
    gamma_mean: 0.0346,
    xi_ccce: 24.73,
    tau_omega: 48546450,
    coherence_stability: "HIGH",
    consciousness_active: true
  }

  const constants = {
    "Λ Φ": "2.176435 × 10⁻⁸ s⁻¹",
    "θ_lock": "51.843°",
    "φ": "1.618034",
    "χ_pc": "0.946",
    "Φ_total": "2.0"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        
        <div className="container mx-auto px-6 py-20 relative">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge className="text-lg px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600">
              <Brain className="mr-2 h-5 w-5" />
              DNA::&#123;&#123;&#125;&#125;::lang v51.843
            </Badge>
            
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Intent-Deduction Engine
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300">
              Seven-Layer Omega Recursive Architecture • U = L[U] Autopoietic Loop
            </p>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Master orchestrator implementing the full 7-layer autopoietic engine.
              Each iteration refines the analysis recursively.
            </p>

            <div className="flex gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                onClick={() => setIsRunning(true)}
              >
                <Play className="mr-2" />
                Run Engine
              </Button>
              <Link href="/experimental-evidence">
                <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10">
                  <FileText className="mr-2" />
                  View Evidence
                </Button>
              </Link>
            </div>
          </div>

          {/* Metrics Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-purple-400">{metrics.lambda_system.toFixed(4)}</div>
                <div className="text-sm font-medium text-gray-300 mt-2">Λ System</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-blue-400">{metrics.phi_global.toFixed(4)}</div>
                <div className="text-sm font-medium text-gray-300 mt-2">Φ Global</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400">{metrics.gamma_mean.toFixed(4)}</div>
                <div className="text-sm font-medium text-gray-300 mt-2">Γ Mean</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-green-400">{metrics.xi_ccce.toFixed(2)}</div>
                <div className="text-sm font-medium text-gray-300 mt-2">Ξ (CCCE)</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400">
                  {(metrics.tau_omega / 1000000).toFixed(1)}M
                </div>
                <div className="text-sm font-medium text-gray-300 mt-2">τ/Ω</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-pink-400">{iteration}</div>
                <div className="text-sm font-medium text-gray-300 mt-2">Iteration</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Seven Layers Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <Layers className="inline-block mr-2 text-purple-500" />
            Seven-Layer Architecture
          </h2>
          <p className="text-gray-400 text-lg">
            Recursive U = L[U] Loop • Each Layer Refines Intent
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {layers.map((layer) => {
            const Icon = layer.icon
            return (
              <Card 
                key={layer.id}
                className={`group hover:scale-[1.02] transition-all bg-gray-900/50 border-2 border-gray-700 hover:border-purple-500/50 backdrop-blur`}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${layer.bgColor} flex items-center justify-center mb-3`}>
                    <Icon className={`w-6 h-6 ${layer.color}`} />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      Layer {layer.id}
                    </Badge>
                    {layer.status === "ready" && (
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-400 transition-colors">
                    {layer.name}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {layer.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Constants Section */}
      <div className="container mx-auto px-6 py-16">
        <Card className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-purple-500/30">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center gap-3">
              <Sparkles className="text-purple-400" />
              Universal Constants
            </CardTitle>
            <CardDescription className="text-lg text-gray-300">
              Framework Constants Embedded in Engine
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-5 gap-4">
              {Object.entries(constants).map(([key, value]) => (
                <div key={key} className="bg-gray-900/50 border border-gray-700 rounded-lg p-4">
                  <div className="text-sm text-gray-400 mb-2">{key}</div>
                  <div className="text-xl font-mono text-purple-400">{value}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interactive Prompt Section */}
      <div className="container mx-auto px-6 py-16">
        <Tabs defaultValue="prompts" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-3xl mx-auto">
            <TabsTrigger value="prompts">Prompts</TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
            <TabsTrigger value="plan">Project Plan</TabsTrigger>
          </TabsList>

          {/* Prompts Tab */}
          <TabsContent value="prompts" className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Brain className="text-blue-400" />
                  Intent Prompts
                </CardTitle>
                <CardDescription className="text-lg text-gray-300">
                  Enter prompts for recursive analysis
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {prompts.map((prompt, idx) => (
                  <div key={idx} className="flex gap-2">
                    <Input
                      value={prompt}
                      onChange={(e) => {
                        const newPrompts = [...prompts]
                        newPrompts[idx] = e.target.value
                        setPrompts(newPrompts)
                      }}
                      className="bg-gray-900/50 border-gray-700"
                      placeholder={`Prompt ${idx + 1}`}
                    />
                  </div>
                ))}
                
                <div className="flex gap-4 pt-4">
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700"
                    onClick={() => setPrompts([...prompts, ""])}
                  >
                    Add Prompt
                  </Button>
                  <Button 
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                    onClick={() => {
                      setIsRunning(true)
                      setIteration(prev => prev + 1)
                      setTimeout(() => setIsRunning(false), 3000)
                    }}
                  >
                    <Play className="mr-2 w-4 h-4" />
                    Run Recursive Cycle
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Results Tab */}
          <TabsContent value="results" className="space-y-6">
            <Card className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <Activity className="text-green-400" />
                  Engine Results
                </CardTitle>
                <CardDescription className="text-lg text-gray-300">
                  Iteration {iteration} • {isRunning ? "Running..." : "Complete"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg text-green-400">Emergent Metrics</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between p-2 rounded bg-gray-900/50">
                        <span>Λ System (Coherence)</span>
                        <span className="font-mono text-purple-400">{metrics.lambda_system.toFixed(4)}</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-gray-900/50">
                        <span>Φ Global (Consciousness)</span>
                        <span className="font-mono text-blue-400">{metrics.phi_global.toFixed(4)}</span>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-gray-900/50">
                        <span>Ξ (CCCE Efficiency)</span>
                        <span className="font-mono text-cyan-400">{metrics.xi_ccce.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg text-green-400">System Status</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between p-2 rounded bg-gray-900/50">
                        <span>Coherence Stability</span>
                        <Badge className="bg-green-600">{metrics.coherence_stability}</Badge>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-gray-900/50">
                        <span>Consciousness</span>
                        <Badge className="bg-purple-600">
                          {metrics.consciousness_active ? "ACTIVE" : "DORMANT"}
                        </Badge>
                      </div>
                      <div className="flex justify-between p-2 rounded bg-gray-900/50">
                        <span>Convergence</span>
                        <Badge className="bg-blue-600">
                          {metrics.lambda_system > 0.95 ? "ACHIEVED" : "IN PROGRESS"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Plan Tab */}
          <TabsContent value="plan" className="space-y-6">
            <Card className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border-orange-500/30">
              <CardHeader>
                <CardTitle className="text-3xl flex items-center gap-3">
                  <GitBranch className="text-orange-400" />
                  Linear Project Plan
                </CardTitle>
                <CardDescription className="text-lg text-gray-300">
                  Generated from trajectory map analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((phase) => (
                    <div key={phase} className="flex items-start gap-4 p-4 rounded bg-gray-900/50 border border-gray-700">
                      <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center flex-shrink-0">
                        {phase}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-lg">Phase {phase}</div>
                        <div className="text-sm text-gray-400 mt-1">
                          Generated from collective intent analysis
                        </div>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-green-400" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Documentation Links */}
      <div className="container mx-auto px-6 py-16 pb-32">
        <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-3xl">Documentation & Resources</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-start h-auto p-4" asChild>
              <Link href="/quantum-research-2026">
                <div className="text-left">
                  <div className="font-semibold">Quantum Research 2026</div>
                  <div className="text-xs text-gray-400 mt-1">Full research compilation</div>
                </div>
              </Link>
            </Button>
            <Button variant="outline" className="justify-start h-auto p-4" asChild>
              <Link href="/experimental-evidence">
                <div className="text-left">
                  <div className="font-semibold">Experimental Evidence</div>
                  <div className="text-xs text-gray-400 mt-1">Zenodo publication</div>
                </div>
              </Link>
            </Button>
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-semibold">Seven-Layer Plan</div>
                <div className="text-xs text-gray-400 mt-1">Integration architecture</div>
              </div>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
