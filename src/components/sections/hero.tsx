import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import styles from "./hero.module.css";

interface HeroProps {
  title: string;
  description: string;
}

export function Hero({ title, description }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.ghostText}>MAKE</div>
      <div className={styles.container}>
        <div className={styles.badges}>
          <Badge>Brand Identity</Badge>
          <Badge color="var(--green-100)">Print &amp; Posters</Badge>
          <Badge color="var(--green-300)">Social Media</Badge>
        </div>
        <h1 className={styles.title}>
          <span className={styles.titleLine}>{title.split(".")[0] || title}</span>
          <span className={styles.titleLineAccent}>
            {title.split(".")[1] || "CREATOR"}
          </span>
        </h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <Button variant="primary" size="lg">View Work</Button>
          <Button variant="secondary" size="lg">Contact Me</Button>
        </div>
      </div>
    </section>
  );
}
