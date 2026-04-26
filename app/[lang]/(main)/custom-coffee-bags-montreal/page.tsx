import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Montreal | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Montreal businesses, roasted fresh in Montreal. No minimum order, full design included. EZPZ serves Montreal brands of every size.",
    alternates: { canonical: "/custom-coffee-bags-montreal" },
    openGraph: {
      title: "Custom Coffee Bags Montreal | No Minimum Order | EZPZ Coffee",
      description:
        "Custom coffee bags roasted fresh in Montreal. No minimum order, full design included. EZPZ serves Montreal brands of every size.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-montreal",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Montreal" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Montreal | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags roasted fresh in Montreal. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Montreal",
  province: "Quebec",
  eyebrow: "Custom Coffee Bags — Montreal",
  headline: "Custom coffee bags for Montreal brands. Roasted here. Zero minimums.",
  subheadline: "The only custom coffee supplier in Canada with no minimum order — and we roast every bag fresh in Montreal.",
  bodyIntro:
    "From the Plateau-Mont-Royal restaurant scene to boutique hotels in Old Montreal, from Mile End coffee shops to Westmount wellness studios — Montreal businesses understand that branding matters. EZPZ Coffee is rooted in Montreal, roasting every order fresh at Canadian Roasting Society in the city's southwest. When you order with us, your coffee goes from our roastery to your door faster than any other supplier in Canada. No minimum order. Full custom design included. No hidden fees.",
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
      body: "From restaurants on the Plateau to boutiques in Outremont to hotels in Old Montreal — EZPZ works with Montreal businesses of every size and industry. We know your market.",
    },
  ],
  whoWeServe: [
    {
      title: "Restaurants & Cafés",
      body: "From Plateau bistros to Old Montreal fine dining — sell your own branded coffee or gift it to guests. A custom bag on the counter becomes part of your brand story.",
    },
    {
      title: "Boutique Hotels",
      body: "Hotels in the Golden Square Mile, Vieux-Montreal, and the Latin Quarter trust EZPZ to put specialty coffee in every room under their own brand name.",
    },
    {
      title: "Retailers & Boutiques",
      body: "Mont-Royal boutiques, Mile End concept stores, and Westmount gift shops add custom branded coffee as a high-margin, high-repeat product their customers love.",
    },
    {
      title: "Wellness Studios",
      body: "Yoga studios, fitness clubs, and wellness brands from Rosemont to NDG use EZPZ to create a branded morning ritual that keeps their community engaged between visits.",
    },
  ],
  deliveryBody:
    "As a Montreal-based business, you benefit from the fastest delivery of any customer we serve. Orders typically ship within 3 to 5 business days from design approval and arrive at your Montreal door within the same week. Local pickup at our southwest Montreal roastery can also be arranged. Repeat orders are even faster since your design is already on file. Call or email us to coordinate a bulk delivery schedule for your restaurant, hotel, or retail location.",
  relatedCities: [
    { city: "Quebec City", href: "/en/custom-coffee-bags-quebec-city" },
    { city: "Laval", href: "/en/custom-coffee-bags-laval" },
    { city: "Toronto", href: "/en/custom-coffee-bags-toronto" },
  ],
};

const MontrealPage = () => <CityPage data={data} />;
export default MontrealPage;
