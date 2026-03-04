/**
 * BugHunt — a tiny computer mouse icon that chases a bug orbiting the page.
 * The bug revolves around the screen in an ellipse. When the mouse icon
 * gets too close (within 55px), the bug "flees" to the opposite side of the
 * ellipse and briefly pulses. Both elements are non-interactive overlays.
 */
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Bug, Mouse } from "lucide-react";

export default function BugHunt() {
  const angleRef = useRef(Math.random() * Math.PI * 2);
  const fleeing = useRef(false);
  const fleeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Safe initial positions (calculated once after mount via useEffect)
  const bugX = useMotionValue(200);
  const bugY = useMotionValue(200);
  const bugScale = useMotionValue(1);

  // Chaser springs toward bug with natural lag
  const chaseX = useSpring(bugX, { stiffness: 16, damping: 13, mass: 1.3 });
  const chaseY = useSpring(bugY, { stiffness: 16, damping: 13, mass: 1.3 });

  useEffect(() => {
    // Set a sensible starting position now that window is available
    const startX = window.innerWidth / 2 + window.innerWidth * 0.36 * Math.cos(angleRef.current);
    const startY = window.innerHeight / 2 + window.innerHeight * 0.30 * Math.sin(angleRef.current);
    bugX.set(startX);
    bugY.set(startY);
    chaseX.set(startX + 60);
    chaseY.set(startY + 60);

    let raf: number;

    const flee = () => {
      if (fleeing.current) return;
      fleeing.current = true;
      // Jump to the opposite side + a random offset so it doesn't perfectly predict
      angleRef.current += Math.PI + (Math.random() - 0.5) * 0.8;
      bugScale.set(1.6);
      setTimeout(() => bugScale.set(1), 280);
      if (fleeTimer.current) clearTimeout(fleeTimer.current);
      fleeTimer.current = setTimeout(() => { fleeing.current = false; }, 900);
    };

    const tick = () => {
      // Advance the orbit angle — controls speed of revolution
      angleRef.current += 0.006;

      const cxw = window.innerWidth  / 2;
      const cyh = window.innerHeight / 2;
      const rxw = window.innerWidth  * 0.36;
      const ryh = window.innerHeight * 0.30;

      const bx = cxw + rxw * Math.cos(angleRef.current);
      const by = cyh + ryh * Math.sin(angleRef.current);

      bugX.set(bx);
      bugY.set(by);

      // Check proximity between spring (chaser) and bug
      const dx = chaseX.get() - bx;
      const dy = chaseY.get() - by;
      if (Math.sqrt(dx * dx + dy * dy) < 55) flee();

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      if (fleeTimer.current) clearTimeout(fleeTimer.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9993]" aria-hidden>

      {/* Bug — orbits the page */}
      <motion.div
        className="absolute top-0 left-0"
        style={{ x: bugX, y: bugY, scale: bugScale }}
        transition={{ scale: { type: "spring", stiffness: 300, damping: 15 } }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2 drop-shadow-sm">
          <Bug size={28} className="text-primary/70" strokeWidth={1.5} />
        </div>
      </motion.div>

      {/* Computer mouse — chases bug with spring lag */}
      <motion.div
        className="absolute top-0 left-0"
        style={{ x: chaseX, y: chaseY }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          <Mouse size={30} className="text-[var(--muted)]/55" strokeWidth={1.5} />
        </div>
      </motion.div>

    </div>
  );
}
