import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Tampa | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Tampa businesses, shipped in 7–10 days. No minimum order, full design included. Tampa brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/custom-coffee-bags-tampa" },
    openGraph: {
      title: "Custom Coffee Bags Tampa | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Tampa businesses. No minimum order, full design included, specialty coffee shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-tampa",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Tampa" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Tampa | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Tampa businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Tampa",
  province: "Florida",
  eyebrow: "Custom Coffee Bags — Tampa",
  headline: "Custom coffee bags for Tampa brands. Zero minimums.",
  subheadline: "Tampa's tech sector, hospitality industry, and growing restaurant scene trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Ybor City's historic brick streets and vibrant restaurant scene to the Channel District's waterfront bars and hotel developments, from Hyde Park's upscale boutiques and neighborhood dining to the rapidly growing tech campus ecosystem of downtown Tampa — the Bay Area is experiencing one of the most dynamic growth periods in Florida's history. Tampa's mix of hospitality heritage, expanding corporate investment, and an outdoor-oriented lifestyle creates genuine demand for premium branded products. EZPZ ships custom branded specialty coffee from our Montreal roastery to Tampa in 7 to 10 business days. No minimum order.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-tampa",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Tampa", body: "We ship directly to your Tampa address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Order one bag or a thousand — the quality and service are identical." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand identity — handled without additional fees." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Tampa's growing specialty coffee scene and hospitality standards demand quality — we deliver it." },
    { n: "04", title: "Built for Tampa's hospitality and tech sectors", body: "Tampa's booming downtown tech scene and its well-established hospitality industry both benefit from premium branded coffee. EZPZ serves hotels, restaurants, and corporate clients with the same quality." },
  ],
  whoWeServe: [
    { title: "Restaurants & Ybor City Dining", body: "Ybor City restaurants, Hyde Park dining destinations, and Channel District spots use custom branded coffee to extend their brand into customers' everyday routines." },
    { title: "Hotels & Waterfront Properties", body: "Channel District waterfront hotels, Downtown Tampa boutique stays, and Hyde Park guesthouses brand their in-room coffee experience with EZPZ custom bags." },
    { title: "Tech & Corporate Sector", body: "Tampa's growing technology companies, financial services firms, and corporate campuses trust EZPZ for premium branded coffee gifts for clients, recruiting events, and office culture." },
    { title: "Retailers & Hyde Park Boutiques", body: "Hyde Park Village boutiques, South Tampa specialty stores, and Ybor City independent retailers add custom branded coffee as a high-margin product their customers genuinely appreciate." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Tampa in 7 to 10 business days via tracked international courier. We deliver to all Tampa areas including Ybor City, Channel District, Hyde Park, Downtown, and the broader Bay Area including St. Petersburg, Clearwater, and Brandon. First orders take 2 to 3 weeks total. No import paperwork.",
  relatedCities: [
    { city: "Miami", href: "/en/custom-coffee-bags-miami" },
    { city: "Atlanta", href: "/en/custom-coffee-bags-atlanta" },
  ],
};

const TampaPage = () => <CityPage data={data} />;
export default TampaPage;
