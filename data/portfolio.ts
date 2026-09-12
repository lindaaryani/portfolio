import { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiPhp,
  SiMysql,
  SiMariadb,
  SiPhpmyadmin,
  SiBootstrap,
  SiXampp,
  SiGit,
  SiGithub,
  SiGoogleappsscript,
  SiKalilinux,
  SiTryhackme,
  SiApachenetbeanside,
} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { TbBrandVscode } from "react-icons/tb";

// ===============================
// PROFILE
// ===============================

export const profile = {
  name: "Ni Kadek Linda Aryani",
  nickname: "Linda",
  role: "Information Systems Student",
  university: "ITB STIKOM Bali",
  location: "Bali, Indonesia",

  tagline:
    "Full-Stack Web Development • UI/UX Design • Cybersecurity",

  shortIntro:
    "Information Systems student with a Software Engineering background. I build role-based systems for real operational problems, and I'm currently expanding into cybersecurity and product design.",

  description:
    "I started in vocational Software Engineering before moving into Information Systems at ITB STIKOM Bali. Along the way, I've built a role-based agricultural monitoring system, automated a manual payroll process with Google Apps Script, and spent time in customer-facing and administrative roles that taught me how systems actually get used day to day. Outside of coursework, I train in public speaking and compete in Gateball at a provincial level. Right now, I'm expanding into cybersecurity and iOS development, working toward product-focused engineering roles.",

  // FOTO PROFILE
  image: "/images/linda.jpeg",

  available: true,

  github: "https://github.com/lindaaryani",

  linkedin: "https://linkedin.com/in/lindaaryani116",

  email: "lindaaryani116@gmail.com",

  resume: "/cv/Linda-Aryani-CV.pdf",

resumeAvailable: true,
};

// ===============================
// EDUCATION
// ===============================

export const education = {
  institution: "ITB STIKOM Bali",
  degree: "S1 Sistem Informasi",
  period: "2024 – Present",
  relevantAreas: [
    "Information Systems",
    "Cybersecurity",
    "UI/UX",
    "Database",
  ],
};

// ===============================
// HERO STATS
// ===============================

export const heroStats = [
  {
    value: "3",
    label: "Projects",
  },
  {
    value: "4",
    label: "Certificates",
  },
  {
    value: "1",
    label: "Research",
  },
  {
    value: "4",
    label: "Organizations",
  },
];

// ===============================
// EXPERIENCES
// ===============================

export const experiences = [
  {
    year: "2025",
    title: "Bookkeeping Assistant",
    company: "Greenfield Work and Flow Bali, Indonesia",
    description:
      "Supported daily administrative and financial operations, including employee and payroll documentation. While working with a manual payroll process, I noticed how much time was spent repeating the same tasks. I identified the inefficiency and took the initiative to build an automated payslip generation system using Google Apps Script and Google Sheets, applying technology to simplify a repetitive real-world workflow.",
  },

  {
    year: "2025",
    title: "Customer Service",
    company: "Schauberger Coffee | Bali, Indonesia",
    description:
      "Worked directly with domestic and international customers in a fast-paced environment where communication, attention to detail, and adaptability were essential. Managed customer orders and POS transactions, responded to questions and service issues under pressure, and developed active listening, empathy, teamwork, and communication skills through daily interaction with customers and coworkers.",
  },

  {
    year: "2023",
    title: "IT & Digital Operations Intern",
    company: "PT Teknologi Arcom Mediaksa | Bali, Indonesia",
    description:
      "Supported digital and operational activities in a technology-focused work environment. Maintained product inventory and pricing data, assisted with promotional and digital design materials, and organized operational documentation. This experience strengthened my accuracy, adaptability, responsibility, and ability to work with structured data and real-world digital workflows.",
  },
];

// ===============================
// SKILLS
// ===============================

export type SkillItem = {
  name: string;
  icon: IconType;
  color: string;
  invertOnDark?: boolean;
};

