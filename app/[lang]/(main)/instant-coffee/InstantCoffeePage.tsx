"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useState } from "react";

import styles from "../services/servicePages.module.scss";

const BENEFIT_CARDS = [
  {
    emoji: "🌸",
    title: "Full Flavor Preserved",
    titleFr: "Saveur complète préservée",
    body: "The gentle freeze-drying process locks in the delicate aromas and flavors that spray-drying destroys.",
    bodyFr: "Le doux processus de lyophilisation emprisonne les arômes et saveurs délicats que la dessiccation par pulvérisation détruit.",
  },
  {
    emoji: "⭐",
    title: "Specialty Grade",
    titleFr: "Qualité spécialité",
    body: "Made from the same traceable, 80+ SCA specialty coffee we put in every EZPZ bag. Not commodity beans.",
    bodyFr: "Fabriqué à partir du même café de spécialité traçable à 80+ SCA que nous mettons dans chaque sachet EZPZ. Pas des grains génériques.",
  },
  {
    emoji: "🌿",
    title: "Keeps Its Benefits",
    titleFr: "Conserve ses bienfaits",
    body: "The low-heat process helps preserve the natural antioxidants and compounds found in freshly brewed coffee.",
    bodyFr: "Le processus à basse température aide à préserver les antioxydants naturels et les composés présents dans le café fraîchement infusé.",
  },
  {
    emoji: "⚡",
    title: "Ready in Seconds",
    titleFr: "Prêt en quelques secondes",
    body: "A genuine specialty cup anywhere — at home, at the office, camping, travelling — with just hot water.",
    bodyFr: "Une véritable tasse de spécialité n'importe où, à la maison, au bureau, en camping, en voyage, avec seulement de l'eau chaude.",
  },
];

