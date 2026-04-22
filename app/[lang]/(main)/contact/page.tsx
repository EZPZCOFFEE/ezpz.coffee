import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { InstagramLogo, LinkedinLogo, MapPin, Clock, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { Suspense } from "react";

import { ContactForm } from "./ContactForm";
import styles from "./styles.module.scss";

export const metadata: Metadata = {
  title: "Contact EZPZ Coffee | Get a Custom Coffee Quote | Montreal",
  description: "Get in touch with EZPZ Coffee. Whether you need a single custom bag or a full white label coffee brand, we'll respond within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact EZPZ Coffee | Get a Custom Coffee Quote | Montreal",
    description: "Get in touch with EZPZ Coffee. Whether you need a single custom bag or a full white label coffee brand, we'll respond within 24 hours.",
    type: "website",
    url: "https://www.ezpz.coffee/en/contact",
    images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Contact EZPZ Coffee" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact EZPZ Coffee | Get a Custom Coffee Quote | Montreal",
    description: "Get in touch with EZPZ Coffee. Whether you need a single custom bag or a full white label coffee brand, we'll respond within 24 hours.",
    images: ["/assets/banner-01.jpg"],
  },
};

const ContactPage = async () => {
  const t = await getTranslations("contact");

  return (
    <div className={styles.page}>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Let&apos;s talk <span className={styles.heroAccent}>coffee.</span></h1>
          <p className={styles.heroSubtitle}>
            Whether you&apos;re looking for a single custom bag or launching a full white label brand,
            we&apos;d love to hear from you. Fill out the form and we&apos;ll get back to you within
            24 hours with a personalized quote.
          </p>
        </div>
        <div className={styles.heroAngle} />
      </section>

      {/* ── Body ───────────────────────────────────────────────── */}
      <section className={styles.body}>
        <div className={styles.bodyInner}>

          {/* Form */}
          <div className={styles.formWrap}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>Let us build your coffee brand together.</h2>
              <p className={styles.formSubtext}>
                Whether you need 1 bag or 10,000 — we are here to help. Fill out the form and we will get back to you within 24 hours with a personalized quote.
              </p>
            </div>
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>

            <div className={styles.trustCard}>
              <div className={styles.trustItem}>
                <span className={styles.trustCheck}>✓</span>
                <span className={styles.trustText}>We respond within 24 hours</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustCheck}>✓</span>
                <span className={styles.trustText}>Free design consultation included</span>
              </div>
              <div className={styles.trustItem}>
                <span className={styles.trustCheck}>✓</span>
                <span className={styles.trustText}>No minimum order required</span>
              </div>
            </div>

            <div className={styles.sidebarCard}>
              <div className={styles.sidebarItem}>
                <span className={styles.sidebarIcon}><EnvelopeSimple size={18} weight="bold" /></span>
                <div>
                  <span className={styles.sidebarLabel}>{t("info.emailLabel")}</span>
                  <a href="mailto:help@ezpz.coffee" className={styles.sidebarValue}>
                    {t("info.email")}
                  </a>
                </div>
              </div>

              <div className={styles.sidebarItem}>
                <span className={styles.sidebarIcon}><MapPin size={18} weight="bold" /></span>
                <div>
                  <span className={styles.sidebarLabel}>{t("info.addressLabel")}</span>
                  <span className={styles.sidebarValue}>{t("info.address")}</span>
                </div>
              </div>

              <div className={styles.sidebarItem}>
                <span className={styles.sidebarIcon}><Clock size={18} weight="bold" /></span>
                <div>
                  <span className={styles.sidebarLabel}>{t("info.responseLabel")}</span>
                  <span className={styles.sidebarValue}>{t("info.response")}</span>
                </div>
              </div>

              <div className={styles.sidebarDivider} />

              <div className={styles.sidebarSocial}>
                <span className={styles.sidebarLabel}>Follow us</span>
                <div className={styles.socialLinks}>
                  <a href="https://www.instagram.com/ezpz.coffee/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <InstagramLogo size={20} />
                    Instagram
                  </a>
                  <a href="https://www.linkedin.com/company/ezpz-coffee" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <LinkedinLogo size={20} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <p className={styles.directEmail}>
              Prefer to chat? Email us directly at{" "}
              <a href="mailto:help@ezpz.coffee" className={styles.directEmailLink}>help@ezpz.coffee</a>
              {" "}and we&apos;ll respond within 24 hours.
            </p>
          </aside>

        </div>
      </section>

      {/* ── Map ─────────────────────────────────────────────────── */}
      <section className={styles.mapSection}>
        <div className={styles.mapLabel}>
          <MapPin size={16} weight="bold" className={styles.mapLabelIcon} />
          3780 Rue Saint-Patrick, Montreal, QC
        </div>
        <iframe
          className={styles.mapEmbed}
          src="https://maps.google.com/maps?q=3780+Rue+Saint-Patrick,+Montreal,+QC&output=embed&z=15"
          title="EZPZ Coffee location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
};

export default ContactPage;
