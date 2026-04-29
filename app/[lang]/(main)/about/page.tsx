import type { Metadata } from "next";

import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About Us | EZPZ Coffee",
  description:
    "Founded in Montreal by coffee industry veterans. EZPZ helps hundreds of brands create custom coffee bags with no minimum order.",
  alternates: { canonical: "/en/about" },
  openGraph: {
    title: "About Us | EZPZ Coffee",
    description:
      "Founded in Montreal by coffee industry veterans. EZPZ helps hundreds of brands create custom coffee bags with no minimum order.",
    type: "website",
    url: "https://www.ezpz.coffee/en/about",
    images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "About EZPZ Coffee" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | EZPZ Coffee",
    description: "Founded in Montreal by coffee industry veterans. EZPZ helps hundreds of brands create custom coffee bags with no minimum order.",
    images: ["/assets/banner-01.jpg"],
  },
};

const AboutRoutePage = () => <AboutPage />;

export default AboutRoutePage;
