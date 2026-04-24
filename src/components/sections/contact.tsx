import styles from "./contact.module.css";

export function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Get in Touch</h2>
        <p className={styles.intro}>
          I&apos;m always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>
        <div className={styles.links}>
          <a href="mailto:your.email@example.com" className={styles.link}>
            Email
          </a>
          <a href="https://github.com/yourusername" className={styles.link}>
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" className={styles.link}>
            LinkedIn
          </a>
          <a href="https://twitter.com/yourusername" className={styles.link}>
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
}
