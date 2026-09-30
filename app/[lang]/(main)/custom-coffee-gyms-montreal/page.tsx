import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Montreal Gyms | EZPZ Coffee",
  description:
    "Montreal's fitness culture is neighbourhood-rooted and brand-conscious. Custom branded specialty coffee — bilingual, roasted locally, zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-gyms-montreal" },
  openGraph: {
    title: "Custom Coffee Bags for Montreal Gyms | EZPZ Coffee",
    description: "Montreal's gym culture is neighbourhood-loyal and brand-conscious. Custom branded coffee, bilingual, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-gyms-montreal",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-gyms-montreal",
  city: { name: "Montreal", province: "QC", deliveryTime: "2–3 business days" },
  industry: { name: "Gyms & Fitness Studios", parentHref: "/en/custom-coffee-bags-gyms", parentLabel: "Gyms & Fitness Studios" },
  hero: {
    h1: "Custom Coffee for Montreal Gyms & Fitness Studios",
    subheadline:
      "Montreal's gym culture is rooted in neighbourhood identity and community loyalty. Brand the post-workout ritual.",
    ctaSubject: "Custom coffee for Montreal gym",
  },
  aeoAnswer:
    "Montreal gyms can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Roasted locally in Montreal, delivered in 2–3 business days. Bilingual design available.",
  why: {
    heading: "Montreal Fitness Culture and the Brand Opportunity",
    paragraphs: [
      "Montreal's fitness scene is dominated by two forces: the neighbourhood-rooted independent gym with a loyal community of regulars, and the French-language fitness culture built around running (the Montreal Marathon), cycling (Tour de l'Île), and the CrossFit community that has taken root in Rosemont, Plateau, and Verdun. In this environment, brand identity matters — members of Montreal gyms don't just exercise there; they identify with the gym as part of their neighbourhood and their lifestyle.",
      "Montreal gym members are also coffee drinkers at an above-average rate — the city's café culture has built a constituency of people who think about their coffee. A branded bag from their gym, with French copy, a local roasting story, and premium packaging, is a product that makes sense to them instinctively.",
      "EZPZ roasts in Montreal, which means you can honestly describe the coffee as 'roasted in Montreal' — a provenance claim that resonates strongly with the local-first purchasing values of Plateau and Mile End gym members who already shop at local markets and avoid chains when possible.",
    ],
  },
  useCases: {
    heading: "How Montreal Gyms Use Custom Coffee",
    items: [
      {
        title: "Neighbourhood gym retail bags",
        body: "A bilingual branded bag behind the front desk sells to regulars who want to support their gym beyond their membership. 'Roasted in Montreal, for [Gym Name]' is copy that resonates with members who already buy locally.",
      },
      {
        title: "Marathon and race season gifts",
        body: "Montreal Marathon, Tour de l'Île, Défi Pierre Lavoie — Montreal's athletic calendar has multiple peak moments when a fitness studio's community energy is highest. A branded coffee bag as a race-preparation or post-race gift for members reinforces the studio-to-lifestyle connection.",
      },
      {
        title: "CrossFit and functional training community packs",
        body: "Montreal's CrossFit community is tight-knit and brand-loyal. A gym's branded coffee bag — with French/English copy and a performance-oriented message — is exactly the kind of product that gets photographed pre-WOD and shared on social without prompting.",
      },
      {
        title: "Bilingual new member welcome kits",
        body: "A French/English welcome bag that includes your gym's branded coffee alongside a training schedule and a locker code makes the first impression that sets retention up. Montreal members who feel welcomed with intention stay longer.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — 2–3 business day delivery, locally roasted coffee. Bilingual packaging at no extra charge. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get bilingual (French/English) packaging for my Montreal gym?",
      a: "Yes. Bilingual packaging is available at no extra charge and is the recommended default for Montreal gym clients.",
    },
    {
      q: "What coffee profile works best for a fitness audience?",
      a: "For fitness-focused audiences, a medium roast with clean acidity and good caffeine presence works well — something that doubles as a pre-workout black coffee and a home morning coffee. EZPZ will recommend a profile based on your gym's character.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag and test counter sales at your front desk.",
    },
    {
      q: "How fast is delivery?",
      a: "2–3 business days from Montreal — among the freshest, fastest delivery windows in Canada.",
    },
  ],
  siblings: [
    { label: "Gyms · Toronto", href: "/en/custom-coffee-gyms-toronto" },
    { label: "Gyms · Vancouver", href: "/en/custom-coffee-gyms-vancouver" },
    { label: "Spas · Montreal", href: "/en/custom-coffee-spas-montreal" },
    { label: "Restaurants · Montreal", href: "/en/custom-coffee-restaurants-montreal" },
  ],
  ctaClose:
    "Montreal's gym members identify with their fitness community. Give them a coffee to carry that identity home.",
  cityPageHref: "/en/custom-coffee-bags-montreal",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
