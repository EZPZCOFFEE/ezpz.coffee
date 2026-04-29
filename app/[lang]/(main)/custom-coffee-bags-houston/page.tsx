import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Houston | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Houston businesses, shipped in 7–10 days. No minimum order, full design included. Houston brands choose EZPZ for specialty branded coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-houston" },
    openGraph: {
      title: "Custom Coffee Bags Houston | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Houston businesses. No minimum order, full design included, specialty coffee shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-houston",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Houston" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Houston | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Houston businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Houston",
  province: "Texas",
  eyebrow: "Custom Coffee Bags — Houston",
  headline: "Custom coffee bags for Houston brands. Zero minimums.",
  subheadline: "Houston's energy sector, diverse restaurant scene, and corporate community trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Montrose's eclectic restaurants and galleries to The Heights' boutique shops and breweries, from Midtown's bar and dining corridor to River Oaks' luxury shopping and hospitality — Houston is America's most diverse city and one of its most dynamic brand markets. EZPZ ships custom branded specialty coffee from our Montreal roastery to Houston in 7 to 10 business days. No minimum order. Full custom design included.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-houston",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Houston", body: "We ship directly to your Houston address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Order one bag or a thousand — the quality and service are identical." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand identity — handled without additional fees." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Houston's diverse, quality-conscious food culture appreciates our approach." },
    { n: "04", title: "Built for Houston's energy sector gifting", body: "ExxonMobil, Shell, Halliburton, and hundreds of Houston energy companies create a robust corporate gifting market. EZPZ delivers branded specialty coffee that impresses at every level." },
  ],
  whoWeServe: [
    { title: "Restaurants & Diverse Food Scene", body: "Montrose restaurants, The Heights brunch spots, and Midtown dining destinations use custom branded coffee to add a premium touchpoint that guests take home." },
    { title: "Energy & Corporate Sector", body: "Houston's oil and gas majors, energy services companies, and downtown professional firms use EZPZ for premium branded coffee gifts that stand out in a competitive gifting culture." },
    { title: "Hotels & Luxury Properties", body: "River Oaks hotels, Medical Center-adjacent properties, and Galleria boutique stays brand their in-room coffee experience with EZPZ custom bags." },
    { title: "Retailers & Heights Boutiques", body: "The Heights boutiques, Montrose lifestyle shops, and Rice Village retailers add custom branded coffee as a high-margin product their quality-conscious customers love." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Houston in 7 to 10 business days via tracked international courier. We deliver to all Houston areas including Montrose, The Heights, Midtown, River Oaks, Galleria, Medical Center, Downtown, and surrounding suburbs. First orders take 2 to 3 weeks total. No import paperwork.",
  relatedCities: [
    { city: "Austin", href: "/en/custom-coffee-bags-austin" },
    { city: "Dallas", href: "/en/custom-coffee-bags-dallas" },
  ],
};

const HoustonPage = () => <CityPage data={data} />;
export default HoustonPage;
