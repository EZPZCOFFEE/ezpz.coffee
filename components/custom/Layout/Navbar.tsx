"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";

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

const showDevNav = process.env.NEXT_PUBLIC_SHOW_DEV_NAV === "true";

const NAV_GROUPS: { left: NavItem[]; right: NavItem[] } = {
  left: [{ labelKey: "customBag", pathSuffix: "/design" }],
  right: [
    { labelKey: "mothersDay", pathSuffix: "/mothers-day" },
    { labelKey: "whiteLabel", pathSuffix: "/white-label" },
    ...(showDevNav ? [
      { labelKey: "portfolio", pathSuffix: "/portfolio" },
      { labelKey: "pricing", pathSuffix: "/pricing" },
    ] : []),
    { labelKey: "aboutUs", pathSuffix: "/about" },
    { labelKey: "contactUs", pathSuffix: "/contact" },
  ],
};

const getNavHref = (locale: string, item: NavItem): string => {
  const path = item.pathSuffix === "/" ? `/${locale}` : `/${locale}${item.pathSuffix}`;
  return item.hash ? `${path}#${item.hash}` : path;
};

const stripLocalePrefix = (pathname: string): string => {
  for (const locale of locales) {
    const prefix = `/${locale}`;
    if (pathname === prefix) return "/";
    if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  }
  return pathname;
};

const NAV_TOP_THRESHOLD_PX = 8;
const NAV_SCROLL_DELTA_PX = 6;

type NavScrollPhase = "top" | "hidden" | "solid";

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
        width={1518}
        height={1227}
        unoptimized
        className={classNames(styles.logoImage, {
          [styles.logoImageOverlay]: variant === "overlay",
        })}
        style={{ width: "auto" }}
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
                <Link href={getNavHref(locale, item)} className={styles.navLinkButton}>
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

        <span className={logoVariant === "overlay" ? styles.navCartHome : undefined}>
          <Cart />
        </span>
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
  mobileMenuOpen,
  onMobileMenuOpenChange,
}: NavbarVariantProps & {
  logoVariant: "default" | "overlay";
  mobileMenuOpen: boolean;
  onMobileMenuOpenChange: (open: boolean) => void;
}) => {
  const t = useTranslations("nav");
  const navItems = [...leftNavItems, ...rightNavItems];
  const menuId = useId();

  return (
    <div className={styles.mobileNavbar} data-state={mobileMenuOpen ? "open" : "closed"}>
      <div className={styles.mobileHeader}>
        <Logo variant={logoVariant} />

        <div className={styles.mobileHeaderActions}>
          <button
            className={styles.menuButton}
            type="button"
            aria-label={t("toggleMenu")}
            aria-expanded={mobileMenuOpen}
            aria-controls={menuId}
            onClick={() => onMobileMenuOpenChange(!mobileMenuOpen)}
          >
            <span className={`${styles.menuButtonBar} ${styles.menuButtonBarTop}`} />
            <span className={`${styles.menuButtonBar} ${styles.menuButtonBarMiddle}`} />
            <span className={`${styles.menuButtonBar} ${styles.menuButtonBarBottom}`} />
          </button>

          <span className={logoVariant === "overlay" ? styles.navCartHome : undefined}>
            <Cart />
          </span>
        </div>
      </div>

      <div
        id={menuId}
        className={styles.mobileMenuContent}
        data-state={mobileMenuOpen ? "open" : "closed"}
        aria-hidden={!mobileMenuOpen}
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
                  onClick={() => onMobileMenuOpenChange(false)}
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
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollYRef = useRef(0);
  const [navPhase, setNavPhase] = useState<NavScrollPhase>("top");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const normalizedPath = pathname ? stripLocalePrefix(pathname) : "/";
  const isHeroLanding =
    normalizedPath === "/" ||
    normalizedPath === "/white-label" ||
    (normalizedPath.startsWith("/white-label/") &&
      !normalizedPath.startsWith("/white-label/restaurants") &&
      !normalizedPath.startsWith("/white-label/hotels") &&
      !normalizedPath.startsWith("/white-label/retailers") &&
      !normalizedPath.startsWith("/white-label/influencers"));

  const leftNavItems = NAV_GROUPS.left;
  const rightNavItems = NAV_GROUPS.right;
  const homeTopOverlay = isHeroLanding && navPhase === "top";
  const logoVariant: "default" | "overlay" = homeTopOverlay ? "overlay" : "default";

  useLayoutEffect(() => {
    const y = Math.max(0, window.scrollY);
    lastScrollYRef.current = y;
    const phase = y <= NAV_TOP_THRESHOLD_PX ? "top" : "solid";
    requestAnimationFrame(() => {
      setNavPhase(phase);
    });
  }, [pathname]);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el || mobileMenuOpen) return;

    const setHeight = () => {
      const h = Math.round(el.getBoundingClientRect().height);
      document.documentElement.style.setProperty("--layout-navbar-height", `${h}px`);
    };

    setHeight();
    const ro = new ResizeObserver(setHeight);
    ro.observe(el);
    window.addEventListener("resize", setHeight);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setHeight);
    };
  }, [mobileMenuOpen, navPhase, pathname]);

  useEffect(() => {
    const y0 = Math.max(0, window.scrollY);
    lastScrollYRef.current = y0;
    requestAnimationFrame(() => {
      if (y0 > NAV_TOP_THRESHOLD_PX) {
        setNavPhase("solid");
      }
    });

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const y = Math.max(0, window.scrollY);
        const last = lastScrollYRef.current;
        const delta = y - last;

        if (y <= NAV_TOP_THRESHOLD_PX) {
          setNavPhase("top");
        } else if (delta > NAV_SCROLL_DELTA_PX) {
          setNavPhase("hidden");
        } else if (delta < -NAV_SCROLL_DELTA_PX) {
          setNavPhase("solid");
        }

        lastScrollYRef.current = y;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={classNames(styles.navbarRoot, {
        [styles.navbarRootHidden]: navPhase === "hidden" && !mobileMenuOpen,
        [styles.navbarSolid]: navPhase === "solid",
        [styles.navbarHome]: homeTopOverlay,
      })}
      data-variant={isHeroLanding ? "home" : "default"}
      data-scroll={navPhase}
      data-menu-open={mobileMenuOpen ? "true" : "false"}
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
          mobileMenuOpen={mobileMenuOpen}
          onMobileMenuOpenChange={setMobileMenuOpen}
        />
      </div>
    </header>
  );
};

export default Navbar;
