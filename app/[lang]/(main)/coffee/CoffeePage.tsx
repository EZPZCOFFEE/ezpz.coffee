"use client";

import { ArrowRight, Mountains, Thermometer } from "@phosphor-icons/react";
import Link from "next/link";
import { useLocale } from "next-intl";

import styles from "./styles.module.scss";

const ORIGINS = [
  {
    country: "Ethiopia",
    region: "Yirgacheffe",
    flag: "🇪🇹",
    notes: ["Blueberry", "Jasmine", "Lemon"],
    roast: "Light",
    altitude: "1,800–2,200m",
  },
  {
    country: "Colombia",
    region: "Huila",
    flag: "🇨🇴",
    notes: ["Caramel", "Red apple", "Hazelnut"],
    roast: "Medium",
    altitude: "1,600–2,000m",
  },
  {
    country: "Guatemala",
    region: "Antigua",
    flag: "🇬🇹",
    notes: ["Chocolate", "Brown sugar", "Almond"],
    roast: "Medium-dark",
    altitude: "1,500–1,700m",
  },
  {
    country: "Brazil",
    region: "Cerrado",
    flag: "🇧🇷",
    notes: ["Peanut butter", "Milk chocolate", "Vanilla"],
    roast: "Dark",
    altitude: "900–1,100m",
  },
];

const ROAST_COLORS: Record<string, string> = {
  Light: "#f5c518",
  Medium: "#e07b39",
  "Medium-dark": "#b85c2a",
  Dark: "#4a2c0a",
};

const CoffeePage = () => {
  const locale = useLocale();

  return (
    <div className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            Our <span className={styles.heroAccent}>coffee.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            At EZPZ, we source our beans from passionate producers who cultivate exceptional
            coffee with rich, balanced aromas.
          </p>
        </div>
        <div className={styles.heroAngle} />
      </section>

      {/* ── Intro paragraphs ─────────────────────────────────── */}
      <section className={styles.intro}>
        <div className={styles.sectionInner}>
          <p className={styles.introBody}>
            Our roasting, carried out in Montreal at Canadian Roasting Society, highlights the
            full complexity of each origin.
          </p>
          <p className={styles.introBody}>
            Every bag is roasted with precision to guarantee an optimal experience, a cup worthy
            of the finest baristas, sure to delight your clients, your employees, or anyone who
            has the pleasure of enjoying your coffee.
          </p>
        </div>
      </section>

      {/* ── How we select ────────────────────────────────────── */}
      <section className={styles.selection}>
        <div className={styles.selectionInner}>
          <div className={styles.selectionText}>
            <span className={styles.eyebrow}>Our sourcing</span>
            <h2 className={styles.sectionTitle}>How we select our beans</h2>
            <p className={styles.selectionBody}>
              We work exclusively with specialty-grade coffees scoring 80+ on the SCA cupping
              scale. Every origin is chosen for its unique flavor profile, traceability, and the
              story behind the farm. We visit producers, build relationships, and only source from
              those who share our values.
            </p>
          </div>
          <div className={styles.selectionStats}>
            <div className={styles.selectionStat}>
              <span className={styles.selectionStatNumber}>84+</span>
              <span className={styles.selectionStatLabel}>SCA cupping score</span>
            </div>
            <div className={styles.selectionStat}>
              <span className={styles.selectionStatNumber}>100%</span>
              <span className={styles.selectionStatLabel}>Traceable origins</span>
            </div>
            <div className={styles.selectionStat}>
              <span className={styles.selectionStatNumber}>4+</span>
              <span className={styles.selectionStatLabel}>Countries sourced</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Origins ──────────────────────────────────────────── */}
      <section className={styles.origins}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>Current offerings</span>
          <h2 className={styles.sectionTitle}>Coffee origins</h2>
          <div className={styles.originsGrid}>
            {ORIGINS.map((o) => (
              <div key={o.region} className={styles.originCard}>
                <div className={styles.originCardHeader}>
                  <span className={styles.originFlag}>{o.flag}</span>
                  <div>
                    <h3 className={styles.originCountry}>{o.country}</h3>
                    <span className={styles.originRegion}>{o.region}</span>
                  </div>
                  <span
                    className={styles.originRoastBadge}
                    style={{ background: ROAST_COLORS[o.roast] }}
                  >
                    {o.roast}
                  </span>
                </div>
                <div className={styles.originNotes}>
                  {o.notes.map((n) => (
                    <span key={n} className={styles.originNote}>{n}</span>
                  ))}
                </div>
                <div className={styles.originMeta}>
                  <span className={styles.originMetaItem}>
                    <Mountains size={14} weight="bold" /> {o.altitude}
                  </span>
                  <span className={styles.originMetaItem}>
                    <Thermometer size={14} weight="bold" /> {o.roast} roast
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Want this coffee in your branded bag?</h2>
          <p className={styles.ctaSubtitle}>
            Pick your origin, choose your roast, and put your brand on it. No minimums.
          </p>
          <Link href={`/${locale}/design`} className={styles.ctaButton}>
            Design your bag <ArrowRight size={18} weight="bold" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default CoffeePage;
