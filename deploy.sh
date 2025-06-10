#!/bin/bash

# 🚀 WomenHealth.Health Production Deployment Script
# For Vercel + Supabase Marketplace Integration

echo "🚀 Starting WomenHealth.Health Production Deployment..."
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

echo "🔍 Pre-deployment checks..."

# Check for required files
echo "✅ Checking project structure..."
required_files=("vercel.json" "next.config.js" "package.json" ".env.example")
for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✅ $file found"
    else
        echo "  ⚠️  $file missing (may be optional)"
    fi
done

# Check TypeScript compilation
echo "🔧 Checking TypeScript compilation..."
if npm run build > /dev/null 2>&1; then
    echo "  ✅ TypeScript compilation successful"
else
    echo "  ❌ TypeScript compilation failed. Please fix errors before deploying."
    echo "  Run 'npm run build' to see detailed errors."
    exit 1
fi

# Clean up build artifacts
echo "🧹 Cleaning up build artifacts..."
rm -rf .next

# Commit any pending changes
echo "📝 Checking git status..."
if [ -n "$(git status --porcelain)" ]; then
    echo "  📝 Uncommitted changes found. Committing..."
    git add .
    git commit -m "Production deployment preparation - $(date)"
    git push origin main
    echo "  ✅ Changes committed and pushed"
else
    echo "  ✅ No uncommitted changes"
fi

echo ""
echo "🚀 Deploying to Vercel..."
echo ""

# Deploy to Vercel
vercel --prod

echo ""
echo "🎉 Deployment initiated!"
echo ""
echo "📋 Next steps:"
echo "1. 🔑 Configure environment variables in Vercel Dashboard:"
echo "   - ANTHROPIC_API_KEY (for Dr. Alex AI)"
echo "   - JWT_SECRET (generate secure random string)"
echo "   - ENCRYPTION_KEY (generate secure random string)"
echo ""
echo "2. 🌐 Configure custom domain:"
echo "   - Add womenhealth.health in Vercel Dashboard"
echo "   - Update DNS records as instructed"
echo ""
echo "3. 🎭 Deploy demo platform:"
echo "   - cd demo-platform && vercel --prod"
echo "   - Configure demo.womenhealth.health domain"
echo ""
echo "4. ✅ Test deployment:"
echo "   - Verify main site functionality"
echo "   - Test demo platform integration"
echo "   - Check all API endpoints"
echo ""
echo "🎊 Your healthcare revolution is going live! 🎊"
