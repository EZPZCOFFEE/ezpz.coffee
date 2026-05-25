"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import styles from "./announcementBanner.module.scss";

const STORAGE_KEY = "ezpz-announcement-dismissed-fathers-day-2026";

const AnnouncementBanner = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  useEffect(() => {
    const h = visible && ref.current ? ref.current.offsetHeight : 0;
    document.documentElement.style.setProperty("--announcement-banner-height", `${h}px`);
    return () => {
      document.documentElement.style.setProperty("--announcement-banner-height", "0px");
    };
  }, [visible]);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div ref={ref} className={styles.banner}>
      <p className={styles.text}>
        ✦ Father&apos;s Day is June 15th — Design a personalized coffee bag for dad! Order by June 8th.{" "}
        <Link href="/en/blog/coffee-gifts-fathers-day-canada-2026" className={styles.link}>Shop now</Link>
      </p>
      <button
        type="button"
        className={styles.close}
        onClick={dismiss}
        aria-label="Dismiss announcement"
      >
        ✕
      </button>
    </div>
  );
};

export default AnnouncementBanner;
