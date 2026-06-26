// =============================================================
//  PORTFOLIO DATA — Rupam Dutta
//  Edit this file to update your site content. Everything the
//  site renders is driven from here.
// =============================================================

export const profile = {
  name: "Rupam Dutta",
  initials: "RD",
  role: "Product Solution Engineer",
  company: "PhonePe",
  tagline: "Backend Engineer · Distributed Systems · Fintech",
  location: "Bengaluru, Karnataka, India",
  // Profile picture (place the image in /public). Leave "" to fall back to initials.
  avatar: "DP.jpg",
  // Short hero line
  headline:
    "I design and build backend systems — microservices, APIs, and distributed architectures — that hold up when things get real.",
  // Longer about section
  about: [
    "I'm a Product Solution Engineer with a backend-focused background, building scalable, high-throughput payment and reconciliation systems using Java, Spring Boot, Python, and microservices.",
    "I think about failure modes before writing the first line of code. My path into engineering came through product solutions, which shaped how I approach every technical decision — I don't just ask \"how do we build this?\", I ask \"should we build this, and what does the user actually need?\"",
    "I write code that's boring in the best way: readable, testable, and easy to change when the business pivots. I value simplicity over cleverness, working software over perfect abstractions, and clear communication over jargon.",
  ],
  resumeUrl: "Rupam-Dutta-Resume.pdf", // place the PDF in /public to enable download
};

export const contact = {
  email: "duttarupam2000@gmail.com",
  phone: "+91-8016829370",
  linkedin: "https://www.linkedin.com/in/rupamdutta2000",
  github: "https://github.com/dtrup00",
};

export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "~24%", label: "Downtime Reduced" },
  { value: "~40%", label: "Faster Refunds" },
  { value: "100%", label: "Data Consistency" },
];

export const experience = [
  {
    company: "PhonePe",
    role: "Product Solution Engineer",
    period: "May 2025 – Present",
    location: "Bengaluru, Karnataka",
    current: true,
    points: [
      "Architected a Python-based classification engine to automate financial reconciliation, strengthening data integrity and streamlining high-volume transaction workflows.",
      "Built an automated reporting pipeline querying mismatched, reconciled, and missing transactions across configurable date ranges, refreshing counts each next-day run for near real-time visibility.",
      "Optimized payment reconciliation systems with automated health checks and proactive monitoring, reducing production downtime by ~24%.",
      "Engineered a transaction checkpointing framework to detect real-time discrepancies between external partner sources and internal ledgers, sustaining ~100% data consistency.",
    ],
    tags: ["Python", "Reconciliation", "Monitoring", "Data Integrity"],
  },
  {
    company: "BookMyShow",
    role: "Software Development Engineer - 1",
    period: "May 2022 – June 2024",
    location: "Mumbai, Maharashtra",
    current: false,
    points: [
      "Optimized high-throughput payment and refund APIs using Spring Boot and Java, implementing configurable retry logic and idempotent timeouts that reduced transaction failures by ~10%.",
      "Architected a scalable multi-database (MySQL, MSSQL, MongoDB) refund API, automating policy compliance and accelerating refund processing cycles by ~40%.",
      "Re-engineered production payment workflows to eliminate bottlenecks, decreasing system downtime by ~20% through faster incident resolution, automated monitoring, and cross-functional collaboration.",
    ],
    tags: ["Java", "Spring Boot", "MySQL", "MongoDB", "MSSQL"],
  },
  {
    company: "Cognizant",
    role: "Programmer Analyst Trainee",
    period: "Dec 2021 – March 2022",
    location: "Bengaluru, Karnataka",
    current: false,
    points: [
      "Refactored core modules of a Java and MySQL client project, boosting system performance and enabling seamless enterprise-level deployment.",
    ],
    tags: ["Java", "MySQL"],
  },
  {
    company: "HighRadius",
    role: "Full-Stack Development Intern",
    period: "Jan 2021 – March 2021",
    location: "Bhubaneswar, Odisha",
    current: false,
    points: [
      "Built a full-stack application using Java, Python, and React, integrating ML classification models to automate invoice processing and reduce manual management time.",
    ],
    tags: ["Java", "Python", "React", "ML"],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Java", "C++", "Python", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["Spring Boot", "Hibernate", "REST APIs", "React"],
  },
  {
    category: "Databases",
    items: ["MySQL", "MSSQL", "MongoDB", "HBase"],
  },
  {
    category: "Concepts",
    items: [
      "Data Structures & Algorithms",
      "OOP",
      "System Design",
      "Microservices",
      "Multithreading",
      "Design Patterns",
    ],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "Maven", "Postman", "IntelliJ IDEA", "Linux", "CI/CD", "Agile/Scrum"],
  },
  {
    category: "Cloud & AI",
    items: ["AWS Lambda", "GitHub Copilot", "Claude", "ChatGPT"],
  },
];

export const projects = [
  {
    name: "Payments API",
    stack: "Spring Boot",
    description:
      "A Payment Gateway API built following clean architecture principles — supporting CRUD operations, robust input validation, and asynchronous processing for efficient payment management.",
    tags: ["Java", "Spring Boot", "REST", "Clean Architecture"],
    link: "https://github.com/dtrup00",
  },
  {
    name: "Financial Reconciliation Engine",
    stack: "Python",
    description:
      "A classification engine that automates financial reconciliation at scale — strengthening data integrity and streamlining high-volume transaction workflows with near real-time reporting.",
    tags: ["Python", "Automation", "Data Pipelines"],
    link: "https://github.com/dtrup00",
  },
  {
    name: "Multi-DB Refund API",
    stack: "Java · Spring Boot",
    description:
      "A scalable refund API spanning MySQL, MSSQL, and MongoDB that automates policy compliance and accelerated refund processing cycles by ~40%.",
    tags: ["Java", "Spring Boot", "MongoDB", "MySQL"],
    link: "https://github.com/dtrup00",
  },
];

export const certifications = [
  "Problem Solving (Intermediate)",
  "Algorithmic Toolbox",
  "Responsive Web Design (HTML, CSS, JS)",
  "C# (Basic)",
  "Problem Solving (Basic)",
];

export const education = [
  {
    school: "Kalinga Institute of Industrial Technology",
    degree: "Bachelor of Technology — Information Technology",
    period: "July 2018 – June 2022",
    location: "Bhubaneswar, Odisha",
  },
  {
    school: "Hem Sheela Model School, Durgapur",
    degree: "High School",
    period: "2016 – 2018",
    location: "Durgapur, West Bengal",
  },
];
