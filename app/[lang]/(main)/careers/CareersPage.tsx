"use client";

import Link from "next/link";
import { useState } from "react";

import styles from "./careers.module.scss";

type Locale = "en" | "fr";

// ─── Content ───────────────────────────────────────────────────────────────

const CONTENT = {
  en: {
    heroLabel: "01_ Careers",
    heroHeadline: "Build something bold with us.",
    heroSub: "EZPZ is changing how brands get their own coffee in Canada — zero minimum, full service, roasted in Montreal. We're growing fast, and we're looking for exceptional people to grow with us.",
    heroCta: "See open roles",
    heroTagline: "Montreal · Toronto · Vancouver",

    whyLabel: "02_ Why EZPZ",
    whyHeadline: "A startup with real momentum.",
    whyBody: "We're not a big, slow company. We're a fast-moving Montreal startup that's already working with brands like Fairmont, Café Public, and dozens of restaurants, hotels, and entrepreneurs across Canada. You'll have real ownership, real impact, and a front-row seat as we build the go-to custom coffee platform in North America.",
    benefits: [
      {
        icon: "🏋️",
        title: "Real Ownership",
        body: "Small team, big responsibility. Your work matters and you'll see its impact immediately.",
      },
      {
        icon: "🚀",
        title: "Grow With Us",
        body: "We're scaling fast. Get in early and grow your role as the company grows.",
      },
      {
        icon: "☕",
        title: "Great Coffee, Obviously",
        body: "Roasted at Canadian Roasting Society in Montreal. Yes, the coffee perks are excellent.",
      },
    ],

    rolesLabel: "03_ Open Roles",
    rolesHeadline: "We're hiring.",
    whatYoullDo: "What you'll do",

    applyLabel: "04_ How to Apply",
    applyHeadline: "Think you're a fit?",
    applyBody: "We keep it simple, just like our coffee. Send us an email at help@ezpz.coffee with the role you're applying for in the subject line, a quick note about why you'd be great, and your resume or portfolio. No long forms, no endless steps. If you're a fit, we'll be in touch fast.",
    applyBtn: "Email us at help@ezpz.coffee",
    applyNote: "Don't see your exact role but think you'd be a great addition? Reach out anyway. Great people are always worth talking to.",

    finalHeadline: "Let's build the future of branded coffee together.",
    finalSubtext: "Montreal · Toronto · Vancouver. Join a team that's moving fast and having fun doing it.",
    finalBtn: "Apply now",

    roles: [
      {
        title: "Social Media Specialist",
        location: "Montreal (Hybrid)",
        type: "Full-time",
        desc: "You live on Instagram, TikTok, and LinkedIn. You know what makes people stop scrolling. You'll own EZPZ's social presence, creating scroll-stopping content, growing our audience, and building the kind of bold, funny, premium brand voice that makes our competitors jealous. You'll work closely with our creative team to turn great coffee into great content. Bonus points if you can shoot and edit your own video.",
        bullets: [
          "Create and publish daily content across platforms",
          "Grow and engage our audience",
          "Collaborate on campaigns and product launches",
          "Track what works and double down on it",
        ],
        subject: "Application — Social Media Specialist",
      },
      {
        title: "Head of Coffee",
        location: "Montreal (On-site)",
        type: "Full-time",
        desc: "You know coffee, deeply. You'll be the person who owns the quality, sourcing, and craft behind every EZPZ product. From selecting traceable specialty green coffee to dialing in roast profiles at Canadian Roasting Society, to helping clients develop their signature blends, you'll make sure everything in the bag is as good as the brand on it. This is a role for someone who tastes the difference between an 82 and an 86 and cares about it.",
        bullets: [
          "Own coffee sourcing and quality control",
          "Develop and refine roast profiles",
          "Help clients create custom signature blends",
          "Work hands-on at our Montreal roasting facility",
          "Keep every batch consistent and exceptional",
        ],
        subject: "Application — Head of Coffee",
      },
      {
        title: "Salesperson — Montreal",
        location: "Montreal",
        type: "Full-time",
        desc: "You love the hustle of building relationships and closing deals. You'll be our person on the ground in Montreal, connecting with restaurants, hotels, boutiques, gyms, and brands who want their own coffee. You'll show them how easy EZPZ makes it, and turn conversations into long-term accounts. If you're energetic, personable, and motivated by results, this is for you.",
        bullets: [
          "Prospect and build relationships with Montreal businesses",
          "Present EZPZ's products and close deals",
          "Manage and grow your accounts",
          "Hit and exceed sales targets",
        ],
        subject: "Application — Salesperson Montreal",
      },
      {
        title: "Salesperson — Toronto",
        location: "Toronto / GTA",
        type: "Full-time",
        desc: "Toronto is one of our biggest growth markets, and we want someone who knows it inside out. You'll build EZPZ's presence across the GTA, connecting with restaurants, hotels, retailers, offices, and brands ready to launch their own coffee. You'll be the face of EZPZ in Toronto, backed by a Montreal team that handles the rest.",
        bullets: [
          "Develop the Toronto and GTA market",
          "Prospect and close new accounts",
          "Build lasting client relationships",
          "Hit and exceed sales targets",
        ],
        subject: "Application — Salesperson Toronto",
      },
      {
        title: "Salesperson — Vancouver",
        location: "Vancouver",
        type: "Full-time",
        desc: "We're expanding west, and Vancouver is a key part of the plan. You'll open and grow the Vancouver market, introducing EZPZ to the city's vibrant food, hospitality, and wellness scenes. If you're well-connected, driven, and excited to build something from the ground up in your city, we want to talk.",
        bullets: [
          "Launch and grow EZPZ in the Vancouver market",
          "Prospect and close new accounts",
          "Build relationships across food, hospitality, and wellness",
          "Hit and exceed sales targets",
        ],
        subject: "Application — Salesperson Vancouver",
      },
    ],
  },

  fr: {
    heroLabel: "01_ Carrières",
    heroHeadline: "Bâtissez quelque chose d'audacieux avec nous.",
    heroSub: "EZPZ transforme la façon dont les marques obtiennent leur propre café au Canada — zéro minimum, service complet, torréfié à Montréal. Nous grandissons rapidement et cherchons des personnes exceptionnelles pour grandir avec nous.",
    heroCta: "Voir les postes ouverts",
    heroTagline: "Montréal · Toronto · Vancouver",

    whyLabel: "02_ Pourquoi EZPZ",
    whyHeadline: "Une startup avec un véritable élan.",
    whyBody: "Nous ne sommes pas une grande entreprise lente. Nous sommes une startup montréalaise qui travaille déjà avec des marques comme Fairmont, Café Public, et des dizaines de restaurants, hôtels et entrepreneurs à travers le Canada. Vous aurez une vraie propriété, un vrai impact et une place de choix pour bâtir la plateforme de café personnalisé incontournable en Amérique du Nord.",
    benefits: [
      {
        icon: "🏋️",
        title: "Vraie propriété",
        body: "Petite équipe, grande responsabilité. Votre travail compte et vous en verrez l'impact immédiatement.",
      },
      {
        icon: "🚀",
        title: "Grandissez avec nous",
        body: "Nous évoluons rapidement. Rejoignez-nous tôt et faites grandir votre rôle avec l'entreprise.",
      },
      {
        icon: "☕",
        title: "Excellent café, évidemment",
        body: "Torréfié à la Canadian Roasting Society à Montréal. Oui, les avantages café sont excellents.",
      },
    ],

    rolesLabel: "03_ Postes ouverts",
    rolesHeadline: "Nous embauchons.",
    whatYoullDo: "Ce que vous ferez",

    applyLabel: "04_ Comment postuler",
    applyHeadline: "Vous pensez être le bon candidat ?",
    applyBody: "Nous faisons simple, tout comme notre café. Envoyez-nous un courriel à help@ezpz.coffee avec le poste visé en objet, une courte note sur pourquoi vous seriez parfait, et votre CV ou portfolio. Pas de longs formulaires, pas d'étapes interminables. Si vous êtes le bon candidat, nous vous répondrons rapidement.",
    applyBtn: "Écrivez-nous à help@ezpz.coffee",
    applyNote: "Vous ne voyez pas exactement votre rôle mais pensez être une belle addition ? Écrivez-nous quand même. Les bonnes personnes valent toujours la peine d'être rencontrées.",

    finalHeadline: "Construisons ensemble le futur du café de marque.",
    finalSubtext: "Montréal · Toronto · Vancouver. Rejoignez une équipe qui avance vite et qui prend plaisir à le faire.",
    finalBtn: "Postuler maintenant",

    roles: [
      {
        title: "Spécialiste médias sociaux",
        location: "Montréal (Hybride)",
        type: "Temps plein",
        desc: "Vous vivez sur Instagram, TikTok et LinkedIn. Vous savez ce qui fait arrêter les gens de scroller. Vous gérerez la présence sociale d'EZPZ, en créant du contenu accrocheur, en développant notre audience et en construisant une voix de marque audacieuse, amusante et premium. Bonus si vous pouvez tourner et monter vos propres vidéos.",
        bullets: [
          "Créer et publier du contenu quotidien sur toutes les plateformes",
          "Développer et engager notre communauté",
          "Collaborer sur des campagnes et des lancements de produits",
          "Analyser les performances et miser sur ce qui fonctionne",
        ],
        subject: "Candidature — Spécialiste médias sociaux",
      },
      {
        title: "Directeur café",
        location: "Montréal (Présentiel)",
        type: "Temps plein",
        desc: "Vous connaissez le café, en profondeur. Vous serez la personne responsable de la qualité, de l'approvisionnement et du savoir-faire derrière chaque produit EZPZ. De la sélection de cafés verts de spécialité traçables à la mise au point des profils de torréfaction à la Canadian Roasting Society, en passant par l'aide aux clients pour développer leurs mélanges signature, vous vous assurerez que tout dans le sac est aussi bon que la marque dessus.",
        bullets: [
          "Gérer l'approvisionnement en café et le contrôle qualité",
          "Développer et affiner les profils de torréfaction",
          "Aider les clients à créer leurs mélanges signature",
          "Travailler en présentiel à notre installation de torréfaction à Montréal",
          "Assurer la cohérence et l'excellence de chaque lot",
        ],
        subject: "Candidature — Directeur café",
      },
      {
        title: "Représentant commercial — Montréal",
        location: "Montréal",
        type: "Temps plein",
        desc: "Vous aimez le défi de bâtir des relations et de conclure des ententes. Vous serez notre personne sur le terrain à Montréal, en contact avec des restaurants, hôtels, boutiques, gyms et marques qui veulent leur propre café. Vous leur montrerez à quel point EZPZ le rend facile, et transformerez les conversations en comptes à long terme.",
        bullets: [
          "Prospecter et bâtir des relations avec les entreprises montréalaises",
          "Présenter les produits EZPZ et conclure des ententes",
          "Gérer et développer vos comptes",
          "Atteindre et dépasser les objectifs de vente",
        ],
        subject: "Candidature — Représentant commercial Montréal",
      },
      {
        title: "Représentant commercial — Toronto",
        location: "Toronto / GTA",
        type: "Temps plein",
        desc: "Toronto est l'un de nos plus grands marchés de croissance, et nous voulons quelqu'un qui le connaît sur le bout des doigts. Vous bâtirez la présence d'EZPZ dans le Grand Toronto, en contact avec des restaurants, hôtels, détaillants, bureaux et marques prêts à lancer leur propre café. Vous serez le visage d'EZPZ à Toronto, soutenu par une équipe montréalaise qui gère le reste.",
        bullets: [
          "Développer le marché de Toronto et du Grand Toronto",
          "Prospecter et ouvrir de nouveaux comptes",
          "Bâtir des relations durables avec les clients",
          "Atteindre et dépasser les objectifs de vente",
        ],
        subject: "Candidature — Représentant commercial Toronto",
      },
      {
        title: "Représentant commercial — Vancouver",
        location: "Vancouver",
        type: "Temps plein",
        desc: "Nous nous développons vers l'ouest et Vancouver est un élément clé du plan. Vous ouvrirez et développerez le marché de Vancouver, en présentant EZPZ à la scène alimentaire, hôtelière et de bien-être vibrante de la ville. Si vous êtes bien connecté, déterminé et enthousiaste à l'idée de construire quelque chose à partir de zéro dans votre ville, nous voulons vous parler.",
        bullets: [
          "Lancer et développer EZPZ sur le marché de Vancouver",
          "Prospecter et ouvrir de nouveaux comptes",
          "Bâtir des relations dans les secteurs alimentaire, hôtelier et de bien-être",
          "Atteindre et dépasser les objectifs de vente",
        ],
        subject: "Candidature — Représentant commercial Vancouver",
      },
    ],
  },
} as const;

