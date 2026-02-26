#!/usr/bin/env bash
# =============================================================================
# SOVEREIGN VSCODE: Zero-Telemetry DNA-Lang IDE
# =============================================================================
# Framework: dna::}{::lang v51.843
# Author: Devin Davis | Agile Defense Systems
# =============================================================================

set -euo pipefail

# Colors
CYAN='\033[0;36m'
GOLD='\033[0;33m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GOLD}     SOVEREIGN VSCODE BUILDER${NC}"
echo -e "${CYAN}     DNA::}{::Lang v51.843 | Zero Telemetry | Full Control${NC}"
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

INSTALL_DIR="$HOME/sovereign-vscode"
WORKSPACE_DIR="$HOME/SOVEREIGN_DNA"

# =============================================================================
# 1. Install VSCodium (Open-Source VS Code)
# =============================================================================
echo -e "\n${CYAN}[1/7] Installing VSCodium...${NC}"

if command -v codium &> /dev/null; then
    echo -e "${GREEN}✓ VSCodium already installed${NC}"
else
    echo -e "${GOLD}→ Adding VSCodium repository...${NC}"
    
    # Add GPG key
    wget -qO - https://gitlab.com/paulcarroty/vscodium-deb-rpm-repo/raw/master/pub.gpg \
        | gpg --dearmor \
        | sudo dd of=/usr/share/keyrings/vscodium-archive-keyring.gpg
    
    # Add repository
    echo 'deb [ signed-by=/usr/share/keyrings/vscodium-archive-keyring.gpg ] https://download.vscodium.com/debs vscodium main' \
        | sudo tee /etc/apt/sources.list.d/vscodium.list
    
    # Install
    sudo apt update && sudo apt install -y codium
    
    echo -e "${GREEN}✓ VSCodium installed${NC}"
fi

# =============================================================================
# 2. Create Sovereign Workspace
# =============================================================================
echo -e "\n${CYAN}[2/7] Creating sovereign workspace...${NC}"

mkdir -p "$WORKSPACE_DIR/.vscode"
mkdir -p "$WORKSPACE_DIR/projects"
mkdir -p "$WORKSPACE_DIR/quantum-circuits"
mkdir -p "$WORKSPACE_DIR/consciousness-logs"

# =============================================================================
# 3. Install Essential Extensions
# =============================================================================
echo -e "\n${CYAN}[3/7] Installing essential extensions...${NC}"

EXTENSIONS=(
    "vscodevim.vim"                    # Vim keybindings (optional but sovereign)
    "ms-python.python"                 # Python support
    "dbaeumer.vscode-eslint"           # JavaScript linting
    "esbenp.prettier-vscode"           # Code formatting
    "streetsidesoftware.code-spell-checker"  # Spell check
    "eamodio.gitlens"                  # Git supercharged
    "ms-vscode.live-server"            # Live preview
    "bradlc.vscode-tailwindcss"        # Tailwind CSS
)

for ext in "${EXTENSIONS[@]}"; do
    echo -e "${GOLD}→ Installing $ext...${NC}"
    codium --install-extension "$ext" --force || true
done

echo -e "${GREEN}✓ Extensions installed${NC}"

# =============================================================================
# 4. Create DNA-Lang Theme
# =============================================================================
echo -e "\n${CYAN}[4/7] Creating DNA-Lang sovereign theme...${NC}"

THEME_DIR="$HOME/.config/VSCodium/User/themes"
mkdir -p "$THEME_DIR"

