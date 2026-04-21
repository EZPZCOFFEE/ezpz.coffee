import type { Metadata } from "next";

import BlogPage from "./BlogPage";

export const metadata: Metadata = {
  title: "Blog | Coffee Branding Tips & Industry News | EZPZ Coffee",
  description: "Coffee branding tips, white label guides, and industry news from the EZPZ Coffee team. Everything you need to build a coffee brand in Canada.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "The EZPZ Blog | Coffee Branding Tips & News",
    description: "Everything you need to know about building a coffee brand in Canada.",
    type: "website",
    url: "https://www.ezpz.coffee/en/blog",
    images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "The EZPZ Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The EZPZ Blog | Coffee Branding Tips & News",
    description: "Everything you need to know about building a coffee brand in Canada.",
    images: ["/assets/banner-01.jpg"],
  },
};

const Page = () => <BlogPage />;

export default Page;
