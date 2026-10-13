import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { LeadPopup } from "./components/LeadPopup";
import { Home } from "./pages/Home";
import { Championship } from "./pages/Championship";
import { Teams } from "./pages/Teams";
import { MatchCentre } from "./pages/MatchCentre";
import { Venue } from "./pages/Venue";
import { News } from "./pages/News";
import { Media } from "./pages/Media";
import { Sponsors } from "./pages/Sponsors";
import { Tickets } from "./pages/Tickets";
import { Contact } from "./pages/Contact";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div key={location.pathname} className="animate-fade-in">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/championship" element={<Championship />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/match-centre" element={<MatchCentre />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/news" element={<News />} />
        <Route path="/media" element={<Media />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
      <LeadPopup />
    </BrowserRouter>
  );
}
