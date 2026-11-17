import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les restaurants de Toronto | EZPZ Coffee" : "Custom Coffee Bags for Toronto Restaurants | EZPZ Coffee";
  const description = isFr ? "Les restaurants de Toronto se distinguent avec leur propre café de spécialité de marque. Aucun minimum, design inclus, torréfié à Montréal." : "Toronto's 8,000+ restaurants compete on every detail. Custom branded specialty coffee bags extend your brand past the meal — zero minimum, from $11.75/bag, delivered in 3–5 business days.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-restaurants-toronto`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-restaurants-toronto",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-restaurants-toronto",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-restaurants-toronto",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-restaurants-toronto`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les restaurants de Toronto" : "Custom Coffee Bags for Toronto Restaurants" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-restaurants-toronto",
  city: { name: "Toronto", province: "ON", deliveryTime: "3–5 business days" },
  industry: {
    name: "Restaurants",
    parentHref: "/en/custom-coffee-bags-restaurants",
    parentLabel: "Restaurants",
  },
  hero: {
    h1: "Custom Coffee for Toronto Restaurants",
    subheadline:
      "In Canada's most competitive dining city, every touch point matters. Give your guests a coffee to remember — and a bag to take home.",
    ctaSubject: "Custom coffee for Toronto restaurant",
  },
  aeoAnswer:
    "Toronto restaurants can order custom branded specialty coffee bags from EZPZ with no minimum, starting from 100 bags at $11.75/bag. Bags arrive in 3–5 business days, roasted to order in Montreal. EZPZ handles design, sourcing, roasting, and shipping — you just place the order.",
  why: {
    heading: "Why Toronto Restaurants Are Investing in Branded Coffee",
    paragraphs: [
      "Toronto has more restaurant options per capita than almost any North American city — over 8,000 licensed restaurants across neighbourhoods from King West to Leslieville to Little Portugal. The MICHELIN Guide expanded to Toronto in 2022, raising the city's already fierce dining standards even further. In that environment, a generic cup of coffee at the end of a $200 meal signals that you stopped caring before the check arrived.",
      "Top Toronto restaurants are treating branded coffee the same way they treat plating, glassware, and soundtrack: as a brand signal. A custom-labeled bag left on the table invites guests to continue the experience at home — and it anchors your restaurant's name to a moment they'll repeat every morning.",
      "EZPZ works with Toronto restaurants across every neighbourhood and price point. Because there's zero minimum, you can start with 100 bags for a soft launch, then scale to thousands as demand proves itself.",
    ],
  },
  useCases: {
    heading: "How Toronto Restaurants Use EZPZ Coffee",
    items: [
      {
        title: "Post-dinner retail bags",
        body: "Leave a branded bag on the table or sell it at the host stand. King West and Ossington restaurants do this as a revenue stream — guests who loved the coffee buy a bag on their way out at $18–$22 retail.",
      },
      {
        title: "Takeout coffee program",
        body: "If you serve takeout or have a café counter, your cup should leave with a bag. Customers who take your branded coffee home think of your restaurant every morning — the highest-frequency brand reminder available.",
      },
      {
        title: "Private dining and event packages",
        body: "Toronto's corporate event market is enormous. Include a branded coffee bag in private dining room gifts, launch dinner takeaways, and special occasion packages. A custom bag is the detail guests photograph and share.",
      },
      {
        title: "House blend identity",
        body: "Define your restaurant's coffee identity with a house blend that's yours — not a brand guests recognize from the grocery store. Describe the origin, tasting notes, and story on your menu. EZPZ provides the specialty coffee and the bag.",
      },
    ],
  },
  localNote:
    "EZPZ ships to Toronto addresses in 3–5 business days. All coffee is roasted to order at the Canadian Roasting Society in Montreal and ships fresh. Orders of 100–499 bags start at $11.75/bag. Larger volume pricing is available — contact us.",
  faq: [
    {
      q: "What's the minimum order for a Toronto restaurant?",
      a: "There is no enforced minimum — you can start with as few as 100 bags. At that quantity, pricing starts at $11.75/bag. Most Toronto restaurants start small to gauge guest interest, then reorder in larger batches as demand proves itself.",
    },
    {
      q: "How long does delivery take to Toronto?",
      a: "Standard delivery to Toronto is 3–5 business days from order confirmation. Rush options may be available — contact us if you have an event or opening deadline.",
    },
    {
      q: "Can I choose my own coffee origin?",
      a: "Yes. EZPZ sources from a curated library of specialty origins — Brazils, Ethiopians, Colombians, Guatemalans, and more. We'll recommend profiles that work well as espresso, filter, or a versatile both-ways blend depending on your service style.",
    },
    {
      q: "Do you deliver to all Toronto neighbourhoods?",
      a: "EZPZ ships Canada-wide. King West, Yorkville, Leslieville, The Annex, Kensington Market, Corktown, Danforth — anywhere in the GTA.",
    },
  ],
  siblings: [
    { label: "Restaurants · Montreal", href: "/en/custom-coffee-restaurants-montreal" },
    { label: "Restaurants · Vancouver", href: "/en/custom-coffee-restaurants-vancouver" },
    { label: "Hotels · Toronto", href: "/en/custom-coffee-hotels-toronto" },
    { label: "Corporate Offices · Toronto", href: "/en/custom-coffee-corporate-offices-toronto" },
    { label: "Cafés · Toronto", href: "/en/custom-coffee-cafes-toronto" },
  ],
  ctaClose:
    "Toronto runs on coffee. Make sure your restaurant's brand travels home with every cup.",
  cityPageHref: "/en/custom-coffee-bags-toronto",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-restaurants-toronto",
  city: { name: "Toronto", province: "Ontario", deliveryTime: "3 à 5 jours ouvrables" },
  industry: {
    name: "Restaurants",
    parentHref: "/fr/custom-coffee-bags-restaurants",
    parentLabel: "Restaurants",
  },
  hero: {
    h1: "Café personnalisé pour les restaurants de Toronto",
    subheadline: "Les restaurants de Toronto choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les restaurants de Toronto",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les restaurants de Toronto, Ontario, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 3 à 5 jours ouvrables.",
  why: {
    heading: "Le café de marque dans la scène gastronomique de Toronto",
    paragraphs: [
      "Toronto est la métropole la plus compétitive du Canada avec 27 millions de visiteurs par an. Les restaurants de King West, Distillery District et Queen Street West se démarquent par leur identité de marque autant que par leur menu. Dans ce marché compétitif, le café en fin de repas est le dernier point de contact avec vos clients, et c'est souvent le plus mémorable.",
      "Un café de spécialité personnalisé avec le nom et le logo de votre restaurant transforme ce moment final en un ancrage de marque. Les clients qui emportent un sachet chez eux préparent votre café chaque matin et se souviennent de leur expérience. Ce rappel quotidien génère des rebookings, des références et des avis positifs sans aucune dépense marketing.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Toronto en 3 à 5 jours ouvrables. Vous pouvez servir votre café de marque au restaurant et le vendre au comptoir à la sortie. Aucun minimum de commande signifie que vous pouvez commencer avec une petite quantité et ajuster selon la demande.",
    ],
  },
  useCases: {
    heading: "Comment les restaurants de Toronto utilisent le café de marque",
    items: [
    { title: "Service en fin de repas et café de maison", body: "Servez votre propre café de spécialité de marque en fin de repas. L'histoire de l'origine et le design du sachet créent un moment de conversation qui marque la mémoire de vos clients." },
    { title: "Vente au comptoir comme produit à emporter", body: "Proposez des sacs de votre café de maison à la caisse ou à l'entrée. Les clients qui ont adoré leur café voudront en acheter pour chez eux, et chaque sachet maintient votre marque dans leur cuisine." },
    { title: "Cadeaux corporatifs et événements privés", body: "Pour les événements privés, les réceptions d'entreprise et les sorties de groupe, utilisez votre café de marque comme cadeau de bienvenue ou faveur de table qui reflète la qualité de votre établissement." },
    { title: "Coffrets et paniers cadeaux des Fêtes", body: "Créez des coffrets cadeaux premium avec votre café de maison pour les Fêtes. Les clients réguliers achètent ces coffrets pour offrir à leurs proches une expérience liée à leur restaurant préféré de Toronto." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Toronto, Ontario en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Toronto ?", a: "Les commandes pour Toronto sont expédiées depuis notre torréfacteur montréalais et arrivent en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Comment les restaurants de Toronto servent-ils le café EZPZ en fin de repas ?", a: "La plupart des restaurants servent le café dans un filtre ou une cafetière French press, avec le sachet ouvert visible ou posé sur la table pour que les clients voient l'histoire de l'origine. D'autres servent la portion en capsule ou en dosette adaptée à leur équipement." },
    { q: "Peut-on commander des sacs avec les noms des restaurants de Toronto sans fichiers prêts à imprimer ?", a: "Oui. Notre équipe de design gère l'ensemble de la création visuelle. Fournissez votre logo et vos couleurs de marque, et nous créons un design de sachet professionnel sans frais supplémentaires. Aucun fichier prêt à imprimer ni designer externe n'est nécessaire." },
  ],
  siblings: [
    { label: "Restaurants · Montréal", href: "/fr/custom-coffee-restaurants-montreal" },
    { label: "Restaurants · Vancouver", href: "/fr/custom-coffee-restaurants-vancouver" },
    { label: "Cafés · Toronto", href: "/fr/custom-coffee-cafes-toronto" },
    { label: "Hôtels · Toronto", href: "/fr/custom-coffee-hotels-toronto" },
    { label: "Gyms · Toronto", href: "/fr/custom-coffee-gyms-toronto" },
  ],
  ctaClose: "La dernière impression que vous laissez à vos clients de Toronto. Faites-la mémorable.",
  cityPageHref: "/fr/custom-coffee-bags-toronto",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
