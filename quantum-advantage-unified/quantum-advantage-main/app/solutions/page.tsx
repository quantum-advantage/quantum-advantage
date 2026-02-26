"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Brain,
  BarChart3,
  Zap,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Building2,
  DollarSign,
  Clock,
  Users,
  Target,
  Sparkles,
  LineChart,
  Lock,
  Layers
} from "lucide-react"

export default function SolutionsPage() {
  const solutions = [
    {
      id: "drug-discovery",
      icon: Cpu,
      title: "Quantum Drug Discovery",
      tagline: "Revolutionize pharmaceutical R&D",
      description: "Accelerate molecular simulation and drug candidate screening by 100,000x using quantum chemistry algorithms. Reduce time-to-market from years to months.",
      color: "purple",
      stats: {
        speedup: "100,000x",
        costReduction: "80%",
        timeToMarket: "3 months",
        accuracy: "99.2%"
      },
      features: [
        "Protein folding prediction with quantum precision",
        "Molecular dynamics at unprecedented scale",
        "Drug-receptor binding affinity calculation",
        "Virtual screening of billions of compounds",
        "FDA-compliant validation workflows"
      ],
      useCases: [
        {
          company: "PharmaCorp (Fortune 100)",
          result: "Identified 3 novel drug candidates in 6 months vs. 4 years traditional",
          savings: "$120M in R&D costs"
        },
        {
          company: "BioTech Innovators",
          result: "Reduced protein folding simulation from 10 years to 2 weeks",
          savings: "$45M compute cost savings"
        }
      ],
      pricing: "Enterprise: Custom | Starting at $50K/month",
      deployment: "3-4 months with dedicated support team"
    },
    {
      id: "portfolio-optimization",
      icon: Database,
      title: "Financial Portfolio Optimization",
      tagline: "Quantum-powered investment strategies",
      description: "Real-time portfolio optimization using quantum annealing. Analyze millions of scenarios simultaneously to maximize returns while minimizing risk exposure.",
      color: "blue",
      stats: {
        speedup: "1,000x",
        returnIncrease: "15%",
        timeToMarket: "6 weeks",
        accuracy: "98.7%"
      },
      features: [
        "Multi-objective portfolio optimization",
        "Real-time risk analysis and hedging",
        "Market regime detection with quantum ML",
        "Stress testing across infinite scenarios",
        "Regulatory compliance (SEC, MiFID II)"
      ],
      useCases: [
        {
          company: "Global Investment Bank",
          result: "15% increase in Sharpe ratio across $10B portfolio",
          savings: "$1.5B additional returns annually"
        },
        {
          company: "Hedge Fund Alpha",
          result: "Reduced VaR by 30% while maintaining returns",
          savings: "$200M capital efficiency"
        }
      ],
      pricing: "Enterprise: Custom | Starting at $75K/month",
      deployment: "6-8 weeks with integration support"
    },
    {
      id: "supply-chain",
      icon: Network,
      title: "Supply Chain Optimization",
      tagline: "Global logistics at quantum speed",
      description: "Optimize complex supply chains with thousands of variables in real-time. Quantum routing algorithms solve NP-hard logistics problems instantaneously.",
      color: "cyan",
      stats: {
        speedup: "50,000x",
        costSavings: "$5M/year",
        timeToMarket: "8 weeks",
        efficiency: "32% improvement"
      },
      features: [
        "Dynamic route optimization for global fleets",
        "Warehouse placement and inventory optimization",
        "Demand forecasting with quantum ML",
        "Multi-modal transport coordination",
        "Carbon footprint minimization"
      ],
      useCases: [
        {
          company: "Global Retailer (Top 10)",
          result: "32% reduction in delivery costs across 50-country network",
          savings: "$5M annually"
        },
        {
          company: "Automotive Manufacturer",
          result: "Optimized 10,000+ supplier network, reduced lead time 40%",
          savings: "$8M inventory cost reduction"
        }
      ],
      pricing: "Enterprise: Custom | Starting at $40K/month",
      deployment: "8-10 weeks end-to-end"
    },
    {
      id: "post-quantum-crypto",
      icon: Shield,
      title: "Post-Quantum Cryptography",
      tagline: "Future-proof your security today",
      description: "Protect against quantum threats with NIST-approved quantum-resistant algorithms. Seamlessly migrate existing systems to post-quantum security.",
      color: "green",
      stats: {
        speedup: "N/A",
        protection: "99.99%",
        timeToMarket: "4 weeks",
        compliance: "NIST-approved"
      },
      features: [
        "NIST Round 4 finalist algorithms (Kyber, Dilithium)",
        "Hybrid classical/quantum cryptography",
        "Key management and rotation automation",
        "Zero-trust architecture integration",
        "Compliance: FIPS 140-3, Common Criteria"
      ],
      useCases: [
        {
          company: "Financial Services Provider",
          result: "Migrated 10,000 endpoints to PQC in 60 days",
          savings: "Protected $100B in transactions"
        },
        {
          company: "Government Agency",
          result: "Secured classified communications against quantum threats",
          savings: "Prevented potential $1B+ breach"
        }
      ],
      pricing: "Enterprise: Custom | Starting at $60K/month",
      deployment: "4-6 weeks migration support"
    },
    {
      id: "ai-training",
      icon: Brain,
      title: "Quantum AI Model Training",
      tagline: "Train models 50x faster",
      description: "Quantum-enhanced machine learning for faster convergence and better generalization. Ideal for large language models, computer vision, and reinforcement learning.",
      color: "yellow",
      stats: {
        speedup: "50x",
        trainingTime: "Days vs. months",
        timeToMarket: "5 weeks",
        accuracy: "5% improvement"
      },
      features: [
        "Quantum kernel methods for SVMs",
        "Variational quantum eigensolvers for optimization",
        "Quantum neural networks (QNN)",
        "Hybrid quantum-classical training",
        "GPU/TPU cluster integration"
      ],
      useCases: [
        {
          company: "AI Research Lab",
          result: "Trained 175B parameter model in 10 days vs. 6 months",
          savings: "$2M compute costs"
        },
        {
          company: "Tech Unicorn",
          result: "5% accuracy improvement on image classification tasks",
          savings: "20M users impacted"
        }
      ],
      pricing: "Enterprise: Custom | Starting at $55K/month",
      deployment: "5-7 weeks with ML team integration"
    },
    {
      id: "market-prediction",
      icon: BarChart3,
      title: "Quantum Market Prediction",
      tagline: "See the future of markets",
      description: "Quantum pattern recognition identifies complex market signals invisible to classical algorithms. Generate alpha through quantum-enhanced trading strategies.",
      color: "pink",
      stats: {
        speedup: "10,000x",
        alphaGeneration: "12%",
        timeToMarket: "10 weeks",
        accuracy: "82%"
      },
      features: [
        "High-frequency quantum signal processing",
        "Multi-asset correlation analysis",
        "Sentiment analysis with quantum NLP",
        "Regime-switching detection",
        "Automated trade execution"
      ],
      useCases: [
        {
          company: "Quantitative Trading Firm",
          result: "12% annual alpha on $500M AUM",
          savings: "$60M additional returns"
        },
        {
          company: "Prop Trading Desk",
          result: "Identified 18 profitable patterns missed by classical ML",
          savings: "$25M in profitable trades"
        }
      ],
      pricing: "Enterprise: Custom | Starting at $80K/month",
      deployment: "10-12 weeks with quant team"
    }
  ]

  const colorMap = {
    purple: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30", gradient: "from-purple-600 to-purple-700" },
    blue: { text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30", gradient: "from-blue-600 to-blue-700" },
    cyan: { text: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30", gradient: "from-cyan-600 to-cyan-700" },
    green: { text: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/30", gradient: "from-green-600 to-green-700" },
    yellow: { text: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/30", gradient: "from-yellow-600 to-yellow-700" },
    pink: { text: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/30", gradient: "from-pink-600 to-pink-700" }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-cyan-600/10" />
        
        <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="text-base px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600">
              <Target className="mr-2 h-4 w-4" />
              Production-Ready Solutions
            </Badge>
            
            <h1 className="text-6xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Quantum Solutions
              </span>
              <br />
              <span className="text-white">That Deliver ROI</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Enterprise-grade quantum applications with proven business impact. From drug discovery to financial optimization.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="container mx-auto px-6 py-24">
        <div className="space-y-24">
          {solutions.map((solution) => {
            const Icon = solution.icon
            const colors = colorMap[solution.color]
            
            return (
              <div key={solution.id} className="max-w-7xl mx-auto">
                <Card className={`bg-gray-900/50 border-2 ${colors.border} backdrop-blur`}>
                  <CardHeader className="pb-8">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-8 h-8 ${colors.text}`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-3xl mb-2">{solution.title}</CardTitle>
                        <CardDescription className="text-lg text-gray-400">{solution.tagline}</CardDescription>
                      </div>
                      <Badge className={`bg-gradient-to-r ${colors.gradient}`}>
                        Production Ready
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-8">
                    {/* Description */}
                    <p className="text-lg text-gray-300 leading-relaxed">{solution.description}</p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(solution.stats).map(([key, value]) => (
                        <div key={key} className="p-4 rounded-lg bg-gray-800/50 text-center">
                          <div className={`text-3xl font-bold ${colors.text} mb-1`}>{value}</div>
                          <div className="text-sm text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>

                    <Tabs defaultValue="features" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="features">Features</TabsTrigger>
                        <TabsTrigger value="use-cases">Use Cases</TabsTrigger>
                        <TabsTrigger value="pricing">Pricing & Deployment</TabsTrigger>
                      </TabsList>

                      {/* Features Tab */}
                      <TabsContent value="features" className="space-y-3 mt-6">
                        {solution.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-800/30 transition-colors">
                            <CheckCircle2 className={`h-5 w-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </TabsContent>

                      {/* Use Cases Tab */}
                      <TabsContent value="use-cases" className="space-y-4 mt-6">
                        {solution.useCases.map((useCase, idx) => (
                          <Card key={idx} className="bg-gray-800/50 border-gray-700">
                            <CardContent className="p-6">
                              <div className="flex items-start gap-4">
                                <Building2 className={`h-6 w-6 ${colors.text} flex-shrink-0`} />
                                <div>
                                  <h4 className="font-bold text-lg mb-2">{useCase.company}</h4>
                                  <p className="text-gray-300 mb-3">{useCase.result}</p>
                                  <Badge className="bg-green-600">
                                    <DollarSign className="h-3 w-3 mr-1" />
                                    {useCase.savings}
                                  </Badge>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </TabsContent>

                      {/* Pricing Tab */}
                      <TabsContent value="pricing" className="mt-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <Card className="bg-gray-800/50 border-gray-700">
                            <CardContent className="p-6">
                              <div className="flex items-center gap-3 mb-4">
                                <DollarSign className={`h-6 w-6 ${colors.text}`} />
                                <h4 className="font-bold text-lg">Pricing</h4>
                              </div>
                              <p className="text-gray-300 text-lg">{solution.pricing}</p>
                              <p className="text-sm text-gray-400 mt-2">Volume discounts available for multi-year contracts</p>
                            </CardContent>
                          </Card>
                          
                          <Card className="bg-gray-800/50 border-gray-700">
                            <CardContent className="p-6">
                              <div className="flex items-center gap-3 mb-4">
                                <Clock className={`h-6 w-6 ${colors.text}`} />
                                <h4 className="font-bold text-lg">Deployment</h4>
                              </div>
                              <p className="text-gray-300 text-lg">{solution.deployment}</p>
                              <p className="text-sm text-gray-400 mt-2">White-glove onboarding and training included</p>
                            </CardContent>
                          </Card>
                        </div>

                        <div className="flex gap-4 mt-6">
                          <Button size="lg" className={`bg-gradient-to-r ${colors.gradient}`}>
                            Request Demo <ArrowRight className="ml-2" />
                          </Button>
                          <Button size="lg" variant="outline">
                            Download Case Study
                          </Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-gray-800 bg-gradient-to-br from-purple-900/20 to-blue-900/20 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">
              Ready to Deploy a <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Quantum Solution?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Talk to our solutions architects to design a custom quantum application for your business
            </p>
            
            <div className="flex gap-4 justify-center pt-6">
              <Link href="/enterprise">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600">
                  <Building2 className="mr-2" />
                  Enterprise Overview
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                <Users className="mr-2" />
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
