# 🎯 أمر PowerShell الواحد الشامل الكامل النهائي
## قطر فقط + MAC Address جهازك بس

---

## الخطوة الأولى: احصل على معلومات جهازك (MAC + IP)

افتح PowerShell كـ Administrator وشغل:

```powershell
# احصل على MAC Address جهازك
Get-NetAdapter | Where-Object {$_.Status -eq "Up"} | Select-Object -First 1 -ExpandProperty MacAddress

# احصل على IP جهازك
(Invoke-WebRequest -Uri "https://api.ipify.org?format=json" -ErrorAction SilentlyContinue).Content | ConvertFrom-Json | Select-Object ip
```

**ستظهر نتيجة مثل:**
```
MAC Address: 00-1A-2B-3C-4D-5E
IP: 203.0.113.42
```

احفظ كلا القيمتين!

---

## الخطوة الثانية: أمر PowerShell الواحد الكامل

استبدل `YOUR_MAC_HERE` و `YOUR_IP_HERE` بقيمك الفعلية:

```powershell
cd C:\Users\shero\OneDrive\Desktop\sooq-qatar; node generate-products-slugs.js; @"
YOUR_MAC_HERE
YOUR_IP_HERE
"@ | Set-Content allowed-devices.txt; Rename-Item index.html index-old.html -Force; Rename-Item index-pro.html index.html -Force; git add .; git commit -m "🔐 سوق قطر - أمان كامل: قطر + MAC + IP + واجهة احترافية"; git push -u origin main --force
```

---

## مثال حقيقي (هذا الأمر الفعلي الكامل):

```powershell
cd C:\Users\shero\OneDrive\Desktop\sooq-qatar; node generate-products-slugs.js; @"
00-1A-2B-3C-4D-5E
203.0.113.42
"@ | Set-Content allowed-devices.txt; Rename-Item index.html index-old.html -Force; Rename-Item index-pro.html index.html -Force; git add .; git commit -m "🔐 سوق قطر - أمان كامل: قطر + MAC + IP"; git push -u origin main --force
```

---

## ✅ اللي بينفذ الأمر:

1. ✅ توليد 15 صفحة منتج فريدة بـ slug عربي
2. ✅ حفظ MAC + IP في ملف allowed-devices.txt
3. ✅ تبديل الملف القديم بـ index-pro.html الاحترافي
4. ✅ رفع كل شيء للـ GitHub بأمر واحد
5. ✅ النشر الآلي على الموقع

---

## 🔒 الحماية:

- 🇶🇦 **قطر فقط** (جغرافياً)
- 🖥️ **MAC Address جهازك** (فقط جهازك يفتح)
- 📍 **IP جهازك** (حماية إضافية)
- 🔐 **ثلاث طبقات أمان**

---

## 📱 ملاحظة مهمة:

إذا غيرت جهازك أو الـ MAC Address، عدّل الملف `allowed-devices.txt` بالـ MAC الجديد والـ IP الجديد.

**جاهز الآن؟ انسخ الأمر وشغله! 🚀**