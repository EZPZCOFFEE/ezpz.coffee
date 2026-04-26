import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Victoria BC | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Victoria BC businesses, shipped in 7–10 days. No minimum order, full design included. Victoria brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/custom-coffee-bags-victoria" },
    openGraph: {
      title: "Custom Coffee Bags Victoria BC | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Victoria BC businesses. No minimum order, full design included, shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-victoria",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Victoria BC" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Victoria BC | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Victoria BC businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Victoria",
  province: "British Columbia",
  eyebrow: "Custom Coffee Bags — Victoria, BC",
  headline: "Custom coffee bags for Victoria brands. Zero minimums.",
  subheadline: "Victoria's hotels, restaurants, and tourism operators trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "Victoria is famously known as Canada's tea capital — but the truth is, Victoria's coffee scene is equally serious and its business community deeply values quality and local identity. From the boutique hotels and fine dining of Government Street to the independent shops and galleries of Fernwood, from the Inner Harbour tourism corridor to the historic homes of James Bay — Victoria brands lead with character. EZPZ ships custom branded specialty coffee from Montreal to Victoria in 7 to 10 business days. No minimum order.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-victoria",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your hotel name, restaurant brand, or business message. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Victoria", body: "We ship directly to your Victoria address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for seasonal tourism batches and boutique runs." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Victoria's quality-first consumers appreciate transparency — we deliver it." },
    { n: "04", title: "The coffee alternative in Canada's tea capital", body: "Victoria is Canada's tea capital — which makes a beautifully branded specialty coffee bag an even more memorable, unexpected, and premium gift for visitors and locals alike." },
  ],
  whoWeServe: [
    { title: "Hotels & Inner Harbour Properties", body: "Victoria's Government Street hotels, Inner Harbour boutique stays, and Oak Bay bed-and-breakfasts brand their morning coffee experience with EZPZ custom bags." },
    { title: "Restaurants & Government Street Dining", body: "Government Street dining rooms, Fernwood neighbourhood restaurants, and Chinatown cafés use custom branded coffee that guests take home and remember." },
    { title: "Tourism & Experience Operators", body: "Victoria's tourism sector — whale watching, garden tours, cycling experiences — uses EZPZ custom coffee as a premium branded takeaway that outlasts the trip." },
    { title: "Tech Companies & Innovation Sector", body: "Victoria's growing tech community uses branded coffee for premium client gifts and office hospitality that stands out from generic corporate swag." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Victoria in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Victoria areas including Government Street, Fernwood, James Bay, Oak Bay, Esquimalt, and Saanich. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Vancouver", href: "/en/custom-coffee-bags-vancouver" },
    { city: "Kelowna", href: "/en/custom-coffee-bags-kelowna" },
  ],
};

const VictoriaPage = () => <CityPage data={data} />;
export default VictoriaPage;
