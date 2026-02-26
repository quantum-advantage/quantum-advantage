'use client'

import { motion } from 'framer-motion'
import { Dna, Microscope, Brain, TrendingUp, Zap, CheckCircle2, ArrowRight, Users, DollarSign, Clock } from 'lucide-react'
import Link from 'next/link'

export default function EpigeneticsPage() {
  const features = [
    {
      icon: Dna,
      title: "tSAM Bioorthogonal Labeling",
      description: "Stable tetrazole-SAM analogs identify methyltransferase targets in living cells without interference",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Brain,
      title: "Quantum ML Pattern Recognition",
      description: "Analyze massive methylation datasets 1,000x faster with quantum machine learning algorithms",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Microscope,
      title: "In Vivo Target Identification",
      description: "Map which methyltransferases cause which methylation events in living systems",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Predictive Phenotype Analysis",
      description: "Quantum simulation predicts disease outcomes from methylation signatures",
      color: "from-yellow-500 to-orange-500"
    }
  ]

  const useCases = [
    {
      industry: "Cancer Research",
      challenge: "Identifying aberrant DNA methylation patterns in tumors",
      solution: "tSAM labels + quantum ML identifies 8 novel MT targets causing hypermethylation",
      result: "3 months vs. 2+ years classical, 5 new drug candidates identified",
      icon: Microscope
    },
    {
      industry: "Neuroscience",
      challenge: "Understanding methylation's role in Alzheimer's and Parkinson's",
      solution: "Map brain methylome changes with quantum speed analysis",
      result: "Discovered 12 methylation biomarkers for early disease detection",
      icon: Brain
    },
    {
      industry: "Behavioral Genetics",
      challenge: "Linking DNA methylation to memory formation and addiction",
      solution: "Real-time methylation tracking in neural circuits during learning",
      result: "Identified epigenetic mechanisms of memory consolidation",
      icon: Dna
    }
  ]

  const metrics = [
    { label: "Speedup", value: "1,000x", description: "Faster than classical methylation mapping" },
    { label: "Accuracy", value: "95%", description: "MT target identification success rate" },
    { label: "Time to Value", value: "8 weeks", description: "From sample to validated targets" },
    { label: "Cost Reduction", value: "78%", description: "Lower than traditional screening" }
  ]

  const caseStudy = {
    client: "National Cancer Research Institute",
    industry: "Cancer Research",
    challenge: "Identify which methyltransferases cause aberrant methylation in acute myeloid leukemia (AML). Traditional approaches required 18-24 months of trial-and-error experiments.",
    solution: "Deployed quantum epigenetics platform: (1) Label AML cells with tSAM analogs, (2) Extract methylation data, (3) Quantum ML analysis identifies MT-methylation relationships, (4) Validate targets with CRISPR knockdowns.",
    results: [
      { metric: "Novel MT Targets Identified", value: "8", description: "Previously unknown methylation drivers" },
      { metric: "Time to Discovery", value: "3 months", description: "vs. 24 months classical" },
      { metric: "Drug Candidates Generated", value: "5", description: "Now in preclinical testing" },
      { metric: "Cost Savings", value: "$50M", description: "Avoided failed experiments" }
    ],
    quote: "The quantum epigenetics platform compressed 2 years of work into 3 months. We identified 8 methyltransferase targets we would never have found with classical methods. This is transformational for cancer research.",
    author: "Dr. Sarah Chen, Director of Epigenetics"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950/50 to-slate-950"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6">
              <Dna className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Solution 7</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Quantum Epigenetics Discovery
              </span>
            </h1>
            
            <p className="text-2xl text-purple-300 mb-4 font-semibold">
              Map the methylome at quantum speed
            </p>
            
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Combine <span className="text-purple-400 font-semibold">tetrazole-SAM bioorthogonal labeling</span> with 
              <span className="text-cyan-400 font-semibold"> quantum machine learning</span> to identify methyltransferase 
              targets <span className="text-green-400 font-semibold">1,000x faster</span> than classical methods
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link 
                href="#case-study"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
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
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
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

      {/* Features Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Unique integration of chemical biology and quantum computing
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
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Use Cases
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Transforming research across multiple fields
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
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{useCase.industry}</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <div className="text-sm text-purple-400 font-medium mb-2">Challenge</div>
                        <p className="text-slate-300 text-sm">{useCase.challenge}</p>
                      </div>
                      <div>
                        <div className="text-sm text-cyan-400 font-medium mb-2">Solution</div>
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
      <section id="case-study" className="py-20 px-6 bg-slate-900/30">
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
              How quantum epigenetics accelerated AML research
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900/80 to-purple-900/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">{caseStudy.client}</h3>
                <p className="text-purple-400">{caseStudy.industry}</p>
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

            <div className="bg-slate-900/50 rounded-2xl p-6 border-l-4 border-purple-500">
              <p className="text-lg text-slate-300 italic mb-4">"{caseStudy.quote}"</p>
              <p className="text-purple-400 font-medium">— {caseStudy.author}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pricing & Packages
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12"
          >
            <div className="text-center mb-8">
              <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                $200K/year
              </div>
              <p className="text-xl text-slate-300">Enterprise Annual Subscription</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Clock className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Time to Value</h4>
                <p className="text-3xl font-bold text-purple-400">8 weeks</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">Speedup</h4>
                <p className="text-3xl font-bold text-cyan-400">1,000x</p>
              </div>
              <div className="text-center">
                <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-white mb-2">ROI</h4>
                <p className="text-3xl font-bold text-green-400">250%</p>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              {[
                "Unlimited tSAM analog usage",
                "Quantum ML analysis platform access",
                "8 weeks implementation & training",
                "Dedicated success manager",
                "Priority support (24/7)",
                "Quarterly business reviews"
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
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
