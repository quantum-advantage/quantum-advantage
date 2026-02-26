'use client'

import { motion } from 'framer-motion'
import { Leaf, Atom, Pill, TrendingUp, Zap, CheckCircle2, ArrowRight, Users, DollarSign, Clock, FlaskConical } from 'lucide-react'
import Link from 'next/link'

export default function NaturalProductsPage() {
  const features = [
    {
      icon: Leaf,
      title: "MT-Based Alkylrandomization",
      description: "Use methyltransferases to generate diverse natural product analog libraries via SAM analogs",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Atom,
      title: "Quantum Molecular Dynamics",
      description: "Simulate analog properties at quantum scale: binding, ADME, toxicity predictions",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FlaskConical,
      title: "Virtual Screening at Scale",
      description: "Screen 10,000+ analogs in silico before synthesis, identify top candidates",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Pill,
      title: "Drug-Like Property Optimization",
      description: "Quantum optimization designs analogs with improved pharmacokinetics and activity",
      color: "from-yellow-500 to-orange-500"
    }
  ]

  const useCases = [
    {
      industry: "Antibiotic Development",
      challenge: "Diversify vancomycin scaffold to combat drug-resistant bacteria",
      solution: "MT alkylrandomization generates 1,200 glycopeptide analogs, quantum screening identifies hits",
      result: "15 analogs with improved activity against MRSA, 1 in Phase I trials",
      icon: Pill
    },
    {
      industry: "Anticancer Agents",
      challenge: "Expand taxol chemical space for broader cancer spectrum",
      solution: "Generate 800 taxane analogs via regioselective methylation, quantum ADME prediction",
      result: "8 candidates with 10x better tumor penetration, 3 entering IND studies",
      icon: Atom
    },
    {
      industry: "Agrochemicals",
      challenge: "Create novel herbicide scaffolds from plant secondary metabolites",
      solution: "NP diversification + quantum target docking for weed-specific pathways",
      result: "20 lead compounds, 5 with herbicidal activity, low mammalian toxicity",
      icon: Leaf
    }
  ]

  const metrics = [
    { label: "Library Size", value: "1,000+", description: "Analogs generated per program" },
    { label: "Speedup", value: "10,000x", description: "Faster analog evaluation" },
    { label: "Hit Rate", value: "12%", description: "vs. 0.5% classical screening" },
    { label: "Cost Savings", value: "$80M", description: "Per drug program" }
  ]

  const caseStudy = {
    client: "GlobalPharma Antibiotics Division",
    industry: "Pharmaceutical Company",
    challenge: "Vancomycin resistance threatens last-resort antibiotic. Need novel glycopeptide analogs with improved activity against VRE and MRSA. Classical medicinal chemistry approach: 5-10 years, <1% success rate.",
    solution: "Deployed quantum NP optimization platform: (1) MT-based alkylrandomization of vancomycin aglycon, (2) Generate 1,200 analogs with diverse lipophilic tails, (3) Quantum virtual screening for bacterial cell wall binding, (4) ADME prediction filters to 50 candidates, (5) Synthesize and test top 25.",
    results: [
      { metric: "Analogs Screened", value: "1,200", description: "Via quantum simulation" },
      { metric: "Improved Activity", value: "15", description: "Against drug-resistant strains" },
      { metric: "Lead Candidate", value: "1", description: "Now in Phase I clinical trials" },
      { metric: "Program Cost Savings", value: "$80M", description: "vs. traditional med chem" }
    ],
    quote: "We generated 1,200 vancomycin analogs and screened them all computationally in 6 months. Classical chemistry would have taken a decade and cost $100M. We found 15 compounds with superior activity, and one is now in human trials. This platform is a game-changer for natural product drug discovery.",
    author: "Dr. Patricia Johnson, SVP of Discovery Chemistry"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-green-950 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-slate-950/50 to-slate-950"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 mb-6">
              <Leaf className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-sm font-medium">Solution 9</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Quantum Natural Product Optimization
              </span>
            </h1>
            
            <p className="text-2xl text-green-300 mb-4 font-semibold">
              Diversify NP scaffolds at scale
            </p>
            
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Use <span className="text-green-400 font-semibold">methyltransferase-based alkylrandomization</span> to 
              generate analog libraries, then <span className="text-purple-400 font-semibold">quantum virtual screening</span> to 
              identify drug candidates <span className="text-cyan-400 font-semibold">10,000x faster</span> than synthesis + bioassay
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link 
                href="#case-study"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                View Case Study
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/research-foundation"
                className="px-8 py-4 rounded-xl bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors"
              >
                Research Foundation
              </Link>
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {metrics.map((metric, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-white font-medium mb-1">{metric.label}</div>
                  <div className="text-slate-400 text-sm">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Platform Workflow
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From natural product to optimized drug candidate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              { step: "1", title: "Alkylrandomization", desc: "Generate 1,000+ NP analogs via MTs + SAM analogs", color: "from-green-500 to-emerald-500" },
              { step: "2", title: "Quantum Screening", desc: "Virtual screen all analogs for target binding & ADME", color: "from-cyan-500 to-blue-500" },
              { step: "3", title: "Lead Selection", desc: "Identify top 20-50 candidates for synthesis", color: "from-purple-500 to-pink-500" },
              { step: "4", title: "Validation", desc: "Synthesize & test leads, iterate if needed", color: "from-yellow-500 to-orange-500" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl font-bold text-white mb-4 mx-auto`}>
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-3">{item.title}</h3>
                <p className="text-slate-400 text-center text-sm">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-slate-600 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Platform Capabilities
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              End-to-end NP optimization technology stack
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Target Industries
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Accelerating NP drug discovery across therapeutic areas
            </p>
          </motion.div>

          <div className="space-y-6">
            {useCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <div className="text-sm text-green-400 font-medium mb-2">Challenge</div>
                        <p className="text-slate-300 text-sm">{useCase.challenge}</p>
                      </div>
                      <div>
                        <div className="text-sm text-cyan-400 font-medium mb-2">Solution</div>
                        <p className="text-slate-300 text-sm">{useCase.solution}</p>
                      </div>
                      <div>
                        <div className="text-sm text-purple-400 font-medium mb-2">Result</div>
                        <p className="text-slate-300 text-sm">{useCase.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Customer Success Story
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              How quantum NP optimization revived vancomycin
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900/80 to-green-900/30 backdrop-blur-sm border border-green-500/20 rounded-3xl p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">{caseStudy.client}</h3>
                <p className="text-green-400">{caseStudy.industry}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  Challenge
                </h4>
                <p className="text-slate-300">{caseStudy.challenge}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                  Solution
                </h4>
                <p className="text-slate-300">{caseStudy.solution}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Results
                </h4>
                <div className="space-y-4">
                  {caseStudy.results.map((result, i) => (
                    <div key={i}>
                      <div className="text-2xl font-bold text-green-400">{result.value}</div>
                      <div className="text-sm text-white font-medium">{result.metric}</div>
                      <div className="text-xs text-slate-400">{result.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-2xl p-6 border-l-4 border-green-500">
              <p className="text-lg text-slate-300 italic mb-4">"{caseStudy.quote}"</p>
              <p className="text-green-400 font-medium">— {caseStudy.author}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Pricing & Packages
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm border border-green-500/20 rounded-3xl p-12"
          >
            <div className="text-center mb-8">
              <div className="text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                $500K/program
              </div>
              <p className="text-xl text-slate-300">Per Drug Discovery Program</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Timeline</h4>
                <p className="text-3xl font-bold text-green-400">6 months</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Library Size</h4>
                <p className="text-3xl font-bold text-cyan-400">1,000+</p>
              </div>
              <div className="text-center">
                <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Savings</h4>
                <p className="text-3xl font-bold text-yellow-400">$80M+</p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {[
                "1,000+ analog library generation",
                "Quantum virtual screening (all analogs)",
                "ADME/Tox prediction & filtering",
                "Top 50 candidates identified",
                "Synthesis recommendations",
                "Iterative optimization (2 rounds)"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link 
                href="/enterprise"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Start Program
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
