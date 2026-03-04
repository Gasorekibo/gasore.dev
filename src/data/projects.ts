// src/data/projects.ts
export type Project = {
  id: string;
  title: string;
  desc: string;
  longDesc: string;
  stack: string;
  stackTags: string[];
  images: string[];
  link?: string;
  live?: boolean;
  year: string;
  category: string;
  role: string;
  features: string[];
};

export const projects: Project[] = [
  {
    id: "jobscriptor",
    title: "JobScriptor",
    desc: "AI-powered career platform that generates ATS-optimized resumes and cover letters in seconds using GPT-4.",
    longDesc:
      "JobScriptor was built to eliminate the soul-crushing hours spent tailoring resumes for every application. The platform uses GPT-4 with custom prompt engineering to analyse a job description and a user's experience, then generates ATS-optimized documents that actually pass screening algorithms.\n\nThe backend is a REST API built with Node.js and Prisma ORM connecting to a PostgreSQL database on Supabase. Stripe handles subscription billing with webhook-driven access control. A real-time job board scrapes listings from major platforms and matches them against the user's profile, surfacing the best-fit opportunities automatically.",
    stack: "React · TypeScript · Prisma · GPT-4 · Stripe · PostgreSQL",
    stackTags: ["React", "TypeScript", "Node.js", "Prisma", "GPT-4", "Stripe", "PostgreSQL", "Supabase"],
    images: [
      "./projects/project1.png",
      "./projects/project2.png",
      "./projects/project3.png",
      "./projects/project4.png",
    ],
    link: "https://jobscriptor.com",
    live: true,
    year: "2024",
    category: "AI Product",
    role: "Founder & Lead Developer",
    features: [
      "GPT-4 resume & cover letter generation with ATS scoring",
      "Custom prompt engineering for role-specific optimisation",
      "Live job board with profile-match ranking",
      "Stripe subscription with per-document credit system",
      "Document version history and one-click PDF export",
    ],
  },
  {
    id: "healtrack",
    title: "HealTrack",
    desc: "Healthcare management system for Rwandan clinics — real-time patient records, scheduling, and SMS reminders.",
    longDesc:
      "Rwanda's public healthcare system serves millions with limited infrastructure. HealTrack was designed with clinic staff in mind: fast, offline-capable, and operable on low-end Android tablets.\n\nThe system manages patient records, tracks visit history, handles appointment scheduling with conflict resolution, and sends automated SMS reminders via Africa's Talking API. A role-based access system separates nurse, doctor, and admin views. Currently deployed at three clinics in Kigali, the app processes over 400 patient interactions per month.",
    stack: "Next.js · Node.js · MongoDB · Africa's Talking · TailwindCSS",
    stackTags: ["Next.js", "Node.js", "MongoDB", "Africa's Talking", "TailwindCSS", "PWA"],
    images: [
      "./projects/project2.png",
      "./projects/project3.png",
      "./projects/project1.png",
      "./projects/project4.png",
    ],
    live: true,
    year: "2024",
    category: "HealthTech",
    role: "Full-Stack Developer",
    features: [
      "Real-time patient records with offline-first sync",
      "Appointment scheduling with conflict detection",
      "Automated SMS reminders via Africa's Talking API",
      "Role-based access: nurse / doctor / admin",
      "PWA — works on low-cost Android tablets without internet",
    ],
  },
  {
    id: "sap-fiori",
    title: "SAP Fiori Suite",
    desc: "Enterprise SAP UI5 application suite on SAP BTP — OData v4 services, CPI integration flows, and RBAC.",
    longDesc:
      "Built for a large enterprise client, this Fiori application suite replaced a patchwork of legacy ABAP transactions with modern, role-based UIs deployed on SAP Business Technology Platform.\n\nThe suite includes purchase order approval workflows, vendor master data management, and a custom analytics cockpit pulling KPIs from S/4HANA via OData v4 services. SAP CPI (Cloud Platform Integration) was used to build mediation flows connecting SAP to external logistics and ERP systems. All apps comply with SAP Fiori design guidelines and WCAG 2.1 accessibility standards.",
    stack: "SAP UI5 · SAP BTP · OData v4 · CPI · ABAP",
    stackTags: ["SAP UI5", "SAP BTP", "OData v4", "CPI", "ABAP", "Fiori", "S/4HANA"],
    images: [
      "./projects/project3.png",
      "./projects/project1.png",
      "./projects/project2.png",
      "./projects/project4.png",
    ],
    year: "2024",
    category: "Enterprise",
    role: "SAP Developer",
    features: [
      "Purchase order approval with multi-level workflow",
      "Vendor master data management UI",
      "Custom analytics cockpit with live S/4HANA KPIs",
      "CPI integration flows to third-party logistics systems",
      "WCAG 2.1 accessibility compliance",
    ],
  },
  {
    id: "chatflow",
    title: "ChatFlow",
    desc: "WhatsApp automation platform for SMEs — visual flow builder, CRM sync, broadcast campaigns, and real-time analytics.",
    longDesc:
      "ChatFlow lets small businesses build WhatsApp chatbot flows without writing code. A drag-and-drop canvas lets owners map out conversation trees, set triggers, and define fallback paths. Under the hood, a Node.js engine resolves each step in real time using the WhatsApp Business Cloud API.\n\nThe platform integrates with popular CRMs, syncing contacts and tagging conversations. A broadcast module supports segmented campaigns with open-rate tracking. A real-time analytics dashboard powered by Socket.io shows live conversation counts, bot drop-off points, and conversion metrics.",
    stack: "React · Node.js · WhatsApp Business API · Socket.io · Redis · MongoDB",
    stackTags: ["React", "Node.js", "WhatsApp API", "Socket.io", "Redis", "MongoDB", "TypeScript"],
    images: [
      "./projects/project4.png",
      "./projects/project1.png",
      "./projects/project2.png",
      "./projects/project3.png",
    ],
    live: true,
    year: "2025",
    category: "SaaS",
    role: "Lead Developer",
    features: [
      "Visual drag-and-drop chatbot flow builder",
      "WhatsApp Business Cloud API integration",
      "CRM sync (HubSpot, Pipedrive) with contact tagging",
      "Segmented broadcast campaigns with delivery tracking",
      "Real-time analytics dashboard via Socket.io",
    ],
  },
  {
    id: "edura",
    title: "Edura",
    desc: "E-learning platform for African universities — adaptive quizzes, video streaming, and offline-first PWA.",
    longDesc:
      "Edura was built in response to a real gap: most LMS platforms assume fast, stable internet — a luxury for many African university students. The platform is built as an offline-first PWA, caching course content and quiz data locally so students can learn without connectivity.\n\nVideo content is processed server-side with FFmpeg to produce adaptive bitrate streams (HLS), reducing bandwidth consumption by up to 60% compared to MP4 delivery. The quiz engine adapts question difficulty based on past performance using a simple spaced-repetition algorithm. Institutions can customise branding and deploy their own instance.",
    stack: "Vue.js · Laravel · MySQL · FFmpeg · PWA",
    stackTags: ["Vue.js", "Laravel", "MySQL", "FFmpeg", "PWA", "HLS", "Tailwind CSS"],
    images: [
      "./projects/project2.png",
      "./projects/project4.png",
      "./projects/project3.png",
      "./projects/project1.png",
    ],
    year: "2024",
    category: "EdTech",
    role: "Full-Stack Developer",
    features: [
      "Offline-first PWA with service worker caching",
      "Adaptive bitrate video streaming via FFmpeg + HLS",
      "Spaced-repetition adaptive quiz engine",
      "Multi-tenant with per-institution branding",
      "60% bandwidth reduction vs standard MP4 delivery",
    ],
  },
  {
    id: "rwandapay",
    title: "RwandaPay",
    desc: "Fintech dashboard aggregating MTN MoMo and Airtel Money — real-time charts, anomaly detection, and reconciliation.",
    longDesc:
      "RwandaPay gives businesses a unified view of their mobile money inflows and outflows across MTN MoMo and Airtel Money — the two dominant payment rails in Rwanda. Previously, operators had to log into separate portals and manually reconcile spreadsheets.\n\nThe dashboard streams transaction events in real time via webhooks, stores them in PostgreSQL, and caches aggregated metrics in Redis for sub-100ms dashboard loads. A lightweight anomaly detection module flags unusual transaction patterns and sends WhatsApp alerts. Multi-account reconciliation generates downloadable reports compatible with major accounting software.",
    stack: "React · FastAPI · PostgreSQL · Redis · Recharts",
    stackTags: ["React", "FastAPI", "Python", "PostgreSQL", "Redis", "Recharts", "WhatsApp API"],
    images: [
      "./projects/project3.png",
      "./projects/project2.png",
      "./projects/project4.png",
      "./projects/project1.png",
    ],
    live: true,
    year: "2025",
    category: "FinTech",
    role: "Full-Stack Developer",
    features: [
      "Unified dashboard: MTN MoMo + Airtel Money",
      "Real-time transaction streaming via webhooks",
      "Redis-cached metrics for sub-100ms loads",
      "Anomaly detection with WhatsApp alerts",
      "Multi-account reconciliation & accounting exports",
    ],
  },
];
