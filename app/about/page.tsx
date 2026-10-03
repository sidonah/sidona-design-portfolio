import Link from "next/link";

export default function About() {
  return (
    <main className="inner-page about-page">
      <header className="site-header about-header">
        <Link className="wordmark" href="/">SIDONA HADIS</Link>
        <nav aria-label="Primary navigation"><Link href="/#work">Work</Link><Link className="active" href="/about">About</Link><Link href="/contact">Contact</Link></nav>
        <Link className="outline-button" href="/contact">Let&apos;s work together <span>↗</span></Link>
      </header>

      <section className="about-hero">
        <div className="about-copy">
          <p className="eyebrow">Hi, I&apos;m Sidona · designer + professional daydreamer</p>
          <h1>I LIKE MAKING<br />THINGS THAT<br /><em>FEEL ALIVE.</em></h1>
          <p className="about-lede">I love designing things. I love sketching, experimenting, and almost everything artistic. Design is the fun hobby I somehow get to call my work.</p>
        </div>

        <div className="portrait-collage" aria-label="Portrait of Sidona Hadis">
          <div className="portrait-halo" aria-hidden="true" />
          <div className="photo photo-main"><img src="/media/sidona-about-cutout.png" alt="Sidona Hadis smiling" /></div>
          <div className="photo photo-round"><img src="/media/portrait-studio.jpg" alt="Portrait of Sidona Hadis" /></div>
          <span className="collage-caption caption-one">The face behind<br />the ideas ↗</span>
        </div>
      </section>

      <section className="creative-strip" aria-label="Things Sidona loves">
        <span>Sketching ✎</span><span>Good type</span><span>Beautiful inboxes</span><span>Odd little ideas</span><span>Making things move</span>
      </section>

      <section className="about-story">
        <div className="story-title">
          <p className="detail-number">02 — How I got here</p>
          <h2>WEBSITES<br />LED ME TO<br /><em>THE INBOX.</em></h2>
        </div>
        <div className="story-copy">
          <p>I started by designing websites. I loved building the whole world, but somewhere along the way I realised that newsletters were the part that made me happiest.</p>
          <p>They&apos;re small, focused, and full of possibility. Every newsletter is another chance to grab someone&apos;s attention before their thumb keeps scrolling.</p>
        </div>
        <div className="story-sketch" aria-hidden="true">
          <div className="fake-sheet"><b>SUBJECT:</b><br />something<br /><em>worth opening</em><span>↗</span></div>
          <p>That&apos;s the good stuff.</p>
        </div>
      </section>

      <section className="design-belief">
        <p className="detail-number">03 — My little design philosophy</p>
        <div className="belief-layout">
          <h2>YOUR BRAND.<br />YOUR AUDIENCE.<br /><em>MY KICK.</em></h2>
          <div className="belief-copy">
            <p>I shape every design around the client, the brand, and the person on the other side of the screen. Then I add my own kick, the detail that makes it feel fresh, thoughtful, and hard to ignore.</p>
            <div className="belief-tags"><span>Playful, not messy</span><span>Creative, not confusing</span><span>Professional, never boring</span></div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <p>Have something interesting in mind?</p>
        <h2>LET&apos;S GIVE IT<br /><em>SOMETHING EXTRA.</em></h2>
        <Link href="/contact">Make something memorable ↗</Link>
      </section>
      <footer><span>Sidona Hadis © 2026</span><Link href="/">Back home ↑</Link></footer>
    </main>
  );
}
