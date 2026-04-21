"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import { useLocale } from "next-intl";

import { BLOG_POSTS } from "./data";
import styles from "./styles.module.scss";

const BlogPage = () => {
  const locale = useLocale();

  return (
    <div className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroAngle} />
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>The EZPZ Blog</span>
          <h1 className={styles.heroTitle}>Coffee branding tips, industry news, and more.</h1>
          <p className={styles.heroSub}>
            Everything you need to know about building a coffee brand in Canada.
          </p>
        </div>
      </section>

      {/* ── Posts grid ───────────────────────────────────────── */}
      <section className={styles.gridSection}>
        <div className={styles.gridInner}>
          <div className={styles.grid}>
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={post.published ? `/${locale}/blog/${post.slug}` : "#"}
                className={styles.card}
                aria-disabled={!post.published}
              >
                <div className={styles.cardImage} style={{ background: post.color }}>
                  <span className={styles.cardInitials}>{post.initials}</span>
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.cardCategory} style={{ color: post.categoryColor }}>
                    {post.category}
                  </span>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardDate}>{post.date}</span>
                    <span className={styles.readMore}>
                      Read more <ArrowRight size={13} weight="bold" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default BlogPage;
