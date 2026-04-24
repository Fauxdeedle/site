import Link from "next/link";
import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Your Name
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
