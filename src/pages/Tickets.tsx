import { useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { PageHero, SectionHeading } from "../components/UI";

export function Tickets() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Tickets"
        title="Tickets"
        subtitle="Ticket information for the European Kabaddi Championship 2027 will be announced in due course."
      />

      {/* Coming Soon banner */}
      <section className="relative overflow-hidden border-y border-line">
        <div className="absolute inset-0 bg-gradient-to-r from-midnight-2 to-midnight" />
        <div
          className="absolute inset-0 opacity-40"
          style={{ background: "radial-gradient(ellipse at 30% 50%, rgba(200,164,93,0.15), transparent 60%)" }}
        />
        <div className="container-edge relative py-16 md:py-24 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 border border-gold/30 bg-gold/5 text-gold font-sans text-xs font-semibold uppercase tracking-widest2">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse-soft" />
              Tickets Coming Soon
            </span>
            <h2 className="mt-6 font-display font-bold text-4xl md:text-6xl uppercase tracking-tightest text-ink leading-[0.9]">
              Tickets<br /><span className="text-gold">Coming Soon</span>
            </h2>
            <p className="mt-6 text-muted max-w-lg mx-auto leading-relaxed">
              Ticket categories, pricing and on-sale dates will be announced once championship
              scheduling is confirmed. No prices are set at this stage.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Ticket categories */}
      <section className="section-pad">
        <div className="container-edge">
          <Reveal>
            <SectionHeading eyebrow="Categories" title="Ticket Categories" center className="mx-auto" />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
  {
    tier: "VIP Hospitality",
    desc: "Premium seating, hospitality access and exclusive experiences.",
    image: "/images/tickets/vip-hospitality.png",
  },
  {
    tier: "Premium",
    desc: "Reserved seating with excellent sightlines to the mat.",
    image: "/images/tickets/premium.png",
  },
  {
    tier: "Standard",
    desc: "General admission access to championship sessions.",
    image: "/images/tickets/standard.png",
  },
  {
    tier: "Group / Family",
    desc: "Special packages for groups and families.",
    image: "/images/tickets/group-family.png",
  },
].map((item, i) => (
  <Reveal key={item.tier} delay={i * 80}>
    <div className="card-surface h-full overflow-hidden">
      <img
        src={item.image}
        alt={item.tier}
        className="h-48 w-full object-cover"
      />
      <div className="p-7">
        <h3 className="font-display font-bold text-lg uppercase text-gold">
          {item.tier}
        </h3>
        <p className="mt-3 text-sm text-muted leading-relaxed">
          {item.desc}
        </p>
        <p className="mt-5 font-sans text-[10px] uppercase tracking-widest text-muted-2">
          Pricing TBA
        </p>
      </div>
    </div>
  </Reveal>
))}
          </div>
        </div>
      </section>

      {/* Event access info */}
      <section className="section-pad bg-midnight-2/50">
        <div className="container-edge max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="Access" title="Event Access Information" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 space-y-px border border-line">
              {[
                { label: "On-Sale Date", value: "To Be Announced" },
                { label: "Pricing", value: "To Be Announced" },
                { label: "Venue Access", value: "To Be Confirmed" },
                { label: "Session Structure", value: "Coming Soon" },
                { label: "Accessibility Tickets", value: "Details to Follow" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between px-6 py-4 bg-midnight-2/50">
                  <span className="font-sans text-sm text-muted">{item.label}</span>
                  <span className="font-display font-semibold text-sm uppercase text-gold">{item.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-pad">
        <div className="container-edge max-w-2xl">
          <Reveal>
            <div className="relative overflow-hidden border border-electric/20 bg-gradient-to-r from-midnight-2 to-midnight p-10 md:p-14 text-center">
              <div
                className="absolute inset-0 opacity-30"
                style={{ background: "radial-gradient(ellipse at center, rgba(37,99,255,0.12), transparent 70%)" }}
              />
              <div className="relative">
                <h3 className="font-display font-bold text-3xl md:text-4xl uppercase tracking-tightest text-ink">
                  Get Ticket Updates
                </h3>
                <p className="mt-4 text-muted leading-relaxed">
                  Be the first to know when tickets go on sale. Sign up for championship notifications.
                </p>
                {!submitted ? (
                  <form
                    className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      className="field-input flex-1"
                      aria-label="Email address"
                    />
                    <button type="submit" className="btn-primary">Notify Me</button>
                  </form>
                ) : (
                  <p className="mt-6 text-gold font-display font-semibold uppercase text-sm">
                    Thank you — you'll be notified when tickets are announced.
                  </p>
                )}
                <p className="mt-4 text-xs text-muted-2">Demo form — no data is sent or stored.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-20">
        <div className="container-edge text-center">
          <Reveal>
            <Link to="/contact" className="btn-secondary">Contact Us About Tickets</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
