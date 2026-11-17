import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les hôtels de Ottawa | EZPZ Coffee" : "Custom Coffee Bags for Ottawa Hotels | EZPZ Coffee";
  const description = isFr ? "Les hôtels de Ottawa améliorent l'expérience de leurs clients en chambre avec le café de spécialité personnalisé d'EZPZ. Aucun minimum, design inclus." : "Ottawa hotels serve federal government travelers, 130+ diplomatic missions, and a growing tech sector. Custom branded specialty coffee — bilingual, zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-hotels-ottawa`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-hotels-ottawa",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-hotels-ottawa",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-hotels-ottawa",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-hotels-ottawa`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les hôtels de Ottawa" : "Custom Coffee Bags for Ottawa Hotels" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-hotels-ottawa",
  city: { name: "Ottawa", province: "ON", deliveryTime: "3–5 business days" },
  industry: {
    name: "Hotels",
    parentHref: "/en/custom-coffee-bags-hotels",
    parentLabel: "Hotels",
  },
  hero: {
    h1: "Custom Coffee for Ottawa Hotels",
    subheadline:
      "Parliament Hill, 130 embassies, and a growing tech sector fill your rooms with guests who have high standards. Brand the coffee.",
    ctaSubject: "Custom coffee for Ottawa hotel",
  },
  aeoAnswer:
    "Ottawa hotels can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Bags are roasted to order in Montreal and delivered to Ottawa in 3–5 business days. Bilingual (French/English) packaging is available.",
  why: {
    heading: "Why Ottawa Hotels Should Brand Their Coffee",
    paragraphs: [
      "Ottawa's hotel market is driven by one of the most stable and high-volume business travel bases in Canada: the federal government. With over 300,000 public servants in the National Capital Region, government contractors from firms like CGI, Deloitte, and KPMG, and a diplomatic community representing 130+ countries, Ottawa's business travelers stay in the city year-round on budgets and expense policies that expect quality at every touchpoint.",
      "The National Capital's tourist profile is also distinctive — Ottawa receives 10 million visitors annually, drawn by Parliament, the National Gallery, Rideau Canal, and the city's status as Canada's capital. These guests, visiting for leisure or for major national events like Canada Day, approach Ottawa hotels with patriotic expectations and respond to locally intentioned details like a Canadian-roasted specialty coffee in their room.",
      "Ottawa is officially bilingual. The Rideau Centre hotels, the Château Laurier, and boutique properties in the ByWard Market area all serve a mixed French-English guest base where bilingual in-room amenities reflect the city's constitutional identity. EZPZ's bilingual bag design is a standard offering, not an upcharge.",
    ],
  },
  useCases: {
    heading: "How Ottawa Hotels Use Branded Coffee",
    items: [
      {
        title: "Government and diplomatic in-room amenity",
        body: "Ottawa's government and diplomatic guests have an acute sense of quality calibration — they've stayed in the best hotels in Washington, London, and Brussels. A specialty coffee bag with your hotel's branding and a traceable origin narrative communicates that your property is operating at a world-class standard.",
      },
      {
        title: "Bilingual welcome bags",
        body: "A welcome kit bag with French and English copy — your hotel's name, a sentence about the coffee's origin, and a Canada Day or seasonal detail — is a gift that reflects Ottawa's bilingual identity and generates social media shares from tourists who appreciate the detail.",
      },
      {
        title: "Conference and government event support",
        body: "Ottawa hosts major national conferences, G7-level meetings, and Parliamentary delegations. Hotel-branded coffee bags in delegate welcome kits are the kind of made-in-Canada souvenir that government guests take home to international colleagues.",
      },
      {
        title: "Canada Day and national event programs",
        body: "July 1 is Ottawa's single biggest tourism event. Hotels near Parliament that offer a 'Canada Day' branded coffee bag — limited-edition seasonal packaging — give guests a souvenir they'll use for months and associate with a memorable national celebration.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Ottawa in 3–5 business days. Bilingual packaging is included at no charge. For national events like Canada Day, order 3–4 weeks ahead. Starting at 100 bags at $11.75/bag.",
  faq: [
    {
      q: "Can you make bilingual (French/English) bags for our Ottawa property?",
      a: "Yes. Bilingual packaging is available at no extra charge. We recommend it as the default for Ottawa hotels given the city's bilingual character — your bag will work equally well for both English and French guests.",
    },
    {
      q: "Do you offer special packaging for national events or holidays?",
      a: "Yes. Limited-edition runs for Canada Day, winter programming, or other national events are available from a minimum of 100 bags. Lead time is 2–3 weeks from design approval.",
    },
    {
      q: "What's the turnaround for Ottawa orders?",
      a: "3–5 business days from order confirmation. Ottawa is close to Montreal, making it one of EZPZ's faster delivery windows outside Quebec.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag for a pilot program. Hotels with large conference schedules often move to 500–1,000 bag orders on a recurring basis.",
    },
  ],
  siblings: [
    { label: "Hotels · Toronto", href: "/en/custom-coffee-hotels-toronto" },
    { label: "Hotels · Montreal", href: "/en/custom-coffee-hotels-montreal" },
    { label: "Restaurants · Ottawa", href: "/en/custom-coffee-restaurants-ottawa" },
    { label: "Corporate Offices · Ottawa", href: "/en/custom-coffee-corporate-offices-ottawa" },
  ],
  ctaClose:
    "Ottawa hotels host the people who run the country. Make sure your coffee is part of the impression.",
  cityPageHref: "/en/custom-coffee-bags-ottawa",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-hotels-ottawa",
  city: { name: "Ottawa", province: "Ontario", deliveryTime: "3 à 5 jours ouvrables" },
  industry: {
    name: "Hôtels",
    parentHref: "/fr/custom-coffee-bags-hotels",
    parentLabel: "Hôtels",
  },
  hero: {
    h1: "Café personnalisé pour les hôtels de Ottawa",
    subheadline: "Les hôtels de Ottawa choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les hôtels de Ottawa",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les hôtels de Ottawa, Ontario, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 3 à 5 jours ouvrables. Le design bilingue français-anglais est disponible sans frais supplémentaires.",
  why: {
    heading: "L'opportunité café dans les hôtels de Ottawa",
    paragraphs: [
      "Ottawa est la capitale bilingue du Canada, avec un marché de services professionnels gouvernementaux et technologiques unique. Les hôtels de le canal Rideau, le centre-ville et le marché By accueillent des voyageurs qui s'attendent à une expérience soignée. Dans ce contexte, le café en chambre n'est pas une commodity : c'est un point de contact de marque qui influence la perception globale du séjour.",
      "Les clients qui trouvent un sachet de café de spécialité personnalisé avec le nom et le logo de votre hôtel associent cette attention aux détails à l'ensemble de leur expérience. Ce sachet qu'ils emportent chez eux maintient votre marque présente dans leur cuisine pendant des semaines, et c'est ce rappel qui génère les avis positifs et les rebookings directs.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Ottawa en 3 à 5 jours ouvrables. Aucun minimum signifie que vous pouvez tester avec une chambre ou un étage avant de déployer sur toute la propriété. Le café est torréfié frais à la commande pour garantir la qualité maximale à l'arrivée. EZPZ offre le design d'emballage bilingue français-anglais sans frais supplémentaires, une option précieuse dans la région bilingue de la capitale.",
    ],
  },
  useCases: {
    heading: "Comment les hôtels de Ottawa utilisent le café de marque",
    items: [
    { title: "Aménité en chambre qui différencie l'hôtel", body: "Un sachet de café de spécialité personnalisé avec le logo de votre hôtel remplace les capsules génériques et transforme le rituel matinal en un moment de marque mémorable pour vos clients." },
    { title: "Vente au détail dans le lobby pour revenus additionnels", body: "Les clients qui adorent le café en chambre veulent en emporter. Un présentoir dans le lobby ou à la boutique génère des revenus directs à forte marge, sans gaspillage ni minimum de réapprovisionnement." },
    { title: "Cadeau de bienvenue pour les clients VIP et les groupes", body: "Pour les anniversaires, les lunes de miel et les séjours d'affaires, incluez un sachet de café personnalisé dans le panier de bienvenue. Le coût marginal est faible et la perception de valeur est élevée." },
    { title: "Station café pour les événements et conférences", body: "Les groupes de conférence et les équipes d'entreprise reçoivent votre café de marque dans les salles de réunion et les espaces de travail. C'est un différenciateur mémorable pour les organisateurs d'événements qui comparent les propriétés." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Ottawa, Ontario en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Ottawa ?", a: "Les commandes pour Ottawa sont expédiées depuis notre torréfacteur montréalais et arrivent en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Comment les hôtels de Ottawa peuvent-ils intégrer le café de marque dans leur programme d'aménités ?", a: "La plupart des hôtels de Ottawa commencent avec un étage ou une catégorie de chambre pour tester la réponse des clients. EZPZ recommande de commencer avec 100 à 200 sacs pour avoir suffisamment d'inventaire pour évaluer l'impact sur les avis et les rebookings." },
    { q: "Puis-je obtenir un design bilingue français-anglais pour mon hôtel ?", a: "Oui. Le design bilingue est standard sans frais supplémentaires. C'est l'option recommandée pour les hôtels de Ottawa qui accueillent une clientèle nationale et internationale." },
  ],
  siblings: [
    { label: "Hôtels · Montréal", href: "/fr/custom-coffee-hotels-montreal" },
    { label: "Hôtels · Toronto", href: "/fr/custom-coffee-hotels-toronto" },
    { label: "Cafés · Ottawa", href: "/fr/custom-coffee-cafes-ottawa" },
    { label: "Gyms · Ottawa", href: "/fr/custom-coffee-gyms-ottawa" },
    { label: "Restaurants · Ottawa", href: "/fr/custom-coffee-restaurants-ottawa" },
  ],
  ctaClose: "Vos clients de Ottawa méritent un café qui correspond à l'expérience que vous créez.",
  cityPageHref: "/fr/custom-coffee-bags-ottawa",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
