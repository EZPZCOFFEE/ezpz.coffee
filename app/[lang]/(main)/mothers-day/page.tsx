import type { Metadata } from "next";

import MothersDayPage from "./MothersDayPage";

export const metadata: Metadata = {
  title: "Mother's Day Coffee Gift Canada | Custom Coffee Bags for Mom | EZPZ Coffee",
  description:
    "Give mom a gift she'll actually use every morning. Design a custom coffee bag with her name, a personal message, and specialty coffee she'll love. No minimum order. Ships across Canada.",
  alternates: { canonical: "/mothers-day" },
  openGraph: {
    title: "The Most Thoughtful Mother's Day Gift | Custom Coffee Bags | EZPZ Coffee",
    description:
      "Give mom a gift she'll actually use every morning. Custom coffee bag with her name, a personal message, and specialty coffee she'll love. Ships across Canada.",
    type: "website",
    url: "https://www.ezpz.coffee/en/mothers-day",
    images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Mother's Day" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Most Thoughtful Mother's Day Gift | Custom Coffee Bags | EZPZ Coffee",
    description:
      "Give mom a gift she'll actually use every morning. Custom coffee bag with her name, a personal message, and specialty coffee she'll love.",
    images: ["/assets/banner-01.jpg"],
  },
};

const Page = () => <MothersDayPage />;

export default Page;
