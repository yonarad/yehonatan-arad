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
        <a href="mailto:yonarad@gmail.com" className="email">yonarad@gmail.com <span className="arrow-mark" aria-hidden="true" /></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-main">
          <h1>Yehonatan<br /><span className="accent">Arad.</span></h1>
          <div className="mark">
            <Image
              src="/yehonatan-arad.jpg"
              alt="Yehonatan Arad"
              width={400}
              height={400}
              priority
              className="profile-photo"
            />
          </div>
        </div>
        <div className="hero-bottom">
          <p>Software developer and QA professional with <strong>16 years</strong> of experience making digital products clearer, sturdier, and better to use.</p>
          <a className="scroll" href="#about" aria-label="Explore profile">Explore <span className="down-mark" aria-hidden="true" /></a>
        </div>
      </section>

      <section className="ticker" aria-label="Professional focus">
        <span>SOFTWARE DEVELOPMENT</span><i /><span>QUALITY ASSURANCE</span><i /><span>PRODUCT THINKING</span><i /><span>16 YEARS OF PRACTICE</span>
      </section>

      <section id="about" className="about section">
        <div className="about-content">
          <h2>Build it right.<br />Then make it <span className="accent">better.</span></h2>
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
        <div className="practice-content">
          <h2>How I work.</h2>
          <div className="practice-list">
          {practices.map(([number, title, description]) => (
            <article key={number}>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
          </div>
        </div>
      </section>

      <section id="work" className="work">
        <div className="work-heading"><h2>Selected work.</h2><p>One focused project, created to solve a recurring everyday problem.</p></div>
        <article className="project">
          <div className="project-art" aria-hidden="true"><span>H</span><i /><i /><i /></div>
          <div className="project-copy">
            <p className="project-index">INDEPENDENT PROJECT</p>
            <h2>Heb<span>Sync</span></h2>
            <p className="project-subtitle">Hebrew Calendar Sync</p>
            <p className="project-description">HebSync brings the Hebrew calendar into everyday scheduling, making it easier to keep meaningful dates present in the calendar you already use.</p>
            <a className="project-link" href="https://hebsync.org" target="_blank" rel="noreferrer">Explore HebSync <span className="arrow-mark" aria-hidden="true" /></a>
          </div>
        </article>
      </section>

      <section id="contact" className="contact section">
        <div className="contact-content">
          <h2>A thoughtful<br />conversation <span className="accent">starts here.</span></h2>
          <a className="contact-email" href="mailto:yonarad@gmail.com">yonarad@gmail.com <span className="arrow-mark" aria-hidden="true" /></a>
          <div className="social-links">
            {socialLinks.map((link) => <a href={link.href} key={link.label} target="_blank" rel="noreferrer">{link.label} <span className="arrow-mark" aria-hidden="true" /></a>)}
          </div>
        </div>
      </section>

      <footer><span>© 2026 Yehonatan Arad</span><span>Software · Quality · Curiosity</span></footer>
    </main>
  );
}
import Image from "next/image";
