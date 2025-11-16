// Generate product pages with WhatsApp data + Reviews
// Execute: node generate-products-complete.js

const fs = require('fs');
const path = require('path');

const products = [
    {"id": 1, "slug": "نظارة-القراءة-وحماية-العين-من-الاشعة", "sku": "A.000855", "image": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatZbgcCNey.jpeg?alt=media&token=a8d781bb-3cab-4f30-be3f-d15adf535c0a", "title": "نظارة القراءة وحماية العين من الاشعة", "price": 249.9, "sale": 199.9},
    {"id": 2, "slug": "جهاز-الحجامة-الذكي", "sku": "A.002232", "image": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatogHffDiV.webp?alt=media&token=f3972ac6-1f02-4bff-958b-b2087d03813a", "title": "جهاز الحجامة الذكي", "price": 255, "sale": 205},
    {"id": 3, "slug": "مظلة-واقية-من-الشمس-للزجاج-الأمامي-للسيارة", "sku": "A.001785", "image": "https://firebasestorage.googleapis.com/v0/b/ashyaterkomipk.jpg?alt=media&token=bc56fcf9-6082-4942-b145-4eec4337cb0c", "title": "مظلة واقية من الشمس للزجاج الأمامي للسيارة", "price": 238, "sale": 188},
    {"id": 4, "slug": "قطاعة-الخضار-اليدوية", "sku": "A.001436", "image": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatCZ76KDh6.jpg?alt=media&token=198ae048-c196-4cb5-8b93-25951aca3f16", "title": "قطاعة الخضار اليدوية", "price": 302.2, "sale": 252.2},
    {"id": 5, "slug": "جهاز-ازالة-الشعر-بتكنولوجيا-الذبذبات", "sku": "A.000356", "image": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatpThNUiZn.jpg?alt=media&token=db63d41d-37ba-4143-a60e-729171c1340e", "title": "جهاز ازالة الشعر بتكنولوجيا الذبذبات", "price": 273.7, "sale": 223.7},
    {"id": 6, "slug": "آلة-الخياطة-المحمولة", "sku": "A.000218", "image": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatRQoHbGoD.jpg?alt=media&token=243fc879-55f7-4bef-83e7-3ac266bd5ddf", "title": "آلة الخياطة المحمولة", "price": 327.7, "sale": 277.7},
    {"id": 7, "slug": "جل-تبييض-الأسنان-EELHOE", "sku": "A.003176", "image": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatFezzopz2.jfif?alt=media&token=5a1513c8-671c-4f07-8d4e-4d897577778e", "title": "جل تبييض الأسنان EELHOE", "price": 238, "sale": 188},
    {"id": 8, "slug": "جهاز-مساج-القدمين", "sku": "A.001499", "image": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatmBgYRYpQ.jpeg?alt=media&token=57c59dc6-2588-4212-98c9-e7a5e6c97872", "title": "جهاز مساج القدمين", "price": 281.2, "sale": 231.2},
    {"id": 9, "slug": "سجادة-صلاة-تعليمية", "sku": "A.001501", "image": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatnBu8BG9z.png?alt=media&token=55609873-7836-43d5-83c4-c3e04820f677", "title": "سجادة صلاة تعليمية", "price": 327.7, "sale": 277.7},
    {"id": 10, "slug": "طابعة-صور-حرارية-صغيرة-للهاتف", "sku": "A.001652", "image": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatGVhuW2z5.jpg?alt=media&token=e77ef106-6e4d-46d0-8885-72c36b10dc74", "title": "طابعة صور حرارية صغيرة للهاتف", "price": 327.7, "sale": 277.7},
    {"id": 11, "slug": "مشد-الظهر-والكتف", "sku": "A.001228", "image": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatM43d3jZJ.jpg?alt=media&token=3f3733b2-b5b3-47e3-8110-bdc6f0b83b2b", "title": "مشد الظهر والكتف", "price": 281.9, "sale": 231.9},
    {"id": 12, "slug": "مسدس-تدليك-عضلات-الجسم", "sku": "A.001982", "image": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatdvMqD0NX.jpg?alt=media&token=eab767b4-fc42-4f33-9bd7-b61e7b1915c2", "title": "مسدس تدليك عضلات الجسم", "price": 327.7, "sale": 277.7},
    {"id": 13, "slug": "مكواه-بخار-كهربائية-محمولة", "sku": "A.001851", "image": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatLL0aifnC.jpeg?alt=media&token=fc6aa6b4-c419-4777-a12d-3fa2b1b3843b", "title": "مكواه بخار كهربائية محمولة", "price": 288.7, "sale": 238.7},
    {"id": 14, "slug": "صينية-خبز-سيليكون-للمقلاة-الهوائية", "sku": "A.003334", "image": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatQSpVTsFx.webp?alt=media&token=36a67bb3-260d-4b2c-87a0-e7a8e097aaf1", "title": "صينية خبز سيليكون للمقلاة الهوائية", "price": 272.9, "sale": 222.9},
    {"id": 15, "slug": "زيت-أوميغا-لتطويل-اللحية-وتعبئة-الفراغات", "sku": "A.000185", "image": "https://firebasestorage.googleapis.com/v0/b/ashyaatcrm.appspot.com/o/images%2FashyaatTdtwUnih.jpg?alt=media&token=cf62af89-b072-4575-a9b7-a1854264da82", "title": "زيت أوميغا لتطويل اللحية وتعبئة الفراغات", "price": 263.2, "sale": 213.2}
];

const reviews = [
    { name: "محمد الخليفي", rating: 5, text: "منتج ممتاز وجودة عالية جداً، التوصيل سريع وآمن! 🌟" },
    { name: "فاطمة القحطاني", rating: 5, text: "اشتريت عدة منتجات وكلها رائعة، السعر مناسب جداً 💫" },
    { name: "علي الدوسري", rating: 4, text: "المنتج جيد لكن أتمنى توفير المزيد من الخيارات 👍" },
    { name: "نورة الملا", rating: 5, text: "أفضل متجر إلكتروني في قطر! جودة وأمان عالي 🔥" },
    { name: "خالد الكواري", rating: 5, text: "تجربة تسوق رائعة جداً، المنتجات أصلية 100% ✨" }
];

function generateProduct(p) {
    const discount = Math.round(((p.price - p.sale) / p.price) * 100);
    const whatsappMsg = encodeURIComponent(
        `📦 *${p.title}*\n\n` +
        `💰 السعر: ${p.sale} QAR (أصلاً ${p.price} QAR)\n` +
        `🏷️ SKU: ${p.sku}\n` +
        `📉 توفير: ${discount}%\n` +
        `🔗 الرابط: https://sooq-qatar.arabsad.com/products-pages/${p.slug}.html\n\n` +
        `أنا مهتم بهذا المنتج`
    );

    let reviewsHTML = '';
    reviews.forEach(r => {
        const stars = '⭐'.repeat(r.rating);
        reviewsHTML += `
        <div class="review" style="padding: 1.5rem; background: #f9f9f9; border-left: 4px solid #D4AF37; margin-bottom: 1rem; border-radius: 8px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <strong style="color: #6B1D3F;">${r.name}</strong>
                <span style="color: #FFD700; font-size: 1.1rem;">${stars}</span>
            </div>
            <p style="color: #333;">${r.text}</p>
        </div>`;
    });

    return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${p.title} | سوق قطر</title>
    <meta name="description" content="${p.title} - السعر: ${p.sale} QAR. منتج أصلي بضمان من سوق قطر.">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='90' text-anchor='middle'>🇶🇦</text></svg>">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root { --qatar-maroon: #6B1D3F; --qatar-gold: #D4AF37; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; line-height: 1.6; }

        /* HEADER */
        header#main-header {
            background: linear-gradient(135deg, #6B1D3F 0%, #8B2E5F 100%);
            color: white;
            padding: 1.2rem;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
        }
        header#main-header h1 { font-size: 1.4rem; font-weight: 900; }
        header#main-header h1 a { color: white; text-decoration: none; }
        .nav-links { display: flex; gap: 1.5rem; flex-wrap: wrap; }
        .nav-links a { color: white; text-decoration: none; font-weight: 500; padding: 0.5rem 0.8rem; border-radius: 5px; font-size: 0.9rem; }
        .nav-links a:hover { background: rgba(255,255,255,0.2); }

        /* CONTENT */
        .container { max-width: 1200px; margin: 2rem auto; padding: 0 1rem; }
        .breadcrumb { margin-bottom: 2rem; font-size: 0.9rem; color: #666; }
        .breadcrumb a { color: #6B1D3F; text-decoration: none; }
        
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
        .product-image-box { position: relative; background: #f5f5f5; border-radius: 12px; overflow: hidden; }
        .product-image { width: 100%; height: auto; object-fit: contain; padding: 1rem; display: block; }
        .badge-discount {
            position: absolute;
            top: 15px;
            right: 15px;
            background: #FF6B6B;
            color: white;
            padding: 0.8rem 1.2rem;
            border-radius: 50px;
            font-weight: bold;
            font-size: 1.2rem;
        }
        
        .product-details h1 { color: #6B1D3F; margin-bottom: 1rem; font-size: 2rem; }
        .sku { display: inline-block; background: #D4AF37; color: #000; padding: 0.5rem 1rem; border-radius: 50px; font-weight: bold; margin-bottom: 1.5rem; font-size: 0.85rem; }
        .price-section {
            background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
            padding: 2rem;
            border-radius: 12px;
            margin-bottom: 2rem;
            border-left: 4px solid #D4AF37;
        }
        .original-price { font-size: 1rem; color: #999; text-decoration: line-through; margin-bottom: 0.5rem; }
        .sale-price { font-size: 2.5rem; color: #6B1D3F; font-weight: 900; }
        .savings { color: #4CAF50; font-weight: bold; margin-top: 0.5rem; }
        
        .buttons { display: flex; gap: 1rem; margin-top: 2rem; }
        .btn {
            flex: 1;
            padding: 1.2rem;
            border: none;
            border-radius: 10px;
            font-weight: bold;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
            display: block;
            transition: all 0.3s;
            font-size: 1rem;
        }
        .btn-cart { background: linear-gradient(135deg, #6B1D3F 0%, #8B2E5F 100%); color: white; }
        .btn-cart:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(107,29,63,0.3); }
        .btn-whatsapp { background: linear-gradient(135deg, #25D366 0%, #1FA855 100%); color: white; }
        .btn-whatsapp:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(37,211,102,0.3); }

        /* REVIEWS */
        .reviews-section {
            background: white;
            padding: 2.5rem;
            border-radius: 15px;
            margin-bottom: 2rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
        }
        .reviews-section h2 { color: #6B1D3F; margin-bottom: 2rem; font-size: 1.8rem; font-weight: 900; }

        /* FOOTER */
        footer#main-footer {
            background: linear-gradient(135deg, #6B1D3F 0%, #5a1530 100%);
            color: white;
            margin-top: 3rem;
            padding: 3rem 1rem 1rem;
            border-top: 3px solid #D4AF37;
        }
        .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }
        .footer-section h4 { color: #D4AF37; margin-bottom: 1rem; font-weight: 900; }
        .footer-section a { color: rgba(255,255,255,0.85); text-decoration: none; }
        .footer-section a:hover { color: #D4AF37; }
        .footer-bottom { text-align: center; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.2); color: rgba(255,255,255,0.7); }

        @media (max-width: 768px) {
            .product-hero { grid-template-columns: 1fr; gap: 1.5rem; }
            .buttons { flex-direction: column; }
        }
    </style>
</head>
<body>
    <header id="main-header">
        <div class="header-container">
            <h1><a href="/">🇶🇦 سوق قطر</a></h1>
            <nav class="nav-links">
                <a href="/">الرئيسية</a>
                <a href="/about.html">عن المتجر</a>
                <a href="/privacy.html">الخصوصية</a>
                <a href="/terms.html">الشروط</a>
                <a href="/return.html">الاسترجاع</a>
                <a href="/shipping.html">التوصيل</a>
            </nav>
        </div>
    </header>

    <div class="container">
        <div class="breadcrumb">
            <a href="/">الرئيسية</a> / <span>${p.title}</span>
        </div>

        <div class="product-hero">
            <div class="product-image-box">
                <img src="${p.image}" alt="${p.title}" class="product-image" loading="lazy">
                <div class="badge-discount">-${discount}%</div>
            </div>

            <div class="product-details">
                <h1>${p.title}</h1>
                <div class="sku">🏷️ SKU: ${p.sku}</div>
                
                <div class="price-section">
                    <div class="original-price">السعر الأصلي: ${p.price} QAR</div>
                    <div class="sale-price">${p.sale} QAR</div>
                    <div class="savings">📉 توفير: ${(p.price - p.sale).toFixed(2)} QAR</div>
                </div>

                <div class="buttons">
                    <button class="btn btn-cart" onclick="addToCart('${p.title}', ${p.sale}, '${p.sku}')">🛒 أضف إلى السلة</button>
                    <a href="https://wa.me/201110760081?text=${whatsappMsg}" target="_blank" class="btn btn-whatsapp">📱 واتساب</a>
                </div>
            </div>
        </div>

        <div class="reviews-section">
            <h2>⭐ تقييمات العملاء</h2>
            ${reviewsHTML}
        </div>
    </div>

    <footer id="main-footer">
        <div class="footer-container">
            <div class="footer-section">
                <h4>عن سوق قطر</h4>
                <p>متجر إلكتروني حصري للعملاء في قطر متخصص في المنتجات الذكية.</p>
            </div>
            <div class="footer-section">
                <h4>الروابط السريعة</h4>
                <ul style="list-style: none;">
                    <li><a href="/">الرئيسية</a></li>
                    <li><a href="/about.html">عن المتجر</a></li>
                    <li><a href="/privacy.html">الخصوصية</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>التواصل</h4>
                <p>📧 sherow1982@gmail.com</p>
                <p>📱 +201110760081</p>
            </div>
            <div class="footer-section">
                <h4>السياسات</h4>
                <ul style="list-style: none;">
                    <li><a href="/return.html">الاسترجاع</a></li>
                    <li><a href="/shipping.html">التوصيل</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2025 سوق قطر</p>
        </div>
    </footer>

    <script>
        function addToCart(title, price, sku) {
            const cart = JSON.parse(localStorage.getItem('cart') || '[]');
            cart.push({title, price, sku, date: new Date().toLocaleString('ar-SA')});
            localStorage.setItem('cart', JSON.stringify(cart));
            alert('✅ تم إضافة المنتج إلى السلة!');
        }
    </script>
</body>
</html>`;
}

if (!fs.existsSync('products-pages')) {
    fs.mkdirSync('products-pages', { recursive: true });
}

products.forEach(p => {
    const html = generateProduct(p);
    const file = path.join('products-pages', `${p.slug}.html`);
    fs.writeFileSync(file, html, 'utf8');
    console.log(`✅ ${p.slug}.html`);
});

console.log(`\n✨ تم توليد ${products.length} صفحة منتج كاملة مع:\n✓ Header + Footer\n✓ WhatsApp مع كل البيانات\n✓ التقييمات\n✓ SEO محسّن\n`);