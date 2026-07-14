# Dr. Shivanka Rajapakshe — Personal Medical Website

A modern, responsive personal website for **Dr. Shivanka Rajapakshe**, a medical doctor based in Kandy, Sri Lanka.

Built with React, Vite, TypeScript, Tailwind CSS, and Lucide React icons. Designed as a premium, trustworthy medical portfolio — not a hospital admin system.

**Live site (after deployment):** [https://kasun-dave.github.io/shivanka/](https://kasun-dave.github.io/shivanka/)

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173/shivanka/](http://localhost:5173/shivanka/) in your browser.

> **Note:** The dev server uses the `/shivanka/` base path (configured for GitHub Pages). Always include `/shivanka/` in the URL during local development.

### Build for production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
src/
  components/     # Reusable UI sections
  data/doctor.ts  # ⭐ Single editable data file — edit all content here
  pages/          # Home and 404 pages
  types/          # TypeScript interfaces
  hooks/          # Custom React hooks
  utils/          # WhatsApp message helpers

public/
  images/
    profile/      # Doctor portrait photos
    gallery/      # Gallery images
    certificates/ # Certificate images (optional)
  robots.txt
  sitemap.xml
  favicon.svg
```

---

## Editing Doctor Information

All professional content lives in **`src/data/doctor.ts`**. Open this file and replace every `[PLACEHOLDER]` value before publishing.

### Fields to update

| Field | Description |
|-------|-------------|
| `specialty` | Medical specialty (e.g. General Practitioner) |
| `biography` | Professional biography |
| `philosophy` | Medical philosophy |
| `registrationNumber` | SLMC registration number |
| `university` | Medical university |
| `hospital` | Primary hospital |
| `clinic` | Clinic name |
| `phone` | Contact phone number |
| `whatsapp` | WhatsApp number (digits only, e.g. `94771234567`) |
| `email` | Professional email |
| `consultationHours` | Opening hours |
| `clinicAddress` | Full clinic address |
| `googleMapsUrl` | Google Maps link |
| `canonicalUrl` | Live website URL |
| `social` | Facebook, Instagram, LinkedIn, Twitter URLs |

Also update arrays for `services`, `qualifications`, `certifications`, `experience`, `affiliations`, and `galleryItems`.

---

## Replacing Images

Drop new images into `public/images/` — **no component code changes needed**.

| File | Usage |
|------|-------|
| `public/images/profile/doctor-main.jpg` | Hero section portrait |
| `public/images/profile/doctor-about.jpg` | About section photo |
| `public/images/gallery/gallery-1.jpg` | Gallery image 1 |
| `public/images/gallery/gallery-2.jpg` | Gallery image 2 |
| `public/images/gallery/gallery-3.jpg` | Gallery image 3 |
| `public/images/certificates/` | Certificate images (optional) |

**Tips:**
- Use JPG or PNG format
- Recommended hero size: 800×1000px or larger
- Gallery images: 1200×900px or similar 4:3 ratio
- If an image is missing, a graceful placeholder is shown automatically

To add more gallery items, add entries to the `galleryItems` array in `src/data/doctor.ts` and place the image file in `public/images/gallery/`.

---

## Configuring WhatsApp

1. Open `src/data/doctor.ts`
2. Set `doctor.whatsapp` to your number in international format **without** `+` or spaces:

```typescript
whatsapp: '94771234567',  // Sri Lanka example
```

3. The appointment form will open WhatsApp with a pre-filled message on submit
4. The floating WhatsApp button appears automatically when a number is configured

**Demo mode:** If `whatsapp` is empty, the form still validates and shows a preview message instead of failing.

---

## Disabling Testimonials

The testimonials section uses **sample placeholder content** — not verified patient reviews.

To hide the entire section:

```typescript
// src/data/doctor.ts
export const siteConfig: SiteConfig = {
  showTestimonials: false,  // ← set to false
  // ...
};
```

To use real testimonials, replace the `testimonials` array entries and set `isSample: false`.

---

## Deploying to GitHub Pages

This project is pre-configured for the repository **[kasun-Dave/shivanka](https://github.com/kasun-Dave/shivanka)**.

### One-time GitHub setup

1. Push this code to the `main` branch on GitHub
2. Go to **[Repository → Settings → Pages](https://github.com/kasun-Dave/shivanka/settings/pages)**
3. Under **Build and deployment**, set:
   - **Source:** `Deploy from a branch`
   - **Branch:** `gh-pages` → `/ (root)` → **Save**
4. Go to **[Actions](https://github.com/kasun-Dave/shivanka/actions)** and re-run the latest workflow if needed

The workflow builds the site and pushes the `dist` folder to the `gh-pages` branch automatically on every push to `main`.

### Manual deployment trigger

Go to **Actions → Deploy to GitHub Pages → Run workflow**.

### Site URL

After deployment, the site will be available at:

**https://kasun-dave.github.io/shivanka/**

Update `doctor.canonicalUrl` in `src/data/doctor.ts` and the canonical/OG meta tags in `index.html` if your URL differs.

### Troubleshooting 404 on GitHub Pages

If you see **"There isn't a GitHub Pages site here"**:

1. Confirm code is pushed to the `main` branch
2. Open **Settings → Pages** and set source to **`gh-pages` branch** (not "GitHub Actions")
3. Check **Actions** tab — the deploy workflow must show a green checkmark
4. Wait 1–2 minutes after a successful deploy, then refresh the site

---

## Placeholder Content Checklist

Replace all of the following before going live:

- [ ] Medical specialty
- [ ] Biography and philosophy text
- [ ] SLMC registration number
- [ ] University and qualifications
- [ ] Hospital and clinic details
- [ ] Phone, WhatsApp, and email
- [ ] Consultation hours and clinic address
- [ ] Google Maps URL
- [ ] Services (replace placeholder cards)
- [ ] Experience timeline
- [ ] Certifications and affiliations
- [ ] Gallery photos and captions
- [ ] Social media links
- [ ] Testimonials (or disable the section)
- [ ] Canonical URL in `index.html` and `doctor.ts`
- [ ] Profile photos (`doctor-main.jpg`, `doctor-about.jpg`)

---

## Features

- Sticky glass-effect navigation with active section indicator
- Mobile hamburger menu
- Hero section with trust indicators
- About, Services, Qualifications, Why Choose, Gallery sections
- Appointment form with WhatsApp integration
- Sample testimonials (easily disabled)
- Contact section with Google Maps embed
- Image lightbox gallery with keyboard navigation
- Floating WhatsApp button
- Scroll-to-top button
- Custom 404 page
- SEO meta tags, Open Graph, Twitter cards, JSON-LD schema
- `robots.txt` and `sitemap.xml`
- Fully responsive mobile design
- Accessible forms and focus states
- Lazy-loaded images with graceful fallbacks

---

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- [React Router](https://reactrouter.com/)

---

## Medical Disclaimer

Information on this website is for general informational purposes and does not replace professional medical advice, diagnosis, or emergency care. For medical emergencies, contact emergency services immediately.

---

## License

Private project for Dr. Shivanka Rajapakshe. All rights reserved.