export type SkillCategory = {
  title: string;
  items: SkillItem[];
  tags?: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    items: [
      {
        name: "PHP",
        icon: SiPhp,
        color: "#777BB4",
      },
      {
        name: "Java",
        icon: DiJava,
        color: "#007396",
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        color: "#E34F26",
      },
      {
        name: "CSS3",
        icon: SiCss,
        color: "#1572B6",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
      },
      {
        name: "Google Apps Script",
        icon: SiGoogleappsscript,
        color: "#4285F4",
      },
    ],
  },

  {
    title: "Database",
    items: [
      {
        name: "MySQL",
        icon: SiMysql,
        color: "#4479A1",
      },
      {
        name: "MariaDB",
        icon: SiMariadb,
        color: "#003545",
      },
      {
        name: "phpMyAdmin",
        icon: SiPhpmyadmin,
        color: "#6C78AF",
      },
    ],
    tags: ["HeidiSQL", "MySQL Workbench"],
  },

  {
    title: "Frameworks & Tools",
    items: [
      {
        name: "Bootstrap",
        icon: SiBootstrap,
        color: "#7952B3",
      },
      {
        name: "XAMPP",
        icon: SiXampp,
        color: "#FB7A24",
      },
      {
        name: "NetBeans",
        icon: SiApachenetbeanside,
        color: "#1B6AC6",
      },
      {
        name: "VS Code",
        icon: TbBrandVscode,
        color: "#007ACC",
      },
      {
        name: "Git",
        icon: SiGit,
        color: "#F05032",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "#181717",
        invertOnDark: true,
      },
    ],
    tags: ["AdminLTE", "Laragon"],
  },

  {
    title: "Cybersecurity",
    items: [
      {
        name: "Kali Linux",
        icon: SiKalilinux,
        color: "#557C94",
      },
      {
        name: "TryHackMe",
        icon: SiTryhackme,
        color: "#212C42",
        invertOnDark: true,
      },
    ],
    tags: ["Basic Cybersecurity"],
  },

  {
    title: "System & Design",
    items: [],
    tags: [
      "System Analysis",
      "UML",
      "ERD",
      "Database Design",
      "UI/UX Design",
    ],
  },

  {
    title: "Portfolio / Web Development",
    items: [
      {
        name: "React",
        icon: SiReact,
        color: "#61DAFB",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "#000000",
        invertOnDark: true,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "#3178C6",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#06B6D4",
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: "#0055FF",
      },
    ],
  },
];

// ===============================
// PROJECTS
// ===============================

export type ProjectSource = "cv" | "academic";

export const projects: {
  title: string;
  description: string;
  problem: string;
  contribution: string;
  image: string;
  placeholderImage?: boolean;
  tech: string[];
  github: string;
  demo: string;
  source: ProjectSource;
}[] = [
  {
    title: "Automated Payroll Slip System",

    description:
      "A script-based system that generates individual payroll slips automatically from structured spreadsheet data.",

    problem:
      "Monthly payroll was calculated and distributed by hand, which was slow and left room for calculation errors.",

    contribution:
      "Identified the repetitive process, then built a Google Apps Script automation that connects structured payroll data to dynamic, individual PDF payslip generation.",

    // PROJECT IMAGE
    image: "/images/payrollslip.jpeg",

    tech: [
      "Google Apps Script",
      "Google Sheets",
      "JavaScript",
    ],

    github: "",

    demo: "#",

    source: "cv",
  },

  {
    title: "SIPATAN",

    description:
      "A role-based agricultural and food security information system built for Badung Regency.",

    problem:
      "Farmer registration, harvest verification, and commodity reporting were handled manually, with no shared system for Admin, Farmer, and Head of Department roles.",

    contribution:
      "Designed the system workflows, database structure, and role-based access, then implemented data management, harvest verification, and a reporting dashboard.",

    // PROJECT IMAGE
    image: "/images/sipatan.png",

    tech: [
      "PHP Native",
      "MySQL / MariaDB",
      "Bootstrap",
      "AdminLTE",
      "Laragon",
    ],

    github: "https://github.com/lindaaryani",

    demo: "#",

    source: "cv",
  },

  {
    title: "Family Values & Social Criticism in Sumala",

    description:
      "A qualitative research project exploring family values and social criticism in the Indonesian film Sumala through Roland Barthes' semiotic analysis.",

    problem:
      "The research examines how family values and social criticism are represented through signs, meanings, and narratives within the film.",

    contribution:
      "Contributed to the research process by analyzing the film using Roland Barthes' semiotic framework. The research was formally recorded as an intellectual work through an HKI Copyright Registration (No. 001303075).",

    // PROJECT IMAGE
    image: "/images/project3.png",

    tech: [
      "Roland Barthes Semiotics",
      "Qualitative Research",
      "Film Analysis",
    ],

    github: "",

    demo: "/documents/Surat-Pencatatan-Ciptaan-Sumala.pdf",

    source: "cv",
  },
];

