"use client";

import { X } from "@phosphor-icons/react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { subscribe } from "@/lib/actions/subscribe";
import styles from "./styles.module.scss";

const STORAGE_KEY = "ezpz_newsletter_dismissed";
const DELAY_MS = 15_000;

const NewsletterPopup = () => {
  const t = useTranslations("newsletterPopup");
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY)) return;
    const timer = setTimeout(() => setVisible(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email.trim()) {
      setError(t("emailRequired"));
      return;
    }
    setSubmitting(true);
    const fd = new FormData();
    fd.append("email", email);
    const result = await subscribe(fd);
    setSubmitting(false);
    if (result.success) {
      setSuccess(true);
      localStorage.setItem(STORAGE_KEY, "1");
    } else {
      setError(result.error ?? t("genericError"));
    }
  };

  if (!visible) return null;

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && dismiss()}>
      <div className={styles.popup} role="dialog" aria-modal="true" aria-label={t("ariaLabel")}>
        <div className={styles.topBar} />
        <button className={styles.closeBtn} onClick={dismiss} aria-label={t("close")}>
          <X size={20} weight="bold" />
        </button>
        <div className={styles.body}>
          {success ? (
            <p className={styles.successMessage}>{t("successMessage")}</p>
          ) : (
            <>
              <span className={styles.eyebrow}>{t("eyebrow")}</span>
              <h2 className={styles.title}>
                {t.rich("title", {
                  highlight: (chunks) => <span className={styles.highlight}>{chunks}</span>,
                })}
              </h2>
              <p className={styles.subtitle}>{t("subtitle")}</p>
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div>
                  <input
                    type="email"
                    className={`${styles.input}${error ? ` ${styles.inputError}` : ""}`}
                    placeholder={t("emailPlaceholder")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label={t("emailLabel")}
                    autoComplete="email"
                  />
                  {error && <p className={styles.errorText}>{error}</p>}
                </div>
                <button type="submit" className={styles.submitBtn} disabled={submitting}>
                  {submitting ? t("submitting") : t("subscribe")}
                </button>
              </form>
              <button className={styles.dismiss} onClick={dismiss}>
                {t("noThanks")}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup;
