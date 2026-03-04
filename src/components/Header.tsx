// src/components/Header.tsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
];

const overlayVariants = {
  closed: { clipPath: "inset(0 0 100% 0)", transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  open:   { clipPath: "inset(0 0 0% 0)",   transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const listVariants = {
  closed: {},
  open:   { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
};

const itemVariants = {
  closed: { y: 60, opacity: 0 },
  open:   { y: 0,  opacity: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn = {
  closed: { opacity: 0, y: 10 },
  open:   { opacity: 1, y: 0,  transition: { duration: 0.4, delay: 0.45 } },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggle } = useTheme();

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[9990] backdrop-blur-md border-b border-[var(--border)]"
        style={{ backgroundColor: `rgba(var(--bg-rgb), 0.85)` }}
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 py-6 flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-xl font-light tracking-[0.2em] text-primary hover:opacity-60 transition-opacity duration-300 uppercase"
          >
            M.G
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className={`text-xs tracking-[0.35em] uppercase transition-colors duration-300 ${
                    pathname === to || (to === "/work" && pathname.startsWith("/work"))
                      ? "text-primary"
                      : "text-[var(--muted)] hover:text-[var(--heading)]"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="w-px h-4 bg-[var(--border-md)]" />

            {/* Availability dot */}
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] tracking-[0.35em] text-[var(--muted)] uppercase">
                Available
              </span>
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-[var(--border-md)] text-[var(--muted)] hover:text-primary hover:border-primary transition-all duration-300"
            >
              {theme === "dark" ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com/in/gasoremugwaneza" target="_blank" rel="noopener noreferrer"
                className="text-[var(--muted)] hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                className="text-[var(--muted)] hover:text-primary transition-colors duration-300" aria-label="GitHub">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Mobile right — hamburger + theme */}
          <div className="flex md:hidden items-center gap-4">
            <button onClick={toggle} aria-label="Toggle theme"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-[var(--border-md)] text-[var(--muted)]">
              {theme === "dark" ? (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            {/* Hamburger — animated to × */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-6 h-4 focus:outline-none flex flex-col justify-between"
              aria-label="Toggle menu"
            >
              <span className={`block w-full h-px bg-[var(--heading)] transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block w-full h-px bg-[var(--heading)] transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block w-full h-px bg-[var(--heading)] transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile full-screen overlay ─────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[9985] flex flex-col md:hidden overflow-hidden"
            style={{ backgroundColor: `rgba(var(--bg-rgb), 0.98)` }}
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Top bar — logo + close button */}
            <div className="flex justify-between items-center px-6 py-6 border-b border-[var(--border)]">
              <span className="text-xl font-light tracking-[0.2em] text-primary uppercase">M.G</span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-[var(--border-md)] text-[var(--muted)] hover:text-primary hover:border-primary transition-all duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="1" y1="1" x2="13" y2="13" />
                  <line x1="13" y1="1" x2="1" y2="13" />
                </svg>
              </button>
            </div>

            {/* Nav links — staggered slide-up */}
            <motion.nav
              className="flex flex-col flex-1 justify-center px-8"
              variants={listVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {navLinks.map(({ to, label }, i) => {
                const isActive = pathname === to || (to === "/work" && pathname.startsWith("/work"));
                return (
                  <motion.div key={to} variants={itemVariants} className="overflow-hidden">
                    <Link
                      to={to}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-baseline gap-5 py-5 border-b border-[var(--border)] w-full"
                    >
                      {/* Index number */}
                      <span className="text-[10px] tracking-[0.4em] text-[var(--muted)] w-6 shrink-0 mt-1">
                        0{i + 1}
                      </span>

                      {/* Label */}
                      <span
                        className={`font-light tracking-tighter leading-none transition-colors duration-300 group-hover:text-primary ${
                          isActive ? "text-primary" : "text-[var(--heading)]"
                        }`}
                        style={{ fontSize: "clamp(2.8rem, 14vw, 5rem)" }}
                      >
                        {label}
                      </span>

                      {/* Arrow — slides in on hover */}
                      <span className={`ml-auto text-2xl transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 ${isActive ? "opacity-100 text-primary" : "text-[var(--muted)]"}`}>
                        ↗
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.nav>

            {/* Bottom bar — socials + availability */}
            <motion.div
              variants={fadeIn}
              initial="closed"
              animate="open"
              exit="closed"
              className="px-8 py-8 border-t border-[var(--border)] flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] tracking-[0.4em] text-[var(--muted)] uppercase">Available for work</span>
              </div>

              <div className="flex items-center gap-5">
                <a href="https://linkedin.com/in/gasoremugwaneza" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-primary transition-colors" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--muted)] hover:text-primary transition-colors" aria-label="GitHub">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
