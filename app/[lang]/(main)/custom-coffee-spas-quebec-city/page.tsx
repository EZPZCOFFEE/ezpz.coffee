import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les spas de Québec | EZPZ Coffee" : "Custom Coffee Bags for Quebec City Spas | EZPZ Coffee";
  const description = isFr ? "Les spas et instituts de bien-être de Québec prolongent l'expérience de luxe avec le café de marque. Aucun minimum, design inclus." : "Quebec City's Nordic spa tradition and UNESCO heritage tourism create a premium wellness take-home market. Custom branded specialty coffee — French design, locally roasted, zero minimum.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-spas-quebec-city`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-spas-quebec-city",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-spas-quebec-city",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-spas-quebec-city",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-spas-quebec-city`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les spas de Québec" : "Custom Coffee Bags for Quebec City Spas" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-spas-quebec-city",
  city: { name: "Quebec City", province: "QC", deliveryTime: "2–3 business days" },
  industry: { name: "Spas & Wellness", parentHref: "/en/custom-coffee-bags-spas", parentLabel: "Spas & Wellness" },
  hero: {
    h1: "Custom Coffee for Quebec City Spas & Wellness Studios",
    subheadline:
      "Nordic spa culture was born in Quebec. Your spa's branded coffee should be as rooted in this province as the tradition it serves.",
    ctaSubject: "Custom coffee for Quebec City spa",
  },
  aeoAnswer:
    "Quebec City spas can order custom branded specialty coffee bags from EZPZ — roasted in Montreal — with no minimum, starting at 100 bags at $11.75/bag. French-language design is the default. Delivered in 2–3 business days.",
  why: {
    heading: "Quebec City's Spa Culture and the Post-Treatment Coffee Ritual",
    paragraphs: [
      "Quebec City is at the centre of North America's Nordic spa tradition. Strøm Nordic Spa — with its Quebec City location offering thermal circuit experiences that draw visitors from across the province and beyond — represents a spa culture that is deeply embedded in Quebec's seasonal identity. The thermal experience in a snow-covered outdoor circuit, the post-plunge warmth-up by the fire, the coffee that follows — these moments are part of the cultural memory of anyone who has experienced a Quebec Nordic spa.",
      "Quebec City's status as a UNESCO World Heritage tourist destination means its spas serve a constant stream of visitors who are specifically seeking authentic Quebec experiences. A branded French-language coffee bag that a tourist takes home from a Vieux-Québec spa boutique is a souvenir that represents both the spa brand and the city's cultural identity. It's the kind of product that generates unboxing posts, word-of-mouth recommendations, and return visits.",
      "EZPZ roasts in Montreal — the most locally sourced roasting option available for any Quebec City spa. A bag that says 'Torréfié au Québec pour [Spa Name]' is an authentic, accurate, and compelling provenance claim that fits the local-first values of Quebec City's wellness market.",
    ],
  },
  useCases: {
    heading: "How Quebec City Spas Use Custom Coffee",
    items: [
      {
        title: "Post-Nordic circuit boutique retail",
        body: "A French-language branded bag in the boutique at the exit of the Nordic circuit is the ritual take-home that every guest who experienced the treatment sequence will consider. The circuit ends with warmth and relaxation — the coffee that closes that warmth is the product they want to recreate at home.",
      },
      {
        title: "Château Frontenac and Old Quebec luxury packages",
        body: "Quebec City's luxury spa guests — staying at the Château Frontenac or a boutique Old Quebec property — are spending $300–$600 per night for a heritage experience. A branded coffee bag as a spa package inclusion is a locally sourced detail that fits the calibre of the experience and travels home as a tangible memory.",
      },
      {
        title: "Carnaval and winter festival wellness kits",
        body: "Carnaval de Québec brings visitors in February — the peak Nordic spa season. A 'Carnaval wellness kit' with a thermal circuit entry and a branded coffee bag is a seasonal package that sells to the hundreds of thousands of visitors who want to experience Quebec at its most seasonal.",
      },
      {
        title: "French-language holiday wellness gift sets",
        body: "Quebec City's holiday gifting market runs November–January. A spa gift set — treatment voucher and French-language specialty coffee bag, beautifully packaged — is the locally produced, premium Quebec gift that resonates with both locals and visitors buying gifts to bring back from the province.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — 2–3 business day delivery to Quebec City, the freshest possible local-sourced coffee. French-language design is the default. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get French-only packaging for my Quebec City spa?",
      a: "Yes. French-only is the default for Quebec City clients — consistent with Loi 101 and with the linguistic identity of Quebec City's predominantly francophone clientele.",
    },
    {
      q: "What coffee profile fits a Nordic spa environment?",
      a: "For Nordic spa retail, EZPZ recommends a warming, aromatic single-origin — an Ethiopian natural with floral and berry notes, or a Colombian washed with caramel sweetness — that evokes the warming comfort of the post-circuit relaxation experience.",
    },
    {
      q: "Can I use this coffee in the lounge service as well?",
      a: "Yes. EZPZ can supply both lounge service bulk coffee and retail bags. A branded cup served in the lounge that guests can then buy in the boutique is a perfect conversion sequence.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag to start.",
    },
  ],
  siblings: [
    { label: "Spas · Montreal", href: "/en/custom-coffee-spas-montreal" },
    { label: "Spas · Ottawa", href: "/en/custom-coffee-spas-ottawa" },
    { label: "Hotels · Quebec City", href: "/en/custom-coffee-hotels-quebec-city" },
    { label: "Restaurants · Quebec City", href: "/en/custom-coffee-restaurants-quebec-city" },
  ],
  ctaClose:
    "Quebec City's Nordic spa culture is unlike anywhere else in North America. Your branded coffee should be part of the tradition.",
  cityPageHref: "/en/custom-coffee-bags-quebec-city",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-spas-quebec-city",
  city: { name: "Québec", province: "Québec", deliveryTime: "2 à 3 jours ouvrables" },
  industry: {
    name: "Spas et bien-être",
    parentHref: "/fr/custom-coffee-bags-spas",
    parentLabel: "Spas",
  },
  hero: {
    h1: "Café personnalisé pour les spas et instituts de bien-être de Québec",
    subheadline: "Les spas et instituts de bien-être de Québec choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les spas et instituts de bien-être de Québec",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les spas et instituts de bien-être de Québec, Québec, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 2 à 3 jours ouvrables.",
  why: {
    heading: "L'expérience de bien-être de Québec. Prolongée dans chaque tasse.",
    paragraphs: [
      "Québec est la capitale culturelle du Québec et l'une des destinations touristiques les plus visitées d'Amérique du Nord. Les spas et instituts de bien-être de le Vieux-Québec, Grande Allée et Saint-Jean-Baptiste ont développé une clientèle sophistiquée qui attend une expérience de qualité dans tous les aspects du service. Le café de spécialité personnalisé est le produit de vente au détail qui complète cette offre de façon naturelle.",
      "Chaque matin où votre cliente prépare le café de votre spa, elle se reconnecte émotionnellement à l'expérience que vous avez créée. Ce rappel quotidien génère des rebookings et des références sans aucune dépense marketing. Et avec une marge excellente, le café de marque est l'un des articles de vente au détail les plus rentables que vous pouvez proposer.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Québec en 2 à 3 jours ouvrables. Aucun minimum signifie que vous pouvez tester avec une petite sélection sur vos tablettes et ajuster selon la demande de votre clientèle.",
    ],
  },
  useCases: {
    heading: "Comment les spas de Québec utilisent le café de marque",
    items: [
    { title: "Produit de vente au détail à forte marge", body: "Un sachet à 8 $ se vend 24 à 28 $ dans un environnement spa. Votre clientèle de bien-être fait confiance à vos recommandations et achète sans résistance au prix." },
    { title: "Cadeau inclus dans les forfaits de soins", body: "Incluez un sachet de café de marque dans les forfaits de soin et les coffrets cadeaux. C'est l'élément tangible à emporter qui rend le forfait mémorable et facilite la décision d'achat." },
    { title: "Faveur de traitement et expérience de bienvenue", body: "Pour les premières visites et les traitements spéciaux, offrez un sachet de café de marque comme cadeau de remerciement. Le geste crée une association positive qui génère des avis cinq étoiles." },
    { title: "Programme de référence et fidélité", body: "Utilisez le café de marque comme incitatif de référence : une cliente qui réfère une amie reçoit un sachet de votre café. C'est un mécanisme de récompense premium et mémorable." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Québec, Québec en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Québec ?", a: "Les commandes pour Québec sont expédiées depuis notre torréfacteur montréalais et arrivent en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "À quel prix les spas de Québec vendent-ils les sacs de café de marque ?", a: "Dans un environnement spa, les sacs de café de spécialité se vendent typiquement entre 24 et 32 dollars. Un sachet de 225g à 340g (8-12oz) représente une valeur perçue élevée et une marge confortable. EZPZ recommande de tester avec quelques gammes de prix pour trouver le point optimal pour votre clientèle." },
    { q: "Le café de marque peut-il être inclus dans les forfaits cadeaux de spa de Québec ?", a: "Oui. C'est l'une des utilisations les plus populaires. Un sachet de café de marque dans un coffret cadeau de spa crée un élément tangible et consommable qui élève la valeur perçue du forfait sans augmenter significativement le coût." },
  ],
  siblings: [
    { label: "Spas · Montréal", href: "/fr/custom-coffee-spas-montreal" },
    { label: "Spas · Toronto", href: "/fr/custom-coffee-spas-toronto" },
    { label: "Cafés · Québec", href: "/fr/custom-coffee-cafes-quebec-city" },
    { label: "Hôtels · Québec", href: "/fr/custom-coffee-hotels-quebec-city" },
    { label: "Gyms · Québec", href: "/fr/custom-coffee-gyms-quebec-city" },
  ],
  ctaClose: "L'expérience de votre spa de Québec continue chaque matin dans la tasse de votre cliente.",
  cityPageHref: "/fr/custom-coffee-bags-quebec-city",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
