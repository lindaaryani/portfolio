import { IconType } from "react-icons";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPhp,
  SiMysql,
  SiGooglecloud,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

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
    "Cloud Computing • Web Development • Cybersecurity",

  description:
    "I am an Information Systems student at ITB STIKOM Bali with a passion for building modern web applications, exploring cloud computing, and continuously learning new technologies to create impactful digital solutions.",

  image: "/images/profile.jpeg",

  available: true,

  github: "https://github.com/lindaaryani",

  linkedin: "https://linkedin.com/in/lindaaryani116",

  email: "lindaaryani116@gmail.com",

  resume: "/cv/Linda-Aryani-CV.pdf",
};

// ===============================
// HERO STATS
// ===============================

export const heroStats = [
  {
    value: "10+",
    label: "Projects",
  },
  {
    value: "8",
    label: "Certificates",
  },
  {
    value: "2",
    label: "Research",
  },
];

// ===============================
// EXPERIENCES
// ===============================

export const experiences = [
  {
    year: "2024 - Present",

    title: "Information Systems Student",

    company: "ITB STIKOM Bali",

    description:
      "Studying Information Systems with a strong interest in Cloud Computing, Web Development, and Cybersecurity while actively participating in academic and software development projects.",
  },

  {
    year: "2026",

    title: "Research Assistant",

    company: "ITB STIKOM Bali",

    description:
      "Contributed to academic research about family values and social criticism in Indonesian films. The publication received an official Copyright Registration Certificate (HKI).",
  },

  {
    year: "2026",

    title: "UKM Public Speaking",

    company: "ITB STIKOM Bali",

    description:
      "Active member participating in communication training, seminars, and public speaking events while improving teamwork and leadership skills.",
  },

  {
    year: "2026",

    title: "Portfolio Website",

    company: "Personal Project",

    description:
      "Designed and developed a modern portfolio website using Next.js, TypeScript, Tailwind CSS, and Framer Motion.",
  },
];

// ===============================
// SKILLS
// ===============================

// ===============================
// SKILLS
// ===============================

export type SkillItem = {
  name: string;
  icon: IconType;
  color: string;
  /** Set for icons whose brand color is near-black, so they stay
   * visible against dark-mode card backgrounds. */
  invertOnDark?: boolean;
};

export type SkillCategory = {
  title: string;
  items: SkillItem[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000", invertOnDark: true },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },

  {
    title: "Backend",
    items: [
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },

  {
    title: "Cloud",
    items: [
      { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },

  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717", invertOnDark: true },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
];
// ===============================
// PROJECTS
// ===============================

export const projects = [
  {
    title: "SIPATAN",

    description:
      "Agricultural Information System for Badung Regency developed using PHP Native and MySQL. Features include role-based authentication, farmer management, harvest verification, commodity management, and reporting dashboard.",

    image: "/images/project1.png",

    tech: [
      "PHP",
      "MySQL",
      "Bootstrap",
      "Laragon",
    ],

    github: "https://github.com/lindaaryani",

    demo: "#",
  },

  {
    title: "Decision Support System",

    description:
      "Tourism recommendation system using the MOORA method to rank tourist destinations in Badung Regency based on multiple decision criteria.",

    image: "/images/project2.png",

    tech: [
      "PHP",
      "MySQL",
      "MOORA",
    ],

    github: "https://github.com/lindaaryani",

    demo: "#",
  },

  {
    title: "Personal Portfolio",

    description:
      "Modern responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion featuring dark mode, smooth animations, and SEO optimization.",

    image: "/images/project3.png",

    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],

    github: "https://github.com/lindaaryani",

    demo: "#",
  },
];

// ===============================
// ACHIEVEMENTS
// ===============================

export const achievements = [
  {
    title: "Beasiswa Unggulan 2024",

    description:
      "Awarded the Beasiswa Unggulan scholarship for academic achievement and personal development.",
  },

  {
    title: "HKI Copyright Registration",

    description:
      "Research publication officially registered with Indonesia's Intellectual Property Office (HKI).",
  },

  {
    title: "Cisco Cybersecurity",

    description:
      "Completed Cisco Cybersecurity training covering networking, security fundamentals, and cyber threats.",
  },

  {
    title: "Gateball Athlete",

    description:
      "Represented Bali in regional Gateball competitions and achieved several provincial-level awards.",
  },

  {
    title: "Google Cloud Arcade",

    description:
      "Actively participating in Google Cloud Arcade to strengthen cloud computing skills through hands-on labs.",
  },
];
// ===============================
// ABOUT STATS
// ===============================

export const stats = [
  {
    number: 10,
    title: "Projects",
  },

  {
    number: 8,
    title: "Certificates",
  },

  {
    number: 2,
    title: "Research",
  },

  {
    number: 5,
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

export type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
};

export type Achievement = {
  title: string;
  description: string;
};