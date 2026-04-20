"use client";

import { CaretDown } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import { getStaggerReveal } from "@/lib/motion/landingReveal";

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

const FAQAccordionItem = ({ question, answer }: FAQItem) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.item} ${open ? styles.itemOpen : ""}`}>
      <button
        className={styles.question}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        type="button"
      >
        <span>{question}</span>
        <CaretDown
          size={18}
          weight="bold"
          className={styles.caret}
          aria-hidden
        />
      </button>
      <div
        className={styles.answerWrap}
        style={{ display: open ? "block" : "none" }}
      >
        <dd className={styles.answer}>
          <span className={styles.answerText}>{answer}</span>
        </dd>
      </div>
    </div>
  );
};

const FAQContent = ({ title, categories }: FAQContentProps) => {
  const reduceMotion = useReducedMotion();
  const motionOff = !!reduceMotion;
  const { staggerParent, fadeChild } = getStaggerReveal(motionOff);

  return (
    <article className={styles.page} aria-labelledby="faq-page-title">
      <motion.div className={styles.content} {...staggerParent}>
        <motion.h1 id="faq-page-title" className={styles.title} {...fadeChild}>
          {title}
        </motion.h1>

        <div className={styles.categories}>
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
                  <FAQAccordionItem key={item.question} {...item} />
                ))}
              </dl>
            </motion.section>
          ))}
        </div>
      </motion.div>
    </article>
  );
};

export default FAQContent;
