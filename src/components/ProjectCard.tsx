import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import { ArrowIcon } from "./Icons";

export default function ProjectCard({ project }: { project: Project }) {
  const cover = project.cover;
  const isPhone = cover?.shape === "phone";

  return (
    <article className="pcard">
      <div className={`pcard-media${isPhone ? " phone" : ""}`}>
        {cover ? (
          <Image
            src={cover.src}
            alt={cover.alt}
            width={isPhone ? 400 : 1200}
            height={isPhone ? 860 : 675}
          />
        ) : (
          <div className="pcard-placeholder">{project.name}</div>
        )}
      </div>

      <div className="pcard-body">
        <div className="pcard-head">
          <h3>{project.name}</h3>
          {project.status && <span className="badge">{project.status}</span>}
        </div>
        <p className="pcard-tagline">{project.tagline}</p>
        <p className="pcard-desc">{project.short}</p>

        <div className="tags">
          {project.tech.slice(0, 5).map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <Link href={`/projects/${project.slug}`} className="pcard-link">
          View Project <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}
