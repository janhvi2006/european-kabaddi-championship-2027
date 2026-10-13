import { useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { PageHero, SectionHeading, DemoBadge } from "../components/UI";

type TierLevel = "title" | "gold" | "official" | "media";

interface Tier {
  name: string;
  level: TierLevel;
  tagline: string;
  slots: number;
  perks: string[];
}

const tiers: Tier[] = [
  {
    name: "Title Partner",
    level: "title",
    tagline: "The naming partner of the European Kabaddi Championship 2027",
    slots: 1,
    perks: [
      "Prime brand placement on championship mat",
      "Naming rights association",
      "Top-tier broadcast and digital visibility",
      "VIP hospitality and category exclusivity",
    ],
  },
  {
    name: "Gold Partners",
    level: "gold",
    tagline: "Principal commercial partners with premium arena footprint",
    slots: 3,
    perks: [
      "Prominent arena and mat branding",
      "Digital and social media visibility",
      "Hospitality packages",
      "Co-branded content opportunities",
    ],
  },
  {
    name: "Official Partners",
    level: "official",
    tagline: "Trusted suppliers and brand activation partners",
    slots: 4,
    perks: [
      "Arena branding presence",
      "Event programme inclusion",
      "Ticket allocation",
      "Brand activation zones",
    ],
  },
  {
    name: "Media Partners",
    level: "media",
    tagline: "Broadcast, streaming and editorial distribution partners",
    slots: 3,
    perks: [
      "Broadcast and streaming rights",
      "Press accreditation",
      "Content sharing partnerships",
      "Cross-promotional opportunities",
    ],
  },
];

const tierAccent: Record<TierLevel, { border: string; glow: string; badge: string; dot: string; label: string }> = {
  title: {
    border: "border-gold/30",
    glow: "hover:shadow-[0_0_40px_rgba(200,164,93,0.12)]",
    badge: "border-gold/40 text-gold",
    dot: "bg-gold",
    label: "Premium",
  },
  gold: {
    border: "border-gold/20",
    glow: "hover:shadow-[0_0_36px_rgba(200,164,93,0.08)]",
    badge: "border-gold/20 text-gold/80",
    dot: "bg-gold/70",
    label: "Gold",
  },
  official: {
    border: "border-electric/20",
    glow: "hover:shadow-[0_0_36px_rgba(37,99,255,0.10)]",
    badge: "border-electric/30 text-electric",
    dot: "bg-electric",
    label: "Official",
  },
  media: {
    border: "border-line",
    glow: "hover:shadow-[0_0_32px_rgba(37,99,255,0.06)]",
    badge: "border-line text-muted",
    dot: "bg-muted",
    label: "Media",
  },
};

function SponsorSlot({ level }: { level: TierLevel }) {
  const isTitle = level === "title";

  return (
    <div className="group/slot relative flex aspect-[3/2] items-center justify-center overflow-hidden border border-gold/15 bg-midnight/70 transition-all duration-300 hover:border-gold/45 hover:bg-midnight-2/90">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.06] via-transparent to-blue-500/[0.04] opacity-70" />

      <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-gold/50 transition-all duration-300 group-hover/slot:bg-gold group-hover/slot:shadow-[0_0_10px_rgba(200,164,93,0.7)]" />

      <div className="absolute right-3 top-3 text-[8px] font-semibold uppercase tracking-[0.22em] text-muted-2">
        {isTitle ? "Premium" : "Available"}
      </div>

      <div className="relative flex flex-col items-center gap-3 text-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/20 bg-midnight-2/80 transition-all duration-300 group-hover/slot:border-gold/45 group-hover/slot:scale-105">
          <svg
            width="24"
            height="24"
            viewBox="0 0 28 28"
            fill="none"
            className="text-gold/70 transition-opacity duration-300 group-hover/slot:text-gold"
          >
            <rect x="3" y="8" width="22" height="12" rx="1" stroke="currentColor" strokeWidth="1.2" />
            <path d="M9 14h10M9 17h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>

        <div>
          <div className="font-display text-sm font-bold uppercase tracking-[0.18em] text-ink">
            {isTitle ? "Partner Slot" : "Available"}
          </div>

          <div className="mt-1 text-[8px] font-semibold uppercase tracking-[0.22em] text-gold/70">
            Sponsorship Opportunity
          </div>
        </div>
      </div>

      <div className="absolute inset-x-6 bottom-3 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </div>
  );
}