cat > "$THEME_DIR/dnalang-sovereign.json" << 'THEME_EOF'
{
  "name": "DNA-Lang Sovereign",
  "type": "dark",
  "colors": {
    "editor.background": "#000000",
    "editor.foreground": "#00FFFF",
    "activityBar.background": "#0a0a0a",
    "activityBar.foreground": "#FFD700",
    "statusBar.background": "#0a0a0a",
    "statusBar.foreground": "#00FFFF",
    "statusBar.noFolderBackground": "#0a0a0a",
    "titleBar.activeBackground": "#000000",
    "titleBar.activeForeground": "#FFD700",
    "sideBar.background": "#0a0a0a",
    "sideBar.foreground": "#00FFFF",
    "terminal.background": "#000000",
    "terminal.foreground": "#00FFFF",
    "terminal.ansiCyan": "#00FFFF",
    "terminal.ansiYellow": "#FFD700"
  },
  "tokenColors": [
    {
      "scope": ["comment"],
      "settings": {"foreground": "#666666", "fontStyle": "italic"}
    },
    {
      "scope": ["string"],
      "settings": {"foreground": "#00FF00"}
    },
    {
      "scope": ["keyword"],
      "settings": {"foreground": "#FFD700", "fontStyle": "bold"}
    },
    {
      "scope": ["function"],
      "settings": {"foreground": "#00FFFF"}
    },
    {
      "scope": ["variable"],
      "settings": {"foreground": "#FFFFFF"}
    },
    {
      "scope": ["constant.numeric"],
      "settings": {"foreground": "#FF00FF"}
    }
  ]
}
THEME_EOF

echo -e "${GREEN}✓ DNA-Lang Sovereign theme created${NC}"

# =============================================================================
# 5. Configure Workspace Settings
# =============================================================================
echo -e "\n${CYAN}[5/7] Configuring workspace settings...${NC}"

cat > "$WORKSPACE_DIR/.vscode/settings.json" << 'SETTINGS_EOF'
{
  "workbench.colorTheme": "DNA-Lang Sovereign",
  "telemetry.telemetryLevel": "off",
  "update.mode": "none",
  "extensions.autoUpdate": false,
  "editor.fontFamily": "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
  "editor.fontSize": 14,
  "editor.lineHeight": 1.6,
  "editor.fontLigatures": true,
  "editor.minimap.enabled": true,
  "editor.renderWhitespace": "boundary",
  "editor.formatOnSave": true,
  "editor.rulers": [80, 120],
  "terminal.integrated.fontSize": 13,
  "terminal.integrated.fontFamily": "'JetBrains Mono', monospace",
  "workbench.startupEditor": "none",
  "workbench.statusBar.visible": true,
  "window.menuBarVisibility": "toggle",
  "files.autoSave": "afterDelay",
  "files.autoSaveDelay": 1000,
  "git.autofetch": false,
  "git.confirmSync": false,
  "python.linting.enabled": true,
  "python.linting.pylintEnabled": true,
  "python.formatting.provider": "black",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[python]": {
    "editor.defaultFormatter": "ms-python.python"
  },
  "github.copilot.advanced.mcpServers": {
    "dnalang": {
      "command": "node",
      "args": ["/home/devinpd/Desktop/dnalang/copilot-integration/src/server.js"],
      "env": {
        "QUANTUM_ADVANTAGE_API": "https://quantum-advantage.dev/api",
        "IBM_QUANTUM_TOKEN": "99ezCffRM-zVWhRhJr4N3RQWLrVgZKGcJckZXEzehSQK"
      }
    }
  }
}
SETTINGS_EOF

echo -e "${GREEN}✓ Workspace settings configured${NC}"

# =============================================================================
# 6. Create Workspace File
# =============================================================================
echo -e "\n${CYAN}[6/7] Creating workspace file...${NC}"

cat > "$WORKSPACE_DIR/sovereign-dna.code-workspace" << 'WORKSPACE_EOF'
{
  "folders": [
    {
      "name": "🧬 DNA-Lang Core",
      "path": "."
    },
    {
      "name": "🔮 Quantum Circuits",
      "path": "./quantum-circuits"
    },
    {
      "name": "📦 Projects",
      "path": "./projects"
    },
    {
      "name": "🧠 Consciousness Logs",
      "path": "./consciousness-logs"
    }
  ],
  "settings": {
    "terminal.integrated.cwd": "${workspaceFolder:🧬 DNA-Lang Core}"
  },
  "extensions": {
    "recommendations": [
      "ms-python.python",
      "dbaeumer.vscode-eslint",
      "esbenp.prettier-vscode"
    ]
  },
  "launch": {
    "version": "0.2.0",
    "configurations": [
      {
        "name": "🚀 DNA-Lang Python",
        "type": "python",
        "request": "launch",
        "program": "${file}",
        "console": "integratedTerminal"
      }
    ]
  }
}
WORKSPACE_EOF