const WHO_ITS_FOR = [
  { emoji: "☕", title: "Coffee Brands", titleFr: "Marques de café", body: "Add a high-margin, high-convenience product to your lineup that stands apart from grocery-store instant.", bodyFr: "Ajoutez un produit à haute marge et très pratique à votre gamme qui se démarque du café instantané d'épicerie." },
  { emoji: "🏨", title: "Hotels", titleFr: "Hôtels", body: "Offer guests a genuinely good in-room coffee, not the sad instant sachet they expect.", bodyFr: "Offrez aux clients un café en chambre vraiment bon, pas le triste sachet instantané auquel ils s'attendent." },
  { emoji: "🏢", title: "Offices & Corporate", titleFr: "Bureaux et entreprises", body: "Premium instant for the breakroom, or branded gifting that people actually enjoy.", bodyFr: "Instantané haut de gamme pour la salle de pause, ou cadeaux de marque que les gens apprécient vraiment." },
  { emoji: "🏕️", title: "Outdoor & Travel Brands", titleFr: "Marques plein air et voyage", body: "The perfect companion for camping, hiking, and travel — specialty coffee with zero equipment.", bodyFr: "Le compagnon idéal pour le camping, la randonnée et le voyage, du café de spécialité sans équipement." },
  { emoji: "🛍️", title: "Retailers", titleFr: "Détaillants", body: "A premium instant coffee that finally justifies a premium shelf price.", bodyFr: "Un café instantané haut de gamme qui justifie enfin un prix de tablette premium." },
  { emoji: "🔁", title: "Subscription & DTC", titleFr: "Abonnement et vente directe", body: "Lightweight, shelf-stable, and easy to ship — ideal for coffee subscriptions and online sales.", bodyFr: "Léger, stable en rayon et facile à expédier, idéal pour les abonnements café et les ventes en ligne." },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Choose your coffee",
    titleFr: "Choisissez votre café",
    body: "Select your specialty origin and roast, or let us recommend the best profile for freeze-drying.",
    bodyFr: "Choisissez votre origine de spécialité et votre torréfaction, ou laissez-nous recommander le meilleur profil pour la lyophilisation.",
  },
  {
    num: "02",
    title: "We brew and freeze-dry",
    titleFr: "Nous infusons et lyophilisons",
    body: "We brew your coffee and gently freeze-dry it through lyophilisation, preserving its full character.",
    bodyFr: "Nous infusons votre café et le lyophilisons doucement, préservant tout son caractère.",
  },
  {
    num: "03",
    title: "Custom packaging",
    titleFr: "Emballage personnalisé",
    body: "Your instant coffee is packaged under your brand, in the format you choose, with design included.",
    bodyFr: "Votre café instantané est emballé sous votre marque, dans le format que vous choisissez, avec le design inclus.",
  },
  {
    num: "04",
    title: "Delivered ready to sell",
    titleFr: "Livré prêt à vendre",
    body: "Your finished, branded freeze-dried coffee ships to you, ready for your shelves or your customers.",
    bodyFr: "Votre café lyophilisé fini et de marque vous est expédié, prêt pour vos tablettes ou vos clients.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is freeze-dried instant coffee?",
    qFr: "Qu'est-ce que le café instantané lyophilisé ?",
    a: "Freeze-dried instant coffee, or lyophilized coffee, is premium instant coffee made by freezing brewed specialty coffee and removing the water through sublimation under vacuum. This gentle process preserves the coffee's full flavor and aroma, unlike cheap spray-dried instant.",
    aFr: "Le café instantané lyophilisé, ou café lyophilisé, est un café instantané haut de gamme fabriqué en congelant du café de spécialité infusé et en retirant l'eau par sublimation sous vide. Ce processus doux préserve la pleine saveur et l'arôme du café, contrairement au café instantané bon marché séché par pulvérisation.",
  },
  {
    q: "Is freeze-dried coffee better than regular instant coffee?",
    qFr: "Le café lyophilisé est-il meilleur que le café instantané ordinaire ?",
    a: "Yes. Regular instant coffee is usually spray-dried with high heat that burns off delicate flavor compounds. Freeze-drying uses no aggressive heat, preserving about 95% of the coffee's flavor and aroma molecules for a far superior cup.",
    aFr: "Oui. Le café instantané ordinaire est généralement séché par pulvérisation à haute chaleur qui brûle les composés de saveur délicats. La lyophilisation n'utilise pas de chaleur agressive, préservant environ 95 % des molécules de saveur et d'arôme du café pour une tasse nettement supérieure.",
  },
  {
    q: "Does freeze-dried coffee keep coffee's health benefits?",
    qFr: "Le café lyophilisé conserve-t-il les bienfaits du café pour la santé ?",
    a: "The gentle low-heat freeze-drying process helps preserve the natural antioxidants and beneficial compounds found in freshly brewed coffee, which high-heat processing can degrade.",
    aFr: "Le doux processus de lyophilisation à basse température aide à préserver les antioxydants naturels et les composés bénéfiques présents dans le café fraîchement infusé, que le traitement à haute chaleur peut dégrader.",
  },
  {
    q: "Can I get freeze-dried instant coffee under my own brand?",
    qFr: "Puis-je obtenir du café instantané lyophilisé sous ma propre marque ?",
    a: "Yes. EZPZ offers fully custom branded freeze-dried instant coffee, made from specialty grade beans, packaged under your brand in jars, sachets, or sticks, with zero minimum order.",
    aFr: "Oui. EZPZ offre du café instantané lyophilisé entièrement personnalisé à votre marque, fabriqué à partir de grains de qualité spécialité, emballé sous votre marque en pots, sachets ou sticks, avec zéro commande minimale.",
  },
];

