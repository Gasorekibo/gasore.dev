// src/pages/Contact.tsx
// ─── EmailJS setup ────────────────────────────────────────────────────────────
// 1. Install: npm install @emailjs/browser   (the package currently named "emailjs" may be
//    the SMTP library – if send() throws, swap the import to "@emailjs/browser")
// 2. Create a free account at https://www.emailjs.com
// 3. Add a Gmail service → get your Service ID
// 4. Create an email template with variables:
//    {{from_name}}, {{from_email}}, {{message}}, {{interests}}
//    Set "To Email" to gasoremugwaneza@gmail.com in the template
// 5. Copy your Public Key from Account → API Keys
// 6. Create .env in project root:
//    VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
//    VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
//    VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxx
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const interests = [
  "Full-Stack", "SAP BTP", "AI Solutions", "WhatsApp Bots",
  "HealthTech", "EdTech", "Cloud Architecture", "Real-time Apps",
  "Enterprise Integration", "Open Source",
];

const LINE =
  "w-full bg-transparent border-0 border-b border-[var(--border-md)] focus:border-primary outline-none text-[var(--heading)] placeholder-[var(--muted)] py-5 text-xl transition-colors duration-300 font-light";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", project: "", interests: [] as string[] });
  const [errors, setErrors] = useState({ name: false, email: false, project: false });
  const [status, setStatus] = useState<Status>("idle");

  const toggle = (item: string) =>
    setForm((p) => ({
      ...p,
      interests: p.interests.includes(item) ? p.interests.filter((i) => i !== item) : [...p.interests, item],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = {
      name:    !form.name.trim(),
      email:   !form.email.trim() || !/\S+@\S+\.\S+/.test(form.email),
      project: !form.project.trim(),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setStatus("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID  as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        {
          from_name:  form.name,
          from_email: form.email,
          message:    form.project,
          interests:  form.interests.join(", ") || "None specified",
          to_email:   "gasoremugwaneza@gmail.com",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
      );
      setForm({ name: "", email: "", project: "", interests: [] });
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] px-6 md:px-12 lg:px-16 pt-40 pb-32">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}>
          <p className="text-[10px] tracking-[0.6em] text-[var(--muted)] uppercase mb-6">Get in touch</p>
          <h1 className="font-light text-[var(--heading)] leading-[0.88] tracking-tighter"
            style={{ fontSize: "clamp(3.5rem, 13vw, 11rem)" }}>
            LET'S<br /><span className="text-primary">TALK.</span>
          </h1>
        </motion.div>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}>
            <label className="text-[10px] tracking-[0.4em] text-[var(--muted)] uppercase">Your name</label>
            <input type="text" placeholder="Gasore Mugwaneza" value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={`${LINE} ${errors.name ? "border-red-500/60" : ""}`} />
            {errors.name && <p className="text-red-400 text-xs mt-1 tracking-wider">Required.</p>}
          </motion.div>

          {/* Email */}
          <motion.div className="mt-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}>
            <label className="text-[10px] tracking-[0.4em] text-[var(--muted)] uppercase">Your email</label>
            <input type="email" placeholder="hello@example.com" value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`${LINE} ${errors.email ? "border-red-500/60" : ""}`} />
            {errors.email && <p className="text-red-400 text-xs mt-1 tracking-wider">Valid email required.</p>}
          </motion.div>

          {/* Project */}
          <motion.div className="mt-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}>
            <label className="text-[10px] tracking-[0.4em] text-[var(--muted)] uppercase">Your project</label>
            <textarea rows={3} placeholder="Tell me what you're building..."
              value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })}
              className={`${LINE} resize-none ${errors.project ? "border-red-500/60" : ""}`} />
            {errors.project && <p className="text-red-400 text-xs mt-1 tracking-wider">Required.</p>}
          </motion.div>

          {/* Interests */}
          <motion.div className="mt-14" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}>
            <p className="text-[10px] tracking-[0.4em] text-[var(--muted)] uppercase mb-5">Interested in</p>
            <div className="flex flex-wrap gap-2">
              {interests.map((item) => (
                <button key={item} type="button" onClick={() => toggle(item)}
                  className={`text-xs px-4 py-2 rounded-full border transition-all duration-300 tracking-wide ${
                    form.interests.includes(item)
                      ? "bg-primary border-primary text-white"
                      : "border-[var(--border-md)] text-[var(--muted)] hover:border-primary/60 hover:text-[var(--body)]"
                  }`}>
                  {item}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Submit */}
          <motion.div className="mt-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}>
            <button type="submit" disabled={status === "sending"}
              className="group flex items-center gap-4 text-[var(--heading)] disabled:opacity-50 transition-opacity">
              <span className="text-sm tracking-[0.35em] uppercase border-b border-primary pb-1 group-hover:border-[var(--heading)] transition-colors duration-300">
                {status === "sending" ? "Sending..." : "Send Message"}
              </span>
              <span className={`w-9 h-9 rounded-full border border-primary flex items-center justify-center text-sm transition-all duration-300 ${
                status === "sending" ? "animate-spin border-primary/30" : "group-hover:bg-primary group-hover:text-white"
              }`}>
                {status === "sending" ? "○" : "→"}
              </span>
            </button>
          </motion.div>
        </form>

        {/* Feedback */}
        {status === "sent" && (
          <motion.p className="mt-8 text-green-400 text-sm tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            ✓ Message sent — I'll be in touch soon.
          </motion.p>
        )}
        {status === "error" && (
          <motion.p className="mt-8 text-red-400 text-sm tracking-[0.3em] uppercase"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            ✕ Something went wrong. Please email me directly.
          </motion.p>
        )}

        {/* Info row */}
        <motion.div
          className="mt-24 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between gap-4 text-[var(--muted)] text-[10px] tracking-[0.35em] uppercase"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
          <span>Kigali, Rwanda</span>
          <a href="mailto:gasoremugwaneza@gmail.com"
            className="hover:text-primary transition-colors">gasoremugwaneza@gmail.com</a>
          <span>Remote · Worldwide</span>
        </motion.div>
      </div>
    </div>
  );
}
