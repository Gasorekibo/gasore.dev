import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springX = useSpring(mouseX, { damping: 20, stiffness: 250, mass: 0.5 });
  const springY = useSpring(mouseY, { damping: 20, stiffness: 250, mass: 0.5 });

  const dotX = useTransform(mouseX, (v) => v - 4);
  const dotY = useTransform(mouseY, (v) => v - 4);
  const ringX = useTransform(springX, (v) => v - 20);
  const ringY = useTransform(springY, (v) => v - 20);

  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const over = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, [data-hover], input, textarea")) {
        setHovering(true);
      }
    };
    const out = () => setHovering(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseout", out);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      window.removeEventListener("mouseout", out);
    };
  }, [mouseX, mouseY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-primary pointer-events-none"
        style={{ x: dotX, y: dotY }}
        animate={{ scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] w-10 h-10 rounded-full border border-primary pointer-events-none"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: hovering ? 1.8 : 1,
          opacity: hovering ? 1 : 0.4,
        }}
        transition={{ duration: 0.25 }}
      />
    </>
  );
}
