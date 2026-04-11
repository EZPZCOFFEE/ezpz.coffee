"use client";

import { motion, useReducedMotion } from "framer-motion";

import { getNestedSectionListStagger, getStaggerReveal } from "@/lib/motion/landingReveal";

import styles from "./styles.module.scss";

export interface MarketingSection {
  heading?: string;
  copy: string[];
}

export interface MarketingPageProps {
  title: string;
  intro?: string;
  sections: MarketingSection[];
}

const MarketingContent = ({ title, intro, sections }: MarketingPageProps) => {
  const reduceMotion = useReducedMotion();
  const motionOff = !!reduceMotion;
  const { staggerParent, fadeChild } = getStaggerReveal(motionOff);
  const sectionListStagger = getNestedSectionListStagger(motionOff);

  return (
    <article className={styles.page} aria-labelledby="marketing-page-title">
      <motion.div className={styles.copyColumn} {...staggerParent}>
        <motion.h1 id="marketing-page-title" className={styles.title} {...fadeChild}>
          {title}
        </motion.h1>
        {intro && (
          <motion.p className={styles.intro} {...fadeChild}>
            {intro}
          </motion.p>
        )}

        <motion.div className={styles.sectionList} {...sectionListStagger}>
          {sections.map((section, sectionIndex) => (
            <motion.section
              key={`${section.heading ?? "section"}-${sectionIndex}`}
              className={styles.section}
              aria-label={section.heading ?? `Section ${sectionIndex + 1}`}
              {...fadeChild}
            >
              {section.heading && <h2 className={styles.sectionHeading}>{section.heading}</h2>}
              {section.copy.map((paragraph, paragraphIndex) => (
                <p key={`paragraph-${sectionIndex}-${paragraphIndex}`} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </motion.section>
          ))}
        </motion.div>
      </motion.div>
    </article>
  );
};

export default MarketingContent;
