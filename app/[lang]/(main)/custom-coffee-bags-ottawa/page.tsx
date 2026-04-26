import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Ottawa | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Ottawa businesses, shipped in 5–7 days. No minimum order, full design included. Ottawa brands choose EZPZ for premium specialty coffee.",
    alternates: { canonical: "/custom-coffee-bags-ottawa" },
    openGraph: {
      title: "Custom Coffee Bags Ottawa | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Ottawa businesses. No minimum order, full design included, shipped from Montreal in 5–7 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-ottawa",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Ottawa" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Ottawa | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Ottawa businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Ottawa",
  province: "Ontario",
  eyebrow: "Custom Coffee Bags — Ottawa",
  headline: "Custom coffee bags for Ottawa brands. Zero minimums.",
  subheadline: "Ottawa's restaurants, hotels, government offices, and tech companies trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From ByWard Market's bustling restaurant scene to the Glebe's independent boutiques, from Centretown government corridors to Westboro's tech and wellness strip — Ottawa is a city where polished branding meets policy power. EZPZ ships custom branded specialty coffee from Montreal to Ottawa in 5 to 7 business days. Whether you are gifting to clients at a Parliament Hill-adjacent firm or branding the coffee in a five-star hotel on the canal, no minimum order applies.",
  deliveryTime: "5 to 7 business days",
  canonicalPath: "/custom-coffee-bags-ottawa",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Ottawa", body: "We ship directly to your Ottawa address within 5 to 7 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for gifts, events, or full retail rollouts." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Ottawa's sophisticated professional market expects quality — we deliver it." },
    { n: "04", title: "Built for Ottawa's government and tech sectors", body: "From Parliament Hill-area law firms to Kanata tech companies, Ottawa's professional sector trusts EZPZ for branded coffee gifts that make a strong impression on clients and colleagues." },
  ],
  whoWeServe: [
    { title: "Restaurants & ByWard Market", body: "ByWard Market restaurants, Glebe bistros, and Wellington West dining destinations use custom branded coffee to keep their brand in customers' kitchens between visits." },
    { title: "Hotels & Rideau Canal Properties", body: "Ottawa's luxury hotels, heritage inns, and boutique properties brand their in-room coffee to deliver a premium, memorable guest experience." },
    { title: "Government & Corporate Offices", body: "Federal agencies, lobbying firms, and government contractors near Parliament Hill use EZPZ for premium branded coffee gifts that signal quality and professionalism." },
    { title: "Tech Companies & Startups", body: "Kanata tech companies, Centretown startups, and MaRS-linked firms use branded coffee as a premium client gift and office culture touchpoint." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Ottawa in 5 to 7 business days via tracked Canada Post or courier. We deliver to all Ottawa neighbourhoods including ByWard Market, Glebe, Westboro, Centretown, Hintonburg, and Kanata, as well as surrounding areas. First orders take 2 to 3 weeks total from design approval. Repeat orders ship faster.",
  relatedCities: [
    { city: "Gatineau", href: "/en/custom-coffee-bags-gatineau" },
    { city: "Toronto", href: "/en/custom-coffee-bags-toronto" },
  ],
};

const OttawaPage = () => <CityPage data={data} />;
export default OttawaPage;
