import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés Mississauga | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags Mississauga | No Minimum Order | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les entreprises de Mississauga, livrés en 5 à 7 jours. Aucun minimum de commande, design inclus. Les marques de Mississauga choisissent EZPZ." : "Custom coffee bags for Mississauga businesses, shipped in 5–7 days. No minimum order, full design included. Mississauga brands choose EZPZ for specialty coffee.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-mississauga`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-mississauga",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-mississauga",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-mississauga",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-mississauga`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés Mississauga" : "Custom Coffee Bags Mississauga" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "Mississauga",
  province: "Ontario",
  eyebrow: "Custom Coffee Bags — Mississauga",
  headline: "Custom coffee bags for Mississauga brands. Zero minimums.",
  subheadline: "Mississauga's restaurants, corporate offices, and retailers trust EZPZ for specialty branded coffee — no minimums, full design included.",
  bodyIntro:
    "From Port Credit's waterfront restaurant strip to the boutique shops of Streetsville Village, from corporate towers in the Square One area to the financial services district along Hurontario — Mississauga is one of Canada's most economically active mid-size cities. EZPZ ships custom branded specialty coffee from Montreal to Mississauga in 5 to 7 business days. No minimum order. Full custom design included. Zero risk to try.",
  deliveryTime: "5 to 7 business days",
  canonicalPath: "/custom-coffee-bags-mississauga",
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your brand name or message, and choose your packaging style. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to Mississauga", body: "We ship directly to your Mississauga address within 5 to 7 business days from order confirmation. Fully tracked." },
  ],
  whyPoints: [
    { n: "01", title: "No minimum order", body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Perfect for any business size." },
    { n: "02", title: "Full custom design included", body: "Your logo, brand colors, and messaging — handled by our team at no extra cost. No designer fees or print-ready files required." },
    { n: "03", title: "Specialty grade coffee", body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Every bag is roasted fresh in Montreal to order." },
    { n: "04", title: "Built for Mississauga's corporate market", body: "From Square One-area headquarters to Port Credit waterfront restaurants — EZPZ serves Mississauga's full business spectrum with the same no-minimum, premium-quality approach." },
  ],
  whoWeServe: [
    { title: "Restaurants & Port Credit Dining", body: "Port Credit waterfront restaurants, Streetsville bistros, and Square One-area eateries add custom branded coffee that keeps their brand visible in customers' daily routines." },
    { title: "Corporate Offices & Financial Services", body: "Mississauga's Hurontario corridor, Erin Mills corporate parks, and financial services firms use EZPZ for premium branded client gifts and office hospitality." },
    { title: "Hotels & Event Venues", body: "Mississauga hotels, Pearson Airport-adjacent properties, and conference centres brand their coffee amenities with EZPZ custom bags." },
    { title: "Retailers & Lifestyle Brands", body: "Streetsville boutiques, Port Credit lifestyle shops, and Erin Mills retailers add custom branded coffee as a high-margin product that resonates with their customers." },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Mississauga in 5 to 7 business days via tracked Canada Post or courier. We deliver to all Mississauga areas including Port Credit, Streetsville, Meadowvale, Erin Mills, City Centre, and Lakeview. First orders take 2 to 3 weeks total from design approval.",
  relatedCities: [
    { city: "Toronto", href: "/en/custom-coffee-bags-toronto" },
    { city: "Brampton", href: "/en/custom-coffee-bags-brampton" },
  ],
  faq: [
    {
      q: "How long does delivery to Mississauga take from Montreal?",
      a: "Mississauga orders ship from Montreal in 5 to 7 business days via tracked courier. We deliver to Port Credit, Streetsville, Meadowvale, Erin Mills, City Centre, Square One area, Clarkson, and all Mississauga postal codes. First-time orders take 2 to 3 weeks total from design approval. Repeat orders are faster since your design is saved.",
    },
    {
      q: "What Mississauga industries use branded coffee the most?",
      a: "Corporate offices near Pearson Airport and along the Hurontario corridor, Port Credit restaurants and waterfront dining, Square One-area retailers, catering companies across Peel Region, and hotel properties throughout Mississauga are the strongest users of custom branded coffee. The airport corporate cluster is especially active for executive gifting.",
    },
    {
      q: "Is there any minimum order for Mississauga businesses?",
      a: "No minimum, ever. Whether you need 5 bags for a key client meeting or 5,000 for an annual gifting program, EZPZ serves Mississauga businesses at any scale. For orders of 100 bags or more, contact us for volume pricing and a custom quote.",
    },
  ],
};


const frData: CityPageData = {
  city: "Mississauga", province: "Ontario",
  eyebrow: "Sacs de café personnalisés — Mississauga",
  headline: "Sacs de café personnalisés pour les marques de Mississauga. Aucun minimum.",
  subheadline: "Les restaurants, hôtels et entreprises corporatives de Mississauga font confiance à EZPZ pour le café de spécialité de marque. Aucun minimum, design inclus.",
  bodyIntro: "Des restaurants haut de gamme de Port Credit aux centres d'affaires de Square One, de la scène gastronomique animée de Streetsville aux bureaux corporatifs de Mississauga Road, Mississauga est un marché d'affaires mature et sophistiqué. EZPZ livre des sacs de café de spécialité personnalisés depuis Montréal jusqu'à Mississauga en 5 à 7 jours ouvrables. Aucun minimum. Design complet inclus.",
  deliveryTime: "5 à 7 jours ouvrables",
  canonicalPath: "/custom-coffee-bags-mississauga",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez votre nom de marque ou message, et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à Mississauga", body: "Nous livrons directement à votre adresse à Mississauga en 5 à 7 jours ouvrables après confirmation de la commande. Entièrement suivi." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum de commande", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum." },
    { n: "02", title: "Design personnalisé complet inclus", body: "Votre logo, couleurs de marque et message, pris en charge par notre équipe sans frais supplémentaires. Aucun frais de designer ni fichiers requis." },
    { n: "03", title: "Café de grade spécialité", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables. Chaque sachet est torréfié frais à Montréal à la commande." },
    { n: "04", title: "Conçu pour le marché corporatif et gastronomique de Mississauga", body: "De Port Credit aux centres d'affaires de Square One, EZPZ livre un café de marque premium qui résonne avec le marché exigeant de Mississauga." },
  ],
  whoWeServe: [
    { title: "Restaurants et Port Credit", body: "Les restaurants de Port Credit, les bistros de Streetsville et les cafés du centre-ville de Mississauga utilisent le café personnalisé pour garder leur marque visible dans les cuisines de leurs clients." },
    { title: "Hôtels et hébergements d'affaires", body: "Les hôtels d'affaires de Mississauga personnalisent leur café en chambre pour offrir une expérience client mémorable." },
    { title: "Bureaux corporatifs et sièges sociaux", body: "Les sièges sociaux et firmes professionnelles de Mississauga utilisent EZPZ pour des cadeaux de café de marque premium qui font forte impression sur les clients." },
    { title: "Détaillants et boutiques", body: "Les boutiques indépendantes de Mississauga ajoutent le café personnalisé comme produit à forte marge." },
  ],
  deliveryBody: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Mississauga en 5 à 7 jours ouvrables par Postes Canada ou messagerie suivie. Nous livrons dans tous les quartiers de Mississauga : Port Credit, Streetsville, Meadowvale, Square One et les environs. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  relatedCities: [
    { city: "Toronto", href: "/fr/custom-coffee-bags-toronto" },
    { city: "Brampton", href: "/fr/custom-coffee-bags-brampton" },
  ],
  faq: [
    { q: "Combien de temps prend la livraison de Montréal à Mississauga ?", a: "Les commandes de Mississauga arrivent en 5 à 7 jours ouvrables. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design." },
    { q: "Quelles industries de Mississauga utilisent le café personnalisé ?", a: "Les restaurants de Port Credit, les hôtels d'affaires, les sièges sociaux et les firmes professionnelles de Mississauga sont les utilisateurs les plus actifs." },
    { q: "Y a-t-il un minimum de commande pour Mississauga ?", a: "Aucun minimum. EZPZ s'adapte à tout volume avec la même politique sans minimum et design inclus." },
  ],
};

const MississaugaPage = () => <CityPage data={data} frData={frData} />;
export default MississaugaPage;
