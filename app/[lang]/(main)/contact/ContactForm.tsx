"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { contact } from "@/lib/actions/contact";
import styles from "./styles.module.scss";

const INQUIRY_OPTIONS = [
  { value: "", label: "Select an option..." },
  { value: "custom-bag", label: "I want to design a custom bag" },
  { value: "white-label", label: "I am interested in white label solutions" },
  { value: "free-sample", label: "I want to request a free sample" },
  { value: "order-question", label: "I have a question about my order" },
  { value: "corporate-gifting", label: "Corporate gifting inquiry" },
  { value: "other", label: "Other" },
];

const SUBJECT_TO_INQUIRY: Record<string, string> = {
  "free sample request": "free-sample",
  "corporate gifting": "corporate-gifting",
  "custom bag": "custom-bag",
  "white label": "white-label",
};

export const ContactForm = () => {
  const t = useTranslations("contact");
  const searchParams = useSearchParams();

  const [fields, setFields] = useState({ name: "", email: "", inquiry: "", subject: "", message: "" });

  useEffect(() => {
    const subject = searchParams.get("subject") ?? "";
    if (!subject) return;
    const key = subject.toLowerCase();
    const matched = Object.entries(SUBJECT_TO_INQUIRY).find(([k]) => key.includes(k));
    setFields((f) => ({
      ...f,
      subject,
      inquiry: matched ? matched[1] : f.inquiry,
    }));
  }, [searchParams]);
  const [errors, setErrors] = useState<Partial<typeof fields>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const next: Partial<typeof fields> = {};
    if (!fields.name.trim()) next.name = t("form.required");
    if (!fields.email.trim()) next.email = t("form.required");
    if (!fields.inquiry) next.inquiry = t("form.required");
    if (!fields.subject.trim()) next.subject = t("form.required");
    if (!fields.message.trim()) next.message = t("form.required");
    return next;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setServerError("");
    setSubmitting(true);
    const result = await contact({ ...fields, subject: `[${fields.inquiry}] ${fields.subject}` });
    setSubmitting(false);
    if (result.success) {
      const w = window as unknown as { gtag?: (...args: unknown[]) => void };
      if (typeof w.gtag === "function") {
        w.gtag("event", "conversion", {
          send_to: "AW-18087558623/sAJUCJvYy5scEN_76LBD",
          value: 1.0,
          currency: "CAD",
        });
      }
      setSuccess(true);
    } else {
      setServerError(result.error ?? t("form.errorGeneric"));
    }
  };

  const set = (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFields((f) => ({ ...f, [key]: e.target.value }));
    setErrors((err) => ({ ...err, [key]: undefined }));
  };

  if (success) {
    return (
      <div className={styles.successBox}>
        <h2 className={styles.successTitle}>{t("form.successTitle")}</h2>
        <p className={styles.successBody}>{t("form.successBody")}</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-name">{t("form.name")}</label>
          <input
            id="contact-name"
            className={`${styles.input}${errors.name ? ` ${styles.inputError}` : ""}`}
            type="text"
            placeholder={t("form.namePlaceholder")}
            value={fields.name}
            onChange={set("name")}
            autoComplete="name"
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="contact-email">{t("form.email")}</label>
          <input
            id="contact-email"
            className={`${styles.input}${errors.email ? ` ${styles.inputError}` : ""}`}
            type="email"
            placeholder={t("form.emailPlaceholder")}
            value={fields.email}
            onChange={set("email")}
            autoComplete="email"
          />
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-inquiry">What type of inquiry is this?</label>
        <select
          id="contact-inquiry"
          className={`${styles.select}${errors.inquiry ? ` ${styles.inputError}` : ""}`}
          value={fields.inquiry}
          onChange={set("inquiry")}
        >
          {INQUIRY_OPTIONS.map((o) => (
            <option key={o.value} value={o.value} disabled={o.value === ""}>{o.label}</option>
          ))}
        </select>
        {errors.inquiry && <span className={styles.errorText}>{errors.inquiry}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-subject">{t("form.subject")}</label>
        <input
          id="contact-subject"
          className={`${styles.input}${errors.subject ? ` ${styles.inputError}` : ""}`}
          type="text"
          placeholder={t("form.subjectPlaceholder")}
          value={fields.subject}
          onChange={set("subject")}
        />
        {errors.subject && <span className={styles.errorText}>{errors.subject}</span>}
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="contact-message">{t("form.message")}</label>
        <textarea
          id="contact-message"
          className={`${styles.textarea}${errors.message ? ` ${styles.inputError}` : ""}`}
          placeholder={t("form.messagePlaceholder")}
          value={fields.message}
          onChange={set("message")}
        />
        {errors.message && <span className={styles.errorText}>{errors.message}</span>}
      </div>

      {serverError && <p className={styles.errorText}>{serverError}</p>}

      <button type="submit" className={styles.submitBtn} disabled={submitting}>
        {submitting ? t("form.submitting") : t("form.submit")}
      </button>
    </form>
  );
};
