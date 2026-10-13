import { Link } from "react-router-dom";

interface FlagProps {
  code: string;
  className?: string;
}

export function Flag({ code, className = "w-8 h-6" }: FlagProps) {
  const map: Record<string, string> = {
    FRA: "flag-fr", GER: "flag-de", POL: "flag-pl", ITA: "flag-it",
    ENG: "flag-en", NED: "flag-nl", CZE: "flag-cz", HUN: "flag-hu",
  };
  return (
    <span
      className={`flag inline-block ${map[code] || "flag-fr"} ${className}`}
      role="img"
      aria-label={`${code} flag`}
    />
  );
}

export function FlagByClass({ flagClass, className = "w-8 h-6" }: { flagClass: string; className?: string }) {
  return (
    <span className={`flag inline-block ${flagClass} ${className}`} role="img" aria-label="flag" />
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, center = false, className = "" }: SectionHeadingProps) {
  return (
    <div className={`${center ? "text-center mx-auto" : ""} max-w-3xl ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold uppercase leading-[0.95] tracking-tightest text-ink">
        {title}
      </h2>
      {subtitle && <p className="mt-5 text-muted text-base sm:text-lg leading-relaxed max-w-xl">{subtitle}</p>}
    </div>
  );
}

interface DemoBadgeProps {
  label?: string;
}

export function DemoBadge({ label = "Demo" }: DemoBadgeProps) {
  return <span className="demo-tag">{label}</span>;
}

interface CTAGroupProps {
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}

export function CTAGroup({ primary, secondary }: CTAGroupProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {primary && (
        <Link to={primary.to} className="btn-primary">
          {primary.label}
        </Link>
      )}
      {secondary && (
        <Link to={secondary.to} className="btn-secondary">
          {secondary.label}
        </Link>
      )}
    </div>
  );
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-2 to-midnight" />
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: "radial-gradient(ellipse at 30% 0%, rgba(37,99,255,0.15), transparent 60%)" }}
      />
      <div className="container-edge relative">
        {eyebrow && <p className="eyebrow mb-4 animate-fade-in">{eyebrow}</p>}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold uppercase leading-[0.9] tracking-tightest text-ink animate-fade-up">
          {title}
        </h1>
        {subtitle && <p className="mt-6 text-muted text-lg max-w-2xl animate-fade-up" style={{ animationDelay: "0.1s" }}>{subtitle}</p>}
      </div>
    </section>
  );
}
