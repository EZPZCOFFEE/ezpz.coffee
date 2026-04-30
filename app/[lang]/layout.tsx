import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { headers } from "next/headers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { PropsWithChildren } from "react";

import { Locale, locales } from "@/i18n/types";
import { baseUrl } from "@/lib/base-url";

import "../global.scss";

// Sans-serif fonts
// DM Sans is the default font - optimize it for immediate rendering
const dmSans = localFont({
  src: "./_fonts/dmsans/DMSans-VariableFont_opsz,wght.ttf",
  variable: "--font-dm-sans",
  display: "swap",
  adjustFontFallback: "Arial",
});

const inter = localFont({
  src: "./_fonts/inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  display: "optional",
  adjustFontFallback: false,
});

const poppins = localFont({
  src: [
    { path: "./_fonts/poppins/Poppins-Thin.ttf", weight: "100", style: "normal" },
    { path: "./_fonts/poppins/Poppins-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "./_fonts/poppins/Poppins-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./_fonts/poppins/Poppins-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "./_fonts/poppins/Poppins-Light.ttf", weight: "300", style: "normal" },
    { path: "./_fonts/poppins/Poppins-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./_fonts/poppins/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "./_fonts/poppins/Poppins-Italic.ttf", weight: "400", style: "italic" },
    { path: "./_fonts/poppins/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "./_fonts/poppins/Poppins-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./_fonts/poppins/Poppins-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./_fonts/poppins/Poppins-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./_fonts/poppins/Poppins-Bold.ttf", weight: "700", style: "normal" },
    { path: "./_fonts/poppins/Poppins-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "./_fonts/poppins/Poppins-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./_fonts/poppins/Poppins-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
    { path: "./_fonts/poppins/Poppins-Black.ttf", weight: "900", style: "normal" },
    { path: "./_fonts/poppins/Poppins-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-poppins",
  display: "optional",
  adjustFontFallback: false,
});

const manrope = localFont({
  src: "./_fonts/manrope/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  display: "swap",
});

const alegreyaSans = localFont({
  src: [
    { path: "./_fonts/alegreyasans/AlegreyaSans-Thin.ttf", weight: "100", style: "normal" },
    { path: "./_fonts/alegreyasans/AlegreyaSans-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "./_fonts/alegreyasans/AlegreyaSans-Light.ttf", weight: "300", style: "normal" },
    { path: "./_fonts/alegreyasans/AlegreyaSans-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./_fonts/alegreyasans/AlegreyaSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./_fonts/alegreyasans/AlegreyaSans-Italic.ttf", weight: "400", style: "italic" },
    { path: "./_fonts/alegreyasans/AlegreyaSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./_fonts/alegreyasans/AlegreyaSans-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./_fonts/alegreyasans/AlegreyaSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "./_fonts/alegreyasans/AlegreyaSans-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "./_fonts/alegreyasans/AlegreyaSans-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./_fonts/alegreyasans/AlegreyaSans-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
    { path: "./_fonts/alegreyasans/AlegreyaSans-Black.ttf", weight: "900", style: "normal" },
    { path: "./_fonts/alegreyasans/AlegreyaSans-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-alegreya-sans",
  display: "swap",
});

const archivoNarrow = localFont({
  src: "./_fonts/archivonarrow/ArchivoNarrow-VariableFont_wght.ttf",
  variable: "--font-archivo-narrow",
  display: "swap",
});

const chivo = localFont({
  src: "./_fonts/chivo/Chivo-VariableFont_wght.ttf",
  variable: "--font-chivo",
  display: "swap",
});

const firaSans = localFont({
  src: [
    { path: "./_fonts/firasans/FiraSans-Thin.ttf", weight: "100", style: "normal" },
    { path: "./_fonts/firasans/FiraSans-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "./_fonts/firasans/FiraSans-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./_fonts/firasans/FiraSans-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "./_fonts/firasans/FiraSans-Light.ttf", weight: "300", style: "normal" },
    { path: "./_fonts/firasans/FiraSans-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./_fonts/firasans/FiraSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./_fonts/firasans/FiraSans-Italic.ttf", weight: "400", style: "italic" },
    { path: "./_fonts/firasans/FiraSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./_fonts/firasans/FiraSans-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./_fonts/firasans/FiraSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./_fonts/firasans/FiraSans-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./_fonts/firasans/FiraSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "./_fonts/firasans/FiraSans-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "./_fonts/firasans/FiraSans-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./_fonts/firasans/FiraSans-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
    { path: "./_fonts/firasans/FiraSans-Black.ttf", weight: "900", style: "normal" },
    { path: "./_fonts/firasans/FiraSans-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-fira-sans",
  display: "swap",
});

const ibmPlexSans = localFont({
  src: [
    { path: "./_fonts/ibmplexsans/IBMPlexSans-Thin.ttf", weight: "100", style: "normal" },
    { path: "./_fonts/ibmplexsans/IBMPlexSans-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "./_fonts/ibmplexsans/IBMPlexSans-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./_fonts/ibmplexsans/IBMPlexSans-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "./_fonts/ibmplexsans/IBMPlexSans-Light.ttf", weight: "300", style: "normal" },
    { path: "./_fonts/ibmplexsans/IBMPlexSans-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./_fonts/ibmplexsans/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./_fonts/ibmplexsans/IBMPlexSans-Italic.ttf", weight: "400", style: "italic" },
    { path: "./_fonts/ibmplexsans/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
    { path: "./_fonts/ibmplexsans/IBMPlexSans-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./_fonts/ibmplexsans/IBMPlexSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./_fonts/ibmplexsans/IBMPlexSans-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./_fonts/ibmplexsans/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "./_fonts/ibmplexsans/IBMPlexSans-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

const karla = localFont({
  src: "./_fonts/karla/Karla-VariableFont_wght.ttf",
  variable: "--font-karla",
  display: "swap",
});

const libreFranklin = localFont({
  src: "./_fonts/librefranklin/LibreFranklin-VariableFont_wght.ttf",
  variable: "--font-libre-franklin",
  display: "swap",
});

const montserrat = localFont({
  src: "./_fonts/montserrat/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = localFont({
  src: "./_fonts/opensans/OpenSans-VariableFont_wdth,wght.ttf",
  variable: "--font-open-sans",
  display: "swap",
});

const prozaLibre = localFont({
  src: [
    { path: "./_fonts/prozalibre/ProzaLibre-Regular.ttf", weight: "400", style: "normal" },
    { path: "./_fonts/prozalibre/ProzaLibre-Italic.ttf", weight: "400", style: "italic" },
    { path: "./_fonts/prozalibre/ProzaLibre-Medium.ttf", weight: "500", style: "normal" },
    { path: "./_fonts/prozalibre/ProzaLibre-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./_fonts/prozalibre/ProzaLibre-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./_fonts/prozalibre/ProzaLibre-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./_fonts/prozalibre/ProzaLibre-Bold.ttf", weight: "700", style: "normal" },
    { path: "./_fonts/prozalibre/ProzaLibre-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "./_fonts/prozalibre/ProzaLibre-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./_fonts/prozalibre/ProzaLibre-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
  ],
  variable: "--font-proza-libre",
  display: "swap",
});

const ptSans = localFont({
  src: [
    { path: "./_fonts/ptsans/PTSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "./_fonts/ptsans/PTSans-Italic.ttf", weight: "400", style: "italic" },
    { path: "./_fonts/ptsans/PTSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "./_fonts/ptsans/PTSans-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-pt-sans",
  display: "optional",
  adjustFontFallback: false,
});

const raleway = localFont({
  src: "./_fonts/raleway/Raleway-VariableFont_wght.ttf",
  variable: "--font-raleway",
  display: "swap",
});

const roboto = localFont({
  src: "./_fonts/roboto/Roboto-VariableFont_wdth,wght.ttf",
  variable: "--font-roboto",
  display: "swap",
});

const rubik = localFont({
  src: "./_fonts/rubik/Rubik-VariableFont_wght.ttf",
  variable: "--font-rubik",
  display: "swap",
});

const sourceSans = localFont({
  src: "./_fonts/sourcesanspro/SourceSans3-VariableFont_wght.ttf",
  variable: "--font-source-sans",
  display: "swap",
});

const workSans = localFont({
  src: "./_fonts/worksans/WorkSans-VariableFont_wght.ttf",
  variable: "--font-work-sans",
  display: "swap",
});

// Serif fonts
const playfairDisplay = localFont({
  src: "./_fonts/playfairdisplay/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-playfair-display",
  display: "swap",
});

const lora = localFont({
  src: "./_fonts/lora/Lora-VariableFont_wght.ttf",
  variable: "--font-lora",
  display: "swap",
});

const libreBaskerville = localFont({
  src: [
    { path: "./_fonts/librebaskerville/LibreBaskerville-Regular.ttf", weight: "400", style: "normal" },
    { path: "./_fonts/librebaskerville/LibreBaskerville-Italic.ttf", weight: "400", style: "italic" },
    { path: "./_fonts/librebaskerville/LibreBaskerville-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-libre-baskerville",
  display: "swap",
});

const alegreya = localFont({
  src: "./_fonts/alegreya/Alegreya-VariableFont_wght.ttf",
  variable: "--font-alegreya",
  display: "swap",
});

const cardo = localFont({
  src: [
    { path: "./_fonts/cardo/Cardo-Regular.ttf", weight: "400", style: "normal" },
    { path: "./_fonts/cardo/Cardo-Italic.ttf", weight: "400", style: "italic" },
    { path: "./_fonts/cardo/Cardo-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-cardo",
  display: "swap",
});

const cormorant = localFont({
  src: "./_fonts/cormorant/Cormorant-VariableFont_wght.ttf",
  variable: "--font-cormorant",
  display: "swap",
});

const eczar = localFont({
  src: "./_fonts/eczar/Eczar-VariableFont_wght.ttf",
  variable: "--font-eczar",
  display: "swap",
});

const neuton = localFont({
  src: [
    { path: "./_fonts/neuton/Neuton-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./_fonts/neuton/Neuton-Light.ttf", weight: "300", style: "normal" },
    { path: "./_fonts/neuton/Neuton-Regular.ttf", weight: "400", style: "normal" },
    { path: "./_fonts/neuton/Neuton-Italic.ttf", weight: "400", style: "italic" },
    { path: "./_fonts/neuton/Neuton-Bold.ttf", weight: "700", style: "normal" },
    { path: "./_fonts/neuton/Neuton-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-neuton",
  display: "swap",
});

const ptSerif = localFont({
  src: [
    { path: "./_fonts/ptserif/PTSerif-Regular.ttf", weight: "400", style: "normal" },
    { path: "./_fonts/ptserif/PTSerif-Italic.ttf", weight: "400", style: "italic" },
    { path: "./_fonts/ptserif/PTSerif-Bold.ttf", weight: "700", style: "normal" },
    { path: "./_fonts/ptserif/PTSerif-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-pt-serif",
  display: "swap",
});

const sourceSerif = localFont({
  src: "./_fonts/sourceserifpro/SourceSerif4-VariableFont_opsz,wght.ttf",
  variable: "--font-source-serif",
  display: "optional",
  adjustFontFallback: false,
});

const spectral = localFont({
  src: [
    { path: "./_fonts/spectral/Spectral-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./_fonts/spectral/Spectral-ExtraLightItalic.ttf", weight: "200", style: "italic" },
    { path: "./_fonts/spectral/Spectral-Light.ttf", weight: "300", style: "normal" },
    { path: "./_fonts/spectral/Spectral-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./_fonts/spectral/Spectral-Regular.ttf", weight: "400", style: "normal" },
    { path: "./_fonts/spectral/Spectral-Italic.ttf", weight: "400", style: "italic" },
    { path: "./_fonts/spectral/Spectral-Medium.ttf", weight: "500", style: "normal" },
    { path: "./_fonts/spectral/Spectral-MediumItalic.ttf", weight: "500", style: "italic" },
    { path: "./_fonts/spectral/Spectral-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./_fonts/spectral/Spectral-SemiBoldItalic.ttf", weight: "600", style: "italic" },
    { path: "./_fonts/spectral/Spectral-Bold.ttf", weight: "700", style: "normal" },
    { path: "./_fonts/spectral/Spectral-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "./_fonts/spectral/Spectral-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./_fonts/spectral/Spectral-ExtraBoldItalic.ttf", weight: "800", style: "italic" },
  ],
  variable: "--font-spectral",
  display: "swap",
});

// Display fonts
const fraunces = localFont({
  src: "./_fonts/fraunces/Fraunces-VariableFont_SOFT,WONK,opsz,wght.ttf",
  variable: "--font-fraunces",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: "./_fonts/spacegrotesk/SpaceGrotesk-VariableFont_wght.ttf",
  variable: "--font-space-grotesk",
  display: "swap",
});

const bioRhyme = localFont({
  src: "./_fonts/biorhyme/BioRhyme-VariableFont_wdth,wght.ttf",
  variable: "--font-bio-rhyme",
  display: "swap",
});

const inknutAntiqua = localFont({
  src: [
    { path: "./_fonts/inknutantiqua/InknutAntiqua-Light.ttf", weight: "300", style: "normal" },
    { path: "./_fonts/inknutantiqua/InknutAntiqua-Regular.ttf", weight: "400", style: "normal" },
    { path: "./_fonts/inknutantiqua/InknutAntiqua-Medium.ttf", weight: "500", style: "normal" },
    { path: "./_fonts/inknutantiqua/InknutAntiqua-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./_fonts/inknutantiqua/InknutAntiqua-Bold.ttf", weight: "700", style: "normal" },
    { path: "./_fonts/inknutantiqua/InknutAntiqua-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "./_fonts/inknutantiqua/InknutAntiqua-Black.ttf", weight: "900", style: "normal" },
  ],
  variable: "--font-inknut-antiqua",
  display: "optional",
  adjustFontFallback: false,
});

const syne = localFont({
  src: "./_fonts/syne/Syne-VariableFont_wght.ttf",
  variable: "--font-syne",
  display: "swap",
});

// Monospace fonts
const inconsolata = localFont({
  src: "./_fonts/inconsolata/Inconsolata-VariableFont_wdth,wght.ttf",
  variable: "--font-inconsolata",
  display: "swap",
});

const spaceMono = localFont({
  src: [
    { path: "./_fonts/spacemono/SpaceMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "./_fonts/spacemono/SpaceMono-Italic.ttf", weight: "400", style: "italic" },
    { path: "./_fonts/spacemono/SpaceMono-Bold.ttf", weight: "700", style: "normal" },
    { path: "./_fonts/spacemono/SpaceMono-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-space-mono",
  display: "optional",
  adjustFontFallback: false,
});

const fontVariables = [
  // Sans-serif
  dmSans.variable,
  inter.variable,
  poppins.variable,
  manrope.variable,
  alegreyaSans.variable,
  archivoNarrow.variable,
  chivo.variable,
  firaSans.variable,
  ibmPlexSans.variable,
  karla.variable,
  libreFranklin.variable,
  montserrat.variable,
  openSans.variable,
  prozaLibre.variable,
  ptSans.variable,
  raleway.variable,
  roboto.variable,
  rubik.variable,
  sourceSans.variable,
  workSans.variable,
  // Serif
  playfairDisplay.variable,
  lora.variable,
  libreBaskerville.variable,
  alegreya.variable,
  cardo.variable,
  cormorant.variable,
  eczar.variable,
  neuton.variable,
  ptSerif.variable,
  sourceSerif.variable,
  spectral.variable,
  // Display
  fraunces.variable,
  spaceGrotesk.variable,
  bioRhyme.variable,
  inknutAntiqua.variable,
  syne.variable,
  // Monospace
  inconsolata.variable,
  spaceMono.variable,
].join(" ");

export async function generateMetadata(): Promise<Metadata> {
  const pathname = (await headers()).get("x-pathname") ?? "";
  return {
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: pathname || undefined,
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

interface RootLayoutProps extends PropsWithChildren {
  params: Promise<{ lang: string }>;
}

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  const { lang: langParam } = await params;
  const lang = langParam as Locale;

  // Enable static rendering
  setRequestLocale(lang);

  // Get messages for client components
  const messages = await getMessages();

  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className={fontVariables}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18087558623" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2R52RRKHM3');
            gtag('config', 'AW-18087558623');
          `}
        </Script>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '904606790538530');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=904606790538530&ev=PageView&noscript=1" alt="" />
        </noscript>
      </body>
    </html>
  );
};

export default RootLayout;
