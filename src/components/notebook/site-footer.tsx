/**
 * SiteFooter — black footer CTA bar.
 *
 * Mirrors the avatarhype.ai pattern: black bar, three resource links,
 * a primary lime CTA on the right. Sticks to the bottom of the viewport
 * when content is short; pushed down naturally when long.
 */
export function SiteFooter() {
  return (
    <footer className="nb-footer mt-auto">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-6 flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-5 flex-wrap text-sm">
          <span className="font-bold">BIOL 2401 · A&amp;P I</span>
          <a
            href="https://dr-garcia-m-haps-slo.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d4f873] transition-colors"
          >
            Pre-assessment ↗
          </a>
          <a
            href="https://biol2401-flipped-classroom.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d4f873] transition-colors"
          >
            Flipped classroom ↗
          </a>
          <a
            href="https://mini-ap1-apps.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#d4f873] transition-colors"
          >
            Mini-apps ↗
          </a>
        </div>

        <a
          href="https://biol2401-flipped-classroom.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="nb-btn text-sm"
        >
          Start learning <span aria-hidden>→</span>
        </a>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 flex items-center justify-between gap-3 text-[11px] text-[#999] flex-wrap">
          <span>
            © {new Date().getFullYear()} Dr. Victor Garcia Martinez · Lone Star College
          </span>
          <span className="nb-script text-base text-[#d4f873]">made for students ↗</span>
        </div>
      </div>
    </footer>
  );
}
