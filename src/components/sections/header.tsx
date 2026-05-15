import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          {siteConfig.name}
        </Link>
        <nav className={styles.nav}>
          <Link href="/blog" className={styles.link}>
            Blog
          </Link>
          <Link href="#contact" className={styles.link}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
