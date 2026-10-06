import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés London Ontario | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags London Ontario | No Minimum Order | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les entreprises de London en Ontario, livrés en 5 à 7 jours. Aucun minimum de commande, design inclus. Les marques de London choisissent EZPZ." : "Custom coffee bags for London Ontario businesses, shipped in 5–7 days. No minimum order, full design included. London Ontario brands choose EZPZ for specialty coffee.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-london-ontario`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-bags-london-ontario",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-london-ontario",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-london-ontario`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés London Ontario" : "Custom Coffee Bags London Ontario" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "London",
  province: "Ontario",
  eyebrow: "Custom Coffee Bags — London, Ontario",
  headline: "Custom coffee bags for London, Ontario brands. Zero minimums.",
  subheadline: "London Ontario's restaurants, healthcare organizations, and university-area businesses trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Richmond Row's restaurant and entertainment corridor to the indie shops and cafés of Old East Village, from Western University's campus coffee culture to St. Joseph's Health Care's institutional gifting needs — London, Ontario is a mid-size city with genuine appetite for premium brands. EZPZ ships custom branded specialty coffee from Montreal to London, Ontario in 5 to 7 business days. No minimum order. Full custom design included.",
  deliveryTime: "5 to 7 business days",
  canonicalPath: "/custom-coffee-bags-london-ontario",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to London, Ontario", body: "We ship directly to your London address within 5 to 7 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. No risk to test your concept." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Every bag is roasted fresh in Montreal to order." },
    { n: "04", title: "Built for London's university and healthcare market", body: "From Western University campus businesses to healthcare organizations across London — EZPZ serves sectors that demand quality, traceability, and professional presentation." },
  ],
  whoWeServe: [
    { title: "Restaurants & Richmond Row", body: "Richmond Row restaurants, Old East Village cafés, and Old South dining spots use custom branded coffee to keep their brand visible in customers' daily routines." },
    { title: "Healthcare & Institutional Sector", body: "London's healthcare institutions, medical offices, and hospital gift shops use EZPZ for branded coffee products and premium patient and donor gifts." },
    { title: "University & Campus Businesses", body: "Western University-area cafés, student-facing retailers, and campus organizations use custom branded coffee to build community and brand recognition." },
    { title: "Retailers & Boutiques", body: "Old East Village independent shops, Wortley Village boutiques, and downtown London retailers add custom branded coffee as a distinctive, high-margin product." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to London, Ontario in 5 to 7 business days via tracked Canada Post or courier. We deliver to all London areas including Downtown, Richmond Row, Wortley Village, Old East Village, Byron, and White Oaks. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Hamilton", href: "/en/custom-coffee-bags-hamilton" },
    { city: "Toronto", href: "/en/custom-coffee-bags-toronto" },
  ],
  faq: [
    {
      q: "How long does shipping from Montreal to London, Ontario take?",
      a: "London ON orders ship from our Montreal roastery and arrive in 5 to 7 business days via tracked courier. We deliver to Downtown, Richmond Row, Wortley Village, Old East Village, Byron, and White Oaks. First-time orders take 2 to 3 weeks total from design approval.",
    },
    {
      q: "What London Ontario industries use EZPZ most?",
      a: "Western University corporate gifts and alumni programs, Richmond Row restaurant and bar corridor, downtown professional services (law, medical, dental), London hospitals and health networks, and the growing tech sector in Old East Village are the most active markets for branded coffee in London.",
    },
    {
      q: "Is there a minimum order for London Ontario businesses?",
      a: "No minimum whatsoever. Start with a single bag to test the quality, then scale to whatever volume fits your program. EZPZ serves London businesses of any size — from solo practitioners wanting 5 branded bags for client gifts to university departments ordering 500 for an alumni event.",
    },
  ],
};


const frData: CityPageData = {
  city: "London", province: "Ontario",
  eyebrow: "Sacs de café personnalisés — London, Ontario",
  headline: "Sacs de café personnalisés pour les marques de London, Ontario. Aucun minimum.",
  subheadline: "Les restaurants, hôtels et entreprises universitaires de London font confiance à EZPZ pour le café de spécialité de marque. Aucun minimum, design inclus.",
  bodyIntro: "Des restaurants animés du quartier Old East Village aux bistros du Richmond Row, de la scène universitaire de Western University aux bureaux professionnels du centre-ville, London, Ontario est une ville où la tradition universitaire rencontre une gastronomie en pleine croissance. EZPZ livre des sacs de café de spécialité personnalisés depuis Montréal jusqu'à London en 5 à 7 jours ouvrables. Aucun minimum. Design complet inclus.",
  deliveryTime: "5 à 7 jours ouvrables",
  canonicalPath: "/custom-coffee-bags-london-ontario",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez votre nom de marque ou message, et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à London", body: "Nous livrons directement à votre adresse à London en 5 à 7 jours ouvrables après confirmation de la commande. Entièrement suivi." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum de commande", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum." },
    { n: "02", title: "Design personnalisé complet inclus", body: "Votre logo, couleurs de marque et message, pris en charge par notre équipe sans frais supplémentaires. Aucun frais de designer ni fichiers requis." },
    { n: "03", title: "Café de grade spécialité", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables. Chaque sachet est torréfié frais à Montréal à la commande." },
    { n: "04", title: "Conçu pour le marché universitaire et gastronomique de London", body: "Du Richmond Row à Old East Village, EZPZ livre un café de marque premium qui résonne avec le marché exigeant de London, Ontario." },
  ],
  whoWeServe: [
    { title: "Restaurants et Richmond Row", body: "Les restaurants du Richmond Row, les bistros de l'Old East Village et les cafés du centre-ville de London utilisent le café personnalisé pour garder leur marque visible." },
    { title: "Hôtels et hébergements", body: "Les hôtels du centre-ville de London personnalisent leur café en chambre pour offrir une expérience client mémorable." },
    { title: "Milieu universitaire et campus Western", body: "Les entreprises et organisations liées à Western University et à Fanshawe College utilisent EZPZ pour des cadeaux de café de marque." },
    { title: "Corporatif et services professionnels", body: "Les firmes professionnelles et les entreprises du centre-ville de London utilisent EZPZ pour des cadeaux de café de marque premium." },
  ],
  deliveryBody: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à London, Ontario en 5 à 7 jours ouvrables par Postes Canada ou messagerie suivie. Nous livrons dans tous les quartiers de London. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  relatedCities: [
    { city: "Toronto", href: "/fr/custom-coffee-bags-toronto" },
    { city: "Hamilton", href: "/fr/custom-coffee-bags-hamilton" },
  ],
  faq: [
    { q: "Combien de temps prend la livraison de Montréal à London, Ontario ?", a: "Les commandes de London, Ontario arrivent en 5 à 7 jours ouvrables. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design." },
    { q: "Quelles industries de London utilisent le café personnalisé ?", a: "Les restaurants du Richmond Row, les hôtels du centre-ville, les organisations liées à Western University et les firmes professionnelles de London sont les utilisateurs les plus actifs." },
    { q: "Y a-t-il un minimum de commande pour London, Ontario ?", a: "Aucun minimum. EZPZ s'adapte à tout volume avec la même politique sans minimum et design inclus." },
  ],
};

const LondonOntarioPage = () => <CityPage data={data} frData={frData} />;
export default LondonOntarioPage;
