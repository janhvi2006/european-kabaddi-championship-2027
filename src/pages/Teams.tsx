import { useState, useMemo } from "react";
import { Reveal } from "../components/Reveal";
import { PageHero, SectionHeading, DemoBadge, FlagByClass } from "../components/UI";
import { NATIONS, ATHLETES, type Category } from "../data/content";

export function Teams() {
  const [catFilter, setCatFilter] = useState<Category | "all">("all");
  const [countryFilter, setCountryFilter] = useState<string>("all");
  const [selected, setSelected] = useState<string | null>(null);

  const countries = useMemo(() => ["all", ...NATIONS.map((n) => n.name)], []);

  const teams = useMemo(() => {
    return NATIONS.filter((n) => {
      const catOk = catFilter === "all" || n.category.includes(catFilter);
      const countryOk = countryFilter === "all" || n.name === countryFilter;
      return catOk && countryOk;
    });
  }, [catFilter, countryFilter]);

  const selectedTeam = NATIONS.find((n) => n.name === selected);
  const teamAthletes = selectedTeam
    ? ATHLETES.filter((a) => a.country === selectedTeam.name)
    : [];

  return (
    <>
      <PageHero
        eyebrow="Participating Teams"
        title="The Teams"
        subtitle="National teams from across Europe prepare to take the mat. Sample roster shown below — official teams to be confirmed."
      />

      <section className="section-pad">
        <div className="container-edge">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <SectionHeading eyebrow="Directory" title="Team Directory" />
              <DemoBadge label="Sample Content" />
            </div>
          </Reveal>

          {/* Filters */}
          <Reveal delay={100}>
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <div className="flex gap-1 border border-line p-1">
                {(["all", "men", "women"] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCatFilter(c)}
                    className={`px-5 py-2 font-sans text-xs font-semibold uppercase tracking-widest2 transition-colors duration-200 ${
                      catFilter === c ? "bg-electric text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {c === "all" ? "All" : c === "men" ? "Men's" : "Women's"}
                  </button>
                ))}
              </div>
              <select
                value={countryFilter}
                onChange={(e) => setCountryFilter(e.target.value)}
                className="field-input !w-auto"
                aria-label="Filter by country"
              >
                {countries.map((c) => (
                  <option key={c} value={c}>{c === "all" ? "All Countries" : c}</option>
                ))}
              </select>
              <span className="ml-auto font-sans text-xs text-muted">{teams.length} teams</span>
            </div>
          </Reveal>

          {/* Team grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {teams.map((team, i) => (
              <Reveal key={team.code} delay={i * 60}>
                <button
                  onClick={() => setSelected(team.name)}
                  className="group w-full text-left card-surface overflow-hidden transition-all duration-400 hover:border-gold/30"
                >
                  <div className="h-28 relative overflow-hidden">
                    <img
  src={`/european-kabaddi-championship-2027/images/teams/team-${team.code.toLowerCase() === "ger" ? "germany-new" : team.code.toLowerCase() === "pol" ? "poland" : team.code.toLowerCase() === "ita" ? "italy" : team.code.toLowerCase() === "eng" ? "england" : team.code.toLowerCase() === "ned" ? "netherlands" : team.code.toLowerCase() === "cze" ? "czech-republic" : team.code.toLowerCase() === "hun" ? "hungary" : "germany"}.png`}
  alt="Kabaddi match action"
  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-110"
/>
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-2 to-transparent" />
                    <div className={`absolute top-4 left-4 flag ${team.flagClass} w-12 h-8`} />
                  </div>
                  <div className="p-5">
                    <p className="font-sans text-[10px] uppercase tracking-widest2 text-muted">{team.code}</p>
                    <h3 className="font-display font-bold text-lg uppercase text-ink mt-1">{team.name}</h3>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {team.category.map((c) => (
                        <span key={c} className={`px-2 py-0.5 text-[9px] font-semibold uppercase tracking-widest2 border ${
                          c === "men" ? "text-electric border-electric/30 bg-electric/10" : "text-champ border-champ/30 bg-champ/10"
                        }`}>
                          {c === "men" ? "Men's" : "Women's"}
                        </span>
                      ))}
                    </div>
                    <p className="mt-3 font-sans text-xs text-muted">Group allocation TBA</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          {teams.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted">No teams match your filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Team Profile Modal */}
      {selectedTeam && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-midnight/80 backdrop-blur-sm" onClick={() => setSelected(null)} />
          <div className="relative w-full max-w-2xl bg-midnight-2 border border-line max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-muted hover:text-ink transition-colors z-10"
              aria-label="Close profile"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <div className="relative h-40 overflow-hidden">
              <div className={`absolute inset-0 ${selectedTeam.flagClass} opacity-30`} />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-2 to-transparent" />
              <div className="absolute bottom-5 left-6">
                <div className={`flag ${selectedTeam.flagClass} w-16 h-10 mb-3`} />
                <h2 className="font-display font-bold text-3xl uppercase text-ink">{selectedTeam.name}</h2>
                <p className="font-sans text-xs uppercase tracking-widest2 text-muted mt-1">
                  {selectedTeam.code} · Group {selectedTeam.group}
                </p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <DemoBadge label="Sample Profile" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Category", value: selectedTeam.category.map((c) => c === "men" ? "Men's" : "Women's").join(" + ") },
                  { label: "Group", value: selectedTeam.group },
                  { label: "Status", value: "Sample Entry" },
                ].map((stat) => (
                  <div key={stat.label} className="border border-line p-4">
                    <p className="font-sans text-[10px] uppercase tracking-widest2 text-muted">{stat.label}</p>
                    <p className="font-display font-semibold text-sm uppercase text-ink mt-1">{stat.value}</p>
                  </div>
                ))}
              </div>

              {teamAthletes.length > 0 && (
                <>
                  <p className="eyebrow mb-3">Demo Athletes</p>
                  <div className="space-y-2">
                    {teamAthletes.map((a) => (
                      <div key={a.id} className="flex items-center gap-3 border border-line p-3">
                        <FlagByClass flagClass={a.flagClass} className="w-6 h-4" />
                        <div className="flex-1">
                          <p className="font-display font-semibold text-sm uppercase text-ink">{a.name}</p>
                          <p className="font-sans text-xs text-muted">{a.position} · {a.category === "men" ? "Men's" : "Women's"}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
