export const LANDING_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const TRANSLATE_Y_OFFSET_PX = 16;

/** Viewport: trigger when section enters the lower band of the viewport (per-section). */
const VIEWPORT_STAGGER = {
  once: true,
  amount: 0.22 as const,
  margin: "0px 0px -10% 0px" as const,
};

/** Staggered children that fade + rise when scrolled into view (matches home landing). */
export function getStaggerReveal(motionOff: boolean) {
  const staggerParent = {
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { ...VIEWPORT_STAGGER },
    variants: {
      hidden: {},
      visible: {
        transition: motionOff
          ? { staggerChildren: 0, delayChildren: 0 }
          : { staggerChildren: 0.11, delayChildren: 0.06 },
      },
    },
  };

  const fadeChild = {
    variants: {
      hidden: motionOff ? { opacity: 1, y: 0 } : { opacity: 0, y: TRANSLATE_Y_OFFSET_PX },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: motionOff ? 0 : 0.52, ease: LANDING_EASE },
      },
    },
  };

  return { staggerParent, fadeChild };
}

/**
 * Nested list under a stagger parent: stagger each item with the same fadeChild timing.
 * Use on a motion wrapper whose children use fadeChild from getStaggerReveal.
 */
export function getNestedSectionListStagger(motionOff: boolean) {
  return {
    variants: {
      hidden: {},
      visible: {
        transition: motionOff
          ? { staggerChildren: 0, delayChildren: 0 }
          : { staggerChildren: 0.12, delayChildren: 0.06 },
      },
    },
  };
}

/** Root section that only toggles variant when in view (use with nested stagger children). */
export function getSectionVariantInView(motionOff: boolean) {
  if (motionOff) {
    return {
      initial: "visible" as const,
      animate: "visible" as const,
      variants: { hidden: {}, visible: {} },
    };
  }
  return {
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, amount: 0.2, margin: "-64px 0px" },
    variants: {
      hidden: {},
      visible: {},
    },
  };
}

/** Full-width sections that fade + rise once in view (e.g. white-label split bands). */
export function getSectionFadeInView(motionOff: boolean) {
  if (motionOff) return {};
  return {
    initial: { opacity: 0, y: TRANSLATE_Y_OFFSET_PX },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-72px 0px", amount: 0.18 },
    transition: { duration: 0.58, ease: LANDING_EASE },
  };
}

/** Hero scroll-hint block: subtle fade + rise on load. */
export function getHeroHintFade(motionOff: boolean) {
  if (motionOff) return {};
  return {
    initial: { opacity: 0, y: 8 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, delay: 0.45, ease: LANDING_EASE },
  };
}
