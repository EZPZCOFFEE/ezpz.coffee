"use client";

import { motion, useReducedMotion } from "framer-motion";

import { getNestedSectionListStagger, getStaggerReveal } from "@/lib/motion/landingReveal";

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
  const reduceMotion = useReducedMotion();
  const motionOff = !!reduceMotion;
  const { staggerParent, fadeChild } = getStaggerReveal(motionOff);
  const categoriesStagger = getNestedSectionListStagger(motionOff);

  return (
    <article className={styles.page} aria-labelledby="faq-page-title">
      <motion.div className={styles.content} {...staggerParent}>
        <motion.h1 id="faq-page-title" className={styles.title} {...fadeChild}>
          {title}
        </motion.h1>

        <motion.div className={styles.categories} {...categoriesStagger}>
          {categories.map((category) => (
            <motion.section
              key={category.title}
              className={styles.category}
              aria-label={category.title}
              {...fadeChild}
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
            </motion.section>
          ))}
        </motion.div>
      </motion.div>
    </article>
  );
};

export default FAQContent;

