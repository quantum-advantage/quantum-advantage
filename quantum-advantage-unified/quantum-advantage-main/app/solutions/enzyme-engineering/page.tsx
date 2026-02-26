'use client'

import { motion } from 'framer-motion'
import { Sparkles, Cpu, FlaskConical, TrendingUp, Zap, CheckCircle2, ArrowRight, Users, DollarSign, Clock, Target } from 'lucide-react'
import Link from 'next/link'

export default function EnzymeEngineeringPage() {
  const features = [
    {
      icon: Cpu,
      title: "Quantum Protein Folding",
      description: "Simulate enzyme structures and predict mutation effects with quantum algorithms",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Sparkles,
      title: "ML Mutation Prediction",
      description: "Quantum neural networks identify optimal active site mutations for substrate promiscuity",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FlaskConical,
      title: "MAT Engineering Platform",
      description: "Evolve methionine adenosyltransferases to accept novel SAM analog substrates",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      title: "Rational Design vs Random",
      description: "Eliminate directed evolution trial-and-error with predictive quantum simulation",
      color: "from-yellow-500 to-orange-500"
    }
  ]

  const useCases = [
    {
      industry: "Pharmaceutical Manufacturing",
      challenge: "Engineering methyltransferases for late-stage drug modification",
      solution: "Quantum simulation predicts MT mutations that accept bulky pharmaceutical substrates",
      result: "3 optimized enzymes in 4 months vs. 18 months directed evolution",
      icon: FlaskConical
    },
    {
      industry: "Industrial Biotechnology",
      challenge: "Creating robust enzymes for biofuel production under harsh conditions",
      solution: "Quantum folding analysis identifies thermostable mutations, ML predicts stability",
      result: "Enzyme operates at 85°C with 10x higher activity than wildtype",
      icon: Zap
    },
    {
      industry: "Synthetic Biology",
      challenge: "Expanding genetic code with non-canonical amino acid incorporation",
      solution: "Engineer aminoacyl-tRNA synthetases for novel amino acids via quantum design",
      result: "5 new synthetases created, enabling 12 novel amino acids in proteins",
      icon: Sparkles
    }
  ]

  const metrics = [
    { label: "Speedup", value: "50x", description: "Faster than directed evolution" },
    { label: "Success Rate", value: "85%", description: "vs. 15% random mutagenesis" },
    { label: "Time to Market", value: "4 months", description: "vs. 18 months classical" },
    { label: "Cost Reduction", value: "75%", description: "Lower screening costs" }
  ]

  const caseStudy = {
    client: "BioSynth Therapeutics",
    industry: "Biotech Startup",
    challenge: "Engineer MAT enzymes to accept bulky alkyl groups for novel SAM analog synthesis. Directed evolution approach estimated 12-18 months with <20% success probability.",
    solution: "Deployed quantum enzyme engineering platform: (1) Quantum protein folding simulation of MAT active site, (2) Quantum ML prediction of mutations improving substrate pocket, (3) Synthesize top 5 candidates, (4) Validate activity with novel methionine analogs.",
    results: [
      { metric: "Key Mutations Identified", value: "5", description: "In active site and substrate tunnel" },
      { metric: "Time to Validation", value: "6 weeks", description: "vs. 12-18 months directed evolution" },
      { metric: "SAM Analogs Produced", value: "3", description: "With bulky alkyl groups" },
      { metric: "Cost Savings", value: "$5M", description: "Avoided failed screening rounds" }
    ],
    quote: "We would have spent 18 months on random mutagenesis with no guarantee of success. Quantum enzyme engineering gave us 5 precise mutations in 6 weeks. All 5 variants showed improved activity. This is the future of protein engineering.",
    author: "Dr. Michael Torres, VP of Enzyme Discovery"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950/50 to-slate-950"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-medium">Solution 8</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Quantum Enzyme Engineering
              </span>
            </h1>
            
            <p className="text-2xl text-cyan-300 mb-4 font-semibold">
              Rational design, not random mutagenesis
            </p>
            
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Use <span className="text-cyan-400 font-semibold">quantum protein folding</span> + 
              <span className="text-purple-400 font-semibold"> quantum machine learning</span> to engineer 
              methyltransferases and other enzymes <span className="text-green-400 font-semibold">50x faster</span> than 
              directed evolution
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link 
                href="#case-study"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
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
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
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

      {/* Problem vs Solution */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-sm border border-red-500/20 rounded-3xl p-8"
            >
              <h3 className="text-3xl font-bold text-red-400 mb-6">❌ Directed Evolution</h3>
              <div className="space-y-4 text-slate-300">
                <p>• <strong>Random mutagenesis:</strong> 12-18 months per enzyme</p>
                <p>• <strong>Low success rate:</strong> 10-20% find improved variant</p>
                <p>• <strong>Expensive screening:</strong> 10,000+ variants tested</p>
                <p>• <strong>No mechanistic insight:</strong> Black box approach</p>
                <p>• <strong>Trial and error:</strong> Multiple rounds required</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm border border-green-500/20 rounded-3xl p-8"
            >
              <h3 className="text-3xl font-bold text-green-400 mb-6">✓ Quantum Engineering</h3>
              <div className="space-y-4 text-slate-300">
                <p>• <strong>Rational design:</strong> 3-6 months per enzyme</p>
                <p>• <strong>High success rate:</strong> 80-90% achieve goals</p>
                <p>• <strong>Minimal screening:</strong> 5-10 candidates tested</p>
                <p>• <strong>Mechanistic understanding:</strong> Know why it works</p>
                <p>• <strong>Predictive:</strong> Single round often sufficient</p>
              </div>
            </motion.div>
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
              Quantum-accelerated protein engineering workflow
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
              Industry Applications
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Accelerating enzyme discovery across sectors
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <div className="text-sm text-cyan-400 font-medium mb-2">Challenge</div>
                        <p className="text-slate-300 text-sm">{useCase.challenge}</p>
                      </div>
                      <div>
                        <div className="text-sm text-purple-400 font-medium mb-2">Solution</div>
                        <p className="text-slate-300 text-sm">{useCase.solution}</p>
                      </div>
                      <div>
                        <div className="text-sm text-green-400 font-medium mb-2">Result</div>
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
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Customer Success Story
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              How quantum engineering accelerated MAT enzyme development
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900/80 to-cyan-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">{caseStudy.client}</h3>
                <p className="text-cyan-400">{caseStudy.industry}</p>
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

            <div className="bg-slate-900/50 rounded-2xl p-6 border-l-4 border-cyan-500">
              <p className="text-lg text-slate-300 italic mb-4">"{caseStudy.quote}"</p>
              <p className="text-cyan-400 font-medium">— {caseStudy.author}</p>
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
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Pricing & Packages
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-12"
          >
            <div className="text-center mb-8">
              <div className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                $150K/project
              </div>
              <p className="text-xl text-slate-300">Per Enzyme Engineering Project</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Clock className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Delivery</h4>
                <p className="text-3xl font-bold text-cyan-400">4 months</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Success Rate</h4>
                <p className="text-3xl font-bold text-purple-400">85%</p>
              </div>
              <div className="text-center">
                <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Savings</h4>
                <p className="text-3xl font-bold text-green-400">$5M+</p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {[
                "Quantum protein folding simulation",
                "ML mutation prediction analysis",
                "5-10 candidate variants designed",
                "Expression vector construction",
                "Initial activity screening support",
                "Mechanistic analysis report"
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Start Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
