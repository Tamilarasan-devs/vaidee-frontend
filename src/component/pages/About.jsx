import React from 'react'
import image from '../../assets/vaide.jpeg'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

  :root {
    --navy: #0c4563;
    --navy-dark: #082f45;
    --gold: #c9a84c;
    --gold-light: #e8c97a;
    --cream: #fdf8f2;
    --cream2: #f5ede0;
    --white: #ffffff;
    --text: #1a1a1a;
    --text-muted: #5c6170;
  }

  .about-root * { box-sizing: border-box; margin: 0; padding: 0; }
  .about-root {
    font-family: 'DM Sans', sans-serif;
    color: var(--text);
    background: var(--white);
    overflow-x: hidden;
  }

  /* ── HERO BANNER ── */
  .about-hero {
    background: linear-gradient(135deg, #071e2c 0%, var(--navy) 55%, #1a6a90 100%);
    padding: 80px 6vw 0;
    overflow: hidden;
    position: relative;
  }
  .about-hero::before {
    content: '';
    position: absolute;
    right: -80px; top: -80px;
    width: 420px; height: 420px;
    background: radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%);
    border-radius: 50%;
  }
  .about-hero-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: flex-end;
    max-width: 1200px;
    margin: 0 auto;
    position: relative; z-index: 1;
  }
  .about-hero-left { padding-bottom: 70px; }
  .about-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(201,168,76,0.15);
    border: 1px solid rgba(201,168,76,0.35);
    color: var(--gold-light);
    padding: 6px 16px; border-radius: 100px;
    font-size: 11px; font-weight: 500;
    letter-spacing: 0.09em; text-transform: uppercase;
    margin-bottom: 22px;
    animation: fadeUp 0.55s ease both;
  }
  .about-eyebrow-dot { width: 6px; height: 6px; background: var(--gold); border-radius: 50%; }
  .about-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 4vw, 58px);
    font-weight: 700;
    color: var(--white);
    line-height: 1.13;
    margin-bottom: 22px;
    animation: fadeUp 0.55s 0.08s ease both;
  }
  .about-hero-title em { color: var(--gold-light); font-style: italic; }
  .about-hero-desc {
    font-size: 15px; color: rgba(255,255,255,0.7);
    line-height: 1.8; font-weight: 300;
    max-width: 440px;
    animation: fadeUp 0.55s 0.16s ease both;
  }
  .about-hero-contact {
    display: flex; align-items: center; gap: 10px;
    margin-top: 32px;
    animation: fadeUp 0.55s 0.22s ease both;
  }
  .about-hero-contact-icon {
    width: 36px; height: 36px; border-radius: 50%;
    background: rgba(201,168,76,0.2);
    border: 1px solid rgba(201,168,76,0.35);
    display: flex; align-items: center; justify-content: center;
  }
  .about-hero-contact-icon svg { width: 16px; height: 16px; }
  .about-hero-contact a {
    font-size: 15px; font-weight: 500; color: var(--gold-light);
    text-decoration: none; letter-spacing: 0.03em;
    transition: color 0.2s;
  }
  .about-hero-contact a:hover { color: var(--white); }

  /* photo panel */
  .about-hero-photo {
    align-self: flex-end;
    display: flex; justify-content: center;
    animation: fadeUp 0.6s 0.1s ease both;
    margin-bottom: 40px;
  }
  .about-photo-frame {
    position: relative;
    width: 320px;
  }
  .about-photo-frame::before {
    content: '';
    position: absolute;
    inset: -12px -12px 12px 12px;
    border: 2px solid rgba(201,168,76,0.3);
    border-radius: 20px;
    z-index: 0;
  }
  .about-photo-frame img {
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    border-radius: 16px;
    display: block;
    position: relative; z-index: 1;
    border: 3px solid rgba(201,168,76,0.25);
  }
  .about-photo-badge {
    position: absolute;
    bottom: -18px; left: -18px;
    z-index: 2;
    background: var(--gold);
    color: var(--navy-dark);
    padding: 12px 18px;
    border-radius: 14px;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.4;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  }
  .about-photo-badge strong { display: block; font-size: 15px; font-weight: 700; font-family: 'Playfair Display', serif; }

  /* ── WAVE DIVIDER ── */
  .about-wave { display: block; width: 100%; background: var(--navy); line-height: 0; }
  .about-wave svg { display: block; width: 100%; }

  /* ── ABOUT BODY ── */
  .about-body { background: var(--cream); padding: 80px 6vw 90px; }
  .about-body-inner {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start;
  }

  /* left: story */
  .about-story-label {
    font-size: 11px; font-weight: 500; letter-spacing: 0.12em;
    text-transform: uppercase; color: var(--gold); margin-bottom: 10px;
  }
  .about-story-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(24px, 2.4vw, 34px);
    font-weight: 700; color: var(--navy);
    line-height: 1.25; margin-bottom: 20px;
  }
  .about-story-text {
    font-size: 15px; color: var(--text-muted);
    line-height: 1.85; font-weight: 300; margin-bottom: 16px;
  }
  .about-story-points { display: flex; flex-direction: column; gap: 14px; margin-top: 28px; }
  .about-story-point {
    display: flex; align-items: flex-start; gap: 14px;
    background: var(--white); border: 1px solid rgba(12,69,99,0.08);
    border-radius: 12px; padding: 16px 18px;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .about-story-point:hover { border-color: rgba(12,69,99,0.2); box-shadow: 0 4px 16px rgba(12,69,99,0.06); }
  .about-point-icon {
    width: 36px; height: 36px; flex-shrink: 0;
    background: rgba(12,69,99,0.07); border-radius: 9px;
    display: flex; align-items: center; justify-content: center;
  }
  .about-point-icon svg { width: 18px; height: 18px; }
  .about-point-text { font-size: 14px; color: var(--text); line-height: 1.6; font-weight: 400; }
  .about-point-text strong { color: var(--navy); font-weight: 500; display: block; margin-bottom: 2px; font-size: 13px; }

  /* right: stat cards + contact */
  .about-right { display: flex; flex-direction: column; gap: 20px; }
  .about-stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .about-stat-card {
    background: var(--white); border: 1px solid rgba(12,69,99,0.09);
    border-radius: 14px; padding: 20px 18px;
    text-align: center;
  }
  .about-stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 32px; font-weight: 700; color: var(--navy); line-height: 1;
  }
  .about-stat-unit { font-size: 14px; color: var(--gold); font-weight: 500; }
  .about-stat-label { font-size: 12px; color: var(--text-muted); margin-top: 6px; font-weight: 300; line-height: 1.4; }

  /* values card */
  .about-values-card {
    background: var(--navy);
    border-radius: 18px; padding: 28px 26px;
  }
  .about-values-title {
    font-family: 'Playfair Display', serif;
    font-size: 18px; color: var(--white); font-weight: 600; margin-bottom: 18px;
  }
  .about-values-list { display: flex; flex-direction: column; gap: 12px; }
  .about-value-row { display: flex; align-items: center; gap: 12px; }
  .about-value-dot { width: 7px; height: 7px; background: var(--gold); border-radius: 50%; flex-shrink: 0; }
  .about-value-text { font-size: 14px; color: rgba(255,255,255,0.82); font-weight: 300; line-height: 1.5; }

  /* contact card */
  .about-contact-card {
    background: var(--white); border: 1px solid rgba(12,69,99,0.09);
    border-radius: 18px; padding: 26px;
    display: flex; align-items: center; gap: 20px;
  }
  .about-contact-icon-wrap {
    width: 54px; height: 54px; flex-shrink: 0;
    background: rgba(12,69,99,0.07); border-radius: 14px;
    display: flex; align-items: center; justify-content: center;
  }
  .about-contact-icon-wrap svg { width: 24px; height: 24px; }
  .about-contact-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); font-weight: 300; margin-bottom: 4px; }
  .about-contact-number {
    font-family: 'Playfair Display', serif;
    font-size: 22px; font-weight: 700; color: var(--navy);
    text-decoration: none; transition: color 0.2s;
  }
  .about-contact-number:hover { color: var(--gold); }
  .about-contact-sub { font-size: 12px; color: var(--text-muted); margin-top: 3px; font-weight: 300; }

  /* ── CTA STRIP ── */
  .about-cta-strip {
    background: var(--navy-dark); padding: 60px 6vw;
    display: flex; align-items: center; justify-content: space-between;
    flex-wrap: wrap; gap: 24px;
  }
  .about-cta-left { }
  .about-cta-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(20px, 2.2vw, 30px); color: var(--white);
    font-weight: 700; margin-bottom: 6px;
  }
  .about-cta-sub { font-size: 14px; color: rgba(255,255,255,0.55); font-weight: 300; }
  .about-cta-btn {
    background: var(--gold); color: var(--navy-dark);
    padding: 14px 32px; border-radius: 10px; border: none;
    font-size: 14px; font-weight: 500; cursor: pointer;
    font-family: 'DM Sans', sans-serif; transition: all 0.2s;
    white-space: nowrap; flex-shrink: 0;
  }
  .about-cta-btn:hover { background: var(--gold-light); transform: translateY(-1px); }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 860px) {
    .about-hero-inner { grid-template-columns: 1fr; }
    .about-hero-photo { display: none; }
    .about-hero-left { padding-bottom: 60px; }
    .about-body-inner { grid-template-columns: 1fr; }
    .about-cta-strip { flex-direction: column; align-items: flex-start; }
  }
  @media (max-width: 560px) {
    .about-stats-grid { grid-template-columns: 1fr; }
  }
