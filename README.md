# Sheila Gracia Angelina — Portfolio

A single-page portfolio for a Senior System Analyst, built with Next.js 16 (App Router),
TypeScript, and Tailwind CSS v4, exported as a static site. The contact form sends through
Web3Forms directly from the browser, protected by Google reCAPTCHA v2.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the Web3Forms / reCAPTCHA values
npm run dev                  # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Static export to `out/` |
| `npm start` | Serve the exported `out/` directory locally |
| `npm run lint` | ESLint |
| `npm test` | Unit tests (`node --test`) |

## Editing the content

Every word on the page lives in **`src/content/site.ts`** — profile, services, stats, experience,
projects, skills, tools, education, certifications, awards. Section components read from it, so
copy changes never touch JSX. Removing an entry removes it from the page.

Two numbers derive themselves so they cannot drift out of date:

- `yearsOfExperience()` counts from `profile.careerStart`.
- `projectCountByTag()` gives each service card its "N projects" figure from the `projects` list.

## Images

Nothing here blocks the site from rendering — every image has a generated fallback, and dropping
a real file in replaces it with no code change.

| What | Where to put it | Until then |
| --- | --- | --- |
| Hero portrait | `public/portrait.png` (transparent cutout, portrait aspect) | Neutral silhouette |
| Project screenshots | `public/projects/<slug>.png` — see that folder's README | Generated cover art |

The résumé behind the hero's "Download CV" button is
`public/Resume_Sheila_Gracia_Angelina.pdf`.

## Projects and certifications

Both grids open a popup built on the native `<dialog>` element
(`src/components/ui/Modal.tsx`), which brings focus trapping, Escape-to-close, and a real
backdrop without hand-rolling any of it.

- **Projects** — a card per project, opening to the screenshot, description, Sheila's scope, and
  the role she held at the time. Each project's `slug` doubles as its image filename.
- **Certifications** — each is a badge whose emblem and colour come from its `topic`. Setting a
  certification's optional `url` adds a "View credential" button inside its popup; leave it out
  and the popup simply shows the badge and summary.

## Contact form

`Contact.tsx` calls `sendContactEmail()` (`src/lib/web3forms.ts`), which POSTs to
`https://api.web3forms.com/submit`:

1. the hidden `company` honeypot is checked client-side — a filled value is silently accepted
   and discarded, never sent;
2. when `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` is set, the reCAPTCHA v2 checkbox
   (`src/components/ui/Recaptcha.tsx`) must be ticked, and its token is sent as
   `g-recaptcha-response`;
3. Web3Forms verifies that token server-side with the secret key stored in its dashboard, then
   emails the message.

There is no server of our own (`output: "export"`), so the only server-enforced defense is
Web3Forms' reCAPTCHA check — the access key and site key are public by design.

### Web3Forms + reCAPTCHA setup

1. Create a form at <https://web3forms.com> with the recipient email and copy the **access key**.
2. Create a reCAPTCHA **v2 "I'm not a robot"** key pair at
   <https://www.google.com/recaptcha/admin>; add your production domain and `localhost`.
3. In the Web3Forms dashboard, open the form's settings and paste the reCAPTCHA **secret key**
   (reCAPTCHA support may require a paid Web3Forms plan — check their current pricing).
4. Put the access key and the reCAPTCHA **site key** in `.env.local`
   (`NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`, `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`; see `.env.example`).
   Leaving the site key empty hides the widget.

For CI/CD, add `WEB3FORMS_ACCESS_KEY` and `RECAPTCHA_SITE_KEY` as GitHub Actions secrets
(used by `.github/workflows/deploy.yml`). On Vercel, add the two `NEXT_PUBLIC_*` variables under
Project Settings → Environment Variables.

## Layout notes

- The page is a cream panel floating on a mustard ground (`src/app/page.tsx`). It deliberately
  has no `overflow-hidden` — that would break the sticky nav — so the footer repeats the bottom
  rounding.
- The hero section is `overflow-x-clip` because the brush stroke overhangs its column on purpose
  and must not widen the page on phones.
- The hero follows the reference layout: headline, email and years down the left, the figure on
  its brush stroke in the centre (cropped by the section edge), the pitch and credential stamp
  down the right. Its headline and stamp are set in Poppins (`font-hero`) — the rest of the site
  keeps Fraunces for display type.
- The brush stroke carves its bristle gaps in `--color-cream`, so it assumes the hero sits on the
  cream panel.
- Every entrance animation is wrapped in `Reveal` / `CountUp`, both of which fall back to static
  output under `prefers-reduced-motion`.

## Deploying

Push to GitHub and import the repository at [vercel.com/new](https://vercel.com/new). Add the
two `NEXT_PUBLIC_*` variables above, then deploy. The build is a static export (`out/`), so
it also works on any static host — Netlify, GitHub Pages, S3, etc.
