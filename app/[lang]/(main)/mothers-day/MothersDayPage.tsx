"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import styles from "./mothersDayLanding.module.scss";

/* ── Countdown timer ───────────────────────────────────────── */

const getTargetDate = (): Date => {
  const now = new Date();
  const year = now.getFullYear();
  const target = new Date(year, 4, 3, 23, 59, 59); // May 3rd 23:59:59
  return target <= now ? new Date(year + 1, 4, 3, 23, 59, 59) : target;
};

const pad = (n: number) => String(n).padStart(2, "0");

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = getTargetDate();
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.countdown}>
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Minutes" },
        { value: timeLeft.seconds, label: "Seconds" },
      ].map(({ value, label }) => (
        <div key={label} className={styles.countdownUnit}>
          <span className={styles.countdownValue}>{pad(value)}</span>
          <span className={styles.countdownLabel}>{label}</span>
        </div>
      ))}
    </div>
  );
};

/* ── FAQ accordion ──────────────────────────────────────────── */

const FAQ_ITEMS = [
  {
    q: "How long does delivery take?",
    a: "Orders are processed within 2–3 business days and ship across Canada. Standard delivery takes 3–5 business days depending on your location. Order before May 3rd to guarantee delivery before Mother's Day.",
  },
  {
    q: "Can I ship directly to my mom?",
    a: "Absolutely! At checkout, simply enter her address as the shipping address. We'll deliver straight to her door, no assembly required.",
  },
  {
    q: "Can I add a personal message?",
    a: "Yes! You can add a custom message directly on the bag during the design process. You can also include a printed card with your order, just mention it when you place your order.",
  },
  {
    q: "What if I don't know what coffee she likes?",
    a: "No problem. Our Colombia Huila medium roast is our most crowd-pleasing option: smooth, balanced, and universally loved. You really can't go wrong.",
  },
  {
    q: "Is there a minimum order?",
    a: "No minimum. You can order a single custom bag for mom and that's perfectly fine with us.",
  },
];

