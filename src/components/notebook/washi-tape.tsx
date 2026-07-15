import type { CSSProperties, ReactNode } from "react";

/**
 * WashiTape — a translucent lime strip with torn edges, used to "stick"
 * cards or headlines to the page like real washi tape.
 */
export function WashiTape({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return <div className={`nb-washi ${className}`} style={style} aria-hidden />;
}
