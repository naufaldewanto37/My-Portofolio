import React, { useMemo, useState, useEffect } from "react";
import profilePic from './assets/profile_picture.jpeg';
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  Moon,
  Sun,
  Search,
  Filter,
  ChevronUp,
} from "lucide-react";

const profile = {
  name: "Naufal Rotif Dewanto",
  tagline: "Data and Machine Learning Enthusiast",
  summary:
    "A person with a passion for machine learning and data. I love building models that solve many problems with algorithm and sharing.",
  location: "Depok, Indonesia",
  email: "naufaldewanto37@gmail.com",
  resumeUrl: "https://drive.google.com/file/d/1yHStrZRCVqnwQMbKYO7HM4RwFWUDtHDt/view?usp=sharing",
};

const links = [
  { label: "GitHub", href: "https://github.com/naufaldewanto37", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/naufal-rotif-dewanto-440b83251/", icon: Linkedin },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
];

const skills: { group: string; items: string[] }[] = [
  {
    group: "Core",
    items: [
      "Machine Learning Algorithms",
      "Data Visualization",
      "Data ETL",
    ],
  },
  {
    group: "Tools",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
      "Git",
    ],
  }
];

export type Project = {
  title: string;
  subtitle?: string;
  tags: string[];
  description: string;
  repo?: string;
  image?: string; // you can swap with your hosted image
};

const projects: Project[] = [
  {
    title: "Scoring Leads AI",
    subtitle: "AI-Powered Lead Scoring",
    tags: ["Machine Learning"],
    description:
      "A lightweight, reproducible pipeline to score B2B leads using AI. It includes data collection, feature engineering, model training, and evaluation.",
    repo: "https://github.com/naufaldewanto37/ScoringLeadsAI",
  },
  {
    title: "Credit Card Fraud Detection",
    subtitle: "Anomaly Detection Credit Card Transactions",
    tags: ["Machine Learning"],
    description:
      "Detecting fraudulent credit card transactions using machine learning. The project includes data preprocessing, feature engineering, model training, and evaluation.",
    repo: "https://github.com/naufaldewanto37/CreditCardFraudDetection",
  },
  {
    title: "Garbage Classification",
    subtitle: "Garbage Classification with CNN",
    tags: ["Machine Learning"],
    description:
      "A training application that classifies garbage images using a Convolutional Neural Network (CNN).",
    repo: "https://github.com/naufaldewanto37/Garbage_Classification",
  },
  {
    title: "Feature Selection Using PSO for Hate Speech Classification on Social Media with Naive Bayes Classifier",
    subtitle: "Feature Selection Using PSO",
    tags: ["Machine Learning"],
    description:
      "A research project that applies Particle Swarm Optimization (PSO) for feature selection in hate speech classification on social media using a Naive Bayes classifier.",
    repo: "https://github.com/naufaldewanto37/Tugas-Akhir",
  },
  {
    title: "Pedjuang Nusantara Game",
    subtitle: "Pedjuang Nusantara Game",
    tags: ["Game Development"],
    description:
      "Game Side Scrolling Action Pedjuang Nusantara is a game that tells the story of the struggle of the Indonesian people in fighting for independence from the Dutch colonialists.",
    repo: "https://github.com/naufaldewanto37/Pedjuang_Nusantara_Game",
  },
  {
    title: "Sistem Informasi Pengajuan Media",
    subtitle: "SIKMANIS BANDAR LAMPUNG",
    tags: ["Website"],
    description:
      "A website for submitting media requests to the Diskominfo Kota Bandar Lampung. It allows users to submit requests and track their status called SIKMANIS BANDAR LAMPUNG (Sistem Informasi Kendali Media & Informasi Bandar Lampung).",
    repo: "https://github.com/naufaldewanto37/PengajuanMedia",
  },
  {
    title: "Altnex Console",
    subtitle: "Renting Console Website",
    tags: ["Website"],
    description:
      "A website for renting consoles, allowing users to browse available consoles, check prices, and make reservations. It includes features like user authentication and payment processing.",
    repo: "https://github.com/yaaelahsan/Altnex-Console",
  },
  {
    title: "I-Kost",
    subtitle: "App Pencarian Kost Online",
    tags: ["Android Development"],
    description:
      "An Android application for searching boarding houses online. It allows users to search for boarding houses based on location, price, and other criteria.",
    repo: "https://github.com/alfairuzswari/TUBES_PAM",
  },
];

