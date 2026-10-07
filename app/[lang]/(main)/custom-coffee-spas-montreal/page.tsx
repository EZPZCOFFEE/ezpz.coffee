import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les spas de Montréal | EZPZ Coffee" : "Custom Coffee Bags for Montreal Spas | EZPZ Coffee";
  const description = isFr ? "Les spas et instituts de bien-être de Montréal prolongent l'expérience de luxe avec le café de marque. Aucun minimum, design inclus." : "Montreal's Nordic spa culture is North America's richest. Custom branded specialty coffee as a post-treatment take-home — bilingual, locally roasted, zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-spas-montreal`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-spas-montreal",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-spas-montreal",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-spas-montreal`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les spas de Montréal" : "Custom Coffee Bags for Montreal Spas" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-spas-montreal",
  city: { name: "Montreal", province: "QC", deliveryTime: "2–3 business days" },
  industry: { name: "Spas & Wellness", parentHref: "/en/custom-coffee-bags-spas", parentLabel: "Spas & Wellness" },
  hero: {
    h1: "Custom Coffee for Montreal Spas & Wellness Studios",
    subheadline:
      "Nordic spas. Balnea. Strøm. Montreal has North America's most distinctive wellness culture — and coffee is part of the ritual.",
    ctaSubject: "Custom coffee for Montreal spa",
  },
  aeoAnswer:
    "Montreal spas can order custom branded specialty coffee bags from EZPZ — roasted locally in Montreal — with no minimum, starting at 100 bags at $11.75/bag. Bilingual design available. Delivered in 2–3 business days.",
  why: {
    heading: "Montreal's Spa Culture and Why Coffee Belongs in the Brand",
    paragraphs: [
      "Montreal's wellness culture is unlike anything else in Canada. The Nordic spa tradition — Balnea Spa in the Eastern Townships, Strøm Spa in Old Montreal and Nun's Island, the thermal baths concept that is deeply embedded in Quebec's seasonal wellness identity — positions Montreal as a wellness destination that draws clients from across eastern North America. These guests are spending $100–$300 for a half-day or full-day experience and expect every element of the visit to reinforce the brand's philosophy.",
      "Coffee is embedded in the Nordic spa experience. Before entering the thermal pools, after a treatment, over a conversation in the relaxation lounge — coffee is part of the ritual at every well-run spa in Montreal. A branded bag that guests can take home extends that ritual into their daily life and creates a morning sensory cue that reactivates the memory of their visit.",
      "Montreal's café culture means spa clients in this city are sophisticated coffee consumers. A generic branded bag with commodity coffee will register as an afterthought. A specialty-grade, locally roasted bag with a beautiful design and tasting notes that speak to the quality and provenance of the beans — that's a product that will be finished and reordered, not forgotten in a gift drawer.",
    ],
  },
  useCases: {
    heading: "How Montreal Spas Use Custom Coffee",
    items: [
      {
        title: "Post-Nordic circuit retail bags",
        body: "Selling a branded bag after the thermal circuit — in the boutique near the exit — is the natural close on a full-day spa experience. Montreal spa clients who've spent $150+ for a day pass are entirely willing to spend $20–$22 on a coffee that carries the brand home.",
      },
      {
        title: "Bilingual spa package inclusions",
        body: "A French/English branded bag in a couples package, a birthday package, or a corporate wellness gift set elevates the perceived value and ensures the gift works for both language communities in Montreal's bilingual wellness market.",
      },
      {
        title: "Relaxation lounge service",
        body: "Serve your branded specialty coffee in the relaxation lounge — and price it as a lounge add-on. Then display the branded bags for purchase beside the service counter. Guests who tasted the coffee during their treatment are primed to buy a bag on the way out.",
      },
      {
        title: "Holiday wellness gift sets",
        body: "Montreal's holiday gifting peak runs October–December. A spa wellness gift set — treatment voucher plus branded coffee bag, bilingual packaging, premium gift wrapping — is a $150–$250 gift that photographs well and sells to the Montrealers who shop local and want to give an experience.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — 2–3 business day delivery, locally sourced coffee for a locally owned wellness brand. Bilingual (French/English) packaging at no extra charge. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "What coffee works best for a Nordic spa setting?",
      a: "For Nordic spa retail, EZPZ recommends an aromatic, floral single-origin — an Ethiopian natural or a Kenyan washed — that engages the senses the same way the thermal experience does. We can develop a 'relaxation blend' profile with copy that resonates with your spa's brand language.",
    },
    {
      q: "Can I get bilingual packaging for my Montreal spa?",
      a: "Yes. Bilingual (French/English) packaging is available at no extra charge and is the default recommendation for Montreal spas.",
    },
    {
      q: "Can I serve the coffee in the lounge and sell it in the boutique?",
      a: "Yes. EZPZ can supply both bulk coffee for your lounge service equipment and retail-packaged bags for the boutique. Contact us to discuss a combined supply program.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag to start.",
    },
  ],
  siblings: [
    { label: "Spas · Toronto", href: "/en/custom-coffee-spas-toronto" },
    { label: "Spas · Quebec City", href: "/en/custom-coffee-spas-quebec-city" },
    { label: "Gyms · Montreal", href: "/en/custom-coffee-gyms-montreal" },
    { label: "Hotels · Montreal", href: "/en/custom-coffee-hotels-montreal" },
  ],
  ctaClose:
    "Montreal's spa culture is the best in North America. Your branded coffee should be part of the reason guests come back.",
  cityPageHref: "/en/custom-coffee-bags-montreal",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-spas-montreal",
  city: { name: "Montréal", province: "Québec", deliveryTime: "2 à 3 jours ouvrables" },
  industry: {
    name: "Spas et bien-être",
    parentHref: "/fr/custom-coffee-bags-spas",
    parentLabel: "Spas",
  },
  hero: {
    h1: "Café personnalisé pour les spas et instituts de bien-être de Montréal",
    subheadline: "Les spas et instituts de bien-être de Montréal choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les spas et instituts de bien-être de Montréal",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les spas et instituts de bien-être de Montréal, Québec, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 2 à 3 jours ouvrables. Le design bilingue français-anglais est disponible sans frais supplémentaires.",
  why: {
    heading: "L'expérience de bien-être de Montréal. Prolongée dans chaque tasse.",
    paragraphs: [
      "Montréal est la ville où la culture café est née au Canada, avec son riche tissu de quartiers francophones. Les spas et instituts de bien-être de Plateau-Mont-Royal, Westmount et Outremont ont développé une clientèle sophistiquée qui attend une expérience de qualité dans tous les aspects du service. Le café de spécialité personnalisé est le produit de vente au détail qui complète cette offre de façon naturelle.",
      "Chaque matin où votre cliente prépare le café de votre spa, elle se reconnecte émotionnellement à l'expérience que vous avez créée. Ce rappel quotidien génère des rebookings et des références sans aucune dépense marketing. Et avec une marge excellente, le café de marque est l'un des articles de vente au détail les plus rentables que vous pouvez proposer.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Montréal en 2 à 3 jours ouvrables. Aucun minimum signifie que vous pouvez tester avec une petite sélection sur vos tablettes et ajuster selon la demande de votre clientèle.",
    ],
  },
  useCases: {
    heading: "Comment les spas de Montréal utilisent le café de marque",
    items: [
    { title: "Produit de vente au détail à forte marge", body: "Un sachet à 8 $ se vend 24 à 28 $ dans un environnement spa. Votre clientèle de bien-être fait confiance à vos recommandations et achète sans résistance au prix." },
    { title: "Cadeau inclus dans les forfaits de soins", body: "Incluez un sachet de café de marque dans les forfaits de soin et les coffrets cadeaux. C'est l'élément tangible à emporter qui rend le forfait mémorable et facilite la décision d'achat." },
    { title: "Faveur de traitement et expérience de bienvenue", body: "Pour les premières visites et les traitements spéciaux, offrez un sachet de café de marque comme cadeau de remerciement. Le geste crée une association positive qui génère des avis cinq étoiles." },
    { title: "Programme de référence et fidélité", body: "Utilisez le café de marque comme incitatif de référence : une cliente qui réfère une amie reçoit un sachet de votre café. C'est un mécanisme de récompense premium et mémorable." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Montréal, Québec en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Montréal ?", a: "Les commandes pour Montréal sont expédiées depuis notre torréfacteur montréalais et arrivent en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "À quel prix les spas de Montréal vendent-ils les sacs de café de marque ?", a: "Dans un environnement spa, les sacs de café de spécialité se vendent typiquement entre 24 et 32 dollars. Un sachet de 225g à 340g (8-12oz) représente une valeur perçue élevée et une marge confortable. EZPZ recommande de tester avec quelques gammes de prix pour trouver le point optimal pour votre clientèle." },
    { q: "Le café de marque peut-il être inclus dans les forfaits cadeaux de spa de Montréal ?", a: "Oui. C'est l'une des utilisations les plus populaires. Un sachet de café de marque dans un coffret cadeau de spa crée un élément tangible et consommable qui élève la valeur perçue du forfait sans augmenter significativement le coût." },
  ],
  siblings: [
    { label: "Spas · Toronto", href: "/fr/custom-coffee-spas-toronto" },
    { label: "Spas · Vancouver", href: "/fr/custom-coffee-spas-vancouver" },
    { label: "Cafés · Montréal", href: "/fr/custom-coffee-cafes-montreal" },
    { label: "Hôtels · Montréal", href: "/fr/custom-coffee-hotels-montreal" },
    { label: "Gyms · Montréal", href: "/fr/custom-coffee-gyms-montreal" },
  ],
  ctaClose: "L'expérience de votre spa de Montréal continue chaque matin dans la tasse de votre cliente.",
  cityPageHref: "/fr/custom-coffee-bags-montreal",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
