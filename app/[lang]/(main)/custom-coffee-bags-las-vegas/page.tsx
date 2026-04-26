import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Las Vegas | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Las Vegas businesses, shipped in 10–14 days. No minimum order, full design included. Las Vegas brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/custom-coffee-bags-las-vegas" },
    openGraph: {
      title: "Custom Coffee Bags Las Vegas | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Las Vegas businesses. No minimum order, full design included, specialty coffee shipped from Montreal.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-las-vegas",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Las Vegas" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Las Vegas | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Las Vegas businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Las Vegas",
  province: "Nevada",
  eyebrow: "Custom Coffee Bags — Las Vegas",
  headline: "Custom coffee bags for Las Vegas brands. Zero minimums.",
  subheadline: "Las Vegas hotels, luxury brands, and corporate event planners trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From the Strip's mega-resort hotels to the boutique properties and restaurants of Downtown Vegas, from the luxury brand collaborations of the Forum Shops to the conference rooms of the Las Vegas Convention Center — Las Vegas is the world's hospitality capital, where branded experiences are the core business. EZPZ ships custom branded specialty coffee from our Montreal roastery to Las Vegas in 10 to 14 business days. No minimum order. Full design always included.",
  deliveryTime: "10 to 14 business days",
  canonicalPath: "/custom-coffee-bags-las-vegas",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your hotel name, brand, or event identity, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more. We match the luxury quality Las Vegas demands." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Las Vegas", body: "We ship directly to your Las Vegas address within 10 to 14 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums — perfect for events of any size", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. From an intimate VIP dinner to a trade show with 10,000 attendees — we scale to your event." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. In Las Vegas, presentation is everything — our design team delivers bags that match the city's visual standards." },
    { n: "03", title: "Specialty grade coffee for a luxury market", body: "Las Vegas's high-end hospitality sector expects world-class quality. We source only 80+ SCA specialty grade coffees from traceable origins to match those expectations." },
    { n: "04", title: "Built for Las Vegas's corporate events industry", body: "CES, NAB, MAGIC, and hundreds of conventions bring millions of attendees to Las Vegas each year. EZPZ branded coffee bags are the event giveaway people actually take home." },
  ],
  whoWeServe: [
    { title: "Strip Hotels & Luxury Resorts", body: "Strip mega-resorts, boutique hotel casino properties, and luxury suite experiences use EZPZ custom coffee to brand their in-room and VIP hospitality touchpoints." },
    { title: "Corporate Events & Conventions", body: "Convention planners, trade show exhibitors, and corporate event organizers use EZPZ branded coffee bags as premium, take-home giveaways that outlast the event." },
    { title: "Restaurants & Celebrity Chef Brands", body: "Las Vegas's world-class restaurant scene — celebrity chef properties, fine dining rooms, and hotel F&B brands — uses custom branded coffee as a premium take-home gift." },
    { title: "Luxury Retail & Brand Activations", body: "Forum Shops luxury brands, Downtown Container Park boutiques, and Strip-area brand activations use EZPZ custom coffee as a memorable, premium branded gift." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Las Vegas in 10 to 14 business days via tracked international courier. We deliver to the Strip, Downtown Las Vegas, Henderson, Summerlin, and surrounding areas. For large convention orders, we recommend ordering 4 to 6 weeks in advance. First orders take 3 to 4 weeks total. No import paperwork.",
  relatedCities: [
    { city: "Los Angeles", href: "/en/custom-coffee-bags-los-angeles" },
    { city: "Phoenix", href: "/en/custom-coffee-bags-phoenix" },
  ],
};

const LasVegasPage = () => <CityPage data={data} />;
export default LasVegasPage;
