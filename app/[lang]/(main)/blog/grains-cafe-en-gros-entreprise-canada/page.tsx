import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "../custom-coffee-bags-corporate-gifts-canada/blogPost.module.scss";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Grains de café en gros au Canada : guide pour restaurants, cafés et bureaux | EZPZ Coffee",
    description:
      "Vous achetez des grains de café en gros pour votre restaurant, café, hôtel ou bureau ? Voici comment fonctionne l'approvisionnement en café en vrac au Canada, ce qu'il faut chercher chez un fournisseur et comment servir un excellent café sans tracas.",
    alternates: {
      canonical: `/${lang}/blog/grains-cafe-en-gros-entreprise-canada`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/blog/wholesale-coffee-beans-for-your-business-canada",
        "fr-CA": "https://www.ezpz.coffee/fr/blog/grains-cafe-en-gros-entreprise-canada",
        "x-default": "https://www.ezpz.coffee/en/blog/wholesale-coffee-beans-for-your-business-canada",
      },
    },
    openGraph: {
      title: "Grains de café en gros au Canada : guide pour restaurants, cafés et bureaux | EZPZ Coffee",
      description:
        "Vous achetez des grains de café en gros pour votre restaurant, café, hôtel ou bureau ? Voici comment fonctionne l'approvisionnement en café en vrac au Canada, ce qu'il faut chercher chez un fournisseur et comment servir un excellent café sans tracas.",
      type: "article",
      url: `https://www.ezpz.coffee/${lang}/blog/grains-cafe-en-gros-entreprise-canada`,
      images: [
        {
          url: "/assets/blog/wholesale-coffee-beans-canada.svg",
          width: 800,
          height: 420,
          alt: "Grains de café en gros pour votre entreprise : le guide canadien",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Grains de café en gros au Canada : guide pour entreprises | EZPZ Coffee",
      description:
        "Comment fonctionne l'approvisionnement en café en vrac au Canada, ce qu'il faut chercher et comment servir un excellent café à votre restaurant, café, hôtel ou bureau.",
      images: ["/assets/blog/wholesale-coffee-beans-canada.svg"],
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Grains de café en gros pour votre entreprise : le guide canadien",
      description:
        "Vous achetez des grains de café en gros pour votre restaurant, café, hôtel ou bureau ? Voici comment fonctionne l'approvisionnement en café en vrac au Canada et comment servir un excellent café.",
      datePublished: "2026-06-24",
      author: { "@type": "Organization", name: "EZPZ Coffee Team" },
      publisher: {
        "@type": "Organization",
        name: "EZPZ Coffee",
        url: "https://www.ezpz.coffee",
      },
      image: "https://www.ezpz.coffee/assets/blog/wholesale-coffee-beans-canada.svg",
      url: "https://www.ezpz.coffee/fr/blog/grains-cafe-en-gros-entreprise-canada",
      wordCount: 1200,
      inLanguage: "fr-CA",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Qu'est-ce que le café en gros ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le café en gros est du café acheté en grande quantité pour être préparé et servi à des clients, des visiteurs ou du personnel, et non emballé sous votre propre marque pour la revente. C'est ce qu'utilisent les restaurants, les cafés, les hôtels et les bureaux pour servir du café.",
          },
        },
        {
          "@type": "Question",
          name: "Où acheter des grains de café en gros au Canada ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EZPZ approvisionne des grains de café de spécialité en gros partout au Canada, torréfiés frais à Montréal, disponibles en grains entiers ou moulus, avec livraison récurrente pour les restaurants, cafés, hôtels et bureaux.",
          },
        },
        {
          "@type": "Question",
          name: "Combien coûte le café en gros ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Le tarif du café en gros dépend du café choisi et de votre volume, et il s'améliore à mesure que vos commandes augmentent. Le café de spécialité offre une meilleure valeur que les grains génériques grâce à une expérience client améliorée et à la fidélisation.",
          },
        },
        {
          "@type": "Question",
          name: "Puis-je recevoir du café en gros de façon régulière ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Oui. Un bon fournisseur met en place une livraison récurrente selon un calendrier adapté à votre consommation, afin que votre entreprise ne manque jamais de café et que les grains arrivent toujours fraîchement torréfiés.",
          },
        },
      ],
    },
  ],
};

