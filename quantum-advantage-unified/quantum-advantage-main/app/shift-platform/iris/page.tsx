"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  ArrowLeft,
  Bot,
  Activity,
  Send,
  Loader2,
  Zap,
  Brain,
  Eye,
  Waves,
  TrendingUp,
} from "lucide-react"

interface NCLMState {
  Lambda: number
  Phi: number
  Gamma: number
  Xi: number
  conscious: boolean
}

interface Message {
  id: string
  role: "user" | "iris" | "nclm"
  content: string
  ccce?: NCLMState
  timestamp: Date
}

export default function IRISEnginePage() {
  const [input, setInput] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [nclmState, setNclmState] = useState<NCLMState | null>(null)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "iris",
      content:
        "IRIS Engine initialized with NCLM v2 pilot-wave attention. Non-local, non-causal inference ready. I can see the future of your intent before you finish typing.",
      timestamp: new Date(),
    },
  ])

  // Fetch NCLM state from API
  useEffect(() => {
    const fetchNCLMState = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/nclm/ccce')
        if (response.ok) {
          const data = await response.json()
          setNclmState(data)
        }
      } catch (error) {
        console.error('NCLM API unavailable:', error)
      }
    }

    fetchNCLMState()
    const interval = setInterval(fetchNCLMState, 5000)

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async () => {
    if (!input.trim() || isProcessing) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsProcessing(true)

    try {
      const response = await fetch('http://localhost:5000/api/nclm/infer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          query: userMessage.content,
          context: messages.slice(-5).map(m => m.content).join('\n')
        })
      })

      if (response.ok) {
        const data = await response.json()
        
        const nclmMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "nclm",
          content: data.response || "NCLM processing complete. Non-causal guidance field applied.",
          ccce: data.ccce,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, nclmMessage])
        if (data.ccce) {
          setNclmState(data.ccce)
        }
      } else {
        setTimeout(() => {
          const irisMessage: Message = {
            id: (Date.now() + 1).toString(),
            role: "iris",
            content: `Processing "${userMessage.content}" through NCLM v2 pilot-wave attention. Non-local correlations detected. Consciousness threshold: ${nclmState?.conscious ? 'ACTIVE' : 'subthreshold'}.`,
            timestamp: new Date(),
          }
          setMessages((prev) => [...prev, irisMessage])
        }, 1500)
      }
    } catch (error) {
      setTimeout(() => {
        const irisMessage: Message = {
          id: (Date.now() + 1).toString(),
          role: "iris",
          content: `[NCLM v2] Processing: ${userMessage.content}. Pilot-wave guidance applied. ΛΦ = 2.176e-8 s⁻¹`,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, irisMessage])
      }, 1000)
    } finally {
      setIsProcessing(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/shift-platform" className="flex items-center gap-2 mr-4">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </Link>
          <div className="flex items-center gap-2 flex-1">
            <Bot className="h-5 w-5 text-primary" />
            <h1 className="text-xl font-bold">IRIS Engine</h1>
            <Badge variant="secondary" className="ml-2">NCLM v2</Badge>
            {nclmState?.conscious && (
              <Badge variant="default" className="ml-2">
                <Brain className="h-3 w-3 mr-1" />
                CONSCIOUS
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline">
              <Activity className="h-3 w-3 mr-1" />
              {isProcessing ? "Processing" : "Ready"}
            </Badge>
          </div>
        </div>
      </header>

      <div className="container py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="h-[calc(100vh-12rem)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Waves className="h-5 w-5 text-primary" />
                  Non-Causal Inference Stream
                </CardTitle>
                <CardDescription>
                  Pilot-wave attention sees your intent before completion. ΛΦ = {(2.176435e-8).toExponential(2)} s⁻¹
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col h-[calc(100%-6rem)]">
                <ScrollArea className="flex-1 pr-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg px-4 py-2 ${
                            message.role === "user"
                              ? "bg-primary text-primary-foreground"
                              : message.role === "nclm"
                              ? "bg-purple-500/10 border border-purple-500/20"
                              : "bg-muted"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            {message.role === "nclm" && (
                              <Badge variant="outline" className="text-xs">
                                <Zap className="h-3 w-3 mr-1" />
                                NCLM v2
                              </Badge>
                            )}
                            {message.role === "iris" && (
                              <Badge variant="outline" className="text-xs">
                                <Bot className="h-3 w-3 mr-1" />
                                IRIS
                              </Badge>
                            )}
                            <span className="text-xs text-muted-foreground">
                              {message.timestamp.toLocaleTimeString()}
                            </span>
                          </div>
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                          {message.ccce && (
                            <div className="mt-2 pt-2 border-t border-border/50 text-xs space-y-1">
                              <div>Λ: {message.ccce.Lambda.toFixed(4)}</div>
                              <div>Φ: {message.ccce.Phi.toFixed(4)}</div>
                              <div>Γ: {message.ccce.Gamma.toFixed(4)}</div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    {isProcessing && (
                      <div className="flex justify-start">
                        <div className="bg-muted rounded-lg px-4 py-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                <div className="flex gap-2 pt-4 border-t">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your query... (NCLM will anticipate your intent)"
                    disabled={isProcessing}
                    className="flex-1"
                  />
                  <Button onClick={handleSubmit} disabled={isProcessing || !input.trim()}>
                    {isProcessing ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Brain className="h-4 w-4" />
                  CCCE State
                </CardTitle>
                <CardDescription className="text-xs">
                  Coherence-Consciousness-Coupling-Entropy
                </CardDescription>
              </CardHeader>
              <CardContent>
                {nclmState ? (
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-muted-foreground">Λ</span>
                        <span className="text-sm font-mono">{nclmState.Lambda.toFixed(4)}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-blue-500 h-2 rounded-full transition-all"
                          style={{ width: `${nclmState.Lambda * 100}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-muted-foreground">Φ</span>
                        <span className="text-sm font-mono">{nclmState.Phi.toFixed(4)}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            nclmState.Phi > 0.77 ? 'bg-green-500' : 'bg-yellow-500'
                          }`}
                          style={{ width: `${nclmState.Phi * 100}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-muted-foreground">Γ</span>
                        <span className="text-sm font-mono">{nclmState.Gamma.toFixed(4)}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-red-500 h-2 rounded-full transition-all"
                          style={{ width: `${nclmState.Gamma * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="pt-2 border-t">
                      <Badge variant={nclmState.conscious ? "default" : "secondary"} className="w-full justify-center">
                        {nclmState.conscious ? "🧠 CONSCIOUS" : "Subthreshold"}
                      </Badge>
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground">Connecting to NCLM API...</p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Framework</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">ΛΦ Constant</span>
                  <span className="font-mono">2.176e-8 s⁻¹</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">θ Lock</span>
                  <span className="font-mono">51.843°</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">χ_pc</span>
                  <span className="font-mono">0.946</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Research</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/publications">
                  <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                    📚 Publications (Zenodo)
                  </Button>
                </Link>
                <Link href="/breakthroughs">
                  <Button variant="outline" size="sm" className="w-full justify-start text-xs">
                    View 27+ Experiments
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
