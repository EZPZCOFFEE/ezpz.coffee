import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Atlanta | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Atlanta businesses, shipped in 7–10 days. No minimum order, full design included. Atlanta brands choose EZPZ for specialty branded coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-atlanta" },
    openGraph: {
      title: "Custom Coffee Bags Atlanta | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Atlanta businesses. No minimum order, full design included, specialty coffee shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-atlanta",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Atlanta" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Atlanta | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Atlanta businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Atlanta",
  province: "Georgia",
  eyebrow: "Custom Coffee Bags — Atlanta",
  headline: "Custom coffee bags for Atlanta brands. Zero minimums.",
  subheadline: "Atlanta's tech sector, film industry, and hospitality scene trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Inman Park's walkable restaurant scene to the Old Fourth Ward's tech startups and boutique hotels, from Midtown's corporate towers and arts institutions to Virginia-Highland's beloved neighborhood dining — Atlanta is a city with genuine cultural momentum and one of America's fastest-growing brand markets. EZPZ ships custom branded specialty coffee from our Montreal roastery to Atlanta in 7 to 10 business days. No minimum order.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-atlanta",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Atlanta", body: "We ship directly to your Atlanta address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Order one bag or a thousand — the quality and service are identical." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand identity — handled without additional fees." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Atlanta's fast-growing food and hospitality culture demands quality — we deliver it." },
    { n: "04", title: "Built for Atlanta's film and tech sectors", body: "Atlanta is America's No. 2 film production market and a major tech hub. Production companies, studios, and tech firms trust EZPZ for premium branded coffee gifts that land with impact." },
  ],
  whoWeServe: [
    { title: "Restaurants & Inman Park Dining", body: "Inman Park restaurants, Old Fourth Ward dining destinations, and Virginia-Highland neighborhood spots use custom branded coffee to keep their brand in customers' morning routines." },
    { title: "Film & Entertainment Industry", body: "Atlanta's booming film production companies, studios on the Eastside, and entertainment brands use EZPZ for premium branded coffee gifts for talent, crews, and partners." },
    { title: "Tech Companies & Midtown Offices", body: "Atlanta's growing tech sector — from Ponce City Market startups to Midtown corporate campuses — trusts EZPZ for premium branded coffee that impresses clients." },
    { title: "Hotels & Boutique Properties", body: "Midtown hotels, Old Fourth Ward boutique stays, and Buckhead luxury properties brand their in-room coffee experience with EZPZ custom bags." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Atlanta in 7 to 10 business days via tracked international courier. We deliver to all Atlanta areas including Inman Park, Old Fourth Ward, Midtown, Virginia-Highland, Buckhead, and the greater Atlanta metro. First orders take 2 to 3 weeks total. No import paperwork.",
  relatedCities: [
    { city: "Nashville", href: "/en/custom-coffee-bags-nashville" },
    { city: "Charlotte", href: "/en/custom-coffee-bags-charlotte" },
  ],
};

const AtlantaPage = () => <CityPage data={data} />;
export default AtlantaPage;
