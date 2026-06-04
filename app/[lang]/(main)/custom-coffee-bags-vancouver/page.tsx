import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Vancouver | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Vancouver businesses, shipped in 7–10 days. No minimum order, full design included. Vancouver brands choose EZPZ for traceable specialty coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-vancouver" },
    openGraph: {
      title: "Custom Coffee Bags Vancouver | No Minimum Order | EZPZ Coffee",
      description:
        "Custom coffee bags for Vancouver businesses. No minimum order, full design included, traceable specialty coffee shipped from Montreal.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-vancouver",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Vancouver" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Vancouver | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Vancouver businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Vancouver",
  province: "British Columbia",
  eyebrow: "Custom Coffee Bags — Vancouver",
  headline: "Custom coffee bags for Vancouver brands. Zero minimums.",
  subheadline:
    "Vancouver's coffee culture is world class. Your branded coffee should be too — with no minimums and full design included.",
  bodyIntro:
    "From Gastown restaurants to Coal Harbour hotels, from Main Street boutiques to Kitsilano wellness brands — Vancouver businesses understand quality and sustainability better than almost anywhere. EZPZ ships custom branded specialty coffee from our Montreal roastery to Vancouver in 7 to 10 business days. Our 100% traceable sourcing aligns perfectly with Vancouver's values-driven consumer culture.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-vancouver",
  howItWorks: [
    {
      n: "01",
      title: "Design your bag online",
      body: "Use our online tool to upload your logo, add your brand name or message, and choose your packaging style. Takes under 10 minutes from anywhere in Vancouver.",
    },
    {
      n: "02",
      title: "Choose your coffee",
      body: "Select from our traceable specialty coffees. Light, medium, or dark roast — from Ethiopia, Colombia, Brazil, and more. We match the quality Vancouver expects.",
    },
    {
      n: "03",
      title: "We roast fresh in Montreal",
      body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum quantity required.",
    },
    {
      n: "04",
      title: "Delivered to Vancouver",
      body: "We ship directly to your Vancouver address within 7 to 10 business days from order confirmation. Fully tracked, coast to coast.",
    },
  ],
  whyPoints: [
    {
      n: "01",
      title: "The only true zero minimum in Canada",
      body: "EZPZ is the only Canadian custom coffee supplier with a genuine zero minimum order. Order one bag to test your concept. Scale when you are ready.",
    },
    {
      n: "02",
      title: "Design included — no exceptions",
      body: "Full custom bag design is included in every order at no extra cost. Your logo, your aesthetic, your brand — handled by our team without additional fees.",
    },
    {
      n: "03",
      title: "Traceable sourcing that matches Vancouver values",
      body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Vancouver consumers care deeply about where their coffee comes from — our transparency delivers on that.",
    },
    {
      n: "04",
      title: "Ships coast to coast reliably",
      body: "From our Montreal roastery to your Vancouver door in 7 to 10 business days. Tracked, reliable, and just as fast as local suppliers without the minimum requirements.",
    },
  ],
  whoWeServe: [
    {
      title: "Restaurants & Gastown Dining",
      body: "From Gastown bistros to Coal Harbour waterfront restaurants — custom branded coffee adds a premium touchpoint that keeps your brand on the counter long after dinner.",
    },
    {
      title: "Boutique Hotels & Lodges",
      body: "Vancouver's boutique hotel scene demands premium experiences. A custom coffee bag in every room tells guests you care about every detail of their stay.",
    },
    {
      title: "Wellness Brands & Studios",
      body: "Kitsilano yoga studios, Main Street wellness brands, and Yaletown fitness clubs use custom branded coffee to build a daily ritual their community returns to.",
    },
    {
      title: "Sustainable & Lifestyle Brands",
      body: "Vancouver's values-driven retail and lifestyle sector chooses EZPZ because our traceable, specialty-grade coffee aligns with the sustainability story your brand already tells.",
    },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Vancouver in 7 to 10 business days via tracked Canada Post or courier. First orders take 2 to 3 weeks total from design approval to delivery. Repeat orders ship faster since your design is already saved. We deliver to all Vancouver neighbourhoods — Gastown, Yaletown, Kitsilano, Main Street, Commercial Drive, Coal Harbour — as well as Burnaby, Surrey, Richmond, and the rest of Metro Vancouver. For volume orders or retail distribution, contact us for bulk pricing.",
  relatedCities: [
    { city: "Victoria", href: "/en/custom-coffee-bags-victoria" },
    { city: "Kelowna", href: "/en/custom-coffee-bags-kelowna" },
    { city: "Calgary", href: "/en/custom-coffee-bags-calgary" },
    { city: "Edmonton", href: "/en/custom-coffee-bags-edmonton" },
    { city: "Toronto", href: "/en/custom-coffee-bags-toronto" },
    { city: "Montreal", href: "/en/custom-coffee-bags-montreal" },
  ],
  faq: [
    {
      q: "How long does shipping from Montreal to Vancouver take?",
      a: "Vancouver orders ship from our Montreal roastery via tracked Canada Post or courier and arrive in 7 to 10 business days from order confirmation. First-time orders take 2 to 3 weeks total (design approval plus roast and ship). Repeat orders are faster since your design is already saved and ready to go.",
    },
    {
      q: "What makes EZPZ different for Vancouver's sustainability-conscious market?",
      a: "Our fully traceable specialty coffee sourcing aligns directly with Vancouver's values-driven consumer culture. Every origin is documented to the farm or cooperative level — no vague 'blend' labelling, no mystery sourcing. We source only 80+ SCA specialty grade coffees, roasted fresh to order. Vancouver consumers care about where their coffee comes from, and our transparency delivers on that expectation.",
    },
    {
      q: "Do you ship to all Metro Vancouver neighbourhoods?",
      a: "Yes — we deliver to all Vancouver addresses including Gastown, Yaletown, Kitsilano, Main Street, Commercial Drive, Coal Harbour, and East Vancouver. We also ship to Burnaby, Surrey, Richmond, North Vancouver, West Vancouver, Langley, and Coquitlam. For retail or hospitality distribution across Metro Vancouver, contact us for volume pricing.",
    },
  ],
};

const VancouverPage = () => <CityPage data={data} />;
export default VancouverPage;
