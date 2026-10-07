import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les bureaux corporatifs de Toronto | EZPZ Coffee" : "Custom Coffee Bags for Toronto Corporate Offices | EZPZ Coffee";
  const description = isFr ? "Les entreprises de Toronto élèvent leur culture de bureau et leurs cadeaux corporatifs avec le café de spécialité personnalisé. Aucun minimum, design inclus." : "Bay Street, tech corridor, or Corktown startup — Toronto's corporate gifting market demands premium. Custom branded specialty coffee bags, zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-corporate-offices-toronto`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-corporate-offices-toronto",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-corporate-offices-toronto",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-corporate-offices-toronto`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les bureaux corporatifs de Toronto" : "Custom Coffee Bags for Toronto Corporate Offices" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-corporate-offices-toronto",
  city: { name: "Toronto", province: "ON", deliveryTime: "3–5 business days" },
  industry: {
    name: "Corporate Offices",
    parentHref: "/en/custom-coffee-bags-offices",
    parentLabel: "Corporate Offices",
  },
  hero: {
    h1: "Custom Coffee for Toronto Corporate Offices",
    subheadline:
      "From Bay Street deal closings to Shopify all-hands meetings — your brand belongs in the cup.",
    ctaSubject: "Corporate coffee gifting Toronto",
  },
  aeoAnswer:
    "Toronto corporate offices can order custom branded specialty coffee bags from EZPZ for client gifts, employee onboarding, and boardroom programs. No minimum order, starting at 100 bags at $11.75/bag. Bags arrive in 3–5 business days from the Montreal roastery.",
  why: {
    heading: "Why Toronto's Corporate Market Chooses Custom Coffee",
    paragraphs: [
      "Toronto has the highest concentration of corporate headquarters and professional services firms in Canada — Bay Street's financial institutions, the King Street tech corridor, major law firms in the Financial District, and a rapidly growing startup ecosystem in Corktown, Leslieville, and the Junction. Every quarter, these organizations spend millions on client gifts, employee recognition, and event giveaways.",
      "Custom branded coffee has emerged as the gift that outperforms everything in the corporate gifting stack. It's consumable (so it doesn't sit in a drawer), premium (specialty-grade coffee signals intentionality), and useable daily (the brand impression repeats every morning). For Toronto's Bay Street firms closing major transactions, a custom branded bag sent with a note beats the predictability of a wine bottle every time.",
      "EZPZ works with companies from 5 employees to 5,000. The same platform that lets a Corktown startup send 100 branded bags to their first enterprise clients serves the corporate gifting programs of organizations shipping thousands of bags coast to coast.",
    ],
  },
  useCases: {
    heading: "How Toronto Offices Use Branded Coffee",
    items: [
      {
        title: "Q4 client gifting",
        body: "November–December is Toronto's corporate gifting peak. Custom branded bags — with a personal note, your company logo, and specialty coffee sourced to the origin — are the gift clients keep on their desk and mention in the follow-up call. Start planning in September to guarantee on-time delivery.",
      },
      {
        title: "New employee onboarding kits",
        body: "Toronto's tech companies compete hard for talent. Including a branded coffee bag in a Day 1 onboarding kit signals culture and attention to detail. It's the gift new hires mention to friends who are evaluating whether to join.",
      },
      {
        title: "Deal and pitch takeaways",
        body: "Law firms on King Street, investment banks on Bay, consultancies in the PATH — for relationships where every touch point matters, a branded coffee bag left after a pitch meeting keeps your name on the desk for weeks. Long after the business card is buried, the bag is still in the kitchen.",
      },
      {
        title: "Boardroom coffee service",
        body: "Brand a batch of bags for your boardroom or client-facing kitchen. When partners or clients walk in for a meeting and see your branded coffee on the counter, it signals attention to detail at every level of the organization.",
      },
    ],
  },
  localNote:
    "EZPZ ships to Toronto office addresses in 3–5 business days. For large corporate gifting programs (500+ bags), volume pricing is available. We can also manage delivery directly to multiple addresses — ideal for distributed team gifting or multi-city programs coordinated from a Toronto office.",
  faq: [
    {
      q: "Can you ship corporate gifts directly to multiple addresses?",
      a: "Yes. For corporate gifting programs, we can fulfill orders directly to individual employee or client addresses across Canada. Contact us to discuss a bulk program with multi-address shipping.",
    },
    {
      q: "What's the lead time for a Q4 corporate gifting campaign?",
      a: "For orders under 500 bags, 2–3 weeks is comfortable. For programs above 1,000 bags with custom design, allow 4–5 weeks. We recommend initiating Q4 programs in early October.",
    },
    {
      q: "Can we put our company logo on the bag without it looking like a trade show giveaway?",
      a: "Yes. EZPZ's design platform lets you create packaging that reflects your brand's actual visual identity — not a slapped-on logo. The bags photograph well and look premium, which matters for gifts to senior clients.",
    },
    {
      q: "Is there a per-bag price break at higher volumes?",
      a: "Yes. Pricing scales down from $11.75/bag at 100 units. Contact us for volume pricing at 500, 1,000, and 5,000+ bags.",
    },
  ],
  siblings: [
    { label: "Corporate Offices · Montreal", href: "/en/custom-coffee-corporate-offices-montreal" },
    { label: "Restaurants · Toronto", href: "/en/custom-coffee-restaurants-toronto" },
    { label: "Hotels · Toronto", href: "/en/custom-coffee-hotels-toronto" },
    { label: "Cafés · Toronto", href: "/en/custom-coffee-cafes-toronto" },
  ],
  ctaClose:
    "Your Toronto brand shows up in client meetings. It should show up in their kitchen too.",
  cityPageHref: "/en/custom-coffee-bags-toronto",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-corporate-offices-toronto",
  city: { name: "Toronto", province: "Ontario", deliveryTime: "3 à 5 jours ouvrables" },
  industry: {
    name: "Bureaux corporatifs",
    parentHref: "/fr/custom-coffee-bags-offices",
    parentLabel: "Bureaux corporatifs",
  },
  hero: {
    h1: "Café personnalisé pour les bureaux et entreprises de Toronto",
    subheadline: "Les bureaux et entreprises de Toronto choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les bureaux et entreprises de Toronto",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les bureaux et entreprises de Toronto, Ontario, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 3 à 5 jours ouvrables.",
  why: {
    heading: "Le café de marque dans les bureaux de Toronto",
    paragraphs: [
      "Toronto est la métropole la plus compétitive du Canada avec 27 millions de visiteurs par an. Les bureaux de le quartier financier, King West et Liberty Village accueillent des clients, des candidats et des partenaires qui perçoivent l'environnement de travail comme un signal de la culture d'entreprise. Le café servi en réunion et dans la cuisine parle de cette culture.",
      "Un café de spécialité personnalisé, avec le logo et le nom de votre entreprise sur chaque sachet, dit à quiconque entre dans vos bureaux que vous faites attention aux détails. Et quand vos employés emportent ce café chez eux ou l'offrent à leurs contacts, votre marque voyage avec eux.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Toronto en 3 à 5 jours ouvrables. Aucun minimum signifie que vous pouvez commander pour vos clients VIP individuellement, pour un programme d'office complet ou pour une campagne de cadeaux corporatifs à grande échelle.",
    ],
  },
  useCases: {
    heading: "Comment les entreprises de Toronto utilisent le café de marque",
    items: [
    { title: "Café d'office pour l'expérience employé", body: "Remplacez les capsules génériques par votre propre café de spécialité de marque dans la cuisine. C'est un signal de culture qui dit que votre entreprise investit dans l'expérience quotidienne de ses employés." },
    { title: "Cadeau corporatif pour les clients et partenaires", body: "Offrez votre café de marque aux clients clés, aux nouveaux partenaires et aux prospects importants. C'est un cadeau qui s'utilise quotidiennement et maintient votre nom dans leur environnement de travail et de maison." },
    { title: "Expérience de réunion et de présentation", body: "Servez votre café de spécialité dans les réunions importantes, les présentations clients et les sessions de conseil. Le café de maison dit à vos clients que vous faites attention à leur expérience dans votre espace." },
    { title: "Programmes d'onboarding et de reconnaissance", body: "Incluez un sachet de café de marque dans les trousses d'accueil des nouveaux employés et dans les cadeaux de reconnaissance annuelle. C'est un geste mémorable qui renforce le sentiment d'appartenance à votre organisation." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Toronto, Ontario en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Toronto ?", a: "Les commandes pour Toronto sont expédiées depuis notre torréfacteur montréalais et arrivent en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Les entreprises de Toronto peuvent-elles envoyer le café directement à l'adresse de leurs clients ?", a: "Oui. EZPZ peut expédier directement à chaque adresse client au Canada ou aux États-Unis. C'est particulièrement utile pour les programmes de cadeaux corporatifs qui nécessitent une distribution à plusieurs destinataires sans passer par votre bureau." },
    { q: "Quelle est la tarification pour les commandes corporatives de Toronto ?", a: "EZPZ commence à 11,75 $/sachet pour 100 sacs et diminue selon le volume. Pour les commandes de 5 000 sacs et plus, le prix est de 0,85 $/sachet. Des tarifs personnalisés sont disponibles pour les programmes corporatifs récurrents. Aucun minimum par commande." },
  ],
  siblings: [
    { label: "Bureaux corporatifs · Montréal", href: "/fr/custom-coffee-corporate-offices-montreal" },
    { label: "Bureaux corporatifs · Vancouver", href: "/fr/custom-coffee-corporate-offices-vancouver" },
    { label: "Cafés · Toronto", href: "/fr/custom-coffee-cafes-toronto" },
    { label: "Hôtels · Toronto", href: "/fr/custom-coffee-hotels-toronto" },
    { label: "Gyms · Toronto", href: "/fr/custom-coffee-gyms-toronto" },
  ],
  ctaClose: "Votre marque mérite d'être dans la cuisine de vos clients de Toronto, chaque matin.",
  cityPageHref: "/fr/custom-coffee-bags-toronto",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
