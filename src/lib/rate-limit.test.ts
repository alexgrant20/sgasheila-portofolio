import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import { LIMIT, WINDOW_MS, check, record, reset } from "./rate-limit.ts";

afterEach(() => reset());

describe("rate limit", () => {
  it("allows exactly LIMIT sends inside the window", () => {
    const now = 1_000_000;
    for (let i = 0; i < LIMIT; i++) {
      const result = check("1.2.3.4", now);
      assert.equal(result.ok, true, `send ${i + 1} should be allowed`);
      assert.equal(result.remaining, LIMIT - i);
      record("1.2.3.4", now);
    }

    const blocked = check("1.2.3.4", now);
    assert.equal(blocked.ok, false);
    assert.equal(blocked.remaining, 0);
  });

  it("reports the seconds remaining until the oldest send ages out", () => {
    const now = 1_000_000;
    for (let i = 0; i < LIMIT; i++) record("5.5.5.5", now);

    // Two minutes later, eight of the ten minutes are still to run.
    const blocked = check("5.5.5.5", now + 2 * 60_000);
    assert.equal(blocked.ok, false);
    assert.equal(blocked.retryAfter, 8 * 60);
  });

  it("frees an allowance once the window slides past the oldest send", () => {
    const now = 1_000_000;
    record("9.9.9.9", now);
    record("9.9.9.9", now + 1000);
    record("9.9.9.9", now + 2000);

    assert.equal(check("9.9.9.9", now + 3000).ok, false);

    // Just past the first send falling out of the window.
    const after = check("9.9.9.9", now + WINDOW_MS + 1);
    assert.equal(after.ok, true);
    assert.equal(after.remaining, 1);
  });

  it("counts each IP separately", () => {
    const now = 1_000_000;
    for (let i = 0; i < LIMIT; i++) record("1.1.1.1", now);

    assert.equal(check("1.1.1.1", now).ok, false);
    assert.equal(check("2.2.2.2", now).ok, true);
  });

  it("does not consume an allowance when only checking", () => {
    const now = 1_000_000;
    for (let i = 0; i < 10; i++) {
      assert.equal(check("3.3.3.3", now).remaining, LIMIT);
    }
  });
});
