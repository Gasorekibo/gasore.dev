// src/data/projects.ts
export type Project = {
  id: string;
  title: string;
  desc: string;
  stack: string;
  images: string[];  // array of image paths
  link?: string;
  live?: boolean;
};

export const projects: Project[] = [
  {
    id: "job-scriptor",
    title: "Job Scriptor",
    desc: "All-in-one AI platform for generating resumes, cover letters, and finding tailored job opportunities.",
    stack: "React • TypeScript • Prisma • OpenAI • Tailwind • Stripe",
    images: [
      "./projects/project1.png",
      "./projects/project2.png",
      "./projects/project3.png",
      "./projects/project4.png",
    ],
    link: "https://jobscriptor.com",
    live: true
  },
  {
    id: "neon-dashboard",
    title: "Neon Dashboard",
    desc: "Real-time analytics interface with glassmorphism and advanced data visualization.",
    stack: "React • Recharts • Framer Motion • TailwindCSS",
    images: [
      "./projects/project1.png",
      "./projects/project2.png",
      "./projects/project3.png",
      "./projects/project4.png",
    ],
  },
  {
    id: "portfolio-v2",
    title: "Portfolio V2",
    desc: "My personal portfolio website showcasing my projects and skills.",
    stack: "Next.js • TypeScript • TailwindCSS • Framer Motion",
   images: [
      "./projects/project1.png",
      "./projects/project2.png",
      "./projects/project3.png",
      "./projects/project4.png",
    ],
    link: "https://myportfolio.com",
    live: true
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    desc: "A full-featured e-commerce platform with user authentication, product management, and payment integration.",
    stack: "Vue.js • Node.js • Express • MongoDB • Stripe",
    images: [
      "./projects/project1.png",
      "./projects/project2.png",
      "./projects/project3.png",
      "./projects/project4.png",
    ],
    link: "https://ecommerceplatform.com",
    live: true
  },
{
    id: "blog-cms",
    title: "Blog CMS",
    desc: "A content management system for bloggers with rich text editing and SEO tools.",
    stack: "Django • React • PostgreSQL • TailwindCSS",
   images: [
      "./projects/project1.png",
      "./projects/project2.png",
      "./projects/project3.png",
      "./projects/project4.png",
    ],
    link: "https://blogcms.com",
    live: true
},
{
    id: "fitness-tracker",
    title: "Fitness Tracker",
    desc: "A mobile app to track workouts, nutrition, and progress over time.",
    stack: "React Native • Firebase • Redux",
   images: [
      "./projects/project1.png",
      "./projects/project2.png",
      "./projects/project3.png",
      "./projects/project4.png",
    ],
    link: "https://fitnesstracker.com",
    live: true
},
{
    id: "travel-planner",
    title: "Travel Planner",
    desc: "An app to help users plan trips, manage itineraries, and discover new destinations.",
    stack: "Angular • Node.js • Express • MySQL",
    images: [
      "./projects/project1.png",
      "./projects/project2.png",
      "./projects/project3.png",
      "./projects/project4.png",
    ],
    live: true
}
];