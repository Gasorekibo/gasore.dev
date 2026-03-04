export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-6 md:px-12 lg:px-16 py-8 bg-[var(--bg)]">
      <div className="max-w-screen-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.35em] uppercase text-[var(--muted)]">
        <span>© {new Date().getFullYear()} Gasore Mugwaneza</span>
        <div className="flex items-center gap-2">
          <div className="w-px h-3 bg-primary/40" />
          <span className="text-primary/60">Made in Rwanda</span>
          <div className="w-px h-3 bg-primary/40" />
        </div>
        <span>Design & Code</span>
      </div>
    </footer>
  );
}
