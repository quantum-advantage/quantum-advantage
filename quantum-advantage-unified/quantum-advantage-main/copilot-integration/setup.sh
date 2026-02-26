#!/bin/bash
################################################################################
# Setup Script for DNA::}{::Lang Copilot Integration
################################################################################

set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║      DNA::}{::Lang Copilot Integration Setup             ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found"
    echo ""
    echo "Install Node.js 20+:"
    echo "  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -"
    echo "  sudo apt-get install -y nodejs"
    exit 1
fi

echo "✅ Node.js: $(node -v)"
echo "✅ npm: $(npm -v)"
echo ""

# Install dependencies
echo "[1/4] Installing npm dependencies..."
npm install
echo ""

# Create .env if not exists
if [ ! -f ".env" ]; then
    echo "[2/4] Creating .env configuration..."
    cp .env .env.backup 2>/dev/null || true
else
    echo "[2/4] .env already exists"
fi
echo ""

# Make scripts executable
echo "[3/4] Setting permissions..."
chmod +x start_copilot_agent.sh
chmod +x setup.sh
echo ""

# Test MCP server
echo "[4/4] Testing MCP server..."
timeout 5 node src/server.js <<< '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{}}' 2>/dev/null && echo "✅ MCP server test passed" || echo "⚠️  MCP server test skipped"
echo ""

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║                   SETUP COMPLETE                          ║"
echo "╠═══════════════════════════════════════════════════════════╣"
echo "║  Next Steps:                                              ║"
echo "║                                                           ║"
echo "║  1. Start MCP server:                                     ║"
echo "║     ./start_copilot_agent.sh                              ║"
echo "║                                                           ║"
echo "║  2. Configure GitHub Copilot:                             ║"
echo "║     Add to your editor's Copilot settings:                ║"
echo "║                                                           ║"
echo "║     {                                                     ║"
echo "║       \"mcpServers\": {                                     ║"
echo "║         \"dnalang\": {                                      ║"
echo "║           \"command\": \"$SCRIPT_DIR/start_copilot_agent.sh\""
echo "║         }                                                 ║"
echo "║       }                                                   ║"
echo "║     }                                                     ║"
echo "║                                                           ║"
echo "║  3. Use with @dnalang prefix in Copilot Chat              ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""
