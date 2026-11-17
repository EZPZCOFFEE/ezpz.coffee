import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les hôtels de Toronto | EZPZ Coffee" : "Custom Coffee Bags for Toronto Hotels | EZPZ Coffee";
  const description = isFr ? "Les hôtels de Toronto améliorent l'expérience de leurs clients en chambre avec le café de spécialité personnalisé d'EZPZ. Aucun minimum, design inclus." : "Toronto welcomes 27 million visitors a year. Custom branded specialty coffee turns your hotel's in-room amenity into a genuine brand experience — zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-hotels-toronto`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-hotels-toronto",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-hotels-toronto",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-hotels-toronto",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-hotels-toronto`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les hôtels de Toronto" : "Custom Coffee Bags for Toronto Hotels" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-hotels-toronto",
  city: { name: "Toronto", province: "ON", deliveryTime: "3–5 business days" },
  industry: {
    name: "Hotels",
    parentHref: "/en/custom-coffee-bags-hotels",
    parentLabel: "Hotels",
  },
  hero: {
    h1: "Custom Coffee for Toronto Hotels",
    subheadline:
      "27 million visitors a year come through Toronto. Give them a coffee worth remembering — and a bag worth keeping.",
    ctaSubject: "Custom coffee for Toronto hotel",
  },
  aeoAnswer:
    "Toronto hotels can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Bags are roasted to order in Montreal and delivered to Toronto in 3–5 business days. EZPZ handles design, sourcing, roasting, and shipping.",
  why: {
    heading: "What Toronto Hotels Know About Coffee as Brand",
    paragraphs: [
      "Toronto receives over 27 million visitors annually and hosts some of North America's largest conventions at the Metro Toronto Convention Centre. Across Yorkville, King West, the financial district, and the waterfront, hundreds of hotels compete for the same corporate and leisure traveler — all with largely identical lobbies, room sizes, and price points.",
      "The in-room coffee experience is one of the few moments where a hotel can register a genuine brand impression without spending on renovations. A specialty coffee bag with your hotel's branding, a curated origin story, and premium packaging signals the same care as a good mattress or a well-curated minibar. Pod coffee does the opposite — it signals that you bought the cheapest option in bulk.",
      "For Toronto's boutique and luxury properties — from The Broadview Hotel to Hotel X to Bisha — a branded house blend is table stakes. EZPZ makes this accessible for independent properties that can't justify a 5,000-bag minimum.",
    ],
  },
  useCases: {
    heading: "How Toronto Hotels Use Custom Coffee",
    items: [
      {
        title: "In-room welcome experience",
        body: "Replace generic pods with a custom-labeled specialty coffee bag. Pair with a French press or pour-over cone in the room description. Guests who photograph the setup share it — free marketing to a highly relevant travel audience.",
      },
      {
        title: "Lobby retail bags",
        body: "Sell branded bags in your lobby shop or at check-in. Corporate travelers — particularly those staying for Bay Street meetings or MTCC conferences — actively look for Toronto-branded gifts. Your hotel's coffee bag is a premium souvenir.",
      },
      {
        title: "Conference and meeting room gifting",
        body: "Toronto hosts dozens of major corporate conferences annually. Include a branded coffee bag in delegate packages, speaker gifts, or table settings. It's the one conference takeaway that doesn't go in the recycling bin.",
      },
      {
        title: "Corporate rate amenity packages",
        body: "Use branded coffee as a differentiator in your corporate rate proposals. 'Upon arrival, enjoy a bag of our signature house blend' is a meaningful line in a pitch deck for accounts worth tens of thousands of room nights per year.",
      },
    ],
  },
  localNote:
    "EZPZ delivers to Toronto hotels in 3–5 business days. Volume discounts apply for orders of 500+ bags — ideal for hotel welcome packages. We can accommodate recurring monthly orders on a schedule that keeps your rooms consistently stocked.",
  faq: [
    {
      q: "Can hotels set up a recurring order schedule?",
      a: "Yes. Hotels often set up monthly or quarterly recurring orders to keep their supply consistent. Contact us to discuss a schedule that works for your occupancy pattern.",
    },
    {
      q: "Do you offer branded bags for conference events?",
      a: "Yes. We handle event orders for conferences and conventions — typically 500–2,000 bags with a hotel's branding, the event name, or a co-branded design. Lead time is 2–3 weeks.",
    },
    {
      q: "What kind of coffee is appropriate for a hotel room?",
      a: "EZPZ recommends a versatile medium roast that works for guests with a French press, pour-over, or drip setup. We'll suggest an origin profile based on your hotel's positioning — light and fruity for a boutique property, smooth and approachable for a business hotel.",
    },
    {
      q: "What's the minimum order?",
      a: "100 bags at $11.75/bag. Most hotels start with a few hundred bags for a pilot program, then scale to full room stocking once the guest response confirms it.",
    },
  ],
  siblings: [
    { label: "Hotels · Vancouver", href: "/en/custom-coffee-hotels-vancouver" },
    { label: "Hotels · Montreal", href: "/en/custom-coffee-hotels-montreal" },
    { label: "Restaurants · Toronto", href: "/en/custom-coffee-restaurants-toronto" },
    { label: "Corporate Offices · Toronto", href: "/en/custom-coffee-corporate-offices-toronto" },
    { label: "Cafés · Toronto", href: "/en/custom-coffee-cafes-toronto" },
  ],
  ctaClose:
    "Toronto's best hotels compete on the details. Your coffee should be one of them.",
  cityPageHref: "/en/custom-coffee-bags-toronto",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-hotels-toronto",
  city: { name: "Toronto", province: "Ontario", deliveryTime: "3 à 5 jours ouvrables" },
  industry: {
    name: "Hôtels",
    parentHref: "/fr/custom-coffee-bags-hotels",
    parentLabel: "Hôtels",
  },
  hero: {
    h1: "Café personnalisé pour les hôtels de Toronto",
    subheadline: "Les hôtels de Toronto choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les hôtels de Toronto",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les hôtels de Toronto, Ontario, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 3 à 5 jours ouvrables.",
  why: {
    heading: "L'opportunité café dans les hôtels de Toronto",
    paragraphs: [
      "Toronto est la métropole la plus compétitive du Canada avec 27 millions de visiteurs par an. Les hôtels de Yorkville, King West et le Distillery District accueillent des voyageurs qui s'attendent à une expérience soignée. Dans ce contexte, le café en chambre n'est pas une commodity : c'est un point de contact de marque qui influence la perception globale du séjour.",
      "Les clients qui trouvent un sachet de café de spécialité personnalisé avec le nom et le logo de votre hôtel associent cette attention aux détails à l'ensemble de leur expérience. Ce sachet qu'ils emportent chez eux maintient votre marque présente dans leur cuisine pendant des semaines, et c'est ce rappel qui génère les avis positifs et les rebookings directs.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Toronto en 3 à 5 jours ouvrables. Aucun minimum signifie que vous pouvez tester avec une chambre ou un étage avant de déployer sur toute la propriété. Le café est torréfié frais à la commande pour garantir la qualité maximale à l'arrivée.",
    ],
  },
  useCases: {
    heading: "Comment les hôtels de Toronto utilisent le café de marque",
    items: [
    { title: "Aménité en chambre qui différencie l'hôtel", body: "Un sachet de café de spécialité personnalisé avec le logo de votre hôtel remplace les capsules génériques et transforme le rituel matinal en un moment de marque mémorable pour vos clients." },
    { title: "Vente au détail dans le lobby pour revenus additionnels", body: "Les clients qui adorent le café en chambre veulent en emporter. Un présentoir dans le lobby ou à la boutique génère des revenus directs à forte marge, sans gaspillage ni minimum de réapprovisionnement." },
    { title: "Cadeau de bienvenue pour les clients VIP et les groupes", body: "Pour les anniversaires, les lunes de miel et les séjours d'affaires, incluez un sachet de café personnalisé dans le panier de bienvenue. Le coût marginal est faible et la perception de valeur est élevée." },
    { title: "Station café pour les événements et conférences", body: "Les groupes de conférence et les équipes d'entreprise reçoivent votre café de marque dans les salles de réunion et les espaces de travail. C'est un différenciateur mémorable pour les organisateurs d'événements qui comparent les propriétés." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Toronto, Ontario en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Toronto ?", a: "Les commandes pour Toronto sont expédiées depuis notre torréfacteur montréalais et arrivent en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Comment les hôtels de Toronto peuvent-ils intégrer le café de marque dans leur programme d'aménités ?", a: "La plupart des hôtels de Toronto commencent avec un étage ou une catégorie de chambre pour tester la réponse des clients. EZPZ recommande de commencer avec 100 à 200 sacs pour avoir suffisamment d'inventaire pour évaluer l'impact sur les avis et les rebookings." },
    { q: "Le café EZPZ peut-il être utilisé pour le service aux chambres et le lobby café en même temps ?", a: "Oui. Beaucoup de propriétés de Toronto utilisent le même café de marque pour les aménités en chambre, le lobby café et la vente au détail dans la boutique. EZPZ peut fournir le café en vrac pour votre équipement café et les sacs préemballés pour la chambre." },
  ],
  siblings: [
    { label: "Hôtels · Montréal", href: "/fr/custom-coffee-hotels-montreal" },
    { label: "Hôtels · Vancouver", href: "/fr/custom-coffee-hotels-vancouver" },
    { label: "Cafés · Toronto", href: "/fr/custom-coffee-cafes-toronto" },
    { label: "Gyms · Toronto", href: "/fr/custom-coffee-gyms-toronto" },
    { label: "Restaurants · Toronto", href: "/fr/custom-coffee-restaurants-toronto" },
  ],
  ctaClose: "Vos clients de Toronto méritent un café qui correspond à l'expérience que vous créez.",
  cityPageHref: "/fr/custom-coffee-bags-toronto",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
