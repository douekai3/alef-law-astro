# Aleph Law – Astro + Decap CMS

- פיתוח: Astro (סטטי, מהיר, מאובטח)
- CMS: Decap (Netlify) – `/admin`
- אירוח: Cloudflare Pages (חינם)
- טפסים: Formspree (חינמי לשלב ראשון)
- אנליטיקה: Cloudflare Web Analytics

## הרצה מקומית
```bash
npm i
npm run dev
```

## פריסה לענן
1. צרו רפו ב-GitHub והעלו את הקוד.
2. ב-Cloudflare Pages ↗️ בחרו "Connect to Git" ובחרו את הרפו.
3. Build command: `npm run build` • Output: `dist`
4. הגדירו דומיין.

## CMS
- עדכנו את `public/admin/config.yml` בשם הרפו שלכם.
- הוסיפו GitHub OAuth App/Netlify Identity לפי בחירה (אפשר להתחיל עם Git Gateway ב-Netlify, או להשתמש ב-GitHub backend).

## התאמות מהירות
- צבעים/מותג: בקובץ `tailwind.config.mjs`.
- טופס: החליפו את `your-id` בקישור ה-Formspree שלכם.
