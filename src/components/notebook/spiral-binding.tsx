/**
 * SpiralBinding — the signature matte-silver spiral that runs the full
 * height of the left edge, like a real spiral-bound notebook.
 *
 * Implemented as a fixed strip with a vertically-repeating SVG pattern of
 * oval loops. NEVER animate this — it is the physical structure of the page.
 */
export function SpiralBinding() {
  return (
    <div
      aria-hidden="true"
      className="nb-spiral"
    >
      <div className="nb-spiral__loops" />
    </div>
  );
}
