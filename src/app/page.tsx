import { SpiralBinding } from "@/components/notebook/spiral-binding";
import { TopBanner } from "@/components/notebook/top-banner";
import { SiteHeader } from "@/components/notebook/site-header";
import { Hero } from "@/components/notebook/hero";
import { ResourceStage } from "@/components/notebook/resource-stage";
import { AboutAuthor } from "@/components/notebook/about-author";
import { HowToUse } from "@/components/notebook/how-to-use";
import { SiteFooter } from "@/components/notebook/site-footer";

const RESOURCES = [
  {
    index: 1,
    stage: "Pre-assessment",
    kicker: "Entry 01 · Diagnostic",
    title: "BIOL 2401 — Pre-Assessment Generator",
    blurb:
      "Interactive diagnostic pre-assessment tool designed to gauge student prior knowledge, identify baseline understanding, and activate core concepts before starting a unit.",
    bullets: [
      "Diagnostic pre-assessment quizzes & questions",
      "Baseline student understanding before new units",
      "Prepares students for active learning & infographics",
    ],
    platform: "Vercel",
    href: "https://biol2401-pre-assessment-generator.vercel.app/",
    cta: "Open pre-assessment",
    accent: "red" as const,
    rotation: -2,
  },
  {
    index: 2,
    stage: "Infographics",
    kicker: "Entry 02 · Visual Learning",
    title: "A&P — Infographics Presentations",
    blurb:
      "Visual infographics that surface what students already know before lecture. Built around HAPS Society for Learning Outcomes, each panel targets a foundational A&P I concept — body organization, cytology, histology, the integumentary system, and the skeletal & muscular systems.",
    bullets: [
      "HAPS SLO-aligned diagnostic infographics",
      "Use to baseline and visualize student understanding",
      "Pairs with the flipped-classroom cycle below",
    ],
    platform: "Vercel",
    href: "https://dr-garcia-m-haps-slo.vercel.app/",
    cta: "Open infographics",
    accent: "red" as const,
    rotation: 1.5,
  },
  {
    index: 3,
    stage: "Active Learning",
    kicker: "Entry 03 · Flipped Classroom",
    title: "BIOL 2401 — Flipped Classroom",
    blurb:
      "The core active-learning cycle. Students interact with content before class so that face-to-face time becomes practice, application, and discussion. Includes pre-class primers, in-class activity prompts, and post-class consolidation prompts for every unit.",
    bullets: [
      "Pre-class primers + in-class active learning prompts",
      "Structured peer-instruction cycles for each unit",
      "Built to run alongside the pre-assessment and post-assessment apps",
    ],
    platform: "Netlify",
    href: "https://biol2401-flipped-classroom.netlify.app/",
    cta: "Open flipped classroom",
    accent: "lime" as const,
    rotation: -1.5,
  },
  {
    index: 4,
    stage: "Post-assessment",
    kicker: "Entry 04 · Mini-apps",
    title: "A&P1 — Mini-apps",
    blurb:
      "Self-paced mini-apps that let students revisit, drill, and self-check after a unit closes. Drill practice, labeling exercises, and short-form quizzes give immediate feedback so students can close gaps before the next summative assessment.",
    bullets: [
      "Self-paced drill & labeling mini-apps",
      "Instant feedback with worked explanations",
      "Use as exam-prep sprint before each unit exam",
    ],
    platform: "Vercel",
    href: "https://mini-ap1-apps.vercel.app/",
    cta: "Open mini-apps",
    accent: "lime" as const,
    rotation: 1,
  },
];

export default function Page() {
  return (
    <div className="nb-paper min-h-screen relative">
      {/* Spiral binding on the left edge — fixed across the page */}
      <SpiralBinding />

      {/* Main content — offset to the right of the spiral + red margin line */}
      <div className="relative z-10 pl-[72px] sm:pl-[90px] pr-0">
        <TopBanner />
        <SiteHeader />
        <main>
          <Hero />

          {/* The four resource stages */}
          <section id="resources" className="px-5 sm:px-10 lg:px-16 pt-6 pb-16">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
                <div>
                  <span className="nb-eyebrow">Table of Contents · P. 01</span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold mt-1">
                    The four stages of the{" "}
                    <span className="nb-underline-doodle">course flow</span>
                  </h2>
                </div>
                <span className="nb-script text-2xl text-[#d62828] -rotate-2">
                  pick a stage &rarr;
                </span>
              </div>

              <div className="grid gap-8 md:gap-10">
                {RESOURCES.map((r) => (
                  <ResourceStage key={r.index} {...r} />
                ))}
              </div>
            </div>
          </section>

          <AboutAuthor />
          <HowToUse />
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
