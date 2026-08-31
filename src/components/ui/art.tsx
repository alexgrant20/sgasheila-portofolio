import type { SVGProps } from "react";

/**
 * The teal paint behind the portrait. Not a shape but a handful of separate
 * brush marks — one loaded sweep down the middle, a couple of lighter passes
 * beside it, dry bristle streaks carved back out in the page colour, tapered
 * flicks where the brush lifted, and a little spatter. Purely decorative.
 */
export function BrushStroke({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 560"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <g transform="rotate(-6 260 300)">
        {/*
          Separate marks at different weights and angles, with cream showing
          between them. Overlapping wide passes only merge back into a single
          rounded mass, which stops reading as paint.
        */}
        <g stroke="var(--color-teal)" strokeLinecap="round" fill="none">
          {/* The loaded sweep, drawn in three passes along one spine so the
              mark narrows toward the top the way a brush does on landing
              instead of ending in a slab. */}
          <path d="M290 200C272 300 288 360 264 440C246 506 270 548 258 604" strokeWidth="198" />
          <path d="M300 104C280 210 300 300 270 400C256 462 274 500 264 548" strokeWidth="142" />
          <path d="M306 52C294 118 306 168 288 232C278 268 292 296 284 330" strokeWidth="76" />
          <path d="M404 156C424 262 390 342 408 442C420 510 400 554 408 604" strokeWidth="58" opacity="0.85" />
          <path d="M152 216C132 302 158 372 138 462" strokeWidth="32" opacity="0.7" />
          <path d="M108 336C98 384 110 414 102 456" strokeWidth="13" opacity="0.5" />
          <path d="M446 268C458 320 444 356 456 402" strokeWidth="11" opacity="0.42" />
        </g>

        {/*
          Tapered flicks: filled wedges, because a lifting brush thins to a
          point in a way a constant-width stroke never does.
        */}
        <g fill="var(--color-teal)">
          <path d="M206 128C186 82 170 48 146 12C176 50 200 92 222 132Z" opacity="0.8" />
          <path d="M340 90C350 60 358 38 370 12C364 46 358 80 356 108Z" opacity="0.65" />
          <path d="M368 462C400 476 428 494 454 518C424 502 396 490 364 480Z" opacity="0.4" />
          <path d="M176 476C148 490 124 508 100 532C126 512 152 498 182 490Z" opacity="0.35" />
        </g>

        {/*
          The dry brush. Painting the negative space in the page colour is
          what turns a loaded stroke into bristle marks — it assumes the hero
          sits on the cream panel.
        */}
        <g stroke="var(--color-cream)" strokeLinecap="round" fill="none">
          <path d="M240 60C212 190 244 306 216 434C200 514 226 552 216 600" strokeWidth="7" />
          <path d="M336 96C356 200 316 300 340 404C356 480 332 534 342 596" strokeWidth="4" />
          <path d="M282 150C262 250 292 336 272 436" strokeWidth="3" />
          <path d="M198 258C186 340 204 400 190 480" strokeWidth="5" />
          <path d="M354 254C368 330 348 388 360 466" strokeWidth="2.5" />
          <path d="M254 402C240 462 260 508 246 566" strokeWidth="3" />
          <path d="M310 466C318 508 306 540 314 590" strokeWidth="2.5" />
          <path d="M406 208C416 286 398 346 410 418" strokeWidth="3" />
        </g>

        {/*
          Bites out of the silhouette and dabs just outside it. A smooth
          outline is the tell that a shape was drawn rather than painted, so
          the edge gets broken in both directions.
        */}
        <g stroke="var(--color-cream)" strokeLinecap="round" fill="none">
          <path d="M184 318C178 344 184 362 180 388" strokeWidth="15" />
          <path d="M374 258C380 282 374 300 378 324" strokeWidth="12" />
          <path d="M190 462C186 482 192 498 188 514" strokeWidth="10" />
          <path d="M356 432C362 454 354 472 360 494" strokeWidth="9" />
          <path d="M272 104C266 122 272 136 268 152" strokeWidth="11" />
        </g>
        <g fill="var(--color-teal)">
          <ellipse cx="174" cy="366" rx="8" ry="17" opacity="0.6" />
          <ellipse cx="386" cy="288" rx="6" ry="14" opacity="0.5" />
          <ellipse cx="182" cy="530" rx="7" ry="12" opacity="0.45" />
          <ellipse cx="316" cy="74" rx="5" ry="11" opacity="0.4" />
        </g>

        {/* Where the paint pooled and dragged */}
        <g stroke="var(--color-teal-deep)" strokeLinecap="round" opacity="0.13" fill="none">
          <path d="M228 140C204 250 246 340 222 448" strokeWidth="7" />
          <path d="M330 180C352 270 312 344 336 448" strokeWidth="5" />
          <path d="M272 420C256 476 282 516 266 566" strokeWidth="4" />
        </g>

        {/* Spatter thrown off the bristles */}
        <g fill="var(--color-teal)">
          <circle cx="86" cy="272" r="7" opacity="0.45" />
          <circle cx="62" cy="318" r="4" opacity="0.34" />
          <circle cx="112" cy="184" r="3.5" opacity="0.28" />
          <circle cx="462" cy="344" r="6" opacity="0.4" />
          <circle cx="486" cy="296" r="3.5" opacity="0.3" />
          <circle cx="440" cy="120" r="4.5" opacity="0.26" />
          <circle cx="330" cy="34" r="4" opacity="0.32" />
        </g>
      </g>
    </svg>
  );
}

