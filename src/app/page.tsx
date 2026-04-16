import HeroTypewriter from "./hero-typewriter";

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
    totalDuration: "Jul 2025 - Present · 10 mos",
    location: "Taguig, National Capital Region, Philippines · Remote",
    roles: [
      {
        title: "Associate Data Engineer",
        period: "Jul 2025 - Present · 10 mos",
        summary:
          "Works under the Platform Engineering team, focused on developing and maintaining internal tools and framework to support Data Engineers.",
        skills: ["Google Cloud Run", "Apache Airflow", "+4 skills"],
      },
    ],
  },
  {
    company: "S.P. Madrid",
    companyMeta: "Internship",
    totalDuration: "Jul 2024 - Aug 2024 · 2 mos",
    location: "Philippines · On-site",
    roles: [
      {
        title: "AI Intern",
        period: "Jul 2024 - Aug 2024 · 2 mos",
        summary:
          "Contributed during an AI-focused internship with hands-on engineering and implementation work.",
        skills: ["API Development", "Python (Programming Language)", "+2 skills"],
      },
    ],
  },
  {
    company: "Google Developer Student Clubs PLM",
    companyMeta: "2 yrs 11 mos",
    totalDuration: "Sep 2021 - Jul 2024 · 2 yrs 11 mos",
    location: "Philippines / Manila, National Capital Region, Philippines",
    roles: [
      {
        title: "Mobile Development Lead",
        period: "Sep 2023 - Jul 2024 · 11 mos",
        summary:
          "Led mobile development initiatives within the student developer community and helped guide project direction for the team.",
        skills: ["Flutter", "Mobile Develop", "+1 skill"],
      },
      {
        title: "Chief Technology Officer",
        period: "Aug 2022 - Oct 2023 · 1 yr 3 mos",
        summary:
          "Oversaw technical direction and contributed across engineering leadership, product thinking, and team execution.",
        skills: ["Computer Science", "Full-Stack Development"],
      },
      {
        title: "Mobile Application Development Volunteer",
        period: "Sep 2021 - Aug 2022 · 1 yr",
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
  return (
    <main className="relative flex min-h-screen flex-1 overflow-hidden px-4 py-4 text-[var(--color-foreground)] sm:px-6 sm:py-6 lg:px-8 lg:py-8">
      <div className="surface relative mx-auto flex w-full max-w-7xl flex-col rounded-[2rem] border border-[var(--color-line)]">
        <header className="fixed left-1/2 top-4 z-30 max-w-[calc(100%-2rem)] -translate-x-1/2">
          <div className="no-scrollbar inline-flex max-w-full flex-nowrap items-center justify-center gap-2 overflow-x-auto rounded-[1.5rem] border border-[var(--color-line)] bg-[rgba(244,239,231,0.72)] px-3 py-3 shadow-[0_12px_30px_rgba(49,39,28,0.06)] backdrop-blur-xl sm:px-5">
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
              The top 3 projects stay visible up front, with the rest available
              in a collapsible list.
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
              A concise experience snapshot based on the publicly accessible
              LinkedIn preview and the work already represented in your
              portfolio.
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
                        {item.totalDuration}
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
                        className={roleIndex === 0 ? "" : "border-t border-[var(--color-line)] pt-4"}
                      >
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div className="max-w-3xl">
                            <h3 className="text-lg font-semibold tracking-[-0.02em] sm:text-xl">
                              {role.title}
                            </h3>
                            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                              {role.period}
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
              A summary of the languages, frameworks, platforms, and libraries
              you&apos;ve used and are currently using.
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
              Hackathon and startup competition results surfaced from your
              Notion page.
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

        <footer className="grid gap-8 border-t border-[var(--color-line)] px-5 py-10 sm:px-8 lg:grid-cols-[1.2fr_minmax(18rem,24rem)] lg:items-end lg:px-12 lg:py-14">
          <div className="reveal-up">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted)]">
              Closing Note
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.94] tracking-[-0.05em]">
              Built from the
              <br />
              projects, stack,
              <br />
              and wins behind the work.
            </h2>
          </div>

          <div className="reveal-up space-y-5 [animation-delay:140ms]">
            <p className="max-w-md text-base leading-7 text-[var(--color-muted)]">
              This portfolio now reflects the public information on your Notion
              source page instead of the earlier placeholder copy.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-foreground)] px-5 text-sm uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-black sm:flex-none"
                href="#intro"
              >
                Back to top
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-line-strong)] px-5 text-sm uppercase tracking-[0.2em] text-[var(--color-foreground)] transition-colors duration-300 hover:bg-[var(--color-accent)] sm:flex-none"
                href="https://amyredmar.notion.site/Hi-I-m-Amyr-6a4effecde684d65bef5d02ee26c3ef3"
                target="_blank"
                rel="noreferrer"
              >
                Open Notion
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
