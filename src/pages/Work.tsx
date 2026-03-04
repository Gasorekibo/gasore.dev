import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function Work() {
  const [activeIdx, setActiveIdx] = useState(0);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[var(--bg)] px-6 md:px-12 lg:px-16 pt-40 pb-32">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div className="mb-16 md:mb-20 flex items-end justify-between"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <div>
            <p className="text-[10px] tracking-[0.6em] text-[var(--muted)] uppercase mb-3">Selected Work</p>
            <h1 className="font-light text-[var(--heading)] leading-none tracking-tighter"
              style={{ fontSize: "clamp(4rem, 14vw, 12rem)" }}>
              WORK<span className="text-primary">.</span>
            </h1>
          </div>
          <span className="text-[var(--muted)] text-sm font-mono hidden md:block pb-2">
            ({String(projects.length).padStart(2, "0")})
          </span>
        </motion.div>

        {/* List + sticky preview */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-0 lg:gap-20 items-start">

          {/* Project list */}
          <div>
            {projects.map((project, i) => (
              <motion.div key={project.id}
                initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}>
                <div
                  onMouseEnter={() => setActiveIdx(i)}
                  onClick={() => setActiveIdx(i === activeIdx ? activeIdx : i)}
                  className={`group border-t py-6 md:py-8 transition-colors duration-300 ${
                    activeIdx === i
                      ? "border-primary/40"
                      : "border-[var(--border)] hover:border-[var(--border-md)]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-start gap-5 md:gap-7 min-w-0">
                      <span className="text-[var(--muted)] text-xs font-mono pt-1 shrink-0 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0">
                        <h2
                          className={`font-light tracking-tight leading-none transition-colors duration-300 ${
                            activeIdx === i ? "text-primary" : "text-[var(--heading)] group-hover:text-primary"
                          }`}
                          style={{ fontSize: "clamp(1.6rem, 4vw, 3.5rem)" }}
                        >
                          {project.title}
                        </h2>

                        {/* Expanded content */}
                        <motion.div
                          initial={false}
                          animate={activeIdx === i
                            ? { height: "auto", opacity: 1, marginTop: 12 }
                            : { height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-[var(--body)] text-sm leading-relaxed max-w-lg">
                            {project.desc}
                          </p>
                          <p className="text-[var(--muted)] text-xs mt-3 tracking-wider">
                            {project.stack}
                          </p>
                          {/* Click to open detail */}
                          <button
                            onClick={(e) => { e.stopPropagation(); navigate(`/work/${project.id}`); }}
                            className="mt-4 text-[10px] tracking-[0.35em] uppercase text-primary hover:opacity-70 transition-opacity flex items-center gap-2"
                          >
                            View Case Study <span>→</span>
                          </button>
                        </motion.div>
                      </div>
                    </div>

                    {/* Meta */}
                    <div className="text-right shrink-0">
                      <p className="text-[var(--muted)] text-[10px] tracking-[0.35em] uppercase">{project.category}</p>
                      <p className="text-[var(--muted)] text-xs mt-1">{project.year}</p>
                      {project.live && project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-primary text-[10px] tracking-widest uppercase mt-2 hover:underline">
                          Live ↗
                        </a>
                      ) : (
                        <span className="text-[var(--muted)] text-[10px] tracking-widest uppercase mt-2 inline-block">
                          {project.live ? "Live" : "Private"}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Mobile image inline */}
                  <motion.div className="lg:hidden overflow-hidden"
                    animate={activeIdx === i
                      ? { height: "auto", opacity: 1, marginTop: 16 }
                      : { height: 0, opacity: 0, marginTop: 0 }}
                    transition={{ duration: 0.35 }}>
                    <div className="relative cursor-pointer" onClick={(e) => { e.stopPropagation(); navigate(`/work/${project.id}`); }}>
                      <img src={project.images[0]} alt={project.title}
                        className="w-full aspect-video object-cover rounded-sm" />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-sm">
                        <span className="text-white text-xs tracking-widest uppercase border border-white/50 px-4 py-2 rounded-full">
                          View Details
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-[var(--border)]" />
          </div>

          {/* Sticky preview — desktop */}
          <div className="hidden lg:block sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div key={activeIdx}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>

                {/* Image — click opens detail */}
                <div
                  className="relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer group"
                  onClick={() => navigate(`/work/${projects[activeIdx].id}`)}
                >
                  <img src={projects[activeIdx].images[0]} alt={projects[activeIdx].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-xs tracking-[0.35em] uppercase border border-white/60 px-5 py-2.5 rounded-full backdrop-blur-sm">
                      View Case Study
                    </span>
                  </div>

                  {projects[activeIdx].live && (
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[10px] text-white tracking-[0.3em] uppercase">Live</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 text-white/20 font-mono text-4xl font-light leading-none">
                    {String(activeIdx + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] tracking-[0.3em] uppercase text-[var(--muted)]">
                  <span>{projects[activeIdx].category}</span>
                  <span>{projects[activeIdx].year}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
