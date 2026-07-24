import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <div className="bg-brand-bg text-brand-text min-h-screen font-sans selection:bg-brand-accent selection:text-white transition-colors duration-300">
        <AnimatePresence mode="wait">
          {loading ? (
            <Loader key="loader" onComplete={() => setLoading(false)} />
          ) : (
            <div key="content">
              <Navbar />
              <main>
                <Hero />
                <Portfolio />
                <Process />
                <Contact />
              </main>
              <ScrollToTop />
              <footer className="py-12 border-t border-brand-border text-center text-xs text-brand-muted">
                © {new Date().getFullYear()} M3DO. Minimal & High-Performance. Malindi, Kenya.
              </footer>
            </div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}
