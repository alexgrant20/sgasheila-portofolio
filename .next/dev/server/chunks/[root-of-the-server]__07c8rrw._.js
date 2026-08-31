module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/src/app/api/contact/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST,
    "dynamic",
    ()=>dynamic,
    "runtime",
    ()=>runtime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emailjs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emailjs.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/rate-limit.ts [app-route] (ecmascript)");
;
;
;
;
const runtime = "nodejs";
const dynamic = "force-dynamic";
const contactSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(2).max(80),
    email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].email().max(120),
    message: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().trim().min(10).max(2000),
    // Honeypot: real people never see this field, bots fill everything.
    company: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(200).optional()
});
/** Best available client IP behind Vercel / a reverse proxy. */ function clientIp(request) {
    const forwarded = request.headers.get("x-forwarded-for");
    if (forwarded) {
        const first = forwarded.split(",")[0]?.trim();
        if (first) return first;
    }
    return request.headers.get("x-real-ip")?.trim() || "unknown";
}
async function POST(request) {
    let json;
    try {
        json = await request.json();
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Malformed request."
        }, {
            status: 400
        });
    }
    const parsed = contactSchema.safeParse(json);
    if (!parsed.success) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Please check the form and try again.",
            issues: parsed.error.issues.map((i)=>({
                    field: i.path.join("."),
                    message: i.message
                }))
        }, {
            status: 400
        });
    }
    const { name, email, message, company } = parsed.data;
    // Silently accept and discard bot submissions — telling them would only help.
    if (company && company.trim() !== "") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            ok: true
        });
    }
    const ip = clientIp(request);
    const limit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["check"])(ip);
    if (!limit.ok) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: `You have already sent ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LIMIT"]} messages. Please try again shortly.`,
            retryAfter: limit.retryAfter
        }, {
            status: 429,
            headers: {
                "Retry-After": String(limit.retryAfter)
            }
        });
    }
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emailjs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendContactEmail"])({
            name,
            email,
            message
        });
    } catch (error) {
        // Full detail stays in the server log; the client gets nothing exploitable.
        console.error("[contact] send failed:", error);
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emailjs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["EmailConfigError"]) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "The contact form is not configured yet."
            }, {
                status: 500
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Could not send your message right now. Please try again."
        }, {
            status: 502
        });
    }
    // Only a delivered message counts against the sender's allowance.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$rate$2d$limit$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["record"])(ip);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        ok: true,
        remaining: limit.remaining - 1
    });
}
}),
"[project]/src/lib/emailjs.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmailConfigError",
    ()=>EmailConfigError,
    "EmailSendError",
    ()=>EmailSendError,
    "sendContactEmail",
    ()=>sendContactEmail
]);
/**
 * Server-side EmailJS transport.
 *
 * The browser SDK is deliberately not used: the rate limit has to be enforced
 * where the real client IP is visible, and the private key must never ship to
 * the client. EmailJS blocks non-browser calls by default — switch on
 * "Allow API calls from non-browser applications" under Account → Security,
 * otherwise every request comes back 403.
 */ /**
 * Overridable so the contact route can be exercised end-to-end against a local
 * stub without sending real mail. Leave unset everywhere but local testing.
 */ const ENDPOINT = process.env.EMAILJS_ENDPOINT || "https://api.emailjs.com/api/v1.0/email/send";
class EmailConfigError extends Error {
}
class EmailSendError extends Error {
}
function requiredEnv(key) {
    const value = process.env[key];
    if (!value) {
        throw new EmailConfigError(`Missing environment variable: ${key}`);
    }
    return value;
}
async function sendContactEmail(payload) {
    const body = {
        service_id: requiredEnv("EMAILJS_SERVICE_ID"),
        template_id: requiredEnv("EMAILJS_TEMPLATE_ID"),
        user_id: requiredEnv("EMAILJS_PUBLIC_KEY"),
        accessToken: requiredEnv("EMAILJS_PRIVATE_KEY"),
        template_params: {
            from_name: payload.name,
            from_email: payload.email,
            reply_to: payload.email,
            message: payload.message
        }
    };
    const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body),
        // Never let a hung provider hold a serverless invocation open.
        signal: AbortSignal.timeout(10_000)
    });
    if (!response.ok) {
        const detail = await response.text().catch(()=>"");
        throw new EmailSendError(`EmailJS responded ${response.status}: ${detail.slice(0, 300)}`);
    }
}
}),
"[project]/src/lib/rate-limit.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Sliding-window rate limiter keyed by client IP.
 *
 * Backed by process memory. On a serverless host each instance keeps its own
 * counter and the map is wiped on cold start, so the practical guarantee is
 * "LIMIT requests per WINDOW_MS per running instance" — enough to stop casual
 * abuse of the contact form, not a hard security boundary. To make it strict,
 * swap the Map for a shared store (e.g. Upstash Redis); `check` and `record`
 * are the only two functions callers use, so nothing outside this file changes.
 */ __turbopack_context__.s([
    "LIMIT",
    ()=>LIMIT,
    "WINDOW_MS",
    ()=>WINDOW_MS,
    "check",
    ()=>check,
    "record",
    ()=>record,
    "reset",
    ()=>reset
]);
const LIMIT = 3;
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
/** ip -> timestamps (ms) of accepted requests inside the current window */ const hits = new Map();
/** Drops timestamps that have aged out, and the key itself once it is empty. */ function prune(ip, now) {
    const recent = (hits.get(ip) ?? []).filter((t)=>now - t < WINDOW_MS);
    if (recent.length === 0) {
        hits.delete(ip);
    } else {
        hits.set(ip, recent);
    }
    return recent;
}
function check(ip, now = Date.now()) {
    const recent = prune(ip, now);
    if (recent.length < LIMIT) {
        return {
            ok: true,
            remaining: LIMIT - recent.length,
            retryAfter: 0
        };
    }
    const oldest = Math.min(...recent);
    const retryAfter = Math.max(1, Math.ceil((WINDOW_MS - (now - oldest)) / 1000));
    return {
        ok: false,
        remaining: 0,
        retryAfter
    };
}
function record(ip, now = Date.now()) {
    const recent = prune(ip, now);
    hits.set(ip, [
        ...recent,
        now
    ]);
}
function reset() {
    hits.clear();
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__07c8rrw._.js.map