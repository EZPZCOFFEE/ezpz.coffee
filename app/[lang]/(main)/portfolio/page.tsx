import type { Metadata } from "next";

import PortfolioPage from "./PortfolioPage";

export const metadata: Metadata = {
  title: "Brands We've Built | EZPZ Coffee",
  description: "See the coffee brands EZPZ Coffee has helped create, launch, and grow across Canada with custom white label and private label coffee.",
  alternates: { canonical: "/en/portfolio" },
  openGraph: {
    title: "Brands We've Built | EZPZ Coffee",
    description: "Real brands. Real results. See how EZPZ Coffee has helped businesses across Canada launch their own coffee brand.",
    type: "website",
    url: "https://www.ezpz.coffee/en/portfolio",
    images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Brands We've Built | EZPZ Coffee" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brands We've Built | EZPZ Coffee",
    description: "Real brands. Real results. See how EZPZ Coffee has helped businesses across Canada launch their own coffee brand.",
    images: ["/assets/banner-01.jpg"],
  },
};

const Page = () => <PortfolioPage />;

export default Page;
