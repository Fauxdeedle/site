import Link from "next/link";
import { getPosts } from "@/lib/markdown";
import styles from "./featured-work.module.css";

export function FeaturedWork() {
  const projects = getPosts("projects");

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Selected Work</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={styles.cardLink}
            >
              <div
                className={`${styles.card} ${index % 2 === 0 ? styles.cardAccent : ""}`}
              >
                {project.frontmatter.image && (
                  <img
                    src={project.frontmatter.image}
                    alt={project.frontmatter.title}
                    className={styles.cardImage}
                  />
                )}
                <span className={styles.label}>{project.frontmatter.title}</span>
                <p className={styles.content}>{project.frontmatter.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
