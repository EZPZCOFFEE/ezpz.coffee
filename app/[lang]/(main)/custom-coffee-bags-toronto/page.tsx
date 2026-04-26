import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Toronto | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Toronto businesses, shipped in 5–7 days from Montreal. No minimum order, full design included. Toronto brands trust EZPZ.",
    alternates: { canonical: "/custom-coffee-bags-toronto" },
    openGraph: {
      title: "Custom Coffee Bags Toronto | No Minimum Order | EZPZ Coffee",
      description:
        "Custom coffee bags for Toronto businesses, shipped in 5–7 days. No minimum order, full design included. Toronto brands trust EZPZ.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-toronto",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Toronto" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Toronto | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Toronto businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Toronto",
  province: "Ontario",
  eyebrow: "Custom Coffee Bags — Toronto",
  headline: "Custom coffee bags for Toronto brands. Zero minimums.",
  subheadline:
    "Toronto's restaurants, hotels, and retailers trust EZPZ to put their brand on specialty coffee — with no minimums and full design included.",
  bodyIntro:
    "From the King West restaurant corridor to boutique hotels in Yorkville, from Queen Street retailers to Liberty Village creative studios — Toronto businesses compete on brand as much as product. EZPZ ships custom branded coffee bags from Montreal to Toronto typically within 5 to 7 business days. Whether you are launching a new product or scaling an existing brand, zero minimums means zero risk.",
  deliveryTime: "5 to 7 business days",
  canonicalPath: "/custom-coffee-bags-toronto",
  howItWorks: [
    {
      n: "01",
      title: "Design your bag online",
      body: "Use our online tool to upload your logo, add your brand name or message, and choose your packaging style. Takes under 10 minutes from anywhere in Toronto.",
    },
    {
      n: "02",
      title: "Choose your coffee",
      body: "Select from our traceable specialty coffees. Light, medium, or dark roast — from Ethiopia, Colombia, Brazil, and more. We will help you choose if needed.",
    },
    {
      n: "03",
      title: "We roast fresh in Montreal",
      body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum quantity required.",
    },
    {
      n: "04",
      title: "Delivered to Toronto",
      body: "We ship directly to your Toronto address within 5 to 7 business days from order confirmation. Fast, reliable, and fully tracked.",
    },
  ],
  whyPoints: [
    {
      n: "01",
      title: "No minimum order",
      body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Test your concept before committing to volume.",
    },
    {
      n: "02",
      title: "Full custom design included",
      body: "Your logo, your colors, your messaging — full bag design is included in every order at no extra cost. No designer fees, no print-ready files required.",
    },
    {
      n: "03",
      title: "Ships fast to Toronto",
      body: "From order confirmation to delivery at your Toronto door in 5 to 7 business days. We ship via tracked carriers so you always know where your order is.",
    },
    {
      n: "04",
      title: "Built for Toronto's competitive market",
      body: "King West, Yorkville, Queen Street, Liberty Village — EZPZ serves businesses across every Toronto neighbourhood and industry. We know what Toronto brands need.",
    },
  ],
  whoWeServe: [
    {
      title: "Restaurants & Hospitality",
      body: "From King West bistros to Distillery District dining — sell your own branded coffee, offer it on your menu, or use it as a signature takeaway gift that keeps your brand visible.",
    },
    {
      title: "Boutique Hotels & B&Bs",
      body: "Yorkville hotels, boutique properties on Jarvis Street, and design-forward stays across Toronto trust EZPZ to brand their in-room coffee experience.",
    },
    {
      title: "Retailers & Concept Stores",
      body: "Queen Street boutiques, Kensington Market shops, and Leslieville retailers add custom branded coffee as a high-margin retail product that drives repeat traffic.",
    },
    {
      title: "Creative Studios & Agencies",
      body: "Liberty Village agencies, media companies, and tech firms in the financial district use branded coffee as a premium client gift and office culture touchpoint.",
    },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Toronto in 5 to 7 business days via tracked courier. First orders take 2 to 3 weeks total from design approval to delivery — including the time to roast and pack your order. Repeat orders are faster since your design is already on file. We ship to all Toronto neighbourhoods including downtown, Etobicoke, Scarborough, North York, and the GTA. Need a large order for a chain or multi-location rollout? Contact us for volume pricing and scheduled delivery.",
  relatedCities: [
    { city: "Mississauga", href: "/en/custom-coffee-bags-mississauga" },
    { city: "Hamilton", href: "/en/custom-coffee-bags-hamilton" },
    { city: "Ottawa", href: "/en/custom-coffee-bags-ottawa" },
  ],
};

const TorontoPage = () => <CityPage data={data} />;
export default TorontoPage;
