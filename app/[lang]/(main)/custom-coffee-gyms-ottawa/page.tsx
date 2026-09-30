import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Ottawa Gyms | EZPZ Coffee",
  description:
    "Ottawa's government workers, tech employees, and marathon culture make fitness studios a strong retail opportunity. Custom branded specialty coffee, zero minimum, from $11.75/bag.",
  alternates: { canonical: "https://www.ezpz.coffee/en/custom-coffee-gyms-ottawa" },
  openGraph: {
    title: "Custom Coffee Bags for Ottawa Gyms | EZPZ Coffee",
    description: "Ottawa has marathon culture, Rideau Canal skaters, and government gym-goers. Custom branded specialty coffee for fitness studios, zero minimum.",
    url: "https://www.ezpz.coffee/en/custom-coffee-gyms-ottawa",
    siteName: "EZPZ Coffee",
    locale: "en_CA",
    type: "website",
  },
};

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-gyms-ottawa",
  city: { name: "Ottawa", province: "ON", deliveryTime: "3–5 business days" },
  industry: { name: "Gyms & Fitness Studios", parentHref: "/en/custom-coffee-bags-gyms", parentLabel: "Gyms & Fitness Studios" },
  hero: {
    h1: "Custom Coffee for Ottawa Gyms & Fitness Studios",
    subheadline:
      "Ottawa runs the Rideau Canal in winter, the trails in summer, and the gym year-round. Your fitness brand should live in the thermos.",
    ctaSubject: "Custom coffee for Ottawa gym",
  },
  aeoAnswer:
    "Ottawa gyms and fitness studios can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Delivered in 3–5 business days, bilingual packaging available.",
  why: {
    heading: "Ottawa's Fitness Culture and Why Coffee Belongs in Your Retail",
    paragraphs: [
      "Ottawa is a city of active people. The Ottawa Marathon draws tens of thousands of participants, the Rideau Canal skateway is the world's largest naturally frozen skating rink and hosts hundreds of thousands of commuters in winter, and the greenbelt trail system draws trail runners and cyclists throughout the warmer months. Fitness is deeply embedded in Ottawa's civic identity — and the gyms and studios that serve this community have members who are invested in their athletic lives.",
      "Ottawa's government workforce also contributes a specific fitness pattern: public servants with structured working hours have reliable, schedulable fitness habits. Morning gym before work, lunch hour spin class, evening yoga — Ottawa fitness studios have predictable, loyal member attendance patterns that are unlike the more erratic gym schedules of freelancers and variable-hours workers in other cities. These members form strong habits, and a coffee ritual is one of the strongest habits to attach to.",
      "Bilingual gym members are also a feature of Ottawa's fitness landscape. A bilingual branded coffee bag from a Centretown or Glebe studio — with French and English copy — signals that your studio is a place for all of Ottawa, not just one half of it.",
    ],
  },
  useCases: {
    heading: "How Ottawa Gyms Use Custom Coffee",
    items: [
      {
        title: "Marathon and race season program bags",
        body: "Ottawa's spring running season peaks with the Ottawa Marathon in May. A branded coffee bag as part of a spring running program reward, a race-day kit, or a goal-achievement gift reinforces the studio's connection to Ottawa's active community.",
      },
      {
        title: "Bilingual counter retail",
        body: "A bilingual branded bag — French and English — at the front desk of an Ottawa fitness studio is a product that every member can connect with. 'Roasted fresh, for [Studio Name]' in both official languages is a detail your francophone members will notice and appreciate.",
      },
      {
        title: "Government employee fitness programs",
        body: "Ottawa fitness studios that partner with federal departments on employee wellness programs have a built-in corporate gifting channel. A branded coffee bag co-branded with a departmental partner — or simply a premium gift for a wellness challenge winner — is a product that travels from the gym to the office.",
      },
      {
        title: "Winter training season welcome kits",
        body: "Ottawa's long winters mean indoor fitness is peak season from November to March. A welcome kit for new winter members — with a branded coffee bag, a training schedule, and a personal note — converts seasonal joiners into long-term members who feel genuinely welcomed.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Ottawa in 3–5 business days. Bilingual (French/English) packaging at no extra charge. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get bilingual packaging for my Ottawa studio?",
      a: "Yes. Bilingual packaging is available at no extra charge and is recommended for Ottawa fitness studios given the city's bilingual character.",
    },
    {
      q: "What coffee works for a running-focused fitness community?",
      a: "For endurance athletes and runners, a clean medium roast with natural acidity — an Ethiopian natural or a washed Colombian — is ideal. It works for pre-run black coffee, works as a pourover recovery ritual, and has the flavor clarity that educated coffee drinkers in Ottawa's marathon community will appreciate.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag.",
    },
    {
      q: "How fast is delivery to Ottawa?",
      a: "3–5 business days from Montreal — one of EZPZ's faster delivery windows.",
    },
  ],
  siblings: [
    { label: "Gyms · Toronto", href: "/en/custom-coffee-gyms-toronto" },
    { label: "Gyms · Montreal", href: "/en/custom-coffee-gyms-montreal" },
    { label: "Spas · Ottawa", href: "/en/custom-coffee-spas-ottawa" },
    { label: "Restaurants · Ottawa", href: "/en/custom-coffee-restaurants-ottawa" },
  ],
  ctaClose:
    "Ottawa's fitness community trains with commitment. Make sure your coffee brand keeps up.",
  cityPageHref: "/en/custom-coffee-bags-ottawa",
};

export default function Page() {
  return <CityIndustryPage data={data} />;
}
