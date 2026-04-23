import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Miami | No Minimum Order | Ships to Florida | EZPZ Coffee",
    description:
      "Custom branded coffee bags for Miami businesses. No minimum order, full design included, specialty coffee shipped from Montreal to Miami. EZPZ makes branded coffee easy.",
    alternates: { canonical: "/custom-coffee-bags-miami" },
    openGraph: {
      title: "Custom Coffee Bags Miami | No Minimum Order | Ships to Florida | EZPZ Coffee",
      description:
        "Custom branded coffee bags for Miami businesses. No minimum order, full design included, specialty coffee shipped from Montreal to Miami.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-miami",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Miami" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Miami | No Minimum | EZPZ",
      description: "Custom branded coffee bags for Miami businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Miami",
  province: "Florida",
  eyebrow: "Custom Coffee Bags — Miami",
  headline: "Custom coffee bags for Miami brands. Your vibe. Your coffee.",
  subheadline:
    "Miami's hotels, restaurants, and lifestyle brands are putting their name on specialty coffee. EZPZ makes it happen with no minimums and full design included.",
  bodyIntro:
    "Miami is one of the world's most exciting brand playgrounds. From South Beach hotels to Wynwood galleries to Brickell restaurants — every business in Miami competes on aesthetics, experience, and brand. A custom branded coffee bag fits perfectly into that world. EZPZ ships directly to Miami from our Montreal roastery, typically within 7 to 10 business days. No minimum order. Full design included. Specialty coffee that tastes as good as it looks.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-miami",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    {
      n: "01",
      title: "Design your bag online",
      body: "Use our online tool to upload your logo, add your brand name or message, and choose your packaging style. Takes under 10 minutes from anywhere in Miami.",
    },
    {
      n: "02",
      title: "Choose your coffee",
      body: "Select from our traceable specialty coffees. Light, medium, or dark roast — from Ethiopia, Colombia, Brazil, and more. We match the premium quality Miami demands.",
    },
    {
      n: "03",
      title: "We roast fresh in Montreal",
      body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum quantity required.",
    },
    {
      n: "04",
      title: "Delivered to Miami",
      body: "We ship directly to your Miami address within 7 to 10 business days from order confirmation. Fully tracked, right to your door.",
    },
  ],
  whyPoints: [
    {
      n: "01",
      title: "Zero minimums — made for Miami's energy",
      body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Launch a small batch for a new concept, a pop-up, or a seasonal menu — no volume commitment required.",
    },
    {
      n: "02",
      title: "Design that matches your brand",
      body: "Full custom bag design is included in every order at no extra cost. Bring your logo, your palette, your aesthetic — our team handles the design without additional fees.",
    },
    {
      n: "03",
      title: "Specialty coffee as premium as your brand",
      body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Miami's luxury market expects quality — our coffee delivers it.",
    },
    {
      n: "04",
      title: "Ships directly to Florida",
      body: "From our Montreal roastery to your Miami door in 7 to 10 business days. Tracked, reliable, and delivered directly — no import headaches on your end.",
    },
  ],
};

const MiamiPage = () => <CityPage data={data} />;
export default MiamiPage;
