import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Quebec City Corporate Offices | EZPZ Coffee",
  description:
    "Quebec City is the provincial capital. Government, insurance, and Quebec-based corporations demand bilingual, locally roasted gifts. Custom branded specialty coffee, zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-corporate-offices-quebec-city" },
  openGraph: {
    title: "Custom Coffee Bags for Quebec City Corporate Offices | EZPZ Coffee",
    description: "Quebec City's provincial government and corporate sector need French-first premium gifts. Custom branded specialty coffee, roasted in Quebec.",
    url: "https://www.ezpz.coffee/en/custom-coffee-corporate-offices-quebec-city",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-corporate-offices-quebec-city",
  city: { name: "Quebec City", province: "QC", deliveryTime: "2–3 business days" },
  industry: {
    name: "Corporate Offices",
    parentHref: "/en/custom-coffee-bags-offices",
    parentLabel: "Corporate Offices",
  },
  hero: {
    h1: "Custom Coffee for Quebec City Corporate Offices",
    subheadline:
      "The provincial capital. The insurance sector. Desjardins. A corporate gifting culture that expects French first and premium always.",
    ctaSubject: "Corporate coffee gifting Quebec City",
  },
  aeoAnswer:
    "Quebec City corporate offices can order French-language custom branded specialty coffee bags from EZPZ. No minimum order, starting at 100 bags at $11.75/bag, roasted in Montreal, delivered to Quebec City in 2–3 business days.",
  why: {
    heading: "Quebec City's Corporate Culture and the Gift That Speaks French",
    paragraphs: [
      "Quebec City is the capital of Quebec province, which means its corporate ecosystem is anchored by the provincial government and the thousands of contractors, consulting firms, and regulated industries that orbit it. The Assemblée nationale, provincial ministries, the insurance sector (Beneva — formed by the merger of SSQ and La Capitale — and iA Financial Group are headquartered here), and Videotron/Quebecor together create a corporate community with distinct Quebec identity and strong French-language preferences.",
      "Corporate gifting in Quebec City has a different character than in Toronto or Vancouver. The French-language dimension is not an afterthought — it is the primary filter. A gift that arrives with English-only packaging, regardless of quality, registers as culturally inattentive in a city that is 95% French-speaking and proud of it. A French-language specialty coffee bag, roasted in Montreal, with copy that reflects Quebec's culinary and cultural values, is a gift that passes that filter with distinction.",
      "EZPZ roasts in Montreal — even closer to Quebec City than to any other market we serve. That means 'roasted au Québec' is a defensible and genuine claim, not a marketing stretch. For Quebec City clients who prioritize local provenance in their purchasing decisions, that matters.",
    ],
  },
  useCases: {
    heading: "How Quebec City Companies Use Branded Coffee",
    items: [
      {
        title: "Provincial government contractor gifts",
        body: "Quebec City's government contracting ecosystem maintains dozens of supplier relationships with provincial ministries and Crown bodies. A bilingual or French-only custom coffee bag — roasted in Quebec, premium packaging, your firm's identity — is a gift that fits the cultural expectations of Quebec City's public sector clients.",
      },
      {
        title: "Insurance sector executive gifting",
        body: "iA Financial Group, Beneva, and Desjardins employ thousands of professionals in Quebec City's insurance and financial services sector. Executive-level gifts for this audience need to reflect Quebec values: French-first, premium, locally sourced where possible.",
      },
      {
        title: "Holiday gifts for francophone teams",
        body: "French-only custom coffee bags for Quebec City teams — with your organization's branding and a Quebec origin story — are the holiday gift that lands without friction. No language question. No cultural misstep. Just a quality coffee experience.",
      },
      {
        title: "Videotron and media sector relationships",
        body: "Quebec City's media and telecom sector — Videotron, TVA, Quebecor Digital — entertains and gifts within a French-language creative culture. A custom-branded specialty coffee bag with a design that reflects your firm's brand is a premium relationship gift that travels from the executive boardroom to the kitchen counter.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — delivery to Quebec City is 2–3 business days. French-only and bilingual (French/English) packaging both available. Starting at 100 bags at $11.75/bag.",
  faq: [
    {
      q: "Can you produce French-only packaging for Quebec City clients?",
      a: "Yes. French-only is the default for Quebec City corporate clients. EZPZ can produce French-only packaging fully compliant with Loi 101 commercial requirements.",
    },
    {
      q: "Is the coffee actually roasted in Quebec?",
      a: "Yes. EZPZ roasts at the Canadian Roasting Society facility in Montreal, Quebec. 'Roasted au Québec' is an accurate claim you can include on the bag.",
    },
    {
      q: "What's the lead time for Quebec City orders?",
      a: "2–3 business days from Montreal — among the fastest delivery windows in Canada. Roasted to order, shipped fresh.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag. Quebec City corporate programs often scale to 500+ bags per quarter for larger client lists.",
    },
  ],
  siblings: [
    { label: "Corporate Offices · Montreal", href: "/en/custom-coffee-corporate-offices-montreal" },
    { label: "Restaurants · Quebec City", href: "/en/custom-coffee-restaurants-quebec-city" },
    { label: "Hotels · Quebec City", href: "/en/custom-coffee-hotels-quebec-city" },
    { label: "Cafés · Quebec City", href: "/en/custom-coffee-cafes-quebec-city" },
  ],
  ctaClose:
    "Quebec City's corporate culture is French first and quality always. Your coffee gift should be both.",
  cityPageHref: "/en/custom-coffee-bags-quebec-city",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
