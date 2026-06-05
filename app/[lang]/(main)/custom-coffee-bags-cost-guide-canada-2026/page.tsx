import type { Metadata } from "next";
import Link from "next/link";

import styles from "../_components/resourcePage.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "How Much Do Custom Coffee Bags Cost in Canada? 2026 Complete Pricing Guide | EZPZ",
    description:
      "Transparent, detailed pricing breakdown for custom coffee bags in Canada in 2026. Volume tiers, what's included vs. hidden fees, comparison with all major suppliers, and how to get the best price.",
    alternates: { canonical: "/en/custom-coffee-bags-cost-guide-canada-2026" },
    openGraph: {
      title: "Custom Coffee Bags Cost Guide Canada 2026 — Complete Pricing Breakdown",
      description:
        "Everything you need to know about custom coffee bag pricing in Canada in 2026. Volume tiers, design fees, hidden costs, supplier comparison, and transparent EZPZ pricing.",
      type: "article",
      url: "https://www.ezpz.coffee/en/custom-coffee-bags-cost-guide-canada-2026",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Cost Guide Canada 2026" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags Cost Guide Canada 2026",
      description: "Transparent pricing breakdown for custom coffee bags in Canada. Volume tiers, hidden fees, supplier comparison. Updated June 2026.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const DATASET_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Custom Coffee Bags Pricing Guide Canada 2026",
  description: "Comprehensive pricing data for custom coffee bags in Canada including per-unit costs by volume, design fees, supplier comparison, and total cost of ownership analysis.",
  url: "https://www.ezpz.coffee/en/custom-coffee-bags-cost-guide-canada-2026",
  creator: { "@type": "Organization", name: "EZPZ Coffee", url: "https://www.ezpz.coffee" },
  datePublished: "2026-06-04",
  dateModified: "2026-06-04",
  keywords: ["custom coffee bags cost Canada", "custom coffee bag pricing", "private label coffee cost", "branded coffee bags price"],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much do custom coffee bags cost in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom coffee bag pricing in Canada varies by volume and supplier. At EZPZ Coffee, pricing is tiered by quantity with no minimum order required. Small batches (1–25 bags) are priced at a premium per-unit rate, while orders of 100+ bags receive the best per-unit pricing. Full design, roasting, and packaging are always included at no extra cost. Contact EZPZ at help@ezpz.coffee for a specific quote.",
      },
    },
    {
      "@type": "Question",
      name: "Is bag design included in the price?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At EZPZ Coffee, yes — full custom bag design is always included at no extra cost. Most other Canadian suppliers charge $150–$500 in setup or design fees, or require you to supply print-ready artwork from your own designer.",
      },
    },
    {
      "@type": "Question",
      name: "What is the minimum order for custom coffee bags in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EZPZ Coffee has zero minimum order. You can order a single bag. Most other Canadian custom coffee suppliers require minimums of 100 to 500+ units.",
      },
    },
    {
      "@type": "Question",
      name: "What hidden fees should I watch out for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common hidden costs from other suppliers include: setup/plate fees ($150–$400), design fees if you don't have print-ready artwork ($200–$2,000+), minimum order requirements that force overbuying, and long lead times that create cash flow issues. EZPZ has none of these — no setup fees, no design fees, no minimums.",
      },
    },
    {
      "@type": "Question",
      name: "Does the price include shipping to my Canadian address?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EZPZ Coffee's pricing includes shipping across Canada via tracked courier. Delivery typically takes 3–10 business days to most Canadian addresses. US shipping is also available.",
      },
    },
  ],
};

