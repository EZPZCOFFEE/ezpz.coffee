import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés Sherbrooke | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags Sherbrooke | No Minimum Order | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les entreprises de Sherbrooke, livrés en 5 à 7 jours. Aucun minimum de commande, design inclus. Les marques de Sherbrooke choisissent EZPZ pour le café de spécialité." : "Custom coffee bags for Sherbrooke businesses, shipped in 5–7 days. No minimum order, full design included. Sherbrooke brands choose EZPZ for specialty coffee.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-sherbrooke`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-bags-sherbrooke",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-sherbrooke",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-sherbrooke`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés Sherbrooke" : "Custom Coffee Bags Sherbrooke" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "Sherbrooke",
  province: "Quebec",
  eyebrow: "Custom Coffee Bags — Sherbrooke",
  headline: "Custom coffee bags for Sherbrooke brands. Zero minimums.",
  subheadline: "Sherbrooke restaurants, cafés, and university-area businesses trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From the student-fuelled café culture of Downtown Sherbrooke to the family restaurants of Fleurimont, from Lennoxville's Anglo university enclave to Rock Forest's growing commercial strips — Sherbrooke punches above its weight as a market for quality coffee brands. As a university town with Université de Sherbrooke and Bishop's University, Sherbrooke rewards authentic, quality-first brands. EZPZ ships from Montreal to Sherbrooke in 5 to 7 business days. No minimum order. Full custom design included.",
  deliveryTime: "5 to 7 business days",
  canonicalPath: "/custom-coffee-bags-sherbrooke",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Sherbrooke", body: "We ship directly to your Sherbrooke address within 5 to 7 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for test launches and seasonal batches." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. University markets appreciate quality and transparency — we deliver both." },
    { n: "04", title: "Built for Sherbrooke's university market", body: "From Downtown Sherbrooke cafés serving students to Lennoxville pubs — EZPZ helps Sherbrooke businesses build a coffee brand that resonates with their young, quality-conscious clientele." },
  ],
  whoWeServe: [
    { title: "Restaurants & Cafés", body: "Downtown Sherbrooke restaurants and student-area cafés use custom branded coffee to build a recognizable brand that students and locals recommend to each other." },
    { title: "University & Campus Businesses", body: "Campus café operators, university bookstores, and student association spaces use EZPZ to create branded coffee that becomes part of campus culture." },
    { title: "Retailers & Gift Shops", body: "Sherbrooke's independent boutiques and specialty retailers add custom branded coffee as a high-margin product with strong gift appeal." },
    { title: "Hotels & Event Venues", body: "Sherbrooke's conference hotels, event spaces, and wedding venues use EZPZ for branded hospitality experiences that guests remember." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Sherbrooke in 5 to 7 business days via tracked Canada Post or courier. We deliver to all Sherbrooke neighbourhoods and boroughs including Downtown, Fleurimont, Rock Forest, Lennoxville, and Brompton. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Montreal", href: "/en/custom-coffee-bags-montreal" },
    { city: "Quebec City", href: "/en/custom-coffee-bags-quebec-city" },
  ],
  faq: [
    {
      q: "How long does shipping from Montreal to Sherbrooke take?",
      a: "Sherbrooke is about 1.5 hours from Montreal. Shipping typically takes 1 to 2 business days. First-time orders take 2 to 3 weeks total from design approval. Repeat orders arrive in well under a week. We deliver to all Sherbrooke neighbourhoods including Downtown, Fleurimont, Rock Forest, Lennoxville, and Brompton.",
    },
    {
      q: "Can I get French-only or bilingual bag designs for Sherbrooke?",
      a: "Absolutely — our design team handles French-only, English-only, or bilingual French/English layouts at no extra cost. For Sherbrooke's predominantly French-speaking business community, we always recommend reviewing French copy first to ensure it resonates authentically with local customers.",
    },
    {
      q: "What Sherbrooke businesses use EZPZ most?",
      a: "Restaurants on King Street and Rue Wellington, boutique hotels near Place Sherbrooke, Université de Sherbrooke-affiliated businesses looking for alumni or promotional gifts, and the growing creative and tech sector in downtown Sherbrooke all use EZPZ. Any local business wanting to elevate their brand with a premium product is a good fit.",
    },
  ],
};


