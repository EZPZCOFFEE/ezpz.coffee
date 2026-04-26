import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Longueuil | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Longueuil businesses, delivered in 3–5 days from Montreal. No minimum order, full design included. South Shore brands choose EZPZ.",
    alternates: { canonical: "/custom-coffee-bags-longueuil" },
    openGraph: {
      title: "Custom Coffee Bags Longueuil | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Longueuil businesses. No minimum order, full design included, delivered in 3–5 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-longueuil",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Longueuil" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Longueuil | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Longueuil businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Longueuil",
  province: "Quebec",
  eyebrow: "Custom Coffee Bags — Longueuil",
  headline: "Custom coffee bags for Longueuil brands. Zero minimums.",
  subheadline: "South Shore businesses trust EZPZ to put their brand on specialty coffee — no minimums, full design included, delivered fast.",
  bodyIntro:
    "From the historic streets of Vieux-Longueuil to the restaurants and boutiques of Greenfield Park and Saint-Hubert, Longueuil's South Shore business community is vibrant, diverse, and growing. As a Montreal-based roaster just across the St. Lawrence, EZPZ delivers custom branded specialty coffee to Longueuil in 3 to 5 business days — faster than virtually any other supplier in Canada. No minimum order. Full custom design included.",
  deliveryTime: "3 to 5 business days",
  canonicalPath: "/custom-coffee-bags-longueuil",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in southwest Montreal — just across the river from Longueuil. No minimum required." },
    { n: "04", title: "Delivered to Longueuil", body: "We ship directly to your Longueuil address within 3 to 5 business days from order confirmation. Fast, local, fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for testing a new concept." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Among the fastest delivery in Quebec", body: "Longueuil's proximity to our Montreal roastery means some of the fastest custom coffee delivery in the province — typically 3 to 5 business days." },
    { n: "04", title: "Built for South Shore businesses", body: "From Vieux-Longueuil restaurants to Saint-Hubert fitness studios — EZPZ serves the South Shore community with the same care as our Montreal clients." },
  ],
  whoWeServe: [
    { title: "Restaurants & Cafés", body: "Vieux-Longueuil bistros, Saint-Hubert family restaurants, and Greenfield Park cafés add custom branded coffee that keeps their brand in customers' homes between visits." },
    { title: "Fitness Studios & Wellness", body: "South Shore gyms, yoga studios, and wellness centres brand their coffee experience to create a daily touchpoint with their community." },
    { title: "Retailers & Boutiques", body: "Longueuil's independent boutiques and specialty retailers add branded coffee as a high-margin product that attracts and retains loyal local customers." },
    { title: "Hotels & Corporate Clients", body: "Longueuil hotels and corporate offices near the South Shore business parks use EZPZ for branded coffee gifts and hospitality amenities." },
  ],
  deliveryBody:
    "Longueuil sits just across the Jacques-Cartier Bridge from our Montreal roastery — making it one of our fastest delivery destinations. Orders typically arrive within 3 to 5 business days. We deliver to all of Longueuil including Vieux-Longueuil, Greenfield Park, Saint-Hubert, and LeMoyne. Local pickup at our Montreal facility can also be arranged.",
  relatedCities: [
    { city: "Montreal", href: "/en/custom-coffee-bags-montreal" },
    { city: "Laval", href: "/en/custom-coffee-bags-laval" },
  ],
};

const LongueuilPage = () => <CityPage data={data} />;
export default LongueuilPage;
