import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés pour cadeaux corporatifs | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags for Corporate Gifting | No Minimum | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour les cadeaux corporatifs. Visibilité de marque quotidienne chez chaque client. Aucun minimum, design inclus. Les entreprises du Canada et des États-Unis choisissent EZPZ." : "Custom branded coffee bags for corporate gifting. Daily brand visibility in every client's morning. No minimum order, full design included. Corporate clients across Canada and the USA choose EZPZ.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-corporate`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-bags-corporate",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-corporate",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-bags-corporate",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-corporate`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés pour cadeaux corporatifs" : "Custom Coffee Bags for Corporate Gifting" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: IndustryPageData = {
  industry: "Corporate",
  eyebrow: "Custom Coffee for Corporate Gifting",
  headline: "Your brand. In the hands of every client. Every morning.",
  subheadline: "Branded pens get lost. Notebooks gather dust. A bag of specialty coffee with your logo gets used every single morning for weeks — and your brand is there for all of it.",
  intro: "Corporate gifting is a billion-dollar industry built largely on forgettable products. Every September, procurement teams order boxes of branded notebooks, pens, and chocolate that are used once, given away, or thrown out. The problem isn't the budget — it's the product. A custom specialty coffee bag is the corporate gift that actually earns daily brand exposure. When your client brews your company's coffee every morning, they see your name, your logo, and your brand colors. That is three to five minutes of brand attention, 365 days a year, that no advertising budget can replicate. Montreal and Toronto companies are replacing generic corporate gifts with custom coffee bags because the results are measurable: clients mention it in thank-you emails, ask where they can order more for their own offices, and remember the company name when the next opportunity comes up. No minimum means ordering per client — five bags for your five biggest accounts, or five hundred for a national campaign. The product scales with your intention and your budget.",
  whoOrders: [
    { title: "Consulting and professional services firms", body: "Consulting firms use branded coffee as an end-of-project gift, holiday appreciation gift, and new client welcome package. It signals thoughtfulness and quality that generic gifts never convey." },
    { title: "Financial services companies", body: "Financial advisors, wealth management firms, and insurance companies use branded coffee as a quarterly client gift that keeps their name top of mind between reviews and renewals." },
    { title: "Technology companies", body: "Tech companies use branded coffee for customer success gifting, partner appreciation, and sales pipeline outreach. A personalized bag with the prospect's company name has a very high open rate." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your company logo and brand colors. Our design tool creates a professional bag that matches your brand standards without needing a designer or print-ready files." },
    { n: "02", title: "Choose your coffee", body: "Select from specialty origins that signal quality — Colombian, Ethiopian, or Panamanian. We can include tasting notes that demonstrate your attention to detail." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. No minimum — order 5 bags for your top clients or 500 for a campaign. Same quality either way." },
    { n: "04", title: "Delivered to your office or directly to clients", body: "Ship to your office for distribution, or ship individual bags directly to each client's address. Canada: 3–10 days. USA: 7–14 days." },
  ],
  benefits: [
    { n: "01", title: "Daily brand visibility that advertising can't buy", body: "Every morning your client brews your coffee, they see your brand. That's 3–5 minutes of focused brand attention per day for 2–4 weeks per bag — no ad format delivers that." },
    { n: "02", title: "Premium feel at an accessible price", body: "A custom specialty coffee bag feels expensive and thoughtful without the cost and legal complexity of wine, spirits, or luxury goods. It's the sweet spot for professional gifting." },
    { n: "03", title: "No minimum — gift per client, not per campaign", body: "Order 5 bags for your 5 most important clients. Order 500 for a national campaign. EZPZ's zero minimum makes per-client personalization economically viable." },
    { n: "04", title: "Talked about and remembered", body: "Corporate gifts that get mentioned in thank-you emails are rare. Branded coffee consistently earns explicit acknowledgment — which means it's driving the relationship signal you're investing in." },
  ],
  testimonial: {
    quote: "We stopped sending wine bottles. Coffee gets mentioned in thank-you emails — wine never did. Our clients actually talk about it when we see them next.",
    author: "James P.",
    role: "VP Marketing, consulting firm, Toronto",
  },
  canonicalPath: "/custom-coffee-bags-corporate",
};


const frData: IndustryPageData = {
  industry: "Corporatif",
  eyebrow: "Café personnalisé pour les cadeaux corporatifs",
  headline: "Votre marque. Dans les mains de chaque client. Chaque matin.",
  subheadline: "Les stylos de marque se perdent. Les carnets accumulent de la poussière. Un sachet de café de spécialité avec votre logo s'utilise chaque matin pendant des semaines et votre marque est là pour tout.",
  intro: "Les cadeaux corporatifs sont une industrie de plusieurs milliards de dollars construite en grande partie sur des produits oubliables. Chaque automne, les équipes d'approvisionnement commandent des boîtes de carnets, stylos et chocolats de marque qui sont utilisés une fois, donnés ou jetés. Le problème n'est pas le budget, c'est le produit. Un sachet de café de spécialité personnalisé est le cadeau corporatif qui génère vraiment une exposition de marque quotidienne. Quand votre client prépare chaque matin le café de votre entreprise, il voit votre nom, votre logo et vos couleurs de marque. C'est trois à cinq minutes d'attention de marque concentrée, 365 jours par an, qu'aucun budget publicitaire ne peut reproduire. Aucun minimum signifie commander par client : cinq sacs pour vos cinq comptes les plus importants, ou cinq cents pour une campagne nationale.",
  whoOrders: [
    { title: "Cabinets de conseil et de services professionnels", body: "Les cabinets de conseil utilisent le café de marque comme cadeau de fin de mandat, cadeau de fin d'année et trousse de bienvenue pour les nouveaux clients, signalant une attention et une qualité que les cadeaux génériques ne transmettent jamais." },
    { title: "Entreprises de services financiers", body: "Les conseillers financiers, sociétés de gestion de patrimoine et compagnies d'assurance utilisent le café de marque comme cadeau trimestriel pour les clients, gardant leur nom en tête entre les révisions et les renouvellements." },
    { title: "Entreprises technologiques", body: "Les entreprises technologiques utilisent le café de marque pour les cadeaux de succès client, la reconnaissance des partenaires et la prospection commerciale. Un sachet personnalisé avec le nom de l'entreprise prospect a un très bon taux d'ouverture." },
  ],
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo et vos couleurs de marque. Notre outil en ligne crée un sachet professionnel qui correspond à vos standards de marque sans designer ni fichiers prêts à imprimer." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos origines de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus. Nous vous aidons à choisir si nécessaire." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à votre bureau ou directement aux clients", body: "Livrez à votre bureau pour distribution ou envoyez directement à chaque client. Canada : 3 à 10 jours. États-Unis : 7 à 14 jours." },
  ],
  benefits: [
    { n: "01", title: "Visibilité de marque quotidienne que la publicité ne peut pas acheter", body: "Chaque matin où votre client prépare votre café, il voit votre marque. C'est 3 à 5 minutes d'attention de marque concentrée par jour pendant 2 à 4 semaines par sachet. Aucun format publicitaire ne fait ça." },
    { n: "02", title: "Sentiment premium à un prix accessible", body: "Un sachet de café de spécialité personnalisé est sincèrement premium sans le coût et la complexité du vin, des spiritueux ou des produits de luxe. C'est le point idéal pour les cadeaux professionnels." },
    { n: "03", title: "Aucun minimum : cadeau par client, pas par campagne", body: "Commandez 5 sacs pour vos 5 clients les plus importants. Commandez 500 pour une campagne nationale. Le zéro minimum d'EZPZ rend la personnalisation par client économiquement viable." },
    { n: "04", title: "Dont on parle et dont on se souvient", body: "Les cadeaux corporatifs mentionnés dans les courriels de remerciement sont rares. Le café de marque génère systématiquement une reconnaissance explicite, ce qui signifie qu'il active le signal de relation dans lequel vous investissez." },
  ],
  testimonial: {
    quote: "On a arrêté d'envoyer des bouteilles de vin. Le café est mentionné dans les courriels de remerciement, le vin ne l'était jamais. Nos clients en parlent spécifiquement quand on les revoit.",
    author: "Jean-Philippe P.",
    role: "VP Marketing, cabinet conseil, Montréal",
  },
  canonicalPath: "/custom-coffee-bags-corporate",
};

const CorporatePage = () => <IndustryPage data={data} frData={frData} />;
export default CorporatePage;
