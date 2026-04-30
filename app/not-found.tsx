import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Page Not Found | EZPZ Coffee",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>404 – Page Not Found | EZPZ Coffee</title>
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          background: "#111111",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <main
          style={{
            textAlign: "center",
            padding: "48px 24px",
            maxWidth: "560px",
            width: "100%",
          }}
        >
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#ff4200",
              margin: "0 0 24px",
            }}
          >
            404 Error
          </p>

          <h1
            style={{
              fontSize: "clamp(2rem, 6vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              color: "#ffffff",
              margin: "0 0 20px",
              letterSpacing: "-0.01em",
            }}
          >
            Lost in the beans?
          </h1>

          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.6)",
              margin: "0 0 40px",
            }}
          >
            The page you are looking for does not exist.
            <br />
            Let us get you back on track.
          </p>

          <div
            style={{
              display: "flex",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="/en"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "48px",
                padding: "0 28px",
                background: "#ff4200",
                color: "#ffffff",
                fontSize: "0.82rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                borderRadius: "2px",
              }}
            >
              Go to homepage
            </a>
            <a
              href="/en/design"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "48px",
                padding: "0 28px",
                background: "transparent",
                color: "#ffffff",
                fontSize: "0.82rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: "2px",
              }}
            >
              Design your bag
            </a>
          </div>
        </main>
      </body>
    </html>
  );
}
