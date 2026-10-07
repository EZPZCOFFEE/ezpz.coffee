import type { Metadata } from "next";

import IndustryPage, { IndustryPageData } from "../_components/IndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Sacs de café personnalisés pour cabinets d'avocats | Aucun minimum | EZPZ Coffee" : "Custom Coffee Bags for Law Firms | No Minimum | EZPZ Coffee";
  const description = isFr ? "Sacs de café personnalisés pour cabinets d'avocats. Le cadeau client qui génère des conversations. Aucun minimum, design inclus." : "Custom branded coffee bags for law firms. The client gift that earns conversations. No minimum order, full design included.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-bags-law-firms`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-bags-law-firms",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-bags-law-firms",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-bags-law-firms`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés pour cabinets d'avocats" : "Custom Coffee Bags for Law Firms" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: IndustryPageData = {
  industry: "Law Firms",
  eyebrow: "Custom Coffee for Law Firms",
  headline: "A client gift as distinguished as your practice.",
  subheadline: "Law firms need client gifts that reflect their premium positioning. A beautifully designed specialty coffee bag from a traceable Montreal roastery says quality, attention to detail, and thoughtfulness.",
  intro: "Law firms spend significant budgets on client gifts and never quite get it right. Wine is generic and raises ethical questions in some jurisdictions. Gift cards feel impersonal. Branded merchandise communicates the wrong message — clients don't want to wear a firm's logo. A custom specialty coffee bag is the exception to all of these problems. It is genuinely premium without being extravagant. It is useful without being forgettable. It carries the firm's branding without asking the client to become a walking advertisement. And it communicates something important: that this firm chose a Montreal specialty roaster with traceable single-origin beans because quality and provenance matter to them — which is exactly the message a premium legal practice should send. Compare it to a $35 bottle of wine that will be opened in five minutes and forgotten. The coffee bag sits on the client's kitchen counter for weeks. Every morning they make coffee, they see the firm's name. When a colleague asks about a lawyer, the client's mind goes to the bag on the counter. That is the referral moment. No minimum means gifting per client at the exact right moment — a matter closing, a contract renewal, the holiday season.",
  whoOrders: [
    { title: "Corporate law firms", body: "Corporate practices use branded coffee as a deal-closing gift, holiday appreciation gift, and new client welcome package that reflects their position as a premium professional services firm." },
    { title: "Family law and estate practices", body: "Practices with ongoing client relationships use branded coffee to maintain warmth in inherently transactional work. A thoughtful gift signals care that goes beyond the invoice." },
    { title: "Boutique specialty firms", body: "Small and boutique firms use branded coffee to punch above their weight — a premium gift that signals quality and sophistication disproportionate to firm size." },
  ],
  howItWorks: [
    { n: "01", title: "Design your bag online", body: "Upload your firm logo. Clean, minimal design works best for law firm branding — sophisticated, professional, and immediately recognizable." },
    { n: "02", title: "Choose your coffee", body: "Select a premium single origin that speaks for itself. Panamanian or Ethiopian specialty coffees are a natural choice for firms that want to signal discernment." },
    { n: "03", title: "We roast fresh in Montreal", body: "Roasted to order at Canadian Roasting Society in Montreal. No minimum — order per client at the right moment in the relationship." },
    { n: "04", title: "Delivered to your firm or directly to clients", body: "Ship to your office for delivery, or ship individual bags to each client's address. Canada: 3–10 days. USA: 7–14 days. Fully tracked." },
  ],
  benefits: [
    { n: "01", title: "Premium positioning at the right price point", body: "A custom specialty coffee bag is genuinely premium without triggering ethical concerns around gifts to clients. It's memorable, appreciated, and appropriately measured." },
    { n: "02", title: "Memorable and talked about", body: "Few client gifts generate conversation. A beautifully designed custom coffee bag from a specialty Montreal roaster gets mentioned — which is exactly the brand recall a law firm invests in." },
    { n: "03", title: "No minimum for per-client gifting", body: "Order exactly one bag for one client at one relationship moment. Scale to 200 bags for a firm-wide holiday campaign. Zero minimum makes the economics work at any scale." },
    { n: "04", title: "Easily paired with a personal note", body: "A handwritten note alongside a branded coffee bag creates a complete client gift that demonstrates personal investment in the relationship beyond the billable hour." },
  ],
  testimonial: {
    quote: "More memorable than the wine we used to send and half the price. Clients specifically mention it at our next meeting — wine never prompted that kind of response.",
    author: "Michael C.",
    role: "Partner, boutique law firm, Montreal",
  },
  canonicalPath: "/custom-coffee-bags-law-firms",
};