// ===============================
// ACHIEVEMENTS
// ===============================

export const achievements = [
  {
    title: "Beasiswa Unggulan 2024",

    description:
      "Awarded the Beasiswa Unggulan scholarship by Kemendikbudristek for academic achievement and personal development.",
  },

  {
    title: "HKI Copyright Registration",

    description:
      "Research on family values and social criticism in the film Sumala officially registered with Indonesia's Intellectual Property Office (HKI No. 001303075).",
  },

  {
    title: "2nd Place – Women's Team Gateball",

    description:
      "PORPROV Bali 2025, provincial-level competition.",
  },

  {
    title: "3rd Place – Women's Doubles Gateball",

    description:
      "PORPROV Bali 2025, provincial-level competition.",
  },

  {
    title: "Google Cloud Arcade",

    description:
      "Actively participating in Google Cloud Arcade to strengthen cloud computing skills through hands-on labs.",
  },
];

// ===============================
// CERTIFICATIONS & CREDENTIALS
// ===============================

export const certifications = [
  {
    title: "Junior Assistant Programmer",
    issuer: "BNSP",
    year: "2024",
  },

  {
    title: "Cisco Cybersecurity Course",
    issuer: "Cisco Networking Academy",
    year: "2024",
  },

  {
    title: "Android Career Kickstart",
    issuer: "Dicoding",
    year: "2024",
  },

  {
    title: "Project Management",
    issuer: "ITB STIKOM Bali",
    year: "2025",
  },

  {
    title: "Desktop Office Training",
    issuer: "ITB STIKOM Bali",
    year: "2024",
  },

  {
    title: "Career Class with LinkedIn",
    issuer: "LinkedIn",
    year: "2026",
  },

  {
    title: "Belajar Strategi Pengembangan Diri",
    issuer: "Dicoding",
    year: "2026",
  },

  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding",
    year: "2026",
  },

  {
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding",
    year: "2026",
  },
];

// ===============================
// ORGANIZATIONAL & VOLUNTEER EXPERIENCE
// ===============================

export const organizations = [
  {
    role: "Member",
    org: "SYNTAX Public Speaking",
    period: "2026 – Present",
    description:
      "Training in impromptu speaking, vocal control, structured argumentation, and team presentation dynamics.",
  },

  {
    role: "Committee Member",
    org: "Campus Seminar, ITB STIKOM Bali",
    period: "2026",
    description:
      "Handled operational logistics, rundown coordination, and participant administration for a university seminar.",
  },

  {
    role: "Volunteer Referee",
    org: "PORJAR Bali",
    period: "2026",
    description:
      "Officiated regional student Gateball matches, enforcing competition rules, fair play, and rapid on-field decision-making.",
  },

  {
    role: "Competitive Athlete",
    org: "Persatuan Gateball Seluruh Indonesia",
    period: "2022 – Present",
    description:
      "Competing in provincial tournaments, maintaining tactical training, strategic planning, and teamwork under pressure.",
  },
];

// ===============================
// ABOUT STATS
// ===============================

export const stats = [
  {
    number: 3,
    title: "Projects",
  },

  {
    number: 9,
    title: "Certificates & Credentials",
  },

  {
    number: 1,
    title: "Research",
  },

  {
    number: 4,
    title: "Organizations",
  },
];

// ===============================
// TYPES
// ===============================

export type Experience = {
  year: string;
  title: string;
  company: string;
  description: string;
};

export type Achievement = {
  title: string;
  description: string;
};