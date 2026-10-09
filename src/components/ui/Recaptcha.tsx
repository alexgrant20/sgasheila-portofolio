"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

type Grecaptcha = {
  render: (
    el: HTMLElement,
    opts: {
      sitekey: string;
      callback?: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
    },
  ) => number;
  reset: (id?: number) => void;
};

declare global {
  interface Window {
    grecaptcha?: Grecaptcha & { ready?: (cb: () => void) => void };
    __recaptchaLoaded?: () => void;
  }
}

export type RecaptchaHandle = { reset: () => void };

const SCRIPT_ID = "recaptcha-script";

function whenLoaded(cb: () => void) {
  if (window.grecaptcha?.render) return cb();
  const previous = window.__recaptchaLoaded;
  window.__recaptchaLoaded = () => {
    previous?.();
    cb();
  };
  if (!document.getElementById(SCRIPT_ID)) {
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src =
      "https://www.google.com/recaptcha/api.js?onload=__recaptchaLoaded&render=explicit";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  }
}

/** reCAPTCHA v2 checkbox. Renders nothing when no site key is configured. */
export const Recaptcha = forwardRef<
  RecaptchaHandle,
  { onToken: (token: string) => void }
>(function Recaptcha({ onToken }, ref) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const container = useRef<HTMLDivElement>(null);
  const widgetId = useRef<number | null>(null);
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;

  useImperativeHandle(ref, () => ({
    reset: () => {
      if (widgetId.current !== null) window.grecaptcha?.reset(widgetId.current);
      onTokenRef.current("");
    },
  }));

  useEffect(() => {
    if (!siteKey || !container.current) return;
    const el = container.current;
    let cancelled = false;
    whenLoaded(() => {
      if (cancelled || widgetId.current !== null) return;
      widgetId.current = window.grecaptcha!.render(el, {
        sitekey: siteKey,
        callback: (token) => onTokenRef.current(token),
        "expired-callback": () => onTokenRef.current(""),
        "error-callback": () => onTokenRef.current(""),
      });
    });
    return () => {
      cancelled = true;
    };
  }, [siteKey]);

  if (!siteKey) return null;
  return <div ref={container} className="max-w-full overflow-x-auto" />;
});
