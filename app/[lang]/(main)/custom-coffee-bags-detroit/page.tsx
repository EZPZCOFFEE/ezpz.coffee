import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Detroit | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Detroit businesses, shipped in 7–10 days. No minimum order, full design included. Detroit brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-detroit" },
    openGraph: {
      title: "Custom Coffee Bags Detroit | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Detroit businesses. No minimum order, full design included, specialty coffee shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-detroit",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Detroit" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Detroit | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Detroit businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Detroit",
  province: "Michigan",
  eyebrow: "Custom Coffee Bags — Detroit",
  headline: "Custom coffee bags for Detroit brands. Zero minimums.",
  subheadline: "Detroit's automotive sector, tech resurgence, and independent restaurant scene trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Midtown's galleries and James Beard-recognized restaurants to Corktown's thriving independent dining and creative studios, from Eastern Market's weekend vendors and food entrepreneurs to the Detroit Riverfront's revitalized hospitality scene — Detroit is one of America's most exciting urban comeback stories. The Motor City's blend of automotive heritage, tech investment, and a fiercely independent creative economy creates real demand for premium branded products. EZPZ ships custom branded specialty coffee from our Montreal roastery to Detroit in 7 to 10 business days. No minimum order.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-detroit",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Detroit", body: "We ship directly to your Detroit address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Order one bag or a thousand — the quality and service are identical." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand identity — handled without additional fees." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Detroit's growing specialty coffee culture and discerning restaurant scene demand quality — we deliver it." },
    { n: "04", title: "Built for Detroit's automotive and corporate gifting culture", body: "Detroit's Big Three and their vast supplier networks, alongside tech companies moving into the city, create strong demand for premium corporate gifts. EZPZ branded coffee makes the right impression." },
  ],
  whoWeServe: [
    { title: "Restaurants & Midtown Dining", body: "Midtown restaurants, Corktown dining destinations, and Eastern Market food vendors use custom branded coffee to build a brand that follows customers home." },
    { title: "Automotive & Corporate Sector", body: "Detroit's automotive OEMs, tier-one suppliers, and corporate campuses trust EZPZ for premium branded coffee gifts for clients, partners, and executive events." },
    { title: "Hotels & Riverfront Properties", body: "Detroit Riverfront hotels, Downtown boutique stays, and Midtown guesthouses brand their in-room coffee experience with EZPZ custom bags." },
    { title: "Creative Studios & Independent Retailers", body: "Corktown studios, Eastern Market artisans, and Midtown independent retailers add custom branded coffee as a differentiated product that reflects Detroit's design-forward identity." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Detroit in 7 to 10 business days via tracked international courier. We deliver to all Detroit areas including Midtown, Corktown, Eastern Market, Downtown, New Center, and surrounding communities including Dearborn, Royal Oak, and Ann Arbor. First orders take 2 to 3 weeks total. No import paperwork.",
  relatedCities: [
    { city: "Chicago", href: "/en/custom-coffee-bags-chicago" },
    { city: "Pittsburgh", href: "/en/custom-coffee-bags-pittsburgh" },
  ],
};

const DetroitPage = () => <CityPage data={data} />;
export default DetroitPage;
