@AGENTS.md

# Sheila Portfolio

Single-page portfolio site for a Senior System Analyst. Next.js 16 (App Router, Turbopack),
React 19, TypeScript, Tailwind CSS v4. Deployed on Vercel.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server (http://localhost:3000) |
| `npm run build` | Production build |
| `npm run lint` | ESLint (flat config, `eslint-config-next`) |
| `npm test` | All unit tests via `node --test "src/**/*.test.ts"` |

Tests are plain `node:test` files run through Node native TypeScript type stripping — no Jest or
Vitest. Type stripping requires the `.ts` extension in the import specifier, which is why
`tsconfig.json` sets `allowImportingTsExtensions`. Do not remove it. There are currently no test
files; the harness is kept in place for whenever one is added.

Requires a `.env.local` copied from `.env.example` before the contact form works; the rest of the
site renders without it.

## Architecture

**All copy lives in `src/content/site.ts`.** Section components in `src/components/sections/`
read from it and are composed in `src/app/page.tsx`. Copy edits belong in the content module, not
in JSX; deleting an entry there removes it from the page. Two figures derive themselves and must
not be hardcoded: `yearsOfExperience()` counts from `profile.careerStart`, and
`projectCountByTag()` supplies each service card its project count.

Content facts come from a real CV. Do not invent projects, clients, dates, or numbers. Note that
projects carry a `during` field naming the role held at the time — the CV groups projects by
role, not by date, so there are no project date ranges to state.

**Contact flow.** The site is a static export (`output: "export"` in `next.config.ts`, no
server), so `Contact.tsx` calls `sendContactEmail()` (`src/lib/emailjs.ts`) directly, which wraps
the EmailJS **browser SDK**. The honeypot check happens client-side in `Contact.tsx` before
sending. There is no server-enforced rate limit or private key — both required a server this
site no longer has. `EMAILJS_*` variables must carry the `NEXT_PUBLIC_` prefix to reach the
browser.

**Graceful image fallbacks.** `Portrait.tsx` and `project-images.ts` use server-side `existsSync`
/ `readdirSync` so the page never renders a broken image: the portrait falls back to a silhouette
and projects to generated `ProjectCover` art. Dropping `public/portrait.png` or
`public/projects/<slug>.png` in swaps them with no code change.

**Modals** (project cards, certification badges) are built on the native `<dialog>` element via
`src/components/ui/Modal.tsx` — focus trap, Escape, backdrop, and page inertness come for free.
Do not hand-roll a modal.

## Visual conventions

Palette and fonts are Tailwind v4 `@theme` tokens in `src/app/globals.css` (there is no
`tailwind.config`). `--font-display` is Fraunces site-wide; the hero alone uses `--font-hero`
(Poppins).

Layout constraints that are easy to break:

- The page panel in `page.tsx` must not get `overflow-hidden` — it breaks the sticky nav. The
  footer repeats the bottom rounding instead.
- The hero is `overflow-hidden` on purpose: the brush stroke overhangs its column and would
  widen the page on phones. Verify no horizontal scroll at 390px after hero changes.
- `BrushStroke` in `src/components/ui/art.tsx` carves its bristle gaps in `--color-cream`, so it
  assumes the hero sits on the cream panel. Widening it means redrawing the mass inside the
  viewBox — scaling the element does nothing, since `preserveAspectRatio` fits to height.
- Entrance animation goes through `Reveal` / `CountUp`, both of which degrade to static output
  under `prefers-reduced-motion`.

`<html>` carries `data-scroll-behavior="smooth"` because Next 16 no longer overrides
scroll-behavior itself.
