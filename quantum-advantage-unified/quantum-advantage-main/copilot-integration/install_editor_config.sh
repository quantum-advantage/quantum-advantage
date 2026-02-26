#!/bin/bash
################################################################################
# Quick Start Installer for DNA::}{::Lang Copilot Integration
################################################################################

set -e

echo "╔═══════════════════════════════════════════════════════════╗"
echo "║      DNA::}{::Lang Copilot Integration Installer         ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo ""

# Detect editor
EDITOR_TYPE=""
if [ -d "$HOME/.config/Code" ]; then
    EDITOR_TYPE="vscode"
    SETTINGS_PATH="$HOME/.config/Code/User/settings.json"
elif [ -d "$HOME/.cursor" ]; then
    EDITOR_TYPE="cursor"
    SETTINGS_PATH="$HOME/.cursor/settings.json"
else
    echo "⚠️  Could not detect VS Code or Cursor"
    echo "   Please manually add MCP server configuration"
    exit 0
fi

echo "[*] Detected: $EDITOR_TYPE"
echo "[*] Settings: $SETTINGS_PATH"
echo ""

# Backup existing settings
if [ -f "$SETTINGS_PATH" ]; then
    echo "[*] Backing up existing settings..."
    cp "$SETTINGS_PATH" "$SETTINGS_PATH.backup.$(date +%s)"
fi

# Install configuration
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [ "$EDITOR_TYPE" = "vscode" ]; then
    CONFIG_FILE="$SCRIPT_DIR/config/vscode-settings.json"
else
    CONFIG_FILE="$SCRIPT_DIR/config/cursor-settings.json"
fi

echo "[*] Installing MCP configuration..."

if [ -f "$SETTINGS_PATH" ]; then
    # Merge with existing settings
    python3 << EOF
import json
import sys

# Read existing settings
with open("$SETTINGS_PATH", "r") as f:
    existing = json.load(f)

# Read new MCP config
with open("$CONFIG_FILE", "r") as f:
    new_config = json.load(f)

# Merge
if "$EDITOR_TYPE" == "vscode":
    if "github.copilot.advanced" not in existing:
        existing["github.copilot.advanced"] = {}
    existing["github.copilot.advanced"]["mcpServers"] = new_config["github.copilot.advanced"]["mcpServers"]
else:
    existing["mcpServers"] = new_config["mcpServers"]

# Write back
with open("$SETTINGS_PATH", "w") as f:
    json.dump(existing, f, indent=2)

print("✅ Configuration merged")
EOF
else
    # Create new settings file
    mkdir -p "$(dirname "$SETTINGS_PATH")"
    cp "$CONFIG_FILE" "$SETTINGS_PATH"
    echo "✅ Configuration created"
fi

echo ""
echo "╔═══════════════════════════════════════════════════════════╗"
echo "║               INSTALLATION COMPLETE                       ║"
echo "╠═══════════════════════════════════════════════════════════╣"
echo "║  Editor: $EDITOR_TYPE"
echo "║  Settings: $SETTINGS_PATH"
echo "║  "
echo "║  Next Steps:"
echo "║  1. Restart your editor"
echo "║  2. Open GitHub Copilot Chat"
echo "║  3. Use @dnalang commands"
echo "║  "
echo "║  Example:"
echo "║  @dnalang show consciousness metrics"
echo "║  @dnalang submit quantum circuit to ibm_fez"
echo "╚═══════════════════════════════════════════════════════════╝"
