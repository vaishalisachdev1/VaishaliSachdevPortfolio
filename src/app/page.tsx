import Link from "next/link";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
import { skillGroups } from "@/data/skills";
import ProjectCard from "@/components/ProjectCard";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowIcon } from "@/components/Icons";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <header className="hero" id="home">
        <div className="container">
          <span className="hero-status">
            <span className="hero-dot" /> Open to Software / Backend Developer roles
          </span>
          <h1>{site.name}</h1>
          <p className="hero-role">{site.role}</p>
          <p className="hero-intro">{site.intro}</p>

          <div className="hero-actions">
            <Link href="/#projects" className="btn btn-primary">
              View Projects <ArrowIcon />
            </Link>
            <Link href="/#contact" className="btn btn-ghost">
              Contact Me
            </Link>
          </div>

          <div className="hero-socials">
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon /> GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* About */}
      <section className="section" id="about">
        <div className="container">
          <p className="eyebrow">About</p>
          <h2 className="section-title">A developer who likes building the parts users don&apos;t see.</h2>
          <div className="about-grid">
            <div className="about-body">
              <p>
                I&apos;m a <strong>BCA graduate</strong> who learns most by building. Rather than
                stopping at coursework, I&apos;ve worked on real projects  designing APIs,
                modelling databases, and wiring up the backend logic that keeps an application
                running.
              </p>
              <p>
                My core focus is <strong>Python</strong> and <strong>backend development</strong>:
                building <strong>REST APIs</strong> with FastAPI, working with relational
                <strong> databases</strong> like PostgreSQL and MySQL, and handling the messy,
                real-world data problems that come with them  duplicates, incomplete records, and
                unreliable external services.
              </p>
              <p>
                I enjoy <strong>problem-solving</strong> and <strong>picking up new technologies</strong>{" "}
                when a project needs them, whether that&apos;s a mobile app frontend or a browser
                automation tool. I&apos;m now looking for an entry-level role where I can keep
                growing while shipping practical, reliable software.
              </p>
            </div>
            <aside className="about-facts">
              <h3>At a glance</h3>
              <ul>
                <li><span className="k">→</span> BCA graduate</li>
                <li><span className="k">→</span> Backend & API development</li>
                <li><span className="k">→</span> Python · FastAPI · SQLAlchemy</li>
                <li><span className="k">→</span> PostgreSQL · MySQL · SQL</li>
                <li><span className="k">→</span> Learning by building real projects</li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section" id="projects">
        <div className="container">
          <p className="eyebrow">Featured Projects</p>
          <h2 className="section-title">Things I&apos;ve built</h2>
          <p className="section-lead">
            A mix of backend systems, full-stack apps, and collaborative builds. Each project page
            has more detail on the problem, my contribution, and the technical challenges.
          </p>
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section" id="skills">
        <div className="container">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">Technologies I work with</h2>
          <div className="skills-grid">
            {skillGroups.map((g) => (
              <div key={g.title} className="skill-card">
                <h3>{g.title}</h3>
                <div className="skill-tags">
                  {g.items.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section contact" id="contact">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let&apos;s get in touch</h2>
          <p className="section-lead">
            I&apos;m open to entry-level Software, Backend, Python, and Application Support roles.
            If you&apos;re a recruiter or collaborator, I&apos;d be glad to hear from you.
          </p>
          <div className="contact-actions">
            <a href={`mailto:${site.email}`} className="btn btn-primary">
              <MailIcon /> {site.email}
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <GitHubIcon /> GitHub
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
