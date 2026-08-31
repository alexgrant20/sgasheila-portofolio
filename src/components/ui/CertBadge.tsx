import type { Certification } from "@/content/site";

const topics: Record<
  Certification["topic"],
  { label: string; ring: string; face: string; ink: string }
> = {
  java: {
    label: "Java",
    ring: "var(--color-coral)",
    face: "var(--color-coral-soft)",
    ink: "var(--color-coral)",
  },
  solid: {
    label: "SOLID",
    ring: "var(--color-teal)",
    face: "var(--color-teal-soft)",
    ink: "var(--color-teal-deep)",
  },
  c: {
    label: "C",
    ring: "var(--color-ink)",
    face: "var(--color-cream-deep)",
    ink: "var(--color-ink)",
  },
  python: {
    label: "Py",
    ring: "var(--color-yellow)",
    face: "var(--color-yellow-soft)",
    ink: "var(--color-ink)",
  },
  r: {
    label: "R",
    ring: "var(--color-teal-deep)",
    face: "var(--color-teal-soft)",
    ink: "var(--color-teal-deep)",
  },
};

/** Notched medallion carrying the topic mark and the year. */
export function CertBadge({
  cert,
  className = "",
}: {
  cert: Certification;
  className?: string;
}) {
  const topic = topics[cert.topic];

  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label={`${topic.label} badge, ${cert.year}`}
    >
      {/* Scalloped outer edge */}
      <g fill={topic.ring}>
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          return (
            <circle
              key={i}
              cx={60 + Math.cos(angle) * 48}
              cy={60 + Math.sin(angle) * 48}
              r="9"
            />
          );
        })}
        <circle cx="60" cy="60" r="50" />
      </g>
      <circle cx="60" cy="60" r="42" fill={topic.face} />
      <circle
        cx="60"
        cy="60"
        r="36"
        fill="none"
        stroke={topic.ink}
        strokeWidth="1.5"
        opacity="0.35"
      />
      <text
        x="60"
        y="60"
        textAnchor="middle"
        fontSize={topic.label.length > 3 ? 19 : 26}
        fontWeight="700"
        fontFamily="Georgia, serif"
        fill={topic.ink}
      >
        {topic.label}
      </text>
      <text
        x="60"
        y="82"
        textAnchor="middle"
        fontSize="12"
        letterSpacing="1.6"
        fill={topic.ink}
        opacity="0.75"
      >
        {cert.year}
      </text>
      {/* Ribbon tails */}
      <path
        d="M44 104l8-14 10 6 10-6 8 14-18-8z"
        fill={topic.ring}
        opacity="0.9"
      />
    </svg>
  );
}
