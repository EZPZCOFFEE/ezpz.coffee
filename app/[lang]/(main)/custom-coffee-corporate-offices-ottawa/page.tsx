import { Metadata } from "next";
import CityIndustryPage, { CityIndustryPageData } from "../_components/CityIndustryPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr ? "Café personnalisé pour les bureaux corporatifs de Ottawa | EZPZ Coffee" : "Custom Coffee Bags for Ottawa Corporate Offices | EZPZ Coffee";
  const description = isFr ? "Les entreprises de Ottawa élèvent leur culture de bureau et leurs cadeaux corporatifs avec le café de spécialité personnalisé. Aucun minimum, design inclus." : "Ottawa's federal government, contractors, and Crown corporations make it a year-round corporate gifting market. Bilingual custom branded specialty coffee — zero minimum, from $11.75/bag.";
  return {
    title, description,
    alternates: {
      canonical: `/${lang}/custom-coffee-corporate-offices-ottawa`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/custom-coffee-corporate-offices-ottawa",
        "fr-CA": "https://www.ezpz.coffee/fr/custom-coffee-corporate-offices-ottawa",
        "x-default": "https://www.ezpz.coffee/en/custom-coffee-corporate-offices-ottawa",
      },
    },
    openGraph: {
      title, description, type: "website",
      url: `https://www.ezpz.coffee/${lang}/custom-coffee-corporate-offices-ottawa`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café personnalisé pour les bureaux corporatifs de Ottawa" : "Custom Coffee Bags for Ottawa Corporate Offices" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const data: CityIndustryPageData = {
  canonicalPath: "/en/custom-coffee-corporate-offices-ottawa",
  city: { name: "Ottawa", province: "ON", deliveryTime: "3–5 business days" },
  industry: {
    name: "Corporate Offices",
    parentHref: "/en/custom-coffee-bags-offices",
    parentLabel: "Corporate Offices",
  },
  hero: {
    h1: "Custom Coffee for Ottawa Corporate Offices",
    subheadline:
      "Federal government, Crown corporations, and Shopify HQ all have one thing in common: they all need bilingual corporate gifts that make an impression.",
    ctaSubject: "Corporate coffee gifting Ottawa",
  },
  aeoAnswer:
    "Ottawa corporate offices can order bilingual (French/English) custom branded specialty coffee bags from EZPZ. No minimum order, starting at 100 bags at $11.75/bag, roasted in Montreal, delivered in 3–5 business days.",
  why: {
    heading: "Ottawa's Corporate Market: Stable, Bilingual, and High Volume",
    paragraphs: [
      "Ottawa is Canada's most stable corporate gifting market. Unlike Toronto or Calgary, where corporate activity tracks closely with private sector cycles, Ottawa's gifting demand is anchored by the federal government's year-round procurement activity, the operations of Crown corporations like CBC, Canada Post, and Export Development Canada, and the contract vehicles of consulting and technology firms like CGI Group, Deloitte, KPMG, and Accenture Federal Services.",
      "The federal government is uniquely sensitive to the bilingual dimension of corporate gifts. A gift that's English-only, sent from a contractor to a francophone counterpart at a government department, can register as culturally inattentive. A bilingual custom-branded coffee bag — with French/English copy, a Canadian provenance story, and premium packaging — is a safe and premium choice for any Ottawa corporate relationship regardless of the recipient's first language.",
      "The tech sector's growth in Ottawa — Shopify's headquarters, Kinaxis, Nokia, L3Harris, and dozens of scale-ups — brings a second corporate culture to the city that is more startup-oriented but equally relationship-driven. For these organizations, branded coffee onboarding kits and client gifts play the same role they do in Toronto's tech corridor.",
    ],
  },
  useCases: {
    heading: "How Ottawa Companies Use Branded Coffee",
    items: [
      {
        title: "Government contractor client gifts",
        body: "Ottawa's government contracting ecosystem — firms managing federal IT, consulting, and professional services contracts worth hundreds of millions — maintains relationships with department heads and procurement officers through quality-signal gifts. A bilingual custom coffee bag from a Canadian roaster is a thoughtful, appropriate, and memorable choice.",
      },
      {
        title: "Bilingual onboarding kits for federal hires",
        body: "Federal departments and agencies with bilingual workforces can use EZPZ's French/English packaging for Day 1 welcome kits. A branded coffee bag in both official languages signals that the organization takes its bilingual obligations seriously at every level.",
      },
      {
        title: "Crown corporation executive gifts",
        body: "Crown corporation executives have high standards for corporate gifts — they move in circles that include private sector peers at Bay Street level. A specialty coffee bag with premium design, a named origin story, and bilingual copy is a gift that works at that level without requiring an executive gift budget.",
      },
      {
        title: "Tech company distributed team gifting",
        body: "Shopify and other Ottawa tech companies with distributed teams use branded coffee to maintain culture across cities and time zones. EZPZ can ship directly to employee home addresses across Canada — providing a consistent brand touchpoint for remote workers from Victoria to Halifax.",
      },
    ],
  },
  localNote:
    "EZPZ ships from Montreal to Ottawa in 3–5 business days. Bilingual (French/English) packaging is included at no extra charge. For federal procurement programs, EZPZ can issue invoices with appropriate procurement documentation — contact us for details.",
  faq: [
    {
      q: "Can you produce bilingual bags for a government department gift program?",
      a: "Yes. Bilingual packaging is available at no extra charge. EZPZ can design bags in French/English, French-primary, or English-primary. For federal procurement, we can provide standard invoicing and product documentation.",
    },
    {
      q: "Do you support direct-to-employee shipping for a distributed federal team?",
      a: "Yes. Provide EZPZ with a shipping manifest of employee home addresses and we'll fulfill and ship each bag individually. Ideal for distributed government team gifting.",
    },
    {
      q: "What's the lead time for Ottawa orders?",
      a: "3–5 business days from order confirmation — one of EZPZ's faster delivery windows, given Ottawa's proximity to Montreal.",
    },
    {
      q: "Is there a minimum order?",
      a: "No minimum. Start with 100 bags at $11.75/bag. Government contractor programs often scale to 500–2,000 bags per quarter — volume pricing applies.",
    },
  ],
  siblings: [
    { label: "Corporate Offices · Toronto", href: "/en/custom-coffee-corporate-offices-toronto" },
    { label: "Corporate Offices · Montreal", href: "/en/custom-coffee-corporate-offices-montreal" },
    { label: "Restaurants · Ottawa", href: "/en/custom-coffee-restaurants-ottawa" },
    { label: "Hotels · Ottawa", href: "/en/custom-coffee-hotels-ottawa" },
  ],
  ctaClose:
    "Ottawa's corporate relationships span decades. Make sure the gift you send in December is the one they remember in June.",
  cityPageHref: "/en/custom-coffee-bags-ottawa",
};