const frData: CityPageData = {
  city: "Sherbrooke",
  province: "Québec",
  eyebrow: "Sacs de café personnalisés — Sherbrooke",
  headline: "Sacs de café personnalisés pour les marques de Sherbrooke. Aucun minimum.",
  subheadline: "Les restaurants, cafés et entreprises du milieu universitaire de Sherbrooke font confiance à EZPZ pour le café de spécialité de marque. Aucun minimum, design inclus.",
  bodyIntro: "De la culture café animée du centre-ville de Sherbrooke aux restaurants familiaux de Fleurimont, de l'enclave universitaire de Lennoxville aux nouvelles artères commerciales de Rock Forest, Sherbrooke récompense les marques authentiques qui misent sur la qualité. Ville universitaire avec l'Université de Sherbrooke et l'Université Bishop's, Sherbrooke est un marché pour les marques de café de qualité. EZPZ livre depuis Montréal jusqu'à Sherbrooke en 5 à 7 jours ouvrables. Aucun minimum. Design complet inclus.",
  deliveryTime: "5 à 7 jours ouvrables",
  canonicalPath: "/custom-coffee-bags-sherbrooke",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez votre nom de marque ou message, et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à Sherbrooke", body: "Nous livrons directement à votre adresse à Sherbrooke en 5 à 7 jours ouvrables après confirmation de la commande. Entièrement suivi." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum de commande", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum." },
    { n: "02", title: "Design personnalisé complet inclus", body: "Votre logo, couleurs de marque et message, pris en charge par notre équipe sans frais supplémentaires. Aucun frais de designer ni fichiers requis." },
    { n: "03", title: "Café de grade spécialité", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables. Chaque sachet est torréfié frais à Montréal à la commande." },
    { n: "04", title: "Conçu pour le marché universitaire de Sherbrooke", body: "Des cafés du centre-ville qui servent les étudiants aux pubs de Lennoxville, EZPZ aide les entreprises de Sherbrooke à bâtir une marque café qui résonne avec leur clientèle jeune et exigeante." },
  ],
  whoWeServe: [
    { title: "Restaurants et cafés", body: "Les restaurants du centre-ville de Sherbrooke et les cafés du secteur universitaire utilisent le café personnalisé pour bâtir une marque reconnaissable que les étudiants et les locaux se recommandent." },
    { title: "Milieu universitaire et campus", body: "Les exploitants de cafés sur les campus, les librairies universitaires et les espaces des associations étudiantes utilisent EZPZ pour créer un café de marque qui fait partie de la culture du campus." },
    { title: "Détaillants et boutiques cadeaux", body: "Les boutiques indépendantes de Sherbrooke ajoutent le café personnalisé comme produit à forte marge avec un fort attrait pour les cadeaux." },
    { title: "Hôtels et salles d'événements", body: "Les hôtels de conférences, salles d'événements et lieux de mariage de Sherbrooke utilisent EZPZ pour des expériences d'hospitalité de marque dont les clients se souviennent." },
  ],
  deliveryBody: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Sherbrooke en 5 à 7 jours ouvrables par Postes Canada ou messagerie suivie. Nous livrons dans tous les quartiers de Sherbrooke : centre-ville, Fleurimont, Rock Forest, Lennoxville et Brompton. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  relatedCities: [
    { city: "Montréal", href: "/fr/custom-coffee-bags-montreal" },
    { city: "Québec", href: "/fr/custom-coffee-bags-quebec-city" },
  ],
  faq: [
    { q: "Combien de temps prend la livraison de Montréal à Sherbrooke ?", a: "Sherbrooke est à environ 1,5 heure de Montréal. La livraison prend généralement 1 à 2 jours ouvrables. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Nous livrons dans tous les quartiers de Sherbrooke : centre-ville, Fleurimont, Rock Forest, Lennoxville et Brompton." },
    { q: "Puis-je obtenir des designs de sacs en français seulement ou bilingues pour Sherbrooke ?", a: "Absolument. Notre équipe gère les mises en page en français seulement, en anglais seulement ou bilingues français/anglais sans frais supplémentaires. Pour la communauté d'affaires majoritairement francophone de Sherbrooke, nous recommandons toujours de vérifier les textes en français en premier pour s'assurer qu'ils résonnent authentiquement avec la clientèle locale." },
    { q: "Quelles entreprises de Sherbrooke utilisent le plus EZPZ ?", a: "Les restaurants de la rue King et de la rue Wellington, les hôtels-boutiques près de la Place Sherbrooke, les entreprises liées à l'Université de Sherbrooke qui cherchent des cadeaux promotionnels, et le secteur créatif et technologique du centre-ville utilisent tous EZPZ." },
  ],
};

const SherbrookePage = () => <CityPage data={data} frData={frData} />;
export default SherbrookePage;
