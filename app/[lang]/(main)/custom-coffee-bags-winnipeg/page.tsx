import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Winnipeg | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Winnipeg businesses, shipped in 7–10 days. No minimum order, full design included. Winnipeg brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/custom-coffee-bags-winnipeg" },
    openGraph: {
      title: "Custom Coffee Bags Winnipeg | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Winnipeg businesses. No minimum order, full design included, shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-winnipeg",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Winnipeg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Winnipeg | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Winnipeg businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Winnipeg",
  province: "Manitoba",
  eyebrow: "Custom Coffee Bags — Winnipeg",
  headline: "Custom coffee bags for Winnipeg brands. Zero minimums.",
  subheadline: "Winnipeg's restaurants, arts community, and prairie lifestyle brands trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From the heritage warehouses of the Exchange District to the indie restaurants of Osborne Village, from The Forks market to the arts-forward community of Wolseley — Winnipeg has a distinctly proud, locally-rooted business culture. Prairie businesses here build deep community ties, and a branded coffee product is one of the most effective ways to turn those ties into daily brand impressions. EZPZ ships from Montreal to Winnipeg in 7 to 10 business days. No minimum order.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-winnipeg",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Winnipeg", body: "We ship directly to your Winnipeg address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Test your concept before committing to volume." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Every bag is roasted fresh in Montreal to order." },
    { n: "04", title: "Built for Winnipeg's community-first culture", body: "Winnipeg businesses build deep local loyalty — EZPZ helps them leverage that loyalty with a branded coffee product customers use every morning and associate with their favourite local brand." },
  ],
  whoWeServe: [
    { title: "Restaurants & Osborne Village Dining", body: "Osborne Village restaurants, Exchange District cafés, and Wolseley community eateries add custom branded coffee that extends their brand into customers' morning rituals." },
    { title: "Arts & Exchange District Galleries", body: "Winnipeg's vibrant arts community — from Royal MTC to Exchange District galleries — uses custom coffee as a memorable patron gift that reflects creative identity." },
    { title: "Retailers & The Forks Market", body: "The Forks vendors, Exchange District boutiques, and independent Winnipeg retailers add custom branded coffee as a premium, giftable product with strong repeat appeal." },
    { title: "Hotels & Event Venues", body: "Winnipeg hotels, conference centres near the Convention Centre, and event venues brand their hospitality experience with EZPZ custom coffee." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Winnipeg in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Winnipeg neighbourhoods including Exchange District, Osborne Village, The Forks area, Wolseley, St. Boniface, and surrounding communities. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Edmonton", href: "/en/custom-coffee-bags-edmonton" },
    { city: "Saskatoon", href: "/en/custom-coffee-bags-saskatoon" },
  ],
};

const WinnipegPage = () => <CityPage data={data} />;
export default WinnipegPage;
