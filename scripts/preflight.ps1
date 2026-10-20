# GOSPELS Pre-Flight Verification Script
$ErrorActionPreference = "Stop"

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "  GOSPELS PRE-FLIGHT VERIFICATION" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan

$allPass = $true

# 1. Check Node.js
try {
    $nodeVer = node -v
    Write-Host "[PASS] Node.js installed: $nodeVer" -ForegroundColor Green
} catch {
    Write-Host "[FAIL] Node.js not detected" -ForegroundColor Red
    $allPass = $false
}

# 2. Check npm
try {
    $npmVer = npm -v
    Write-Host "[PASS] npm installed: $npmVer" -ForegroundColor Green
} catch {
    Write-Host "[FAIL] npm not detected" -ForegroundColor Red
    $allPass = $false
}

# 3. Check git
try {
    $gitVer = git --version
    Write-Host "[PASS] Git installed: $gitVer" -ForegroundColor Green
} catch {
    Write-Host "[FAIL] Git not detected" -ForegroundColor Red
    $allPass = $false
}

# 4. Check core specification files
$specs = @("PROJECT.md", "AGENTS.md", "docs/compliance/COMPLIANCE-SURFACE.md", "docs/design/BRAND_GUIDELINES.md", "docs/architecture/ADR.md")
foreach ($spec in $specs) {
    if (Test-Path $spec) {
        Write-Host "[PASS] Specification file verified: $spec" -ForegroundColor Green
    } else {
        Write-Host "[FAIL] Missing required specification: $spec" -ForegroundColor Red
        $allPass = $false
    }
}

# 5. Check local environment secrets
if (Test-Path ".env.local") {
    $envContent = Get-Content ".env.local" -Raw
    if ($envContent -match "GEMINI_API_KEY=.+") {
        Write-Host "[PASS] Gemini API Key present in .env.local" -ForegroundColor Green
    } else {
        Write-Host "[WARN] Gemini API Key not set" -ForegroundColor Yellow
    }
    if ($envContent -match "RESEND_API_KEY=.+") {
        Write-Host "[PASS] Resend API Key present in .env.local" -ForegroundColor Green
    } else {
        Write-Host "[WARN] Resend API Key not set" -ForegroundColor Yellow
    }
    if ($envContent -match "FIRECRAWL_API_KEY=.+") {
        Write-Host "[PASS] Firecrawl API Key present in .env.local" -ForegroundColor Green
    } else {
        Write-Host "[WARN] Firecrawl API Key not set" -ForegroundColor Yellow
    }
} else {
    Write-Host "[FAIL] Missing .env.local" -ForegroundColor Red
    $allPass = $false
}

# 6. Check public asset directories
$assetDirs = @("public/assets/brand", "public/assets/events", "public/assets/team", "public/assets/partners")
foreach ($dir in $assetDirs) {
    if (Test-Path $dir) {
        Write-Host "[PASS] Asset folder verified: $dir" -ForegroundColor Green
    } else {
        Write-Host "[FAIL] Missing asset directory: $dir" -ForegroundColor Red
        $allPass = $false
    }
}

Write-Host "=========================================" -ForegroundColor Cyan
if ($allPass) {
    Write-Host "ALL PRE-FLIGHT CHECKS PASSED!" -ForegroundColor Green
} else {
    Write-Host "SOME CHECKS REQUIRE ATTENTION" -ForegroundColor Yellow
}
Write-Host "=========================================" -ForegroundColor Cyan
