import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Miami | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Miami businesses, shipped in 7–10 days. No minimum order, full design included. Miami brands choose EZPZ for premium branded specialty coffee.",
    alternates: { canonical: "/custom-coffee-bags-miami" },
    openGraph: {
      title: "Custom Coffee Bags Miami | No Minimum Order | EZPZ Coffee",
      description:
        "Custom coffee bags for Miami businesses. No minimum order, full design included, specialty coffee shipped from Montreal to Miami.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-miami",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Miami" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Miami | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Miami businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Miami",
  province: "Florida",
  eyebrow: "Custom Coffee Bags — Miami",
  headline: "Custom coffee bags for Miami brands. Zero minimums.",
  subheadline:
    "Miami's hotels, restaurants, and lifestyle brands are putting their name on specialty coffee. EZPZ makes it happen with no minimums and full design included.",
  bodyIntro:
    "From South Beach hotels to Wynwood art galleries, from Brickell restaurants to Coconut Grove wellness brands — Miami businesses compete on visual identity and experience. A custom coffee bag that looks stunning on a shelf in a Design District boutique or gets served in a Coral Gables hotel room tells a story that resonates with Miami's brand-conscious clientele. EZPZ ships from Montreal to Miami in 7 to 10 business days.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-miami",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    {
      n: "01",
      title: "Design your bag online",
      body: "Use our online tool to upload your logo, add your brand name or message, and choose your packaging style. Takes under 10 minutes from anywhere in Miami.",
    },
    {
      n: "02",
      title: "Choose your coffee",
      body: "Select from our traceable specialty coffees. Light, medium, or dark roast — from Ethiopia, Colombia, Brazil, and more. We match the premium quality Miami demands.",
    },
    {
      n: "03",
      title: "We roast fresh in Montreal",
      body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum quantity required.",
    },
    {
      n: "04",
      title: "Delivered to Miami",
      body: "We ship directly to your Miami address within 7 to 10 business days from order confirmation. Fully tracked, right to your door.",
    },
  ],
  whyPoints: [
    {
      n: "01",
      title: "Zero minimums — made for Miami's energy",
      body: "EZPZ is the only custom coffee supplier in North America with a genuine zero minimum. Launch a small batch for a new concept, a pop-up, or a seasonal menu — no volume commitment required.",
    },
    {
      n: "02",
      title: "Design that matches your aesthetic",
      body: "Full custom bag design is included in every order at no extra cost. Bring your logo, your palette, your vibe — our team handles the design without additional fees.",
    },
    {
      n: "03",
      title: "Specialty coffee as premium as your brand",
      body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Miami's luxury market expects quality — our coffee delivers it.",
    },
    {
      n: "04",
      title: "Built for Miami's visual-first culture",
      body: "Wynwood galleries, Design District boutiques, Brickell offices, and South Beach hotels — Miami is a city of aesthetics. Our packaging is designed to look stunning in every setting.",
    },
  ],
  whoWeServe: [
    {
      title: "Hotels & South Beach Resorts",
      body: "South Beach hotels, Bal Harbour resorts, and Coral Gables boutique properties brand every guest experience with custom EZPZ coffee that signals quality and attention to detail.",
    },
    {
      title: "Restaurants & Brickell Dining",
      body: "Brickell restaurants, Wynwood dining destinations, and Little Havana eateries add custom branded coffee as a signature takeaway that keeps their brand in customers' homes.",
    },
    {
      title: "Lifestyle & Wellness Brands",
      body: "Coconut Grove wellness studios, Miami Beach fitness brands, and Coral Gables lifestyle boutiques add EZPZ custom coffee as a premium product that fits their brand perfectly.",
    },
    {
      title: "Art & Luxury Retail",
      body: "Design District galleries, Wynwood concept stores, and luxury boutiques throughout Miami use custom branded coffee as a distinctive retail product and premium client gift.",
    },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to Miami in 7 to 10 business days via tracked international courier. We deliver to all of greater Miami — South Beach, Brickell, Wynwood, Coconut Grove, Coral Gables, Design District, Aventura, and beyond. First orders take 2 to 3 weeks total from design approval. Repeat orders ship faster. No import paperwork required on your end. For hotel chain rollouts or large event quantities, contact us for volume pricing and scheduling.",
  relatedCities: [
    { city: "Tampa", href: "/en/custom-coffee-bags-tampa" },
    { city: "Atlanta", href: "/en/custom-coffee-bags-atlanta" },
    { city: "New York", href: "/en/custom-coffee-bags-new-york" },
  ],
};

const MiamiPage = () => <CityPage data={data} />;
export default MiamiPage;
