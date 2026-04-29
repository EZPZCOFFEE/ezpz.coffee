import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Brooklyn | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Brooklyn businesses, shipped in 7–10 days. No minimum order, full design included. Brooklyn brands choose EZPZ for specialty branded coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-brooklyn" },
    openGraph: {
      title: "Custom Coffee Bags Brooklyn | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Brooklyn businesses. No minimum order, full design included, specialty coffee shipped from Montreal.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-brooklyn",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Brooklyn" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Brooklyn | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Brooklyn businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Brooklyn",
  province: "New York",
  eyebrow: "Custom Coffee Bags — Brooklyn",
  headline: "Custom coffee bags for Brooklyn brands. Zero minimums.",
  subheadline: "Brooklyn's independent restaurants, creative studios, and retailers trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Williamsburg's legendary restaurant and bar scene to DUMBO's design agencies and creative studios, from Park Slope's neighborhood institutions to Bushwick's artist-run spaces — Brooklyn businesses are defined by independent spirit and uncompromising quality. A custom branded coffee bag from EZPZ fits perfectly on the counter of a Williams-Sonoma-adjacent coffee shop or inside a Mast Brothers-era boutique gift bag. We ship from Montreal to Brooklyn in 7 to 10 business days.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-brooklyn",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Brooklyn", body: "We ship directly to your Brooklyn address within 7 to 10 business days from order confirmation. Fully tracked, right to your door." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums — built for Brooklyn's indie culture", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Launch a small batch for a pop-up, a collab, or a seasonal menu — no commitment required." },
    { n: "02", title: "Design included — your aesthetic, handled", body: "Full custom bag design is included in every order at no extra cost. Bring your logo, your vibe, your brand — our team handles the design." },
    { n: "03", title: "Specialty grade coffee Brooklyn expects", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Brooklyn's specialty coffee culture is world-famous — our quality belongs in it." },
    { n: "04", title: "Ships directly to Brooklyn", body: "From our Montreal roastery to your Brooklyn address in 7 to 10 business days. No import headaches — just your branded coffee at your door." },
  ],
  whoWeServe: [
    { title: "Independent Restaurants & Cafés", body: "Williamsburg bistros, Park Slope neighborhood restaurants, and Bushwick experimental dining spaces use custom branded coffee to build brand identity that extends beyond the table." },
    { title: "Creative Studios & Agencies", body: "DUMBO design firms, Williamsburg creative agencies, and Brooklyn-based production companies use branded coffee as a premium client gift that reflects their creative sensibility." },
    { title: "Retailers & Concept Stores", body: "Brooklyn's world-class independent retail scene — Cobble Hill boutiques, Fort Greene gift shops, and Carroll Gardens specialty stores — adds custom coffee as a natural, giftable product." },
    { title: "Cafés & Specialty Coffee Bars", body: "Brooklyn's craft coffee culture is globally recognized. Custom branded coffee from EZPZ gives specialty cafés a retail product they can sell and gift under their own name." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Brooklyn in 7 to 10 business days via tracked international courier. We deliver to all Brooklyn neighborhoods including Williamsburg, DUMBO, Park Slope, Bushwick, Carroll Gardens, Cobble Hill, Fort Greene, Crown Heights, and beyond. First orders take 2 to 3 weeks total. No import paperwork on your end.",
  relatedCities: [
    { city: "New York", href: "/en/custom-coffee-bags-new-york" },
    { city: "Philadelphia", href: "/en/custom-coffee-bags-philadelphia" },
  ],
};

const BrooklynPage = () => <CityPage data={data} />;
export default BrooklynPage;
