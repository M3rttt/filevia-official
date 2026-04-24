"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { X } from "lucide-react";
import {
  EMAIL_CAPTURE_FIELD_NAME,
  EMAIL_CAPTURE_FORM_ACTION_URL,
} from "@/lib/email-config";

type CaptureContextType = {
  openModal: () => void;
};

const CaptureContext = createContext<CaptureContextType | null>(null);

export function useEmailCapture() {
  const ctx = useContext(CaptureContext);
  if (!ctx) throw new Error("Wrap app with EmailCaptureProvider");
  return ctx;
}

export function EmailCaptureProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setMsg("");

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
        setMsg("You're on the list.");
        setEmail("");
      } else {
        setMsg("Something went wrong.");
      }
    } catch {
      setMsg("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <CaptureContext.Provider
      value={{
        openModal: () => setOpen(true),
      }}
    >
      {children}

      {open && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="relative w-full max-w-xl rounded-3xl bg-[#07111f] p-8 text-white">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5"
            >
              <X />
            </button>

            <h2 className="text-4xl font-bold mb-4">
              Wait — Get Lifetime Launch Discount
            </h2>

            <p className="mb-6 text-white/70">
              Join Filevia early access list.
            </p>

            <form
              onSubmit={submitForm}
              className="flex flex-col md:flex-row gap-4"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 flex-1 rounded-full px-6 bg-white/10"
              />

              <button
                type="submit"
                disabled={loading}
                className="h-14 px-8 rounded-full bg-emerald-400 text-black font-semibold"
              >
                {loading ? "Sending..." : "Join Waitlist"}
              </button>
            </form>

            {msg && <p className="mt-4 text-emerald-300">{msg}</p>}
          </div>
        </div>
      )}
    </CaptureContext.Provider>
  );
}

export function HeroEmailCapture() {
  const { openModal } = useEmailCapture();

  return (
    <button
      onClick={openModal}
      className="h-14 px-8 rounded-full bg-emerald-400 text-black font-semibold"
    >
      Get Early Access
    </button>
  );
}
