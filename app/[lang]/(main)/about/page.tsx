import type { Metadata } from "next";

import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About Us | EZPZ Coffee",
  description:
    "Founded in Montreal by coffee industry veterans. EZPZ helps hundreds of brands create custom coffee bags with no minimum order.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us | EZPZ Coffee",
    description:
      "Founded in Montreal by coffee industry veterans. EZPZ helps hundreds of brands create custom coffee bags with no minimum order.",
    type: "website",
    url: "/about",
  },
};

const AboutRoutePage = () => <AboutPage />;

export default AboutRoutePage;
