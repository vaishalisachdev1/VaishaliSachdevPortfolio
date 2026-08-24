import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject } from "@/data/projects";
import { GitHubIcon, ArrowIcon } from "@/components/Icons";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return { title: `${project.name}  ${project.tagline}`, description: project.short };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const phoneGallery = project.screenshots[0]?.shape === "phone";

  return (
    <main className="container detail">
      <Link href="/#projects" className="back-link">
        <span style={{ transform: "rotate(180deg)", display: "inline-flex" }}>
          <ArrowIcon />
        </span>
        Back to projects
      </Link>

      <header>
        <div className="pcard-head" style={{ maxWidth: "68ch" }}>
          <h1>{project.name}</h1>
          {project.status && <span className="badge">{project.status}</span>}
        </div>
        <p className="detail-tagline">{project.tagline}</p>

        {(project.github || project.demo) && (
          <div className="detail-actions">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <GitHubIcon /> GitHub
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Live Demo <ArrowIcon />
              </a>
            )}
          </div>
        )}
      </header>

      <section className="detail-block">
        <h2>Overview</h2>
        <p>{project.overview}</p>
      </section>

      <section className="detail-block">
        <h2>The Problem</h2>
        <p>{project.problem}</p>
      </section>

      <section className="detail-block">
        <h2>What I Built</h2>
        <ul className="detail-list">
          {project.built.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      <section className="detail-block">
        <h2>My Contribution</h2>
        <p>{project.contribution}</p>
      </section>

      <section className="detail-block">
        <h2>Technical Challenges</h2>
        <ul className="detail-list">
          {project.challenges.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </section>

      <section className="detail-block">
        <h2>Tech Stack</h2>
        <div className="detail-tech">
          {project.tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </section>

      <section className="detail-block">
        <h2>Screenshots</h2>
        {project.screenshots.length > 0 ? (
          <div className={`gallery${phoneGallery ? " phone" : ""}`}>
            {project.screenshots.map((s) => (
              <figure key={s.src} className="shot">
                <div className={`shot-media${s.shape === "phone" ? " phone" : ""}`}>
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={s.shape === "phone" ? 400 : 1200}
                    height={s.shape === "phone" ? 860 : 675}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <figcaption className="shot-caption">{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="gallery-empty">
            Screenshots coming soon  placeholders ready to be replaced with real captures.
          </div>
        )}
      </section>
    </main>
  );
}
