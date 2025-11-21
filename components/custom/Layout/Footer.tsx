import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <span className={styles.footerBrand}>EZPZ 2025</span>
        <nav className={styles.footerNav} aria-label="Footer navigation">
          <button type="button" className={styles.footerLink}>Contact us</button>
          <button type="button" className={styles.footerLink}>FAQ</button>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
