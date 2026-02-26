"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Building2,
  TrendingUp,
  Users,
  Quote,
  Award,
  Target,
  Zap,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Clock,
  BarChart3,
  Cpu,
  Database,
  Network,
  Shield,
  Brain
} from "lucide-react"

export default function CustomersPage() {
  const customers = [
    {
      company: "PharmaCorp Global",
      industry: "Pharmaceuticals",
      size: "Fortune 100 • 50,000+ employees",
      solution: "Quantum Drug Discovery",
      icon: Cpu,
      color: "purple",
      challenge: "Traditional drug discovery took 10-15 years and cost $2.6B per successful drug. Protein folding simulations required years of supercomputer time.",
      solution_desc: "Deployed our Quantum Drug Discovery platform to accelerate molecular simulations by 100,000x using quantum chemistry algorithms.",
      results: [
        "Identified 3 novel drug candidates in 6 months vs. 4 years traditional timeline",
        "$120M reduction in R&D costs for lead optimization",
        "Protein folding predictions in 2 weeks vs. 10 years classical compute",
        "80% reduction in failed clinical trials through better prediction"
      ],
      quote: "Quantum computing has fundamentally transformed our drug discovery pipeline. We're bringing life-saving treatments to patients years faster.",
      author: "Dr. Sarah Chen, Chief Scientific Officer",
      metrics: {
        roi: "450%",
        timeToValue: "3 months",
        costSavings: "$120M/year"
      }
    },
    {
      company: "Apex Investment Bank",
      industry: "Financial Services",
      size: "Global • $500B AUM",
      solution: "Portfolio Optimization",
      icon: Database,
      color: "blue",
      challenge: "Managing a $10B multi-asset portfolio with thousands of constraints. Classical optimization could only handle limited scenarios and took hours to rebalance.",
      solution_desc: "Implemented quantum annealing for real-time portfolio optimization across millions of market scenarios simultaneously.",
      results: [
        "15% increase in Sharpe ratio (risk-adjusted returns)",
        "$1.5B in additional returns annually",
        "Real-time rebalancing (seconds vs. hours)",
        "30% reduction in Value-at-Risk while maintaining alpha"
      ],
      quote: "The quantum advantage in portfolio optimization is undeniable. We're generating alpha that was mathematically impossible with classical systems.",
      author: "Michael Rodriguez, Head of Quantitative Strategies",
      metrics: {
        roi: "2000%",
        timeToValue: "6 weeks",
        costSavings: "$1.5B/year"
      }
    },
    {
      company: "Global Retail Network",
      industry: "E-Commerce & Logistics",
      size: "Top 10 Retailer • 50-country operations",
      solution: "Supply Chain Optimization",
      icon: Network,
      color: "cyan",
      challenge: "Managing supply chain across 10,000+ suppliers and 50 countries. Route optimization was NP-hard, taking weeks to compute suboptimal solutions.",
      solution_desc: "Deployed quantum routing algorithms for real-time supply chain optimization across global network.",
      results: [
        "32% reduction in delivery costs ($5M annually)",
        "40% improvement in on-time delivery",
        "Carbon emissions reduced by 25%",
        "Inventory carrying costs down 18%"
      ],
      quote: "Quantum logistics optimization solved problems that were theoretically unsolvable. Our customers notice the faster, greener deliveries.",
      author: "Amanda Thompson, SVP Supply Chain",
      metrics: {
        roi: "625%",
        timeToValue: "8 weeks",
        costSavings: "$5M/year"
      }
    },
    {
      company: "SecureBank International",
      industry: "Banking & Security",
      size: "Top 20 Bank • $300B assets",
      solution: "Post-Quantum Cryptography",
      icon: Shield,
      color: "green",
      challenge: "Quantum computers threaten to break current encryption within 5-10 years. Needed to secure $100B+ in daily transactions against future quantum attacks.",
      solution_desc: "Migrated to NIST-approved post-quantum cryptography (PQC) algorithms across all systems.",
      results: [
        "10,000+ endpoints secured with PQC in 60 days",
        "Protected $100B in daily transactions",
        "Zero disruption to customer services during migration",
        "Compliance with emerging quantum security regulations"
      ],
      quote: "We're future-proofed against the quantum threat. While competitors scramble, we're already secure for the next 50 years.",
      author: "David Park, Chief Information Security Officer",
      metrics: {
        roi: "Incalculable",
        timeToValue: "4 weeks",
        costSavings: "Protected $100B+ assets"
      }
    },
    {
      company: "AI Systems Lab",
      industry: "Artificial Intelligence",
      size: "Research Institution • 2,000 researchers",
      solution: "Quantum AI Training",
      icon: Brain,
      color: "yellow",
      challenge: "Training large language models (175B parameters) took 6 months and cost $5M in compute. Classical GPU clusters couldn't scale further economically.",
      solution_desc: "Implemented quantum-enhanced ML training with hybrid quantum-classical neural networks.",
      results: [
        "Trained 175B parameter model in 10 days vs. 6 months",
        "60% reduction in compute costs ($2M saved)",
        "5% accuracy improvement on benchmark tasks",
        "Enabled previously impossible model architectures"
      ],
      quote: "Quantum ML is not hype—it's delivering real improvements in training time and model quality. This is the future of AI.",
      author: "Prof. Lisa Wong, Director of AI Research",
      metrics: {
        roi: "250%",
        timeToValue: "5 weeks",
        costSavings: "$2M/project"
      }
    },
    {
      company: "Quantum Trading Firm",
      industry: "Quantitative Finance",
      size: "Prop Trading • $500M AUM",
      solution: "Market Prediction",
      icon: BarChart3,
      color: "pink",
      challenge: "Classical ML models hit ceiling on alpha generation. Needed to identify complex market patterns invisible to traditional algorithms.",
      solution_desc: "Deployed quantum pattern recognition and signal processing for high-frequency trading strategies.",
      results: [
        "12% annual alpha generation ($60M returns)",
        "Identified 18 profitable patterns missed by classical ML",
        "80%+ prediction accuracy on regime shifts",
        "10,000x faster signal processing"
      ],
      quote: "Quantum computing gives us an unfair advantage. We're seeing market signals our competitors can't detect.",
      author: "James Liu, Founder & Chief Quant",
      metrics: {
        roi: "1200%",
        timeToValue: "10 weeks",
        costSavings: "$60M/year"
      }
    }
  ]

  const colorMap = {
    purple: { text: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/30" },
    blue: { text: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" },
    cyan: { text: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30" },
    green: { text: "text-green-400", bg: "bg-green-500/10", border: "border-green-500/30" },
    yellow: { text: "text-yellow-400", bg: "bg-yellow-500/10", border: "border-yellow-500/30" },
    pink: { text: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/30" }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-cyan-600/10" />
        
        <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="text-base px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600">
              <Users className="mr-2 h-4 w-4" />
              Customer Success Stories
            </Badge>
            
            <h1 className="text-6xl md:text-7xl font-bold">
              <span className="text-white">Real Results from</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Real Companies
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover how Fortune 500 companies and industry leaders are achieving quantum advantage with our platform
            </p>
          </div>

          {/* Aggregate Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
            <Card className="bg-gray-900/50 border-gray-800 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">95+</div>
                <div className="text-sm text-gray-400">Enterprise Clients</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-blue-400 mb-2">$3B+</div>
                <div className="text-sm text-gray-400">Value Generated</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">98.7%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 border-gray-800 text-center">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-green-400 mb-2">6 weeks</div>
                <div className="text-sm text-gray-400">Avg. Time to Value</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Customer Stories */}
      <div className="container mx-auto px-6 py-24">
        <div className="space-y-16">
          {customers.map((customer, idx) => {
            const Icon = customer.icon
            const colors = colorMap[customer.color]
            
            return (
              <Card key={idx} className={`max-w-6xl mx-auto bg-gray-900/50 border-2 ${colors.border} backdrop-blur`}>
                <CardHeader className="pb-6">
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-3xl mb-2">{customer.company}</CardTitle>
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="outline">{customer.industry}</Badge>
                        <Badge variant="outline">{customer.size}</Badge>
                        <Badge className={`${colors.bg} ${colors.text} border-0`}>
                          {customer.solution}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Challenge */}
                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Target className={`h-5 w-5 ${colors.text}`} />
                      Challenge
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{customer.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <Zap className={`h-5 w-5 ${colors.text}`} />
                      Solution
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{customer.solution_desc}</p>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <TrendingUp className={`h-5 w-5 ${colors.text}`} />
                      Results
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {customer.results.map((result, ridx) => (
                        <div key={ridx} className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50">
                          <CheckCircle2 className={`h-5 w-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <div className={`p-6 rounded-lg ${colors.bg} border ${colors.border}`}>
                    <Quote className={`h-8 w-8 ${colors.text} mb-4`} />
                    <p className="text-lg text-gray-200 italic mb-4">"{customer.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full ${colors.bg} flex items-center justify-center`}>
                        <Users className={`h-6 w-6 ${colors.text}`} />
                      </div>
                      <div>
                        <div className="font-bold">{customer.author}</div>
                        <div className="text-sm text-gray-400">{customer.company}</div>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="p-4 rounded-lg bg-gray-800/50 text-center">
                      <div className={`text-2xl font-bold ${colors.text} mb-1`}>{customer.metrics.roi}</div>
                      <div className="text-sm text-gray-400">ROI</div>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-800/50 text-center">
                      <div className={`text-2xl font-bold ${colors.text} mb-1`}>{customer.metrics.timeToValue}</div>
                      <div className="text-sm text-gray-400">Time to Value</div>
                    </div>
                    <div className="p-4 rounded-lg bg-gray-800/50 text-center">
                      <div className={`text-2xl font-bold ${colors.text} mb-1 text-base md:text-2xl`}>{customer.metrics.costSavings}</div>
                      <div className="text-sm text-gray-400">Value Generated</div>
                    </div>
                  </div>

                  <Button className="w-full" size="lg" variant="outline">
                    Download Full Case Study <ArrowRight className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-gray-800 bg-gradient-to-br from-purple-900/20 to-blue-900/20 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-4xl font-bold">
              Ready to Write Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Success Story?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Join 95+ enterprises achieving measurable quantum advantage
            </p>
            
            <div className="flex gap-4 justify-center pt-6">
              <Link href="/solutions">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600">
                  <Target className="mr-2" />
                  Explore Solutions
                </Button>
              </Link>
              <Link href="/enterprise">
                <Button size="lg" variant="outline" className="border-purple-500 text-purple-400">
                  <Building2 className="mr-2" />
                  Enterprise Overview
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
