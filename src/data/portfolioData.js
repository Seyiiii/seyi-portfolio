/* ==========================================================
   PORTFOLIO DATA — Single Source of Truth
   
   HOW TO EDIT:
   - Edit PROFILE for name, email, roles, social links.
   - Edit EXPERIENCE to add/update jobs or education.
   - Edit PROJECTS to add/update project cards.
   - Edit SKILLS to add/update skills by category.
   - Edit CERTS to add/update certifications.
   ========================================================== */

export const C = {
  bg: "#0A0E14",
  bgAlt: "#0E141C",
  panel: "#121A24",
  panelBorder: "#223142",
  ink: "#E8EDF3",
  inkSoft: "#93A2B3",
  inkFaint: "#7E91A6", // WCAG AA compliant contrast (>4.5:1 against #0A0E14)
  brass: "#D9A54B",
  brassSoft: "#E8C583",
  teal: "#5CD1B8",
  rust: "#E1746A",
};

export const PROFILE = {
  name: "Oluwaseyi Aina",
  initials: "OA",
  role: "Software Developer",
  roleSecondary: "Backend & Systems",
  roles: [
    "Software Developer",
    "Full-Stack MERN Developer",
    "Physics Graduate",
    "REST API & Systems Builder",
  ],
  location: "Lagos, Nigeria",
  email: "ainaseyim@gmail.com",
  phone: "+234 906 073 1501",
  github: "https://github.com/Seyiiii",
  githubHandle: "github.com/Seyiiii",
  linkedin: "https://www.linkedin.com/in/oluwaseyiaina/",
  linkedinHandle: "linkedin.com/in/oluwaseyiaina",
  currentRole: "Technical Support at DVWorkers",
  status: "Software Developer · active at DVWorkers",
  resumeUrl: "/Oluwaseyi_Aina_Resume.pdf",
  bio: "Impact-driven Software Developer with hands-on experience building and deploying full-stack MERN applications, multitenant SaaS platforms, and secure REST APIs. Physics graduate turned software engineer applying first-principles reasoning to backend architecture, database design, and debugging.",
};

export const NAV_LINKS = [
  { name: "About", href: "about" },
  { name: "Experience", href: "experience" },
  { name: "Work", href: "work" },
  { name: "Skills", href: "skills" },
  { name: "Contact", href: "contact" },
];

export const EXPERIENCE = [
  {
    date: "2026 — PRESENT",
    role: "Technical Support",
    org: "DVWorkers",
    meta: "Lagos, Nigeria",
    points: [
      "Technical support for a Lagos blue-collar job marketplace startup, learning the system architecture, hosting and codebase from the platform development team.",
      "Resolving bugs, maintaining technical documentation and monitoring AWS infrastructure usage.",
    ],
  },
  {
    date: "JUL — NOV 2024",
    role: "Project Engineer (Intern)",
    org: "Obitech Nig Ltd",
    meta: "Lagos, Nigeria",
    points: [
      "Assisted senior engineers with project requirements, planning and material/equipment estimations.",
      "Supported cross-functional coordination and documentation on active engineering projects.",
    ],
  },
  {
    date: "FEB — MAY 2026",
    role: "Backend Development Bootcamp",
    org: "TS Academy",
    meta: "Lagos, Nigeria · Intensive Fellowship",
    points: [
      "Built the Candidate Management module on a seven-person capstone team for a multitenant SaaS CBT platform.",
      "Built a full-stack MERN inventory and order-management platform with five-tier role-based access control, Cloudinary image uploads, a cart-and-order pipeline, real-time stock validation, and audit logging.",
    ],
  },
  {
    date: "JUL 2022 — SEP 2025",
    role: "Bachelor of Science (BSc), Physics",
    org: "Lagos State University",
    meta: "Lagos, Nigeria · Education",
    points: [
      "Graduated with a physics background before moving into software engineering — the same instinct for tracing a system back to first principles now informs how I debug, model data, and test.",
    ],
  },
];

export const PROJECTS = [
  {
    status: "LIVE",
    statusColor: C.teal,
    title: "Seyi Inventory System",
    category: "Personal Project — Deployed (2025)",
    description:
      "A full-stack MERN inventory and order management platform with a five-tier RBAC system covering Admin, Manager, Staff, Auditor, and Viewer roles. Features Cloudinary image uploads, cart system, order flow with real-time stock validation, audit logging, and Nodemailer transactional notifications.",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Nodemailer", "React", "Render", "Vercel"],
    link: "https://seyi-inventory-system.vercel.app/",
    linkLabel: "seyi-inventory-system.vercel.app",
    points: [
      "Built a full-stack MERN inventory and order management platform with five-tier RBAC covering Admin, Manager, Staff, Auditor, and Viewer roles.",
      "Implemented product CRUD with Cloudinary uploads, cart system, and real-time stock validation.",
      "Deployed frontend on Vercel and backend on Render; integrated Nodemailer for transactional email notifications.",
    ],
  },
  {
    status: "CAPSTONE",
    statusColor: C.rust,
    title: "Multitenant CBT Platform",
    category: "TS Academy — Group Capstone Project (2026)",
    description:
      "A group capstone project: a multitenant computer-based testing SaaS platform. Built the Candidate Management module in a seven-person squad with bulk candidate registration and strict tenant data isolation enforced via tenantId indexing.",
    stack: ["Node.js", "Express", "MongoDB", "Mongoose", "GitHub Actions", "REST APIs"],
    link: null,
    linkLabel: "Team Capstone Project",
    points: [
      "Built Candidate Management module in a 7-person team: bulk registration, group administration, and strict tenant isolation via tenantId indexing.",
      "Contributed backend services, controllers, and routes; collaborated through Agile sprint cycles, code reviews, and Git workflows.",
    ],
  },
];

export const SKILLS = [
  {
    group: "Backend Development",
    items: ["Node.js", "Express.js", "REST API Design", "MVC Architecture", "JWT", "RBAC", "Multitenant SaaS"],
  },
  {
    group: "Frontend Development",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
  },
  {
    group: "Databases",
    items: ["MongoDB", "Mongoose", "PostgreSQL"],
  },
  {
    group: "Cloud & DevOps",
    items: ["Cloudinary", "Render", "Vercel", "Nodemailer"],
  },
  {
    group: "Tools & Workflow",
    items: ["Git", "GitHub", "Postman", "Linux CLI", "Agile/Scrum", "Code Reviews"],
  },
  {
    group: "Languages",
    items: ["JavaScript", "Ruby", "HTML", "CSS"],
  },
];

export const CERTS = [
  { name: "Microsoft Certified: GitHub Foundations", date: "Jan 2026" },
  { name: "Alison Certified: Ruby Intermediate", date: "Nov 2025" },
];
