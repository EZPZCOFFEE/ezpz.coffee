import type { Metadata } from "next";

import PostContent from "./PostContent";

export const metadata: Metadata = {
  title: "Custom Coffee Bags vs. Pre-Packaged Coffee: What's Right for Your Business? | EZPZ Coffee",
  description:
    "Thinking about selling coffee at your business? We break down the pros and cons of custom branded bags vs. pre-packaged coffee so you can make the best decision for your brand.",
  alternates: { canonical: "/blog/custom-coffee-bags-vs-pre-packaged-coffee" },
  openGraph: {
    title: "Custom Coffee Bags vs. Pre-Packaged Coffee: What's Right for Your Business? | EZPZ Coffee",
    description:
      "Thinking about selling coffee at your business? We break down the pros and cons of custom branded bags vs. pre-packaged coffee so you can make the best decision for your brand.",
    type: "article",
    url: "https://www.ezpz.coffee/en/blog/custom-coffee-bags-vs-pre-packaged-coffee",
    images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags vs. Pre-Packaged Coffee | EZPZ Coffee" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Coffee Bags vs. Pre-Packaged Coffee | EZPZ Coffee",
    description:
      "Thinking about selling coffee at your business? We break down the pros and cons so you can make the right call.",
    images: ["/assets/banner-01.jpg"],
  },
};

const Page = () => <PostContent />;

export default Page;
