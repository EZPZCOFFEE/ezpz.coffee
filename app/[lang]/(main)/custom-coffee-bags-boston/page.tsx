import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Boston | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Boston businesses, shipped in 7–10 days. No minimum order, full design included. Boston brands choose EZPZ for specialty branded coffee.",
    alternates: { canonical: "/custom-coffee-bags-boston" },
    openGraph: {
      title: "Custom Coffee Bags Boston | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Boston businesses. No minimum order, full design included, specialty coffee shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-boston",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Boston" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Boston | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Boston businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Boston",
  province: "Massachusetts",
  eyebrow: "Custom Coffee Bags — Boston",
  headline: "Custom coffee bags for Boston brands. Zero minimums.",
  subheadline: "Boston's universities, biotech companies, and restaurants trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Back Bay's elegant boutiques and restaurants to the South End's chef-driven dining scene, from Cambridge's university-adjacent cafés to Beacon Hill's historic neighborhood shops — Boston is a city that blends deep institutional roots with genuine entrepreneurial energy. EZPZ ships custom branded specialty coffee from our Montreal roastery to Boston in 7 to 10 business days. No minimum order. Full custom design included.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-boston",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Boston", body: "We ship directly to your Boston address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Order one bag or a thousand — the quality and service are identical." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand identity — handled without additional fees." },
    { n: "03", title: "Specialty grade coffee for a quality-first market", body: "Boston's university and biotech culture creates a sophisticated consumer base. We source only 80+ SCA specialty grade coffees from traceable origins to match those expectations." },
    { n: "04", title: "Built for Boston's biotech and university sectors", body: "Harvard, MIT, and the Route 128 biotech corridor create a gifting culture where quality matters enormously. EZPZ delivers branded specialty coffee that makes the right impression." },
  ],
  whoWeServe: [
    { title: "Restaurants & South End Dining", body: "South End chef-driven restaurants, Back Bay dining destinations, and Cambridge neighborhood eateries add custom branded coffee that extends their culinary brand into daily life." },
    { title: "Biotech & Life Sciences Companies", body: "Cambridge and Seaport biotech firms, pharma companies, and life sciences organizations trust EZPZ for premium branded coffee gifts for clients, investors, and partners." },
    { title: "Universities & Academic Institutions", body: "Harvard Square cafés, MIT-area businesses, and Boston university campus organizations use EZPZ custom coffee to build brand recognition among their academic communities." },
    { title: "Hotels & Boutique Properties", body: "Back Bay hotels, Beacon Hill inns, and South End boutique properties brand their in-room coffee experience with EZPZ custom bags." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Boston in 7 to 10 business days via tracked international courier. We deliver to all Boston neighborhoods including Back Bay, South End, Beacon Hill, Cambridge, Somerville, Brookline, and the greater Boston metro area. First orders take 2 to 3 weeks total. No import paperwork on your end.",
  relatedCities: [
    { city: "New York", href: "/en/custom-coffee-bags-new-york" },
    { city: "Philadelphia", href: "/en/custom-coffee-bags-philadelphia" },
  ],
};

const BostonPage = () => <CityPage data={data} />;
export default BostonPage;
