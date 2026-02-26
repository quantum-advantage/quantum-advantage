#!/bin/bash
################################################################################
# GitHub Copilot MCP Server Startup Script
# DNA::}{::Lang v51.843
################################################################################

set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║      DNA::}{::Lang Copilot MCP Server                     ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Please install Node.js 20+"
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 20 ]; then
    echo "❌ Node.js version must be 20+. Found: $(node -v)"
    exit 1
fi

echo "✅ Node.js: $(node -v)"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo ""
    echo "[*] Installing dependencies..."
    npm install
fi

# Load environment
if [ -f ".env" ]; then
    export $(cat .env | grep -v '^#' | xargs)
    echo "✅ Environment loaded"
else
    echo "⚠️  .env file not found, using defaults"
fi

echo ""
echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                   SERVER STARTING                         ║"
echo "╠═══════════════════════════════════════════════════════════╣"
echo "║  API: $QUANTUM_ADVANTAGE_API"
echo "║  "
echo "║  Tools Available:"
echo "║  • quantum_submit           - Submit quantum circuits"
echo "║  • quantum_job_status       - Check job status"
echo "║  • quantum_backends         - List backends"
echo "║  • ccce_metrics             - Get CCCE metrics"
echo "║  • consciousness_status     - Check consciousness"
echo "║  • fold_status              - Samsung Fold status"
echo "║  • fold_start_sweep         - Start sensor sweep"
echo "║  • world_engine_status      - World Engine status"
echo "║  • deploy_vercel            - Deploy to production"
echo "║  • telemetry_metrics        - System metrics"
echo "║  • noncausal_chat           - Chat with NCLM"
echo "║  "
echo "║  Physical Constants:"
echo "║  • ΛΦ = $LAMBDA_PHI s⁻¹"
echo "║  • θ_lock = $THETA_LOCK°"
echo "║  • Φ_threshold = $PHI_THRESHOLD"
echo "║  "
echo "║  Use in GitHub Copilot with @dnalang"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

# Start MCP server
exec node src/server.js
