"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod/v4";

import Button from "@/components/shared/Button";
import { subscribe } from "@/lib/actions/subscribe";
import { unlockSite } from "@/lib/actions/unlock";

import styles from "./styles.module.scss";

const emailSchema = z.object({
  email: z.email("Please enter a valid email address"),
});

const passwordSchema = z.object({
  password: z.string().min(1, "Password is required"),
});

type EmailFormData = z.infer<typeof emailSchema>;
type PasswordFormData = z.infer<typeof passwordSchema>;

const PasswordPage = () => {
  const t = useTranslations("passwordPage");
  const router = useRouter();

  const [emailState, setEmailState] = useState<{
    status: "idle" | "success" | "error";
    message?: string;
  }>({ status: "idle" });

  const [passwordState, setPasswordState] = useState<{
    status: "idle" | "error";
    message?: string;
  }>({ status: "idle" });

  const emailForm = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const passwordForm = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
  });

  const onEmailSubmit = async (data: EmailFormData) => {
    setEmailState({ status: "idle" });

    const formData = new FormData();
    formData.append("email", data.email);

    const result = await subscribe(formData);

    if (result.success) {
      setEmailState({ status: "success", message: t("emailSuccess") });
      emailForm.reset();
    } else {
      setEmailState({ status: "error", message: result.error });
    }
  };

  const onPasswordSubmit = async (data: PasswordFormData) => {
    setPasswordState({ status: "idle" });

    const formData = new FormData();
    formData.append("password", data.password);

    const result = await unlockSite(formData);

    if (result.success) {
      router.push("/");
      router.refresh();
    } else {
      setPasswordState({ status: "error", message: result.error });
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <Image src="/logo.svg" alt="EZPZ" width={120} height={40} className={styles.logo} priority />

        <header className={styles.header}>
          <h1 className={styles.title}>{t("title")}</h1>
          <p className={styles.subtitle}>{t("subtitle")}</p>
        </header>

        <div className={styles.formSection}>
          {/* Email signup form */}
          <div className={styles.formGroup}>
            <span className={styles.formLabel}>{t("notifyLabel")}</span>

            {emailState.status === "success" ? (
              <div className={styles.successMessage} role="status">
                {emailState.message}
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  void emailForm.handleSubmit(onEmailSubmit)(e);
                }}
                noValidate
              >
                <div className={styles.inputWrapper}>
                  <label className={styles.visuallyHidden} htmlFor="notify-email">
                    {t("emailLabel")}
                  </label>
                  <input
                    id="notify-email"
                    type="email"
                    className={`${styles.input} ${emailForm.formState.errors.email ? styles.inputError : ""}`}
                    placeholder={t("emailPlaceholder")}
                    aria-invalid={emailForm.formState.errors.email ? "true" : "false"}
                    disabled={emailForm.formState.isSubmitting}
                    {...emailForm.register("email")}
                  />
                  {emailForm.formState.errors.email && (
                    <span className={styles.errorText} role="alert">
                      {emailForm.formState.errors.email.message}
                    </span>
                  )}
                  {emailState.status === "error" && (
                    <span className={styles.errorText} role="alert">
                      {emailState.message}
                    </span>
                  )}
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  disabled={emailForm.formState.isSubmitting}
                  style={{ marginTop: "var(--spacing-city)" }}
                >
                  {emailForm.formState.isSubmitting ? t("subscribing") : t("subscribe")}
                </Button>
              </form>
            )}
          </div>

          <div className={styles.divider}>{t("or")}</div>

          {/* Password unlock form */}
          <div className={styles.formGroup}>
            <span className={styles.formLabel}>{t("enterPasswordLabel")}</span>

            <form
              onSubmit={(e) => {
                void passwordForm.handleSubmit(onPasswordSubmit)(e);
              }}
              noValidate
            >
              <div className={styles.inputWrapper}>
                <label className={styles.visuallyHidden} htmlFor="site-password">
                  {t("passwordLabel")}
                </label>
                <input
                  id="site-password"
                  type="password"
                  className={`${styles.input} ${passwordForm.formState.errors.password || passwordState.status === "error" ? styles.inputError : ""}`}
                  placeholder={t("passwordPlaceholder")}
                  aria-invalid={passwordForm.formState.errors.password ? "true" : "false"}
                  disabled={passwordForm.formState.isSubmitting}
                  {...passwordForm.register("password")}
                />
                {passwordForm.formState.errors.password && (
                  <span className={styles.errorText} role="alert">
                    {passwordForm.formState.errors.password.message}
                  </span>
                )}
                {passwordState.status === "error" && (
                  <span className={styles.errorText} role="alert">
                    {passwordState.message}
                  </span>
                )}
              </div>
              <Button
                type="submit"
                variant="secondary"
                fullWidth
                disabled={passwordForm.formState.isSubmitting}
                style={{ marginTop: "var(--spacing-city)" }}
              >
                {passwordForm.formState.isSubmitting ? t("unlocking") : t("unlock")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PasswordPage;
