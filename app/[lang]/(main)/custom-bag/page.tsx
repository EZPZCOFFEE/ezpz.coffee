import type { Metadata } from "next";

import CustomBagLandingPage from "../_components/CustomBagLandingPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags | Design Your Own | No Minimum Order | EZPZ Coffee",
  description:
    "Design your own custom coffee bags online in minutes. No minimum order quantity. Upload your logo, pick your style, and get branded bags shipped to you.",
  alternates: { canonical: "/en/custom-bag" },
  openGraph: {
    title: "Custom Coffee Bags | Design Your Own | No Minimum Order | EZPZ Coffee",
    description: "Design your own custom coffee bags online in minutes. No minimum order quantity. Upload your logo, pick your style, and get branded bags shipped to you.",
    type: "website",
    url: "https://www.ezpz.coffee/en/custom-bag",
    images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags | EZPZ Coffee" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Coffee Bags | Design Your Own | No Minimum Order | EZPZ Coffee",
    description: "Design your own custom coffee bags online in minutes. No minimum order quantity.",
    images: ["/assets/banner-01.jpg"],
  },
};

const CustomBagPage = () => {
  return <CustomBagLandingPage />;
};

export default CustomBagPage;