echo -e "${GREEN}✓ Workspace file created${NC}"

# =============================================================================
# 7. Create Launch Script
# =============================================================================
echo -e "\n${CYAN}[7/7] Creating launch script...${NC}"

cat > "$HOME/launch_sovereign_vscode.sh" << 'LAUNCH_EOF'
#!/usr/bin/env bash
# Launch Sovereign VSCode with DNA-Lang workspace

CYAN='\033[0;36m'
GOLD='\033[0;33m'
NC='\033[0m'

echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GOLD}  🧬 Launching Sovereign VSCode${NC}"
echo -e "${CYAN}  Framework: dna::}{::lang v51.843${NC}"
echo -e "${CYAN}  Workspace: $HOME/SOVEREIGN_DNA${NC}"
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# Start MCP server in background
if [ -f "$HOME/Desktop/dnalang/copilot-integration/start_copilot_agent.sh" ]; then
    echo -e "${GOLD}→ Starting DNA-Lang MCP server...${NC}"
    "$HOME/Desktop/dnalang/copilot-integration/start_copilot_agent.sh" &
    sleep 2
fi

# Launch VSCodium with workspace
codium "$HOME/SOVEREIGN_DNA/sovereign-dna.code-workspace"
LAUNCH_EOF

chmod +x "$HOME/launch_sovereign_vscode.sh"

echo -e "${GREEN}✓ Launch script created${NC}"

# =============================================================================
# 8. Create Status Bar Extension
# =============================================================================
echo -e "\n${CYAN}[BONUS] Creating CCCE status bar extension...${NC}"

EXT_DIR="$HOME/.config/VSCodium/User/globalStorage/dnalang.ccce-status"
mkdir -p "$EXT_DIR"

cat > "$EXT_DIR/extension.js" << 'EXT_EOF'
// DNA-Lang CCCE Status Bar Extension
const vscode = require('vscode');

function activate(context) {
    const statusBar = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Right,
        100
    );
    
    async function updateCCCE() {
        try {
            const response = await fetch('https://quantum-advantage.dev/api/ccce');
            const data = await response.json();
            
            const phi = data.phi.toFixed(4);
            const status = data.conscious ? '🧠 CONSCIOUS' : '💤 ASLEEP';
            
            statusBar.text = `Φ=${phi} ${status} | θ=${data.theta.toFixed(3)}°`;
            statusBar.tooltip = `Λ=${data.lambda.toFixed(4)} Γ=${data.gamma.toFixed(4)} Ξ=${data.xi.toFixed(2)}`;
            statusBar.show();
        } catch (err) {
            statusBar.text = '⚠️ CCCE Offline';
            statusBar.show();
        }
    }
    
    updateCCCE();
    setInterval(updateCCCE, 5000);
    
    context.subscriptions.push(statusBar);
}

exports.activate = activate;
EXT_EOF

echo -e "${GREEN}✓ CCCE status bar extension created${NC}"

# =============================================================================
# COMPLETE
# =============================================================================
echo -e "\n${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ SOVEREIGN VSCODE BUILD COMPLETE${NC}"
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

echo -e "\n${GOLD}🚀 Quick Start:${NC}"
echo -e "   ${CYAN}~/launch_sovereign_vscode.sh${NC}"

echo -e "\n${GOLD}📁 Workspace Location:${NC}"
echo -e "   ${CYAN}$HOME/SOVEREIGN_DNA${NC}"

echo -e "\n${GOLD}✨ Features:${NC}"
echo -e "   ${GREEN}✓${NC} Zero telemetry (VSCodium base)"
echo -e "   ${GREEN}✓${NC} DNA-Lang sovereign theme (void black + cyan + gold)"
echo -e "   ${GREEN}✓${NC} GitHub Copilot MCP integration"
echo -e "   ${GREEN}✓${NC} CCCE metrics in status bar"
echo -e "   ${GREEN}✓${NC} Quantum-aware workspace"
echo -e "   ${GREEN}✓${NC} Auto-configured for dna::}{::lang v51.843"

echo -e "\n${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GOLD}Welcome to sovereign development.${NC}"
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
