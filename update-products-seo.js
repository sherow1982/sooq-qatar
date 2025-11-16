// سكريبت تحديث جميع صفحات المنتجات بـ SEO و UI/UX احترافي
// نفذ: node update-products-seo.js

const fs = require('fs');
const path = require('path');

const productsData = [
    {"id": 1, "slug": "نظارة-القراءة-وحماية-العين-من-الاشعة", "sku": "A.000855", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatZbgcCNey.jpeg?alt=media&token=a8d781bb-3cab-4f30-be3f-d15adf535c0a", "title": "نظارة القراءة وحماية العين من الاشعة", "price": 249.9, "sale_price": 199.9, "description": "نظارة عصرية توفر حماية كاملة للعين من الإشعاعات الضارة والأشعة الزرقاء"},
    {"id": 2, "slug": "جهاز-الحجامة-الذكي", "sku": "A.002232", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatogHffDiV.webp?alt=media&token=f3972ac6-1f02-4bff-958b-b2087d03813a", "title": "جهاز الحجامة الذكي", "price": 255, "sale_price": 205, "description": "جهاز حجامة ذكي بتقنية حديثة للعلاج الطبيعي والتدليك"},
    {"id": 3, "slug": "مظلة-واقية-من-الشمس-للزجاج-الأمامي-للسيارة", "sku": "A.001785", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaterkomipk.jpg?alt=media&token=bc56fcf9-6082-4942-b145-4eec4337cb0c", "title": "مظلة واقية من الشمس للزجاج الأمامي للسيارة", "price": 238, "sale_price": 188, "description": "مظلة واقية للسيارة توفر حماية من أشعة الشمس والحرارة"},
    {"id": 4, "slug": "قطاعة-الخضار-اليدوية", "sku": "A.001436", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatCZ76KDh6.jpg?alt=media&token=198ae048-c196-4cb5-8b93-25951aca3f16", "title": "قطاعة الخضار اليدوية", "price": 302.2, "sale_price": 252.2, "description": "قطاعة خضار يدوية سهلة الاستخدام وآمنة للمطبخ"},
    {"id": 5, "slug": "جهاز-ازالة-الشعر-بتكنولوجيا-الذبذبات", "sku": "A.000356", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatpThNUiZn.jpg?alt=media&token=db63d41d-37ba-4143-a60e-729171c1340e", "title": "جهاز ازالة الشعر بتكنولوجيا الذبذبات", "price": 273.7, "sale_price": 223.7, "description": "جهاز حديث لإزالة الشعر بتقنية الذبذبات الآمنة"},
    {"id": 6, "slug": "آلة-الخياطة-المحمولة", "sku": "A.000218", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatRQoHbGoD.jpg?alt=media&token=243fc879-55f7-4bef-83e7-3ac266bd5ddf", "title": "آلة الخياطة المحمولة", "price": 327.7, "sale_price": 277.7, "description": "آلة خياطة محمولة صغيرة مناسبة للاستخدام المنزلي"},
    {"id": 7, "slug": "جل-تبييض-الأسنان-EELHOE", "sku": "A.003176", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatFezzopz2.jfif?alt=media&token=5a1513c8-671c-4f07-8d4e-4d897577778e", "title": "جل تبييض الأسنان EELHOE", "price": 238, "sale_price": 188, "description": "جل تبييض آمن وفعال للحصول على أسنان بيضاء براقة"},
    {"id": 8, "slug": "جهاز-مساج-القدمين", "sku": "A.001499", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatmBgYRYpQ.jpeg?alt=media&token=57c59dc6-2588-4212-98c9-e7a5e6c97872", "title": "جهاز مساج القدمين", "price": 281.2, "sale_price": 231.2, "description": "جهاز مساج متقدم لتدليك القدمين والاسترخاء"},
    {"id": 9, "slug": "سجادة-صلاة-تعليمية", "sku": "A.001501", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatnBu8BG9z.png?alt=media&token=55609873-7836-43d5-83c4-c3e04820f677", "title": "سجادة صلاة تعليمية", "price": 327.7, "sale_price": 277.7, "description": "سجادة صلاة تعليمية مع علامات تساعد على تعليم الصلاة"},
    {"id": 10, "slug": "طابعة-صور-حرارية-صغيرة-للهاتف", "sku": "A.001652", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatGVhuW2z5.jpg?alt=media&token=e77ef106-6e4d-46d0-8885-72c36b10dc74", "title": "طابعة صور حرارية صغيرة للهاتف", "price": 327.7, "sale_price": 277.7, "description": "طابعة صور صغيرة وسهلة الاستخدام للهاتف الذكي"},
    {"id": 11, "slug": "مشد-الظهر-والكتف", "sku": "A.001228", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatM43d3jZJ.jpg?alt=media&token=3f3733b2-b5b3-47e3-8110-bdc6f0b83b2b", "title": "مشد الظهر والكتف", "price": 281.9, "sale_price": 231.9, "description": "مشد طبي لدعم الظهر والكتف وتخفيف الآلام"},
    {"id": 12, "slug": "مسدس-تدليك-عضلات-الجسم", "sku": "A.001982", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatdvMqD0NX.jpg?alt=media&token=eab767b4-fc42-4f33-9bd7-b61e7b1915c2", "title": "مسدس تدليك عضلات الجسم", "price": 327.7, "sale_price": 277.7, "description": "مسدس تدليك كهربائي لتدليك العضلات بعد التمارين"},
    {"id": 13, "slug": "مكواه-بخار-كهربائية-محمولة", "sku": "A.001851", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatLL0aifnC.jpeg?alt=media&token=fc6aa6b4-c419-4777-a12d-3fa2b1b3843b", "title": "مكواه بخار كهربائية محمولة", "price": 288.7, "sale_price": 238.7, "description": "مكواه بخار محمولة سهلة الاستخدام وسريعة"},
    {"id": 14, "slug": "صينية-خبز-سيليكون-للمقلاة-الهوائية", "sku": "A.003334", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatQSpVTsFx.webp?alt=media&token=36a67bb3-260d-4b2c-87a0-e7a8e097aaf1", "title": "صينية خبز سيليكون للمقلاة الهوائية", "price": 272.9, "sale_price": 222.9, "description": "صينية سيليكون آمنة للمقلاة الهوائية وفرن البخار"},
    {"id": 15, "slug": "زيت-أوميغا-لتطويل-اللحية-وتعبئة-الفراغات", "sku": "A.000185", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatTdtwUnih.jpg?alt=media&token=cf62af89-b072-4575-a9b7-a1854264da82", "title": "زيت أوميغا لتطويل اللحية وتعبئة الفراغات", "price": 263.2, "sale_price": 213.2, "description": "زيت طبيعي لتطويل وتغذية اللحية وملء الفراغات"}
];

const reviews = [
    { author: "محمد الخليفي", rating: 5, text: "منتج ممتاز وجودة عالية جداً، التوصيل سريع وآمن! 🌟" },
    { author: "فاطمة القحطاني", rating: 5, text: "اشتريت عدة منتجات وكلها رائعة، السعر مناسب جداً 💫" },
    { author: "علي الدوسري", rating: 4, text: "المنتج جيد لكن أتمنى توفير المزيد من الخيارات 👍" },
    { author: "نورة الملا", rating: 5, text: "أفضل متجر إلكتروني في قطر! جودة وأمان عالي 🔥" },
    { author: "خالد الكواري", rating: 5, text: "تجربة تسوق رائعة جداً، المنتجات أصلية 100% ✨" }
];

function createSlug(text) {
    return text.trim().replace(/[\s]+/g, '-').replace(/[^\w\u0600-\u06FF-]/g, '').toLowerCase();
}

function generateProductHTML(product) {
    const discount = Math.round(((product.price - product.sale_price) / product.price) * 100);
    const whatsappMsg = encodeURIComponent(`مهتم بـ: ${product.title}\nالسعر: ${product.sale_price} QAR\nSKU: ${product.sku}`);
    const selectedReviews = reviews.slice(0, 3);
    
    let reviewsHTML = '';
    selectedReviews.forEach(review => {
        const stars = '⭐'.repeat(review.rating);
        reviewsHTML += `
        <div class="review">
            <div class="review-header">
                <strong>${review.author}</strong>
                <span class="stars">${stars}</span>
            </div>
            <p>${review.text}</p>
        </div>`;
    });

    return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${product.title} | سوق قطر</title>
    <meta name="description" content="${product.description} - السعر: ${product.sale_price} QAR. منتج أصلي بضمان من سوق قطر.">
    <meta name="keywords" content="${product.title}, سوق قطر, تسوق أونلاين, ${product.sku}">
    <meta name="author" content="سوق قطر">
    <meta property="og:title" content="${product.title}">
    <meta property="og:description" content="${product.description}">
    <meta property="og:image" content="${product.image_link}">
    <meta property="og:price:amount" content="${product.sale_price}">
    <meta property="og:price:currency" content="QAR">
    <meta property="og:type" content="product">
    <link rel="canonical" href="https://sooq-qatar.arabsad.com/products-pages/${product.slug}.html">
    <link rel="alternate" hreflang="ar" href="https://sooq-qatar.arabsad.com/products-pages/${product.slug}.html">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='90' text-anchor='middle'>🇶🇦</text></svg>">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
            --qatar-maroon: #6B1D3F;
            --qatar-gold: #D4AF37;
            --qatar-dark: #1a1a1a;
            --qatar-light: #f5f5f5;
        }
        html { scroll-behavior: smooth; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: var(--qatar-light);
            line-height: 1.6;
        }
        header {
            background: linear-gradient(135deg, var(--qatar-maroon) 0%, #8B2E5F 100%);
            color: white;
            padding: 1.2rem;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        header h1 { font-size: 1.3rem; font-weight: 700; }
        header a { color: white; text-decoration: none; display: inline-block; margin-top: 0.8rem; transition: all 0.3s; }
        header a:hover { opacity: 0.8; }
        .container { max-width: 1200px; margin: 0 auto; padding: 2rem 1rem; }
        .breadcrumb { margin-bottom: 2rem; font-size: 0.9rem; color: #666; }
        .breadcrumb a { color: var(--qatar-maroon); text-decoration: none; transition: all 0.3s; }
        .breadcrumb a:hover { text-decoration: underline; }
        .product-hero {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            background: white;
            padding: 2.5rem;
            border-radius: 15px;
            margin-bottom: 2rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        }
        .product-image-container {
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            background: var(--qatar-light);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .product-image { width: 100%; height: auto; object-fit: contain; padding: 1rem; }
        .badge-discount {
            position: absolute;
            top: 15px;
            right: 15px;
            background: linear-gradient(135deg, #FF6B6B 0%, #EE5A52 100%);
            color: white;
            padding: 0.8rem 1.2rem;
            border-radius: 50px;
            font-weight: bold;
            font-size: 1.2rem;
            box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
        }
        .product-details h1 {
            color: var(--qatar-maroon);
            margin-bottom: 1rem;
            font-size: 2rem;
            line-height: 1.4;
            font-weight: 900;
        }
        .sku-badge {
            display: inline-block;
            background: var(--qatar-gold);
            color: var(--qatar-dark);
            padding: 0.5rem 1rem;
            border-radius: 50px;
            font-size: 0.85rem;
            font-weight: bold;
            margin-bottom: 1.5rem;
        }
        .rating {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            margin-bottom: 1.5rem;
        }
        .stars { color: #FFD700; font-size: 1.2rem; }
        .price-section {
            background: linear-gradient(135deg, var(--qatar-light) 0%, #e8e8e8 100%);
            padding: 2rem;
            border-radius: 12px;
            margin-bottom: 2rem;
            border-left: 4px solid var(--qatar-gold);
        }
        .original-price { font-size: 1rem; color: #999; text-decoration: line-through; display: block; margin-bottom: 0.5rem; }
        .sale-price { font-size: 2.5rem; color: var(--qatar-maroon); font-weight: 900; display: block; margin-bottom: 0.5rem; }
        .savings { color: #4CAF50; font-weight: bold; font-size: 1rem; }
        .qty-section {
            display: flex;
            gap: 1rem;
            align-items: center;
            margin-bottom: 2rem;
        }
        .qty-section input {
            width: 80px;
            padding: 0.8rem;
            border: 2px solid var(--qatar-gold);
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s;
        }
        .qty-section input:focus { outline: none; border-color: var(--qatar-maroon); box-shadow: 0 0 0 3px rgba(107, 29, 63, 0.1); }
        .btn-group { display: flex; gap: 1rem; flex-direction: column; }
        .btn-add-cart, .btn-whatsapp {
            padding: 1.2rem 2rem;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-size: 1.1rem;
            font-weight: bold;
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            text-decoration: none;
            text-align: center;
            display: block;
        }
        .btn-add-cart {
            background: linear-gradient(135deg, var(--qatar-maroon) 0%, #8B2E5F 100%);
            color: white;
            box-shadow: 0 4px 15px rgba(107, 29, 63, 0.3);
        }
        .btn-add-cart:hover { transform: translateY(-3px); box-shadow: 0 8px 25px rgba(107, 29, 63, 0.4); }
        .btn-whatsapp {
            background: linear-gradient(135deg, #25D366 0%, #1FA855 100%);
            color: white;
            box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
        }
        .btn-whatsapp:hover { transform: translateY(-3px); box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4); }
        .specs {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            margin-bottom: 2rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        }
        .specs h3 { color: var(--qatar-maroon); margin-bottom: 1.5rem; font-size: 1.5rem; font-weight: 900; }
        .spec-list { list-style: none; }
        .spec-list li {
            padding: 0.8rem 0;
            border-bottom: 1px solid #eee;
            display: flex;
            align-items: center;
            gap: 0.7rem;
        }
        .spec-list li::before { content: "✓"; color: var(--qatar-gold); font-weight: bold; font-size: 1.3rem; }
        .reviews {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        }
        .reviews h3 { color: var(--qatar-maroon); margin-bottom: 1.5rem; font-size: 1.5rem; font-weight: 900; }
        .review {
            padding: 1.5rem;
            border-left: 4px solid var(--qatar-gold);
            margin-bottom: 1.5rem;
            background: linear-gradient(135deg, #f9f9f9 0%, #f5f5f5 100%);
            border-radius: 8px;
            transition: all 0.3s;
        }
        .review:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); transform: translateX(4px); }
        .review-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.8rem; }
        footer {
            background: var(--qatar-maroon);
            color: white;
            text-align: center;
            padding: 2rem;
            margin-top: 3rem;
            border-top: 3px solid var(--qatar-gold);
        }
        @media (max-width: 768px) {
            .product-hero { grid-template-columns: 1fr; gap: 1.5rem; padding: 1.5rem; }
            .product-details h1 { font-size: 1.4rem; }
            .sale-price { font-size: 1.8rem; }
            .btn-group { flex-direction: column; }
        }
    </style>
</head>
<body>
    <header>
        <h1>🇶🇦 سوق قطر</h1>
        <a href="/">← العودة للرئيسية</a>
    </header>

    <div class="container">
        <div class="breadcrumb">
            <a href="/">الرئيسية</a> / <span>${product.title}</span>
        </div>

        <div class="product-hero">
            <div class="product-image-container">
                <img src="${product.image_link}" alt="${product.title}" class="product-image" loading="lazy">
                <div class="badge-discount">-${discount}%</div>
            </div>

            <div class="product-details">
                <h1>${product.title}</h1>
                <div class="sku-badge">🔖 SKU: ${product.sku}</div>

                <div class="rating">
                    <span class="stars">⭐⭐⭐⭐⭐</span>
                    <span>(4.8 من 5)</span>
                </div>

                <div class="price-section">
                    <div class="original-price">السعر الأصلي: ${product.price} QAR</div>
                    <div class="sale-price">${product.sale_price} QAR</div>
                    <div class="savings">توفير: ${(product.price - product.sale_price).toFixed(2)} QAR</div>
                </div>

                <div class="qty-section">
                    <label for="qty">الكمية:</label>
                    <input type="number" id="qty" value="1" min="1" max="100">
                </div>

                <div class="btn-group">
                    <button class="btn-add-cart" onclick="addToCart(${product.id}, '${product.title}', ${product.sale_price})">
                        🛒 أضف إلى السلة
                    </button>
                    <a href="https://wa.me/201110760081?text=${whatsappMsg}" target="_blank" class="btn-whatsapp">
                        📱 اطلب عبر واتساب
                    </a>
                </div>
            </div>
        </div>

        <div class="specs">
            <h3>📋 المميزات</h3>
            <ul class="spec-list">
                <li>منتج أصلي وموثوق 100%</li>
                <li>جودة عالية وفقاً لمعايير السوق العالمية</li>
                <li>توصيل سريع وآمن</li>
                <li>ضمان رضا العميل 100%</li>
                <li>دعم عملاء متميز 24/7</li>
                <li>سياسة استرجاع سهلة وميسرة</li>
            </ul>
        </div>

        <div class="reviews">
            <h3>⭐ تقييمات العملاء</h3>
            ${reviewsHTML}
        </div>
    </div>

    <footer>
        <p>&copy; 2025 سوق قطر - جميع الحقوق محفوظة</p>
    </footer>

    <script>
        function addToCart(id, title, price) {
            const qty = parseInt(document.getElementById('qty').value) || 1;
            let cart = JSON.parse(localStorage.getItem('cart') || '[]');
            cart.push({id, title, price, qty});
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(\`تم إضافة \${qty} من "\${title}" إلى السلة!\`);
        }
    </script>
</body>
</html>`;
}

const pagesDir = 'products-pages';

if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir);
    console.log('✅ تم إنشاء مجلد products-pages');
}

console.log('\n🚀 بدء تحديث صفحات المنتجات بـ SEO و UI/UX احترافي...\n');

productsData.forEach(product => {
    const html = generateProductHTML(product);
    const filePath = path.join(pagesDir, `${product.slug}.html`);
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`✅ ${product.slug}.html - ${product.title}`);
});

console.log(`\n✨ تم تحديث ${productsData.length} صفحة منتج بتصميم احترافي وSEO محسّن!\n`);