import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Portland | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Portland businesses, shipped in 10–14 days. No minimum order, full design included. Portland brands choose EZPZ for specialty branded coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-portland" },
    openGraph: {
      title: "Custom Coffee Bags Portland | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Portland businesses. No minimum order, full design included, specialty coffee shipped from Montreal.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-portland",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Portland" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Portland | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Portland businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Portland",
  province: "Oregon",
  eyebrow: "Custom Coffee Bags — Portland",
  headline: "Custom coffee bags for Portland brands. Zero minimums.",
  subheadline: "Portland's specialty coffee culture, food scene, and sustainability-focused brands trust EZPZ for branded coffee — no minimums, full design included.",
  bodyIntro:
    "From the Pearl District's galleries and restaurants to Alberta Arts District's independent creative businesses, from Division Street's beloved food cart pods and dining destinations to Hawthorne's eclectic boutiques — Portland is a city of deeply held values around quality, sustainability, and authenticity. EZPZ's 100% traceable specialty coffee and zero-minimum model aligns perfectly with Portland's ethos. We ship from Montreal to Portland in 10 to 14 business days.",
  deliveryTime: "10 to 14 business days",
  canonicalPath: "/custom-coffee-bags-portland",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Portland", body: "We ship directly to your Portland address within 10 to 14 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Order one bag or a thousand — the quality and values are the same." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand identity — handled without additional fees." },
    { n: "03", title: "Traceable sourcing for a values-driven market", body: "Portland consumers care deeply about where their coffee comes from. Our 100% traceable sourcing — from farm to bag — tells a story Portland appreciates." },
    { n: "04", title: "Built for Portland's sustainability-first culture", body: "Portland businesses that lead with sustainability values trust EZPZ because our traceable, small-batch specialty coffee aligns with the authentic, quality-first story they tell." },
  ],
  whoWeServe: [
    { title: "Specialty Cafés & Roasters", body: "Portland's world-class specialty café culture sells and gifts custom branded EZPZ coffee — a premium retail product that carries the café's identity and values home with every customer." },
    { title: "Restaurants & Food Scene", body: "Division Street restaurants, Pearl District dining, and Hawthorne neighborhood eateries add custom branded coffee that extends their quality and values into customers' daily routines." },
    { title: "Sustainable & Lifestyle Brands", body: "Portland's sustainability-focused retail and lifestyle brands choose EZPZ because our traceable sourcing story complements the authentic, values-driven narrative they already tell." },
    { title: "Hotels & Boutique Properties", body: "Pearl District hotels, Alberta Arts District guesthouses, and design-forward Portland properties brand their in-room coffee with EZPZ to deliver an experience that matches the city's character." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Portland in 10 to 14 business days via tracked international courier. We deliver to all Portland neighborhoods including Pearl District, Alberta Arts District, Division Street, Hawthorne, Sellwood, and the greater Portland metro. First orders take 3 to 4 weeks total. No import paperwork.",
  relatedCities: [
    { city: "Seattle", href: "/en/custom-coffee-bags-seattle" },
    { city: "San Francisco", href: "/en/custom-coffee-bags-san-francisco" },
  ],
};

const PortlandPage = () => <CityPage data={data} />;
export default PortlandPage;