const experience = [
  {
    role: "Data Analyst Intern",
    org: "KitaLulus",
    time: "January 2025 — July 2025",
    descriptions: "During my internship at Kitalulus, I worked as a Data Analyst, where I was responsible for managing and analyzing datasets to support decision-making. My role involved:",
    points: [
      "Executing SQL queries (including updates) to display and process data on dashboards for analysis.",
      "Performing data visualization to present insights in a clear and actionable manner.",
      "Conducting data cleansing to improve accuracy and reliability of reports",
      "Handling data management tasks to ensure organized and accessible datasets."
    ],
  },
  {
    role: "Backend Developer Intern",
    org: "Diskominfo Kota Bandar Lampung",
    time: "July 2023 — August 2023",
    descriptions: "As a Backend Developer Intern at Diskominfo Kota Bandar Lampung, I contributed to the development of backend systems and database management. My responsibilities included:",
    points: [
      "Implementing backend features using Python to enhance application performance and reliability.",
      "Designing and executing SQL queries to optimize database management and ensure efficient data retrieval.",
      "Supporting the overall development process by integrating backend logic with front-end requirements.",
    ],
  },
];

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

const Section: React.FC<{
  id: string;
  title: string;
  children: React.ReactNode;
}> = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-24 py-16">
    <motion.h2
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="text-2xl md:text-3xl font-bold tracking-tight mb-8"
    >
      {title}
    </motion.h2>
    {children}
  </section>
);

