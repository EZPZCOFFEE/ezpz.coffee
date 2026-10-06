import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés Saskatoon | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags Saskatoon | No Minimum Order | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les entreprises de Saskatoon, livrés en 7 à 10 jours. Aucun minimum de commande, design inclus. Les marques de Saskatoon choisissent EZPZ." : "Custom coffee bags for Saskatoon businesses, shipped in 7–10 days. No minimum order, full design included. Saskatoon brands choose EZPZ for specialty coffee.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-saskatoon`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-bags-saskatoon",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-saskatoon",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-saskatoon`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés Saskatoon" : "Custom Coffee Bags Saskatoon" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "Saskatoon",
  province: "Saskatchewan",
  eyebrow: "Custom Coffee Bags — Saskatoon",
  headline: "Custom coffee bags for Saskatoon brands. Zero minimums.",
  subheadline: "Saskatoon's restaurants, university community, and agriculture sector businesses trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Broadway Avenue's vibrant café and restaurant strip to the River Landing development's waterfront dining, from the Riversdale arts district's creative studios to the University of Saskatchewan's campus community — Saskatoon is a prairie city with genuine sophistication. EZPZ ships custom branded specialty coffee from our Montreal roastery to Saskatoon in 7 to 10 business days. No minimum order. Full custom design included.",
  deliveryTime: "7 to 10 business days",
  canonicalPath: "/custom-coffee-bags-saskatoon",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Saskatoon", body: "We ship directly to your Saskatoon address within 7 to 10 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for independent businesses at any scale." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Saskatoon's university market values authenticity — our traceability story delivers it." },
    { n: "04", title: "Built for Saskatoon's agriculture and university sectors", body: "From agriculture businesses wanting to tell a farm-to-cup story to University of Saskatchewan campus cafés building brand loyalty — EZPZ serves Saskatoon's most distinctive market segments." },
  ],
  whoWeServe: [
    { title: "Restaurants & Broadway Avenue", body: "Broadway Avenue restaurants, River Landing dining destinations, and Riversdale cafés add custom branded coffee to extend their brand into customers' daily morning routines." },
    { title: "Agriculture & Farm Brands", body: "Saskatchewan agricultural businesses, farm-to-table operators, and ag-tech companies use EZPZ custom coffee as a premium branded gift for clients and partners." },
    { title: "University & Campus Businesses", body: "University of Saskatchewan-area cafés, student businesses, and campus organizations use custom branded coffee to build community and lasting brand recognition." },
    { title: "Retailers & Boutiques", body: "Broadway Avenue boutiques, Riversdale independent shops, and downtown Saskatoon retailers add custom branded coffee as a distinctive, high-margin product." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Saskatoon in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Saskatoon areas including Broadway Avenue, Riversdale, River Landing, Sutherland, and surrounding communities. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Winnipeg", href: "/en/custom-coffee-bags-winnipeg" },
    { city: "Regina", href: "/en/custom-coffee-bags-regina" },
  ],
  faq: [
    {
      q: "How long does shipping from Montreal to Saskatoon take?",
      a: "Saskatoon orders ship from our Montreal roastery and arrive in 7 to 10 business days via tracked Canada Post or courier. We deliver to all Saskatoon areas including Broadway Avenue, Riversdale, River Landing, Sutherland, and surrounding communities. First-time orders take 2 to 3 weeks total from design approval.",
    },
    {
      q: "What Saskatoon businesses benefit most from custom coffee bags?",
      a: "Broadway Avenue restaurants and music venues, the River Landing food and arts district, corporate offices downtown, University of Saskatchewan alumni and departmental gift programs, and agriculture-sector companies looking for premium executive gifts are the most active EZPZ users in Saskatoon.",
    },
    {
      q: "Is EZPZ the only no-minimum custom coffee option for Saskatoon?",
      a: "To our knowledge, yes — EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum order that serves Saskatoon. Most competitors require minimums of 50 to 100 bags and charge setup fees. We have no minimums and include full design at no extra cost, regardless of order size.",
    },
  ],
};


