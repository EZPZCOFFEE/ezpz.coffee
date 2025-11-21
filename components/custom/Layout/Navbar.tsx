"use client";

import { Collapsible } from "@ark-ui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import styles from "./styles.module.scss";

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: "Custom bag", href: "/" },
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

type NavbarVariantProps = {
  navItems: NavItem[];
  pathname: string | null;
};

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image
        src="/logo.svg"
        alt="EZPZ logo"
        width={120}
        height={40}
        className={styles.logoImage}
        priority
      />
    </div>
  );
};

const DesktopNavbar = ({ navItems, pathname }: NavbarVariantProps) => {
  return (
    <nav className={styles.desktopNavbar} aria-label="Main navigation">
      <Logo />

      <ul className={styles.navList}>
        {navItems.map((item) => {
          const isActive = isNavItemActive(item, pathname);
          const itemClassName = isActive
            ? `${styles.navItem} ${styles.navItemActive}`
            : styles.navItem;

          return (
            <li key={item.href} className={itemClassName}>
              <span>{item.label}</span>
            </li>
          );
        })}
      </ul>

      <button className={styles.cartButton} type="button" aria-label="Open cart">
        <Image src="/cart.svg" alt="Cart" width={28} height={28} />
      </button>
    </nav>
  );
};

const MobileNavbar = ({ navItems, pathname }: NavbarVariantProps) => {
  return (
    <Collapsible.Root className={styles.mobileNavbar}>
      <div className={styles.mobileHeader}>
        <Logo />

        <div className={styles.mobileHeaderActions}>
          <Collapsible.Trigger
            className={styles.menuButton}
            aria-label="Toggle navigation menu"
          >
            <span
              className={`${styles.menuButtonBar} ${styles.menuButtonBarTop}`}
            />
            <span
              className={`${styles.menuButtonBar} ${styles.menuButtonBarMiddle}`}
            />
            <span
              className={`${styles.menuButtonBar} ${styles.menuButtonBarBottom}`}
            />
          </Collapsible.Trigger>

          <button
            className={styles.cartButton}
            type="button"
            aria-label="Open cart"
          >
            <Image src="/cart.svg" alt="Cart" width={24} height={24} />
          </button>
        </div>
      </div>

      <Collapsible.Content className={styles.mobileMenuContent}>
        <ul className={styles.mobileMenuList}>
          {navItems.map((item) => {
            const isActive = isNavItemActive(item, pathname);
            const itemClassName = isActive
              ? `${styles.mobileMenuItem} ${styles.mobileMenuItemActive}`
              : styles.mobileMenuItem;

            return (
              <li key={item.href} className={itemClassName}>
                <span className={styles.mobileMenuItemLabel}>{item.label}</span>
              </li>
            );
          })}
        </ul>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className={styles.navbarRoot}>
      <div className={styles.navbarInner}>
        <DesktopNavbar navItems={NAV_ITEMS} pathname={pathname} />
        <MobileNavbar navItems={NAV_ITEMS} pathname={pathname} />
      </div>
    </header>
  );
};

export default Navbar;
