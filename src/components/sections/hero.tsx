import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import styles from "./hero.module.css";

export function Hero() {
  const { title, description, backgroundImage, badges, buttons } = siteConfig.hero;
  return (
    <section className={styles.hero} style={{ backgroundImage: `url('${backgroundImage}')` }}>

      {/*This line makes ghost text on the hero background*/}
      {/*<div className={styles.ghostText}>MAKE</div>*/}

      <div className={styles.container}>
        <div className={styles.badges}>
          {badges.map((badge, i) => (
            <Badge key={badge} color={i === 1 ? "var(--green-100)" : i === 2 ? "var(--green-300)" : undefined}>
              {badge}
            </Badge>
          ))}
        </div>
        <h1 className={styles.title}>
          <span className={styles.titleLine}>{title.split(".")[0] || title}</span>
          <span className={styles.titleLineAccent}>
            {title.split(".")[1] || "CREATOR"}
          </span>
        </h1>
        <p className={styles.description}>{description}</p>
        <div className={styles.actions}>
          <Button variant="primary" size="lg">{buttons.primary}</Button>
          <Button variant="secondary" size="lg">{buttons.secondary}</Button>
        </div>
      </div>
    </section>
  );
}
