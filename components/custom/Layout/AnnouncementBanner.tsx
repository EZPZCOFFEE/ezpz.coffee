"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import styles from "./announcementBanner.module.scss";

const CSS_VAR = "--announcement-banner-height";

const AnnouncementBanner = () => {
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();
  const isFr = pathname?.startsWith("/fr");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dismissed) {
      document.documentElement.style.setProperty(CSS_VAR, "0px");
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty(CSS_VAR, `${el.offsetHeight}px`);
    });
    observer.observe(el);
    document.documentElement.style.setProperty(CSS_VAR, `${el.offsetHeight}px`);
    return () => {
      observer.disconnect();
      document.documentElement.style.setProperty(CSS_VAR, "0px");
    };
  }, [dismissed]);

  if (dismissed) return null;

  const text = isFr
    ? "Nous embauchons ! Joignez l'équipe EZPZ à Montréal, Toronto et Vancouver."
    : "We're hiring! Join the EZPZ team in Montreal, Toronto & Vancouver.";
  const ctaText = isFr ? "Voir les postes" : "See open roles";
  const ctaHref = isFr ? "/fr/carrieres" : "/en/careers";

  return (
    <div ref={ref} className={styles.banner} role="note" aria-label="Site announcement">
      <p className={styles.text}>
        {text}{" "}
        <Link href={ctaHref} className={styles.link}>
          {ctaText} &rarr;
        </Link>
      </p>
      <button
        type="button"
        className={styles.close}
        onClick={() => setDismissed(true)}
        aria-label="Dismiss announcement"
      >
        ✕
      </button>
    </div>
  );
};

export default AnnouncementBanner;
