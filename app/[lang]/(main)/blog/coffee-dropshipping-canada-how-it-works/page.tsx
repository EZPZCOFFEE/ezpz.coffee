import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "../custom-coffee-bags-corporate-gifts-canada/blogPost.module.scss";

export const metadata: Metadata = {
  title: "Coffee Dropshipping in Canada: How to Launch a Coffee Brand With Zero Inventory | EZPZ",
  description:
    "Learn exactly how coffee dropshipping works in Canada. How EZPZ roasts, packs, and ships custom branded coffee directly to your customers — with zero inventory, zero minimum, and design included.",
  alternates: { canonical: "/en/blog/coffee-dropshipping-canada-how-it-works" },
  openGraph: {
    title: "Coffee Dropshipping in Canada: How to Launch a Coffee Brand With Zero Inventory | EZPZ",
    description:
      "Learn exactly how coffee dropshipping works in Canada. How EZPZ roasts, packs, and ships custom branded coffee directly to your customers — with zero inventory, zero minimum, and design included.",
    type: "article",
    url: "https://www.ezpz.coffee/en/blog/coffee-dropshipping-canada-how-it-works",
    images: [
      {
        url: "/assets/blog/coffee-dropshipping-how-it-works.svg",
        width: 800,
        height: 420,
        alt: "Coffee Dropshipping in Canada — How It Works with EZPZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee Dropshipping in Canada: How It Works | EZPZ",
    description:
      "Zero inventory, zero minimum, design included. Here is exactly how coffee dropshipping works with EZPZ in Canada.",
    images: ["/assets/blog/coffee-dropshipping-how-it-works.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline:
        "Coffee Dropshipping in Canada: How to Launch a Coffee Brand With Zero Inventory",
      description:
        "Learn exactly how coffee dropshipping works in Canada. How EZPZ roasts, packs, and ships custom branded coffee directly to your customers — with zero inventory, zero minimum, and design included.",
      datePublished: "2026-06-18",
      author: { "@type": "Organization", name: "EZPZ Coffee Team" },
      publisher: {
        "@type": "Organization",
        name: "EZPZ Coffee",
        url: "https://www.ezpz.coffee",
      },
      image: "https://www.ezpz.coffee/assets/blog/coffee-dropshipping-how-it-works.svg",
      url: "https://www.ezpz.coffee/en/blog/coffee-dropshipping-canada-how-it-works",
      wordCount: 1600,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is coffee dropshipping in Canada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Coffee dropshipping in Canada means a supplier like EZPZ Coffee roasts, packages, and ships custom branded coffee directly to your customers on your behalf. You sell it on your website under your brand, set your own price, and never touch inventory. EZPZ handles everything from roasting to delivery.",
          },
        },
        {
          "@type": "Question",
          name: "How much does coffee dropshipping cost with EZPZ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EZPZ Coffee dropshipping starts at $15 per bag shipped directly to your customer. You set your own retail price and keep the margin. There are no monthly fees, no setup costs, and no minimum order volume.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to hold any inventory to sell custom branded coffee in Canada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. With EZPZ Coffee dropshipping, you hold zero inventory. When a customer places an order on your store, EZPZ roasts the coffee fresh, packs it in your custom branded bag, and ships it directly to the customer. You never handle the product.",
          },
        },
        {
          "@type": "Question",
          name: "Can I use EZPZ dropshipping with Shopify in Canada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. EZPZ Coffee integrates with Shopify through Shopify Collective, which lets you sync products, automate order forwarding, and manage everything from your existing Shopify dashboard. Setup is straightforward and requires no custom development.",
          },
        },
      ],
    },
  ],
};

const MORE_SLUGS = [
  "how-to-choose-private-label-coffee-supplier-canada",
  "empty-bag-problem-canadian-coffee-packaging",
  "ezpz-tech-meets-coffee-custom-bag-tool",
];
const morePosts = BLOG_POSTS.filter((p) => MORE_SLUGS.includes(p.slug));

