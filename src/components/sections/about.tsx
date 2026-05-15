import { siteConfig } from "@/lib/site-config";
import styles from "./about.module.css";

export function About() {
  const { bio, skills } = siteConfig.about;
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About Me</h2>
        <div className={styles.content}>
          {bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className={styles.skills}>
          {skills.map((skill) => (
            <span key={skill} className={styles.skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
