"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useState } from "react";

import bagPng from "@/public/assets/bag.png";
import canShadowPng from "@/public/assets/can-shadow.png";
import capsulePng from "@/public/assets/capsule.png";

import styles from "./whiteLabelVertical.module.scss";

export type ProductImageKey = "bag" | "can" | "capsule";

const PRODUCT_IMAGES = {
  bag: bagPng,
  can: canShadowPng,
  capsule: capsulePng,
};

export interface VerticalPageProduct {
  tag: string;
  title: string;
  body: string;
  bullets: string[];
  ctaText: string;
  contactSubject: string;
  imageKey: ProductImageKey;
  imageAlt: string;
  imageFirst: boolean;
  theme: "dark" | "light";
}

export interface VerticalPageData {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaText: string;
    contactSubject: string;
  };
  pain: {
    eyebrow: string;
    title: string;
    items: { icon: string; text: string }[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    items: { icon: string; title: string; body: string }[];
  };
  products: VerticalPageProduct[];
  stats: { value: string; label: string }[];
  howItWorks: { n: string; title: string; body: string }[];
  testimonials: { quote: string; name: string; role: string }[];
  faq: { q: string; a: string }[];
  cta: {
    title: string;
    subtitle: string;
    ctaText: string;
    contactSubject: string;
  };
}

interface Props {
  data: VerticalPageData;
}

const WhiteLabelVerticalPage = ({ data }: Props) => {
  const locale = useLocale();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className={styles.page}>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroAngle} />
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>{data.hero.eyebrow}</span>
          <h1 className={styles.heroTitle}>{data.hero.title}</h1>
          <p className={styles.heroSubtitle}>{data.hero.subtitle}</p>
          <Link
            href={`/${locale}/contact?subject=${encodeURIComponent(data.hero.contactSubject)}`}
            className={styles.heroCta}
          >
            {data.hero.ctaText}
          </Link>
        </div>
      </section>

      {/* ── Pain points ── */}
      <section className={styles.pain}>
        <div className={styles.painInner}>
          <span className={styles.eyebrow}>{data.pain.eyebrow}</span>
          <h2 className={styles.sectionTitleLight}>{data.pain.title}</h2>
          <div className={styles.painGrid}>
            {data.pain.items.map((item, i) => (
              <div key={i} className={styles.painItem}>
                <span className={styles.painIcon} aria-hidden>{item.icon}</span>
                <p className={styles.painText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className={styles.benefits}>
        <div className={styles.benefitsInner}>
          <span className={styles.eyebrow}>{data.benefits.eyebrow}</span>
          <h2 className={styles.sectionTitleLight}>{data.benefits.title}</h2>
          <div className={styles.benefitsGrid}>
            {data.benefits.items.map((item, i) => (
              <div key={i} className={styles.benefitCard}>
                <span className={styles.benefitIcon} aria-hidden>{item.icon}</span>
                <h3 className={styles.benefitTitle}>{item.title}</h3>
                <p className={styles.benefitBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product split sections ── */}
      {data.products.map((product, i) => {
        const img = PRODUCT_IMAGES[product.imageKey];
        const isDark = product.theme === "dark";

        const imageBlock = (
          <div className={styles.productImageWrap}>
            <Image
              src={img}
              alt={product.imageAlt}
              width={img.width}
              height={img.height}
              sizes="(max-width: 767px) 100vw, 460px"
              placeholder="blur"
              className={styles.productImg}
            />
          </div>
        );

        const copyBlock = (
          <div>
            <span className={styles.productTag}>{product.tag}</span>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p className={styles.productBody}>{product.body}</p>
            <ul className={styles.productBullets}>
              {product.bullets.map((b, j) => (
                <li key={j} className={styles.productBullet}>{b}</li>
              ))}
            </ul>
            <Link
              href={`/${locale}/contact?subject=${encodeURIComponent(product.contactSubject)}`}
              className={styles.productCta}
            >
              {product.ctaText}
            </Link>
          </div>
        );

        return (
          <section
            key={i}
            className={classNames(
              styles.productSection,
              isDark ? styles.dark : styles.light,
            )}
          >
            <div className={styles.productInner}>
              {product.imageFirst ? <>{imageBlock}{copyBlock}</> : <>{copyBlock}{imageBlock}</>}
            </div>
          </section>
        );
      })}

      {/* ── Stats bar ── */}
      <section className={styles.stats}>
        <div className={styles.statsInner}>
          {data.stats.map((s, i) => (
            <div key={i} className={styles.statItem}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section className={styles.how}>
        <div className={styles.howInner}>
          <span className={styles.eyebrow}>How it works</span>
          <h2 className={styles.sectionTitleLight}>From idea to shelf in weeks, not months.</h2>
          <div className={styles.howGrid}>
            {data.howItWorks.map((step, i) => (
              <div key={i} className={styles.howStep}>
                <span className={styles.howNumber}>{step.n}</span>
                <h3 className={styles.howStepTitle}>{step.title}</h3>
                <p className={styles.howStepBody}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className={styles.testimonials}>
        <div className={styles.testimonialsInner}>
          <span className={styles.eyebrow}>What our clients say</span>
          <h2 className={styles.sectionTitleDark}>Results that speak for themselves.</h2>
          <div className={styles.testimonialsGrid}>
            {data.testimonials.map((t, i) => (
              <div key={i} className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>★★★★★</div>
                <p className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.testimonialName}>{t.name}</span>
                  <span className={styles.testimonialRole}>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <span className={styles.eyebrow}>Frequently asked questions</span>
          <h2 className={styles.sectionTitleLight}>Everything you need to know.</h2>
          <div className={styles.faqList} role="list">
            {data.faq.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className={styles.faqItem} role="listitem">
                  <button
                    type="button"
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <svg
                      className={classNames(styles.faqChevron, isOpen && styles.open)}
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  <div className={classNames(styles.faqAnswerWrap, isOpen && styles.open)}>
                    <div className={styles.faqAnswerInner}>
                      <p className={styles.faqAnswer}>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>{data.cta.title}</h2>
          <p className={styles.ctaSubtitle}>{data.cta.subtitle}</p>
          <Link
            href={`/${locale}/contact?subject=${encodeURIComponent(data.cta.contactSubject)}`}
            className={styles.ctaBtn}
          >
            {data.cta.ctaText}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WhiteLabelVerticalPage;
