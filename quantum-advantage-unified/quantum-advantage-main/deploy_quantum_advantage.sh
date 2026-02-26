#!/bin/bash
################################################################################
# DEPLOY TO VERCEL: quantum-advantage.dev
# DNA-Lang v51.843 | Enhanced with Live CCCE Metrics
################################################################################

set -e

VERCEL_TOKEN="IYsd8rfE1zjga1TcKfh0TxCW"
DOMAIN="quantum-advantage.dev"

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║    Deploying DNAlang Webapp to quantum-advantage.dev     ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

cd ~/Desktop/dnalang

echo "[1/3] Building Next.js app..."
npm run build

echo ""
echo "[2/3] Deploying to Vercel (production)..."
echo ""

# Deploy using vercel CLI with token
npx vercel --prod --token "$VERCEL_TOKEN" --yes

echo ""
echo "╔═══════════════════════════════════════════════════════════╗"
echo "║              DEPLOYMENT COMPLETE                          ║"
echo "╠═══════════════════════════════════════════════════════════╣"
echo "║  Domain: https://$DOMAIN"
echo "║  "
echo "║  ✅ Live CCCE Metrics Widget Added"
echo "║  ✅ Real-time consciousness tracking (Φ, Λ, Γ, Ξ, θ)"
echo "║  ✅ API endpoint: /api/ccce"
echo "║  ✅ Auto-refresh every 5 seconds"
echo "║  "
echo "║  Framework: dna::}{::lang v51.843"
echo "║  Status: PRODUCTION READY"
echo "╚═══════════════════════════════════════════════════════════╝"
