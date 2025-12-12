import styles from "./styles.module.scss";

export interface MarketingSection {
  heading?: string;
  copy: string[];
}

export interface MarketingPageProps {
  eyebrow?: string;
  title: string;
  intro?: string;
  sections: MarketingSection[];
}

const MarketingContent = ({ eyebrow, title, intro, sections }: MarketingPageProps) => {
  return (
    <article className={styles.page} aria-labelledby="marketing-page-title">
      <div className={styles.copyColumn}>
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 id="marketing-page-title" className={styles.title}>
          {title}
        </h1>
        {intro && <p className={styles.intro}>{intro}</p>}

        <div className={styles.sectionList}>
          {sections.map((section, sectionIndex) => (
            <section
              key={`${section.heading ?? "section"}-${sectionIndex}`}
              className={styles.section}
              aria-label={section.heading ?? `Section ${sectionIndex + 1}`}
            >
              {section.heading && <h2 className={styles.sectionHeading}>{section.heading}</h2>}
              {section.copy.map((paragraph, paragraphIndex) => (
                <p key={`paragraph-${sectionIndex}-${paragraphIndex}`} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
};

export default MarketingContent;
