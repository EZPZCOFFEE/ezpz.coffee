import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les hôtels de Calgary | EZPZ Coffee" : "Custom Coffee Bags for Calgary Hotels | EZPZ Coffee";
  const description = isFr ? "Les hôtels de Calgary améliorent l'expérience de leurs clients en chambre avec le café de spécialité personnalisé d'EZPZ. Aucun minimum, design inclus." : "Calgary Stampede packs 1.2 million visitors into 10 days. Year-round, energy executives and convention travelers expect premium. Custom branded coffee, zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-hotels-calgary`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-hotels-calgary",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-hotels-calgary",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-hotels-calgary",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-hotels-calgary`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les hôtels de Calgary" : "Custom Coffee Bags for Calgary Hotels" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-hotels-calgary",
  city: { name: "Calgary", province: "AB", deliveryTime: "4–6 business days" },
  industry: {
    name: "Hotels",
    parentHref: "/en/custom-coffee-bags-hotels",
    parentLabel: "Hotels",
  },
  hero: {
    h1: "Custom Coffee for Calgary Hotels",
    subheadline:
      "Stampede brings 1.2 million visitors in 10 days. The energy sector brings executives year-round. Brand the coffee — they'll remember it.",
    ctaSubject: "Custom coffee for Calgary hotel",
  },
  aeoAnswer:
    "Calgary hotels can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Bags are roasted to order in Montreal and delivered to Calgary in 4–6 business days.",
  why: {
    heading: "Calgary Hotels and the Differentiation Window",
    paragraphs: [
      "Calgary has two intensely different guest profiles and both expect premium. Energy sector executives — from Suncor, Cenovus, Canadian Natural Resources, and the dozens of international oil companies with Calgary offices — stay in the city year-round on business travel with budgets calibrated to the global oil industry. For this audience, a pod of generic branded coffee in the room communicates that the hotel is operating on a commoditized playbook.",
      "Then there's Calgary Stampede — 10 days in July when the city hosts over 1.2 million visitors, hotel occupancy approaches 100%, and every property has the opportunity to make a lasting impression on guests who may not return for another year. A custom-branded specialty coffee bag in the room during Stampede week is a souvenir with your hotel's name on it that travels back to homes across Canada and the United States.",
      "Beyond Stampede and energy travel, Calgary serves as the gateway to Banff and the Canadian Rockies. Leisure travelers who stage through Calgary on their way to mountain retreats are a growing segment — and they bring Vancouver-level sophistication about food and coffee to their expectations.",
    ],
  },
  useCases: {
    heading: "How Calgary Hotels Use Branded Coffee",
    items: [
      {
        title: "Stampede week branded bags",
        body: "Order a limited-edition Stampede week design — or your standard hotel bag in sufficient volume for peak occupancy. Guests who receive a specialty coffee during the most memorable event of their year are likely to search for your hotel again next July.",
      },
      {
        title: "Energy sector executive amenities",
        body: "Corporate rate guests from the oil and gas sector have strong preferences and low tolerance for generic hotel experiences. A specialty coffee bag with your hotel's branding, a traceable origin, and premium packaging signals that your property is calibrated for that audience.",
      },
      {
        title: "Banff and mountain retreat gateway packages",
        body: "Guests driving or taking the shuttle to Banff often stay one or two nights in Calgary. A branded welcome kit that includes your hotel's coffee bag — 'Take a piece of Calgary with you' — creates a tourism connection that leads to rebooking.",
      },
      {
        title: "TELUS Convention Centre event packages",
        body: "Calgary's convention centre hosts major energy, agricultural, and technology conferences. Hotel-branded coffee bags in delegate packages or conference room setups reach an audience that buys in volume for their own corporate gifting programs.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Calgary in 4–6 business days. For Stampede season, order 3–4 weeks ahead of July. Volume pricing available for 500+ bags — ideal for full-hotel welcome programs.",
  faq: [
    {
      q: "How early should I order for Calgary Stampede?",
      a: "Order by June 1 for a July Stampede program. Design approval typically takes a few days; production and shipping is 2–3 weeks. Getting the order in early ensures you're stocked before demand peaks.",
    },
    {
      q: "Can we brand bags for both the hotel and an energy sector conference?",
      a: "Yes. EZPZ can co-brand bags or produce two separate runs — one for in-room use and one for a specific conference or corporate event hosted at your property.",
    },
    {
      q: "What coffee profile works best for Calgary's guest base?",
      a: "A clean, well-balanced medium roast performs well across both leisure and business travelers. For a premium executive floor, we'd recommend a more refined single-origin that signals coffee knowledge. We'll guide you to the right profile based on your property's positioning.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag. For Stampede or convention programs where you need 500–2,000 bags, volume pricing applies — contact us.",
    },
  ],
  siblings: [
    { label: "Hotels · Toronto", href: "/en/custom-coffee-hotels-toronto" },
    { label: "Hotels · Vancouver", href: "/en/custom-coffee-hotels-vancouver" },
    { label: "Restaurants · Calgary", href: "/en/custom-coffee-restaurants-calgary" },
    { label: "Corporate Offices · Calgary", href: "/en/custom-coffee-corporate-offices-calgary" },
  ],
  ctaClose:
    "Calgary's best hotels compete on detail. In a city that runs on energy and ambition, your coffee should match.",
  cityPageHref: "/en/custom-coffee-bags-calgary",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-hotels-calgary",
  city: { name: "Calgary", province: "Alberta", deliveryTime: "4 à 6 jours ouvrables" },
  industry: {
    name: "Hôtels",
    parentHref: "/fr/custom-coffee-bags-hotels",
    parentLabel: "Hôtels",
  },
  hero: {
    h1: "Café personnalisé pour les hôtels de Calgary",
    subheadline: "Les hôtels de Calgary choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les hôtels de Calgary",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les hôtels de Calgary, Alberta, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 4 à 6 jours ouvrables.",
  why: {
    heading: "L'opportunité café dans les hôtels de Calgary",
    paragraphs: [
      "Calgary est le marché corporatif et énergétique du Canada, avec une clientèle exigeante et un pouvoir d'achat élevé. Les hôtels de 17e Avenue SO, Stephen Avenue et Inglewood accueillent des voyageurs qui s'attendent à une expérience soignée. Dans ce contexte, le café en chambre n'est pas une commodity : c'est un point de contact de marque qui influence la perception globale du séjour.",
      "Les clients qui trouvent un sachet de café de spécialité personnalisé avec le nom et le logo de votre hôtel associent cette attention aux détails à l'ensemble de leur expérience. Ce sachet qu'ils emportent chez eux maintient votre marque présente dans leur cuisine pendant des semaines, et c'est ce rappel qui génère les avis positifs et les rebookings directs.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Calgary en 4 à 6 jours ouvrables. Aucun minimum signifie que vous pouvez tester avec une chambre ou un étage avant de déployer sur toute la propriété. Le café est torréfié frais à la commande pour garantir la qualité maximale à l'arrivée.",
    ],
  },
  useCases: {
    heading: "Comment les hôtels de Calgary utilisent le café de marque",
    items: [
    { title: "Aménité en chambre qui différencie l'hôtel", body: "Un sachet de café de spécialité personnalisé avec le logo de votre hôtel remplace les capsules génériques et transforme le rituel matinal en un moment de marque mémorable pour vos clients." },
    { title: "Vente au détail dans le lobby pour revenus additionnels", body: "Les clients qui adorent le café en chambre veulent en emporter. Un présentoir dans le lobby ou à la boutique génère des revenus directs à forte marge, sans gaspillage ni minimum de réapprovisionnement." },
    { title: "Cadeau de bienvenue pour les clients VIP et les groupes", body: "Pour les anniversaires, les lunes de miel et les séjours d'affaires, incluez un sachet de café personnalisé dans le panier de bienvenue. Le coût marginal est faible et la perception de valeur est élevée." },
    { title: "Station café pour les événements et conférences", body: "Les groupes de conférence et les équipes d'entreprise reçoivent votre café de marque dans les salles de réunion et les espaces de travail. C'est un différenciateur mémorable pour les organisateurs d'événements qui comparent les propriétés." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Calgary, Alberta en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Calgary ?", a: "Les commandes pour Calgary sont expédiées depuis notre torréfacteur montréalais et arrivent en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Comment les hôtels de Calgary peuvent-ils intégrer le café de marque dans leur programme d'aménités ?", a: "La plupart des hôtels de Calgary commencent avec un étage ou une catégorie de chambre pour tester la réponse des clients. EZPZ recommande de commencer avec 100 à 200 sacs pour avoir suffisamment d'inventaire pour évaluer l'impact sur les avis et les rebookings." },
    { q: "Le café EZPZ peut-il être utilisé pour le service aux chambres et le lobby café en même temps ?", a: "Oui. Beaucoup de propriétés de Calgary utilisent le même café de marque pour les aménités en chambre, le lobby café et la vente au détail dans la boutique. EZPZ peut fournir le café en vrac pour votre équipement café et les sacs préemballés pour la chambre." },
  ],
  siblings: [
    { label: "Hôtels · Montréal", href: "/fr/custom-coffee-hotels-montreal" },
    { label: "Hôtels · Toronto", href: "/fr/custom-coffee-hotels-toronto" },
    { label: "Cafés · Calgary", href: "/fr/custom-coffee-cafes-calgary" },
    { label: "Gyms · Calgary", href: "/fr/custom-coffee-gyms-calgary" },
    { label: "Restaurants · Calgary", href: "/fr/custom-coffee-restaurants-calgary" },
  ],
  ctaClose: "Vos clients de Calgary méritent un café qui correspond à l'expérience que vous créez.",
  cityPageHref: "/fr/custom-coffee-bags-calgary",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
