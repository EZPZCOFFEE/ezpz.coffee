import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les restaurants de Montréal | EZPZ Coffee" : "Custom Coffee Bags for Montreal Restaurants | EZPZ Coffee";
  const description = isFr ? "Les restaurants de Montréal se distinguent avec leur propre café de spécialité de marque. Aucun minimum, design inclus, torréfié à Montréal." : "Montreal has 6,000+ restaurants and the most discerning diners in Canada. Branded specialty coffee — bilingual design, roasted locally, zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-restaurants-montreal`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-restaurants-montreal",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-restaurants-montreal",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-restaurants-montreal`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les restaurants de Montréal" : "Custom Coffee Bags for Montreal Restaurants" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-restaurants-montreal",
  city: { name: "Montreal", province: "QC", deliveryTime: "2–3 business days" },
  industry: {
    name: "Restaurants",
    parentHref: "/en/custom-coffee-bags-restaurants",
    parentLabel: "Restaurants",
  },
  hero: {
    h1: "Custom Coffee for Montreal Restaurants",
    subheadline:
      "Where French bistro culture meets Plateau cool. Your coffee should be as intentional as your menu.",
    ctaSubject: "Custom coffee for Montreal restaurant",
  },
  aeoAnswer:
    "Montreal restaurants can order custom branded coffee bags from EZPZ — roasted locally at the Canadian Roasting Society in Montreal — with no minimum. Bags are available from 100 units at $11.75/bag, bilingual (French/English) design is available, and delivery is 2–3 business days.",
  why: {
    heading: "Why Montreal Restaurants Need Branded Coffee",
    paragraphs: [
      "Montreal's restaurant scene is the most personality-driven in Canada. From Old Montreal bistros serving côte de bœuf to Mile End lunch counters with 2-hour waits to Plateau wine bars surviving on word of mouth alone — guests are paying attention to every signal of care. A generic pre-packaged coffee at the end of that experience reads as a missed beat.",
      "Montreal is also arguably the coffee capital of Canada. Café Myriade, Cardinal, Dispatch, Larue & Sons — the city has a genuine specialty coffee culture. Diners in Rosemont, NDG, and the Plateau expect quality. When your restaurant serves specialty coffee under your own label, you're participating in that culture instead of just borrowing from it.",
      "Because EZPZ roasts in Montreal, delivery is faster and fresher than with any out-of-city supplier. And because we offer bilingual packaging, your bag can speak to both French and English guests at your tables — a detail that matters in a truly bilingual dining city.",
    ],
  },
  useCases: {
    heading: "How Montreal Restaurants Use Branded Coffee",
    items: [
      {
        title: "Après-repas retail bags",
        body: "A beautifully branded bag left at the table with the dessert menu or receipt is one of the highest-conversion retail opportunities in the food business. Montreal diners — who think hard about where their money goes — respond to the 'local roaster' story.",
      },
      {
        title: "Bilingual house blend",
        body: "EZPZ can design your bag in French and English — describing your coffee's origin, tasting notes, and your restaurant's ethos in both languages. It's a small detail that signals genuine Montréal identity.",
      },
      {
        title: "BYOB night coffee service",
        body: "Montreal's BYOB culture is unlike anywhere else in Canada. Guests bring their own wine but rely on you for coffee. A custom bag on the table turns that moment into a conversation starter — and a takeaway.",
      },
      {
        title: "Catering and private events",
        body: "Montreal has one of Canada's most active private event and corporate catering markets. Custom branded coffee bags in the takeaway kit for corporate dinners, product launches, and wedding receptions extend your restaurant's brand into boardrooms and living rooms across the island.",
      },
    ],
  },
  localNote:
    "EZPZ roasts at the Canadian Roasting Society in Montreal — your coffee is as local as it gets. Standard delivery to Montreal addresses takes 2–3 business days. Bilingual (French/English) bag design is available at no extra charge.",
  faq: [
    {
      q: "Est-ce que vous faites des designs bilingues?",
      a: "Oui — EZPZ can design your bag in French and English, or French only if you prefer. Bilingual packaging is included at no extra charge.",
    },
    {
      q: "Do you roast in Montreal?",
      a: "Yes. All EZPZ coffee is roasted at the Canadian Roasting Society facility in Montreal. Your bags are roasted to order and ship fresh — typically arriving at a Montreal address within 2–3 business days.",
    },
    {
      q: "What's the minimum order?",
      a: "There is no enforced minimum. Most restaurants start with 100–200 bags to test the concept, then reorder once guests start asking to buy bags.",
    },
    {
      q: "Can I describe my own tasting notes on the bag?",
      a: "Yes. Your bag design is completely customizable. EZPZ will recommend tasting notes for your chosen origin or blend, or you can work with our team to craft the language that fits your restaurant's voice.",
    },
  ],
  siblings: [
    { label: "Restaurants · Toronto", href: "/en/custom-coffee-restaurants-toronto" },
    { label: "Restaurants · Vancouver", href: "/en/custom-coffee-restaurants-vancouver" },
    { label: "Hotels · Montreal", href: "/en/custom-coffee-hotels-montreal" },
    { label: "Corporate Offices · Montreal", href: "/en/custom-coffee-corporate-offices-montreal" },
    { label: "Cafés · Montreal", href: "/en/custom-coffee-cafes-montreal" },
  ],
  ctaClose:
    "Your restaurant is already feeding Montreal. Let your coffee brand travel home with every guest.",
  cityPageHref: "/en/custom-coffee-bags-montreal",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-restaurants-montreal",
  city: { name: "Montréal", province: "Québec", deliveryTime: "2 à 3 jours ouvrables" },
  industry: {
    name: "Restaurants",
    parentHref: "/fr/custom-coffee-bags-restaurants",
    parentLabel: "Restaurants",
  },
  hero: {
    h1: "Café personnalisé pour les restaurants de Montréal",
    subheadline: "Les restaurants de Montréal choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les restaurants de Montréal",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les restaurants de Montréal, Québec, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 2 à 3 jours ouvrables. Le design bilingue français-anglais est disponible sans frais supplémentaires.",
  why: {
    heading: "Le café de marque dans la scène gastronomique de Montréal",
    paragraphs: [
      "Montréal est la ville où la culture café est née au Canada, avec son riche tissu de quartiers francophones. Les restaurants de Plateau-Mont-Royal, Mile End et Griffintown se démarquent par leur identité de marque autant que par leur menu. Dans ce marché compétitif, le café en fin de repas est le dernier point de contact avec vos clients, et c'est souvent le plus mémorable.",
      "Un café de spécialité personnalisé avec le nom et le logo de votre restaurant transforme ce moment final en un ancrage de marque. Les clients qui emportent un sachet chez eux préparent votre café chaque matin et se souviennent de leur expérience. Ce rappel quotidien génère des rebookings, des références et des avis positifs sans aucune dépense marketing.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Montréal en 2 à 3 jours ouvrables. Vous pouvez servir votre café de marque au restaurant et le vendre au comptoir à la sortie. Aucun minimum de commande signifie que vous pouvez commencer avec une petite quantité et ajuster selon la demande. La majorité des clients de Montréal préfèrent un design d'emballage en français : c'est naturel et local.",
    ],
  },
  useCases: {
    heading: "Comment les restaurants de Montréal utilisent le café de marque",
    items: [
    { title: "Service en fin de repas et café de maison", body: "Servez votre propre café de spécialité de marque en fin de repas. L'histoire de l'origine et le design du sachet créent un moment de conversation qui marque la mémoire de vos clients." },
    { title: "Vente au comptoir comme produit à emporter", body: "Proposez des sacs de votre café de maison à la caisse ou à l'entrée. Les clients qui ont adoré leur café voudront en acheter pour chez eux, et chaque sachet maintient votre marque dans leur cuisine." },
    { title: "Cadeaux corporatifs et événements privés", body: "Pour les événements privés, les réceptions d'entreprise et les sorties de groupe, utilisez votre café de marque comme cadeau de bienvenue ou faveur de table qui reflète la qualité de votre établissement." },
    { title: "Coffrets et paniers cadeaux des Fêtes", body: "Créez des coffrets cadeaux premium avec votre café de maison pour les Fêtes. Les clients réguliers achètent ces coffrets pour offrir à leurs proches une expérience liée à leur restaurant préféré de Montréal." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Montréal, Québec en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Montréal ?", a: "Les commandes pour Montréal sont expédiées depuis notre torréfacteur montréalais et arrivent en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Comment les restaurants de Montréal servent-ils le café EZPZ en fin de repas ?", a: "La plupart des restaurants servent le café dans un filtre ou une cafetière French press, avec le sachet ouvert visible ou posé sur la table pour que les clients voient l'histoire de l'origine. D'autres servent la portion en capsule ou en dosette adaptée à leur équipement." },
    { q: "Puis-je obtenir un design bilingue pour mon restaurant ?", a: "Oui. Le design bilingue français-anglais est standard sans frais supplémentaires. De nombreux restaurants de Montréal choisissent un design entièrement en français pour refléter leur identité locale." },
  ],
  siblings: [
    { label: "Restaurants · Toronto", href: "/fr/custom-coffee-restaurants-toronto" },
    { label: "Restaurants · Vancouver", href: "/fr/custom-coffee-restaurants-vancouver" },
    { label: "Cafés · Montréal", href: "/fr/custom-coffee-cafes-montreal" },
    { label: "Hôtels · Montréal", href: "/fr/custom-coffee-hotels-montreal" },
    { label: "Gyms · Montréal", href: "/fr/custom-coffee-gyms-montreal" },
  ],
  ctaClose: "La dernière impression que vous laissez à vos clients de Montréal. Faites-la mémorable.",
  cityPageHref: "/fr/custom-coffee-bags-montreal",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