const InstantCoffeePage = () => {
  const locale = useLocale();
  const isFr = locale === "fr";
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGridOverlay} aria-hidden />
        <div className={styles.heroRadialGlow} aria-hidden />
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <span className={styles.heroLabel}>{isFr ? "01_ Café instantané lyophilisé" : "01_ Freeze-Dried Instant Coffee"}</span>
            <h1 className={styles.heroTitle}>
              {isFr ? "Café instantané," : "Instant Coffee,"}<br />{isFr ? "Réinventé." : "Reinvented."}
            </h1>
            <p className={styles.heroSubtitle}>
              {isFr
                ? "Café de spécialité lyophilisé haut de gamme qui conserve toute sa saveur, son arôme et ses bienfaits. Ce n'est pas le café instantané que vous connaissez. Torréfié à Montréal, marque personnalisée, zéro minimum."
                : "Premium freeze-dried specialty coffee that keeps all its flavor, aroma, and benefits. This is not the instant coffee you know. Roasted in Montreal, custom branded, zero minimum."}
            </p>
            <div className={styles.heroBtnGroup}>
              <Link href={`/${locale}/design`} className={styles.heroBtnPrimary}>
                {isFr ? "Ajouter à votre marque" : "Add it to your brand"}
              </Link>
              <Link href={`/${locale}/contact`} className={styles.heroBtnSecondary}>
                {isFr ? "Obtenir un devis gratuit" : "Get a free quote"}
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>{isFr ? "Lyophilisé" : "Freeze-dried"}</span>
                <span className={styles.heroStatLabel}>{isFr ? "Pas séché par pulvérisation" : "Not spray-dried"}</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>{isFr ? "Saveur complète" : "Full flavor"}</span>
                <span className={styles.heroStatLabel}>{isFr ? "Préservée" : "Preserved"}</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>80+ SCA</span>
                <span className={styles.heroStatLabel}>{isFr ? "Qualité spécialité" : "Specialty grade"}</span>
              </div>
            </div>
          </div>
          <div className={styles.heroRight} aria-hidden>
            <div className={styles.heroImageGlow} />
            <div className={styles.heroAccentDot1} />
            <div className={styles.heroAccentDot2} />
            <div className={styles.heroAccentDot3} />
            <div className={styles.heroAccentLine} />
            {/* Instant coffee jar illustration */}
            <svg viewBox="0 0 300 420" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "220px", maxWidth: "100%", filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.7)) drop-shadow(0 0 40px rgba(196,62,20,0.15))" }}>
              <defs>
                <linearGradient id="jarGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1a0d05" />
                  <stop offset="100%" stopColor="#0d0804" />
                </linearGradient>
                <linearGradient id="lidGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c43e14" />
                  <stop offset="100%" stopColor="#8b2b0c" />
                </linearGradient>
                <linearGradient id="accentGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#c43e14" />
                  <stop offset="100%" stopColor="#e8521a" />
                </linearGradient>
              </defs>
              {/* Jar body */}
              <rect x="40" y="90" width="220" height="290" rx="20" fill="url(#jarGrad)" stroke="rgba(196,62,20,0.25)" strokeWidth="1.5" />
              {/* Jar label area */}
              <rect x="55" y="115" width="190" height="220" rx="8" fill="rgba(196,62,20,0.07)" stroke="rgba(196,62,20,0.15)" strokeWidth="1" />
              {/* Accent stripe */}
              <rect x="55" y="115" width="190" height="5" rx="2" fill="url(#accentGrad)" />
              {/* Label text */}
              <text x="150" y="175" fontFamily="Georgia,serif" fontSize="10" fontWeight="800" fill="rgba(196,62,20,0.9)" textAnchor="middle" letterSpacing="3">FREEZE-DRIED</text>
              <text x="150" y="210" fontFamily="Georgia,serif" fontSize="22" fontWeight="900" fill="rgba(255,255,255,0.9)" textAnchor="middle">EZPZ</text>
              <text x="150" y="232" fontFamily="Georgia,serif" fontSize="9" fontWeight="700" fill="rgba(255,255,255,0.4)" textAnchor="middle" letterSpacing="2">INSTANT COFFEE</text>
              <line x1="80" y1="248" x2="220" y2="248" stroke="rgba(196,62,20,0.25)" strokeWidth="1" />
              <text x="150" y="272" fontFamily="Georgia,serif" fontSize="8" fill="rgba(255,255,255,0.28)" textAnchor="middle">SPECIALTY GRADE · MONTREAL</text>
              <text x="150" y="292" fontFamily="Georgia,serif" fontSize="8" fill="rgba(255,255,255,0.28)" textAnchor="middle">80+ SCA · LYOPHILISÉ</text>
              {/* Lid */}
              <rect x="30" y="60" width="240" height="40" rx="12" fill="url(#lidGrad)" />
              <rect x="55" y="68" width="190" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
              {/* Rim */}
              <rect x="40" y="88" width="220" height="10" rx="4" fill="rgba(196,62,20,0.4)" />
              {/* Shine */}
              <rect x="55" y="115" width="8" height="220" rx="4" fill="rgba(255,255,255,0.04)" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── DIRECT ANSWER ── */}
      <section className={styles.sectionLight} aria-labelledby="direct-answer-heading">
        <div className={styles.sectionInner}>
          <div
            data-speakable
            style={{
              background: "#f8f7f5",
              border: "1px solid #e8e3dc",
              borderLeft: "4px solid var(--color-accent)",
              padding: "1.75rem 2rem",
              borderRadius: "4px",
              maxWidth: "760px",
            }}
          >
            <p style={{ fontSize: "0.68rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--color-accent)", margin: "0 0 0.75rem" }} id="direct-answer-heading">
              {isFr ? "Qu'est-ce que le café instantané lyophilisé ?" : "What is freeze-dried instant coffee?"}
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#374151", margin: 0 }}>
              {isFr
                ? "Le café instantané lyophilisé, aussi appelé café lyophilisé, est un café instantané haut de gamme fabriqué en congelant du café de spécialité infusé et en retirant l'eau par sublimation sous vide. Contrairement au café instantané bon marché séché par pulvérisation, ce processus doux préserve la pleine saveur, l'arôme et les antioxydants du café, livrant une véritable tasse de spécialité en quelques secondes."
                : "Freeze-dried instant coffee, also called lyophilized coffee, is premium instant coffee made by freezing brewed specialty coffee and removing the water through sublimation under vacuum. Unlike cheap spray-dried instant, this gentle process preserves the coffee's full flavor, aroma, and antioxidants, delivering a real specialty cup in seconds."}
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES IT DIFFERENT ── */}
      <section className={styles.sectionDark} aria-labelledby="different-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "02_ Pas votre café instantané ordinaire" : "02_ Not Your Average Instant"}</span>
          <h2 id="different-heading" className={styles.headlineDark}>
            {isFr ? "La différence, c'est le processus." : "The difference is the process."}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "3rem", alignItems: "start" }}>
            <div>
              <p className={styles.bodyDark} style={{ maxWidth: "none" }}>
                {isFr
                  ? "La plupart des cafés instantanés en épicerie sont séchés par pulvérisation. Le café concentré est pulvérisé dans une chambre d'air très chaud qui évapore l'eau presque instantanément. C'est rapide et bon marché, mais cette chaleur agressive brûle les composés délicats qui donnent au café son goût et son arôme. Le résultat est la tasse plate, amère et unidimensionnelle que la plupart des gens associent au café instantané."
                  : "Most instant coffee on grocery shelves is spray-dried. Concentrated coffee is sprayed into a chamber of scorching hot air that flashes off the water almost instantly. It is fast and cheap, but that aggressive heat burns away the delicate compounds that give coffee its taste and aroma. The result is the flat, bitter, one-dimensional cup most people associate with instant coffee."}
              </p>
              <p className={styles.bodyDark} style={{ maxWidth: "none" }}>
                {isFr
                  ? "Notre café instantané est lyophilisé, un processus techniquement connu sous le nom de lyophilisation. Au lieu de la chaleur, nous congelons du café de spécialité fraîchement infusé, puis retirons l'eau par sublimation, où la glace se transforme directement en vapeur sous vide. Cela retire environ 95 % de l'eau tout en laissant intactes les molécules de saveur et d'arôme du café."
                  : "Our instant coffee is freeze-dried, a process technically known as lyophilisation. Instead of heat, we freeze freshly brewed specialty coffee and then remove the water through sublimation, where the ice turns directly into vapor under vacuum. This removes about 95% of the water while leaving the coffee's flavor and aroma molecules intact."}
              </p>
            </div>
            <div>
              <p className={styles.bodyDark} style={{ maxWidth: "none" }}>
                {isFr
                  ? "Pensez-y comme conserver une fleur délicate. Vous ne la blasteriez pas avec de la chaleur. Vous retireriez doucement l'humidité pour conserver sa structure et sa beauté. C'est exactement ce que la lyophilisation fait pour le café, protégeant les arômes et saveurs complexes que les hautes températures détruiraient autrement."
                  : "Think of it like preserving a delicate flower. You would not blast it with heat. You would gently remove the moisture to keep its structure and beauty. That is exactly what freeze-drying does for coffee, protecting the complex aromas and flavors that high temperatures would otherwise destroy."}
              </p>
              <div style={{ marginTop: "2rem", padding: "1.5rem", background: "rgba(196,62,20,0.06)", border: "1px solid rgba(196,62,20,0.15)", borderRadius: "4px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div>
                    <p style={{ fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.35)", margin: "0 0 0.25rem" }}>
                      {isFr ? "Séché par pulvérisation (café instantané d'épicerie)" : "Spray-dried (grocery store instant)"}
                    </p>
                    <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.45)", margin: 0 }}>
                      {isFr ? "Haute chaleur → saveur détruite → tasse plate et amère" : "High heat → flavor destroyed → flat, bitter cup"}
                    </p>
                  </div>
                  <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.08)" }} />
                  <div>
                    <p style={{ fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--color-accent)", margin: "0 0 0.25rem" }}>
                      {isFr ? "Lyophilisé (EZPZ)" : "Freeze-dried (EZPZ)"}
                    </p>
                    <p style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.65)", margin: 0 }}>
                      {isFr ? "Sans chaleur → saveur préservée → véritable tasse de spécialité" : "No heat → flavor preserved → genuine specialty cup"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className={styles.sectionLight} aria-labelledby="benefits-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "03_ Pourquoi c'est mieux" : "03_ Why It's Better"}</span>
          <h2 id="benefits-heading" className={styles.headlineLight}>
            {isFr ? "Toute la saveur. Toute la commodité." : "All the flavor. All the convenience."}
          </h2>
          <div className={styles.cardsGrid}>
            {BENEFIT_CARDS.map((item, i) => (
              <article key={i} className={styles.card}>
                <span className={styles.cardEmoji} aria-hidden>{item.emoji}</span>
                <h3 className={styles.cardTitle}>{isFr ? item.titleFr : item.title}</h3>
                <p className={styles.cardBody}>{isFr ? item.bodyFr : item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className={styles.sectionGray} aria-labelledby="who-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "04_ Pour qui" : "04_ Who It's For"}</span>
          <h2 id="who-heading" className={styles.headlineMedium}>
            {isFr ? "Un produit haut de gamme pour les marques modernes." : "A premium product for modern brands."}
          </h2>
          <div className={styles.cardsGrid6}>
            {WHO_ITS_FOR.map((item, i) => (
              <article key={i} className={styles.card}>
                <span className={styles.cardEmoji} aria-hidden>{item.emoji}</span>
                <h3 className={styles.cardTitle}>{isFr ? item.titleFr : item.title}</h3>
                <p className={styles.cardBody}>{isFr ? item.bodyFr : item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM BRANDED ── */}
      <section className={styles.sectionDark} aria-labelledby="custom-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "05_ Votre marque, votre café instantané" : "05_ Your Brand, Your Instant Coffee"}</span>
          <h2 id="custom-heading" className={styles.headlineDark}>
            {isFr ? "Café lyophilisé," : "Freeze-dried coffee,"}<br />{isFr ? "sous votre nom." : "under your name."}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,3fr) minmax(0,2fr)", gap: "3rem", alignItems: "center" }}>
            <div>
              <p className={styles.bodyDark} style={{ maxWidth: "none" }}>
                {isFr
                  ? "Comme tout chez EZPZ, notre café instantané lyophilisé peut être entièrement personnalisé à votre marque. Votre logo, votre design, votre emballage, que ce soit en pots, sachets ou sticks à portion individuelle. Nous gérons le café de spécialité, la lyophilisation, l'emballage et l'exécution. Vous obtenez un produit fini haut de gamme prêt à vendre sous votre marque."
                  : "Like everything at EZPZ, our freeze-dried instant coffee can be fully custom branded. Your logo, your design, your packaging — whether in jars, sachets, or single-serve sticks. We handle the specialty coffee, the freeze-drying, the packaging, and the fulfillment. You get a premium finished product ready to sell under your brand."}
              </p>
              <p className={styles.bodyDark} style={{ maxWidth: "none" }}>
                {isFr ? (
                  <>
                    Il se marie parfaitement avec une{" "}
                    <Link href={`/${locale}/services/custom-coffee-bags`} style={{ color: "var(--color-accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>gamme de sacs de café personnalisés</Link>,
                    offrant à vos clients une option d'infusion fraîche et une option instantanée haut de gamme, le tout sous une seule marque.
                  </>
                ) : (
                  <>
                    It pairs perfectly with a{" "}
                    <Link href={`/${locale}/services/custom-coffee-bags`} style={{ color: "var(--color-accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>custom coffee bag line</Link>,
                    giving your customers both a fresh-brew option and a premium instant option — all under one brand.
                  </>
                )}
              </p>
              <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href={`/${locale}/design`} className={styles.heroBtnPrimary}>
                  {isFr ? "Concevoir votre produit" : "Design your product"}
                </Link>
                <Link href={`/${locale}/contact`} className={styles.heroBtnSecondary}>
                  {isFr ? "Obtenir un devis gratuit" : "Get a free quote"}
                </Link>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {(isFr
                ? ["Pots", "Sachets à portion individuelle", "Sticks"]
                : ["Jars", "Single-serve sachets", "Stick packs"]
              ).map((format) => (
                <div key={format} style={{ padding: "1rem 1.25rem", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-accent)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "rgba(255,255,255,0.75)", textTransform: "uppercase", letterSpacing: "0.06em" }}>{format}</span>
                </div>
              ))}
              <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.3)", fontStyle: "italic", margin: "0.5rem 0 0" }}>
                {isFr ? "D'autres formats disponibles sur demande." : "More formats available on request."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={styles.sectionLight} aria-labelledby="how-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "06_ Comment ça fonctionne" : "06_ How It Works"}</span>
          <h2 id="how-heading" className={styles.headlineLight}>
            {isFr ? "Du grain au café instantané de marque." : "From bean to branded instant."}
          </h2>
          <div className={styles.processSteps}>
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className={styles.processStep}>
                <div className={styles.processStepNum}>{step.num}</div>
                <div className={styles.processStepContent}>
                  <h3 className={styles.processStepTitle}>{isFr ? step.titleFr : step.title}</h3>
                  <p className={styles.processStepBody}>{isFr ? step.bodyFr : step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href={`/${locale}/services`}
              style={{ display: "inline-flex", alignItems: "center", padding: "0.85em 2em", background: "transparent", color: "#111", fontSize: "0.88rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", textDecoration: "none", border: "2px solid #111" }}
            >
              {isFr ? "Voir tous nos services →" : "See all our services →"}
            </Link>
            <Link
              href={`/${locale}/coffee`}
              style={{ display: "inline-flex", alignItems: "center", padding: "0.85em 2em", background: "transparent", color: "#111", fontSize: "0.88rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", textDecoration: "none", border: "2px solid #ddd" }}
            >
              {isFr ? "Notre café →" : "About our coffee →"}
            </Link>
            <Link
              href={`/${locale}/blog/introducing-freeze-dried-instant-coffee`}
              style={{ display: "inline-flex", alignItems: "center", padding: "0.85em 2em", background: "transparent", color: "#C17A3A", fontSize: "0.88rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", textDecoration: "none", border: "2px solid #C17A3A" }}
            >
              {isFr ? "Lire l'article de lancement →" : "Read the launch post →"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.sectionGray} aria-labelledby="faq-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>07_ FAQ</span>
          <h2 id="faq-heading" className={styles.headlineMedium}>
            {isFr ? "Café instantané lyophilisé : vos questions, nos réponses" : "Freeze-Dried Instant Coffee: Your Questions Answered"}
          </h2>
          <dl style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: "2rem" }}>
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} style={{ borderBottom: "1px solid #e5e7eb", padding: "0" }}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.4rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem" }}
                >
                  <dt style={{ fontSize: "1rem", fontWeight: 700, color: "#111", margin: 0 }}>{isFr ? item.qFr : item.q}</dt>
                  <span style={{ flexShrink: 0, fontSize: "1.2rem", color: "var(--color-accent)", fontWeight: 300 }} aria-hidden>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <dd style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#6b7280", margin: 0, paddingBottom: "1.4rem" }}>{isFr ? item.aFr : item.a}</dd>
                )}
              </div>
            ))}
          </dl>
          <div style={{ marginTop: "2rem" }}>
            <Link
              href={`/${locale}/coffee-dropshipping-canada`}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.4em", fontSize: "0.85rem", fontWeight: 700, color: "var(--color-accent)", textDecoration: "none", borderBottom: "2px solid var(--color-accent)", paddingBottom: "2px" }}
            >
              {isFr ? "Vous voulez vendre du café en ligne ? Voir notre service de dropshipping →" : "Want to sell instant coffee online? See our dropshipping service →"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.finalCta} aria-labelledby="final-cta-heading">
        <div className={styles.finalCtaInner}>
          <h2 id="final-cta-heading" className={styles.finalCtaTitle}>
            {isFr ? "Ajoutez du café instantané haut de gamme à votre marque." : "Add premium instant coffee to your brand."}
          </h2>
          <p className={styles.finalCtaSubtext}>
            {isFr
              ? "Café de spécialité lyophilisé, saveur complète préservée, marque personnalisée, zéro minimum. Torréfié et produit à Montréal."
              : "Freeze-dried specialty coffee, full flavor preserved, custom branded, zero minimum. Roasted and produced in Montreal."}
          </p>
          <div className={styles.finalCtaButtons}>
            <Link href={`/${locale}/design`} className={styles.finalCtaPrimary}>
              {isFr ? "Concevoir votre produit" : "Design your product"}
            </Link>
            <Link href={`/${locale}/contact`} className={styles.finalCtaSecondary}>
              {isFr ? "Obtenir un devis gratuit" : "Get a free quote"}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default InstantCoffeePage;
