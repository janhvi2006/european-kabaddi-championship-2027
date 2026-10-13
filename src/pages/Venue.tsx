import { Reveal } from "../components/Reveal";
import { PageHero, SectionHeading } from "../components/UI";

export function Venue() {
  return (
    <>
      <PageHero
        eyebrow="The Venue"
        title="Köln, Germany"
        subtitle="The host city for the European Kabaddi Championship 2027. The championship takes place on 15 June 2027. Venue to be announced."
      />

      {/* City intro */}
      <section className="section-pad">
        <div className="container-edge grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
  <SectionHeading eyebrow="Host City" title="Welcome to Köln" />
  <p className="mt-6 text-muted leading-relaxed">
    Köln (Cologne) is one of Germany's oldest and most vibrant cities, sitting on
    the banks of the Rhine. Known for its soaring cathedral, welcoming atmosphere
    and deep sporting tradition, Köln is a city that brings people together.
  </p>
  <p className="mt-4 text-muted leading-relaxed">
    With excellent international transport links, world-class accommodation and a
    passion for major events, Köln is an ideal European host for the championship.
  </p>
</Reveal>

<div className="group relative overflow-hidden border border-line h-80 lg:h-[440px]">
  <img
    src="/images/news/cologne-rhine.jpg"
    alt="European Kabaddi Championship arena"
    className="block w-full h-full object-cover"
  />
  
<div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-midnight-2/10 to-transparent" />
<div className="absolute inset-0 bg-transparent" />

  <div className="absolute bottom-0 left-0 right-0 p-8">
    <span className="font-sans text-[10px] uppercase tracking-widest2 text-electric">
      EKC 2027
    </span>
    <p className="font-display font-bold text-2xl uppercase text-ink mt-2 leading-tight">
      Köln, Germany
    </p>
    <p className="font-sans text-sm text-muted mt-1">
      15 June 2027 — Venue to be announced
    </p>
  </div>
</div>
        </div>
      </section>

      {/* Venue info */}
      <section className="section-pad bg-midnight-2/50">
        <div className="container-edge max-w-3xl">
          <Reveal>
            <div className="mb-8">
              <SectionHeading eyebrow="Arena" title="Venue Information" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-px border border-line">
              {[
                { label: "Championship Venue", value: "To Be Announced" },
                { label: "Capacity", value: "To Be Confirmed" },
                { label: "Address", value: "Köln, Germany" },
                { label: "Accessibility", value: "Full details to follow" },
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

      {/* Travel */}
      <section className="section-pad">
        <div className="container-edge">
          <Reveal>
            <SectionHeading eyebrow="Getting There" title="Travel Information" center className="mx-auto" />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "plane", title: "By Air", desc: "Köln Bonn Airport (CGN) connects the city to major European hubs. Düsseldorf Airport (DUS) is also within easy reach." },
              { icon: "train", title: "By Rail", desc: "Köln Hauptbahnhof is a major European rail hub with high-speed ICE and international connections." },
              { icon: "road", title: "By Road", desc: "Köln sits at the crossroads of several major autobahns, with excellent road access from across Europe." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="card-surface p-7 h-full">
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-5">
                    <TravelIcon name={item.icon} />
                  </div>
                  <h3 className="font-display font-bold text-xl uppercase text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation */}
      <section className="section-pad bg-midnight-2/50">
        <div className="container-edge">
          <Reveal>
            <SectionHeading eyebrow="Stay" title="Accommodation" />
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 text-muted leading-relaxed max-w-2xl">
              Köln offers a wide range of accommodation, from international luxury hotels to
              budget-friendly options. Official championship hotel partners and fan accommodation
              packages will be announced closer to the event.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
  {
    tier: "Premium",
    desc: "International 5-star hotels in the city centre and along the Rhine.",
    image: "/images/tickets/vip-hospitality.png",
  },
  {
    tier: "Standard",
    desc: "Comfortable mid-range hotels with easy access to the venue.",
    image: "/images/tickets/premium.png",
  },
  {
    tier: "Budget",
    desc: "Hostels and budget hotels for travelling fans and teams.",
    image: "/images/tickets/standard.png",
  },
].map((item, i) => (
              <Reveal key={item.tier} delay={i * 100}>
  <div className="card-surface overflow-hidden h-full">
    <img
      src={item.image}
      alt={`${item.tier} accommodation illustration`}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="font-display font-bold text-lg uppercase text-gold">{item.tier}</h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
      <p className="mt-4 font-sans text-[10px] uppercase tracking-widest2 text-muted-2">Booking partners TBA</p>
    </div>
  </div>
</Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Event info */}
      <section className="section-pad">
        <div className="container-edge max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="On the Day" title="Event Information" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 space-y-px border border-line">
              {[
                { label: "Gates Open", value: "To Be Announced" },
                { label: "Match Schedule", value: "Coming Soon" },
                { label: "Fan Zone", value: "Details to Follow" },
                { label: "Food & Beverage", value: "Details to Follow" },
                { label: "Merchandise", value: "Details to Follow" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between px-6 py-4 bg-midnight-2/30">
                  <span className="font-sans text-sm text-muted">{item.label}</span>
                  <span className="font-display font-semibold text-sm uppercase text-gold">{item.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function TravelIcon({ name }: { name: string }) {
  const common = { stroke: "#C8A45D", strokeWidth: 1.5, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "plane")
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" {...common}>
        <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5z" />
      </svg>
    );
  if (name === "train")
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" {...common}>
        <rect x="5" y="3" width="14" height="14" rx="2" />
        <path d="M5 11h14M8 15h.01M16 15h.01M7 17l-2 4M17 17l2 4" />
      </svg>
    );
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" {...common}>
      <path d="M5 17h14M5 17a2 2 0 100-4 2 2 0 000 4zM19 17a2 2 0 100-4 2 2 0 000 4zM5 13l3-6h8l3 6" />
    </svg>
  );
}
