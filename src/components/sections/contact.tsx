import { siteConfig } from "@/lib/site-config";
import styles from "./contact.module.css";

export function Contact() {
  const { intro, links } = siteConfig.contact;
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Get in Touch</h2>
        <p className={styles.intro}>{intro}</p>
        <div className={styles.links}>
          {links.map((link) => (
            <a key={link.label} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
