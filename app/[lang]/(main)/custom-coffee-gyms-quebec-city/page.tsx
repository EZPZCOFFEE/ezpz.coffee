import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les gyms de Québec | EZPZ Coffee" : "Custom Coffee Bags for Quebec City Gyms | EZPZ Coffee";
  const description = isFr ? "Les gyms et studios de fitness de Québec développent leurs revenus de vente au détail avec le café de spécialité personnalisé. Aucun minimum, design inclus." : "Quebec City's winter sport culture and growing fitness scene create a unique gym retail opportunity. Custom branded specialty coffee — French design, locally roasted, zero minimum.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-gyms-quebec-city`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-gyms-quebec-city",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-gyms-quebec-city",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-gyms-quebec-city`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les gyms de Québec" : "Custom Coffee Bags for Quebec City Gyms" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-gyms-quebec-city",
  city: { name: "Quebec City", province: "QC", deliveryTime: "2–3 business days" },
  industry: { name: "Gyms & Fitness Studios", parentHref: "/en/custom-coffee-bags-gyms", parentLabel: "Gyms & Fitness Studios" },
  hero: {
    h1: "Custom Coffee for Quebec City Gyms & Fitness Studios",
    subheadline:
      "Quebec City trains for winter. Hockey, skiing, running on the Plains — your gym's coffee should be as tough as your members.",
    ctaSubject: "Custom coffee for Quebec City gym",
  },
  aeoAnswer:
    "Quebec City gyms and fitness studios can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Roasted in Montreal, delivered in 2–3 business days. French-language design is the default.",
  why: {
    heading: "Quebec City's Fitness Culture and the Coffee Ritual",
    paragraphs: [
      "Quebec City's fitness culture is shaped by its climate and its competitive athletic identity. The city is home to a passionate hockey culture, an established running scene (Les Coureurs des Bois, the Défi Escalade Courir Vers le Sommet), and a winter sports tradition rooted in the proximity of Mont-Sainte-Anne and Stoneham. Gym members in Quebec City are often cross-training for winter sports and are already accustomed to performance-oriented wellness thinking.",
      "The local-first purchasing value that characterizes Quebec City's consumer culture extends to fitness. A branded coffee bag from a Quebec City gym — with French copy and a 'roasted au Québec' provenance claim — is a product that feels authentic to the gym's identity and the city's values. It's not an import; it's local.",
      "EZPZ roasts in Montreal — the fastest and freshest delivery window available in Canada for a Quebec City gym. A coffee that arrives in 2–3 days from roast date, in a bag designed to your gym's brand, is a retail product that requires minimal effort to introduce and sustain.",
    ],
  },
  useCases: {
    heading: "How Quebec City Gyms Use Custom Coffee",
    items: [
      {
        title: "Winter training season retail",
        body: "November through March is peak gym season in Quebec City as outdoor activity shifts indoors. A branded coffee bag introduced at the start of winter training season captures the new-member energy and sells to regulars who are already in a routine.",
      },
      {
        title: "French-language member appreciation gifts",
        body: "A French-language branded bag — your gym's logo, a performance-oriented message, the coffee's origin in French — is the kind of small, thoughtful gift that Quebec City gym members appreciate. Local, quality, and yours.",
      },
      {
        title: "Carnaval fitness challenge rewards",
        body: "The pre-Carnaval season (January–February) is when Quebec City residents increase their fitness activity for Carnaval competitions and winter athletic events. A branded coffee bag as a challenge reward or competition prize aligns with the city's winter athletic calendar.",
      },
      {
        title: "Hockey and team sport community gifts",
        body: "Quebec City's hockey culture is deeply embedded in gym culture — many members train specifically for hockey performance. A branded bag as a gift for a hockey team sponsor, a league tournament prize, or a sport-specific training program reward reaches an audience that is strongly community-identified.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — 2–3 business day delivery to Quebec City. French-language packaging is the default. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get French-only packaging for my Quebec City gym?",
      a: "Yes. French-only is the default recommendation for Quebec City clients. The design will meet Loi 101 packaging requirements.",
    },
    {
      q: "What coffee profile works for a Quebec City athletic audience?",
      a: "A robust medium-dark roast that works equally well as a pre-workout black coffee and a post-training morning cup. Quebec City's athletic members tend toward straightforward, quality-signal profiles over highly experimental coffees.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag to start.",
    },
    {
      q: "How fast is delivery to Quebec City?",
      a: "2–3 business days from Montreal — the fastest EZPZ delivery window in Canada outside the Montreal metro area.",
    },
  ],
  siblings: [
    { label: "Gyms · Montreal", href: "/en/custom-coffee-gyms-montreal" },
    { label: "Gyms · Ottawa", href: "/en/custom-coffee-gyms-ottawa" },
    { label: "Spas · Quebec City", href: "/en/custom-coffee-spas-quebec-city" },
    { label: "Restaurants · Quebec City", href: "/en/custom-coffee-restaurants-quebec-city" },
  ],
  ctaClose:
    "Quebec City trains hard. Make sure your gym's brand is the one fueling the training.",
  cityPageHref: "/en/custom-coffee-bags-quebec-city",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-gyms-quebec-city",
  city: { name: "Québec", province: "Québec", deliveryTime: "2 à 3 jours ouvrables" },
  industry: {
    name: "Gyms et studios de fitness",
    parentHref: "/fr/custom-coffee-bags-gyms",
    parentLabel: "Gyms et studios de fitness",
  },
  hero: {
    h1: "Café personnalisé pour les gyms et studios de fitness de Québec",
    subheadline: "Les gyms et studios de fitness de Québec choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les gyms et studios de fitness de Québec",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les gyms et studios de fitness de Québec, Québec, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 2 à 3 jours ouvrables.",
  why: {
    heading: "Le café de marque dans les gyms de Québec",
    paragraphs: [
      "Québec est la capitale culturelle du Québec et l'une des destinations touristiques les plus visitées d'Amérique du Nord. La scène fitness de Saint-Roch, Montcalm et Limoilou est dense, compétitive et construite sur des communautés de quartier fidèles. Les membres s'identifient à leur gym comme à une marque lifestyle, pas seulement comme à un endroit où s'entraîner.",
      "Le café est déjà dans la routine quotidienne de la plupart des membres, avant ou après l'entraînement. Quand ce café porte la marque de votre gym, votre nom fait partie de ce rituel quotidien. Un sachet vendu à la réception ou dans un présentoir de marchandisage génère des revenus à forte marge et renforce le sentiment d'appartenance des membres à votre marque.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Québec en 2 à 3 jours ouvrables. Aucun minimum signifie que vous pouvez commencer avec 10 ou 20 sacs et voir comment vos membres réagissent avant d'investir dans un inventaire important.",
    ],
  },
  useCases: {
    heading: "Comment les gyms de Québec utilisent le café de marque",
    items: [
    { title: "Vente au comptoir de réception et en marchandisage", body: "Un café de spécialité personnalisé vendu à la réception est l'achat d'impulsion parfait pour les membres qui partent après l'entraînement. Il se vend mieux que la plupart des articles vestimentaires à ce prix." },
    { title: "Cadeau de bienvenue pour les nouveaux membres", body: "Offrez un sachet de café de marque à chaque nouveau membre lors de son inscription. C'est un premier geste de bienvenue qui dit que votre gym est une marque lifestyle, pas seulement un espace d'entraînement." },
    { title: "Prix pour les défis et compétitions internes", body: "Pour les défis de 30 jours, les tournois d'athlètes et les compétitions internes, un sachet de café personnalisé est un prix mémorable et pratique que les gagnants utilisent quotidiennement." },
    { title: "Coffrets cadeaux saisonniers et de Saint-Valentin", body: "Les membres achètent votre café de marque comme cadeau pour leurs amis et partenaires qui s'entraînent. C'est un vecteur de recrutement organique : les destinataires découvrent votre marque à travers le cadeau." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Québec, Québec en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Québec ?", a: "Les commandes pour Québec sont expédiées depuis notre torréfacteur montréalais et arrivent en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Quel est le meilleur moyen de commencer à vendre le café de marque dans un gym de Québec ?", a: "Commencez avec 24 à 48 sacs mis en évidence à la réception ou dans un présentoir près de la sortie. Les membres de gym achètent naturellement des produits de marque de leur établissement : le café se vend sans effort de vente actif." },
    { q: "Le café de spécialité EZPZ convient-il à la culture fitness de Québec ?", a: "Parfaitement. EZPZ source uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables, torréfiés frais à la commande. La transparence sur l'origine et le processus de torréfaction résonne avec la clientèle fitness consciente de la qualité de ce qu'elle consomme." },
  ],
  siblings: [
    { label: "Gyms · Montréal", href: "/fr/custom-coffee-gyms-montreal" },
    { label: "Gyms · Toronto", href: "/fr/custom-coffee-gyms-toronto" },
    { label: "Cafés · Québec", href: "/fr/custom-coffee-cafes-quebec-city" },
    { label: "Hôtels · Québec", href: "/fr/custom-coffee-hotels-quebec-city" },
    { label: "Restaurants · Québec", href: "/fr/custom-coffee-restaurants-quebec-city" },
  ],
  ctaClose: "Votre gym de Québec est plus qu'un espace d'entraînement. Votre café devrait refléter ça.",
  cityPageHref: "/fr/custom-coffee-bags-quebec-city",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
