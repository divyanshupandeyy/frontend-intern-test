# EZ Labs – Front-End Intern Test (React + Vite + Tailwind)

A single-page responsive web application that recreates the Home page and integrates a contact form with the provided API.

## ✨ Highlights
- React + Vite + Tailwind
- Fully responsive (mobile → tablet → mini-desktop → desktop)
- Form validation (React Hook Form + Yup)
- API integration to `POST https://vernanbackend.ezlab.in/api/contact-us/`
- Success toast “Form Submitted” on HTTP 200
- Loading / error states, accessibility labels
- Framer Motion hero animation + clean UI

## ▶️ Run locally
```bash
npm install
npm run dev
```
Then open the local URL from the console.

## 🧪 Build
```bash
npm run build
npm run preview
```

## 📬 API
Endpoint: `POST https://vernanbackend.ezlab.in/api/contact-us/`  
Body:
```json
{
  "name": "Test user",
  "email": "testuser@gmail.com",
  "phone": "908765498",
  "message": "This is a message"
}
```

## ✅ Figma Tally Checklist (map this project to the design)
- [ ] **Typography**: Inter (400/500/600/700/800). Sizes: 16 body, 24/32/48/60 headings approximated.
- [ ] **Spacing scale**: 4px base; sections use 64–96px vertical padding.
- [ ] **Color**: Primary `#2563EB` (brand-600), hover `#1D4ED8`. Neutrals: gray-50..700.
- [ ] **Hero**: Big bold headline, supporting copy, two CTAs (primary + outline).
- [ ] **Buttons**: 12–16px corner radius, medium weight, subtle hover.
- [ ] **Cards**: White, rounded-2xl, border, shadow-sm for features.
- [ ] **Form**: 2-column on desktop, stacked on mobile; labels + helper/error text; success toast.
- [ ] **Nav**: Sticky, frosted background, anchor scroll to sections.
- [ ] **Breakpoints**: sm, md, lg tuned for mobile/tablet/mini-desktop/desktop.
- [ ] **Animation**: Hero fade/slide on load, subtle only.
- [ ] **Accessibility**: `aria-invalid`, visible labels, sufficient color contrast.
- [ ] **Performance**: Vite build, no heavy assets.

> Adjust Tailwind tokens to exactly match Figma if necessary (font sizes, colors).

## 📄 Postman
A Postman collection is included as `postman_collection.json` to test the endpoint quickly.
