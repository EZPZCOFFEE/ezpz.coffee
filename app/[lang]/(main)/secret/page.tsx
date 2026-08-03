import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "You found it. | EZPZ Coffee",
  description: "You found the secret page. Good instincts.",
  robots: { index: false, follow: false },
};

export default function SecretPage() {
  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "#0D0A07",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 1.5rem",
        textAlign: "center",
        fontFamily: "var(--font-montserrat, system-ui, sans-serif)",
      }}
    >
      <p
        style={{
          fontSize: "4rem",
          lineHeight: 1,
          marginBottom: "1.5rem",
          userSelect: "none",
        }}
        aria-hidden="true"
      >
        ☕
      </p>

      <p
        style={{
          fontSize: "0.7rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#C17A3A",
          marginBottom: "1rem",
          fontWeight: 700,
        }}
      >
        You found it
      </p>

      <h1
        style={{
          fontSize: "clamp(1.8rem, 5vw, 3rem)",
          fontWeight: 800,
          color: "#F5EFE6",
          lineHeight: 1.2,
          marginBottom: "1.5rem",
          maxWidth: "28ch",
        }}
      >
        Alright, you&apos;re clearly our kind of person.
      </h1>

      <p
        style={{
          fontSize: "1.05rem",
          color: "rgba(245,239,230,0.6)",
          lineHeight: 1.75,
          maxWidth: "42ch",
          marginBottom: "0.75rem",
        }}
      >
        Not many people find their way here. The ones who do tend to care about
        details — and detail-oriented people make great coffee partners.
      </p>

      <p
        style={{
          fontSize: "1.05rem",
          color: "rgba(245,239,230,0.6)",
          lineHeight: 1.75,
          maxWidth: "42ch",
          marginBottom: "2.5rem",
        }}
      >
        While you&apos;re here: we still have zero minimum orders, full custom
        design, and specialty grade coffee roasted in Montreal.{" "}
        <span style={{ color: "#C17A3A", fontWeight: 700 }}>Easy peasy.</span>
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.75rem",
          justifyContent: "center",
          marginBottom: "3rem",
        }}
      >
        <Link
          href="/en/design"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4em",
            padding: "0.7em 1.6em",
            background: "#C17A3A",
            color: "#0D0A07",
            fontWeight: 800,
            fontSize: "0.9rem",
            borderRadius: "4px",
            textDecoration: "none",
            letterSpacing: "0.03em",
          }}
        >
          Design your bag →
        </Link>
        <Link
          href="/en"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4em",
            padding: "0.7em 1.6em",
            background: "transparent",
            color: "rgba(245,239,230,0.7)",
            fontWeight: 600,
            fontSize: "0.9rem",
            border: "1.5px solid rgba(245,239,230,0.15)",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          Take me home
        </Link>
      </div>

      <p
        style={{
          fontSize: "0.72rem",
          color: "rgba(245,239,230,0.2)",
          fontStyle: "italic",
          letterSpacing: "0.04em",
        }}
        aria-hidden="true"
      >
        psst — there are 17 more of these hidden around the site
      </p>
    </div>
  );
}
