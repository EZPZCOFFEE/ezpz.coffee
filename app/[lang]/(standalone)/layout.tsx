import type { PropsWithChildren } from "react";

import CookieConsent from "@/components/custom/Layout/CookieConsent";

const StandaloneLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <CookieConsent />
    </>
  );
};

export default StandaloneLayout;
