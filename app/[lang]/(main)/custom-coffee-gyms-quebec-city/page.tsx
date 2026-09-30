import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Quebec City Gyms | EZPZ Coffee",
  description:
    "Quebec City's winter sport culture and growing fitness scene create a unique gym retail opportunity. Custom branded specialty coffee — French design, locally roasted, zero minimum.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-gyms-quebec-city" },
  openGraph: {
    title: "Custom Coffee Bags for Quebec City Gyms | EZPZ Coffee",
    description: "Quebec City trains hard in winter and on the Plains year-round. Custom branded specialty coffee for gyms, roasted in Quebec, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-gyms-quebec-city",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-gyms-quebec-city",
  city: { name: "Quebec City", province: "QC", deliveryTime: "2–3 business days" },
  industry: { name: "Gyms & Fitness Studios", parentHref: "/en/custom-coffee-bags-gyms", parentLabel: "Gyms & Fitness Studios" },
  hero: {
    h1: "Custom Coffee for Quebec City Gyms & Fitness Studios",
    subheadline:
      "Quebec City trains for winter. Hockey, skiing, running on the Plains — your gym's coffee should be as tough as your members.",
    ctaSubject: "Custom coffee for Quebec City gym",
  },
  aeoAnswer:
    "Quebec City gyms and fitness studios can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Roasted in Montreal, delivered in 2–3 business days. French-language design is the default.",
  why: {
    heading: "Quebec City's Fitness Culture and the Coffee Ritual",
    paragraphs: [
      "Quebec City's fitness culture is shaped by its climate and its competitive athletic identity. The city is home to a passionate hockey culture, an established running scene (Les Coureurs des Bois, the Défi Escalade Courir Vers le Sommet), and a winter sports tradition rooted in the proximity of Mont-Sainte-Anne and Stoneham. Gym members in Quebec City are often cross-training for winter sports and are already accustomed to performance-oriented wellness thinking.",
      "The local-first purchasing value that characterizes Quebec City's consumer culture extends to fitness. A branded coffee bag from a Quebec City gym — with French copy and a 'roasted au Québec' provenance claim — is a product that feels authentic to the gym's identity and the city's values. It's not an import; it's local.",
      "EZPZ roasts in Montreal — the fastest and freshest delivery window available in Canada for a Quebec City gym. A coffee that arrives in 2–3 days from roast date, in a bag designed to your gym's brand, is a retail product that requires minimal effort to introduce and sustain.",
    ],
  },
  useCases: {
    heading: "How Quebec City Gyms Use Custom Coffee",
    items: [
      {
        title: "Winter training season retail",
        body: "November through March is peak gym season in Quebec City as outdoor activity shifts indoors. A branded coffee bag introduced at the start of winter training season captures the new-member energy and sells to regulars who are already in a routine.",
      },
      {
        title: "French-language member appreciation gifts",
        body: "A French-language branded bag — your gym's logo, a performance-oriented message, the coffee's origin in French — is the kind of small, thoughtful gift that Quebec City gym members appreciate. Local, quality, and yours.",
      },
      {
        title: "Carnaval fitness challenge rewards",
        body: "The pre-Carnaval season (January–February) is when Quebec City residents increase their fitness activity for Carnaval competitions and winter athletic events. A branded coffee bag as a challenge reward or competition prize aligns with the city's winter athletic calendar.",
      },
      {
        title: "Hockey and team sport community gifts",
        body: "Quebec City's hockey culture is deeply embedded in gym culture — many members train specifically for hockey performance. A branded bag as a gift for a hockey team sponsor, a league tournament prize, or a sport-specific training program reward reaches an audience that is strongly community-identified.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — 2–3 business day delivery to Quebec City. French-language packaging is the default. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get French-only packaging for my Quebec City gym?",
      a: "Yes. French-only is the default recommendation for Quebec City clients. The design will meet Loi 101 packaging requirements.",
    },
    {
      q: "What coffee profile works for a Quebec City athletic audience?",
      a: "A robust medium-dark roast that works equally well as a pre-workout black coffee and a post-training morning cup. Quebec City's athletic members tend toward straightforward, quality-signal profiles over highly experimental coffees.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag to start.",
    },
    {
      q: "How fast is delivery to Quebec City?",
      a: "2–3 business days from Montreal — the fastest EZPZ delivery window in Canada outside the Montreal metro area.",
    },
  ],
  siblings: [
    { label: "Gyms · Montreal", href: "/en/custom-coffee-gyms-montreal" },
    { label: "Gyms · Ottawa", href: "/en/custom-coffee-gyms-ottawa" },
    { label: "Spas · Quebec City", href: "/en/custom-coffee-spas-quebec-city" },
    { label: "Restaurants · Quebec City", href: "/en/custom-coffee-restaurants-quebec-city" },
  ],
  ctaClose:
    "Quebec City trains hard. Make sure your gym's brand is the one fueling the training.",
  cityPageHref: "/en/custom-coffee-bags-quebec-city",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
