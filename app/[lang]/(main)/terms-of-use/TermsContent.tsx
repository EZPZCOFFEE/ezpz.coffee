"use client";

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
  return (
    <article className={styles.page} aria-labelledby="terms-page-title">
      <div className={styles.content}>
        <header className={styles.header}>
          <h1 id="terms-page-title" className={styles.title}>
            {title}
          </h1>
          <p className={styles.lastUpdated}>{lastUpdated}</p>
        </header>

        <p className={styles.intro}>{intro}</p>

        <div className={styles.sections}>
          {sections.map((section, index) => (
            <section
              key={section.id}
              className={styles.section}
              aria-labelledby={`section-${section.id}`}
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
            </section>
          ))}
        </div>
      </div>
    </article>
  );
};

export default TermsContent;
