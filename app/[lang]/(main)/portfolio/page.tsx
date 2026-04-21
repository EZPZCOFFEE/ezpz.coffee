import type { Metadata } from "next";

import PortfolioPage from "./PortfolioPage";

export const metadata: Metadata = {
  title: "Brands We've Built | EZPZ Coffee",
  description: "See the coffee brands EZPZ Coffee has helped create, launch, and grow across Canada with custom white label and private label coffee.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Brands We've Built | EZPZ Coffee",
    description: "Real brands. Real results. See how EZPZ Coffee has helped businesses across Canada launch their own coffee brand.",
    type: "website",
    url: "/portfolio",
  },
};

const Page = () => <PortfolioPage />;

export default Page;
