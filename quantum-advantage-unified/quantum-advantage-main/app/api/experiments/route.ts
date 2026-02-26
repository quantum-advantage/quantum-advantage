import { NextResponse } from "next/server"

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://trtncqkfvrtiicxxnkjd.supabase.co"
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRydG5jcWtmdnJ0aWljeHhua2pkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE2ODg5NDksImV4cCI6MjA4NzI2NDk0OX0.TP-Vff5mDAtaM9fMHXowIJGuu1IV-nUlsvF4oLj44oQ"

export async function GET() {
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/quantum_experiments?select=*&order=created_at.desc&limit=50`,
      {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
        next: { revalidate: 30 },
      }
    )

    if (!res.ok) {
      return NextResponse.json({ error: `Supabase ${res.status}` }, { status: 500 })
    }

    const experiments = await res.json()
    const completed = experiments.filter((e: any) => e.status === "completed")

    const avgPhi = completed.length
      ? completed.reduce((s: number, e: any) => s + (e.phi || 0), 0) / completed.length
      : 0
    const avgGamma = completed.length
      ? completed.reduce((s: number, e: any) => s + (e.gamma || 0), 0) / completed.length
      : 0

    return NextResponse.json({
      experiments,
      metrics: {
        total: experiments.length,
        completed: completed.length,
        avg_phi: parseFloat(avgPhi.toFixed(4)),
        avg_gamma: parseFloat(avgGamma.toFixed(4)),
        total_shots: completed.reduce((s: number, e: any) => s + (e.shots || 0), 0),
        max_qubits: Math.max(...completed.map((e: any) => e.qubits_used || 0), 0),
        backends: [...new Set(completed.map((e: any) => e.backend))],
        above_threshold: completed.filter((e: any) => (e.phi || 0) >= 0.7734).length,
        coherent: completed.filter((e: any) => (e.gamma || 0) < 0.3).length,
      },
    })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
