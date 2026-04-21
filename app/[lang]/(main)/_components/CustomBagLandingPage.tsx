"use client";

import { ArrowRight, Check, Palette, Sliders, Package } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useRef, useState, useEffect } from "react";

import bagPng from "@/public/assets/bag.png";
import bagShadowPng from "@/public/assets/bag-shadow.png";
import mockupBlank from "@/public/bags/mock-up-blank.jpg";
import mockupLabel from "@/public/bags/mock-up-label.jpg";

import styles from "./customBagLanding.module.scss";

const STATS = [
  { number: "1", label: "Minimum order" },
  { number: "5 min", label: "To design your bag" },
  { number: "1 week", label: "Turnaround time" },
];

const FEATURES = [
  {
    icon: <Sliders size={28} weight="duotone" />,
    title: "Design Online, Instantly",
    body: "Our drag-and-drop builder lets you upload your logo, choose colors, pick your bag style, and preview the result in real time, no design experience needed.",
  },
  {
    icon: <Package size={28} weight="duotone" />,
    title: "No Minimum Order",
    body: "Order just one bag or one thousand. EZPZ is the only Canadian supplier with zero MOQ, so you can test before you scale.",
  },
  {
    icon: <Palette size={28} weight="duotone" />,
    title: "Endless Customization",
    body: "Your brand colors, your fonts, your artwork. Choose your roast profile and bag style to match your exact product vision.",
  },
];

const PERKS = [
  "Upload your own logo and artwork",
  "Choose your roast profile",
  "Specialty coffee sourced from around the world",
  "Ships anywhere worldwide",
  "No minimum order, ever",
  "Ready in as little as 1 week",
];

// Slider images - swap these out once real examples are provided
const SLIDES = [
  { src: mockupLabel, alt: "Custom branded coffee bag example" },
  { src: mockupBlank, alt: "Blank coffee bag ready for your design" },
  { src: bagPng, alt: "EZPZ custom bag front view" },
  { src: bagShadowPng, alt: "Coffee bag product view" },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const restart = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent((index + SLIDES.length) % SLIDES.length);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 4000);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <div className={styles.slider}>
      <div className={styles.sliderTrack}>
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`${styles.slide} ${i === current ? styles.slideActive : ""}`}
            aria-hidden={i !== current}
          >
            <Image src={slide.src} alt={slide.alt} fill sizes="(max-width: 768px) 100vw, 860px" className={styles.slideImage} priority={i === 0} />
          </div>
        ))}
      </div>
      <button className={`${styles.sliderArrow} ${styles.sliderArrowPrev}`} onClick={() => restart(current - 1)} aria-label="Previous slide">‹</button>
      <button className={`${styles.sliderArrow} ${styles.sliderArrowNext}`} onClick={() => restart(current + 1)} aria-label="Next slide">›</button>
      <div className={styles.sliderDots}>
        {SLIDES.map((_, i) => (
          <button key={i} className={`${styles.dot} ${i === current ? styles.dotActive : ""}`} onClick={() => restart(i)} aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

const CustomBagLandingPage = () => {
  const locale = useLocale();

  return (
    <div className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Your brand.<br />Your coffee.<br />
              <span className={styles.heroAccent}>No minimums.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Design your own custom coffee bags online in minutes. Upload your logo,
              choose your style, and get professional branded packaging, whether you
              need one bag or one thousand.
            </p>
            <Link href={`/${locale}/design`} className={styles.heroCta}>
              Start designing for free <ArrowRight size={18} weight="bold" />
            </Link>
          </div>
          <div className={styles.heroImageWrap}>
            <Image src={bagPng} alt="Custom EZPZ coffee bag" width={420} height={520} className={styles.heroImage} priority />
          </div>
        </div>
        <div className={styles.heroAngle} />
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className={styles.stats}>
        <div className={styles.statsInner}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statNumber}>{s.number}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────── */}
      <section className={styles.features}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrowDark}>How it works</span>
          <h2 className={styles.sectionTitle}>Everything you need to stand out</h2>
          <div className={styles.featureGrid}>
            {FEATURES.map((f, i) => (
              <div key={f.title} className={styles.featureCard}>
                <span className={styles.featureNumber}>0{i + 1}</span>
                <span className={styles.featureIcon}>{f.icon}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Slider ───────────────────────────────────────────── */}
      <section className={styles.gallery}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrowDark}>Examples</span>
          <h2 className={styles.sectionTitle}>See what&apos;s possible</h2>
          <p className={styles.gallerySubtitle}>
            Real bags, real brands, all designed through the EZPZ online tool.
          </p>
          <Slider />
        </div>
      </section>

      {/* ── Perks ────────────────────────────────────────────── */}
      <section className={styles.perks}>
        <div className={styles.perksInner}>
          <div className={styles.perksCopy}>
            <h2 className={styles.perksTitle}>
              Great packaging shouldn&apos;t require a<span className={styles.perksAccent}> warehouse order.</span>
            </h2>
            <p className={styles.perksBody}>
              We built EZPZ because great coffee deserves great packaging, and great
              packaging shouldn&apos;t require a warehouse order. From independent roasters
              to national brands, we make custom bags accessible to everyone.
            </p>
            <Link href={`/${locale}/design`} className={styles.perksBtn}>
              Design your bag now <ArrowRight size={18} weight="bold" />
            </Link>
          </div>
          <ul className={styles.perksList}>
            {PERKS.map((perk) => (
              <li key={perk} className={styles.perkItem}>
                <Check size={18} weight="bold" className={styles.perkCheck} />
                {perk}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to create your<br />custom bag?</h2>
          <p className={styles.ctaSubtitle}>It takes less than 5 minutes. No account required to start.</p>
          <Link href={`/${locale}/design`} className={styles.ctaButton}>
            Start designing, it&apos;s free <ArrowRight size={20} weight="bold" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default CustomBagLandingPage;
