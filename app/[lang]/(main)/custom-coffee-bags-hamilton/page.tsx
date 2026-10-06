import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés Hamilton | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags Hamilton | No Minimum Order | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les entreprises de Hamilton, livrés en 5 à 7 jours. Aucun minimum de commande, design inclus. Les marques de Hamilton choisissent EZPZ." : "Custom coffee bags for Hamilton businesses, shipped in 5–7 days. No minimum order, full design included. Hamilton brands choose EZPZ for specialty coffee.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-hamilton`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-bags-hamilton",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-hamilton",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-hamilton`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés Hamilton" : "Custom Coffee Bags Hamilton" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "Hamilton",
  province: "Ontario",
  eyebrow: "Custom Coffee Bags — Hamilton",
  headline: "Custom coffee bags for Hamilton brands. Zero minimums.",
  subheadline: "Hamilton's booming arts scene, restaurant corridor, and creative businesses trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From the James Street North arts corridor to the independent restaurants of Locke Street, from Westdale's student-and-family café culture to the craft community thriving across the lower city — Hamilton is one of Canada's most exciting urban markets for independent brands. The Steel City has reinvented itself as a creative hub, and the businesses here compete on authenticity and quality. EZPZ ships custom branded specialty coffee from Montreal to Hamilton in 5 to 7 business days. No minimum order.",
  deliveryTime: "5 to 7 business days",
  canonicalPath: "/custom-coffee-bags-hamilton",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Hamilton", body: "We ship directly to your Hamilton address within 5 to 7 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for Hamilton's independent, risk-taking business culture." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Hamilton's discerning craft community expects quality — we deliver it." },
    { n: "04", title: "Built for Hamilton's creative community", body: "James Street North galleries, Locke Street restaurants, and Westdale independent shops — EZPZ serves Hamilton's creative and independent business scene with premium branded coffee." },
  ],
  whoWeServe: [
    { title: "Restaurants & Locke Street Dining", body: "Hamilton's restaurant renaissance — from Locke Street bistros to James Street North brunch spots — uses custom branded coffee to add a premium, shareable touchpoint." },
    { title: "Arts & Creative Businesses", body: "Galleries, studios, and creative agencies on Hamilton's arts corridor use branded coffee as a sophisticated client gift that reflects their creative identity." },
    { title: "Craft & Independent Retailers", body: "Hamilton's flourishing independent retail scene — vintage shops, craft breweries, and artisan boutiques — adds custom coffee as a natural brand extension." },
    { title: "Hotels & Boutique Properties", body: "Hamilton's boutique hotels and Airbnb properties brand their welcome experience with EZPZ coffee to stand out in an increasingly competitive short-term rental market." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Hamilton in 5 to 7 business days via tracked Canada Post or courier. We deliver to all Hamilton areas including James Street North, Locke Street, Westdale, Dundas, Ancaster, Stoney Creek, and Waterdown. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Toronto", href: "/en/custom-coffee-bags-toronto" },
    { city: "London", href: "/en/custom-coffee-bags-london-ontario" },
  ],
  faq: [
    {
      q: "How long does shipping from Montreal to Hamilton take?",
      a: "Hamilton orders ship from our Montreal roastery and arrive in 5 to 7 business days via tracked courier. We deliver to James Street North, Locke Street, Westdale, Dundas, Ancaster, Stoney Creek, and Waterdown. First-time orders take 2 to 3 weeks total from design approval.",
    },
    {
      q: "How does custom coffee fit Hamilton's growing food and arts scene?",
      a: "Hamilton's James Street North gallery district, Locke Street restaurant corridor, and the emerging Barton Village food scene are building brands that compete with Toronto's best. A premium custom coffee bag — on the counter or as a takeaway — reinforces that brand identity at a fraction of what traditional marketing costs.",
    },
    {
      q: "Do you offer volume pricing for Hamilton event venues and wedding facilities?",
      a: "Yes — for orders of 100+ bags, contact us for a custom volume quote. Hamilton's wedding venues, conference centres, and hospitality properties regularly order in volume for events, seasonal programs, and client gifting. We also offer repeat-order scheduling for ongoing programs.",
    },
  ],
};


