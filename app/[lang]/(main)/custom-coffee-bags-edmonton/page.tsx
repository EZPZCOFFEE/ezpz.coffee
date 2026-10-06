import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés Edmonton | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags Edmonton | No Minimum Order | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les entreprises d'Edmonton, livrés en 7 à 10 jours. Aucun minimum de commande, design inclus. Les marques d'Edmonton choisissent EZPZ pour le café de spécialité." : "Custom coffee bags for Edmonton businesses, shipped in 7–10 days. No minimum order, full design included. Edmonton brands choose EZPZ for specialty coffee.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-edmonton`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-bags-edmonton",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-edmonton",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-edmonton`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés Edmonton" : "Custom Coffee Bags Edmonton" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "Edmonton",
  province: "Alberta",
  eyebrow: "Custom Coffee Bags — Edmonton",
  headline: "Custom coffee bags for Edmonton brands. Zero minimums.",
  subheadline: "Edmonton's restaurants, arts community, and energy sector businesses trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Whyte Avenue's beloved restaurant and bar strip to the independent galleries and studios of 124 Street, from Old Strathcona's farmers' market culture to the oil sector towers of downtown — Edmonton is a city of genuine local pride and growing creative identity. EZPZ ships custom branded specialty coffee from our Montreal roastery to Edmonton in 7 to 10 business days. No minimum order. Full custom design always included.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-edmonton",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Edmonton", body: "We ship directly to your Edmonton address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Test your concept risk-free." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Edmonton's discerning consumers appreciate quality — we deliver it." },
    { n: "04", title: "Built for Edmonton's arts and energy sectors", body: "Whether you are gifting to an energy sector client downtown or stocking a 124 Street gallery gift shop, EZPZ delivers a premium branded coffee product that fits either context perfectly." },
  ],
  whoWeServe: [
    { title: "Restaurants & Whyte Avenue Dining", body: "Whyte Avenue restaurants, Old Strathcona pubs, and Garneau cafés add custom branded coffee as a premium touchpoint for their loyal local customer base." },
    { title: "Corporate & Energy Sector", body: "Edmonton's oil companies, engineering firms, and downtown professional services use EZPZ for premium branded coffee gifts that make a strong impression." },
    { title: "Arts Organizations & Galleries", body: "124 Street galleries, Fringe Festival venues, and Edmonton arts organizations use custom coffee as a distinctive, memorable gift for patrons and collaborators." },
    { title: "University & Campus Sector", body: "University of Alberta-area cafés, student businesses, and campus organizations use EZPZ to build a branded coffee product that resonates with their academic community." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Edmonton in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Edmonton areas including Downtown, Whyte Avenue, Old Strathcona, 124 Street, Glenora, Windermere, and surrounding communities. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Calgary", href: "/en/custom-coffee-bags-calgary" },
    { city: "Winnipeg", href: "/en/custom-coffee-bags-winnipeg" },
  ],
  faq: [
    {
      q: "How long does shipping from Montreal to Edmonton take?",
      a: "Edmonton orders ship from our Montreal roastery and arrive in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Edmonton areas including Downtown, Whyte Avenue, Old Strathcona, 124 Street, Glenora, and surrounding communities. First-time orders take 2 to 3 weeks total from design approval.",
    },
    {
      q: "What Edmonton industries use custom branded coffee?",
      a: "Government of Alberta departments, oil and gas support companies, Whyte Avenue restaurants and boutiques, Old Strathcona entertainment venues, 124 Street galleries and shops, and corporate meeting planners across the city are the most active users. Edmonton's combination of government, energy, and arts sectors creates strong demand for premium branded gifts.",
    },
    {
      q: "What coffee origins are most popular with Edmonton businesses?",
      a: "Our Ethiopian Yirgacheffe and Colombian Huila single origins are consistently the most popular for corporate gifting in Alberta — they're bright, balanced, and crowd-pleasing. Our Guatemalan Huehuetenango is also a favourite for clients who prefer a richer, full-bodied cup. We help you choose the right origin for your audience.",
    },
  ],
};


