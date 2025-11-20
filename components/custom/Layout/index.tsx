"use client";

import classNames from "classnames";
import { PropsWithChildren } from "react";

import { WhiteeeShopifyProvider } from "@/components/custom/ShopifyProvider";

import styles from "./styles.module.scss";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <WhiteeeShopifyProvider countryCode="CA" languageCode="EN">
      <div className={classNames(styles.container)}>{children}</div>
    </WhiteeeShopifyProvider>
  );
};

export default Layout;
