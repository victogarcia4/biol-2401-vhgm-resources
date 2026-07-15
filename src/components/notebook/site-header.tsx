/**
 * SiteHeader — slim, paper-backed header that sits under the top banner.
 * Logo mark on the left, course + instructor on the right.
 */
export function SiteHeader() {
  return (
    <header className="nb-header sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 group">
          <span
            className="inline-flex items-center justify-center w-9 h-9 rounded-md border-2 border-[#1a1a1a] bg-[#d4f873] font-extrabold text-[#1a1a1a] text-lg shadow-[0_2px_0_#1a1a1a] group-hover:-translate-y-0.5 transition-transform"
            aria-hidden
          >
            A&amp;P
          </span>
          <span className="leading-tight">
            <span className="block text-[11px] uppercase tracking-[0.18em] text-[#666]">
              BIOL 2401
            </span>
            <span className="block text-sm font-bold">A&amp;P Resource Hub</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          <a
            href="#resources"
            className="px-3 py-2 rounded hover:bg-[#efece0] transition-colors"
          >
            Resources
          </a>
          <a
            href="#about"
            className="px-3 py-2 rounded hover:bg-[#efece0] transition-colors"
          >
            Instructor
          </a>
          <a
            href="#how-to-use"
            className="px-3 py-2 rounded hover:bg-[#efece0] transition-colors"
          >
            How to use
          </a>
        </nav>

        <a
          href="https://biol2401-flipped-classroom.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="nb-btn text-sm"
        >
          Start learning <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}
