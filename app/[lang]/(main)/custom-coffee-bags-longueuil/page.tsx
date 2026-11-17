import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés Longueuil | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags Longueuil | No Minimum Order | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les entreprises de Longueuil, livrés en 3 à 5 jours depuis Montréal. Aucun minimum de commande, design inclus. Les marques de la Rive-Sud choisissent EZPZ." : "Custom coffee bags for Longueuil businesses, delivered in 3–5 days from Montreal. No minimum order, full design included. South Shore brands choose EZPZ.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-longueuil`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-longueuil",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-longueuil",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-longueuil",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-longueuil`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés Longueuil" : "Custom Coffee Bags Longueuil" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "Longueuil",
  province: "Quebec",
  eyebrow: "Custom Coffee Bags — Longueuil",
  headline: "Custom coffee bags for Longueuil brands. Zero minimums.",
  subheadline: "South Shore businesses trust EZPZ to put their brand on specialty coffee — no minimums, full design included, delivered fast.",
  bodyIntro:
    "From the historic streets of Vieux-Longueuil to the restaurants and boutiques of Greenfield Park and Saint-Hubert, Longueuil's South Shore business community is vibrant, diverse, and growing. As a Montreal-based roaster just across the St. Lawrence, EZPZ delivers custom branded specialty coffee to Longueuil in 3 to 5 business days — faster than virtually any other supplier in Canada. No minimum order. Full custom design included.",
  deliveryTime: "3 to 5 business days",
  canonicalPath: "/custom-coffee-bags-longueuil",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in southwest Montreal — just across the river from Longueuil. No minimum required." },
    { n: "04", title: "Delivered to Longueuil", body: "We ship directly to your Longueuil address within 3 to 5 business days from order confirmation. Fast, local, fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for testing a new concept." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Among the fastest delivery in Quebec", body: "Longueuil's proximity to our Montreal roastery means some of the fastest custom coffee delivery in the province — typically 3 to 5 business days." },
    { n: "04", title: "Built for South Shore businesses", body: "From Vieux-Longueuil restaurants to Saint-Hubert fitness studios — EZPZ serves the South Shore community with the same care as our Montreal clients." },
  ],
  whoWeServe: [
    { title: "Restaurants & Cafés", body: "Vieux-Longueuil bistros, Saint-Hubert family restaurants, and Greenfield Park cafés add custom branded coffee that keeps their brand in customers' homes between visits." },
    { title: "Fitness Studios & Wellness", body: "South Shore gyms, yoga studios, and wellness centres brand their coffee experience to create a daily touchpoint with their community." },
    { title: "Retailers & Boutiques", body: "Longueuil's independent boutiques and specialty retailers add branded coffee as a high-margin product that attracts and retains loyal local customers." },
    { title: "Hotels & Corporate Clients", body: "Longueuil hotels and corporate offices near the South Shore business parks use EZPZ for branded coffee gifts and hospitality amenities." },
  ],
  deliveryBody:
    "Longueuil sits just across the Jacques-Cartier Bridge from our Montreal roastery — making it one of our fastest delivery destinations. Orders typically arrive within 3 to 5 business days. We deliver to all of Longueuil including Vieux-Longueuil, Greenfield Park, Saint-Hubert, and LeMoyne. Local pickup at our Montreal facility can also be arranged.",
  relatedCities: [
    { city: "Montreal", href: "/en/custom-coffee-bags-montreal" },
    { city: "Laval", href: "/en/custom-coffee-bags-laval" },
  ],
  faq: [
    {
      q: "How quickly can orders reach Longueuil from Montreal?",
      a: "Longueuil is just across the Jacques-Cartier Bridge from our Montreal roastery — shipping is typically 1 business day. First-time orders take 2 to 3 weeks total from design approval. Repeat orders arrive in 3 to 5 business days. Local pickup at our Montreal facility is also available by arrangement.",
    },
    {
      q: "What Longueuil neighbourhoods do you deliver to?",
      a: "We ship to all of Longueuil including Vieux-Longueuil, Greenfield Park, Saint-Hubert, LeMoyne, and the Quartier Maisons-Alfort area. If you have multiple South Shore locations, we can coordinate separate deliveries or a single consolidated shipment.",
    },
    {
      q: "What kinds of Longueuil businesses use custom coffee bags?",
      a: "Chemin Chambly restaurants, Saint-Hubert corporate offices, Greenfield Park wellness studios, and family-owned boutiques on the South Shore all use EZPZ. Longueuil's growing food and wellness scene is a strong fit for branded coffee as a retail product or premium client gift.",
    },
  ],
};


