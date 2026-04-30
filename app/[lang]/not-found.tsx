import type { Metadata } from "next";
import Link from "next/link";

import styles from "./not-found.module.scss";

export const metadata: Metadata = {
  title: "404 – Page Not Found | EZPZ Coffee",
  description: "This page does not exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>404 Error</p>
        <h1 className={styles.headline}>Lost in the beans?</h1>
        <p className={styles.subtext}>
          The page you are looking for does not exist.
          <br />
          Let us get you back on track.
        </p>
        <div className={styles.actions}>
          <Link href="/en" className={styles.btnPrimary}>
            Go to homepage
          </Link>
          <Link href="/en/design" className={styles.btnSecondary}>
            Design your bag
          </Link>
        </div>
      </div>
    </div>
  );
}
