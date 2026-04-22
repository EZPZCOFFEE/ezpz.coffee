"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";

import Button from "@/components/shared/Button";
import { subscribe } from "@/lib/actions/subscribe";

import styles from "./styles.module.scss";

const subscribeSchema = z.object({
  email: z.email("Please enter a valid email address"),
});

type SubscribeFormData = z.infer<typeof subscribeSchema>;

const NewsletterSignup = () => {
  const t = useTranslations("newsletter");
  const [submitState, setSubmitState] = useState<{
    status: "idle" | "success" | "error";
    message?: string;
  }>({ status: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmit = async (data: SubscribeFormData) => {
    setSubmitState({ status: "idle" });

    const formData = new FormData();
    formData.append("email", data.email);

    const result = await subscribe(formData);

    if (result.success) {
      setSubmitState({ status: "success", message: t("successMessage") });
      reset();
    } else {
      setSubmitState({ status: "error", message: result.error });
    }
  };

  // Parse the title with highlight markup
  const titleRaw = String(t.raw("title"));
  const titleParts = titleRaw.split(/<highlight>|<\/highlight>/);

  return (
    <section className={styles.newsletterSection} aria-labelledby="newsletter-heading">
      <div className={styles.newsletterInner}>
        <h2 id="newsletter-heading" className={styles.newsletterTitle}>
          {titleParts[0]}
          {titleParts[1] && <span className={styles.highlight}>{titleParts[1]}</span>}
          {titleParts[2]}
        </h2>
        <p className={styles.newsletterSubtext}>{t("subtext")}</p>

        {submitState.status === "success" ? (
          <div className={styles.successMessage} role="status" aria-live="polite">
            {submitState.message}
          </div>
        ) : (
          <form
            className={styles.form}
            onSubmit={(e) => {
              void handleSubmit(onSubmit)(e);
            }}
            noValidate
          >
            <div className={styles.inputWrapper}>
              <label className={styles.visuallyHidden} htmlFor="newsletter-email">
                {t("emailLabel")}
              </label>
              <input
                id="newsletter-email"
                type="email"
                className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                placeholder={t("emailPlaceholder")}
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
                disabled={isSubmitting}
                {...register("email")}
              />
              {errors.email && (
                <span id="email-error" className={styles.errorText} role="alert">
                  {errors.email.message}
                </span>
              )}
              {submitState.status === "error" && (
                <span className={styles.errorText} role="alert">
                  {submitState.message}
                </span>
              )}
            </div>
            <Button type="submit" variant="primary" disabled={isSubmitting}>
              {isSubmitting ? t("submitting") : t("subscribe")}
            </Button>
            <p className={styles.reassurance}>{t("reassurance")}</p>
          </form>
        )}
      </div>
    </section>
  );
};

export default NewsletterSignup;
