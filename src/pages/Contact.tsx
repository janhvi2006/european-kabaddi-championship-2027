import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { PageHero, SectionHeading } from "../components/UI";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const enquiryTypes = [
  {
    title: "Partnership Enquiries",
    desc: "Sponsorship, brand partnerships and commercial opportunities.",
    email: "partners@ekc2027.com",
    icon: "🤝",
  },
  {
    title: "Media Enquiries",
    desc: "Press, broadcast and editorial requests.",
    email: "media@ekc2027.com",
    icon: "🎙️",
  },
  {
    title: "Team Enquiries",
    desc: "National team registration and competition contact.",
    email: "teams@ekc2027.com",
    icon: "👥",
  },
  {
    title: "General Enquiries",
    desc: "Tickets, venue, volunteering and other questions.",
    email: "info@ekc2027.com",
    icon: "✉️",
  },
];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Contact Us"
        subtitle="Get in touch with the European Kabaddi Championship 2027 team. We welcome partnership, media, team and general enquiries."
      />

      {/* Enquiry types */}
      <section className="section-pad">
        <div className="container-edge">
          <Reveal>
            <SectionHeading eyebrow="Enquiries" title="Get in Touch" center className="mx-auto" />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {enquiryTypes.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="card-surface p-6 h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-midnight-2 text-2xl">
  {item.icon}
</div>

<h3 className="font-display font-bold text-base uppercase text-gold">
  {item.title}
</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{item.desc}</p>
                  <p className="mt-4 font-sans text-xs text-electric break-all">{item.email}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="section-pad bg-midnight-2/50">
        <div className="container-edge max-w-2xl">
          <Reveal>
            <SectionHeading eyebrow="Form" title="Send a Message" center className="mx-auto" />
          </Reveal>
          <Reveal delay={100}>
            {!submitted ? (
              <form
                className="mt-10 space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" required placeholder="Name" className="field-input" aria-label="Name" />
                  <input type="email" required placeholder="Email" className="field-input" aria-label="Email" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="tel" placeholder="Phone" className="field-input" aria-label="Phone" />
                  <select required defaultValue="" className="field-input" aria-label="Subject">
                    <option value="" disabled>Select subject</option>
                    <option>Partnership Enquiry</option>
                    <option>Media Enquiry</option>
                    <option>Team Enquiry</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <textarea required placeholder="Message" rows={5} className="field-input resize-none" aria-label="Message" />
                <button type="submit" className="btn-primary w-full">Send Message</button>
                <p className="text-center text-xs text-muted-2">This is a demo form — no data is sent or stored.</p>
              </form>
            ) : (
              <div className="mt-10 text-center py-12 card-surface">
                <div className="w-16 h-16 mx-auto rounded-full border-2 border-gold flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M6 14L12 20L22 8" stroke="#C8A45D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                
<h3 className="text-2xl font-display font-bold uppercase text-ink">Demo Submission Received</h3>
<p className="mt-3 text-sm text-muted">Thank you for testing this form. This is a demo website, so your message has not been sent or stored.</p>

              </div>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