// ─── Component ─────────────────────────────────────────────────────────────

interface CareersPageProps {
  locale: Locale;
}

export default function CareersPage({ locale }: CareersPageProps) {
  const c = CONTENT[locale];
  const [openRole, setOpenRole] = useState<number | null>(null);

  const APPLY_HREF = `mailto:help@ezpz.coffee?subject=${encodeURIComponent("Application — EZPZ Careers")}`;

  const handleScrollToRoles = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("open-roles")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.page}>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className={styles.heroGridOverlay} aria-hidden />
        <div className={styles.heroRadialGlow} aria-hidden />
        <div className={styles.heroContent}>
          <span className={styles.heroLabel}>{c.heroLabel}</span>
          <h1 className={styles.heroTitle}>{c.heroHeadline}</h1>
          <p className={styles.heroSubtitle}>{c.heroSub}</p>
          <div className={styles.heroBtnGroup}>
            <a
              href="#open-roles"
              className={styles.heroBtnPrimary}
              onClick={handleScrollToRoles}
            >
              {c.heroCta} ↓
            </a>
            <span className={styles.heroTagline}>{c.heroTagline}</span>
          </div>
          <div className={styles.heroAccentLine} aria-hidden />
        </div>
      </section>

      {/* ── Why EZPZ ──────────────────────────────────────────── */}
      <section className={styles.sectionGray} aria-labelledby="why-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{c.whyLabel}</span>
          <h2 id="why-heading" className={styles.headlineLight}>{c.whyHeadline}</h2>
          <p className={styles.bodyText}>{c.whyBody}</p>
          <div className={styles.benefitsGrid}>
            {c.benefits.map((b) => (
              <div key={b.title} className={styles.benefitCard}>
                <span className={styles.benefitIcon} aria-hidden="true">{b.icon}</span>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitBody}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Roles ────────────────────────────────────────── */}
      <section
        id="open-roles"
        className={styles.sectionDark}
        aria-labelledby="roles-heading"
      >
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{c.rolesLabel}</span>
          <h2 id="roles-heading" className={styles.headlineDark}>{c.rolesHeadline}</h2>
          <div className={styles.rolesStack}>
            {c.roles.map((role, i) => (
              <div key={role.title} className={styles.roleCard}>
                <button
                  type="button"
                  className={styles.roleCardBtn}
                  aria-expanded={openRole === i}
                  onClick={() => setOpenRole(openRole === i ? null : i)}
                >
                  <div className={styles.roleCardMeta}>
                    <span className={styles.roleTitle}>{role.title}</span>
                    <div className={styles.rolePills}>
                      <span className={styles.rolePill}>{role.location}</span>
                      <span className={styles.rolePillType}>{role.type}</span>
                    </div>
                  </div>
                  <span className={styles.roleChevron} aria-hidden="true">
                    {openRole === i ? "−" : "+"}
                  </span>
                </button>
                {openRole === i && (
                  <div className={styles.roleBody}>
                    <p className={styles.roleDesc}>{role.desc}</p>
                    <div>
                      <p className={styles.roleBulletLabel}>{c.whatYoullDo}</p>
                      <ul className={styles.roleBullets}>
                        {role.bullets.map((b) => (
                          <li key={b} className={styles.roleBullet}>{b}</li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href={`mailto:help@ezpz.coffee?subject=${encodeURIComponent(role.subject)}`}
                      className={styles.roleApply}
                    >
                      Apply for this role →
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Apply ──────────────────────────────────────── */}
      <section className={styles.sectionLight} aria-labelledby="apply-heading">
        <div className={styles.sectionInnerNarrow}>
          <span className={styles.eyebrowLight}>{c.applyLabel}</span>
          <h2 id="apply-heading" className={styles.headlineLight}>{c.applyHeadline}</h2>
          <p className={styles.bodyText}>{c.applyBody}</p>
          <a href={APPLY_HREF} className={styles.applyEmailBtn}>
            {c.applyBtn}
          </a>
          <p className={styles.applyNote}>{c.applyNote}</p>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className={styles.finalCta} aria-labelledby="final-cta-heading">
        <div className={styles.finalCtaInner}>
          <h2 id="final-cta-heading" className={styles.finalCtaTitle}>
            {c.finalHeadline}
          </h2>
          <p className={styles.finalCtaSubtext}>{c.finalSubtext}</p>
          <a href={APPLY_HREF} className={styles.finalCtaBtn}>
            {c.finalBtn} →
          </a>
        </div>
      </section>
    </div>
  );
}