const frData: CityPageData = {
  city: "Edmonton", province: "Alberta",
  eyebrow: "Sacs de café personnalisés — Edmonton",
  headline: "Sacs de café personnalisés pour les marques d'Edmonton. Aucun minimum.",
  subheadline: "Les restaurants, la communauté artistique et les entreprises du secteur énergétique d'Edmonton font confiance à EZPZ pour le café de spécialité de marque. Aucun minimum, design inclus.",
  bodyIntro: "De la populaire bande de restaurants et de bars de Whyte Avenue aux galeries et studios indépendants du 124 Street, de la culture de marché fermier du Vieux Strathcona aux tours pétrolières du centre-ville, Edmonton est une ville de fierté locale authentique et d'identité créative en pleine croissance. EZPZ livre des sacs de café de spécialité personnalisés depuis notre torréfacteur montréalais jusqu'à Edmonton en 7 à 10 jours ouvrables. Aucun minimum de commande. Design personnalisé complet toujours inclus.",
  deliveryTime: "7 à 10 jours ouvrables",
  canonicalPath: "/custom-coffee-bags-edmonton",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez votre nom de marque ou message, et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à Edmonton", body: "Nous livrons directement à votre adresse à Edmonton en 7 à 10 jours ouvrables après confirmation de la commande. Entièrement suivi." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum de commande", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum." },
    { n: "02", title: "Design personnalisé complet inclus", body: "Votre logo, couleurs de marque et message, pris en charge par notre équipe sans frais supplémentaires. Aucun frais de designer ni fichiers requis." },
    { n: "03", title: "Café de grade spécialité", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables. Chaque sachet est torréfié frais à Montréal à la commande." },
    { n: "04", title: "Conçu pour les secteurs artistique et énergétique d'Edmonton", body: "Que vous fassiez des cadeaux à un client du secteur énergétique en centre-ville ou que vous approvisionnez une boutique cadeaux de galerie sur le 124 Street, EZPZ livre un café de marque premium qui convient parfaitement aux deux contextes." },
  ],
  whoWeServe: [
    { title: "Restaurants et gastronomie de Whyte Avenue", body: "Les restaurants de Whyte Avenue, les pubs du Vieux Strathcona et les cafés du Garneau ajoutent le café personnalisé comme point de contact premium pour leur clientèle locale fidèle." },
    { title: "Corporatif et secteur énergétique", body: "Les sociétés pétrolières, firmes d'ingénierie et services professionnels du centre-ville d'Edmonton font confiance à EZPZ pour des cadeaux de café premium qui font forte impression." },
    { title: "Organisations artistiques et galeries", body: "Les galeries du 124 Street, les salles du Fringe Festival et les organisations artistiques d'Edmonton utilisent le café personnalisé comme cadeau distinctif et mémorable pour leurs mécènes et collaborateurs." },
    { title: "Secteur universitaire et campus", body: "Les cafés du secteur Université de l'Alberta, les commerces étudiants et les organisations du campus utilisent EZPZ pour bâtir un café de marque qui résonne avec leur communauté académique." },
  ],
  deliveryBody: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Edmonton en 7 à 10 jours ouvrables par Postes Canada ou messagerie suivie. Nous livrons dans toutes les zones d'Edmonton : centre-ville, Whyte Avenue, Vieux Strathcona, 124 Street, Glenora, Windermere et les communautés environnantes. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  relatedCities: [
    { city: "Calgary", href: "/fr/custom-coffee-bags-calgary" },
    { city: "Winnipeg", href: "/fr/custom-coffee-bags-winnipeg" },
  ],
  faq: [
    { q: "Combien de temps prend la livraison de Montréal à Edmonton ?", a: "Les commandes d'Edmonton arrivent en 7 à 10 jours ouvrables par Postes Canada ou messagerie suivie. Nous livrons dans toutes les zones d'Edmonton : centre-ville, Whyte Avenue, Vieux Strathcona, 124 Street, Glenora et les communautés environnantes. Les premières commandes prennent 2 à 3 semaines." },
    { q: "Quelles industries d'Edmonton utilisent le café personnalisé ?", a: "Les ministères du gouvernement de l'Alberta, les entreprises de soutien au secteur pétrolier, les restaurants et boutiques de Whyte Avenue, les salles de spectacle du Vieux Strathcona, les galeries et commerces du 124 Street utilisent tous EZPZ." },
    { q: "Quelles origines de café sont les plus populaires chez les entreprises d'Edmonton ?", a: "Notre Yirgacheffe éthiopien et notre Huila colombien en single origin sont systématiquement les plus populaires pour les cadeaux corporatifs en Alberta. Notre Huehuetenango guatémaltèque est aussi un favori pour les clients qui préfèrent une tasse plus riche et corsée." },
  ],
};

const EdmontonPage = () => <CityPage data={data} frData={frData} />;
export default EdmontonPage;
