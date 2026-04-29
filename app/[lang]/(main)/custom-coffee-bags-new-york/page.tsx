import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags New York | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for New York businesses, shipped in 7–10 days. No minimum order, full design included. New York brands choose EZPZ for premium branded coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-new-york" },
    openGraph: {
      title: "Custom Coffee Bags New York | No Minimum Order | EZPZ Coffee",
      description:
        "Custom coffee bags for New York businesses. No minimum order, full design included, specialty coffee shipped from Montreal to New York.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-new-york",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags New York" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags New York | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for New York businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "New York",
  province: "New York",
  eyebrow: "Custom Coffee Bags — New York",
  headline: "Custom coffee bags for New York brands. Zero minimums.",
  subheadline:
    "New York's restaurants, hotels, and retailers trust EZPZ to put their brand on specialty coffee — with no minimums and full design included.",
  bodyIntro:
    "From Manhattan restaurants in the Meatpacking District to boutique hotels in Soho, from Brooklyn retail brands to Midtown corporate offices — New York City businesses compete at the highest level. A custom branded coffee bag that sits on the counter of a West Village café or gets gifted to a Chelsea client creates daily brand visibility no ad can replicate. EZPZ ships from Montreal to New York in 7 to 10 business days.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-new-york",
  allMarketsHref: "/en/locations/usa",
  allMarketsLabel: "US Markets",
  howItWorks: [
    {
      n: "01",
      title: "Design your bag online",
      body: "Use our online tool to upload your logo, add your brand name or message, and choose your packaging style. Takes under 10 minutes from anywhere in New York.",
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
      title: "Delivered to New York",
      body: "We ship directly to your New York address within 7 to 10 business days from order confirmation. Fully tracked, right to your door.",
    },
  ],
  whyPoints: [
    {
      n: "01",
      title: "The only true zero minimum in North America",
      body: "EZPZ is the only custom coffee supplier with a genuine zero minimum order. Order one bag to test your concept before committing to volume. Perfect for NYC brands that move fast.",
    },
    {
      n: "02",
      title: "Design included — no exceptions",
      body: "Full custom bag design is included in every order at no extra cost. Your logo, your aesthetic, your brand — handled by our team without additional fees.",
    },
    {
      n: "03",
      title: "Quality that matches New York standards",
      body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. New York has the highest standards in the world — our coffee meets them.",
    },
    {
      n: "04",
      title: "No import hassle — direct to your door",
      body: "From our Montreal roastery to your New York City address in 7 to 10 business days. No import headaches on your end — just your branded coffee, delivered.",
    },
  ],
  whoWeServe: [
    {
      title: "Restaurants & Food & Beverage",
      body: "Meatpacking District restaurants, West Village cafés, and Williamsburg dining destinations use EZPZ to sell and gift custom branded coffee that keeps their brand in customers' homes.",
    },
    {
      title: "Hotels & Boutique Properties",
      body: "SoHo boutique hotels, Chelsea guesthouses, and Manhattan luxury properties brand their in-room and lobby coffee with EZPZ to deliver a premium, memorable guest experience.",
    },
    {
      title: "Retailers & Concept Stores",
      body: "Brooklyn boutiques, NoLIta concept stores, and Greenwich Village gift shops add custom branded coffee as a high-margin retail product that drives repeat visits.",
    },
    {
      title: "Financial & Corporate Offices",
      body: "Midtown firms, Wall Street financial institutions, and Madison Avenue agencies trust EZPZ for premium branded coffee gifts that make a strong impression on clients.",
    },
  ],
  deliveryBody:
    "EZPZ ships from Montreal to New York City in 7 to 10 business days via tracked international courier. Orders cross the US border seamlessly — no import paperwork required on your end. We deliver to all five boroughs: Manhattan, Brooklyn, Queens, The Bronx, and Staten Island, as well as the greater New York metro area. First orders take 2 to 3 weeks total including design and roasting. Repeat orders ship faster. For large corporate orders or event quantities, contact us for volume pricing and lead times.",
  relatedCities: [
    { city: "Brooklyn", href: "/en/custom-coffee-bags-brooklyn" },
    { city: "Philadelphia", href: "/en/custom-coffee-bags-philadelphia" },
    { city: "Boston", href: "/en/custom-coffee-bags-boston" },
  ],
};

const NewYorkPage = () => <CityPage data={data} />;
export default NewYorkPage;
