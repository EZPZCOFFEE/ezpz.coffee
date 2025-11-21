"use client";

import classNames from "classnames";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useId, useState } from "react";

import styles from "./styles.module.scss";

// ---------------------------------------------------------------------------
// Types & config
// ---------------------------------------------------------------------------

interface NavItem {
  label: string;
  href: string;
}

const LEFT_NAV_ITEMS: NavItem[] = [{ label: "Custom bag", href: "/" }];

const RIGHT_NAV_ITEMS: NavItem[] = [
  { label: "About us", href: "/about" },
  { label: "Our coffee", href: "/coffee" },
  { label: "Sample bag", href: "/sample-bag" },
  { label: "Corporate solutions", href: "/corporate" },
  { label: "Large orders", href: "/large-orders" },
];

const isNavItemActive = (item: NavItem, pathname: string | null): boolean => {
  if (!pathname) {
    return item.href === "/";
  }

  if (item.href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(item.href);
};

interface NavbarVariantProps {
  leftNavItems: NavItem[];
  rightNavItems: NavItem[];
  pathname: string | null;
}

// ---------------------------------------------------------------------------
// Presentational components
// ---------------------------------------------------------------------------

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src="/logo.svg" alt="EZPZ logo" width={120} height={40} className={styles.logoImage} priority />
    </div>
  );
};

const DesktopNavbar = ({ leftNavItems, rightNavItems, pathname }: NavbarVariantProps) => {
  return (
    <nav className={styles.desktopNavbar} aria-label="Main navigation">
      <div className={styles.desktopNavbarLeft}>
        <Logo />
        <ul className={styles.navList}>
          {leftNavItems.map((item) => {
            const isActive = isNavItemActive(item, pathname);
            return (
              <li
                key={item.href}
                className={classNames(styles.navItem, { [styles.navItem__active]: isActive })}
              >
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.desktopNavbarRight}>
        <ul className={styles.navList}>
          {rightNavItems.map((item) => {
            const isActive = isNavItemActive(item, pathname);
            return (
              <li
                key={item.href}
                className={classNames(styles.navItem, { [styles.navItem__active]: isActive })}
              >
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>

        <button className={styles.cartButton} type="button" aria-label="Open cart">
          <Image src="/cart.svg" alt="Cart" width={28} height={28} />
        </button>
      </div>
    </nav>
  );
};

const MobileNavbar = ({ leftNavItems, rightNavItems, pathname }: NavbarVariantProps) => {
  const navItems = [...leftNavItems, ...rightNavItems];
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  return (
    <div className={styles.mobileNavbar} data-state={isOpen ? "open" : "closed"}>
      <div className={styles.mobileHeader}>
        <Logo />

        <div className={styles.mobileHeaderActions}>
          <button
            className={styles.menuButton}
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls={menuId}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className={`${styles.menuButtonBar} ${styles.menuButtonBarTop}`} />
            <span className={`${styles.menuButtonBar} ${styles.menuButtonBarMiddle}`} />
            <span className={`${styles.menuButtonBar} ${styles.menuButtonBarBottom}`} />
          </button>

          <button className={styles.cartButton} type="button" aria-label="Open cart">
            <Image src="/cart.svg" alt="Cart" width={24} height={24} />
          </button>
        </div>
      </div>

      <div
        id={menuId}
        className={styles.mobileMenuContent}
        data-state={isOpen ? "open" : "closed"}
        aria-hidden={!isOpen}
      >
        <ul className={styles.mobileMenuList}>
          {navItems.map((item) => {
            const isActive = isNavItemActive(item, pathname);
            const itemClassName = classNames(styles.mobileMenuItem, {
              [styles.mobileMenuItemActive]: isActive,
            });

            return (
              <li key={item.href} className={itemClassName}>
                <span className={styles.mobileMenuItemLabel}>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Public component
// ---------------------------------------------------------------------------

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className={styles.navbarRoot}>
      <div className={styles.navbarInner}>
        <DesktopNavbar leftNavItems={LEFT_NAV_ITEMS} rightNavItems={RIGHT_NAV_ITEMS} pathname={pathname} />
        <MobileNavbar leftNavItems={LEFT_NAV_ITEMS} rightNavItems={RIGHT_NAV_ITEMS} pathname={pathname} />
      </div>
    </header>
  );
};

export default Navbar;
