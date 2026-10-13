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
      width="650"
      height="650"
      viewBox="0 0 650 650"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <!-- Main circular halo --> */}
      <circle cx="325" cy="325" r="285" fill="#EEF6F3" />

      {/* <!-- Main organic teal shape --> */}
      <path
        d="
      M430 90
      C500 95 548 150 535 215
      C527 255 555 285 568 325
      C585 375 566 435 525 465
      C495 487 479 525 447 548
      C397 585 330 578 295 540
      C263 505 260 465 218 435
      C170 401 143 348 158 292
      C172 240 219 222 253 185
      C290 145 334 81 430 90
      Z
    "
        fill="#238579"
      />

      {/* <!-- Secondary organic shape --> */}
      <path
        d="
      M180 337
      C167 285 195 244 238 235
      C276 226 296 192 327 165
      C354 141 394 136 417 160
      C441 185 429 221 412 247
      C390 280 399 315 423 341
      C454 375 474 417 460 454
      C445 495 398 515 357 503
      C319 492 299 460 266 445
      C224 426 191 392 180 337
      Z
    "
        fill="#66ABA1"
        opacity="0.75"
      />

      {/* <!-- Soft left blob --> */}
      <path
        d="
      M115 370
      C118 315 145 278 182 270
      C205 265 222 282 225 306
      C229 336 210 354 197 379
      C180 412 163 441 140 433
      C119 425 113 402 115 370
      Z
    "
        fill="#9BC8C1"
        opacity="0.8"
      />

      {/* <!-- Soft lower-right blob --> */}
      <path
        d="
      M416 405
      C438 375 470 368 496 384
      C521 399 529 430 518 455
      C507 481 477 493 451 483
      C421 471 397 433 416 405
      Z
    "
        fill="#B7D8D3"
      />

      {/* <!-- White organic accent --> */}
      <path
        d="M438 164
       C452 214 455 264 460 315
       C464 366 478 412 496 444"
        stroke="#FFFDF8"
        stroke-width="5"
        stroke-linecap="round"
      />

      {/* <!-- Left white accent --> */}
      <path
        d="M209 293
       C220 331 220 362 208 395"
        stroke="#FFFDF8"
        stroke-width="5"
        stroke-linecap="round"
      />

      {/* <!-- Top curved line --> */}
      <path
        d="
      M160 154
      C225 92 300 61 378 65
    "
        stroke="#4A9B91"
        stroke-width="3"
        stroke-linecap="round"
      />

      {/* <!-- Outer decorative arc --> */}
      <path
        d="
      M105 448
      C65 345 77 240 140 160
    "
        stroke="#78B6AE"
        stroke-width="4"
        stroke-linecap="round"
        opacity="0.75"
      />

      {/* <!-- Dots --> */}
      <circle cx="112" cy="282" r="7" fill="#72AEA7" />
      <circle cx="145" cy="225" r="4" fill="#A5CCC6" />
      <circle cx="177" cy="167" r="6" fill="#8DBFB8" />

      <circle cx="535" cy="260" r="5" fill="#9AC6C0" />
      <circle cx="560" cy="315" r="3" fill="#B5D5D0" />
      <circle cx="525" cy="500" r="7" fill="#65AAA1" />

      <circle cx="155" cy="475" r="5" fill="#A4CCC6" />
      <circle cx="232" cy="530" r="4" fill="#84B9B1" />

      {/* <!-- Small floating circle --> */}
      <circle cx="505" cy="130" r="22" fill="#D3E5E1" />

      {/* <!-- Small teal circle --> */}
      <circle cx="125" cy="405" r="13" fill="#4D9B92" />
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
