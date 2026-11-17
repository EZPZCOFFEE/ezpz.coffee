import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés pour spas | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags for Spas | No Minimum | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour spas. Prolongez l'expérience de luxe au-delà du traitement. Aucun minimum, design inclus." : "Custom branded coffee bags for spas. Extend the luxury experience beyond the appointment. No minimum order, full design included.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-spas`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-spas",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-spas",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-spas",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-spas`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés pour spas" : "Custom Coffee Bags for Spas" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: IndustryPageData = {
  industry: "Spas",
  eyebrow: "Custom Coffee for Spas",
  headline: "Your spa's luxury experience. Extended to every morning at home.",
  subheadline: "Spas sell experiences, not just services. A custom branded coffee bag is a physical extension of that experience that clients take home and use every morning.",
  intro: "The experience doesn't end when the client walks out the door. The best spas understand that the feeling they create — the calm, the luxury, the sense of being cared for — can be extended far beyond the appointment. A custom specialty coffee bag with your spa's branding is the product that does exactly that. Every morning the client brews it, they remember how they felt in your space. That emotional recall drives rebooking, referrals, and retail purchases in a way that no follow-up email or loyalty card ever could. Spa retail is already a significant revenue driver for most day spas — clients who trust your brand for their skin and body care are highly receptive to purchasing your branded consumables. Coffee fits naturally alongside skincare products, aromatherapy items, and wellness supplements. It's premium, it's beautiful, and it's something the client will genuinely use every day. The price point is also accessible: a bag that costs $8 to produce retails comfortably at $24 to $28 in a spa retail environment, with no minimum order risk and no complicated inventory management.",
  whoOrders: [
    { title: "Day spas", body: "Day spas with a strong retail area add branded coffee as a high-margin lifestyle product that appeals to clients who already trust the brand for their personal care." },
    { title: "Resort and destination spas", body: "Resort spas include branded coffee bags in treatment packages, VIP gift sets, and as a premium take-home amenity that extends the resort experience into the client's home kitchen." },
    { title: "Medical spas", body: "Medical spas focused on skin health and wellness gifting use branded specialty coffee as a thoughtful client appreciation gift that complements their premium positioning." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your spa logo and brand colors. Soft, luxurious design aesthetics — cream, gold, muted tones — work beautifully for spa brands." },
    { n: "02", title: "Choose your coffee", body: "We'll suggest origins that match your spa's sensibility. Light Ethiopian roasts with floral notes feel spa-appropriate. We can include tasting notes on the bag." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. No minimum — test with a small retail display before committing to larger quantities." },
    { n: "04", title: "Delivered to your spa", body: "Shipped directly to your spa address. Canada: 3–10 business days. USA: 7–14 business days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Extends the luxury experience beyond the appointment", body: "Every morning your client brews your spa's coffee, they reconnect emotionally with the experience you created. That recall drives rebooking and referrals without any marketing spend." },
    { n: "02", title: "High-margin retail product", body: "A bag that costs $8 retails at $24–$28 in a spa environment. Clients who trust your brand for their personal care don't hesitate to buy your branded food products." },
    { n: "03", title: "Premium gifting and treatment packages", body: "Include branded coffee bags in VIP treatment packages, gift sets, and holiday bundles. It adds a tangible take-home element that elevates the perceived value of any package." },
    { n: "04", title: "Brand recall between appointments", body: "The average spa client visits 4–6 times per year. Between appointments, your branded coffee keeps your name present in their daily routine, reducing the time between bookings." },
  ],
  testimonial: {
    quote: "Clients ask us about it before they've even had their treatment. It sells itself — and when they run out, they call to rebook so they can pick up another bag.",
    author: "Christine D.",
    role: "Spa Director, day spa, Montreal",
  },
  canonicalPath: "/custom-coffee-bags-spas",
};


const frData: IndustryPageData = {
  industry: "Spas",
  eyebrow: "Café personnalisé pour les spas",
  headline: "L'expérience de votre spa. Prolongée dans chaque tasse du matin de votre cliente.",
  subheadline: "L'expérience ne se termine pas quand la cliente franchit la porte. Les meilleurs spas comprennent que le sentiment qu'ils créent, le calme, le luxe, la sensation d'être choyé, peut être prolongé bien au-delà du traitement.",
  intro: "L'expérience ne se termine pas quand la cliente franchit la porte. Les meilleurs spas comprennent que le sentiment qu'ils créent peut être prolongé bien au-delà du traitement. Un sachet de café de spécialité personnalisé avec la marque de votre spa est le produit qui fait ça mieux que n'importe quel autre article de vente au détail. Chaque matin où votre cliente prépare votre café, elle se reconnecte émotionnellement à l'expérience que vous avez créée. Ce rappel entraîne des rebookings et des références sans aucune dépense marketing. La marge est excellente : un sachet qui coûte 8 $ se vend 24 à 28 $ dans l'environnement d'un spa, ce qui représente une marge bien supérieure à la plupart des soins. Et comme il n'y a pas de minimum de commande, vous pouvez tester le concept avec une petite sélection et voir comment vos clientes réagissent.",
  whoOrders: [
    { title: "Spas de jour", body: "Les spas de jour avec un espace de vente au détail bien développé ajoutent le café de marque comme produit lifestyle à forte marge qui plaît aux clientes qui font déjà confiance à la marque pour leurs soins personnels." },
    { title: "Spas de resort et de destination", body: "Les spas de resort incluent le café de marque dans les forfaits de traitement, les coffrets cadeaux VIP et comme aménité à emporter premium qui prolonge l'expérience du resort à la maison." },
    { title: "Salons et instituts de beauté haut de gamme", body: "Les salons qui offrent des services premium utilisent le café de marque pour créer une expérience de service qui commence avec le traitement et continue chaque matin dans la cuisine de la cliente." },
  ],
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo et vos couleurs de marque. Notre outil en ligne crée un sachet professionnel qui correspond à vos standards de marque sans designer ni fichiers prêts à imprimer." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos origines de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus. Nous vous aidons à choisir si nécessaire." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à votre spa", body: "Livré directement à l'adresse de votre spa. Canada : 3 à 10 jours ouvrables. États-Unis : 7 à 14 jours ouvrables. Entièrement suivi." },
  ],
  benefits: [
    { n: "01", title: "Prolonge l'expérience de luxe au-delà du rendez-vous", body: "Chaque matin où votre cliente prépare le café de votre spa, elle se reconnecte émotionnellement à l'expérience que vous avez créée. Ce rappel génère des rebookings et des références sans dépense marketing." },
    { n: "02", title: "Produit de vente au détail à forte marge", body: "Un sachet qui coûte 8 $ se vend 24 à 28 $ dans l'environnement d'un spa, une marge bien supérieure à la plupart des soins. Aucun minimum signifie aucun risque de stock." },
    { n: "03", title: "Signal de qualité et de curation", body: "Un spa qui vend du café de spécialité traçable communique à ses clientes qu'il s'intéresse à la qualité dans tous les aspects de leur expérience, pas seulement dans les produits de soin." },
    { n: "04", title: "Cadeaux et coffrets de traitement", body: "Incluez le café dans les coffrets cadeaux, les forfaits de fête des Mères ou les trousses de bienvenue. C'est la touche luxueuse et pratique qui différencie vos offres." },
  ],
  testimonial: {
    quote: "Mes clientes en parlent avant même leur traitement. Il se vend tout seul, et quand elles n'en ont plus, elles appellent pour rebooker et en reprendre.",
    author: "Marie-Claire D.",
    role: "Propriétaire, spa, Québec",
  },
  canonicalPath: "/custom-coffee-bags-spas",
};

const SpasPage = () => <IndustryPage data={data} frData={frData} />;
export default SpasPage;
