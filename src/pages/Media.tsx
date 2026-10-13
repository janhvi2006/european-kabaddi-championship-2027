import { useState } from "react";
import { Reveal } from "../components/Reveal";
import { PageHero, SectionHeading } from "../components/UI";


const VIDEO_CATEGORIES = ["All", "Highlights", "Stories", "Behind the Scenes"];

const VIDEOS = [
  { id: "v1", title: "Match Highlights", category: "Highlights", desc: "Key moments from the championship mat." },
  { id: "v2", title: "Athlete Stories", category: "Stories", desc: "Personal journeys of European Kabaddi athletes." },
  { id: "v3", title: "Behind the Championship", category: "Behind the Scenes", desc: "Inside the organisation of a continental event." },
];

const GALLERY = [
  { id: "g1", src: "/european-kabaddi-championship-2027/images/news/01_News_Road_to_EKC_2027.jpg", caption: "Road to EKC 2027", span: "lg:col-span-2 lg:row-span-2" },
  { id: "g2", src: "/european-kabaddi-championship-2027/images/athletes/01_Lucas_Moreau.jpg", caption: "Lucas Moreau", span: "" },
  { id: "g3", src: "/european-kabaddi-championship-2027/images/athletes/02_Anna_Schmidt.jpg", caption: "Anna Schmidt", span: "" },
  { id: "g4", src: "/european-kabaddi-championship-2027/images/athletes/03_Kamil_Nowak.jpg", caption: "Kamil Nowak", span: "" },
  { id: "g5", src: "/european-kabaddi-championship-2027/images/athletes/04_Sofia_Rossi.jpg", caption: "Sofia Rossi", span: "" },
  { id: "g6", src: "/european-kabaddi-championship-2027/images/news/02_News_European_Stage.jpg", caption: "The European Stage", span: "lg:col-span-4" },
];

export function Media() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? VIDEOS : VIDEOS.filter((v) => v.category === filter);

  return (
    <>
      <PageHero
        eyebrow="Media"
        title="Feel the Game"
        subtitle="Experience match highlights, athlete stories and exclusive behind-the-scenes moments from the European Kabaddi Championship."
      />

      {/* Video Gallery */}
      <section className="section-pad">
        <div className="container-edge">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <SectionHeading eyebrow="Videos" title="Video Gallery" />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-wrap gap-2 mb-10">
              {VIDEO_CATEGORIES.map((c) => (
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((video, i) => (
              <Reveal key={video.id} delay={i * 80}>
                <div className="group card-surface overflow-hidden transition-all duration-400 hover:border-electric/30">
                  <div className="relative">
                   <video
  src={
    video.id === "v1"
      ? "https://raw.githubusercontent.com/janhvi2006/ekc-2027-media/main/Match%20Highlights.mp4"
      : video.id === "v2"
      ? "https://raw.githubusercontent.com/janhvi2006/ekc-2027-media/main/Athlete%20Stories.mp4"
      : "https://raw.githubusercontent.com/janhvi2006/ekc-2027-media/main/Behind%20the%20Championship.mp4"
  }
  className={`h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105 ${video.id === "v2" ? "object-[center_30%]" : "object-center"}`}
  autoPlay
  muted
  loop
  playsInline
/>
                    <div className="absolute inset-0 pointer-events-none" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-sans text-[10px] uppercase tracking-widest2 text-electric">{video.category}</span>

                    </div>
                    <h3 className="font-display font-bold text-lg uppercase text-ink">{video.title}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{video.desc}</p>
                    <p className="mt-3 font-sans text-[10px] uppercase tracking-widest2 text-muted-2">
                      Video link ready for YouTube integration
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-pad bg-midnight-2/50">
        <div className="container-edge">
          <Reveal>
            <div className="mb-8">
              <SectionHeading eyebrow="Photos" title="Championship Moments" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[200px] gap-4">
            {GALLERY.map((photo, i) => (
              <Reveal key={photo.id} delay={i * 70} className={photo.span}>
                <div className={`group relative overflow-hidden card-surface transition-all duration-400 hover:border-electric/30 h-full ${photo.span.includes("row-span-2") ? "min-h-[300px] lg:min-h-0" : "min-h-[200px] lg:min-h-0"}`}>
                  <img
                    src={photo.src}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover scale-110 blur-2xl opacity-40"
                  />
                  <div className="absolute inset-0 bg-midnight-2/60" />
                  <img
  src={photo.src}
  alt={photo.caption}
 className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
/>
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-2/90 via-midnight-2/20 to-transparent transition-opacity duration-500 group-hover:from-midnight-2/95" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="font-sans text-[10px] uppercase tracking-widest2 text-electric">EKC 2027</span>
                    <p className="font-display font-bold text-base uppercase text-ink mt-1">{photo.caption}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
