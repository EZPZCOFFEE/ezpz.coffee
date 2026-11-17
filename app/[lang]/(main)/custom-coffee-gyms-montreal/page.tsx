import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les gyms de Montréal | EZPZ Coffee" : "Custom Coffee Bags for Montreal Gyms | EZPZ Coffee";
  const description = isFr ? "Les gyms et studios de fitness de Montréal développent leurs revenus de vente au détail avec le café de spécialité personnalisé. Aucun minimum, design inclus." : "Montreal's fitness culture is neighbourhood-rooted and brand-conscious. Custom branded specialty coffee — bilingual, roasted locally, zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-gyms-montreal`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-gyms-montreal",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-gyms-montreal",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-gyms-montreal",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-gyms-montreal`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les gyms de Montréal" : "Custom Coffee Bags for Montreal Gyms" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

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


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-gyms-montreal",
  city: { name: "Montréal", province: "Québec", deliveryTime: "2 à 3 jours ouvrables" },
  industry: {
    name: "Gyms et studios de fitness",
    parentHref: "/fr/custom-coffee-bags-gyms",
    parentLabel: "Gyms et studios de fitness",
  },
  hero: {
    h1: "Café personnalisé pour les gyms et studios de fitness de Montréal",
    subheadline: "Les gyms et studios de fitness de Montréal choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les gyms et studios de fitness de Montréal",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les gyms et studios de fitness de Montréal, Québec, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 2 à 3 jours ouvrables. Le design bilingue français-anglais est disponible sans frais supplémentaires.",
  why: {
    heading: "Le café de marque dans les gyms de Montréal",
    paragraphs: [
      "Montréal est la ville où la culture café est née au Canada, avec son riche tissu de quartiers francophones. La scène fitness de Plateau-Mont-Royal, Rosemont et Villeray est dense, compétitive et construite sur des communautés de quartier fidèles. Les membres s'identifient à leur gym comme à une marque lifestyle, pas seulement comme à un endroit où s'entraîner.",
      "Le café est déjà dans la routine quotidienne de la plupart des membres, avant ou après l'entraînement. Quand ce café porte la marque de votre gym, votre nom fait partie de ce rituel quotidien. Un sachet vendu à la réception ou dans un présentoir de marchandisage génère des revenus à forte marge et renforce le sentiment d'appartenance des membres à votre marque.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Montréal en 2 à 3 jours ouvrables. Aucun minimum signifie que vous pouvez commencer avec 10 ou 20 sacs et voir comment vos membres réagissent avant d'investir dans un inventaire important.",
    ],
  },
  useCases: {
    heading: "Comment les gyms de Montréal utilisent le café de marque",
    items: [
    { title: "Vente au comptoir de réception et en marchandisage", body: "Un café de spécialité personnalisé vendu à la réception est l'achat d'impulsion parfait pour les membres qui partent après l'entraînement. Il se vend mieux que la plupart des articles vestimentaires à ce prix." },
    { title: "Cadeau de bienvenue pour les nouveaux membres", body: "Offrez un sachet de café de marque à chaque nouveau membre lors de son inscription. C'est un premier geste de bienvenue qui dit que votre gym est une marque lifestyle, pas seulement un espace d'entraînement." },
    { title: "Prix pour les défis et compétitions internes", body: "Pour les défis de 30 jours, les tournois d'athlètes et les compétitions internes, un sachet de café personnalisé est un prix mémorable et pratique que les gagnants utilisent quotidiennement." },
    { title: "Coffrets cadeaux saisonniers et de Saint-Valentin", body: "Les membres achètent votre café de marque comme cadeau pour leurs amis et partenaires qui s'entraînent. C'est un vecteur de recrutement organique : les destinataires découvrent votre marque à travers le cadeau." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Montréal, Québec en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Montréal ?", a: "Les commandes pour Montréal sont expédiées depuis notre torréfacteur montréalais et arrivent en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Quel est le meilleur moyen de commencer à vendre le café de marque dans un gym de Montréal ?", a: "Commencez avec 24 à 48 sacs mis en évidence à la réception ou dans un présentoir près de la sortie. Les membres de gym achètent naturellement des produits de marque de leur établissement : le café se vend sans effort de vente actif." },
    { q: "Le café de spécialité EZPZ convient-il à la culture fitness de Montréal ?", a: "Parfaitement. EZPZ source uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables, torréfiés frais à la commande. La transparence sur l'origine et le processus de torréfaction résonne avec la clientèle fitness consciente de la qualité de ce qu'elle consomme." },
  ],
  siblings: [
    { label: "Gyms · Toronto", href: "/fr/custom-coffee-gyms-toronto" },
    { label: "Gyms · Vancouver", href: "/fr/custom-coffee-gyms-vancouver" },
    { label: "Cafés · Montréal", href: "/fr/custom-coffee-cafes-montreal" },
    { label: "Hôtels · Montréal", href: "/fr/custom-coffee-hotels-montreal" },
    { label: "Restaurants · Montréal", href: "/fr/custom-coffee-restaurants-montreal" },
  ],
  ctaClose: "Votre gym de Montréal est plus qu'un espace d'entraînement. Votre café devrait refléter ça.",
  cityPageHref: "/fr/custom-coffee-bags-montreal",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