const frData: CityPageData = {
  city: "Longueuil",
  province: "Québec",
  eyebrow: "Sacs de café personnalisés — Longueuil",
  headline: "Sacs de café personnalisés pour les marques de Longueuil. Aucun minimum.",
  subheadline: "Les entreprises de la Rive-Sud font confiance à EZPZ pour mettre leur marque sur un café de spécialité. Aucun minimum, design inclus, livraison rapide.",
  bodyIntro: "Des rues historiques du Vieux-Longueuil aux restaurants et boutiques de Greenfield Park et de Saint-Hubert, la communauté commerciale de la Rive-Sud est vivante, diversifiée et en croissance. Torréfacteur montréalais situé juste de l'autre côté du Saint-Laurent, EZPZ livre des sacs de café de spécialité personnalisés à Longueuil en 3 à 5 jours ouvrables. Aucun minimum de commande. Design personnalisé complet inclus.",
  deliveryTime: "3 à 5 jours ouvrables",
  canonicalPath: "/custom-coffee-bags-longueuil",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez votre nom de marque ou message, et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à Longueuil", body: "Nous livrons directement à votre adresse à Longueuil en 3 à 5 jours ouvrables après confirmation de la commande. Entièrement suivi." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum de commande", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum." },
    { n: "02", title: "Design personnalisé complet inclus", body: "Votre logo, couleurs de marque et message, pris en charge par notre équipe sans frais supplémentaires. Aucun frais de designer ni fichiers requis." },
    { n: "03", title: "Café de grade spécialité", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables. Chaque sachet est torréfié frais à Montréal à la commande." },
    { n: "04", title: "Conçu pour les entreprises de la Rive-Sud", body: "Des restaurants du Vieux-Longueuil aux studios de fitness de Saint-Hubert, EZPZ sert la communauté de la Rive-Sud avec le même soin qu'à Montréal." },
  ],
  whoWeServe: [
    { title: "Restaurants et cafés", body: "Les bistros du Vieux-Longueuil, les restaurants familiaux de Saint-Hubert et les cafés de Greenfield Park ajoutent le café personnalisé qui garde leur marque dans les cuisines de leurs clients entre les visites." },
    { title: "Studios de fitness et mieux-être", body: "Les gyms, studios de yoga et centres de bien-être de la Rive-Sud personnalisent leur expérience café pour créer un point de contact quotidien avec leur communauté." },
    { title: "Détaillants et boutiques", body: "Les boutiques indépendantes de Longueuil ajoutent le café personnalisé comme produit à forte marge qui attire et fidélise les clients locaux." },
    { title: "Hôtels et clients corporatifs", body: "Les hôtels de Longueuil et les bureaux corporatifs près des parcs d'affaires de la Rive-Sud utilisent EZPZ pour des cadeaux de marque et des commodités d'hospitalité." },
  ],
  deliveryBody: "Longueuil est située juste de l'autre côté du pont Jacques-Cartier depuis notre torréfacteur montréalais, ce qui en fait l'une de nos destinations de livraison les plus rapides. Les commandes arrivent généralement en 3 à 5 jours ouvrables. Nous livrons dans tout Longueuil : Vieux-Longueuil, Greenfield Park, Saint-Hubert et LeMoyne. La cueillette locale à notre installation de Montréal peut aussi être organisée.",
  relatedCities: [
    { city: "Montréal", href: "/fr/custom-coffee-bags-montreal" },
    { city: "Laval", href: "/fr/custom-coffee-bags-laval" },
  ],
  faq: [
    { q: "Combien de temps prennent les commandes de Longueuil depuis Montréal ?", a: "Longueuil est juste de l'autre côté du pont Jacques-Cartier depuis notre torréfacteur montréalais. La livraison prend généralement 1 jour ouvrable. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées arrivent en 3 à 5 jours ouvrables. La cueillette locale est aussi disponible sur arrangement." },
    { q: "Dans quels quartiers de Longueuil livrez-vous ?", a: "Nous livrons dans tout Longueuil : Vieux-Longueuil, Greenfield Park, Saint-Hubert, LeMoyne et le secteur Quartier Maisons-Alfort. Si vous avez plusieurs adresses sur la Rive-Sud, nous pouvons coordonner des livraisons séparées ou un seul envoi groupé." },
    { q: "Quels types d'entreprises de Longueuil utilisent des sacs de café personnalisés ?", a: "Les restaurants du chemin Chambly, les bureaux corporatifs de Saint-Hubert, les studios de bien-être de Greenfield Park et les boutiques familiales de la Rive-Sud utilisent tous EZPZ. La scène gastronomique et de mieux-être en pleine croissance de Longueuil est idéale pour le café de marque comme produit de détail ou cadeau client premium." },
  ],
};

const LongueuilPage = () => <CityPage data={data} frData={frData} />;
export default LongueuilPage;
