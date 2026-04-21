import type { Metadata } from "next";

import PostContent from "./PostContent";

export const metadata: Metadata = {
  title: "How to Launch Your Own Coffee Brand in Canada in 2026 | EZPZ Coffee",
  description:
    "A step-by-step guide to creating a white label coffee product with no minimum order — from choosing your beans to designing your bag and selling across Canada.",
  alternates: { canonical: "/blog/how-to-launch-coffee-brand-canada-2026" },
  openGraph: {
    title: "How to Launch Your Own Coffee Brand in Canada in 2026 | EZPZ Coffee",
    description:
      "A step-by-step guide to creating a white label coffee product with no minimum order — from choosing your beans to designing your bag and selling across Canada.",
    type: "article",
    url: "https://www.ezpz.coffee/en/blog/how-to-launch-coffee-brand-canada-2026",
    images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "How to Launch Your Own Coffee Brand in Canada in 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Launch Your Own Coffee Brand in Canada in 2026 | EZPZ Coffee",
    description:
      "A step-by-step guide to creating a white label coffee product with no minimum order.",
    images: ["/assets/banner-01.jpg"],
  },
};

const Page = () => <PostContent />;

export default Page;
