"use client";

import { useState } from "react";
import HeroTypewriter from "./hero-typewriter";

function calculateDuration(
  startDate: string,
  endDate: string | null = null,
): string {
  const monthMap: { [key: string]: number } = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11,
  };

  const parseDate = (dateStr: string) => {
    const parts = dateStr.toLowerCase().trim().split(" ");
    const month = monthMap[parts[0].slice(0, 3)];
    const year = parseInt(parts[1]);
    return { month, year };
  };

  const start = parseDate(startDate);
  let end = endDate && endDate !== "Present" ? parseDate(endDate) : null;

  if (!end) {
    const today = new Date();
    end = { month: today.getMonth(), year: today.getFullYear() };
  }

  let totalMonths = (end.year - start.year) * 12 + (end.month - start.month);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let duration = "";
  if (years > 0) duration += `${years} yr${years > 1 ? "s" : ""} `;
  if (months > 0) duration += `${months} mo${months > 1 ? "s" : ""}`;
  if (!duration) duration = "< 1 mo";

  const endDateStr = endDate === "Present" ? "Present" : endDate;
  return `${startDate} - ${endDateStr} · ${duration.trim()}`;
}

const navigation = [
  { href: "#intro", label: "Intro" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#achievements", label: "Wins" },
];

const featuredProjects = [
  {
    name: "ChatPDF",
    type: "Data",
    tag: "Personal",
    description:
      "A conversational RAG application that accepts multiple PDFs for question-answering.",
    stack: ["Python", "LangChain", "Streamlit"],
  },
  {
    name: "Videta",
    type: "Data",
    tag: "School",
    description:
      "A notebook-like data cleaning, visualization, and reporting tool for fast analysis without needing to code.",
    stack: ["NextJS", "React", "Tailwind"],
  },
  {
    name: "OCC Weavers HR System",
    type: "Web App",
    tag: "Client",
    description:
      "An HR system for managing employees, built for a top-tier construction company in Saudi Arabia.",
    stack: ["Laravel", "MariaDB", "FilamentPHP"],
  },
  {
    name: "ASDigi",
    type: "Mobile App",
    tag: "Hackathon / Personal",
    description:
      "An app for parents of children with ASD to track development and learn more about their condition.",
    stack: ["Flutter", "Firebase"],
  },
  {
    name: "Harifind",
    type: "Web App",
    tag: "School",
    description: "A community-driven platform for lost and found items.",
    stack: ["Django", "Tailwind"],
  },
  {
    name: "ChatPLM",
    type: "Data",
    tag: "School",
    description:
      "A chatbot trained on PLM data for university-specific information queries.",
    stack: ["Python", "Tensorflow", "Streamlit", "FastAPI"],
  },
];

const moreProjects = [
  {
    name: "Simplest+",
    type: "Desktop app",
    tag: "School",
    description:
      "A programming language and compiler based on Python and C++, built for Automata Theory and Compiler Design.",
    stack: ["Python"],
  },
  {
    name: "Identifying Vehicular Accident Hotspots in Metro Manila Using DBSCAN",
    type: "Data",
    tag: "Hackathon",
    description:
      "A machine learning project focused on identifying accident hotspots in Metro Manila using DBSCAN.",
    stack: ["Python"],
  },
  {
    name: "Analyzing Friends the Sitcom",
    type: "Data",
    tag: "Personal",
    description:
      "A data project exploring the sitcom Friends through an episode-level dataset.",
    stack: ["Python"],
  },
  {
    name: "Unagi",
    type: "Mobile App",
    tag: "Personal",
    description:
      "A to-do app designed around helping users beat procrastination rather than just list tasks.",
    stack: ["Java", "Android SDK"],
  },
  {
    name: "Rekindle",
    type: "Mobile App",
    tag: "Hackathon",
    description:
      "A study collaboration app that helps students review together for exams.",
    stack: ["Java", "Android SDK", "Firebase"],
  },
];

const topProjects = featuredProjects.slice(0, 3);
const otherProjects = [...featuredProjects.slice(3), ...moreProjects];

const experiences = [
  {
    company: "Tenet Healthcare",
    companyMeta: "Full-time",
    startDate: "Jul 2025",
    endDate: "Present",
    location: "Taguig, National Capital Region, Philippines · Remote",
    roles: [
      {
        title: "Associate Data Engineer",
        startDate: "Jul 2025",
        endDate: "Present",
        summary:
          "Works under the Platform Engineering team, focused on developing and maintaining internal tools and framework to support Data Engineers.",
        skills: ["Google Cloud Run", "Apache Airflow", "+4 skills"],
      },
    ],
  },
  {
    company: "S.P. Madrid",
    companyMeta: "Internship",
    startDate: "Jul 2024",
    endDate: "Aug 2024",
    location: "Philippines · On-site",
    roles: [
      {
        title: "AI Intern",
        startDate: "Jul 2024",
        endDate: "Aug 2024",
        summary:
          "Contributed during an AI-focused internship with hands-on engineering and implementation work.",
        skills: [
          "API Development",
          "Python (Programming Language)",
          "+2 skills",
        ],
      },
    ],
  },
  {
    company: "Google Developer Student Clubs PLM",
    companyMeta: "2 yrs 11 mos",
    startDate: "Sep 2021",
    endDate: "Jul 2024",
    location: "Philippines / Manila, National Capital Region, Philippines",
    roles: [
      {
        title: "Mobile Development Lead",
        startDate: "Sep 2023",
        endDate: "Jul 2024",
        summary:
          "Led mobile development initiatives within the student developer community and helped guide project direction for the team.",
        skills: ["Flutter", "Mobile Develop", "+1 skill"],
      },
      {
        title: "Chief Technology Officer",
        startDate: "Aug 2022",
        endDate: "Oct 2023",
        summary:
          "Oversaw technical direction and contributed across engineering leadership, product thinking, and team execution.",
        skills: ["Computer Science", "Full-Stack Development"],
      },
      {
        title: "Mobile Application Development Volunteer",
        startDate: "Sep 2021",
        endDate: "Aug 2022",
        summary:
          "Started out contributing to mobile application development efforts as a volunteer in the organization.",
        skills: [],
      },
    ],
  },
];

const stackGroups = [
  {
    label: "Mobile Dev",
    items: ["Flutter", "Java", "Firebase"],
  },
  {
    label: "Data Science / Machine Learning / AI",
    items: [
      "SQL",
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Scikit-learn",
      "Tensorflow",
      "LangChain",
    ],
  },
  {
    label: "Web Dev",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Laravel",
      "Django",
    ],
  },
  {
    label: "Others",
    items: ["C", "C++"],
  },
];

