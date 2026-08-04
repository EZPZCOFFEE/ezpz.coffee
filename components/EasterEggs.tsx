"use client";

/* ================================================================
 * EZPZ Coffee — 18 Easter Eggs
 * ================================================================
 * All eggs are browser-only (SSR-safe), respect prefers-reduced-motion,
 * and are self-contained. To disable any single egg, remove or
 * comment out the matching EGG XX block below.
 *
 * EGG 01 — Console greeting on load
 * EGG 02 — ASCII-art HTML comment injected into <body>
 * EGG 03 — DevTools open → brand manifesto in console (once/session)
 * EGG 04 — Konami code → coffee bean rain          [skip if reduced-motion]
 * EGG 05 — Type "coffee" → steam puffs near cursor  [skip if reduced-motion]
 * EGG 06 — Type "ezpz" → branded toast
 * EGG 07 — Logo 5× click in 3 s → spin + toast     (needs data-egg="logo")
 * EGG 08 — Triple-click hero h1 → text swap 2.5 s   (needs data-egg="hero-headline")
 * EGG 09 — Hover bag image 3 s → speech bubble      (needs data-egg="bag-image")
 * EGG 10 — Scroll to very bottom → footer line reveal
 * EGG 11 — Idle 60 s → tab title change, restore on interaction
 * EGG 12 — Load between 00:00–05:00 → late-night toast (once/session)
 * EGG 13 — Coffee-bean cursor on /design + 404 pages (needs data-egg-cursor="bean")
 * EGG 14 — 404 cup 10× click → wiggle + toast       (needs data-egg="cup-404")
 * EGG 15 — Type "therapy" → toast
 * EGG 16 — Random witty tagline appended to tab title on each page load
 * EGG 17 — Secret page at /en/secret  (see app/[lang]/(main)/secret/page.tsx)
 * EGG 18 — Click "1 minimum order" stat → bean confetti burst (needs data-egg="one-stat")
 * ================================================================ */

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

// ─── Types ────────────────────────────────────────────────────────────────────

interface EggToast {
  id: number;
  msg: string;
  cta?: { label: string; href: string };
  duration: number;
}

// ─── Shared animation keyframes — injected once into <head> ──────────────────

const ANIM_CSS = `
@keyframes ezpz-fall {
  0%   { transform: translateY(-80px) rotate(0deg);   opacity: 1; }
  100% { transform: translateY(110vh) rotate(540deg); opacity: 0; }
}
@keyframes ezpz-float {
  0%   { transform: translateY(0)    scale(1);   opacity: 1; }
  100% { transform: translateY(-90px) scale(0.2); opacity: 0; }
}
@keyframes ezpz-burst {
  0%   { transform: translate(0, 0) scale(1); opacity: 1; }
  100% { transform: translate(var(--tx, 0px), var(--ty, -50px)) scale(0); opacity: 0; }
}
@keyframes ezpz-wiggle {
  0%,100% { transform: rotate(0deg)  scale(1);    }
  20%     { transform: rotate(-20deg) scale(1.15); }
  40%     { transform: rotate(20deg)  scale(1.15); }
  60%     { transform: rotate(-12deg) scale(1.08); }
  80%     { transform: rotate(12deg)  scale(1.08); }
}
@keyframes ezpz-toast-in {
  from { transform: translateY(14px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}
`;

// ─── Bean cursor SVG data URI ─────────────────────────────────────────────────

const BEAN_CURSOR =
  "data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cellipse%20cx%3D%2210%22%20cy%3D%2210%22%20rx%3D%227%22%20ry%3D%229%22%20fill%3D%22%23C17A3A%22%2F%3E%3Cpath%20d%3D%22M10%202.5%20Q6.5%207%2010%2010%20Q13.5%2013%2010%2017.5%22%20stroke%3D%22%23F5EFE6%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E";

// ─── Utilities ────────────────────────────────────────────────────────────────

function isTypingInField(): boolean {
  const el = document.activeElement as HTMLElement | null;
  if (!el) return false;
  const tag = el.tagName.toLowerCase();
  if (tag === "input" || tag === "textarea" || tag === "select") return true;
  if (el.isContentEditable) return true;
  return false;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// ─── Pure DOM animations (no React state, no library) ────────────────────────

function beanRain(): void {
  const BEANS = ["☕", "🫘"];
  const wrap = document.createElement("div");
  wrap.setAttribute("aria-hidden", "true");
  Object.assign(wrap.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "0",
    pointerEvents: "none",
    zIndex: "99997",
    overflow: "visible",
  });
  document.body.appendChild(wrap);

  for (let i = 0; i < 28; i++) {
    const span = document.createElement("span");
    const delay = (Math.random() * 2.2).toFixed(2);
    const dur = (2.4 + Math.random() * 1.8).toFixed(2);
    span.textContent = BEANS[i % 2];
    Object.assign(span.style, {
      position: "absolute",
      left: `${(Math.random() * 98).toFixed(1)}%`,
      top: "0",
      fontSize: `${18 + Math.random() * 18}px`,
      animation: `ezpz-fall ${dur}s ${delay}s ease-in forwards`,
      pointerEvents: "none",
      lineHeight: "1",
    });
    wrap.appendChild(span);
  }

  setTimeout(() => wrap.remove(), 5500);
}

