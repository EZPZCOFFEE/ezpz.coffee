import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Philadelphia | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Philadelphia businesses, shipped in 7–10 days. No minimum order, full design included. Philadelphia brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-philadelphia" },
    openGraph: {
      title: "Custom Coffee Bags Philadelphia | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Philadelphia businesses. No minimum order, full design included, specialty coffee shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-philadelphia",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Philadelphia" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Philadelphia | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Philadelphia businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Philadelphia",
  province: "Pennsylvania",
  eyebrow: "Custom Coffee Bags — Philadelphia",
  headline: "Custom coffee bags for Philadelphia brands. Zero minimums.",
  subheadline: "Philadelphia's restaurants, universities, and hospitality sector trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Old City's historic restaurants and boutiques to Fishtown's indie music venues and chef-driven dining, from Northern Liberties' art galleries and concept stores to South Philly's legendary food culture — Philadelphia is a city of passionate local pride and genuine culinary excellence. EZPZ ships custom branded specialty coffee from our Montreal roastery to Philadelphia in 7 to 10 business days. No minimum order. Full design included.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-philadelphia",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Philadelphia", body: "We ship directly to your Philadelphia address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Philly's independent business culture thrives on quality and authenticity — so does ours." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand identity — handled without additional fees." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Philadelphia's food-obsessed culture demands the best — we deliver it." },
    { n: "04", title: "Built for Philadelphia's university and hospitality sectors", body: "Penn, Drexel, Temple, and dozens of other Philadelphia universities create a large institutional gifting market. EZPZ delivers branded coffee that works for academic and corporate audiences alike." },
  ],
  whoWeServe: [
    { title: "Restaurants & Fishtown Dining", body: "Fishtown restaurants, Old City dining destinations, and Northern Liberties neighborhood spots use custom branded coffee to extend the Philadelphia dining experience into customers' homes." },
    { title: "Universities & Academic Institutions", body: "University City cafés, Penn and Drexel campus businesses, and academic gift shops use EZPZ custom coffee to build brand recognition among Philadelphia's large student population." },
    { title: "Hotels & Center City Properties", body: "Center City hotels, Old City boutique stays, and Rittenhouse Square properties brand their in-room coffee experience with EZPZ custom bags." },
    { title: "Retailers & Concept Stores", body: "Fishtown boutiques, Northern Liberties concept stores, and South Philly specialty retailers add custom branded coffee as a high-margin product their loyal customers love." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Philadelphia in 7 to 10 business days via tracked international courier. We deliver to all Philadelphia neighborhoods including Old City, Fishtown, Northern Liberties, South Philly, Rittenhouse, University City, and surrounding areas. First orders take 2 to 3 weeks total. No import paperwork.",
  relatedCities: [
    { city: "New York", href: "/en/custom-coffee-bags-new-york" },
    { city: "Washington DC", href: "/en/custom-coffee-bags-washington-dc" },
  ],
};

const PhiladelphiaPage = () => <CityPage data={data} />;
export default PhiladelphiaPage;
