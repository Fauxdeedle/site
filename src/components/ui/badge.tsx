"use client";

import { useState } from "react";

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
}

export function Badge({ children, color }: BadgeProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className="badge"
      style={{
        fontFamily: "var(--font-heading)",
        fontSize: "11px",
        letterSpacing: "0.14em",
        fontWeight: 700,
        textTransform: "uppercase",
        padding: "4px 10px",
        background: "transparent",
        border: "1.5px solid",
        borderRadius: "2px",
        display: "inline-block",
        cursor: "default",
        transition: "transform var(--motion-base) var(--motion-easing), box-shadow var(--motion-base) var(--motion-easing)",
        borderColor: color || "var(--brand-400)",
        color: color || "var(--brand-400)",
        transform: hovered ? "translate(-4px, -4px)" : "translate(0, 0)",
        boxShadow: hovered ? "4px 4px 0px " + (color || "var(--brand-400)") : "none",
      } as React.CSSProperties}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </span>
  );
}
