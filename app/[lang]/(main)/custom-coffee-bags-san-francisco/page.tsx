import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags San Francisco | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for San Francisco businesses, shipped in 10–14 days. No minimum order, full design included. SF brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-san-francisco" },
    openGraph: {
      title: "Custom Coffee Bags San Francisco | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for San Francisco businesses. No minimum order, full design included, specialty coffee shipped from Montreal.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-san-francisco",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags San Francisco" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags San Francisco | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for San Francisco businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "San Francisco",
  province: "California",
  eyebrow: "Custom Coffee Bags — San Francisco",
  headline: "Custom coffee bags for San Francisco brands. Zero minimums.",
  subheadline: "SF's tech companies, restaurants, and specialty cafés trust EZPZ for branded specialty coffee — no minimums, full design included.",
  bodyIntro:
    "From Mission District taquerias-turned-brunch-spots to SoMa tech campuses, from North Beach's historic literary cafés to the Castro's independent boutiques — San Francisco is the birthplace of the third-wave specialty coffee movement, which makes a custom branded specialty coffee bag from EZPZ both a natural fit and a meaningful statement. We ship from Montreal to San Francisco in 10 to 14 business days. No minimum order. Full design included.",
  deliveryTime: "10 to 14 business days",
  canonicalPath: "/custom-coffee-bags-san-francisco",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to San Francisco", body: "We ship directly to your SF address within 10 to 14 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Order one bag or a thousand — the quality and service are identical." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand identity — handled without additional fees." },
    { n: "03", title: "Specialty grade that holds up in SF", body: "San Francisco invented the third-wave specialty coffee movement. We source only 80+ SCA coffees from traceable origins — our quality benchmarks to the highest in the world." },
    { n: "04", title: "Built for tech company gifting", body: "SoMa startups, Salesforce Tower tenants, and Mission Bay biotech companies use EZPZ for premium branded coffee gifts that resonate with San Francisco's quality-obsessed professional culture." },
  ],
  whoWeServe: [
    { title: "Restaurants & Mission District", body: "Mission District restaurants, North Beach trattorias, and Hayes Valley dining destinations use custom branded coffee to create a take-home experience that keeps their brand visible." },
    { title: "Tech Companies & Startups", body: "SoMa tech companies, Mission Bay biotech firms, and Bay Area startups trust EZPZ for premium branded coffee gifts for clients, investors, and team milestones." },
    { title: "Specialty Cafés & Coffee Bars", body: "SF's world-renowned specialty café scene sells and gifts custom branded coffee from EZPZ — a retail product that carries the café's identity into customers' morning routines." },
    { title: "Hotels & Boutique Properties", body: "Union Square hotels, Nob Hill boutique stays, and design-forward SoMa properties brand their in-room coffee experience with EZPZ custom bags." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to San Francisco in 10 to 14 business days via tracked international courier. We deliver to all SF neighborhoods including Mission District, SoMa, North Beach, Castro, Hayes Valley, and the greater Bay Area. First orders take 3 to 4 weeks total from design approval. No import paperwork on your end.",
  relatedCities: [
    { city: "Los Angeles", href: "/en/custom-coffee-bags-los-angeles" },
    { city: "Seattle", href: "/en/custom-coffee-bags-seattle" },
  ],
};

const SanFranciscoPage = () => <CityPage data={data} />;
export default SanFranciscoPage;