function steamPuff(x: number, y: number): void {
  const EMOJIS = ["♨️", "☕", "✨"];
  for (let i = 0; i < 5; i++) {
    const span = document.createElement("span");
    const delay = (i * 0.13).toFixed(2);
    const ox = Math.round(x + (Math.random() * 60 - 30));
    span.textContent = EMOJIS[i % EMOJIS.length];
    span.setAttribute("aria-hidden", "true");
    Object.assign(span.style, {
      position: "fixed",
      left: `${ox}px`,
      top: `${y - 10}px`,
      fontSize: "20px",
      animation: `ezpz-float 1.1s ${delay}s ease-out forwards`,
      pointerEvents: "none",
      zIndex: "99997",
      lineHeight: "1",
    });
    document.body.appendChild(span);
    setTimeout(() => span.remove(), 1400 + i * 130);
  }
}

function confettiBurst(x: number, y: number): void {
  const BEANS = ["🫘", "☕"];
  for (let i = 0; i < 20; i++) {
    const span = document.createElement("span");
    const angle = (i / 20) * 2 * Math.PI;
    const dist = 45 + Math.random() * 65;
    const tx = Math.round(Math.cos(angle) * dist);
    const ty = Math.round(Math.sin(angle) * dist - 35);
    const dur = (0.7 + Math.random() * 0.5).toFixed(2);
    span.textContent = BEANS[i % 2];
    span.setAttribute("aria-hidden", "true");
    span.style.cssText = `position:fixed;left:${x}px;top:${y}px;font-size:17px;--tx:${tx}px;--ty:${ty}px;animation:ezpz-burst ${dur}s ease-out forwards;pointer-events:none;z-index:99997;line-height:1;`;
    document.body.appendChild(span);
    setTimeout(() => span.remove(), +dur * 1000 + 120);
  }
}

// ─── Toast counter ────────────────────────────────────────────────────────────

let _tid = 0;
const nid = () => ++_tid;

// ─── Toast component ──────────────────────────────────────────────────────────

