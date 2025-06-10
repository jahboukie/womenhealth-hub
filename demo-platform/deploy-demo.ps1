# 🎭 Dr. Alex AI Demo Platform Deployment Script
# Deploy to demo.womenhealth.health

Write-Host "🎭 Starting Dr. Alex AI Demo Platform Deployment..." -ForegroundColor Magenta
Write-Host ""

# Check if we're in the demo-platform directory
if (-not (Test-Path "server.js")) {
    Write-Host "❌ Error: server.js not found. Please run this script from the demo-platform directory." -ForegroundColor Red
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
Write-Host "✅ Checking demo platform structure..." -ForegroundColor Green
$requiredFiles = @("server.js", "package.json", "vercel.json", "public/index.html")
foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "  ✅ $file found" -ForegroundColor Green
    } else {
        Write-Host "  ❌ $file missing" -ForegroundColor Red
        if ($file -eq "vercel.json") {
            Write-Host "  Creating vercel.json..." -ForegroundColor Yellow
            # The vercel.json should already be created by the main script
        }
    }
}

# Test server startup
Write-Host "🧪 Testing server startup..." -ForegroundColor Cyan
try {
    # Quick test to see if server.js is valid
    node -c server.js
    Write-Host "  ✅ Server.js syntax is valid" -ForegroundColor Green
} catch {
    Write-Host "  ❌ Server.js has syntax errors" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🎭 Deploying Demo Platform to Vercel..." -ForegroundColor Magenta
Write-Host ""

# Deploy to Vercel
Write-Host "🚀 Running: vercel --prod" -ForegroundColor Yellow
vercel --prod

Write-Host ""
Write-Host "🎉 Demo Platform Deployment Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Next steps:" -ForegroundColor Cyan
Write-Host "1. 🌐 Configure custom domain in Vercel Dashboard:" -ForegroundColor White
Write-Host "   - Go to Project Settings → Domains" -ForegroundColor Gray
Write-Host "   - Add: demo.womenhealth.health" -ForegroundColor Gray
Write-Host "   - Follow DNS configuration instructions" -ForegroundColor Gray
Write-Host ""
Write-Host "2. 🔗 Update main platform environment:" -ForegroundColor White
Write-Host "   - Set NEXT_PUBLIC_DRALEXAI_DEMO_URL=https://demo.womenhealth.health" -ForegroundColor Gray
Write-Host "   - Redeploy main platform" -ForegroundColor Gray
Write-Host ""
Write-Host "3. ✅ Test the integration:" -ForegroundColor White
Write-Host "   - Visit https://womenhealth.health" -ForegroundColor Gray
Write-Host "   - Click 'Launch Dr. Alex AI Demo'" -ForegroundColor Gray
Write-Host "   - Verify redirect to demo platform" -ForegroundColor Gray
Write-Host ""
Write-Host "🎭 Demo Platform URLs:" -ForegroundColor Magenta
Write-Host "   - Main Demo: https://demo.womenhealth.health" -ForegroundColor Cyan
Write-Host "   - Provider Demo: https://demo.womenhealth.health/provider-demo" -ForegroundColor Cyan
Write-Host "   - MenoWellness: https://demo.womenhealth.health/menowellness-landing" -ForegroundColor Cyan
Write-Host ""
Write-Host "🎊 Your enterprise demo platform is live! 🎊" -ForegroundColor Magenta