const frData: CityPageData = {
  city: "Saskatoon", province: "Saskatchewan",
  eyebrow: "Sacs de café personnalisés — Saskatoon",
  headline: "Sacs de café personnalisés pour les marques de Saskatoon. Aucun minimum.",
  subheadline: "Les restaurants, hôtels et entreprises créatives de Saskatoon font confiance à EZPZ pour le café de spécialité de marque. Aucun minimum, design inclus.",
  bodyIntro: "Des restaurants animés de Broadway Avenue aux boutiques du marché Farmers' Market, des galeries du quartier River Landing aux entreprises agricoles et technologiques du centre-ville, Saskatoon est une ville qui allie fierté des prairies et ambitions modernes. EZPZ livre des sacs de café de spécialité personnalisés depuis Montréal jusqu'à Saskatoon en 7 à 10 jours ouvrables. Aucun minimum. Design complet inclus.",
  deliveryTime: "7 à 10 jours ouvrables",
  canonicalPath: "/custom-coffee-bags-saskatoon",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez votre nom de marque ou message, et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à Saskatoon", body: "Nous livrons directement à votre adresse à Saskatoon en 7 à 10 jours ouvrables après confirmation de la commande. Entièrement suivi." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum de commande", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum." },
    { n: "02", title: "Design personnalisé complet inclus", body: "Votre logo, couleurs de marque et message, pris en charge par notre équipe sans frais supplémentaires. Aucun frais de designer ni fichiers requis." },
    { n: "03", title: "Café de grade spécialité", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables. Chaque sachet est torréfié frais à Montréal à la commande." },
    { n: "04", title: "Conçu pour le marché créatif et corporatif de Saskatoon", body: "De Broadway Avenue au River Landing, EZPZ livre un café de marque premium qui résonne avec le marché exigeant de Saskatoon." },
  ],
  whoWeServe: [
    { title: "Restaurants et Broadway Avenue", body: "Les restaurants de Broadway Avenue, les bistros du River Landing et les cafés du centre-ville de Saskatoon utilisent le café personnalisé pour garder leur marque visible." },
    { title: "Hôtels et hébergements", body: "Les hôtels du centre-ville de Saskatoon personnalisent leur expérience café en chambre." },
    { title: "Arts et organisations culturelles", body: "Les galeries, salles de spectacle et organisations artistiques de Saskatoon utilisent le café personnalisé comme cadeau créatif pour leurs mécènes." },
    { title: "Corporatif et agribusiness", body: "Les entreprises agricoles, technologiques et professionnelles de Saskatoon utilisent EZPZ pour des cadeaux de café de marque premium." },
  ],
  deliveryBody: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Saskatoon en 7 à 10 jours ouvrables par Postes Canada ou messagerie suivie. Nous livrons dans tous les quartiers de Saskatoon. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  relatedCities: [
    { city: "Regina", href: "/fr/custom-coffee-bags-regina" },
    { city: "Calgary", href: "/fr/custom-coffee-bags-calgary" },
  ],
  faq: [
    { q: "Combien de temps prend la livraison de Montréal à Saskatoon ?", a: "Les commandes de Saskatoon arrivent en 7 à 10 jours ouvrables. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design." },
    { q: "Quelles industries de Saskatoon utilisent le café personnalisé ?", a: "Les restaurants de Broadway Avenue, les hôtels du centre-ville, les organisations artistiques du River Landing et les entreprises agricoles et technologiques sont les utilisateurs les plus actifs." },
    { q: "Y a-t-il un minimum de commande pour Saskatoon ?", a: "Aucun minimum. EZPZ s'adapte à tout volume avec la même politique sans minimum et design inclus." },
  ],
};

const SaskatoonPage = () => <CityPage data={data} frData={frData} />;
export default SaskatoonPage;