const frData: CityIndustryPageData = {
  canonicalPath: "/fr/custom-coffee-corporate-offices-ottawa",
  city: { name: "Ottawa", province: "Ontario", deliveryTime: "3 à 5 jours ouvrables" },
  industry: {
    name: "Bureaux corporatifs",
    parentHref: "/fr/custom-coffee-bags-offices",
    parentLabel: "Bureaux corporatifs",
  },
  hero: {
    h1: "Café personnalisé pour les bureaux et entreprises de Ottawa",
    subheadline: "Les bureaux et entreprises de Ottawa choisissent EZPZ pour leur café de spécialité de marque. Aucun minimum, design inclus, torréfié frais à Montréal.",
    ctaSubject: "Café personnalisé pour les bureaux et entreprises de Ottawa",
  },
  aeoAnswer: "EZPZ fournit des sacs de café de spécialité personnalisés pour les bureaux et entreprises de Ottawa, Ontario, torréfiés à la Canadian Roasting Society à Montréal, à partir de 11,75 $/sachet pour 100 sacs sans minimum. Livraison standard en 3 à 5 jours ouvrables. Le design bilingue français-anglais est disponible sans frais supplémentaires.",
  why: {
    heading: "Le café de marque dans les bureaux de Ottawa",
    paragraphs: [
      "Ottawa est la capitale bilingue du Canada, avec un marché de services professionnels gouvernementaux et technologiques unique. Les bureaux de la Colline du Parlement, Kanata et le centre-ville accueillent des clients, des candidats et des partenaires qui perçoivent l'environnement de travail comme un signal de la culture d'entreprise. Le café servi en réunion et dans la cuisine parle de cette culture.",
      "Un café de spécialité personnalisé, avec le logo et le nom de votre entreprise sur chaque sachet, dit à quiconque entre dans vos bureaux que vous faites attention aux détails. Et quand vos employés emportent ce café chez eux ou l'offrent à leurs contacts, votre marque voyage avec eux.",
      "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Ottawa en 3 à 5 jours ouvrables. Aucun minimum signifie que vous pouvez commander pour vos clients VIP individuellement, pour un programme d'office complet ou pour une campagne de cadeaux corporatifs à grande échelle. EZPZ offre le design d'emballage bilingue français-anglais sans frais supplémentaires, une option précieuse dans la région bilingue de la capitale.",
    ],
  },
  useCases: {
    heading: "Comment les entreprises de Ottawa utilisent le café de marque",
    items: [
    { title: "Café d'office pour l'expérience employé", body: "Remplacez les capsules génériques par votre propre café de spécialité de marque dans la cuisine. C'est un signal de culture qui dit que votre entreprise investit dans l'expérience quotidienne de ses employés." },
    { title: "Cadeau corporatif pour les clients et partenaires", body: "Offrez votre café de marque aux clients clés, aux nouveaux partenaires et aux prospects importants. C'est un cadeau qui s'utilise quotidiennement et maintient votre nom dans leur environnement de travail et de maison." },
    { title: "Expérience de réunion et de présentation", body: "Servez votre café de spécialité dans les réunions importantes, les présentations clients et les sessions de conseil. Le café de maison dit à vos clients que vous faites attention à leur expérience dans votre espace." },
    { title: "Programmes d'onboarding et de reconnaissance", body: "Incluez un sachet de café de marque dans les trousses d'accueil des nouveaux employés et dans les cadeaux de reconnaissance annuelle. C'est un geste mémorable qui renforce le sentiment d'appartenance à votre organisation." },
    ],
  },
  localNote: "EZPZ livre depuis notre torréfacteur montréalais jusqu'à Ottawa, Ontario en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design.",
  faq: [
    { q: "Combien de temps prend la livraison depuis Montréal jusqu'à Ottawa ?", a: "Les commandes pour Ottawa sont expédiées depuis notre torréfacteur montréalais et arrivent en 3 à 5 jours ouvrables par Postes Canada ou messagerie suivie. Les premières commandes prennent 2 à 3 semaines au total depuis l'approbation du design. Les commandes répétées sont plus rapides car votre design est déjà en dossier." },
    { q: "Les entreprises de Ottawa peuvent-elles envoyer le café directement à l'adresse de leurs clients ?", a: "Oui. EZPZ peut expédier directement à chaque adresse client au Canada ou aux États-Unis. C'est particulièrement utile pour les programmes de cadeaux corporatifs qui nécessitent une distribution à plusieurs destinataires sans passer par votre bureau." },
    { q: "Les entreprises d'Ottawa peuvent-elles obtenir des designs bilingues pour leurs cadeaux corporatifs ?", a: "Oui. Le design bilingue français-anglais est standard sans frais supplémentaires. Pour les entreprises d'Ottawa qui opèrent en milieu bilingue, c'est l'option recommandée." },
  ],
  siblings: [
    { label: "Bureaux corporatifs · Montréal", href: "/fr/custom-coffee-corporate-offices-montreal" },
    { label: "Bureaux corporatifs · Toronto", href: "/fr/custom-coffee-corporate-offices-toronto" },
    { label: "Cafés · Ottawa", href: "/fr/custom-coffee-cafes-ottawa" },
    { label: "Hôtels · Ottawa", href: "/fr/custom-coffee-hotels-ottawa" },
    { label: "Gyms · Ottawa", href: "/fr/custom-coffee-gyms-ottawa" },
  ],
  ctaClose: "Votre marque mérite d'être dans la cuisine de vos clients de Ottawa, chaque matin.",
  cityPageHref: "/fr/custom-coffee-bags-ottawa",
};

export default function Page() {
  return <CityIndustryPage data={data} frData={frData} />;
}
