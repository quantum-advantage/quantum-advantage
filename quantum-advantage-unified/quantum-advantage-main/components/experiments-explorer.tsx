"use client"

import { useState, useEffect, useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedNumber } from "@/components/ui/animated-number"
import { ExperimentComparison } from "@/components/experiment-comparison"
import {
  Atom,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Clock,
  Hash,
  Search,
  Filter,
  X,
  TrendingUp,
  Zap,
  ArrowUpDown,
  Download,
  FileJson,
  FileSpreadsheet,
  GitCompare,
} from "lucide-react"

interface PhysicsExperiment {
  problem_type: string
  description: string
  initial_gamma: number
  final_gamma: number
  resolution_metric: number
  mechanism: string
  timesteps: number
  proof_hash: string
  timestamp: number
}

interface ExperimentData {
  framework: string
  manifold: string
  total_experiments: number
  experiments: PhysicsExperiment[]
}

export function ExperimentsExplorer() {
  const [data, setData] = useState<ExperimentData | null>(null)
  const [loading, setLoading] = useState(true)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [itemsPerPage] = useState(10)
  const [sortBy, setSortBy] = useState<"resolution" | "gamma" | "timesteps" | "timestamp">(
    "resolution"
  )
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")
  const [selectedForComparison, setSelectedForComparison] = useState<Set<number>>(new Set())
  const [showComparison, setShowComparison] = useState(false)

  useEffect(() => {
    fetch("/resolution_results.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Failed to load experiments:", err)
        setLoading(false)
      })
  }, [])

  // Get unique problem types and counts
  const problemTypes = useMemo(() => {
    if (!data) return []
    const types: Record<string, number> = {}
    data.experiments.forEach((exp) => {
      types[exp.problem_type] = (types[exp.problem_type] || 0) + 1
    })
    return Object.entries(types)
      .map(([type, count]) => ({ type, count }))
      .sort((a, b) => b.count - a.count)
  }, [data])

  // Filter and search experiments
  const filteredExperiments = useMemo(() => {
    if (!data) return []
    let filtered = data.experiments

    // Filter by type
    if (selectedType) {
      filtered = filtered.filter((exp) => exp.problem_type === selectedType)
    }

    // Search
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (exp) =>
          exp.description.toLowerCase().includes(query) ||
          exp.problem_type.toLowerCase().includes(query) ||
          exp.mechanism.toLowerCase().includes(query)
      )
    }

    return filtered
  }, [data, selectedType, searchQuery])

  // Sort experiments
  const sortedExperiments = useMemo(() => {
    const sorted = [...filteredExperiments]
    
    sorted.sort((a, b) => {
      let aVal: number, bVal: number
      
      switch (sortBy) {
        case "resolution":
          aVal = a.resolution_metric
          bVal = b.resolution_metric
          break
        case "gamma":
          aVal = a.initial_gamma - a.final_gamma
          bVal = b.initial_gamma - b.final_gamma
          break
        case "timesteps":
          aVal = a.timesteps
          bVal = b.timesteps
          break
        case "timestamp":
          aVal = a.timestamp
          bVal = b.timestamp
          break
        default:
          return 0
      }
      
      return sortOrder === "asc" ? aVal - bVal : bVal - aVal
    })
    
    return sorted
  }, [filteredExperiments, sortBy, sortOrder])

  // Pagination
  const paginatedExperiments = useMemo(() => {
    const start = (page - 1) * itemsPerPage
    const end = start + itemsPerPage
    return sortedExperiments.slice(start, end)
  }, [sortedExperiments, page, itemsPerPage])

  const totalPages = Math.ceil(sortedExperiments.length / itemsPerPage)

  // Statistics
  const stats = useMemo(() => {
    if (!data) return null
    const experiments = sortedExperiments.length > 0 ? sortedExperiments : data.experiments
    const avgResolution =
      experiments.reduce((sum, exp) => sum + exp.resolution_metric, 0) / experiments.length
    const avgGammaReduction =
      experiments.reduce((sum, exp) => sum + (exp.initial_gamma - exp.final_gamma), 0) /
      experiments.length
    const avgTimesteps =
      experiments.reduce((sum, exp) => sum + exp.timesteps, 0) / experiments.length

    return {
      avgResolution,
      avgGammaReduction,
      avgTimesteps,
      totalExperiments: experiments.length,
    }
  }, [data, sortedExperiments])

  // Export functions
  const exportToJSON = () => {
    const exportData = {
      exported_at: new Date().toISOString(),
      framework: data?.framework,
      manifold: data?.manifold,
      filters: {
        search: searchQuery || null,
        type: selectedType || null,
        sort_by: sortBy,
        sort_order: sortOrder,
      },
      total_experiments: sortedExperiments.length,
      experiments: sortedExperiments,
    }
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `experiments-${Date.now()}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const exportToCSV = () => {
    const headers = [
      "Problem Type",
      "Description",
      "Initial Gamma",
      "Final Gamma",
      "Gamma Reduction",
      "Resolution %",
      "Mechanism",
      "Timesteps",
      "Proof Hash",
      "Timestamp",
    ]
    
    const rows = sortedExperiments.map((exp) => [
      exp.problem_type,
      `"${exp.description.replace(/"/g, '""')}"`,
      exp.initial_gamma,
      exp.final_gamma,
      (exp.initial_gamma - exp.final_gamma).toFixed(3),
      (exp.resolution_metric * 100).toFixed(2),
      exp.mechanism,
      exp.timesteps,
      exp.proof_hash,
      new Date(exp.timestamp * 1000).toISOString(),
    ])
    
    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n")
    const blob = new Blob([csv], { type: "text/csv" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `experiments-${Date.now()}.csv`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedType(null)
    setSortBy("resolution")
    setSortOrder("desc")
    setPage(1)
  }

  const toggleSort = (field: typeof sortBy) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc")
    } else {
      setSortBy(field)
      setSortOrder("desc")
    }
    setPage(1)
  }

  const toggleComparison = (index: number) => {
    const newSet = new Set(selectedForComparison)
    if (newSet.has(index)) {
      newSet.delete(index)
    } else {
      if (newSet.size >= 6) {
        return // Limit to 6 experiments
      }
      newSet.add(index)
    }
    setSelectedForComparison(newSet)
  }

  const getComparisonExperiments = () => {
    return Array.from(selectedForComparison).map((idx) => sortedExperiments[idx])
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="skeleton h-8 w-64 mx-auto mb-4" />
          <div className="skeleton h-4 w-96 mx-auto" />
        </div>
        <div className="grid gap-4">
          {[...Array(5)].map((_, i) => (
            <Card key={i} className="p-6">
              <div className="skeleton h-24 w-full" />
            </Card>
          ))}
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Failed to load experiments data.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
          <Atom className="h-4 w-4 text-secondary" />
          <span className="text-sm font-medium text-secondary">
            {data.framework} • {data.manifold}
          </span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight">Quantum Problem Resolutions</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore {data.total_experiments} unsolved physics problems resolved using the DNA-Lang
          framework
        </p>
      </div>

      {/* Statistics Cards */}
      {stats && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <AnimatedCard variant="glass">
            <div className="p-4 text-center">
              <CheckCircle2 className="h-8 w-8 mx-auto mb-2 text-secondary" />
              <p className="text-2xl font-bold">
                <AnimatedNumber value={stats.totalExperiments} />
              </p>
              <p className="text-xs text-muted-foreground">Total Experiments</p>
            </div>
          </AnimatedCard>
          <AnimatedCard variant="glass" delay={0.1}>
            <div className="p-4 text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold">
                <AnimatedNumber value={stats.avgResolution * 100} decimals={2} suffix="%" />
              </p>
              <p className="text-xs text-muted-foreground">Avg Resolution</p>
            </div>
          </AnimatedCard>
          <AnimatedCard variant="glass" delay={0.2}>
            <div className="p-4 text-center">
              <Zap className="h-8 w-8 mx-auto mb-2 text-accent" />
              <p className="text-2xl font-bold">
                <AnimatedNumber value={stats.avgGammaReduction} decimals={3} />
              </p>
              <p className="text-xs text-muted-foreground">Avg Γ Reduction</p>
            </div>
          </AnimatedCard>
          <AnimatedCard variant="glass" delay={0.3}>
            <div className="p-4 text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-2xl font-bold">
                <AnimatedNumber value={stats.avgTimesteps} decimals={0} />
              </p>
              <p className="text-xs text-muted-foreground">Avg Timesteps</p>
            </div>
          </AnimatedCard>
        </div>
      )}

      {/* Filters and Search */}
      <Card className="p-4">
        <div className="flex flex-col gap-4">
          {/* Top Row: Search and Export */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search experiments, problem types, or mechanisms..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setPage(1)
                  }}
                  className="pl-10"
                />
              </div>
            </div>

            {/* Export Buttons */}
            <div className="flex gap-2">
              {selectedForComparison.size > 0 && (
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => setShowComparison(true)}
                  className="gap-2"
                >
                  <GitCompare className="h-4 w-4" />
                  Compare ({selectedForComparison.size})
                </Button>
              )}
              <Button
                variant="outline"
                size="sm"
                onClick={exportToJSON}
                className="gap-2"
                disabled={sortedExperiments.length === 0}
              >
                <FileJson className="h-4 w-4" />
                JSON
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={exportToCSV}
                className="gap-2"
                disabled={sortedExperiments.length === 0}
              >
                <FileSpreadsheet className="h-4 w-4" />
                CSV
              </Button>
            </div>
          </div>

          {/* Bottom Row: Sort and Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="h-4 w-4 text-muted-foreground" />
              <div className="flex gap-2 flex-wrap">
                {[
                  { value: "resolution", label: "Resolution" },
                  { value: "gamma", label: "Γ Reduction" },
                  { value: "timesteps", label: "Timesteps" },
                  { value: "timestamp", label: "Date" },
                ].map(({ value, label }) => (
                  <Badge
                    key={value}
                    variant={sortBy === value ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/20 transition-colors"
                    onClick={() => toggleSort(value as typeof sortBy)}
                  >
                    {label} {sortBy === value && (sortOrder === "asc" ? "↑" : "↓")}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Type Filter */}
            <div className="flex gap-2 flex-wrap items-center">
              <Filter className="h-4 w-4 text-muted-foreground" />
              {problemTypes.slice(0, 5).map(({ type, count }) => (
                <Badge
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/20 transition-colors"
                  onClick={() => {
                    setSelectedType(selectedType === type ? null : type)
                    setPage(1)
                  }}
                >
                  {type.replace(/_/g, " ")} ({count})
                </Badge>
              ))}
              {(searchQuery || selectedType || sortBy !== "resolution" || sortOrder !== "desc") && (
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  <X className="h-4 w-4 mr-1" />
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* Results count */}
          <div className="text-sm text-muted-foreground">
            Showing {paginatedExperiments.length} of {sortedExperiments.length} experiments
            {sortBy !== "resolution" || sortOrder !== "desc" ? (
              <span className="ml-2 text-primary">
                (sorted by {sortBy} {sortOrder === "asc" ? "↑" : "↓"})
              </span>
            ) : null}
          </div>
        </div>
      </Card>

      {/* Experiments List */}
      <div className="grid gap-4">
        {paginatedExperiments.map((experiment, paginatedIndex) => {
          const actualIndex = (page - 1) * itemsPerPage + paginatedIndex
          const isSelected = selectedForComparison.has(actualIndex)
          
          return (
            <AnimatedCard key={actualIndex} delay={paginatedIndex * 0.05} variant="glass">
              <div className="p-6 space-y-4">
                {/* Header with Checkbox */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 flex-1">
                    <Checkbox
                      checked={isSelected}
                      onCheckedChange={() => toggleComparison(actualIndex)}
                      disabled={!isSelected && selectedForComparison.size >= 6}
                      className="mt-1"
                    />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline" className="text-xs">
                          {experiment.problem_type.replace(/_/g, " ")}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Resolved
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-lg leading-tight">
                        {experiment.description}
                      </h3>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleExpand(actualIndex)}
                    className="shrink-0"
                  >
                    {expandedIndex === actualIndex ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Resolution</p>
                  <p className="text-2xl font-bold text-secondary">
                    <AnimatedNumber
                      value={experiment.resolution_metric * 100}
                      decimals={2}
                      suffix="%"
                    />
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Initial Γ</p>
                  <p className="text-2xl font-bold">
                    <AnimatedNumber value={experiment.initial_gamma} decimals={2} />
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Final Γ</p>
                  <p className="text-2xl font-bold text-primary">
                    <AnimatedNumber value={experiment.final_gamma} decimals={3} />
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Timesteps</p>
                  <p className="text-2xl font-bold text-accent">
                    <AnimatedNumber value={experiment.timesteps} />
                  </p>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedIndex === actualIndex && (
                <div className="pt-4 border-t border-border/50 space-y-3 slide-in-left">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Mechanism</p>
                      <Badge variant="outline" className="font-mono text-xs">
                        {experiment.mechanism}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Proof Hash</p>
                      <div className="flex items-center gap-1">
                        <Hash className="h-3 w-3 text-muted-foreground" />
                        <span className="font-mono text-xs">{experiment.proof_hash}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Timestamp</p>
                    <div className="flex items-center gap-1 text-xs">
                      <Clock className="h-3 w-3" />
                      {new Date(experiment.timestamp * 1000).toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Γ Reduction</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">
                        {experiment.initial_gamma.toFixed(3)} → {experiment.final_gamma.toFixed(3)}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        -{((1 - experiment.final_gamma / experiment.initial_gamma) * 100).toFixed(1)}
                        %
                      </Badge>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </AnimatedCard>
        )
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            Previous
          </Button>
          <span className="text-sm text-muted-foreground">
            Page {page} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>
      )}

      {/* Comparison Modal */}
      {showComparison && (
        <ExperimentComparison
          experiments={getComparisonExperiments()}
          onClose={() => setShowComparison(false)}
        />
      )}
    </div>
  )
}
