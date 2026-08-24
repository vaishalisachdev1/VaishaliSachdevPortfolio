import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <div className="footer-links">
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
