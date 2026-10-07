import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les spas de Vancouver | EZPZ Coffee" : "Custom Coffee Bags for Vancouver Spas | EZPZ Coffee";
  const description = isFr ? "Les spas et instituts de bien-être de Vancouver prolongent l'expérience de luxe avec le café de marque. Aucun minimum, design inclus." : "Vancouver's eco-wellness culture and nature-adjacent spa market demand authenticity. Custom branded specialty coffee — sustainable, traceable, zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-spas-vancouver`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-spas-vancouver",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-spas-vancouver",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-spas-vancouver`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les spas de Vancouver" : "Custom Coffee Bags for Vancouver Spas" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-spas-vancouver",
  city: { name: "Vancouver", province: "BC", deliveryTime: "4–6 business days" },
  industry: { name: "Spas & Wellness", parentHref: "/en/custom-coffee-bags-spas", parentLabel: "Spas & Wellness" },
  hero: {
    h1: "Custom Coffee for Vancouver Spas & Wellness Studios",
    subheadline:
      "The Pacific. The mountains. The wellness culture that shaped North America's understanding of self-care. Your spa's coffee should belong in that world.",
    ctaSubject: "Custom coffee for Vancouver spa",
  },
  aeoAnswer:
    "Vancouver spas can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Sustainable packaging available. Delivered in 4–6 business days.",
  why: {
    heading: "Vancouver's Wellness Market and the Sustainable Coffee Take-Home",
    paragraphs: [
      "Vancouver's wellness culture is shaped by the Pacific Northwest's relationship with nature — the mountains, the ocean, the forests. Spas in Vancouver — from the Willow Stream at the Fairmont Pacific Rim to the boutique wellness studios in Kitsilano and Yaletown — position their treatments in the context of natural restoration, environmental intentionality, and holistic living. Every product in the retail display is held to the same standard.",
      "A custom branded specialty coffee bag that can claim traceable sourcing, sustainable packaging, and Canadian-roasted provenance is a product that passes Vancouver's wellness retail filter. A commodity coffee bag, no matter how attractively labeled, will be out of place on the shelf next to the organic oils and the locally harvested botanicals.",
      "Vancouver's spa clients are also among Canada's highest-spending wellness consumers — the same demographic that buys $200 yoga pants and invests in annual health retreats. At $20–$22, a specialty coffee bag is a low-friction retail purchase that delivers strong margin and sustains the brand relationship between visits.",
    ],
  },
  useCases: {
    heading: "How Vancouver Spas Use Custom Coffee",
    items: [
      {
        title: "Eco-aligned retail take-home",
        body: "A specialty coffee bag with traceable sourcing, one-way valve freshness packaging (no individual pods), and a Canadian roasting provenance is a natural fit on the retail shelf of any Vancouver spa with an eco-certification or sustainability commitment.",
      },
      {
        title: "Nature retreat and wellness getaway packages",
        body: "Vancouver spas offering overnight wellness retreats, North Shore forest bathing programs, or Squamish mountain retreat packages include branded coffee in the guest welcome kit as a 'morning ritual' element. The bag travels home as a lasting reminder of the experience.",
      },
      {
        title: "Couples and luxury day spa packages",
        body: "A branded coffee bag included in a couples spa day package — alongside the robes, the slippers, and the lounge access — is a premium take-home that extends the gift experience. At a $300+ package price point, a $12 branded coffee bag has an outsized perceived value effect.",
      },
      {
        title: "Corporate wellness gifting",
        body: "Vancouver's tech companies and professional services firms with active wellness programs include spa day gifts for teams and executives. A co-branded coffee bag alongside the spa voucher — your spa's design plus the client company's brand — is an add-on that elevates the corporate gift and adds revenue.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Vancouver in 4–6 business days. Sustainable packaging options available. Starting at $11.75/bag at 100 bags.",
  faq: [
    {
      q: "Can you provide traceable, sustainably sourced coffee for our eco-aligned spa?",
      a: "Yes. EZPZ sources specialty-grade coffees with full traceability — farm, cooperative, processing method, certifications. We can provide documentation suitable for your brand's transparency commitments.",
    },
    {
      q: "What coffee profile fits a Vancouver wellness brand?",
      a: "For Vancouver's sensory-aware wellness clients, a clean, aromatic single-origin — an Ethiopian natural with floral and fruit notes, or a washed Colombian with caramel and citrus — creates the kind of sensory engagement that resonates with an audience already attuned to their environment.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag to start.",
    },
    {
      q: "Can I serve the coffee in the lounge and sell it in the boutique?",
      a: "Yes. EZPZ can supply both bulk coffee for service and retail-packaged bags for the boutique. Contact us to discuss a combined program.",
    },
  ],
  siblings: [
    { label: "Spas · Toronto", href: "/en/custom-coffee-spas-toronto" },
    { label: "Spas · Montreal", href: "/en/custom-coffee-spas-montreal" },
    { label: "Gyms · Vancouver", href: "/en/custom-coffee-gyms-vancouver" },
    { label: "Hotels · Vancouver", href: "/en/custom-coffee-hotels-vancouver" },
  ],
  ctaClose:
    "Vancouver's wellness clients have the highest standards in Canada. Your coffee take-home should meet them.",
  cityPageHref: "/en/custom-coffee-bags-vancouver",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-spas-vancouver",
  city: { name: "Vancouver", province: "Colombie-Britannique", deliveryTime: "4 à 6 jours ouvrables" },
  industry: {
    name: "Spas et bien-être",
    parentHref: "/fr/custom-coffee-bags-spas",
    parentLabel: "Spas",
  },
  hero: {
    h1: "Café personnalisé pour les spas et instituts de bien-être de Vancouver",
    subheadline: "Les spas et instituts de bien-être de Vancouver choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les spas et instituts de bien-être de Vancouver",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les spas et instituts de bien-être de Vancouver, Colombie-Britannique, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 4 à 6 jours ouvrables.",
  why: {
    heading: "L'expérience de bien-être de Vancouver. Prolongée dans chaque tasse.",
    paragraphs: [
      "Vancouver est la ville canadienne la plus axée sur la durabilité, avec une culture café de classe mondiale. Les spas et instituts de bien-être de Kitsilano, Yaletown et Gastown ont développé une clientèle sophistiquée qui attend une expérience de qualité dans tous les aspects du service. Le café de spécialité personnalisé est le produit de vente au détail qui complète cette offre de façon naturelle.",
      "Chaque matin où votre cliente prépare le café de votre spa, elle se reconnecte émotionnellement à l'expérience que vous avez créée. Ce rappel quotidien génère des rebookings et des références sans aucune dépense marketing. Et avec une marge excellente, le café de marque est l'un des articles de vente au détail les plus rentables que vous pouvez proposer.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Vancouver en 4 à 6 jours ouvrables. Aucun minimum signifie que vous pouvez tester avec une petite sélection sur vos tablettes et ajuster selon la demande de votre clientèle.",
    ],
  },
  useCases: {
    heading: "Comment les spas de Vancouver utilisent le café de marque",
    items: [
    { title: "Produit de vente au détail à forte marge", body: "Un sachet à 8 $ se vend 24 à 28 $ dans un environnement spa. Votre clientèle de bien-être fait confiance à vos recommandations et achète sans résistance au prix." },
    { title: "Cadeau inclus dans les forfaits de soins", body: "Incluez un sachet de café de marque dans les forfaits de soin et les coffrets cadeaux. C'est l'élément tangible à emporter qui rend le forfait mémorable et facilite la décision d'achat." },
    { title: "Faveur de traitement et expérience de bienvenue", body: "Pour les premières visites et les traitements spéciaux, offrez un sachet de café de marque comme cadeau de remerciement. Le geste crée une association positive qui génère des avis cinq étoiles." },
    { title: "Programme de référence et fidélité", body: "Utilisez le café de marque comme incitatif de référence : une cliente qui réfère une amie reçoit un sachet de votre café. C'est un mécanisme de récompense premium et mémorable." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Vancouver, Colombie-Britannique en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Vancouver ?", a: "Les commandes pour Vancouver sont expédiées depuis notre torréfacteur montréalais et arrivent en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "À quel prix les spas de Vancouver vendent-ils les sacs de café de marque ?", a: "Dans un environnement spa, les sacs de café de spécialité se vendent typiquement entre 24 et 32 dollars. Un sachet de 225g à 340g (8-12oz) représente une valeur perçue élevée et une marge confortable. EZPZ recommande de tester avec quelques gammes de prix pour trouver le point optimal pour votre clientèle." },
    { q: "Le café de marque peut-il être inclus dans les forfaits cadeaux de spa de Vancouver ?", a: "Oui. C'est l'une des utilisations les plus populaires. Un sachet de café de marque dans un coffret cadeau de spa crée un élément tangible et consommable qui élève la valeur perçue du forfait sans augmenter significativement le coût." },
  ],
  siblings: [
    { label: "Spas · Montréal", href: "/fr/custom-coffee-spas-montreal" },
    { label: "Spas · Toronto", href: "/fr/custom-coffee-spas-toronto" },
    { label: "Cafés · Vancouver", href: "/fr/custom-coffee-cafes-vancouver" },
    { label: "Hôtels · Vancouver", href: "/fr/custom-coffee-hotels-vancouver" },
    { label: "Gyms · Vancouver", href: "/fr/custom-coffee-gyms-vancouver" },
  ],
  ctaClose: "L'expérience de votre spa de Vancouver continue chaque matin dans la tasse de votre cliente.",
  cityPageHref: "/fr/custom-coffee-bags-vancouver",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
