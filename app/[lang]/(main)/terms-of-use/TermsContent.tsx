"use client";

import { motion, useReducedMotion } from "framer-motion";

import { getNestedSectionListStagger, getStaggerReveal } from "@/lib/motion/landingReveal";

import styles from "./styles.module.scss";

interface TermsSection {
  id: string;
  title: string;
  content: string[];
}

interface TermsContentProps {
  title: string;
  lastUpdated: string;
  intro: string;
  sections: TermsSection[];
}

const TermsContent = ({ title, lastUpdated, intro, sections }: TermsContentProps) => {
  const reduceMotion = useReducedMotion();
  const motionOff = !!reduceMotion;
  const { staggerParent, fadeChild } = getStaggerReveal(motionOff);
  const sectionsStagger = getNestedSectionListStagger(motionOff);

  return (
    <article className={styles.page} aria-labelledby="terms-page-title">
      <motion.div className={styles.content} {...staggerParent}>
        <motion.header className={styles.header} {...fadeChild}>
          <h1 id="terms-page-title" className={styles.title}>
            {title}
          </h1>
          <p className={styles.lastUpdated}>{lastUpdated}</p>
        </motion.header>

        <motion.p className={styles.intro} {...fadeChild}>
          {intro}
        </motion.p>

        <motion.div className={styles.sections} {...sectionsStagger}>
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              className={styles.section}
              aria-labelledby={`section-${section.id}`}
              {...fadeChild}
            >
              <h2 id={`section-${section.id}`} className={styles.sectionTitle}>
                {index + 1}. {section.title}
              </h2>
              <div className={styles.sectionContent}>
                {section.content.map((paragraph, pIndex) => (
                  <p key={`${section.id}-${pIndex}`} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}
        </motion.div>
      </motion.div>
    </article>
  );
};

export default TermsContent;
