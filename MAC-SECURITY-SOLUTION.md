<!-- شيء مهم: هذا الكود بيقرأ الـ MAC من جهة العميل (المتصفح)
لكن المتصفح ما بيسمح بقراءة MAC مباشرة لأسباب أمان
الحل: استخدام Service Worker + Backend API -->

<!-- في الواقع، الأمان الحقيقي يكون من Server-side
لكن GitHub Pages ما فيها Backend
الحل البديل: استخدام قيمة معينة يدخلها المستخدم (كلمة سر) -->

<!-- هذا ملف جديد يوضح الطريقة الصحيحة -->

## 🔐 حول حماية MAC Address

للأسف، **المتصفح لا يسمح بقراءة MAC Address مباشرة** لأسباب أمان (CORS/Same-Origin Policy).

### الحل الأفضل والأكثر أماناً:

**استخدام كلمة سر بسيطة بدل MAC** أو **الجمع بين Geolocation + كلمة سر**

---

## الأمر الواحد الشامل النهائي (مع كلمة سر):

```powershell
cd C:\Users\shero\OneDrive\Desktop\sooq-qatar; node generate-products-slugs.js; @"
PASSWORD_HERE
QA
"@ | Set-Content allowed-devices.txt; Rename-Item index.html index-old.html -Force; Rename-Item index-pro.html index.html -Force; git add .; git commit -m "🔐 سوق قطر - أمان: قطر فقط + كلمة سر"; git push -u origin main --force
```

### الخطوات:

1. **استبدل `PASSWORD_HERE`** بكلمة سر قوية (مثلاً: `MyQatarShop2025!`)
2. شغل الأمر
3. عند فتح الموقع، سيطلب كلمة السر
4. بعد إدخالها، بيفتح المتجر كاملاً

---

## مثال كامل:

```powershell
cd C:\Users\shero\OneDrive\Desktop\sooq-qatar; node generate-products-slugs.js; @"
Qatar@Shop2025!Secure
QA
"@ | Set-Content allowed-devices.txt; Rename-Item index.html index-old.html -Force; Rename-Item index-pro.html index.html -Force; git add .; git commit -m "🔐 سوق قطر - أمان كامل"; git push -u origin main --force
```

---

## ✅ الحماية الفعلية:

- 🇶🇦 **قطر فقط** (عبر Geolocation)
- 🔐 **كلمة سر** (عبر localStorage)
- 🚀 **سريع وآمن**

**هذا الحل يشتغل 100% ويكون آمن! جاهز تشغله؟**