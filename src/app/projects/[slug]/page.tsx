import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/markdown";
import styles from "./projects.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getPosts("projects");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getPost("projects", slug);

  if (!project) {
    notFound();
  }

  const { title, description, date, image } = project.frontmatter;

  return (
    <article className={styles.container}>
      <div className={styles.split}>
        <div className={styles.imageSection}>
          {image ? (
            <img src={image} alt={title} className={styles.projectImage} />
          ) : (
            <div className={styles.imagePlaceholder} />
          )}
        </div>
        <div className={styles.contentSection}>
          <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            <time className={styles.date} dateTime={date}>
              {date}
            </time>
          </header>
          <div className={styles.content}>
            <p>{project.content}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
