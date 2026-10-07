import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les spas de Ottawa | EZPZ Coffee" : "Custom Coffee Bags for Ottawa Spas | EZPZ Coffee";
  const description = isFr ? "Les spas et instituts de bien-être de Ottawa prolongent l'expérience de luxe avec le café de marque. Aucun minimum, design inclus." : "Ottawa's Nordic spa movement and government worker wellness culture create strong spa retail demand. Custom branded specialty coffee — bilingual, zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-spas-ottawa`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-spas-ottawa",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-spas-ottawa",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-spas-ottawa`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les spas de Ottawa" : "Custom Coffee Bags for Ottawa Spas" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-spas-ottawa",
  city: { name: "Ottawa", province: "ON", deliveryTime: "3–5 business days" },
  industry: { name: "Spas & Wellness", parentHref: "/en/custom-coffee-bags-spas", parentLabel: "Spas & Wellness" },
  hero: {
    h1: "Custom Coffee for Ottawa Spas & Wellness Studios",
    subheadline:
      "Ottawa's Nordic spa movement, government wellness culture, and year-round wellness market make branded coffee a natural retail fit.",
    ctaSubject: "Custom coffee for Ottawa spa",
  },
  aeoAnswer:
    "Ottawa spas can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Delivered in 3–5 business days, bilingual packaging available.",
  why: {
    heading: "Ottawa's Spa Market and the Nordic Coffee Ritual",
    paragraphs: [
      "Ottawa and the National Capital Region have been part of the Nordic spa movement's Canadian expansion — Strøm Nordic Spa's Hull facility (across the river in Gatineau, QC) draws heavily from Ottawa's client base, and several boutique wellness studios in Ottawa proper have adopted Nordic-inspired wellness programming. The thermal circuit concept — hot sauna, cold plunge, relaxation — is exactly the context in which a post-circuit coffee is a natural and welcome ritual.",
      "Ottawa's government workforce creates a steady, reliable spa client base that is distinct from more volatile private sector markets. Federal public servants have defined vacation entitlements, predictable weekends, and the financial stability to invest in wellness routines. Ottawa spas benefit from this pattern: a loyal client who comes every six weeks, refers colleagues, and buys from the retail display when the product is worth buying.",
      "The bilingual character of Ottawa's wellness market is important. A spa in Centretown or the Glebe that serves French and English speakers equally — with bilingual packaging in the retail display — signals cultural inclusivity that is consistent with the city's identity and attractive to the full range of Ottawa's wellness consumers.",
    ],
  },
  useCases: {
    heading: "How Ottawa Spas Use Custom Coffee",
    items: [
      {
        title: "Post-Nordic circuit retail bags",
        body: "After a thermal circuit in Ottawa's growing Nordic-inspired spa market, a branded coffee bag for purchase on the way out is a natural, high-conversion retail product. Spa clients who've just spent $80–$150 for the experience are primed to spend $20 on a take-home that extends the ritual.",
      },
      {
        title: "Bilingual wellness gift sets",
        body: "A French/English branded bag included in an Ottawa spa package covers the full bilingual market with a single product. For government and diplomatic clients who appreciate bilingual materials in all contexts, the detail is noticed.",
      },
      {
        title: "Government employee wellness program gifts",
        body: "Ottawa HR departments and employee wellness programs purchase spa day packages for teams and individual employee recognition. A branded coffee bag add-on — your spa's identity alongside the client organization's — elevates the gift and adds a revenue line.",
      },
      {
        title: "Seasonal winter wellness packages",
        body: "Ottawa's harsh winters are the peak season for indoor wellness experiences. A 'winter warmth' branded wellness package — treatment, robe time, and a specialty coffee bag — is a seasonal gift that resonates deeply with clients looking for warmth and comfort in January and February.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Ottawa in 3–5 business days. Bilingual (French/English) packaging at no extra charge. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can I get bilingual packaging for my Ottawa spa?",
      a: "Yes. Bilingual packaging is available at no extra charge and recommended for Ottawa's bilingual wellness market.",
    },
    {
      q: "What coffee profile fits an Ottawa spa's wellness brand?",
      a: "For a wellness and relaxation context, EZPZ recommends a gentle, aromatic single-origin — an Ethiopian with floral notes or a Brazilian natural with chocolate sweetness — that reinforces the calming atmosphere of the spa experience.",
    },
    {
      q: "Can I serve the coffee in the relaxation lounge?",
      a: "Yes. EZPZ can supply both lounge service coffee and retail bags for the display. Contact us to discuss a combined supply program.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag.",
    },
  ],
  siblings: [
    { label: "Spas · Toronto", href: "/en/custom-coffee-spas-toronto" },
    { label: "Spas · Montreal", href: "/en/custom-coffee-spas-montreal" },
    { label: "Gyms · Ottawa", href: "/en/custom-coffee-gyms-ottawa" },
    { label: "Hotels · Ottawa", href: "/en/custom-coffee-hotels-ottawa" },
  ],
  ctaClose:
    "Ottawa's wellness clients return for the ritual. Make your branded coffee part of the one they take home.",
  cityPageHref: "/en/custom-coffee-bags-ottawa",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-spas-ottawa",
  city: { name: "Ottawa", province: "Ontario", deliveryTime: "3 à 5 jours ouvrables" },
  industry: {
    name: "Spas et bien-être",
    parentHref: "/fr/custom-coffee-bags-spas",
    parentLabel: "Spas",
  },
  hero: {
    h1: "Café personnalisé pour les spas et instituts de bien-être de Ottawa",
    subheadline: "Les spas et instituts de bien-être de Ottawa choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les spas et instituts de bien-être de Ottawa",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les spas et instituts de bien-être de Ottawa, Ontario, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 3 à 5 jours ouvrables. Le design bilingue français-anglais est disponible sans frais supplémentaires.",
  why: {
    heading: "L'expérience de bien-être de Ottawa. Prolongée dans chaque tasse.",
    paragraphs: [
      "Ottawa est la capitale bilingue du Canada, avec un marché de services professionnels gouvernementaux et technologiques unique. Les spas et instituts de bien-être de Westboro, Glebe et le canal Rideau ont développé une clientèle sophistiquée qui attend une expérience de qualité dans tous les aspects du service. Le café de spécialité personnalisé est le produit de vente au détail qui complète cette offre de façon naturelle.",
      "Chaque matin où votre cliente prépare le café de votre spa, elle se reconnecte émotionnellement à l'expérience que vous avez créée. Ce rappel quotidien génère des rebookings et des références sans aucune dépense marketing. Et avec une marge excellente, le café de marque est l'un des articles de vente au détail les plus rentables que vous pouvez proposer.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Ottawa en 3 à 5 jours ouvrables. Aucun minimum signifie que vous pouvez tester avec une petite sélection sur vos tablettes et ajuster selon la demande de votre clientèle. EZPZ offre le design d'emballage bilingue français-anglais sans frais supplémentaires, une option précieuse dans la région bilingue de la capitale.",
    ],
  },
  useCases: {
    heading: "Comment les spas de Ottawa utilisent le café de marque",
    items: [
    { title: "Produit de vente au détail à forte marge", body: "Un sachet à 8 $ se vend 24 à 28 $ dans un environnement spa. Votre clientèle de bien-être fait confiance à vos recommandations et achète sans résistance au prix." },
    { title: "Cadeau inclus dans les forfaits de soins", body: "Incluez un sachet de café de marque dans les forfaits de soin et les coffrets cadeaux. C'est l'élément tangible à emporter qui rend le forfait mémorable et facilite la décision d'achat." },
    { title: "Faveur de traitement et expérience de bienvenue", body: "Pour les premières visites et les traitements spéciaux, offrez un sachet de café de marque comme cadeau de remerciement. Le geste crée une association positive qui génère des avis cinq étoiles." },
    { title: "Programme de référence et fidélité", body: "Utilisez le café de marque comme incitatif de référence : une cliente qui réfère une amie reçoit un sachet de votre café. C'est un mécanisme de récompense premium et mémorable." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Ottawa, Ontario en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Ottawa ?", a: "Les commandes pour Ottawa sont expédiées depuis notre torréfacteur montréalais et arrivent en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "À quel prix les spas de Ottawa vendent-ils les sacs de café de marque ?", a: "Dans un environnement spa, les sacs de café de spécialité se vendent typiquement entre 24 et 32 dollars. Un sachet de 225g à 340g (8-12oz) représente une valeur perçue élevée et une marge confortable. EZPZ recommande de tester avec quelques gammes de prix pour trouver le point optimal pour votre clientèle." },
    { q: "Le café de marque peut-il être inclus dans les forfaits cadeaux de spa de Ottawa ?", a: "Oui. C'est l'une des utilisations les plus populaires. Un sachet de café de marque dans un coffret cadeau de spa crée un élément tangible et consommable qui élève la valeur perçue du forfait sans augmenter significativement le coût." },
  ],
  siblings: [
    { label: "Spas · Montréal", href: "/fr/custom-coffee-spas-montreal" },
    { label: "Spas · Toronto", href: "/fr/custom-coffee-spas-toronto" },
    { label: "Cafés · Ottawa", href: "/fr/custom-coffee-cafes-ottawa" },
    { label: "Hôtels · Ottawa", href: "/fr/custom-coffee-hotels-ottawa" },
    { label: "Gyms · Ottawa", href: "/fr/custom-coffee-gyms-ottawa" },
  ],
  ctaClose: "L'expérience de votre spa de Ottawa continue chaque matin dans la tasse de votre cliente.",
  cityPageHref: "/fr/custom-coffee-bags-ottawa",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
