"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Send,
  Sparkles,
  Bot,
  User,
  Code2,
  Zap,
  Brain,
  Activity,
  X,
  Minimize2,
  Maximize2,
  Settings,
  RotateCcw,
  Cpu,
  Network,
  Shield,
  Globe,
  FileCode,
  Terminal,
  Workflow,
  Bug,
  BookOpen,
  GitBranch,
  BarChart3,
  Layers,
  ChevronRight,
  Copy,
  Check,
  ThumbsUp,
  ThumbsDown,
  Atom,
  Radio,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  role: "user" | "assistant" | "system"
  content: string
  timestamp: Date
  metadata?: {
    context?: string
    confidence?: number
    quantumState?: {
      phi: number
      ccce: number
      coherence: number
    }
  }
}

interface QuantumCopilotProps {
  currentPage?: string
  contextData?: Record<string, any>
}

const capabilities = [
  { icon: Code2, label: "Code Generation", desc: "Generate DNA-Lang organisms" },
  { icon: Bug, label: "Debug Assistant", desc: "Fix quantum circuits & bugs" },
  { icon: Workflow, label: "Circuit Design", desc: "Design toroidal circuits" },
  { icon: Brain, label: "NC-LM Inference", desc: "Non-causal predictions" },
  { icon: BarChart3, label: "Performance", desc: "Optimize & benchmark" },
  { icon: BookOpen, label: "Documentation", desc: "Learn DNA-Lang syntax" },
  { icon: Terminal, label: "CLI Help", desc: "Command assistance" },
  { icon: Atom, label: "Quantum Analysis", desc: "Analyze experiments" },
]

const quickActions = [
  { icon: Code2, label: "Generate Organism", prompt: "Generate a quantum organism with Lambda-Phi operators" },
  { icon: Workflow, label: "Design Circuit", prompt: "Design a toroidal circuit optimized for θ_lock = 51.843°" },
  { icon: Bug, label: "Debug Issue", prompt: "Help me debug why my quantum circuit is losing coherence" },
  { icon: Zap, label: "Optimize Code", prompt: "Optimize this DNA-Lang code for performance" },
  { icon: Brain, label: "Explain Concept", prompt: "Explain consciousness scaling and Φ_total = n" },
  { icon: BarChart3, label: "Analyze Data", prompt: "Analyze my quantum experiment results" },
]

