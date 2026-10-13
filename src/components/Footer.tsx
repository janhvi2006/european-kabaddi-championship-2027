import { Link } from "react-router-dom";
import { NAV_LINKS } from "../data/content";
import { ChampionshipMark } from "./Navbar";

export function Footer() {
  return (
    <footer className="relative bg-midnight-2 border-t border-line overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(37,99,255,0.15), transparent 60%)" }}
      />
      <div className="container-edge relative py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <ChampionshipMark className="w-12 h-12" />
              <div>
                <p className="font-display font-bold text-lg uppercase tracking-widest2 text-ink">
                  European Kabaddi
                </p>
                <p className="font-display font-bold text-lg uppercase tracking-widest2 text-gold">
                  Championship
                </p>
              </div>
            </Link>
            <p className="font-sans text-sm text-muted leading-relaxed max-w-sm">
              The premier international Kabaddi championship in Europe. Men's and women's
              competition united on one European stage.
            </p>
            <div className="mt-6 flex gap-3">
              {["Instagram", "YouTube", "Facebook", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 flex items-center justify-center border border-line text-muted hover:border-electric hover:text-ink transition-colors duration-200"
                  aria-label={s}
                >
                  <span className="text-[10px] font-semibold uppercase">{s.slice(0, 2)}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-4">
            <p className="eyebrow mb-5">Explore</p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {NAV_LINKS.filter((l) => l.path !== "/").map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-sans text-sm text-muted hover:text-ink transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="md:col-span-3">
            <p className="eyebrow mb-5">Championship</p>
            <div className="space-y-2">
              <p className="font-display text-2xl text-ink">2027</p>
              <p className="font-sans text-sm text-muted">Köln, Germany</p>
              <p className="font-sans text-sm text-muted">Men's + Women's</p>
              <p className="font-sans text-sm text-gold mt-3">15 June 2027</p>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-muted-2">
            © 2027 European Kabaddi Championship. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="font-sans text-xs uppercase tracking-widest2 text-muted hover:text-ink transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="font-sans text-xs uppercase tracking-widest2 text-muted hover:text-ink transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
