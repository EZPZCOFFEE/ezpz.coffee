import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les hôtels de Vancouver | EZPZ Coffee" : "Custom Coffee Bags for Vancouver Hotels | EZPZ Coffee";
  const description = isFr ? "Les hôtels de Vancouver améliorent l'expérience de leurs clients en chambre avec le café de spécialité personnalisé d'EZPZ. Aucun minimum, design inclus." : "Vancouver's eco-conscious luxury hotel market demands authentic amenities. Custom branded specialty coffee — sustainable packaging, zero minimum, from $11.75/bag, delivered in 4–6 business days.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-hotels-vancouver`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-hotels-vancouver",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-hotels-vancouver",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-hotels-vancouver",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-hotels-vancouver`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les hôtels de Vancouver" : "Custom Coffee Bags for Vancouver Hotels" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-hotels-vancouver",
  city: { name: "Vancouver", province: "BC", deliveryTime: "4–6 business days" },
  industry: {
    name: "Hotels",
    parentHref: "/en/custom-coffee-bags-hotels",
    parentLabel: "Hotels",
  },
  hero: {
    h1: "Custom Coffee for Vancouver Hotels",
    subheadline:
      "Vancouver guests are among the most traveled, most discerning in Canada. Your in-room coffee should match the mountains outside the window.",
    ctaSubject: "Custom coffee for Vancouver hotel",
  },
  aeoAnswer:
    "Vancouver hotels can order custom branded specialty coffee bags from EZPZ with no minimum. Bags start at 100 units at $11.75/bag, roasted to order in Montreal and arriving in Vancouver in 4–6 business days. Sustainable packaging options are available.",
  why: {
    heading: "Why Vancouver's Hotel Market Demands Better Coffee",
    paragraphs: [
      "Vancouver welcomes over 11 million tourists annually and serves as the primary Pacific gateway for travelers from Asia, the United States, and Europe. The city's luxury hotel landscape — Rosewood Hotel Georgia, Fairmont Pacific Rim, JW Marriott Parq, Sutton Place — has set a global standard for Pacific Northwest hospitality. Guests arriving from Tokyo, San Francisco, or London are comparing your hotel's coffee against the best in the world.",
      "Vancouver's identity is built around authenticity, sustainability, and natural beauty. That identity should extend to your in-room amenities. Guests willing to pay $400–$1,000 per night notice when the coffee pod in the room feels like it was purchased from a warehouse. A custom specialty coffee bag — describing its origin, roast profile, and the hotel's commitment to quality — tells a coherent brand story.",
      "EZPZ's bags use air-tight sealed pouches with one-way degas valves, preserving the coffee's freshness without the plastic waste of individual pods. For Vancouver properties with sustainability commitments, that's a material difference that belongs on your amenity list.",
    ],
  },
  useCases: {
    heading: "How Vancouver Hotels Use Branded Coffee",
    items: [
      {
        title: "Pacific Northwest welcome amenity",
        body: "A 'taste of Vancouver' in-room coffee bag — a single-origin from a Pacific Rim coffee region with a label featuring your hotel's design language — is the kind of welcome gift guests mention in reviews and photograph on arrival.",
      },
      {
        title: "YVR arrival experience",
        body: "Vancouver's airport is one of the world's best-reviewed. Luxury guests arriving via YVR look for local, premium experiences from the first moment. A branded bag in the welcome kit waiting in the room delivers on that expectation immediately.",
      },
      {
        title: "Eco-certified amenity program",
        body: "Vancouver hotels with LEED or Green Key certification can use EZPZ's packaging to satisfy amenity standards. One-way valve bags generate significantly less waste than individual pods — and the single-bag-per-stay format is inherently lower waste per cup.",
      },
      {
        title: "Mountain retreat and Whistler packages",
        body: "Corporate retreats, ski packages, and North Shore getaways often use a Vancouver hotel as a base. Include branded bags in retreat packages, spa day takeaways, or ski-trip gift kits. A coffee that travels from the hotel to the chalet — with your brand on it — has exceptional staying power.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Vancouver in 4–6 business days. We recommend ordering with at least 2 weeks lead time, or 3 weeks for event or seasonal programs. Sustainable packaging (kraft paper exterior, minimal plastic) is available on request.",
  faq: [
    {
      q: "Do you offer sustainable packaging for eco-certified hotels?",
      a: "Yes. EZPZ's standard bags already use minimal-waste packaging with a one-way degas valve. For hotels with specific eco-certification requirements, we can discuss kraft-forward or compostable bag options.",
    },
    {
      q: "Can you do a Pacific Northwest themed coffee for our hotel?",
      a: "Absolutely. We'll work with you to select an origin that fits a Pacific Rim narrative — an Ethiopian natural, a washed Colombian, a Guatemalan Huehuetenango — and design packaging that reflects your hotel's Pacific Northwest aesthetic.",
    },
    {
      q: "What's the lead time for Vancouver?",
      a: "4–6 business days for standard orders. For seasonal programs or opening orders, we recommend placing with 3 weeks lead time to accommodate design approvals and shipping.",
    },
    {
      q: "Is there a minimum for an initial trial order?",
      a: "No. You can start with 100 bags as a pilot — ideal for testing a premium room category before rolling out to all rooms.",
    },
  ],
  siblings: [
    { label: "Hotels · Toronto", href: "/en/custom-coffee-hotels-toronto" },
    { label: "Hotels · Montreal", href: "/en/custom-coffee-hotels-montreal" },
    { label: "Restaurants · Vancouver", href: "/en/custom-coffee-restaurants-vancouver" },
  ],
  ctaClose:
    "Vancouver guests see the mountains from their window. The coffee on their desk should match that standard.",
  cityPageHref: "/en/custom-coffee-bags-vancouver",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-hotels-vancouver",
  city: { name: "Vancouver", province: "Colombie-Britannique", deliveryTime: "4 à 6 jours ouvrables" },
  industry: {
    name: "Hôtels",
    parentHref: "/fr/custom-coffee-bags-hotels",
    parentLabel: "Hôtels",
  },
  hero: {
    h1: "Café personnalisé pour les hôtels de Vancouver",
    subheadline: "Les hôtels de Vancouver choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les hôtels de Vancouver",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les hôtels de Vancouver, Colombie-Britannique, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 4 à 6 jours ouvrables.",
  why: {
    heading: "L'opportunité café dans les hôtels de Vancouver",
    paragraphs: [
      "Vancouver est la ville canadienne la plus axée sur la durabilité, avec une culture café de classe mondiale. Les hôtels de Gastown, Coal Harbour et Yaletown accueillent des voyageurs qui s'attendent à une expérience soignée. Dans ce contexte, le café en chambre n'est pas une commodity : c'est un point de contact de marque qui influence la perception globale du séjour.",
      "Les clients qui trouvent un sachet de café de spécialité personnalisé avec le nom et le logo de votre hôtel associent cette attention aux détails à l'ensemble de leur expérience. Ce sachet qu'ils emportent chez eux maintient votre marque présente dans leur cuisine pendant des semaines, et c'est ce rappel qui génère les avis positifs et les rebookings directs.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Vancouver en 4 à 6 jours ouvrables. Aucun minimum signifie que vous pouvez tester avec une chambre ou un étage avant de déployer sur toute la propriété. Le café est torréfié frais à la commande pour garantir la qualité maximale à l'arrivée.",
    ],
  },
  useCases: {
    heading: "Comment les hôtels de Vancouver utilisent le café de marque",
    items: [
    { title: "Aménité en chambre qui différencie l'hôtel", body: "Un sachet de café de spécialité personnalisé avec le logo de votre hôtel remplace les capsules génériques et transforme le rituel matinal en un moment de marque mémorable pour vos clients." },
    { title: "Vente au détail dans le lobby pour revenus additionnels", body: "Les clients qui adorent le café en chambre veulent en emporter. Un présentoir dans le lobby ou à la boutique génère des revenus directs à forte marge, sans gaspillage ni minimum de réapprovisionnement." },
    { title: "Cadeau de bienvenue pour les clients VIP et les groupes", body: "Pour les anniversaires, les lunes de miel et les séjours d'affaires, incluez un sachet de café personnalisé dans le panier de bienvenue. Le coût marginal est faible et la perception de valeur est élevée." },
    { title: "Station café pour les événements et conférences", body: "Les groupes de conférence et les équipes d'entreprise reçoivent votre café de marque dans les salles de réunion et les espaces de travail. C'est un différenciateur mémorable pour les organisateurs d'événements qui comparent les propriétés." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Vancouver, Colombie-Britannique en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Vancouver ?", a: "Les commandes pour Vancouver sont expédiées depuis notre torréfacteur montréalais et arrivent en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Comment les hôtels de Vancouver peuvent-ils intégrer le café de marque dans leur programme d'aménités ?", a: "La plupart des hôtels de Vancouver commencent avec un étage ou une catégorie de chambre pour tester la réponse des clients. EZPZ recommande de commencer avec 100 à 200 sacs pour avoir suffisamment d'inventaire pour évaluer l'impact sur les avis et les rebookings." },
    { q: "Le café EZPZ peut-il être utilisé pour le service aux chambres et le lobby café en même temps ?", a: "Oui. Beaucoup de propriétés de Vancouver utilisent le même café de marque pour les aménités en chambre, le lobby café et la vente au détail dans la boutique. EZPZ peut fournir le café en vrac pour votre équipement café et les sacs préemballés pour la chambre." },
  ],
  siblings: [
    { label: "Hôtels · Montréal", href: "/fr/custom-coffee-hotels-montreal" },
    { label: "Hôtels · Toronto", href: "/fr/custom-coffee-hotels-toronto" },
    { label: "Cafés · Vancouver", href: "/fr/custom-coffee-cafes-vancouver" },
    { label: "Gyms · Vancouver", href: "/fr/custom-coffee-gyms-vancouver" },
    { label: "Restaurants · Vancouver", href: "/fr/custom-coffee-restaurants-vancouver" },
  ],
  ctaClose: "Vos clients de Vancouver méritent un café qui correspond à l'expérience que vous créez.",
  cityPageHref: "/fr/custom-coffee-bags-vancouver",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
