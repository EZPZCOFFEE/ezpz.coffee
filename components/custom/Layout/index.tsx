"use client";

import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

import { CartProvider } from "@/components/custom/Cart/CartContext";
import NewsletterSignup from "@/components/custom/NewsletterSignup";
import { WhiteeeShopifyProvider } from "@/components/custom/ShopifyProvider";
import { locales } from "@/i18n/types";

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
  const isHome = normalizedPath === "/";

  return (
    <WhiteeeShopifyProvider countryCode="CA" languageCode="EN">
      <CartProvider>
        <div className={styles.container}>
          <Navbar />
          <main className={isHome ? styles.mainHome : styles.main}>{children}</main>
          <NewsletterSignup />
          <Footer />
        </div>
      </CartProvider>
    </WhiteeeShopifyProvider>
  );
};

export default Layout;