const frData: CityPageData = {
  city: "Hamilton", province: "Ontario",
  eyebrow: "Sacs de café personnalisés — Hamilton",
  headline: "Sacs de café personnalisés pour les marques de Hamilton. Aucun minimum.",
  subheadline: "Les restaurants, galeries et entreprises créatives de Hamilton font confiance à EZPZ pour le café de spécialité de marque. Aucun minimum, design inclus.",
  bodyIntro: "Du couloir artistique dynamique de James Street North aux restaurants branchés de Locke Street South, de la scène des brasseries artisanales d'Hamilton à la communauté universitaire de McMaster, Hamilton a transformé son identité industrielle en une culture créative vibrante. EZPZ livre des sacs de café de spécialité personnalisés depuis Montréal jusqu'à Hamilton en 5 à 7 jours ouvrables. Aucun minimum. Design complet inclus.",
  deliveryTime: "5 à 7 jours ouvrables",
  canonicalPath: "/custom-coffee-bags-hamilton",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez votre nom de marque ou message, et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à Hamilton", body: "Nous livrons directement à votre adresse à Hamilton en 5 à 7 jours ouvrables après confirmation de la commande. Entièrement suivi." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum de commande", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum." },
    { n: "02", title: "Design personnalisé complet inclus", body: "Votre logo, couleurs de marque et message, pris en charge par notre équipe sans frais supplémentaires. Aucun frais de designer ni fichiers requis." },
    { n: "03", title: "Café de grade spécialité", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables. Chaque sachet est torréfié frais à Montréal à la commande." },
    { n: "04", title: "Conçu pour la scène créative et gastronomique d'Hamilton", body: "De James Street North à Locke Street South, EZPZ livre un café de marque premium qui résonne avec le marché créatif et exigeant d'Hamilton." },
  ],
  whoWeServe: [
    { title: "Restaurants et James Street North", body: "Les restaurants de James Street North, les bistros de Locke Street et les cafés du centre-ville d'Hamilton utilisent le café personnalisé pour garder leur marque visible dans les cuisines de leurs clients." },
    { title: "Galeries et culture créative", body: "Les galeries d'art, les lieux de spectacle et les espaces créatifs d'Hamilton utilisent le café personnalisé comme cadeau distinctif pour leurs mécènes et collaborateurs." },
    { title: "Brasseries artisanales et expériences gastronomiques", body: "Les brasseries artisanales et les restaurants gastronomiques d'Hamilton ajoutent le café personnalisé comme produit complémentaire à forte marge." },
    { title: "Universitaire et campus McMaster", body: "Les entreprises et organisations liées à McMaster utilisent EZPZ pour des cadeaux de café de marque qui résonnent avec leur communauté académique." },
  ],
  deliveryBody: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Hamilton en 5 à 7 jours ouvrables par Postes Canada ou messagerie suivie. Nous livrons dans tous les quartiers d'Hamilton : centre-ville, James Street North, Locke Street, Westdale et les environs. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  relatedCities: [
    { city: "Toronto", href: "/fr/custom-coffee-bags-toronto" },
    { city: "Mississauga", href: "/fr/custom-coffee-bags-mississauga" },
  ],
  faq: [
    { q: "Combien de temps prend la livraison de Montréal à Hamilton ?", a: "Les commandes d'Hamilton arrivent en 5 à 7 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design." },
    { q: "Quelles industries d'Hamilton utilisent le café personnalisé ?", a: "Les restaurants de James Street North, les galeries, les brasseries artisanales, les espaces créatifs et les organisations liées à McMaster sont les utilisateurs les plus actifs." },
    { q: "Y a-t-il un minimum de commande pour Hamilton ?", a: "Aucun minimum. Que vous ayez besoin de quelques sacs pour un événement ou de milliers pour un programme de cadeaux, EZPZ s'adapte à tout volume." },
  ],
};

const HamiltonPage = () => <CityPage data={data} frData={frData} />;
export default HamiltonPage;
