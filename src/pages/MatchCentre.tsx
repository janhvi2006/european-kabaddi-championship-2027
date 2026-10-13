import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { PageHero, SectionHeading, DemoBadge, FlagByClass } from "../components/UI";
import { MATCHES, STANDINGS, type Category } from "../data/content";

export function MatchCentre() {
  const [view, setView] = useState<"upcoming" | "results" | "standings">("upcoming");
  const [cat, setCat] = useState<Category>("men");

  const filtered = MATCHES.filter((m) => m.category === cat && m.status === view);
  const standings = STANDINGS[cat];

  return (
    <>
      <PageHero
        eyebrow="Match Centre"
        title="Match Centre"
        subtitle="Fixtures, results and championship standings. All data shown is sample content for demonstration."
      />

      <section className="section-pad">
        <div className="container-edge">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <SectionHeading eyebrow="Centre" title="All Matches" />
              <DemoBadge label="Demo Data" />
            </div>
          </Reveal>

          {/* Controls */}
          <Reveal delay={100}>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <div className="flex gap-1 border border-line p-1">
                {(["upcoming", "results", "standings"] as const).map((v) => (
                  <button
                    key={v}
                    onClick={() => setView(v)}
                    className={`px-5 py-2 font-sans text-xs font-semibold uppercase tracking-widest2 transition-colors duration-200 ${
                      view === v ? "bg-electric text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {v === "upcoming" ? "Upcoming" : v === "results" ? "Results" : "Standings"}
                  </button>
                ))}
              </div>
              <div className="flex gap-1 border border-line p-1">
                {(["men", "women"] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCat(c)}
                    className={`px-5 py-2 font-sans text-xs font-semibold uppercase tracking-widest2 transition-colors duration-200 ${
                      cat === c ? "bg-champ text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {c === "men" ? "Men's" : "Women's"}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Group structure label */}
          {view !== "standings" && (
            <Reveal delay={150}>
              <p className="mb-6 font-sans text-xs uppercase tracking-widest2 text-muted">
                {cat === "men" ? "Men's" : "Women's"} · Group Stage Structure
              </p>
            </Reveal>
          )}

          {/* Upcoming / Results */}
          {view !== "standings" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((match, i) => (
                <Reveal key={match.id} delay={i * 80}>
                  <div className="card-surface p-6 transition-all duration-400 hover:border-electric/30">
                    <div className="flex items-center justify-between mb-5">
                      <span className="font-sans text-[10px] uppercase tracking-widest2 text-muted">{match.stage}</span>
                      {match.demo && <DemoBadge />}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex-1 text-center">
                        <FlagByClass flagClass={match.homeFlag} className="w-12 h-8 mx-auto mb-3" />
                        <p className="font-display font-bold text-lg uppercase text-ink">{match.home}</p>
                      </div>
                      <div className="px-4">
                        {match.status === "result" ? (
                          <div className="text-center">
                            <p className="font-display font-bold text-3xl text-gold leading-none">{match.homeScore}</p>
                            <p className="font-sans text-xs text-muted my-1">—</p>
                            <p className="font-display font-bold text-3xl text-gold leading-none">{match.awayScore}</p>
                          </div>
                        ) : (
                          <p className="font-display font-bold text-xl text-muted uppercase">VS</p>
                        )}
                      </div>
                      <div className="flex-1 text-center">
                        <FlagByClass flagClass={match.awayFlag} className="w-12 h-8 mx-auto mb-3" />
                        <p className="font-display font-bold text-lg uppercase text-ink">{match.away}</p>
                      </div>
                    </div>
                    <div className="mt-5 pt-4 border-t border-line flex items-center justify-between">
                      <p className="font-sans text-xs uppercase tracking-widest2 text-muted">{match.date}</p>
                      <span className="font-sans text-[10px] uppercase tracking-widest2 text-muted-2">Group {match.group}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
              {filtered.length === 0 && (
                <div className="col-span-full text-center py-16">
                  <p className="text-muted">No {view} for this category yet.</p>
                </div>
              )}
            </div>
          )}

          {/* Standings */}
          {view === "standings" && (
            <Reveal delay={150}>
              <div className="card-surface overflow-hidden">
                <div className="flex items-center justify-between px-6 py-3 border-b border-line">
                  <span className="font-sans text-xs uppercase tracking-widest2 text-muted">
                    {cat === "men" ? "Men's" : "Women's"} · Group {cat === "men" ? "A" : "B"}
                  </span>
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
                        <th className="px-3 py-3 font-sans text-[10px] uppercase tracking-widest2 text-muted">+/-</th>
                        <th className="px-6 py-3 font-sans text-[10px] uppercase tracking-widest2 text-muted text-right">Pts</th>
                      </tr>
                    </thead>
                    <tbody>
                      {standings.map((row, i) => (
                        <tr key={row.team} className="border-b border-line/50 hover:bg-white/[0.02] transition-colors">
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
                          <td className="px-3 py-4 text-center font-sans text-sm text-muted">{row.w - row.l > 0 ? "+" : ""}{row.w - row.l}</td>
                          <td className="px-6 py-4 text-right font-display font-bold text-base text-gold">{row.pts}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </>
  );
}
