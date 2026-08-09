"use client";

import Image from "next/image";
import { useState } from "react";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yehonatan-arad", icon: "linkedin" },
  { label: "Facebook", href: "https://m.facebook.com/yonarad", icon: "facebook" },
  { label: "X / Twitter", href: "https://x.com/yonarad1", icon: "x" },
  { label: "Telegram: @Yonarad1", href: "https://t.me/Yonarad1", icon: "telegram" },
] as const;

function MailIcon() {
  return <svg className="contact-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="1.9" /><path d="m4.5 7 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function SocialIcon({ kind }: { kind: "linkedin" | "facebook" | "x" | "telegram" }) {
  const paths = {
    linkedin: <path d="M5.2 3.5a1.7 1.7 0 1 1 0 3.4 1.7 1.7 0 0 1 0-3.4ZM3.7 8.2h3V20h-3V8.2Zm4.9 0h2.9v1.6h.1c.4-.8 1.4-1.9 3.2-1.9 3.4 0 4 2.2 4 5.2V20h-3v-6c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V20h-3V8.2Z" />,
    facebook: <path d="M13.7 20v-7h2.4l.4-2.8h-2.8V8.4c0-.8.2-1.4 1.4-1.4h1.5V4.5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2h-2.5V13h2.5v7h3Z" />,
    x: <path d="M18.9 3h2.8l-6.2 7.1 7.3 10.9h-5.7l-4.5-6.6L6.9 21H4.1l6.6-7.5L3.7 3h5.8l4.1 6.1L18.9 3Zm-1 16.2h1.6L8.6 4.7H6.9l11 14.5Z" />,
    telegram: <path d="m21.5 4.5-3 15.1c-.2 1.1-.8 1.4-1.7.9l-4.7-3.4-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8 8.8-7.9c.4-.3-.1-.5-.6-.2L6.5 13.6 1.8 12c-1-.3-1-1 .2-1.5L20.5 3.4c.9-.3 1.7.2 1 1.1Z" />,
  };
  return <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">{paths[kind]}</svg>;
}

function ExternalArrow() {
  return (
    <svg className="external-arrow" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const content = {
  en: {
    navWork: "Work", navContact: "Contact", switchLanguage: "עברית", homeLabel: "Yehonatan Arad home",
    intro: <>Software developer with <strong>16 years</strong> of experience building clear, reliable digital products.</>,
    explore: "Explore", focus: ["Software development", "Product thinking", "Reliable delivery", "16 years of practice"],
    aboutTitle: <>Build it right.<br />Then make it <span className="accent">better.</span></>,
    about: "I'm Yehonatan Arad, a software developer who enjoys shaping useful products, solving hard problems, and turning good ideas into reliable software.",
    years: "years building and improving digital products.",
    practiceTitle: "How I work.",
    practices: [["Software development", "Practical, dependable solutions that make the right thing feel effortless."], ["Engineering quality", "Thoughtful implementation that keeps software clear, resilient, and easy to evolve."], ["Product thinking", "Turning a real-world problem into a focused, useful experience."]],
    workTitle: "Selected work.", workIntro: "One focused project, created to solve a recurring everyday problem.", projectIndex: "Independent project", projectSubtitle: "Hebrew Calendar Sync",
    projectDescription: "HebSync brings the Hebrew calendar into everyday scheduling, making it easier to keep meaningful dates present in the calendar you already use.", projectLink: "Explore HebSync",
    contactTitle: <>A thoughtful<br />conversation <span className="accent">starts here.</span></>, footer: "Software · Product · Curiosity",
  },
  he: {
    navWork: "עבודה", navContact: "יצירת קשר", switchLanguage: "English", homeLabel: "דף הבית של יהונתן ארד",
    intro: <>מפתח תוכנה עם <strong>16 שנות ניסיון</strong> בבניית מוצרים דיגיטליים ברורים, אמינים ונוחים לשימוש.</>,
    explore: "היכרות", focus: ["פיתוח תוכנה", "חשיבה מוצרית", "מוצרים אמינים", "16 שנות ניסיון"],
    aboutTitle: <>בונים נכון.<br />ואז עושים את זה <span className="accent">טוב יותר.</span></>,
    about: "אני יהונתן ארד, מפתח תוכנה שנהנה לבנות מוצרים שימושיים, לפתור בעיות מורכבות, ולהפוך רעיונות טובים לתוכנה אמינה.",
    years: "של בנייה ושיפור של מוצרים דיגיטליים.",
    practiceTitle: "איך אני עובד.",
    practices: [["פיתוח תוכנה", "פתרונות מעשיים ואמינים שהופכים את הדבר הנכון לפשוט לשימוש."], ["איכות הנדסית", "מימוש מדויק ששומר על תוכנה ברורה, יציבה וקלה להמשך פיתוח."], ["חשיבה מוצרית", "הפיכת בעיה מהעולם האמיתי לחוויה ממוקדת ושימושית."]],
    workTitle: "עבודה נבחרת.", workIntro: "פרויקט אחד ממוקד, שנוצר כדי לפתור בעיה יומיומית שחוזרת על עצמה.", projectIndex: "פרויקט עצמאי", projectSubtitle: "HebSync — עברי ליומן",
    projectDescription: "HebSync מחבר את הלוח העברי ליומן היומיומי, כדי שתאריכים משמעותיים יישארו נוכחים ביומן שכבר משתמשים בו.", projectLink: "ל־HebSync",
    contactTitle: <>שיחה טובה<br /><span className="accent">מתחילה כאן.</span></>, footer: "תוכנה · מוצר · סקרנות",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<"en" | "he">("en");
  const t = content[language];
  const isHebrew = language === "he";

  return (
    <main dir={isHebrew ? "rtl" : "ltr"} lang={language} className={isHebrew ? "hebrew" : "english"}>
      <nav className="nav" aria-label={isHebrew ? "ניווט ראשי" : "Main navigation"}>
        <a className="monogram" href="#top" aria-label={t.homeLabel}>YA</a>
        <div className="nav-links"><a href="#work">{t.navWork}</a><a href="#contact">{t.navContact}</a></div>
        <div className="nav-actions">
          <button className="language-toggle" type="button" onClick={() => setLanguage(isHebrew ? "en" : "he")} aria-label={isHebrew ? "Switch to English" : "החלפה לעברית"}>{t.switchLanguage}</button>
          <a href="mailto:yonarad@gmail.com" className="email" aria-label="Send email to yonarad@gmail.com"><MailIcon /></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-main"><h1>Yehonatan<br /><span className="accent">Arad.</span></h1><div className="mark"><Image src="/yehonatan-arad.jpg" alt="Yehonatan Arad" width={400} height={400} priority className="profile-photo" /></div></div>
        <div className="hero-bottom"><p>{t.intro}</p><a className="scroll" href="#about" aria-label={t.explore}>{t.explore} <span className="down-mark" aria-hidden="true" /></a></div>
      </section>

      <section className="ticker" aria-label={isHebrew ? "תחומי התמחות" : "Professional focus"}>{t.focus.map((item, index) => <span key={item} className="ticker-item">{index > 0 && <i />}{item}</span>)}</section>

      <section id="about" className="about section"><div className="about-content"><h2>{t.aboutTitle}</h2><div className="about-grid"><p className="lead">{t.about}</p><aside className="fact-card"><span>16</span><p>{t.years}</p></aside></div></div></section>

      <section className="practice section"><div className="practice-content"><h2>{t.practiceTitle}</h2><div className="practice-list">{t.practices.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

      <section id="work" className="work"><div className="work-heading"><h2>{t.workTitle}</h2><p>{t.workIntro}</p></div><article className="project"><div className="project-art" aria-hidden="true"><span>H</span><i /><i /><i /></div><div className="project-copy"><div className="project-kicker"><Image src="/hebsync-logo.png" alt="HebSync logo" width={112} height={112} className="hebsync-logo" /><p className="project-index">{t.projectIndex}</p></div><h2>Heb<span>Sync</span></h2><p className="project-subtitle">{t.projectSubtitle}</p><p className="project-description">{t.projectDescription}</p><a className="project-link" href="https://hebsync.org" target="_blank" rel="noreferrer">{t.projectLink} <ExternalArrow /></a></div></article></section>

      <section id="contact" className="contact section"><div className="contact-content"><h2>{t.contactTitle}</h2><a className="contact-email" href="mailto:yonarad@gmail.com" aria-label="Send email to yonarad@gmail.com"><MailIcon /></a><div className="social-links">{socialLinks.map((link) => <a href={link.href} key={link.label} target="_blank" rel="noreferrer" aria-label={link.label}><SocialIcon kind={link.icon} /></a>)}</div></div></section>

      <footer><span>&copy; 2026 Yehonatan Arad</span><span>{t.footer}</span></footer>
    </main>
  );
}
