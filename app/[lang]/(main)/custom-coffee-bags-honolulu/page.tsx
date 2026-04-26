import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Honolulu | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Honolulu businesses, shipped in 14–21 days. No minimum order, full design included. Honolulu brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/custom-coffee-bags-honolulu" },
    openGraph: {
      title: "Custom Coffee Bags Honolulu | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Honolulu businesses. No minimum order, full design included, specialty coffee shipped from Montreal in 14–21 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-honolulu",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Honolulu" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Honolulu | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Honolulu businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Honolulu",
  province: "Hawaii",
  eyebrow: "Custom Coffee Bags — Honolulu",
  headline: "Custom coffee bags for Honolulu brands. Zero minimums.",
  subheadline: "Honolulu's luxury hotels, tourism operators, and independent businesses trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Waikiki's world-famous luxury resort strip to Kaimuki's thriving neighborhood restaurant scene, from Chinatown's galleries and artisan studios to the boutique hotels and surf culture of the North Shore — Honolulu is a city with a sophisticated, globally-aware consumer culture that takes quality seriously. Hawaii is also home to some of the world's most prized coffee, and Honolulu businesses understand that premium coffee is a meaningful brand statement. EZPZ ships custom branded specialty coffee from our Montreal roastery to Honolulu in 14 to 21 business days. No minimum order. Full design always included.",
  deliveryTime: "14 to 21 business days",
  canonicalPath: "/custom-coffee-bags-honolulu",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more. We complement Hawaii's own coffee heritage with world-class origins." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Honolulu", body: "We ship directly to your Honolulu address within 14 to 21 business days from order confirmation. Fully tracked across the Pacific." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Perfect for boutique Honolulu businesses and large resort properties alike." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand identity — handled without additional fees, wherever you are in the Pacific." },
    { n: "03", title: "Specialty grade coffee for a coffee-literate market", body: "Hawaii's coffee culture is among the most sophisticated in the US. We source only 80+ SCA specialty grade coffees from traceable global origins — quality that earns the respect of Honolulu's discerning consumers." },
    { n: "04", title: "Built for Honolulu's luxury tourism and resort sector", body: "Waikiki's luxury resort corridor welcomes millions of visitors each year. EZPZ branded coffee is the kind of premium take-home gift that travels back to the mainland — and keeps your brand top of mind long after checkout." },
  ],
  whoWeServe: [
    { title: "Luxury Hotels & Waikiki Resorts", body: "Waikiki's five-star resort properties, boutique hotels in Kaimuki and Manoa, and North Shore surf lodges use EZPZ custom coffee to brand their in-room experience and VIP hospitality." },
    { title: "Restaurants & Kaimuki Dining", body: "Kaimuki's acclaimed neighborhood restaurants, Chinatown dining destinations, and Honolulu's farm-to-table scene use custom branded coffee as a premium gift that travels home with guests." },
    { title: "Tourism & Experience Operators", body: "Honolulu tour companies, cultural experience operators, and hospitality brands use EZPZ custom coffee as a premium branded souvenir that captures the spirit of Hawaii in a meaningful, practical form." },
    { title: "Lifestyle & Surf Brands", body: "Honolulu's surf brands, wellness businesses, and outdoor lifestyle retailers add custom branded coffee as a product that resonates deeply with their active, quality-conscious audience." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Honolulu in 14 to 21 business days via tracked international courier. We deliver to all Honolulu areas including Waikiki, Kaimuki, Chinatown, Downtown, Manoa, and the broader Oahu market. We recommend ordering 4 to 6 weeks in advance for time-sensitive events. First orders take 3 to 5 weeks total. No import paperwork.",
  relatedCities: [
    { city: "Los Angeles", href: "/en/custom-coffee-bags-los-angeles" },
    { city: "San Francisco", href: "/en/custom-coffee-bags-san-francisco" },
  ],
};

const HonoluluPage = () => <CityPage data={data} />;
export default HonoluluPage;
