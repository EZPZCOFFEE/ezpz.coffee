"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./cookieConsent.module.scss";

const STORAGE_KEY = "cookie-consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie consent">
      <p className={styles.text}>
        We use cookies to improve your experience and analyze site traffic. By continuing to browse, you agree to our use of cookies.{" "}
        <Link href="/en/terms-of-use" className={styles.link}>Learn more</Link>
      </p>
      <div className={styles.actions}>
        <button type="button" className={styles.btnAccept} onClick={accept}>Accept all</button>
        <button type="button" className={styles.btnDecline} onClick={decline}>Decline</button>
      </div>
    </div>
  );
};

export default CookieConsent;
