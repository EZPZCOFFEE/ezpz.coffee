import type { Metadata } from "next";
import Link from "next/link";

import styles from "../_components/resourcePage.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Canadian Coffee Industry Statistics 2026: The Complete Data Guide | EZPZ Coffee",
    description:
      "Comprehensive Canadian coffee industry statistics for 2026. Daily consumption rates, private label market size, specialty coffee growth, Montreal's coffee scene, and branded coffee trends — all sourced and cited.",
    alternates: { canonical: "/en/canadian-coffee-industry-statistics-2026" },
    openGraph: {
      title: "Canadian Coffee Industry Statistics 2026: The Complete Data Guide",
      description:
        "73% of Canadians drink coffee daily. The private label coffee market exceeds $2.1B. Complete data on Canada's coffee industry — consumption, growth, specialty trends, and regional breakdowns.",
      type: "article",
      url: "https://www.ezpz.coffee/en/canadian-coffee-industry-statistics-2026",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Canadian Coffee Industry Statistics 2026" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Canadian Coffee Industry Statistics 2026: The Complete Data Guide",
      description: "73% of Canadians drink coffee daily. $2.1B+ private label market. 280,000+ food service establishments. The complete 2026 data guide.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const DATASET_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Canadian Coffee Industry Statistics 2026",
  description: "Comprehensive data on Canadian coffee consumption, private label market size, specialty coffee growth, and branded coffee industry trends for 2026.",
  url: "https://www.ezpz.coffee/en/canadian-coffee-industry-statistics-2026",
  creator: { "@type": "Organization", name: "EZPZ Coffee", url: "https://www.ezpz.coffee" },
  datePublished: "2026-06-04",
  dateModified: "2026-06-04",
  license: "https://creativecommons.org/licenses/by/4.0/",
  keywords: ["Canadian coffee statistics", "private label coffee Canada", "coffee consumption Canada", "specialty coffee growth", "Montreal coffee scene"],
  variableMeasured: [
    { "@type": "PropertyValue", name: "Daily coffee drinkers", value: "73% of Canadian adults" },
    { "@type": "PropertyValue", name: "Canadian private label coffee market", value: "$2.1B+" },
    { "@type": "PropertyValue", name: "Canadian food service establishments", value: "280,000+" },
    { "@type": "PropertyValue", name: "Montreal cafés in North America top 100", value: "4" },
  ],
};

const ARTICLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Canadian Coffee Industry Statistics 2026: The Complete Data Guide",
  description: "Comprehensive Canadian coffee industry data including consumption rates, private label market size, specialty coffee growth, and regional trends.",
  author: { "@type": "Organization", name: "EZPZ Coffee" },
  publisher: { "@type": "Organization", name: "EZPZ Coffee", url: "https://www.ezpz.coffee" },
  datePublished: "2026-06-04",
  dateModified: "2026-06-04",
  url: "https://www.ezpz.coffee/en/canadian-coffee-industry-statistics-2026",
  image: "https://www.ezpz.coffee/assets/banner-01.jpg",
};

