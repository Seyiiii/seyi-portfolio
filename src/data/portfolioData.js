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
  roleSecondary: "Full-Stack MERN & QA",
  roles: [
    "Software Developer",
    "Full-Stack MERN Developer",
    "Backend & APIs (Node.js)",
    "QA & Debugging",
  ],
  location: "Lagos, Nigeria",
  email: "ainaseyim@gmail.com",
  github: "https://github.com/Seyiiii",
  githubHandle: "github.com/Seyiiii",
  linkedin: "https://www.linkedin.com/in/oluwaseyiaina/",
  linkedinHandle: "linkedin.com/in/oluwaseyiaina",
  currentRole: "Technical Support at DVWorkers",
  status: "Technical Support at DVWorkers · open to software developer roles",
  resumeUrl: "/Oluwaseyi_Aina_Resume.pdf",
  bio: "Software developer in Lagos working with Node.js, Express, MongoDB, and React. I build full-stack web applications and APIs, and I test what I build. I studied physics at LASU, completed the TS Academy backend bootcamp, and work in technical support at DVWorkers, handling bugs, QA retesting, and documentation.",
};

export const NAV_LINKS = [
  { name: "About", href: "about" },
  { name: "Experience", href: "experience" },
  { name: "Work", href: "work" },
  { name: "Skills", href: "skills" },
  { name: "Contact", href: "contact" },
];

// Work & Technical Roles (Newest first)
export const EXPERIENCE = [
  {
    date: "2026 — PRESENT",
    role: "Technical Support",
    org: "DVWorkers",
    meta: "Lagos, Nigeria",
    points: [
      "Supporting a Lagos job marketplace for blue-collar workers, learning the codebase, architecture, and cloud setup from the development team.",
      "Fixing bugs, keeping technical documentation current, and monitoring AWS infrastructure usage.",
      "Retested 12 staging defects independently and maintain the test-case tracker. Built a Playwright crawler to speed up triage.",
      "Coordinating planned integrations with WhatsApp and Smile ID (identity verification).",
    ],
  },
  {
    date: "FEB — MAY 2026",
    role: "Backend Development Bootcamp",
    org: "TS Academy",
    meta: "Lagos, Nigeria · Intensive Fellowship",
    points: [
      "Four months of backend engineering: Node.js, Express, MongoDB, authentication, and REST API design.",
      "Capstone: a multitenant computer-based testing platform built by a team of seven. I wrote the Candidate Management module, including bulk registration and tenant data isolation.",
      "Collaborated in Agile sprints with peer code reviews and Git workflows.",
    ],
  },
  {
    date: "JUL — NOV 2024",
    role: "Project Engineer (Intern)",
    org: "Obitech Nig Ltd",
    meta: "Lagos, Nigeria · Undergraduate Internship",
    points: [
      "Helped senior engineers with project requirements, planning, and material and equipment estimates.",
      "Supported cross-functional coordination and technical documentation on active engineering projects.",
    ],
  },
];

// Certifications (Positioned before Education)
export const CERTS = [
  {
    name: "Microsoft Certified: GitHub Foundations",
    issuer: "Microsoft",
    date: "Jan 2026",
    tag: "DevOps & Version Control",
    color: C.teal,
  },
  {
    name: "Alison Certified: Ruby Intermediate",
    issuer: "Alison",
    date: "Nov 2025",
    tag: "Object-Oriented Programming",
    color: C.brass,
  },
];

// Formal Higher Education
export const EDUCATION = [
  {
    date: "JUL 2022 — SEP 2025",
    degree: "Bachelor of Science (BSc), Physics",
    school: "Lagos State University",
    meta: "Lagos, Nigeria · Undergraduate Degree",
    points: [
      "Most of a physics degree is measuring something carefully and working out why the result doesn't match the model. I debug software the same way: isolate variables, reproduce the problem, and change one thing at a time.",
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
      "An inventory and order management app with role-based access, built end-to-end on the MERN stack and deployed.",
    stack: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Nodemailer", "React", "Render", "Vercel"],
    link: "https://seyi-inventory-system.vercel.app/",
    linkLabel: "seyi-inventory-system.vercel.app",
    points: [
      "Five roles (Admin, Manager, Staff, Auditor, Viewer), each with its own permissions enforced on the backend with JWT authentication.",
      "Product catalog with Cloudinary image uploads, cart system, and an order checkout flow that verifies stock before an order completes.",
      "Audit logging for all stock movements, and Nodemailer for transactional email notifications.",
      "Deployed frontend on Vercel and Express API on Render.",
    ],
  },
  {
    status: "CAPSTONE",
    statusColor: C.rust,
    title: "Multitenant CBT Platform",
    category: "TS Academy — Group Capstone Project (2026)",
    description:
      "A multitenant computer-based testing platform built by a team of seven during the TS Academy bootcamp. My part was the Candidate Management module.",
    stack: ["Node.js", "Express", "MongoDB", "Mongoose", "GitHub Actions", "REST APIs"],
    link: null,
    linkLabel: "Team capstone project",
    points: [
      "Candidate Management: bulk registration, candidate groups, and tenant data isolation.",
      "Enforced tenant isolation by scoping queries with tenantId.",
      "Wrote backend services, controllers, and routes in Agile sprints with peer code reviews.",
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
