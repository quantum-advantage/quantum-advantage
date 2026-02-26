import { NextResponse } from "next/server"
import { spawn } from "child_process"
import path from "path"

/**
 * Lambda-Phi v3 Encode API
 * 
 * Creates quantum circuit encoding for (Λ, Φ) values using
 * the corrected v3 observable convention.
 * 
 * POST /api/lambda-phi/v3/encode
 */
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { lambda, phi } = body

    // Validate inputs
    if (typeof lambda !== "number" || typeof phi !== "number") {
      return NextResponse.json(
        { error: "Lambda and Phi must be numbers" },
        { status: 400 }
      )
    }

    if (lambda < 0 || lambda > 1 || phi < 0 || phi > 1) {
      return NextResponse.json(
        { error: "Lambda and Phi must be in [0, 1]" },
        { status: 400 }
      )
    }

    // For now, return simulated circuit (full Python bridge needs subprocess)
    const circuit = generateCircuitQASM(lambda, phi)

    return NextResponse.json({
      version: "v3.0",
      input: { lambda, phi },
      circuit: circuit,
      observables: {
        Lambda: "(0.5*II) + (-0.5*ZI)",
        Phi: "(0.5*II) + (-0.5*IZ)",
        LambdaPhi: "(0.25*IIII) + (-0.25*ZIIZ) + (-0.25*IZZI) + (0.25*ZZII)"
      },
      lambda_phi_product: lambda * phi,
      status: "ok",
      timestamp: new Date().toISOString(),
    })
  } catch (error: any) {
    console.error("Error in v3/encode:", error)
    return NextResponse.json(
      { error: error.message || "Internal server error" },
      { status: 500 }
    )
  }
}

function generateCircuitQASM(lambda: number, phi: number): string {
  const thetaLambda = 2 * Math.asin(Math.sqrt(lambda))
  const thetaPhi = 2 * Math.asin(Math.sqrt(phi))
  
  return `OPENQASM 2.0;
include "qelib1.inc";
qreg q[2];
creg c[2];
ry(${thetaLambda}) q[0];
ry(${thetaPhi}) q[1];
measure q[0] -> c[0];
measure q[1] -> c[1];`
}
