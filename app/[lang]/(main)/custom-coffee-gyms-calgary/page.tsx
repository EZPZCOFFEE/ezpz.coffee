import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les gyms de Calgary | EZPZ Coffee" : "Custom Coffee Bags for Calgary Gyms | EZPZ Coffee";
  const description = isFr ? "Les gyms et studios de fitness de Calgary développent leurs revenus de vente au détail avec le café de spécialité personnalisé. Aucun minimum, design inclus." : "Calgary's active outdoor culture and energy sector corporate wellness programs make gyms a natural coffee retail channel. Custom branded bags, zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-gyms-calgary`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-gyms-calgary",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-gyms-calgary",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-gyms-calgary",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-gyms-calgary`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les gyms de Calgary" : "Custom Coffee Bags for Calgary Gyms" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-gyms-calgary",
  city: { name: "Calgary", province: "AB", deliveryTime: "4–6 business days" },
  industry: { name: "Gyms & Fitness Studios", parentHref: "/en/custom-coffee-bags-gyms", parentLabel: "Gyms & Fitness Studios" },
  hero: {
    h1: "Custom Coffee for Calgary Gyms & Fitness Studios",
    subheadline:
      "Calgary gym members ski on weekends, hike in summer, and train year-round. Brand the energy that fuels all of it.",
    ctaSubject: "Custom coffee for Calgary gym",
  },
  aeoAnswer:
    "Calgary gyms and fitness studios can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Delivered to Calgary in 4–6 business days.",
  why: {
    heading: "Calgary's Active Lifestyle and the Gym Coffee Opportunity",
    paragraphs: [
      "Calgary has one of Canada's most active populations — the proximity of Banff, Kananaskis, and the Rocky Mountain foothills means gym members are often serious athletes who ski, trail run, cycle, and train for outdoor performance as well as general fitness. This is a consumer who is already invested in recovery and performance nutrition, and who is receptive to a gym that takes the same care with its coffee as it does with its programming.",
      "Calgary's energy sector corporate culture also means a significant percentage of gym members are executives and professionals who exercise on tight schedules and appreciate premium products that don't require them to think. A branded coffee bag from their gym — one they can buy at the front desk on the way out the door — removes friction and generates revenue.",
      "The growing tech sector in Calgary's Beltline and East Village has brought a younger, brand-conscious professional population to the city's boutique fitness market. These members respond to the same brand signals as their counterparts in Toronto and Vancouver: specialty coffee, traceable sourcing, and a gym that thinks beyond the equipment.",
    ],
  },
  useCases: {
    heading: "How Calgary Gyms Use Custom Coffee",
    items: [
      {
        title: "Front desk retail for energy sector members",
        body: "Calgary gym members with energy sector jobs have disposable income and quality expectations. A branded specialty coffee bag at $20 sells itself to anyone who already buys from a third-wave café — which, in Calgary's growing specialty coffee market, is an expanding majority.",
      },
      {
        title: "Corporate wellness partner program",
        body: "Calgary energy companies with corporate wellness programs often subsidize gym memberships for employees. A co-branded coffee bag — your gym's identity alongside the corporate partner's — is a wellness gift that makes the company look thoughtful and the gym look premium.",
      },
      {
        title: "Stampede season workout programs",
        body: "Calgary Stampede generates a 'Stampede season body' fitness push every spring among Calgarians preparing for the summer event. A branded coffee bag as a reward for a spring challenge or 6-week program completion is a gift that lands at exactly the right cultural moment.",
      },
      {
        title: "Banff and mountain retreat packages",
        body: "Calgary gyms with members who regularly ski or hike in the Rockies can bundle branded coffee bags into mountain weekend packages — 'trail coffee' branded for your gym. It's a product that travels and gets used in exactly the context that defines your members' identities.",
      },
    ],
  },
  localNote:
    "EZPZ ships to Calgary in 4–6 business days. Starting at $11.75/bag at 100 bags. No minimum, no commitment between orders.",
  faq: [
    {
      q: "What coffee works for Calgary's active outdoor audience?",
      a: "A medium-dark roast that works for pre-workout black coffee, French press after a trail run, or a thermos on the ski hill. Calgary members need a coffee that performs in multiple contexts — EZPZ will recommend a versatile profile.",
    },
    {
      q: "Can I co-brand with an energy sector corporate wellness partner?",
      a: "Yes. EZPZ can design co-branded bags with both your gym's identity and a corporate partner's logo. Minimum is 100 bags per co-branded run.",
    },
    {
      q: "What's the minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag.",
    },
    {
      q: "How fast is delivery to Calgary?",
      a: "4–6 business days from Montreal. Plan for 2 weeks lead time when ordering ahead of a specific program or event.",
    },
  ],
  siblings: [
    { label: "Gyms · Toronto", href: "/en/custom-coffee-gyms-toronto" },
    { label: "Gyms · Vancouver", href: "/en/custom-coffee-gyms-vancouver" },
    { label: "Restaurants · Calgary", href: "/en/custom-coffee-restaurants-calgary" },
    { label: "Spas · Calgary", href: "/en/custom-coffee-spas-calgary" },
  ],
  ctaClose:
    "Calgary's gym members train hard and reward themselves well. Make sure your coffee is the reward they choose.",
  cityPageHref: "/en/custom-coffee-bags-calgary",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-gyms-calgary",
  city: { name: "Calgary", province: "Alberta", deliveryTime: "4 à 6 jours ouvrables" },
  industry: {
    name: "Gyms et studios de fitness",
    parentHref: "/fr/custom-coffee-bags-gyms",
    parentLabel: "Gyms et studios de fitness",
  },
  hero: {
    h1: "Café personnalisé pour les gyms et studios de fitness de Calgary",
    subheadline: "Les gyms et studios de fitness de Calgary choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les gyms et studios de fitness de Calgary",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les gyms et studios de fitness de Calgary, Alberta, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 4 à 6 jours ouvrables.",
  why: {
    heading: "Le café de marque dans les gyms de Calgary",
    paragraphs: [
      "Calgary est le marché corporatif et énergétique du Canada, avec une clientèle exigeante et un pouvoir d'achat élevé. La scène fitness de Kensington, Mission et le centre-ville est dense, compétitive et construite sur des communautés de quartier fidèles. Les membres s'identifient à leur gym comme à une marque lifestyle, pas seulement comme à un endroit où s'entraîner.",
      "Le café est déjà dans la routine quotidienne de la plupart des membres, avant ou après l'entraînement. Quand ce café porte la marque de votre gym, votre nom fait partie de ce rituel quotidien. Un sachet vendu à la réception ou dans un présentoir de marchandisage génère des revenus à forte marge et renforce le sentiment d'appartenance des membres à votre marque.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Calgary en 4 à 6 jours ouvrables. Aucun minimum signifie que vous pouvez commencer avec 10 ou 20 sacs et voir comment vos membres réagissent avant d'investir dans un inventaire important.",
    ],
  },
  useCases: {
    heading: "Comment les gyms de Calgary utilisent le café de marque",
    items: [
    { title: "Vente au comptoir de réception et en marchandisage", body: "Un café de spécialité personnalisé vendu à la réception est l'achat d'impulsion parfait pour les membres qui partent après l'entraînement. Il se vend mieux que la plupart des articles vestimentaires à ce prix." },
    { title: "Cadeau de bienvenue pour les nouveaux membres", body: "Offrez un sachet de café de marque à chaque nouveau membre lors de son inscription. C'est un premier geste de bienvenue qui dit que votre gym est une marque lifestyle, pas seulement un espace d'entraînement." },
    { title: "Prix pour les défis et compétitions internes", body: "Pour les défis de 30 jours, les tournois d'athlètes et les compétitions internes, un sachet de café personnalisé est un prix mémorable et pratique que les gagnants utilisent quotidiennement." },
    { title: "Coffrets cadeaux saisonniers et de Saint-Valentin", body: "Les membres achètent votre café de marque comme cadeau pour leurs amis et partenaires qui s'entraînent. C'est un vecteur de recrutement organique : les destinataires découvrent votre marque à travers le cadeau." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Calgary, Alberta en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Calgary ?", a: "Les commandes pour Calgary sont expédiées depuis notre torréfacteur montréalais et arrivent en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Quel est le meilleur moyen de commencer à vendre le café de marque dans un gym de Calgary ?", a: "Commencez avec 24 à 48 sacs mis en évidence à la réception ou dans un présentoir près de la sortie. Les membres de gym achètent naturellement des produits de marque de leur établissement : le café se vend sans effort de vente actif." },
    { q: "Le café de spécialité EZPZ convient-il à la culture fitness de Calgary ?", a: "Parfaitement. EZPZ source uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables, torréfiés frais à la commande. La transparence sur l'origine et le processus de torréfaction résonne avec la clientèle fitness consciente de la qualité de ce qu'elle consomme." },
  ],
  siblings: [
    { label: "Gyms · Montréal", href: "/fr/custom-coffee-gyms-montreal" },
    { label: "Gyms · Toronto", href: "/fr/custom-coffee-gyms-toronto" },
    { label: "Cafés · Calgary", href: "/fr/custom-coffee-cafes-calgary" },
    { label: "Hôtels · Calgary", href: "/fr/custom-coffee-hotels-calgary" },
    { label: "Restaurants · Calgary", href: "/fr/custom-coffee-restaurants-calgary" },
  ],
  ctaClose: "Votre gym de Calgary est plus qu'un espace d'entraînement. Votre café devrait refléter ça.",
  cityPageHref: "/fr/custom-coffee-bags-calgary",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
