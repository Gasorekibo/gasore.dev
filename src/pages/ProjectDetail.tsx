import { useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { projects } from "../data/projects";

// ─── Lightbox ────────────────────────────────────────────────────────────────
function Lightbox({ src, onClose }: { src: string; onClose: () => void }) {
  console.log("Opening lightbox with src:", src);
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-10"
        style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.img
          src={src}
          alt="Screenshot"
          className="max-w-full max-h-full rounded-sm shadow-2xl object-contain"
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.88, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-white/50 hover:text-white text-2xl transition-colors"
          aria-label="Close"
        >
          ✕
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Reveal wrapper ──────────────────────────────────────────────────────────
function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const idx = projects.findIndex((p) => p.id === id);
  const project = projects[idx];

  if (!project) {
    return (
      <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[var(--muted)] mb-4">Project not found.</p>
          <Link to="/work" className="text-primary text-sm tracking-widest uppercase hover:underline">
            ← Back to Work
          </Link>
        </div>
      </div>
    );
  }

  const prev = projects[idx - 1] ?? null;
  const next = projects[idx + 1] ?? null;
  const stackTags = project.stackTags ?? project.stack.split("·").map((s) => s.trim());

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      {/* Lightbox */}
      {lightboxSrc && <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />}

      {/* ── Hero image ──────────────────────────────────────────────────── */}
      <div className="relative w-full h-[55vh] md:h-[70vh] overflow-hidden">
        <motion.img
          src={project.images[0]}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-black/30 to-transparent" />

        {/* Back button */}
        <motion.div
          className="absolute top-28 left-6 md:left-12 lg:left-16"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button onClick={() => navigate("/work")}
            className="flex items-center gap-2 text-white/70 hover:text-white text-xs tracking-[0.35em] uppercase transition-colors">
            <span>←</span> Back to Work
          </button>
        </motion.div>

        {/* Hero meta chips */}
        <motion.div
          className="absolute bottom-8 left-6 md:left-12 lg:left-16 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-white/60 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
            {project.category}
          </span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-white/60 border border-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
            {project.year}
          </span>
          {project.live && (
            <span className="text-[10px] tracking-[0.4em] uppercase text-white flex items-center gap-1.5 border border-green-400/40 px-3 py-1 rounded-full backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Live
            </span>
          )}
        </motion.div>
      </div>

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div className="px-6 md:px-12 lg:px-16 pb-32">
        <div className="max-w-7xl mx-auto">

          {/* Title */}
          <div className="overflow-hidden mt-10 md:mt-14 mb-4">
            <motion.h1
              className="font-light text-[var(--heading)] leading-none tracking-tighter"
              style={{ fontSize: "clamp(3.5rem, 10vw, 10rem)" }}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {project.title}
            </motion.h1>
          </div>

          {/* ── Two-column body ────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 mt-14 border-t border-[var(--border)] pt-14">

            {/* Left: description + features */}
            <div className="space-y-12">
              <Reveal>
                <p className="text-[10px] tracking-[0.5em] text-[var(--muted)] uppercase mb-4">Overview</p>
                <div className="space-y-5">
                  {project.longDesc.split("\n\n").map((para, i) => (
                    <p key={i} className="text-[var(--body)] text-lg leading-relaxed font-light">
                      {para}
                    </p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="border-t border-[var(--border)] pt-10">
                  <p className="text-[10px] tracking-[0.5em] text-[var(--muted)] uppercase mb-6">Key Features</p>
                  <ul className="space-y-3">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-4 text-[var(--body)] text-base font-light">
                        <span className="text-primary mt-1 shrink-0">—</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            {/* Right: meta sidebar */}
            <Reveal delay={0.15}>
              <div className="space-y-8 lg:border-l border-[var(--border)] lg:pl-10">
                <div>
                  <p className="text-[10px] tracking-[0.5em] text-[var(--muted)] uppercase mb-3">Role</p>
                  <p className="text-[var(--heading)] font-light">{project.role}</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.5em] text-[var(--muted)] uppercase mb-3">Year</p>
                  <p className="text-[var(--heading)] font-light">{project.year}</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.5em] text-[var(--muted)] uppercase mb-3">Category</p>
                  <p className="text-[var(--heading)] font-light">{project.category}</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.5em] text-[var(--muted)] uppercase mb-4">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {stackTags.map((tag) => (
                      <span key={tag}
                        className="text-xs px-3 py-1.5 border border-[var(--border-md)] text-[var(--body)] rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm tracking-[0.3em] uppercase text-primary hover:opacity-70 transition-opacity border-t border-[var(--border)] pt-6">
                    Visit Live Site <span>↗</span>
                  </a>
                )}
              </div>
            </Reveal>
          </div>

          {/* ── Screenshot gallery ─────────────────────────────────────── */}
          <Reveal delay={0.05}>
            <div className="mt-24 border-t border-[var(--border)] pt-14">
              <p className="text-[10px] tracking-[0.5em] text-[var(--muted)] uppercase mb-10">Screenshots</p>

              {/* First image — full width */}
              <div className="relative w-full aspect-video overflow-hidden rounded-sm mb-4 group cursor-zoom-in"
                onClick={() => setLightboxSrc(project.images[0])}>
                <img src={project.images[0]} alt={`${project.title} screenshot 1`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs tracking-widest uppercase border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                    Expand
                  </span>
                </div>
              </div>

              {/* Rest — 2-col grid */}
              {project.images.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.slice(1).map((img, i) => (
                    <div key={i}
                      className="relative aspect-video overflow-hidden rounded-sm group cursor-zoom-in"
                      onClick={() => setLightboxSrc(img)}>
                      <img src={img} alt={`${project.title} screenshot ${i + 2}`}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs tracking-widest uppercase border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                          Expand
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Reveal>

          {/* ── Prev / Next ────────────────────────────────────────────── */}
          <Reveal delay={0.05}>
            <div className="mt-24 border-t border-[var(--border)] pt-10 flex items-center justify-between gap-4">
              {prev ? (
                <button onClick={() => navigate(`/work/${prev.id}`)}
                  className="group flex items-center gap-3 text-[var(--muted)] hover:text-[var(--heading)] transition-colors">
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                  <div className="text-left">
                    <p className="text-[10px] tracking-[0.35em] uppercase mb-0.5">Previous</p>
                    <p className="text-sm font-light">{prev.title}</p>
                  </div>
                </button>
              ) : <div />}

              <Link to="/work"
                className="text-[10px] tracking-[0.5em] uppercase text-[var(--muted)] hover:text-primary transition-colors">
                All Work
              </Link>

              {next ? (
                <button onClick={() => navigate(`/work/${next.id}`)}
                  className="group flex items-center gap-3 text-[var(--muted)] hover:text-[var(--heading)] transition-colors text-right">
                  <div className="text-right">
                    <p className="text-[10px] tracking-[0.35em] uppercase mb-0.5">Next</p>
                    <p className="text-sm font-light">{next.title}</p>
                  </div>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </button>
              ) : <div />}
            </div>
          </Reveal>

        </div>
      </div>
    </div>
  );
}
