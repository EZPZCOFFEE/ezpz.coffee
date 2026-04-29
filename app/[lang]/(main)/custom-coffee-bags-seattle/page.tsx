import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Seattle | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Seattle businesses, shipped in 10–14 days. No minimum order, full design included. Seattle brands choose EZPZ for specialty branded coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-seattle" },
    openGraph: {
      title: "Custom Coffee Bags Seattle | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Seattle businesses. No minimum order, full design included, specialty coffee shipped from Montreal.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-seattle",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Seattle" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Seattle | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Seattle businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Seattle",
  province: "Washington",
  eyebrow: "Custom Coffee Bags — Seattle",
  headline: "Custom coffee bags for Seattle brands. Zero minimums.",
  subheadline: "Seattle's tech companies, serious coffee culture, and independent businesses trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Capitol Hill's legendary café scene to Pioneer Square's arts and tech overlap, from Ballard's craft community to Fremont's quirky independent retail — Seattle is the city that made coffee a global obsession. Custom branded specialty coffee from EZPZ is for Seattle businesses that want to be part of that story with their own name on the bag. We ship from Montreal to Seattle in 10 to 14 business days. No minimum order. Full design included.",
  deliveryTime: "10 to 14 business days",
  canonicalPath: "/custom-coffee-bags-seattle",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Seattle", body: "We ship directly to your Seattle address within 10 to 14 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Order one bag or a thousand — the quality and service are identical." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand identity — handled without additional fees." },
    { n: "03", title: "Quality worthy of Seattle's coffee standards", body: "Seattle invented modern coffee culture. We source only 80+ SCA specialty grade coffees from fully traceable origins — EZPZ quality benchmarks to the highest standard in the world." },
    { n: "04", title: "Built for Seattle's tech gifting culture", body: "Amazon, Microsoft, and hundreds of Seattle-area tech companies trust premium branded products as gifts. EZPZ delivers specialty coffee quality that matches Seattle's professional expectations." },
  ],
  whoWeServe: [
    { title: "Specialty Cafés & Coffee Bars", body: "Seattle's world-famous café scene sells and gifts custom branded EZPZ coffee — a premium retail product that carries the café's identity into customers' homes every morning." },
    { title: "Tech Companies & Startups", body: "Amazon HQ, South Lake Union tech companies, and Bellevue-area firms use EZPZ for premium branded coffee gifts that resonate with Seattle's quality-obsessed professional culture." },
    { title: "Restaurants & Capitol Hill Dining", body: "Capitol Hill restaurants, Ballard seafood spots, and Fremont neighbourhood eateries add custom branded coffee as a distinctive take-home product." },
    { title: "Hotels & Boutique Properties", body: "Downtown Seattle hotels, Capitol Hill boutique stays, and Belltown properties brand their in-room coffee experience with EZPZ custom bags." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Seattle in 10 to 14 business days via tracked international courier. We deliver to all Seattle neighborhoods including Capitol Hill, Pioneer Square, Ballard, Fremont, Belltown, South Lake Union, and the greater Seattle metro area. First orders take 3 to 4 weeks total. No import paperwork on your end.",
  relatedCities: [
    { city: "Portland", href: "/en/custom-coffee-bags-portland" },
    { city: "San Francisco", href: "/en/custom-coffee-bags-san-francisco" },
  ],
};

const SeattlePage = () => <CityPage data={data} />;
export default SeattlePage;
