import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Toronto | Ships Fast | No Minimum | EZPZ Coffee",
    description:
      "Custom branded coffee bags for Toronto businesses. No minimum order, full design included, roasted in Montreal and shipped fast to Toronto. EZPZ makes branded coffee easy.",
    alternates: { canonical: "/custom-coffee-bags-toronto" },
    openGraph: {
      title: "Custom Coffee Bags Toronto | Ships Fast | No Minimum | EZPZ Coffee",
      description:
        "Custom branded coffee bags for Toronto businesses. No minimum order, full design included, roasted in Montreal and shipped fast to Toronto.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-toronto",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Toronto" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Toronto | Ships Fast | No Minimum | EZPZ",
      description: "Custom branded coffee bags for Toronto businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Toronto",
  province: "Ontario",
  eyebrow: "Custom Coffee Bags — Toronto",
  headline: "Custom coffee bags for Toronto brands. Shipped fast. No minimums.",
  subheadline:
    "Toronto's restaurants, hotels, and retailers trust EZPZ to put their brand on specialty coffee — with no minimums and full design included.",
  bodyIntro:
    "Toronto is home to some of Canada's most exciting restaurants, boutiques, hotels, and brands. If you are one of them and you want to add a branded coffee product to your lineup — EZPZ ships directly to Toronto, typically within 5 to 7 business days from order confirmation. No minimum order. Full custom bag design included. Specialty grade coffee from traceable origins around the world.",
  deliveryTime: "5 to 7 business days",
  canonicalPath: "/custom-coffee-bags-toronto",
  howItWorks: [
    {
      n: "01",
      title: "Design your bag online",
      body: "Use our online tool to upload your logo, add your brand name or message, and choose your packaging style. Takes under 10 minutes from anywhere in Toronto.",
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
      title: "Delivered to Toronto",
      body: "We ship directly to your Toronto address within 5 to 7 business days from order confirmation. Fast, reliable, and fully tracked.",
    },
  ],
  whyPoints: [
    {
      n: "01",
      title: "No minimum order",
      body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Test your concept before committing to volume.",
    },
    {
      n: "02",
      title: "Full custom design included",
      body: "Your logo, your colors, your messaging — full bag design is included in every order at no extra cost. No designer fees, no print-ready files required.",
    },
    {
      n: "03",
      title: "Ships fast to Toronto",
      body: "From order confirmation to delivery at your Toronto door in 5 to 7 business days. We ship via tracked carriers so you always know where your order is.",
    },
    {
      n: "04",
      title: "Specialty grade coffee",
      body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Every bag is roasted to order in Montreal — never pre-packaged or sitting in a warehouse.",
    },
  ],
};

const TorontoPage = () => <CityPage data={data} />;
export default TorontoPage;
