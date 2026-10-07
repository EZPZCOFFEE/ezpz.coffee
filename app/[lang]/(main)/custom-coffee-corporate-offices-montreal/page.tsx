import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les bureaux corporatifs de Montréal | EZPZ Coffee" : "Custom Coffee Bags for Montreal Corporate Offices | EZPZ Coffee";
  const description = isFr ? "Les entreprises de Montréal élèvent leur culture de bureau et leurs cadeaux corporatifs avec le café de spécialité personnalisé. Aucun minimum, design inclus." : "Montreal's tech, pharma, and finance sectors demand bilingual, premium corporate gifts. Custom branded specialty coffee — French/English, zero minimum, roasted locally, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-corporate-offices-montreal`,
      languages: {
        en: "https://www.ezpz.coffee/en/custom-coffee-corporate-offices-montreal",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-corporate-offices-montreal",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-corporate-offices-montreal`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les bureaux corporatifs de Montréal" : "Custom Coffee Bags for Montreal Corporate Offices" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-corporate-offices-montreal",
  city: { name: "Montreal", province: "QC", deliveryTime: "2–3 business days" },
  industry: {
    name: "Corporate Offices",
    parentHref: "/en/custom-coffee-bags-offices",
    parentLabel: "Corporate Offices",
  },
  hero: {
    h1: "Custom Coffee for Montreal Corporate Offices",
    subheadline:
      "Montreal runs on two languages and one strong cup. Make your corporate gift one that travels home in both.",
    ctaSubject: "Corporate coffee gifting Montreal",
  },
  aeoAnswer:
    "Montreal corporate offices can order bilingual (French/English) custom branded specialty coffee bags from EZPZ. No minimum order, starting at 100 bags at $11.75/bag, roasted in Montreal, delivered in 2–3 business days. Available for client gifts, onboarding kits, and event programs.",
  why: {
    heading: "Montreal's Corporate Market and the Bilingual Gift Problem",
    paragraphs: [
      "Greater Montreal has roughly 550,000 office workers across a remarkably diverse corporate landscape — global pharmaceutical companies like GSK and AstraZeneca with major research facilities in Laval; tech leaders like Lightspeed Commerce, Coveo, Dialogue, and Unity; national financial institutions including National Bank and Desjardins; and creative industries anchored by Ubisoft, CGI, and Moment Factory.",
      "Montreal's corporate gifting challenge is unique in Canada: your gift needs to land well in both French and English. A generic English-only corporate gift can feel tone-deaf to a predominantly francophone team. A gift that's been considered for a bilingual audience — with copy in both languages, a Montreal origin story, and premium packaging — signals that your organization pays attention to where it operates.",
      "Custom branded coffee from EZPZ is roasted locally in Montreal, which gives the gift authentic local provenance. 'Roasted in Montreal for [Company Name]' is copy that plays well with both francophone and anglophone recipients, and positions the gift as a reflection of genuine care rather than a line item on a procurement list.",
    ],
  },
  useCases: {
    heading: "How Montreal Companies Use Branded Coffee",
    items: [
      {
        title: "Bilingual Q4 client gifts",
        body: "Custom bags with French/English copy — your logo, the coffee's origin, a message of appreciation — are the Montreal corporate gift that lands equally well with both language communities. Order in October for December delivery.",
      },
      {
        title: "French-first onboarding kits",
        body: "For organizations hiring into primarily francophone teams in Greater Montreal, EZPZ can produce French-first packaging with your brand identity. A Day 1 gift that respects the language of the workplace signals cultural intelligence.",
      },
      {
        title: "Pharma and biotech conference gifts",
        body: "Montreal hosts major life sciences and pharma events. Custom branded bags as conference delegate gifts are clean, professional, and used. They don't end up in the bin on checkout — unlike most conference swag.",
      },
      {
        title: "Remote employee gifting",
        body: "Montreal-based tech companies with distributed teams use branded coffee to maintain culture across cities. EZPZ can ship directly to your employees' home addresses across Canada, with each bag carrying your brand and a personal note.",
      },
    ],
  },
  localNote:
    "EZPZ roasts in Montreal — 2–3 business day delivery to any Greater Montreal office address. Bilingual packaging (French/English) is included at no extra charge. For multi-address programs, contact us to discuss bulk pricing and direct-to-employee shipping.",
  faq: [
    {
      q: "Can you design the bag in French only?",
      a: "Yes. EZPZ can design your bag in French only, English only, or bilingual — your choice. For predominantly francophone organizations in Montreal, French-primary packaging is often the right call.",
    },
    {
      q: "What's the lead time for a Q4 corporate gift program?",
      a: "For orders under 500 bags, 2–3 weeks from design approval. For programs above 1,000 bags, allow 4 weeks. October start is recommended for December delivery.",
    },
    {
      q: "Can you ship directly to employee home addresses?",
      a: "Yes. EZPZ can fulfill orders to individual addresses across Canada — ideal for remote team gifting. Provide us with a shipping manifest and we handle fulfillment per address.",
    },
    {
      q: "Is there volume pricing for large corporate programs?",
      a: "Yes. Pricing scales down from $11.75/bag at 100 units. Contact us for pricing at 500, 1,000, and 5,000+ bags. Large programs also qualify for dedicated account support.",
    },
  ],
  siblings: [
    { label: "Corporate Offices · Toronto", href: "/en/custom-coffee-corporate-offices-toronto" },
    { label: "Restaurants · Montreal", href: "/en/custom-coffee-restaurants-montreal" },
    { label: "Hotels · Montreal", href: "/en/custom-coffee-hotels-montreal" },
    { label: "Cafés · Montreal", href: "/en/custom-coffee-cafes-montreal" },
  ],
  ctaClose:
    "Montreal's best companies take the details seriously. Start with the gift that gets used every morning.",
  cityPageHref: "/en/custom-coffee-bags-montreal",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-corporate-offices-montreal",
  city: { name: "Montréal", province: "Québec", deliveryTime: "2 à 3 jours ouvrables" },
  industry: {
    name: "Bureaux corporatifs",
    parentHref: "/fr/custom-coffee-bags-offices",
    parentLabel: "Bureaux corporatifs",
  },
  hero: {
    h1: "Café personnalisé pour les bureaux et entreprises de Montréal",
    subheadline: "Les bureaux et entreprises de Montréal choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les bureaux et entreprises de Montréal",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les bureaux et entreprises de Montréal, Québec, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 2 à 3 jours ouvrables. Le design bilingue français-anglais est disponible sans frais supplémentaires.",
  why: {
    heading: "Le café de marque dans les bureaux de Montréal",
    paragraphs: [
      "Montréal est la ville où la culture café est née au Canada, avec son riche tissu de quartiers francophones. Les bureaux de centre-ville, Griffintown et le Plateau-Mont-Royal accueillent des clients, des candidats et des partenaires qui perçoivent l'environnement de travail comme un signal de la culture d'entreprise. Le café servi en réunion et dans la cuisine parle de cette culture.",
      "Un café de spécialité personnalisé, avec le logo et le nom de votre entreprise sur chaque sachet, dit à quiconque entre dans vos bureaux que vous faites attention aux détails. Et quand vos employés emportent ce café chez eux ou l'offrent à leurs contacts, votre marque voyage avec eux.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Montréal en 2 à 3 jours ouvrables. Aucun minimum signifie que vous pouvez commander pour vos clients VIP individuellement, pour un programme d'office complet ou pour une campagne de cadeaux corporatifs à grande échelle.",
    ],
  },
  useCases: {
    heading: "Comment les entreprises de Montréal utilisent le café de marque",
    items: [
    { title: "Café d'office pour l'expérience employé", body: "Remplacez les capsules génériques par votre propre café de spécialité de marque dans la cuisine. C'est un signal de culture qui dit que votre entreprise investit dans l'expérience quotidienne de ses employés." },
    { title: "Cadeau corporatif pour les clients et partenaires", body: "Offrez votre café de marque aux clients clés, aux nouveaux partenaires et aux prospects importants. C'est un cadeau qui s'utilise quotidiennement et maintient votre nom dans leur environnement de travail et de maison." },
    { title: "Expérience de réunion et de présentation", body: "Servez votre café de spécialité dans les réunions importantes, les présentations clients et les sessions de conseil. Le café de maison dit à vos clients que vous faites attention à leur expérience dans votre espace." },
    { title: "Programmes d'onboarding et de reconnaissance", body: "Incluez un sachet de café de marque dans les trousses d'accueil des nouveaux employés et dans les cadeaux de reconnaissance annuelle. C'est un geste mémorable qui renforce le sentiment d'appartenance à votre organisation." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Montréal, Québec en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Montréal ?", a: "Les commandes pour Montréal sont expédiées depuis notre torréfacteur montréalais et arrivent en 2 à 3 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Les entreprises de Montréal peuvent-elles envoyer le café directement à l'adresse de leurs clients ?", a: "Oui. EZPZ peut expédier directement à chaque adresse client au Canada ou aux États-Unis. C'est particulièrement utile pour les programmes de cadeaux corporatifs qui nécessitent une distribution à plusieurs destinataires sans passer par votre bureau." },
    { q: "Les entreprises d'Ottawa peuvent-elles obtenir des designs bilingues pour leurs cadeaux corporatifs ?", a: "Oui. Le design bilingue français-anglais est standard sans frais supplémentaires. Pour les entreprises d'Ottawa qui opèrent en milieu bilingue, c'est l'option recommandée." },
  ],
  siblings: [
    { label: "Bureaux corporatifs · Toronto", href: "/fr/custom-coffee-corporate-offices-toronto" },
    { label: "Bureaux corporatifs · Vancouver", href: "/fr/custom-coffee-corporate-offices-vancouver" },
    { label: "Cafés · Montréal", href: "/fr/custom-coffee-cafes-montreal" },
    { label: "Hôtels · Montréal", href: "/fr/custom-coffee-hotels-montreal" },
    { label: "Gyms · Montréal", href: "/fr/custom-coffee-gyms-montreal" },
  ],
  ctaClose: "Votre marque mérite d'être dans la cuisine de vos clients de Montréal, chaque matin.",
  cityPageHref: "/fr/custom-coffee-bags-montreal",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
