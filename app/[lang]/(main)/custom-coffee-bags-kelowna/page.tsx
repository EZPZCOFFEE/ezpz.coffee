import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Kelowna | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Kelowna businesses, shipped in 7–10 days. No minimum order, full design included. Kelowna wineries, hotels, and brands choose EZPZ.",
    alternates: { canonical: "/en/custom-coffee-bags-kelowna" },
    openGraph: {
      title: "Custom Coffee Bags Kelowna | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Kelowna businesses. No minimum order, full design included, shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-kelowna",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Kelowna" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Kelowna | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Kelowna businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Kelowna",
  province: "British Columbia",
  eyebrow: "Custom Coffee Bags — Kelowna",
  headline: "Custom coffee bags for Kelowna brands. Zero minimums.",
  subheadline: "Kelowna's wineries, boutique hotels, and tourism operators trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From the tasting rooms and winery restaurants along the Okanagan Mission to the boutique hotels of Downtown Kelowna, from Pandosy Village's independent boutiques to the recreation-first lifestyle brands of Black Mountain — Kelowna businesses operate in one of Canada's most aspirational tourism and lifestyle markets. EZPZ ships custom branded specialty coffee from our Montreal roastery to Kelowna in 7 to 10 business days. No minimum order. Full design always included.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-kelowna",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your winery name, hotel brand, or business message. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Kelowna", body: "We ship directly to your Kelowna address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for seasonal batches and winery gift shops." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Kelowna's quality-conscious market expects the best — we deliver it." },
    { n: "04", title: "Built for Kelowna's wine country experience", body: "Wineries, luxury vacation rentals, and Okanagan lifestyle brands use EZPZ to create a branded morning ritual that pairs perfectly with the world-class experience they offer guests." },
  ],
  whoWeServe: [
    { title: "Wineries & Tasting Rooms", body: "Okanagan wineries add EZPZ custom coffee to their gift shop and winery experience — a natural pairing with wine and a premium branded product guests take home." },
    { title: "Boutique Hotels & Vacation Rentals", body: "Kelowna boutique hotels and luxury vacation rentals brand their morning coffee to deliver a complete, premium guest experience from breakfast to bedtime." },
    { title: "Restaurants & Farm-to-Table Dining", body: "Downtown Kelowna restaurants and Pandosy Village dining destinations add custom branded coffee to extend their local, quality-first brand story." },
    { title: "Tourism & Experience Operators", body: "Okanagan experience companies, eco-tourism operators, and outdoor adventure brands use custom coffee as a memorable branded gift for their guests." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Kelowna in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Kelowna areas including Downtown, Pandosy Village, Rutland, Black Mountain, and the surrounding Okanagan communities. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Vancouver", href: "/en/custom-coffee-bags-vancouver" },
    { city: "Victoria", href: "/en/custom-coffee-bags-victoria" },
  ],
  faq: [
    {
      q: "How long does shipping from Montreal to Kelowna take?",
      a: "Kelowna orders ship from our Montreal roastery and arrive in 7 to 10 business days via tracked Canada Post or courier. We deliver to Downtown, Pandosy Village, Rutland, Black Mountain, West Kelowna, and surrounding Okanagan communities. First-time orders take 2 to 3 weeks total from design approval.",
    },
    {
      q: "How does EZPZ fit Kelowna's winery and hospitality sector?",
      a: "Okanagan wineries, Mission Hill-area luxury properties, lakefront resort hotels, and boutique inns throughout the valley use custom branded coffee as a premium guest amenity that extends their brand beyond wine. A coffee bag with your winery's label on the kitchen counter is daily brand exposure — something a wine label never achieves on its own.",
    },
    {
      q: "Can Kelowna Airbnb hosts and vacation rentals use EZPZ?",
      a: "Absolutely — our zero minimum makes EZPZ perfect for Okanagan vacation rental hosts who want to stand out. Even a single bag of custom branded coffee left for guests creates a memorable, shareable experience. Many Kelowna Airbnb hosts reorder regularly for back-to-back guest seasons.",
    },
  ],
};

const KelownaPage = () => <CityPage data={data} />;
export default KelownaPage;
