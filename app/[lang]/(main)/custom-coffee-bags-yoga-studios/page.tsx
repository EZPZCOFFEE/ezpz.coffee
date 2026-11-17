import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés pour studios de yoga | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags for Yoga Studios | No Minimum | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour studios de yoga. Un alignement naturel de valeurs pour votre communauté. Aucun minimum, design inclus." : "Custom branded coffee bags for yoga studios. A natural values alignment for your community. No minimum order, full design included.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-yoga-studios`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-yoga-studios",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-yoga-studios",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-yoga-studios",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-yoga-studios`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés pour studios de yoga" : "Custom Coffee Bags for Yoga Studios" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: IndustryPageData = {
  industry: "Yoga Studios",
  eyebrow: "Custom Coffee for Yoga Studios",
  headline: "Mindful mornings start with your studio's own specialty coffee.",
  subheadline: "Yoga students who start their day with your branded coffee associate your studio with their most intentional moments — long before they step onto the mat.",
  intro: "There is a deep alignment between yoga and specialty coffee that most studio owners haven't tapped yet. Both are about intentionality, ritual, and quality. Both have communities built around sourcing, story, and craft. The student who spends $180 a month on a yoga membership and cares deeply about where their food comes from is exactly the person who wants to know that their coffee came from a traceable single-origin farm in Ethiopia, roasted fresh in Montreal, and designed with their studio's identity on the bag. That is the EZPZ product. Traceable, ethically sourced specialty coffee aligns with yoga's values around mindfulness, sustainability, and conscious consumption in a way that commodity coffee never could. Yoga studios that have introduced branded specialty coffee report that it becomes a conversation piece in the studio — students ask about it, recommend it to friends, and return specifically to restock. It's also a genuinely beautiful product. The design is clean, the bag is premium, and it looks at home on the retail shelf alongside yoga mats and accessories. No minimum means starting with a small batch to test demand before committing to a larger order.",
  whoOrders: [
    { title: "Hot yoga and power yoga studios", body: "High-intensity yoga studios whose members are performance-oriented find natural alignment with specialty coffee. The community is tight, the brand loyalty is high, and the retail appetite is strong." },
    { title: "Meditation centers and mindfulness studios", body: "Meditation-focused studios use branded coffee as a ritual extension of their teaching. A morning cup of their studio's coffee is a mindfulness practice in itself — that's a powerful brand association." },
    { title: "Wellness retreats and yoga destinations", body: "Yoga retreats use branded coffee as a premium take-home product for retreat participants. It's a memory of the retreat experience that guests brew every morning when they return home." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your studio logo. Clean, minimal design aesthetics work best for yoga brands — our tool lets you achieve that without a designer." },
    { n: "02", title: "Choose your coffee", body: "We'll help you choose an ethical, traceable origin that resonates with your community. Ethiopian light roasts with floral, tea-like notes are a favorite for yoga-adjacent audiences." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. No minimum — a single test batch is enough to gauge your community's appetite." },
    { n: "04", title: "Delivered to your studio", body: "Shipped directly to your studio address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Deep values alignment with specialty coffee", body: "Traceable, ethically sourced specialty coffee aligns with your community's values around mindfulness, sustainability, and intentional living. It's not just a product — it's a statement." },
    { n: "02", title: "Morning ritual integration", body: "The morning ritual is sacred in yoga culture. When your studio's coffee is part of that ritual, your brand is present in your students' most intentional moments every single day." },
    { n: "03", title: "Retail revenue with no inventory risk", body: "No minimum means testing with a small run. Yoga communities tend to be enthusiastic early adopters. Start small, sell out, reorder — zero overhead, strong margins." },
    { n: "04", title: "Community building tool", body: "Branded coffee creates a shared ritual that strengthens community. Students who drink the same studio coffee feel a connection to each other and to the studio that goes beyond classes." },
  ],
  testimonial: {
    quote: "The sourcing story matters to our community. Ethiopian single origin, traceable, ethical — it fits perfectly with what we teach. Students ask about it every class.",
    author: "Anya S.",
    role: "Studio Director, hot yoga studio, Calgary",
  },
  canonicalPath: "/custom-coffee-bags-yoga-studios",
};


const frData: IndustryPageData = {
  industry: "Studios de yoga",
  eyebrow: "Café personnalisé pour les studios de yoga",
  headline: "Le café de spécialité de votre studio. Un rituel matinal qui prolonge votre communauté.",
  subheadline: "Il y a un alignement profond entre le yoga et le café de spécialité que la plupart des propriétaires de studio n'ont pas encore exploité. Les deux sont dans l'intentionnalité, le rituel et la qualité. Les deux ont des communautés construites autour des origines, de l'histoire et du savoir-faire.",
  intro: "Il y a un alignement profond entre le yoga et le café de spécialité que la plupart des propriétaires de studio n'ont pas encore exploité. Les deux sont dans l'intentionnalité, le rituel et la qualité. Les deux ont des communautés construites autour de l'origine, de l'histoire et de l'artisanat. L'élève qui dépense 180 dollars par mois pour un abonnement de yoga et se soucie profondément de la qualité de ce qu'elle met dans son corps est exactement la même personne qui achète du café de spécialité traçable à la boutique en ligne d'un torréfacteur local. La question n'est pas de savoir si votre communauté aimerait votre café de marque. La question est de savoir pourquoi vous n'avez pas encore commencé.",
  whoOrders: [
    { title: "Studios de yoga chaud et yoga dynamique", body: "Les studios de yoga à haute intensité dont les membres sont orientés vers la performance trouvent un alignement naturel avec le café de spécialité. La communauté est soudée, la fidélité à la marque est forte et l'appétit pour le commerce de détail est solide." },
    { title: "Centres de méditation et studios de pleine conscience", body: "Les studios axés sur la méditation utilisent le café de marque comme extension rituelle de la pratique. Le café matinal traçable s'aligne parfaitement avec les valeurs de pleine conscience et d'intentionnalité de la communauté." },
    { title: "Studios de fitness-bien-être hybrides", body: "Les studios qui combinent yoga, Pilates et méditation utilisent le café de marque pour créer une expérience de marque cohérente qui s'étend au-delà de la salle de pratique." },
  ],
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo et vos couleurs de marque. Notre outil en ligne crée un sachet professionnel qui correspond à vos standards de marque sans designer ni fichiers prêts à imprimer." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos origines de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus. Nous vous aidons à choisir si nécessaire." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à votre studio", body: "Livré directement à votre studio. Canada : 3 à 10 jours ouvrables. États-Unis : 7 à 14 jours ouvrables. Entièrement suivi." },
  ],
  benefits: [
    { n: "01", title: "Alignement profond des valeurs avec le café de spécialité", body: "Le café de spécialité traçable et éthique s'aligne avec les valeurs de pleine conscience, de durabilité et de vie intentionnelle de votre communauté. Ce n'est pas seulement un produit, c'est une déclaration." },
    { n: "02", title: "Intégration dans le rituel matinal", body: "Le rituel matinal est sacré dans la culture yoga. Quand le café de votre studio fait partie de ce rituel, votre marque est présente dans le moment le plus intentionnel de la journée de votre élève." },
    { n: "03", title: "Fidélité des membres et revenus de vente au détail", body: "Les élèves qui s'identifient à votre studio comme à une communauté de vie sont les plus enclins à acheter des produits de votre boutique. Le café de marque se vend bien mieux que la plupart des articles de yoga." },
    { n: "04", title: "Histoire de sourçage qui résonne avec votre communauté", body: "Chaque sachet peut inclure l'histoire de l'origine du café, son altitude, son processus de traitement. Votre communauté de yoga adore cette transparence." },
  ],
  testimonial: {
    quote: "L'histoire du sourçage compte pour notre communauté. Single origin éthiopien, traçable, éthique. Ça correspond parfaitement à ce que nous enseignons. Les élèves posent des questions à chaque cours.",
    author: "Émilie T.",
    role: "Propriétaire, studio de yoga, Montréal",
  },
  canonicalPath: "/custom-coffee-bags-yoga-studios",
};

const YogaStudiosPage = () => <IndustryPage data={data} frData={frData} />;
export default YogaStudiosPage;
