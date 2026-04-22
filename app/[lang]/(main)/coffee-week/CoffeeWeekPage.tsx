"use client";

import Link from "next/link";
import { useState } from "react";

import styles from "./coffeeWeek.module.scss";

const STEPS = [
  {
    n: "01",
    title: "Explore",
    body: "Find participating coffee shops near you using our interactive map.",
  },
  {
    n: "02",
    title: "Taste",
    body: "Every café offers a special creation just for the week — let yourself be surprised.",
  },
  {
    n: "03",
    title: "Vote",
    body: "Rate your experience and help the community discover the best cups in the city.",
  },
  {
    n: "04",
    title: "Win",
    body: "The best cafés win prizes. You can win too just by participating!",
  },
];

const CAFES = [
  { initials: "MR", name: "Café Myriade", hood: "Westmount", tag: "Espresso Bar", color: "#1a1a2e" },
  { initials: "DC", name: "Dispatch Coffee", hood: "Mile End", tag: "Specialty Coffee", color: "#1a2a1a" },
  { initials: "PK", name: "Pikolo Espresso", hood: "Plateau-Mont-Royal", tag: "Café & Bakery", color: "#2a1215" },
  { initials: "OL", name: "Café Olimpico", hood: "Little Italy", tag: "Third Wave", color: "#1a1f2a" },
  { initials: "CC", name: "Crew Collective", hood: "Old Montreal", tag: "Coffee Bar", color: "#1f2a1a" },
  { initials: "KT", name: "Kittel Café", hood: "Rosemont", tag: "Specialty Coffee", color: "#2a1a2a" },
];

const STAR_LABELS = ["", "Meh", "Okay", "Good", "Great", "Wow!"];

