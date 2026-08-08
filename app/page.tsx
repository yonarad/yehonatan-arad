const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yehonatan-arad" },
  { label: "Facebook", href: "https://m.facebook.com/yonarad" },
  { label: "X / Twitter", href: "https://x.com/yonarad1" },
];

const practices = [
  ["01", "Software development", "Practical, dependable solutions that make the right thing feel effortless."],
  ["02", "Quality assurance", "A sharp eye for edge cases, consistency, and the details users should never need to notice."],
  ["03", "Product thinking", "Turning a real-world problem into a focused, useful experience."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="monogram" href="#top" aria-label="Yehonatan Arad home">YA</a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="mailto:yonarad@gmail.com" className="email">yonarad@gmail.com <span aria-hidden="true">↗</span></a>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow"><span /> INDEPENDENT SOFTWARE PROFESSIONAL · ISRAEL</p>
        <div className="hero-main">
          <h1>Yehonatan<br /><em>Arad.</em></h1>
          <div className="mark" aria-label="Yehonatan Arad monogram">
            <span>YA</span><i /><i /><b />
          </div>
        </div>
        <div className="hero-bottom">
          <p>Software developer and QA professional with <strong>16 years</strong> of experience making digital products clearer, sturdier, and better to use.</p>
          <a className="scroll" href="#about" aria-label="Explore profile">Scroll <span>↓</span></a>
        </div>
      </section>

      <section className="ticker" aria-label="Professional focus">
        <span>SOFTWARE DEVELOPMENT</span><i>✦</i><span>QUALITY ASSURANCE</span><i>✦</i><span>PRODUCT THINKING</span><i>✦</i><span>16 YEARS OF PRACTICE</span>
      </section>

      <section id="about" className="about section">
        <p className="section-label">01 / PROFILE</p>
        <div className="about-content">
          <h2>Build it right.<br />Then make it <em>better.</em></h2>
          <div className="about-grid">
            <p className="lead">I’m Yehonatan Arad. My work sits where engineering discipline and a user’s real experience meet. I enjoy shaping useful software, interrogating its weak spots, and helping good ideas become reliable products.</p>
            <aside className="fact-card">
              <span>16</span>
              <p>years working across software development and quality assurance.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="practice section">
        <p className="section-label">02 / PRACTICE</p>
        <div className="practice-list">
          {practices.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="work">
        <div className="work-heading"><p className="section-label">03 / SELECTED WORK</p><p>One focused project, created to solve a recurring everyday problem.</p></div>
        <article className="project">
          <div className="project-art" aria-hidden="true"><span>H</span><i /><i /><i /></div>
          <div className="project-copy">
            <p className="project-index">01 — INDEPENDENT PROJECT</p>
            <h2>Heb<span>Sync</span></h2>
            <p className="project-subtitle">Hebrew Calendar Sync</p>
            <p className="project-description">HebSync brings the Hebrew calendar into everyday scheduling, making it easier to keep meaningful dates present in the calendar you already use.</p>
            <a className="project-link" href="https://hebsync.org" target="_blank" rel="noreferrer">Explore HebSync <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      </section>

      <section id="contact" className="contact section">
        <p className="section-label">04 / CONTACT</p>
        <div className="contact-content">
          <h2>A thoughtful<br />conversation <em>starts here.</em></h2>
          <a className="contact-email" href="mailto:yonarad@gmail.com">yonarad@gmail.com <span aria-hidden="true">↗</span></a>
          <div className="social-links">
            {socialLinks.map((link) => <a href={link.href} key={link.label} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}
          </div>
        </div>
      </section>

      <footer><span>© 2026 Yehonatan Arad</span><span>Software · Quality · Curiosity</span></footer>
    </main>
  );
}
