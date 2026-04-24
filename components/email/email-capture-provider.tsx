"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";

import { EMAIL_CAPTURE_FIELD_NAME, EMAIL_CAPTURE_FORM_ACTION_URL } from "@/lib/email-config";

type CaptureContextValue = {
  openModal: () => void;
};

const CaptureContext = createContext<CaptureContextValue | null>(null);

type SharedEmailFormProps = {
  buttonLabel: string;
  compact?: boolean;
};

function SharedEmailForm({ buttonLabel, compact = false }: SharedEmailFormProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const submitLabel = isSubmitting ? "Joining..." : buttonLabel;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      setError("Enter your email to continue.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append("email", email.trim());

      const response = await fetch(EMAIL_CAPTURE_FORM_ACTION_URL, {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setIsSuccess(true);
      setEmail("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-[26px] border border-accent/20 bg-accent/10 px-5 py-4 text-sm font-medium text-white">
        <span className="text-accent">✓</span> You&apos;re on the list.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3" method="POST">
      <div className={`flex ${compact ? "flex-row" : "flex-col sm:flex-row"} gap-3`}>
        <input
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="min-h-[52px] flex-1 rounded-full border border-white/10 bg-white/5 px-5 text-sm text-white outline-none transition placeholder:text-muted focus:border-accent/40 focus:bg-white/10"
        />
        <button type="submit" className="primary-button min-h-[52px] px-7 disabled:cursor-not-allowed disabled:opacity-70" disabled={isSubmitting}>
          {submitLabel}
        </button>
      </div>
      <div className="space-y-1">
        {error ? <p className="text-sm text-[#ffb4b4]">{error}</p> : null}
        <p className="text-xs text-muted">No spam. Unsubscribe anytime.</p>
      </div>
    </form>
  );
}

function ExitIntentModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-[#02060b]/80 p-4 backdrop-blur-sm">
      <div className="premium-card relative w-full max-w-xl overflow-hidden p-7 sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-muted transition hover:bg-white/10 hover:text-white"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="space-y-5 pr-10">
          <span className="eyebrow">Early Access</span>
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">Wait — Get Lifetime Launch Discount</h2>
            <p className="max-w-lg text-base leading-7 text-muted">Join Filevia early access list and lock special pricing.</p>
          </div>
          <SharedEmailForm buttonLabel="Join Waitlist" />
        </div>
      </div>
    </div>
  );
}

function StickyMobileBar() {
  const capture = useEmailCapture();

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-[#07111A]/95 px-4 py-3 backdrop-blur-xl md:hidden">
      <button type="button" onClick={capture.openModal} className="primary-button w-full">
        Get Early Access
      </button>
    </div>
  );
}

export function EmailCaptureProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setHasTriggered(true);
      setIsModalOpen(true);
    }, 20000);

    const handleMouseLeave = (event: MouseEvent) => {
      if (window.innerWidth < 1024 || hasTriggered) {
        return;
      }

      if (event.clientY <= 8) {
        setHasTriggered(true);
        setIsModalOpen(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasTriggered]);

  const value = useMemo(
    () => ({
      openModal: () => {
        setHasTriggered(true);
        setIsModalOpen(true);
      }
    }),
    []
  );

  return (
    <CaptureContext.Provider value={value}>
      {children}
      <StickyMobileBar />
      <ExitIntentModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </CaptureContext.Provider>
  );
}

export function HeroEmailCapture() {
  return (
    <div className="premium-card max-w-2xl p-4 sm:p-5">
      <SharedEmailForm buttonLabel="Get Early Access" />
      <p className="mt-3 text-sm text-muted">Join early users and get launch access + lifetime discount.</p>
    </div>
  );
}

export function useEmailCapture() {
  const context = useContext(CaptureContext);

  if (!context) {
    throw new Error("useEmailCapture must be used within EmailCaptureProvider");
  }

  return context;
}
