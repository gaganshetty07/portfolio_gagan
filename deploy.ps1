# Portfolio Deployment Script
Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# Stop any running dev server
Write-Host "🛑 Stopping development server..." -ForegroundColor Yellow
taskkill /f /im node.exe 2>$null

# Clean up previous build artifacts (but keep index.html for build)
Write-Host "🧹 Cleaning up..." -ForegroundColor Yellow
Remove-Item -Recurse -Force dist 2>$null
Remove-Item -Recurse -Force assets 2>$null
# Don't delete index.html - it's needed for build
Remove-Item favicon.ico 2>$null
Remove-Item placeholder.svg 2>$null
Remove-Item resume.pdf 2>$null
Remove-Item robots.txt 2>$null

# Update vite config for production
Write-Host "⚙️  Configuring for production..." -ForegroundColor Yellow
$viteConfig = Get-Content "vite.config.ts" -Raw
$viteConfig = $viteConfig -replace 'base: "/"', 'base: "/agile-qa-insights/"'
Set-Content "vite.config.ts" -Value $viteConfig

# Build for production
Write-Host "📦 Building for production..." -ForegroundColor Yellow
npm run build

# Copy production files to root
Write-Host "📁 Copying production files..." -ForegroundColor Yellow
if (Test-Path "dist") {
    xcopy dist\* . /E /H /Y
    Write-Host "✅ Files copied successfully" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed - dist folder not found" -ForegroundColor Red
    exit 1
}

# Restore development config
Write-Host "🔄 Restoring development config..." -ForegroundColor Yellow
$viteConfig = $viteConfig -replace 'base: "/agile-qa-insights/"', 'base: "/"'
Set-Content "vite.config.ts" -Value $viteConfig

# Create .nojekyll file for GitHub Pages
Set-Content -Path .nojekyll -Value ""

# Commit and push
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git add .
git commit -m "Deploy portfolio updates - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push origin main

Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "🌐 Your portfolio will be live at: https://gaganshetty07.github.io/agile-qa-insights/" -ForegroundColor Cyan
Write-Host "⏱️  Wait 2-3 minutes for GitHub Pages to update" -ForegroundColor Yellow