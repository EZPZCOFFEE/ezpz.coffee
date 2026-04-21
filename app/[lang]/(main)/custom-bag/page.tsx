import type { Metadata } from "next";

import CustomBagLandingPage from "../_components/CustomBagLandingPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags | Design Your Own — No Minimum Order | EZPZ Coffee",
  description:
    "Design your own custom coffee bags online in minutes. No minimum order quantity. Upload your logo, pick your style, and get branded bags shipped to you.",
};

const CustomBagPage = () => {
  return <CustomBagLandingPage />;
};

export default CustomBagPage;
