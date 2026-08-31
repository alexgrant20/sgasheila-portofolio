import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";

const PORTRAIT_FILE = "portrait.png";

/**
 * Renders the hero portrait when `public/portrait.png` is present, and a
 * neutral silhouette until then — so the layout is complete before the real
 * cutout photo is dropped in. Drop the file in and it swaps automatically.
 */
export function Portrait({ alt }: { alt: string }) {
  const hasPhoto = existsSync(
    path.join(process.cwd(), "public", PORTRAIT_FILE),
  );

  if (hasPhoto) {
    return (
      <Image
        src={`/${PORTRAIT_FILE}`}
        alt={alt}
        fill
        priority
        sizes="(max-width: 1024px) 90vw, 45vw"
        className="object-contain object-bottom drop-shadow-xl"
      />
    );
  }

  return (
    <svg
      viewBox="0 0 300 380"
      // Bottom-anchored, like the cutout photo it stands in for.
      preserveAspectRatio="xMidYMax meet"
      className="absolute inset-0 h-full w-full"
      role="img"
      aria-label={`${alt} (placeholder)`}
    >
      {/* Neutral bust, outlined so it reads on the cream ground and on the
          brush stroke alike. */}
      <g
        fill="var(--color-cream)"
        stroke="var(--color-ink)"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.95"
      >
        {/* Shoulders rising to a neck, so the bust reads as one figure */}
        <path d="M40 380v-46c0-40 30-66 72-77l38-9 38 9c42 11 72 37 72 77v46z" />
        <path d="M150 96c28 0 50 23 50 50v18c0 28-22 50-50 50s-50-22-50-50v-18c0-27 22-50 50-50z" />
      </g>
      <g opacity="0.5">
        <path
          d="M100 144c0-31 22-54 50-54s50 23 50 54c7-42-16-72-50-72s-57 30-50 72z"
          fill="var(--color-ink)"
        />
        <circle cx="131" cy="156" r="4" fill="var(--color-ink)" />
        <circle cx="169" cy="156" r="4" fill="var(--color-ink)" />
        <path
          d="M137 180c8 6 18 6 26 0"
          stroke="var(--color-ink)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
      </g>
      <text
        x="150"
        y="342"
        textAnchor="middle"
        fontSize="12"
        letterSpacing="0.5"
        fill="var(--color-ink)"
        opacity="0.4"
      >
        add public/{PORTRAIT_FILE}
      </text>
    </svg>
  );
}
