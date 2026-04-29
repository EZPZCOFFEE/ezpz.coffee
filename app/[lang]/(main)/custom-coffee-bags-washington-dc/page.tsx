import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Washington DC | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Washington DC businesses, shipped in 7–10 days. No minimum order, full design included. DC brands choose EZPZ for specialty branded coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-washington-dc" },
    openGraph: {
      title: "Custom Coffee Bags Washington DC | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Washington DC businesses. No minimum order, full design included, specialty coffee shipped from Montreal.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-washington-dc",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Washington DC" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Washington DC | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Washington DC businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Washington DC",
  province: "DC",
  eyebrow: "Custom Coffee Bags — Washington DC",
  headline: "Custom coffee bags for Washington DC brands. Zero minimums.",
  subheadline: "DC's government agencies, embassies, lobbying firms, and restaurants trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Dupont Circle's neighborhood restaurants and embassy receptions to Georgetown's luxury boutiques and high-end hospitality, from Capitol Hill's policy offices and think tanks to Shaw's vibrant restaurant and bar scene — Washington DC is a city where professional polish and presentation are a baseline expectation. EZPZ ships custom branded specialty coffee from our Montreal roastery to Washington DC in 7 to 10 business days. No minimum order.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-washington-dc",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Washington DC", body: "We ship directly to your DC address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Order any quantity — from a small embassy reception gift to a large agency rollout." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand identity — handled without additional fees." },
    { n: "03", title: "Specialty grade coffee worthy of DC's standards", body: "DC's professional class holds everything to a high standard. We source only 80+ SCA specialty grade coffees from traceable origins — our quality matches those expectations." },
    { n: "04", title: "Built for DC's government and embassy gifting culture", body: "Embassies, lobbying firms, think tanks, and government agencies in Washington DC trust EZPZ for premium branded coffee gifts that convey professionalism and quality at every level." },
  ],
  whoWeServe: [
    { title: "Government Offices & Think Tanks", body: "Capitol Hill offices, K Street lobbying firms, and policy institutes use EZPZ for premium branded coffee gifts that make a memorable impression on colleagues and stakeholders." },
    { title: "Embassies & Diplomatic Community", body: "Washington DC's embassy row and diplomatic community uses custom branded coffee as a sophisticated, internationally appreciated gift that transcends cultural boundaries." },
    { title: "Restaurants & Shaw Dining", body: "Shaw restaurants, Dupont Circle bistros, and Georgetown dining destinations add custom branded coffee that extends their brand identity into customers' daily routines." },
    { title: "Hotels & Georgetown Properties", body: "Georgetown luxury hotels, Dupont Circle boutique stays, and Penn Quarter properties brand their in-room coffee experience with EZPZ custom bags." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Washington DC in 7 to 10 business days via tracked international courier. We deliver to all DC areas including Dupont Circle, Georgetown, Capitol Hill, Shaw, Adams Morgan, and surrounding Virginia and Maryland suburbs. First orders take 2 to 3 weeks total. No import paperwork.",
  relatedCities: [
    { city: "Philadelphia", href: "/en/custom-coffee-bags-philadelphia" },
    { city: "New York", href: "/en/custom-coffee-bags-new-york" },
  ],
};

const WashingtonDCPage = () => <CityPage data={data} />;
export default WashingtonDCPage;
