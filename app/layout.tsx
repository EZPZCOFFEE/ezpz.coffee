import { Metadata } from "next";
import { ReactNode } from "react";

import { locales } from "@/i18n/types";
import { baseUrl } from "@utils/environment";

interface Props {
  children: ReactNode;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "EZPZ Coffee",
  description: "EZPZ Coffee is a platform for creating and producing custom coffee bags.",
  metadataBase: new URL(baseUrl),
};
// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return children;
}
