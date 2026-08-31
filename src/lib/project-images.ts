import { readdirSync } from "node:fs";
import path from "node:path";

const DIR = "projects";
const EXTENSIONS = [".png", ".jpg", ".jpeg", ".webp", ".avif"];

/**
 * Maps project slug -> public URL, for whatever screenshots exist in
 * `public/projects`. Read once on the server at render time; projects with no
 * file fall back to a generated cover, so the grid is never broken by a
 * missing image.
 */
export function projectImages(): Record<string, string> {
  let files: string[];
  try {
    files = readdirSync(path.join(process.cwd(), "public", DIR));
  } catch {
    return {}; // directory does not exist yet — every project uses its cover
  }

  const map: Record<string, string> = {};
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!EXTENSIONS.includes(ext)) continue;
    const slug = path.basename(file, ext);
    map[slug] ??= `/${DIR}/${file}`;
  }
  return map;
}
