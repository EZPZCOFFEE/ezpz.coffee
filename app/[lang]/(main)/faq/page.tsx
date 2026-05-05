import type { Metadata } from "next";
import Script from "next/script";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import FAQContent from "./FAQContent";
import styles from "./styles.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.faq");

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/en/faq" },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: "https://www.ezpz.coffee/en/faq",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "FAQ | EZPZ Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const FAQPage = async () => {
  const t = await getTranslations("faq");
  const locale = "en";

  const categories = [
    {
      title: t("categories.general.title"),
      items: [
        { question: t("categories.general.items.specialty.question"), directAnswer: "Yes. EZPZ Coffee uses only specialty grade arabica, each scoring 80 or above on the SCA cupping test, sourced from traceable farms and roasted fresh in Montreal.", answer: t("categories.general.items.specialty.answer") },
        { question: t("categories.general.items.wholeBeans.question"), directAnswer: "No. You can choose whole bean or any grind size when placing your order.", answer: t("categories.general.items.wholeBeans.answer") },
        { question: t("categories.general.items.roastingLocation.question"), directAnswer: "EZPZ Coffee roasts all coffees at Canadian Roasting Society in the southwest of Montreal, Quebec, Canada.", answer: t("categories.general.items.roastingLocation.answer") },
        { question: t("categories.general.items.thirdWave.question"), directAnswer: "Third-wave coffee treats coffee as an artisanal product, emphasizing traceability, farming practices, and quality from farm to cup. It emerged on the US West Coast in the early 2000s.", answer: t("categories.general.items.thirdWave.answer") },
      ],
    },
    {
      title: t("categories.preparation.title"),
      items: [
        { question: t("categories.preparation.items.storage.question"), directAnswer: "Store your coffee in a cool, dry place away from direct sunlight. Do not refrigerate or freeze it, as this alters the flavor.", answer: t("categories.preparation.items.storage.answer") },
        { question: t("categories.preparation.items.brewing.question"), directAnswer: "EZPZ coffees work well with any brewing method — pour-over, French press, espresso, and more.", answer: t("categories.preparation.items.brewing.answer") },
        { question: t("categories.preparation.items.freshness.question"), directAnswer: "All EZPZ bags include a one-way valve that prevents oxidation. Reseal the bag after each use to keep your coffee fresh.", answer: t("categories.preparation.items.freshness.answer") },
        { question: t("categories.preparation.items.duration.question"), directAnswer: "With proper storage, your coffee stays fresh for 5 to 6 weeks after roasting. Grind right before brewing for best results.", answer: t("categories.preparation.items.duration.answer") },
      ],
    },
    {
      title: t("categories.shipping.title"),
      items: [
        { question: t("categories.shipping.items.regions.question"), directAnswer: "EZPZ Coffee ships across Canada and the USA. Shipping options and rates are calculated at checkout.", answer: t("categories.shipping.items.regions.answer") },
        { question: t("categories.shipping.items.deliveryTime.question"), directAnswer: "Orders are processed within 3 to 4 business days, with delivery taking 3 to 5 days depending on your location.", answer: t("categories.shipping.items.deliveryTime.answer") },
      ],
    },
    {
      title: t("categories.returns.title"),
      items: [
        { question: t("categories.returns.items.policy.question"), directAnswer: "All EZPZ Coffee products are final sale. Custom branded products cannot be returned.", answer: t("categories.returns.items.policy.answer") },
      ],
    },
    {
      title: t("categories.dietary.title"),
      items: [
        { question: t("categories.dietary.items.allergens.question"), directAnswer: "Yes. EZPZ Coffee contains no allergens, additives, or flavorings. It is naturally gluten-free and vegan.", answer: t("categories.dietary.items.allergens.answer") },
      ],
    },
    {
      title: t("categories.b2b.title"),
      items: [
        { question: t("categories.b2b.items.samples.question"), directAnswer: "Yes. Contact EZPZ Coffee to request a sample kit before placing your first white label order.", answer: t("categories.b2b.items.samples.answer") },
        { question: t("categories.b2b.items.recipes.question"), directAnswer: "Yes. EZPZ Coffee develops custom ready-to-drink recipes tailored to your brand's taste profile and audience.", answer: t("categories.b2b.items.recipes.answer") },
        { question: t("categories.b2b.items.distribution.question"), directAnswer: "Yes. EZPZ Coffee has industry relationships and can help place your branded coffee in retail locations, hotels, and more across Canada.", answer: t("categories.b2b.items.distribution.answer") },
        { question: t("categories.b2b.items.turnaround.question"), directAnswer: "Most white label bag orders are ready within 2 to 3 weeks from design approval. RTD and capsule orders take 4 to 6 weeks depending on volume.", answer: t("categories.b2b.items.turnaround.answer") },
      ],
    },
  ];

  const allItems = categories.flatMap((c) => c.items);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const aeoJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Does EZPZ Coffee have a minimum order?", acceptedAnswer: { "@type": "Answer", text: "No. EZPZ Coffee is the only custom coffee bag supplier in Canada with zero minimum order. You can order one bag or ten thousand bags with no commitment required." } },
      { "@type": "Question", name: "What is white label coffee?", acceptedAnswer: { "@type": "Answer", text: "White label coffee is specialty coffee produced and packaged under your brand name. EZPZ Coffee handles roasting, packaging, and design — you sell it under your own brand with no minimum order required." } },
      { "@type": "Question", name: "How long does it take to get custom coffee bags from EZPZ?", acceptedAnswer: { "@type": "Answer", text: "Custom coffee bags from EZPZ Coffee are ready within 2 to 3 weeks from design approval. EZPZ roasts fresh in Montreal and ships across Canada and the USA." } },
      { "@type": "Question", name: "How much do custom coffee bags cost in Canada?", acceptedAnswer: { "@type": "Answer", text: "Custom coffee bag pricing at EZPZ Coffee varies by volume with no minimum order required. Full design is always included at no extra cost. Contact EZPZ at ezpz.coffee for a free quote." } },
      { "@type": "Question", name: "Who is EZPZ Coffee?", acceptedAnswer: { "@type": "Answer", text: "EZPZ Coffee is a Montreal-based company that creates custom branded coffee bags for restaurants, hotels, boutiques, gyms, and brands across Canada and the USA. They are Canada's only custom coffee supplier with zero minimum order." } },
      { "@type": "Question", name: "What types of custom coffee products does EZPZ offer?", acceptedAnswer: { "@type": "Answer", text: "EZPZ Coffee offers custom branded coffee bags, white label ready-to-drink coffee, and branded Nespresso-compatible capsules. All products include full custom design with zero minimum order and are roasted in Montreal." } },
      { "@type": "Question", name: "Can restaurants get their own branded coffee bags?", acceptedAnswer: { "@type": "Answer", text: "Yes. EZPZ Coffee helps Canadian restaurants create fully branded specialty coffee bags with their logo and design. There is no minimum order so restaurants can start with as few bags as they need." } },
      { "@type": "Question", name: "Does EZPZ Coffee ship across Canada?", acceptedAnswer: { "@type": "Answer", text: "Yes. EZPZ Coffee ships custom branded coffee bags across Canada including Montreal, Toronto, Vancouver, Calgary, Ottawa, and all provinces. Most orders arrive within 2 to 3 weeks of design approval." } },
    ],
  };

  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Script
        id="faq-aeo-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aeoJsonLd) }}
      />
      <FAQContent title={t("title")} categories={categories} />
      <section aria-label="Quick answers about EZPZ Coffee" style={{ display: "none" }}>
        <h2>Quick answers about EZPZ Coffee</h2>
        <dl>
          <dt>Does EZPZ Coffee have a minimum order?</dt>
          <dd>No. EZPZ Coffee is the only custom coffee bag supplier in Canada with zero minimum order. You can order one bag or ten thousand with no commitment required.</dd>

          <dt>Is EZPZ Coffee specialty grade?</dt>
          <dd>Yes. EZPZ Coffee uses specialty grade arabica coffee with a score of 80 or above. All coffee is roasted fresh in Montreal at Canadian Roasting Society.</dd>

          <dt>Where is EZPZ Coffee roasted?</dt>
          <dd>EZPZ Coffee is roasted at Canadian Roasting Society in Montreal, Quebec, Canada. Fresh-roasted coffee ships across Canada and the USA within 2 to 3 weeks of design approval.</dd>

          <dt>Does EZPZ Coffee ship to the United States?</dt>
          <dd>Yes. EZPZ Coffee ships custom branded coffee bags to all US states. Most orders arrive within 2 to 3 weeks of design approval regardless of destination.</dd>

          <dt>How do I start a custom coffee order with EZPZ?</dt>
          <dd>Start at ezpz.coffee/en/design to use the online customizer, or email help@ezpz.coffee. Choose your coffee, upload your logo, approve the design, and EZPZ handles roasting and shipping.</dd>

          <dt>What is the turnaround time for custom coffee bags?</dt>
          <dd>Custom coffee bags from EZPZ Coffee are typically ready within 2 to 3 weeks from design approval. Rush options may be available — contact help@ezpz.coffee for details.</dd>

          <dt>Can I get custom coffee bags for corporate gifts?</dt>
          <dd>Yes. EZPZ Coffee creates custom branded coffee bags for corporate gifts, client gifts, and employee appreciation with no minimum order. Ships across Canada and the USA.</dd>

          <dt>What allergens are in EZPZ Coffee products?</dt>
          <dd>EZPZ Coffee products are naturally gluten-free and vegan. Coffee is tree nuts and allergen-free. Roasted in a facility that does not process common allergens.</dd>
        </dl>
      </section>
      <nav aria-label="Related guides" style={{ padding: "32px 24px", borderTop: "1px solid #ebebeb", maxWidth: "900px", margin: "0 auto" }}>
        <p style={{ fontWeight: 600, marginBottom: "12px", fontSize: "0.9rem", color: "#111" }}>Related guides</p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <li><Link href={`/${locale}/what-is-white-label-coffee-canada`} style={{ fontSize: "0.85rem", color: "#ff4200", textDecoration: "underline" }}>What is white label coffee in Canada?</Link></li>
          <li><Link href={`/${locale}/custom-coffee-bags-no-minimum-canada`} style={{ fontSize: "0.85rem", color: "#ff4200", textDecoration: "underline" }}>Custom coffee bags with no minimum</Link></li>
          <li><Link href={`/${locale}/how-much-do-custom-coffee-bags-cost-canada`} style={{ fontSize: "0.85rem", color: "#ff4200", textDecoration: "underline" }}>How much do custom coffee bags cost?</Link></li>
          <li><Link href={`/${locale}/best-white-label-coffee-supplier-canada`} style={{ fontSize: "0.85rem", color: "#ff4200", textDecoration: "underline" }}>Best white label coffee supplier in Canada</Link></li>
          <li><Link href={`/${locale}/custom-coffee-for-restaurants-canada`} style={{ fontSize: "0.85rem", color: "#ff4200", textDecoration: "underline" }}>Custom coffee for restaurants in Canada</Link></li>
        </ul>
      </nav>
      <div className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Still have questions?</h2>
          <p className={styles.ctaBody}>Our team is happy to help. Reach out and we&apos;ll get back to you within 24 hours.</p>
          <Link href={`/${locale}/contact`} className={styles.ctaButton}>
            Contact us <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
