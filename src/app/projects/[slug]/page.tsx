import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts, parseFrontmatter } from "@/lib/markdown";
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

  const { title, description, image } = project.frontmatter;
  const { content } = parseFrontmatter(project.content);

  // Convert markdown headings and paragraphs to basic HTML
  const htmlContent = content
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "")
    .replace(/^\- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>[\s\S]+?<\/li>)/g, (match) => `<ul>${match}</ul>`)
    .split(/\n{2,}/)
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("<")) return trimmed;
      return `<p>${trimmed.replace(/\n/g, " ")}</p>`;
    })
    .filter(Boolean)
    .join("\n");

  return (
    <div className={styles.page}>
      {image ? (
        <img src={image} alt={title} className={styles.bg} aria-hidden="true" />
      ) : (
        <div className={styles.bgPlaceholder} aria-hidden="true" />
      )}

      <div className={styles.panel}>
        <Link href="/" className={styles.back}>
          ← Back
        </Link>

        <h1 className={styles.title}>{title}</h1>

        {description && (
          <>
            <p className={styles.sectionLabel}>What I Did In This Project</p>
            <p className={styles.description}>{description}</p>
          </>
        )}

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
}
