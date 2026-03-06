import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

// ─── Interactive dot grid ────────────────────────────────────────────────────
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    const mouse = { x: -999, y: -999 };

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    });

    const SPACING = 50;
    type Dot = { x: number; y: number; ox: number; oy: number };
    const dots: Dot[] = [];

    const buildGrid = () => {
      dots.length = 0;
      for (let y = SPACING; y < canvas.height + SPACING; y += SPACING)
        for (let x = SPACING; x < canvas.width + SPACING; x += SPACING)
          dots.push({ x, y, ox: x, oy: y });
    };
    buildGrid();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isLight = document.documentElement.classList.contains("light");
      for (const d of dots) {
        const dx = d.ox - mouse.x;
        const dy = d.oy - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const R = 150;
        if (dist < R && dist > 0) {
          const f = ((R - dist) / R) * 45;
          d.x += (d.ox + (dx / dist) * f - d.x) * 0.18;
          d.y += (d.oy + (dy / dist) * f - d.y) * 0.18;
        } else {
          d.x += (d.ox - d.x) * 0.07;
          d.y += (d.oy - d.y) * 0.07;
        }
        const near = dist < R ? (R - dist) / R : 0;
        const base = isLight ? 0.14 : 0.09;
        const boost = isLight ? 0.5 : 0.38;
        ctx.beginPath();
        ctx.arc(d.x, d.y, 1.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232,86,58,${base + near * boost})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }} />
  );
}

// ─── Atmospheric hero photo ───────────────────────────────────────────────────
function HeroPhoto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <motion.div
      ref={ref}
      className="absolute right-0 top-0 h-full hidden lg:block"
      style={{ width: "48%" }}
      initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
      animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
      transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Wide left gradient — pushes the visible photo edge far right, keeping name area clear */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, var(--bg) 0%, var(--bg) 18%, transparent 55%, transparent 80%, var(--bg) 100%)",
        }}
      />
      {/* Top + bottom vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, var(--bg) 0%, transparent 20%, transparent 78%, var(--bg) 100%)",
        }}
      />
      {/* Dark overlay — tones down the bright white photo background */}
      <div className="absolute inset-0 z-[9] pointer-events-none bg-[var(--bg)]/40" />
      {/* Primary colour wash */}
      <div className="absolute inset-0 z-[11] pointer-events-none bg-primary/[0.05] mix-blend-color" />

      {/* The photo itself */}
      <motion.img
        src="/projects/ELYS2272.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-[115%] -top-[8%] object-cover object-center"
        style={{
          y,
          filter: "brightness(0.68) contrast(1.1) grayscale(15%) saturate(0.85)",
        }}
      />
    </motion.div>
  );
}

// ─── Marquee ─────────────────────────────────────────────────────────────────
function Marquee() {
  const words = "FULL STACK  ·  REACT  ·  NODE.JS  ·  SAP BTP  ·  RWANDA  ·  TYPESCRIPT  ·  AI INTEGRATIONS  ·  OPEN TO WORK  ·  ";
  const content = words.repeat(5);
  return (
    <div className="overflow-hidden border-t border-[var(--border)] py-3">
      <div className="marquee-track">
        <span className="shrink-0 text-[10px] tracking-[0.5em] text-[var(--muted)] whitespace-nowrap">{content}</span>
        <span className="shrink-0 text-[10px] tracking-[0.5em] text-[var(--muted)] whitespace-nowrap" aria-hidden>{content}</span>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] relative overflow-hidden">
      <ParticleField />

      {/* Large atmospheric hero photo — behind content */}
      <HeroPhoto />

      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-32 pb-10">
        <div className="max-w-screen-2xl mx-auto w-full">

          {/* Eyebrow */}
          <motion.p className="text-[10px] tracking-[0.6em] text-[var(--muted)] uppercase mb-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Software Engineer & Web Developer
          </motion.p>

          {/* Name */}
          <div className="overflow-hidden">
            <motion.h1
              className="font-light leading-[0.82] tracking-tighter text-[var(--heading)] whitespace-nowrap"
              style={{ fontSize: "clamp(3.5rem, 16vw, 17rem)" }}
              initial={{ y: "105%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            >
              <span className="text-primary">M.</span>GASORE
            </motion.h1>
          </div>

          {/* Divider */}
          <motion.div className="h-px bg-[var(--border-md)] mt-7 mb-8"
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left" }} />

          {/* Bottom — description + CTA */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-0">

            <motion.div
              className="max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.75 }}
            >
              <p className="text-[var(--body)] text-lg md:text-xl font-light leading-relaxed">
                Building digital experiences from Rwanda to the world.
                <br />
                <span className="text-[var(--muted)]">Full-stack · SAP BTP · AI integrations.</span>
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.95 }}
                className="mt-8 flex items-center gap-5"
              >
                <Link to="/work"
                  className="group inline-flex items-center gap-3 border border-[var(--border-md)] px-7 py-4 rounded-full text-[var(--heading)] text-xs tracking-[0.3em] uppercase hover:bg-primary hover:border-primary hover:text-white transition-all duration-500">
                  View Work
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
                <Link to="/contact"
                  className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] hover:text-primary transition-colors duration-300">
                  Let's Talk ↗
                </Link>
              </motion.div>
            </motion.div>

            {/* Photo credit / location tag — desktop only, sits bottom-right beside the image */}
            <motion.div
              className="hidden lg:flex flex-col items-end gap-1 pb-1 pr-[50%]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] tracking-[0.35em] text-[var(--muted)] uppercase">Available for work</span>
              </div>
              <span className="text-[9px] tracking-[0.3em] text-[var(--muted)]/50 uppercase">Based in Kigali, Rwanda</span>
            </motion.div>
          </div>

          {/* Mobile — avatar strip */}
          <motion.div className="lg:hidden flex items-center gap-3 mt-12"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
            <img src="/projects/profile.jpeg" alt="M.Gasore"
              className="w-10 h-10 rounded-full object-cover border border-[var(--border-md)]" />
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] text-[var(--muted)] uppercase">Available for work</span>
            </div>
          </motion.div>
        </div>
      </div>

      <Marquee />
    </div>
  );
}
