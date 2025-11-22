import Button from "@/components/shared/Button";

import styles from "./styles.module.scss";

const NewsletterSignup = () => {
  return (
    <section className={styles.newsletterSection} aria-labelledby="newsletter-heading">
      <div className={styles.newsletterInner}>
        <h2 id="newsletter-heading" className={styles.newsletterTitle}>
          Get <span className={styles.highlight}>5% off</span> when you join our email list.
        </h2>

        <form className={styles.form}>
          <label className={styles.visuallyHidden} htmlFor="newsletter-email">
            Email address
          </label>
          <input id="newsletter-email" type="email" className={styles.input} placeholder="Enter your email" />
          <Button type="button" variant="primary">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
