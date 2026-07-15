/**
 * TopBanner — thin lime bar that sits at the very top of the page.
 * Used for course-level announcements (course code + term).
 */
export function TopBanner() {
  return (
    <div className="nb-top-banner px-4 py-2 sm:py-2.5">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 flex-wrap">
        <span className="flex items-center gap-2">
          <span aria-hidden>📓</span>
          <span>BIOL 2401 · Anatomy &amp; Physiology I — Resource Pack</span>
        </span>
        <a
          href="#resources"
          className="hidden sm:inline-flex items-center gap-1 hover:underline font-semibold"
        >
          jump to resources <span aria-hidden>↓</span>
        </a>
      </div>
    </div>
  );
}
