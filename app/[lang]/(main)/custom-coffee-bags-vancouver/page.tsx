import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés Vancouver | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags Vancouver | No Minimum Order | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les entreprises de Vancouver, livrés en 7 à 10 jours. Aucun minimum de commande, design inclus. Les marques de Vancouver choisissent EZPZ pour le café de spécialité traçable." : "Custom coffee bags for Vancouver businesses, shipped in 7–10 days. No minimum order, full design included. Vancouver brands choose EZPZ for traceable specialty coffee.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-vancouver`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-bags-vancouver",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-vancouver",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-vancouver`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés Vancouver" : "Custom Coffee Bags Vancouver" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "Vancouver",
  province: "British Columbia",
  eyebrow: "Custom Coffee Bags — Vancouver",
  headline: "Custom coffee bags for Vancouver brands. Zero minimums.",
  subheadline:
    "Vancouver's coffee culture is world class. Your branded coffee should be too — with no minimums and full design included.",
  bodyIntro:
    "From Gastown restaurants to Coal Harbour hotels, from Main Street boutiques to Kitsilano wellness brands — Vancouver businesses understand quality and sustainability better than almost anywhere. EZPZ ships custom branded specialty coffee from our Montreal roastery to Vancouver in 7 to 10 business days. Our 100% traceable sourcing aligns perfectly with Vancouver's values-driven consumer culture.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-vancouver",
  howItWorks: [
    {
      n: "01",
      title: "Design your bag online",
      body: "Use our online tool to upload your logo, add your brand name or message, and choose your packaging style. Takes under 10 minutes from anywhere in Vancouver.",
    },
    {
      n: "02",
      title: "Choose your coffee",
      body: "Select from our traceable specialty coffees. Light, medium, or dark roast — from Ethiopia, Colombia, Brazil, and more. We match the quality Vancouver expects.",
    },
    {
      n: "03",
      title: "We roast fresh in Montreal",
      body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum quantity required.",
    },
    {
      n: "04",
      title: "Delivered to Vancouver",
      body: "We ship directly to your Vancouver address within 7 to 10 business days from order confirmation. Fully tracked, coast to coast.",
    },
  ],
  whyPoints: [
    {
      n: "01",
      title: "The only true zero minimum in Canada",
      body: "EZPZ is the only Canadian custom coffee supplier with a genuine zero minimum order. Order one bag to test your concept. Scale when you are ready.",
    },
    {
      n: "02",
      title: "Design included — no exceptions",
      body: "Full custom bag design is included in every order at no extra cost. Your logo, your aesthetic, your brand — handled by our team without additional fees.",
    },
    {
      n: "03",
      title: "Traceable sourcing that matches Vancouver values",
      body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Vancouver consumers care deeply about where their coffee comes from — our transparency delivers on that.",
    },
    {
      n: "04",
      title: "Ships coast to coast reliably",
      body: "From our Montreal roastery to your Vancouver door in 7 to 10 business days. Tracked, reliable, and just as fast as local suppliers without the minimum requirements.",
    },
  ],
  whoWeServe: [
    {
      title: "Restaurants & Gastown Dining",
      body: "From Gastown bistros to Coal Harbour waterfront restaurants — custom branded coffee adds a premium touchpoint that keeps your brand on the counter long after dinner.",
    },
    {
      title: "Boutique Hotels & Lodges",
      body: "Vancouver's boutique hotel scene demands premium experiences. A custom coffee bag in every room tells guests you care about every detail of their stay.",
    },
    {
      title: "Wellness Brands & Studios",
      body: "Kitsilano yoga studios, Main Street wellness brands, and Yaletown fitness clubs use custom branded coffee to build a daily ritual their community returns to.",
    },
    {
      title: "Sustainable & Lifestyle Brands",
      body: "Vancouver's values-driven retail and lifestyle sector chooses EZPZ because our traceable, specialty-grade coffee aligns with the sustainability story your brand already tells.",
    },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Vancouver in 7 to 10 business days via tracked Canada Post or courier. First orders take 2 to 3 weeks total from design approval to delivery. Repeat orders ship faster since your design is already saved. We deliver to all Vancouver neighbourhoods — Gastown, Yaletown, Kitsilano, Main Street, Commercial Drive, Coal Harbour — as well as Burnaby, Surrey, Richmond, and the rest of Metro Vancouver. For volume orders or retail distribution, contact us for bulk pricing.",
  relatedCities: [
    { city: "Victoria", href: "/en/custom-coffee-bags-victoria" },
    { city: "Kelowna", href: "/en/custom-coffee-bags-kelowna" },
    { city: "Calgary", href: "/en/custom-coffee-bags-calgary" },
    { city: "Edmonton", href: "/en/custom-coffee-bags-edmonton" },
    { city: "Toronto", href: "/en/custom-coffee-bags-toronto" },
    { city: "Montreal", href: "/en/custom-coffee-bags-montreal" },
  ],
  faq: [
    {
      q: "How long does shipping from Montreal to Vancouver take?",
      a: "Vancouver orders ship from our Montreal roastery via tracked Canada Post or courier and arrive in 7 to 10 business days from order confirmation. First-time orders take 2 to 3 weeks total (design approval plus roast and ship). Repeat orders are faster since your design is already saved and ready to go.",
    },
    {
      q: "What makes EZPZ different for Vancouver's sustainability-conscious market?",
      a: "Our fully traceable specialty coffee sourcing aligns directly with Vancouver's values-driven consumer culture. Every origin is documented to the farm or cooperative level — no vague 'blend' labelling, no mystery sourcing. We source only 80+ SCA specialty grade coffees, roasted fresh to order. Vancouver consumers care about where their coffee comes from, and our transparency delivers on that expectation.",
    },
    {
      q: "Do you ship to all Metro Vancouver neighbourhoods?",
      a: "Yes — we deliver to all Vancouver addresses including Gastown, Yaletown, Kitsilano, Main Street, Commercial Drive, Coal Harbour, and East Vancouver. We also ship to Burnaby, Surrey, Richmond, North Vancouver, West Vancouver, Langley, and Coquitlam. For retail or hospitality distribution across Metro Vancouver, contact us for volume pricing.",
    },
  ],
};


