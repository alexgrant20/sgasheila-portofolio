"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  /** Announced as the dialog's accessible name. */
  label: string;
  children: ReactNode;
};

/**
 * Built on the native <dialog> element, which gives us focus trapping, Escape
 * to close, inertness of the page behind, and a real backdrop without any of
 * that being hand-rolled.
 */
export function Modal({ open, onClose, label, children }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
      // Keep the page behind from scrolling under the dialog.
      document.body.style.overflow = "hidden";
    } else if (!open && dialog.open) {
      dialog.close();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-label={label}
      onClose={onClose}
      onCancel={onClose}
      // Clicking the backdrop lands on the dialog itself, never on its content.
      onClick={(event) => {
        if (event.target === ref.current) onClose();
      }}
      className="m-auto w-[min(46rem,calc(100vw-2rem))] rounded-[1.75rem] bg-cream p-0 text-ink backdrop:bg-ink/60 backdrop:backdrop-blur-sm"
    >
      {open && (
        <div className="relative max-h-[85vh] overflow-y-auto">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream/90 text-ink backdrop-blur transition-colors hover:bg-ink hover:text-cream"
          >
            <span className="sr-only">Close</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </button>
          {children}
        </div>
      )}
    </dialog>
  );
}
