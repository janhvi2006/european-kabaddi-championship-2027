import { useState } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { SectionHeading, DemoBadge, FlagByClass } from "../components/UI";
import { AbArena, AbAthlete } from "../components/Abstract";
import { NATIONS, STANDINGS, MATCHES, ATHLETES, NEWS, MEDIA_ITEMS, type Category } from "../data/content";

const ATHLETE_IMAGES: string[] = [
  "/european-kabaddi-championship-2027/images/athletes/01_Lucas_Moreau.jpg",
  "/european-kabaddi-championship-2027/images/athletes/02_Anna_Schmidt.jpg",
  "/european-kabaddi-championship-2027/images/athletes/03_Kamil_Nowak.jpg",
  "/european-kabaddi-championship-2027/images/athletes/04_Sofia_Rossi.jpg",
  "/european-kabaddi-championship-2027/images/athletes/05_James_Carter.jpg",
  "/european-kabaddi-championship-2027/images/athletes/06_Lotte_Visser.jpg",
];

const ATHLETE_IMAGE_POSITIONS: string[] = ["center", "center", "center", "center", "center", "center"];

const NEWS_IMAGES: string[] = [
  "/european-kabaddi-championship-2027/images/news/01_News_Road_to_EKC_2027.jpg",
  "/european-kabaddi-championship-2027/images/news/02_News_European_Stage.jpg",
  "/european-kabaddi-championship-2027/images/news/03_News_Next_Generation.jpg",
];

const MEDIA_VIDEO_URLS: string[] = [
  "https://raw.githubusercontent.com/janhvi2006/ekc-2027-media/main/Match%20Highlights.mp4",
  "https://raw.githubusercontent.com/janhvi2006/ekc-2027-media/main/Athlete%20Stories.mp4",
  "https://raw.githubusercontent.com/janhvi2006/ekc-2027-media/main/Behind%20the%20Championship.mp4",
];

export function Home() {
  return (
    <>
      <Hero />
      <EventStatus />
      <BrandStatement />
      <Categories />
      <Nations />
      <MatchCentrePreview />
      <StandingsPreview />
      <Athletes />
      <VenueSection />
      <NewsSection />
      <MediaSection />
      <SponsorsSection />
      <FinalCTA />
    </>
  );
}

