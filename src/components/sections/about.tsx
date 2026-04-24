import styles from "./about.module.css";

export function About() {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About Me</h2>
        <div className={styles.content}>
          <p>
            Hi, I&apos;m [Your Name]. I&apos;m a [your role] passionate about
            [your interests]. I specialize in [your specialties] and love
            building things that [what you aim to achieve].
          </p>
          <p>
            When I&apos;m not coding, you can find me [hobbies/interests].
            I&apos;m always excited to connect with like-minded people and work
            on interesting projects.
          </p>
        </div>
        <div className={styles.skills}>
          <span className={styles.skill}>TypeScript</span>
          <span className={styles.skill}>React</span>
          <span className={styles.skill}>Next.js</span>
          <span className={styles.skill}>Node.js</span>
          <span className={styles.skill}>Python</span>
        </div>
      </div>
    </section>
  );
}
