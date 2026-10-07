import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés pour boîtes d'abonnement | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags for Subscription Boxes | No Minimum | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les boîtes d'abonnement. L'article le mieux noté dans toute boîte lifestyle. Aucun minimum, design inclus." : "Custom branded coffee bags for subscription boxes. The highest-scoring item in any lifestyle box. No minimum order, full design included.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-subscription-boxes`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-bags-subscription-boxes",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-subscription-boxes",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-subscription-boxes`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés pour boîtes d'abonnement" : "Custom Coffee Bags for Subscription Boxes" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: IndustryPageData = {
  industry: "Subscription Boxes",
  eyebrow: "Custom Coffee for Subscription Boxes",
  headline: "Add a premium product your subscribers will love every month.",
  subheadline: "Subscription box curators are always looking for unique, high-quality products that fit their box theme. A custom branded specialty coffee bag is a natural fit for lifestyle, wellness, food, and gift boxes.",
  intro: "Subscription box curators live and die by subscriber satisfaction scores. When subscribers rate the contents of a box, one product can make or break the month — and that product is almost always the one that is both beautiful and genuinely useful. A custom specialty coffee bag consistently ranks among the highest-scoring items in any subscription box it appears in, across lifestyle, wellness, food, and gift categories. The reasons are straightforward: it looks premium, it smells incredible when the box opens, it carries a compelling origin story, and the subscriber uses it every single morning for weeks. For subscription box operators, the white-label model is particularly valuable. EZPZ creates a bag branded entirely with the subscription box's identity — not EZPZ's. Your subscribers think it's your product, which strengthens their connection to your brand. The coffee inside is 80+ SCA specialty grade from a fully traceable origin, roasted fresh in Montreal at Canadian Roasting Society. The quality is exceptional. Recurring monthly orders are easy to set up, and no minimum means testing the product in a single box before committing to it as a standard inclusion. Start with a small test batch, measure the subscriber response, and scale from there.",
  whoOrders: [
    { title: "Lifestyle and home subscription boxes", body: "Lifestyle curation boxes in the home, morning ritual, and wellness categories include branded specialty coffee as a consistent high-scorer that subscribers specifically look for in recurring shipments." },
    { title: "Wellness and self-care boxes", body: "Wellness subscription boxes align naturally with ethically sourced specialty coffee — the provenance story, the ritual, and the quality signal all fit the wellness brand's values and subscriber expectations." },
    { title: "Food and beverage discovery boxes", body: "Food discovery and gourmet subscription boxes include EZPZ coffee as a premium Canadian artisan product with a compelling origin story — exactly the kind of discovery their subscribers subscribe for." },
  ],
  howItWorks: [
    { n: "01", title: "Design your box's branded bag", body: "Upload your subscription box logo and brand identity. The bag carries your brand — not EZPZ's. We create a white-label product that looks and feels like it was made by your team." },
    { n: "02", title: "Choose your coffee", body: "Select from specialty origins that resonate with your subscriber demographic. Light, floral Ethiopian for wellness boxes. Bold Colombian for performance-oriented audiences. We'll help you match." },
    { n: "03", title: "We roast fresh for each shipment", body: "Each batch is roasted to order at Canadian Roasting Society in Montreal. Your subscribers receive freshly roasted coffee — not product that has been sitting in a warehouse." },
    { n: "04", title: "Shipped to your fulfillment center", body: "We ship to your fulfillment center or packing facility on your box assembly schedule. Canada: 3–10 days. USA: 7–14 days. Plan 3 weeks before your subscriber ship date." },
  ],
  benefits: [
    { n: "01", title: "White-label — your brand, not ours", body: "The bag carries your subscription box's brand entirely. EZPZ provides the quality product; your brand gets all the credit. Subscribers strengthen their connection to your box, not to us." },
    { n: "02", title: "Consistently high subscriber satisfaction scores", body: "Specialty coffee ranks among the highest-scoring subscription box items across categories. Subscribers use it daily for weeks — which means 2–4 weeks of daily positive association with your box." },
    { n: "03", title: "Premium product positioning for your box", body: "A freshly roasted specialty coffee bag from a Canadian artisan roastery is a genuinely premium inclusion that elevates the perceived value of your box and justifies your price point." },
    { n: "04", title: "No minimum for test batches", body: "Test the product in a single box run before committing to a monthly inclusion. Measure subscriber response — star ratings, review mentions, repeat retention — before scaling to a permanent feature." },
  ],
  testimonial: {
    quote: "Our subscribers rated the coffee bag the highest-scoring item in the box that quarter. We've made it a permanent feature — and it's the most-mentioned item in our unboxing reviews.",
    author: "Natalie W.",
    role: "Founder, lifestyle subscription box, Toronto",
  },
  canonicalPath: "/custom-coffee-bags-subscription-boxes",
};