/** The mark inside the credential stamp: a magnifying glass over a data bar. */
function StampMark(props: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" {...props}>
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.6"
      >
        <circle cx="21" cy="21" r="12.5" />
        <path d="M30.2 30.2L41 41" />
        {/* A small reading inside the lens — analysis, not just search */}
        <path d="M15.5 24.5l4-5 3.5 3.5 5-6.5" strokeWidth="2.2" />
      </g>
    </svg>
  );
}

/**
 * Credential stamp: a ringed magnifier with the role set in caps beneath it,
 * matching the badge in the reference layout.
 */
export function CredentialStamp({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <span className="flex h-20 w-20 items-center justify-center rounded-full border border-navy/60 bg-paper sm:h-[5.5rem] sm:w-[5.5rem]">
        <StampMark className="h-9 w-9 text-navy sm:h-10 sm:w-10" />
      </span>
      <p className="mt-4 max-w-[10rem] font-hero text-[0.8rem] font-bold uppercase leading-[1.45] tracking-[0.01em] text-navy sm:text-sm">
        {label}
      </p>
    </div>
  );
}

type IconProps = SVGProps<SVGSVGElement>;

const iconBase = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Clipboard with a checked line — requirement engineering. */
export function IconRequirements(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...iconBase} {...props}>
      <path d="M9 4h6v3H9z" />
      <path d="M15 5.5h2.5A1.5 1.5 0 0 1 19 7v12a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19V7a1.5 1.5 0 0 1 1.5-1.5H9" />
      <path d="M8.5 12.5l1.6 1.6 3.4-3.6" />
      <path d="M8.5 17h7" />
    </svg>
  );
}

/** Stacked database discs. */
export function IconDatabase(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...iconBase} {...props}>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6" />
      <path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
    </svg>
  );
}

/** Bug-free shield — QA and UAT. */
export function IconQA(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...iconBase} {...props}>
      <path d="M12 3l7 3v5.5c0 4.2-2.9 7.9-7 9.5-4.1-1.6-7-5.3-7-9.5V6z" />
      <path d="M8.8 12.1l2.2 2.2 4.2-4.5" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...iconBase} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5l8.5 6 8.5-6" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...iconBase} {...props}>
      <path d="M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...iconBase} {...props}>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function IconLinkedIn(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...iconBase} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M8 10.5V16" />
      <path d="M8 7.7v.1" />
      <path d="M11.8 16v-3.2a2.2 2.2 0 0 1 4.4 0V16" />
      <path d="M11.8 10.5V16" />
    </svg>
  );
}

export function IconDownload(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...iconBase} {...props}>
      <path d="M12 4v10" />
      <path d="M8.5 10.5L12 14l3.5-3.5" />
      <path d="M5 17.5v1A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5v-1" />
    </svg>
  );
}

export function IconArrow(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...iconBase} {...props}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}
