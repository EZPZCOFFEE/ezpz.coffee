import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les bureaux corporatifs de Calgary | EZPZ Coffee" : "Custom Coffee Bags for Calgary Corporate Offices | EZPZ Coffee";
  const description = isFr ? "Les entreprises de Calgary élèvent leur culture de bureau et leurs cadeaux corporatifs avec le café de spécialité personnalisé. Aucun minimum, design inclus." : "Calgary's energy sector and growing tech corridor make it Canada's most active corporate gifting market outside Toronto. Custom branded specialty coffee, zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-corporate-offices-calgary`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-corporate-offices-calgary",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-corporate-offices-calgary",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-corporate-offices-calgary",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-corporate-offices-calgary`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les bureaux corporatifs de Calgary" : "Custom Coffee Bags for Calgary Corporate Offices" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-corporate-offices-calgary",
  city: { name: "Calgary", province: "AB", deliveryTime: "4–6 business days" },
  industry: {
    name: "Corporate Offices",
    parentHref: "/en/custom-coffee-bags-offices",
    parentLabel: "Corporate Offices",
  },
  hero: {
    h1: "Custom Coffee for Calgary Corporate Offices",
    subheadline:
      "The energy sector runs on relationships. The tech corridor runs on retention. Both run on coffee — make yours branded.",
    ctaSubject: "Corporate coffee gifting Calgary",
  },
  aeoAnswer:
    "Calgary corporate offices can order custom branded specialty coffee bags from EZPZ for client gifts, employee programs, and energy sector entertaining. No minimum order, starting at 100 bags at $11.75/bag, delivered in 4–6 business days.",
  why: {
    heading: "Calgary's Corporate Gifting Market and Why Coffee Wins",
    paragraphs: [
      "Calgary's corporate sector is shaped by two dominant forces: the energy industry — Suncor Energy, Cenovus Energy, Canadian Natural Resources, Enbridge, TC Energy — whose Q4 close-out and deal celebration culture drives intense gifting activity, and a rapidly growing technology corridor in the Beltline and East Village that is producing a new class of Calgary employers competing for talent with Toronto and Vancouver.",
      "Energy sector professionals in Calgary are accustomed to premium. Client relationships in oil and gas are maintained over decades, and the gifts that sustain those relationships need to be quality-signal items, not generic promotional merchandise. A custom-branded specialty coffee bag — with a traceable origin, premium packaging, and your firm's name on the design — is a gift that a Suncor VP puts on their desk at home rather than in the donation bin.",
      "The Q4 gifting calendar is particularly intense in Calgary because energy sector fiscal years are closely tied to oil price cycles, and Q4 often coincides with deal announcements, year-end bonuses, and the kind of relationship investment that precedes a strong Q1. Getting your branded coffee in a client's hands in November or December pays dividends in January.",
    ],
  },
  useCases: {
    heading: "How Calgary Companies Use Branded Coffee",
    items: [
      {
        title: "Energy sector Q4 client gifts",
        body: "A custom-branded specialty coffee bag sent with a handwritten note to a client at Suncor, Cenovus, or TC Energy is a gift that gets remembered. In a sector where relationships last decades, a quality-signal gift matters more than a generic one — and coffee gets used every morning.",
      },
      {
        title: "Deal announcement celebration bags",
        body: "Major energy deals in Calgary are celebrated internally with team gifts. A batch of custom-branded bags — with the deal name, the company logo, and the close date — is a collectible gift that commemorates a major professional milestone.",
      },
      {
        title: "Tech corridor onboarding and retention",
        body: "Calgary's Beltline tech companies compete with Toronto and Vancouver for engineering and product talent. A branded coffee bag in the Day 1 kit — alongside the standard MacBook Pro welcome — signals that this company is thoughtful in a way that a basic Amazon gift card never does.",
      },
      {
        title: "TELUS Convention Centre conference bags",
        body: "Calgary hosts major energy industry conferences including Global Petroleum Show and the International Petroleum Technology Conference. Company-branded coffee bags as delegate gifts reach an international audience of industry decision-makers.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Calgary in 4–6 business days. For Q4 energy sector programs, order by November 1 to ensure delivery before December 20. Volume pricing available at 500+ bags.",
  faq: [
    {
      q: "When should I order for Q4 Calgary corporate gifting?",
      a: "Order by November 1 for December delivery. Energy sector Q4 gifting in Calgary runs November–December, and lead time from design approval to delivery is 2–3 weeks.",
    },
    {
      q: "Can you produce coffee bags for a specific deal or project celebration?",
      a: "Yes. EZPZ can design a custom bag for a specific deal announcement, project milestone, or team achievement. Minimum is 100 bags with a 2-week lead time from design approval.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag. Energy sector programs often scale to 500–2,000 bags for client lists — volume pricing applies.",
    },
    {
      q: "How does the coffee hold up in a corporate gift package?",
      a: "Very well. EZPZ bags are sealed with a one-way degas valve and are shelf-stable for 12+ months after roast date. They travel well, look premium in a gift box, and arrive fresh.",
    },
  ],
  siblings: [
    { label: "Corporate Offices · Toronto", href: "/en/custom-coffee-corporate-offices-toronto" },
    { label: "Corporate Offices · Vancouver", href: "/en/custom-coffee-corporate-offices-vancouver" },
    { label: "Restaurants · Calgary", href: "/en/custom-coffee-restaurants-calgary" },
    { label: "Hotels · Calgary", href: "/en/custom-coffee-hotels-calgary" },
  ],
  ctaClose:
    "Calgary's corporate culture is built on long-term relationships. Make sure your coffee is in the hands of the people you're investing in.",
  cityPageHref: "/en/custom-coffee-bags-calgary",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-corporate-offices-calgary",
  city: { name: "Calgary", province: "Alberta", deliveryTime: "4 à 6 jours ouvrables" },
  industry: {
    name: "Bureaux corporatifs",
    parentHref: "/fr/custom-coffee-bags-offices",
    parentLabel: "Bureaux corporatifs",
  },
  hero: {
    h1: "Café personnalisé pour les bureaux et entreprises de Calgary",
    subheadline: "Les bureaux et entreprises de Calgary choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les bureaux et entreprises de Calgary",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les bureaux et entreprises de Calgary, Alberta, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 4 à 6 jours ouvrables.",
  why: {
    heading: "Le café de marque dans les bureaux de Calgary",
    paragraphs: [
      "Calgary est le marché corporatif et énergétique du Canada, avec une clientèle exigeante et un pouvoir d'achat élevé. Les bureaux de le centre-ville, Beltline et Kensington accueillent des clients, des candidats et des partenaires qui perçoivent l'environnement de travail comme un signal de la culture d'entreprise. Le café servi en réunion et dans la cuisine parle de cette culture.",
      "Un café de spécialité personnalisé, avec le logo et le nom de votre entreprise sur chaque sachet, dit à quiconque entre dans vos bureaux que vous faites attention aux détails. Et quand vos employés emportent ce café chez eux ou l'offrent à leurs contacts, votre marque voyage avec eux.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Calgary en 4 à 6 jours ouvrables. Aucun minimum signifie que vous pouvez commander pour vos clients VIP individuellement, pour un programme d'office complet ou pour une campagne de cadeaux corporatifs à grande échelle.",
    ],
  },
  useCases: {
    heading: "Comment les entreprises de Calgary utilisent le café de marque",
    items: [
    { title: "Café d'office pour l'expérience employé", body: "Remplacez les capsules génériques par votre propre café de spécialité de marque dans la cuisine. C'est un signal de culture qui dit que votre entreprise investit dans l'expérience quotidienne de ses employés." },
    { title: "Cadeau corporatif pour les clients et partenaires", body: "Offrez votre café de marque aux clients clés, aux nouveaux partenaires et aux prospects importants. C'est un cadeau qui s'utilise quotidiennement et maintient votre nom dans leur environnement de travail et de maison." },
    { title: "Expérience de réunion et de présentation", body: "Servez votre café de spécialité dans les réunions importantes, les présentations clients et les sessions de conseil. Le café de maison dit à vos clients que vous faites attention à leur expérience dans votre espace." },
    { title: "Programmes d'onboarding et de reconnaissance", body: "Incluez un sachet de café de marque dans les trousses d'accueil des nouveaux employés et dans les cadeaux de reconnaissance annuelle. C'est un geste mémorable qui renforce le sentiment d'appartenance à votre organisation." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Calgary, Alberta en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Calgary ?", a: "Les commandes pour Calgary sont expédiées depuis notre torréfacteur montréalais et arrivent en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Les entreprises de Calgary peuvent-elles envoyer le café directement à l'adresse de leurs clients ?", a: "Oui. EZPZ peut expédier directement à chaque adresse client au Canada ou aux États-Unis. C'est particulièrement utile pour les programmes de cadeaux corporatifs qui nécessitent une distribution à plusieurs destinataires sans passer par votre bureau." },
    { q: "Quelle est la tarification pour les commandes corporatives de Calgary ?", a: "EZPZ commence à 11,75 $/sachet pour 100 sacs et diminue selon le volume. Pour les commandes de 5 000 sacs et plus, le prix est de 0,85 $/sachet. Des tarifs personnalisés sont disponibles pour les programmes corporatifs récurrents. Aucun minimum par commande." },
  ],
  siblings: [
    { label: "Bureaux corporatifs · Montréal", href: "/fr/custom-coffee-corporate-offices-montreal" },
    { label: "Bureaux corporatifs · Toronto", href: "/fr/custom-coffee-corporate-offices-toronto" },
    { label: "Cafés · Calgary", href: "/fr/custom-coffee-cafes-calgary" },
    { label: "Hôtels · Calgary", href: "/fr/custom-coffee-hotels-calgary" },
    { label: "Gyms · Calgary", href: "/fr/custom-coffee-gyms-calgary" },
  ],
  ctaClose: "Votre marque mérite d'être dans la cuisine de vos clients de Calgary, chaque matin.",
  cityPageHref: "/fr/custom-coffee-bags-calgary",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
