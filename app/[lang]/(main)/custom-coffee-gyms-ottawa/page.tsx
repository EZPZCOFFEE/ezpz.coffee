import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les gyms de Ottawa | EZPZ Coffee" : "Custom Coffee Bags for Ottawa Gyms | EZPZ Coffee";
  const description = isFr ? "Les gyms et studios de fitness de Ottawa développent leurs revenus de vente au détail avec le café de spécialité personnalisé. Aucun minimum, design inclus." : "Ottawa's government workers, tech employees, and marathon culture make fitness studios a strong retail opportunity. Custom branded specialty coffee, zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-gyms-ottawa`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-gyms-ottawa",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-gyms-ottawa",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-gyms-ottawa`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les gyms de Ottawa" : "Custom Coffee Bags for Ottawa Gyms" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-gyms-ottawa",
  city: { name: "Ottawa", province: "ON", deliveryTime: "3–5 business days" },
  industry: { name: "Gyms & Fitness Studios", parentHref: "/en/custom-coffee-bags-gyms", parentLabel: "Gyms & Fitness Studios" },
  hero: {
    h1: "Custom Coffee for Ottawa Gyms & Fitness Studios",
    subheadline:
      "Ottawa runs the Rideau Canal in winter, the trails in summer, and the gym year-round. Your fitness brand should live in the thermos.",
    ctaSubject: "Custom coffee for Ottawa gym",
  },
  aeoAnswer:
    "Ottawa gyms and fitness studios can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Delivered in 3–5 business days, bilingual packaging available.",
  why: {
    heading: "Ottawa's Fitness Culture and Why Coffee Belongs in Your Retail",
    paragraphs: [
      "Ottawa is a city of active people. The Ottawa Marathon draws tens of thousands of participants, the Rideau Canal skateway is the world's largest naturally frozen skating rink and hosts hundreds of thousands of commuters in winter, and the greenbelt trail system draws trail runners and cyclists throughout the warmer months. Fitness is deeply embedded in Ottawa's civic identity — and the gyms and studios that serve this community have members who are invested in their athletic lives.",
      "Ottawa's government workforce also contributes a specific fitness pattern: public servants with structured working hours have reliable, schedulable fitness habits. Morning gym before work, lunch hour spin class, evening yoga — Ottawa fitness studios have predictable, loyal member attendance patterns that are unlike the more erratic gym schedules of freelancers and variable-hours workers in other cities. These members form strong habits, and a coffee ritual is one of the strongest habits to attach to.",
      "Bilingual gym members are also a feature of Ottawa's fitness landscape. A bilingual branded coffee bag from a Centretown or Glebe studio — with French and English copy — signals that your studio is a place for all of Ottawa, not just one half of it.",
    ],
  },
  useCases: {
    heading: "How Ottawa Gyms Use Custom Coffee",
    items: [
      {
        title: "Marathon and race season program bags",
        body: "Ottawa's spring running season peaks with the Ottawa Marathon in May. A branded coffee bag as part of a spring running program reward, a race-day kit, or a goal-achievement gift reinforces the studio's connection to Ottawa's active community.",
      },
      {
        title: "Bilingual counter retail",
        body: "A bilingual branded bag — French and English — at the front desk of an Ottawa fitness studio is a product that every member can connect with. 'Roasted fresh, for [Studio Name]' in both official languages is a detail your francophone members will notice and appreciate.",
      },
      {
        title: "Government employee fitness programs",
        body: "Ottawa fitness studios that partner with federal departments on employee wellness programs have a built-in corporate gifting channel. A branded coffee bag co-branded with a departmental partner — or simply a premium gift for a wellness challenge winner — is a product that travels from the gym to the office.",
      },
      {
        title: "Winter training season welcome kits",
        body: "Ottawa's long winters mean indoor fitness is peak season from November to March. A welcome kit for new winter members — with a branded coffee bag, a training schedule, and a personal note — converts seasonal joiners into long-term members who feel genuinely welcomed.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Ottawa in 3–5 business days. Bilingual (French/English) packaging at no extra charge. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get bilingual packaging for my Ottawa studio?",
      a: "Yes. Bilingual packaging is available at no extra charge and is recommended for Ottawa fitness studios given the city's bilingual character.",
    },
    {
      q: "What coffee works for a running-focused fitness community?",
      a: "For endurance athletes and runners, a clean medium roast with natural acidity — an Ethiopian natural or a washed Colombian — is ideal. It works for pre-run black coffee, works as a pourover recovery ritual, and has the flavor clarity that educated coffee drinkers in Ottawa's marathon community will appreciate.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag.",
    },
    {
      q: "How fast is delivery to Ottawa?",
      a: "3–5 business days from Montreal — one of EZPZ's faster delivery windows.",
    },
  ],
  siblings: [
    { label: "Gyms · Toronto", href: "/en/custom-coffee-gyms-toronto" },
    { label: "Gyms · Montreal", href: "/en/custom-coffee-gyms-montreal" },
    { label: "Spas · Ottawa", href: "/en/custom-coffee-spas-ottawa" },
    { label: "Restaurants · Ottawa", href: "/en/custom-coffee-restaurants-ottawa" },
  ],
  ctaClose:
    "Ottawa's fitness community trains with commitment. Make sure your coffee brand keeps up.",
  cityPageHref: "/en/custom-coffee-bags-ottawa",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-gyms-ottawa",
  city: { name: "Ottawa", province: "Ontario", deliveryTime: "3 à 5 jours ouvrables" },
  industry: {
    name: "Gyms et studios de fitness",
    parentHref: "/fr/custom-coffee-bags-gyms",
    parentLabel: "Gyms et studios de fitness",
  },
  hero: {
    h1: "Café personnalisé pour les gyms et studios de fitness de Ottawa",
    subheadline: "Les gyms et studios de fitness de Ottawa choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les gyms et studios de fitness de Ottawa",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les gyms et studios de fitness de Ottawa, Ontario, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 3 à 5 jours ouvrables. Le design bilingue français-anglais est disponible sans frais supplémentaires.",
  why: {
    heading: "Le café de marque dans les gyms de Ottawa",
    paragraphs: [
      "Ottawa est la capitale bilingue du Canada, avec un marché de services professionnels gouvernementaux et technologiques unique. La scène fitness de Westboro, Hintonburg et le marché By est dense, compétitive et construite sur des communautés de quartier fidèles. Les membres s'identifient à leur gym comme à une marque lifestyle, pas seulement comme à un endroit où s'entraîner.",
      "Le café est déjà dans la routine quotidienne de la plupart des membres, avant ou après l'entraînement. Quand ce café porte la marque de votre gym, votre nom fait partie de ce rituel quotidien. Un sachet vendu à la réception ou dans un présentoir de marchandisage génère des revenus à forte marge et renforce le sentiment d'appartenance des membres à votre marque.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Ottawa en 3 à 5 jours ouvrables. Aucun minimum signifie que vous pouvez commencer avec 10 ou 20 sacs et voir comment vos membres réagissent avant d'investir dans un inventaire important. EZPZ offre le design d'emballage bilingue français-anglais sans frais supplémentaires, une option précieuse dans la région bilingue de la capitale.",
    ],
  },
  useCases: {
    heading: "Comment les gyms de Ottawa utilisent le café de marque",
    items: [
    { title: "Vente au comptoir de réception et en marchandisage", body: "Un café de spécialité personnalisé vendu à la réception est l'achat d'impulsion parfait pour les membres qui partent après l'entraînement. Il se vend mieux que la plupart des articles vestimentaires à ce prix." },
    { title: "Cadeau de bienvenue pour les nouveaux membres", body: "Offrez un sachet de café de marque à chaque nouveau membre lors de son inscription. C'est un premier geste de bienvenue qui dit que votre gym est une marque lifestyle, pas seulement un espace d'entraînement." },
    { title: "Prix pour les défis et compétitions internes", body: "Pour les défis de 30 jours, les tournois d'athlètes et les compétitions internes, un sachet de café personnalisé est un prix mémorable et pratique que les gagnants utilisent quotidiennement." },
    { title: "Coffrets cadeaux saisonniers et de Saint-Valentin", body: "Les membres achètent votre café de marque comme cadeau pour leurs amis et partenaires qui s'entraînent. C'est un vecteur de recrutement organique : les destinataires découvrent votre marque à travers le cadeau." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Ottawa, Ontario en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Ottawa ?", a: "Les commandes pour Ottawa sont expédiées depuis notre torréfacteur montréalais et arrivent en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Quel est le meilleur moyen de commencer à vendre le café de marque dans un gym de Ottawa ?", a: "Commencez avec 24 à 48 sacs mis en évidence à la réception ou dans un présentoir près de la sortie. Les membres de gym achètent naturellement des produits de marque de leur établissement : le café se vend sans effort de vente actif." },
    { q: "Le café de spécialité EZPZ convient-il à la culture fitness de Ottawa ?", a: "Parfaitement. EZPZ source uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables, torréfiés frais à la commande. La transparence sur l'origine et le processus de torréfaction résonne avec la clientèle fitness consciente de la qualité de ce qu'elle consomme." },
  ],
  siblings: [
    { label: "Gyms · Montréal", href: "/fr/custom-coffee-gyms-montreal" },
    { label: "Gyms · Toronto", href: "/fr/custom-coffee-gyms-toronto" },
    { label: "Cafés · Ottawa", href: "/fr/custom-coffee-cafes-ottawa" },
    { label: "Hôtels · Ottawa", href: "/fr/custom-coffee-hotels-ottawa" },
    { label: "Restaurants · Ottawa", href: "/fr/custom-coffee-restaurants-ottawa" },
  ],
  ctaClose: "Votre gym de Ottawa est plus qu'un espace d'entraînement. Votre café devrait refléter ça.",
  cityPageHref: "/fr/custom-coffee-bags-ottawa",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
