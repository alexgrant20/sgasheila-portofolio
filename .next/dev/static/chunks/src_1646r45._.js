(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/sections/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Contact",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$art$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/art.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Reveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const empty = {
    name: "",
    email: "",
    message: "",
    company: ""
};
function humanDelay(seconds) {
    if (seconds < 90) return `${seconds} seconds`;
    return `${Math.ceil(seconds / 60)} minutes`;
}
function Contact() {
    _s();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(empty);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const update = (field)=>(value)=>setForm((prev)=>({
                    ...prev,
                    [field]: value
                }));
    async function onSubmit(event) {
        event.preventDefault();
        if (status === "sending") return;
        setStatus("sending");
        setFeedback("");
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });
            const data = await response.json().catch(()=>({}));
            if (response.status === 429) {
                setStatus("error");
                setFeedback(`You have reached the limit of 3 messages. Please try again in about ${humanDelay(Number(data.retryAfter) || 600)}.`);
                return;
            }
            if (!response.ok) {
                setStatus("error");
                setFeedback(data.error ?? "Something went wrong. Please try again.");
                return;
            }
            setStatus("sent");
            setFeedback("Thank you — your message is on its way. I will reply soon.");
            setForm(empty);
        } catch  {
            setStatus("error");
            setFeedback("Network error. Please check your connection and try again.");
        }
    }
    const inputClass = "w-full rounded-2xl border border-line bg-paper px-5 py-3.5 text-base text-ink placeholder:text-muted/70 transition-colors focus:border-teal focus:outline-none";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "scroll-mt-28 bg-teal px-6 py-20 sm:px-10 lg:px-16 lg:py-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto grid w-full max-w-6xl gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-yellow",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display text-4xl leading-[1.05] tracking-tight text-cream sm:text-5xl",
                                    children: [
                                        "Let's build something",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block italic text-yellow",
                                            children: "reliable together"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Contact.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-6 max-w-md text-lg leading-relaxed text-teal-soft",
                                    children: "Have a system that needs analysing, documenting, or rescuing? Send me the details and I will get back to you."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Contact.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                            delay: 0.1,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-10 space-y-5",
                                children: [
                                    {
                                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$art$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconMail"],
                                        label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email,
                                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].email}`
                                    },
                                    {
                                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$art$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPhone"],
                                        label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].phone,
                                        href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].phoneHref}`
                                    },
                                    {
                                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$art$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconLinkedIn"],
                                        label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].linkedin,
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].linkedinHref
                                    },
                                    {
                                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$art$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPin"],
                                        label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].location
                                    }
                                ].map(({ Icon, label, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream/10 text-yellow",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Contact.tsx",
                                                    lineNumber: 119,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 118,
                                                columnNumber: 19
                                            }, this),
                                            href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: href,
                                                target: href.startsWith("http") ? "_blank" : undefined,
                                                rel: href.startsWith("http") ? "noreferrer noopener" : undefined,
                                                className: "text-cream underline decoration-cream/30 underline-offset-4 transition-colors hover:decoration-cream",
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 122,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-cream",
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 135,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, label, true, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 117,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Contact.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Contact.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Contact.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                    delay: 0.06,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: onSubmit,
                        noValidate: true,
                        className: "rounded-[2rem] bg-cream p-7 sm:p-9",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display text-2xl font-semibold text-ink",
                                children: "Start by saying hi"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Contact.tsx",
                                lineNumber: 150,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-7 space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "name",
                                                className: "mb-2 block text-sm font-medium text-ink",
                                                children: "Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 156,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "name",
                                                name: "name",
                                                type: "text",
                                                required: true,
                                                minLength: 2,
                                                maxLength: 80,
                                                autoComplete: "name",
                                                value: form.name,
                                                onChange: (e)=>update("name")(e.target.value),
                                                placeholder: "Your name",
                                                className: inputClass
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 162,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "email",
                                                className: "mb-2 block text-sm font-medium text-ink",
                                                children: "Email"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "email",
                                                name: "email",
                                                type: "email",
                                                required: true,
                                                maxLength: 120,
                                                autoComplete: "email",
                                                value: form.email,
                                                onChange: (e)=>update("email")(e.target.value),
                                                placeholder: "you@company.com",
                                                className: inputClass
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 177,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "message",
                                                className: "mb-2 block text-sm font-medium text-ink",
                                                children: "Message"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                id: "message",
                                                name: "message",
                                                required: true,
                                                minLength: 10,
                                                maxLength: 2000,
                                                rows: 5,
                                                value: form.message,
                                                onChange: (e)=>update("message")(e.target.value),
                                                placeholder: "Tell me about the system or project.",
                                                className: `${inputClass} resize-y`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 205,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-right text-xs text-muted",
                                                children: [
                                                    form.message.length,
                                                    "/2000"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "aria-hidden": "true",
                                        className: "hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "company",
                                                children: "Company"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 224,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "company",
                                                name: "company",
                                                type: "text",
                                                tabIndex: -1,
                                                autoComplete: "off",
                                                value: form.company,
                                                onChange: (e)=>update("company")(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Contact.tsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 223,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Contact.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: status === "sending",
                                className: "group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",
                                children: [
                                    status === "sending" ? "Sending…" : "Send message",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$art$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconArrow"], {
                                        className: "h-4 w-4 transition-transform group-hover:translate-x-1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Contact.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Contact.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                role: "status",
                                "aria-live": "polite",
                                className: `mt-4 min-h-[1.5rem] text-sm ${status === "error" ? "text-coral" : "text-teal"}`,
                                children: feedback
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Contact.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs leading-relaxed text-muted",
                                children: "To keep the inbox clean, this form accepts up to 3 messages per 10 minutes from the same network."
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Contact.tsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Contact.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Contact.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/Contact.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/Contact.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(Contact, "BbfbTU4C6pw5g5Ip9mUtS/0b8AY=");
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Nav",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$art$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/art.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Nav() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const onScroll = {
                "Nav.useEffect.onScroll": ()=>setScrolled(window.scrollY > 24)
            }["Nav.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "Nav.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `sticky top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-cream/90 backdrop-blur-md" : "bg-transparent"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-5 sm:px-10 lg:px-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#top",
                        className: "font-display text-2xl italic tracking-tight text-ink",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].firstName
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Nav.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-1 md:flex",
                        "aria-label": "Primary",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nav"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.href,
                                className: "rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-teal-soft hover:text-teal-deep",
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/src/components/sections/Nav.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Nav.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden items-center gap-3 lg:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].phoneHref}`,
                                className: "text-sm font-medium text-ink/80 transition-colors hover:text-coral",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].phone
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Nav.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].resume,
                                download: true,
                                className: "inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$art$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconDownload"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Nav.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    "CV"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Nav.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Nav.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setOpen((v)=>!v),
                        "aria-expanded": open,
                        "aria-controls": "mobile-nav",
                        className: "inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper md:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: open ? "Close menu" : "Open menu"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Nav.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                className: "h-5 w-5",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16",
                                    stroke: "currentColor",
                                    strokeWidth: "1.8",
                                    strokeLinecap: "round",
                                    fill: "none"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Nav.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Nav.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Nav.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Nav.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "mobile-nav",
                className: "border-t border-line bg-cream px-6 pb-6 pt-2 md:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "flex flex-col",
                        "aria-label": "Primary mobile",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nav"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: item.href,
                                onClick: ()=>setOpen(false),
                                className: "border-b border-line/70 py-3 text-base font-medium text-ink",
                                children: item.label
                            }, item.href, false, {
                                fileName: "[project]/src/components/sections/Nav.tsx",
                                lineNumber: 90,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Nav.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-5 flex flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].resume,
                                download: true,
                                className: "inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$art$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconDownload"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Nav.tsx",
                                        lineNumber: 106,
                                        columnNumber: 15
                                    }, this),
                                    "Download CV"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Nav.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].phoneHref}`,
                                className: "inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-ink",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$art$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IconPhone"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Nav.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this),
                                    "Call"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Nav.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Nav.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/Nav.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Nav.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(Nav, "jPnA7EYNjCLn3fxFn1srHOcQMBA=");
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/Work.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Work",
    ()=>Work
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/content/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/Reveal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const ALL = "All work";
const tagStyles = {
    "Requirement Analysis": "bg-teal-soft text-teal-deep",
    Development: "bg-yellow-soft text-ink",
    Database: "bg-coral-soft text-coral",
    Testing: "bg-cream-deep text-muted"
};
function Work() {
    _s();
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(ALL);
    const filters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "Work.useMemo[filters]": ()=>{
            const seen = [];
            for (const project of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"]){
                for (const tag of project.tags){
                    if (!seen.includes(tag)) seen.push(tag);
                }
            }
            return [
                ALL,
                ...seen
            ];
        }
    }["Work.useMemo[filters]"], []);
    const visible = filter === ALL ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].filter((p)=>p.tags.includes(filter));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Section"], {
        id: "work",
        eyebrow: "Selected work",
        title: "My latest works",
        intro: "Government registries, university platforms, and non-profit systems — each one shipped with a different slice of my involvement.",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "no-scrollbar -mx-6 mb-10 flex gap-2 overflow-x-auto px-6 sm:mx-0 sm:flex-wrap sm:px-0",
                children: filters.map((tag)=>{
                    const active = filter === tag;
                    const count = tag === ALL ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].length : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$content$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].filter((p)=>p.tags.includes(tag)).length;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setFilter(tag),
                        "aria-pressed": active,
                        className: `shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${active ? "border-ink bg-ink text-cream" : "border-line bg-paper text-ink hover:border-teal hover:text-teal-deep"}`,
                        children: [
                            tag,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: active ? "ml-2 text-cream/60" : "ml-2 text-muted",
                                children: count
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Work.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this)
                        ]
                    }, tag, true, {
                        fileName: "[project]/src/components/sections/Work.tsx",
                        lineNumber: 50,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Work.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
                children: visible.map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$Reveal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Reveal"], {
                        delay: Math.min(i, 5) * 0.05,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "flex h-full flex-col rounded-3xl border border-line bg-paper p-6 transition-transform duration-300 hover:-translate-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-[0.16em] text-coral",
                                    children: project.client
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Work.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mt-3 font-display text-2xl font-semibold leading-tight text-ink",
                                    children: project.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Work.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this),
                                project.full && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm italic text-muted",
                                    children: project.full
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Work.tsx",
                                    lineNumber: 81,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-3 flex-1 text-sm leading-relaxed text-muted",
                                    children: project.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Work.tsx",
                                    lineNumber: 83,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-5 flex flex-wrap gap-2",
                                    children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: `rounded-full px-3 py-1 text-xs font-medium ${tagStyles[tag]}`,
                                            children: tag
                                        }, tag, false, {
                                            fileName: "[project]/src/components/sections/Work.tsx",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Work.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Work.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    }, project.name, false, {
                        fileName: "[project]/src/components/sections/Work.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Work.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Work.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(Work, "UFSUGVLr+6mclZHaBlLjl6dI9xQ=");
_c = Work;
var _c;
__turbopack_context__.k.register(_c, "Work");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/CountUp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CountUp",
    ()=>CountUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CountUp({ value, decimals = 0, suffix = "", durationMs = 1400 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        amount: 0.6
    });
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    const [display, setDisplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(reduced ? value : 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CountUp.useEffect": ()=>{
            if (!inView || reduced) return;
            let frame = 0;
            const start = performance.now();
            const tick = {
                "CountUp.useEffect.tick": (now)=>{
                    const progress = Math.min((now - start) / durationMs, 1);
                    // easeOutExpo — fast start, gentle landing
                    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                    setDisplay(value * eased);
                    if (progress < 1) frame = requestAnimationFrame(tick);
                }
            }["CountUp.useEffect.tick"];
            frame = requestAnimationFrame(tick);
            return ({
                "CountUp.useEffect": ()=>cancelAnimationFrame(frame)
            })["CountUp.useEffect"];
        }
    }["CountUp.useEffect"], [
        inView,
        reduced,
        value,
        durationMs
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        ref: ref,
        children: [
            display.toFixed(decimals),
            suffix
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/CountUp.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(CountUp, "VfW8Lxd/FyYBqYutyp3p1nSVLoA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = CountUp;
var _c;
__turbopack_context__.k.register(_c, "CountUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Reveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Reveal({ children, delay = 0, y = 24, className }) {
    _s();
    const reduced = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"])();
    if (reduced) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/Reveal.tsx",
            lineNumber: 23,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: className,
        initial: {
            opacity: 0,
            y
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            amount: 0.2
        },
        transition: {
            duration: 0.55,
            delay,
            ease: [
                0.22,
                1,
                0.36,
                1
            ]
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Reveal.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(Reveal, "/JSVQSdN2dVjcj5yyuX/KnOybKE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$reduced$2d$motion$2f$use$2d$reduced$2d$motion$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducedMotion"]
    ];
});
_c = Reveal;
var _c;
__turbopack_context__.k.register(_c, "Reveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/Section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Section",
    ()=>Section
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Section({ id, eyebrow, title, intro, children, className = "", align = "left" }) {
    const centered = align === "center";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: `scroll-mt-28 px-6 py-20 sm:px-10 lg:px-16 lg:py-28 ${className}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-6xl",
            children: [
                (eyebrow || title || intro) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `mb-12 max-w-2xl lg:mb-16 ${centered ? "mx-auto text-center" : ""}`,
                    children: [
                        eyebrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-coral",
                            children: eyebrow
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Section.tsx",
                            lineNumber: 36,
                            columnNumber: 15
                        }, this),
                        title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display text-4xl leading-[1.08] tracking-tight text-ink sm:text-5xl",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Section.tsx",
                            lineNumber: 41,
                            columnNumber: 15
                        }, this),
                        intro && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 text-base leading-relaxed text-muted sm:text-lg",
                            children: intro
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/Section.tsx",
                            lineNumber: 46,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/Section.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/Section.tsx",
            lineNumber: 30,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/Section.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = Section;
