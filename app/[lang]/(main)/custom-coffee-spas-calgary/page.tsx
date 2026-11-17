import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les spas de Calgary | EZPZ Coffee" : "Custom Coffee Bags for Calgary Spas | EZPZ Coffee";
  const description = isFr ? "Les spas et instituts de bien-être de Calgary prolongent l'expérience de luxe avec le café de marque. Aucun minimum, design inclus." : "Calgary's energy sector wealth and growing luxury wellness market create strong spa retail demand. Custom branded specialty coffee take-homes — zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-spas-calgary`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-spas-calgary",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-spas-calgary",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-spas-calgary",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-spas-calgary`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les spas de Calgary" : "Custom Coffee Bags for Calgary Spas" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-spas-calgary",
  city: { name: "Calgary", province: "AB", deliveryTime: "4–6 business days" },
  industry: { name: "Spas & Wellness", parentHref: "/en/custom-coffee-bags-spas", parentLabel: "Spas & Wellness" },
  hero: {
    h1: "Custom Coffee for Calgary Spas & Wellness Studios",
    subheadline:
      "Calgary's energy sector professionals spend well on wellness. Your spa's take-home coffee should match the premium of the experience.",
    ctaSubject: "Custom coffee for Calgary spa",
  },
  aeoAnswer:
    "Calgary spas can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Bags are roasted to order in Montreal and delivered to Calgary in 4–6 business days.",
  why: {
    heading: "Calgary's Luxury Wellness Market and the Retail Coffee Opportunity",
    paragraphs: [
      "Calgary's luxury spa market has grown significantly alongside the city's energy sector wealth. The Willow Stream Spa at the Fairmont Palliser, the Vida Spa at Hotel Arts, and a growing number of independent luxury wellness studios serve an affluent clientele — energy executives, their spouses, and the growing professional class — who are accustomed to premium hospitality experiences in Houston, Dubai, and London.",
      "Calgary's active lifestyle culture also intersects with spa culture in a way that creates year-round demand for recovery-oriented wellness experiences. Skiers, trail runners, hockey players, and cyclists use premium spas for physical recovery, not just relaxation. This audience is particularly receptive to a take-home product that bridges the athletic and the mindful — a specialty coffee bag that represents both performance and pleasure.",
      "The Stampede season amplifies Calgary's wellness market. The 10 days of Calgary Stampede drive significant spend on luxury experiences, and spas that position branded coffee bags as a 'post-Stampede recovery ritual' — with limited-edition packaging or a seasonal message — can capture gifting sales from guests who are in a celebratory, experiential spending mindset.",
    ],
  },
  useCases: {
    heading: "How Calgary Spas Use Custom Coffee",
    items: [
      {
        title: "Luxury treatment take-home bags",
        body: "For a $200+ deep tissue or body treatment, a branded specialty coffee bag as a post-treatment take-home is a memorable detail that converts satisfied clients into returning ones. At $11.75/bag, the cost is minimal relative to the retention value.",
      },
      {
        title: "Corporate wellness packages for energy sector clients",
        body: "Calgary's energy companies purchase spa days for executive teams and high-performing employees. A co-branded coffee bag — your spa and the client company — elevates the corporate gift and gives the purchasing HR manager a premium add-on that justifies the budget.",
      },
      {
        title: "Stampede season wellness packages",
        body: "Calgary Stampede drives heavy demand for recovery-focused wellness experiences. A 'post-Stampede' branded package that includes a treatment and a specialty coffee bag — 'recover in style' — is a seasonal offering that can sell out quickly in a city of 1.4 million celebrating the world's largest rodeo.",
      },
      {
        title: "Banff and mountain retreat collaboration",
        body: "Calgary spas that offer packages extending to Banff or Kananaskis retreat programming can include branded coffee bags as a 'mountain morning ritual' take-home. The bag travels to the mountains and back, extending your brand's reach beyond the city.",
      },
    ],
  },
  localNote:
    "EZPZ ships to Calgary in 4–6 business days. Starting at $11.75/bag at 100 bags. For Stampede season programs, order 3–4 weeks ahead.",
  faq: [
    {
      q: "What coffee profile fits Calgary's spa market?",
      a: "For Calgary's active-lifestyle spa clients, a sophisticated medium roast with clean acidity and natural sweetness — a Colombian washed or a Guatemalan SHB — works well. It's approachable for all clients and signals quality.",
    },
    {
      q: "Can I do a seasonal Stampede edition bag?",
      a: "Yes. A limited-edition seasonal design — 100 bags minimum — can be produced with a 3-week lead time from design approval. Order by early June for July Stampede.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag.",
    },
    {
      q: "How fast is delivery to Calgary?",
      a: "4–6 business days. Plan for a 2-week lead time ahead of any scheduled program or event.",
    },
  ],
  siblings: [
    { label: "Spas · Toronto", href: "/en/custom-coffee-spas-toronto" },
    { label: "Spas · Vancouver", href: "/en/custom-coffee-spas-vancouver" },
    { label: "Gyms · Calgary", href: "/en/custom-coffee-gyms-calgary" },
    { label: "Hotels · Calgary", href: "/en/custom-coffee-hotels-calgary" },
  ],
  ctaClose:
    "Calgary's spa clients come for the experience. Give them a ritual they can take home.",
  cityPageHref: "/en/custom-coffee-bags-calgary",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-spas-calgary",
  city: { name: "Calgary", province: "Alberta", deliveryTime: "4 à 6 jours ouvrables" },
  industry: {
    name: "Spas et bien-être",
    parentHref: "/fr/custom-coffee-bags-spas",
    parentLabel: "Spas",
  },
  hero: {
    h1: "Café personnalisé pour les spas et instituts de bien-être de Calgary",
    subheadline: "Les spas et instituts de bien-être de Calgary choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les spas et instituts de bien-être de Calgary",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les spas et instituts de bien-être de Calgary, Alberta, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 4 à 6 jours ouvrables.",
  why: {
    heading: "L'expérience de bien-être de Calgary. Prolongée dans chaque tasse.",
    paragraphs: [
      "Calgary est le marché corporatif et énergétique du Canada, avec une clientèle exigeante et un pouvoir d'achat élevé. Les spas et instituts de bien-être de Kensington, Mission et Inglewood ont développé une clientèle sophistiquée qui attend une expérience de qualité dans tous les aspects du service. Le café de spécialité personnalisé est le produit de vente au détail qui complète cette offre de façon naturelle.",
      "Chaque matin où votre cliente prépare le café de votre spa, elle se reconnecte émotionnellement à l'expérience que vous avez créée. Ce rappel quotidien génère des rebookings et des références sans aucune dépense marketing. Et avec une marge excellente, le café de marque est l'un des articles de vente au détail les plus rentables que vous pouvez proposer.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Calgary en 4 à 6 jours ouvrables. Aucun minimum signifie que vous pouvez tester avec une petite sélection sur vos tablettes et ajuster selon la demande de votre clientèle.",
    ],
  },
  useCases: {
    heading: "Comment les spas de Calgary utilisent le café de marque",
    items: [
    { title: "Produit de vente au détail à forte marge", body: "Un sachet à 8 $ se vend 24 à 28 $ dans un environnement spa. Votre clientèle de bien-être fait confiance à vos recommandations et achète sans résistance au prix." },
    { title: "Cadeau inclus dans les forfaits de soins", body: "Incluez un sachet de café de marque dans les forfaits de soin et les coffrets cadeaux. C'est l'élément tangible à emporter qui rend le forfait mémorable et facilite la décision d'achat." },
    { title: "Faveur de traitement et expérience de bienvenue", body: "Pour les premières visites et les traitements spéciaux, offrez un sachet de café de marque comme cadeau de remerciement. Le geste crée une association positive qui génère des avis cinq étoiles." },
    { title: "Programme de référence et fidélité", body: "Utilisez le café de marque comme incitatif de référence : une cliente qui réfère une amie reçoit un sachet de votre café. C'est un mécanisme de récompense premium et mémorable." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Calgary, Alberta en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Calgary ?", a: "Les commandes pour Calgary sont expédiées depuis notre torréfacteur montréalais et arrivent en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "À quel prix les spas de Calgary vendent-ils les sacs de café de marque ?", a: "Dans un environnement spa, les sacs de café de spécialité se vendent typiquement entre 24 et 32 dollars. Un sachet de 225g à 340g (8-12oz) représente une valeur perçue élevée et une marge confortable. EZPZ recommande de tester avec quelques gammes de prix pour trouver le point optimal pour votre clientèle." },
    { q: "Le café de marque peut-il être inclus dans les forfaits cadeaux de spa de Calgary ?", a: "Oui. C'est l'une des utilisations les plus populaires. Un sachet de café de marque dans un coffret cadeau de spa crée un élément tangible et consommable qui élève la valeur perçue du forfait sans augmenter significativement le coût." },
  ],
  siblings: [
    { label: "Spas · Montréal", href: "/fr/custom-coffee-spas-montreal" },
    { label: "Spas · Toronto", href: "/fr/custom-coffee-spas-toronto" },
    { label: "Cafés · Calgary", href: "/fr/custom-coffee-cafes-calgary" },
    { label: "Hôtels · Calgary", href: "/fr/custom-coffee-hotels-calgary" },
    { label: "Gyms · Calgary", href: "/fr/custom-coffee-gyms-calgary" },
  ],
  ctaClose: "L'expérience de votre spa de Calgary continue chaque matin dans la tasse de votre cliente.",
  cityPageHref: "/fr/custom-coffee-bags-calgary",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
