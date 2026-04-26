import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Vancouver | No Minimum | Ships Across Canada | EZPZ",
    description:
      "Custom branded coffee bags for Vancouver businesses. No minimum order, full design included, specialty coffee shipped across Canada from Montreal. EZPZ makes branded coffee simple.",
    alternates: { canonical: "/custom-coffee-bags-vancouver" },
    openGraph: {
      title: "Custom Coffee Bags Vancouver | No Minimum | Ships Across Canada | EZPZ",
      description:
        "Custom branded coffee bags for Vancouver businesses. No minimum order, full design included, specialty coffee shipped across Canada from Montreal.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-vancouver",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Vancouver" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Vancouver | No Minimum | EZPZ",
      description: "Custom branded coffee bags for Vancouver businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Vancouver",
  province: "British Columbia",
  eyebrow: "Custom Coffee Bags — Vancouver",
  headline: "Custom coffee bags for Vancouver brands. Zero minimums.",
  subheadline:
    "Vancouver's coffee culture is world class. Your branded coffee should be too — with no minimums and full design included.",
  bodyIntro:
    "Vancouver is one of the world's great coffee cities. The standards are high and the competition is fierce. If you are a Vancouver restaurant, hotel, retailer, or brand looking to stand out with your own custom branded coffee — EZPZ ships directly to Vancouver, typically within 7 to 10 business days from order confirmation. No minimum order. Full custom bag design included. 100% traceable specialty coffee.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-vancouver",
  howItWorks: [
    {
      n: "01",
      title: "Design your bag online",
      body: "Use our online tool to upload your logo, add your brand name or message, and choose your packaging style. Takes under 10 minutes from anywhere in Vancouver.",
    },
    {
      n: "02",
      title: "Choose your coffee",
      body: "Select from our traceable specialty coffees. Light, medium, or dark roast — from Ethiopia, Colombia, Brazil, and more. We match the quality Vancouver expects.",
    },
    {
      n: "03",
      title: "We roast fresh in Montreal",
      body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum quantity required.",
    },
    {
      n: "04",
      title: "Delivered to Vancouver",
      body: "We ship directly to your Vancouver address within 7 to 10 business days from order confirmation. Fully tracked, coast to coast.",
    },
  ],
  whyPoints: [
    {
      n: "01",
      title: "The only true zero minimum in Canada",
      body: "EZPZ is the only Canadian custom coffee supplier with a genuine zero minimum order. Order one bag to test your concept. Scale when you are ready.",
    },
    {
      n: "02",
      title: "Design included — no exceptions",
      body: "Full custom bag design is included in every order at no extra cost. Your logo, your aesthetic, your brand — handled by our team without additional fees.",
    },
    {
      n: "03",
      title: "Quality that meets Vancouver standards",
      body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Vancouver has world-class coffee standards — our quality matches them.",
    },
    {
      n: "04",
      title: "Ships coast to coast",
      body: "From our Montreal roastery to your Vancouver door in 7 to 10 business days. Tracked, reliable, and just as fast as local suppliers without the minimum requirements.",
    },
  ],
};

const dataWithRelated: typeof data = {
  ...data,
  relatedCities: [
    { city: "Montreal", href: "/en/custom-coffee-bags-montreal" },
    { city: "Toronto", href: "/en/custom-coffee-bags-toronto" },
  ],
};

const VancouverPage = () => <CityPage data={dataWithRelated} />;
export default VancouverPage;
