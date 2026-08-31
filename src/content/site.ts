/**
 * Single source of truth for every piece of copy on the site.
 * All facts are taken verbatim from Sheila's CV — nothing here is invented.
 */

export type ProjectTag =
  | "Requirement Analysis"
  | "Development"
  | "Database"
  | "Testing";

export const profile = {
  name: "Sheila Gracia Angelina",
  firstName: "Sheila",
  role: "Senior System Analyst",
  tagline: "Hey There, I'm Sheila",
  location: "West Jakarta, Indonesia",
  email: "sgasheila21@gmail.com",
  phone: "+62 856 7017 461",
  phoneHref: "+628567017461",
  linkedin: "linkedin.com/in/sheila-gracia-angelina",
  linkedinHref: "https://www.linkedin.com/in/sheila-gracia-angelina",
  resume: "/Resume_Sheila_Gracia_Angelina.pdf",
  careerStart: "2020-03-01",
  /** The line stamped under the hero's credential mark. */
  badge: "Senior System Analyst",
  intro:
    "I turn tangled requirements into systems people can actually use, and I love what I do.",
  summary: [
    "Results-driven system analyst with a dual academic background in Computer Science and Statistics, and a strong foundation in software development and system analysis.",
    "Experienced in managing end-to-end IT project lifecycles, from requirements gathering and system design through to deployment and documentation.",
    "Skilled in programming and system design, with a proven ability to collaborate with stakeholders and lead cross-functional teams.",
  ],
} as const;

export const services: {
  title: string;
  tag: ProjectTag;
  blurb: string;
  accent: "teal" | "yellow" | "coral";
}[] = [
  {
    title: "Requirement Engineering",
    tag: "Requirement Analysis",
    blurb:
      "Gathering, challenging, and translating stakeholder needs into technical specifications a development team can build from.",
    accent: "teal",
  },
  {
    title: "Database Design & Management",
    tag: "Database",
    blurb:
      "Data models, schema design, and day-to-day database management across SQL Server, MySQL, and PostgreSQL.",
    accent: "yellow",
  },
  {
    title: "QA, Testing & UAT",
    tag: "Testing",
    blurb:
      "System testing, user acceptance testing, and the documentation that gets a release signed off with confidence.",
    accent: "coral",
  },
];

export const stats: {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
}[] = [
  { value: 10, label: "Projects delivered" },
  { value: 6, label: "Team members led" },
  { value: 4, label: "Roles, one company" },
  { value: 3.82, decimals: 2, label: "GPA out of 4.00" },
];

export const experience = [
  {
    role: "Project Officer",
    org: "IT Division, Bina Nusantara Group",
    period: "Oct 2024 — Present",
    current: true,
    bullets: [
      "Lead project planning and execution for software development, ensuring alignment with client needs and organizational goals.",
      "Collaborate with stakeholders to gather requirements and translate them into technical specifications for the development team.",
      "Perform system analysis and design, optimizing processes to improve software performance.",
      "Supervise a team of 5 programmers and 1 associate system analyst, guiding system analysis and programming tasks to keep deliverables on time.",
      "Run system testing, User Acceptance Testing (UAT), and database management to ensure the quality and performance of applications.",
      "Develop and maintain project documentation, including system architecture and user manuals.",
    ],
  },
  {
    role: "Project Staff",
    org: "IT Division, Bina Nusantara Group",
    period: "Oct 2022 — Sep 2024",
    current: false,
    bullets: [
      "Gathered requirements and conducted analysis to define the scope of various software development projects.",
      "Participated in system design discussions and contributed to the development of software applications using Laravel.",
      "Conducted User Acceptance Testing (UAT) and provided support during the deployment phase, ensuring system functionality met user expectations.",
      "Documented system processes and user guides to facilitate training for end-users.",
      "Coordinated project schedules and tracked progress to ensure timely delivery of applications.",
    ],
  },
  {
    role: "Junior Project Staff",
    org: "IT Division, Bina Nusantara Group",
    period: "Mar 2021 — Sep 2022",
    current: false,
    bullets: [
      "Supported requirement analysis, system design, and development tasks.",
      "Contributed to programming tasks using Laravel for web applications.",
      "Involved in system testing and debugging to ensure software functionality and quality assurance.",
      "Worked with senior staff to identify process improvements, leading to increased project efficiency.",
      "Helped maintain project documentation, including meeting notes and project updates.",
    ],
  },
  {
    role: "Associate Member",
    org: "IT Division, Bina Nusantara Group",
    period: "Mar 2020 — Feb 2021",
    current: false,
    bullets: [
      "Developed and maintained web-based applications using PHP, contributing to both front-end and back-end development.",
      "Collaborated with senior developers to design and implement database solutions using SQL Server.",
      "Conducted unit testing and debugging to ensure the quality and functionality of code, resolving system issues in a timely manner.",
    ],
  },
];

