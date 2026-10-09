"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

declare global {
  interface Window {
    hcaptcha?: { reset: (id?: string) => void };
  }
}

export type HcaptchaHandle = {
  /** Current token, or "" if the challenge has not been solved. */
  getToken: () => string;
  reset: () => void;
};

const SCRIPT_ID = "web3forms-captcha-script";
const SCRIPT_SRC = "https://web3forms.com/client/script.js";

/**
 * Web3Forms-hosted hCaptcha. Web3Forms' client script finds the
 * `.h-captcha[data-captcha]` element and renders the widget with its shared
 * site key; the solved token lands in a `h-captcha-response` field inside it.
 * Web3Forms verifies the token server-side.
 */
export const Hcaptcha = forwardRef<HcaptchaHandle>(function Hcaptcha(_, ref) {
  const container = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    getToken: () =>
      container.current?.querySelector<HTMLTextAreaElement>(
        '[name="h-captcha-response"]',
      )?.value ?? "",
    reset: () => window.hcaptcha?.reset(),
  }));

  useEffect(() => {
    // The script scans the DOM once on load, so the div must already exist.
    if (document.getElementById(SCRIPT_ID)) return;
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      ref={container}
      className="h-captcha max-w-full overflow-x-auto"
      data-captcha="true"
    />
  );
});
