# سكريبت توليد صفحات المنتجات - سوق قطر
# نفذ: powershell -ExecutionPolicy Bypass -File generate-products.ps1

Write-Host "🚀 بدء توليد صفحات المنتجات..." -ForegroundColor Green

# قراءة products.json
$json = Get-Content "products.json" -Raw | ConvertFrom-Json
$productsFolder = "products-pages"

# إنشاء المجلد
if (!(Test-Path $productsFolder)) {
    New-Item -ItemType Directory -Name $productsFolder | Out-Null
    Write-Host "📁 تم إنشاء مجلد products-pages" -ForegroundColor Cyan
}

# قائمة التقييمات القطرية
$reviews = @(
    @{author="محمد الخليفي"; rating=5; text="منتج ممتاز وجودة عالية جداً، التوصيل سريع وآمن"},
    @{author="فاطمة القحطاني"; rating=5; text="اشتريت عدة منتجات وكلها رائعة، السعر مناسب"},
    @{author="علي الدوسري"; rating=4; text="المنتج جيد لكن أتمنى توفير المزيد من الألوان"},
    @{author="نورة الملا"; rating=5; text="أفضل متجر إلكتروني في قطر! جودة وأمان"},
    @{author="خالد الكواري"; rating=5; text="تجربة تسوق رائعة جداً، المنتجات أصلية"},
    @{author="آمنة القطري"; rating=4; text="متجر موثوق وآمن. استمتعت بالتسوق بكل أريحية"},
    @{author="حمد الثاني"; rating=5; text="منتجات أصلية بأسعار حقيقية! ما أتوقع أحسن"},
    @{author="مريم الحمادي"; rating=5; text="خدمة العملاء رائعة وساعدوني في الاختيار"}
)