var _c;
__turbopack_context__.k.register(_c, "Section");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/art.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BrushStroke",
    ()=>BrushStroke,
    "IconArrow",
    ()=>IconArrow,
    "IconDatabase",
    ()=>IconDatabase,
    "IconDownload",
    ()=>IconDownload,
    "IconLinkedIn",
    ()=>IconLinkedIn,
    "IconMail",
    ()=>IconMail,
    "IconPhone",
    ()=>IconPhone,
    "IconPin",
    ()=>IconPin,
    "IconQA",
    ()=>IconQA,
    "IconRequirements",
    ()=>IconRequirements,
    "Seal",
    ()=>Seal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function BrushStroke({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 400 300",
        fill: "none",
        "aria-hidden": "true",
        className: className,
        preserveAspectRatio: "none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M26 74c40-30 96-44 156-46 58-2 118 6 176 20 16 4 30 12 38 25 9 15 6 34-2 50-11 22-31 38-54 50-38 20-84 30-131 32-52 2-105-4-152-22-20-8-39-20-48-38-9-19-3-42 12-56 2-6 4-10 5-15z",
                fill: "var(--color-teal)"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M60 44c52-22 112-30 172-26 40 3 81 10 118 26-42-6-85-9-128-8-56 1-112 6-162 8z",
                fill: "var(--color-teal)",
                opacity: "0.5"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M74 240c46 17 97 25 148 24 46-1 92-9 133-27-32 22-70 36-110 43-52 9-107 5-155-14-6-2-11-5-16-8z",
                fill: "var(--color-teal-deep)",
                opacity: "0.35"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M348 52c16 4 31 10 44 20",
                stroke: "var(--color-teal)",
                strokeWidth: "8",
                strokeLinecap: "round",
                opacity: "0.5"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M354 250c18-6 34-14 48-25",
                stroke: "var(--color-teal)",
                strokeWidth: "6",
                strokeLinecap: "round",
                opacity: "0.35"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 128c14-14 31-25 50-33",
                stroke: "var(--color-teal)",
                strokeWidth: "7",
                strokeLinecap: "round",
                opacity: "0.4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/art.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = BrushStroke;
function Seal({ className = "" }) {
    const label = "MAGNA CUM LAUDE • B.SC. COMPUTER SCIENCE & STATISTICS • BINA NUSANTARA • ";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 200 200",
        className: className,
        role: "img",
        "aria-label": label,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    id: "seal-arc",
                    d: "M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/art.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "100",
                cy: "100",
                r: "97",
                fill: "var(--color-paper)"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "100",
                cy: "100",
                r: "96",
                fill: "none",
                stroke: "var(--color-ink)",
                strokeWidth: "1.5"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "100",
                cy: "100",
                r: "60",
                fill: "none",
                stroke: "var(--color-line)",
                strokeWidth: "1"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                fontSize: "11.2",
                letterSpacing: "1.6",
                fill: "var(--color-ink)",
                fontWeight: "600",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textPath", {
                    href: "#seal-arc",
                    startOffset: "0%",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/art.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                stroke: "var(--color-teal)",
                strokeWidth: "4.5",
                strokeLinecap: "round",
                fill: "none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                        cx: "100",
                        cy: "82",
                        rx: "26",
                        ry: "10"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/art.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M74 82v18c0 5.5 11.6 10 26 10s26-4.5 26-10V82"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/art.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M74 104v14c0 5.5 11.6 10 26 10s26-4.5 26-10v-14"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/art.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "100",
                cy: "136",
                r: "3.5",
                fill: "var(--color-coral)"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/art.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_c1 = Seal;
const iconBase = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
function IconRequirements(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        ...iconBase,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M9 4h6v3H9z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M15 5.5h2.5A1.5 1.5 0 0 1 19 7v12a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 19V7a1.5 1.5 0 0 1 1.5-1.5H9"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.5 12.5l1.6 1.6 3.4-3.6"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.5 17h7"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/art.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_c2 = IconRequirements;
function IconDatabase(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        ...iconBase,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                cx: "12",
                cy: "6",
                rx: "7",
                ry: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/art.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_c3 = IconDatabase;
function IconQA(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        ...iconBase,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 3l7 3v5.5c0 4.2-2.9 7.9-7 9.5-4.1-1.6-7-5.3-7-9.5V6z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.8 12.1l2.2 2.2 4.2-4.5"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/art.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_c4 = IconQA;
function IconMail(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        ...iconBase,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "5",
                width: "18",
                height: "14",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3.5 6.5l8.5 6 8.5-6"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/art.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c5 = IconMail;
function IconPhone(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        ...iconBase,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6.5 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.5 5.7a2 2 0 0 1 2-2.2z"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/art.tsx",
            lineNumber: 164,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/art.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_c6 = IconPhone;
function IconPin(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        ...iconBase,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11z"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "10",
                r: "2.6"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/art.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c7 = IconPin;
function IconLinkedIn(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        ...iconBase,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3.5",
                y: "3.5",
                width: "17",
                height: "17",
                rx: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 10.5V16"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8 7.7v.1"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.8 16v-3.2a2.2 2.2 0 0 1 4.4 0V16"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.8 10.5V16"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/art.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
_c8 = IconLinkedIn;
function IconDownload(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        ...iconBase,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 4v10"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.5 10.5L12 14l3.5-3.5"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 17.5v1A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5v-1"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/art.tsx",
        lineNumber: 192,
        columnNumber: 5
    }, this);
}
_c9 = IconDownload;
function IconArrow(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        ...iconBase,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M5 12h14"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M13 6l6 6-6 6"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/art.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/art.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}
_c10 = IconArrow;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "BrushStroke");
__turbopack_context__.k.register(_c1, "Seal");
__turbopack_context__.k.register(_c2, "IconRequirements");
__turbopack_context__.k.register(_c3, "IconDatabase");
__turbopack_context__.k.register(_c4, "IconQA");
__turbopack_context__.k.register(_c5, "IconMail");
__turbopack_context__.k.register(_c6, "IconPhone");
__turbopack_context__.k.register(_c7, "IconPin");
__turbopack_context__.k.register(_c8, "IconLinkedIn");
__turbopack_context__.k.register(_c9, "IconDownload");
__turbopack_context__.k.register(_c10, "IconArrow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/content/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Single source of truth for every piece of copy on the site.
 * All facts are taken verbatim from Sheila's CV — nothing here is invented.
 */ __turbopack_context__.s([
    "awards",
    ()=>awards,
    "certifications",
    ()=>certifications,
    "education",
    ()=>education,
    "experience",
    ()=>experience,
    "languages",
    ()=>languages,
    "nav",
    ()=>nav,
    "profile",
    ()=>profile,
    "projectCountByTag",
    ()=>projectCountByTag,
    "projects",
    ()=>projects,
    "services",
    ()=>services,
    "skillGroups",
    ()=>skillGroups,
    "softSkills",
    ()=>softSkills,
    "stats",
    ()=>stats,
    "toolGroups",
    ()=>toolGroups,
    "yearsOfExperience",
    ()=>yearsOfExperience
]);
const profile = {
    name: "Sheila Gracia Angelina",
    firstName: "Sheila",
    role: "Senior System Analyst",
    tagline: "Hey There, I'm Sheila",
    location: "West Jakarta, Indonesia",
    email: "sgasheila21@gmail.com",
    phone: "+62 856 7017 461",
    phoneHref: "+628567017461",
    linkedin: "linkedin.com/in/sheila-gracia-angelina",
    linkedinHref: "https://www.linkedin.com/in/sheila-gracia-angelina",
    resume: "/Resume_Sheila_Gracia_Angelina.pdf",
    careerStart: "2020-03-01",
    intro: "I turn tangled requirements into systems people can actually use, and I love what I do.",
    summary: [
        "Results-driven system analyst with a dual academic background in Computer Science and Statistics, and a strong foundation in software development and system analysis.",
        "Experienced in managing end-to-end IT project lifecycles, from requirements gathering and system design through to deployment and documentation.",
        "Skilled in programming and system design, with a proven ability to collaborate with stakeholders and lead cross-functional teams."
    ]
};
const services = [
    {
        title: "Requirement Engineering",
        tag: "Requirement Analysis",
        blurb: "Gathering, challenging, and translating stakeholder needs into technical specifications a development team can build from.",
        accent: "teal"
    },
    {
        title: "Database Design & Management",
        tag: "Database",
        blurb: "Data models, schema design, and day-to-day database management across SQL Server, MySQL, and PostgreSQL.",
        accent: "yellow"
    },
    {
        title: "QA, Testing & UAT",
        tag: "Testing",
        blurb: "System testing, user acceptance testing, and the documentation that gets a release signed off with confidence.",
        accent: "coral"
    }
];
const stats = [
    {
        value: 10,
        label: "Projects delivered"
    },
    {
        value: 6,
        label: "Team members led"
    },
    {
        value: 4,
        label: "Roles, one company"
    },
    {
        value: 3.82,
        decimals: 2,
        label: "GPA out of 4.00"
    }
];
const experience = [
    {
        role: "Project Officer",
        org: "IT Division, Bina Nusantara Group",
        period: "Oct 2024 — Present",
        current: true,
        bullets: [
            "Lead project planning and execution for software development, ensuring alignment with client needs and organizational goals.",
            "Collaborate with stakeholders to gather requirements and translate them into technical specifications for the development team.",
            "Perform system analysis and design, optimizing processes to improve software performance.",
            "Supervise a team of 5 programmers and 1 associate system analyst, guiding system analysis and programming tasks to keep deliverables on time.",
            "Run system testing, User Acceptance Testing (UAT), and database management to ensure the quality and performance of applications.",
            "Develop and maintain project documentation, including system architecture and user manuals."
        ]
    },
    {
        role: "Project Staff",
        org: "IT Division, Bina Nusantara Group",
        period: "Oct 2022 — Sep 2024",
        current: false,
        bullets: [
            "Gathered requirements and conducted analysis to define the scope of various software development projects.",
            "Participated in system design discussions and contributed to the development of software applications using Laravel.",
            "Conducted User Acceptance Testing (UAT) and provided support during the deployment phase, ensuring system functionality met user expectations.",
            "Documented system processes and user guides to facilitate training for end-users.",
            "Coordinated project schedules and tracked progress to ensure timely delivery of applications."
        ]
    },
    {
        role: "Junior Project Staff",
        org: "IT Division, Bina Nusantara Group",
        period: "Mar 2021 — Sep 2022",
        current: false,
        bullets: [
            "Supported requirement analysis, system design, and development tasks.",
            "Contributed to programming tasks using Laravel for web applications.",
            "Involved in system testing and debugging to ensure software functionality and quality assurance.",
            "Worked with senior staff to identify process improvements, leading to increased project efficiency.",
            "Helped maintain project documentation, including meeting notes and project updates."
        ]
    },
    {
        role: "Associate Member",
        org: "IT Division, Bina Nusantara Group",
        period: "Mar 2020 — Feb 2021",
        current: false,
        bullets: [
            "Developed and maintained web-based applications using PHP, contributing to both front-end and back-end development.",
            "Collaborated with senior developers to design and implement database solutions using SQL Server.",
            "Conducted unit testing and debugging to ensure the quality and functionality of code, resolving system issues in a timely manner."
        ]
    }
];
const projects = [
    {
        name: "SIAGA",
        full: "Sistem Informasi Kelembagaan",
        client: "Kemdiktisaintek",
        description: "Higher-education institutional registration — universities, study programs, and related services.",
        tags: [
            "Requirement Analysis",
            "Development",
            "Database",
            "Testing"
        ]
    },
    {
        name: "IGCN",
        full: "Indonesia Global Compact Network",
        client: "UN Global Compact Indonesia",
        description: "Platform supporting UN Global Compact initiatives across Indonesia.",
        tags: [
            "Requirement Analysis",
            "Development",
            "Database",
            "Testing"
        ]
    },
    {
        name: "PISN",
        full: "Penomoran Ijazah dan Sertifikat Nasional",
        client: "Kemdiktisaintek",
        description: "National service that assigns unique certificate and diploma numbers.",
        tags: [
            "Requirement Analysis",
            "Database",
            "Testing"
        ]
    },
    {
        name: "PILN",
        full: "Penyetaraan Ijazah Luar Negeri",
        client: "Kemdiktisaintek",
        description: "Foreign degree equivalency assessment and issuance.",
        tags: [
            "Requirement Analysis",
            "Database",
            "Testing"
        ]
    },
    {
        name: "BIDUK",
        full: "Basis Integrasi Data Umat Keuskupan",
        client: "Keuskupan Agung Jakarta",
        description: "Integrated parishioner data management for the archdiocese.",
        tags: [
            "Requirement Analysis",
            "Database",
            "Testing"
        ]
    },
    {
        name: "BINUS Partner",
        client: "BINUS",
        description: "Internal application for managing partnership contacts.",
        tags: [
            "Requirement Analysis",
            "Database",
            "Testing"
        ]
    },
    {
        name: "BINUS Maya",
        client: "BINUS",
        description: "Internal academic system serving students, staff, and lecturers — full-stack build in PHP.",
        tags: [
            "Development",
            "Database"
        ]
    },
    {
        name: "Developer Workspace",
        client: "Bina Inovasi Global",
        description: "Internal employee management application: attendance, leave, and project tracking.",
        tags: [
            "Testing"
        ]
    },
    {
        name: "BINUS Career",
        client: "BINUS",
        description: "Internal recruitment application for students and alumni.",
        tags: [
            "Testing"
        ]
    },
    {
        name: "Student Violation",
        client: "BINUS",
        description: "Internal application for monitoring student violations.",
        tags: [
            "Testing"
        ]
    }
];
const skillGroups = [
    {
        title: "Programming",
        items: [
            "PHP",
            "Laravel",
            "HTML/CSS",
            "JavaScript",
            "Java",
            "R",
            "C"
        ]
    },
    {
        title: "Databases",
        items: [
            "Database Design",
            "SQL Server",
            "MySQL",
            "PostgreSQL"
        ]
    },
    {
        title: "Development & Analysis",
        items: [
            "Requirement Gathering",
            "System Analysis & Design",
            "UI/UX",
            "UML"
        ]
    },
    {
        title: "Quality & Version Control",
        items: [
            "Technical Documentation",
            "QA Testing",
            "Git"
        ]
    }
];
const softSkills = [
    "Communication",
    "Team Leadership",
    "Problem-Solving",
    "Critical Thinking",
    "Time Management",
    "Project Management",
    "Adaptability"
];
const toolGroups = [
    {
        title: "Design & Prototyping",
        items: [
            "Figma",
            "Adobe XD",
            "Canva"
        ]
    },
    {
        title: "IDE & Development",
        items: [
            "VS Code",
            "Visual Studio",
            "XAMPP",
            "Laragon",
            "PuTTY"
        ]
    },
    {
        title: "Database Tools",
        items: [
            "DBeaver",
            "SSMS",
            "phpMyAdmin"
        ]
    },
    {
        title: "Version Control & Collaboration",
        items: [
            "Git",
            "GitHub",
            "Azure DevOps",
            "Postman"
        ]
    },
    {
        title: "Modeling & Documentation",
        items: [
            "Microsoft Visio",
            "Diagram.net",
            "Visual Paradigm"
        ]
    },
    {
        title: "Productivity",
        items: [
            "Microsoft Office"
        ]
    }
];
const education = {
    degree: "Bachelor of Science in Computer Science and Statistics",
    school: "Bina Nusantara University",
    period: "Sep 2019 — Apr 2024",
    gpa: "3.82 / 4.00",
    honors: "Magna Cum Laude",
    thesis: "Spatial Analysis of Disconnected Areas Using INLA Method with Website-Based (Case Study: Malaria Disease in East Nusa Tenggara Province)"
};
const certifications = [
    {
        name: "Memulai Pemrograman Dengan Java",
        issuer: "Dicoding Indonesia",
        year: "2024"
    },
    {
        name: "Belajar Prinsip Pemrograman SOLID",
        issuer: "Dicoding Indonesia",
        year: "2023"
    },
    {
        name: "Memulai Pemrograman Dengan C",
        issuer: "Dicoding Indonesia",
        year: "2023"
    },
    {
        name: "Introduction to Data Science with Python",
        issuer: "DQLab",
        year: "2021"
    },
    {
        name: "Introduction to Data Science with R",
        issuer: "DQLab",
        year: "2021"
    }
];
const awards = [
    "Magna Cum Laude Honors",
    "Finalist — Statistics Enthusiastic Asia Student Paper Competition (ASPC) 2022, Islamic University of Indonesia",
    "Finalist — RASIO: Statistics Olympiad, Padjadjaran University"
];
const languages = [
    {
        name: "Indonesian",
        level: "Native"
    },
    {
        name: "English",
        level: "Professional"
    }
];
const nav = [
    {
        label: "Services",
        href: "#services"
    },
    {
        label: "Work",
        href: "#work"
    },
    {
        label: "Experience",
        href: "#experience"
    },
    {
        label: "Contact",
        href: "#contact"
    }
];
function yearsOfExperience(now = new Date()) {
    const start = new Date(profile.careerStart);
    let years = now.getFullYear() - start.getFullYear();
    const beforeAnniversary = now.getMonth() < start.getMonth() || now.getMonth() === start.getMonth() && now.getDate() < start.getDate();
    if (beforeAnniversary) years -= 1;
    return years;
}
function projectCountByTag(tag) {
    return projects.filter((p)=>p.tags.includes(tag)).length;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1646r45._.js.map