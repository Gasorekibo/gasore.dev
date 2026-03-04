import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-32 pb-10">
        <div className="max-w-screen-2xl mx-auto w-full">

          {/* Profile photo — desktop */}
          <motion.div
            className="hidden lg:block absolute right-12 xl:right-20 top-1/2 -translate-y-[60%]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative w-56 h-72 overflow-hidden">
              <img src="./projects/project4.png" alt="M.Gasore"
                className="absolute inset-0 w-full h-full object-cover grayscale-[20%] contrast-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/15 via-transparent to-transparent" />
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-[var(--bg)]"
                style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] text-[var(--muted)] uppercase">Available for work</span>
            </div>
          </motion.div>

          {/* Eyebrow */}
          <motion.p className="text-[10px] tracking-[0.6em] text-[var(--muted)] uppercase mb-6"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Software Engineer & Web Developer
          </motion.p>

          {/* Name — 16vw fits "M.GASORE" within padded container on all viewports */}
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

          {/* Bottom section — left-aligned so nothing collides with the right-side photo */}
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
              className="mt-8"
            >
              <Link to="/work"
                className="group inline-flex items-center gap-3 border border-[var(--border-md)] px-7 py-4 rounded-full text-[var(--heading)] text-xs tracking-[0.3em] uppercase hover:bg-primary hover:border-primary hover:text-white transition-all duration-500">
                View Work
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile avatar */}
          <motion.div className="lg:hidden flex items-center gap-3 mt-12"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
            <img src="./projects/project4.png" alt="M.Gasore"
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
