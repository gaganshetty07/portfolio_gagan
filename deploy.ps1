# Deploy script for GitHub Pages
Write-Host "Building for production..." -ForegroundColor Green
npm run build

Write-Host "Copying files to root..." -ForegroundColor Green
xcopy dist\* . /E /H /Y

Write-Host "Committing changes..." -ForegroundColor Green
git add .
git commit -m "Deploy portfolio updates"
git push origin main

Write-Host "Deployment complete! Check https://gaganshetty07.github.io/agile-qa-insights/ in 2-3 minutes" -ForegroundColor Yellow
