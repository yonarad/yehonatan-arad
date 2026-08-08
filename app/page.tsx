"use client";

import Image from "next/image";
import { useState } from "react";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yehonatan-arad" },
  { label: "Facebook", href: "https://m.facebook.com/yonarad" },
  { label: "X / Twitter", href: "https://x.com/yonarad1" },
];

const content = {
  en: {
    navWork: "Work", navContact: "Contact", switchLanguage: "עברית", homeLabel: "Yehonatan Arad home",
    intro: <>Software developer and QA professional with <strong>16 years</strong> of experience making digital products clearer, sturdier, and better to use.</>,
    explore: "Explore", focus: ["Software development", "Quality assurance", "Product thinking", "16 years of practice"],
    aboutTitle: <>Build it right.<br />Then make it <span className="accent">better.</span></>,
    about: "I'm Yehonatan Arad. My work sits where engineering discipline and a user's real experience meet. I enjoy shaping useful software, interrogating its weak spots, and helping good ideas become reliable products.",
    years: "years working across software development and quality assurance.",
    practiceTitle: "How I work.",
    practices: [["Software development", "Practical, dependable solutions that make the right thing feel effortless."], ["Quality assurance", "A sharp eye for edge cases, consistency, and the details users should never need to notice."], ["Product thinking", "Turning a real-world problem into a focused, useful experience."]],
    workTitle: "Selected work.", workIntro: "One focused project, created to solve a recurring everyday problem.", projectIndex: "Independent project", projectSubtitle: "Hebrew Calendar Sync",
    projectDescription: "HebSync brings the Hebrew calendar into everyday scheduling, making it easier to keep meaningful dates present in the calendar you already use.", projectLink: "Explore HebSync",
    contactTitle: <>A thoughtful<br />conversation <span className="accent">starts here.</span></>, footer: "Software · Quality · Curiosity",
  },
  he: {
    navWork: "עבודה", navContact: "יצירת קשר", switchLanguage: "English", homeLabel: "דף הבית של יהונתן ערד",
    intro: <>מפתח תוכנה ובודק איכות עם <strong>16 שנות ניסיון</strong> ביצירת מוצרים דיגיטליים ברורים, יציבים ונוחים יותר לשימוש.</>,
    explore: "היכרות", focus: ["פיתוח תוכנה", "בדיקות איכות", "חשיבה מוצרית", "16 שנות ניסיון"],
    aboutTitle: <>בונים נכון.<br />ואז עושים את זה <span className="accent">טוב יותר.</span></>,
    about: "אני יהונתן ערד. העבודה שלי נמצאת בנקודת המפגש בין משמעת הנדסית לבין חוויית המשתמש האמיתית. אני נהנה לבנות תוכנה שימושית, לאתר את נקודות התורפה שלה, ולעזור לרעיונות טובים להפוך למוצרים אמינים.",
    years: "של עבודה בתחומי פיתוח התוכנה ובדיקות האיכות.",
    practiceTitle: "איך אני עובד.",
    practices: [["פיתוח תוכנה", "פתרונות מעשיים ואמינים שהופכים את הדבר הנכון לפשוט לשימוש."], ["בדיקות איכות", "עין חדה למקרי קצה, לעקביות ולפרטים שהמשתמשים לא אמורים להבחין בהם."], ["חשיבה מוצרית", "הפיכת בעיה מהעולם האמיתי לחוויה ממוקדת ושימושית."]],
    workTitle: "עבודה נבחרת.", workIntro: "פרויקט אחד ממוקד, שנוצר כדי לפתור בעיה יומיומית שחוזרת על עצמה.", projectIndex: "פרויקט עצמאי", projectSubtitle: "סנכרון לוח השנה העברי",
    projectDescription: "HebSync מחבר את הלוח העברי ליומן היומיומי, כדי שתאריכים משמעותיים יישארו נוכחים ביומן שכבר משתמשים בו.", projectLink: "ל־HebSync",
    contactTitle: <>שיחה טובה<br /><span className="accent">מתחילה כאן.</span></>, footer: "תוכנה · איכות · סקרנות",
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
          <a href="mailto:yonarad@gmail.com" className="email">yonarad@gmail.com <span className="arrow-mark" aria-hidden="true" /></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-main"><h1>Yehonatan<br /><span className="accent">Arad.</span></h1><div className="mark"><Image src="/yehonatan-arad.jpg" alt="Yehonatan Arad" width={400} height={400} priority className="profile-photo" /></div></div>
        <div className="hero-bottom"><p>{t.intro}</p><a className="scroll" href="#about" aria-label={t.explore}>{t.explore} <span className="down-mark" aria-hidden="true" /></a></div>
      </section>

      <section className="ticker" aria-label={isHebrew ? "תחומי התמחות" : "Professional focus"}>{t.focus.map((item, index) => <span key={item} className="ticker-item">{index > 0 && <i />}{item}</span>)}</section>

      <section id="about" className="about section"><div className="about-content"><h2>{t.aboutTitle}</h2><div className="about-grid"><p className="lead">{t.about}</p><aside className="fact-card"><span>16</span><p>{t.years}</p></aside></div></div></section>

      <section className="practice section"><div className="practice-content"><h2>{t.practiceTitle}</h2><div className="practice-list">{t.practices.map(([title, description]) => <article key={title}><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

      <section id="work" className="work"><div className="work-heading"><h2>{t.workTitle}</h2><p>{t.workIntro}</p></div><article className="project"><div className="project-art" aria-hidden="true"><span>H</span><i /><i /><i /></div><div className="project-copy"><p className="project-index">{t.projectIndex}</p><h2>Heb<span>Sync</span></h2><p className="project-subtitle">{t.projectSubtitle}</p><p className="project-description">{t.projectDescription}</p><a className="project-link" href="https://hebsync.org" target="_blank" rel="noreferrer">{t.projectLink} <span className="arrow-mark" aria-hidden="true" /></a></div></article></section>

      <section id="contact" className="contact section"><div className="contact-content"><h2>{t.contactTitle}</h2><a className="contact-email" href="mailto:yonarad@gmail.com">yonarad@gmail.com <span className="arrow-mark" aria-hidden="true" /></a><div className="social-links">{socialLinks.map((link) => <a href={link.href} key={link.label} target="_blank" rel="noreferrer">{link.label} <span className="arrow-mark" aria-hidden="true" /></a>)}</div></div></section>

      <footer><span>&copy; 2026 Yehonatan Arad</span><span>{t.footer}</span></footer>
    </main>
  );
}
