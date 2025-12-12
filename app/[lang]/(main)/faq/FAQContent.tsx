"use client";

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
}

const FAQContent = ({ title, categories }: FAQContentProps) => {
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
    </article>
  );
};

export default FAQContent;

