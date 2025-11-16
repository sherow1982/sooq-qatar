# أمر PowerShell الواحد الشامل - نشر سوق قطر كاملاً

## 🚀 أمر واحد لتشغيل ورفع المتجر بكامله

انسخ هذا الأمر كما هو بالضبط:

```powershell
cd C:\Users\shero\OneDrive\Desktop\sooq-qatar; node generate-products.js; git config --global user.name "sherow1982"; git config --global user.email "sherow1982@gmail.com"; git init 2>$null; git remote add origin "https://github.com/sherow1982/sooq-qatar.git" 2>$null; git add .; git commit -m "🚀 سوق قطر - متجر احترافي كامل مع SEO وواتساب ذكي"; git push -u origin main --force
```

---

## أو اختر من الخيارات أدناه:

### ✅ الخيار 1: نشر كامل (مع توليد صفحات المنتجات)

```powershell
cd C:\Users\shero\OneDrive\Desktop\sooq-qatar
node generate-products.js
git config --global user.name "sherow1982"
git config --global user.email "sherow1982@gmail.com"
git init
git remote add origin "https://github.com/sherow1982/sooq-qatar.git" 2>$null
git add .
git commit -m "🚀 سوق قطر النسخة الاحترافية الكاملة"
git push -u origin main --force
```

---

### ✅ الخيار 2: نشر سريع (بدون توليد)

```powershell
cd C:\Users\shero\OneDrive\Desktop\sooq-qatar; git add .; git commit -m "تحديث سوق قطر"; git push
```

---

### ✅ الخيار 3: نشر انتقائي (ملفات محددة فقط)

```powershell
cd C:\Users\shero\OneDrive\Desktop\sooq-qatar
git add index-final.html sitemap.xml manifest.json
git commit -m "تحديث index والـ SEO"
git push
```

---

## 📋 الخطوات التفصيلية:

1. **افتح PowerShell** في المجلد:
   ```powershell
   cd C:\Users\shero\OneDrive\Desktop\sooq-qatar
   ```

2. **نفذ أمر النشر:**
   ```powershell
   # الخيار الأفضل (توليد + نشر):
   node generate-products.js; git add .; git commit -m "🎉 متجر سوق قطر الاحترافي"; git push
   ```

3. **انتظر اكتمال العملية:**
   - توليد 15 صفحة منتج ✅
   - رفع للـ GitHub ✅
   - نشر على sooq-qatar.pages.dev ✅

---

## 🎯 ماذا يحصل عند التنفيذ؟

✅ توليد صفحات المنتجات الفريدة (15 صفحة)  
✅ تحديث الـ sitemap  
✅ تحديث جميع Meta Tags  
✅ رفع كل الملفات للـ GitHub  
✅ النشر الآلي على الموقع  
✅ فهرسة المتجر في Google

---

## ⚠️ نصائح مهمة:

- **إذا أول مرة**: استخدم `git push -u origin main --force`
- **بعدها**: استخدم `git push` فقط
- **إذا حصل خطأ**: تأكد من GitHub Token أو SSH Key
- **للتحديث السريع**: استخدم الأمر الواحد من الأعلى

---

## 🔗 الموقع بعد النشر:

https://sooq-qatar.pages.dev/

---

## 📞 معلومات الاتصال المدمجة:

- 📧 sherow1982@gmail.com
- 📱 +201110760081 (واتساب ذكي)
- 📍 الدوحة، قطر
- 📮 93001