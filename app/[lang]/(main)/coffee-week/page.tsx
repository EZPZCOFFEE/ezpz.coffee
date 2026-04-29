import type { Metadata } from "next";

import CoffeeWeekPage from "./CoffeeWeekPage";

export const metadata: Metadata = {
  title: "Coffee Week Montreal 2027 | February 1–7",
  description:
    "Discover, taste, and vote for the best coffee shops in Montreal. One week, one special creation per café, one city united by great coffee.",
  alternates: { canonical: "/en/coffee-week" },
  openGraph: {
    title: "Coffee Week Montreal 2027",
    description:
      "Discover, taste, and vote for the best coffee shops in Montreal. February 1–7, 2027.",
    type: "website",
    url: "https://www.ezpz.coffee/en/coffee-week",
    images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Coffee Week Montreal" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee Week Montreal 2027",
    description: "Discover, taste, and vote for the best coffee shops in Montreal. February 1–7, 2027.",
    images: ["/assets/banner-01.jpg"],
  },
};

const Page = () => <CoffeeWeekPage />;

export default Page;
