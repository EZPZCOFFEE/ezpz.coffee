import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Phoenix | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Phoenix businesses, shipped in 10–14 days. No minimum order, full design included. Phoenix and Scottsdale brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-phoenix" },
    openGraph: {
      title: "Custom Coffee Bags Phoenix | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Phoenix businesses. No minimum order, full design included, specialty coffee shipped from Montreal.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-phoenix",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Phoenix" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Phoenix | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Phoenix businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Phoenix",
  province: "Arizona",
  eyebrow: "Custom Coffee Bags — Phoenix",
  headline: "Custom coffee bags for Phoenix brands. Zero minimums.",
  subheadline: "Phoenix and Scottsdale's tech sector, luxury hotels, and restaurants trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Downtown Phoenix's rapidly transforming Roosevelt Row arts district to Scottsdale's luxury resort corridor, from Tempe's university energy to the corporate campuses of North Phoenix — the Greater Phoenix area is one of America's fastest-growing business markets. EZPZ ships custom branded specialty coffee from our Montreal roastery to Phoenix in 10 to 14 business days. No minimum order. Full custom design included.",
  deliveryTime: "10 to 14 business days",
  canonicalPath: "/custom-coffee-bags-phoenix",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Phoenix", body: "We ship directly to your Phoenix area address within 10 to 14 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Order one bag or a thousand — the quality is identical." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand identity — handled without additional fees." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Phoenix's luxury hospitality sector demands quality — our coffee delivers it." },
    { n: "04", title: "Built for Scottsdale's luxury resort market", body: "Scottsdale's world-class resort corridor — Camelback, Gainey Ranch, Old Town — creates enormous demand for premium branded experiences. EZPZ custom coffee is exactly that." },
  ],
  whoWeServe: [
    { title: "Luxury Hotels & Scottsdale Resorts", body: "Scottsdale resorts, Camelback Mountain hotels, and Downtown Phoenix boutique stays brand their in-room and lobby coffee with EZPZ to deliver a premium, memorable guest experience." },
    { title: "Restaurants & Roosevelt Row", body: "Downtown Phoenix restaurants, Old Town Scottsdale dining, and Arcadia neighborhood spots add custom branded coffee that keeps their brand visible in customers' daily routines." },
    { title: "Tech Companies & Corporate Campuses", body: "North Phoenix tech parks, Tempe tech campuses, and Scottsdale corporate offices trust EZPZ for premium branded coffee gifts that impress clients." },
    { title: "Corporate Events & Hospitality", body: "Phoenix's booming convention and event sector — from the Phoenix Convention Center to Scottsdale's resort conference facilities — uses EZPZ for branded event coffee experiences." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Phoenix in 10 to 14 business days via tracked international courier. We deliver to all Phoenix metro areas including Downtown, Roosevelt Row, Scottsdale, Tempe, Mesa, Chandler, Glendale, and Peoria. First orders take 3 to 4 weeks total. No import paperwork.",
  relatedCities: [
    { city: "Las Vegas", href: "/en/custom-coffee-bags-las-vegas" },
    { city: "Los Angeles", href: "/en/custom-coffee-bags-los-angeles" },
  ],
};

const PhoenixPage = () => <CityPage data={data} />;
export default PhoenixPage;