const frData: IndustryPageData = {
  industry: "Boîtes d'abonnement",
  eyebrow: "Café personnalisé pour les boîtes d'abonnement",
  headline: "L'article qui rend vos abonnés impatients d'ouvrir chaque boîte.",
  subheadline: "Les curateurs de boîtes d'abonnement vivent et meurent par les scores de satisfaction des abonnés. Quand les abonnés notent le contenu d'une boîte, un produit peut faire ou défaire le mois.",
  intro: "Les curateurs de boîtes d'abonnement vivent et meurent par les scores de satisfaction des abonnés. Quand les abonnés notent le contenu d'une boîte, un produit peut faire ou défaire le mois, et cet article est presque toujours celui qui est à la fois beau et vraiment utile. Un sachet de café de spécialité personnalisé coche toutes les cases : il est visuellement premium, il est consommable donc renouvelé chaque mois, et il est utilisé deux fois par jour par la plupart des abonnés. Aucun autre article de boîte lifestyle ne génère autant de points de contact par expédition. Et parce que le sachet porte votre marque de boîte et non la nôtre, chaque tasse renforce la connexion de l'abonné à votre curation.",
  whoOrders: [
    { title: "Boîtes d'abonnement lifestyle et de maison", body: "Les boîtes de curation lifestyle dans les catégories maison, rituel matinal et bien-être incluent le café de spécialité de marque comme article régulier très bien noté que les abonnés cherchent spécifiquement dans les expéditions récurrentes." },
    { title: "Boîtes de bien-être et d'auto-soin", body: "Les boîtes de bien-être utilisent le café de spécialité comme produit qui prolonge le rituel d'auto-soin dans la routine matinale de l'abonné, au-delà de l'expérience d'unboxing." },
    { title: "Boîtes cadeaux et de saison", body: "Les boîtes cadeaux saisonnières incluent le café de marque comme article premium qui justifie le prix de la boîte et génère des achats répétés lorsque les destinataires des cadeaux s'abonnent eux-mêmes." },
  ],
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo et vos couleurs de marque. Notre outil en ligne crée un sachet professionnel qui correspond à vos standards de marque sans designer ni fichiers prêts à imprimer." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos origines de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus. Nous vous aidons à choisir si nécessaire." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à votre entrepôt ou centre de distribution", body: "Livré à votre entrepôt ou centre de distribution pour intégration dans les expéditions. Canada : 3 à 10 jours ouvrables. États-Unis : 7 à 14 jours ouvrables." },
  ],
  benefits: [
    { n: "01", title: "Votre marque, pas la nôtre", body: "Le sachet porte entièrement la marque de votre boîte d'abonnement. EZPZ fournit le produit de qualité. Votre marque reçoit tout le crédit. Les abonnés renforcent leur connexion à votre curation." },
    { n: "02", title: "Scores de satisfaction des abonnés régulièrement élevés", body: "Le café de spécialité obtient systématiquement les scores de satisfaction les plus élevés dans les boîtes lifestyle : il est utilisé quotidiennement, apprécié pour sa qualité et mentionné dans les avis unboxing." },
    { n: "03", title: "Produit renouvelable qui génère de l'anticipation", body: "Les abonnés qui adorent votre café l'attendent dans chaque expédition. Ce sentiment d'anticipation augmente l'engagement et réduit le churn d'une façon que peu d'articles de boîte peuvent faire." },
    { n: "04", title: "Aucun minimum : scalable de quelques boîtes à des milliers", body: "Que vous envoyiez 50 boîtes ou 50 000, EZPZ s'adapte avec le même produit et la même qualité. Testez un volume réduit avant un lancement complet." },
  ],
  testimonial: {
    quote: "Nos abonnés ont noté le sachet de café comme l'article le mieux noté de la boîte ce trimestre-là. On en a fait un article permanent et c'est le plus mentionné dans nos avis unboxing.",
    author: "Chloe R.",
    role: "Fondatrice, boîte d'abonnement lifestyle, Montréal",
  },
  canonicalPath: "/custom-coffee-bags-subscription-boxes",
};

const SubscriptionBoxesPage = () => <IndustryPage data={data} frData={frData} />;
export default SubscriptionBoxesPage;
