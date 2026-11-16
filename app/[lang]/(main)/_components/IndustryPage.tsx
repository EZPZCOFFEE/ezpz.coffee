"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

import styles from "./industryPage.module.scss";
import { getCombosForIndustry } from "@/lib/programmatic-seo/data";

export interface IndustryPageData {
  industry: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  intro: string;
  whoOrders: { title: string; body: string }[];
  howItWorks: { n: string; title: string; body: string }[];
  benefits: { n: string; title: string; body: string }[];
  testimonial: { quote: string; author: string; role: string };
  canonicalPath: string;
}

interface IndustryPageProps {
  data: IndustryPageData;
  frData?: IndustryPageData;
  showWholesaleLink?: boolean;
}

const IndustryPage = ({ data, frData, showWholesaleLink }: IndustryPageProps) => {
  const locale = useLocale();
  const isFr = locale === "fr";
  const d = isFr && frData ? frData : data;

  const industrySlug = d.canonicalPath.replace(/^\/custom-coffee-bags-/, "");
  const cityComboLinks = getCombosForIndustry(industrySlug);

  const ALL_INDUSTRIES: { label: string; href: string }[] = [
    { label: isFr ? "Hôtels" : "Hotels", href: `/${locale}/custom-coffee-bags-hotels` },
    { label: isFr ? "Restaurants" : "Restaurants", href: `/${locale}/custom-coffee-bags-restaurants` },
    { label: isFr ? "Gyms et studios" : "Gyms", href: `/${locale}/custom-coffee-bags-gyms` },
    { label: isFr ? "Boutiques" : "Boutiques", href: `/${locale}/custom-coffee-bags-boutiques` },
    { label: isFr ? "Spas" : "Spas", href: `/${locale}/custom-coffee-bags-spas` },
    { label: isFr ? "Bureaux" : "Offices", href: `/${locale}/custom-coffee-bags-offices` },
    { label: isFr ? "Agents immobiliers" : "Real Estate Agents", href: `/${locale}/custom-coffee-bags-real-estate-agents` },
    { label: isFr ? "Studios de yoga" : "Yoga Studios", href: `/${locale}/custom-coffee-bags-yoga-studios` },
    { label: isFr ? "Clubs de golf" : "Golf Clubs", href: `/${locale}/custom-coffee-bags-golf-clubs` },
    { label: isFr ? "Espaces de coworking" : "Co-Working Spaces", href: `/${locale}/custom-coffee-bags-co-working-spaces` },
    { label: isFr ? "Vignobles" : "Wineries", href: `/${locale}/custom-coffee-bags-wineries` },
    { label: isFr ? "Microbrasseries" : "Breweries", href: `/${locale}/custom-coffee-bags-breweries` },
    { label: isFr ? "Camions-restaurants" : "Food Trucks", href: `/${locale}/custom-coffee-bags-food-trucks` },
    { label: isFr ? "Traiteurs" : "Catering Companies", href: `/${locale}/custom-coffee-bags-catering-companies` },
    { label: isFr ? "Organisateurs d'événements" : "Event Planners", href: `/${locale}/custom-coffee-bags-event-planners` },
    { label: isFr ? "Universités" : "Universities", href: `/${locale}/custom-coffee-bags-universities` },
    { label: isFr ? "Boîtes d'abonnement" : "Subscription Boxes", href: `/${locale}/custom-coffee-bags-subscription-boxes` },
    { label: isFr ? "Cabinets dentaires" : "Dental Offices", href: `/${locale}/custom-coffee-bags-dental-offices` },
    { label: isFr ? "Cliniques médicales" : "Medical Clinics", href: `/${locale}/custom-coffee-bags-medical-clinics` },
    { label: isFr ? "Cabinets d'avocats" : "Law Firms", href: `/${locale}/custom-coffee-bags-law-firms` },
    { label: isFr ? "Country clubs" : "Country Clubs", href: `/${locale}/custom-coffee-bags-country-clubs` },
    { label: isFr ? "Lieux de mariage" : "Wedding Venues", href: `/${locale}/custom-coffee-bags-wedding-venues` },
    { label: isFr ? "Hôtes Airbnb" : "Airbnb Hosts", href: `/${locale}/custom-coffee-bags-airbnb` },
    { label: isFr ? "Entreprises" : "Corporate", href: `/${locale}/custom-coffee-bags-corporate` },
  ];

  const relatedIndustries = ALL_INDUSTRIES.filter((i) => !i.href.endsWith(d.canonicalPath));

  const HOW_IT_WORKS_DEFAULT_FR = [
    { n: "01", title: "Créez votre sachet en ligne", body: "Téléchargez votre logo, choisissez votre format d'emballage et ajoutez votre message. Notre outil en ligne prend moins de 10 minutes." },
    { n: "02", title: "Choisissez votre café", body: "Sélectionnez parmi nos cafés de spécialité traçables : torréfaction légère, médium ou foncée, d'Éthiopie, de Colombie, du Brésil et plus encore." },
    { n: "03", title: "Nous torréfions frais à Montréal", body: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet personnalisé. Aucun minimum requis." },
    { n: "04", title: "Livraison partout au Canada et aux États-Unis", body: "Nous livrons directement à votre porte par courrier international suivi. Canada : 3 à 10 jours. États-Unis : 7 à 14 jours." },
  ];

  const HOW_IT_WORKS_DEFAULT_EN = [
    { n: "01", title: "Design your bag online", body: "Upload your logo, choose your packaging style, and add your message. Our online tool takes under 10 minutes." },
    { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
    { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
    { n: "04", title: "Delivered across Canada & the USA", body: "We ship directly to your door via tracked international courier. Canada in 3–10 days. USA in 7–14 days." },
  ];

  const howItWorks = d.howItWorks ?? (isFr ? HOW_IT_WORKS_DEFAULT_FR : HOW_IT_WORKS_DEFAULT_EN);

  const base = `https://www.ezpz.coffee/${locale}`;
  const industryLower = d.industry.toLowerCase();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isFr ? "Accueil" : "Home", item: base },
      { "@type": "ListItem", position: 2, name: isFr ? "Industries" : "Industries", item: `${base}/industries` },
      { "@type": "ListItem", position: 3, name: `${isFr ? "Sacs de café pour" : "Custom Coffee Bags for"} ${d.industry}`, item: `${base}${d.canonicalPath}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: isFr
          ? `Les ${industryLower} peuvent-ils obtenir des sacs de café personnalisés au Canada ?`
          : `Can ${industryLower} get custom branded coffee bags in Canada?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: isFr
            ? `Oui. EZPZ Coffee crée des sacs de café entièrement personnalisés pour les ${industryLower} partout au Canada et aux États-Unis. Le design est toujours inclus, sans frais supplémentaires, sans minimum de commande.`
            : `Yes. EZPZ Coffee creates fully custom branded coffee bags for ${industryLower} across Canada and the USA. Custom design is always included at no extra cost, with zero minimum order.`,
        },
      },
      {
        "@type": "Question",
        name: isFr
          ? `Quel est le minimum de commande pour les sacs de café personnalisés pour les ${industryLower} ?`
          : `What is the minimum order for custom coffee bags for ${industryLower}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: isFr
            ? `EZPZ Coffee n'a aucun minimum de commande pour les sacs de café personnalisés, ce qui est idéal pour les ${industryLower}. Vous pouvez commencer avec un seul sachet pour tester votre marque.`
            : `EZPZ Coffee has zero minimum order for custom coffee bags, making it ideal for ${industryLower}. You can order a single bag to test your brand before scaling.`,
        },
      },
      {
        "@type": "Question",
        name: isFr
          ? `Combien de temps faut-il pour recevoir des sacs de café personnalisés pour les ${industryLower} ?`
          : `How long does it take to get custom coffee bags for ${industryLower}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: isFr
            ? `Les sacs de café personnalisés pour les ${industryLower} sont prêts en 2 à 3 semaines après approbation du design. EZPZ torréfie frais à Montréal et livre partout au Canada (3 à 10 jours ouvrables) et aux États-Unis (7 à 14 jours ouvrables).`
            : `Custom coffee bags for ${industryLower} take 2 to 3 weeks from design approval to delivery. EZPZ roasts the coffee fresh in Montreal and ships across Canada (3–10 business days) and to the USA (7–14 business days).`,
        },
      },
    ],
  };

  const pageUrl = `${base}${d.canonicalPath.replace(/^\/(en|fr)/, "")}`;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: isFr ? `Sacs de café personnalisés pour ${d.industry}` : `Custom Coffee Bags for ${d.industry}`,
    description: isFr
      ? `Sacs de café de spécialité personnalisés pour les ${industryLower}. Aucun minimum de commande. Design inclus. Torréfié frais à Montréal et livré partout au Canada et aux États-Unis.`
      : `Custom branded specialty coffee bags for ${industryLower}. No minimum order. Full design included. Roasted fresh in Montreal and shipped across Canada and the USA.`,
    brand: { "@type": "Brand", name: "EZPZ Coffee" },
    image: ["https://www.ezpz.coffee/assets/banner-01.jpg"],
    sku: "EZPZ-CCB",
    url: pageUrl,
    offers: {
      "@type": "Offer",
      url: pageUrl,
      priceCurrency: "CAD",
      price: "11.75",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: "EZPZ Coffee" },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "CA",
        returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: { "@type": "MonetaryAmount", value: "5.00", currency: "CAD" },
        shippingDestination: { "@type": "DefinedRegion", addressCountry: "CA" },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: { "@type": "QuantitativeValue", minValue: 10, maxValue: 21, unitCode: "DAY" },
          transitTime: { "@type": "QuantitativeValue", minValue: 3, maxValue: 10, unitCode: "DAY" },
        },
      },
    },
  };

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumbInner}>
          <Link href={`/${locale}`} className={styles.breadcrumbLink}>{isFr ? "Accueil" : "Home"}</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <Link href={`/${locale}/industries`} className={styles.breadcrumbLink}>{isFr ? "Industries" : "Industries"}</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCurrent}>{d.industry}</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>{d.eyebrow}</span>
          <h1 className={styles.heroTitle}>{d.headline}</h1>
          <p className={styles.heroSubtitle}>{d.subheadline}</p>
          <div className={styles.heroButtons}>
            <Link href={`/${locale}/design`} className={styles.heroPrimary}>{isFr ? "Créez votre sachet" : "Design your bag"}</Link>
            <Link href={`/${locale}/contact`} className={styles.heroSecondary}>{isFr ? "Obtenir une soumission gratuite" : "Get a free quote"}</Link>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <p className={styles.introText}>{d.intro}</p>
          <Link href={`/${locale}/industries`} className={styles.backLink}>{isFr ? "← Toutes les industries que nous servons" : "← All industries we serve"}</Link>
        </div>
      </section>

      {/* ── Who Orders This ── */}
      <section className={styles.who}>
        <div className={styles.whoInner}>
          <span className={styles.eyebrow}>{isFr ? "Qui commande" : "Who orders this"}</span>
          <h2 className={styles.sectionTitleLight}>{isFr ? `Qui commande des sacs de café pour les ${industryLower}.` : `Who orders custom coffee bags for ${industryLower}.`}</h2>
          <div className={styles.whoGrid}>
            {d.whoOrders.map((item) => (
              <div key={item.title} className={styles.whoCard}>
                <h3 className={styles.whoCardTitle}>{item.title}</h3>
                <p className={styles.whoCardBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className={styles.how}>
        <div className={styles.howInner}>
          <span className={styles.eyebrow}>{isFr ? "Comment ça marche" : "How it works"}</span>
          <h2 className={styles.sectionTitle}>{isFr ? "De l'idée à la livraison en moins de 3 semaines." : "From idea to delivery in under 3 weeks."}</h2>
          <div className={styles.howGrid}>
            {howItWorks.map((step) => (
              <div key={step.n} className={styles.howStep}>
                <span className={styles.howNumber}>{step.n}</span>
                <h3 className={styles.howStepTitle}>{step.title}</h3>
                <p className={styles.howStepBody}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className={styles.benefits}>
        <div className={styles.benefitsInner}>
          <span className={styles.eyebrow}>{isFr ? "Pourquoi ça marche" : "Why it works"}</span>
          <h2 className={styles.sectionTitleLight}>{isFr ? `Pourquoi le café personnalisé fonctionne pour les ${industryLower}.` : `Why custom coffee works for ${industryLower}.`}</h2>
          <div className={styles.benefitsGrid}>
            {d.benefits.map((b) => (
              <div key={b.n} className={styles.benefitCard}>
                <span className={styles.benefitNumber}>{b.n}</span>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitBody}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className={styles.testimonial}>
        <div className={styles.testimonialInner}>
          <p className={styles.testimonialQuote}>{d.testimonial.quote}</p>
          <p className={styles.testimonialAuthor}>{d.testimonial.author}</p>
          <p className={styles.testimonialRole}>{d.testimonial.role}</p>
        </div>
      </section>

      {/* ── City-specific pages ── */}
      {cityComboLinks.length > 0 && (
        <section className={styles.related}>
          <div className={styles.relatedInner}>
            <span className={styles.eyebrow}>{isFr ? "Explorer par ville" : "Explore by city"}</span>
            <div className={styles.relatedGrid}>
              {cityComboLinks.map(({ label, href }) => (
                <Link key={href} href={href.replace("/en/", `/${locale}/`)} className={styles.relatedLink}>{label}</Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related Industries ── */}
      <section className={styles.related}>
        <div className={styles.relatedInner}>
          <span className={styles.eyebrow}>{isFr ? "D'autres industries que nous servons" : "More industries we serve"}</span>
          <div className={styles.relatedGrid}>
            {relatedIndustries.map(({ label, href }) => (
              <Link key={href} href={href} className={styles.relatedLink}>{label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>{isFr ? `Prêt à lancer votre marque de café pour les ${industryLower} ?` : `Ready to launch your ${industryLower} coffee brand?`}</h2>
          <p className={styles.ctaSubtext}>{isFr ? "Aucun minimum de commande. Design inclus. Livré partout au Canada et aux États-Unis." : "No minimum order. Full design included. Shipped across Canada and the USA."}</p>
          <div className={styles.ctaButtons}>
            <Link href={`/${locale}/design`} className={styles.ctaPrimary}>{isFr ? "Créez votre sachet" : "Design your bag"}</Link>
            <Link href={`/${locale}/contact`} className={styles.ctaSecondary}>{isFr ? "Obtenir une soumission gratuite" : "Get a free quote"}</Link>
          </div>
          {showWholesaleLink && (
            <p style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.65 }}>
              {isFr ? "Vous cherchez des grains en vrac à servir ? " : "Looking for bulk beans to brew and serve? "}
              <Link
                href={isFr ? `/${locale}/cafe-en-gros` : `/${locale}/wholesale-coffee-beans`}
                style={{ color: "rgba(255,255,255,0.9)", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                {isFr ? "Voir notre programme de café en gros →" : "See our wholesale coffee beans program →"}
              </Link>
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default IndustryPage;
