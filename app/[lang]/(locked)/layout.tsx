import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const LockedLayout = ({ children }: PropsWithChildren) => {
  return <>{children}</>;
};

export default LockedLayout;