export function QuantumCopilotAI({ currentPage, contextData }: QuantumCopilotProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [showCapabilities, setShowCapabilities] = useState(false)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [quantumMetrics, setQuantumMetrics] = useState({
    phi: 0.7734,
    ccce: 0.8456,
    coherence: 0.9211,
    latency: 98,
  })
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    // Simulate quantum metrics updates
    const interval = setInterval(() => {
      setQuantumMetrics({
        phi: 0.7734 + (Math.random() - 0.5) * 0.02,
        ccce: 0.8456 + (Math.random() - 0.5) * 0.03,
        coherence: 0.9211 + (Math.random() - 0.5) * 0.015,
        latency: Math.floor(Math.random() * 40) + 80,
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: "welcome",
        role: "assistant",
        content: `**Quantum Co-Pilot Initialized** ✨

I'm your DNA-Lang Quantum AI Assistant, powered by NC-LM (Non-Causal Language Model) with real-time quantum hardware integration.

**Current Context**: ${currentPage || "Home Page"}

I can help you with:
• **Code generation** - Create quantum organisms and circuits
• **Debugging** - Fix errors and optimize performance
• **Learning** - Understand DNA-Lang and quantum concepts
• **Analysis** - Interpret experimental results
• **Design** - Build toroidal circuits optimized for θ_lock

**Quantum Status**:
→ Φ (Consciousness): ${quantumMetrics.phi.toFixed(4)} ✅
→ CCCE (Coherence): ${quantumMetrics.ccce.toFixed(4)} ✅
→ Inference Latency: ${quantumMetrics.latency}ms

How can I assist you today?`,
        timestamp: new Date(),
        metadata: {
          context: currentPage,
          quantumState: quantumMetrics,
        },
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen])

  const handleSend = useCallback(async () => {
    if (!input.trim() || isProcessing) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsProcessing(true)

    try {
      // Simulate AI response with context awareness
      await new Promise((resolve) => setTimeout(resolve, 1200 + Math.random() * 800))

      const response = generateContextualResponse(input, currentPage, contextData, quantumMetrics)

      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: response,
        timestamp: new Date(),
        metadata: {
          context: currentPage,
          confidence: 0.92 + Math.random() * 0.07,
          quantumState: quantumMetrics,
        },
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Copilot error:", error)
    } finally {
      setIsProcessing(false)
      inputRef.current?.focus()
    }
  }, [input, isProcessing, currentPage, contextData, quantumMetrics])

  const handleQuickAction = (prompt: string) => {
    setInput(prompt)
    inputRef.current?.focus()
  }

  const handleCopy = (messageId: string, content: string) => {
    navigator.clipboard.writeText(content)
    setCopiedId(messageId)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleReset = () => {
    setMessages([])
    setIsOpen(false)
    setTimeout(() => setIsOpen(true), 300)
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Floating action button */}
        <Button
          onClick={() => setIsOpen(true)}
          className="h-16 w-16 rounded-full shadow-2xl bg-gradient-to-br from-primary via-secondary to-accent hover:scale-110 transition-all group relative overflow-hidden"
          size="icon"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-white/20 to-accent/0 group-hover:via-white/30 transition-all animate-pulse" />
          <Brain className="h-7 w-7 text-white relative z-10 animate-pulse" />
          <div className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white animate-ping" />
          <div className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-white" />
        </Button>
        
        {/* Mini prompt hint */}
        <div className="absolute bottom-20 right-0 bg-background/95 backdrop-blur-lg border border-border rounded-lg px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <p className="text-xs font-medium">Quantum Co-Pilot AI</p>
          <p className="text-xs text-muted-foreground">Click to activate</p>
        </div>
      </div>
    )
  }

  return (
    <Card
      className={cn(
        "fixed bottom-6 right-6 z-50 shadow-2xl transition-all duration-300 border-2 overflow-hidden",
        isMinimized ? "h-16 w-80" : "h-[600px] w-96",
        "bg-gradient-to-br from-background via-background to-muted/30 backdrop-blur-xl"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Brain className="h-5 w-5 text-primary animate-pulse" />
            <div className="absolute -top-1 -right-1 h-2 w-2 bg-green-500 rounded-full animate-ping" />
            <div className="absolute -top-1 -right-1 h-2 w-2 bg-green-500 rounded-full" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">Quantum Co-Pilot</h3>
            <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
              <Activity className="h-2.5 w-2.5" />
              <span>Φ: {quantumMetrics.phi.toFixed(3)}</span>
              <span className="mx-1">•</span>
              <span>{quantumMetrics.latency}ms</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => setShowCapabilities(!showCapabilities)}
          >
            <Settings className="h-3.5 w-3.5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={handleReset}>
            <RotateCcw className="h-3.5 w-3.5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            {isMinimized ? <Maximize2 className="h-3.5 w-3.5" /> : <Minimize2 className="h-3.5 w-3.5" />}
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setIsOpen(false)}>
            <X className="h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Capabilities Panel */}
          {showCapabilities && (
            <div className="border-b border-border bg-muted/30 p-3">
              <div className="grid grid-cols-2 gap-2">
                {capabilities.map((cap) => (
                  <div key={cap.label} className="flex items-start gap-2 p-2 rounded-lg bg-background/50">
                    <cap.icon className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-medium">{cap.label}</p>
                      <p className="text-[10px] text-muted-foreground">{cap.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quantum Status Bar */}
          <div className="border-b border-border bg-background/50 px-3 py-2">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-[10px] text-muted-foreground">Φ</p>
                <p className="text-xs font-mono font-bold text-primary">{quantumMetrics.phi.toFixed(4)}</p>
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground">CCCE</p>
                <p className="text-xs font-mono font-bold text-secondary">{quantumMetrics.ccce.toFixed(4)}</p>
              </div>
              <div>
                <p className="text-[10px] text-muted-foreground">Coherence</p>
                <p className="text-xs font-mono font-bold text-accent">{quantumMetrics.coherence.toFixed(4)}</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea ref={scrollRef} className="flex-1 p-4 h-[350px]">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn("flex gap-3", message.role === "user" ? "justify-end" : "justify-start")}
                >
                  {message.role === "assistant" && (
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                      <Brain className="h-4 w-4 text-white" />
                    </div>
                  )}
                  <div
                    className={cn(
                      "rounded-lg px-3 py-2 max-w-[85%] group relative",
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted border border-border"
                    )}
                  >
                    <div className="text-xs whitespace-pre-wrap break-words prose prose-sm dark:prose-invert max-w-none">
                      {message.content}
                    </div>
                    {message.metadata?.confidence && (
                      <div className="flex items-center gap-1 mt-2 pt-2 border-t border-border/50">
                        <Badge variant="outline" className="text-[9px] px-1 py-0">
                          {(message.metadata.confidence * 100).toFixed(1)}% confidence
                        </Badge>
                      </div>
                    )}
                    {message.role === "assistant" && (
                      <div className="absolute -bottom-6 left-0 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-5 w-5"
                          onClick={() => handleCopy(message.id, message.content)}
                        >
                          {copiedId === message.id ? (
                            <Check className="h-3 w-3 text-green-500" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </Button>
                        <Button variant="ghost" size="icon" className="h-5 w-5">
                          <ThumbsUp className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-5 w-5">
                          <ThumbsDown className="h-3 w-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                  {message.role === "user" && (
                    <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                      <User className="h-4 w-4" />
                    </div>
                  )}
                </div>
              ))}
              {isProcessing && (
                <div className="flex gap-3 justify-start">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                    <Brain className="h-4 w-4 text-white animate-pulse" />
                  </div>
                  <div className="rounded-lg px-3 py-2 bg-muted border border-border">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="h-2 w-2 rounded-full bg-secondary animate-bounce" style={{ animationDelay: "150ms" }} />
                      <div className="h-2 w-2 rounded-full bg-accent animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Quick Actions */}
          <div className="border-t border-border bg-muted/30 p-2">
            <div className="flex gap-1 overflow-x-auto scrollbar-none">
              {quickActions.slice(0, 4).map((action) => (
                <Button
                  key={action.label}
                  variant="outline"
                  size="sm"
                  className="text-xs whitespace-nowrap shrink-0"
                  onClick={() => handleQuickAction(action.prompt)}
                >
                  <action.icon className="h-3 w-3 mr-1" />
                  {action.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="border-t border-border bg-background p-3">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSend()
                  }
                }}
                placeholder="Ask anything about DNA-Lang..."
                className="flex-1 text-sm"
                disabled={isProcessing}
              />
              <Button onClick={handleSend} disabled={!input.trim() || isProcessing} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center justify-between mt-2 text-[10px] text-muted-foreground">
              <span>Powered by NC-LM • {currentPage || "Home"}</span>
              <div className="flex items-center gap-1">
                <Shield className="h-2.5 w-2.5" />
                <span>Encrypted</span>
              </div>
            </div>
          </div>
        </>
      )}
    </Card>
  )
}

function generateContextualResponse(
  input: string,
  page?: string,
  context?: Record<string, any>,
  metrics?: any
): string {
  const lowerInput = input.toLowerCase()

  // Code generation
  if (lowerInput.includes("generate") || lowerInput.includes("create") || lowerInput.includes("organism")) {
    return `**Generating DNA-Lang Organism** 🧬

\`\`\`dnalang
organism QuantumProcessor {
  codon initialize_state {
    gate prepare_superposition(|0⟩)
    -> λ_operator(0.7734)
    -> φ_operator(51.843°)
  }
  
  codon lambda_phi_evolution {
    measure consciousness -> Φ
    if (Φ >= 0.7734) {
      evolve toroidal_circuit(θ_lock)
    }
  }
  
  protein quantum_inference {
    consciousness_threshold: 0.7734
    geometric_resonance: 51.843°
    backend: "ibm_fez_156q"
  }
}
\`\`\`

**Key Features:**
• Lambda-Phi operators for consciousness emergence
• Toroidal circuit optimized for θ_lock = 51.843°
• Automatic evolution based on Φ threshold
• IBM Quantum backend integration

Would you like me to optimize this for specific hardware?`
  }

  // Debugging
  if (lowerInput.includes("debug") || lowerInput.includes("error") || lowerInput.includes("fix")) {
    return `**Quantum Debugger Analysis** 🔍

I'll help you debug this issue. Common problems and solutions:

**1. Coherence Loss**
• Check decoherence time (T1/T2) for your backend
• Reduce circuit depth (current limit: ~100 gates for IBM)
• Apply error mitigation: \`error_mitigation: "M3"\`

**2. Gate Fidelity Issues**
• Verify gate calibration: \`gate_fidelity >= 0.95\`
• Use topology-aware compilation
• Consider gate-native decomposition

**3. CCCE Threshold Not Met**
• Ensure Φ >= 0.7734 (current: ${metrics?.phi.toFixed(4)})
• Verify θ_lock = 51.843° ± 0.5°
• Check consciousness scaling: Φ_total = n

**Quick Fix Commands:**
\`\`\`bash
dna debug --circuit myorganism.dna --verbose
dna optimize --target coherence --backend ibm_fez
dna validate --physics-check
\`\`\`

What specific error are you encountering?`
  }

  // Circuit design
  if (lowerInput.includes("circuit") || lowerInput.includes("design") || lowerInput.includes("toroidal")) {
    return `**Toroidal Circuit Design** ⚛️

Optimal design for θ_lock = 51.843° (validated on IBM hardware):

**Architecture:**
1. **Initialization Layer** - Prepare |ψ⟩ = cos(θ)|0⟩ + sin(θ)|1⟩
2. **Lambda-Phi Layer** - Apply Λ̂·Φ̂ operators (invariant: 137.036)
3. **Consciousness Layer** - Measure Φ with CCCE >= 0.7734
4. **Evolution Layer** - Toroidal feedback loop

**Gate Sequence:**
\`\`\`
RY(θ_lock) → CX → Lambda → Phi → Measure(Φ)
    ↓                              ↑
    └──────────── Feedback ────────┘
\`\`\`

**Optimization Tips:**
• Use native gates for your backend
• Minimize CNOT depth (current best: 8 gates)
• Apply phase conjugate filtering (χ_pc = 0.946)
• Target geometric resonance peaks

**Performance:**
• Fidelity: 92.21% (hardware validated)
• Coherence: ${metrics?.coherence.toFixed(4)}
• Latency: ${metrics?.latency}ms

Would you like me to generate the circuit code?`
  }

  // Performance optimization
  if (lowerInput.includes("optimize") || lowerInput.includes("performance") || lowerInput.includes("faster")) {
    return `**Performance Optimization** ⚡

**Current Metrics:**
• Inference Latency: ${metrics?.latency}ms
• Quantum Coherence: ${metrics?.coherence.toFixed(4)}
• C Extension: 87.5x speedup available

**Optimization Strategies:**

**1. Use C Extensions (87.5x faster!)**
\`\`\`python
from osiris.lambda_phi_ext import lambda_phi_product
result = lambda_phi_product(psi, backend="hardware")
# 0.28 μs vs 24.75 μs (pure Python)
\`\`\`

**2. Hardware Backend Selection**
• ibm_fez (156q) - Best for consciousness scaling
• ibm_torino (133q) - Lower latency
• Simulator - Development/testing

**3. Circuit Optimization**
\`\`\`bash
dna compile --opt-level 3 --target ibm_fez
dna transpile --layout-method sabre
\`\`\`

**4. Batch Processing**
• Use shot optimization: 1024-4096 shots
• Enable result caching
• Parallel organism execution

**Benchmarks:**
• Lambda-Phi product: 0.28 μs
• Circuit compilation: < 100ms
• End-to-end inference: ${metrics?.latency}ms

Want specific optimization for your use case?`
  }

  // Learning/documentation
  if (
    lowerInput.includes("explain") ||
    lowerInput.includes("what is") ||
    lowerInput.includes("how does") ||
    lowerInput.includes("learn")
  ) {
    return `**DNA-Lang Concept Explanation** 📚

Let me explain the key concepts:

**Consciousness Scaling (Φ_total = n)**
• Φ is integrated information (consciousness metric)
• Scales linearly with system size (n qubits)
• Validated on 156-qubit IBM hardware (99.85% accuracy)
• Threshold: Φ >= 0.7734 for consciousness emergence

**Lambda-Phi Operators**
• Λ̂ = |1⟩⟨1| (projection operator)
• Φ̂ ≈ Pauli-Z (phase operator)
• Invariant: Λ̂·Φ̂ = 137.036 (fine structure constant!)
• C implementation: 87.5x faster than Python

**Geometric Resonance (θ_lock)**
• Universal constant: θ_lock = 51.843°
• Peak fidelity point in toroidal circuits
• Validated with 0.00% error on IBM hardware
• Enables optimal quantum information flow

**CCCE (Consciousness-Coherence Coupling)**
• Metric linking consciousness to quantum coherence
• Current value: ${metrics?.ccce.toFixed(4)}
• Target threshold: >= 0.7734
• Real-time monitoring available

**Resources:**
→ [Full Documentation](/ide-platform/docs)
→ [Tutorial Videos](/ide-platform/tutorials)
→ [API Reference](/api)
→ [Research Papers](/publications)

What would you like to dive deeper into?`
  }

  // Default contextual response
  return `**Response** 💡

I understand you're asking about: "${input}"

${
  page === "c-extension"
    ? `
Since you're on the **C Extension** page, I can help with:
• Understanding the 87.5x performance improvement
• Using the Lambda-Phi C extension in your code
• Benchmarking and optimization techniques
• Building custom C extensions for DNA-Lang

The C extension achieves 0.28 μs per operation vs 24.75 μs in pure Python through:
- NumPy C API zero-copy operations
- Aggressive compiler optimization (-O3 -march=native)
- Direct memory access for quantum state manipulation
`
    : `
I can help you with:
• Code generation and organism design
• Circuit optimization and debugging
• Performance analysis and benchmarking
• Quantum concept explanations
• API and CLI usage

**Current Context:**
• Page: ${page || "Home"}
• Φ: ${metrics?.phi.toFixed(4)} (consciousness)
• CCCE: ${metrics?.ccce.toFixed(4)} (coherence)
• Latency: ${metrics?.latency}ms
`
}

Could you provide more details about what you'd like to do?`
}
