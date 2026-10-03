import Link from "next/link";

export default function Contact() {
  return (
    <main className="contact-page">
      <header className="site-header">
        <Link className="wordmark" href="/">SIDONA HADIS</Link>
        <nav aria-label="Primary navigation"><Link href="/#work">Work</Link><Link href="/about">About</Link><Link className="active" href="/contact">Contact</Link></nav>
        <Link className="outline-button" href="/">See the work <span>↗</span></Link>
      </header>
      <section className="contact-stage">
        <span className="floating-note note-one">No forms.</span>
        <span className="floating-note note-two">No awkward fields.</span>
        <span className="floating-note note-three">Just say hi :)</span>
        <div className="contact-copy">
          <p className="eyebrow">Have a project, idea, or delightfully vague thought?</p>
          <h1>LET&apos;S MAKE<br />SOMETHING<br /><em>WORTH OPENING.</em></h1>
          <a className="email-link" href="mailto:sidona.hadis@gmail.com">sidona.hadis@gmail.com <span>↗</span></a>
          <p className="witty">I check my inbox more often than I&apos;d like to admit.</p>
        </div>
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
      </section>
      <footer><span>Sidona Hadis © 2026</span><Link href="/">Back to the beginning ↑</Link></footer>
    </main>
  );
}
