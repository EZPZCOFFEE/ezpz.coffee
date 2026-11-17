import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés pour boutiques | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags for Boutiques | No Minimum | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour boutiques et détaillants lifestyle. Un produit que vos clients utilisent chaque matin. Aucun minimum, design inclus." : "Custom branded coffee bags for boutiques and lifestyle retailers. A product your customers use every morning. No minimum order, full design included.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-boutiques`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-boutiques",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-boutiques",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-boutiques",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-boutiques`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés pour boutiques" : "Custom Coffee Bags for Boutiques" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: IndustryPageData = {
  industry: "Boutiques",
  eyebrow: "Custom Coffee for Boutiques",
  headline: "A product your boutique customers will use every morning.",
  subheadline: "Branded specialty coffee fits naturally alongside clothing, home goods, and lifestyle products — and it's one of the highest-margin items you can put on your shelves.",
  intro: "The best boutiques sell a lifestyle, not just a product. Everything on the shelves — from the candles to the ceramics to the clothing — tells a story about who the customer is and wants to be. A branded specialty coffee bag fits perfectly into that story. It is premium, it is beautiful, and it is something the customer will use every single morning. Boutique owners in Montreal's Mile End and Toronto's Queen West are using branded coffee to increase average transaction value and give customers a reason to come back. The product sells itself — customers see it at the register, recognize the brand, and add it to their basket. The margins are strong: a bag that costs $8 to produce can retail for $24 to $28 in a boutique context without any resistance. No minimum means testing the concept with 10 bags before committing to larger quantities. And because the product is perishable, customers come back to reorder. Branded coffee is one of the few retail products that creates genuine repeat purchase behavior without any discounting or marketing spend.",
  whoOrders: [
    { title: "Clothing boutiques", body: "Apparel boutiques use branded coffee to increase basket size and create a lifestyle brand that extends beyond clothing. It sits naturally at the register as an add-on purchase." },
    { title: "Home goods and lifestyle stores", body: "Lifestyle stores in urban neighborhoods add branded coffee alongside candles, ceramics, and books. It rounds out the lifestyle offering and gives customers a consumable reason to return." },
    { title: "Concept stores and multi-brand boutiques", body: "Curated concept stores use EZPZ white-label coffee to create a store-branded product that anchors their own identity separate from the brands they carry." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your boutique logo and brand identity, choose your packaging style, and we'll create a bag that looks like it belongs on your shelves." },
    { n: "02", title: "Choose your coffee", body: "Select from traceable specialty coffees that match your store's aesthetic — light, floral Ethiopian or bold Colombian work well for lifestyle boutiques." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. No minimum required — start with 10 bags and reorder when they sell out." },
    { n: "04", title: "Delivered to your store", body: "Shipped directly to your boutique address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "High retail margins with no minimum risk", body: "A bag that costs $8 produces a $24–$28 retail price point your customers accept without hesitation. Start small, sell out, reorder. Zero inventory risk." },
    { n: "02", title: "Natural complement to your existing product mix", body: "Coffee is a lifestyle product that pairs naturally with clothing, home goods, wellness items, and books. It requires no explanation and sells on brand association alone." },
    { n: "03", title: "Drives repeat visits and reorders", body: "Coffee is consumed. When it runs out, customers come back. Branded coffee is one of the only retail products that creates genuine repeat purchase behavior without discounting." },
    { n: "04", title: "Social media shareability", body: "A beautifully designed coffee bag gets photographed and shared. Your boutique branding reaches far beyond your shop floor every time a customer posts their morning ritual." },
  ],
  testimonial: {
    quote: "It pairs perfectly with our candles and home goods. Customers grab one every time they're in — we've had to reorder three times in two months.",
    author: "Stephanie L.",
    role: "Owner, lifestyle boutique, Vancouver",
  },
  canonicalPath: "/custom-coffee-bags-boutiques",
};


const frData: IndustryPageData = {
  industry: "Boutiques",
  eyebrow: "Café personnalisé pour les boutiques",
  headline: "Un produit que vos clients de boutique utiliseront chaque matin.",
  subheadline: "Le café de spécialité de marque s'intègre naturellement aux vêtements, produits de maison et articles lifestyle, et c'est l'un des articles à plus forte marge que vous pouvez mettre sur vos tablettes.",
  intro: "Les meilleures boutiques vendent un art de vivre, pas seulement un produit. Tout ce qui se trouve sur les tablettes, des bougies aux céramiques en passant par les vêtements, raconte une histoire sur l'identité et les aspirations du client. Un sachet de café de spécialité personnalisé s'intègre parfaitement à cette histoire. Il est premium, beau, et il s'utilise chaque matin, ce qui signifie que votre marque est présente dans la cuisine de votre client chaque jour pendant deux à quatre semaines. Aucune autre catégorie de produit ne génère autant de points de contact quotidiens à ce prix. La vraie opportunité est à la caisse, en complément d'achat impulsif : un client qui vient pour un pull repart souvent avec un sachet de café. La marge est excellente et il n'y a aucun risque de stock puisqu'il n'y a pas de minimum de commande.",
  whoOrders: [
    { title: "Boutiques de vêtements", body: "Les boutiques de prêt-à-porter utilisent le café de marque pour augmenter le panier moyen et créer une marque lifestyle qui s'étend au-delà du vêtement. Il se vend naturellement à la caisse comme achat d'impulsion." },
    { title: "Magasins de produits de maison et de style de vie", body: "Les magasins lifestyle en milieu urbain ajoutent le café de marque à côté des bougies, des céramiques et des livres. Il complète la sélection et génère une marge élevée." },
    { title: "Boutiques cadeaux et papeterie", body: "Les boutiques cadeaux utilisent le café de marque comme article clé qui attire les acheteurs à la recherche de quelque chose de différent des produits standard." },
  ],
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo et vos couleurs de marque. Notre outil en ligne crée un sachet professionnel qui correspond à vos standards de marque sans designer ni fichiers prêts à imprimer." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos origines de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus. Nous vous aidons à choisir si nécessaire." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à votre boutique", body: "Livré directement à votre adresse. Canada : 3 à 10 jours ouvrables. États-Unis : 7 à 14 jours ouvrables. Entièrement suivi." },
  ],
  benefits: [
    { n: "01", title: "Marges de vente au détail élevées sans risque de stock minimum", body: "Un sachet qui coûte 8 $ se vend 24 à 28 $ au détail et vos clients acceptent ce prix sans hésitation. Commencez petit, vendez tout, réapprovisionnez." },
    { n: "02", title: "Complément naturel à votre gamme de produits existante", body: "Le café est un produit lifestyle qui se marie naturellement avec les vêtements, les produits de maison et les accessoires. Il ne semble pas hors de propos : il semble incontournable." },
    { n: "03", title: "Trafic répété et fidélité à la boutique", body: "Les clients qui aiment votre café reviennent pour en acheter d'autres. Cela génère des visites en boutique supplémentaires et des opportunités de ventes croisées que les produits standards ne créent pas." },
    { n: "04", title: "Signal d'identité de marque que vos clients portent chez eux", body: "Un sachet de café de marque dans la cuisine de votre client est une présence quotidienne de votre boutique dans sa vie. Aucun autre article de vente au détail ne fait ça." },
  ],
  testimonial: {
    quote: "Il se marie parfaitement avec nos bougies et nos produits de maison. Les clients en prennent un à chaque visite. Nous avons dû réapprovisionner trois fois en deux mois.",
    author: "Stéphanie L.",
    role: "Propriétaire, boutique lifestyle, Montréal",
  },
  canonicalPath: "/custom-coffee-bags-boutiques",
};

const BoutiquesPage = () => <IndustryPage data={data} frData={frData} />;
export default BoutiquesPage;