function ToastItem({
  msg,
  cta,
  duration,
  onDone,
}: EggToast & { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, duration);
    return () => clearTimeout(t);
  }, [duration, onDone]);

  return (
    <div
      role="status"
      style={{
        background: "#0D0A07",
        border: "1px solid #C17A3A",
        borderRadius: "8px",
        padding: "10px 16px",
        color: "#F5EFE6",
        fontSize: "13px",
        fontFamily: "var(--font-montserrat, system-ui, sans-serif)",
        fontWeight: 600,
        lineHeight: "1.45",
        boxShadow: "0 6px 24px rgba(0,0,0,0.55), 0 0 0 1px rgba(193,122,58,0.15)",
        animation: "ezpz-toast-in 0.22s ease forwards",
        maxWidth: "260px",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        pointerEvents: cta ? "auto" : "none",
        userSelect: "none",
      }}
    >
      <span>{msg}</span>
      {cta && (
        <a
          href={cta.href}
          style={{
            color: "#C17A3A",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            fontSize: "12px",
            fontWeight: 700,
          }}
        >
          {cta.label} →
        </a>
      )}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function EasterEggs() {
  const pathname = usePathname();
  const [toasts, setToasts] = useState<EggToast[]>([]);
  const [bubble, setBubble] = useState<{ x: number; y: number } | null>(null);

  const addToast = useCallback(
    (msg: string, cta?: EggToast["cta"], duration = 2500) => {
      setToasts((prev) => [...prev, { id: nid(), msg, cta, duration }]);
    },
    []
  );
  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Stable ref so egg closures with [] deps always call the latest addToast
  const addToastRef = useRef(addToast);
  addToastRef.current = addToast;

  // Cursor position tracking (shared across eggs)
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  /* ── Shared animation CSS ──────────────────────────────────────────────── */
  useEffect(() => {
    if (document.getElementById("ezpz-anim")) return;
    const s = document.createElement("style");
    s.id = "ezpz-anim";
    s.textContent = ANIM_CSS;
    document.head.appendChild(s);
  }, []);

  /* ── Mouse position tracker ────────────────────────────────────────────── */
  useEffect(() => {
    const track = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };
    window.addEventListener("mousemove", track, { passive: true });
    return () => window.removeEventListener("mousemove", track);
  }, []);

  /* EGG 01 ── Console greeting ──────────────────────────────────────────── */
  useEffect(() => {
    console.log(
      "%c☕ Nothing to see here but great coffee.",
      "color:#C17A3A;font-size:18px;font-weight:bold;font-family:monospace;padding:4px 0;"
    );
    console.log(
      "%cWant a job?  help@ezpz.coffee",
      "color:#F5EFE6;font-size:13px;font-family:monospace;"
    );
    console.log(
      "%cpsst: try visiting /en/secret 👀",
      "color:#C17A3A;font-size:12px;font-family:monospace;font-style:italic;"
    );
  }, []);

  /* EGG 02 ── HTML comment in <body> ───────────────────────────────────── */
  useEffect(() => {
    if (document.getElementById("ezpz-src-marker")) return;
    const ascii = `
  ╔══════════════════════════════════════╗
  ║  ☕  EZPZ Coffee  ☕               ║
  ║     ___________                     ║
  ║    |  E Z P Z  |                    ║
  ║    |___________|                    ║
  ║         | |                         ║
  ║    _____|_|_____                    ║
  ║   |_____________|                   ║
  ║                                     ║
  ║  Psst — we're hiring curious        ║
  ║  people. help@ezpz.coffee           ║
  ╚══════════════════════════════════════╝
`;
    document.body.insertBefore(
      document.createComment(ascii),
      document.body.firstChild
    );
    const marker = document.createElement("span");
    marker.id = "ezpz-src-marker";
    marker.hidden = true;
    marker.setAttribute("aria-hidden", "true");
    document.body.appendChild(marker);
  }, []);

  /* EGG 03 ── DevTools manifesto (once per session) ─────────────────────── */
  useEffect(() => {
    const KEY = "ezpz-devtools-fired";
    let fired = !!sessionStorage.getItem(KEY);
    const MANIFESTO =
      "Zero minimum. Full design included. Roasted in Montreal. Your brand, our coffee. That's it. That's the whole secret.";
    const check = () => {
      if (
        !fired &&
        (window.outerWidth - window.innerWidth > 120 ||
          window.outerHeight - window.innerHeight > 120)
      ) {
        fired = true;
        sessionStorage.setItem(KEY, "1");
        console.log(
          `%c${MANIFESTO}`,
          "color:#C17A3A;font-size:14px;font-weight:bold;font-family:monospace;"
        );
      }
    };
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  /* EGG 04+05+06+15 ── Keyboard: Konami + typed words ──────────────────── */
  useEffect(() => {
    const KONAMI = [
      "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
      "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
      "b", "a",
    ];
    let konamiSeq: string[] = [];
    let keyBuf = "";

    const handler = (e: KeyboardEvent) => {
      /* ── EGG 04: Konami code → bean rain ── */
      konamiSeq.push(e.key);
      if (konamiSeq.length > KONAMI.length) konamiSeq = konamiSeq.slice(-KONAMI.length);
      if (konamiSeq.join(",") === KONAMI.join(",")) {
        konamiSeq = [];
        if (prefersReducedMotion()) {
          addToastRef.current("☕🫘 Bean rain unlocked! (Animations are off.) 🫘☕");
        } else {
          beanRain();
        }
        return;
      }

      /* ── Skip word-detection when user is typing in a form ── */
      if (isTypingInField()) return;
      if (e.key.length !== 1) return;

      keyBuf = (keyBuf + e.key.toLowerCase()).slice(-10);

      /* EGG 05 — Type "coffee" → steam puffs */
      if (keyBuf.endsWith("coffee")) {
        keyBuf = "";
        if (!prefersReducedMotion()) steamPuff(mouseX.current, mouseY.current);
        return;
      }
      /* EGG 06 — Type "ezpz" → toast */
      if (keyBuf.endsWith("ezpz")) {
        keyBuf = "";
        addToastRef.current("😎 easy peasy");
        return;
      }
      /* EGG 15 — Type "therapy" → toast */
      if (keyBuf.endsWith("therapy")) {
        keyBuf = "";
        addToastRef.current("our competitors, probably 😏");
        return;
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* EGG 07 ── Logo 5× click in 3 s → spin + toast ──────────────────────── */
  useEffect(() => {
    let clicks = 0;
    let resetTimer: ReturnType<typeof setTimeout>;

    const handler = (e: MouseEvent) => {
      const logo = (e.target as HTMLElement).closest<HTMLElement>('[data-egg="logo"]');
      if (!logo) return;
      e.preventDefault();
      clicks++;
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => (clicks = 0), 3000);

      if (clicks >= 5) {
        clicks = 0;
        clearTimeout(resetTimer);
        if (!prefersReducedMotion()) {
          const img = logo.querySelector("img");
          if (img) {
            img.style.transition = "transform 0.65s cubic-bezier(0.36,0.07,0.19,0.97)";
            img.style.transform = "rotate(360deg)";
            setTimeout(() => {
              img.style.transition = "none";
              img.style.transform = "";
            }, 700);
          }
        }
        addToastRef.current("You found me! ☕");
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  /* EGG 08 ── Triple-click hero h1 → text swap for 2.5 s ─────────────── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (e.detail < 3) return;
      const el = (e.target as HTMLElement).closest<HTMLElement>('[data-egg="hero-headline"]');
      if (!el) return;
      const original = el.textContent ?? "";
      el.textContent = "Your brand. Our coffee. Miguel’s genius.";
      setTimeout(() => {
        el.textContent = original;
      }, 2500);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  /* EGG 09 ── Hover bag image 3 s → speech bubble ───────────────────────── */
  useEffect(() => {
    let hoverTimer: ReturnType<typeof setTimeout> | null = null;
    let hovering = false;

    const onOver = (e: MouseEvent) => {
      const bag = (e.target as HTMLElement).closest<HTMLElement>('[data-egg="bag-image"]');
      if (!bag || hovering) return;
      hovering = true;
      hoverTimer = setTimeout(() => {
        const r = bag.getBoundingClientRect();
        setBubble({ x: r.right - 140, y: Math.max(r.top - 64, 12) });
      }, 3000);
    };

    const onOut = (e: MouseEvent) => {
      const bag = (e.target as HTMLElement).closest<HTMLElement>('[data-egg="bag-image"]');
      if (!bag || !hovering) return;
      const rel = e.relatedTarget as HTMLElement | null;
      if (rel && bag.contains(rel)) return;
      hovering = false;
      if (hoverTimer) { clearTimeout(hoverTimer); hoverTimer = null; }
      setBubble(null);
    };

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  /* EGG 10 ── Scroll to very bottom → footer line reveal ────────────────── */
  useEffect(() => {
    let revealed = false;

    const setup = () => {
      if (document.getElementById("ezpz-scroll-line")) return;
      const footer = document.querySelector("footer");
      if (!footer) return;
      const line = document.createElement("p");
      line.id = "ezpz-scroll-line";
      line.textContent = "You scrolled all the way down. Respect. ☕";
      line.setAttribute("aria-hidden", "true");
      Object.assign(line.style, {
        opacity: "0",
        transition: "opacity 1.5s ease",
        textAlign: "center",
        fontSize: "11px",
        color: "rgba(255,255,255,0.25)",
        margin: "16px 0 0",
        fontStyle: "italic",
        letterSpacing: "0.06em",
        fontFamily: "var(--font-montserrat, system-ui, sans-serif)",
        pointerEvents: "none",
      });
      footer.appendChild(line);
    };

    const reveal = () => {
      if (revealed) return;
      const atBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight - 50;
      if (!atBottom) return;
      const line = document.getElementById("ezpz-scroll-line");
      if (line) { revealed = true; line.style.opacity = "1"; }
    };

    setup();
    window.addEventListener("scroll", reveal, { passive: true });
    return () => window.removeEventListener("scroll", reveal);
  }, [pathname]);

  /* EGG 11 ── Idle 60 s → tab title, restore on interaction ─────────────── */
  useEffect(() => {
    const IDLE_TITLE = "come back, your coffee’s getting cold ☕";
    const IDLE_MS = 60_000;
    let idleTimer: ReturnType<typeof setTimeout>;
    let savedTitle = "";

    const goIdle = () => {
      savedTitle = document.title;
      document.title = IDLE_TITLE;
    };
    const resetIdle = () => {
      if (document.title === IDLE_TITLE && savedTitle) document.title = savedTitle;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(goIdle, IDLE_MS);
    };

    idleTimer = setTimeout(goIdle, IDLE_MS);
    const EVENTS = ["mousemove", "keydown", "scroll", "click", "touchstart"] as const;
    EVENTS.forEach((ev) => window.addEventListener(ev, resetIdle, { passive: true }));

    return () => {
      clearTimeout(idleTimer);
      EVENTS.forEach((ev) => window.removeEventListener(ev, resetIdle));
      if (document.title === IDLE_TITLE && savedTitle) document.title = savedTitle;
    };
  }, []);

  /* EGG 12 ── Late-night toast (00:00–05:00, once per session) ──────────── */
  useEffect(() => {
    const h = new Date().getHours();
    if (h < 5 && !sessionStorage.getItem("ezpz-latenight")) {
      sessionStorage.setItem("ezpz-latenight", "1");
      setTimeout(() => addToastRef.current("burning the midnight roast? 🌙", undefined, 4000), 1800);
    }
  }, []);

  /* EGG 13 ── Coffee-bean cursor on /design + 404 pages ─────────────────── */
  useEffect(() => {
    const norm = pathname.replace(/^\/(en|fr)/, "") || "/";
    const isDesignPage = norm.startsWith("/design");
    const is404Page = !!document.querySelector("[data-egg-cursor='bean']");
    if (!isDesignPage && !is404Page) return;

    const s = document.createElement("style");
    s.id = "ezpz-bean-cursor";
    s.textContent = `body{cursor:url("${BEAN_CURSOR}")10 10,auto!important}a,button,[role=button]{cursor:url("${BEAN_CURSOR}")10 10,pointer!important}`;
    document.head.appendChild(s);
    return () => document.getElementById("ezpz-bean-cursor")?.remove();
  }, [pathname]);

  /* EGG 14 ── 404 cup 10× click → wiggle + toast ────────────────────────── */
  useEffect(() => {
    let clicks = 0;
    let resetTimer: ReturnType<typeof setTimeout>;

    const handler = (e: MouseEvent) => {
      const cup = (e.target as HTMLElement).closest<HTMLElement>('[data-egg="cup-404"]');
      if (!cup) return;
      clicks++;
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => (clicks = 0), 8000);

      if (clicks >= 10) {
        clicks = 0;
        clearTimeout(resetTimer);
        if (!prefersReducedMotion()) {
          cup.style.animation = "ezpz-wiggle 0.85s ease";
          setTimeout(() => (cup.style.animation = ""), 900);
        }
        addToastRef.current(
          "OK now you’re just procrastinating. Back to work? ☕",
          { label: "Go home", href: "/en" },
          5000
        );
      }
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  /* EGG 16 ── Random tagline appended to tab title per page ─────────────── */
  useEffect(() => {
    const TAGLINES = [
      "☕ zero minimum, maximum flavour",
      "your brand, our coffee",
      "so fresh your competitors need therapy",
      "roasted in Montréal with love",
      "easy peasy coffee",
      "the whole bean and nothing but the bean",
    ];
    const tagline = TAGLINES[Math.floor(Math.random() * TAGLINES.length)];
    const t = setTimeout(() => {
      if (document.title && !document.title.includes(" · ")) {
        document.title = `${document.title} · ${tagline}`;
      }
    }, 120);
    return () => clearTimeout(t);
  }, [pathname]);

  /* EGG 18 ── Click "1 minimum order" stat → bean confetti ─────────────── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>('[data-egg="one-stat"]');
      if (!target) return;
      const r = target.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      if (prefersReducedMotion()) {
        addToastRef.current("One bag. That's all it takes. 🎉");
        return;
      }
      confettiBurst(cx, cy);
      addToastRef.current("One bag. That's all it takes. 🎉");
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  // ─── Render ──────────────────────────────────────────────────────────────

  return (
    <>
      {/* Toast container — fixed, bottom-right, non-blocking */}
      <div
        aria-live="polite"
        aria-atomic="false"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 99999,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          alignItems: "flex-end",
          pointerEvents: "none",
        }}
      >
        {toasts.map((t) => (
          <ToastItem key={t.id} {...t} onDone={() => removeToast(t.id)} />
        ))}
      </div>

      {/* EGG 09 — Speech bubble (rendered when bag hovered 3 s) */}
      {bubble && (
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            background: "#0D0A07",
            border: "2px solid #C17A3A",
            borderRadius: "12px",
            padding: "8px 14px",
            color: "#F5EFE6",
            fontSize: "13px",
            fontFamily: "var(--font-montserrat, system-ui, sans-serif)",
            fontWeight: 600,
            zIndex: 99998,
            pointerEvents: "none",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
            lineHeight: "1.4",
          }}
        >
          psst… order me 👀
          {/* Speech bubble tail */}
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "-10px",
              left: "20px",
              width: 0,
              height: 0,
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderTop: "10px solid #C17A3A",
              display: "block",
            }}
          />
        </div>
      )}
    </>
  );
}
