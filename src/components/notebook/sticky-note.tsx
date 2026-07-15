import type { CSSProperties, ReactNode } from "react";

/**
 * StickyNote — small rotated paper note with handwritten-style text.
 * Yellow or lime variant.
 */
export function StickyNote({
  children,
  variant = "yellow",
  rotation = 0,
  className = "",
  style,
}: {
  children: ReactNode;
  variant?: "yellow" | "lime";
  rotation?: number;
  className?: string;
  style?: CSSProperties;
}) {
  const v = variant === "lime" ? "nb-sticky--lime" : "nb-sticky--yellow";
  return (
    <div
      className={`nb-sticky ${v} ${className}`}
      style={{ transform: `rotate(${rotation}deg)`, ...style }}
    >
      {children}
    </div>
  );
}
