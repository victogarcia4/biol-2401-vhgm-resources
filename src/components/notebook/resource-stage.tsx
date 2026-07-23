import type { CSSProperties } from "react";
import { WashiTape } from "./washi-tape";
import { StickyNote } from "./sticky-note";

type Accent = "red" | "lime";

export interface ResourceStageProps {
  index: number;
  totalStages?: number;
  stage: string;
  kicker: string;
  title: string;
  blurb: string;
  bullets: string[];
  platform: "Vercel" | "Netlify";
  href: string;
  cta: string;
  accent: Accent;
  rotation: number;
}

/**
 * ResourceStage — one large notebook entry for each course stage.
 *
 * Layout: big numbered lime circle on the left, white card with washi tape on
 * top containing the stage title, blurb, bullet list, platform tag, and CTA.
 * Optional sticky note decoration in the corner.
 */
export function ResourceStage(props: ResourceStageProps) {
  const { index, totalStages = 4, stage, kicker, title, blurb, bullets, platform, href, cta, accent, rotation } =
    props;

  const accentTag = accent === "red" ? "nb-tag--red" : "nb-tag--lime";

  return (
    <article
      className="nb-card nb-fade-up p-6 sm:p-8 relative"
      style={
        {
          // slight per-card rotation to feel hand-placed
          // (kept very small so reading is not impaired)
        } as CSSProperties
      }
    >
      {/* Washi tape straddling the top edge */}
      <WashiTape
        style={{
          top: -14,
          left: index % 2 === 0 ? 60 : 40,
          transform: `rotate(${index % 2 === 0 ? -6 : 7}deg)`,
        }}
      />

      <div className="flex flex-col sm:flex-row gap-5 sm:gap-7">
        {/* Left rail: numbered circle + stage label */}
        <div className="sm:w-32 flex sm:flex-col items-center sm:items-start gap-3 sm:gap-2 shrink-0">
          <span className="nb-num" aria-hidden>
            {String(index).padStart(2, "0")}
          </span>
          <div className="sm:mt-3">
            <div className="nb-stage leading-none">{stage}</div>
            <div className="text-[11px] uppercase tracking-[0.16em] text-[#666] mt-1">
              {kicker}
            </div>
          </div>
        </div>

        {/* Right: content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className={`nb-tag ${accentTag}`}>Stage {index} of {totalStages}</span>
            <span className="nb-tag">
              Hosted on {platform}
            </span>
            <span className="nb-tag">Opens in new tab ↗</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight">{title}</h3>

          <p className="mt-3 text-[15px] sm:text-base text-[#333] leading-relaxed">{blurb}</p>

          <ul className="mt-4 space-y-2">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2.5 text-[14px] text-[#1a1a1a]">
                <span
                  aria-hidden
                  className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#b5e61d] border border-[#1a1a1a] text-[11px] font-bold shrink-0 mt-0.5"
                >
                  ✓
                </span>
                <span className="leading-snug">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center gap-3 flex-wrap">
            <a href={href} target="_blank" rel="noopener noreferrer" className="nb-btn">
              {cta} <span aria-hidden>→</span>
            </a>
            <span className="text-xs text-[#666] font-mono truncate max-w-[260px]">
              {href.replace(/^https?:\/\//, "")}
            </span>
          </div>
        </div>
      </div>

      {/* Small sticky note in the corner — only on the largest screens */}
      <StickyNote
        variant={index === 1 ? "yellow" : "lime"}
        rotation={rotation}
        className="hidden xl:block absolute -right-6 -bottom-6 w-44 z-10"
      >
        <span className="block text-base leading-tight">
          {index === 1 && "Use first — sets the baseline."}
          {index === 2 && "The main event — every unit lives here."}
          {index === 3 && "Loop back after every unit exam."}
        </span>
      </StickyNote>
    </article>
  );
}
