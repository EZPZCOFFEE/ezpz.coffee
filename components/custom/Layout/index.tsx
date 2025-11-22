"use client";

import { PropsWithChildren } from "react";

import NewsletterSignup from "@/components/custom/NewsletterSignup";
import { WhiteeeShopifyProvider } from "@/components/custom/ShopifyProvider";

import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "./styles.module.scss";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <WhiteeeShopifyProvider countryCode="CA" languageCode="EN">
      <div className={styles.container}>
        <Navbar />
        <main className={styles.main}>{children}</main>
        <NewsletterSignup />
        <Footer />
      </div>
    </WhiteeeShopifyProvider>
  );
};

export default Layout;
