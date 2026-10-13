import { useEffect, useState } from "react";

const SESSION_KEY = "ekc_lead_shown";

export function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem(SESSION_KEY, "1");
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-title"
    >
      <div
        className={`absolute inset-0 bg-midnight/80 backdrop-blur-sm transition-opacity duration-400 ${open ? "opacity-100" : "opacity-0"}`}
        onClick={close}
      />
      <div
        className={`relative w-full max-w-lg bg-midnight-2 border border-line transition-all duration-500 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <button
          onClick={close}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-muted hover:text-ink transition-colors"
          aria-label="Close popup"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>

        <div className="p-8 md:p-10">
          {!submitted ? (
            <>
              <p className="eyebrow mb-3">Join the Championship</p>
              <h2 id="lead-title" className="text-3xl md:text-4xl font-display font-bold uppercase tracking-tightest text-ink leading-[0.95]">
                Be Part of the<br />Championship
              </h2>
              <p className="mt-4 text-sm text-muted leading-relaxed">
                Stay connected with the European Kabaddi Championship 2027.
              </p>

              <form
                className="mt-6 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <input type="text" required placeholder="Name" className="field-input" aria-label="Name" />
                <input type="email" required placeholder="Email" className="field-input" aria-label="Email" />
                <input type="tel" placeholder="Phone" className="field-input" aria-label="Phone" />
                <select required defaultValue="" className="field-input" aria-label="Interest">
                  <option value="" disabled>Select your interest</option>
                  <option>Tickets</option>
                  <option>Sponsorship</option>
                  <option>Team Registration</option>
                  <option>Media</option>
                  <option>General Enquiry</option>
                </select>
                <button type="submit" className="btn-primary w-full">
                  Send Enquiry
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto rounded-full border-2 border-gold flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M6 14L12 20L22 8" stroke="#C8A45D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="text-2xl font-display font-bold uppercase text-ink">Thank You</h2>
              <p className="mt-3 text-sm text-muted">
                Your enquiry has been noted. We'll be in touch as the championship approaches.
              </p>
              <button onClick={close} className="btn-secondary mt-6">Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
