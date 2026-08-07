const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yehonatan-arad" },
  { label: "Facebook", href: "https://m.facebook.com/yonarad" },
  { label: "X / Twitter", href: "https://x.com/yonarad1" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="monogram" href="#top" aria-label="Yehonatan Arad home">YA</a>
        <a href="mailto:yonarad@gmail.com" className="email">yonarad@gmail.com <span>↗</span></a>
      </nav>

      <section className="hero" id="top">
        <p className="kicker">Independent software professional · Israel</p>
        <div className="hero-title">
          <h1>Yehonatan<br /><em>Arad.</em></h1>
          <div className="portrait" aria-label="Yehonatan Arad monogram portrait">
            <span>YA</span>
            <i />
            <i />
          </div>
        </div>
        <div className="hero-footer">
          <p>Software developer &amp; QA professional with 16 years of experience building, testing, and improving digital products.</p>
          <a href="#about" className="scroll" aria-label="Explore profile">↓</a>
        </div>
      </section>

      <section id="about" className="about section">
        <p className="label">01 / ABOUT</p>
        <div>
          <h2>Building with care.<br />Testing with <em>intent.</em></h2>
          <p className="lead">I’m Yehonatan Arad, a software developer and QA professional. For over 16 years, I’ve worked at the intersection of reliable engineering, thoughtful product quality, and practical problem-solving.</p>
        </div>
      </section>

      <section className="work section">
        <p className="label">02 / SELECTED WORK</p>
        <article className="project">
          <div>
            <p className="project-no">01</p>
            <h2>HebSync</h2>
            <p>Hebrew Calendar Sync</p>
          </div>
          <div className="project-detail">
            <p>A project created to bring the Hebrew calendar into everyday scheduling.</p>
            <a href="https://hebsync.org" target="_blank" rel="noreferrer">Visit hebsync.org <span>↗</span></a>
          </div>
        </article>
      </section>

      <section className="connect section">
        <p className="label">03 / CONNECT</p>
        <h2>Let’s stay<br /><em>connected.</em></h2>
        <div className="link-list">
          <a className="contact-email" href="mailto:yonarad@gmail.com">yonarad@gmail.com <span>↗</span></a>
          {links.map((link) => <a href={link.href} key={link.label} target="_blank" rel="noreferrer">{link.label} <span>↗</span></a>)}
        </div>
      </section>

      <footer><span>© 2026 Yehonatan Arad</span><span>Software · Quality · Curiosity</span></footer>
    </main>
  );
}
