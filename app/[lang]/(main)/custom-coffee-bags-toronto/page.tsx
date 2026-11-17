import type { Metadata } from "next";

import CityPage, { CityPageData } from "../_components/CityPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés Toronto | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags Toronto | No Minimum Order | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les entreprises de Toronto, livrés en 5 à 7 jours depuis Montréal. Aucun minimum de commande, design inclus. Les marques de Toronto font confiance à EZPZ." : "Custom coffee bags for Toronto businesses, shipped in 5–7 days from Montreal. No minimum order, full design included. Toronto brands trust EZPZ.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-toronto`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-toronto",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-toronto",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-toronto",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-toronto`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés Toronto" : "Custom Coffee Bags Toronto" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityPageData = {
  city: "Toronto",
  province: "Ontario",
  eyebrow: "Custom Coffee Bags — Toronto",
  headline: "Custom coffee bags for Toronto brands. Zero minimums.",
  subheadline:
    "Toronto's restaurants, hotels, and retailers trust EZPZ to put their brand on specialty coffee — with no minimums and full design included.",
  bodyIntro:
    "From the King West restaurant corridor to boutique hotels in Yorkville, from Queen Street retailers to Liberty Village creative studios — Toronto businesses compete on brand as much as product. EZPZ ships custom branded coffee bags from Montreal to Toronto typically within 5 to 7 business days. Whether you are launching a new product or scaling an existing brand, zero minimums means zero risk.",
  deliveryTime: "5 to 7 business days",
  canonicalPath: "/custom-coffee-bags-toronto",
  howItWorks: [
    {
      n: "01",
      title: "Design your bag online",
      body: "Use our online tool to upload your logo, add your brand name or message, and choose your packaging style. Takes under 10 minutes from anywhere in Toronto.",
    },
    {
      n: "02",
      title: "Choose your coffee",
      body: "Select from our traceable specialty coffees. Light, medium, or dark roast — from Ethiopia, Colombia, Brazil, and more. We will help you choose if needed.",
    },
    {
      n: "03",
      title: "We roast fresh in Montreal",
      body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum quantity required.",
    },
    {
      n: "04",
      title: "Delivered to Toronto",
      body: "We ship directly to your Toronto address within 5 to 7 business days from order confirmation. Fast, reliable, and fully tracked.",
    },
  ],
  whyPoints: [
    {
      n: "01",
      title: "No minimum order",
      body: "Order one bag or ten thousand. EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum. Test your concept before committing to volume.",
    },
    {
      n: "02",
      title: "Full custom design included",
      body: "Your logo, your colors, your messaging — full bag design is included in every order at no extra cost. No designer fees, no print-ready files required.",
    },
    {
      n: "03",
      title: "Ships fast to Toronto",
      body: "From order confirmation to delivery at your Toronto door in 5 to 7 business days. We ship via tracked carriers so you always know where your order is.",
    },
    {
      n: "04",
      title: "Built for Toronto's competitive market",
      body: "King West, Yorkville, Queen Street, Liberty Village — EZPZ serves businesses across every Toronto neighbourhood and industry. We know what Toronto brands need.",
    },
  ],
  whoWeServe: [
    {
      title: "Restaurants & Hospitality",
      body: "From King West bistros to Distillery District dining — sell your own branded coffee, offer it on your menu, or use it as a signature takeaway gift that keeps your brand visible.",
    },
    {
      title: "Boutique Hotels & B&Bs",
      body: "Yorkville hotels, boutique properties on Jarvis Street, and design-forward stays across Toronto trust EZPZ to brand their in-room coffee experience.",
    },
    {
      title: "Retailers & Concept Stores",
      body: "Queen Street boutiques, Kensington Market shops, and Leslieville retailers add custom branded coffee as a high-margin retail product that drives repeat traffic.",
    },
    {
      title: "Creative Studios & Agencies",
      body: "Liberty Village agencies, media companies, and tech firms in the financial district use branded coffee as a premium client gift and office culture touchpoint.",
    },
  ],
  deliveryBody:
    "EZPZ ships from our Montreal roastery to Toronto in 5 to 7 business days via tracked courier. First orders take 2 to 3 weeks total from design approval to delivery — including the time to roast and pack your order. Repeat orders are faster since your design is already on file. We ship to all Toronto neighbourhoods including downtown, Etobicoke, Scarborough, North York, and the GTA. Need a large order for a chain or multi-location rollout? Contact us for volume pricing and scheduled delivery.",
  relatedCities: [
    { city: "Mississauga", href: "/en/custom-coffee-bags-mississauga" },
    { city: "Hamilton", href: "/en/custom-coffee-bags-hamilton" },
    { city: "Ottawa", href: "/en/custom-coffee-bags-ottawa" },
    { city: "Brampton", href: "/en/custom-coffee-bags-brampton" },
    { city: "London Ontario", href: "/en/custom-coffee-bags-london-ontario" },
    { city: "Montreal", href: "/en/custom-coffee-bags-montreal" },
    { city: "Vancouver", href: "/en/custom-coffee-bags-vancouver" },
  ],
  faq: [
    {
      q: "How long does shipping from Montreal to Toronto take?",
      a: "Once your design is approved and your order is roasted, we ship via tracked courier from Montreal to Toronto. Most Toronto orders arrive within 2 business days of shipping. The total timeline is 5 to 7 business days for repeat orders and 2 to 3 weeks for first-time orders (which includes the roast, pack, and design approval steps).",
    },
    {
      q: "Can I order just one bag to test before committing to volume?",
      a: "Yes — EZPZ is the only custom coffee supplier in Canada with a genuine zero minimum order. You can order a single bag to taste the coffee, see the packaging quality, and validate your concept before scaling up. This is especially valuable for Toronto restaurants and startups testing a new product line.",
    },
    {
      q: "Do you ship to all Toronto neighbourhoods and the GTA?",
      a: "Yes. We ship to all Toronto addresses including King West, Yorkville, the Distillery District, Liberty Village, Queen Street West, Leslieville, Etobicoke, Scarborough, and North York. We also serve the full GTA including Mississauga, Markham, Vaughan, and Brampton. If you have multiple locations, we can ship to each address separately.",
    },
  ],
};


const frData: CityPageData = {
  city: "Toronto", province: "Ontario",
  eyebrow: "Sacs de café personnalisés — Toronto",
  headline: "Sacs de café personnalisés pour les marques de Toronto. Aucun minimum.",
  subheadline: "Les restaurants, hôtels et détaillants de Toronto font confiance à EZPZ pour mettre leur marque sur un café de spécialité. Aucun minimum, design inclus.",
  bodyIntro: "Du corridor de restaurants de King West aux hôtels-boutiques de Yorkville, des détaillants de Queen Street aux studios créatifs de Liberty Village, les entreprises de Toronto se démarquent autant par leur marque que par leurs produits. EZPZ livre des sacs de café personnalisés depuis Montréal jusqu'à Toronto généralement en 5 à 7 jours ouvrables. Que vous lanciez un nouveau produit ou développiez une marque existante, zéro minimum signifie zéro risque.",
  deliveryTime: "5 à 7 jours ouvrables",
  canonicalPath: "/custom-coffee-bags-toronto",
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez votre nom de marque ou message, et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à Toronto", body: "Nous livrons directement à votre adresse à Toronto en 5 à 7 jours ouvrables après confirmation de la commande. Entièrement suivi." },
  ],
  whyPoints: [
    { n: "01", title: "Aucun minimum de commande", body: "Commandez un sachet ou dix mille. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum." },
    { n: "02", title: "Design personnalisé complet inclus", body: "Votre logo, couleurs de marque et message, pris en charge par notre équipe sans frais supplémentaires. Aucun frais de designer ni fichiers requis." },
    { n: "03", title: "Café de grade spécialité", body: "Nous sourçons uniquement des cafés de spécialité SCA 80+ d'origines entièrement traçables. Chaque sachet est torréfié frais à Montréal à la commande." },
    { n: "04", title: "Conçu pour le marché concurrentiel de Toronto", body: "King West, Yorkville, Queen Street, Liberty Village. EZPZ sert les entreprises de tous les quartiers et industries de Toronto. Nous savons ce dont les marques torontoises ont besoin." },
  ],
  whoWeServe: [
    { title: "Restaurants et hospitalité", body: "Des bistros de King West aux tables du Distillery District, vendez votre propre café de marque, offrez-le à votre menu, ou utilisez-le comme cadeau signature qui garde votre marque visible." },
    { title: "Hôtels-boutiques et B&B", body: "Les hôtels de Yorkville, les propriétés-boutiques sur Jarvis Street et les hébergements design à travers Toronto font confiance à EZPZ pour personnaliser leur expérience café en chambre." },
    { title: "Détaillants et concept stores", body: "Les boutiques de Queen Street, les commerces du marché Kensington et les détaillants de Leslieville ajoutent le café personnalisé comme produit à forte marge qui génère du trafic répété." },
    { title: "Studios créatifs et agences", body: "Les agences de Liberty Village, les entreprises médias et les firmes technologiques du quartier financier utilisent le café de marque comme cadeau client premium et point de contact de culture d'entreprise." },
  ],
  deliveryBody: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Toronto en 5 à 7 jours ouvrables par messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier. Nous livrons dans tous les quartiers de Toronto : centre-ville, Etobicoke, Scarborough, North York et le Grand Toronto. Pour une commande importante destinée à plusieurs emplacements, contactez-nous pour les tarifs de volume.",
  relatedCities: [
    { city: "Mississauga", href: "/fr/custom-coffee-bags-mississauga" },
    { city: "Hamilton", href: "/fr/custom-coffee-bags-hamilton" },
    { city: "Ottawa", href: "/fr/custom-coffee-bags-ottawa" },
    { city: "Brampton", href: "/fr/custom-coffee-bags-brampton" },
    { city: "London Ontario", href: "/fr/custom-coffee-bags-london-ontario" },
    { city: "Montréal", href: "/fr/custom-coffee-bags-montreal" },
    { city: "Vancouver", href: "/fr/custom-coffee-bags-vancouver" },
  ],
  faq: [
    { q: "Combien de temps prend la livraison de Montréal à Toronto ?", a: "Une fois votre design approuvé et votre commande torréfiée, nous expédions par messagerie suivie de Montréal à Toronto. La plupart des commandes torontoises arrivent en 2 jours ouvrables après expédition. Le délai total est de 5 à 7 jours ouvrables pour les commandes répétées et de 2 à 3 semaines pour les premières commandes." },
    { q: "Puis-je commander un seul sachet pour tester avant de m'engager sur le volume ?", a: "Oui. EZPZ est le seul fournisseur de café personnalisé au Canada avec un vrai zéro minimum de commande. Vous pouvez commander un seul sachet pour goûter le café, voir la qualité de l'emballage et valider votre concept avant de passer à l'échelle." },
    { q: "Livrez-vous dans tous les quartiers de Toronto et le Grand Toronto ?", a: "Oui. Nous livrons à toutes les adresses de Toronto : King West, Yorkville, Distillery District, Liberty Village, Queen Street West, Leslieville, Etobicoke, Scarborough et North York. Nous desservons aussi tout le Grand Toronto : Mississauga, Markham, Vaughan et Brampton." },
  ],
};

const TorontoPage = () => <CityPage data={data} frData={frData} />;
export default TorontoPage;
