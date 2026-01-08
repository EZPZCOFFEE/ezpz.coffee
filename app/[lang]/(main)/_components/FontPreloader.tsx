import Script from "next/script";

/**
 * Preloads the critical DM Sans font to prevent FOUT (Flash of Unstyled Text)
 * on first page load. Uses inline script to add preload link as early as possible.
 */
export default function FontPreloader() {
  return (
    <Script
      id="font-preloader"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'font';
            link.type = 'font/ttf';
            link.crossOrigin = 'anonymous';
            const pathname = window.location.pathname;
            const lang = pathname.split('/')[1] || 'en';
            link.href = '/' + lang + '/_fonts/dmsans/DMSans-VariableFont_opsz,wght.ttf';
            document.head.appendChild(link);
          })();
        `,
      }}
    />
  );
}

