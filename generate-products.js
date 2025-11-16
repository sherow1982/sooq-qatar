// سكريبت توليد صفحات المنتجات - Node.js
// نفذ: node generate-products.js

const fs = require('fs');
const path = require('path');

const productsData = [
    {"id": 1, "sku": "A.000855", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatZbgcCNey.jpeg?alt=media&token=a8d781bb-3cab-4f30-be3f-d15adf535c0a", "title": "نظارة القراءة وحماية العين من الاشعة", "price": 249.9, "sale_price": 199.9},
    {"id": 2, "sku": "A.002232", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatogHffDiV.webp?alt=media&token=f3972ac6-1f02-4bff-958b-b2087d03813a", "title": "جهاز الحجامة الذكي", "price": 255, "sale_price": 205},
    {"id": 3, "sku": "A.001785", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2Fashyaaterkomipk.jpg?alt=media&token=bc56fcf9-6082-4942-b145-4eec4337cb0c", "title": "مظلة واقية من الشمس للزجاج الأمامي للسيارة", "price": 238, "sale_price": 188},
    {"id": 4, "sku": "A.001436", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatCZ76KDh6.jpg?alt=media&token=198ae048-c196-4cb5-8b93-25951aca3f16", "title": "قطاعة الخضار اليدوية", "price": 302.2, "sale_price": 252.2},
    {"id": 5, "sku": "A.000356", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatpThNUiZn.jpg?alt=media&token=db63d41d-37ba-4143-a60e-729171c1340e", "title": "جهاز ازالة الشعر بتكنولوجيا الذبذبات", "price": 273.7, "sale_price": 223.7},
    {"id": 6, "sku": "A.000218", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatRQoHbGoD.jpg?alt=media&token=243fc879-55f7-4bef-83e7-3ac266bd5ddf", "title": "آلة الخياطة المحمولة", "price": 327.7, "sale_price": 277.7},
    {"id": 7, "sku": "A.003176", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatFezzopz2.jfif?alt=media&token=5a1513c8-671c-4f07-8d4e-4d897577778e", "title": "جل تبييض الأسنان EELHOE", "price": 238, "sale_price": 188},
    {"id": 8, "sku": "A.001499", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatmBgYRYpQ.jpeg?alt=media&token=57c59dc6-2588-4212-98c9-e7a5e6c97872", "title": "جهاز مساج القدمين", "price": 281.2, "sale_price": 231.2},
    {"id": 9, "sku": "A.001501", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatnBu8BG9z.png?alt=media&token=55609873-7836-43d5-83c4-c3e04820f677", "title": "سجادة صلاة تعليمية", "price": 327.7, "sale_price": 277.7},
    {"id": 10, "sku": "A.001652", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatGVhuW2z5.jpg?alt=media&token=e77ef106-6e4d-46d0-8885-72c36b10dc74", "title": "طابعة صور حرارية صغيرة للهاتف", "price": 327.7, "sale_price": 277.7},
    {"id": 11, "sku": "A.001228", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatM43d3jZJ.jpg?alt=media&token=3f3733b2-b5b3-47e3-8110-bdc6f0b83b2b", "title": "مشد الظهر والكتف", "price": 281.9, "sale_price": 231.9},
    {"id": 12, "sku": "A.001982", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatdvMqD0NX.jpg?alt=media&token=eab767b4-fc42-4f33-9bd7-b61e7b1915c2", "title": "مسدس تدليك عضلات الجسم", "price": 327.7, "sale_price": 277.7},
    {"id": 13, "sku": "A.001851", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatLL0aifnC.jpeg?alt=media&token=fc6aa6b4-c419-4777-a12d-3fa2b1b3843b", "title": "مكواه بخار كهربائية محمولة", "price": 288.7, "sale_price": 238.7},
    {"id": 14, "sku": "A.003334", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatQSpVTsFx.webp?alt=media&token=36a67bb3-260d-4b2c-87a0-e7a8e097aaf1", "title": "صينية خبز سيليكون للمقلاة الهوائية", "price": 272.9, "sale_price": 222.9},
    {"id": 15, "sku": "A.000185", "image_link": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatTdtwUnih.jpg?alt=media&token=cf62af89-b072-4575-a9b7-a1854264da82", "title": "زيت أوميغا لتطويل اللحية وتعبئة الفراغات", "price": 263.2, "sale_price": 213.2}
];

const reviews = [
    { author: "محمد الخليفي", rating: 5, text: "منتج ممتاز وجودة عالية جداً، التوصيل سريع وآمن" },
    { author: "فاطمة القحطاني", rating: 5, text: "اشتريت عدة منتجات وكلها رائعة، السعر مناسب" },
    { author: "علي الدوسري", rating: 4, text: "المنتج جيد لكن أتمنى توفير المزيد من الألوان" },
    { author: "نورة الملا", rating: 5, text: "أفضل متجر إلكتروني في قطر! جودة وأمان" },
    { author: "خالد الكواري", rating: 5, text: "تجربة تسوق رائعة جداً، المنتجات أصلية" },
    { author: "آمنة القطري", rating: 4, text: "متجر موثوق وآمن. استمتعت بالتسوق بكل أريحية" },
    { author: "حمد الثاني", rating: 5, text: "منتجات أصلية بأسعار حقيقية! ما أتوقع أحسن" },
    { author: "مريم الحمادي", rating: 5, text: "خدمة العملاء رائعة وساعدوني في الاختيار" }
];

const pagesDir = 'products-pages';

// إنشاء المجلد
if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir);
    console.log('✅ تم إنشاء مجلد products-pages');
}

// دالة للحصول على تقييمات عشوائية
function getRandomReviews(count) {
    let shuffled = [...reviews].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

// توليد كل صفحة منتج
console.log('\n🚀 بدء توليد صفحات المنتجات...\n');

productsData.forEach(product => {
    const discount = Math.round(((product.price - product.sale_price) / product.price) * 100);
    const selectedReviews = getRandomReviews(3);
    
    let reviewsHtml = '';
    selectedReviews.forEach(review => {
        const stars = '⭐'.repeat(review.rating);
        reviewsHtml += `
        <div class='review'>
            <div class='review-header'>
                <h4>${review.author}</h4>
                <span class='stars'>${stars}</span>
            </div>
            <p>${review.text}</p>
        </div>`;
    });

    const whatsappMsg = encodeURIComponent(`مهتم بـ: ${product.title} - السعر: ${product.sale_price} QAR - SKU: ${product.sku}`);

    const html = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${product.title} - سوق قطر</title>
    <meta name="description" content="${product.title} - السعر: ${product.sale_price} QAR. متجر قطر الإلكتروني الموثوق">
    <meta property="og:title" content="${product.title}">
    <meta property="og:price:amount" content="${product.sale_price}">
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
                <img src="${product.image_link}" alt="${product.title}" class="product-image" 
                     onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Crect fill=%22%23f0f0f0%22 width=%22400%22 height=%22400%22/%3E%3C/svg%3E'">
            </div>
            <div class="product-details">
                <h1>${product.title}</h1>
                <div class="sku">SKU: ${product.sku}</div>
                
                <div class="price-box">
                    <div class="original-price">السعر الأصلي: ${product.price} QAR</div>
                    <div class="sale-price">${product.sale_price} QAR<span class="discount">-${discount}%</span></div>
                </div>

                <button class="add-to-cart" onclick="addToCart(${product.id}, '${product.title}', ${product.sale_price})">
                    🛒 أضف إلى السلة
                </button>

                <a href="https://wa.me/201110760081?text=${whatsappMsg}" 
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
            ${reviewsHtml}
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
</html>`;

    const fileName = path.join(pagesDir, `product-${product.id}.html`);
    fs.writeFileSync(fileName, html, 'utf8');
    console.log(`✅ product-${product.id}.html - ${product.title}`);
});

console.log(`\n✨ تم توليد ${productsData.length} صفحة منتج بنجاح!`);
console.log(`📁 الملفات موجودة في: ./products-pages/\n`);
console.log('📤 الآن نفذ:');
console.log('   git add products-pages/');
console.log('   git commit -m "🛍️ صفحات المنتجات الفريدة - 15 صفحة"');
console.log('   git push\n');