const FaqAccordion = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className={styles.faqList}>
      {FAQ_ITEMS.map((item, i) => (
        <div key={i} className={styles.faqItem}>
          <button
            type="button"
            className={styles.faqQuestion}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            {item.q}
            <span className={styles.faqChevron} data-open={open === i ? "true" : "false"}>▼</span>
          </button>
          <div className={styles.faqAnswer} data-open={open === i ? "true" : "false"}>
            <div className={styles.faqAnswerInner}>
              <p className={styles.faqAnswerText}>{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

/* ── Page ───────────────────────────────────────────────────── */

const WHY_CARDS = [
  {
    emoji: "☕",
    title: "She'll use it every day",
    body: "Unlike flowers that fade or chocolates that disappear, a bag of coffee is something she'll enjoy every single morning for weeks.",
  },
  {
    emoji: "💛",
    title: "It's completely personal",
    body: "Her name on the bag. A message from you. The coffee origin she loves. Every detail is chosen by you, for her.",
  },
  {
    emoji: "🌍",
    title: "Specialty coffee she'll love",
    body: "We source only the finest specialty-grade coffees from around the world: light, medium, or dark roast, whatever she prefers.",
  },
  {
    emoji: "🎁",
    title: "No one else will give her this",
    body: "Custom coffee bags are still a rare and unexpected gift. She will absolutely brag about it to her friends.",
  },
];

const HOW_STEPS = [
  {
    n: "1",
    title: "Design her bag",
    body: "Use our online tool to add her name, a personal message, and choose the colors and style. No design skills needed. It takes less than 10 minutes.",
  },
  {
    n: "2",
    title: "Choose her coffee",
    body: "Pick from our selection of traceable specialty coffees. Not sure which one? We'll help you choose based on how she likes her coffee.",
  },
  {
    n: "3",
    title: "We roast, pack, and deliver",
    body: "We roast fresh in Montreal and ship directly to your door, or straight to mom's if you want to surprise her.",
  },
];

const PERSONAL_IDEAS = [
  {
    strong: "Add her name to the front of the bag:",
    rest: " \"Mom\", \"Maman\", her first name, or even a nickname only you use.",
  },
  {
    strong: "Write a custom message:",
    rest: " \"To the world's best coffee drinker\" or \"You deserve the good stuff, Mom\".",
  },
  {
    strong: "Choose her favorite roast:",
    rest: " Light and fruity? Rich and chocolatey? We have options for every palate.",
  },
  {
    strong: "Pick her origin:",
    rest: " Ethiopian for floral and bright, Colombian for smooth and balanced, Brazilian for bold and nutty.",
  },
  {
    strong: "Add a QR code",
    rest: " linking to a personal video message from you.",
  },
];

const COFFEES = [
  {
    name: "The Morning Ritual",
    origin: "Ethiopia Yirgacheffe",
    roast: "Light roast",
    tasting: "Blueberry, jasmine, lemon",
    desc: "For the mom who loves a bright, aromatic start to her day.",
    tag: "Most popular for gifts",
  },
  {
    name: "The Classic",
    origin: "Colombia Huila",
    roast: "Medium roast",
    tasting: "Caramel, red apple, hazelnut",
    desc: "For the mom who likes her coffee smooth, balanced, and always reliable.",
    tag: null,
  },
  {
    name: "The Bold One",
    origin: "Brazil Cerrado",
    roast: "Dark roast",
    tasting: "Chocolate, vanilla, brown sugar",
    desc: "For the mom who takes her coffee strong and means business.",
    tag: null,
  },
];

const TESTIMONIALS = [
  {
    quote: "I ordered a custom bag with my mom's name and a message for her birthday. She cried. Best gift I've ever given.",
    author: "Émilie R., Montreal",
  },
  {
    quote: "My mom is obsessed with coffee so I thought this was perfect. She called me immediately when it arrived. 10/10 would recommend.",
    author: "Thomas L., Toronto",
  },
  {
    quote: "Super easy to design, arrived beautifully packaged, and the coffee was genuinely delicious. Already ordering again for the holidays.",
    author: "Sarah M., Vancouver",
  },
];

const MothersDayPage = () => {
  const howRef = useRef<HTMLElement>(null);

  const scrollToHow = () => {
    howRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={styles.page}>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            The most thoughtful gift you can give mom this year.
          </h1>
          <p className={styles.heroSubtitle}>
            A custom coffee bag designed by you, filled with specialty coffee she&apos;ll love,
            and delivered right to her door. Personal. Unique. Unforgettable.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/en/design" className={styles.heroPrimary}>Design her bag</Link>
            <button type="button" className={styles.heroSecondary} onClick={scrollToHow}>
              See how it works
            </button>
          </div>
          <p className={styles.heroUrgency}>🚚 Order by May 3rd to receive before Mother&apos;s Day.</p>
        </div>
      </section>

      {/* ── Why ─────────────────────────────────────────────── */}
      <section className={styles.why}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionHeading}>Why a custom coffee bag is the perfect Mother&apos;s Day gift</h2>
          <div className={styles.whyGrid}>
            {WHY_CARDS.map((card) => (
              <div key={card.title} className={styles.whyCard}>
                <span className={styles.whyEmoji}>{card.emoji}</span>
                <h3 className={styles.whyCardTitle}>{card.title}</h3>
                <p className={styles.whyCardBody}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ────────────────────────────────────── */}
      <section className={styles.how} ref={howRef} id="how-it-works">
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionHeading}>Ready in 3 simple steps</h2>
          <div className={styles.howGrid}>
            {HOW_STEPS.map((step) => (
              <div key={step.n} className={styles.howStep}>
                <span className={styles.howNumber}>{step.n}</span>
                <h3 className={styles.howTitle}>{step.title}</h3>
                <p className={styles.howBody}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Personalization ─────────────────────────────────── */}
      <section className={styles.personal}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionHeading}>Make it extra special ✨</h2>
          <p className={styles.personalSubheading}>Here are some ideas to make her bag one of a kind:</p>
          <ul className={styles.personalList}>
            {PERSONAL_IDEAS.map((idea, i) => (
              <li key={i} className={styles.personalItem}>
                <span className={styles.personalDot} aria-hidden />
                <p className={styles.personalItemText}>
                  <strong>{idea.strong}</strong>{idea.rest}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Coffee options ───────────────────────────────────── */}
      <section className={styles.coffees}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionHeading}>Which coffee suits her?</h2>
          <div className={styles.coffeeGrid}>
            {COFFEES.map((coffee) => (
              <div key={coffee.name} className={styles.coffeeCard}>
                {coffee.tag && <span className={styles.coffeeTag}>{coffee.tag}</span>}
                <h3 className={styles.coffeeName}>{coffee.name}</h3>
                <p className={styles.coffeeOrigin}>{coffee.origin}</p>
                <p className={styles.coffeeRoast}>{coffee.roast}</p>
                <p className={styles.coffeeTasting}>Notes: {coffee.tasting}</p>
                <p className={styles.coffeeDesc}>{coffee.desc}</p>
              </div>
            ))}
          </div>
          <div className={styles.coffeeCta}>
            <Link href="/en/design" className={styles.ctaButtonPrimary}>Design her bag</Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────── */}
      <section className={styles.testimonials}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionHeading}>What people are saying 💬</h2>
          <div className={styles.testimonialGrid}>
            {TESTIMONIALS.map((t) => (
              <div key={t.author} className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>★★★★★</div>
                <p className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
                <p className={styles.testimonialAuthor}>{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Urgency ─────────────────────────────────────────── */}
      <section className={styles.urgency}>
        <div className={styles.urgencyInner}>
          <h2 className={styles.urgencyTitle}>Don&apos;t wait until it&apos;s too late 🌸</h2>
          <p className={styles.urgencyText}>
            Mother&apos;s Day is May 10th. Orders placed before May 3rd are guaranteed to arrive
            in time. After that, we can&apos;t promise delivery before the big day.
          </p>
          <CountdownTimer />
          <Link href="/en/design" className={styles.ctaButtonPrimary}>Order now</Link>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className={styles.faq}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionHeading}>Quick answers</h2>
          <FaqAccordion />
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────── */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaInner}>
          <h2 className={styles.finalCtaTitle}>Give her something she&apos;ll talk about all year.</h2>
          <p className={styles.finalCtaSubtitle}>Custom. Personal. Delicious. Ready in time for Mother&apos;s Day.</p>
          <Link href="/en/design" className={styles.finalCtaButton}>Design mom&apos;s bag now</Link>
          <p className={styles.finalCtaNote}>Free design included. No minimum order. Ships across Canada.</p>
        </div>
      </section>

    </div>
  );
};

export default MothersDayPage;
