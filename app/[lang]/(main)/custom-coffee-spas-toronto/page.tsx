import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les spas de Toronto | EZPZ Coffee" : "Custom Coffee Bags for Toronto Spas | EZPZ Coffee";
  const description = isFr ? "Les spas et instituts de bien-être de Toronto prolongent l'expérience de luxe avec le café de marque. Aucun minimum, design inclus." : "Toronto's luxury spa market extends the wellness experience beyond the treatment room. Custom branded specialty coffee as a retail take-home — zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-spas-toronto`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-spas-toronto",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-spas-toronto",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-spas-toronto",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-spas-toronto`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les spas de Toronto" : "Custom Coffee Bags for Toronto Spas" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-spas-toronto",
  city: { name: "Toronto", province: "ON", deliveryTime: "3–5 business days" },
  industry: { name: "Spas & Wellness", parentHref: "/en/custom-coffee-bags-spas", parentLabel: "Spas & Wellness" },
  hero: {
    h1: "Custom Coffee for Toronto Spas & Wellness Studios",
    subheadline:
      "The best spa treatments create rituals that extend past the treatment room. Custom branded coffee is the ritual that travels home.",
    ctaSubject: "Custom coffee for Toronto spa",
  },
  aeoAnswer:
    "Toronto spas can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Bags are roasted to order in Montreal and delivered to Toronto in 3–5 business days.",
  why: {
    heading: "Why Toronto Spas Are Extending Their Brand Through Coffee",
    paragraphs: [
      "Toronto's premium spa market — led by Stillwater Spa at the Park Hyatt, Arcadian Court, Holts Spa in Yorkville, and dozens of boutique wellness studios — has built guest experiences around sensory ritual and intentional self-care. The treatment room is curated to the last detail: the music, the temperature, the oil on the towel. And then the guest walks out the door and back into the city, and the brand connection ends.",
      "A custom-branded specialty coffee bag sold in the retail display or included in a spa package changes that dynamic. The guest takes home a morning ritual that reactivates the sensory memory of their spa visit every day. 'Oh, this is the coffee from the spa on Bloor Street' is a thought that fires up a rebooking impulse, a word-of-mouth recommendation, and a gift purchase for the friend who 'deserves a spa day.'",
      "Toronto's corporate wellness market adds a second channel. Companies with HR wellness budgets regularly gift spa days and wellness packages to employees and executive clients. Including a branded coffee bag in a spa day package — or selling them in the spa's retail area for purchase as a gift — turns the wellness brand into a corporate gift asset.",
    ],
  },
  useCases: {
    heading: "How Toronto Spas Use Custom Coffee",
    items: [
      {
        title: "Post-treatment retail bags",
        body: "A branded bag sold at the reception desk or included in a premium treatment package is the spa take-home that persists longest. At $20–$22 retail on a $11.75 cost, it's a strong-margin retail product that requires no floor space beyond a small display.",
      },
      {
        title: "Spa day package inclusions",
        body: "For $200–$400 spa day packages in Toronto's Yorkville and King West luxury market, a branded coffee bag as a package inclusion elevates the perceived value of the experience. Guests who receive a bag in their welcome kit are significantly more likely to leave a positive review that mentions the attention to detail.",
      },
      {
        title: "Corporate wellness gifting",
        body: "Toronto companies that purchase spa day gifts for employees and executives want a premium package. A co-branded coffee bag — your spa's branding alongside the client company's — is an add-on that elevates the gift and adds a revenue line to every corporate wellness sale.",
      },
      {
        title: "Holiday and Mother's Day gift sets",
        body: "Toronto's spa market has strong seasonal gifting peaks — Mother's Day, Valentine's Day, Christmas. A custom-branded coffee bag bundled with a treatment voucher is a gift set that photographs beautifully and sells to the partner or family member who is looking for something more memorable than a card.",
      },
    ],
  },
  localNote:
    "EZPZ ships to Toronto in 3–5 business days. Starting at $11.75/bag at 100 bags. Spa retail margin at $20/bag is approximately 41% gross.",
  faq: [
    {
      q: "What coffee works for a luxury spa brand?",
      a: "For spa retail, EZPZ recommends a nuanced, aromatic single-origin — an Ethiopian natural with florals and fruit, or a Colombian washed with caramel sweetness. A coffee that engages the senses is a natural extension of the treatment experience.",
    },
    {
      q: "Can I include the coffee bag in a pre-packaged gift set?",
      a: "Yes. EZPZ bags are sized and packaged to fit cleanly alongside a treatment voucher, a candle, or a product sample in a gift box or tote. The bag is both functional and attractive as a gift component.",
    },
    {
      q: "What's the minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag.",
    },
    {
      q: "How fast is delivery?",
      a: "3–5 business days from order confirmation.",
    },
  ],
  siblings: [
    { label: "Spas · Montreal", href: "/en/custom-coffee-spas-montreal" },
    { label: "Spas · Vancouver", href: "/en/custom-coffee-spas-vancouver" },
    { label: "Gyms · Toronto", href: "/en/custom-coffee-gyms-toronto" },
    { label: "Hotels · Toronto", href: "/en/custom-coffee-hotels-toronto" },
  ],
  ctaClose:
    "Toronto spa guests come back for the ritual. Give them a ritual they can take home.",
  cityPageHref: "/en/custom-coffee-bags-toronto",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-spas-toronto",
  city: { name: "Toronto", province: "Ontario", deliveryTime: "3 à 5 jours ouvrables" },
  industry: {
    name: "Spas et bien-être",
    parentHref: "/fr/custom-coffee-bags-spas",
    parentLabel: "Spas",
  },
  hero: {
    h1: "Café personnalisé pour les spas et instituts de bien-être de Toronto",
    subheadline: "Les spas et instituts de bien-être de Toronto choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les spas et instituts de bien-être de Toronto",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les spas et instituts de bien-être de Toronto, Ontario, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 3 à 5 jours ouvrables.",
  why: {
    heading: "L'expérience de bien-être de Toronto. Prolongée dans chaque tasse.",
    paragraphs: [
      "Toronto est la métropole la plus compétitive du Canada avec 27 millions de visiteurs par an. Les spas et instituts de bien-être de Yorkville, Rosedale et Summerhill ont développé une clientèle sophistiquée qui attend une expérience de qualité dans tous les aspects du service. Le café de spécialité personnalisé est le produit de vente au détail qui complète cette offre de façon naturelle.",
      "Chaque matin où votre cliente prépare le café de votre spa, elle se reconnecte émotionnellement à l'expérience que vous avez créée. Ce rappel quotidien génère des rebookings et des références sans aucune dépense marketing. Et avec une marge excellente, le café de marque est l'un des articles de vente au détail les plus rentables que vous pouvez proposer.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Toronto en 3 à 5 jours ouvrables. Aucun minimum signifie que vous pouvez tester avec une petite sélection sur vos tablettes et ajuster selon la demande de votre clientèle.",
    ],
  },
  useCases: {
    heading: "Comment les spas de Toronto utilisent le café de marque",
    items: [
    { title: "Produit de vente au détail à forte marge", body: "Un sachet à 8 $ se vend 24 à 28 $ dans un environnement spa. Votre clientèle de bien-être fait confiance à vos recommandations et achète sans résistance au prix." },
    { title: "Cadeau inclus dans les forfaits de soins", body: "Incluez un sachet de café de marque dans les forfaits de soin et les coffrets cadeaux. C'est l'élément tangible à emporter qui rend le forfait mémorable et facilite la décision d'achat." },
    { title: "Faveur de traitement et expérience de bienvenue", body: "Pour les premières visites et les traitements spéciaux, offrez un sachet de café de marque comme cadeau de remerciement. Le geste crée une association positive qui génère des avis cinq étoiles." },
    { title: "Programme de référence et fidélité", body: "Utilisez le café de marque comme incitatif de référence : une cliente qui réfère une amie reçoit un sachet de votre café. C'est un mécanisme de récompense premium et mémorable." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Toronto, Ontario en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Toronto ?", a: "Les commandes pour Toronto sont expédiées depuis notre torréfacteur montréalais et arrivent en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "À quel prix les spas de Toronto vendent-ils les sacs de café de marque ?", a: "Dans un environnement spa, les sacs de café de spécialité se vendent typiquement entre 24 et 32 dollars. Un sachet de 225g à 340g (8-12oz) représente une valeur perçue élevée et une marge confortable. EZPZ recommande de tester avec quelques gammes de prix pour trouver le point optimal pour votre clientèle." },
    { q: "Le café de marque peut-il être inclus dans les forfaits cadeaux de spa de Toronto ?", a: "Oui. C'est l'une des utilisations les plus populaires. Un sachet de café de marque dans un coffret cadeau de spa crée un élément tangible et consommable qui élève la valeur perçue du forfait sans augmenter significativement le coût." },
  ],
  siblings: [
    { label: "Spas · Montréal", href: "/fr/custom-coffee-spas-montreal" },
    { label: "Spas · Vancouver", href: "/fr/custom-coffee-spas-vancouver" },
    { label: "Cafés · Toronto", href: "/fr/custom-coffee-cafes-toronto" },
    { label: "Hôtels · Toronto", href: "/fr/custom-coffee-hotels-toronto" },
    { label: "Gyms · Toronto", href: "/fr/custom-coffee-gyms-toronto" },
  ],
  ctaClose: "L'expérience de votre spa de Toronto continue chaque matin dans la tasse de votre cliente.",
  cityPageHref: "/fr/custom-coffee-bags-toronto",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