const Chip: React.FC<{
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}> = ({ active, children, onClick }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center rounded-full border px-3 py-1 text-sm transition hover:shadow ${
      active
        ? "border-transparent bg-black text-white dark:bg-white dark:text-black"
        : "border-neutral-300 dark:border-neutral-700"
    }`}
  >
    {children}
  </button>
);

function useDarkMode() {
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return (
      window.localStorage.getItem("theme") === "dark" ||
      window.matchMedia?.("(prefers-color-scheme: dark)")?.matches
    );
  });
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);
  return { dark, setDark } as const;
}

const Divider = () => (
  <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
);

export default function Portfolio() {
  const { dark, setDark } = useDarkMode();
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    return projects.filter((p) => {
      const text = `${p.title} ${p.subtitle ?? ""} ${p.description} ${p.tags.join(" ")}`.toLowerCase();
      const byTag = tag ? p.tags.includes(tag) : true;
      const bySearch = s ? text.includes(s) : true;
      return byTag && bySearch;
    });
  }, [search, tag]);

  useEffect(() => {
    const btn = document.getElementById("toTopBtn");
    const handler = () => {
      if (!btn) return;
      btn.classList.toggle("opacity-0", window.scrollY < 400);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div id="top" className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-16 items-center justify-between">
            <a href="#top" className="font-semibold tracking-tight">
              {profile.name}
            </a>
            <nav className="hidden gap-6 md:flex">
              {[
                ["About", "about"],
                ["Skills", "skills"],
                ["Projects", "projects"],
                ["Experience", "experience"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <a key={id} href={`#${id}`} className="text-sm opacity-80 hover:opacity-100">
                  {label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <button
                aria-label="Toggle theme"
                onClick={() => setDark((d) => !d)}
                className="rounded-full border p-2 hover:shadow border-neutral-300 dark:border-neutral-700"
              >
                {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main className="mx-auto max-w-6xl px-4">
        <section className="flex flex-col-reverse items-center gap-8 py-16 md:flex-row md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex-1"
          >
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
              {profile.name}
            </h1>
            <p className="mt-2 text-lg md:text-xl opacity-80">{profile.tagline}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-2 opacity-80">
                <MapPin className="h-4 w-4" /> {profile.location}
              </span>
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-3 py-1 hover:shadow dark:border-neutral-700"
              >
                <Download className="h-4 w-4" /> Download CV
              </a>
            </div>
            <p className="mt-6 max-w-2xl text-base opacity-90">{profile.summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {links.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-3 py-2 text-sm hover:shadow dark:border-neutral-700"
                >
                  <Icon className="h-4 w-4" /> {label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex-1 w-full"
          >
            {/* Avatar image */}
            <div className="relative mx-auto aspect-square max-w-xs overflow-hidden rounded-3xl shadow-lg">
              <img
                src={profilePic}
                alt="Profile"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </section>

        <Divider />

        {/* ABOUT */}
        <Section id="about" title="About">
          <p className="max-w-3xl leading-relaxed opacity-90">
            I am a motivated Informatics Engineering graduate from the Sumatra Institute of Technology with strong foundations in machine learning, data science, and backend development. I have hands-on experience as a Backend Developer Intern at Diskominfo Kota Bandar Lampung, where I worked with Python and SQL to optimize web application functionality, and as a Data Analyst Intern at KitaLulus, where I focused on SQL queries, data cleansing, and visualization for business insights.

My academic background includes research on feature selection for hate speech classification using Naive Bayes and PSO, reflecting my passion for natural language processing and applied machine learning. With a GPA of 3.42 and continuous exposure to real-world projects, I am eager to take on new challenges that allow me to sharpen my skills, collaborate with a great team, and contribute to impactful solutions.
          </p>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group} className="rounded-2xl border p-5 transition hover:shadow-md border-neutral-200 dark:border-neutral-800">
                <div className="text-sm uppercase tracking-wide opacity-60">{s.group}</div>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Projects">
          <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 opacity-60" />
              <div className="flex flex-wrap gap-2">
                <Chip active={!tag} onClick={() => setTag(null)}>All</Chip>
                {allTags.map((t) => (
                  <Chip key={t} active={tag === t} onClick={() => setTag(t)}>
                    {t}
                  </Chip>
                ))}
              </div>
            </div>
            <label className="flex items-center gap-2 rounded-xl border px-3 py-2 text-sm shadow-sm border-neutral-200 dark:border-neutral-800">
              <Search className="h-4 w-4 opacity-60" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search projects..."
                className="w-56 bg-transparent outline-none placeholder:opacity-60"
              />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="group rounded-2xl border p-5 transition hover:shadow-md border-neutral-200 dark:border-neutral-800"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
                    {p.subtitle && (
                      <p className="text-sm opacity-70">{p.subtitle}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {p.repo && (
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-lg border px-2 py-1 text-xs hover:shadow border-neutral-300 dark:border-neutral-700"
                        title="Code"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="mt-3 text-sm opacity-90">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title="Experience">
          <div className="space-y-4">
            {experience.map((e) => (
              <div key={e.role} className="rounded-2xl border p-5 border-neutral-200 dark:border-neutral-800">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-base font-semibold">{e.role}</div>
                    <div className="text-sm opacity-70">{e.org}</div>
                  </div>
                  <div className="text-sm opacity-70">{e.time}</div>
                </div>
                <ul className="mt-3 list-disc pl-5 text-sm opacity-90">
                  {e.points.map((pt: string, idx: number) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border p-6 border-neutral-200 dark:border-neutral-800">
              <div className="text-sm uppercase tracking-wide opacity-60">Message</div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = `mailto:${profile.email}`;
                }}
                className="mt-3 space-y-3"
              >
                <input
                  placeholder="Your name"
                  className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 border-neutral-300 focus:ring-neutral-300 dark:border-neutral-800"
                />
                <input
                  placeholder="Your email"
                  type="email"
                  className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 border-neutral-300 focus:ring-neutral-300 dark:border-neutral-800"
                />
                <textarea
                  placeholder="Say hi..."
                  rows={4}
                  className="w-full rounded-xl border px-3 py-2 text-sm outline-none focus:ring-2 border-neutral-300 focus:ring-neutral-300 dark:border-neutral-800"
                />
                <div className="flex items-center gap-3">
                  <button className="rounded-xl border px-4 py-2 text-sm transition hover:shadow border-neutral-300 dark:border-neutral-700">
                    Send Email
                  </button>
                  <a
                    href={`mailto:${profile.email}`}
                    className="rounded-xl border px-4 py-2 text-sm transition hover:shadow border-neutral-300 dark:border-neutral-700"
                  >
                    Or open mail app
                  </a>
                </div>
              </form>
            </div>
            <div className="rounded-2xl border p-6 border-neutral-200 dark:border-neutral-800">
              <div className="text-sm uppercase tracking-wide opacity-60">Direct</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 opacity-60" />
                  <a className="hover:underline" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 opacity-60" /> {profile.location}
                </li>
              </ul>
              <p className="mt-4 text-sm opacity-80">
                Prefer Whatsapp? Drop me a note and I’ll share my handle.
              </p>
            </div>
          </div>
        </Section>

        <Divider />

        {/* FOOTER */}
        <footer className="py-10 text-sm opacity-70">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <div>
              © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind, and Motion.
            </div>
            <div className="flex gap-3">
              {links.map(({ label, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </footer>
      </main>

      {/* FAB: back to top */}
      <button
        id="toTopBtn"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border bg-white/90 px-4 py-2 text-sm shadow backdrop-blur transition-opacity dark:bg-neutral-900/90 border-neutral-200 dark:border-neutral-800 opacity-0"
      >
        <ChevronUp className="h-4 w-4" /> Top
      </button>
    </div>
  );
}
