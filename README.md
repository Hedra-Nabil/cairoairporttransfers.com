# Cairo International Airport Transfers (Astro.js + Netlify)

موقع كامل واحترافي لخدمات نقل مطار القاهرة الدولي (**Cairo Airport Transfers**) مبني بأحدث إصدارات **Astro.js** مع **Tailwind CSS**، مصمم طبق الأصل للتصميم المعتمد ومُهيّأ بالكامل للنشر الفوري على **Netlify**.

---

## 🚀 المميزات الرئيسية للمشروع

1. **تصميم عصري فائق الجودة (High Fidelity Replica)**:
   - لوحة ألوان دقيقة: الأزرق الداكن الفاخر (`#141238`) مع لمسات الأصفر والذهبي (`#f59e0b`).
   - صور واقعية عالية الدقة لأسطول النقل والأهرامات ونيل القاهرة وكورنيش الإسكندرية.
   - متجاوب 100% مع الهواتف الذكية والأجهزة اللوحية والشاشات العريضة.

2. **فورم بحث وحجز نموذجية وقابلة للتخصيص (Modular Booking Widget)**:
   - كود المكون متواجد في: `src/components/BookingSearchWidget.astro`.
   - يدعم التبديل بين ذهاب فقط (`One-way`) وذهاب وعودة (`Return`).
   - اختيار صالات مطار القاهرة (Terminal 1, 2, 3) ومطار سفنكس والوجهات المختلفة.
   - **جاهز للربط الخارجي**: تم تجهيز المكون بـ Hooks ومواضع مخصصة لإدراج أي Iframe أو Script خارجي أو توجيه الـ Form Action لمحرك الحجز الخاص بك لاحقاً بكل سلاسة وبدون المساس بهيكل الصفحة.

3. **أقسام الموقع المكتملة**:
   - **Hero Banner**: مع خلفية الأسطول ومحرك البحث العائم وتقييمات العملاء.
   - **Popular Transfers**: كروت أشهر الوجهات (وسط البلد، الجيزة، التجمع، الإسكندرية) بالأسعار وسعة الركاب والشنط.
   - **Start your journey**: استعراض فئات الأسطول (Private Sedan, Minivan, VIP Mercedes, Shuttle Bus).
   - **Customise your journey**: بطاقة الاستفسار السريع وتفاصيل الاستقبال الشخصي.
   - **Airport Overview**: دليل صالات مطار القاهرة.
   - **Guarantee Pillars**: بطاقات الضمان الأربعة (Meet & Greet, Flight Monitoring, Fixed Prices, Free Cancellation).
   - **Pickup Guides**: إرشادات استلام السائق والحجز الرقمي.
   - **Destinations**: أبرز المزارات السياحية والمعالم القريبة.
   - **Service Features**: قائمة المزايا "Everything you need to know".
   - **How it Works**: خطوات الحجز الثلاث.
   - **Helpful Information**: أكورديون إرشادات العودة والشنط وصالات الوصول.
   - **FAQs**: الأسئلة الشائعة بنظام تفاعلي سلس.
   - **Pre-Footer CTA & Footer**: كول تو أكشن نهائي مع فوتر كامل بقوائم الروابط، والنشرة البريدية، وطرق الدفع (Visa, Mastercard, Amex, Apple Pay).
   - **Floating WhatsApp**: زر محادثة فورية مباشر مع خدمة العملاء على واتساب.

---

## 🛠️ أوامر التشغيل والبناء (Commands)

```bash
# تشغيل السيرفر المحلي للتطوير (Development)
npm run dev

# بناء الموقع للإنتاج (Production Build)
npm run build

# معاينة البناء محلياً
npm run preview
```

---

## 🌐 النشر على Netlify (Deploy to Netlify)

المشروع مُهيأ مسبقاً بملف `netlify.toml`:
1. ارفع المشروع على حسابك في GitHub / GitLab / Bitbucket.
2. توجه إلى [Netlify](https://app.netlify.com/) واضغط **Add new site** > **Import an existing project**.
3. اختر المستودع وسيقوم Netlify تلقائياً بالتعرف على الإعدادات:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. اضغط **Deploy Site** وسيصبح موقعك متاحاً على الإنترنت بسرعة فائقة (Static Generation) مع شهادة SSL مجانية وتخزين مؤقت تلقائي للصور والملفات.
"# cairoairporttransfers.com" 
