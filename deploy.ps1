# سكريبت رفع سوق قطر للـ GitHub - نفذ أمر واحد

# ملاحظة: ضع هذا السكريبت في مجلد المشروع
# ثم نفذ: powershell -ExecutionPolicy Bypass -File deploy.ps1

$ProjectPath = "C:\Users\shero\OneDrive\Desktop\sooq-qatar"
$GitHubRepo = "https://github.com/sherow1982/sooq-qatar.git"
$UserName = "sherow1982"
$UserEmail = "sherow1982@gmail.com"

Write-Host "🚀 سوق قطر - نظام الرفع الآلي" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green

# 1. الذهاب للمجلد
Write-Host "`n📁 الانتقال للمجلد..." -ForegroundColor Cyan
Set-Location $ProjectPath

# 2. استخراج ZIP إذا كان موجوداً
if (Test-Path "sooq-qatar-files.zip") {
    Write-Host "📦 استخراج الملفات..." -ForegroundColor Cyan
    Expand-Archive sooq-qatar-files.zip -DestinationPath . -Force
    Write-Host "✅ تم استخراج الملفات" -ForegroundColor Green
}

# 3. إعداد Git
Write-Host "`n🔧 إعداد Git..." -ForegroundColor Cyan
git config --global user.name $UserName
git config --global user.email $UserEmail

# 4. التحقق من الـ repo
if (!(Test-Path ".git")) {
    Write-Host "🆕 إنشاء repository جديد..." -ForegroundColor Yellow
    git init
    git remote add origin $GitHubRepo
} else {
    Write-Host "✅ Repository موجود" -ForegroundColor Green
}

# 5. إضافة الملفات
Write-Host "`n📤 إضافة الملفات..." -ForegroundColor Cyan
git add .

# 6. عرض التغييرات
Write-Host "`n📋 الملفات المضافة:" -ForegroundColor Cyan
git status --short

# 7. عمل commit
Write-Host "`n💾 حفظ التغييرات..." -ForegroundColor Cyan
git commit -m "🚀 متجر سوق قطر الاحترافي - النسخة الأولى

- إضافة 15 منتج حصري
- تصميم احترافي بألوان علم قطر
- نظام سلة تسوق متكامل
- صفحات منتجات فريدة
- نظام واتساب مدمج
- تقييمات قطرية احترافية
- صفحات قانونية
- SEO متوافق مع Google Merchant Center"

# 8. الرفع للـ GitHub
Write-Host "`n🌐 الرفع للـ GitHub..." -ForegroundColor Cyan
try {
    git push -u origin main
    Write-Host "✅ تم الرفع بنجاح!" -ForegroundColor Green
    Write-Host "`n📍 الموقع: https://sooq-qatar.pages.dev/" -ForegroundColor Magenta
} catch {
    Write-Host "⚠️ هناك خطأ في الرفع" -ForegroundColor Yellow
    Write-Host "تأكد من:" -ForegroundColor Yellow
    Write-Host "  1. أن لديك GitHub token" -ForegroundColor Yellow
    Write-Host "  2. أن الـ repo موجود" -ForegroundColor Yellow
    Write-Host "  3. محاولة: git push --force" -ForegroundColor Yellow
}

Write-Host "`n✨ اكتمل العملية!" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green