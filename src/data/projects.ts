export type Screenshot = {
  src: string;
  alt: string;
  caption: string;
  // "wide" for desktop screenshots, "phone" for mobile app screens.
  shape: "wide" | "phone";
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  short: string;
  tech: string[];
  status?: string;
  overview: string;
  problem: string;
  built: string[];
  contribution: string;
  challenges: string[];
  screenshots: Screenshot[];
  // Card cover image (optional). Only set for projects with real screenshots.
  cover?: Screenshot;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "lg-agent",
    name: "LG-Agent",
    tagline: "Lead Generation & Management System",
    short:
      "A system to collect, validate, and organize business leads, backed by a FastAPI service and PostgreSQL.",
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Playwright", "Next.js"],
    overview:
      "LG-Agent is a lead generation and management system that discovers business leads, enriches them with contact details from multiple sources, and organizes everything into a searchable sales CRM. It pairs a FastAPI backend with a Next.js dashboard used by the sales team.",
    problem:
      "Sales teams waste time chasing incomplete or duplicated business data spread across different sources. The goal was to gather leads automatically, clean them up, and present a single reliable list that sales staff can filter, search, and act on.",
    built: [
      "A FastAPI backend exposing REST APIs for lead discovery, storage, and updates.",
      "Data enrichment that pulls email, phone, and website information from multiple sources.",
      "Validation and duplicate handling so the lead list stays clean.",
      "Filtering and search across company, city, and business type.",
      "A dashboard with sales metrics, a leads inbox, and per-lead contact tracking.",
    ],
    contribution:
      "I worked on the backend and data side: designing the FastAPI endpoints, modelling the database with SQLAlchemy and PostgreSQL, writing the data enrichment and validation logic, and debugging issues where external services returned unreliable or incomplete data.",
    challenges: [
      "Handling duplicate data across leads collected from different sources.",
      "Managing incomplete business information (missing email, phone, or website).",
      "Working with unreliable external services that failed or returned partial data.",
      "Debugging API and database issues under real, messy data.",
    ],
    cover: {
      src: "/projects/lg-agent/dashboard.png",
      alt: "LG-Agent sales CRM dashboard showing lead metric cards",
      caption: "Sales CRM dashboard",
      shape: "wide",
    },
    screenshots: [
      {
        src: "/projects/lg-agent/dashboard.png",
        alt: "LG-Agent dashboard with total leads, calls, follow-ups and cities covered",
        caption: "Dashboard  sales overview with key lead metrics",
        shape: "wide",
      },
      {
        src: "/projects/lg-agent/leads-search.png",
        alt: "LG-Agent leads page with search and filter controls",
        caption: "Leads  search and filter by company, city, status and priority",
        shape: "wide",
      },
      {
        src: "/projects/lg-agent/new-leads.png",
        alt: "LG-Agent new leads inbox queue",
        caption: "New Leads  inbox queue for freshly generated leads",
        shape: "wide",
      },
      {
        src: "/projects/lg-agent/sales.png",
        alt: "LG-Agent sales page listing field-visit leads with contact status",
        caption: "Sales  field-visit leads with editable contact status and notes",
        shape: "wide",
      },
      {
        src: "/projects/lg-agent/reports.png",
        alt: "LG-Agent reports page with call-log activity and filters",
        caption: "Reports  call-log activity with date, source and status filters",
        shape: "wide",
      },
    ],
  },
  {
    slug: "employee-management-system",
    name: "Employee Management System",
    tagline: "Mobile-first EMS for HR, attendance & sales teams",
    short:
      "A mobile-first employee app for attendance, leave, and sales tracking with role-based access and location handling.",
    tech: [
      "React Native",
      "Expo",
      "TypeScript",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
    ],
    overview:
      "A mobile-first Employee Management System for HR, attendance, and sales employees. Staff check in and out, request leave, and log field visits from their phone, while the backend enforces roles and validates location data.",
    problem:
      "Managing attendance and field activity for on-the-go employees is hard with paper or desktop-only tools. The app needed to work primarily on mobile, respect different roles (HR, attendance, sales), and record where and when actions happened.",
    built: [
      "Role-based functionality for HR, attendance, and sales employees.",
      "Attendance workflows with check-in / check-out and worked-hours tracking.",
      "Leave management for requesting and approving time off.",
      "Sales tracking for field-visit activity.",
      "GPS / location handling with validation on saved locations.",
      "A FastAPI backend with PostgreSQL for the app's data.",
    ],
    contribution:
      "I contributed to the backend API architecture and database integration with FastAPI, SQLAlchemy, and PostgreSQL, and helped design the attendance and location workflows that the React Native app depends on.",
    challenges: [
      "Designing attendance workflows that stay correct across check-in and check-out.",
      "GPS accuracy and validating saved locations.",
      "Structuring background location tracking on mobile.",
      "Designing scalable backend workflows for role-based access.",
    ],
    cover: {
      src: "/projects/ems/home-attendance.jpg",
      alt: "EMS mobile home screen showing today's work and check-out",
      caption: "Employee home & attendance",
      shape: "phone",
    },
    screenshots: [
      {
        src: "/projects/ems/login.jpg",
        alt: "EMS mobile sign-in screen",
        caption: "Sign in  employee login with remember-me and admin option",
        shape: "phone",
      },
      {
        src: "/projects/ems/home-attendance.jpg",
        alt: "EMS home screen showing working status, check-in time and worked hours",
        caption: "Home  live attendance status with check-in time and worked hours",
        shape: "phone",
      },
      {
        src: "/projects/ems/notifications.jpg",
        alt: "EMS notifications screen with leave approval and announcements",
        caption: "Alerts  leave approvals and announcements",
        shape: "phone",
      },
    ],
  },
  {
    slug: "quiz-platform",
    name: "Quiz Platform",
    tagline: "Full-stack quiz web application",
    short:
      "A full-stack quiz app with question management, user responses, and automatic score calculation.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    overview:
      "A full-stack quiz web application where quizzes and questions are managed through APIs, users answer through an interactive interface, and scores are calculated automatically.",
    problem:
      "Running quizzes manually is slow and error-prone. The app makes it easy to create quizzes, serve questions to users, collect their responses, and score them without manual grading.",
    built: [
      "Quiz and question management.",
      "APIs for serving questions and recording user responses.",
      "Automatic score calculation.",
      "An interactive quiz-taking interface.",
    ],
    contribution:
      "I worked across the MERN stack  building the Express/Node APIs for questions and responses, wiring up the React quiz interface, and implementing the scoring logic.",
    challenges: [
      "Modelling quizzes, questions, and responses in MongoDB.",
      "Calculating scores reliably from submitted answers.",
      "Keeping the quiz interface responsive as users move through questions.",
    ],
    screenshots: [],
  },
  {
    slug: "cloud-drive",
    name: "Cloud Drive",
    tagline: "Browser-based cloud storage",
    short:
      "A collaboratively built cloud storage app with uploads, folders, and document, image, and video previews.",
    tech: ["MySQL", "Web technologies"],
    overview:
      "A browser-based cloud storage application, built collaboratively, that lets users upload files, organize them into folders, and preview documents, images, and videos in the browser.",
    problem:
      "People need a simple place to store and preview their files online without downloading everything first. Cloud Drive provides uploads, folder organization, and in-browser previews backed by a database that tracks file metadata.",
    built: [
      "File uploads.",
      "Folder management.",
      "In-browser previews for documents, images, and videos.",
      "A MySQL database storing file metadata.",
    ],
    contribution:
      "I contributed as part of a team, working on file handling and the MySQL data layer that tracks file and folder metadata.",
    challenges: [
      "Storing and organizing file metadata reliably in MySQL.",
      "Generating previews for different file types (documents, images, video).",
      "Coordinating the work across a collaborative team.",
    ],
    screenshots: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
