"use client";

import Link from "next/link";
import { useState } from "react";

const gmailComposeUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=hello@filevia.io";

export function ContactActions() {
  const [copied, setCopied] = useState(false);

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
        <Link href={gmailComposeUrl} target="_blank" rel="noreferrer" className="primary-button">
          Email Us
        </Link>
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
