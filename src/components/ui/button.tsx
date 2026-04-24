"use client";

import { useState } from "react";
import styles from "./button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const [hovered, setHovered] = useState(false);

  const padding = size === "sm" ? "8px 16px" : size === "lg" ? "18px 40px" : "12px 28px";
  const fontSize = size === "sm" ? "12px" : size === "lg" ? "16px" : "13px";

  const liftColor = variant === "primary" ? "var(--brand-900)" : "var(--brand-400)";
  const dist = 5;

  const liftedStyle = hovered && variant !== "ghost" ? {
    transform: `translate(-${dist}px, -${dist}px)`,
    boxShadow: `${dist}px ${dist}px 0px ${liftColor}`,
  } : {};

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className}`}
      style={{
        fontFamily: "var(--font-heading)",
        fontSize,
        letterSpacing: "var(--letter-spacing-wide)",
        fontWeight: 700,
        padding,
        textTransform: "uppercase",
        ...liftedStyle,
      } as React.CSSProperties}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      {children}
    </button>
  );
}
