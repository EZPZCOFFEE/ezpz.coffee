import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags Edmonton | No Minimum Order | EZPZ Coffee",
    description:
      "Custom coffee bags for Edmonton businesses, shipped in 7–10 days. No minimum order, full design included. Edmonton brands choose EZPZ for specialty coffee.",
    alternates: { canonical: "/en/custom-coffee-bags-edmonton" },
    openGraph: {
      title: "Custom Coffee Bags Edmonton | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Edmonton businesses. No minimum order, full design included, shipped from Montreal in 7–10 days.",
      type: "website",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-edmonton",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Edmonton" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Edmonton | No Minimum Order | EZPZ Coffee",
      description: "Custom coffee bags for Edmonton businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const data: CityPageData = {
  city: "Edmonton",
  province: "Alberta",
  eyebrow: "Custom Coffee Bags — Edmonton",
  headline: "Custom coffee bags for Edmonton brands. Zero minimums.",
  subheadline: "Edmonton's restaurants, arts community, and energy sector businesses trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Whyte Avenue's beloved restaurant and bar strip to the independent galleries and studios of 124 Street, from Old Strathcona's farmers' market culture to the oil sector towers of downtown — Edmonton is a city of genuine local pride and growing creative identity. EZPZ ships custom branded specialty coffee from our Montreal roastery to Edmonton in 7 to 10 business days. No minimum order. Full custom design always included.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-edmonton",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Edmonton", body: "We ship directly to your Edmonton address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Test your concept risk-free." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Edmonton's discerning consumers appreciate quality — we deliver it." },
    { n: "04", title: "Built for Edmonton's arts and energy sectors", body: "Whether you are gifting to an energy sector client downtown or stocking a 124 Street gallery gift shop, EZPZ delivers a premium branded coffee product that fits either context perfectly." },
  ],
  whoWeServe: [
    { title: "Restaurants & Whyte Avenue Dining", body: "Whyte Avenue restaurants, Old Strathcona pubs, and Garneau cafés add custom branded coffee as a premium touchpoint for their loyal local customer base." },
    { title: "Corporate & Energy Sector", body: "Edmonton's oil companies, engineering firms, and downtown professional services use EZPZ for premium branded coffee gifts that make a strong impression." },
    { title: "Arts Organizations & Galleries", body: "124 Street galleries, Fringe Festival venues, and Edmonton arts organizations use custom coffee as a distinctive, memorable gift for patrons and collaborators." },
    { title: "University & Campus Sector", body: "University of Alberta-area cafés, student businesses, and campus organizations use EZPZ to build a branded coffee product that resonates with their academic community." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Edmonton in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Edmonton areas including Downtown, Whyte Avenue, Old Strathcona, 124 Street, Glenora, Windermere, and surrounding communities. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Calgary", href: "/en/custom-coffee-bags-calgary" },
    { city: "Winnipeg", href: "/en/custom-coffee-bags-winnipeg" },
  ],
  faq: [
    {
      q: "How long does shipping from Montreal to Edmonton take?",
      a: "Edmonton orders ship from our Montreal roastery and arrive in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Edmonton areas including Downtown, Whyte Avenue, Old Strathcona, 124 Street, Glenora, and surrounding communities. First-time orders take 2 to 3 weeks total from design approval.",
    },
    {
      q: "What Edmonton industries use custom branded coffee?",
      a: "Government of Alberta departments, oil and gas support companies, Whyte Avenue restaurants and boutiques, Old Strathcona entertainment venues, 124 Street galleries and shops, and corporate meeting planners across the city are the most active users. Edmonton's combination of government, energy, and arts sectors creates strong demand for premium branded gifts.",
    },
    {
      q: "What coffee origins are most popular with Edmonton businesses?",
      a: "Our Ethiopian Yirgacheffe and Colombian Huila single origins are consistently the most popular for corporate gifting in Alberta — they're bright, balanced, and crowd-pleasing. Our Guatemalan Huehuetenango is also a favourite for clients who prefer a richer, full-bodied cup. We help you choose the right origin for your audience.",
    },
  ],
};

const EdmontonPage = () => <CityPage data={data} />;
export default EdmontonPage;
