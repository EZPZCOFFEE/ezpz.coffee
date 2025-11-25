import Image, { type StaticImageData } from "next/image";

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
  illustration: {
    image: StaticImageData | string;
    alt: string;
    caption?: string;
    priority?: boolean;
  };
}

const MarketingPage = ({ eyebrow, title, intro, sections, illustration }: MarketingPageProps) => {
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

      <figure className={styles.illustration}>
        <Image
          className={styles.illustrationImage}
          src={illustration.image}
          alt={illustration.alt}
          priority={illustration.priority}
          sizes="(min-width: 1024px) 420px, 70vw"
        />
        {illustration.caption && <figcaption className={styles.caption}>{illustration.caption}</figcaption>}
      </figure>
    </article>
  );
};

export default MarketingPage;
