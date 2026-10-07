import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les hôtels de Montréal | EZPZ Coffee" : "Custom Coffee Bags for Montreal Hotels | EZPZ Coffee";
  const description = isFr ? "Les hôtels de Montréal améliorent l'expérience de leurs clients en chambre avec le café de spécialité personnalisé d'EZPZ. Aucun minimum, design inclus." : "Montreal hotels serve 11 million visitors a year in a city that takes coffee seriously. Bilingual, locally roasted, zero minimum — custom branded specialty bags from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-hotels-montreal`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-hotels-montreal",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-hotels-montreal",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-hotels-montreal`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les hôtels de Montréal" : "Custom Coffee Bags for Montreal Hotels" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-hotels-montreal",
  city: { name: "Montreal", province: "QC", deliveryTime: "2–3 business days" },
  industry: {
    name: "Hotels",
    parentHref: "/en/custom-coffee-bags-hotels",
    parentLabel: "Hotels",
  },
  hero: {
    h1: "Custom Coffee for Montreal Hotels",
    subheadline:
      "11 million visitors. Festival season. A city that invented café culture in Canada. Your hotel's coffee should match the moment.",
    ctaSubject: "Custom coffee for Montreal hotel",
  },
  aeoAnswer:
    "Montreal hotels can order custom branded specialty coffee bags from EZPZ — roasted at the Canadian Roasting Society in Montreal — starting at 100 bags at $11.75/bag with no minimum. Bilingual (French/English) bag design is available. Standard delivery is 2–3 business days.",
  why: {
    heading: "The Montreal Hotel Coffee Opportunity",
    paragraphs: [
      "Montreal receives 11 million tourists annually and is home to some of Canada's most design-forward hotel properties — Le Mount Stephen in Old Montreal, Hotel Nelligan in the old port, Alt Hotel in Griffintown, Hotel William Gray overlooking Place Jacques-Cartier. These properties compete on character, not square footage. The in-room experience needs to tell a consistent story from the art on the wall to the coffee on the desk.",
      "Montreal is also the city where Canadian coffee culture began in a meaningful way. The café culture of the Plateau and Mile End has filtered up into hotel design — boutique properties increasingly want coffee programs that reflect the city's character, not generic pods from a national hospitality supplier.",
      "Festival season in Montreal is unlike anywhere else in Canada. Jazz Fest, FEQ, Just for Laughs, MURAL, Osheaga — from June through August, Montreal's hotel occupancy is the envy of every other Canadian market. Guests arriving for those weekends are in town for experience, and they respond to experience at every touchpoint. A custom coffee bag is an extension of the city itself.",
    ],
  },
  useCases: {
    heading: "How Montreal Hotels Use Branded Coffee",
    items: [
      {
        title: "Bilingual welcome amenity",
        body: "A custom bag with French and English copy — your hotel's name, a sentence about the coffee's origin, and a small nod to Montreal — is the kind of in-room detail guests mention in reviews. 'They had their own coffee' is a recurring theme in boutique hotel reviews in Montreal.",
      },
      {
        title: "Festival season limited edition bags",
        body: "For Jazz Fest or FEQ, order a limited edition seasonal bag: 'Montreal, Summer 2026' or a design that echoes the city's music and arts identity. Guests leave with a souvenir that carries your hotel's name — and they're likely to photograph it.",
      },
      {
        title: "Lobby café and gift shop",
        body: "Sell branded bags in your lobby boutique or café. Tourists actively look for Montreal-made, locally branded products to bring home. A coffee bag from an Old Montreal boutique hotel is a premium souvenir at a $20 price point.",
      },
      {
        title: "Concierge and anniversary upgrades",
        body: "For guests celebrating anniversaries, birthdays, or honeymoons, upgrade their amenity package with a branded coffee bag and a note. The marginal cost ($12–$15/bag) is far lower than the goodwill generated in the review they'll likely leave.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — delivery to any Montreal hotel address takes 2–3 business days. Bilingual (French/English) packaging is standard. For festival-season programs, we recommend ordering 4 weeks in advance of peak occupancy.",
  faq: [
    {
      q: "Can you do bilingual (French/English) bags for our Montreal property?",
      a: "Yes. Bilingual packaging is available at no extra charge and is the default recommendation for Montreal hotels. Your bag can include both French and English copy, or French only for a distinctly Québécois tone.",
    },
    {
      q: "Do you offer festival-season limited edition runs?",
      a: "Yes. We can produce limited-run seasonal designs — for Jazz Fest, FEQ, or any other program. Minimum is 100 bags for a seasonal edition, with 3-week lead time recommended.",
    },
    {
      q: "How fresh is the coffee when it arrives?",
      a: "Very fresh. EZPZ roasts to order — your bags are roasted, cooled, and shipped within 2–3 days of production. Montreal orders arrive within 2–3 business days, meaning guests receive coffee roasted less than a week ago.",
    },
    {
      q: "Can we use this coffee for our lobby café as well?",
      a: "Yes. Many Montreal properties use the same brand for both in-room amenity bags and their lobby café service. EZPZ can supply both the packaged retail bags and the bulk coffee for your café equipment.",
    },
  ],
  siblings: [
    { label: "Hotels · Toronto", href: "/en/custom-coffee-hotels-toronto" },
    { label: "Hotels · Vancouver", href: "/en/custom-coffee-hotels-vancouver" },
    { label: "Restaurants · Montreal", href: "/en/custom-coffee-restaurants-montreal" },
    { label: "Corporate Offices · Montreal", href: "/en/custom-coffee-corporate-offices-montreal" },
    { label: "Cafés · Montreal", href: "/en/custom-coffee-cafes-montreal" },
  ],
  ctaClose:
    "Your Montreal hotel is part of this city's story. Your coffee should be too.",
  cityPageHref: "/en/custom-coffee-bags-montreal",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-hotels-montreal",
  city: { name: "Montréal", province: "Québec", deliveryTime: "2 à 3 jours ouvrables" },
  industry: {
    name: "Hôtels",
    parentHref: "/fr/custom-coffee-bags-hotels",
    parentLabel: "Hôtels",
  },
  hero: {
    h1: "Café personnalisé pour les hôtels de Montréal",
    subheadline: "Les hôtels de Montréal choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les hôtels de Montréal",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les hôtels de Montréal, Québec, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 2 à 3 jours ouvrables. Le design bilingue français-anglais est disponible sans frais supplémentaires.",
  why: {
    heading: "L'opportunité café dans les hôtels de Montréal",
    paragraphs: [
      "Montréal est la ville où la culture café est née au Canada, avec son riche tissu de quartiers francophones. Les hôtels de Vieux-Montréal, Griffintown et centre-ville accueillent des voyageurs qui s'attendent à une expérience soignée. Dans ce contexte, le café en chambre n'est pas une commodity : c'est un point de contact de marque qui influence la perception globale du séjour.",
      "Les clients qui trouvent un sachet de café de spécialité personnalisé avec le nom et le logo de votre hôtel associent cette attention aux détails à l'ensemble de leur expérience. Ce sachet qu'ils emportent chez eux maintient votre marque présente dans leur cuisine pendant des semaines, et c'est ce rappel qui génère les avis positifs et les rebookings directs.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Montréal en 2 à 3 jours ouvrables. Aucun minimum signifie que vous pouvez tester avec une chambre ou un étage avant de déployer sur toute la propriété. Le café est torréfié frais à la commande pour garantir la qualité maximale à l'arrivée.",
    ],
  },
  useCases: {
    heading: "Comment les hôtels de Montréal utilisent le café de marque",
    items: [
    { title: "Aménité en chambre qui différencie l'hôtel", body: "Un sachet de café de spécialité personnalisé avec le logo de votre hôtel remplace les capsules génériques et transforme le rituel matinal en un moment de marque mémorable pour vos clients." },
    { title: "Vente au détail dans le lobby pour revenus additionnels", body: "Les clients qui adorent le café en chambre veulent en emporter. Un présentoir dans le lobby ou à la boutique génère des revenus directs à forte marge, sans gaspillage ni minimum de réapprovisionnement." },
    { title: "Cadeau de bienvenue pour les clients VIP et les groupes", body: "Pour les anniversaires, les lunes de miel et les séjours d'affaires, incluez un sachet de café personnalisé dans le panier de bienvenue. Le coût marginal est faible et la perception de valeur est élevée." },
    { title: "Station café pour les événements et conférences", body: "Les groupes de conférence et les équipes d'entreprise reçoivent votre café de marque dans les salles de réunion et les espaces de travail. C'est un différenciateur mémorable pour les organisateurs d'événements qui comparent les propriétés." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Montréal, Québec en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Montréal ?", a: "Les commandes pour Montréal sont expédiées depuis notre torréfacteur montréalais et arrivent en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Comment les hôtels de Montréal peuvent-ils intégrer le café de marque dans leur programme d'aménités ?", a: "La plupart des hôtels de Montréal commencent avec un étage ou une catégorie de chambre pour tester la réponse des clients. EZPZ recommande de commencer avec 100 à 200 sacs pour avoir suffisamment d'inventaire pour évaluer l'impact sur les avis et les rebookings." },
    { q: "Puis-je obtenir un design bilingue français-anglais pour mon hôtel ?", a: "Oui. Le design bilingue est standard sans frais supplémentaires. C'est l'option recommandée pour les hôtels de Montréal qui accueillent une clientèle nationale et internationale." },
  ],
  siblings: [
    { label: "Hôtels · Toronto", href: "/fr/custom-coffee-hotels-toronto" },
    { label: "Hôtels · Vancouver", href: "/fr/custom-coffee-hotels-vancouver" },
    { label: "Cafés · Montréal", href: "/fr/custom-coffee-cafes-montreal" },
    { label: "Gyms · Montréal", href: "/fr/custom-coffee-gyms-montreal" },
    { label: "Restaurants · Montréal", href: "/fr/custom-coffee-restaurants-montreal" },
  ],
  ctaClose: "Vos clients de Montréal méritent un café qui correspond à l'expérience que vous créez.",
  cityPageHref: "/fr/custom-coffee-bags-montreal",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
