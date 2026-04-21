import type { Metadata } from "next";

import PostContent from "./PostContent";

export const metadata: Metadata = {
  title: "What Makes Specialty Coffee Traceable? | EZPZ Coffee",
  description:
    "Learn what farm-to-bag traceability means in the specialty coffee world, why it matters for your brand, and how EZPZ guarantees full transparency in every bag.",
  alternates: { canonical: "/blog/what-makes-specialty-coffee-traceable" },
  openGraph: {
    title: "What Makes Specialty Coffee Traceable? | EZPZ Coffee",
    description:
      "Learn what farm-to-bag traceability means in the specialty coffee world, why it matters for your brand, and how EZPZ guarantees full transparency in every bag.",
    type: "article",
    url: "https://www.ezpz.coffee/en/blog/what-makes-specialty-coffee-traceable",
    images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "What Makes Specialty Coffee Traceable? | EZPZ Coffee" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Makes Specialty Coffee Traceable? | EZPZ Coffee",
    description:
      "Learn what farm-to-bag traceability means and why it matters for your brand.",
    images: ["/assets/banner-01.jpg"],
  },
};

const Page = () => <PostContent />;

export default Page;
