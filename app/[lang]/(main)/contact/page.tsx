import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { InstagramLogo, LinkedinLogo, MapPin, Clock, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { Suspense } from "react";

import { ContactForm } from "./ContactForm";
import styles from "./styles.module.scss";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = await getTranslations("metadata.contact");
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: `/${lang}/contact` },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/contact`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: t("ogTitle") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const ContactPage = async () => {
  const t = await getTranslations("contact");

  return (
    <div className={styles.page}>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>{t("heroTitle")}</h1>
          <p className={styles.heroSubtitle}>{t("heroSubtitle")}</p>
        </div>
        <div className={styles.heroAngle} />
      </section>

      {/* ── Body ───────────────────────────────────────────────── */}
      <section className={styles.body}>
        <div className={styles.bodyInner}>

          {/* Form */}
          <div className={styles.formWrap}>
            <div className={styles.formHeader}>
              <h2 className={styles.formTitle}>{t("formTitle")}</h2>
              <p className={styles.formSubtext}>{t("formSubtext")}</p>
            </div>
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>

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
                <span className={styles.sidebarLabel}>{t("followUs")}</span>
                <div className={styles.socialLinks}>
                  <a href="https://www.instagram.com/ezpz.coffee/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <InstagramLogo size={20} />
                    Instagram
                  </a>
                  <a href="https://www.linkedin.com/company/ezpzcoffee/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <LinkedinLogo size={20} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <p className={styles.directEmail}>
              {t("preferEmailPre")}{" "}
              <a href="mailto:help@ezpz.coffee" className={styles.directEmailLink}>help@ezpz.coffee</a>
              {" "}{t("preferEmailPost")}
            </p>
          </aside>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;
