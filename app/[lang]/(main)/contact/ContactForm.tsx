"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { contact } from "@/lib/actions/contact";
import styles from "./styles.module.scss";

export const ContactForm = () => {
  const t = useTranslations("contact");

  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<typeof fields>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const next: Partial<typeof fields> = {};
    if (!fields.name.trim()) next.name = t("form.required");
    if (!fields.email.trim()) next.email = t("form.required");
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
    const result = await contact(fields);
    setSubmitting(false);
    if (result.success) {
      setSuccess(true);
    } else {
      setServerError(result.error ?? t("form.errorGeneric"));
    }
  };

  const set = (key: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
