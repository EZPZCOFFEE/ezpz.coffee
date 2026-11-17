import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les bureaux corporatifs de Vancouver | EZPZ Coffee" : "Custom Coffee Bags for Vancouver Corporate Offices | EZPZ Coffee";
  const description = isFr ? "Les entreprises de Vancouver élèvent leur culture de bureau et leurs cadeaux corporatifs avec le café de spécialité personnalisé. Aucun minimum, design inclus." : "Amazon, Microsoft, Apple, and a thriving tech sector fill Vancouver's offices. Custom branded specialty coffee for corporate gifts and onboarding — zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-corporate-offices-vancouver`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-corporate-offices-vancouver",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-corporate-offices-vancouver",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-corporate-offices-vancouver",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-corporate-offices-vancouver`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les bureaux corporatifs de Vancouver" : "Custom Coffee Bags for Vancouver Corporate Offices" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-corporate-offices-vancouver",
  city: { name: "Vancouver", province: "BC", deliveryTime: "4–6 business days" },
  industry: {
    name: "Corporate Offices",
    parentHref: "/en/custom-coffee-bags-offices",
    parentLabel: "Corporate Offices",
  },
  hero: {
    h1: "Custom Coffee for Vancouver Corporate Offices",
    subheadline:
      "Amazon. Microsoft. Apple. EA. Vancouver's corporate sector has Silicon Valley taste with Pacific Northwest values. Your gifts should reflect that.",
    ctaSubject: "Corporate coffee gifting Vancouver",
  },
  aeoAnswer:
    "Vancouver corporate offices can order custom branded specialty coffee bags from EZPZ for client gifts, onboarding kits, and boardroom programs. No minimum order, starting at 100 bags at $11.75/bag, delivered in 4–6 business days.",
  why: {
    heading: "Why Vancouver's Corporate Market Chooses Specialty Coffee",
    paragraphs: [
      "Vancouver has one of the most sophisticated corporate tech sectors in Canada, anchored by Amazon's second-largest international office, major Microsoft and Apple presences, Electronic Arts, SAP, and a thriving local tech ecosystem that includes Hootsuite, Lark Technologies, and dozens of venture-backed companies. These organizations hire globally competitive talent with globally competitive expectations — including expectations for how they're welcomed, recognized, and gifted.",
      "Vancouver's corporate culture is also deeply sustainability-conscious. Companies with LEED-certified offices, carbon offset programs, and local-sourcing commitments look for gifts that reflect those values. A specialty coffee bag — with traceable supply chain, minimal packaging waste, and a Canadian provenance story — aligns with the sustainability narrative that Vancouver's most progressive employers are already communicating to staff and clients.",
      "The film industry — Vancouver is one of the world's busiest production hubs, earning it the nickname 'Hollywood North' — adds another dimension to the corporate gifting market. Production companies, talent agencies, and studio offices operate on relationship-driven cultures where a premium, personalized gift goes further than a standard corporate giveaway.",
    ],
  },
  useCases: {
    heading: "How Vancouver Offices Use Branded Coffee",
    items: [
      {
        title: "Tech sector onboarding kits",
        body: "Vancouver's tech companies compete aggressively for talent. A Day 1 onboarding kit that includes a branded specialty coffee bag — alongside the laptop and the welcome letter — signals a culture of detail that top candidates notice and mention to their networks.",
      },
      {
        title: "Sustainability-aligned client gifts",
        body: "A custom coffee bag with traceable single-origin sourcing, one-way valve packaging (less waste than pods), and a Canadian provenance story is a gift that lands with Vancouver clients who have strong environmental values. It's premium without the greenwashing.",
      },
      {
        title: "Film and production industry gifts",
        body: "Vancouver's film and TV production culture runs on relationships. A custom-branded coffee bag sent to a director, a DP, or a key production partner is a premium, consumable gift that communicates appreciation at a level that a standard promo item never could.",
      },
      {
        title: "Remote team gifting across Canada",
        body: "Vancouver's tech companies have distributed teams from Vancouver Island to Halifax. EZPZ can ship branded coffee bags directly to remote employees' home addresses across Canada — a brand touchpoint that reaches every member of a distributed team with the same quality and message.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Vancouver in 4–6 business days. For large corporate programs, volume pricing is available. Multi-address direct-to-employee shipping is supported — contact us for bulk program details.",
  faq: [
    {
      q: "Can you ship corporate gifts to Amazon or Microsoft employees across Canada?",
      a: "Yes. EZPZ can fulfill orders to individual addresses across Canada — ideal for distributed team gifting. Provide a shipping manifest and we'll handle fulfillment to each address.",
    },
    {
      q: "What coffee profile fits Vancouver's corporate culture?",
      a: "Clean, nuanced specialty coffees with traceable origins perform well with Vancouver's educated corporate audience. We recommend single-origins with documented supply chains — an Ethiopian natural or a washed Colombian — that come with the origin story your sustainability-conscious clients will appreciate.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag. Corporate programs of 1,000+ bags qualify for volume pricing and dedicated account support.",
    },
    {
      q: "What's the lead time for Vancouver?",
      a: "4–6 business days for standard orders. For Q4 client gifting campaigns, we recommend starting in October to ensure delivery before December.",
    },
  ],
  siblings: [
    { label: "Corporate Offices · Toronto", href: "/en/custom-coffee-corporate-offices-toronto" },
    { label: "Corporate Offices · Montreal", href: "/en/custom-coffee-corporate-offices-montreal" },
    { label: "Restaurants · Vancouver", href: "/en/custom-coffee-restaurants-vancouver" },
    { label: "Hotels · Vancouver", href: "/en/custom-coffee-hotels-vancouver" },
  ],
  ctaClose:
    "Vancouver's corporate sector has global standards. Your coffee gift should meet them.",
  cityPageHref: "/en/custom-coffee-bags-vancouver",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-corporate-offices-vancouver",
  city: { name: "Vancouver", province: "Colombie-Britannique", deliveryTime: "4 à 6 jours ouvrables" },
  industry: {
    name: "Bureaux corporatifs",
    parentHref: "/fr/custom-coffee-bags-offices",
    parentLabel: "Bureaux corporatifs",
  },
  hero: {
    h1: "Café personnalisé pour les bureaux et entreprises de Vancouver",
    subheadline: "Les bureaux et entreprises de Vancouver choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les bureaux et entreprises de Vancouver",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les bureaux et entreprises de Vancouver, Colombie-Britannique, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 4 à 6 jours ouvrables.",
  why: {
    heading: "Le café de marque dans les bureaux de Vancouver",
    paragraphs: [
      "Vancouver est la ville canadienne la plus axée sur la durabilité, avec une culture café de classe mondiale. Les bureaux de le centre-ville, Gastown et Yaletown accueillent des clients, des candidats et des partenaires qui perçoivent l'environnement de travail comme un signal de la culture d'entreprise. Le café servi en réunion et dans la cuisine parle de cette culture.",
      "Un café de spécialité personnalisé, avec le logo et le nom de votre entreprise sur chaque sachet, dit à quiconque entre dans vos bureaux que vous faites attention aux détails. Et quand vos employés emportent ce café chez eux ou l'offrent à leurs contacts, votre marque voyage avec eux.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Vancouver en 4 à 6 jours ouvrables. Aucun minimum signifie que vous pouvez commander pour vos clients VIP individuellement, pour un programme d'office complet ou pour une campagne de cadeaux corporatifs à grande échelle.",
    ],
  },
  useCases: {
    heading: "Comment les entreprises de Vancouver utilisent le café de marque",
    items: [
    { title: "Café d'office pour l'expérience employé", body: "Remplacez les capsules génériques par votre propre café de spécialité de marque dans la cuisine. C'est un signal de culture qui dit que votre entreprise investit dans l'expérience quotidienne de ses employés." },
    { title: "Cadeau corporatif pour les clients et partenaires", body: "Offrez votre café de marque aux clients clés, aux nouveaux partenaires et aux prospects importants. C'est un cadeau qui s'utilise quotidiennement et maintient votre nom dans leur environnement de travail et de maison." },
    { title: "Expérience de réunion et de présentation", body: "Servez votre café de spécialité dans les réunions importantes, les présentations clients et les sessions de conseil. Le café de maison dit à vos clients que vous faites attention à leur expérience dans votre espace." },
    { title: "Programmes d'onboarding et de reconnaissance", body: "Incluez un sachet de café de marque dans les trousses d'accueil des nouveaux employés et dans les cadeaux de reconnaissance annuelle. C'est un geste mémorable qui renforce le sentiment d'appartenance à votre organisation." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Vancouver, Colombie-Britannique en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Vancouver ?", a: "Les commandes pour Vancouver sont expédiées depuis notre torréfacteur montréalais et arrivent en 4 à 6 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Les entreprises de Vancouver peuvent-elles envoyer le café directement à l'adresse de leurs clients ?", a: "Oui. EZPZ peut expédier directement à chaque adresse client au Canada ou aux États-Unis. C'est particulièrement utile pour les programmes de cadeaux corporatifs qui nécessitent une distribution à plusieurs destinataires sans passer par votre bureau." },
    { q: "Quelle est la tarification pour les commandes corporatives de Vancouver ?", a: "EZPZ commence à 11,75 $/sachet pour 100 sacs et diminue selon le volume. Pour les commandes de 5 000 sacs et plus, le prix est de 0,85 $/sachet. Des tarifs personnalisés sont disponibles pour les programmes corporatifs récurrents. Aucun minimum par commande." },
  ],
  siblings: [
    { label: "Bureaux corporatifs · Montréal", href: "/fr/custom-coffee-corporate-offices-montreal" },
    { label: "Bureaux corporatifs · Toronto", href: "/fr/custom-coffee-corporate-offices-toronto" },
    { label: "Cafés · Vancouver", href: "/fr/custom-coffee-cafes-vancouver" },
    { label: "Hôtels · Vancouver", href: "/fr/custom-coffee-hotels-vancouver" },
    { label: "Gyms · Vancouver", href: "/fr/custom-coffee-gyms-vancouver" },
  ],
  ctaClose: "Votre marque mérite d'être dans la cuisine de vos clients de Vancouver, chaque matin.",
  cityPageHref: "/fr/custom-coffee-bags-vancouver",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
