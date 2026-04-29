import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Quebec City | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Quebec City businesses, shipped in 7–10 days. No minimum order, full design included. Quebec City brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-quebec-city" },
    openGraph: {
      title: "Custom Coffee Bags Quebec City | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Quebec City businesses. No minimum order, full design included, shipped from Montreal.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-quebec-city",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Quebec City" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Quebec City | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Quebec City businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Quebec City",
  province: "Quebec",
  eyebrow: "Custom Coffee Bags — Quebec City",
  headline: "Custom coffee bags for Quebec City brands. Zero minimums.",
  subheadline: "Quebec City's historic hotels, tourism operators, and restaurants trust EZPZ to put their brand on specialty coffee — no minimums, full design included.",
  bodyIntro:
    "From the cobblestone streets of Vieux-Québec to the restaurant-lined corridors of Saint-Roch, from the Montcalm neighbourhood's boutique hotels to the historic properties overlooking the Plains of Abraham — Quebec City businesses operate at the intersection of history, tourism, and world-class hospitality. EZPZ ships custom branded specialty coffee from our Montreal roastery to Quebec City in 7 to 10 business days. No minimum order. Full custom design included.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-quebec-city",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your property name or brand message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Quebec City", body: "We ship directly to your Quebec City address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Test before you scale." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Every bag is roasted fresh in Montreal." },
    { n: "04", title: "Built for Quebec City's tourism industry", body: "From historic inns in Vieux-Québec to government event venues near the Assemblée nationale — EZPZ understands the unique hospitality market of Quebec City." },
  ],
  whoWeServe: [
    { title: "Historic Hotels & Inns", body: "Château Frontenac-area properties, Vieux-Québec boutique inns, and Montcalm hotels brand every guest touchpoint with custom EZPZ coffee." },
    { title: "Restaurants & Bistros", body: "Saint-Roch dining destinations and Old City restaurants offer custom branded coffee that extends the guest experience into the home." },
    { title: "Government & Corporate Sector", body: "Quebec City's government offices, embassies, and National Assembly-area organizations use branded coffee as a premium corporate gift." },
    { title: "Tourism & Experience Operators", body: "Tour companies, cultural venues, and Plains of Abraham area experiences use custom coffee as a takeaway that keeps their brand top of mind." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Quebec City in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Quebec City neighbourhoods including Vieux-Québec, Saint-Roch, Montcalm, Limoilou, and Sainte-Foy. First orders take 2 to 3 weeks total from design approval. Repeat orders are faster since your design is already on file.",
  relatedCities: [
    { city: "Montreal", href: "/en/custom-coffee-bags-montreal" },
    { city: "Gatineau", href: "/en/custom-coffee-bags-gatineau" },
  ],
};

const QuebecCityPage = () => <CityPage data={data} />;
export default QuebecCityPage;
