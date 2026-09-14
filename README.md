# بروتوفايل نوال صالح — React

مشروع React (مبني بـ Vite) جاهز تشغليه، تعدليه، وترفعيه عGitHub وتنشريه.

## 1) شغليه على جهازك

```bash
npm install
npm run dev
```

رح يفتحلك رابط محلي (localhost) تقدري تشوفي عليه الموقع وهو عم يتحدث لحظيًا وانتي عم تعدلي.

## 2) وين تعدلي المحتوى؟

**كل النصوص والروابط والمشاريع بملف وحد فقط:**

```
src/data.js
```

فيه فتحيه وعدلي:
- اسمك، الإيميل، رابط GitHub وLinkedIn
- وصف كل مشروع (TransGo ومركز التجميل)
- الـ Tech stack والمهارات

ما في داعي تلمسي أي ملف تاني (الكومبوننتات) إلا إذا بدك تغيري التصميم نفسه.

## 3) كيف أستبدل الصور الوهمية (Placeholders) بسكرين شوت حقيقي؟

هلق كل الصور هي "بلوبرنت" (رسمة تخطيطية بسيطة) بدل السكرين شوت الحقيقي، مكتوب تحت كل وحدة
`screenshot — اسم الصورة` — هيك تعرفي بالظبط وين لازم تحطي كل صورة.

لما يجهز عندك سكرين شوت حقيقي:

1. حطي ملف الصورة (jpg/png) داخل مجلد `public/` — مثلاً `public/transgo-dashboard.png`
2. روحي على الكومبوننت يلي فيه الصورة (مثلاً `src/components/Hero.jsx` أو
   `src/components/CaseStudy.jsx`) ولاقي السطر:
   ```jsx
   <DeviceMockup label="TransGo dashboard" pattern="dashboard" tall />
   ```
3. استبدليه بـ:
   ```jsx
   <img src="/transgo-dashboard.png" alt="TransGo dashboard" className="mockup" />
   ```

كرري هيك لكل صورة (بالـ `Work.jsx` وبالـ `CaseStudy.jsx` جوا خانة `features`).

## 4) ملف الـ CV

حطيتلك ملف الـCV (`Nawal_Saleh_CV.docx`) جوا مجلد `public/` مسبقًا، وزر "Download CV" عم يسحبه
منها مباشرة. لما تعملي نسخة جديدة عن الـCV، بس استبدلي هاد الملف بنفس الاسم.

## 5) رفعه عGitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <رابط الريبو تبعك>
git branch -M main
git push -u origin main
```

## 6) نشره (Deploy) مجانًا

أسهل طريقة: [Netlify](https://app.netlify.com) أو [Vercel](https://vercel.com)

- سجلي حساب واربطيه بـ GitHub
- اختاري الريبو
- Build command: `npm run build`
- Publish directory: `dist`

بعد النشر رح ياخدك رابط جاهز، ضيفيه بملف `src/data.js` بخانة `liveDemo` إذا بدك تظهريه
بالبروتوفايل.
