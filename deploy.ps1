# Portfolio Deployment Script
Write-Host "🚀 Starting deployment process..." -ForegroundColor Green

# Build for production
Write-Host "📦 Building for production..." -ForegroundColor Yellow
npm run build

# Copy production files to root
Write-Host "📁 Copying production files..." -ForegroundColor Yellow
xcopy dist\* . /E /H /Y

# Commit and push
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git add .
git commit -m "Deploy portfolio updates - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
git push origin main

Write-Host "✅ Deployment complete!" -ForegroundColor Green
Write-Host "🌐 Your portfolio will be live at: https://gaganshetty07.github.io/agile-qa-insights/" -ForegroundColor Cyan
Write-Host "⏱️  Wait 2-3 minutes for GitHub Pages to update" -ForegroundColor Yellow