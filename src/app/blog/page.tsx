import Link from "next/link";
import { getPosts } from "@/lib/markdown";
import styles from "./blog.module.css";

export default function BlogPage() {
  const posts = getPosts("blog");

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      {posts.length === 0 ? (
        <p className={styles.empty}>No posts yet.</p>
      ) : (
        <ul className={styles.list}>
          {posts.map((post) => (
            <li key={post.slug} className={styles.item}>
              <Link href={`/blog/${post.slug}`} className={styles.link}>
                <h2 className={styles.heading}>{post.frontmatter.title}</h2>
              </Link>
              <p className={styles.description}>
                {post.frontmatter.description}
              </p>
              <time className={styles.date} dateTime={post.frontmatter.date}>
                {post.frontmatter.date}
              </time>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
