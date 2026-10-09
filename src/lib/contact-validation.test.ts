import assert from "node:assert/strict";
import { test } from "node:test";
import { validateContact } from "./contact-validation.ts";

const ok = {
  name: "Sheila",
  email: "a@b.co",
  message: "x".repeat(21),
};

test("accepts a valid submission", () => {
  assert.deepEqual(validateContact(ok), {});
});

test("name: 3 rejected, 4 and 50 accepted, 51 rejected", () => {
  assert.ok(validateContact({ ...ok, name: "abc" }).name);
  assert.equal(validateContact({ ...ok, name: "abcd" }).name, undefined);
  assert.equal(validateContact({ ...ok, name: "a".repeat(50) }).name, undefined);
  assert.ok(validateContact({ ...ok, name: "a".repeat(51) }).name);
});

test("email: format and 50-char cap", () => {
  const local = (n: number) => "a".repeat(n - 6) + "@b.com";
  assert.ok(validateContact({ ...ok, email: "not-an-email" }).email);
  assert.ok(validateContact({ ...ok, email: "a@b" }).email);
  assert.equal(validateContact({ ...ok, email: local(50) }).email, undefined);
  assert.match(validateContact({ ...ok, email: local(51) }).email!, /at most 50/);
});

test("message: 20 rejected, 21 and 500 accepted, 501 rejected", () => {
  assert.ok(validateContact({ ...ok, message: "x".repeat(20) }).message);
  assert.equal(validateContact({ ...ok, message: "x".repeat(21) }).message, undefined);
  assert.equal(validateContact({ ...ok, message: "x".repeat(500) }).message, undefined);
  assert.ok(validateContact({ ...ok, message: "x".repeat(501) }).message);
});

test("whitespace-only padding does not count", () => {
  assert.ok(validateContact({ ...ok, name: "  ab  " }).name);
});
