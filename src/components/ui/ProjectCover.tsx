import type { Project } from "@/content/site";

const palettes = [
  { bg: "var(--color-teal)", ink: "var(--color-cream)", accent: "var(--color-yellow)" },
  { bg: "var(--color-yellow)", ink: "var(--color-ink)", accent: "var(--color-teal)" },
  { bg: "var(--color-coral)", ink: "var(--color-cream)", accent: "var(--color-yellow)" },
  { bg: "var(--color-teal-deep)", ink: "var(--color-cream)", accent: "var(--color-coral)" },
];

/** Initials, so long names stay legible at card size. */
function initials(project: Project): string {
  const words = project.name.split(/\s+/);
  if (words.length > 1) return words.map((w) => w[0]).join("").slice(0, 3);
  return project.name.slice(0, 5);
}

/**
 * Stands in for a screenshot until one exists at public/projects/<slug>.png.
 * Deterministic per project, so a given card always looks the same.
 */
export function ProjectCover({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const palette = palettes[index % palettes.length];

  return (
    <svg
      viewBox="0 0 320 180"
      className="h-full w-full"
      role="img"
      aria-label={`${project.name} — placeholder cover`}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="320" height="180" fill={palette.bg} />
      {/* Loose window-chrome motif, hinting at a screen without faking one */}
      <g opacity="0.25">
        <circle cx="228" cy="-6" r="86" fill={palette.accent} />
        <circle cx="34" cy="180" r="58" fill={palette.accent} />
      </g>
      <g opacity="0.5" fill={palette.ink}>
        <circle cx="20" cy="18" r="4" />
        <circle cx="34" cy="18" r="4" />
        <circle cx="48" cy="18" r="4" />
      </g>
      {/* Just the mark — the card beneath already names the client. */}
      <text
        x="20"
        y="124"
        fill={palette.ink}
        fontSize="54"
        fontWeight="600"
        fontFamily="Georgia, serif"
      >
        {initials(project)}
      </text>
    </svg>
  );
}
