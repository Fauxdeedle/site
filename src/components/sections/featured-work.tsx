import Link from "next/link";
import styles from "./featured-work.module.css";

interface Project {
  title: string;
  description: string;
  href: string;
  accent?: boolean;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "A brief description of this awesome project and what it does.",
    href: "/projects/project-one",
    accent: true,
  },
  {
    title: "Project Two",
    description: "Another cool project that showcases different skills and tech.",
    href: "/projects/project-two",
  },
  {
    title: "Project Three",
    description: "A third project to fill out the grid nicely.",
    href: "/projects/project-three",
    accent: true,
  },
];

export function FeaturedWork() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Selected Work</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className={styles.cardLink}
            >
              <div
                className={`${styles.card} ${project.accent ? styles.cardAccent : ""}`}
              >
                <span className={styles.label}>{project.title}</span>
                <p className={styles.content}>{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
