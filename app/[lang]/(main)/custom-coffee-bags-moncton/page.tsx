import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Moncton | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Moncton businesses, shipped in 7–10 days. No minimum order, full design included. Moncton brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/custom-coffee-bags-moncton" },
    openGraph: {
      title: "Custom Coffee Bags Moncton | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Moncton businesses. No minimum order, full design included, shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-moncton",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Moncton" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Moncton | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Moncton businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Moncton",
  province: "New Brunswick",
  eyebrow: "Custom Coffee Bags — Moncton",
  headline: "Custom coffee bags for Moncton brands. Zero minimums.",
  subheadline: "Moncton's bilingual business community, retailers, and hospitality sector trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From the growing restaurant scene of Downtown Moncton to the commercial corridors of Dieppe, from Riverview's suburban businesses to the bilingual professional community at the heart of Atlantic Canada's fastest-growing city — Moncton serves a unique dual English and French market. EZPZ ships custom branded specialty coffee from our Montreal roastery to Moncton in 7 to 10 business days. Bilingual bag designs available. No minimum order. Full custom design included.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-moncton",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name in English, French, or both, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Moncton", body: "We ship directly to your Moncton address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Test your concept without risk." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. We can design in English, French, or bilingual format." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Every bag is roasted fresh in Montreal to order." },
    { n: "04", title: "Bilingual-ready packaging for Moncton's market", body: "Moncton's unique English-French bilingual market is a competitive advantage for businesses that serve both communities well — EZPZ designs your bags in both languages at no extra cost." },
  ],
  whoWeServe: [
    { title: "Restaurants & Downtown Moncton", body: "Downtown Moncton restaurants, Dieppe dining destinations, and Riverview cafés use custom branded coffee to keep their brand visible in customers' morning routines." },
    { title: "Retailers & Bilingual Brands", body: "Moncton's bilingual retail community adds custom branded coffee — available in English, French, or both — as a differentiated product that serves their full customer base." },
    { title: "Hotels & Hospitality", body: "Moncton hotels, conference properties, and hospitality venues brand their in-room coffee experience to deliver a premium guest stay in Atlantic Canada's hub city." },
    { title: "Corporate & Professional Services", body: "Moncton's professional services firms, financial offices, and corporate sector use EZPZ for premium branded coffee gifts that make a strong impression on clients." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Moncton in 7 to 10 business days via tracked Canada Post or courier. We deliver to Downtown Moncton, Dieppe, Riverview, and surrounding Greater Moncton communities. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Halifax", href: "/en/custom-coffee-bags-halifax" },
    { city: "Montreal", href: "/en/custom-coffee-bags-montreal" },
  ],
};

const MonctonPage = () => <CityPage data={data} />;
export default MonctonPage;