const MORE_SLUGS = [
  "how-to-start-a-coffee-brand-canada",
  "private-label-coffee-canada-complete-guide",
  "what-makes-specialty-coffee-traceable",
];
const morePosts = BLOG_POSTS.filter((p) => MORE_SLUGS.includes(p.slug));

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroCategory}>En gros</span>
          <h1 className={styles.heroTitle}>
            Grains de café en gros pour votre entreprise : le guide canadien
          </h1>
          <p className={styles.heroSubtitle}>
            Que vous gériez un restaurant, un café, un hôtel ou un bureau, le café que vous servez
            dit quelque chose sur vous. Voici comment s&apos;approvisionner en grains de qualité en
            gros au Canada et servir une tasse dont vos clients se souviendront.
          </p>
          <div className={styles.heroMeta}>
            <span>24 juin 2026</span>
            <span className={styles.heroMetaDot} />
            <span>6 min de lecture</span>
          </div>
        </div>
      </section>

      {/* ── Article ───────────────────────────────────────────────── */}
      <div className={styles.articleWrapper}>
        <article className={styles.article}>

          <p className={styles.intro}>
            Le café que vous servez est rarement la première chose qu&apos;un client remarque, mais
            c&apos;est souvent la dernière dont il se souvient. Une bonne tasse finale après un repas,
            un americano coulant dans un lobby d&apos;hôtel, un café vraiment bon au bureau : ces
            petits moments façonnent la perception que les gens ont de votre entreprise. Et tout
            commence par les grains.
          </p>

          <p className={styles.p}>
            Si vous servez du café à des clients, des visiteurs ou du personnel, vous avez besoin
            d&apos;un fournisseur de café en gros fiable : quelqu&apos;un qui livre des grains de
            qualité, de manière constante, selon un calendrier qui vous garde toujours approvisionné.
            Ce guide explique comment fonctionne le café en gros au Canada, ce qu&apos;il faut
            chercher chez un fournisseur et comment bien faire les choses.
          </p>

          <p className={styles.p}>
            (Et oui, c&apos;est aussi une petite introduction : nous avons récemment lancé notre
            propre{" "}
            <Link href={`/${lang}/cafe-en-gros`} className={styles.inlineLink}>
              programme de grains de café en gros
            </Link>
            , nous en parlons plus loin.)
          </p>

          {/* ── Ce que veut dire le café en gros ── */}
          <h2 className={styles.h2}>Ce que veut dire le « café en gros »</h2>
          <p className={styles.p}>
            Le café en gros est simplement du café acheté en grande quantité pour être servi, et non
            revendu dans des emballages sous votre marque. C&apos;est le café qu&apos;un{" "}
            <Link href={`/${lang}/custom-coffee-bags-restaurants`} className={styles.inlineLink}>
              restaurant
            </Link>{" "}
            prépare pour ses tables, qu&apos;un café tire pour ses expressos, qu&apos;un{" "}
            <Link href={`/${lang}/custom-coffee-bags-hotels`} className={styles.inlineLink}>
              hôtel
            </Link>{" "}
            offre à ses clients ou qu&apos;un bureau garde dans sa salle de pause.
          </p>
          <p className={styles.p}>
            C&apos;est différent de la{" "}
            <Link href={`/${lang}/private-label-coffee-canada`} className={styles.inlineLink}>
              marque privée
            </Link>{" "}
            (café emballé sous votre propre marque pour la revente). Le café en gros, c&apos;est
            d&apos;abord et avant tout le café lui-même : qualité, constance et approvisionnement
            régulier. Vous achetez des grains pour préparer et servir, simplement.
          </p>

          {/* ── Pourquoi la qualité compte ── */}
          <h2 className={styles.h2}>Pourquoi la qualité de votre café en gros compte plus que vous ne le pensez</h2>
          <p className={styles.p}>
            Il est facile de traiter le café comme une dépense secondaire, un simple poste de coût.
            Mais voilà la réalité : le café est l&apos;un des moyens les moins chers de dépasser les
            attentes d&apos;un client.
          </p>
          <p className={styles.p}>
            Imaginez la scène. Un client termine un bon repas et le café est plat et amer.
            C&apos;est sur cette note qu&apos;il repart. Maintenant, inversez la situation : le café
            est vraiment excellent, coulant, aromatique, mémorable. Soudainement, toute
            l&apos;expérience s&apos;élève. Pour quelques sous de plus par tasse, vous venez de
            transformer une fin décevante en une raison de revenir.
          </p>
          <p className={styles.p}>
            Un excellent café signale aussi l&apos;attention aux détails. Une entreprise qui sert du{" "}
            <Link href={`/${lang}/coffee`} className={styles.inlineLink}>
              café de spécialité
            </Link>{" "}
            montre à ses clients qu&apos;elle fait attention aux détails. Cette impression vaut
            largement la différence de prix entre les grains génériques et les grains de spécialité.
          </p>

          {/* ── Ce qu'il faut chercher ── */}
          <h2 className={styles.h2}>Ce qu&apos;il faut chercher chez un fournisseur de café en gros</h2>
          <p className={styles.p}>
            Tous les cafés en gros ne se valent pas. Voici ce qui compte vraiment au moment de
            choisir un fournisseur :
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <strong>Café de spécialité, pas générique.</strong> Il y a une vraie différence. Le
              café de spécialité (noté 80 et plus à l&apos;échelle SCA) est traçable, soigneusement
              sourcé et torréfié avec intention. Le café générique est bon marché pour une raison. Si
              la qualité compte pour votre entreprise, insistez sur le café de spécialité.
            </li>
            <li className={styles.li}>
              <strong>La fraîcheur.</strong> Le café est à son meilleur dans les semaines suivant la
              torréfaction, pas les mois. Un fournisseur qui torréfie à la commande et livre frais
              l&apos;emportera toujours sur celui qui expédie des grains entassés dans un entrepôt.
              Demandez quand le café est torréfié par rapport à la date de livraison.
            </li>
            <li className={styles.li}>
              <strong>La constance.</strong> C&apos;est ce que les entreprises sous-estiment le plus.
              Vos clients devraient obtenir la même excellente tasse à chaque fois. Un bon partenaire
              en gros fixe votre café et le reproduit lot après lot, sans mauvaises surprises dans la
              tasse.
            </li>
            <li className={styles.li}>
              <strong>Livraison fiable et récurrente.</strong> Manquer de café n&apos;est pas une
              option pour une entreprise qui en sert. Les meilleurs fournisseurs mettent en place un
              calendrier de livraison récurrente adapté à votre consommation, pour que vous soyez
              toujours bien approvisionné sans avoir à y penser.
            </li>
            <li className={styles.li}>
              <strong>Flexibilité.</strong> Vos besoins vont évoluer. Un bon fournisseur grandit avec
              vous, que vous ayez besoin de quelques kilos par semaine ou d&apos;un approvisionnement
              régulier à grand volume, et offre des grains entiers ou moulus selon votre
              fonctionnement.
            </li>
          </ul>

          {/* ── Grains entiers ou moulus ── */}
          <h2 className={styles.h2}>Grains entiers ou moulu ?</h2>
          <p className={styles.p}>
            Une note pratique rapide. Les grains entiers sont idéaux si vous avez un moulin (le café
            fraîchement moulu est meilleur au goût). Le café moulu convient si vous n&apos;en avez
            pas, ou si vous voulez de la constance et de la rapidité : assurez-vous simplement que la
            mouture est adaptée à votre méthode de préparation. Un bon fournisseur en gros moudera
            selon votre spécification ou livrera en grains entiers, selon ce qui convient à votre
            fonctionnement.
          </p>

          {/* ── Combien ça coûte ── */}
          <h2 className={styles.h2}>Combien coûte le café en gros ?</h2>
          <p className={styles.p}>
            Le tarif du café en gros dépend du café que vous choisissez et de votre volume, et il
            s&apos;améliore à mesure que vos commandes augmentent. Ce qui compte, c&apos;est la
            valeur, pas seulement le prix : un coût légèrement plus élevé par livre pour du{" "}
            <Link href={`/${lang}/coffee`} className={styles.inlineLink}>
              café de spécialité
            </Link>{" "}
            vraiment bon et constant se rentabilise par l&apos;expérience client et la fidélisation.
            Les grains les moins chers sont rarement la meilleure affaire.
          </p>
          <p className={styles.p}>
            La bonne approche : goûtez quelques options, choisissez le café qui correspond à votre
            entreprise et mettez en place un approvisionnement récurrent au volume qui vous convient.
          </p>

          {/* ── Découvrez EZPZ ── */}
          <h2 className={styles.h2}>Découvrez les grains de café en gros EZPZ</h2>
          <p className={styles.p}>
            C&apos;est exactement pourquoi nous avons lancé notre{" "}
            <Link href={`/${lang}/cafe-en-gros`} className={styles.inlineLink}>
              programme de café en gros
            </Link>
            .
          </p>
          <p className={styles.p}>
            Nous torréfions du café de spécialité frais à Montréal et l&apos;approvisionnons en vrac
            auprès des{" "}
            <Link href={`/${lang}/custom-coffee-bags-restaurants`} className={styles.inlineLink}>
              restaurants
            </Link>
            , des{" "}
            <Link href={`/${lang}/custom-coffee-bags-hotels`} className={styles.inlineLink}>
              hôtels
            </Link>
            , des cafés, des bureaux et des entreprises partout au Canada. Le même café que nous
            utilisons pour les{" "}
            <Link href={`/${lang}/white-label`} className={styles.inlineLink}>
              marques personnalisées avec lesquelles nous travaillons
            </Link>
            , maintenant disponible sous forme de grains en gros pour que vous le serviez directement.
          </p>
          <p className={styles.p}>Voici ce que vous obtenez :</p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href={`/${lang}/coffee`} className={styles.inlineLink}>Café de spécialité traçable</Link> (80+ SCA), origines uniques et mélanges sur mesure
            </li>
            <li className={styles.li}>Torréfié frais à Montréal, pas entreposé pendant des mois</li>
            <li className={styles.li}>Qualité constante, chaque lot correspond au précédent</li>
            <li className={styles.li}>Grains entiers ou moulus selon votre spécification</li>
            <li className={styles.li}>Livraison récurrente selon votre calendrier, pour ne jamais manquer</li>
            <li className={styles.li}>Tarif concurrentiel en gros grâce à notre volume de torréfaction</li>
            <li className={styles.li}>Échantillons disponibles pour goûter avant de vous engager</li>
          </ul>
          <p className={styles.p}>
            Que vous soyez un{" "}
            <Link href={`/${lang}/custom-coffee-bags-restaurants`} className={styles.inlineLink}>
              restaurant
            </Link>{" "}
            à la recherche d&apos;un café maison accrocheur, un café après un mélange de spécialité,
            un{" "}
            <Link href={`/${lang}/custom-coffee-bags-hotels`} className={styles.inlineLink}>
              hôtel
            </Link>{" "}
            qui sert ses clients ou un bureau qui en a assez du mauvais café de salle de pause, nous
            vous aiderons à trouver le bon café et à rester bien approvisionné.
          </p>

          {/* ── Servez un café dont on se souvient ── */}
          <h2 className={styles.h2}>Servez un café dont on se souvient</h2>
          <p className={styles.p}>
            Le café que vous servez est un petit coût avec un impact considérable. Faites-le bien et
            il travaille silencieusement en votre faveur chaque jour : de meilleures expériences
            clients, une impression plus forte et des clients qui reviennent.
          </p>
          <p className={styles.p}>
            Si vous êtes prêt à servir un café vraiment excellent, nous serions ravis de vous envoyer
            des échantillons.
          </p>

        </article>
      </div>

      {/* ── CTA Banner ────────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            Servez un café dont vos clients se souviendront.
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0, maxWidth: "480px", textAlign: "center" }}>
            Grains de spécialité en gros, torréfiés frais à Montréal, livrés selon votre calendrier.
          </p>
          <div className={styles.ctaButtons}>
            <Link href={`/${lang}/cafe-en-gros`} className={styles.ctaPrimary}>
              Explorer le café en gros
            </Link>
            <Link href={`/${lang}/contact?subject=Wholesale Sample Request`} className={styles.ctaSecondary}>
              Demander un échantillon gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* ── More from the blog ────────────────────────────────────── */}
      <section className={styles.more}>
        <div className={styles.moreInner}>
          <h2 className={styles.moreTitle}>Plus du blogue</h2>
          <div className={styles.moreGrid}>
            {morePosts.map((post) => (
              <Link key={post.slug} href={`/${lang}/blog/${post.slug}`} className={styles.moreCard}>
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
                      Lire la suite <ArrowRight size={12} weight="bold" />
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
}
