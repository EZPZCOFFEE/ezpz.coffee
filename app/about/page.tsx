import type { Metadata } from "next";

import MarketingPage from "@/components/custom/MarketingPage";
import aboutIllustration from "@/public/arts/about-us.svg";

export const metadata: Metadata = {
  title: "About EZPZ Coffee | Producer-first custom roastery",
  description:
    "EZPZ Coffee exists to spotlight the farmers and producers behind every bag. Learn how we keep sourcing transparent and give customers a direct line to origin stories.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About EZPZ Coffee",
    description:
      "We are the transmission belt between microlot producers and the people who drink their coffee. Get to know the team and the promises that guide our work.",
    type: "website",
    url: "/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About EZPZ Coffee",
    description:
      "Transparency, traceability, and respect for the producers behind every custom bag. Learn what drives us.",
  },
};

const AboutPage = () => {
  return (
    <MarketingPage
      eyebrow="About us"
      title="Jungle at its simplest is a transmission belt. Nothing more."
      intro="Our real job is to get out of the way—spotlighting the coffee, the producers, and the stories that make each bag worth sharing."
      sections={[
        {
          copy: [
            "We treat EZPZ like infrastructure: a quiet system that moves value from origin to cup without diluting what makes each farmer distinct. Every bag we print includes the name of the producer, the plot, and the processing decisions so customers choose Wilton, Karol, or Antonio—not a faceless brand.",
            "That discipline shapes everything from our sourcing calendar to the way we price wholesale runs. If we cannot name the person behind a lot or explain how they were paid, we don't ship it. When customers customize a bag, they inherit that same transparency.",
          ],
        },
        {
          heading: "Future-proofed by shared ownership",
          copy: [
            "Our history is already intertwined with the producers we work with. They sit in our planning calls, veto marketing copy, and set the guardrails for quality. The future stays theirs because we design the business to keep them in the driver's seat while we handle the boring logistics.",
          ],
        },
      ]}
      illustration={{
        image: aboutIllustration,
        alt: "Heart character waving in the EZPZ illustration style",
        caption: "Illustration pulled from the EZPZ arts library.",
        priority: true,
      }}
    />
  );
};

export default AboutPage;
