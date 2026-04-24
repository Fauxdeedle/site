import styles from "./card.module.css";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div className={`${styles.card} ${className}`} {...props}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
}

export function CardHeader({ children }: CardHeaderProps) {
  return <div className={styles.header}>{children}</div>;
}

interface CardContentProps {
  children: React.ReactNode;
}

export function CardContent({ children }: CardContentProps) {
  return <div className={styles.content}>{children}</div>;
}
