export interface Project {
  id: string;
  title: string;
  company: string;
  summary: string;
  techStack: string[];
  highlights: string[];
  image: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
  stack: string[];
}

export const PERSONAL_INFO = {
  name: "Desta Elias",
  role: "Software Engineer",
  tagline: "Building responsive web apps and mobile applications with React, Flutter, Node.js, and NestJS.",
  email: "joy730671@gmail.com",
  phone: "+251 929 293 220",
  github: "https://github.com/desta-elias",
  githubDisplay: "github.com/desta-elias",
  location: "Addis Ababa, Ethiopia",
  education: "BSc in Mechatronics Engineering (2026), Addis Ababa Science and Technology University",
  resumePdfUrl: "/assets/aistudio/Desta_Elias_ac6e8e60.pdf",
  workspaceImage: "/src/assets/images/clean_code_editor_screen_1793197675438.jpg",
};

export const PROJECTS: Project[] = [
  {
    id: "hus-deliver-ecommerce",
    title: "E-Commerce Platform",
    company: "Hus-Deliver",
    summary: "Full-stack e-commerce system with a React web store, Flutter mobile shopping app, and NestJS REST API backend.",
    techStack: ["React", "Flutter", "NestJS", "PostgreSQL"],
    highlights: [
      "Customer-facing web application in React",
      "Cross-platform shopping app in Flutter",
      "NestJS REST APIs for catalog, cart, and orders"
    ],
    image: "/src/assets/images/clean_ecommerce_ui_1793197003997.jpg"
  },
  {
    id: "smartcare-mobile-app",
    title: "SmartCare Healthcare App",
    company: "SmartCare",
    summary: "Clinical mobile application for real-time patient vitals monitoring and device controls with a NestJS and PostgreSQL backend.",
    techStack: ["Flutter", "Dart", "NestJS", "PostgreSQL"],
    highlights: [
      "Flutter mobile app with dark & light modes",
      "Real-time sensor telemetry and vital signs display",
      "NestJS & PostgreSQL backend for records and audit logs"
    ],
    image: "/src/assets/images/clean_smartcare_app_1793197004569.jpg"
  },
  {
    id: "college-management-system",
    title: "College Management System",
    company: "FDRE Akaki Kality Prison",
    summary: "Academic administration web portal for student records, course scheduling, and administrative workflows.",
    techStack: ["React", "Node.js", "Relational DB", "REST APIs"],
    highlights: [
      "Student records and enrollment management",
      "Course scheduling and department workflows",
      "REST APIs with relational database design"
    ],
    image: "/src/assets/images/clean_college_portal_1793197005209.jpg"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "hus-deliver",
    company: "Hus-Deliver",
    role: "Software Engineer",
    duration: "~1 year",
    description: "Built end-to-end e-commerce applications including the customer React web app, Flutter mobile app, and NestJS backend APIs.",
    stack: ["React", "Flutter", "NestJS", "PostgreSQL"]
  },
  {
    id: "smartcare",
    company: "SmartCare",
    role: "Mobile App Developer",
    duration: "4 months",
    description: "Developed a healthcare mobile app in Flutter and Dart with real-time vitals monitoring and NestJS/PostgreSQL backend services.",
    stack: ["Flutter", "Dart", "NestJS", "PostgreSQL"]
  },
  {
    id: "fdre",
    company: "FDRE Akaki Kality Prison",
    role: "Full-Stack Developer",
    duration: "6 months",
    description: "Engineered a college management web platform using React for the frontend and Node.js for backend APIs and database operations.",
    stack: ["React", "Node.js", "Relational DB"]
  }
];

export const SKILLS = [
  { category: "Frontend", items: ["React", "Flutter", "JavaScript", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "NestJS", "Python", "REST APIs"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  { category: "Tools", items: ["Git", "GitHub", "Agile / Scrum"] }
];
