"use client";

import Image, { type StaticImageData } from "next/image";

import styles from "./styles.module.scss";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

interface FAQContentProps {
  title: string;
  categories: FAQCategory[];
  illustration: {
    image: StaticImageData | string;
    alt: string;
  };
}

const FAQContent = ({ title, categories, illustration }: FAQContentProps) => {
  return (
    <article className={styles.page} aria-labelledby="faq-page-title">
      <div className={styles.content}>
        <h1 id="faq-page-title" className={styles.title}>
          {title}
        </h1>

        <div className={styles.categories}>
          {categories.map((category) => (
            <section
              key={category.title}
              className={styles.category}
              aria-label={category.title}
            >
              <h2 className={styles.categoryTitle}>{category.title}</h2>
              <dl className={styles.itemList}>
                {category.items.map((item) => (
                  <div key={item.question} className={styles.item}>
                    <dt className={styles.question}>{item.question}</dt>
                    <dd className={styles.answer}>
                      <span className={styles.answerText}>{item.answer}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          ))}
        </div>
      </div>

      <figure className={styles.illustration}>
        <Image
          className={styles.illustrationImage}
          src={illustration.image}
          alt={illustration.alt}
          priority
          sizes="(min-width: 1024px) 380px, 70vw"
        />
      </figure>
    </article>
  );
};

export default FAQContent;