`

export default function About() {
  return (
    <div className="about-root">
      <style>{styles}</style>

      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="about-hero-inner">
          <div className="about-hero-left">
            <div className="about-eyebrow">
              <span className="about-eyebrow-dot" />
              Meet Your Tutor
            </div>
            <h1 className="about-hero-title">
              About Your Tutor<br/>
              <em>Vaidheeshwari</em>
            </h1>
            <p className="about-hero-desc">
              Hi, I'm the founder of Vaidhee Design Academy — passionate about teaching fashion
              designing and tailoring, and dedicated to helping beginners become confident designers
              who can start their own boutique.
            </p>
            <div className="about-hero-contact">
              <div className="about-hero-contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <a href="tel:9943999854">9943999854</a>
            </div>
          </div>

          <div className="about-hero-photo">
            <div className="about-photo-frame">
              <img src={image} alt="Vaidheeshwari — Founder, Vaidhee Design Academy" />
              <div className="about-photo-badge">
                <strong>Vaidheeshwari</strong>
                Founder &amp; Lead Tutor
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave */}
      <div className="about-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 C360,60 1080,0 1440,40 L1440,0 Z" fill="#fdf8f2"/>
        </svg>
      </div>

      {/* ── BODY ── */}
      <section className="about-body">
        <div className="about-body-inner">

          {/* Left: story */}
          <div>
            <div className="about-story-label">My Story</div>
            <h2 className="about-story-title">Turning Passion Into<br/>Professional Craft</h2>
            <p className="about-story-text">
              I founded Vaidhee Design Academy with one simple belief — that anyone with the right
              guidance can become a skilled fashion designer. My teaching approach combines live
              practical sessions with structured theory, so students learn by doing.
            </p>
            <p className="about-story-text">
              Whether you're a complete beginner or someone who wants to formalize their skills, I'm
              here to walk you through every step — from your first stitch to launching your own boutique.
            </p>

            <div className="about-story-points">
              {[
                {
                  title: 'Fashion Designing',
                  desc: 'Comprehensive design theory and hands-on practical skills for beginners to advanced learners.',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#0c4563" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ),
                },
                {
                  title: 'Tailoring & Stitching',
                  desc: 'Master practical tailoring skills used in everyday boutique and fashion work.',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#0c4563" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/>
                      <line x1="6" y1="9" x2="6" y2="21"/>
                    </svg>
                  ),
                },
                {
                  title: 'Boutique Business Skills',
                  desc: 'Go beyond designing — learn how to set up, price, and run your own boutique confidently.',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="#0c4563" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  ),
                },
              ].map(({ title, desc, icon }, i) => (
                <div className="about-story-point" key={i}>
                  <div className="about-point-icon">{icon}</div>
                  <div className="about-point-text">
                    <strong>{title}</strong>
                    {desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="about-right">
            {/* Stats */}
            <div className="about-stats-grid">
              {[
                { num: '6', unit: 'Months', label: 'Comprehensive program duration' },
                { num: '4+1', unit: 'Days/Week', label: 'Live + theory classes weekly' },
                { num: '∞', unit: 'Access', label: 'Lifetime recording access' },
                { num: '100%', unit: 'Practical', label: 'Hands-on learning approach' },
              ].map(({ num, unit, label }, i) => (
                <div className="about-stat-card" key={i}>
                  <div className="about-stat-num">{num} <span className="about-stat-unit">{unit}</span></div>
                  <div className="about-stat-label">{label}</div>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="about-values-card">
              <div className="about-values-title">What I Believe In</div>
              <div className="about-values-list">
                {[
                  'Every beginner deserves professional-quality training',
                  'Learning is best when its practical and structured',
                  'Confidence grows when skills are truly mastered',
                  'Fashion is a career, not just a hobby — treat it that way',
                ].map((v, i) => (
                  <div className="about-value-row" key={i}>
                    <div className="about-value-dot" />
                    <div className="about-value-text">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact card */}
            <div className="about-contact-card">
              <div className="about-contact-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0c4563" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <div className="about-contact-label">Call / WhatsApp</div>
                <a className="about-contact-number" href="tel:9943999854">9943999854</a>
                <div className="about-contact-sub">Available Mon – Fri · 10 AM – 6 PM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <div className="about-cta-strip">
        <div className="about-cta-left">
          <div className="about-cta-title">Ready to start your fashion journey?</div>
          <div className="about-cta-sub">Join the May 4 batch — limited seats available.</div>
        </div>
        <button className="about-cta-btn">Enrol Now — ₹19,999</button>
      </div>
    </div>
  )
}