"use client";

/*
 * RatingBadge — displays an aggregate star rating + review count near the hero or trust section.
 *
 * HOW TO ACTIVATE:
 * 1. Set SHOW_RATING_BADGE = true
 * 2. Fill in RATING_DATA with real figures from Google Business Profile
 * 3. Uncomment and add the AggregateRating JSON-LD block below into the page or layout
 *
 * TODO (owner): Only activate once real Google reviews exist. Do not use placeholder numbers —
 * fake review schema violates Google's guidelines and can trigger ranking penalties.
 * GBP review URL format: https://g.page/r/XXXXXXXXXXXXX/review
 */

const SHOW_RATING_BADGE = false; // ← flip to true once real reviews are live

// TODO (owner): Replace these zeros with real values from Google Business Profile
const RATING_DATA = {
  rating: 0,     // e.g. 4.9
  count: 0,      // e.g. 37
  reviewUrl: "", // e.g. "https://g.page/r/XXXXXXXXXXXXX/review"
};

/*
 * AggregateRating JSON-LD — KEEP COMMENTED OUT until real reviews back it up.
 *
 * When activating, paste this into <script type="application/ld+json"> in the relevant page
 * or root layout. Must reflect your actual GBP data.
 *
 * const aggregateRatingSchema = {
 *   "@context": "https://schema.org",
 *   "@type": "LocalBusiness",
 *   "@id": "https://www.ezpz.coffee/#organization",
 *   "name": "EZPZ Coffee",
 *   "aggregateRating": {
 *     "@type": "AggregateRating",
 *     "ratingValue": RATING_DATA.rating,
 *     "reviewCount": RATING_DATA.count,
 *     "bestRating": 5,
 *     "worstRating": 1
 *   }
 * };
 *
 * Individual Review entries can be added under "review": [...] in the same schema.
 * Each review needs: author name, datePublished, reviewBody, reviewRating.ratingValue.
 */

const RatingBadge = () => {
  if (!SHOW_RATING_BADGE || !RATING_DATA.rating || !RATING_DATA.count) return null;

  const fullStars = Math.round(RATING_DATA.rating);
  const stars = "★".repeat(fullStars) + "☆".repeat(5 - fullStars);

  return (
    <a
      href={RATING_DATA.reviewUrl || undefined}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${RATING_DATA.rating} out of 5 stars — ${RATING_DATA.count} Google reviews`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        fontSize: "0.85rem",
        fontWeight: 600,
        color: "#111111",
        textDecoration: "none",
        background: "#fffbf5",
        border: "1px solid rgba(193,122,58,0.3)",
        borderRadius: "4px",
        padding: "0.4rem 0.85rem",
        lineHeight: 1,
        cursor: RATING_DATA.reviewUrl ? "pointer" : "default",
      }}
    >
      <span style={{ color: "#f59e0b", letterSpacing: "0.05em" }} aria-hidden>
        {stars}
      </span>
      <span style={{ fontWeight: 700 }}>{RATING_DATA.rating.toFixed(1)}</span>
      <span style={{ color: "#6b7280", fontWeight: 400 }}>
        · {RATING_DATA.count} Google {RATING_DATA.count === 1 ? "review" : "reviews"}
      </span>
    </a>
  );
};

export default RatingBadge;
