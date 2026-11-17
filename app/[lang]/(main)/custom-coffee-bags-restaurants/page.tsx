import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";

  const title = isFr
    ? "Sacs de café personnalisés pour restaurants | Aucun minimum | EZPZ Coffee"
    : "Custom Coffee Bags for Restaurants | No Minimum | EZPZ Coffee";
  const description = isFr
    ? "Sacs de café personnalisés pour les restaurants. Transformez un repas en ritual matinal mémorable. Aucun minimum de commande, design inclus. Les restaurants du Canada et des États-Unis choisissent EZPZ."
    : "Custom branded coffee bags for restaurants. Turn a meal into a lasting morning ritual. No minimum order, full design included. Restaurants across Canada and the USA choose EZPZ.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-restaurants`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-restaurants",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-restaurants",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-restaurants",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-restaurants`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés pour restaurants" : "Custom Coffee Bags for Restaurants" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: IndustryPageData = {
  industry: "Restaurants",
  eyebrow: "Custom Coffee for Restaurants",
  headline: "Put your restaurant's name on the coffee your guests take home.",
  subheadline: "A bag of specialty coffee with your restaurant's branding sits on your guest's kitchen counter for weeks — a daily reminder of the experience you created for them.",
  intro: "Branded coffee turns a meal into a lasting memory. When a restaurant guest takes a bag home, they brew it every morning and think of your space, your food, your hospitality. That kind of brand recall is impossible to buy with advertising. Montreal and Toronto restaurants are waking up to branded coffee as a retail product, a corporate gift, and a genuine differentiator on the dining experience. The economics are compelling: a 250g bag of specialty coffee that costs $8 to produce can retail for $24 to $28 at a restaurant counter with no effort and no inventory risk — because EZPZ has no minimum order. You never over-order. You never get stuck with unsold stock. Whether you run a James Beard-caliber fine dining room or a beloved neighborhood bistro, the product works the same way: beautifully designed packaging with your logo, your name, and your story, filled with traceable 80+ SCA specialty coffee roasted fresh in Montreal. It ships directly to your restaurant in 3 to 10 business days across Canada, 7 to 14 business days to the USA.",
  whoOrders: [
    { title: "Fine dining restaurants", body: "High-end restaurants add custom branded coffee as a premium take-home product and a corporate event gift for private dining clients. It matches the quality positioning of the menu." },
    { title: "Casual bistros & neighbourhood spots", body: "Neighbourhood bistros sell branded coffee at the counter as merchandise. It's a natural extension of the community identity that their regulars love to take home and gift to friends." },
    { title: "Brunch restaurants", body: "Brunch restaurants are a natural fit — their guests are already coffee-obsessed. A branded bag sold at the register turns every Sunday breakfast into a week of at-home brand visibility." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your logo, add your restaurant name, and choose your packaging style. Our online tool takes under 10 minutes and requires no designer." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast. We'll suggest origins that match your restaurant's flavor profile and story." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered to your restaurant", body: "We ship directly to your restaurant address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "High retail margins with zero inventory risk", body: "A bag that costs $8 to produce retails for $24–$28 at your counter. No minimum means you never over-order. Test with 10 bags. Scale when they sell out." },
    { n: "02", title: "Daily brand visibility at home", body: "Every morning your guest brews your coffee, they see your name and remember your restaurant. No advertising achieves that kind of organic daily recall." },
    { n: "03", title: "A unique menu add-on and gift option", body: "List it on your menu as a take-home product. Offer it as a corporate event gift for private dining clients. It's a conversation piece that enhances your brand story." },
    { n: "04", title: "Corporate event and private dining gifting", body: "Restaurants that host private events can include branded coffee as a premium take-home for corporate clients — a gift they'll actually use and remember." },
  ],
  testimonial: {
    quote: "We sell them at the counter for $24 a bag and they fly out the door every Sunday morning after brunch. Our regulars buy one every few weeks.",
    author: "Marisol T.",
    role: "Owner, neighbourhood brunch restaurant, Montreal",
  },
  canonicalPath: "/custom-coffee-bags-restaurants",
};

const frData: IndustryPageData = {
  industry: "Restaurants",
  eyebrow: "Café personnalisé pour les restaurants",
  headline: "Mettez le nom de votre restaurant sur le café que vos clients rapportent chez eux.",
  subheadline: "Un sachet de café de spécialité à votre image trône sur le comptoir de cuisine de vos clients pendant des semaines : un rappel quotidien de l'expérience que vous avez créée pour eux.",
  intro: "Le café personnalisé transforme un repas en souvenir durable. Quand un client de votre restaurant rapporte un sachet chez lui, il le prépare chaque matin en pensant à votre salle, à votre cuisine, à votre hospitalité. Ce type de rappel de marque est impossible à acheter avec de la publicité. Les restaurants de Montréal et de Toronto découvrent le café personnalisé comme produit de détail, cadeau corporatif et véritable différenciateur de l'expérience gastronomique. L'économie est convaincante : un sachet de 250 g de café de spécialité qui coûte 8 $ à produire peut se vendre 24 à 28 $ sur le comptoir d'un restaurant sans effort et sans risque d'inventaire, puisque EZPZ n'a aucun minimum de commande. Vous ne commandez jamais trop. Vous ne vous retrouvez jamais avec des stocks invendus. Que vous gériez une salle gastronomique ou un bistro de quartier bien-aimé, le produit fonctionne de la même façon : un emballage magnifiquement conçu avec votre logo, votre nom et votre histoire, rempli de café de spécialité traçable SCA 80+ torréfié frais à Montréal. Livré directement à votre restaurant en 3 à 10 jours ouvrables au Canada, 7 à 14 jours ouvrables aux États-Unis.",
  whoOrders: [
    { title: "Restaurants gastronomiques", body: "Les restaurants haut de gamme ajoutent le café personnalisé comme produit à emporter premium et cadeau corporatif pour leurs clients de salles privées. Cela correspond au positionnement qualité du menu." },
    { title: "Bistros et restaurants de quartier", body: "Les bistros de quartier vendent le café personnalisé au comptoir comme merchandise. C'est un prolongement naturel de l'identité communautaire que leurs habitués adorent ramener à la maison et offrir à leurs proches." },
    { title: "Restaurants brunch", body: "Les restaurants brunch sont un choix naturel, leurs clients sont déjà passionnés de café. Un sachet vendu à la caisse transforme chaque petit-déjeuner du dimanche en une semaine de visibilité de marque à la maison." },
  ],
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, ajoutez le nom de votre restaurant et choisissez votre style d'emballage. Notre outil en ligne prend moins de 10 minutes et ne requiert aucun designer." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée. Nous vous suggérons des origines correspondant au profil de saveur et à l'histoire de votre restaurant." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à votre restaurant", body: "Nous livrons directement à l'adresse de votre restaurant. Canada : 3 à 10 jours ouvrables. États-Unis : 7 à 14 jours ouvrables. Entièrement suivi." },
  ],
  benefits: [
    { n: "01", title: "Marges de détail élevées sans risque d'inventaire", body: "Un sachet qui coûte 8 $ à produire se vend 24 à 28 $ sur votre comptoir. Aucun minimum signifie que vous ne commandez jamais trop. Testez avec 10 sacs. Développez quand ils sont vendus." },
    { n: "02", title: "Visibilité de marque quotidienne à la maison", body: "Chaque matin où votre client prépare votre café, il voit votre nom et se souvient de votre restaurant. Aucune publicité n'atteint ce type de rappel quotidien organique." },
    { n: "03", title: "Un ajout unique au menu et une option cadeau", body: "Inscrivez-le à votre menu comme produit à emporter. Offrez-le comme cadeau corporatif pour vos clients de salles privées. C'est un sujet de conversation qui enrichit l'histoire de votre marque." },
    { n: "04", title: "Cadeaux pour événements corporatifs et repas privés", body: "Les restaurants qui accueillent des événements privés peuvent inclure le café personnalisé comme cadeau à emporter premium pour les clients corporatifs, un cadeau qu'ils utiliseront vraiment et dont ils se souviendront." },
  ],
  testimonial: {
    quote: "On les vend au comptoir à 24 $ le sachet et ils s'envolent chaque dimanche matin après le brunch. Nos habitués en achètent un toutes les quelques semaines.",
    author: "Marisol T.",
    role: "Propriétaire, restaurant brunch de quartier, Montréal",
  },
  canonicalPath: "/custom-coffee-bags-restaurants",
};

const RestaurantsPage = () => <IndustryPage data={data} frData={frData} showWholesaleLink />;
export default RestaurantsPage;
