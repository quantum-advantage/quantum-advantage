"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FileText,
  ExternalLink,
  Award,
  Zap,
} from "lucide-react"

export default function PublicationsPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Publications & Research</h1>
        <p className="text-muted-foreground">
          DNA::{'{::}'} lang v51.843 - Quantum validation experiments
        </p>
      </div>

      <Card className="border-2 border-primary">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Official Publication
              </CardTitle>
              <CardDescription className="mt-2">
                Published on Zenodo with permanent DOI
              </CardDescription>
            </div>
            <Badge variant="default" className="text-lg px-4 py-2">
              PUBLISHED
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="text-sm">
              <p className="font-semibold">DOI</p>
              <code className="text-primary">10.5281/zenodo.18450159</code>
            </div>
            <a
              href="https://doi.org/10.5281/zenodo.18450159"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto"
            >
              <Button>
                View on Zenodo
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          <div className="pt-4 border-t space-y-2 text-sm">
            <p><strong>Title:</strong> DNA lang v51.843 Quantum Validation Experiments</p>
            <p><strong>Author:</strong> Devin Phillip Davis</p>
            <p><strong>Published:</strong> February 1, 2026</p>
            <p><strong>License:</strong> CC BY 4.0 (Open Access)</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <Badge variant="secondary" className="w-fit mb-2">Phys Rev Letters</Badge>
            <CardTitle className="text-xl">Black Hole Information</CardTitle>
            <CardDescription>W₂ geometry validation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 text-sm">
              <p><strong>Result:</strong> 82.27% ± 11.69%</p>
              <p><strong>Significance:</strong> {'>'}6σ (p {'<'} 0.001)</p>
            </div>
            <Badge variant="outline" className="w-full justify-center">
              <Zap className="h-3 w-3 mr-1" />
              BREAKTHROUGH
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Badge variant="secondary" className="w-fit mb-2">Phys Rev A</Badge>
            <CardTitle className="text-xl">Geometric Resonance</CardTitle>
            <CardDescription>θ_lock = 51.843°</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 text-sm">
              <p><strong>Result:</strong> 92.21% fidelity</p>
              <p><strong>Accuracy:</strong> 0.00% error</p>
            </div>
            <Badge variant="outline" className="w-full justify-center">
              <Zap className="h-3 w-3 mr-1" />
              VALIDATED
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Badge variant="secondary" className="w-fit mb-2">Nature Physics</Badge>
            <CardTitle className="text-xl">Phase Conjugate</CardTitle>
            <CardDescription>χ_pc ≈ 0.946</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 text-sm">
              <p><strong>Result:</strong> 0.946 ± 0.003</p>
              <p><strong>Universality:</strong> 5 configs</p>
            </div>
            <Badge variant="outline" className="w-full justify-center">
              <Zap className="h-3 w-3 mr-1" />
              BREAKTHROUGH
            </Badge>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Additional Resources</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/breakthroughs">
            <Button variant="outline" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Breakthrough Gallery (27+)
            </Button>
          </Link>
          <Link href="/quantum-dashboard">
            <Button variant="outline" className="w-full justify-start">
              Live Quantum Dashboard
            </Button>
          </Link>
        </CardContent>
      </Card>

      <div className="text-center text-sm text-muted-foreground space-y-1 pt-6">
        <p>Framework: DNA::{'{::}'} lang v51.843</p>
        <p>DOI: 10.5281/zenodo.18450159</p>
      </div>
    </div>
  )
}
