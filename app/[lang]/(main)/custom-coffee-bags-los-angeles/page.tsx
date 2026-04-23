import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Los Angeles | No Minimum | Ships to LA | EZPZ Coffee",
    description:
      "Custom branded coffee bags for Los Angeles businesses. No minimum order, full design included, specialty coffee shipped from Montreal to LA. Start your coffee brand today.",
    alternates: { canonical: "/custom-coffee-bags-los-angeles" },
    openGraph: {
      title: "Custom Coffee Bags Los Angeles | No Minimum | Ships to LA | EZPZ Coffee",
      description:
        "Custom branded coffee bags for Los Angeles businesses. No minimum order, full design included, specialty coffee shipped from Montreal to LA.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-los-angeles",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Los Angeles" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Los Angeles | No Minimum | EZPZ",
      description: "Custom branded coffee bags for Los Angeles businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Los Angeles",
  province: "California",
  eyebrow: "Custom Coffee Bags — Los Angeles",
  headline: "Custom coffee bags for Los Angeles brands. Your brand. Our coffee.",
  subheadline:
    "LA's restaurants, wellness brands, and retailers are adding branded coffee to their lineup. EZPZ makes it simple with no minimums and full design included.",
  bodyIntro:
    "Los Angeles is one of the world's most brand-conscious cities. From Silver Lake cafés to Beverly Hills hotels to Venice wellness studios — every business in LA understands the power of a strong brand. A custom branded coffee bag is one of the most tangible, daily-use brand touchpoints you can create. EZPZ ships directly to Los Angeles from our Montreal roastery, typically within 7 to 10 business days. No minimum order. Full design included. Specialty grade coffee from traceable origins.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-los-angeles",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    {
      n: "01",
      title: "Design your bag online",
      body: "Use our online tool to upload your logo, add your brand name or message, and choose your packaging style. Takes under 10 minutes from anywhere in Los Angeles.",
    },
    {
      n: "02",
      title: "Choose your coffee",
      body: "Select from our traceable specialty coffees. Light, medium, or dark roast — from Ethiopia, Colombia, Brazil, and more. We match the quality LA expects.",
    },
    {
      n: "03",
      title: "We roast fresh in Montreal",
      body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum quantity required.",
    },
    {
      n: "04",
      title: "Delivered to Los Angeles",
      body: "We ship directly to your Los Angeles address within 7 to 10 business days from order confirmation. Fully tracked, right to your door.",
    },
  ],
  whyPoints: [
    {
      n: "01",
      title: "Zero minimums — built for LA brands",
      body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum order. Launch a limited batch for a pop-up, a new menu season, or a brand collab.",
    },
    {
      n: "02",
      title: "Design included — your aesthetic, handled",
      body: "Full custom bag design is included in every order at no extra cost. Bring your logo, your colors, your vibe — our team handles the rest without additional fees.",
    },
    {
      n: "03",
      title: "Quality as premium as your brand",
      body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. LA customers know quality — our coffee matches your brand positioning.",
    },
    {
      n: "04",
      title: "Ships directly to LA",
      body: "From our Montreal roastery to your Los Angeles door in 7 to 10 business days. Tracked, reliable, and delivered directly — no import headaches on your end.",
    },
  ],
};

const LosAngelesPage = () => <CityPage data={data} />;
export default LosAngelesPage;