const frData: CityPageData = {
  city: "Vancouver", province: "Colombie-Britannique",
  eyebrow: "Sacs de café personnalisés — Vancouver",
  headline: "Sacs de café personnalisés pour les marques de Vancouver. Aucun minimum.",
  subheadline: "La culture café de Vancouver est de classe mondiale. Votre café de marque devrait l'être aussi. Aucun minimum, design inclus.",
  bodyIntro: "Des restaurants de Gastown aux hôtels de Coal Harbour, des boutiques de Main Street aux marques de bien-être de Kitsilano, les entreprises de Vancouver comprennent la qualité et la durabilité mieux que presque partout ailleurs. EZPZ livre des sacs de café de spécialité personnalisés depuis notre torréfacteur montréalais jusqu'à Vancouver en 7 à 10 jours ouvrables. Notre sourçage 100 % traçable correspond parfaitement à la culture de consommation axée sur les valeurs de Vancouver.",
  deliveryTime: "7 à 10 jours ouvrables",
  canonicalPath: "/custom-coffee-bags-vancouver",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez votre nom de marque ou message, et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à Vancouver", body: "Nous livrons directement à votre adresse à Vancouver en 7 à 10 jours ouvrables après confirmation de la commande. Entièrement suivi." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum de commande", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum." },
    { n: "02", title: "Design personnalisé complet inclus", body: "Votre logo, couleurs de marque et message, pris en charge par notre équipe sans frais supplémentaires. Aucun frais de designer ni fichiers requis." },
    { n: "03", title: "Café de grade spécialité", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables. Chaque sachet est torréfié frais à Montréal à la commande." },
    { n: "04", title: "Sourçage traçable en accord avec les valeurs de Vancouver", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables. Les consommateurs de Vancouver se soucient profondément de la provenance de leur café. Notre transparence répond à cette attente." },
  ],
  whoWeServe: [
    { title: "Restaurants et gastronomie de Gastown", body: "Des bistros de Gastown aux restaurants en bord de mer de Coal Harbour, le café personnalisé ajoute un point de contact premium qui garde votre marque sur le comptoir bien après le dîner." },
    { title: "Hôtels-boutiques et lodges", body: "La scène des hôtels-boutiques de Vancouver exige des expériences premium. Un sachet de café personnalisé dans chaque chambre dit à vos clients que vous vous souciez de chaque détail de leur séjour." },
    { title: "Marques de bien-être et studios", body: "Les studios de yoga de Kitsilano, les marques de bien-être de Main Street et les clubs de fitness de Yaletown utilisent le café personnalisé pour bâtir un rituel quotidien auquel leur communauté revient." },
    { title: "Marques durables et de mode de vie", body: "Le secteur de détail et de mode de vie axé sur les valeurs de Vancouver choisit EZPZ parce que notre café de spécialité traçable s'aligne avec l'histoire de durabilité que votre marque raconte déjà." },
  ],
  deliveryBody: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Vancouver en 7 à 10 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides. Nous livrons dans tous les quartiers de Vancouver : Gastown, Yaletown, Kitsilano, Main Street, Commercial Drive, Coal Harbour, ainsi qu'à Burnaby, Surrey, Richmond et tout le Grand Vancouver.",
  relatedCities: [
    { city: "Victoria", href: "/fr/custom-coffee-bags-victoria" },
    { city: "Kelowna", href: "/fr/custom-coffee-bags-kelowna" },
    { city: "Calgary", href: "/fr/custom-coffee-bags-calgary" },
    { city: "Edmonton", href: "/fr/custom-coffee-bags-edmonton" },
    { city: "Toronto", href: "/fr/custom-coffee-bags-toronto" },
    { city: "Montréal", href: "/fr/custom-coffee-bags-montreal" },
  ],
  faq: [
    { q: "Combien de temps prend la livraison de Montréal à Vancouver ?", a: "Les commandes de Vancouver sont expédiées depuis notre torréfacteur montréalais par Postes Canada ou messagerie suivie et arrivent en 7 à 10 jours ouvrables après confirmation. Les premières commandes prennent 2 à 3 semaines au total. Les commandes répétées sont plus rapides." },
    { q: "En quoi EZPZ se distingue-t-il pour le marché de Vancouver axé sur la durabilité ?", a: "Notre sourçage de café de spécialité entièrement traçable correspond directement à la culture de consommation axée sur les valeurs de Vancouver. Chaque origine est documentée jusqu'à la ferme ou la coopérative. Nous sourçons uniquement des cafés SCA 80+ de spécialité, torréfiés frais à la commande." },
    { q: "Livrez-vous dans tous les quartiers du Grand Vancouver ?", a: "Oui. Nous livrons à toutes les adresses de Vancouver : Gastown, Yaletown, Kitsilano, Main Street, Commercial Drive et Coal Harbour. Nous livrons aussi à Burnaby, Surrey, Richmond, North Vancouver, West Vancouver, Langley et Coquitlam." },
  ],
};

const VancouverPage = () => <CityPage data={data} frData={frData} />;
export default VancouverPage;
