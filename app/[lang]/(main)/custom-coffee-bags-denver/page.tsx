import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Denver | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Denver businesses, shipped in 10–14 days. No minimum order, full design included. Denver brands choose EZPZ for specialty branded coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-denver" },
    openGraph: {
      title: "Custom Coffee Bags Denver | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Denver businesses. No minimum order, full design included, specialty coffee shipped from Montreal.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-denver",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Denver" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Denver | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Denver businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Denver",
  province: "Colorado",
  eyebrow: "Custom Coffee Bags — Denver",
  headline: "Custom coffee bags for Denver brands. Zero minimums.",
  subheadline: "Denver's tech sector, outdoor lifestyle brands, and specialty coffee scene trust EZPZ for branded coffee — no minimums, full design included.",
  bodyIntro:
    "From RiNo's booming arts and restaurant district to Cherry Creek's luxury retail and dining scene, from Highland's neighborhood bars and boutiques to LoDo's historic warehouse venues — Denver is a city where outdoor lifestyle meets urban sophistication. The Mile High City has one of America's fastest-growing specialty coffee cultures, making a custom branded specialty coffee bag from EZPZ a natural fit for businesses here. We ship from Montreal to Denver in 10 to 14 business days.",
  deliveryTime: "10 to 14 business days",
  canonicalPath: "/custom-coffee-bags-denver",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Denver", body: "We ship directly to your Denver address within 10 to 14 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "Zero minimums", body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Test a batch for your outdoor brand or specialty café without volume commitment." },
    { n: "02", title: "Design included", body: "Full custom bag design is included in every order at no extra cost. Your logo, your brand identity — handled without additional fees." },
    { n: "03", title: "Specialty grade coffee for a discerning market", body: "Denver's specialty coffee scene is sophisticated and growing fast. We source only 80+ SCA grade coffees from traceable origins — our quality belongs in it." },
    { n: "04", title: "Built for Denver's outdoor and lifestyle brands", body: "REI, Patagonia, and dozens of outdoor lifestyle companies are headquartered near Denver. Custom branded coffee from EZPZ is the perfect premium gift for an active, quality-first audience." },
  ],
  whoWeServe: [
    { title: "Restaurants & RiNo Dining", body: "RiNo restaurants, Cherry Creek fine dining, and Highland neighborhood eateries add custom branded coffee that extends their culinary identity into customers' morning routines." },
    { title: "Tech & Outdoor Lifestyle Companies", body: "Denver's growing tech sector and outdoor lifestyle brands use EZPZ for premium branded coffee gifts that resonate with their active, quality-conscious audience." },
    { title: "Specialty Cafés & Coffee Bars", body: "Denver's thriving specialty café scene sells and gifts custom branded EZPZ coffee — a retail product that carries the café's brand identity home with every customer." },
    { title: "Hotels & Boutique Properties", body: "LoDo boutique hotels, Cherry Creek luxury stays, and RiNo design-forward properties brand their in-room coffee experience with EZPZ custom bags." },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Denver in 10 to 14 business days via tracked international courier. We deliver to all Denver areas including RiNo, Cherry Creek, Highland, LoDo, Capitol Hill, and the greater Denver metro including Boulder and Fort Collins. First orders take 3 to 4 weeks total. No import paperwork.",
  relatedCities: [
    { city: "Seattle", href: "/en/custom-coffee-bags-seattle" },
    { city: "Phoenix", href: "/en/custom-coffee-bags-phoenix" },
  ],
};

const DenverPage = () => <CityPage data={data} />;
export default DenverPage;
