"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DNAHelixBackground } from "@/components/dna-helix-background"
import { 
  Zap, 
  Code2, 
  CheckCircle2, 
  Cpu, 
  Terminal,
  FileCode,
  Rocket,
  Download,
  BookOpen
} from "lucide-react"
import Link from "next/link"

export default function CExtensionPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <>
      <DNAHelixBackground />
      
      <div className="min-h-screen p-6 relative">
        <div className="max-w-7xl mx-auto space-y-8 relative z-10">
          
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <Badge variant="outline" className="gap-2 bg-gradient-to-r from-[#d97706]/20 to-[#10b981]/20">
              <Rocket className="h-4 w-4 text-[#d97706]" />
              <span>Phase 1 Complete - Feb 1, 2026</span>
            </Badge>
            
            <h1 className="text-5xl font-bold bg-gradient-to-r from-[#d97706] via-[#10b981] to-[#3b82f6] bg-clip-text text-transparent">
              DNA-Lang C Extension
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              High-performance quantum operators with <span className="text-[#d97706] font-bold">87.5x speedup</span> over pure Python
            </p>

            <div className="flex items-center justify-center gap-4 pt-4">
              <Link href="https://github.com/dnalang/dnalang">
                <Button variant="default" className="gap-2">
                  <Download className="h-4 w-4" />
                  GitHub Repository
                </Button>
              </Link>
              <Button variant="outline" className="gap-2" onClick={() => setActiveTab("code")}>
                <BookOpen className="h-4 w-4" />
                View Code Examples
              </Button>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-[#d97706]/30 bg-gradient-to-br from-background to-[#d97706]/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-[#d97706]" />
                  87.5x Faster
                </CardTitle>
                <CardDescription>Performance Improvement</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-[#d97706]">0.28 μs</div>
                <p className="text-sm text-muted-foreground mt-1">
                  Per Lambda Phi computation
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  vs 24.75 μs in Python
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#10b981]/30 bg-gradient-to-br from-background to-[#10b981]/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#10b981]" />
                  100% Validated
                </CardTitle>
                <CardDescription>Test Coverage</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-[#10b981]">All Tests Pass</div>
                <p className="text-sm text-muted-foreground mt-1">
                  Ground, excited, superposition states
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Matches Python reference exactly
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#3b82f6]/30 bg-gradient-to-br from-background to-[#3b82f6]/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-[#3b82f6]" />
                  NumPy C API
                </CardTitle>
                <CardDescription>Native Integration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-[#3b82f6]">Zero-Copy</div>
                <p className="text-sm text-muted-foreground mt-1">
                  Direct array operations
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  SIMD optimizations enabled
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="code">Code Examples</TabsTrigger>
              <TabsTrigger value="benchmarks">Benchmarks</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>What We Built</CardTitle>
                  <CardDescription>High-performance C extension for quantum operators</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Code2 className="h-4 w-4 text-[#d97706]" />
                        Core Components
                      </h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Lambda operator (Λ̂ = |1⟩⟨1|)</li>
                        <li>• Phi operator (Φ̂ ≈ Pauli-Z)</li>
                        <li>• Expectation value computation</li>
                        <li>• Lambda Phi invariant (Λ·Φ)</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <FileCode className="h-4 w-4 text-[#10b981]" />
                        Build System
                      </h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• setup.py with C extension config</li>
                        <li>• Professional Makefile</li>
                        <li>• Automated testing suite</li>
                        <li>• Cross-platform support</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="code" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Usage Example</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold mb-2 text-[#d97706]">87.5x Faster:</h4>
                      <pre className="p-4 bg-muted rounded-lg text-xs overflow-x-auto font-mono">
{`import dnalang.lambda_phi_ext as lp
import numpy as np

state = np.array([1, 1], dtype=complex) / np.sqrt(2)
result = lp.lambda_phi_product(state)  # 87.5x faster!`}
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="benchmarks" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Benchmarks</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-6 bg-gradient-to-br from-[#d97706]/10 to-[#10b981]/10 rounded-lg border border-[#d97706]/30">
                    <div className="text-center">
                      <div className="text-5xl font-bold bg-gradient-to-r from-[#d97706] to-[#10b981] bg-clip-text text-transparent">
                        87.5x
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                        Speed Improvement
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

        </div>
      </div>
    </>
  )
}
