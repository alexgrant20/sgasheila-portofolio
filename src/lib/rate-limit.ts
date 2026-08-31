/**
 * Sliding-window rate limiter keyed by client IP.
 *
 * Backed by process memory. On a serverless host each instance keeps its own
 * counter and the map is wiped on cold start, so the practical guarantee is
 * "LIMIT requests per WINDOW_MS per running instance" — enough to stop casual
 * abuse of the contact form, not a hard security boundary. To make it strict,
 * swap the Map for a shared store (e.g. Upstash Redis); `check` and `record`
 * are the only two functions callers use, so nothing outside this file changes.
 */

export const LIMIT = 3;
export const WINDOW_MS = 10 * 60 * 1000; // 10 minutes

/** ip -> timestamps (ms) of accepted requests inside the current window */
const hits = new Map<string, number[]>();

/** Drops timestamps that have aged out, and the key itself once it is empty. */
function prune(ip: string, now: number): number[] {
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length === 0) {
    hits.delete(ip);
  } else {
    hits.set(ip, recent);
  }
  return recent;
}

export type RateLimitResult = {
  ok: boolean;
  /** Requests still available in the current window. */
  remaining: number;
  /** Seconds until the oldest request ages out. 0 when not limited. */
  retryAfter: number;
};

/** Reports whether `ip` may send right now. Does not consume the allowance. */
export function check(ip: string, now: number = Date.now()): RateLimitResult {
  const recent = prune(ip, now);

  if (recent.length < LIMIT) {
    return { ok: true, remaining: LIMIT - recent.length, retryAfter: 0 };
  }

  const oldest = Math.min(...recent);
  const retryAfter = Math.max(1, Math.ceil((WINDOW_MS - (now - oldest)) / 1000));
  return { ok: false, remaining: 0, retryAfter };
}

/**
 * Consumes one allowance for `ip`. Called only after the email actually went
 * out, so a provider outage never burns a visitor's quota.
 */
export function record(ip: string, now: number = Date.now()): void {
  const recent = prune(ip, now);
  hits.set(ip, [...recent, now]);
}

/** Test helper — clears all counters. */
export function reset(): void {
  hits.clear();
}
