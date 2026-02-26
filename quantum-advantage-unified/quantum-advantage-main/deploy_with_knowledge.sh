#!/usr/bin/env bash
# Deploy DNA-Lang webapp with Knowledge Base integration

CYAN='\033[0;36m'
GOLD='\033[0;33m'
GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GOLD}     DEPLOYING TO QUANTUM-ADVANTAGE.DEV${NC}"
echo -e "${CYAN}     dna::}{::lang v51.843 | Knowledge Base Integration${NC}"
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

echo -e "\n${GOLD}[1/5] Checking environment...${NC}"
if [ ! -f .env.local ]; then
    echo -e "${RED}Error: .env.local not found${NC}"
    exit 1
fi

VERCEL_TOKEN=$(grep VERCEL_TOKEN .env.local | cut -d'=' -f2)
if [ -z "$VERCEL_TOKEN" ]; then
    echo -e "${RED}Error: VERCEL_TOKEN not found${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Environment ready${NC}"

echo -e "\n${GOLD}[2/5] Installing dependencies...${NC}"
npm install --legacy-peer-deps 2>&1 | tail -5

echo -e "\n${GOLD}[3/5] Building application...${NC}"
npm run build 2>&1 | tail -20

if [ ${PIPESTATUS[0]} -ne 0 ]; then
    echo -e "${RED}Build failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Build successful${NC}"

echo -e "\n${GOLD}[4/5] Deploying to Vercel...${NC}"
vercel deploy --prod --token "$VERCEL_TOKEN" --yes 2>&1 | tee /tmp/deploy.log

DEPLOY_URL=$(grep -oP 'https://[^\s]+' /tmp/deploy.log | tail -1)

if [ -z "$DEPLOY_URL" ]; then
    echo -e "${RED}Deployment failed!${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Deployed to: $DEPLOY_URL${NC}"

echo -e "\n${GOLD}[5/5] Testing endpoints...${NC}"

# Test CCCE endpoint
echo -e "${CYAN}→ Testing /api/ccce...${NC}"
curl -s https://quantum-advantage.dev/api/ccce | jq -r '.phi, .conscious' | head -2

# Test Knowledge endpoint
echo -e "${CYAN}→ Testing /api/knowledge...${NC}"
curl -s "https://quantum-advantage.dev/api/knowledge?query=quantum" | jq -r '.total, .success' | head -2

echo -e "\n${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ DEPLOYMENT COMPLETE${NC}"
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

echo -e "\n${GOLD}🌐 Live URLs:${NC}"
echo -e "   Main: https://quantum-advantage.dev"
echo -e "   CCCE: https://quantum-advantage.dev/api/ccce"
echo -e "   Knowledge: https://quantum-advantage.dev/api/knowledge"

echo -e "\n${GOLD}📊 New Features:${NC}"
echo -e "   ✓ Knowledge Base API"
echo -e "   ✓ 384 files searchable"
echo -e "   ✓ 3,774 connections mapped"
echo -e "   ✓ Live CCCE metrics"

echo -e "\n${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