export type Project = {
  /** Also the image filename: public/projects/<slug>.png (png, jpg or webp). */
  slug: string;
  name: string;
  full?: string;
  client: string;
  /** The role Sheila held while working on it — the CV groups projects this way. */
  during: string;
  description: string;
  /** Sheila's own scope on the project, worded as it is on her CV. */
  role: string;
  tags: ProjectTag[];
};

export const projects: Project[] = [
  {
    slug: "siaga",
    name: "SIAGA",
    full: "Sistem Informasi Kelembagaan",
    client: "Kemdiktisaintek",
    during: "Junior Project Staff",
    description:
      "Higher-education institutional registration — universities, study programs, and related services.",
    role: "Requirement analysis, Laravel development, database management, and system testing.",
    tags: ["Requirement Analysis", "Development", "Database", "Testing"],
  },
  {
    slug: "igcn",
    name: "IGCN",
    full: "Indonesia Global Compact Network",
    client: "UN Global Compact Indonesia",
    during: "Junior Project Staff",
    description:
      "Platform supporting UN Global Compact initiatives across Indonesia.",
    role: "Requirement analysis, Laravel development, database management, and system testing.",
    tags: ["Requirement Analysis", "Development", "Database", "Testing"],
  },
  {
    slug: "pisn",
    name: "PISN",
    full: "Penomoran Ijazah dan Sertifikat Nasional",
    client: "Kemdiktisaintek",
    during: "Junior Project Staff, continued as Project Officer",
    description:
      "National service that assigns unique certificate and diploma numbers.",
    role: "Requirement analysis, database management, and testing.",
    tags: ["Requirement Analysis", "Database", "Testing"],
  },
  {
    slug: "piln",
    name: "PILN",
    full: "Penyetaraan Ijazah Luar Negeri",
    client: "Kemdiktisaintek",
    during: "Junior Project Staff",
    description: "Foreign degree equivalency assessment and issuance.",
    role: "Requirement analysis, database management, and system testing.",
    tags: ["Requirement Analysis", "Database", "Testing"],
  },
  {
    slug: "biduk",
    name: "BIDUK",
    full: "Basis Integrasi Data Umat Keuskupan",
    client: "Keuskupan Agung Jakarta",
    during: "Junior Project Staff",
    description: "Integrated parishioner data management for the archdiocese.",
    role: "Requirement analysis, database management, and system testing.",
    tags: ["Requirement Analysis", "Database", "Testing"],
  },
  {
    slug: "binus-partner",
    name: "BINUS Partner",
    client: "BINUS",
    during: "Junior Project Staff",
    description: "Internal application for managing partnership contacts.",
    role: "Requirement analysis, database management, and system testing.",
    tags: ["Requirement Analysis", "Database", "Testing"],
  },
  {
    slug: "binus-maya",
    name: "BINUS Maya",
    client: "BINUS",
    during: "Associate Member",
    description:
      "Internal academic system serving students, staff, and lecturers.",
    role: "Full-stack development in PHP — front-end, back-end, and database integration.",
    tags: ["Development", "Database"],
  },
  {
    slug: "developer-workspace",
    name: "Developer Workspace",
    client: "Bina Inovasi Global",
    during: "Project Officer",
    description:
      "Internal employee management application: attendance, leave, and project tracking.",
    role: "System testing.",
    tags: ["Testing"],
  },
  {
    slug: "binus-career",
    name: "BINUS Career",
    client: "BINUS",
    during: "Project Officer",
    description: "Internal recruitment application for students and alumni.",
    role: "System testing.",
    tags: ["Testing"],
  },
  {
    slug: "student-violation",
    name: "Student Violation",
    client: "BINUS",
    during: "Project Officer",
    description: "Internal application for monitoring student violations.",
    role: "System testing.",
    tags: ["Testing"],
  },
];