# توليد كل صفحة منتج
$count = 0
foreach ($product in $json) {
    $fileName = "product-$($product.id).html"
    $filePath = Join-Path $productsFolder $fileName
    
    $discount = [math]::Round((($product.price - $product.sale_price) / $product.price) * 100)
    $selectedReviews = $reviews | Get-Random -Count 3
    
    $reviewsHtml = ""
    foreach ($review in $selectedReviews) {
        $stars = "⭐" * $review.rating
        $reviewsHtml += "
        <div class='review'>
            <div class='review-header'>
                <h4>$($review.author)</h4>
                <span class='stars'>$stars</span>
            </div>
            <p>$($review.text)</p>
        </div>"
    }
    
    $whatsappMsg = [System.Web.HttpUtility]::UrlEncode("مهتم بـ: $($product.title) - السعر: $($product.sale_price) QAR - SKU: $($product.sku)")
    
    $html = @"
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$($product.title) - سوق قطر</title>
    <meta name="description" content="$($product.title) - السعر: $($product.sale_price) QAR. متجر قطر الإلكتروني الموثوق">
    <meta property="og:title" content="$($product.title)">
    <meta property="og:price:amount" content="$($product.sale_price)">
    <meta property="og:price:currency" content="QAR">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
            --qatar-maroon: #6B1D3F;
            --qatar-gold: #D4AF37;
            --qatar-dark: #1a1a1a;
            --qatar-light: #f5f5f5;
        }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: var(--qatar-light);
            line-height: 1.6;
        }
        header {
            background: linear-gradient(135deg, var(--qatar-maroon) 0%, #8B2E5F 100%);
            color: white;
            padding: 1rem;
            text-align: center;
        }
        .container { max-width: 1000px; margin: 0 auto; padding: 2rem 1rem; }
        .product-hero { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; background: white; padding: 2rem; border-radius: 10px; margin-bottom: 2rem; }
        .product-image { width: 100%; border-radius: 8px; }
        .product-details h1 { color: var(--qatar-maroon); margin-bottom: 1rem; font-size: 1.8rem; }
        .price-box {
            background: #f0f0f0;
            padding: 1.5rem;
            border-radius: 8px;
            margin: 1rem 0;
        }
        .original-price { font-size: 0.95rem; color: #999; text-decoration: line-through; }
        .sale-price { font-size: 2rem; color: var(--qatar-maroon); font-weight: bold; }
        .discount { background: #FF6B6B; color: white; padding: 0.5rem 1rem; border-radius: 5px; display: inline-block; margin-left: 1rem; }
        .sku { font-size: 0.85rem; color: #999; margin: 1rem 0; }
        .add-to-cart {
            background: var(--qatar-maroon);
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            width: 100%;
            margin: 1rem 0;
            font-weight: bold;
        }
        .add-to-cart:hover { background: #8B2E5F; }
        .whatsapp-btn {
            background: #25D366;
            color: white;
            padding: 1rem 2rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            width: 100%;
            text-decoration: none;
            display: block;
            text-align: center;
            font-weight: bold;
        }
        .whatsapp-btn:hover { background: #1FA855; }
        .specs { background: white; padding: 2rem; border-radius: 10px; margin: 2rem 0; }
        .specs h2 { color: var(--qatar-maroon); margin-bottom: 1rem; }
        .spec-list { list-style: none; }
        .spec-list li { padding: 0.7rem 0; border-bottom: 1px solid #eee; }
        .spec-list li::before { content: "✓ "; color: var(--qatar-maroon); font-weight: bold; margin-left: 0.5rem; }
        .reviews { background: white; padding: 2rem; border-radius: 10px; margin: 2rem 0; }
        .reviews h2 { color: var(--qatar-maroon); margin-bottom: 1rem; }
        .review {
            padding: 1rem;
            border-left: 3px solid var(--qatar-maroon);
            margin-bottom: 1rem;
            background: #f9f9f9;
            border-radius: 5px;
        }
        .review-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
        .review h4 { color: var(--qatar-dark); }
        .stars { color: #FFD700; font-size: 1rem; }
        footer { background: var(--qatar-maroon); color: white; text-align: center; padding: 1rem; margin-top: 2rem; }
        @media (max-width: 768px) { 
            .product-hero { grid-template-columns: 1fr; }
            .discount { display: block; margin: 0.5rem 0; }
        }
    </style>
</head>
<body>
    <header>
        <h1>🇶🇦 سوق قطر</h1>
    </header>

    <div class="container">
        <div class="product-hero">
            <div>
                <img src="$($product.image_link)" alt="$($product.title)" class="product-image" 
                     onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22400%22 height=%22400%22/%3E%3C/svg%3E'">
            </div>
            <div class="product-details">
                <h1>$($product.title)</h1>
                <div class="sku">SKU: $($product.sku)</div>
                
                <div class="price-box">
                    <div class="original-price">السعر الأصلي: $($product.price) QAR</div>
                    <div class="sale-price">$($product.sale_price) QAR<span class="discount">-$discount%</span></div>
                </div>

                <button class="add-to-cart" onclick="addToCart($($product.id), '$($product.title)', $($product.sale_price))">
                    🛒 أضف إلى السلة
                </button>

                <a href="https://wa.me/201110760081?text=$whatsappMsg" 
                   target="_blank" class="whatsapp-btn">
                    📱 تواصل عبر واتساب
                </a>
            </div>
        </div>

        <div class="specs">
            <h2>📋 مواصفات المنتج</h2>
            <ul class="spec-list">
                <li>منتج أصلي وموثوق 100%</li>
                <li>جودة عالية وفقاً لمعايير السوق العالمية</li>
                <li>توصيل سريع وآمن إلى الدوحة</li>
                <li>ضمان رضا العميل 100%</li>
                <li>دعم عملاء متميز 24/7</li>
                <li>سياسة استرجاع ميسرة وبدون تعقيدات</li>
            </ul>
        </div>

        <div class="reviews">
            <h2>⭐ تقييمات العملاء</h2>
            $reviewsHtml
        </div>
    </div>

    <footer>
        <p>&copy; 2025 سوق قطر - جميع الحقوق محفوظة | 📱 +201110760081 | 📧 sherow1982@gmail.com</p>
    </footer>

    <script>
        function addToCart(id, title, price) {
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            cart.push({id, title, price, qty: 1});
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('تم إضافة المنتج إلى السلة!');
        }
    </script>
</body>
</html>
"@

    Set-Content -Path $filePath -Value $html -Encoding UTF8
    $count++
    Write-Host "✅ product-$($product.id).html - $($product.title)" -ForegroundColor Green
}

Write-Host "`n✨ تم توليد $count صفحة منتج بنجاح!" -ForegroundColor Green
Write-Host "📁 الملفات موجودة في: .\$productsFolder\" -ForegroundColor Cyan
Write-Host "`n📤 الآن: git add products-pages && git commit -m 'صفحات المنتجات' && git push" -ForegroundColor Yellow