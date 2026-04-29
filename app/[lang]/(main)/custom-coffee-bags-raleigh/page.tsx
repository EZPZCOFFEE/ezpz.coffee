import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Raleigh | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Raleigh businesses, shipped in 7–10 days. No minimum order, full design included. Raleigh brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-raleigh" },
    openGraph: {
      title: "Custom Coffee Bags Raleigh | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Raleigh businesses. No minimum order, full design included, specialty coffee shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-raleigh",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Raleigh" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Raleigh | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Raleigh businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Raleigh",
  province: "North Carolina",
  eyebrow: "Custom Coffee Bags — Raleigh",
  headline: "Custom coffee bags for Raleigh brands. Zero minimums.",
  subheadline: "Raleigh's Research Triangle tech sector, universities, and independent businesses trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Glenwood South's restaurant corridor and craft cocktail bars to Downtown Raleigh's growing hotel and retail scene, from the Research Triangle Park's tech campuses to the university neighborhoods surrounding NC State — Raleigh is one of America's fastest-growing cities and a genuine hub for technology, life sciences, and culinary creativity. The Triangle's blend of corporate tech culture and strong university identity drives real demand for quality branded products. EZPZ ships custom branded specialty coffee from our Montreal roastery to Raleigh in 7 to 10 business days. No minimum order.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-raleigh",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Raleigh", body: "We ship directly to your Raleigh address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Order one bag or a thousand — the quality and service are identical." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand identity — handled without additional fees." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Raleigh's specialty coffee culture is thriving — our quality matches its expectations." },
    { n: "04", title: "Built for Research Triangle's tech and life sciences sector", body: "IBM, Cisco, SAS, and hundreds of Research Triangle Park companies create a premium corporate gifting culture. EZPZ delivers specialty coffee that works as a client gift at every budget level." },
  ],
  whoWeServe: [
    { title: "Restaurants & Glenwood South Dining", body: "Glenwood South restaurants, Downtown Raleigh dining, and Five Points neighborhood spots use custom branded coffee to stay top of mind with loyal customers." },
    { title: "Tech & Life Sciences Companies", body: "Research Triangle Park companies, Durham biotech firms, and Chapel Hill-adjacent tech businesses trust EZPZ for premium branded coffee gifts that impress clients and partners." },
    { title: "Hotels & Downtown Properties", body: "Downtown Raleigh hotels, boutique stays near NC State, and Research Triangle corporate hotels brand their in-room coffee experience with EZPZ custom bags." },
    { title: "Independent Retailers & Creative Businesses", body: "Glenwood South boutiques, Five Points specialty stores, and Downtown concept retailers add custom branded coffee as a premium product with strong repeat appeal." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Raleigh in 7 to 10 business days via tracked international courier. We deliver to all Raleigh areas including Downtown, Glenwood South, Five Points, and the broader Triangle including Durham, Chapel Hill, Cary, and Research Triangle Park. First orders take 2 to 3 weeks total. No import paperwork.",
  relatedCities: [
    { city: "Charlotte", href: "/en/custom-coffee-bags-charlotte" },
    { city: "Atlanta", href: "/en/custom-coffee-bags-atlanta" },
  ],
};

const RaleighPage = () => <CityPage data={data} />;
export default RaleighPage;