export const skillGroups = [
  {
    title: "Programming",
    items: ["PHP", "Laravel", "HTML/CSS", "JavaScript", "Java", "R", "C"],
  },
  {
    title: "Databases",
    items: ["Database Design", "SQL Server", "MySQL", "PostgreSQL"],
  },
  {
    title: "Development & Analysis",
    items: [
      "Requirement Gathering",
      "System Analysis & Design",
      "UI/UX",
      "UML",
    ],
  },
  {
    title: "Quality & Version Control",
    items: ["Technical Documentation", "QA Testing", "Git"],
  },
];

export const toolGroups = [
  { title: "Design & Prototyping", items: ["Figma", "Adobe XD", "Canva"] },
  {
    title: "IDE & Development",
    items: ["VS Code", "Visual Studio", "XAMPP", "Laragon", "PuTTY"],
  },
  { title: "Database Tools", items: ["DBeaver", "SSMS", "phpMyAdmin"] },
  {
    title: "Version Control & Collaboration",
    items: ["Git", "GitHub", "Azure DevOps", "Postman"],
  },
  {
    title: "Modeling & Documentation",
    items: ["Microsoft Visio", "Diagram.net", "Visual Paradigm"],
  },
  { title: "Productivity", items: ["Microsoft Office"] },
];

export const education = {
  degree: "Bachelor of Science in Computer Science and Statistics",
  school: "Bina Nusantara University",
  period: "Sep 2019 — Apr 2024",
  gpa: "3.82 / 4.00",
  honors: "Magna Cum Laude",
  thesis:
    "Spatial Analysis of Disconnected Areas Using INLA Method with Website-Based (Case Study: Malaria Disease in East Nusa Tenggara Province)",
};

export type Certification = {
  slug: string;
  name: string;
  issuer: string;
  year: string;
  /** Drives the badge emblem and colour. */
  topic: "java" | "solid" | "c" | "python" | "r";
  /** What the certificate covers — shown when the badge is opened. */
  summary: string;
  /**
   * Public credential link, if there is one. Paste the URL from Dicoding or
   * DQLab here and a "View credential" button appears on the badge.
   */
  url?: string;
};

export const certifications: Certification[] = [
  {
    slug: "dicoding-java",
    name: "Memulai Pemrograman Dengan Java",
    issuer: "Dicoding Indonesia",
    year: "2024",
    topic: "java",
    summary:
      "Java fundamentals: syntax, object-oriented programming, and the standard library.",
  },
  {
    slug: "dicoding-solid",
    name: "Belajar Prinsip Pemrograman SOLID",
    issuer: "Dicoding Indonesia",
    year: "2023",
    topic: "solid",
    summary:
      "The five SOLID principles and how they shape maintainable object-oriented design.",
  },
  {
    slug: "dicoding-c",
    name: "Memulai Pemrograman Dengan C",
    issuer: "Dicoding Indonesia",
    year: "2023",
    topic: "c",
    summary:
      "C fundamentals: data types, control flow, functions, pointers, and memory.",
  },
  {
    slug: "dqlab-python",
    name: "Introduction to Data Science with Python",
    issuer: "DQLab",
    year: "2021",
    topic: "python",
    summary:
      "Data handling and analysis in Python, from cleaning through to basic modelling.",
  },
  {
    slug: "dqlab-r",
    name: "Introduction to Data Science with R",
    issuer: "DQLab",
    year: "2021",
    topic: "r",
    summary:
      "Statistical computing in R: data structures, transformation, and visualisation.",
  },
];

export const awards = [
  "Magna Cum Laude Honors",
  "Finalist — Statistics Enthusiastic Asia Student Paper Competition (ASPC) 2022, Islamic University of Indonesia",
  "Finalist — RASIO: Statistics Olympiad, Padjadjaran University",
];

export const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Professional" },
];

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/** Whole years since Sheila started in IT — kept in sync with the CV automatically. */
export function yearsOfExperience(now: Date = new Date()): number {
  const start = new Date(profile.careerStart);
  let years = now.getFullYear() - start.getFullYear();
  const beforeAnniversary =
    now.getMonth() < start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() < start.getDate());
  if (beforeAnniversary) years -= 1;
  return years;
}

/** How many of the listed projects involved a given kind of work. */
export function projectCountByTag(tag: ProjectTag): number {
  return projects.filter((p) => p.tags.includes(tag)).length;
}