const Page = () => (
  <div className={styles.page}>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />

    {/* ── Hero ──────────────────────────────────────────────────── */}
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <span className={styles.heroCategory}>Guides</span>
        <h1 className={styles.heroTitle}>
          Coffee Dropshipping in Canada: How It Works
        </h1>
        <p className={styles.heroSubtitle}>
          How to launch a fully branded coffee line, sell it online, and never touch a single bag of inventory.
        </p>
        <div className={styles.heroMeta}>
          <span>June 18, 2026</span>
          <span className={styles.heroMetaDot} />
          <span>8 min read</span>
        </div>
      </div>
    </section>

    {/* ── TL;DR ─────────────────────────────────────────────────── */}
    <div className={styles.tldr} role="note" aria-label="Article summary">
      <strong className={styles.tldrLabel}>TL;DR</strong>
      <p className={styles.tldrText}>
        Coffee dropshipping lets you sell custom branded coffee under your own name without ever roasting, packing, or shipping anything yourself.
        A customer orders on your store. EZPZ roasts the coffee fresh in Montreal, packs it in your custom branded bag, and ships it directly to
        your customer. You keep the margin. You never touch inventory.{" "}
        <Link href="/en/coffee-dropshipping-canada" style={{ color: "inherit", textDecoration: "underline" }}>
          Here is exactly how it works.
        </Link>
      </p>
    </div>

    {/* ── Article ───────────────────────────────────────────────── */}
    <div className={styles.articleWrapper}>
      <article className={styles.article}>

        <p className={styles.intro}>
          You want to sell coffee under your brand. You do not want a warehouse full of inventory,
          a roasting contract, or a third-party logistics operation to manage. That is what coffee dropshipping solves.
        </p>

        <p className={styles.p}>
          The model is simple in concept, but most people do not know it exists in Canada, let alone that you can do it with a{" "}
          <Link href="/en/design" className={styles.inlineLink}>fully custom branded bag</Link> and{" "}
          <Link href="/en/coffee" className={styles.inlineLink}>specialty grade coffee</Link>.
          This guide explains exactly how it works, who it is right for, and what to expect when you get started.
        </p>

        {/* ── What Is Coffee Dropshipping ── */}
        <h2 className={styles.h2}>What Is Coffee Dropshipping?</h2>
        <p className={styles.p}>
          Dropshipping is a fulfilment model where you sell a product without stocking it yourself. When a customer buys from your store,
          the order goes directly to your supplier, who produces and ships the product straight to the customer under your brand.
        </p>
        <p className={styles.p}>
          Coffee dropshipping works the same way, with one meaningful difference: coffee is a perishable product that needs to be roasted fresh.
          That means the supplier cannot just pull a bag off a shelf and ship it. They need to roast to order — which is exactly what EZPZ does.
        </p>
        <p className={styles.p}>
          Every order triggers a fresh roast. Your customer receives coffee that was roasted days ago, not months ago. That is the standard in
          specialty coffee, and it is the standard we hold every dropship order to.
        </p>

        {/* ── How It Works With EZPZ ── */}
        <h2 className={styles.h2}>How Coffee Dropshipping Works With EZPZ</h2>
        <p className={styles.p}>
          Here is the exact flow, from the moment a customer clicks &ldquo;buy&rdquo; to the moment your bag lands on their doorstep.
        </p>
        <ol className={styles.stepList}>
          <li className={styles.step}>
            <span className={styles.stepNum}>1</span>
            <span className={styles.stepBody}>
              <strong>You set up your store.</strong> List your custom branded coffee on your Shopify, WooCommerce, or any other platform.
              You set your retail price. You own the customer relationship.
            </span>
          </li>
          <li className={styles.step}>
            <span className={styles.stepNum}>2</span>
            <span className={styles.stepBody}>
              <strong>A customer orders.</strong> The order comes into your store exactly like any other sale. You receive the payment at your retail price.
            </span>
          </li>
          <li className={styles.step}>
            <span className={styles.stepNum}>3</span>
            <span className={styles.stepBody}>
              <strong>EZPZ receives the order.</strong> Through{" "}
              <Link href="/en/coffee-dropshipping-canada" className={styles.inlineLink}>Shopify Collective</Link>{" "}
              or manual order forwarding, the order comes to us with the customer&apos;s shipping address.
            </span>
          </li>
          <li className={styles.step}>
            <span className={styles.stepNum}>4</span>
            <span className={styles.stepBody}>
              <strong>We roast, pack, and ship.</strong> We roast the coffee fresh at Canadian Roasting Society in Montreal, pack it in your{" "}
              <Link href="/en/design" className={styles.inlineLink}>custom branded bag</Link> (design included), and ship it directly to your customer.
              No EZPZ branding on the outside. It looks like it came from you.
            </span>
          </li>
          <li className={styles.step}>
            <span className={styles.stepNum}>5</span>
            <span className={styles.stepBody}>
              <strong>You keep the margin.</strong> You pay the EZPZ dropship rate per bag. The difference between that and your retail price is your profit.
              You never handle the product, the packaging, or the shipping.
            </span>
          </li>
        </ol>

        {/* ── Why Perfect for Launching ── */}
        <h2 className={styles.h2}>Why Dropshipping Is Perfect for Launching a Coffee Brand</h2>
        <p className={styles.p}>
          The traditional model for launching a coffee brand involves capital commitments that make no sense until you have proven demand:
          buying green coffee, arranging roasting contracts, ordering custom bags at minimum quantities, managing inventory, and handling fulfilment yourself.
        </p>
        <p className={styles.p}>
          Dropshipping inverts all of that. You prove demand first. You start selling under your brand with{" "}
          <Link href="/en/custom-coffee-bags-no-minimum-canada" className={styles.inlineLink}>zero minimum order</Link>,
          test your price point, build your audience, and collect real revenue — before you have spent a dollar on inventory.
        </p>
        <p className={styles.p}>
          Once you have volume and conviction, you can transition to a bulk model with better per-bag economics. But you do not have to.
          Plenty of brands run profitably on dropshipping indefinitely, especially when the margin math works at their volume.
        </p>
        <div className={styles.quoteBlock}>
          <p className={styles.quoteText}>
            &ldquo;Most new coffee brands fail not because the coffee is bad, but because they over-invested in inventory
            before they had a customer. Dropshipping eliminates that risk entirely.&rdquo;
          </p>
        </div>

        {/* ── Who It's For ── */}
        <h2 className={styles.h2}>Who Is Coffee Dropshipping For?</h2>
        <p className={styles.p}>
          Coffee dropshipping is not just for e-commerce entrepreneurs. Here are the use cases we see most often:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>DTC brands building a coffee line.</strong> If you already have an audience and want to add a branded coffee product without the overhead, dropshipping is the cleanest way to do it.
          </li>
          <li className={styles.li}>
            <strong>Content creators and influencers.</strong> Your own branded specialty coffee is one of the highest-margin, lowest-hassle products you can sell to your community.
          </li>
          <li className={styles.li}>
            <strong>Restaurants and cafés with online stores.</strong> Extend your brand into the home without running a separate fulfilment operation.
          </li>
          <li className={styles.li}>
            <strong>Corporate gifting programs.</strong> Send custom branded coffee directly to client addresses without managing a gift inventory.
          </li>
          <li className={styles.li}>
            <strong>Subscription box operators.</strong> Add a private label coffee slot to your box without sourcing and stocking it yourself.
          </li>
        </ul>
        <p className={styles.p}>
          If you have customers and a place to sell, dropshipping gives you a finished branded coffee product to sell them with no operational lift.
        </p>

        {/* ── Subscriptions ── */}
        <h2 className={styles.h2}>Can You Offer Subscriptions Through Dropshipping?</h2>
        <p className={styles.p}>
          Yes. This is one of the most compelling aspects of the model. Because there is no inventory to manage, recurring subscription orders are
          straightforward to set up. Your customer subscribes on your Shopify store. Each renewal triggers a new order to EZPZ. We roast fresh and ship.
        </p>
        <p className={styles.p}>
          Coffee subscriptions have exceptionally strong retention economics. Customers who subscribe to a coffee brand typically stay for months or years.
          The per-bag margin compounds with each renewal. And because the coffee is{" "}
          <Link href="/en/coffee" className={styles.inlineLink}>specialty grade — 80+ on the SCA scale</Link> — customers have a reason to keep coming back.
        </p>
        <p className={styles.p}>
          Setting up a Shopify subscription with EZPZ dropshipping is one of the most efficient ways to build recurring revenue around a physical product.
        </p>

        {/* ── Quality / Branding ── */}
        <h2 className={styles.h2}>Quality and Branding — Will It Actually Look Good?</h2>
        <p className={styles.p}>
          This is the right question to ask. Dropshipping has a reputation for generic products in anonymous packaging, and that reputation is earned —
          for most categories. Coffee dropshipping with EZPZ is different on both dimensions.
        </p>
        <p className={styles.p}>
          <strong>The coffee:</strong> Every bag is{" "}
          <Link href="/en/coffee" className={styles.inlineLink}>specialty grade</Link>, sourced from traceable farms in Ethiopia, Colombia, Guatemala, and Brazil.
          Every origin scores 80 or above on the SCA cupping scale. It is roasted fresh at Canadian Roasting Society in Montreal.
          It is not commodity coffee in a branded bag. It is genuinely excellent coffee in your branded bag.
        </p>
        <p className={styles.p}>
          <strong>The bag:</strong>{" "}
          <Link href="/en/design" className={styles.inlineLink}>Custom design is always included</Link>, no extra charge.
          You bring your logo and your vision; our team builds the bag. 225g stand-up pouches with degassing valve, resealable zip, and your label applied cleanly.
          Nothing on the outside that says EZPZ. It arrives looking like your product, because it is.
        </p>
        <p className={styles.p}>
          The customer experience — opening a bag of coffee that smells fresh, looks professional, and tastes exceptional — is what builds the repeat order. That is what we care about.
        </p>

        {/* ── How to Get Started ── */}
        <h2 className={styles.h2}>How to Get Started With EZPZ Coffee Dropshipping</h2>
        <p className={styles.p}>
          Getting started is faster than you expect. Here is what the onboarding process looks like:
        </p>
        <ol className={styles.stepList}>
          <li className={styles.step}>
            <span className={styles.stepNum}>1</span>
            <span className={styles.stepBody}>
              <strong>Request a sample kit.</strong> Before you commit to anything, taste the coffee. We will send you a{" "}
              <Link href="/en/contact?subject=Free Sample Request" className={styles.inlineLink}>free sample kit</Link> so
              you can verify the quality firsthand.
            </span>
          </li>
          <li className={styles.step}>
            <span className={styles.stepNum}>2</span>
            <span className={styles.stepBody}>
              <strong>Design your bag.</strong> Use our{" "}
              <Link href="/en/design" className={styles.inlineLink}>online bag designer</Link> to upload your logo and build
              your label. Our team reviews and finalizes every design before it goes to print.
            </span>
          </li>
          <li className={styles.step}>
            <span className={styles.stepNum}>3</span>
            <span className={styles.stepBody}>
              <strong>Set up your store connection.</strong> If you are on Shopify, we connect through{" "}
              <Link href="/en/coffee-dropshipping-canada" className={styles.inlineLink}>Shopify Collective</Link>.
              For other platforms, we set up a simple order forwarding workflow. Either way, it takes minutes, not days.
            </span>
          </li>
          <li className={styles.step}>
            <span className={styles.stepNum}>4</span>
            <span className={styles.stepBody}>
              <strong>Go live.</strong> List your product, set your price, and start selling. The first order you receive is the first one we fulfil.
              No inventory purchase required to launch.
            </span>
          </li>
        </ol>
        <p className={styles.p}>
          The entire process from first conversation to live store typically takes one to two weeks. Most of that time is bag design review and
          store connection setup. If you already have a design ready and a Shopify store set up, it can be faster.
        </p>
        <p className={styles.p}>
          If you have questions about whether the model works for your specific situation —{" "}
          your platform, your audience size, your margin targets — reach out. We have run this for enough different brands to give you a straight answer.
        </p>

      </article>
    </div>

    {/* ── CTA Banner ────────────────────────────────────────────── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>
          Ready to launch your coffee brand without the inventory risk?
        </h2>
        <div className={styles.ctaButtons}>
          <Link href="/en/contact" className={styles.ctaPrimary}>
            Get started
          </Link>
          <Link href="/en/design" className={styles.ctaSecondary}>
            Design your bag
          </Link>
        </div>
        <p style={{ marginTop: "1.25rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
          Want to taste first?{" "}
          <Link href="/en/contact?subject=Free Sample Request" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "underline" }}>
            Request a free sample kit — no commitment required.
          </Link>
        </p>
      </div>
    </section>

    {/* ── More from the blog ────────────────────────────────────── */}
    <section className={styles.more}>
      <div className={styles.moreInner}>
        <h2 className={styles.moreTitle}>More from the blog</h2>
        <div className={styles.moreGrid}>
          {morePosts.map((post) => (
            <Link key={post.slug} href={`/en/blog/${post.slug}`} className={styles.moreCard}>
              <div className={styles.moreCardImage}>
                <img src={post.image} alt={post.title} loading="lazy" className={styles.moreCardImg} />
              </div>
              <div className={styles.moreCardBody}>
                <span className={styles.moreCardCategory} style={{ color: post.categoryColor }}>
                  {post.category}
                </span>
                <h3 className={styles.moreCardTitle}>{post.title}</h3>
                <p className={styles.moreCardExcerpt}>{post.excerpt}</p>
                <div className={styles.moreCardFooter}>
                  <span className={styles.moreCardDate}>{post.date}</span>
                  <span className={styles.moreCardReadMore}>
                    Read more <ArrowRight size={12} weight="bold" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Page;
