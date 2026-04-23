import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Chicago | No Minimum Order | EZPZ Coffee",
    description:
      "Custom branded coffee bags for Chicago businesses. No minimum order, full design included, specialty coffee shipped from Montreal to Chicago. Build your coffee brand today.",
    alternates: { canonical: "/custom-coffee-bags-chicago" },
    openGraph: {
      title: "Custom Coffee Bags Chicago | No Minimum Order | EZPZ Coffee",
      description:
        "Custom branded coffee bags for Chicago businesses. No minimum order, full design included, specialty coffee shipped from Montreal to Chicago.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-chicago",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Chicago" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Chicago | No Minimum | EZPZ",
      description: "Custom branded coffee bags for Chicago businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Chicago",
  province: "Illinois",
  eyebrow: "Custom Coffee Bags — Chicago",
  headline: "Custom coffee bags for Chicago brands. No minimums. Full design included.",
  subheadline:
    "Chicago's restaurants, hotels, and retailers trust EZPZ to bring their coffee brand to life — with no minimum orders and specialty coffee from traceable origins.",
  bodyIntro:
    "Chicago has one of the most vibrant restaurant and hospitality scenes in America. Whether you are running a deep-dish institution in the Loop, a boutique hotel in River North, or a fitness studio in Lincoln Park — a branded coffee product adds a premium touch that customers notice and remember. EZPZ ships directly to Chicago from our Montreal roastery, typically within 7 to 10 business days. No minimum order. Full custom design included.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-chicago",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    {
      n: "01",
      title: "Design your bag online",
      body: "Use our online tool to upload your logo, add your brand name or message, and choose your packaging style. Takes under 10 minutes from anywhere in Chicago.",
    },
    {
      n: "02",
      title: "Choose your coffee",
      body: "Select from our traceable specialty coffees. Light, medium, or dark roast — from Ethiopia, Colombia, Brazil, and more. We will help you find the right fit.",
    },
    {
      n: "03",
      title: "We roast fresh in Montreal",
      body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum quantity required.",
    },
    {
      n: "04",
      title: "Delivered to Chicago",
      body: "We ship directly to your Chicago address within 7 to 10 business days from order confirmation. Fully tracked, right to your door.",
    },
  ],
  whyPoints: [
    {
      n: "01",
      title: "No minimum — perfect for Chicago's independent scene",
      body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Whether you run one location or a dozen, you order exactly what you need.",
    },
    {
      n: "02",
      title: "Design included — no extra cost",
      body: "Full custom bag design is included in every order. Your logo, your brand, your message — handled by our team without additional fees or print-ready file requirements.",
    },
    {
      n: "03",
      title: "Specialty grade coffee Chicago customers expect",
      body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Chicago has a discerning coffee culture — our quality is built to match it.",
    },
    {
      n: "04",
      title: "Direct shipping to Chicago",
      body: "From our Montreal roastery to your Chicago door in 7 to 10 business days. Tracked and reliable — no import headaches on your end.",
    },
  ],
};

const ChicagoPage = () => <CityPage data={data} />;
export default ChicagoPage;
