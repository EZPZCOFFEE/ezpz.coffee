import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés pour gyms | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags for Gyms | No Minimum | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour gyms et studios de fitness. Alimentez vos membres avec le café de spécialité de votre marque. Aucun minimum, design inclus." : "Custom branded coffee bags for gyms and fitness studios. Fuel your members with your brand's specialty coffee. No minimum order, full design included. Gyms across Canada and the USA choose EZPZ.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-gyms`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-gyms",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-gyms",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-gyms",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-gyms`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés pour gyms" : "Custom Coffee Bags for Gyms" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: IndustryPageData = {
  industry: "Gyms",
  eyebrow: "Custom Coffee for Gyms",
  headline: "Fuel your members with your brand's own specialty coffee.",
  subheadline: "Gym members are health-conscious, brand-loyal, and looking for products that align with their lifestyle. Pre-workout fuel that carries your brand makes perfect sense.",
  intro: "Protein shakes sell in gyms. So does creatine, pre-workout powder, and athletic gear. But branded specialty coffee is the product that gym owners consistently overlook — and it's one of the most natural fits in the entire fitness ecosystem. Think about who your members are: health-conscious people who care about what they put in their body, who value quality over convenience, and who are looking for rituals that support their active lifestyle. Coffee is part of that ritual. Pre-workout, post-workout, or first thing in the morning before they even walk through your door — coffee is a daily constant for most gym members. When that coffee carries your gym's brand, your name is part of their daily routine in the most intimate way possible. The loyalty dynamics in the gym industry are powerful. Members who identify with their gym as a lifestyle brand — not just a place to work out — are the ones who stay longest, refer the most, and spend the most on branded merchandise. A custom specialty coffee bag sold at the front desk or in a retail display is a natural extension of that identity. No minimum means testing the concept with a small run before committing to inventory.",
  whoOrders: [
    { title: "CrossFit gyms and functional fitness studios", body: "CrossFit boxes have intensely loyal communities that love branded merchandise. A custom coffee bag with the box's branding sells out at member events and sits in every athlete's kitchen." },
    { title: "Yoga studios and mindfulness fitness spaces", body: "Yoga-adjacent fitness studios find natural alignment with specialty coffee — both communities value quality, sourcing, and intentional rituals. The product fits seamlessly." },
    { title: "Personal training studios", body: "High-end personal training studios use branded coffee as a premium client gift for new clients, milestone achievements, and holiday appreciation gifts that reinforce the premium relationship." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your gym logo and brand colors. Choose your packaging style — clean, bold, and athletic-looking designs work best for fitness brands." },
    { n: "02", title: "Choose your coffee", body: "We'll help you choose a specialty origin that matches your gym's brand. Bold, high-caffeine profiles for performance gyms. Light, clean origins for wellness-focused studios." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. No minimum — test with a small batch and reorder when members ask for more." },
    { n: "04", title: "Delivered to your gym", body: "Shipped directly to your gym address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Natural lifestyle fit for your member base", body: "Coffee is already part of most gym members' daily routine. Branded coffee connects your gym to the ritual that frames their entire day — before or after training." },
    { n: "02", title: "Loyal member base ready to buy", body: "Gym members who identify with their gym as a brand are the most eager merch buyers. Branded coffee sells better than most apparel because it gets used every day." },
    { n: "03", title: "Retail revenue with no minimum inventory risk", body: "Start with 10 bags and see if they sell. They will. When they do, reorder. No risk, no overhead, no unsold stock — just pure margin merchandise revenue." },
    { n: "04", title: "Brand loyalty reinforcement", body: "When your brand is part of a member's morning ritual, it's part of their identity. That emotional connection to your gym keeps members renewing and referring longer." },
  ],
  testimonial: {
    quote: "Our members buy it because it's OUR brand. That's the whole point — it becomes part of their morning just like training is part of their day.",
    author: "Marcus R.",
    role: "Owner, CrossFit gym, Ottawa",
  },
  canonicalPath: "/custom-coffee-bags-gyms",
};


const frData: IndustryPageData = {
  industry: "Gyms",
  eyebrow: "Café personnalisé pour les gyms",
  headline: "Alimentez vos membres avec le café de spécialité de votre marque.",
  subheadline: "Les membres de gym sont soucieux de leur santé, fidèles à leur marque et à la recherche de produits qui correspondent à leur style de vie. Un carburant pré-entraînement qui porte votre marque, c'est parfaitement logique.",
  intro: "Les protéines se vendent bien dans les gyms. La créatine et le pré-entraînement aussi. Mais le café de spécialité de marque est le produit que les propriétaires de gym négligent systématiquement, et c'est l'un des choix les plus naturels dans tout l'écosystème fitness. Pensez à vos membres : des gens soucieux de leur santé, qui valorisent la qualité et qui cherchent des rituels qui soutiennent leur mode de vie actif. Le café fait partie de ce rituel. Avant l'entraînement, après l'entraînement, ou dès le matin avant même de franchir votre porte, le café est une constante quotidienne pour la plupart des membres. Quand ce café porte la marque de votre gym, votre nom fait partie de leur routine quotidienne de la façon la plus intime qui soit. Aucun minimum signifie tester le concept avec une petite commande avant de s'engager dans un inventaire.",
  whoOrders: [
    { title: "Gyms CrossFit et studios de fitness fonctionnel", body: "Les boxes CrossFit ont des communautés intensément fidèles qui adorent les produits de marque. Un sachet de café personnalisé se vend lors des événements pour membres et trône dans la cuisine de chaque athlète." },
    { title: "Studios de yoga et espaces de fitness de bien-être", body: "Les studios de fitness orientés yoga trouvent un alignement naturel avec le café de spécialité : les deux communautés valorisent la qualité, les origines et les rituels intentionnels." },
    { title: "Studios d'entraînement personnel", body: "Les studios d'entraînement personnel haut de gamme utilisent le café de marque comme cadeau premium pour les nouveaux clients, les jalons atteints et les cadeaux de fin d'année." },
  ],
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo et vos couleurs de marque. Notre outil en ligne crée un sachet professionnel qui correspond à vos standards de marque sans designer ni fichiers prêts à imprimer." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos origines de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus. Nous vous aidons à choisir si nécessaire." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à votre gym", body: "Livré directement à l'adresse de votre gym. Canada : 3 à 10 jours ouvrables. États-Unis : 7 à 14 jours ouvrables. Entièrement suivi." },
  ],
  benefits: [
    { n: "01", title: "Alignement naturel avec le mode de vie de vos membres", body: "Le café fait déjà partie de la routine quotidienne de la plupart des membres. Le café de marque connecte votre gym au rituel qui structure leur journée entière, avant ou après l'entraînement." },
    { n: "02", title: "Base de membres fidèles prête à acheter", body: "Les membres qui s'identifient à leur gym comme à une marque de vie sont les plus enclins à acheter des produits dérivés. Le café de marque se vend mieux que la plupart des vêtements, parce qu'il est utilisé tous les jours." },
    { n: "03", title: "Revenus de vente au détail sans risque de stock minimum", body: "Commencez avec 10 sacs et voyez s'ils se vendent. Ils se vendront. Quand c'est fait, réapprovisionnez. Aucun risque, aucun stock invendu, aucune perte." },
    { n: "04", title: "Renforcement de la fidélité à la marque", body: "Quand votre marque fait partie du rituel matinal d'un membre, elle fait partie de son identité. Ce lien émotionnel avec votre gym garde les membres abonnés et référents plus longtemps." },
  ],
  testimonial: {
    quote: "Nos membres l'achètent parce que c'est NOTRE marque. C'est tout le concept : ça fait partie de leur matin, tout comme l'entraînement fait partie de leur journée.",
    author: "Marcus R.",
    role: "Propriétaire, gym CrossFit, Ottawa",
  },
  canonicalPath: "/custom-coffee-bags-gyms",
};

const GymsPage = () => <IndustryPage data={data} frData={frData} />;
export default GymsPage;
