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
    id: "coroute",
    title: "CoRoute",
    desc: "Intercity carpooling platform connecting drivers and passengers across Canada for affordable, eco-friendly travel.",
    longDesc:
      "CoRoute solves the challenge of expensive and inconvenient intercity travel in Canada by enabling ride-sharing between cities. Users can offer rides, search for available trips, book seats, and communicate securely. The platform prioritizes safety with verification features, reviews, and clear pricing.\n\nBuilt with a focus on usability and trust, it features real-time ride listings, map integration (potential), messaging, and payment handling. The clean, professional design helps build user confidence in a peer-to-peer mobility service.",
    stack: "React · Node.js · Tailwind CSS · TypeScript",
    stackTags: ["React", "Node.js", "TypeScript", "Tailwind CSS", "Ride-Sharing", "Maps API"],
    images: [
      "./projects/coRoute-1.png",
      "./projects/coRoute-2.png",
      "./projects/coRoute-3.png",
      "./projects/coRoute-4.png",
    ],
    link: "https://coroute.ca",
    live: true,
    year: "2024-2025",
    category: "Mobility / SaaS",
    role: "Full-Stack Developer",
    features: [
      "Ride offer and search system with filters (date, route, price)",
      "Secure booking and seat reservation flow",
      "User profiles with verification badges and reviews",
      "In-app messaging between drivers and passengers",
      "Mobile-responsive design for on-the-go access",
    ],
  },
 
  {
    id: "devgadgets",
    title: "DevGadgets",
    desc: "E-commerce platform showcasing and selling developer-focused gadgets, tech accessories, and tools with a modern, clean shopping experience.",
    longDesc:
      "DevGadgets is a full-featured online store tailored for developers and tech enthusiasts. It offers product browsing, category filtering, search, cart functionality, and checkout flow. The platform demonstrates e-commerce best practices with fast performance, attractive product displays, and smooth user interactions.\n\nDeployed on Render for easy scaling, the site uses component-based architecture for maintainability and includes responsive design to work seamlessly across devices. Ideal as a portfolio piece showing end-to-end frontend e-commerce capabilities.",
    stack: "React · TypeScript · Tailwind CSS · Redux / Context API",
    stackTags: ["React", "TypeScript", "Tailwind CSS", "E-commerce", "Redux", "Responsive"],
    images: [
      "./projects/gadget-1.png",
      "./projects/gadget-2.png",
      "./projects/gadget-3.png",
      "./projects/gadget-4.png",
    ],
    link: "https://devgadgets.onrender.com",
    live: true,
    year: "2024",
    category: "E-commerce",
    role: "Full-Stack Developer",
    features: [
      "Product catalog with filtering and search functionality",
      "Responsive product detail pages with images and descriptions",
      "Shopping cart persistence and management",
      "Modern UI components using Tailwind for rapid styling",
      "Optimized performance on Render hosting",
    ],
  },
  {
    id: "manumetal-rw",
    title: "ManuMetal Rwanda",
    desc: "Professional website for ManuMetal, a Rwanda-based metal fabrication and manufacturing company showcasing services, projects, and expertise.",
    longDesc:
      "ManuMetal specializes in custom metalwork, fabrication, welding, and structural solutions for construction, industry, and infrastructure projects in Rwanda. The website acts as a digital storefront, presenting company capabilities, completed projects, service offerings, and contact information to attract clients.\n\nThe site features a modern, professional layout with high-quality visuals of metal products, project galleries, and clear calls-to-action. It highlights local expertise and reliability in Rwanda's growing construction sector.",
    stack: "React · Tailwind CSS · TypeScript · Next.js",
    stackTags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Business Website", "Portfolio"],
    images: [
      "./projects/menumental-1.png",
      "./projects/menumental-2.png",
      "./projects/menumental-3.png",
      "./projects/menumental-4.png",
    ],
    link: "https://manumetal.rw",
    live: true,
    year: "2024",
    category: "Business / Industrial",
    role: "Frontend Developer & Designer",
    features: [
      "Project gallery showcasing fabrication and installation work",
      "Services overview with detailed descriptions",
      "About section highlighting company experience and values",
      "Contact form and location information for Rwanda clients",
      "Clean, professional design emphasizing visual quality of metalwork",
    ],
  },
   {
    id: "pamoja-health",
    title: "Pamoja Health",
    desc: "Digital health platform providing a safe, accessible space for health information, consultation booking, and wellness resources in Rwanda and beyond.",
    longDesc:
      "Pamoja Health is designed as a user-friendly platform to make healthcare more approachable, especially in underserved communities. It serves as a bridge between patients and providers by offering reliable health content, appointment scheduling, and telehealth features. The site emphasizes privacy, ease of use on mobile devices, and localized content for East African users.\n\nBuilt with modern frontend tools for fast loading and responsive design, it includes secure user authentication, dynamic content sections, and integration with potential backend services for bookings and notifications. Deployed to showcase clean UX and accessibility in healthtech.",
    stack: "React · TypeScript · Tailwind CSS · Next.js",
    stackTags: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Responsive Design", "HealthTech"],
    images: [
      "./projects/pamoja-1.png",
      "./projects/pamoja-2.png",
      "./projects/pamoja-3.png",
      "./projects/pamoja-4.png",
    ],
    link: "https://pamoja.health",
    live: true,
    year: "2024",
    category: "HealthTech",
    role: "Full-Stack Developer & Designer",
    features: [
      "Clean, mobile-first interface for easy navigation on low-bandwidth connections",
      "Health information hub with categorized wellness resources",
      "Appointment booking system (frontend + potential API integration)",
      "Secure user profiles and privacy-focused design",
      "Responsive layout optimized for Rwanda and regional users",
    ],
  },
];