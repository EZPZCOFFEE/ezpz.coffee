import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Vancouver Spas | EZPZ Coffee",
  description:
    "Vancouver's eco-wellness culture and nature-adjacent spa market demand authenticity. Custom branded specialty coffee — sustainable, traceable, zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-spas-vancouver" },
  openGraph: {
    title: "Custom Coffee Bags for Vancouver Spas | EZPZ Coffee",
    description: "Vancouver's eco-wellness spa market demands a coffee take-home that matches its values. Custom branded specialty coffee, sustainable, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-spas-vancouver",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-spas-vancouver",
  city: { name: "Vancouver", province: "BC", deliveryTime: "4–6 business days" },
  industry: { name: "Spas & Wellness", parentHref: "/en/custom-coffee-bags-spas", parentLabel: "Spas & Wellness" },
  hero: {
    h1: "Custom Coffee for Vancouver Spas & Wellness Studios",
    subheadline:
      "The Pacific. The mountains. The wellness culture that shaped North America's understanding of self-care. Your spa's coffee should belong in that world.",
    ctaSubject: "Custom coffee for Vancouver spa",
  },
  aeoAnswer:
    "Vancouver spas can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Sustainable packaging available. Delivered in 4–6 business days.",
  why: {
    heading: "Vancouver's Wellness Market and the Sustainable Coffee Take-Home",
    paragraphs: [
      "Vancouver's wellness culture is shaped by the Pacific Northwest's relationship with nature — the mountains, the ocean, the forests. Spas in Vancouver — from the Willow Stream at the Fairmont Pacific Rim to the boutique wellness studios in Kitsilano and Yaletown — position their treatments in the context of natural restoration, environmental intentionality, and holistic living. Every product in the retail display is held to the same standard.",
      "A custom branded specialty coffee bag that can claim traceable sourcing, sustainable packaging, and Canadian-roasted provenance is a product that passes Vancouver's wellness retail filter. A commodity coffee bag, no matter how attractively labeled, will be out of place on the shelf next to the organic oils and the locally harvested botanicals.",
      "Vancouver's spa clients are also among Canada's highest-spending wellness consumers — the same demographic that buys $200 yoga pants and invests in annual health retreats. At $20–$22, a specialty coffee bag is a low-friction retail purchase that delivers strong margin and sustains the brand relationship between visits.",
    ],
  },
  useCases: {
    heading: "How Vancouver Spas Use Custom Coffee",
    items: [
      {
        title: "Eco-aligned retail take-home",
        body: "A specialty coffee bag with traceable sourcing, one-way valve freshness packaging (no individual pods), and a Canadian roasting provenance is a natural fit on the retail shelf of any Vancouver spa with an eco-certification or sustainability commitment.",
      },
      {
        title: "Nature retreat and wellness getaway packages",
        body: "Vancouver spas offering overnight wellness retreats, North Shore forest bathing programs, or Squamish mountain retreat packages include branded coffee in the guest welcome kit as a 'morning ritual' element. The bag travels home as a lasting reminder of the experience.",
      },
      {
        title: "Couples and luxury day spa packages",
        body: "A branded coffee bag included in a couples spa day package — alongside the robes, the slippers, and the lounge access — is a premium take-home that extends the gift experience. At a $300+ package price point, a $12 branded coffee bag has an outsized perceived value effect.",
      },
      {
        title: "Corporate wellness gifting",
        body: "Vancouver's tech companies and professional services firms with active wellness programs include spa day gifts for teams and executives. A co-branded coffee bag alongside the spa voucher — your spa's design plus the client company's brand — is an add-on that elevates the corporate gift and adds revenue.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Vancouver in 4–6 business days. Sustainable packaging options available. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can you provide traceable, sustainably sourced coffee for our eco-aligned spa?",
      a: "Yes. EZPZ sources specialty-grade coffees with full traceability — farm, cooperative, processing method, certifications. We can provide documentation suitable for your brand's transparency commitments.",
    },
    {
      q: "What coffee profile fits a Vancouver wellness brand?",
      a: "For Vancouver's sensory-aware wellness clients, a clean, aromatic single-origin — an Ethiopian natural with floral and fruit notes, or a washed Colombian with caramel and citrus — creates the kind of sensory engagement that resonates with an audience already attuned to their environment.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag to start.",
    },
    {
      q: "Can I serve the coffee in the lounge and sell it in the boutique?",
      a: "Yes. EZPZ can supply both bulk coffee for service and retail-packaged bags for the boutique. Contact us to discuss a combined program.",
    },
  ],
  siblings: [
    { label: "Spas · Toronto", href: "/en/custom-coffee-spas-toronto" },
    { label: "Spas · Montreal", href: "/en/custom-coffee-spas-montreal" },
    { label: "Gyms · Vancouver", href: "/en/custom-coffee-gyms-vancouver" },
    { label: "Hotels · Vancouver", href: "/en/custom-coffee-hotels-vancouver" },
  ],
  ctaClose:
    "Vancouver's wellness clients have the highest standards in Canada. Your coffee take-home should meet them.",
  cityPageHref: "/en/custom-coffee-bags-vancouver",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
