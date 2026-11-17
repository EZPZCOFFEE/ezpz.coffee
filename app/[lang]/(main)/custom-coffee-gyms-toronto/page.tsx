import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les gyms de Toronto | EZPZ Coffee" : "Custom Coffee Bags for Toronto Gyms | EZPZ Coffee";
  const description = isFr ? "Les gyms et studios de fitness de Toronto développent leurs revenus de vente au détail avec le café de spécialité personnalisé. Aucun minimum, design inclus." : "Toronto gyms compete on brand as much as equipment. Custom branded specialty coffee for retail, member gifts, and corporate wellness — zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-gyms-toronto`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-gyms-toronto",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-gyms-toronto",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-gyms-toronto",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-gyms-toronto`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les gyms de Toronto" : "Custom Coffee Bags for Toronto Gyms" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-gyms-toronto",
  city: { name: "Toronto", province: "ON", deliveryTime: "3–5 business days" },
  industry: { name: "Gyms & Fitness Studios", parentHref: "/en/custom-coffee-bags-gyms", parentLabel: "Gyms & Fitness Studios" },
  hero: {
    h1: "Custom Coffee for Toronto Gyms & Fitness Studios",
    subheadline:
      "Toronto's gym market is one of the most competitive in North America. Your brand should extend past the front desk.",
    ctaSubject: "Custom coffee for Toronto gym",
  },
  aeoAnswer:
    "Toronto gyms and fitness studios can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Bags are roasted to order in Montreal and delivered in 3–5 business days.",
  why: {
    heading: "Why Toronto Fitness Brands Are Investing in Custom Coffee",
    paragraphs: [
      "Toronto's fitness market has evolved far beyond treadmills and weight rooms. Boutique studios, CrossFit boxes, functional training gyms, and premium fitness clubs across King West, Yorkville, Leslieville, and the Junction have built identities as strong as any retail brand. Members don't just join a gym — they wear the brand, share it on social, and identify with it. Custom branded merchandise is already standard in this market. Custom branded coffee is the natural extension.",
      "Coffee and fitness have a well-established relationship: pre-workout black coffee is a staple of the fitness community, and the ritual of the post-workout coffee on the way out the door is as much a part of the gym experience as the workout itself. A branded bag in the retail display sells to members who are already buying coffee — you're just putting your brand on the cup they're already going to brew at home.",
      "For Toronto gyms with corporate wellness partnerships — companies that pay for employee gym memberships, fitness challenges, or wellness programs — branded coffee bags are an ideal corporate gift that extends the wellness brand into the workplace and the home. A bag with your gym's logo is a daily brand impression outside the gym, which no piece of equipment can create.",
    ],
  },
  useCases: {
    heading: "How Toronto Gyms Use Custom Coffee",
    items: [
      {
        title: "Retail display by the front desk",
        body: "A branded bag at the check-in counter sells passively to the members who come in every day. At $20–$22 retail on a $11.75 cost, it's a high-margin product that requires no floor space, no equipment, and no staff time beyond stocking the shelf.",
      },
      {
        title: "Member milestone gifts",
        body: "One-year anniversary, goal achievement, weight-loss milestone, first pull-up — gyms that celebrate member moments with a small gift create loyalty that outlasts any contract. A custom-branded coffee bag is a premium touch at a low cost per gift.",
      },
      {
        title: "Corporate wellness partner packages",
        body: "Toronto companies with corporate gym memberships for their employees are always looking for wellness program assets. A co-branded coffee bag — your gym's branding alongside the client company's logo — is a wellness gift that goes from the gym bag to the office kitchen to the home.",
      },
      {
        title: "New member welcome kits",
        body: "Include a branded coffee bag in a new member welcome package alongside the locker key and the onboarding session. The first impression of a gym that's put thought into every detail attracts the members who stay for years.",
      },
    ],
  },
  localNote:
    "EZPZ ships to Toronto in 3–5 business days. Starting at 100 bags at $11.75/bag — retail margin at $20/bag is approximately 41%. No minimum, no long-term commitment between orders.",
  faq: [
    {
      q: "What kind of coffee works for a gym retail program?",
      a: "For gym retail, EZPZ recommends a medium-dark roast that works for pre-workout cold brew or a standard morning cup — versatile enough for the full range of your membership. We can also develop a lighter, more nuanced single-origin for premium-positioned studios.",
    },
    {
      q: "Can I co-brand bags with a corporate wellness client?",
      a: "Yes. EZPZ can produce co-branded bags that feature both your gym's identity and a partner company's logo. Minimum is 100 bags per co-branded design.",
    },
    {
      q: "What's the minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag to test retail velocity at your front desk.",
    },
    {
      q: "How fast does it ship to Toronto?",
      a: "3–5 business days from order confirmation. Roasted to order, shipped fresh.",
    },
  ],
  siblings: [
    { label: "Gyms · Montreal", href: "/en/custom-coffee-gyms-montreal" },
    { label: "Gyms · Vancouver", href: "/en/custom-coffee-gyms-vancouver" },
    { label: "Restaurants · Toronto", href: "/en/custom-coffee-restaurants-toronto" },
    { label: "Spas · Toronto", href: "/en/custom-coffee-spas-toronto" },
  ],
  ctaClose:
    "Toronto's gym members are loyal to the brands that feel like theirs. Make your coffee one of those brands.",
  cityPageHref: "/en/custom-coffee-bags-toronto",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-gyms-toronto",
  city: { name: "Toronto", province: "Ontario", deliveryTime: "3 à 5 jours ouvrables" },
  industry: {
    name: "Gyms et studios de fitness",
    parentHref: "/fr/custom-coffee-bags-gyms",
    parentLabel: "Gyms et studios de fitness",
  },
  hero: {
    h1: "Café personnalisé pour les gyms et studios de fitness de Toronto",
    subheadline: "Les gyms et studios de fitness de Toronto choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les gyms et studios de fitness de Toronto",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les gyms et studios de fitness de Toronto, Ontario, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 3 à 5 jours ouvrables.",
  why: {
    heading: "Le café de marque dans les gyms de Toronto",
    paragraphs: [
      "Toronto est la métropole la plus compétitive du Canada avec 27 millions de visiteurs par an. La scène fitness de King West, Liberty Village et Yorkville est dense, compétitive et construite sur des communautés de quartier fidèles. Les membres s'identifient à leur gym comme à une marque lifestyle, pas seulement comme à un endroit où s'entraîner.",
      "Le café est déjà dans la routine quotidienne de la plupart des membres, avant ou après l'entraînement. Quand ce café porte la marque de votre gym, votre nom fait partie de ce rituel quotidien. Un sachet vendu à la réception ou dans un présentoir de marchandisage génère des revenus à forte marge et renforce le sentiment d'appartenance des membres à votre marque.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Toronto en 3 à 5 jours ouvrables. Aucun minimum signifie que vous pouvez commencer avec 10 ou 20 sacs et voir comment vos membres réagissent avant d'investir dans un inventaire important.",
    ],
  },
  useCases: {
    heading: "Comment les gyms de Toronto utilisent le café de marque",
    items: [
    { title: "Vente au comptoir de réception et en marchandisage", body: "Un café de spécialité personnalisé vendu à la réception est l'achat d'impulsion parfait pour les membres qui partent après l'entraînement. Il se vend mieux que la plupart des articles vestimentaires à ce prix." },
    { title: "Cadeau de bienvenue pour les nouveaux membres", body: "Offrez un sachet de café de marque à chaque nouveau membre lors de son inscription. C'est un premier geste de bienvenue qui dit que votre gym est une marque lifestyle, pas seulement un espace d'entraînement." },
    { title: "Prix pour les défis et compétitions internes", body: "Pour les défis de 30 jours, les tournois d'athlètes et les compétitions internes, un sachet de café personnalisé est un prix mémorable et pratique que les gagnants utilisent quotidiennement." },
    { title: "Coffrets cadeaux saisonniers et de Saint-Valentin", body: "Les membres achètent votre café de marque comme cadeau pour leurs amis et partenaires qui s'entraînent. C'est un vecteur de recrutement organique : les destinataires découvrent votre marque à travers le cadeau." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Toronto, Ontario en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Toronto ?", a: "Les commandes pour Toronto sont expédiées depuis notre torréfacteur montréalais et arrivent en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Quel est le meilleur moyen de commencer à vendre le café de marque dans un gym de Toronto ?", a: "Commencez avec 24 à 48 sacs mis en évidence à la réception ou dans un présentoir près de la sortie. Les membres de gym achètent naturellement des produits de marque de leur établissement : le café se vend sans effort de vente actif." },
    { q: "Le café de spécialité EZPZ convient-il à la culture fitness de Toronto ?", a: "Parfaitement. EZPZ source uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables, torréfiés frais à la commande. La transparence sur l'origine et le processus de torréfaction résonne avec la clientèle fitness consciente de la qualité de ce qu'elle consomme." },
  ],
  siblings: [
    { label: "Gyms · Montréal", href: "/fr/custom-coffee-gyms-montreal" },
    { label: "Gyms · Vancouver", href: "/fr/custom-coffee-gyms-vancouver" },
    { label: "Cafés · Toronto", href: "/fr/custom-coffee-cafes-toronto" },
    { label: "Hôtels · Toronto", href: "/fr/custom-coffee-hotels-toronto" },
    { label: "Restaurants · Toronto", href: "/fr/custom-coffee-restaurants-toronto" },
  ],
  ctaClose: "Votre gym de Toronto est plus qu'un espace d'entraînement. Votre café devrait refléter ça.",
  cityPageHref: "/fr/custom-coffee-bags-toronto",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
