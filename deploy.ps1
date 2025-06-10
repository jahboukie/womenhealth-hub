# 🚀 WomenHealth.Health Production Deployment Script (PowerShell)
# For Vercel + Supabase Marketplace Integration

Write-Host "🚀 Starting WomenHealth.Health Production Deployment..." -ForegroundColor Green
Write-Host ""

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "❌ Error: package.json not found. Please run this script from the project root." -ForegroundColor Red
    exit 1
}

# Check if Vercel CLI is installed
try {
    vercel --version | Out-Null
    Write-Host "✅ Vercel CLI found" -ForegroundColor Green
} catch {
    Write-Host "📦 Installing Vercel CLI..." -ForegroundColor Yellow
    npm install -g vercel
}

Write-Host "🔍 Pre-deployment checks..." -ForegroundColor Cyan

# Check for required files
Write-Host "✅ Checking project structure..." -ForegroundColor Green
$requiredFiles = @("vercel.json", "next.config.js", "package.json", ".env.example")
foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "  ✅ $file found" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  $file missing (may be optional)" -ForegroundColor Yellow
    }
}

# Check TypeScript compilation
Write-Host "🔧 Checking TypeScript compilation..." -ForegroundColor Cyan
try {
    npm run build 2>$null | Out-Null
    Write-Host "  ✅ TypeScript compilation successful" -ForegroundColor Green
} catch {
    Write-Host "  ❌ TypeScript compilation failed. Please fix errors before deploying." -ForegroundColor Red
    Write-Host "  Run 'npm run build' to see detailed errors." -ForegroundColor Yellow
    exit 1
}

# Clean up build artifacts
Write-Host "🧹 Cleaning up build artifacts..." -ForegroundColor Cyan
if (Test-Path ".next") {
    Remove-Item -Recurse -Force ".next"
}

# Check git status
Write-Host "📝 Checking git status..." -ForegroundColor Cyan
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "  📝 Uncommitted changes found. Committing..." -ForegroundColor Yellow
    git add .
    $commitMessage = "Production deployment preparation - $(Get-Date)"
    git commit -m $commitMessage
    git push origin main
    Write-Host "  ✅ Changes committed and pushed" -ForegroundColor Green
} else {
    Write-Host "  ✅ No uncommitted changes" -ForegroundColor Green
}

Write-Host ""
Write-Host "🚀 Deploying to Vercel..." -ForegroundColor Green
Write-Host ""

# Deploy to Vercel
vercel --prod

Write-Host ""
Write-Host "🎉 Deployment initiated!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "1. 🔑 Configure environment variables in Vercel Dashboard:" -ForegroundColor White
Write-Host "   - ANTHROPIC_API_KEY (for Dr. Alex AI)" -ForegroundColor Gray
Write-Host "   - JWT_SECRET (generate secure random string)" -ForegroundColor Gray
Write-Host "   - ENCRYPTION_KEY (generate secure random string)" -ForegroundColor Gray
Write-Host ""
Write-Host "2. 🌐 Configure custom domain:" -ForegroundColor White
Write-Host "   - Add womenhealth.health in Vercel Dashboard" -ForegroundColor Gray
Write-Host "   - Update DNS records as instructed" -ForegroundColor Gray
Write-Host ""
Write-Host "3. 🎭 Deploy demo platform:" -ForegroundColor White
Write-Host "   - cd demo-platform && vercel --prod" -ForegroundColor Gray
Write-Host "   - Configure demo.womenhealth.health domain" -ForegroundColor Gray
Write-Host ""
Write-Host "4. ✅ Test deployment:" -ForegroundColor White
Write-Host "   - Verify main site functionality" -ForegroundColor Gray
Write-Host "   - Test demo platform integration" -ForegroundColor Gray
Write-Host "   - Check all API endpoints" -ForegroundColor Gray
Write-Host ""
Write-Host "🎊 Your healthcare revolution is going live! 🎊" -ForegroundColor Magenta
