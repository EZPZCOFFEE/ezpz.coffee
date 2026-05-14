"use client";

import classNames from "classnames";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

import { CartProvider } from "@/components/custom/Cart/CartContext";
import NewsletterSignup from "@/components/custom/NewsletterSignup";
import { WhiteeeShopifyProvider } from "@/components/custom/ShopifyProvider";
import { locales } from "@/i18n/types";

import NewsletterPopup from "@/components/custom/NewsletterPopup";
import AnnouncementBanner from "./AnnouncementBanner";
import CookieConsent from "./CookieConsent";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "./styles.module.scss";

const stripLocalePrefix = (pathname: string): string => {
  for (const locale of locales) {
    const prefix = `/${locale}`;
    if (pathname === prefix) return "/";
    if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  }
  return pathname;
};

const Layout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const normalizedPath = pathname ? stripLocalePrefix(pathname) : "/";
  const isHeroLanding =
    normalizedPath === "/" ||
    normalizedPath === "/white-label" ||
    (normalizedPath.startsWith("/white-label/") &&
      !normalizedPath.startsWith("/white-label/restaurants") &&
      !normalizedPath.startsWith("/white-label/hotels") &&
      !normalizedPath.startsWith("/white-label/retailers") &&
      !normalizedPath.startsWith("/white-label/influencers"));

  return (
    <WhiteeeShopifyProvider countryCode="CA" languageCode="EN">
      <CartProvider>
        <div className={classNames(styles.container, isHeroLanding && styles.containerHome)}>
          <AnnouncementBanner />
          <Navbar />
          <main className={isHeroLanding ? styles.mainHome : styles.main}>{children}</main>
          <NewsletterSignup />
          <NewsletterPopup />
          <Footer />
          <CookieConsent />
        </div>
      </CartProvider>
    </WhiteeeShopifyProvider>
  );
};

export default Layout;
