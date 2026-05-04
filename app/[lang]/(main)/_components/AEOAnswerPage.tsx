import Link from "next/link";

import styles from "./aeoAnswer.module.scss";

interface FAQItem {
  question: string;
  answer: string;
}

interface RelatedLink {
  label: string;
  href: string;
}

interface AEOAnswerPageProps {
  locale: string;
  headline: string;
  directAnswer: string;
  children: React.ReactNode;
  faqs: FAQItem[];
  related?: RelatedLink[];
}

const AEOAnswerPage = ({ locale, headline, directAnswer, children, faqs, related }: AEOAnswerPageProps) => {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.headline}>{headline}</h1>
          <div className={styles.directAnswer} role="note" aria-label="Direct answer">
            <p>{directAnswer}</p>
          </div>
        </div>
      </section>

      <section className={styles.body}>
        <div className={styles.bodyInner}>{children}</div>
      </section>

      <section className={styles.faqSection} aria-label="Frequently asked questions">
        <div className={styles.faqInner}>
          <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
          <dl className={styles.faqList}>
            {faqs.map((faq, i) => (
              <div key={i} className={styles.faqItem}>
                <dt className={styles.faqQuestion}>{faq.question}</dt>
                <dd className={styles.faqAnswer}>{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {related && related.length > 0 && (
        <section className={styles.related}>
          <div className={styles.relatedInner}>
            <h2 className={styles.relatedHeading}>Related guides</h2>
            <ul className={styles.relatedList}>
              {related.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.relatedLink}>
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to start your custom coffee order?</h2>
          <p className={styles.ctaBody}>No minimums. Full design included. Ships across Canada and the USA.</p>
          <div className={styles.ctaButtons}>
            <Link href={`/${locale}/design`} className={styles.ctaPrimary}>Design your bag</Link>
            <Link href={`/${locale}/contact`} className={styles.ctaSecondary}>Get a free quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AEOAnswerPage;
