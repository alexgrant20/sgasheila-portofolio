"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Stagger helper — seconds to wait before this element animates in. */
  delay?: number;
  /** Distance in px the element travels on the way in. */
  y?: number;
  className?: string;
};

/**
 * Fade-and-lift on first scroll into view. Collapses to a plain div when the
 * viewer prefers reduced motion.
 */
export function Reveal({ children, delay = 0, y = 24, className }: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
