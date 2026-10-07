import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les boutiques de Toronto | EZPZ Coffee" : "Custom Coffee Bags for Toronto Boutiques & Retail | EZPZ Coffee";
  const description = isFr ? "Les boutiques et détaillants de Toronto ajoutent le café de spécialité personnalisé comme produit à forte marge. Aucun minimum, design inclus." : "Toronto's Queen West, Ossington, and Distillery District indie retailers are local-first buyers. Custom branded specialty coffee for your boutique — zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-retail-toronto`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-retail-toronto",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-retail-toronto",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-retail-toronto`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les boutiques de Toronto" : "Custom Coffee Bags for Toronto Boutiques & Retail" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-retail-toronto",
  city: { name: "Toronto", province: "ON", deliveryTime: "3–5 business days" },
  industry: { name: "Boutiques & Retail", parentHref: "/en/custom-coffee-bags-boutiques", parentLabel: "Boutiques & Retail" },
  hero: {
    h1: "Custom Coffee Bags for Toronto Boutiques & Retail Shops",
    subheadline:
      "Queen West, Ossington, the Distillery District — Toronto's indie retail identity is built on local curation. Your branded coffee belongs on that shelf.",
    ctaSubject: "Custom coffee for Toronto boutique",
  },
  aeoAnswer:
    "Toronto boutiques and independent retailers can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Delivered in 3–5 business days. Canadian-roasted, beautiful packaging.",
  why: {
    heading: "Why Toronto's Independent Retail Scene Is Perfect for Branded Coffee",
    paragraphs: [
      "Toronto's independent retail corridors — Queen Street West from Bathurst to Roncesvalles, Ossington Avenue, Dundas West, the Distillery District — are defined by a buyer ethos of radical local curation. The best boutiques on these streets are destination shops. Customers come specifically because they trust the buyer's taste. If your coffee is on the shelf, it was chosen. That buyer authority is exactly the context in which a well-designed branded coffee bag performs at its highest.",
      "Toronto's food and drink culture is one of the most sophisticated in North America. Specialty coffee is not a niche category here — it is a mainstream preference for the demographic that shops at boutiques on Queen West. A mediocre branded coffee will be noticed as mediocre. A specialty-grade, single-origin bag with beautiful design will be recognized as what it is: a retail product that was as carefully chosen as the ceramics and the linen shirts on the tables beside it.",
      "Branded coffee also functions as a low-cost repeat transaction driver. A customer who buys a $20 coffee bag from your shop on a Tuesday afternoon has a reason to return when it's finished — which it will be in two to three weeks. Retail coffee is a traffic anchor that almost no other product category delivers at its price point.",
    ],
  },
  useCases: {
    heading: "How Toronto Boutiques Use Custom Coffee",
    items: [
      {
        title: "In-store retail as a curated lifestyle product",
        body: "A branded specialty coffee bag displayed at the counter or on a dedicated food shelf is a conversion product for the shopper who came in for clothing or homeware and leaves having added a $20 coffee. The margin on branded retail coffee is strong, and it never discounts.",
      },
      {
        title: "Pop-up and market booth take-home",
        body: "Toronto's Distillery District market, the One of a Kind Show, and local street fairs draw the exact buyer profile that shops on Ossington Ave — design-literate, local-first, willing to spend. A coffee bag on the market table tells a story quickly and closes sales with low friction.",
      },
      {
        title: "Gift bundle and seasonal packaging",
        body: "Toronto boutiques that curate 'local gift sets' for the holiday season — a candle, a ceramics piece, a coffee bag, wrapped in tissue — create premium gifting products with a $60–$120 price point from items that cost $30–$50. The branded coffee bag is the affordable anchor of a high-perceived-value gift.",
      },
      {
        title: "Neighbourhood identity retail",
        body: "A coffee bag with the name of your shop above 'Roasted in Canada for [Shop Name], Queen West, Toronto' is a product that locals buy because they want to support and represent their neighbourhood. It's streetwear logic applied to coffee.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Toronto in 3–5 business days. Starting at $11.75/bag at 100 bags. No minimum. Canadian-roasted specialty coffee with custom design.",
  faq: [
    {
      q: "What coffee profile works for boutique retail in Toronto?",
      a: "Toronto's specialty-savvy retail shoppers respond well to a single-origin with a clear story — an Ethiopian natural with berry notes, a Colombian washed with caramel sweetness, or a Guatemalan SHB with chocolatey depth. We recommend including the origin and tasting notes on the bag.",
    },
    {
      q: "Can I sell this alongside other local food products in my shop?",
      a: "Yes. Branded coffee is a natural addition to a local food or lifestyle retail set. It's a repeat purchase product with strong margins and no refrigeration required.",
    },
    {
      q: "Can I get a small batch for a pop-up or market event?",
      a: "Yes. 100 bags at $11.75 each is the starting point — no minimum, no large upfront commitment.",
    },
    {
      q: "How long does delivery take?",
      a: "3–5 business days from Montreal to Toronto. Order before a weekend market or seasonal push with a week to spare.",
    },
  ],
  siblings: [
    { label: "Retail · Montreal", href: "/en/custom-coffee-retail-montreal" },
    { label: "Retail · Vancouver", href: "/en/custom-coffee-retail-vancouver" },
    { label: "Cafés · Toronto", href: "/en/custom-coffee-cafes-toronto" },
    { label: "Corporate · Toronto", href: "/en/custom-coffee-corporate-offices-toronto" },
  ],
  ctaClose:
    "Toronto's indie retail scene is built on taste and curation. Make your branded coffee part of the story.",
  cityPageHref: "/en/custom-coffee-bags-toronto",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-retail-toronto",
  city: { name: "Toronto", province: "Ontario", deliveryTime: "3 à 5 jours ouvrables" },
  industry: {
    name: "Boutiques et détaillants",
    parentHref: "/fr/custom-coffee-bags-boutiques",
    parentLabel: "Boutiques",
  },
  hero: {
    h1: "Café personnalisé pour les boutiques et détaillants de Toronto",
    subheadline: "Les boutiques et détaillants de Toronto choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les boutiques et détaillants de Toronto",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les boutiques et détaillants de Toronto, Ontario, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 3 à 5 jours ouvrables.",
  why: {
    heading: "Le café de marque dans les boutiques de Toronto",
    paragraphs: [
      "Toronto est la métropole la plus compétitive du Canada avec 27 millions de visiteurs par an. Les boutiques de Queen Street West, Kensington Market et Yorkville ont construit des identités de quartier fortes et une clientèle locale fidèle. Les détaillants indépendants de Toronto se distinguent des grandes chaînes par leur curation unique et leur sens du produit local.",
      "Un café de spécialité personnalisé avec la marque de votre boutique est le produit lifestyle qui complète naturellement vos tablettes : il est beau, consommable, à forte marge et parle exactement au client qui apprécie votre sélection. Il génère des achats d'impulsion à la caisse et des raisons de revenir.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Toronto en 3 à 5 jours ouvrables. Aucun minimum signifie que vous pouvez commencer avec 12 ou 24 sacs et voir comment vos clients réagissent avant d'investir dans un inventaire plus important.",
    ],
  },
  useCases: {
    heading: "Comment les boutiques de Toronto utilisent le café de marque",
    items: [
    { title: "Article de comptoir à forte marge", body: "Un sachet de café posé à côté de la caisse est l'achat d'impulsion parfait pour un client qui vient déjà pour autre chose. À 24 à 28 $ au détail, la marge est l'une des meilleures de vos tablettes." },
    { title: "Produit lifestyle qui complète votre sélection", body: "Que vous vendiez des vêtements, des objets de maison ou des accessoires, le café de spécialité personnalisé s'intègre naturellement à l'histoire de votre boutique et communique la même attention à la qualité." },
    { title: "Coffrets cadeaux et paniers de saison", body: "Pour les Fêtes, la fête des Mères et la Saint-Valentin, créez des coffrets cadeaux avec votre café de marque. C'est une raison d'entrer dans votre boutique pour des clients qui achètent pour d'autres." },
    { title: "Collaborations locales et pop-ups", body: "Associez votre café de marque à d'autres boutiques locales et artisans de Toronto pour des coffrets collaboratifs et des marchés éphémères. La marque croisée renforce votre ancrage dans la communauté locale." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Toronto, Ontario en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Toronto ?", a: "Les commandes pour Toronto sont expédiées depuis notre torréfacteur montréalais et arrivent en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Comment les boutiques de Toronto présentent-elles le café de marque en magasin ?", a: "Les présentoirs les plus efficaces sont au niveau des yeux près de la caisse ou dans un espace dédié 'lifestyle' ou 'local'. Certaines boutiques de Toronto créent un mini-espace café dans leur magasin avec les sacs exposés comme produit de décoration en soi." },
    { q: "Y a-t-il un minimum pour les boutiques de Toronto qui veulent faire un essai ?", a: "Aucun minimum. Vous pouvez commander 6, 12 ou 24 sacs pour votre premier essai et réapprovisionner selon la demande. EZPZ offre la même qualité de café et de design quel que soit le volume commandé." },
  ],
  siblings: [
    { label: "Boutiques · Montréal", href: "/fr/custom-coffee-retail-montreal" },
    { label: "Boutiques · Vancouver", href: "/fr/custom-coffee-retail-vancouver" },
    { label: "Cafés · Toronto", href: "/fr/custom-coffee-cafes-toronto" },
    { label: "Hôtels · Toronto", href: "/fr/custom-coffee-hotels-toronto" },
    { label: "Gyms · Toronto", href: "/fr/custom-coffee-gyms-toronto" },
  ],
  ctaClose: "Votre boutique de Toronto vend un art de vivre. Votre café devrait en faire partie.",
  cityPageHref: "/fr/custom-coffee-bags-toronto",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