const CoffeeWeekPage = () => {
  const [starHover, setStarHover] = useState(0);
  const [starSelected, setStarSelected] = useState(0);
  const [nlEmail, setNlEmail] = useState("");
  const [nlSubmitted, setNlSubmitted] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleNlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nlEmail.trim()) setNlSubmitted(true);
  };

  const activeStars = starHover || starSelected;

  return (
    <div className={styles.page}>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.heroDate}>FEBRUARY 1–7, 2027</p>
          <h1 className={styles.heroTitle}>COFFEE<br />WEEK</h1>
          <p className={styles.heroCity}>MONTREAL</p>
          <p className={styles.heroDesc}>
            Discover. Taste. Vote. One week to celebrate the best coffee shops in the city, one cup at a time.
          </p>
          <div className={styles.heroCtas}>
            <button type="button" className={styles.heroBtnPrimary} onClick={() => scrollTo("cafes")}>
              Explore cafés
            </button>
            <button type="button" className={styles.heroBtnSecondary} onClick={() => scrollTo("join")}>
              Register my café
            </button>
          </div>
        </div>
        <button type="button" className={styles.heroScroll} onClick={() => scrollTo("how")} aria-label="Scroll down">
          <span className={styles.heroScrollDot} />
        </button>
      </section>

      {/* ── How it works ──────────────────────────────────────── */}
      <section id="how" className={styles.how}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>How it works</span>
          <h2 className={styles.sectionTitle}>Your coffee tour starts here.</h2>
          <p className={styles.sectionDesc}>
            For one week, the best coffee shops in Montreal create a special feature drink. Your job is to explore, taste, and vote for your favorite.
          </p>
          <div className={styles.stepsGrid}>
            {STEPS.map((step) => (
              <div key={step.n} className={styles.stepCard}>
                <span className={styles.stepNumber}>{step.n}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cafés ─────────────────────────────────────────────── */}
      <section id="cafes" className={styles.cafes}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrowLight}>Participating cafés</span>
          <h2 className={styles.sectionTitleLight}>They are in.</h2>
          <p className={styles.sectionDescLight}>
            Exclusive creations, one week only. Find your next favorite coffee shop.
          </p>
          <div className={styles.cafesGrid}>
            {CAFES.map((cafe) => (
              <div key={cafe.initials} className={styles.cafeCard}>
                <div className={styles.cafeInitialsWrap} style={{ background: cafe.color }}>
                  <span className={styles.cafeInitials}>{cafe.initials}</span>
                </div>
                <div className={styles.cafeInfo}>
                  <span className={styles.cafeTag}>{cafe.tag}</span>
                  <h3 className={styles.cafeName}>{cafe.name}</h3>
                  <p className={styles.cafeHood}>{cafe.hood}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.cafeTeaser}>
            <span className={styles.cafeTeaserNumber}>50+</span>
            <div>
              <p className={styles.cafeTeaserTitle}>Cafés coming soon</p>
              <p className={styles.cafeTeaserBody}>The full list drops January 2027. Be the first to know.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vote ──────────────────────────────────────────────── */}
      <section className={styles.vote}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>Your opinion matters</span>
          <h2 className={styles.sectionTitle}>Vote for your favorite café.</h2>
          <p className={styles.sectionDesc}>
            After your visit, leave a rating. Community votes determine the winners of the edition.
          </p>
          <div className={styles.starsWrap}>
            <div className={styles.stars} role="group" aria-label="Rate your experience">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`${styles.starBtn} ${n <= activeStars ? styles.starBtnActive : ""}`}
                  onMouseEnter={() => setStarHover(n)}
                  onMouseLeave={() => setStarHover(0)}
                  onClick={() => setStarSelected(n)}
                  aria-label={`${n} star${n > 1 ? "s" : ""}`}
                >
                  ★
                </button>
              ))}
            </div>
            <p className={styles.starLabel}>
              {activeStars ? STAR_LABELS[activeStars] : "How was it?"}
            </p>
          </div>
          {starSelected > 0 && (
            <p className={styles.voteConfirm}>
              Thanks for rating! Your vote helps the community find the best coffee.
            </p>
          )}
        </div>
      </section>

      {/* ── Newsletter ────────────────────────────────────────── */}
      <section className={styles.newsletter}>
        <div className={styles.nlInner}>
          <h2 className={styles.nlTitle}>Be the first to know.</h2>
          <p className={styles.nlSubtext}>Dates, participating cafés, contests — all in your inbox.</p>
          {nlSubmitted ? (
            <p className={styles.nlConfirm} role="status">Thanks! We will keep you posted.</p>
          ) : (
            <form className={styles.nlForm} onSubmit={handleNlSubmit}>
              <input
                type="email"
                className={styles.nlInput}
                placeholder="Your email address"
                value={nlEmail}
                onChange={(e) => setNlEmail(e.target.value)}
                required
              />
              <button type="submit" className={styles.nlBtn}>Subscribe</button>
            </form>
          )}
        </div>
      </section>

      {/* ── Join as café ──────────────────────────────────────── */}
      <section id="join" className={styles.join}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>Own a café?</span>
          <h2 className={styles.sectionTitle}>Join the adventure.</h2>
          <p className={styles.sectionDesc}>
            Register your café and join the hundreds of establishments that have participated in previous editions. Visibility, new customers, and pride guaranteed.
          </p>
          <div className={styles.joinCtas}>
            <Link href="/en/contact?subject=Coffee Week Registration" className={styles.joinBtnPrimary}>
              Register my café
            </Link>
            <Link href="/en/contact?subject=Coffee Week Info" className={styles.joinBtnSecondary}>
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerBrand}>COFFEE WEEK</span>
          <nav className={styles.footerNav}>
            <button type="button" className={styles.footerLink} onClick={() => scrollTo("cafes")}>Cafés</button>
            <button type="button" className={styles.footerLink} onClick={() => scrollTo("vote")}>How to vote</button>
            <Link href="/en/contact?subject=Coffee Week Partnership" className={styles.footerLink}>Partnerships</Link>
            <a href="https://www.instagram.com/ezpz.coffee/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Instagram</a>
            <span className={styles.footerLink}>Français</span>
          </nav>
          <p className={styles.footerCopy}>© 2027 Coffee Week Montreal</p>
        </div>
      </footer>

    </div>
  );
};

export default CoffeeWeekPage;
