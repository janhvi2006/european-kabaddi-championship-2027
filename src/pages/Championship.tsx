import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { PageHero, SectionHeading, DemoBadge } from "../components/UI";


export function Championship() {
  return (
    <>
      <PageHero 
        eyebrow="The Championship"
        title="European Kabaddi Championship"
        subtitle="An international championship bringing men's and women's Kabaddi to the European stage. Köln, Germany, 2027."
      />

      {/* Introduction */}
      <section className="section-pad">
        <div className="container-edge grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <SectionHeading eyebrow="Introduction" title="A New Era for European Kabaddi" />
            <p className="mt-6 text-muted leading-relaxed">
              The European Kabaddi Championship represents a milestone moment for the sport in Europe —
              a dedicated international platform where national teams from across the continent converge
              to compete at the highest level.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Held in Köln, Germany, the championship unites men's and women's competition under one
              banner, celebrating athletic excellence, cultural exchange and the growing European
              Kabaddi community.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <img
  src="/european-kabaddi-championship-2027/images/athletes/01_Lucas_Moreau.jpg"
  alt="European Kabaddi Championship athlete"
  className="h-80 lg:h-[440px] w-full object-cover"
 />
          </Reveal>
        </div>
      </section>

      {/* Men's + Women's */}
      <section className="section-pad bg-midnight-2/50">
        <div className="container-edge">
          <Reveal>
            <SectionHeading eyebrow="The Categories" title="Two Competitions, One Stage" center className="mx-auto" />
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Men's Competition", variant: "men" as const, desc: "European men's national teams battle for continental supremacy across group and knockout stages." },
              { title: "Women's Competition", variant: "women" as const, desc: "A landmark championship for women's European Kabaddi, showcasing elite national talent and determination." },
            ].map((cat, i) => (
              <Reveal key={cat.title} delay={i * 120}>
                <div className="group relative overflow-hidden card-surface">
                  <img
  src={cat.variant === "men" ? "/european-kabaddi-championship-2027/images/athletes/01_Lucas_Moreau.jpg" : "/european-kabaddi-championship-2027/images/athletes/04_Sofia_Rossi.jpg"}
  alt={cat.title}
  className="h-56 w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
/>
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-2 to-transparent" />
                  <div className="relative p-8 -mt-20">
                    <h3 className="font-display font-bold text-2xl md:text-3xl uppercase text-ink">{cat.title}</h3>
                    <p className="mt-3 text-sm text-muted leading-relaxed">{cat.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tournament Format */}
      <section className="section-pad">
        <div className="container-edge">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <SectionHeading eyebrow="Structure" title="Tournament Format" />
              <DemoBadge label="Structure TBA" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { phase: "Group Stage", desc: "National teams compete in group-stage fixtures. Specific group composition and format to be confirmed.", tba: "Groups TBA" },
              { phase: "Knockout Stage", desc: "Qualifying teams advance to knockout rounds culminating in the championship final.", tba: "Bracket TBA" },
              { phase: "Final", desc: "The championship final determines the European champion in each category.", tba: "15 June 2027" },
            ].map((item, i) => (
              <Reveal key={item.phase} delay={i * 100}>
                <div className={`card-surface p-7 h-full border-t-2 ${
  i === 0 ? "border-t-electric" : i === 1 ? "border-t-gold" : "border-t-[#E63946]"
}`}>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-bold text-4xl text-white/10">0{i + 1}</span>
                    <span className="text-gold text-xs font-semibold uppercase tracking-widest2">{item.tba}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl uppercase text-ink">{item.phase}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Championship Experience */}
      <section className="section-pad bg-midnight-2/50">
        <div className="container-edge grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <img
  src="/european-kabaddi-championship-2027/images/athletes/01_Lucas_Moreau.jpg"
  alt="Kabaddi athlete in the championship arena"
  className="h-80 lg:h-[400px] w-full object-cover object-center"
/>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeading eyebrow="More Than Sport" title="The Championship Experience" />
            <p className="mt-6 text-muted leading-relaxed">
              Beyond the mat, the European Kabaddi Championship is a celebration of culture, community
              and the spirit of competition. Fans, families and federations come together for an
              unforgettable sporting event.
            </p>
            <ul className="mt-6 space-y-3">
              {["Live championship atmosphere", "Cultural exhibitions and fan zones", "Athlete meet-and-greet opportunities", "International broadcast coverage"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-ink/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Why Köln */}
      <section className="section-pad">
        <div className="container-edge grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <SectionHeading eyebrow="Host City" title="Why Köln" />
            <p className="mt-6 text-muted leading-relaxed">
              Köln is one of Germany's most vibrant and internationally connected cities — a destination
              with a deep sporting culture, world-class infrastructure and a passion for hosting major
              events. Its central European location makes it an ideal gathering point for nations across
              the continent.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              From the iconic Rhine waterfront to its renowned arena facilities, Köln offers the perfect
              backdrop for a championship that blends sport, culture and European unity.
            </p>
            <div className="mt-8">
              <Link to="/venue" className="btn-secondary">Explore Köln</Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Population", value: "1.1M+" },
                { label: "Region", value: "NRW" },
                { label: "Airport", value: "CGN" },
                { label: "Central", value: "Europe" },
              ].map((stat) => (
                <div key={stat.label} className="card-surface p-6">
                  <p className="font-sans text-[10px] uppercase tracking-widest2 text-muted">{stat.label}</p>
                  <p className="font-display font-bold text-2xl text-gold mt-1">{stat.value}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Important Information */}
      <section className="section-pad bg-midnight-2/50">
        <div className="container-edge max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="Details" title="Important Information" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 space-y-px border border-line">
              {[
                { label: "Exact Event Dates", value: "15 June 2027" },
                { label: "Confirmed Venue", value: "To Be Announced" },
                { label: "Match Schedule", value: "Coming Soon" },
                { label: "Ticket Sales", value: "Coming Soon" },
                { label: "Broadcast Partners", value: "To Be Confirmed" },
                { label: "Official Rules & Regulations", value: "To Be Published" },
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
    </>
  );
}
