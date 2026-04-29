import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Dallas | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Dallas businesses, shipped in 7–10 days. No minimum order, full design included. Dallas brands choose EZPZ for specialty branded coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-dallas" },
    openGraph: {
      title: "Custom Coffee Bags Dallas | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Dallas businesses. No minimum order, full design included, specialty coffee shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-dallas",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Dallas" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Dallas | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Dallas businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Dallas",
  province: "Texas",
  eyebrow: "Custom Coffee Bags — Dallas",
  headline: "Custom coffee bags for Dallas brands. Zero minimums.",
  subheadline: "Dallas's corporate sector, restaurants, and hospitality scene trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Deep Ellum's vibrant music and dining scene to Uptown's polished restaurant and hotel corridor, from the Design District's showrooms and galleries to the corporate towers of downtown Dallas — this is a city where impression and presentation matter enormously. EZPZ ships custom branded specialty coffee from our Montreal roastery to Dallas in 7 to 10 business days. No minimum order. Full custom design always included.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-dallas",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Dallas", body: "We ship directly to your Dallas address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Order one bag or a thousand — the quality is identical." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand identity — handled without additional fees." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Every bag is roasted fresh in Montreal to order." },
    { n: "04", title: "Built for Dallas's corporate gifting culture", body: "Dallas's Fortune 500 companies, law firms, and commercial real estate sector make branded specialty coffee one of the most effective and memorable corporate gifts you can give clients." },
  ],
  whoWeServe: [
    { title: "Restaurants & Deep Ellum Dining", body: "Deep Ellum restaurants, Uptown fine dining, and Bishop Arts District neighborhood spots use custom branded coffee to build a brand that goes home with every satisfied guest." },
    { title: "Corporate Offices & Professional Services", body: "Downtown Dallas law firms, Uptown financial offices, and Plano corporate headquarters trust EZPZ for premium branded coffee gifts that make a strong impression." },
    { title: "Hotels & Uptown Properties", body: "Uptown Dallas hotels, Design District boutique stays, and Arts District adjacent properties brand their guest coffee experience with EZPZ custom bags." },
    { title: "Retailers & Design District", body: "Dallas Design District showrooms, Knox-Henderson boutiques, and Uptown lifestyle retailers add custom branded coffee as a premium product that resonates with their design-conscious clientele." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Dallas in 7 to 10 business days via tracked international courier. We deliver to all Dallas areas including Downtown, Deep Ellum, Uptown, Design District, Knox-Henderson, and the greater DFW metro including Plano, Frisco, and Irving. First orders take 2 to 3 weeks total. No import paperwork.",
  relatedCities: [
    { city: "Austin", href: "/en/custom-coffee-bags-austin" },
    { city: "Houston", href: "/en/custom-coffee-bags-houston" },
  ],
};

const DallasPage = () => <CityPage data={data} />;
export default DallasPage;
