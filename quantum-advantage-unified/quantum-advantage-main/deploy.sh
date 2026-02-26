#!/bin/bash
# Quantum-Advantage.dev Deployment Script

set -e

echo "════════════════════════════════════════════════════════════"
echo "  Quantum-Advantage.dev - Production Deployment"
echo "════════════════════════════════════════════════════════════"
echo ""

cd "$(dirname "$0")"

# Check if gh CLI is available
if ! command -v gh &> /dev/null; then
    echo "⚠️  GitHub CLI not found. Installing..."
    echo "   Run: sudo apt install gh  OR  brew install gh"
    echo ""
    echo "Alternative: Push to GitHub manually:"
    echo "  1. Create repo on github.com"
    echo "  2. git remote add origin https://github.com/YOUR_USERNAME/quantum-advantage"
    echo "  3. git push -u origin master"
    exit 1
fi

# Initialize git if needed
if [ ! -d ".git" ]; then
    echo "📦 Initializing git repository..."
    git init
    git config user.email "devin@quantum-advantage.dev"
    git config user.name "Quantum Advantage"
fi

# Stage and commit
echo "📝 Committing files..."
git add .
git commit -m "Deploy quantum-advantage.dev - Phase 1 Foundation" || echo "  (No changes to commit)"

# Create GitHub repo
echo "🚀 Creating GitHub repository..."
gh repo create quantum-advantage --public --source=. --remote=origin || echo "  (Repo may already exist)"

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push -u origin master || git push origin master

echo ""
echo "✅ Code pushed to GitHub!"
echo ""
echo "════════════════════════════════════════════════════════════"
echo "  Next Steps:"
echo "════════════════════════════════════════════════════════════"
echo ""
echo "1. Go to https://vercel.com/dashboard"
echo "2. Click 'Add New' → 'Project'"
echo "3. Import your GitHub repo: quantum-advantage"
echo "4. Framework: Next.js (auto-detected)"
echo "5. Click 'Deploy'"
echo ""
echo "6. After deployment:"
echo "   - Add domain: quantum-advantage.dev"
echo "   - Configure DNS (see QUANTUM_ADVANTAGE_DEPLOY.md)"
echo "   - Create Supabase tables (SQL in README.md)"
echo ""
echo "════════════════════════════════════════════════════════════"
echo "  Production URL will be:"
echo "  https://quantum-advantage.dev"
echo "════════════════════════════════════════════════════════════"
echo ""
