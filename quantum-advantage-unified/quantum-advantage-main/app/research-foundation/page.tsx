'use client'

import { motion } from 'framer-motion'
import { BookOpen, Beaker, Dna, Sparkles, GraduationCap, Zap, ArrowRight, FileText, Award, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function ResearchFoundation() {
  const milestones = [
    {
      year: "2015",
      title: "PhD Research Begins",
      description: "Started doctoral research on alkylrandomization and methyltransferases",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500"
    },
    {
      year: "2016-2018",
      title: "tSAM Breakthrough",
      description: "Developed tetrazole-SAM: stable SAM analog impervious to degradation",
      icon: Beaker,
      color: "from-cyan-500 to-blue-500"
    },
    {
      year: "2019-2020",
      title: "Thesis Completion",
      description: "Validated chemoenzymatic platform with 40+ methionine analogs",
      icon: Award,
      color: "from-green-500 to-emerald-500"
    },
    {
      year: "2021-2024",
      title: "Quantum Platform Development",
      description: "Built production quantum computing platform serving 95+ enterprise clients",
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    },
    {
      year: "2025",
      title: "Integration & Validation",
      description: "Published quantum research to Zenodo (DOI: 10.5281/zenodo.18450159)",
      icon: FileText,
      color: "from-pink-500 to-rose-500"
    },
    {
      year: "2026",
      title: "Enterprise Launch",
      description: "Integrated thesis research with quantum platform for drug discovery",
      icon: TrendingUp,
      color: "from-indigo-500 to-purple-500"
    }
  ]

  const researchAreas = [
    {
      title: "Alkylrandomization",
      description: "Chemoenzymatic synthesis of SAM analogs for methyltransferase reactions",
      icon: Dna,
      applications: [
        "Epigenetics: DNA/RNA methylation studies",
        "Proteomics: Protein methylation analysis",
        "Natural Products: NP scaffold diversification"
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Tetrazole-SAM (tSAM)",
      description: "Revolutionary stable SAM analog using tetrazole isostere replacement",
      icon: Beaker,
      applications: [
        "Bioorthogonal MT target identification",
        "In vivo methylation mapping",
        "Resistant to HSL/MTA degradation"
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "MAT Engineering",
      description: "Platform for evolving methionine adenosyltransferases for substrate promiscuity",
      icon: Sparkles,
      applications: [
        "Accept bulky alkyl groups",
        "One-pot MAT-MT reactions",
        "Expand SAM analog chemical space"
      ],
      color: "from-green-500 to-emerald-500"
    }
  ]

  const publications = [
    {
      title: "Alkylrandomization: A chemical biology tool for elucidating answers in epigenetics, proteomics, and small-molecule signaling",
      type: "PhD Thesis",
      year: "2020",
      description: "Comprehensive research on SAM analog synthesis and methyltransferase applications"
    },
    {
      title: "Quantum Research Compilation 2026",
      type: "Zenodo Publication",
      year: "2026",
      doi: "10.5281/zenodo.18450159",
      description: "5 breakthrough discoveries, 4 universal constants, 27+ quantum experiments"
    },
    {
      title: "QUANTUM SOVEREIGNTY Textbook",
      type: "In Progress",
      year: "2026",
      description: "10-volume comprehensive textbook: 3,546 research files, 1.3M+ lines of code"
    }
  ]

  const newSolutions = [
    {
      title: "Quantum Epigenetics Discovery",
      tagline: "Map the methylome at quantum speed",
      description: "Combine tSAM bioorthogonal labeling with quantum ML for 1,000x faster MT target identification",
      speedup: "1,000x",
      market: "$15B",
      pricing: "$200K/year",
      link: "/solutions/epigenetics",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Quantum Enzyme Engineering",
      tagline: "Rational design, not random mutagenesis",
      description: "Quantum protein folding + ML to engineer enzymes 50x faster than directed evolution",
      speedup: "50x",
      market: "$5B",
      pricing: "$150K/project",
      link: "/solutions/enzyme-engineering",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Quantum Natural Product Optimization",
      tagline: "Diversify NP scaffolds at scale",
      description: "MT-based alkylrandomization + quantum screening for 10,000x faster analog evaluation",
      speedup: "10,000x",
      market: "$180B",
      pricing: "$500K/program",
      link: "/solutions/natural-products",
      color: "from-green-500 to-emerald-500"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950/50 to-slate-950"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6">
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Research Foundation</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                From Bench to Quantum
              </span>
            </h1>
            
            <p className="text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              How 10 years of PhD research on stable SAM analogs powers the world's first 
              <span className="text-purple-400 font-semibold"> quantum-accelerated drug discovery platform</span>
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-purple-400" />
                <span className="text-slate-300">PhD Chemistry</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-300">Quantum Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-slate-300">$526M ARR Potential</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          >
            {[
              { label: "Years Research", value: "10+", color: "purple" },
              { label: "Analogs Synthesized", value: "40+", color: "cyan" },
              { label: "Enterprise Clients", value: "95+", color: "green" },
              { label: "New Solutions", value: "3", color: "pink" }
            ].map((stat, i) => (
              <div key={i} className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 text-center">
                <div className={`text-4xl font-bold bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              The Journey
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              From academic research to enterprise platform
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-500 to-green-500"></div>

            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative mb-12 ${i % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'} md:w-1/2`}
              >
                <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 ml-16 md:ml-0">
                  <div className={`absolute left-8 md:left-auto ${i % 2 === 0 ? 'md:right-[-40px]' : 'md:left-[-40px]'} top-8 w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center border-4 border-slate-950`}>
                    <milestone.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className={`text-3xl font-bold bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent mb-2`}>
                    {milestone.year}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                  <p className="text-slate-400">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Core Research Areas
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Three pillars of chemical biology innovation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {researchAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                <p className="text-slate-400 mb-6">{area.description}</p>
                
                <div className="space-y-3">
                  {area.applications.map((app, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${area.color} mt-2`}></div>
                      <span className="text-sm text-slate-300">{app}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Key Publications
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Academic foundation and research compilation
            </p>
          </motion.div>

          <div className="space-y-6">
            {publications.map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                        {pub.type}
                      </span>
                      <span className="text-slate-500 text-sm">{pub.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{pub.title}</h3>
                    <p className="text-slate-400 mb-4">{pub.description}</p>
                    {pub.doi && (
                      <a 
                        href={`https://doi.org/${pub.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span className="text-sm">DOI: {pub.doi}</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <FileText className="w-12 h-12 text-slate-600" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Solutions Section */}
      <section className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Thesis-Powered Enterprise Solutions
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Unique competitive advantages from 10 years of chemical biology research
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {newSolutions.map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-slate-600/50 transition-all"
              >
                <div className={`w-full h-2 rounded-full bg-gradient-to-r ${solution.color} mb-6`}></div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-cyan-400 text-sm font-medium mb-4">{solution.tagline}</p>
                <p className="text-slate-400 mb-6">{solution.description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                      {solution.speedup}
                    </div>
                    <div className="text-xs text-slate-500">Speedup</div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                      {solution.market}
                    </div>
                    <div className="text-xs text-slate-500">Market</div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${solution.color} bg-clip-text text-transparent`}>
                      {solution.pricing}
                    </div>
                    <div className="text-xs text-slate-500">Pricing</div>
                  </div>
                </div>
                
                <Link 
                  href={solution.link}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${solution.color} text-white font-medium hover:opacity-90 transition-opacity`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Revenue Projection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-12 text-center"
          >
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              $526M ARR Potential
            </h3>
            <p className="text-xl text-slate-300 mb-8">5-Year Revenue Projection from Thesis-Powered Solutions</p>
            <div className="grid grid-cols-5 gap-4 max-w-4xl mx-auto">
              {[
                { year: "Year 1", arr: "$5M" },
                { year: "Year 2", arr: "$41M" },
                { year: "Year 3", arr: "$90M" },
                { year: "Year 4", arr: "$155M" },
                { year: "Year 5", arr: "$235M" }
              ].map((proj, i) => (
                <div key={i} className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4">
                  <div className="text-sm text-slate-400 mb-2">{proj.year}</div>
                  <div className="text-2xl font-bold text-purple-400">{proj.arr}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900/80 to-indigo-900/80 backdrop-blur-sm border border-indigo-500/20 rounded-3xl p-12"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Ready to Accelerate Your Drug Discovery?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Leverage 10 years of chemical biology research + production quantum computing
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/solutions"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:opacity-90 transition-opacity"
              >
                Explore Solutions
              </Link>
              <Link 
                href="/customers"
                className="px-8 py-4 rounded-xl bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors"
              >
                Read Case Studies
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
