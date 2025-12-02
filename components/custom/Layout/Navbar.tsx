"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useId, useState } from "react";

import { locales } from "@/i18n/types";

import styles from "./styles.module.scss";

// ---------------------------------------------------------------------------
// Types & config
// ---------------------------------------------------------------------------

interface NavItem {
  labelKey: string;
  href: string;
}

const LEFT_NAV_ITEMS: NavItem[] = [{ labelKey: "customBag", href: "/" }];

const RIGHT_NAV_ITEMS: NavItem[] = [
  { labelKey: "aboutUs", href: "/about" },
  { labelKey: "ourCoffee", href: "/coffee" },
  { labelKey: "sampleBag", href: "/sample-bag" },
  { labelKey: "corporateSolutions", href: "/corporate" },
  { labelKey: "largeOrders", href: "/large-orders" },
];

/**
 * Strips the locale prefix from the pathname.
 * e.g., "/en/about" -> "/about", "/fr" -> "/"
 */
const stripLocalePrefix = (pathname: string): string => {
  for (const locale of locales) {
    const prefix = `/${locale}`;
    if (pathname === prefix) return "/";
    if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  }
  return pathname;
};

const isNavItemActive = (item: NavItem, pathname: string | null): boolean => {
  if (!pathname) {
    return item.href === "/";
  }

  const normalizedPath = stripLocalePrefix(pathname);

  if (item.href === "/") {
    return normalizedPath === "/";
  }

  return normalizedPath.startsWith(item.href);
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
  const t = useTranslations("nav");

  return (
    <div className={styles.logo}>
      <Image src="/logo.svg" alt={t("logoAlt")} width={120} height={40} className={styles.logoImage} priority />
    </div>
  );
};

const DesktopNavbar = ({ leftNavItems, rightNavItems, pathname }: NavbarVariantProps) => {
  const t = useTranslations("nav");

  return (
    <nav className={styles.desktopNavbar} aria-label={t("mainNavigation")}>
      <div className={styles.desktopNavbarLeft}>
        <Logo />
        <ul className={styles.navList}>
          {leftNavItems.map((item) => {
            const isActive = isNavItemActive(item, pathname);
            const itemClassName = classNames(styles.navItem, { [styles.navItem__active]: isActive });

            return (
              <li key={item.href} className={itemClassName}>
                <Link href={item.href} className={styles.navLink}>
                  {t(item.labelKey)}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.desktopNavbarRight}>
        <ul className={styles.navList}>
          {rightNavItems.map((item) => {
            const isActive = isNavItemActive(item, pathname);
            const itemClassName = classNames(styles.navItem, { [styles.navItem__active]: isActive });

            return (
              <li key={item.href} className={itemClassName}>
                <Link href={item.href} className={styles.navLink}>
                  {t(item.labelKey)}
                </Link>
              </li>
            );
          })}
        </ul>

        <button className={styles.cartButton} type="button" aria-label={t("openCart")}>
          <Image src="/cart.svg" alt={t("cartAlt")} width={28} height={28} />
        </button>
      </div>
    </nav>
  );
};

const MobileNavbar = ({ leftNavItems, rightNavItems, pathname }: NavbarVariantProps) => {
  const t = useTranslations("nav");
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
            aria-label={t("toggleMenu")}
            aria-expanded={isOpen}
            aria-controls={menuId}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className={`${styles.menuButtonBar} ${styles.menuButtonBarTop}`} />
            <span className={`${styles.menuButtonBar} ${styles.menuButtonBarMiddle}`} />
            <span className={`${styles.menuButtonBar} ${styles.menuButtonBarBottom}`} />
          </button>

          <button className={styles.cartButton} type="button" aria-label={t("openCart")}>
            <Image src="/cart.svg" alt={t("cartAlt")} width={24} height={24} />
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
                <Link
                  href={item.href}
                  className={styles.mobileMenuItemLabel}
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.labelKey)}
                </Link>
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
