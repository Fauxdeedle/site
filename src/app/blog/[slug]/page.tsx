import { notFound } from "next/navigation";
import { getPost, getPosts } from "@/lib/markdown";
import styles from "./post.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getPosts("blog");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost("blog", slug);

  if (!post) {
    notFound();
  }

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
        <time className={styles.date} dateTime={post.frontmatter.date}>
          {post.frontmatter.date}
        </time>
      </header>
      <div className={styles.content}>
        <p>{post.content}</p>
      </div>
    </article>
  );
}
