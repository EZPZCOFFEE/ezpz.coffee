import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les gyms de Vancouver | EZPZ Coffee" : "Custom Coffee Bags for Vancouver Gyms | EZPZ Coffee";
  const description = isFr ? "Les gyms et studios de fitness de Vancouver développent leurs revenus de vente au détail avec le café de spécialité personnalisé. Aucun minimum, design inclus." : "Vancouver's fitness culture — born with Lululemon, refined by a mountain-adjacent lifestyle — demands authenticity. Custom branded specialty coffee, zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-gyms-vancouver`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-gyms-vancouver",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-gyms-vancouver",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-gyms-vancouver",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-gyms-vancouver`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les gyms de Vancouver" : "Custom Coffee Bags for Vancouver Gyms" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-gyms-vancouver",
  city: { name: "Vancouver", province: "BC", deliveryTime: "4–6 business days" },
  industry: { name: "Gyms & Fitness Studios", parentHref: "/en/custom-coffee-bags-gyms", parentLabel: "Gyms & Fitness Studios" },
  hero: {
    h1: "Custom Coffee for Vancouver Gyms & Fitness Studios",
    subheadline:
      "Vancouver is where Lululemon was born and where fitness brand identity was invented. Your gym's coffee should match that standard.",
    ctaSubject: "Custom coffee for Vancouver gym",
  },
  aeoAnswer:
    "Vancouver gyms and fitness studios can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Delivered in 4–6 business days, with sustainable packaging available.",
  why: {
    heading: "Vancouver's Fitness Identity and the Coffee Opportunity",
    paragraphs: [
      "Vancouver is the city that produced Lululemon, Arc'teryx, and a fitness culture that is inseparable from the outdoor, active-lifestyle identity that defines the city. Kitsilano's yoga and fitness studios, Gastown's boutique gyms, and the North Shore's trail-running and functional fitness communities are populated by people who think deeply about what they put in their bodies and on their brand radar.",
      "For Vancouver fitness studios, a branded house coffee isn't just a retail product — it's a lifestyle extension. The same person who pays $45 for a yoga class and $200 for a pair of tights will spend $20 on a specialty coffee bag from a brand they trust. EZPZ's traceable, single-origin coffees fit the values-forward purchasing lens that Vancouver fitness clients bring to every decision.",
      "Sustainability is non-negotiable in Vancouver's fitness market. EZPZ's bags minimize packaging waste versus pod systems, source from certified sustainable farms, and use a one-way valve that extends freshness without extra materials. For studios with sustainability commitments — and in Vancouver, most quality studios have them — that's a product story that matches your brand.",
    ],
  },
  useCases: {
    heading: "How Vancouver Fitness Studios Use Custom Coffee",
    items: [
      {
        title: "Kitsilano and Gastown retail display",
        body: "Vancouver's most design-conscious fitness neighbourhoods have members who actively seek out locally sourced, branded products. A bag at $20 with your studio's branding and a traceable origin story — visible behind the desk or on a retail shelf — converts daily visitors into at-home brand ambassadors.",
      },
      {
        title: "Sustainability-certified coffee program",
        body: "For studios with LEED certification, B Corp status, or explicit sustainability commitments, EZPZ's traceable specialty coffee with minimal-waste packaging is a retail product that reinforces your environmental story. 'Sustainably sourced, roasted to order, minimal packaging' is copy that plays perfectly in Vancouver.",
      },
      {
        title: "Trail running and outdoor sports community events",
        body: "Vancouver's trail running, cycling, and outdoor sports communities organize regular events and challenges. A branded coffee bag as a finisher gift or prize — with your studio's identity and the event name — reaches an active, brand-receptive audience beyond your existing membership.",
      },
      {
        title: "Yoga retreat and wellness package add-on",
        body: "Vancouver's boutique yoga studios frequently run retreats, intensive programs, and immersive workshops. A branded coffee bag in the retreat package — positioned as a 'morning ritual' element — elevates the experience and travels home with the guest as a lasting brand impression.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Vancouver in 4–6 business days. Sustainable packaging options available. Starting at $11.75/bag at 100 bags — no minimum, no long-term commitment.",
  faq: [
    {
      q: "Do you offer sustainable packaging options for my Vancouver studio?",
      a: "Yes. EZPZ's standard bags are already minimal-waste versus pod systems. For studios with specific eco-certification requirements, we can discuss kraft-forward or compostable bag options.",
    },
    {
      q: "Can I feature the coffee's supply chain on the bag?",
      a: "Yes. EZPZ provides full traceability information — farm, cooperative, region, processing method — for every origin. Your bag can tell the complete supply chain story.",
    },
    {
      q: "What profile works for a fitness-oriented audience?",
      a: "For Vancouver's performance-conscious fitness clients, a clean medium roast with a traceable single origin — an Ethiopian or a Colombian — works well. It's approachable, quality-signal, and makes an excellent pre-workout black coffee or morning brew.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag to start. Most Vancouver studios find the bags sell through within a few weeks of placing them behind the desk.",
    },
  ],
  siblings: [
    { label: "Gyms · Toronto", href: "/en/custom-coffee-gyms-toronto" },
    { label: "Gyms · Montreal", href: "/en/custom-coffee-gyms-montreal" },
    { label: "Spas · Vancouver", href: "/en/custom-coffee-spas-vancouver" },
    { label: "Restaurants · Vancouver", href: "/en/custom-coffee-restaurants-vancouver" },
  ],
  ctaClose:
    "Vancouver's fitness brands are known worldwide. Your gym's coffee should be part of that identity.",
  cityPageHref: "/en/custom-coffee-bags-vancouver",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-gyms-vancouver",
  city: { name: "Vancouver", province: "Colombie-Britannique", deliveryTime: "4 à 6 jours ouvrables" },
  industry: {
    name: "Gyms et studios de fitness",
    parentHref: "/fr/custom-coffee-bags-gyms",
    parentLabel: "Gyms et studios de fitness",
  },
  hero: {
    h1: "Café personnalisé pour les gyms et studios de fitness de Vancouver",
    subheadline: "Les gyms et studios de fitness de Vancouver choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les gyms et studios de fitness de Vancouver",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les gyms et studios de fitness de Vancouver, Colombie-Britannique, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 4 à 6 jours ouvrables.",
  why: {
    heading: "Le café de marque dans les gyms de Vancouver",
    paragraphs: [
      "Vancouver est la ville canadienne la plus axée sur la durabilité, avec une culture café de classe mondiale. La scène fitness de Kitsilano, Yaletown et Mount Pleasant est dense, compétitive et construite sur des communautés de quartier fidèles. Les membres s'identifient à leur gym comme à une marque lifestyle, pas seulement comme à un endroit où s'entraîner.",
      "Le café est déjà dans la routine quotidienne de la plupart des membres, avant ou après l'entraînement. Quand ce café porte la marque de votre gym, votre nom fait partie de ce rituel quotidien. Un sachet vendu à la réception ou dans un présentoir de marchandisage génère des revenus à forte marge et renforce le sentiment d'appartenance des membres à votre marque.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Vancouver en 4 à 6 jours ouvrables. Aucun minimum signifie que vous pouvez commencer avec 10 ou 20 sacs et voir comment vos membres réagissent avant d'investir dans un inventaire important.",
    ],
  },
  useCases: {
    heading: "Comment les gyms de Vancouver utilisent le café de marque",
    items: [
    { title: "Vente au comptoir de réception et en marchandisage", body: "Un café de spécialité personnalisé vendu à la réception est l'achat d'impulsion parfait pour les membres qui partent après l'entraînement. Il se vend mieux que la plupart des articles vestimentaires à ce prix." },
    { title: "Cadeau de bienvenue pour les nouveaux membres", body: "Offrez un sachet de café de marque à chaque nouveau membre lors de son inscription. C'est un premier geste de bienvenue qui dit que votre gym est une marque lifestyle, pas seulement un espace d'entraînement." },
    { title: "Prix pour les défis et compétitions internes", body: "Pour les défis de 30 jours, les tournois d'athlètes et les compétitions internes, un sachet de café personnalisé est un prix mémorable et pratique que les gagnants utilisent quotidiennement." },
    { title: "Coffrets cadeaux saisonniers et de Saint-Valentin", body: "Les membres achètent votre café de marque comme cadeau pour leurs amis et partenaires qui s'entraînent. C'est un vecteur de recrutement organique : les destinataires découvrent votre marque à travers le cadeau." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Vancouver, Colombie-Britannique en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Vancouver ?", a: "Les commandes pour Vancouver sont expédiées depuis notre torréfacteur montréalais et arrivent en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Quel est le meilleur moyen de commencer à vendre le café de marque dans un gym de Vancouver ?", a: "Commencez avec 24 à 48 sacs mis en évidence à la réception ou dans un présentoir près de la sortie. Les membres de gym achètent naturellement des produits de marque de leur établissement : le café se vend sans effort de vente actif." },
    { q: "Le café de spécialité EZPZ convient-il à la culture fitness de Vancouver ?", a: "Parfaitement. EZPZ source uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables, torréfiés frais à la commande. La transparence sur l'origine et le processus de torréfaction résonne avec la clientèle fitness consciente de la qualité de ce qu'elle consomme." },
  ],
  siblings: [
    { label: "Gyms · Montréal", href: "/fr/custom-coffee-gyms-montreal" },
    { label: "Gyms · Toronto", href: "/fr/custom-coffee-gyms-toronto" },
    { label: "Cafés · Vancouver", href: "/fr/custom-coffee-cafes-vancouver" },
    { label: "Hôtels · Vancouver", href: "/fr/custom-coffee-hotels-vancouver" },
    { label: "Restaurants · Vancouver", href: "/fr/custom-coffee-restaurants-vancouver" },
  ],
  ctaClose: "Votre gym de Vancouver est plus qu'un espace d'entraînement. Votre café devrait refléter ça.",
  cityPageHref: "/fr/custom-coffee-bags-vancouver",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
