"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { GitHubIcon, LinkedInIcon, MenuIcon } from "./Icons";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`nav${open ? " open" : ""}`}>
      <div className="container nav-inner">
        <Link href="/" className="nav-brand" onClick={() => setOpen(false)}>
          Vaishali<span>.</span>
        </Link>

        <div className="nav-links" onClick={() => setOpen(false)}>
          <Link href="/">Home</Link>
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
          <a href={site.resume} target="_blank" rel="noopener noreferrer" className="nav-resume">
            Resume
          </a>
        </div>

        <div className="nav-icons">
          <ThemeToggle />
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <button
            className="nav-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </nav>
  );
}
