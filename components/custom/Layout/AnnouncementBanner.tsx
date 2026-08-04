"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import styles from "./announcementBanner.module.scss";

const AnnouncementBanner = () => {
  const [dismissed, setDismissed] = useState(false);
  const pathname = usePathname();
  const isFr = pathname?.startsWith("/fr");

  if (dismissed) return null;

  const text = isFr
    ? "Nous embauchons ! Joignez l’équipe EZPZ à Montréal, Toronto et Vancouver."
    : "We’re hiring! Join the EZPZ team in Montreal, Toronto & Vancouver.";
  const ctaText = isFr ? "Voir les postes" : "See open roles";
  const ctaHref = isFr ? "/fr/carrieres" : "/en/careers";

  return (
    <div className={styles.banner} role="note" aria-label="Site announcement">
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
