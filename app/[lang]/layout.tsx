import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { PropsWithChildren } from "react";

import Layout from "@/components/custom/Layout";
import { Locale, locales } from "@/i18n/types";
import { baseUrl } from "@/lib/base-url";

import "../global.scss";

// Sans-serif fonts
const dmSans = localFont({
  src: "./_fonts/dmsans/DMSans-VariableFont_opsz,wght.ttf",
  variable: "--font-dm-sans",
  display: "swap",
});

const inter = localFont({
  src: "./_fonts/inter/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  display: "swap",
});

const poppins = localFont({
  src: "./_fonts/poppins/Poppins-Regular.ttf",
  variable: "--font-poppins",
  display: "swap",
});

const manrope = localFont({
  src: "./_fonts/manrope/Manrope-VariableFont_wght.ttf",
  variable: "--font-manrope",
  display: "swap",
});

const alegreyaSans = localFont({
  src: "./_fonts/alegreyasans/AlegreyaSans-Regular.ttf",
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
  src: "./_fonts/firasans/FiraSans-Regular.ttf",
  variable: "--font-fira-sans",
  display: "swap",
});

const ibmPlexSans = localFont({
  src: "./_fonts/ibmplexsans/IBMPlexSans-Regular.ttf",
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
  src: "./_fonts/prozalibre/ProzaLibre-Regular.ttf",
  variable: "--font-proza-libre",
  display: "swap",
});

const ptSans = localFont({
  src: "./_fonts/ptsans/PTSans-Regular.ttf",
  variable: "--font-pt-sans",
  display: "swap",
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
  src: "./_fonts/librebaskerville/LibreBaskerville-Regular.ttf",
  variable: "--font-libre-baskerville",
  display: "swap",
});

const alegreya = localFont({
  src: "./_fonts/alegreya/Alegreya-VariableFont_wght.ttf",
  variable: "--font-alegreya",
  display: "swap",
});

const cardo = localFont({
  src: "./_fonts/cardo/Cardo-Regular.ttf",
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
  src: "./_fonts/neuton/Neuton-Regular.ttf",
  variable: "--font-neuton",
  display: "swap",
});

const ptSerif = localFont({
  src: "./_fonts/ptserif/PTSerif-Regular.ttf",
  variable: "--font-pt-serif",
  display: "swap",
});

const sourceSerif = localFont({
  src: "./_fonts/sourceserifpro/SourceSerif4-VariableFont_opsz,wght.ttf",
  variable: "--font-source-serif",
  display: "swap",
});

const spectral = localFont({
  src: "./_fonts/spectral/Spectral-Regular.ttf",
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
  src: "./_fonts/inknutantiqua/InknutAntiqua-Regular.ttf",
  variable: "--font-inknut-antiqua",
  display: "swap",
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
  src: "./_fonts/spacemono/SpaceMono-Regular.ttf",
  variable: "--font-space-mono",
  display: "swap",
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

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
};

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
      <body className={fontVariables}>
        <NextIntlClientProvider messages={messages}>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
