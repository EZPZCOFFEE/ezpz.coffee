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

  const [showAdminLogin, setShowAdminLogin] = useState(false);

  const [emailState, setEmailState] = useState<{
    status: "idle" | "success" | "error";
    message?: string;
  }>({ status: "idle" });

  const [passwordState, setPasswordState] = useState<{
    status: "idle" | "error";
    message?: string;
  }>({ status: "idle" });

  const {
    register: registerEmail,
    handleSubmit: handleEmailSubmit,
    reset: resetEmail,
    formState: { errors: emailErrors, isSubmitting: isEmailSubmitting },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const {
    register: registerPassword,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors, isSubmitting: isPasswordSubmitting },
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
  });

  const onEmailSubmit = async (data: EmailFormData) => {
    setEmailState({ status: "idle" });

    const formData = new FormData();
    formData.append("email", data.email);

    const result = await subscribe(formData);

    if (result.success) {
      setEmailState({ status: "success", message: t("emailSuccess") });
      resetEmail();
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
              <div className={styles.successMessage} role="status" aria-live="polite">
                {emailState.message}
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  void handleEmailSubmit(onEmailSubmit)(e);
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
                    className={`${styles.input} ${emailErrors.email ? styles.inputError : ""}`}
                    placeholder={t("emailPlaceholder")}
                    aria-invalid={emailErrors.email ? "true" : "false"}
                    aria-describedby={emailErrors.email ? "email-error" : undefined}
                    disabled={isEmailSubmitting}
                    {...registerEmail("email")}
                  />
                  {emailErrors.email && (
                    <span id="email-error" className={styles.errorText} role="alert">
                      {emailErrors.email.message}
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
                  disabled={isEmailSubmitting}
                  style={{ marginTop: "var(--spacing-city)" }}
                >
                  {isEmailSubmitting ? t("subscribing") : t("subscribe")}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Subtle admin login at bottom */}
      <footer className={styles.adminFooter}>
        {showAdminLogin ? (
          <form
            className={styles.adminForm}
            onSubmit={(e) => {
              void handlePasswordSubmit(onPasswordSubmit)(e);
            }}
            noValidate
          >
            <input
              id="site-password"
              type="password"
              className={`${styles.adminInput} ${passwordErrors.password || passwordState.status === "error" ? styles.inputError : ""}`}
              placeholder={t("passwordPlaceholder")}
              aria-label={t("passwordLabel")}
              aria-invalid={passwordErrors.password ? "true" : "false"}
              aria-describedby={passwordErrors.password ? "password-error" : undefined}
              disabled={isPasswordSubmitting}
              autoFocus
              {...registerPassword("password")}
            />
            <button type="submit" className={styles.adminSubmit} disabled={isPasswordSubmitting}>
              {isPasswordSubmitting ? "..." : "→"}
            </button>
            {(Boolean(passwordErrors.password) || passwordState.status === "error") && (
              <span id="password-error" className={styles.adminError} role="alert">
                {passwordErrors.password?.message ?? passwordState.message}
              </span>
            )}
          </form>
        ) : (
          <button type="button" className={styles.adminLink} onClick={() => setShowAdminLogin(true)}>
            {t("adminLink")}
          </button>
        )}
      </footer>
    </main>
  );
};

export default PasswordPage;
