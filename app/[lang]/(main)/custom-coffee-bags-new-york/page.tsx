import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags New York | No Minimum Order | Ships Fast | EZPZ Coffee",
    description:
      "Custom branded coffee bags for New York businesses. No minimum order, full design included, specialty coffee shipped from Montreal to New York. EZPZ makes branded coffee easy.",
    alternates: { canonical: "/custom-coffee-bags-new-york" },
    openGraph: {
      title: "Custom Coffee Bags New York | No Minimum Order | Ships Fast | EZPZ Coffee",
      description:
        "Custom branded coffee bags for New York businesses. No minimum order, full design included, specialty coffee shipped from Montreal to New York.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-new-york",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags New York" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags New York | No Minimum | EZPZ",
      description: "Custom branded coffee bags for New York businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "New York",
  province: "New York",
  eyebrow: "Custom Coffee Bags — New York",
  headline: "Custom coffee bags for New York brands. Zero minimums.",
  subheadline:
    "New York's restaurants, hotels, and retailers trust EZPZ to put their brand on specialty coffee — with no minimums and full design included.",
  bodyIntro:
    "New York City is the most competitive food and beverage market in the world. Standing out matters. If you are a Manhattan restaurant, a Brooklyn boutique, a Midtown hotel, or a brand anywhere in the five boroughs — a custom branded coffee product is one of the highest-impact, lowest-cost ways to differentiate yourself. EZPZ ships directly to New York from our Montreal roastery, typically within 7 to 10 business days from order confirmation. No minimum order. Full custom bag design included. 100% traceable specialty grade coffee.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-new-york",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    {
      n: "01",
      title: "Design your bag online",
      body: "Use our online tool to upload your logo, add your brand name or message, and choose your packaging style. Takes under 10 minutes from anywhere in New York.",
    },
    {
      n: "02",
      title: "Choose your coffee",
      body: "Select from our traceable specialty coffees. Light, medium, or dark roast — from Ethiopia, Colombia, Brazil, and more. We will help you choose if needed.",
    },
    {
      n: "03",
      title: "We roast fresh in Montreal",
      body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum quantity required.",
    },
    {
      n: "04",
      title: "Delivered to New York",
      body: "We ship directly to your New York address within 7 to 10 business days from order confirmation. Fully tracked, right to your door.",
    },
  ],
  whyPoints: [
    {
      n: "01",
      title: "The only true zero minimum in North America",
      body: "EZPZ is the only custom coffee supplier with a genuine zero minimum order. Order one bag to test your concept before committing to volume. Perfect for NYC brands that move fast.",
    },
    {
      n: "02",
      title: "Design included — no exceptions",
      body: "Full custom bag design is included in every order at no extra cost. Your logo, your aesthetic, your brand — handled by our team without additional fees.",
    },
    {
      n: "03",
      title: "Quality that matches New York standards",
      body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. New York has the highest standards in the world — our coffee meets them.",
    },
    {
      n: "04",
      title: "Ships internationally to your door",
      body: "From our Montreal roastery to your New York address in 7 to 10 business days. Tracked, reliable, and delivered directly to you — no import headaches on your end.",
    },
  ],
};

const NewYorkPage = () => <CityPage data={data} />;
export default NewYorkPage;
