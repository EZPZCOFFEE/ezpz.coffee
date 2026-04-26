import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Minneapolis | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Minneapolis businesses, shipped in 7–10 days. No minimum order, full design included. Minneapolis brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/custom-coffee-bags-minneapolis" },
    openGraph: {
      title: "Custom Coffee Bags Minneapolis | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Minneapolis businesses. No minimum order, full design included, specialty coffee shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-minneapolis",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Minneapolis" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Minneapolis | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Minneapolis businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Minneapolis",
  province: "Minnesota",
  eyebrow: "Custom Coffee Bags — Minneapolis",
  headline: "Custom coffee bags for Minneapolis brands. Zero minimums.",
  subheadline: "Minneapolis's tech sector, independent retailers, and restaurants trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From the North Loop's design studios and upscale restaurants to Uptown's independent shops and neighborhood cafés, from Northeast Minneapolis's thriving arts district to the Mall of America-adjacent retail ecosystem in Bloomington — Minneapolis is one of America's most livable and commercially sophisticated mid-size cities. EZPZ ships custom branded specialty coffee from our Montreal roastery to Minneapolis in 7 to 10 business days. No minimum order.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-minneapolis",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Minneapolis", body: "We ship directly to your Minneapolis address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Order one bag or a thousand — the quality and service are identical." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand identity — handled without additional fees." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Minneapolis's discerning consumer base appreciates quality — we deliver it." },
    { n: "04", title: "Built for Minneapolis's retail and tech sectors", body: "Target HQ, Best Buy, and dozens of Minneapolis-based companies create a strong corporate gifting culture. EZPZ delivers premium branded coffee that works as a client gift at every level." },
  ],
  whoWeServe: [
    { title: "Restaurants & North Loop Dining", body: "North Loop restaurants, Uptown neighborhood spots, and Northeast Minneapolis dining destinations add custom branded coffee that keeps their brand visible in customers' daily routines." },
    { title: "Tech & Corporate Sector", body: "Minneapolis's Fortune 500 companies — Target, Best Buy, UnitedHealth — and their supplier networks trust EZPZ for premium branded coffee gifts that make a lasting impression." },
    { title: "Retailers & Independent Boutiques", body: "Uptown boutiques, Northeast Minneapolis concept stores, and Mall of America-area specialty retailers add custom branded coffee as a differentiated, high-margin product." },
    { title: "Hotels & Boutique Properties", body: "Downtown Minneapolis hotels, North Loop boutique stays, and Uptown guesthouses brand their in-room coffee experience with EZPZ custom bags." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Minneapolis in 7 to 10 business days via tracked international courier. We deliver to all Minneapolis areas including North Loop, Uptown, Northeast, Downtown, and the greater Twin Cities metro including Saint Paul, Bloomington, and Eden Prairie. First orders take 2 to 3 weeks total. No import paperwork.",
  relatedCities: [
    { city: "Chicago", href: "/en/custom-coffee-bags-chicago" },
    { city: "Detroit", href: "/en/custom-coffee-bags-detroit" },
  ],
};

const MinneapolisPage = () => <CityPage data={data} />;
export default MinneapolisPage;