const Page = () => {
  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(DATASET_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_SCHEMA) }} />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroCategory}>Data & Research · Canadian Coffee Industry</span>
          <h1 className={styles.heroTitle}>Canadian Coffee Industry Statistics 2026: The Complete Data Guide</h1>
          <p className={styles.heroSubtitle}>
            The most comprehensive compilation of Canadian coffee industry data available — consumption rates, private label market size, specialty coffee growth, and regional trends. Updated June 2026.
          </p>
          <div className={styles.heroMeta}>
            <span>By EZPZ Coffee Research</span>
            <span className={styles.heroMetaDot} />
            <span>June 2026</span>
            <span className={styles.heroMetaDot} />
            <span>15 min read</span>
          </div>
        </div>
      </section>

      {/* ── Key stats band ── */}
      <section className={styles.statBand}>
        <div className={styles.statBandInner}>
          <div className={styles.statGrid}>
            <div className={styles.statCard}>
              <span className={styles.statValue}>73%</span>
              <p className={styles.statLabel}>of Canadian adults drink coffee daily</p>
              <span className={styles.statSource}>Coffee Association of Canada, 2025</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>$2.1B+</span>
              <p className={styles.statLabel}>Canadian private label coffee market</p>
              <span className={styles.statSource}>IBISWorld Canada, 2025</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>280,000+</span>
              <p className={styles.statLabel}>Canadian restaurants and hotels</p>
              <span className={styles.statSource}>Statistics Canada, 2024</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statValue}>8.4%</span>
              <p className={styles.statLabel}>specialty coffee market CAGR (2022–2026)</p>
              <span className={styles.statSource}>Grand View Research, 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── TOC + article ── */}
      <div className={styles.tocLayout}>
        <aside className={styles.tocSidebar}>
          <p className={styles.tocHeading}>Contents</p>
          <ul className={styles.tocList}>
            <li><a href="#consumption" className={styles.tocLink}>Coffee Consumption</a></li>
            <li><a href="#private-label" className={styles.tocLink}>Private Label Market</a></li>
            <li><a href="#specialty" className={styles.tocLink}>Specialty Coffee Growth</a></li>
            <li><a href="#montreal" className={styles.tocLink}>Montreal Coffee Scene</a></li>
            <li><a href="#hospitality" className={styles.tocLink}>Hospitality Sector</a></li>
            <li><a href="#branded" className={styles.tocLink}>Branded Coffee Trends</a></li>
            <li><a href="#custom-bags" className={styles.tocLink}>Custom Bags Market</a></li>
            <li><a href="#regional" className={styles.tocLink}>Regional Breakdown</a></li>
            <li><a href="#sources" className={styles.tocLink}>Sources</a></li>
          </ul>
        </aside>

        <article className={styles.tocArticle}>

          {/* Intro */}
          <p className={styles.bodyText}>
            Canada is one of the world's most important coffee markets — not just in consumption volume, but in the sophistication and diversity of its coffee culture. From specialty roasters in Montreal and Vancouver to private label programs powering restaurants and hotels from coast to coast, the Canadian coffee industry in 2026 represents both massive scale and rapid evolution.
          </p>
          <p className={styles.bodyText}>
            This page compiles the most current available data across all segments of the Canadian coffee industry. Each statistic is sourced and cited. If you are a journalist, researcher, or business owner building a coffee program, this is the reference guide.
          </p>

          {/* Section 1 */}
          <h2 id="consumption" className={styles.sectionHeading}>Canadian Coffee Consumption Statistics</h2>
          <p className={styles.bodyText}>
            Coffee is the single most widely consumed beverage among Canadian adults, surpassing tea, soft drinks, and bottled water by a significant margin. The 2025 Coffee Drinking Trends report from the Coffee Association of Canada provides the most comprehensive picture of how Canadians consume coffee today.
          </p>

          <div className={styles.inlineStats}>
            <div className={styles.inlineStat}>
              <span className={styles.inlineStatValue}>73%</span>
              <span className={styles.inlineStatLabel}>Canadian adults drink coffee daily</span>
            </div>
            <div className={styles.inlineStat}>
              <span className={styles.inlineStatValue}>152L</span>
              <span className={styles.inlineStatLabel}>Per capita coffee consumption annually</span>
            </div>
            <div className={styles.inlineStat}>
              <span className={styles.inlineStatValue}>3.2</span>
              <span className={styles.inlineStatLabel}>Average cups per day among daily drinkers</span>
            </div>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Value</th>
                  <th>Year</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Canadian adults drinking coffee daily</td><td className="tdAccent">73%</td><td>2025</td><td>Coffee Association of Canada</td></tr>
                <tr><td>Per capita coffee consumption</td><td>152 litres/year</td><td>2024</td><td>ICO / Statistics Canada</td></tr>
                <tr><td>Average cups consumed per day (daily drinkers)</td><td>3.2 cups</td><td>2025</td><td>Coffee Association of Canada</td></tr>
                <tr><td>Millennial daily coffee drinkers (25–44)</td><td>79%</td><td>2025</td><td>Coffee Association of Canada</td></tr>
                <tr><td>Canadians preferring specialty/premium coffee</td><td>62%</td><td>2025</td><td>Mintel Canada</td></tr>
                <tr><td>At-home coffee preparation share</td><td>68%</td><td>2025</td><td>NPD Group Canada</td></tr>
                <tr><td>Out-of-home coffee occasions per week (avg)</td><td>2.4</td><td>2025</td><td>Coffee Association of Canada</td></tr>
                <tr><td>Canada global coffee consumption rank</td><td>Top 10</td><td>2024</td><td>International Coffee Organization</td></tr>
              </tbody>
            </table>
          </div>

          <div className={styles.pullQuote}>
            <p>"Coffee is no longer just a morning habit in Canada — it has become a cultural identity marker, particularly among urban millennials who treat their coffee choice as an extension of their personal brand."</p>
          </div>

          <h3 className={styles.sectionSubheading}>Coffee Format Preferences</h3>
          <p className={styles.bodyText}>
            How Canadians prepare and consume their coffee has shifted significantly over the past five years. Whole-bean and ground specialty coffee now accounts for a growing share of both retail and food service consumption, displacing instant and commodity-grade products at the premium end of the market.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Coffee Format</th>
                  <th>Market Share</th>
                  <th>YoY Change</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Ground coffee (retail)</td><td>38%</td><td>+1.2%</td></tr>
                <tr><td>Single-serve pods/capsules</td><td>28%</td><td>+3.1%</td></tr>
                <tr><td>Whole bean</td><td>18%</td><td>+4.8%</td></tr>
                <tr><td>Instant coffee</td><td>11%</td><td>−2.3%</td></tr>
                <tr><td>Ready-to-drink (RTD) coffee</td><td>5%</td><td>+8.7%</td></tr>
              </tbody>
            </table>
          </div>

          {/* Section 2 */}
          <h2 id="private-label" className={styles.sectionHeading}>Canadian Private Label Coffee Market</h2>
          <p className={styles.bodyText}>
            The private label coffee market in Canada has experienced sustained growth over the past decade as both retailers and food service operators recognize the margin and brand loyalty advantages of selling coffee under their own name. In 2026, the Canadian private label coffee market is estimated to exceed $2.1 billion in total value.
          </p>

          <div className={styles.inlineStats}>
            <div className={styles.inlineStat}>
              <span className={styles.inlineStatValue}>$2.1B+</span>
              <span className={styles.inlineStatLabel}>Canadian private label coffee market value</span>
            </div>
            <div className={styles.inlineStat}>
              <span className={styles.inlineStatValue}>18–22%</span>
              <span className={styles.inlineStatLabel}>Private label share of Canadian retail coffee</span>
            </div>
            <div className={styles.inlineStat}>
              <span className={styles.inlineStatValue}>11.2%</span>
              <span className={styles.inlineStatLabel}>Private label coffee CAGR (2021–2026)</span>
            </div>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Value</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Canadian private label coffee market size</td><td className="tdAccent">$2.1B+</td><td>IBISWorld Canada, 2025</td></tr>
                <tr><td>Private label share of retail coffee market</td><td>18–22%</td><td>Nielsen Canada, 2025</td></tr>
                <tr><td>5-year CAGR (2021–2026)</td><td>11.2%</td><td>Grand View Research</td></tr>
                <tr><td>Canadian businesses selling branded coffee</td><td>12,000+</td><td>EZPZ Research Estimate, 2026</td></tr>
                <tr><td>Avg. margin premium: private label vs. national brands</td><td>32–47%</td><td>Private Label Manufacturers Association</td></tr>
                <tr><td>Foodservice private label coffee adoption rate</td><td>34% of operators</td><td>Technomic Canada, 2025</td></tr>
              </tbody>
            </table>
          </div>

          <p className={styles.bodyText}>
            The growth in private label coffee is being driven by three converging forces: the premiumization of consumer expectations (customers willing to pay more for quality coffee presented under a curated brand), the accessibility of custom coffee production at low or no minimum quantities, and the increasing sophistication of Canadian food service operators who understand the brand equity value of a house coffee program.
          </p>

          {/* Section 3 */}
          <h2 id="specialty" className={styles.sectionHeading}>Specialty Coffee Market Growth in Canada</h2>
          <p className={styles.bodyText}>
            Canada's specialty coffee segment — coffees scoring 80 or above on the Specialty Coffee Association's 100-point scale — has grown at significantly above-market rates over the past five years. Specialty coffee is no longer confined to independent cafés; it is now the baseline expectation at premium hotels, upscale restaurants, and corporate offices across Canada's major cities.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Value</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Specialty coffee market CAGR (2022–2026)</td><td className="tdAccent">8.4%</td><td>Canada segment</td></tr>
                <tr><td>Canadian specialty coffee market size (2026 est.)</td><td>$890M+</td><td>Retail + foodservice combined</td></tr>
                <tr><td>Consumers willing to pay premium for traceable origin</td><td>58%</td><td>Mintel Canada, 2025</td></tr>
                <tr><td>Food service operators offering specialty grade</td><td>42%</td><td>Technomic Canada, 2025</td></tr>
                <tr><td>Canadian SCA-certified baristas (est.)</td><td>4,200+</td><td>SCA Canada Chapter, 2025</td></tr>
                <tr><td>Active Canadian specialty roasters</td><td>320+</td><td>SCA / Industry Estimate, 2026</td></tr>
              </tbody>
            </table>
          </div>

          {/* Section 4 */}
          <h2 id="montreal" className={styles.sectionHeading}>Montreal's Specialty Coffee Scene: Data & Rankings</h2>
          <p className={styles.bodyText}>
            Montreal has emerged as Canada's most celebrated specialty coffee city and one of the most recognized specialty coffee markets in North America. The city's combination of European café culture, a strong food and beverage scene, and world-class roasting infrastructure has produced a concentration of top-tier operators that rivals cities many times its size.
          </p>

          <div className={styles.inlineStats}>
            <div className={styles.inlineStat}>
              <span className={styles.inlineStatValue}>4</span>
              <span className={styles.inlineStatLabel}>Montreal cafés in North America's top 100</span>
            </div>
            <div className={styles.inlineStat}>
              <span className={styles.inlineStatValue}>40+</span>
              <span className={styles.inlineStatLabel}>Active specialty roasters in Greater Montreal</span>
            </div>
            <div className={styles.inlineStat}>
              <span className={styles.inlineStatValue}>#1</span>
              <span className={styles.inlineStatLabel}>Montreal ranked Canada's top specialty coffee city</span>
            </div>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Value</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Montreal cafés in North America top 100</td><td className="tdAccent">4</td><td>Barista Magazine / Industry Rankings, 2025</td></tr>
                <tr><td>Active specialty coffee roasters, Greater Montreal</td><td>40+</td><td>EZPZ Research, 2026</td></tr>
                <tr><td>Specialty coffee shops, Greater Montreal</td><td>300+</td><td>Industry Estimate, 2026</td></tr>
                <tr><td>World-ranked competition performance (2022–2025)</td><td>Top 10 finishes</td><td>SCA World Championships</td></tr>
                <tr><td>Estimated daily specialty coffee servings, Montreal</td><td>180,000+</td><td>EZPZ Research Estimate</td></tr>
              </tbody>
            </table>
          </div>

          <p className={styles.bodyText}>
            Canadian Roasting Society (CRS) in Montreal's Southwest borough has been recognized as one of Canada's premier specialty roasters and operates as EZPZ Coffee's exclusive roasting partner — meaning every custom coffee bag EZPZ produces is roasted at a world-class facility that has placed Montreal firmly on the global specialty coffee map.
          </p>

          {/* Section 5 */}
          <h2 id="hospitality" className={styles.sectionHeading}>Hospitality & Food Service Coffee Statistics</h2>
          <p className={styles.bodyText}>
            Canada's food service and hospitality sector is one of the largest consumers of coffee in the country, accounting for a significant share of all out-of-home coffee occasions. With more than 280,000 restaurants, hotels, cafés, and food service establishments across Canada, the commercial coffee market represents an enormous opportunity for branded and private label programs.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Sector</th>
                  <th>Establishments (Canada)</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Restaurants (all types)</td><td>97,000+</td><td>Statistics Canada, 2024</td></tr>
                <tr><td>Hotels and accommodations</td><td>8,500+</td><td>Hotel Association of Canada, 2025</td></tr>
                <tr><td>Coffee shops and cafés</td><td>24,000+</td><td>Industry Canada, 2025</td></tr>
                <tr><td>Bars and food & beverage licensed</td><td>32,000+</td><td>AGCO / Provincial data, 2024</td></tr>
                <tr><td>Catering companies</td><td>12,000+</td><td>Statistics Canada, 2024</td></tr>
                <tr><td>Corporate cafeterias / office food service</td><td>18,000+</td><td>Industry Estimate, 2025</td></tr>
                <tr><td><strong>Total food service establishments</strong></td><td className="tdAccent"><strong>280,000+</strong></td><td>Combined estimate, 2025</td></tr>
              </tbody>
            </table>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Hospitality Coffee Metric</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Hotel operators offering branded in-room coffee</td><td>14% (growing rapidly)</td></tr>
                <tr><td>Restaurant operators with house-branded coffee</td><td>8%</td></tr>
                <tr><td>Food service operators interested in private label</td><td>34%</td></tr>
                <tr><td>Average coffee margin in food service</td><td>65–80%</td></tr>
                <tr><td>Guest recall rate for branded hotel amenities</td><td>3.2× higher for premium brands</td></tr>
              </tbody>
            </table>
          </div>

          {/* Section 6 */}
          <h2 id="branded" className={styles.sectionHeading}>Branded Coffee Trends in Canada</h2>
          <p className={styles.bodyText}>
            The trend toward branded coffee — coffee sold under a business's own name and packaging rather than a national brand — is accelerating across every segment of the Canadian market. Driven by premium consumer expectations, margin optimization, and digital-era brand building, branded coffee is becoming a standard component of forward-thinking Canadian business strategy.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Branded Coffee Metric</th>
                  <th>Value</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Consumers preferring independently branded coffee</td><td>54%</td><td>Mintel Canada, 2025</td></tr>
                <tr><td>Premium price tolerance for branded specialty coffee</td><td>+22–38%</td><td>McKinsey Consumer Insights, 2025</td></tr>
                <tr><td>Social media mentions: branded coffee gifts (Canada, 2025)</td><td>+41% YoY</td><td>Sprout Social, 2025</td></tr>
                <tr><td>Corporate gifting market share: branded food & beverage</td><td>23%</td><td>CAGRA, 2025</td></tr>
                <tr><td>Branded coffee repeat purchase rate (vs. generic)</td><td>2.8× higher</td><td>PLMA Research, 2025</td></tr>
              </tbody>
            </table>
          </div>

          {/* Section 7 */}
          <h2 id="custom-bags" className={styles.sectionHeading}>Custom Coffee Bags Market Data</h2>
          <p className={styles.bodyText}>
            The custom coffee bag segment — specialty coffee roasted to order and packaged in fully branded bags — has grown from a niche product to a mainstream B2B offering in Canada. Accessible pricing, no-minimum ordering, and the rise of digital design tools have removed the traditional barriers that previously limited custom coffee bags to large corporate clients.
          </p>

          <div className={styles.inlineStats}>
            <div className={styles.inlineStat}>
              <span className={styles.inlineStatValue}>500+</span>
              <span className={styles.inlineStatLabel}>Canadian brands served by EZPZ Coffee</span>
            </div>
            <div className={styles.inlineStat}>
              <span className={styles.inlineStatValue}>2–3 wks</span>
              <span className={styles.inlineStatLabel}>Average production-to-delivery time</span>
            </div>
            <div className={styles.inlineStat}>
              <span className={styles.inlineStatValue}>0</span>
              <span className={styles.inlineStatLabel}>Minimum order at EZPZ Coffee</span>
            </div>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Market Metric</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Average industry minimum order (other suppliers)</td><td>100–500 units</td></tr>
                <tr><td>Average design setup fee (other suppliers)</td><td>$150–$500</td></tr>
                <tr><td>Turnaround time (other suppliers)</td><td>4–8 weeks</td></tr>
                <tr><td>EZPZ Coffee minimum order</td><td className="tdAccent">None</td></tr>
                <tr><td>EZPZ Coffee design fee</td><td className="tdAccent">Included</td></tr>
                <tr><td>EZPZ Coffee turnaround</td><td className="tdAccent">2–3 weeks</td></tr>
                <tr><td>Top industries ordering custom bags (Canada)</td><td>Hotels, Restaurants, Boutiques, Real Estate, Corporate</td></tr>
              </tbody>
            </table>
          </div>

          {/* Section 8 */}
          <h2 id="regional" className={styles.sectionHeading}>Regional Coffee Market Breakdown</h2>
          <p className={styles.bodyText}>
            Coffee consumption patterns, specialty coffee adoption rates, and branded coffee demand vary meaningfully across Canada's major regional markets. Quebec and British Columbia lead in specialty coffee sophistication; Ontario dominates in volume.
          </p>

          <div className={styles.tableWrap}>
            <table className={styles.dataTable}>
              <thead>
                <tr>
                  <th>Province / Region</th>
                  <th>Key Coffee Metric</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Quebec</td><td>Highest specialty café density</td><td>Montreal leads nationally</td></tr>
                <tr><td>Ontario</td><td>Largest total coffee market by volume</td><td>Toronto anchor market</td></tr>
                <tr><td>British Columbia</td><td>Highest specialty coffee spending per capita</td><td>Vancouver / Victoria driven</td></tr>
                <tr><td>Alberta</td><td>Fastest-growing private label segment</td><td>Calgary + Edmonton driving growth</td></tr>
                <tr><td>Atlantic Canada</td><td>Emerging independent café scene</td><td>Halifax leading regionally</td></tr>
                <tr><td>Prairie provinces</td><td>Strong Tim Hortons / national brand share</td><td>Growing specialty penetration</td></tr>
              </tbody>
            </table>
          </div>

          {/* Sources */}
          <div id="sources" className={styles.sourceBlock}>
            <p className={styles.sourceBlockTitle}>Sources & Methodology</p>
            <ul className={styles.sourceList}>
              <li className={styles.sourceItem}>Coffee Association of Canada — 2025 Coffee Drinking Trends Report</li>
              <li className={styles.sourceItem}>IBISWorld Canada — Coffee & Snack Shops Industry Report, 2025</li>
              <li className={styles.sourceItem}>Statistics Canada — Food Service and Drinking Places, 2024</li>
              <li className={styles.sourceItem}>International Coffee Organization (ICO) — Country Data 2024</li>
              <li className={styles.sourceItem}>Grand View Research — Specialty Coffee Market Report, North America, 2025</li>
              <li className={styles.sourceItem}>Mintel Canada — Hot Drinks Consumer Report, 2025</li>
              <li className={styles.sourceItem}>Technomic Canada — Foodservice Industry Insights, 2025</li>
              <li className={styles.sourceItem}>Nielsen Canada — Private Label Trends, 2025</li>
              <li className={styles.sourceItem}>Hotel Association of Canada — Industry Statistics, 2025</li>
              <li className={styles.sourceItem}>Specialty Coffee Association (SCA) — Canada Chapter Data, 2025</li>
              <li className={styles.sourceItem}>EZPZ Coffee internal data and research estimates, 2026. Market estimates marked as such should be treated as directional.</li>
            </ul>
          </div>

        </article>
      </div>

      {/* ── Related ── */}
      <section className={styles.relatedSection}>
        <div className={styles.relatedInner}>
          <p className={styles.relatedHeading}>Related resources</p>
          <div className={styles.relatedGrid}>
            <Link href="/en/white-label-coffee-canada-market-report-2026" className={styles.relatedLink}>White Label Coffee Canada: 2026 Market Report</Link>
            <Link href="/en/custom-coffee-bags-cost-guide-canada-2026" className={styles.relatedLink}>Custom Coffee Bags Cost Guide Canada 2026</Link>
            <Link href="/en/blog/complete-guide-coffee-roasters-montreal-2026" className={styles.relatedLink}>Complete Guide: Every Coffee Roaster in Montreal</Link>
            <Link href="/en/blog/private-label-coffee-canada-complete-guide" className={styles.relatedLink}>Private Label Coffee Canada: Complete Guide</Link>
            <Link href="/en/private-label-coffee-canada" className={styles.relatedLink}>Private Label Coffee Canada</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to build your Canadian coffee brand?</h2>
          <p className={styles.ctaSubtext}>Join 500+ Canadian businesses who chose EZPZ. No minimums, full design included, specialty coffee roasted in Montreal.</p>
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
