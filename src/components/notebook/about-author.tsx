import { WashiTape } from "./washi-tape";
import { StickyNote } from "./sticky-note";

/**
 * AboutAuthor — instructor bio block.
 *
 * Card with a marker-box name, a short bio paragraph, and a list of
 * credentials. Cursive accent line on top.
 */
export function AboutAuthor() {
  return (
    <section id="about" className="px-5 sm:px-10 lg:px-16 py-12 relative">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <WashiTape
            className="hidden sm:block"
            style={{ top: -14, right: 60, transform: "rotate(6deg)" }}
          />

          <p className="nb-eyebrow mb-2">Instructor · P. 02</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Who built <span className="nb-underline-doodle">this notebook</span>
          </h2>

          <div className="mt-6 grid lg:grid-cols-[1fr_1.4fr] gap-6 lg:gap-10">
            {/* Portrait / avatar stand-in card */}
            <div className="nb-card p-6 flex flex-col items-center text-center">
              <img
                src="/VHGM traje azul.png"
                alt="Dr. Victor Garcia Martinez"
                className="w-28 h-28 rounded-full border-2 border-[#1a1a1a] object-cover object-top shadow-[0_3px_0_#1a1a1a]"
              />
              <div className="mt-4 font-extrabold text-lg">Dr. Victor Garcia Martinez</div>
              <div className="text-sm text-[#666]">Assistant Professor</div>
              <div className="mt-2 nb-script text-xl text-[#3a7d2c]">Lone Star College</div>

              <div className="mt-5 flex flex-wrap gap-2 justify-center">
                <span className="nb-tag nb-tag--lime">A&amp;P I</span>
                <span className="nb-tag">HAPS SLO</span>
                <span className="nb-tag">Flipped Classroom</span>
                <span className="nb-tag nb-tag--red">Active Learning</span>
              </div>
            </div>

            {/* Bio */}
            <div className="nb-card p-6 sm:p-8 relative">
              <p className="text-base sm:text-lg leading-relaxed text-[#1a1a1a]">
                <span className="nb-marker font-semibold">Dr. Victor Garcia Martinez</span> is an
                Assistant Professor of Biology at <span className="nb-highlight">Lone Star College</span>,
                where he teaches Anatomy &amp; Physiology I (BIOL 2401). His course design pairs
                <em> visual diagnostic infographics</em> with a structured <em>flipped-classroom</em>{" "}
                cycle, then closes each unit with <em>self-paced mini-apps</em> — so students
                practice retrieval three times before they ever sit a summative exam.
              </p>

              <p className="mt-4 text-[15px] leading-relaxed text-[#333]">
                The three apps you see on this page are intentionally split across Vercel and
                Netlify so they can be maintained independently, but they share one course
                philosophy: <strong>free access, no logins, no paywalls</strong>. If you are a
                student in BIOL 2401, every resource here is yours.
              </p>

              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                {[
                  { k: "Course", v: "BIOL 2401 — A&P I" },
                  { k: "Institution", v: "Lone Star College" },
                  { k: "Format", v: "Flipped classroom" },
                ].map((row) => (
                  <div key={row.k} className="border-l-2 border-[#b5e61d] pl-3 py-1">
                    <div className="text-[11px] uppercase tracking-[0.16em] text-[#666]">
                      {row.k}
                    </div>
                    <div className="text-sm font-semibold">{row.v}</div>
                  </div>
                ))}
              </div>

              <StickyNote
                variant="lime"
                rotation={-4}
                className="hidden lg:block absolute -right-4 -top-6 w-40"
              >
                <span className="block text-base leading-tight">
                  Questions? Ask before/after class.
                </span>
              </StickyNote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