export function Sponsors() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Sponsor the Championship"
        subtitle="Put your brand on the mat. Partner with the European Kabaddi Championship 2027 and reach a passionate, growing European audience."
      />

      {/* Why partner */}
      <section className="section-pad">
        <div className="container-edge">
          <Reveal>
            <SectionHeading eyebrow="Partnership" title="Why Partner With Us" />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "European Reach", desc: "Connect with audiences across the continent through a unified international championship platform." },
              { title: "Growing Sport", desc: "Kabaddi is one of the fastest-growing participation sports in Europe — align your brand with momentum." },
              { title: "Premium Visibility", desc: "On-mat branding, broadcast exposure, digital content and arena activation across both categories." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="group h-full border border-line bg-gradient-to-b from-midnight-2 to-midnight p-7 transition-all duration-300 hover:border-gold/50 hover:-translate-y-1">  
                  <span className="font-display font-bold text-4xl text-gold/30">0{i + 1}</span>
                  <h3 className="mt-4 font-display font-bold text-xl uppercase text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship visibility */}
      <section className="section-pad bg-midnight-2/50">
        <div className="container-edge">
          <Reveal>
            <SectionHeading eyebrow="Exposure" title="Sponsorship Visibility" center className="mx-auto" />
          </Reveal>
          
<div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
  {[
    {
      title: "On-Mat Branding",
      label: "Brand Placement",
      image: "/european-kabaddi-championship-2027/images/sponsors/on-mat.png",
    },
    {
      title: "Arena Visibility",
      label: "Signage & Activation",
      image: "/european-kabaddi-championship-2027/images/sponsors/arena.png",
    },
    {
      title: "Digital & Social",
      label: "Social & Content",
      image: "/european-kabaddi-championship-2027/images/sponsors/digital-social.png",
    },
    {
      title: "Broadcast Exposure",
      label: "Live Coverage",
      image: "/european-kabaddi-championship-2027/images/sponsors/broadcast.png",
    },
  ].map((item, i) => (
    <Reveal key={item.title} delay={i * 80}>
      <div className="group h-full overflow-hidden border border-line bg-midnight-2/70 transition-all duration-300 hover:border-gold/40">
        <div className="h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">
          <h3 className="font-display text-lg font-bold uppercase text-gold">
            {item.title}
          </h3>
          <p className="mt-2 text-xs uppercase tracking-widest2 text-muted">
            {item.label}
          </p>
        </div>
      </div>
    </Reveal>
  ))}
</div>

        </div>
      </section>

      {/* Tiers */}
      <section className="section-pad">
        <div className="container-edge">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <SectionHeading eyebrow="Tiers" title="Partnership Packages" />
              <DemoBadge label="Indicative" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="mb-12 max-w-2xl text-muted leading-relaxed">
              Partnership opportunities are available across four tiers for the European
              Kabaddi Championship 2027. Each package is tailored to deliver meaningful brand
              exposure, on-mat visibility and hospitality access. The slots below are currently
              
              open for partnership.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tiers.map((tier, i) => {
              const accent = tierAccent[tier.level];
              return (
                <Reveal key={tier.name} delay={i * 100}>
                  <div className={`card-surface p-8 h-full border ${accent.border} transition-all duration-400 ${accent.glow}`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display font-bold text-2xl uppercase text-ink">{tier.name}</h3>
                      <span className={`text-[10px] font-semibold uppercase tracking-widest2 border px-2.5 py-1 ${accent.badge}`}>
                        {accent.label}
                      </span>
                    </div>
                    <p className="text-sm text-muted leading-relaxed mb-6">{tier.tagline}</p>
                    <ul className="space-y-3 mb-6">
                      {tier.perks.map((perk) => (
                        <li key={perk} className="flex items-start gap-3 text-sm text-muted">
                          <span className={`w-1.5 h-1.5 rounded-full ${accent.dot} flex-shrink-0 mt-1.5`} />
                          {perk}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-6 border-t border-line">
                      <p className="font-sans text-[10px] uppercase tracking-widest2 text-muted-2 mb-3">
                        {tier.slots === 1 ? "1 Slot Available" : `${tier.slots} Slots Available`}
                      </p>
                      <div className="grid grid-cols-3 gap-3">
                        {Array.from({ length: tier.slots }).map((_, idx) => (
                          <SponsorSlot key={idx} level={tier.level} />
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-midnight-2/50">
        <div className="container-edge max-w-3xl text-center">
          <Reveal>
            <SectionHeading
              eyebrow="Put Your Brand On The Mat"
              title="Become a Partner"
              subtitle="Partner with the European Kabaddi Championship 2027. Contact our partnerships team to discuss tailored sponsorship opportunities across all tiers."
              center
              className="mx-auto"
            />
          </Reveal>
          <Reveal delay={100}>
            <Link to="/contact" className="btn-gold mt-10 inline-flex">
              Become a Partner
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Enquiry form */}
      <section className="section-pad">
        <div className="container-edge max-w-2xl">
          <Reveal>
            <SectionHeading eyebrow="Enquire" title="Partnership Enquiry" center className="mx-auto" />
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
                  <input type="text" placeholder="Company" className="field-input" aria-label="Company" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="email" required placeholder="Email" className="field-input" aria-label="Email" />
                  <input type="tel" placeholder="Phone" className="field-input" aria-label="Phone" />
                </div>
                <select required defaultValue="" className="field-input" aria-label="Partnership interest">
                  <option value="" disabled>Select partnership interest</option>
                  <option>Title Partner</option>
                  <option>Gold Partner</option>
                  <option>Official Partner</option>
                  <option>Media Partner</option>
                  <option>General Enquiry</option>
                </select>
                <textarea required placeholder="Message" rows={4} className="field-input resize-none" aria-label="Message" />
                <button type="submit" className="btn-gold w-full">Submit Enquiry</button>
                <p className="text-center text-xs text-muted-2">This is a demo form — no data is sent or stored.</p>
              </form>
            ) : (
              <div className="mt-10 text-center py-12 card-surface">
                <div className="w-16 h-16 mx-auto rounded-full border-2 border-gold flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M6 14L12 20L22 8" stroke="#C8A45D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold uppercase text-ink">Enquiry Received</h3>
                <p className="mt-3 text-sm text-muted">Thank you for your interest in partnering with the European Kabaddi Championship 2027.</p>
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
