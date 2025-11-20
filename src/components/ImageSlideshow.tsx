import { useState, useEffect } from "react";

type Props = {
  images: string[];
  title: string;
};

export default function ImageSlideshow({ images, title }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3500);
    return () => clearInterval(id);
  }, [images.length, paused]);

  return (
    <div
      className="relative aspect-video bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${title} screenshot ${i + 1}`}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}

      {/* Subtle play/pause indicator */}
      <div className="absolute bottom-4 right-4 text-white/60 text-xs">
        {paused ? "❚❚" : "▶"}
      </div>
    </div>
  );
}