const achievements = [
  {
    year: "2024",
    title: "Top 15 of 56 groups",
    detail: "Regional Pitching, Philippine Startup Challenge 9",
  },
  {
    year: "2023",
    title: "GDSC Loyola Hackfest 2023 FWD Insurance Case Winner",
    detail: "Hackathon winner",
  },
  {
    year: "2022",
    title: "Tara ML?: A Zero to Hero Machine Learning Journey Winner",
    detail: "Machine learning competition winner",
  },
  {
    year: "2021",
    title: "HackLasalle 2021 Champion",
    detail: "Hackathon champion",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative flex min-h-screen flex-1 overflow-hidden px-4 py-4 text-[var(--color-foreground)] sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="surface relative mx-auto flex w-full max-w-7xl flex-col rounded-[2rem] border border-[var(--color-line)]">
        <header className="fixed right-4 top-4 z-30 sm:left-1/2 sm:right-auto sm:max-w-[calc(100%-2rem)] sm:-translate-x-1/2">
          <div className="hidden sm:inline-flex no-scrollbar max-w-full flex-nowrap items-center justify-center gap-2 overflow-x-auto rounded-[1.5rem] border border-[var(--color-line)] bg-[rgba(244,239,231,0.72)] px-3 py-3 shadow-[0_12px_30px_rgba(49,39,28,0.06)] backdrop-blur-xl sm:px-5">
            {navigation.map((item) => (
              <a
                key={item.href}
                className="shrink-0 rounded-full border border-[var(--color-line)] px-3 py-2 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-line-strong)] hover:bg-[var(--color-accent)]"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-muted)] transition-all duration-300 hover:border-[var(--color-line-strong)] hover:bg-[var(--color-accent)]"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>

          {isMenuOpen && (
            <div className="sm:hidden absolute right-0 top-full mt-2 flex w-48 flex-col gap-2 rounded-[1rem] border border-[var(--color-line)] bg-white p-3 shadow-[0_12px_30px_rgba(49,39,28,0.06)]">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full border border-[var(--color-line)] px-3 py-2 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--color-line-strong)] hover:bg-[var(--color-accent)] text-center"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </header>

        <section
          id="intro"
          className="min-h-[calc(100vh-2rem)] px-5 pb-10 pt-18 sm:px-8 sm:pb-14 sm:pt-20 lg:px-12 lg:pb-20 lg:pt-22"
        >
          <div className="flex flex-col gap-8 lg:gap-10">
            <div className="reveal-up">
              <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                Hi, I&apos;m Amyr
              </p>
              <h1 className="font-display text-[clamp(3.6rem,11vw,8.6rem)] leading-[0.86] tracking-[-0.065em] text-balance">
                <HeroTypewriter />
              </h1>
            </div>

            <div className="grid gap-8 border-t border-[var(--color-line)] pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,16rem)]">
              <div className="reveal-up max-w-2xl space-y-5 text-base leading-7 text-[var(--color-muted)] sm:text-lg [animation-delay:120ms]">
                <p>
                  I&apos;m a software developer and aspiring AI/ML engineer. My
                  work spans projects made for fun, for school, for clients, and
                  for hackathons, often as a lead developer on the team.
                </p>
                <p>
                  I like building products that are useful first, then shaping
                  them until the interface feels calm, fast, and memorable.
                </p>
                <p className="flex items-center gap-4 pt-2 text-sm leading-6 text-[var(--color-muted)]">
                  <span className="scroll-line h-12 w-px bg-[var(--color-line-strong)]" />
                  Scroll for projects, stack, and recent wins.
                </p>
                <div className="pt-2">
                  <a
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-foreground)] px-5 text-sm uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-black"
                    href="#projects"
                  >
                    View projects
                  </a>
                </div>
              </div>

              <div className="reveal-up flex flex-col gap-4 text-sm uppercase tracking-[0.22em] text-[var(--color-muted)] [animation-delay:240ms]">
                <p>Current direction</p>
                <p className="text-[var(--color-foreground)]">Web apps</p>
                <p className="text-[var(--color-foreground)]">Mobile apps</p>
                <p className="text-[var(--color-foreground)]">AI / ML tools</p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="grid gap-10 border-t border-[var(--color-line)] px-5 py-12 sm:px-8 lg:grid-cols-[minmax(12rem,15rem)_1fr] lg:gap-14 lg:px-12 lg:py-18"
        >
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="reveal-up text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Selected Projects
            </p>
            <p className="reveal-up mt-5 max-w-xs text-base leading-7 text-[var(--color-muted)] [animation-delay:120ms]">
              These are the projects I’ve made for fun, for school, for clients,
              and for hackathons as a lead developer on our team.
            </p>
          </div>

          <div className="grid gap-5">
            {topProjects.map((project, index) => (
              <article
                key={project.name}
                className="reveal-up rounded-[1.75rem] border border-[var(--color-line)] px-5 py-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-line-strong)] hover:bg-white/55 sm:px-6"
                style={{ animationDelay: `${index * 90 + 120}ms` }}
              >
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                        {project.type} / {project.tag}
                      </p>
                      <h2 className="mt-2 font-display text-4xl tracking-[-0.045em]">
                        {project.name}
                      </h2>
                    </div>
                    <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <p className="max-w-3xl text-base leading-7 text-[var(--color-muted)]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-[var(--color-line)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}

            <details className="reveal-up group rounded-[1.75rem] border border-[var(--color-line)] px-5 py-6 [animation-delay:420ms] sm:px-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
                    Other Projects
                  </p>
                  <p className="mt-2 text-base leading-7 text-[var(--color-muted)]">
                    Open to see the rest of the project list.
                  </p>
                </div>
                <span className="rounded-full border border-[var(--color-line)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)] transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>

              <div className="mt-6 grid gap-3">
                {otherProjects.map((project) => (
                  <article
                    key={project.name}
                    className="rounded-[1.25rem] border border-[var(--color-line)] px-4 py-4"
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div className="max-w-3xl">
                        <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                          {project.type} / {project.tag}
                        </p>
                        <h3 className="mt-2 font-display text-2xl leading-tight tracking-[-0.03em]">
                          {project.name}
                        </h3>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:max-w-xs sm:justify-end">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-[var(--color-line)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </details>
          </div>
        </section>

        <section
          id="experience"
          className="grid gap-10 border-t border-[var(--color-line)] px-5 py-12 sm:px-8 lg:grid-cols-[minmax(12rem,15rem)_1fr] lg:gap-14 lg:px-12 lg:py-18"
        >
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="reveal-up text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Experience
            </p>
            <p className="reveal-up mt-5 max-w-xs text-base leading-7 text-[var(--color-muted)] [animation-delay:120ms]">
              A concise experience snapshot of recent engineering and product
              work that supports the projects presented above.
            </p>
          </div>

          <div className="relative pl-8 sm:pl-10">
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-3 top-2 w-px bg-[var(--color-line)] sm:left-4"
            />
            {experiences.map((item, index) => (
              <article
                key={item.company}
                className="reveal-up relative mb-4 rounded-[1.5rem] border border-[var(--color-line)] bg-white/45 px-5 py-5 transition-all duration-500 hover:border-[var(--color-line-strong)] hover:bg-white/60"
                style={{ animationDelay: `${index * 120 + 120}ms` }}
              >
                <span
                  aria-hidden="true"
                  className="absolute left-[-2rem] top-6 h-3 w-3 rounded-full border border-[var(--color-line-strong)] bg-[var(--background)] sm:left-[-2.4rem]"
                />

                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3 border-b border-[var(--color-line)] pb-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="max-w-3xl">
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                        {item.companyMeta}
                      </p>
                      <h2 className="mt-1 font-display text-3xl leading-tight tracking-[-0.035em]">
                        {item.company}
                      </h2>
                      <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">
                        {calculateDuration(item.startDate, item.endDate)}
                      </p>
                      <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {item.roles.map((role, roleIndex) => (
                      <div
                        key={`${item.company}-${role.title}-${role.period}`}
                        className={
                          roleIndex === 0
                            ? ""
                            : "border-t border-[var(--color-line)] pt-4"
                        }
                      >
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div className="max-w-3xl">
                            <h3 className="text-lg font-semibold tracking-[-0.02em] sm:text-xl">
                              {role.title}
                            </h3>
                            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                              {calculateDuration(role.startDate, role.endDate)}
                            </p>
                          </div>
                        </div>

                        <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
                          {role.summary}
                        </p>

                        {role.skills.length ? (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {role.skills.map((skill) => (
                              <span
                                key={skill}
                                className="rounded-full border border-[var(--color-line)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--color-muted)]"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}

            <a
              className="reveal-up ml-0 inline-flex min-h-12 w-fit items-center justify-center rounded-full border border-[var(--color-line-strong)] px-5 text-sm uppercase tracking-[0.2em] text-[var(--color-foreground)] transition-colors duration-300 hover:bg-[var(--color-accent)] [animation-delay:260ms]"
              href="https://www.linkedin.com/in/amyr-edmar-francisco-a5b425224/"
              target="_blank"
              rel="noreferrer"
            >
              Open LinkedIn
            </a>
          </div>
        </section>

        <section
          id="stack"
          className="grid gap-10 border-t border-[var(--color-line)] px-5 py-12 sm:px-8 lg:grid-cols-[minmax(12rem,15rem)_1fr] lg:gap-14 lg:px-12 lg:py-18"
        >
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="reveal-up text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Tech Stack
            </p>
            <p className="reveal-up mt-5 max-w-xs text-base leading-7 text-[var(--color-muted)] [animation-delay:120ms]">
              Here is a summary of the programming languages, frameworks,
              platforms, and libraries I’ve used and currently using.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stackGroups.map((group, index) => (
              <div
                key={group.label}
                className="reveal-up rounded-[1.5rem] border border-[var(--color-line)] p-5 transition-transform duration-500 hover:-translate-y-1"
                style={{ animationDelay: `${index * 120 + 100}ms` }}
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  {group.label}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/60 px-3 py-2 text-sm text-[var(--color-foreground)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          id="achievements"
          className="grid gap-10 border-t border-[var(--color-line)] px-5 py-12 sm:px-8 lg:grid-cols-[minmax(12rem,15rem)_1fr] lg:gap-14 lg:px-12 lg:py-18"
        >
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="reveal-up text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Achievements
            </p>
            <p className="reveal-up mt-5 max-w-xs text-base leading-7 text-[var(--color-muted)] [animation-delay:120ms]">
              I love hackathons! Here are some of my achievements in the past.
            </p>
          </div>

          <div className="grid gap-4">
            {achievements.map((item, index) => (
              <article
                key={`${item.year}-${item.title}`}
                className="reveal-up rounded-[1.5rem] border border-[var(--color-line)] px-5 py-5 transition-all duration-500 hover:border-[var(--color-line-strong)] hover:bg-white/55"
                style={{ animationDelay: `${index * 120 + 120}ms` }}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-xs uppercase tracking-[0.26em] text-[var(--color-muted)]">
                      {item.year}
                    </p>
                    <h2 className="mt-2 font-display text-3xl leading-tight tracking-[-0.035em]">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-base leading-7 text-[var(--color-muted)]">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="grid gap-8 border-t border-[var(--color-line)] px-5 py-10 sm:px-8 lg:px-12 lg:py-14">
          <div className="reveal-up space-y-5">
            <h2 className="mt-4 font-display text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.94] tracking-[-0.05em]">
              Work with me.
            </h2>
            <p className="max-w-md text-base leading-7 text-[var(--color-muted)]">
              Looking for a developer who can turn product ideas into polished
              web, mobile, or AI-powered experiences? Let&apos;s build it
              together.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-transparent px-5 text-sm uppercase tracking-[0.2em] text-[var(--color-foreground)] transition-colors duration-300 hover:bg-[var(--color-accent)] sm:flex-none"
                href="#intro"
              >
                Back to top
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-foreground)] px-5 text-sm uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-black sm:flex-none"
                href="mailto:amyrfrancisco11@gmail.com"
              >
                Work with me
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
