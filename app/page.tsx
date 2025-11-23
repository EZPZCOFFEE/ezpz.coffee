import type { Metadata } from "next";

import CustomizationPageClient from "./_components/CustomizationPageClient";

export const metadata: Metadata = {
  title: "Customize your EZPZ coffee bags",
  description:
    "Upload artwork, pick roast and grind options, and preview your 225g EZPZ coffee bags before adding them to the cart.",
  openGraph: {
    title: "Design a custom EZPZ coffee bag",
    description: "Personalize the label, grind, and roast profile—preview it live before you checkout.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design a custom EZPZ coffee bag",
    description: "Personalize every detail and see the preview instantly.",
  },
};

const HomePage = () => {
  return <CustomizationPageClient />;
};

export default HomePage;
