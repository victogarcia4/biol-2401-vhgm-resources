import { WashiTape } from "./washi-tape";
import { StickyNote } from "./sticky-note";

/**
 * Hero — the top of the notebook page.
 *
 * Eyebrow → bold headline → cursive second line → body paragraph with
 * highlighter + marker box → primary CTA. Two sticky notes decorate the
 * margins, washi tape sits on top of the headline card.
 */
export function Hero() {
  return (
    <section id="top" className="relative px-5 sm:px-10 lg:px-16 pt-10 sm:pt-14 pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Washi tape on top-left of the headline block */}
          <WashiTape className="hidden sm:block" style={{ top: -14, left: 40, transform: "rotate(-8deg)" }} />

          <p className="nb-eyebrow mb-3">Cover Page · A&amp;P I · Fall / Spring Term</p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight max-w-4xl">
            Anatomy &amp; Physiology I,
            <br />
            <span className="nb-script font-bold text-[#3a7d2c] text-5xl sm:text-7xl lg:text-8xl block mt-1 -rotate-1 origin-left">
              one notebook page
            </span>{" "}
            at a time.
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-[#333] leading-relaxed">
            A single home for everything BIOL 2401 — the{" "}
            <span className="nb-highlight">pre-assessment generator</span>, the{" "}
            <span className="nb-highlight">infographics presentations</span>, the{" "}
            <span className="nb-marker">flipped-classroom active-learning cycle</span>, and the{" "}
            <span className="nb-highlight">post-assessment mini-apps</span>. Built by Dr. Victor
            Garcia Martinez for Lone Star College students.
          </p>

          <div className="mt-7 flex items-center gap-3 flex-wrap">
            <a
              href="#resources"
              className="nb-btn"
            >
              Browse the resources <span aria-hidden>→</span>
            </a>
            <a
              href="#about"
              className="nb-btn nb-btn--ghost"
            >
              About the instructor
            </a>
          </div>

          {/* Stat row — four quick numbers from the course */}
          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 max-w-2xl">
            {[
              { n: "4", l: "Stages of practice" },
              { n: "1", l: "Flipped-classroom cycle" },
              { n: "100%", l: "Free & open access" },
            ].map((s) => (
              <div
                key={s.l}
                className="nb-card p-3 sm:p-4 text-center"
                style={{ boxShadow: "0 3px 0 #1a1a1a, 0 5px 10px rgba(0,0,0,0.06)" }}
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-[#3a7d2c]">{s.n}</div>
                <div className="text-[11px] sm:text-xs text-[#666] mt-1 leading-tight">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating sticky notes — desktop only, decorative */}
        <StickyNote
          variant="yellow"
          rotation={-7}
          className="hidden lg:block absolute right-2 top-12 w-44"
        >
          <span className="block text-lg leading-tight">
            Tip: pre-assessment first, then infographics, flipped class, &amp; mini-apps.
          </span>
        </StickyNote>

        <StickyNote
          variant="lime"
          rotation={5}
          className="hidden lg:block absolute right-24 bottom-2 w-40"
        >
          <span className="block text-base leading-tight">
            Every app is free. No login required.
          </span>
        </StickyNote>
      </div>
    </section>
  );
}
