"use client";

import { useState } from "react";

const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=hello@filevia.io";

export function ContactActions() {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    window.open(gmailComposeUrl, "_blank");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("hello@filevia.io");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-4">
        <button type="button" onClick={handleEmailClick} className="primary-button">
          Email Us
        </button>
        <button type="button" onClick={handleCopy} className="secondary-button">
          Copy Email
        </button>
      </div>
      <div className="mt-4 space-y-2">
        {copied ? <p className="text-sm text-white">Copied: hello@filevia.io</p> : null}
        <p className="text-sm text-muted">Usually replies within 24 hours</p>
      </div>
    </>
  );
}
