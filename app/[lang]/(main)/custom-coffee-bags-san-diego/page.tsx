import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags San Diego | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for San Diego businesses, shipped in 10–14 days. No minimum order, full design included. San Diego brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/custom-coffee-bags-san-diego" },
    openGraph: {
      title: "Custom Coffee Bags San Diego | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for San Diego businesses. No minimum order, full design included, specialty coffee shipped from Montreal.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-san-diego",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags San Diego" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags San Diego | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for San Diego businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "San Diego",
  province: "California",
  eyebrow: "Custom Coffee Bags — San Diego",
  headline: "Custom coffee bags for San Diego brands. Zero minimums.",
  subheadline: "San Diego's biotech sector, hospitality industry, and independent businesses trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From North Park's thriving independent restaurant and café scene to Little Italy's vibrant dining corridor, from the Gaslamp Quarter's hospitality hub to La Jolla's luxury hotels and biotech campuses — San Diego is a city where outdoor lifestyle meets world-class hospitality and innovation. EZPZ ships custom branded specialty coffee from our Montreal roastery to San Diego in 10 to 14 business days. No minimum order. Full design included.",
  deliveryTime: "10 to 14 business days",
  canonicalPath: "/custom-coffee-bags-san-diego",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to San Diego", body: "We ship directly to your San Diego address within 10 to 14 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Order one bag or a thousand — the quality and service are identical." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand identity — handled without additional fees." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. San Diego's quality-conscious consumers appreciate provenance — we deliver on it." },
    { n: "04", title: "Built for San Diego's biotech and hospitality sectors", body: "San Diego's Torrey Pines biotech corridor and world-class hotel and resort industry both benefit from premium branded coffee — EZPZ serves both with the same quality and design approach." },
  ],
  whoWeServe: [
    { title: "Restaurants & North Park Dining", body: "North Park restaurants, Little Italy dining destinations, and Hillcrest neighborhood spots use custom branded coffee to build a brand that extends into customers' morning routines." },
    { title: "Biotech & Life Sciences", body: "La Jolla and Torrey Pines biotech companies, pharma firms, and research institutions trust EZPZ for premium branded coffee gifts for clients, investors, and partners." },
    { title: "Hotels & Beach Resorts", body: "La Jolla luxury hotels, Mission Beach resorts, and Gaslamp boutique properties brand their in-room coffee experience with EZPZ custom bags." },
    { title: "Lifestyle & Surf Brands", body: "San Diego's outdoor and surf lifestyle brands — board shops, active wear labels, and beach-adjacent retailers — add custom branded coffee as a premium product that resonates with their active audience." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to San Diego in 10 to 14 business days via tracked international courier. We deliver to all San Diego areas including North Park, Little Italy, Gaslamp, La Jolla, Mission Beach, Pacific Beach, and surrounding communities. First orders take 3 to 4 weeks total. No import paperwork.",
  relatedCities: [
    { city: "Los Angeles", href: "/en/custom-coffee-bags-los-angeles" },
    { city: "Phoenix", href: "/en/custom-coffee-bags-phoenix" },
  ],
};

const SanDiegoPage = () => <CityPage data={data} />;
export default SanDiegoPage;
