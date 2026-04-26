import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Nashville | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Nashville businesses, shipped in 7–10 days. No minimum order, full design included. Nashville brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/custom-coffee-bags-nashville" },
    openGraph: {
      title: "Custom Coffee Bags Nashville | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Nashville businesses. No minimum order, full design included, specialty coffee shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-nashville",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Nashville" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Nashville | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Nashville businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Nashville",
  province: "Tennessee",
  eyebrow: "Custom Coffee Bags — Nashville",
  headline: "Custom coffee bags for Nashville brands. Zero minimums.",
  subheadline: "Nashville's music industry, booming hospitality sector, and corporate community trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From The Gulch's upscale restaurants and boutique hotels to East Nashville's indie music venues and creative businesses, from 12 South's beloved neighborhood shops to Germantown's culinary destination restaurants — Nashville is one of America's most exciting brand markets. The music capital's influence on lifestyle, hospitality, and entertainment makes a custom branded coffee bag from EZPZ a natural fit for businesses here. We ship from Montreal to Nashville in 7 to 10 business days.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-nashville",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Nashville", body: "We ship directly to your Nashville address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums — perfect for Nashville's event culture", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Launch a batch for a brand event, a CMA sponsorship, or a hotel opening — no commitment required." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand aesthetic — handled without additional fees." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Nashville's growing food-and-beverage culture demands quality — we deliver it." },
    { n: "04", title: "Built for Nashville's hospitality boom", body: "Nashville's hotel boom, bachelorette-party economy, and growing corporate convention sector create enormous demand for premium branded experiences — including coffee." },
  ],
  whoWeServe: [
    { title: "Restaurants & The Gulch Dining", body: "The Gulch fine dining, Germantown culinary destinations, and East Nashville neighborhood restaurants add custom branded coffee that extends the Nashville dining experience into guests' homes." },
    { title: "Hotels & Boutique Properties", body: "Broadway boutique hotels, The Gulch luxury stays, and 12 South-area properties brand their in-room coffee experience with EZPZ to stand out in Nashville's crowded hospitality market." },
    { title: "Music Industry & Entertainment", body: "Record labels, artist management companies, live music venues, and entertainment brands use EZPZ coffee as a premium branded gift for talent, partners, and VIP guests." },
    { title: "Corporate Gifting & Events", body: "Nashville's growing convention business, healthcare companies, and corporate sector trust EZPZ for premium branded coffee that impresses clients and conference attendees." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Nashville in 7 to 10 business days via tracked international courier. We deliver to all Nashville areas including The Gulch, East Nashville, Germantown, 12 South, Downtown, Midtown, and surrounding suburbs. First orders take 2 to 3 weeks total. No import paperwork.",
  relatedCities: [
    { city: "Atlanta", href: "/en/custom-coffee-bags-atlanta" },
    { city: "Charlotte", href: "/en/custom-coffee-bags-charlotte" },
  ],
};

const NashvillePage = () => <CityPage data={data} />;
export default NashvillePage;
