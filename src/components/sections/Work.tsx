"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, type Project } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Modal } from "@/components/ui/Modal";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { IconArrow } from "@/components/ui/art";

type Props = {
  /** slug -> screenshot URL, for projects that have one. */
  images: Record<string, string>;
};

function CardMedia({
  project,
  index,
  image,
}: {
  project: Project;
  index: number;
  image?: string;
}) {
  if (image) {
    // `fill` because author-supplied screenshots have unknown dimensions; the
    // parent sets the 16:9 frame.
    return (
      <Image
        src={image}
        alt={`${project.name} screenshot`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
      />
    );
  }
  return <ProjectCover project={project} index={index} />;
}

export function Work({ images }: Props) {
  const [selected, setSelected] = useState<Project | null>(null);
  const selectedIndex = selected
    ? projects.findIndex((p) => p.slug === selected.slug)
    : -1;

  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="My latest works"
      intro="Government registries, university platforms, and non-profit systems. Open any project to see what it does and what my part in it was."
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <li key={project.slug}>
            <Reveal delay={Math.min(i, 5) * 0.05} className="h-full">
              <button
                type="button"
                onClick={() => setSelected(project)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-3xl border border-line bg-paper text-left transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-cream-deep">
                  <CardMedia
                    project={project}
                    index={i}
                    image={images[project.slug]}
                  />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-coral">
                    {project.client}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold leading-tight text-ink">
                    {project.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal">
                    View project
                    <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            </Reveal>
          </li>
        ))}
      </ul>

      <Modal
        open={selected !== null}
        onClose={() => setSelected(null)}
        label={selected ? `${selected.name} project details` : "Project details"}
      >
        {selected && (
          <article>
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-cream-deep">
              <CardMedia
                project={selected}
                index={selectedIndex}
                image={images[selected.slug]}
              />
            </div>

            <div className="p-7 sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-coral">
                {selected.client}
              </p>
              <h3 className="mt-2 font-display text-3xl font-semibold leading-tight text-ink">
                {selected.name}
              </h3>
              {selected.full && (
                <p className="mt-1 text-base italic text-muted">
                  {selected.full}
                </p>
              )}

              <p className="mt-6 text-base leading-relaxed text-ink/80">
                {selected.description}
              </p>

              <dl className="mt-7 grid gap-5 border-t border-line pt-7 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                    My role
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">
                    {selected.role}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-teal">
                    Worked on as
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted">
                    {selected.during}
                  </dd>
                </div>
              </dl>

              <ul className="mt-7 flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-teal-soft px-3 py-1 text-xs font-medium text-teal-deep"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        )}
      </Modal>
    </Section>
  );
}
