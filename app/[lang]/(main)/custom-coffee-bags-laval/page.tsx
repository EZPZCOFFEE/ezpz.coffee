import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";

  const title = isFr
    ? "Sacs de café personnalisés Laval | Aucun minimum | EZPZ Coffee"
    : "Custom Coffee Bags Laval | No Minimum Order | EZPZ Coffee";
  const description = isFr
    ? "Sacs de café personnalisés pour les entreprises de Laval, livrés en 3 à 5 jours depuis Montréal. Aucun minimum de commande, design inclus. Les marques de Laval choisissent EZPZ."
    : "Custom coffee bags for Laval businesses, delivered in 3–5 days from Montreal. No minimum order, full design included. Laval brands choose EZPZ for specialty coffee.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-laval`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-laval",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-laval",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-laval",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-laval`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Laval" : "Custom Coffee Bags Laval" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "Laval",
  province: "Quebec",
  eyebrow: "Custom Coffee Bags — Laval",
  headline: "Custom coffee bags for Laval brands. Zero minimums.",
  subheadline: "Laval restaurants, retailers, and fitness studios trust EZPZ to put their brand on specialty coffee — no minimums, full design included.",
  bodyIntro:
    "From the restaurant cluster around Centropolis to the busy retail corridors near Carrefour Laval, from Sainte-Rose neighbourhood cafés to Vimont family businesses — Laval is one of Canada's most active suburban business markets. Being just north of Montreal means Laval businesses benefit from some of the fastest EZPZ delivery in Canada — typically 3 to 5 business days from order confirmation. No minimum order. Full custom design included.",
  deliveryTime: "3 to 5 business days",
  canonicalPath: "/custom-coffee-bags-laval",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal — just a short distance from Laval. No minimum required." },
    { n: "04", title: "Delivered to Laval", body: "We ship directly to your Laval address within 3 to 5 business days from order confirmation. Fast, local, tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for small businesses and large retailers alike." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Among the fastest delivery in Canada", body: "Laval's proximity to our Montreal roastery means your order arrives faster than almost anywhere else in Canada — typically 3 to 5 business days." },
    { n: "04", title: "Built for Laval's family business scene", body: "From Centropolis restaurants to Carrefour Laval-area retailers — EZPZ works with independent Laval businesses of every size and serves the local community they have built." },
  ],
  whoWeServe: [
    { title: "Restaurants & Family Dining", body: "Laval's diverse restaurant scene — from Italian trattorias to Vietnamese noodle houses to Brazilian churrascos — uses custom branded coffee to add a premium finishing touch." },
    { title: "Retail & Shopping Centre Brands", body: "Carrefour Laval-area boutiques and independent retailers add custom branded coffee as a high-margin, repeat-purchase product that differentiates them from big-box neighbours." },
    { title: "Gyms & Fitness Studios", body: "Laval fitness clubs, CrossFit gyms, and yoga studios offer branded coffee as an extension of their lifestyle brand and a reason for members to return." },
    { title: "Family & Community Businesses", body: "Daycares, wellness clinics, and community-focused businesses in Laval use EZPZ to create a branded gift that resonates with their local clientele." },
  ],
  deliveryBody:
    "Laval is one of our closest shipping destinations — just across the river from our Montreal roastery. Orders typically arrive within 3 to 5 business days from design approval. We deliver to all Laval sectors including Centropolis, Chomedey, Sainte-Rose, Vimont, Laval-des-Rapides, and Fabreville. Local pickup at our Montreal facility can also be arranged.",
  relatedCities: [
    { city: "Montreal", href: "/en/custom-coffee-bags-montreal" },
    { city: "Longueuil", href: "/en/custom-coffee-bags-longueuil" },
  ],
  faq: [
    {
      q: "How quickly can orders reach Laval from Montreal?",
      a: "Laval is just across the Rivière des Prairies from our Montreal roastery — shipping is typically 1 business day. First-time orders take 2 to 3 weeks total from design approval to delivery. Repeat orders arrive in 3 to 5 business days. We can also arrange local pickup at our southwest Montreal facility.",
    },
    {
      q: "Can I order a small quantity to test before scaling?",
      a: "Yes — EZPZ has no minimum order, period. You can order a single bag to test the product quality and packaging before committing to volume. This is especially valuable for Laval restaurateurs and independent retailers who want to validate a branded coffee concept before adding it to their offering.",
    },
    {
      q: "What kinds of Laval businesses use EZPZ?",
      a: "Centropolis-area restaurants, Carrefour Laval-area boutiques, CrossFit gyms and yoga studios, family-owned cafés in Sainte-Rose and Vimont, and wellness clinics throughout Chomedey. Laval's active suburban business community is a strong fit for branded coffee as a premium gift or retail product.",
    },
  ],
};


const frData: CityPageData = {
  city: "Laval",
  province: "Québec",
  eyebrow: "Sacs de café personnalisés — Laval",
  headline: "Sacs de café personnalisés pour les marques de Laval. Aucun minimum.",
  subheadline: "Les restaurants, détaillants et studios de fitness de Laval font confiance à EZPZ pour mettre leur marque sur un café de spécialité. Aucun minimum, design inclus.",
  bodyIntro:
    "De la grappe de restaurants autour de Centropolis aux corridors commerciaux animés près du Carrefour Laval, des cafés de quartier de Sainte-Rose aux commerces familiaux de Vimont, Laval est l'un des marchés commerciaux suburbains les plus actifs au Canada. Étant juste au nord de Montréal, les entreprises lavaloises bénéficient de certaines des livraisons EZPZ les plus rapides au Canada, généralement 3 à 5 jours ouvrables après confirmation de la commande. Aucun minimum de commande. Design personnalisé complet inclus.",
  deliveryTime: "3 à 5 jours ouvrables",
  canonicalPath: "/custom-coffee-bags-laval",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez votre nom de marque ou message, et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal, à quelques minutes de Laval seulement. Aucun minimum requis." },
    { n: "04", title: "Livré à Laval", body: "Nous livrons directement à votre adresse à Laval en 3 à 5 jours ouvrables après confirmation. Rapide, local, entièrement suivi." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum de commande", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum. Idéal pour les petites entreprises comme pour les grandes." },
    { n: "02", title: "Design personnalisé complet inclus", body: "Votre logo, couleurs de marque et message, pris en charge par notre équipe sans frais supplémentaires. Aucun frais de designer ni fichiers prêts à l'impression." },
    { n: "03", title: "Parmi les livraisons les plus rapides au Canada", body: "La proximité de Laval avec notre torréfacteur montréalais signifie que votre commande arrive plus vite que presque partout ailleurs au Canada, généralement en 3 à 5 jours ouvrables." },
    { n: "04", title: "Conçu pour le tissu commercial de Laval", body: "Des restaurants de Centropolis aux détaillants du secteur Carrefour Laval, EZPZ travaille avec les entreprises indépendantes lavaloises de toutes tailles et sert la communauté locale qu'elles ont bâtie." },
  ],
  whoWeServe: [
    { title: "Restaurants et restauration familiale", body: "La scène restauratrice diversifiée de Laval, des trattorias italiennes aux maisons de phô vietnamiennes aux churrascos brésiliens, utilise le café personnalisé pour ajouter une touche premium finale." },
    { title: "Détaillants et marques de centres commerciaux", body: "Les boutiques du secteur Carrefour Laval et les détaillants indépendants ajoutent le café personnalisé comme produit à forte marge et fidélisant qui les démarque des grandes surfaces voisines." },
    { title: "Gyms et studios de fitness", body: "Les clubs de fitness, gymnases CrossFit et studios de yoga de Laval offrent le café de marque comme extension de leur marque lifestyle et raison pour leurs membres de revenir." },
    { title: "Entreprises familiales et communautaires", body: "Les garderies, cliniques de mieux-être et entreprises axées sur la communauté à Laval utilisent EZPZ pour créer un cadeau de marque qui résonne avec leur clientèle locale." },
  ],
  deliveryBody:
    "Laval est l'une de nos destinations les plus proches, juste de l'autre côté de la rivière depuis notre torréfacteur montréalais. Les commandes arrivent généralement en 3 à 5 jours ouvrables depuis l'approbation du design. Nous livrons dans tous les secteurs de Laval : Centropolis, Chomedey, Sainte-Rose, Vimont, Laval-des-Rapides et Fabreville. La cueillette locale à notre installation de Montréal peut aussi être organisée.",
  relatedCities: [
    { city: "Montréal", href: "/fr/custom-coffee-bags-montreal" },
    { city: "Longueuil", href: "/fr/custom-coffee-bags-longueuil" },
  ],
  faq: [
    { q: "Combien de temps prennent les commandes pour atteindre Laval depuis Montréal ?", a: "Laval est juste de l'autre côté de la Rivière des Prairies depuis notre torréfacteur montréalais. La livraison prend généralement 1 jour ouvrable. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées arrivent en 3 à 5 jours ouvrables. La cueillette locale à notre installation du sud-ouest de Montréal est aussi possible." },
    { q: "Puis-je commander une petite quantité pour tester avant de développer ?", a: "Oui. EZPZ n'a aucun minimum de commande. Vous pouvez commander un seul sachet pour tester la qualité du produit et de l'emballage avant de vous engager sur un volume. C'est particulièrement précieux pour les restaurateurs et détaillants indépendants de Laval qui veulent valider un concept de café de marque." },
    { q: "Quels types d'entreprises de Laval utilisent EZPZ ?", a: "Les restaurants du secteur Centropolis, les boutiques du secteur Carrefour Laval, les clubs CrossFit et studios de yoga, les cafés familiaux de Sainte-Rose et Vimont, et les cliniques de mieux-être de Chomedey. La communauté commerciale suburbaine active de Laval est un excellent marché pour le café de marque comme cadeau premium ou produit de détail." },
  ],
};

const LavalPage = () => <CityPage data={data} frData={frData} />;
export default LavalPage;
