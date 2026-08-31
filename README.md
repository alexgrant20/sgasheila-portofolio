# Sheila Gracia Angelina — Portfolio

A single-page portfolio for a Senior System Analyst, built with Next.js 16 (App Router),
TypeScript, and Tailwind CSS v4. The contact form sends through EmailJS from the server and is
rate-limited by client IP.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the EmailJS values
npm run dev                  # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
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

The browser posts `{ name, email, message }` to `POST /api/contact`. The route
(`src/app/api/contact/route.ts`) then:

1. validates with zod (name 2–80, valid email ≤120, message 10–2000);
2. silently discards anything that filled the hidden `company` honeypot;
3. checks the caller's IP against the rate limit;
4. sends through the EmailJS REST API server-side;
5. counts the send against the limit **only after it succeeded**, so a provider outage never
   burns a visitor's allowance.

The EmailJS browser SDK is deliberately not used: the limit has to be enforced where the real
client IP is visible, and the private key must never reach the browser.

### EmailJS setup

1. Create an Email Service and an Email Template at <https://dashboard.emailjs.com>. The template
   must use the variables `{{from_name}}`, `{{from_email}}`, and `{{message}}`.
2. Copy the four values into `.env.local` (see `.env.example` for exactly where each one lives).
3. **Account → Security → enable "Allow EmailJS API for non-browser applications".** EmailJS
   blocks server-side calls by default; without this every send returns 403.

On Vercel, add the same four variables under Project Settings → Environment Variables. They have
no `NEXT_PUBLIC_` prefix, so they stay server-only.

### Rate limiting

`src/lib/rate-limit.ts` keeps a sliding window of **3 sends per IP per 10 minutes**, backed by
process memory.

> **Caveat.** On serverless hosting each instance holds its own counter and the map is cleared on
> cold start, so the real guarantee is "3 per 10 minutes per running instance". That stops casual
> abuse of the form; it is not a hard security boundary. For strict enforcement, swap the `Map`
> for a shared store such as `@upstash/ratelimit` — `check()` and `record()` are the only
> functions the route uses, so no other file changes.

`EMAILJS_ENDPOINT` overrides the API URL. Leave it unset outside local testing; it exists so the
route can be exercised end-to-end against a stub without sending real mail.

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

Push to GitHub and import the repository at [vercel.com/new](https://vercel.com/new). Add the four
`EMAILJS_*` variables, then deploy — no other configuration is needed.
