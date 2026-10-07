import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les boutiques de Calgary | EZPZ Coffee" : "Custom Coffee Bags for Calgary Boutiques & Retail | EZPZ Coffee";
  const description = isFr ? "Les boutiques et détaillants de Calgary ajoutent le café de spécialité personnalisé comme produit à forte marge. Aucun minimum, design inclus." : "17th Ave SW, Kensington Village, CORE Shopping — Calgary's boutique scene is growing with energy-sector affluence. Custom branded specialty coffee for retail, zero minimum.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-retail-calgary`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-retail-calgary",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-retail-calgary",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-retail-calgary`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les boutiques de Calgary" : "Custom Coffee Bags for Calgary Boutiques & Retail" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-retail-calgary",
  city: { name: "Calgary", province: "AB", deliveryTime: "4–6 business days" },
  industry: { name: "Boutiques & Retail", parentHref: "/en/custom-coffee-bags-boutiques", parentLabel: "Boutiques & Retail" },
  hero: {
    h1: "Custom Coffee Bags for Calgary Boutiques & Retail Shops",
    subheadline:
      "17th Ave. Kensington Village. CORE. Calgary's boutique scene has the spending power to match any city in Canada — and the appetite for local character.",
    ctaSubject: "Custom coffee for Calgary boutique",
  },
  aeoAnswer:
    "Calgary boutiques and independent retailers can order custom branded specialty coffee bags from EZPZ with no minimum, starting at 100 bags at $11.75/bag. Delivered in 4–6 business days. Canadian-roasted specialty coffee.",
  why: {
    heading: "Calgary's Boutique Retail Market and the Premium Coffee Opportunity",
    paragraphs: [
      "Calgary's boutique retail scene has matured considerably over the past decade. 17th Avenue SW — the 'Red Mile' that runs through Calgary's most walkable retail and restaurant district — is now home to a cluster of design-forward independent boutiques that carry national and international brands alongside locally sourced products. Kensington Village, Calgary's oldest neighbourhood shopping district, has its own character: smaller, more local, serving a community of design-literate Mount Royal and Hillhurst residents who shop intentionally.",
      "Calgary's energy sector wealth creates a retail consumer with real discretionary spending capacity. The household income levels in Calgary's inner city neighbourhoods — Beltline, Mission, Kensington, Rideau Park — are among the highest of any Canadian urban core, and these residents spend confidently on quality products. A $20 branded coffee bag is a non-event for the Calgary boutique shopper who just spent $150 at the adjacent clothing store.",
      "Calgary's Stampede identity also creates a seasonal gifting and local pride opportunity that few other Canadian cities have. A limited-edition Stampede-period branded coffee bag — celebrating the city's defining event with a design that captures Calgary character — is a seasonal retail product that converts visitors and locals alike during the 10 days of the world's largest rodeo.",
    ],
  },
  useCases: {
    heading: "How Calgary Boutiques Use Custom Coffee",
    items: [
      {
        title: "Premium lifestyle retail counter product",
        body: "On the counter of a 17th Ave boutique, beside the jewelry and the candles, a branded specialty coffee bag is a low-friction add-on purchase that earns its shelf space. Calgary's spending-confident shoppers add it without overthinking — it's $20 and it looks like it belongs.",
      },
      {
        title: "Stampede season limited edition",
        body: "A Calgary-specific Stampede limited edition bag — designed with western motifs, the city skyline, or a creative nod to the Greatest Outdoor Show on Earth — is a seasonal product that sells in Kensington and on 17th Ave to locals celebrating and to tourists taking home a piece of the city.",
      },
      {
        title: "Corporate gift retail add-on",
        body: "Calgary's energy and professional services firms buy gifts in volume. A boutique that stocks a co-branded or unbranded luxury gift box — including a specialty coffee bag — can capture B2B orders from clients who need impressive, local gifts at scale.",
      },
      {
        title: "Holiday local gift sets",
        body: "Calgary's holiday retail market is strong. A 'made in Canada' holiday gift set — a branded coffee bag, a Calgary-made candle, a pair of quality socks from an Alberta brand — is a premium local gift that boutiques on 17th Ave can build and sell at $60–$100 through December.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Calgary in 4–6 business days. Starting at $11.75/bag at 100 bags. For Stampede season, order 3–4 weeks ahead for custom seasonal packaging.",
  faq: [
    {
      q: "What coffee profile works for Calgary boutique retail?",
      a: "Calgary's boutique shoppers are familiar with specialty coffee and will read the tasting notes. A medium roast with clear sweetness — Colombian washed, Brazilian natural, or Guatemalan SHB — performs well across the full range of Calgary retail customers.",
    },
    {
      q: "Can I do a Stampede limited edition bag?",
      a: "Yes. A seasonal limited-edition design at 100 bags minimum can be produced with a 3-week lead time from design approval. Order by early June for July Stampede.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. 100 bags at $11.75/bag.",
    },
    {
      q: "How long does delivery take to Calgary?",
      a: "4–6 business days. Plan for at least a week's lead time ahead of any event or pop-up.",
    },
  ],
  siblings: [
    { label: "Retail · Vancouver", href: "/en/custom-coffee-retail-vancouver" },
    { label: "Retail · Toronto", href: "/en/custom-coffee-retail-toronto" },
    { label: "Cafés · Calgary", href: "/en/custom-coffee-cafes-calgary" },
    { label: "Gyms · Calgary", href: "/en/custom-coffee-gyms-calgary" },
  ],
  ctaClose:
    "Calgary's boutique shoppers spend confidently on quality. Your branded coffee should be on their list.",
  cityPageHref: "/en/custom-coffee-bags-calgary",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-retail-calgary",
  city: { name: "Calgary", province: "Alberta", deliveryTime: "4 à 6 jours ouvrables" },
  industry: {
    name: "Boutiques et détaillants",
    parentHref: "/fr/custom-coffee-bags-boutiques",
    parentLabel: "Boutiques",
  },
  hero: {
    h1: "Café personnalisé pour les boutiques et détaillants de Calgary",
    subheadline: "Les boutiques et détaillants de Calgary choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les boutiques et détaillants de Calgary",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les boutiques et détaillants de Calgary, Alberta, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 4 à 6 jours ouvrables.",
  why: {
    heading: "Le café de marque dans les boutiques de Calgary",
    paragraphs: [
      "Calgary est le marché corporatif et énergétique du Canada, avec une clientèle exigeante et un pouvoir d'achat élevé. Les boutiques de Kensington, 17e Avenue SO et Mission ont construit des identités de quartier fortes et une clientèle locale fidèle. Les détaillants indépendants de Calgary se distinguent des grandes chaînes par leur curation unique et leur sens du produit local.",
      "Un café de spécialité personnalisé avec la marque de votre boutique est le produit lifestyle qui complète naturellement vos tablettes : il est beau, consommable, à forte marge et parle exactement au client qui apprécie votre sélection. Il génère des achats d'impulsion à la caisse et des raisons de revenir.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Calgary en 4 à 6 jours ouvrables. Aucun minimum signifie que vous pouvez commencer avec 12 ou 24 sacs et voir comment vos clients réagissent avant d'investir dans un inventaire plus important.",
    ],
  },
  useCases: {
    heading: "Comment les boutiques de Calgary utilisent le café de marque",
    items: [
    { title: "Article de comptoir à forte marge", body: "Un sachet de café posé à côté de la caisse est l'achat d'impulsion parfait pour un client qui vient déjà pour autre chose. À 24 à 28 $ au détail, la marge est l'une des meilleures de vos tablettes." },
    { title: "Produit lifestyle qui complète votre sélection", body: "Que vous vendiez des vêtements, des objets de maison ou des accessoires, le café de spécialité personnalisé s'intègre naturellement à l'histoire de votre boutique et communique la même attention à la qualité." },
    { title: "Coffrets cadeaux et paniers de saison", body: "Pour les Fêtes, la fête des Mères et la Saint-Valentin, créez des coffrets cadeaux avec votre café de marque. C'est une raison d'entrer dans votre boutique pour des clients qui achètent pour d'autres." },
    { title: "Collaborations locales et pop-ups", body: "Associez votre café de marque à d'autres boutiques locales et artisans de Calgary pour des coffrets collaboratifs et des marchés éphémères. La marque croisée renforce votre ancrage dans la communauté locale." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Calgary, Alberta en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Calgary ?", a: "Les commandes pour Calgary sont expédiées depuis notre torréfacteur montréalais et arrivent en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Comment les boutiques de Calgary présentent-elles le café de marque en magasin ?", a: "Les présentoirs les plus efficaces sont au niveau des yeux près de la caisse ou dans un espace dédié 'lifestyle' ou 'local'. Certaines boutiques de Calgary créent un mini-espace café dans leur magasin avec les sacs exposés comme produit de décoration en soi." },
    { q: "Y a-t-il un minimum pour les boutiques de Calgary qui veulent faire un essai ?", a: "Aucun minimum. Vous pouvez commander 6, 12 ou 24 sacs pour votre premier essai et réapprovisionner selon la demande. EZPZ offre la même qualité de café et de design quel que soit le volume commandé." },
  ],
  siblings: [
    { label: "Boutiques · Montréal", href: "/fr/custom-coffee-retail-montreal" },
    { label: "Boutiques · Toronto", href: "/fr/custom-coffee-retail-toronto" },
    { label: "Cafés · Calgary", href: "/fr/custom-coffee-cafes-calgary" },
    { label: "Hôtels · Calgary", href: "/fr/custom-coffee-hotels-calgary" },
    { label: "Gyms · Calgary", href: "/fr/custom-coffee-gyms-calgary" },
  ],
  ctaClose: "Votre boutique de Calgary vend un art de vivre. Votre café devrait en faire partie.",
  cityPageHref: "/fr/custom-coffee-bags-calgary",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