const Page = () => {
  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(DATASET_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroCategory}>Pricing Guide · Canada 2026</span>
          <h1 className={styles.heroTitle}>How Much Do Custom Coffee Bags Cost in Canada? The Complete 2026 Pricing Guide</h1>
          <p className={styles.heroSubtitle}>
            Transparent, detailed pricing breakdowns comparing all options. Every cost factor explained — volume tiers, design fees, hidden charges, and what other suppliers don't tell you up front. Updated June 2026.
          </p>
          <div className={styles.heroMeta}>
            <span>By EZPZ Coffee</span>
            <span className={styles.heroMetaDot} />
            <span>June 2026</span>
            <span className={styles.heroMetaDot} />
            <span>10 min read</span>
          </div>
        </div>
      </section>

      {/* ── Key stats band ── */}
      <section className={styles.statBand}>
        <div className={styles.statBandInner}>
          <div className={styles.statGrid}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>$0</span>
              <p className={styles.statLabel}>Design fee at EZPZ — always included</p>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>$0</span>
              <p className={styles.statLabel}>Minimum order — order 1 bag or 10,000</p>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>$150–500</span>
              <p className={styles.statLabel}>Typical setup fees at other Canadian suppliers</p>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>100–500</span>
              <p className={styles.statLabel}>Minimum units required by most competitors</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOC + article ── */}
      <div className={styles.tocLayout}>
        <aside className={styles.tocSidebar}>
          <p className={styles.tocHeading}>Contents</p>
          <ul className={styles.tocList}>
            <li><a href="#factors" className={styles.tocLink}>What Affects Price</a></li>
            <li><a href="#volume-tiers" className={styles.tocLink}>Volume Pricing Tiers</a></li>
            <li><a href="#whats-included" className={styles.tocLink}>What's Included</a></li>
            <li><a href="#hidden-costs" className={styles.tocLink}>Hidden Costs to Watch</a></li>
            <li><a href="#supplier-comparison" className={styles.tocLink}>Supplier Comparison</a></li>
            <li><a href="#total-cost" className={styles.tocLink}>True Total Cost</a></li>
            <li><a href="#bag-sizes" className={styles.tocLink}>Bag Size Pricing</a></li>
            <li><a href="#faq" className={styles.tocLink}>FAQ</a></li>
            <li><a href="#get-quote" className={styles.tocLink}>Get a Quote</a></li>
          </ul>
        </aside>

        <article className={styles.tocArticle}>

          <p className={styles.bodyText}>
            Custom coffee bag pricing in Canada is more complex than most businesses expect — and most suppliers make it deliberately opaque. This guide breaks down every cost factor so you can make an informed comparison before requesting a quote. We include EZPZ's own pricing structure alongside industry averages, because transparency is how we earn business.
          </p>

          {/* Section 1 */}
          <h2 id="factors" className={styles.sectionHeading}>What Affects the Cost of Custom Coffee Bags in Canada?</h2>
          <p className={styles.bodyText}>
            Five primary variables determine your per-bag cost. Understanding each helps you budget accurately and avoid surprises when quotes arrive.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Cost Factor</th>
                  <th>Impact on Price</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Order volume</strong></td><td className="tdAccent">Very high</td><td>Largest single driver. 10× volume can reduce per-unit cost by 40–60%</td></tr>
                <tr><td><strong>Bag size</strong></td><td className="tdAccent">High</td><td>250g bags cost more than 100g; 454g more than 250g — coffee + packaging scale up</td></tr>
                <tr><td><strong>Coffee selection</strong></td><td className="tdAccent">High</td><td>Single-origin specialty costs more than house blends; light roasts often premium-priced</td></tr>
                <tr><td><strong>Design included vs. not</strong></td><td>Medium</td><td>At EZPZ: included. At most others: $150–$500 setup fee or external designer required</td></tr>
                <tr><td><strong>Whole bean vs. ground</strong></td><td>Low</td><td>Grinding adds a small processing cost per bag</td></tr>
                <tr><td><strong>Shipping destination</strong></td><td>Low–medium</td><td>Base shipping included at EZPZ. Remote locations may have surcharges</td></tr>
              </tbody>
            </table>
          </div>

          {/* Section 2 */}
          <h2 id="volume-tiers" className={styles.sectionHeading}>Volume Pricing Tiers Explained</h2>
          <p className={styles.bodyText}>
            Custom coffee bag pricing at every supplier follows a tiered volume model — more bags equals lower cost per bag. The tiers below reflect how this works in practice across the Canadian market. EZPZ's specific per-unit pricing is available by quote at <a href="mailto:help@ezpz.coffee" style={{ color: "var(--color-accent)" }}>help@ezpz.coffee</a>.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Volume Tier</th>
                  <th>Relative Cost</th>
                  <th>Best For</th>
                  <th>EZPZ Available?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1–25 bags</strong></td>
                  <td>Premium per-unit rate</td>
                  <td>Sampling, gifting, concept testing, Airbnb hosts</td>
                  <td className="tdAccent">Yes — no minimum</td>
                </tr>
                <tr>
                  <td><strong>26–100 bags</strong></td>
                  <td>Per-unit cost begins to drop</td>
                  <td>Boutique retailers, restaurant retail shelf, seasonal promotions</td>
                  <td className="tdAccent">Yes</td>
                </tr>
                <tr>
                  <td><strong>101–250 bags</strong></td>
                  <td>Meaningful cost reduction</td>
                  <td>Hotels, growing retail programs, corporate gifts</td>
                  <td className="tdAccent">Yes</td>
                </tr>
                <tr>
                  <td><strong>251–500 bags</strong></td>
                  <td>Competitive market rate</td>
                  <td>Established retail, event supply, subscription boxes</td>
                  <td className="tdAccent">Yes</td>
                </tr>
                <tr>
                  <td><strong>500+ bags</strong></td>
                  <td>Best per-unit pricing</td>
                  <td>Hotel chains, grocery retail, distributors, white label programs</td>
                  <td className="tdAccent">Yes — contact for volume pricing</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.pullQuote}>
            <p>At EZPZ, there is no minimum order. You can start with one bag, test the market, and scale when ready. The risk of over-ordering is zero.</p>
          </div>

          {/* Section 3 */}
          <h2 id="whats-included" className={styles.sectionHeading}>What's Included in the Price at EZPZ vs. Other Suppliers</h2>

          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>EZPZ Coffee</th>
                  <th>Industry Average (Other Suppliers)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Specialty grade coffee (80+ SCA)</td><td className="tdAccent">✓ Included</td><td>✓ Usually included</td></tr>
                <tr><td>Roasting to order (fresh)</td><td className="tdAccent">✓ Included</td><td>✓ Usually included</td></tr>
                <tr><td>Custom bag design / artwork</td><td className="tdAccent">✓ Always included, no fee</td><td className="tdGray">✗ Often $150–$500 extra, or requires print-ready files</td></tr>
                <tr><td>Design revisions</td><td className="tdAccent">✓ Included</td><td className="tdGray">✗ Often charged per round</td></tr>
                <tr><td>Setup / plate fee</td><td className="tdAccent">$0</td><td className="tdGray">$150–$400 typical</td></tr>
                <tr><td>Minimum order requirement</td><td className="tdAccent">None</td><td className="tdGray">100–500 units typical</td></tr>
                <tr><td>Shipping (Canada)</td><td className="tdAccent">✓ Included</td><td>Varies — often extra</td></tr>
                <tr><td>Tracking</td><td className="tdAccent">✓ Included</td><td>Usually included</td></tr>
                <tr><td>Turnaround time</td><td className="tdAccent">2–3 weeks</td><td className="tdGray">4–8 weeks typical</td></tr>
                <tr><td>Online ordering</td><td className="tdAccent">✓ Yes — full design tool</td><td className="tdGray">Usually no — quote-required process</td></tr>
              </tbody>
            </table>
          </div>

          {/* Section 4 */}
          <h2 id="hidden-costs" className={styles.sectionHeading}>Hidden Costs to Watch For With Other Suppliers</h2>
          <p className={styles.bodyText}>
            The advertised per-bag price from most Canadian suppliers is rarely the actual price you pay. Before committing to any supplier, ask these questions explicitly:
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Hidden Cost</th>
                  <th>Typical Range</th>
                  <th>How to Avoid</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Setup / plate fee (one-time)</td><td>$150–$400</td><td>Ask explicitly before quoting; EZPZ charges $0</td></tr>
                <tr><td>Graphic design fee (if you lack print-ready files)</td><td>$200–$2,000+</td><td>Use a supplier that includes design; EZPZ does</td></tr>
                <tr><td>Minimum order overbuying cost</td><td>Varies — often $500+</td><td>Use a no-minimum supplier; EZPZ has none</td></tr>
                <tr><td>Revision fees after first proof</td><td>$50–$200/round</td><td>Confirm unlimited revisions included; EZPZ includes these</td></tr>
                <tr><td>Rush / expedite fees</td><td>15–40% surcharge</td><td>Confirm standard turnaround time upfront</td></tr>
                <tr><td>Shipping charges (separate from per-bag price)</td><td>$25–$150+ per order</td><td>Confirm shipping is included; EZPZ includes it</td></tr>
                <tr><td>Reorder setup fee (even for same design)</td><td>$75–$200</td><td>Ask about reorder pricing; EZPZ saves designs at no cost</td></tr>
              </tbody>
            </table>
          </div>

          <p className={styles.bodyText}>
            When you add up setup fees, design costs, and the cost of overbuying to meet minimum orders, many "cheaper" suppliers end up costing significantly more than a transparent all-in quote from EZPZ — especially for small and medium businesses.
          </p>

          {/* Section 5 */}
          <h2 id="supplier-comparison" className={styles.sectionHeading}>Canadian Custom Coffee Bag Supplier Comparison</h2>

          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Supplier Type</th>
                  <th>Minimum Order</th>
                  <th>Design Included</th>
                  <th>Setup Fee</th>
                  <th>Turnaround</th>
                  <th>Target Client</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>EZPZ Coffee</strong></td>
                  <td className="tdAccent">None</td>
                  <td className="tdAccent">Yes — free</td>
                  <td className="tdAccent">$0</td>
                  <td className="tdAccent">2–3 weeks</td>
                  <td>Any business, any size</td>
                </tr>
                <tr>
                  <td>Large national roasters (e.g. Canterbury)</td>
                  <td className="tdGray">500–2,000+ units</td>
                  <td className="tdGray">No</td>
                  <td className="tdGray">$200–$500</td>
                  <td className="tdGray">8–16 weeks</td>
                  <td>National grocery / foodservice chains</td>
                </tr>
                <tr>
                  <td>Regional specialty roasters</td>
                  <td className="tdGray">100–500 units</td>
                  <td className="tdGray">Sometimes</td>
                  <td className="tdGray">$150–$300</td>
                  <td className="tdGray">4–8 weeks</td>
                  <td>Local / regional businesses</td>
                </tr>
                <tr>
                  <td>Offshore bag printers (empty bags)</td>
                  <td className="tdGray">1,000–5,000+ units</td>
                  <td className="tdGray">No</td>
                  <td className="tdGray">$100–$400</td>
                  <td className="tdGray">12–20 weeks</td>
                  <td>Businesses that source their own coffee</td>
                </tr>
                <tr>
                  <td>Subscription box services</td>
                  <td className="tdGray">50–200 units</td>
                  <td className="tdGray">Limited</td>
                  <td className="tdGray">$100–$250</td>
                  <td className="tdGray">4–6 weeks</td>
                  <td>DTC subscription brands</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 6 */}
          <h2 id="total-cost" className={styles.sectionHeading}>True Total Cost of Ownership: A Worked Example</h2>
          <p className={styles.bodyText}>
            A small Canadian hotel wants 50 custom coffee bags for their in-room amenity program. Here is how the true total cost compares across supplier types:
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Cost Item</th>
                  <th>EZPZ Coffee (50 bags)</th>
                  <th>Regional Specialty Roaster (min 100 bags)</th>
                  <th>Large Supplier (min 500 bags)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Per-bag cost (coffee + packaging)</td><td className="tdAccent">Quoted rate × 50</td><td>Quoted rate × 100*</td><td>Quoted rate × 500*</td></tr>
                <tr><td>Setup / plate fee</td><td className="tdAccent">$0</td><td>$200</td><td>$400</td></tr>
                <tr><td>Design fee</td><td className="tdAccent">$0</td><td>$300 (external designer)</td><td>$500 (external designer)</td></tr>
                <tr><td>Wasted inventory (over-order to meet minimum)</td><td className="tdAccent">$0</td><td>50 bags × unit cost</td><td>450 bags × unit cost</td></tr>
                <tr><td>Shipping</td><td className="tdAccent">Included</td><td>$45–$80 extra</td><td>$120+ extra</td></tr>
                <tr><td><strong>Effective total for 50 bags</strong></td><td className="tdAccent"><strong>Lowest</strong></td><td>Moderate (minimum doubles order)</td><td>Very high (minimum 10× over-order)</td></tr>
              </tbody>
            </table>
          </div>
          <p className={styles.bodyText} style={{ fontSize: "0.82rem", color: "#9ca3af" }}>
            *Forced to order minimum quantity even though only 50 needed.
          </p>

          {/* Section 7 */}
          <h2 id="bag-sizes" className={styles.sectionHeading}>Pricing by Bag Size</h2>
          <p className={styles.bodyText}>
            Bag size is the second biggest pricing factor after volume. Here is how the four standard bag sizes compare in relative cost at EZPZ and across the industry:
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Bag Size</th>
                  <th>Relative Cost</th>
                  <th>Best Use Case</th>
                  <th>Industry Standard?</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>100g</td><td>Lowest per bag</td><td>Hotel in-room, Airbnb amenity, sampling, gifting</td><td>Yes</td></tr>
                <tr><td>250g</td><td>Mid-range</td><td>Most popular. Retail shelf, café retail, subscription boxes</td><td>Most common</td></tr>
                <tr><td>340g (¾ lb)</td><td>Mid-high</td><td>Premium retail, corporate gifting, restaurant takeaway</td><td>Yes</td></tr>
                <tr><td>454g (1 lb)</td><td>Highest per bag</td><td>High-volume retail, foodservice, wholesale</td><td>Yes</td></tr>
              </tbody>
            </table>
          </div>

          {/* FAQ */}
          <h2 id="faq" className={styles.sectionHeading}>Frequently Asked Questions About Custom Coffee Bag Pricing</h2>

          <h3 className={styles.sectionSubheading}>Is design really free at EZPZ?</h3>
          <p className={styles.bodyText}>Yes. Full custom bag design is always included at zero extra cost. You provide your logo and brand colours — EZPZ creates the complete bag artwork, including front panel, back panel, typography, and all production specifications. Revisions are included until you are satisfied.</p>

          <h3 className={styles.sectionSubheading}>Can I order just one bag to test?</h3>
          <p className={styles.bodyText}>Yes. EZPZ has zero minimum order. The per-bag cost for a single bag is at the top of the pricing scale, but you can test the product quality and experience before committing to a larger order. Most EZPZ clients start small and scale quickly.</p>

          <h3 className={styles.sectionSubheading}>Does the price include shipping across Canada?</h3>
          <p className={styles.bodyText}>Yes. EZPZ ships across Canada via tracked courier and the shipping cost is built into your quote. There are no surprise shipping charges added at checkout. Deliveries reach most Canadian addresses in 3–10 business days after your order ships.</p>

          <h3 className={styles.sectionSubheading}>How long does production take from order to delivery?</h3>
          <p className={styles.bodyText}>First orders take 2–3 weeks total from design approval to delivery — this includes roasting, packaging, and shipping time. Repeat orders are faster since your design is already on file. Rush production may be available for time-sensitive needs; contact EZPZ to discuss.</p>

          <h3 className={styles.sectionSubheading}>Do prices change for repeat orders?</h3>
          <p className={styles.bodyText}>Repeat orders are priced at the same volume tier as the original order. Since your design is already on file, there are no additional setup costs. Many EZPZ clients negotiate standing order pricing for regular monthly or quarterly restocking.</p>

          {/* Get a quote */}
          <h2 id="get-quote" className={styles.sectionHeading}>How to Get a Free Custom Coffee Bag Quote</h2>
          <p className={styles.bodyText}>
            To receive a personalized quote from EZPZ Coffee with zero obligation, email <a href="mailto:help@ezpz.coffee" style={{ color: "var(--color-accent)" }}>help@ezpz.coffee</a> with:
          </p>
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>
            <li className={styles.bodyText} style={{ marginBottom: "0.4rem" }}><strong>Your estimated order quantity</strong> (even a rough range is fine)</li>
            <li className={styles.bodyText} style={{ marginBottom: "0.4rem" }}><strong>Preferred bag size</strong> (100g, 250g, 340g, or 454g)</li>
            <li className={styles.bodyText} style={{ marginBottom: "0.4rem" }}><strong>Whole bean or ground</strong></li>
            <li className={styles.bodyText} style={{ marginBottom: "0.4rem" }}><strong>Roast preference</strong> (light, medium, or dark)</li>
            <li className={styles.bodyText}><strong>Any timing requirements</strong> (if you have a deadline)</li>
          </ul>
          <p className={styles.bodyText}>
            EZPZ typically responds with a complete, all-in quote within one business day. Alternatively, use the <Link href="/en/design" style={{ color: "var(--color-accent)" }}>online bag designer</Link> to start the process and get a visual preview of your bag before committing to anything.
          </p>

        </article>
      </div>

      {/* ── Related ── */}
      <section className={styles.relatedSection}>
        <div className={styles.relatedInner}>
          <p className={styles.relatedHeading}>Related resources</p>
          <div className={styles.relatedGrid}>
            <Link href="/en/canadian-coffee-industry-statistics-2026" className={styles.relatedLink}>Canadian Coffee Industry Statistics 2026</Link>
            <Link href="/en/white-label-coffee-canada-market-report-2026" className={styles.relatedLink}>White Label Coffee Canada: 2026 Market Report</Link>
            <Link href="/en/how-much-do-custom-coffee-bags-cost-canada" className={styles.relatedLink}>How Much Do Custom Coffee Bags Cost? (AEO)</Link>
            <Link href="/en/custom-coffee-bags-no-minimum-canada" className={styles.relatedLink}>Custom Coffee Bags With No Minimum</Link>
            <Link href="/en/compare" className={styles.relatedLink}>EZPZ vs Competitors</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Get your all-in price in under 24 hours.</h2>
          <p className={styles.ctaSubtext}>No minimums, no design fees, no hidden charges. Email help@ezpz.coffee or start designing your bag online now.</p>
          <div className={styles.ctaButtons}>
            <Link href="/en/design" className={styles.ctaPrimary}>Design your bag</Link>
            <Link href="/en/contact" className={styles.ctaSecondary}>Get a free quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
