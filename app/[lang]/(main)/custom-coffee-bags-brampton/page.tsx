import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés Brampton | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags Brampton | No Minimum Order | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les entreprises de Brampton, livrés en 5 à 7 jours. Aucun minimum de commande, design inclus. Les marques de Brampton choisissent EZPZ." : "Custom coffee bags for Brampton businesses, shipped in 5–7 days. No minimum order, full design included. Brampton brands choose EZPZ for specialty coffee.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-brampton`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-brampton",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-brampton",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-brampton",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-brampton`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés Brampton" : "Custom Coffee Bags Brampton" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "Brampton",
  province: "Ontario",
  eyebrow: "Custom Coffee Bags — Brampton",
  headline: "Custom coffee bags for Brampton brands. Zero minimums.",
  subheadline: "Brampton's diverse restaurants, retailers, and manufacturing sector businesses trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Downtown Brampton's historic Rose Theatre district to the busy commercial corridors of Bramalea, from Springdale's family-owned restaurants to the manufacturing and logistics hubs in the east end — Brampton is one of Canada's fastest-growing and most diverse cities. EZPZ ships custom branded specialty coffee from Montreal to Brampton in 5 to 7 business days. No minimum order. Full custom design included. A premium branded coffee product at any scale.",
  deliveryTime: "5 to 7 business days",
  canonicalPath: "/custom-coffee-bags-brampton",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Brampton", body: "We ship directly to your Brampton address within 5 to 7 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for businesses at any stage." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Every bag is roasted fresh in Montreal to order." },
    { n: "04", title: "Built for Brampton's diverse business community", body: "From Bramalea's restaurant strip to Downtown Brampton's growing arts scene — EZPZ serves Brampton's uniquely diverse business community with culturally-aware, premium branded coffee." },
  ],
  whoWeServe: [
    { title: "Restaurants & Diverse Food Scene", body: "Brampton's diverse restaurant landscape — South Asian, Caribbean, Italian, and beyond — uses custom branded coffee to add a premium, personal touch to their dining experience." },
    { title: "Manufacturing & Corporate Sector", body: "Brampton's logistics parks, manufacturing facilities, and corporate offices use EZPZ for branded coffee gifts that stand out in a results-driven business culture." },
    { title: "Retailers & Boutiques", body: "Bramalea City Centre-area shops and Downtown Brampton boutiques add custom branded coffee as a differentiated, high-margin product their customers love." },
    { title: "Fitness & Community Studios", body: "Brampton gyms, dance studios, and community wellness centres use EZPZ to create a branded lifestyle product that builds loyalty among their diverse membership base." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Brampton in 5 to 7 business days via tracked Canada Post or courier. We deliver to all Brampton areas including Downtown, Bramalea, Springdale, Castlemore, and Huttonville. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Mississauga", href: "/en/custom-coffee-bags-mississauga" },
    { city: "Toronto", href: "/en/custom-coffee-bags-toronto" },
  ],
  faq: [
    {
      q: "How long does delivery to Brampton take from Montreal?",
      a: "Brampton orders ship from our Montreal roastery and arrive in 5 to 7 business days via tracked courier. We deliver to Downtown, Bramalea, Springdale, Castlemore, Huttonville, and all Brampton postal codes. First-time orders take 2 to 3 weeks total from design approval.",
    },
    {
      q: "What Brampton industries use custom branded coffee?",
      a: "Brampton's South Asian restaurant corridor, corporate gifting programs in the Queen Street business district, logistics and distribution companies near the airport, event catering companies, and community organization gifts are the most common use cases. Brampton's diverse business community uses branded coffee as a premium, universally appreciated gift.",
    },
    {
      q: "Can I order a small quantity first to try before scaling up?",
      a: "Yes — EZPZ has absolutely no minimum order. You can order 1 bag to test the quality and packaging before committing to a larger quantity. This is especially popular with Brampton restaurateurs and event organizers who want to validate a branded coffee concept risk-free.",
    },
  ],
};


const frData: CityPageData = {
  city: "Brampton", province: "Ontario",
  eyebrow: "Sacs de café personnalisés — Brampton",
  headline: "Sacs de café personnalisés pour les marques de Brampton. Aucun minimum.",
  subheadline: "Les restaurants, détaillants et entreprises de Brampton font confiance à EZPZ pour le café de spécialité de marque. Aucun minimum, design inclus.",
  bodyIntro: "Des corridors commerciaux animés de Brampton aux restaurants familiaux de Queen Street, la communauté d'affaires diversifiée de Brampton est l'une des plus dynamiques de l'Ontario. EZPZ livre des sacs de café de spécialité personnalisés depuis Montréal jusqu'à Brampton en 5 à 7 jours ouvrables. Aucun minimum. Design complet inclus.",
  deliveryTime: "5 à 7 jours ouvrables",
  canonicalPath: "/custom-coffee-bags-brampton",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez votre nom de marque ou message, et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à Brampton", body: "Nous livrons directement à votre adresse à Brampton en 5 à 7 jours ouvrables après confirmation de la commande. Entièrement suivi." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum de commande", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum." },
    { n: "02", title: "Design personnalisé complet inclus", body: "Votre logo, couleurs de marque et message, pris en charge par notre équipe sans frais supplémentaires. Aucun frais de designer ni fichiers requis." },
    { n: "03", title: "Café de grade spécialité", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables. Chaque sachet est torréfié frais à Montréal à la commande." },
    { n: "04", title: "Conçu pour la communauté d'affaires diversifiée de Brampton", body: "Des restaurants de Queen Street aux entreprises du centre-ville de Brampton, EZPZ livre un café de marque premium qui résonne avec la clientèle diversifiée et exigeante de la ville." },
  ],
  whoWeServe: [
    { title: "Restaurants et restauration familiale", body: "Les restaurants de Queen Street, les bistros du centre-ville et les cafés familiaux de Brampton utilisent le café personnalisé pour garder leur marque visible dans les cuisines de leurs clients." },
    { title: "Détaillants et boutiques", body: "Les boutiques indépendantes de Brampton ajoutent le café personnalisé comme produit à forte marge qui attire et fidélise les clients locaux." },
    { title: "Gyms et studios de fitness", body: "Les clubs de fitness, CrossFit et studios de yoga de Brampton offrent le café de marque comme extension de leur marque lifestyle." },
    { title: "Corporatif et services professionnels", body: "Les firmes professionnelles et les entreprises de Brampton utilisent EZPZ pour des cadeaux de café de marque premium." },
  ],
  deliveryBody: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Brampton en 5 à 7 jours ouvrables par Postes Canada ou messagerie suivie. Nous livrons dans tous les quartiers de Brampton. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  relatedCities: [
    { city: "Toronto", href: "/fr/custom-coffee-bags-toronto" },
    { city: "Mississauga", href: "/fr/custom-coffee-bags-mississauga" },
  ],
  faq: [
    { q: "Combien de temps prend la livraison de Montréal à Brampton ?", a: "Les commandes de Brampton arrivent en 5 à 7 jours ouvrables. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design." },
    { q: "Quelles industries de Brampton utilisent le café personnalisé ?", a: "Les restaurants familiaux, les boutiques indépendantes, les gyms et studios de fitness, et les firmes professionnelles de Brampton sont les utilisateurs les plus actifs." },
    { q: "Y a-t-il un minimum de commande pour Brampton ?", a: "Aucun minimum. EZPZ s'adapte à tout volume avec la même politique sans minimum et design inclus." },
  ],
};

const BramptonPage = () => <CityPage data={data} frData={frData} />;
export default BramptonPage;
