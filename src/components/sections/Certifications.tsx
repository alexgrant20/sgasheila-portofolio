"use client";

import { useState } from "react";
import { certifications, type Certification } from "@/content/site";
import { Reveal } from "@/components/ui/Reveal";
import { Modal } from "@/components/ui/Modal";
import { CertBadge } from "@/components/ui/CertBadge";
import { IconArrow } from "@/components/ui/art";

export function Certifications() {
  const [selected, setSelected] = useState<Certification | null>(null);

  return (
    <>
      <Reveal>
        <h3 className="mt-16 text-sm font-semibold uppercase tracking-[0.16em] text-teal">
          Certifications
        </h3>
      </Reveal>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <li key={cert.slug} className="h-full">
            <Reveal delay={Math.min(i, 5) * 0.04} className="h-full">
              <button
                type="button"
                onClick={() => setSelected(cert)}
                className="group flex h-full w-full items-center gap-5 rounded-2xl border border-line bg-paper p-5 text-left transition-transform duration-300 hover:-translate-y-1"
              >
                <CertBadge
                  cert={cert}
                  className="h-16 w-16 shrink-0 transition-transform duration-300 group-hover:scale-105"
                />
                <span className="min-w-0">
                  <span className="block font-medium leading-snug text-ink">
                    {cert.name}
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    {cert.issuer} · {cert.year}
                  </span>
                </span>
              </button>
            </Reveal>
          </li>
        ))}
      </ul>

      <Modal
        open={selected !== null}
        onClose={() => setSelected(null)}
        label={selected ? `${selected.name} certificate` : "Certificate"}
      >
        {selected && (
          <div className="p-8 text-center sm:p-12">
            <CertBadge cert={selected} className="mx-auto h-36 w-36" />

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-coral">
              {selected.issuer} · {selected.year}
            </p>
            <h3 className="mx-auto mt-3 max-w-md font-display text-3xl font-semibold leading-tight text-ink">
              {selected.name}
            </h3>
            <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted">
              {selected.summary}
            </p>

            {selected.url && (
              <a
                href={selected.url}
                target="_blank"
                rel="noreferrer noopener"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
              >
                View credential
                <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            )}
          </div>
        )}
      </Modal>
    </>
  );
}
