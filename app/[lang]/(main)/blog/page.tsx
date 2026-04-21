import Link from "next/link";
import { getLocale } from "next-intl/server";

import styles from "./styles.module.scss";

const ARTICLES = [
  {
    slug: "how-to-launch-your-own-coffee-brand-in-canada-2026",
    title: "How to Launch Your Own Coffee Brand in Canada in 2026",
    description: "A step-by-step guide to creating a white label coffee product with no minimum order.",
    date: "2026-04-01",
  },
  {
    slug: "what-makes-specialty-coffee-traceable",
    title: "What Makes Specialty Coffee Traceable?",
    description: "Learn what farm-to-bag traceability means and why it matters for your brand and your customers.",
    date: "2026-03-15",
  },
  {
    slug: "custom-coffee-bags-vs-pre-packaged-coffee",
    title: "Custom Coffee Bags vs. Pre-Packaged Coffee: What's Right for Your Business?",
    description: "We break down the pros and cons to help you make the best decision for your brand.",
    date: "2026-03-01",
  },
];

const BlogPage = async () => {
  const locale = await getLocale();

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>Blog</h1>
        <div className={styles.grid}>
          {ARTICLES.map((article) => (
            <article key={article.slug} className={styles.card}>
              <time className={styles.date} dateTime={article.date}>
                {new Date(article.date).toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <h2 className={styles.title}>{article.title}</h2>
              <p className={styles.description}>{article.description}</p>
              <Link href={`/${locale}/blog/${article.slug}`} className={styles.readMore}>
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
