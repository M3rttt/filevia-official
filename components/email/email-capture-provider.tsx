"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { X } from "lucide-react";

import {
  EMAIL_CAPTURE_FIELD_NAME,
  EMAIL_CAPTURE_FORM_ACTION_URL,
} from "@/lib/email-config";

type CaptureContextValue = {
  openModal: () => void;
  closeModal: () => void;
};

const CaptureContext = createContext<CaptureContextValue | null>(null);

export function useEmailCapture() {
  const ctx = useContext(CaptureContext);
  if (!ctx) {
    throw new Error("useEmailCapture must be used inside EmailCaptureProvider");
  }
  return ctx;
}

export default function EmailCaptureProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const openModal = () => {
    setMessage("");
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setEmail("");
    setMessage("");
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append(EMAIL_CAPTURE_FIELD_NAME, email);

      const res = await fetch(EMAIL_CAPTURE_FORM_ACTION_URL, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setMessage("You're on the list.");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <CaptureContext.Provider value={{ openModal, closeModal }}>
      {children}

      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-[#07111f] p-8 text-white shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute right-5 top-5 text-white/60 hover:text-white"
            >
              <X size={24} />
            </button>

            <div className="mb-3 inline-block rounded-full border border-emerald-400/20 px-4 py-1 text-sm text-emerald-300">
              EARLY ACCESS
            </div>

            <h2 className="text-4xl font-bold leading-tight">
              Wait — Get Lifetime
              <br />
              Launch Discount
            </h2>

            <p className="mt-4 text-white/70">
              Join Filevia early access list and lock special pricing.
            </p>

            <form
              onSubmit={submitForm}
              className="mt-8 flex flex-col gap-4 md:flex-row"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 flex-1 rounded-full border border-white/10 bg-white/5 px-6 text-white outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="h-14 rounded-full bg-emerald-400 px-8 font-semibold text-black transition hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Join Waitlist"}
              </button>
            </form>

            <p className="mt-4 text-sm text-white/50">
              No spam. Unsubscribe anytime.
            </p>

            {message && (
              <p className="mt-4 text-sm text-emerald-300">{message}</p>
            )}
          </div>
        </div>
      )}
    </CaptureContext.Provider>
  );
}
