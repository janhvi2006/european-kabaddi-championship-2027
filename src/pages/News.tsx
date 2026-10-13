import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../components/Reveal";
import { PageHero, SectionHeading, DemoBadge } from "../components/UI";
const NEWS_IMAGES = [
  "/images/news/01_News_Road_to_EKC_2027.jpg",
  "/images/news/02_News_European_Stage.jpg",
  "/images/news/03_News_Next_Generation.jpg",
];
import { NEWS } from "../data/content";

const EXTRA_NEWS = [
  {
    id: "n4",
    title: "Köln Ready to Welcome European Kabaddi",
    category: "Host City",
    date: "January 2027",
    excerpt: "Preparations are underway in Köln as the city prepares to host the European Kabaddi Championship.",
image: "/images/news/01_News_Road_to_EKC_2027.jpg",
demo: true,
  },
  {
    id: "n5",
    title: "Sponsorship Opportunities Open for 2027 Championship",
    category: "Partnerships",
    date: "January 2027",
    excerpt: "Brands and organisations invited to explore partnership with the European Kabaddi Championship.",
    image: "/images/news/02_News_European_Stage.jpg",
    demo: true,
  },
  {
    id: "n6",
    title: "Kabaddi's Growth Across Europe Continues",
    category: "Sport",
    date: "December 2026",
    excerpt: "European Kabaddi continues to expand as more nations invest in national team programmes.",
    image: "/images/news/03_News_Next_Generation.jpg",
    demo: true,
  },
];

const ALL_NEWS = [...NEWS, ...EXTRA_NEWS];
const CATEGORIES = ["All", "Championship", "Competition", "Athletes", "Host City", "Partnerships", "Sport"];

export function News() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<typeof ALL_NEWS[0] | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return ALL_NEWS;
    return ALL_NEWS.filter((n) => n.category === filter);
  }, [filter]);

  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <PageHero
        eyebrow="News"
        title="Championship News"
        subtitle="The latest stories from the European Kabaddi Championship. All content shown is for demonstration."
      />

      <section className="section-pad">
        <div className="container-edge">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <SectionHeading eyebrow="Latest" title="Editorial" />
              <DemoBadge label="Demo Content" />
            </div>
          </Reveal>

          {/* Category filters */}
          <Reveal delay={100}>
            <div className="flex flex-wrap gap-2 mb-10">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 font-sans text-xs font-semibold uppercase tracking-widest2 border transition-colors duration-200 ${
                    filter === c ? "border-electric bg-electric/10 text-ink" : "border-line text-muted hover:text-ink hover:border-white/20"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Featured */}
          {featured && (
            <Reveal delay={150}>
              <button
                onClick={() => setSelected(featured)}
                className="group block w-full text-left mb-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 card-surface overflow-hidden transition-all duration-400 hover:border-electric/30">
                  <img
 src={featured.image ?? NEWS_IMAGES[0]}
  alt={featured.title}
  
className="h-64 lg:h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"

/>
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-sans text-[10px] uppercase tracking-widest2 text-electric">Featured</span>
                      <span className="text-muted-2">·</span>
                      <span className="font-sans text-[10px] uppercase tracking-widest2 text-muted">{featured.category}</span>
                      <span className="text-muted-2">·</span>
                      <span className="font-sans text-[10px] uppercase tracking-widest2 text-muted">{featured.date}</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl md:text-3xl uppercase leading-tight text-ink group-hover:text-electric transition-colors">
                      {featured.title}
                    </h3>
                    <p className="mt-4 text-muted leading-relaxed">{featured.excerpt}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-widest2 text-ink/80 group-hover:text-electric transition-colors">
                      Read More
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7H12M12 7L7 2M12 7L7 12" stroke="currentColor" strokeWidth="1.5" />
                      </svg>
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((item, i) => (
              <Reveal key={item.id} delay={i * 80}>
                <button
                  onClick={() => setSelected(item)}
                  className="group block w-full text-left card-surface overflow-hidden transition-all duration-400 hover:border-electric/30"
                >
                  <img
src={item.image ?? (
  item.id === "n1" ? NEWS_IMAGES[0] :
  item.id === "n2" ? NEWS_IMAGES[1] :
  item.id === "n3" ? NEWS_IMAGES[2] :
  item.id === "n4" ? NEWS_IMAGES[0] :
  item.id === "n5" ? NEWS_IMAGES[1] :
  NEWS_IMAGES[2]
)}
  alt={item.title}
  className={`h-44 w-full object-cover ${item.id === "n3" || item.id === "n6" ? "object-[center_25%]" : "object-center"} transition-transform duration-700 group-hover:scale-105`}
/>
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
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Article modal */}
      {selected && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-midnight/80 backdrop-blur-sm" onClick={() => setSelected(null)} />
          <div className="relative w-full max-w-2xl bg-midnight-2 border border-line max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center text-muted hover:text-ink transition-colors z-10"
              aria-label="Close article"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <img
  src={selected.image ?? NEWS_IMAGES[2]}
  alt={selected.title}
  className="h-56 w-full object-cover object-[center_25%]"
/>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-sans text-[10px] uppercase tracking-widest2 text-electric">{selected.category}</span>
                <span className="text-muted-2">·</span>
                <span className="font-sans text-[10px] uppercase tracking-widest2 text-muted">{selected.date}</span>
                <DemoBadge />
              </div>
              <h2 className="font-display font-bold text-3xl uppercase leading-tight text-ink">{selected.title}</h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>{selected.excerpt}</p>
                <p>
                  This is sample editorial content created for demonstration purposes. The full article
                  will be published here once the championship news desk is operational. The article
                  detail route is structured to accept future editorial content without redesigning the page.
                </p>
                <p>
                  Stay connected for official announcements, team news, match previews and in-depth
                  features as the European Kabaddi Championship 2027 approaches.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-line">
                <Link to="/contact" className="btn-secondary">Contact Press Team</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
