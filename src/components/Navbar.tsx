import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../data/content";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-midnight/95 backdrop-blur-md border-b border-line" : "bg-transparent"
        }`}
      >
        <nav className="container-edge flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3 group" aria-label="European Kabaddi Championship home">
            <ChampionshipMark className="w-9 h-9 transition-transform duration-300 group-hover:scale-110" />
            <div className="hidden sm:block leading-none">
              <p className="font-display font-bold text-sm uppercase tracking-widest2 text-ink">EKC 2027</p>
              <p className="font-sans text-[10px] uppercase tracking-widest2 text-muted mt-0.5">Köln · Germany</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.filter((l) => l.path !== "/").slice(0, 7).map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-3.5 py-2 font-sans text-[13px] font-medium uppercase tracking-widest2 transition-colors duration-200 ${
                      isActive ? "text-gold" : "text-ink/80 hover:text-ink"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/tickets" className="btn-primary !px-5 !py-2.5 !text-xs">
              Tickets
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-ink transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="absolute inset-0 bg-midnight/98 backdrop-blur-lg" onClick={() => setMenuOpen(false)} />
        <div className="relative h-full flex flex-col justify-center container-edge pt-16">
          <ul className="space-y-2">
            {NAV_LINKS.map((link, i) => (
              <li
                key={link.path}
                className={`transition-all duration-500 ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
                style={{ transitionDelay: `${menuOpen ? i * 50 : 0}ms` }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block font-display font-bold text-3xl uppercase tracking-tightest transition-colors ${
                      isActive ? "text-gold" : "text-ink hover:text-electric"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-10 pt-8 border-t border-line">
            <p className="font-sans text-xs uppercase tracking-widest2 text-muted">European Kabaddi Championship</p>
            <p className="font-display text-lg text-ink mt-1">2027 · Köln · Germany</p>
          </div>
        </div>
      </div>
    </>
  );
}

export function ChampionshipMark({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path d="M32 4 L56 20 L48 50 L32 60 L16 50 L8 20 Z" stroke="#C8A45D" strokeWidth="1.5" />
      <path d="M32 14 L46 24 L41 44 L32 50 L23 44 L18 24 Z" fill="#2563FF" fillOpacity="0.15" stroke="#2563FF" strokeWidth="1" />
      <circle cx="32" cy="32" r="5" fill="#E63946" />
      <path d="M32 20 V44 M20 32 H44" stroke="#F5F7FA" strokeOpacity="0.3" strokeWidth="0.5" />
    </svg>
  );
}
