import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les restaurants de Ottawa | EZPZ Coffee" : "Custom Coffee Bags for Ottawa Restaurants | EZPZ Coffee";
  const description = isFr ? "Les restaurants de Ottawa se distinguent avec leur propre café de spécialité de marque. Aucun minimum, design inclus, torréfié à Montréal." : "Ottawa's government, diplomatic, and tech dining culture demands quality. Custom branded specialty coffee — bilingual, zero minimum, from $11.75/bag, delivered in 3–5 days.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-restaurants-ottawa`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-restaurants-ottawa",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-restaurants-ottawa",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-restaurants-ottawa",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-restaurants-ottawa`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les restaurants de Ottawa" : "Custom Coffee Bags for Ottawa Restaurants" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-restaurants-ottawa",
  city: { name: "Ottawa", province: "ON", deliveryTime: "3–5 business days" },
  industry: {
    name: "Restaurants",
    parentHref: "/en/custom-coffee-bags-restaurants",
    parentLabel: "Restaurants",
  },
  hero: {
    h1: "Custom Coffee for Ottawa Restaurants",
    subheadline:
      "Ottawa has government expense accounts, 130 embassies, and a rapidly growing tech scene. A branded coffee is a detail they'll notice.",
    ctaSubject: "Custom coffee for Ottawa restaurant",
  },
  aeoAnswer:
    "Ottawa restaurants can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Bags are roasted to order in Montreal and delivered to Ottawa in 3–5 business days. Bilingual (French/English) design is available.",
  why: {
    heading: "Ottawa's Dining Scene and the Brand Detail That Matters",
    paragraphs: [
      "Ottawa has a dining culture shaped by three distinct forces: the federal government and its 300,000+ public servants who populate Westboro and Glebe restaurants at lunch and dinner; a diplomatic community from 130+ countries whose members entertain regularly at expense; and a rapidly growing tech sector anchored by Shopify HQ, Kinaxis, Nokia, and L3Harris. Each audience has high expectations and a discerning palate.",
      "The ByWard Market has been the city's restaurant hub for over 170 years — but the Glebe, Westboro, and Centretown neighbourhoods have developed strong independent dining identities. Ottawa restaurants in these areas compete not just on menu, but on the details that turn a meal into a reference point. Coffee is that detail. It's the last thing a guest experiences and the first thing they'll mention when recommending the restaurant to a colleague.",
      "Ottawa is officially a bilingual city — roughly 40% of residents are French-speaking, and many more are functionally bilingual federal workers. EZPZ's bilingual packaging option means your coffee bag can speak to both communities without a second SKU or extra cost.",
    ],
  },
  useCases: {
    heading: "How Ottawa Restaurants Use Branded Coffee",
    items: [
      {
        title: "Diplomatic and government entertaining",
        body: "Ottawa's diplomatic and government community dines on budgets and expectations set by embassies and departmental protocols. A custom-branded post-dinner coffee — specialty-grade, with a clear origin narrative — fits the quality expectation of this audience and leaves a branded impression that matters in a relationship-driven city.",
      },
      {
        title: "ByWard Market and Glebe retail bags",
        body: "Ottawa tourists and locals alike shop for locally made, premium products in ByWard Market and the Glebe. A custom coffee bag at $20 is a premium souvenir that carries your restaurant's identity out of the building and onto kitchen shelves across the National Capital Region.",
      },
      {
        title: "Tech company team dinners",
        body: "Shopify, Kinaxis, and other Ottawa tech companies run regular team dinners for large groups. A branded coffee takeaway in the bill presenter or at the host stand converts a group table into a bag that circulates through the entire office the next morning.",
      },
      {
        title: "Bilingual house blend",
        body: "A bag designed with French and English copy — your restaurant's name, the coffee's origin, and a brief tasting note — is a signal that your business takes Ottawa's bilingual character seriously. EZPZ provides bilingual design at no extra charge.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Ottawa in 3–5 business days — one of the fastest turnarounds outside Quebec. Bilingual packaging is available at no extra charge. Orders start at 100 bags at $11.75/bag.",
  faq: [
    {
      q: "Can you do bilingual (French/English) bags for our Ottawa restaurant?",
      a: "Yes. Bilingual packaging is available at no extra charge and is well-suited to Ottawa's bilingual dining audience. We can do French-primary, English-primary, or equal-language layouts.",
    },
    {
      q: "How long does delivery take to Ottawa?",
      a: "3–5 business days from order confirmation. Ottawa is close enough to Montreal that delivery is among the fastest we offer outside Quebec.",
    },
    {
      q: "What's the minimum order?",
      a: "No enforced minimum. Start with 100 bags at $11.75/bag to gauge interest — most Ottawa restaurants find counter sales strong given the mix of locals and visitors who come through the door.",
    },
    {
      q: "Can we feature the coffee's origin on our menu?",
      a: "Yes, and we encourage it. EZPZ provides full traceability information for each coffee — origin country, region, farm or cooperative, processing method, and cupping notes — so your menu or table card can tell the complete story.",
    },
  ],
  siblings: [
    { label: "Restaurants · Montreal", href: "/en/custom-coffee-restaurants-montreal" },
    { label: "Hotels · Ottawa", href: "/en/custom-coffee-hotels-ottawa" },
    { label: "Corporate Offices · Ottawa", href: "/en/custom-coffee-corporate-offices-ottawa" },
    { label: "Cafés · Ottawa", href: "/en/custom-coffee-cafes-ottawa" },
  ],
  ctaClose:
    "Ottawa is a city of detail-oriented professionals. Make sure your coffee is one of the details they remember.",
  cityPageHref: "/en/custom-coffee-bags-ottawa",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-restaurants-ottawa",
  city: { name: "Ottawa", province: "Ontario", deliveryTime: "3 à 5 jours ouvrables" },
  industry: {
    name: "Restaurants",
    parentHref: "/fr/custom-coffee-bags-restaurants",
    parentLabel: "Restaurants",
  },
  hero: {
    h1: "Café personnalisé pour les restaurants de Ottawa",
    subheadline: "Les restaurants de Ottawa choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les restaurants de Ottawa",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les restaurants de Ottawa, Ontario, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 3 à 5 jours ouvrables. Le design bilingue français-anglais est disponible sans frais supplémentaires.",
  why: {
    heading: "Le café de marque dans la scène gastronomique de Ottawa",
    paragraphs: [
      "Ottawa est la capitale bilingue du Canada, avec un marché de services professionnels gouvernementaux et technologiques unique. Les restaurants de le marché By, Glebe et Wellington Ouest se démarquent par leur identité de marque autant que par leur menu. Dans ce marché compétitif, le café en fin de repas est le dernier point de contact avec vos clients, et c'est souvent le plus mémorable.",
      "Un café de spécialité personnalisé avec le nom et le logo de votre restaurant transforme ce moment final en un ancrage de marque. Les clients qui emportent un sachet chez eux préparent votre café chaque matin et se souviennent de leur expérience. Ce rappel quotidien génère des rebookings, des références et des avis positifs sans aucune dépense marketing.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Ottawa en 3 à 5 jours ouvrables. Vous pouvez servir votre café de marque au restaurant et le vendre au comptoir à la sortie. Aucun minimum de commande signifie que vous pouvez commencer avec une petite quantité et ajuster selon la demande. EZPZ offre le design d'emballage bilingue français-anglais sans frais supplémentaires, une option précieuse dans la région bilingue de la capitale.",
    ],
  },
  useCases: {
    heading: "Comment les restaurants de Ottawa utilisent le café de marque",
    items: [
    { title: "Service en fin de repas et café de maison", body: "Servez votre propre café de spécialité de marque en fin de repas. L'histoire de l'origine et le design du sachet créent un moment de conversation qui marque la mémoire de vos clients." },
    { title: "Vente au comptoir comme produit à emporter", body: "Proposez des sacs de votre café de maison à la caisse ou à l'entrée. Les clients qui ont adoré leur café voudront en acheter pour chez eux, et chaque sachet maintient votre marque dans leur cuisine." },
    { title: "Cadeaux corporatifs et événements privés", body: "Pour les événements privés, les réceptions d'entreprise et les sorties de groupe, utilisez votre café de marque comme cadeau de bienvenue ou faveur de table qui reflète la qualité de votre établissement." },
    { title: "Coffrets et paniers cadeaux des Fêtes", body: "Créez des coffrets cadeaux premium avec votre café de maison pour les Fêtes. Les clients réguliers achètent ces coffrets pour offrir à leurs proches une expérience liée à leur restaurant préféré de Ottawa." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Ottawa, Ontario en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Ottawa ?", a: "Les commandes pour Ottawa sont expédiées depuis notre torréfacteur montréalais et arrivent en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Comment les restaurants de Ottawa servent-ils le café EZPZ en fin de repas ?", a: "La plupart des restaurants servent le café dans un filtre ou une cafetière French press, avec le sachet ouvert visible ou posé sur la table pour que les clients voient l'histoire de l'origine. D'autres servent la portion en capsule ou en dosette adaptée à leur équipement." },
    { q: "Puis-je obtenir un design bilingue pour mon restaurant ?", a: "Oui. Le design bilingue français-anglais est standard sans frais supplémentaires. De nombreux restaurants de Ottawa choisissent un design entièrement en français pour refléter leur identité locale." },
  ],
  siblings: [
    { label: "Restaurants · Montréal", href: "/fr/custom-coffee-restaurants-montreal" },
    { label: "Restaurants · Toronto", href: "/fr/custom-coffee-restaurants-toronto" },
    { label: "Cafés · Ottawa", href: "/fr/custom-coffee-cafes-ottawa" },
    { label: "Hôtels · Ottawa", href: "/fr/custom-coffee-hotels-ottawa" },
    { label: "Gyms · Ottawa", href: "/fr/custom-coffee-gyms-ottawa" },
  ],
  ctaClose: "La dernière impression que vous laissez à vos clients de Ottawa. Faites-la mémorable.",
  cityPageHref: "/fr/custom-coffee-bags-ottawa",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