/* ── SECTION 1: CINEMATIC HERO ────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Layered cinematic background */}
      <div className="absolute inset-0 bg-midnight" />
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-2/80 via-midnight to-midnight" />
      {/* Animated light sweep */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -inset-y-10 -left-1/2 w-[80%] opacity-30 animate-sweep"
          style={{ background: "linear-gradient(90deg, transparent, rgba(37,99,255,0.15), transparent)" }}
        />
      </div>
      {/* Radial atmosphere */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(37,99,255,0.12), transparent 55%)" }}
      />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 20% 80%, rgba(230,57,70,0.08), transparent 50%)" }}
      />
      {/* Cinematic right-side athlete composition */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Athlete image, anchored to the right */}
        <div
          className="absolute inset-y-0 right-0 w-full md:w-[62%] lg:w-[55%] xl:w-[48%]"
          style={{
            backgroundImage: "url(/european-kabaddi-championship-2027/images/athletes/01_Lucas_Moreau.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "right center",
          }}
        />
        {/* Deep navy/black cinematic base over the image */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[62%] lg:w-[55%] xl:w-[48%] bg-midnight/40" />
        {/* Subtle blue rim light from the right edge */}
        <div
          className="absolute inset-y-0 right-0 w-full md:w-[62%] lg:w-[55%] xl:w-[48%] mix-blend-screen opacity-60"
          style={{ background: "linear-gradient(270deg, rgba(37,99,255,0.22), transparent 45%)" }}
        />
        {/* Warm gold key light grazing the athlete */}
        <div
          className="absolute inset-y-0 right-0 w-full md:w-[62%] lg:w-[55%] xl:w-[48%] mix-blend-overlay opacity-70"
          style={{ background: "radial-gradient(ellipse at 78% 42%, rgba(200,164,93,0.30), transparent 55%)" }}
        />
        {/* Atmospheric haze drifting across the midground */}
        <div
          className="absolute inset-y-0 right-0 w-full md:w-[62%] lg:w-[55%] xl:w-[48%] opacity-50"
          style={{ background: "linear-gradient(180deg, transparent 30%, rgba(8,12,24,0.55) 100%)" }}
        />
        {/* Dark gradient fade toward the left so hero text stays extremely readable */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, #080c18 0%, rgba(8,12,24,0.96) 38%, rgba(8,12,24,0.55) 60%, rgba(8,12,24,0.15) 100%)" }}
        />
      </div>
      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
        }}
      />
      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-midnight to-transparent" />

      <div className="container-edge relative pt-20">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Köln · Germany
          </p>
          <h1 className="font-display font-bold uppercase leading-[0.82] tracking-tightest text-ink">
            <span className="block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl animate-fade-up" style={{ animationDelay: "0.3s" }}>
              European
            </span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl animate-fade-up" style={{ animationDelay: "0.45s" }}>
              Kabaddi
            </span>
            <span className="block text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-gold animate-fade-up" style={{ animationDelay: "0.6s" }}>
              Championship
            </span>
          </h1>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 animate-fade-up" style={{ animationDelay: "0.75s" }}>
            <span className="font-display text-lg sm:text-xl uppercase tracking-widest2 text-ink/90">Men's · Women's</span>
            <span className="w-1 h-1 rounded-full bg-gold" />
            <span className="font-display text-lg sm:text-xl uppercase tracking-widest2 text-ink/90">2027</span>
          </div>

          <div className="mt-4 animate-fade-up" style={{ animationDelay: "0.85s" }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 border border-gold/30 bg-gold/5 text-gold font-sans text-xs font-semibold uppercase tracking-widest2">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse-soft" />
              15 June 2027
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.95s" }}>
            <Link to="/championship" className="btn-primary">
              Explore Championship
            </Link>
            <Link to="/match-centre" className="btn-secondary">
              Match Centre
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-widest2 text-muted">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}

/* ── SECTION 2: EVENT STATUS ──────────────────────────────── */
function EventStatus() {
  const items = [
    { label: "Year", value: "2027" },
    { label: "Host City", value: "Köln, Germany" },
    { label: "Categories", value: "Men's + Women's" },
    { label: "Dates", value: "15 June 2027", highlight: true },
  ];
  return (
    <section className="relative border-y border-line bg-midnight-2">
      <div className="container-edge">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-line">
          {items.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 80}
              className="px-6 py-8 md:py-10 text-center first:border-l-0"
            >
              <p className="font-sans text-[10px] uppercase tracking-widest2 text-muted mb-2">{item.label}</p>
              <p className={`font-display font-bold text-2xl md:text-3xl uppercase ${item.highlight ? "text-gold" : "text-ink"}`}>
                {item.value}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 3: BRAND STATEMENT ───────────────────────────── */
function BrandStatement() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(37,99,255,0.06), transparent 70%)" }}
      />
      <div className="container-edge relative text-center">
        <Reveal>
          <h2 className="font-display font-bold uppercase leading-[0.88] tracking-tightest text-ink text-4xl sm:text-6xl lg:text-7xl">
            <span className="block">One Mat.</span>
            <span className="block">Two Categories.</span>
            <span className="block text-gold">One European Stage.</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 mx-auto max-w-2xl text-muted text-lg leading-relaxed">
            The European Kabaddi Championship brings the intensity of Kabaddi to an international
            European stage, bringing men's and women's competition together through sport, culture
            and competition.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ── SECTION 4: CATEGORIES ────────────────────────────────── */
function Categories() {
  const cats = [
    {
      title: "Men's Championship",
      variant: "men" as const,
      desc: "Europe's finest men's national teams compete for continental glory on the Kabaddi mat.",
      to: "/championship",
      image: "/european-kabaddi-championship-2027/images/athletes/01_Lucas_Moreau.jpg",
    },
    {
      title: "Women's Championship",
      variant: "women" as const,
      desc: "A historic platform for women's European Kabaddi, showcasing elite national talent.",
      to: "/championship",
      image: "/european-kabaddi-championship-2027/images/athletes/04_Sofia_Rossi.jpg",
    },
  ];
  return (
    <section className="section-pad bg-midnight-2/50">
      <div className="container-edge">
        <Reveal>
          <SectionHeading eyebrow="The Competition" title="Two Championships" subtitle="Men's and women's national teams share one European stage." />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cats.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 120}>
              <Link
                to={cat.to}
                className="group relative block overflow-hidden card-surface transition-all duration-500 hover:border-electric/40 h-64 md:h-80"
              >
                {/* Cinematic athlete background */}
            
<img
  src={cat.image}
  alt={`${cat.title} athlete`}
  
className={`absolute inset-0 h-full w-full object-cover ${cat.variant === "women" ? "object-[35%_top]" : "object-[right_top]"} transition-transform duration-700 group-hover:scale-105`}

/>
{/* Deep navy cinematic base */}
<div className="absolute inset-0 bg-midnight/25" />

                {/* Subtle blue rim light from the right */}
                <div
                  className="absolute inset-0 mix-blend-screen opacity-50"
                  style={{ background: "linear-gradient(270deg, rgba(37,99,255,0.20), transparent 50%)" }}
                />
                {/* Warm gold key light grazing the upper-right */}
                <div
                  className="absolute inset-0 mix-blend-overlay opacity-60"
                  style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(200,164,93,0.28), transparent 55%)" }}
                />
                {/* Dark gradient ensuring text readability toward the bottom-left */}
                
<div className="absolute inset-0 bg-gradient-to-t from-midnight-2/80 via-midnight-2/30 to-transparent" />
<div className="absolute inset-0 bg-gradient-to-r from-midnight-2/40 via-midnight-2/10 to-transparent" />
```
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  
<h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tightest text-ink">

                    {cat.title}
                  </h3>
                  
<p className="mt-3 text-sm text-white/85 leading-relaxed max-w-md">{cat.desc}</p>

                  <span className="mt-5 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest2 text-electric transition-all duration-300 group-hover:gap-3">
                    Explore
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 5: PARTICIPATING NATIONS ─────────────────────── */
function Nations() {
  return (
    <section className="section-pad overflow-hidden">
      <div className="container-edge">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <SectionHeading eyebrow="Participating Nations" title="The Nations" />
            <div className="flex items-center gap-2">
              <DemoBadge label="Sample · Subject to confirmation" />
            </div>
          </div>
        </Reveal>
      </div>
      <Reveal delay={100} className="mt-10">
        <div className="flex gap-5 overflow-x-auto hide-scrollbar px-5 sm:px-8 lg:px-12 pb-4">
          {NATIONS.map((nation) => (
            <div
              key={nation.code}
              className="group flex-shrink-0 w-64 card-surface overflow-hidden transition-all duration-400 hover:border-gold/30"
            >
              <div className="h-32 relative overflow-hidden">
                <div className={`absolute inset-0 ${nation.flagClass} opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-2 to-transparent" />
                <div className={`absolute top-4 left-4 flag ${nation.flagClass} w-12 h-8 shadow-lg`} />
              </div>
              <div className="p-5">
                <p className="font-sans text-[10px] uppercase tracking-widest2 text-muted">{nation.code}</p>
                <h3 className="font-display font-bold text-xl uppercase text-ink mt-1">{nation.name}</h3>
                <p className="font-sans text-xs text-muted mt-1">Group {nation.group} · Men's & Women's</p>
                <Link
                  to="/teams"
                  className="mt-4 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest2 text-ink/80 hover:text-electric transition-colors"
                >
                  Team Profile
                  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ── SECTION 6: MATCH CENTRE PREVIEW ──────────────────────── */
function MatchCentrePreview() {
  const [tab, setTab] = useState<"upcoming" | "result">("upcoming");
  const filtered = MATCHES.filter((m) => m.status === tab).slice(0, 3);

  return (
    <section className="section-pad bg-midnight-2/50">
      <div className="container-edge">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <SectionHeading eyebrow="Match Centre" title="Match Centre" />
            <div className="flex gap-1 border border-line p-1">
              {(["upcoming", "result"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`px-5 py-2 font-sans text-xs font-semibold uppercase tracking-widest2 transition-colors duration-200 ${
                    tab === t ? "bg-electric text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {t === "upcoming" ? "Upcoming" : "Results"}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {filtered.map((match, i) => (
            <Reveal key={match.id} delay={i * 100}>
              <div className="card-surface p-6 transition-all duration-400 hover:border-electric/30">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-sans text-[10px] uppercase tracking-widest2 text-muted">{match.stage}</span>
                  {match.demo && <DemoBadge />}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex-1 text-center">
                    <FlagByClass flagClass={match.homeFlag} className="w-10 h-7 mx-auto mb-2" />
                    <p className="font-display font-bold text-base uppercase text-ink">{match.home}</p>
                  </div>
                  <div className="px-4">
                    {match.status === "result" ? (
                      <div className="text-center">
                        <p className="font-display font-bold text-2xl text-gold">{match.homeScore} - {match.awayScore}</p>
                      </div>
                    ) : (
                      <p className="font-display font-bold text-lg text-muted uppercase">VS</p>
                    )}
                  </div>
                  <div className="flex-1 text-center">
                    <FlagByClass flagClass={match.awayFlag} className="w-10 h-7 mx-auto mb-2" />
                    <p className="font-display font-bold text-base uppercase text-ink">{match.away}</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-line text-center">
                  <p className="font-sans text-xs uppercase tracking-widest2 text-muted">{match.date}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-10 text-center">
          <Link to="/match-centre" className="btn-primary">View Match Centre</Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ── SECTION 7: STANDINGS PREVIEW ─────────────────────────── */
function StandingsPreview() {
  const [cat, setCat] = useState<Category>("men");
  const rows = STANDINGS[cat];

  return (
    <section className="section-pad">
      <div className="container-edge">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <SectionHeading eyebrow="Competition" title="Championship Standings" />
            <div className="flex gap-1 border border-line p-1">
              {(["men", "women"] as const).map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-5 py-2 font-sans text-xs font-semibold uppercase tracking-widest2 transition-colors duration-200 ${
                    cat === c ? "bg-electric text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {c === "men" ? "Men's" : "Women's"}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div className="card-surface overflow-hidden">
            <div className="flex items-center justify-between px-6 py-3 border-b border-line">
              <span className="font-sans text-xs uppercase tracking-widest2 text-muted">Group {cat === "men" ? "A" : "B"} · {cat === "men" ? "Men's" : "Women's"}</span>
              <DemoBadge label="Demo Data" />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-line">
                    <th className="text-left px-6 py-3 font-sans text-[10px] uppercase tracking-widest2 text-muted">Team</th>
                    <th className="px-3 py-3 font-sans text-[10px] uppercase tracking-widest2 text-muted">P</th>
                    <th className="px-3 py-3 font-sans text-[10px] uppercase tracking-widest2 text-muted">W</th>
                    <th className="px-3 py-3 font-sans text-[10px] uppercase tracking-widest2 text-muted">L</th>
                    <th className="px-6 py-3 font-sans text-[10px] uppercase tracking-widest2 text-muted text-right">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={row.team} className="border-b border-line/50 transition-colors hover:bg-white/[0.02]">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="font-sans text-xs text-muted-2 w-4">{i + 1}</span>
                          <FlagByClass flagClass={row.flagClass} className="w-7 h-5" />
                          <span className="font-display font-semibold text-sm uppercase text-ink">{row.team}</span>
                        </div>
                      </td>
                      <td className="px-3 py-4 text-center font-sans text-sm text-muted">{row.p}</td>
                      <td className="px-3 py-4 text-center font-sans text-sm text-ink">{row.w}</td>
                      <td className="px-3 py-4 text-center font-sans text-sm text-muted">{row.l}</td>
                      <td className="px-6 py-4 text-right font-display font-bold text-base text-gold">{row.pts}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── SECTION 8: ATHLETES ──────────────────────────────────── */
function Athletes() {
  return (
    <section className="section-pad bg-midnight-2/50">
      <div className="container-edge">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <SectionHeading eyebrow="The Athletes" title="Meet the Athletes" />
            <DemoBadge label="Demo Profiles" />
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ATHLETES.map((athlete, i) => (
            <Reveal key={athlete.id} delay={i * 80}>
              <div className="group card-surface overflow-hidden transition-all duration-400 hover:border-gold/30">
                {ATHLETE_IMAGES[i] ? (
                  <div className="relative h-72 overflow-hidden transition-transform duration-700 group-hover:scale-105">
                    <img
                      src={ATHLETE_IMAGES[i]}
                      alt={`${athlete.name} in action`}
                      className="h-full w-full object-cover"
                      style={{ objectPosition: ATHLETE_IMAGE_POSITIONS[i] }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="font-display font-bold text-[120px] leading-none text-white/[0.04] select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>
                ) : (
                  <AbAthlete variant={athlete.category} seed={i} className="h-72 transition-transform duration-700 group-hover:scale-105" />
                )}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest2 border ${
                      athlete.category === "men" ? "text-electric border-electric/30 bg-electric/10" : "text-champ border-champ/30 bg-champ/10"
                    }`}>
                      {athlete.category === "men" ? "Men's" : "Women's"}
                    </span>
                    <DemoBadge />
                  </div>
                  <h3 className="font-display font-bold text-xl uppercase text-ink">{athlete.name}</h3>
                  <div className="mt-2 flex items-center gap-2">
                    <FlagByClass flagClass={athlete.flagClass} className="w-6 h-4" />
                    <span className="font-sans text-xs text-muted">{athlete.country}</span>
                    <span className="text-muted-2">·</span>
                    <span className="font-sans text-xs text-muted">{athlete.position}</span>
                  </div>
                  <Link
                    to="/teams"
                    className="mt-4 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest2 text-ink/80 hover:text-electric transition-colors"
                  >
                    View Profile
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 9: VENUE ─────────────────────────────────────── */
function VenueSection() {
  return (
    <section className="section-pad">
      <div className="container-edge">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <SectionHeading eyebrow="The Venue" title="The Stage Awaits" />
            <div className="mt-8 space-y-4">
              <div className="flex items-baseline gap-4">
                <span className="font-sans text-xs uppercase tracking-widest2 text-muted w-24 flex-shrink-0">Host City</span>
                <span className="font-display font-bold text-2xl uppercase text-ink">Köln, Germany</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="font-sans text-xs uppercase tracking-widest2 text-muted w-24 flex-shrink-0">Venue</span>
                <span className="font-display font-bold text-2xl uppercase text-gold">To Be Announced</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="font-sans text-xs uppercase tracking-widest2 text-muted w-24 flex-shrink-0">Dates</span>
                <span className="font-display font-bold text-2xl uppercase text-gold">15 June 2027</span>
              </div>
            </div>
            <p className="mt-6 text-muted leading-relaxed max-w-md">
              Köln — a city of culture, energy and international sporting heritage — prepares to host
              the European Kabaddi Championship.
            </p>
            <div className="mt-8">
              <Link to="/venue" className="btn-primary">Venue Information</Link>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <AbArena className="h-80 lg:h-[480px]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 10: NEWS ─────────────────────────────────────── */
function NewsSection() {
  return (
    <section className="section-pad bg-midnight-2/50">
      <div className="container-edge">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <SectionHeading eyebrow="News" title="Latest from the Championship" />
            <DemoBadge label="Demo Content" />
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS.map((item, i) => (
            <Reveal key={item.id} delay={i * 100}>
              <Link to="/news" className="group block card-surface overflow-hidden transition-all duration-400 hover:border-electric/30">
                <div className="relative h-48 overflow-hidden transition-transform duration-700 group-hover:scale-105">
                  <img
                    src={NEWS_IMAGES[i]}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-sans text-[10px] uppercase tracking-widest2 text-electric">{item.category}</span>
                    <span className="text-muted-2">·</span>
                    <span className="font-sans text-[10px] uppercase tracking-widest2 text-muted">{item.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg uppercase leading-tight text-ink group-hover:text-electric transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{item.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest2 text-ink/80 group-hover:text-electric transition-colors">
                    Read More
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 11: MEDIA ────────────────────────────────────── */
function MediaSection() {
  return (
    <section className="section-pad">
      <div className="container-edge">
        <Reveal>
          <SectionHeading eyebrow="Media" title="Feel the Game" center />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {MEDIA_ITEMS.map((item, i) => (
            <Reveal key={item.id} delay={i * 100}>
              <div className="group relative overflow-hidden card-surface transition-all duration-400 hover:border-electric/30">
                <video
                  src={MEDIA_VIDEO_URLS[i]}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-2 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-xl uppercase text-ink">{item.title}</h3>
                  </div>
                  <p className="mt-1 font-sans text-[10px] uppercase tracking-widest2 text-muted">{item.category}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} className="mt-10 text-center">
          <Link to="/media" className="btn-secondary">View All Media</Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ── SECTION 12: SPONSORS ─────────────────────────────────── */
function SponsorsSection() {
  const tiers = [
    { name: "Title Partner", count: 1, accent: "text-gold border-gold/30" },
    { name: "Gold Partners", count: 3, accent: "text-gold border-gold/20" },
    { name: "Official Partners", count: 4, accent: "text-ink border-line" },
    { name: "Media Partners", count: 3, accent: "text-muted border-line" },
  ];
  return (
    <section className="section-pad bg-midnight-2/50">
      <div className="container-edge">
        <Reveal>
          <SectionHeading eyebrow="Partnerships" title="Powering the Championship" center />
        </Reveal>
        <div className="mt-12 space-y-8">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 80}>
              <div>
                <p className={`eyebrow mb-4 ${tier.accent.split(" ")[0]}`}>{tier.name}</p>
                <div className={`grid gap-4 ${tier.count === 1 ? "grid-cols-1" : tier.count === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2 sm:grid-cols-4"}`}>
                  {Array.from({ length: tier.count }).map((_, j) => (
                    <div
                      key={j}
                      className={`h-24 flex items-center justify-center border ${tier.accent} bg-white/[0.02] transition-colors hover:bg-white/[0.04]`}
                    >
                      <span className="font-display font-bold text-lg uppercase tracking-widest2 text-muted-2">Partner</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-16">
          <div className="relative overflow-hidden border border-gold/20 bg-gradient-to-r from-midnight-2 to-midnight p-10 md:p-16 text-center">
            <div
              className="absolute inset-0 opacity-30"
              style={{ background: "radial-gradient(ellipse at center, rgba(200,164,93,0.12), transparent 70%)" }}
            />
            <div className="relative">
              <h3 className="font-display font-bold text-3xl md:text-5xl uppercase tracking-tightest text-ink leading-[0.95]">
                Put Your Brand<br /><span className="text-gold">On the Mat.</span>
              </h3>
              <Link to="/sponsors" className="btn-gold mt-8">Become a Partner</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── SECTION 13: FINAL CTA ────────────────────────────────── */
function FinalCTA() {
  return (
    <section className="relative section-pad overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight to-midnight-2" />
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(37,99,255,0.12), transparent 60%)" }}
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="w-[500px] h-[500px] max-w-[90vw] rounded-full border border-gold/20" />
      </div>
      <div className="container-edge relative text-center">
        <Reveal>
          <h2 className="font-display font-bold uppercase leading-[0.88] tracking-tightest text-ink text-4xl sm:text-6xl lg:text-7xl">
            <span className="block">The Next Chapter</span>
            <span className="block">of Kabaddi</span>
            <span className="block text-gold">Starts Here.</span>
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-6 text-muted text-lg">
            European Kabaddi Championship 2027 · Köln, Germany · Men's + Women's
          </p>
        </Reveal>
        <Reveal delay={250}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/championship" className="btn-primary">Explore Championship</Link>
            <Link to="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
