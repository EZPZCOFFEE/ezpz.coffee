import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Austin | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Austin businesses, shipped in 7–10 days. No minimum order, full design included. Austin brands choose EZPZ for specialty branded coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-austin" },
    openGraph: {
      title: "Custom Coffee Bags Austin | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Austin businesses. No minimum order, full design included, specialty coffee shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-austin",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Austin" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Austin | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Austin businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Austin",
  province: "Texas",
  eyebrow: "Custom Coffee Bags — Austin",
  headline: "Custom coffee bags for Austin brands. Zero minimums.",
  subheadline: "Austin's tech sector, music industry, and booming hospitality scene trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From South Congress Avenue's iconic boutiques and restaurant strip to East Austin's creative hotbed, from Rainey Street's bar and hospitality corridor to the Domain's tech campus cluster — Austin is one of America's fastest-growing brand markets. EZPZ ships custom branded specialty coffee from our Montreal roastery to Austin in 7 to 10 business days. Keep Austin weird — and well-branded. No minimum order. Full design included.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-austin",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Austin", body: "We ship directly to your Austin address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums — built for Austin's fast-moving market", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Launch a batch for SXSW, ACL, or any occasion without volume commitment." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand identity — handled without additional fees." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Austin's quality-conscious creative and tech community appreciates provenance." },
    { n: "04", title: "Built for Austin's tech and music sectors", body: "From Dell Technologies to Bumble to the Stubb's Amphitheater — Austin's tech and entertainment industries trust premium branded products as gifts and experiences." },
  ],
  whoWeServe: [
    { title: "Restaurants & South Congress", body: "South Congress restaurants, East Austin brunch spots, and Rainey Street bars use custom branded coffee to build a brand identity that extends beyond the dining experience." },
    { title: "Tech Companies & Startups", body: "The Domain's tech campuses, downtown Austin startups, and SXSW-adjacent companies use EZPZ for premium branded coffee that works as a gift, office staple, and event giveaway." },
    { title: "Music & Entertainment Industry", body: "Austin's storied music scene — record labels, live venues, artist management companies — uses branded coffee as a creative, memorable gift for talent and partners." },
    { title: "Hotels & Hospitality", body: "Rainey Street boutique hotels, South Congress-area properties, and downtown Austin hospitality venues brand their guest coffee experience with EZPZ custom bags." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Austin in 7 to 10 business days via tracked international courier. We deliver to all Austin neighborhoods including South Congress, East Austin, Rainey Street, Domain, Downtown, and the greater Austin metro. First orders take 2 to 3 weeks total. No import paperwork on your end.",
  relatedCities: [
    { city: "Houston", href: "/en/custom-coffee-bags-houston" },
    { city: "Dallas", href: "/en/custom-coffee-bags-dallas" },
  ],
};

const AustinPage = () => <CityPage data={data} />;
export default AustinPage;