const frData: IndustryPageData = {
  industry: "Cabinets d'avocats",
  eyebrow: "Café personnalisé pour les cabinets d'avocats",
  headline: "Le cadeau client qui se souvient d'eux toutes les matins.",
  subheadline: "Les cabinets juridiques dépensent des budgets importants en cadeaux clients et n'obtiennent jamais tout à fait le bon résultat. Le vin est générique et soulève des questions déontologiques. Les cartes-cadeaux semblent impersonnelles. Les articles promotionnels communiquent le mauvais message : les clients ne veulent pas porter le logo d'un cabinet.",
  intro: "Les cabinets juridiques dépensent des budgets importants en cadeaux clients et n'obtiennent jamais tout à fait le bon résultat. Le vin est générique et soulève des questions déontologiques dans certaines juridictions. Les cartes-cadeaux semblent impersonnelles. Les articles promotionnels communiquent le mauvais message : les clients ne veulent pas porter le logo d'un cabinet. Un sachet de café de spécialité personnalisé est le cadeau qui résout tous ces problèmes. Il n'a pas de connotations déontologiques. Il est au bon prix : suffisamment premium pour signaler la qualité, suffisamment mesuré pour ne pas sembler inapproprié. Et il est utilisé tous les jours, ce qui signifie que votre marque est présente dans la vie de vos clients pendant deux à quatre semaines après réception.",
  whoOrders: [
    { title: "Cabinets de droit des affaires", body: "Les cabinets de droit des affaires utilisent le café de marque comme cadeau de clôture de dossier, cadeau de fin d'année et trousse de bienvenue pour les nouveaux clients qui reflète leur positionnement comme cabinet de services professionnels premium." },
    { title: "Cabinets de droit de la famille et de successions", body: "Les cabinets avec des relations clients continues utilisent le café de marque pour maintenir une chaleur dans des contextes souvent difficiles, et rappeler aux clients que leur avocat les voit comme des personnes, pas seulement comme des dossiers." },
    { title: "Cabinets de litige et de recours collectif", body: "Les équipes de litige utilisent le café de marque pour les cadeaux aux témoins experts, aux collègues juridiques et aux clients clés lors des étapes importantes du dossier." },
  ],
  howItWorks: [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo et vos couleurs de marque. Notre outil en ligne crée un sachet professionnel qui correspond à vos standards de marque sans designer ni fichiers prêts à imprimer." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos origines de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus. Nous vous aidons à choisir si nécessaire." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livré à votre cabinet ou directement aux clients", body: "Livrez à votre cabinet pour distribution ou envoyez directement à chaque client. Canada : 3 à 10 jours. États-Unis : 7 à 14 jours." },
  ],
  benefits: [
    { n: "01", title: "Positionnement premium au bon prix", body: "Un sachet de café de spécialité est sincèrement premium sans déclencher de préoccupations déontologiques sur les cadeaux aux clients. Il est mémorable, apprécié et convenablement mesuré." },
    { n: "02", title: "Mémorable et dont on parle", body: "Peu de cadeaux clients génèrent des conversations. Un sachet de café magnifiquement conçu est mentionné lors de la prochaine réunion, partagé avec des collègues et photographié pour les réseaux sociaux." },
    { n: "03", title: "Rappel de marque quotidien entre les mandats", body: "Le client moyen ne pense pas à son avocat entre les mandats. Un café de marque signifie que votre nom est sur le comptoir de sa cuisine chaque matin pendant des semaines." },
    { n: "04", title: "Scalable par client ou par campagne", body: "Commandez cinq sacs pour vos cinq clients les plus importants, ou cinq cents pour un programme de fin d'année. Aucun minimum signifie que vous pouvez gérer les cadeaux par client." },
  ],
  testimonial: {
    quote: "Plus mémorable que le vin qu'on envoyait avant et deux fois moins cher. Les clients en parlent spécifiquement à notre prochaine réunion. Le vin n'avait jamais généré ce genre de réponse.",
    author: "Marc-André P.",
    role: "Associé directeur, cabinet d'avocats, Toronto",
  },
  canonicalPath: "/custom-coffee-bags-law-firms",
};

const LawFirmsPage = () => <IndustryPage data={data} frData={frData} />;
export default LawFirmsPage;
