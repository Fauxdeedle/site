import styles from "./footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>
          &copy; {currentYear} Your Name. Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js
          </a>
          .
        </p>
        <div className={styles.socials}>
          <a href="https://github.com" className={styles.socialLink}>GitHub</a>
          <a href="https://linkedin.com" className={styles.socialLink}>LinkedIn</a>
          <a href="https://twitter.com" className={styles.socialLink}>Twitter</a>
        </div>
      </div>
    </footer>
  );
}
