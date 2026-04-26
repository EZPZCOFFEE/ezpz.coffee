import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Montreal | No Minimum Order | Roasted Fresh | EZPZ",
    description:
      "Custom branded coffee bags roasted fresh in Montreal. No minimum order, full design included, ships across Canada. EZPZ is Montreal's custom coffee brand builder.",
    alternates: { canonical: "/custom-coffee-bags-montreal" },
    openGraph: {
      title: "Custom Coffee Bags Montreal | No Minimum Order | Roasted Fresh | EZPZ",
      description:
        "Custom branded coffee bags roasted fresh in Montreal. No minimum order, full design included, ships across Canada.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-montreal",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Montreal" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Montreal | No Minimum Order | EZPZ",
      description: "Custom branded coffee bags roasted fresh in Montreal. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Montreal",
  province: "Quebec",
  eyebrow: "Custom Coffee Bags — Montreal",
  headline: "Custom coffee bags. Roasted right here in Montreal.",
  subheadline: "The only custom coffee supplier in Canada with no minimum order — and we roast every bag fresh in Montreal.",
  bodyIntro:
    "If you are a Montreal business looking to sell coffee under your own brand — a restaurant on Saint-Denis, a boutique on Mont-Royal, a hotel in the Golden Square Mile, or a gym in Rosemont — EZPZ was built for you. We roast your coffee fresh at Canadian Roasting Society in the southwest of Montreal and ship it across Canada, usually within 2 to 3 weeks. No minimum order. Full custom design included. No hidden fees.",
  deliveryTime: "2 to 3 weeks",
  canonicalPath: "/custom-coffee-bags-montreal",
  howItWorks: [
    {
      n: "01",
      title: "Design your bag online",
      body: "Use our online tool to upload your logo, add your brand name or a personal message, and choose your packaging style. Takes under 10 minutes.",
    },
    {
      n: "02",
      title: "Choose your coffee",
      body: "Select from our traceable specialty coffees roasted in Montreal. Light, medium, or dark — from Ethiopia, Colombia, Brazil, and more.",
    },
    {
      n: "03",
      title: "We roast and pack in Montreal",
      body: "Your coffee is roasted fresh at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum quantity required.",
    },
    {
      n: "04",
      title: "Delivered to your Montreal address",
      body: "We ship directly to your Montreal location within 2 to 3 weeks from order confirmation. Local pickup available by arrangement.",
    },
  ],
  whyPoints: [
    {
      n: "01",
      title: "No minimum order — anywhere in Canada",
      body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for testing a concept or launching a small batch.",
    },
    {
      n: "02",
      title: "Full custom design always included",
      body: "Bring your logo and brand colors — we handle the rest. Custom bag design is included in every order at no extra cost. No need to hire a designer or supply print-ready files.",
    },
    {
      n: "03",
      title: "Specialty grade coffee, roasted fresh",
      body: "We source only 80+ SCA specialty grade coffees from traceable origins. Every bag is roasted to order at Canadian Roasting Society in Montreal — never sitting on a shelf.",
    },
    {
      n: "04",
      title: "Built for Montreal brands",
      body: "From restaurants on the Plateau to boutiques in Outremont to hotels downtown — EZPZ works with Montreal businesses of every size and industry. We know your market.",
    },
  ],
};

const dataWithRelated: typeof data = {
  ...data,
  relatedCities: [
    { city: "Toronto", href: "/en/custom-coffee-bags-toronto" },
    { city: "Vancouver", href: "/en/custom-coffee-bags-vancouver" },
  ],
};

const MontrealPage = () => <CityPage data={dataWithRelated} />;
export default MontrealPage;
