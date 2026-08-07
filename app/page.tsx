const highlights = [
  { number: "01", title: "חשיבה בהירה", copy: "מפרקים רעיון מורכב לחוויה פשוטה, שימושית ונעימה." },
  { number: "02", title: "אהבה לפרטים", copy: "מהרעיון הראשון ועד המגע הקטן שעושה את ההבדל." },
  { number: "03", title: "תנועה קדימה", copy: "בונים, לומדים ומשפרים — בקצב שמייצר תוצאות." },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="ניווט ראשי">
        <a className="brand" href="#top" aria-label="Yonar — לעמוד הראשי">Y.</a>
        <a className="nav-link" href="#about">קצת עליי <span>↙</span></a>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">שלום, אני Yonar</p>
        <h1>יוצר חוויות<br /><em>שזוכרים.</em></h1>
        <div className="hero-bottom">
          <p>מקום קטן ברשת לרעיונות, מוצרים ודברים טובים שנמצאים בדרך.</p>
          <a className="round-link" href="#about" aria-label="לגלול לקצת עליי">↓</a>
        </div>
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="grid-mark" aria-hidden="true" />
      </section>

      <section className="about" id="about">
        <p className="section-label">01 / מי אני</p>
        <div className="about-copy">
          <h2>סקרנות היא<br />נקודת ההתחלה.</h2>
          <p>אני מאמין שהדברים הדיגיטליים הטובים ביותר מתחילים בשאלה נכונה — ומסתיימים בחוויה שמרגישה טבעית לגמרי.</p>
        </div>
      </section>

      <section className="principles" aria-label="עקרונות עבודה">
        {highlights.map((item) => (
          <article className="principle" key={item.number}>
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </section>

      <section className="closing">
        <p className="section-label">02 / בואו נדבר</p>
        <h2>יש רעיון טוב?<br /><em>אני בעד.</em></h2>
        <a className="contact" href="mailto:hello@example.com">hello@example.com <span>↗</span></a>
      </section>

      <footer>
        <span>© 2026 Yonar</span>
        <span>Built with intention.</span>
      </footer>
    </main>
  );
}
