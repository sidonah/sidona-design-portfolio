import Link from "next/link";

const mobileNewsletters = [
  { src: "/media/maya-mobile-remake.mp4", label: "Maya newsletter" },
  { src: "/media/ginger nl mobile v.mp4", label: "Ginger newsletter" },
  { src: "/media/lime-mobile-remake.mp4", label: "Lime newsletter" },
  { src: "/media/cloud-mobile-remake.mp4", label: "Cloud Cardamom newsletter" },
];

function Header() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/">SIDONA HADIS</Link>
      <nav aria-label="Primary navigation">
        <Link href="/">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <Link className="outline-button" href="/contact">Let&apos;s work together <span>↗</span></Link>
    </header>
  );
}

export default function Home() {
  return (
    <main>
      <Header />
      <section className="hero" aria-labelledby="hero-title">
        <div className="grid-lines" aria-hidden="true" />
        <div className="section-tag tag-left">Newsletter design <span /></div>
        <div className="section-tag tag-right">Email / Social / Web <span /></div>

        <div className="phone-stack phone-stack-left" aria-label="Mobile newsletter work">
          {mobileNewsletters.slice(0, 2).map((item, index) => (
            <figure className={`device phone phone-${index + 1} ${index === 0 ? "enter-second" : "enter-fourth"}`} key={item.src}>
              <div className="browser-dots"><i /><i /><i /></div>
              <video src={item.src} autoPlay muted loop playsInline aria-label={item.label} />
            </figure>
          ))}
        </div>

        <div className="hero-copy">
          <div className="scribble">newsletters<br />social<br />websites <b>↙</b></div>
          <p className="eyebrow">Sidona Hadis · Newsletter-focused designer</p>
          <h1 id="hero-title">I MAKE THE<br /><em>INBOX FEEL</em><br /><strong>LESS ORDINARY.</strong></h1>
          <p className="intro">I blend brand thinking with an artistic eye to create newsletters that feel unmistakably yours—and interesting enough to earn the pause.</p>
          <div className="hero-signoff">
            <span>Web design roots · Creative direction</span>
            <Link href="/about">More about me ↗</Link>
          </div>
        </div>

        <div className="right-showcase">
          <figure className="device phone phone-3 enter-third">
            <div className="browser-dots"><i /><i /><i /></div>
            <video src={mobileNewsletters[2].src} autoPlay muted loop playsInline aria-label={mobileNewsletters[2].label} />
          </figure>
          <figure className="device phone phone-4 enter-first">
            <div className="browser-dots"><i /><i /><i /></div>
            <video src={mobileNewsletters[3].src} autoPlay muted loop playsInline aria-label={mobileNewsletters[3].label} />
          </figure>
          <figure className="device laptop enter-fifth">
            <div className="laptop-screen">
              <div className="browser-dots"><i /><i /><i /></div>
              <video src="/media/Treemoss nl desktop v.mp4" autoPlay muted loop playsInline aria-label="Treemoss desktop newsletter" />
            </div>
            <div className="laptop-base" />
          </figure>
        </div>
      </section>
      <footer><span>Sidona Hadis © 2026</span><Link href="/contact">Have a project? Say hello ↗</Link></footer>
    </main>
  );
}
