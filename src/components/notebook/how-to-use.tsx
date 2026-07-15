/**
 * HowToUse — a numbered 3-step "how to use this pack" block.
 *
 * Renders as a single notebook card with three columns, each starting with
 * a lime numbered circle. Closes with a cursive note.
 */
export function HowToUse() {
  const steps = [
    {
      n: 1,
      title: "Run the pre-assessment",
      body:
        "Open the infographics app the week before a new unit begins. Skim each panel and note which concepts already feel familiar — and which are brand new. This is diagnostic, not graded.",
      tag: "Week 0",
    },
    {
      n: 2,
      title: "Show up to the flipped class",
      body:
        "The flipped-classroom app holds your pre-class primers and in-class activities. Complete the pre-class work, then come ready to apply it — class time is for practice, not lecture.",
      tag: "Each unit",
    },
    {
      n: 3,
      title: "Drill with the mini-apps",
      body:
        "After each unit, return to the mini-apps for self-paced drill practice. Aim for short, frequent sessions — three 15-minute runs beat one 45-minute cram the night before the exam.",
      tag: "Before exams",
    },
  ];

  return (
    <section id="how-to-use" className="px-5 sm:px-10 lg:px-16 py-12 relative">
      <div className="max-w-6xl mx-auto">
        <p className="nb-eyebrow mb-2">How to use this pack · P. 03</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">
          Three steps, <span className="nb-underline-doodle">one rhythm</span>
        </h2>

        <div className="nb-card p-6 sm:p-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((s) => (
              <div key={s.n} className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="nb-num" aria-hidden>
                    {s.n}
                  </span>
                  <span className="nb-tag">{s.tag}</span>
                </div>
                <h3 className="text-lg font-bold leading-snug">{s.title}</h3>
                <p className="mt-2 text-sm text-[#333] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-dashed border-[#1a1a1a]/30 flex items-center justify-between flex-wrap gap-3">
            <p className="nb-script text-2xl text-[#d62828] -rotate-1">
              same rhythm, every unit &rarr;
            </p>
            <a
              href="https://biol2401-flipped-classroom.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="nb-btn"
            >
              Open the flipped classroom <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
