# 🚀 أمر PowerShell الشامل الكامل

## خطوة أولى: احصل على IP جهازك

افتح PowerShell وشغل هذا الأمر:

```powershell
(Invoke-WebRequest -Uri "https://api.ipify.org?format=json").Content | ConvertFrom-Json | Select-Object ip
```

**مثال الـ IP:**
```
ip
--
203.0.113.42
```

احفظ هذا الـ IP، بتحتاجه في الخطوة الثانية.

---

## الخطوة الثانية: نفذ هذا الأمر الشامل الكامل:

```powershell
cd C:\Users\shero\OneDrive\Desktop\sooq-qatar; `
node generate-products-slugs.js; `
echo "YOUR_IP_HERE" > allowed-ips.txt; `
git add .; `
git commit -m "🎉 متجر سوق قطر الاحترافي - محمي جغرافياً وحسب الـ IP - مع صفحات قانونية وUI/UX متطورة"; `
git push
```

**استبدل `YOUR_IP_HERE` بـ IP جهازك الفعلي** (مثلاً: `203.0.113.42`)

---

## مثال كامل:

```powershell
cd C:\Users\shero\OneDrive\Desktop\sooq-qatar
node generate-products-slugs.js
echo "203.0.113.42" > allowed-ips.txt
git add .
git commit -m "🎉 سوق قطر - المتجر الاحترافي الكامل"
git push
```

---

## ✅ الميزات الجديدة:

✅ **Geofencing + IP Whitelist**: قطر فقط + IP جهازك المحدد  
✅ **صفحات قانونية كاملة**: Privacy, Terms, Return, Shipping  
✅ **UI/UX احترافي**: Navbar ثابت، Sidebar تنقل، Animations  
✅ **صفحات منتجات فريدة**: سلاج + تصميم مبهر  
✅ **متجر متكامل**: Cart + Checkout + WhatsApp ذكي  
✅ **SEO محسّن**: Sitemap + Meta Tags + Schema  

---

## 📋 الملفات الجاهزة:

- ✅ `index-geolocked-ip.html` - الرئيسية محمية
- ✅ `privacy.html` - سياسة الخصوصية
- ✅ `terms.html` - الشروط والأحكام
- ✅ `return.html` - سياسة الاسترجاع
- ✅ `shipping.html` - سياسة التوصيل
- ✅ `about.html` - عن المتجر
- ✅ `products-pages/` - صفحات المنتجات الفريدة
- ✅ `allowed-ips.txt` - IP المسموح

**جاهز؟**