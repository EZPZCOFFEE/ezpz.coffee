import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Brampton | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Brampton businesses, shipped in 5–7 days. No minimum order, full design included. Brampton brands choose EZPZ for specialty branded coffee.",
    alternates: { canonical: "/custom-coffee-bags-brampton" },
    openGraph: {
      title: "Custom Coffee Bags Brampton | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Brampton businesses. No minimum order, full design included, shipped from Montreal in 5–7 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-brampton",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Brampton" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Brampton | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Brampton businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Brampton",
  province: "Ontario",
  eyebrow: "Custom Coffee Bags — Brampton",
  headline: "Custom coffee bags for Brampton brands. Zero minimums.",
  subheadline: "Brampton's diverse restaurants, retailers, and manufacturing sector businesses trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Downtown Brampton's historic Rose Theatre district to the busy commercial corridors of Bramalea, from Springdale's family-owned restaurants to the manufacturing and logistics hubs in the east end — Brampton is one of Canada's fastest-growing and most diverse cities. EZPZ ships custom branded specialty coffee from Montreal to Brampton in 5 to 7 business days. No minimum order. Full custom design included. A premium branded coffee product at any scale.",
  deliveryTime: "5 to 7 business days",
  canonicalPath: "/custom-coffee-bags-brampton",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Brampton", body: "We ship directly to your Brampton address within 5 to 7 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for businesses at any stage." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Every bag is roasted fresh in Montreal to order." },
    { n: "04", title: "Built for Brampton's diverse business community", body: "From Bramalea's restaurant strip to Downtown Brampton's growing arts scene — EZPZ serves Brampton's uniquely diverse business community with culturally-aware, premium branded coffee." },
  ],
  whoWeServe: [
    { title: "Restaurants & Diverse Food Scene", body: "Brampton's diverse restaurant landscape — South Asian, Caribbean, Italian, and beyond — uses custom branded coffee to add a premium, personal touch to their dining experience." },
    { title: "Manufacturing & Corporate Sector", body: "Brampton's logistics parks, manufacturing facilities, and corporate offices use EZPZ for branded coffee gifts that stand out in a results-driven business culture." },
    { title: "Retailers & Boutiques", body: "Bramalea City Centre-area shops and Downtown Brampton boutiques add custom branded coffee as a differentiated, high-margin product their customers love." },
    { title: "Fitness & Community Studios", body: "Brampton gyms, dance studios, and community wellness centres use EZPZ to create a branded lifestyle product that builds loyalty among their diverse membership base." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Brampton in 5 to 7 business days via tracked Canada Post or courier. We deliver to all Brampton areas including Downtown, Bramalea, Springdale, Castlemore, and Huttonville. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Mississauga", href: "/en/custom-coffee-bags-mississauga" },
    { city: "Toronto", href: "/en/custom-coffee-bags-toronto" },
  ],
};

const BramptonPage = () => <CityPage data={data} />;
export default BramptonPage;
