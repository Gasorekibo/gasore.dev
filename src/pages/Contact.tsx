// src/pages/Contact.tsx
import { useState } from "react";

const interests = [
  "Full-Stack Web Applications",
  "SAP BTP / Cloud Solutions",
  "Enterprise Integration (CPI)",
  "SAP UI5 / Fiori Development",
  "AI-Powered Solutions",
  "WhatsApp & Messaging Bots",
  "Healthcare Tech Solutions",
  "Education Technology",
  "Technology for Social Impact",
  "Scalable Cloud Architecture",
  "Real-time Notifications",
  "Open Source Contributions",
];

const PRIMARY = "#E8563A";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    interests: [] as string[],
  });

  const [errors, setErrors] = useState({ name: false, email: false, project: false });
  const [submitted, setSubmitted] = useState(false);

  const toggleInterest = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(item)
        ? prev.interests.filter((i) => i !== item)
        : [...prev.interests, item],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email),
      project: !formData.project.trim(),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    // SUCCESS: Log + Reset form + Show message
    console.log("Contact Form Submitted:", {
      ...formData,
      timestamp: new Date().toISOString(),
    });

    setFormData({ name: "", email: "", project: "", interests: [] }); // Reset
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-3xl mx-auto space-y-20">
        <div className="text-center mt-8">
          <h1 className="text-6xl md:text-8xl font-light text-white mb-4">Get in touch</h1>
          <p className="text-gray-500 text-xl">I'm interested in...</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-16">
          {/* Interests */}
          <div className="grid grid-cols-2 gap-4">
            {interests.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => toggleInterest(item)}
                className={`px-5 py-4 rounded-full text-sm font-medium text-center transition-all duration-300 border ${
                  formData.interests.includes(item)
                    ? `bg-[${PRIMARY}] text-white border-[${PRIMARY}]`
                    : "bg-transparent text-gray-400 border-gray-800 hover:border-primary hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Form Fields */}
          <div className="space-y-10">
            <input
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full bg-gray-900/50 backdrop-blur-sm rounded-full px-8 py-5 text-white placeholder-gray-500 text-lg outline-none transition-all ${
                errors.name ? "border-2 border-red-500" : "border border-gray-800 focus:border-primary"
              }`}
            />
            {errors.name && <p className="text-red-400 text-sm -mt-6 ml-4">Please fill out this field.</p>}

            <input
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full bg-gray-900/50 backdrop-blur-sm rounded-full px-8 py-5 text-white placeholder-gray-500 text-lg outline-none transition-all ${
                errors.email ? "border-2 border-red-500" : "border border-gray-800 focus:border-primary"
              }`}
            />
            {errors.email && <p className="text-red-400 text-sm -mt-6 ml-4">Please enter a valid email.</p>}

            <textarea
              rows={6}
              placeholder="Tell us about your project"
              value={formData.project}
              onChange={(e) => setFormData({ ...formData, project: e.target.value })}
              className={`w-full bg-gray-900/50 backdrop-blur-sm rounded-3xl px-8 py-6 text-white placeholder-gray-500 text-lg outline-none resize-none transition-all ${
                errors.project ? "border-2 border-red-500" : "border border-gray-800 focus:border-primary"
              }`}
            />
            {errors.project && <p className="text-red-400 text-sm -mt-6 ml-4">Please fill out this field.</p>}

            <div className="text-center pt-8">
              <button
                type="submit"
                className="px-16 py-5 bg-transparent border-2 border-primary text-white rounded-full text-lg font-medium hover:bg-primary hover:text-white transition-all duration-500 uppercase tracking-wider"
              >
                Send Request
              </button>
            </div>
          </div>
        </form>
        {submitted && (
          <p className="text-center text-green-400 text-xl font-light animate-pulse absolute bottom-10 left-1/2 transform -translate-x-1/2">
            Message sent successfully!
          </p>
        )}
      </div>
    </div>
  );
}