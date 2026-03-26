"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useId, useState, useSyncExternalStore } from "react";

import Cart from "@/components/custom/Cart";
import { locales } from "@/i18n/types";

import styles from "./styles.module.scss";

// ---------------------------------------------------------------------------
// Types & config
// ---------------------------------------------------------------------------

interface NavItem {
  labelKey: string;
  /** Path after locale, e.g. "/design". Use "/" for the home page. */
  pathSuffix: string;
  hash?: string;
}

const NAV_GROUPS: { left: NavItem[]; right: NavItem[] } = {
  left: [
    { labelKey: "customBag", pathSuffix: "/design" },
    { labelKey: "shop", pathSuffix: "/shop" },
  ],
  right: [
    { labelKey: "whiteLabel", pathSuffix: "/", hash: "white-label" },
    { labelKey: "aboutUs", pathSuffix: "/about" },
    { labelKey: "ourCoffee", pathSuffix: "/coffee" },
    { labelKey: "contactUs", pathSuffix: "/contact" },
  ],
};

const getNavHref = (locale: string, item: NavItem): string => {
  const path = item.pathSuffix === "/" ? `/${locale}` : `/${locale}${item.pathSuffix}`;
  return item.hash ? `${path}#${item.hash}` : path;
};

/**
 * Strips the locale prefix from the pathname.
 * e.g., "/en/about" -> "/about", "/fr" -> "/"
 */
const HERO_SCROLL_THRESHOLD_PX = 24;

const subscribeWindowScroll = (onChange: () => void) => {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
};

const getScrolledPastHero = () => window.scrollY > HERO_SCROLL_THRESHOLD_PX;

const stripLocalePrefix = (pathname: string): string => {
  for (const locale of locales) {
    const prefix = `/${locale}`;
    if (pathname === prefix) return "/";
    if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  }
  return pathname;
};

const isNavItemActive = (item: NavItem, pathname: string | null): boolean => {
  if (!pathname || item.hash) {
    return false;
  }

  const normalizedPath = stripLocalePrefix(pathname);
  const suffix = item.pathSuffix.replace(/\/$/, "") || "/";

  if (suffix === "/") {
    return normalizedPath === "/";
  }

  return normalizedPath === suffix || normalizedPath.startsWith(`${suffix}/`);
};

interface NavbarVariantProps {
  leftNavItems: NavItem[];
  rightNavItems: NavItem[];
  pathname: string | null;
  locale: string;
}

// ---------------------------------------------------------------------------
// Presentational components
// ---------------------------------------------------------------------------

const Logo = ({ variant }: { variant: "default" | "overlay" }) => {
  const t = useTranslations("nav");
  const locale = useLocale();

  return (
    <Link href={`/${locale}`} className={styles.logo}>
      <Image
        src="/logo.svg"
        alt={t("logoAlt")}
        width={120}
        height={40}
        className={classNames(styles.logoImage, {
          [styles.logoImageOverlay]: variant === "overlay",
        })}
        priority
      />
    </Link>
  );
};

const DesktopNavbar = ({
  leftNavItems,
  rightNavItems,
  pathname,
  locale,
  logoVariant,
}: NavbarVariantProps & { logoVariant: "default" | "overlay" }) => {
  const t = useTranslations("nav");

  return (
    <nav className={styles.desktopNavbar} aria-label={t("mainNavigation")}>
      <div className={styles.desktopNavbarLeft}>
        <Logo variant={logoVariant} />
        <ul className={styles.navList}>
          {leftNavItems.map((item) => {
            const isActive = isNavItemActive(item, pathname);
            const itemClassName = classNames(styles.navItem, { [styles.navItem__active]: isActive });

            return (
              <li key={`${item.labelKey}-${item.pathSuffix}`} className={itemClassName}>
                <Link href={getNavHref(locale, item)} className={styles.navLink}>
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
              <li key={`${item.labelKey}-${item.pathSuffix}`} className={itemClassName}>
                <Link href={getNavHref(locale, item)} className={styles.navLink}>
                  {t(item.labelKey)}
                </Link>
              </li>
            );
          })}
        </ul>

        <Cart className={logoVariant === "overlay" ? styles.cartTriggerLight : undefined} />
      </div>
    </nav>
  );
};

const MobileNavbar = ({
  leftNavItems,
  rightNavItems,
  pathname,
  locale,
  logoVariant,
}: NavbarVariantProps & { logoVariant: "default" | "overlay" }) => {
  const t = useTranslations("nav");
  const navItems = [...leftNavItems, ...rightNavItems];
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  return (
    <div className={styles.mobileNavbar} data-state={isOpen ? "open" : "closed"}>
      <div className={styles.mobileHeader}>
        <Logo variant={logoVariant} />

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

          <Cart className={logoVariant === "overlay" ? styles.cartTriggerLight : undefined} />
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
              <li key={`${item.labelKey}-${item.pathSuffix}`} className={itemClassName}>
                <Link
                  href={getNavHref(locale, item)}
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
  const locale = useLocale();

  const normalizedPath = pathname ? stripLocalePrefix(pathname) : "/";
  const isHome = normalizedPath === "/";

  const scrolledPastHero = useSyncExternalStore(
    subscribeWindowScroll,
    getScrolledPastHero,
    () => false
  );

  const leftNavItems = NAV_GROUPS.left;
  const rightNavItems = NAV_GROUPS.right;
  const useOverlay = isHome && !scrolledPastHero;
  const logoVariant: "default" | "overlay" = useOverlay ? "overlay" : "default";

  return (
    <header
      className={classNames(styles.navbarRoot, {
        [styles.navbarRootOverlay]: useOverlay,
        [styles.navbarRootSolid]: isHome && scrolledPastHero,
      })}
      data-variant={useOverlay ? "overlay" : "solid"}
    >
      <div className={styles.navbarInner}>
        <DesktopNavbar
          leftNavItems={leftNavItems}
          rightNavItems={rightNavItems}
          pathname={pathname}
          locale={locale}
          logoVariant={logoVariant}
        />
        <MobileNavbar
          leftNavItems={leftNavItems}
          rightNavItems={rightNavItems}
          pathname={pathname}
          locale={locale}
          logoVariant={logoVariant}
        />
      </div>
    </header>
  );
};

export default Navbar;
