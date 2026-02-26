"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Building2, 
  Cpu, 
  Database, 
  Shield, 
  TrendingUp, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Award,
  Users,
  Globe,
  LineChart,
  Lock,
  Network,
  Target,
  Rocket,
  Brain,
  BarChart3
} from "lucide-react"

export default function EnterprisePage() {
  const solutions = [
    {
      icon: Cpu,
      title: "Quantum Drug Discovery",
      description: "Accelerate molecular simulation 100,000x faster",
      roi: "80% cost reduction",
      time: "3 months to deployment",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      icon: Database,
      title: "Financial Portfolio Optimization",
      description: "Real-time risk analysis with quantum algorithms",
      roi: "15% returns increase",
      time: "6 weeks integration",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30"
    },
    {
      icon: Network,
      title: "Supply Chain Optimization",
      description: "Global logistics planning with quantum routing",
      roi: "$5M annual savings",
      time: "8 weeks deployment",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30"
    },
    {
      icon: Shield,
      title: "Post-Quantum Cryptography",
      description: "Future-proof security with quantum-resistant encryption",
      roi: "99.99% threat protection",
      time: "4 weeks integration",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30"
    },
    {
      icon: Brain,
      title: "AI Model Training",
      description: "Quantum-enhanced machine learning optimization",
      roi: "50x faster training",
      time: "5 weeks deployment",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30"
    },
    {
      icon: BarChart3,
      title: "Market Prediction",
      description: "Quantum pattern recognition for trading strategies",
      roi: "12% alpha generation",
      time: "10 weeks to production",
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30"
    }
  ]

  const industries = [
    { name: "Pharmaceuticals", clients: 12, advantage: "Drug Discovery" },
    { name: "Finance", clients: 28, advantage: "Portfolio Optimization" },
    { name: "Logistics", clients: 15, advantage: "Route Optimization" },
    { name: "Aerospace", clients: 8, advantage: "Material Simulation" },
    { name: "Energy", clients: 10, advantage: "Grid Optimization" },
    { name: "Cybersecurity", clients: 22, advantage: "Quantum Encryption" }
  ]

  const stats = [
    { value: "95", label: "Enterprise Clients", suffix: "+" },
    { value: "10000", label: "Quantum Jobs/Day", suffix: "x" },
    { value: "99.99", label: "Uptime SLA", suffix: "%" },
    { value: "24/7", label: "Enterprise Support", suffix: "" }
  ]

  const features = [
    "Dedicated quantum hardware access",
    "White-glove onboarding & training",
    "Custom algorithm development",
    "24/7 enterprise support",
    "SOC 2 Type II compliance",
    "On-premise deployment options",
    "Multi-cloud integration",
    "API-first architecture"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Enterprise Hero */}
      <div className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-cyan-600/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        
        <div className="container mx-auto px-6 py-32 relative">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <Badge className="text-base px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600">
              <Building2 className="mr-2 h-5 w-5" />
              Enterprise Quantum Solutions
            </Badge>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Proven Quantum
              </span>
              <br />
              <span className="text-white">Advantage at Scale</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Deploy production-ready quantum computing solutions that deliver measurable business impact. 
              Trusted by Fortune 500 companies across pharmaceuticals, finance, logistics, and more.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/solutions">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6">
                  <Rocket className="mr-2 h-5 w-5" />
                  View Solutions
                </Button>
              </Link>
              <Link href="/customers">
                <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 text-lg px-8 py-6">
                  <Users className="mr-2 h-5 w-5" />
                  Customer Stories
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 text-lg px-8 py-6">
                <Globe className="mr-2 h-5 w-5" />
                Request Demo
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24 max-w-6xl mx-auto">
            {stats.map((stat, idx) => (
              <Card key={idx} className="bg-gray-900/50 border-gray-800 backdrop-blur text-center">
                <CardContent className="p-6">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Enterprise Solutions */}
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-base px-4 py-2" variant="outline">
            <Target className="mr-2 h-4 w-4" />
            Quantum Advantage Solutions
          </Badge>
          <h2 className="text-5xl font-bold mb-6">
            Real Problems. <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Real Solutions.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Production-ready quantum applications delivering measurable ROI across industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => {
            const Icon = solution.icon
            return (
              <Card key={idx} className={`group hover:scale-[1.02] transition-all bg-gray-900/50 border-2 ${solution.borderColor} backdrop-blur`}>
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl ${solution.bgColor} flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${solution.color}`} />
                  </div>
                  <CardTitle className="text-2xl mb-2 group-hover:text-purple-400 transition-colors">
                    {solution.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-base">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50">
                    <span className="text-sm text-gray-400">ROI Impact</span>
                    <Badge className="bg-green-600">{solution.roi}</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-800/50">
                    <span className="text-sm text-gray-400">Time to Value</span>
                    <Badge variant="outline">{solution.time}</Badge>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Industries Served */}
      <div className="border-y border-gray-800 bg-gray-900/30 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-400">Quantum advantage across sectors</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {industries.map((industry, idx) => (
              <Card key={idx} className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{industry.name}</h3>
                      <p className="text-sm text-gray-400">{industry.clients} enterprise clients</p>
                    </div>
                    <Badge variant="outline" className="text-purple-400 border-purple-500/50">
                      Active
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Zap className="h-4 w-4 text-yellow-400" />
                    <span>Primary: {industry.advantage}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Enterprise Features */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-6">
            <Badge className="text-base px-4 py-2" variant="outline">
              <Shield className="mr-2 h-4 w-4" />
              Enterprise-Grade Platform
            </Badge>
            <h2 className="text-5xl font-bold leading-tight">
              Built for <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Mission-Critical</span> Workloads
            </h2>
            <p className="text-xl text-gray-400">
              Our quantum platform meets the highest standards for security, reliability, and performance required by enterprise organizations.
            </p>
            
            <div className="grid gap-4 pt-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-6">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Lock className="mr-2 h-5 w-5" />
                Security Details
              </Button>
              <Button size="lg" variant="outline" className="border-gray-600">
                Download Whitepaper
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Award className="text-yellow-400" />
                  Industry Recognition
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 rounded-lg bg-gray-900/50">
                  <div className="font-bold text-lg mb-1">Gartner Cool Vendor 2026</div>
                  <div className="text-sm text-gray-400">Quantum Computing category</div>
                </div>
                <div className="p-4 rounded-lg bg-gray-900/50">
                  <div className="font-bold text-lg mb-1">Forbes Cloud 100</div>
                  <div className="text-sm text-gray-400">#23 in Enterprise Software</div>
                </div>
                <div className="p-4 rounded-lg bg-gray-900/50">
                  <div className="font-bold text-lg mb-1">SOC 2 Type II Certified</div>
                  <div className="text-sm text-gray-400">Independently audited security</div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/30">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <TrendingUp className="text-green-400" />
                  Platform Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Average Speedup</span>
                  <span className="text-2xl font-bold text-green-400">10,000x</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Jobs Executed</span>
                  <span className="text-2xl font-bold text-blue-400">2.4M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Success Rate</span>
                  <span className="text-2xl font-bold text-purple-400">99.7%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-gray-800 bg-gradient-to-br from-purple-900/20 to-blue-900/20 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl font-bold">
              Ready to Achieve <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Quantum Advantage?</span>
            </h2>
            <p className="text-xl text-gray-300">
              Join 95+ enterprises leveraging quantum computing for competitive advantage
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-lg px-8 py-6">
                <Rocket className="mr-2 h-5 w-5" />
                Schedule Enterprise Demo
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-400 hover:bg-purple-500/10 text-lg px-8 py-6">
                <Globe className="mr-2 h-5 w-5" />
                Talk to Sales
              </Button>
            </div>

            <div className="flex items-center justify-center gap-8 pt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span>White-glove onboarding</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Research Links */}
      <div className="border-t border-gray-800 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Backed by Rigorous Research</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/quantum-research-2026">
                <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="font-semibold mb-2">Research Compilation</div>
                    <div className="text-sm text-gray-400">5 breakthroughs documented</div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/experimental-evidence">
                <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="font-semibold mb-2">Experimental Evidence</div>
                    <div className="text-sm text-gray-400">Zenodo DOI 10.5281/zenodo.18450159</div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/intent-engine">
                <Card className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-all cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="font-semibold mb-2">Intent-Deduction Engine</div>
                    <div className="text-sm text-gray-400">7-layer Omega architecture</div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
