import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les hôtels de Québec | EZPZ Coffee" : "Custom Coffee Bags for Quebec City Hotels | EZPZ Coffee";
  const description = isFr ? "Les hôtels de Québec améliorent l'expérience de leurs clients en chambre avec le café de spécialité personnalisé d'EZPZ. Aucun minimum, design inclus." : "Quebec City hotels serve 10 million annual visitors in a UNESCO World Heritage city. Custom branded specialty coffee — French design, locally roasted, zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-hotels-quebec-city`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-hotels-quebec-city",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-hotels-quebec-city",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-hotels-quebec-city",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-hotels-quebec-city`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les hôtels de Québec" : "Custom Coffee Bags for Quebec City Hotels" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-hotels-quebec-city",
  city: { name: "Quebec City", province: "QC", deliveryTime: "2–3 business days" },
  industry: {
    name: "Hotels",
    parentHref: "/en/custom-coffee-bags-hotels",
    parentLabel: "Hotels",
  },
  hero: {
    h1: "Custom Coffee for Quebec City Hotels",
    subheadline:
      "Château Frontenac. Old Quebec stone walls. Carnaval in February, FEQ in July. Every guest is here for an experience — your coffee should be part of it.",
    ctaSubject: "Custom coffee for Quebec City hotel",
  },
  aeoAnswer:
    "Quebec City hotels can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Roasted to order in Montreal, delivered in 2–3 business days. French-language design is standard.",
  why: {
    heading: "Quebec City's Hotel Market and the Authenticity Imperative",
    paragraphs: [
      "Quebec City draws over 10 million visitors a year to one of the most historically intact UNESCO World Heritage sites in the Americas. Guests who come to Old Quebec — to walk the ramparts, eat in a stone-wall bistro, and sleep in a 19th-century building converted into a boutique hotel — are specifically seeking an experience that feels authentic to its place. The in-room coffee is part of that experience. A generic pod says generic hotel. A custom-branded specialty bag says 'we thought about every detail.'",
      "The Château Frontenac is the most photographed hotel in the world — a benchmark against which every Quebec City property is implicitly compared. Boutique hotels in the Saint-Jean-Baptiste and Saint-Roch neighbourhoods have carved out their own identities by leaning into local character, Quebec artisan suppliers, and provincial provenance. A coffee bag that says 'roasted au Québec' and carries the hotel's visual identity fits that philosophy exactly.",
      "EZPZ roasts in Montreal — same province, 2–3 day delivery — making 'roasted in Quebec' an accurate and compelling claim. French-language packaging is available as the default, consistent with Quebec's linguistic character and the Loi 101 requirement that product packaging be in French.",
    ],
  },
  useCases: {
    heading: "How Quebec City Hotels Use Branded Coffee",
    items: [
      {
        title: "Old Quebec welcome amenity",
        body: "A custom French-language coffee bag in the welcome amenity — describing your hotel's origin story and the coffee's provenance — is the kind of local detail that earns Trip Advisor mentions and Instagram shares from guests who appreciate the effort.",
      },
      {
        title: "Carnaval and winter festival programs",
        body: "Carnaval de Québec, held every February, is one of the world's largest winter festivals. Hotels at capacity during Carnaval have a captive audience of cold-weather tourists who will remember the hotel that had its own coffee. A limited-edition Carnaval-season bag is a souvenir with longevity.",
      },
      {
        title: "Festival d'été (FEQ) summer season",
        body: "July's Festival d'été draws 350,000+ visitors to the Plains of Abraham over 11 days. The hotels around Old Quebec fill with music travelers who are looking for experiences. A branded coffee bag in the room on arrival sets the right tone for a memory-making stay.",
      },
      {
        title: "Lobby gift shop sales",
        body: "Quebec City tourists are active buyers of Quebec-made, locally-branded products as souvenirs. A specialty coffee bag with your hotel's branding at $20–$22 sells well in lobby boutiques — particularly when the copy is in French and emphasizes local provenance.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal, Quebec — delivery to Quebec City takes 2–3 business days. French-language packaging is the default. For Carnaval (February) and FEQ (July) programs, order 4 weeks ahead of the festival start date.",
  faq: [
    {
      q: "Can you produce French-only packaging compliant with Quebec language law?",
      a: "Yes. EZPZ can produce French-only packaging — the default for Quebec City clients. The design will meet the requirement that commercial packaging available in Quebec be in French.",
    },
    {
      q: "Can we do limited-edition seasonal designs for Carnaval?",
      a: "Yes. Limited-edition seasonal runs are available from 100 bags minimum. We recommend ordering 4 weeks before Carnaval (early January) to receive in time for the February festival.",
    },
    {
      q: "How fast is delivery to Quebec City?",
      a: "2–3 business days from Montreal — among the fastest in Canada. Roasted to order, shipped fresh, with a one-way degas valve that preserves freshness for 8–12 months after roast.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. Most Quebec City hotels start with 100–200 bags and find strong sales in the lobby gift shop and consistent positive guest feedback in room reviews.",
    },
  ],
  siblings: [
    { label: "Hotels · Montreal", href: "/en/custom-coffee-hotels-montreal" },
    { label: "Restaurants · Quebec City", href: "/en/custom-coffee-restaurants-quebec-city" },
    { label: "Cafés · Quebec City", href: "/en/custom-coffee-cafes-quebec-city" },
    { label: "Spas · Quebec City", href: "/en/custom-coffee-spas-quebec-city" },
  ],
  ctaClose:
    "Quebec City is one of the world's most visited heritage destinations. Your hotel coffee should belong here.",
  cityPageHref: "/en/custom-coffee-bags-quebec-city",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-hotels-quebec-city",
  city: { name: "Québec", province: "Québec", deliveryTime: "2 à 3 jours ouvrables" },
  industry: {
    name: "Hôtels",
    parentHref: "/fr/custom-coffee-bags-hotels",
    parentLabel: "Hôtels",
  },
  hero: {
    h1: "Café personnalisé pour les hôtels de Québec",
    subheadline: "Les hôtels de Québec choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les hôtels de Québec",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les hôtels de Québec, Québec, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 2 à 3 jours ouvrables.",
  why: {
    heading: "L'opportunité café dans les hôtels de Québec",
    paragraphs: [
      "Québec est la capitale culturelle du Québec et l'une des destinations touristiques les plus visitées d'Amérique du Nord. Les hôtels de le Vieux-Québec, Saint-Jean-Baptiste et Grande Allée accueillent des voyageurs qui s'attendent à une expérience soignée. Dans ce contexte, le café en chambre n'est pas une commodity : c'est un point de contact de marque qui influence la perception globale du séjour.",
      "Les clients qui trouvent un sachet de café de spécialité personnalisé avec le nom et le logo de votre hôtel associent cette attention aux détails à l'ensemble de leur expérience. Ce sachet qu'ils emportent chez eux maintient votre marque présente dans leur cuisine pendant des semaines, et c'est ce rappel qui génère les avis positifs et les rebookings directs.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Québec en 2 à 3 jours ouvrables. Aucun minimum signifie que vous pouvez tester avec une chambre ou un étage avant de déployer sur toute la propriété. Le café est torréfié frais à la commande pour garantir la qualité maximale à l'arrivée.",
    ],
  },
  useCases: {
    heading: "Comment les hôtels de Québec utilisent le café de marque",
    items: [
    { title: "Aménité en chambre qui différencie l'hôtel", body: "Un sachet de café de spécialité personnalisé avec le logo de votre hôtel remplace les capsules génériques et transforme le rituel matinal en un moment de marque mémorable pour vos clients." },
    { title: "Vente au détail dans le lobby pour revenus additionnels", body: "Les clients qui adorent le café en chambre veulent en emporter. Un présentoir dans le lobby ou à la boutique génère des revenus directs à forte marge, sans gaspillage ni minimum de réapprovisionnement." },
    { title: "Cadeau de bienvenue pour les clients VIP et les groupes", body: "Pour les anniversaires, les lunes de miel et les séjours d'affaires, incluez un sachet de café personnalisé dans le panier de bienvenue. Le coût marginal est faible et la perception de valeur est élevée." },
    { title: "Station café pour les événements et conférences", body: "Les groupes de conférence et les équipes d'entreprise reçoivent votre café de marque dans les salles de réunion et les espaces de travail. C'est un différenciateur mémorable pour les organisateurs d'événements qui comparent les propriétés." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Québec, Québec en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Québec ?", a: "Les commandes pour Québec sont expédiées depuis notre torréfacteur montréalais et arrivent en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Comment les hôtels de Québec peuvent-ils intégrer le café de marque dans leur programme d'aménités ?", a: "La plupart des hôtels de Québec commencent avec un étage ou une catégorie de chambre pour tester la réponse des clients. EZPZ recommande de commencer avec 100 à 200 sacs pour avoir suffisamment d'inventaire pour évaluer l'impact sur les avis et les rebookings." },
    { q: "Le café EZPZ peut-il être utilisé pour le service aux chambres et le lobby café en même temps ?", a: "Oui. Beaucoup de propriétés de Québec utilisent le même café de marque pour les aménités en chambre, le lobby café et la vente au détail dans la boutique. EZPZ peut fournir le café en vrac pour votre équipement café et les sacs préemballés pour la chambre." },
  ],
  siblings: [
    { label: "Hôtels · Montréal", href: "/fr/custom-coffee-hotels-montreal" },
    { label: "Hôtels · Toronto", href: "/fr/custom-coffee-hotels-toronto" },
    { label: "Cafés · Québec", href: "/fr/custom-coffee-cafes-quebec-city" },
    { label: "Gyms · Québec", href: "/fr/custom-coffee-gyms-quebec-city" },
    { label: "Restaurants · Québec", href: "/fr/custom-coffee-restaurants-quebec-city" },
  ],
  ctaClose: "Vos clients de Québec méritent un café qui correspond à l'expérience que vous créez.",
  cityPageHref: "/fr/custom-coffee-bags-quebec-city",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
