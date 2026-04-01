import React, { useEffect, useRef } from 'react'
import image from '../../assets/vaide.jpeg'
import ban from '../../assets/ban.png'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

  :root {
    --navy: #0c4563;
    --navy-dark: #082f45;
    --navy-light: #1a6080;
    --gold: #c9a84c;
    --gold-light: #e8c97a;
    --cream: #fdf8f2;
    --cream2: #f5ede0;
    --white: #ffffff;
    --text: #1a1a1a;
    --text-muted: #5c6170;
  }

  .vda-root * { box-sizing: border-box; margin: 0; padding: 0; }
  .vda-root { font-family: 'DM Sans', sans-serif; color: var(--text); background: var(--white); overflow-x: hidden; }

  /* ── NAV ── */
  .vda-nav {
    position: sticky; top: 0; z-index: 200;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(12,69,99,0.1);
    padding: 0 6vw; height: 72px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .vda-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
  .vda-logo-icon {
    width: 40px; height: 40px; border-radius: 10px;
    background: var(--navy);
    display: flex; align-items: center; justify-content: center;
  }
  .vda-logo-icon svg { width: 22px; height: 22px; }
  .vda-logo-text { font-family: 'Playfair Display', serif; font-size: 14px; font-weight: 700; color: var(--navy); line-height: 1.2; }
  .vda-logo-sub { font-size: 10px; font-weight: 300; color: var(--text-muted); letter-spacing: 0.08em; text-transform: uppercase; }
  .vda-nav-links { display: flex; gap: 30px; list-style: none; }
  .vda-nav-links a { text-decoration: none; font-size: 14px; color: var(--text-muted); transition: color 0.2s; }
  .vda-nav-links a:hover { color: var(--navy); }
  .vda-nav-btn {
    background: var(--navy); color: var(--white); border: none;
    padding: 10px 22px; border-radius: 8px; font-size: 13px;
    font-weight: 500; cursor: pointer; font-family: 'DM Sans', sans-serif;
    transition: background 0.2s;
  }
  .vda-nav-btn:hover { background: var(--navy-dark); }

  /* ── HERO ── */
  .vda-hero {
    min-height: 90vh;
    background: linear-gradient(135deg, #071e2c 0%, var(--navy) 50%, #1a6a90 100%);
    display: grid; grid-template-columns: 1fr 1fr;
    align-items: center; gap: 60px;
    padding: 80px 6vw; position: relative; overflow: hidden;
  }
  .vda-hero::before {
    content: ''; position: absolute; right: -120px; top: -120px;
    width: 550px; height: 550px;
    background: radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%);
    border-radius: 50%;
  }
  .vda-hero::after {
    content: ''; position: absolute; left: 25%; bottom: -80px;
    width: 320px; height: 320px;
    background: rgba(255,255,255,0.03); border-radius: 50%;
  }
  .vda-hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(201,168,76,0.15);
    border: 1px solid rgba(201,168,76,0.35);
    color: var(--gold-light);
    padding: 6px 16px; border-radius: 100px;
    font-size: 11px; font-weight: 500;
    letter-spacing: 0.08em; text-transform: uppercase;
    margin-bottom: 24px; animation: fadeUp 0.6s ease both;
  }
  .vda-hero-badge-dot { width: 6px; height: 6px; background: var(--gold); border-radius: 50%; }
  .vda-hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(34px, 3.8vw, 56px);
    font-weight: 700; color: var(--white); line-height: 1.15;
    margin-bottom: 20px;
    animation: fadeUp 0.6s 0.1s ease both;
  }
  .vda-hero-title em { color: var(--gold-light); font-style: italic; }
  .vda-hero-desc {
    font-size: 15px; color: rgba(255,255,255,0.72);
    line-height: 1.8; max-width: 460px;
    margin-bottom: 36px; font-weight: 300;
    animation: fadeUp 0.6s 0.2s ease both;
  }
  .vda-hero-actions { display: flex; gap: 12px; flex-wrap: wrap; animation: fadeUp 0.6s 0.3s ease both; }
  .vda-btn-gold {
    background: var(--gold); color: #071e2c;
    padding: 13px 30px; border-radius: 10px;
    font-size: 14px; font-weight: 500; border: none; cursor: pointer;
    font-family: 'DM Sans', sans-serif; transition: all 0.2s;
  }
  .vda-btn-gold:hover { background: var(--gold-light); transform: translateY(-1px); }
  .vda-btn-ghost {
    background: transparent; color: var(--white);
    padding: 13px 30px; border-radius: 10px; font-size: 14px;
    font-weight: 400; border: 1px solid rgba(255,255,255,0.3);
    cursor: pointer; font-family: 'DM Sans', sans-serif; transition: all 0.2s;
  }
  .vda-btn-ghost:hover { border-color: rgba(255,255,255,0.65); background: rgba(255,255,255,0.06); }
  .vda-hero-stats {
    display: flex; gap: 36px; margin-top: 50px;
    padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.1);
    animation: fadeUp 0.6s 0.4s ease both;
  }
  .vda-stat-num { font-family: 'Playfair Display', serif; font-size: 30px; font-weight: 700; color: var(--gold-light); }
  .vda-stat-label { font-size: 11px; color: rgba(255,255,255,0.5); margin-top: 2px; font-weight: 300; letter-spacing: 0.04em; }

  /* ── TUTOR CARD ── */
  .vda-tutor-wrap { display: flex; justify-content: center; align-items: center; position: relative; z-index: 1; animation: fadeUp 0.7s 0.2s ease both; }
  .vda-tutor-card {
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 24px; padding: 36px 30px;
    max-width: 360px; width: 100%; text-align: center;
    backdrop-filter: blur(6px);
  }
  .vda-tutor-img-wrap {
    
    margin: 0 auto 18px;
    border: 3px solid rgba(201,168,76,0.5);
    overflow: hidden; background: linear-gradient(135deg, var(--gold), var(--gold-light));
    display: flex; align-items: center; justify-content: center;
  }
  .vda-tutor-img-wrap img { width: 100%; height: 100%; object-fit: cover; }
  .vda-tutor-initials { font-family: 'Playfair Display', serif; font-size: 38px; color: var(--navy-dark); font-weight: 700; }
  .vda-tutor-name { font-family: 'Playfair Display', serif; font-size: 20px; color: var(--white); font-weight: 600; }
  .vda-tutor-role { font-size: 12px; color: var(--gold-light); margin-top: 4px; font-weight: 300; letter-spacing: 0.05em; }
  .vda-tutor-divider { height: 1px; background: rgba(255,255,255,0.1); margin: 20px 0; }
  .vda-tutor-points { text-align: left; display: flex; flex-direction: column; gap: 12px; }
  .vda-tutor-point { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: rgba(255,255,255,0.78); line-height: 1.55; font-weight: 300; }
  .vda-tp-dot { width: 6px; height: 6px; background: var(--gold); border-radius: 50%; flex-shrink: 0; margin-top: 5px; }

  /* ── BANNER ── */
  .vda-banner {
    position: relative; overflow: hidden;
    height: 220px; background: var(--cream2);
    display: flex; align-items: center; justify-content: center;
  }
  .vda-banner-img { width: 100%; height: 100%; object-fit: cover; opacity: 0.6; }
  .vda-banner-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(90deg, rgba(12,69,99,0.85) 0%, rgba(12,69,99,0.4) 100%);
    display: flex; align-items: center; padding: 0 6vw; gap: 48px; flex-wrap: wrap;
  }
  .vda-strip-item { display: flex; align-items: center; gap: 10px; font-size: 14px; color: rgba(255,255,255,0.9); }
  .vda-strip-icon { font-size: 18px; }
  .vda-strip-label { font-weight: 300; }
  .vda-strip-val { font-weight: 500; color: var(--gold-light); }

  /* ── SECTIONS ── */
  .vda-section { padding: 90px 6vw; }
  .vda-section-label {
    font-size: 11px; font-weight: 500; letter-spacing: 0.12em;
    text-transform: uppercase; color: var(--gold); margin-bottom: 10px;
  }
  .vda-section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(26px, 2.8vw, 40px);
    font-weight: 700; color: var(--navy); line-height: 1.25; margin-bottom: 14px;
  }
  .vda-section-sub { font-size: 15px; color: var(--text-muted); max-width: 500px; line-height: 1.75; font-weight: 300; margin-bottom: 50px; }

  /* ── COURSE GRID ── */
  .vda-course-grid { display: grid; grid-template-columns: 1fr 1.45fr; gap: 28px; align-items: start; }
  .vda-price-card {
    background: var(--white); border: 1px solid rgba(12,69,99,0.1);
    border-radius: 20px; overflow: hidden;
    box-shadow: 0 4px 28px rgba(12,69,99,0.08);
  }
  .vda-price-head { background: var(--navy); padding: 28px; }
  .vda-price-head-badge {
    display: inline-block; background: var(--gold);
    color: var(--navy-dark); font-size: 10px; font-weight: 500;
    padding: 4px 12px; border-radius: 100px;
    letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 12px;
  }
  .vda-price-head h3 { font-family: 'Playfair Display', serif; font-size: 20px; color: var(--white); font-weight: 700; margin-bottom: 4px; }
  .vda-price-head p { font-size: 12px; color: rgba(255,255,255,0.55); font-weight: 300; }
  .vda-price-body { padding: 24px 28px 28px; }
  .vda-price-row { display: flex; align-items: baseline; gap: 10px; margin-bottom: 22px; flex-wrap: wrap; }
  .vda-price-main { font-family: 'Playfair Display', serif; font-size: 34px; color: var(--navy); font-weight: 700; }
  .vda-price-slash { font-size: 18px; color: #bbb; text-decoration: line-through; font-weight: 300; }
  .vda-price-offer { font-size: 11px; background: #eef8f0; color: #277a3e; padding: 3px 10px; border-radius: 100px; font-weight: 500; }
  .vda-install-label { font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.07em; color: var(--text-muted); margin-bottom: 12px; }
  .vda-install-rows { display: flex; flex-direction: column; gap: 8px; margin-bottom: 22px; }
  .vda-install-row {
    display: flex; justify-content: space-between; align-items: center;
    font-size: 13px; padding: 10px 14px;
    background: var(--cream); border-radius: 9px;
  }
  .vda-install-row span:first-child { color: var(--text-muted); font-weight: 300; }
  .vda-install-row span:last-child { font-weight: 500; color: var(--navy); }
  .vda-enroll-btn {
    width: 100%; background: var(--navy); color: var(--white);
    border: none; padding: 14px; border-radius: 10px;
    font-size: 14px; font-weight: 500; cursor: pointer;
    font-family: 'DM Sans', sans-serif; transition: background 0.2s;
  }
  .vda-enroll-btn:hover { background: var(--navy-dark); }

  /* ── DETAIL CARDS ── */
  .vda-detail-cards { display: flex; flex-direction: column; gap: 18px; }
  .vda-detail-card {
    background: var(--white); border: 1px solid rgba(12,69,99,0.09);
    border-radius: 16px; padding: 22px 24px;
  }
  .vda-detail-title { font-size: 11px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 14px; }
  .vda-sched-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .vda-sched-item { background: var(--cream); border-radius: 10px; padding: 12px 14px; }
  .vda-sched-item-label { font-size: 10px; color: var(--text-muted); font-weight: 300; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.06em; }
  .vda-sched-item-val { font-size: 14px; font-weight: 500; color: var(--navy); }
  .vda-includes { display: flex; flex-direction: column; gap: 11px; }
  .vda-inc-row { display: flex; align-items: center; gap: 10px; font-size: 14px; color: var(--text); font-weight: 300; }
  .vda-inc-check {
    width: 20px; height: 20px; border-radius: 50%;
    background: var(--navy); flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
  }
  .vda-inc-check svg { width: 11px; height: 11px; }

  /* ── WHY SECTION ── */
  .vda-why { background: var(--cream); padding: 90px 6vw; }
  .vda-why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 50px; }
  .vda-why-card {
    background: var(--white); border: 1px solid rgba(12,69,99,0.08);
    border-radius: 16px; padding: 26px 22px;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .vda-why-card:hover { border-color: rgba(12,69,99,0.2); box-shadow: 0 4px 20px rgba(12,69,99,0.07); }
  .vda-why-icon {
    width: 46px; height: 46px; background: rgba(12,69,99,0.07);
    border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;
  }
  .vda-why-icon svg { width: 22px; height: 22px; }
  .vda-why-card h3 { font-family: 'Playfair Display', serif; font-size: 16px; color: var(--navy); font-weight: 600; margin-bottom: 8px; }
  .vda-why-card p { font-size: 13px; color: var(--text-muted); line-height: 1.65; font-weight: 300; }

  /* ── CTA ── */
  .vda-cta {
    background: var(--navy); padding: 80px 6vw;
    text-align: center; position: relative; overflow: hidden;
  }
  .vda-cta::before {
    content: ''; position: absolute; left: 50%; top: -120px;
    transform: translateX(-50%);
    width: 600px; height: 300px;
    background: radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%);
  }
  .vda-cta-label { font-size: 11px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); margin-bottom: 10px; }
  .vda-cta-title { font-family: 'Playfair Display', serif; font-size: clamp(24px, 2.8vw, 38px); color: var(--white); font-weight: 700; margin-bottom: 14px; }
  .vda-cta-sub { font-size: 15px; color: rgba(255,255,255,0.62); margin-bottom: 36px; font-weight: 300; }
  .vda-cta-actions { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }

  /* ── FOOTER ── */
  .vda-footer {
    background: #071e2c; padding: 36px 6vw;
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 14px;
    border-top: 1px solid rgba(255,255,255,0.05);
  }
  .vda-footer-brand { font-family: 'Playfair Display', serif; font-size: 14px; color: rgba(255,255,255,0.65); }
  .vda-footer-copy { font-size: 12px; color: rgba(255,255,255,0.35); }
  .vda-footer-links { display: flex; gap: 20px; }
  .vda-footer-links a { font-size: 12px; color: rgba(255,255,255,0.38); text-decoration: none; }
  .vda-footer-links a:hover { color: rgba(255,255,255,0.7); }

  /* ── ANIMATIONS ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 860px) {
    .vda-hero { grid-template-columns: 1fr; padding: 48px 5vw; }
    .vda-tutor-wrap { display: none; }
    .vda-course-grid { grid-template-columns: 1fr; }
    .vda-why-grid { grid-template-columns: 1fr 1fr; }
    .vda-sched-grid { grid-template-columns: 1fr; }
    .vda-nav-links { display: none; }
    .vda-banner-overlay { gap: 24px; }
  }
  @media (max-width: 560px) {
    .vda-why-grid { grid-template-columns: 1fr; }
    .vda-hero-stats { gap: 20px; }
  }
`

export default function Home() {
  return (
    <div className="vda-root">
      <style>{styles}</style>

      {/* ── HERO ── */}
      <section className="vda-hero">
        <div>
          <div className="vda-hero-badge">
            <span className="vda-hero-badge-dot" />
            Now Enrolling — May 4 Batch
          </div>
          <h1 className="vda-hero-title">
            Learn Fashion Design<br/>
            &amp; Start Your<br/>
            <em>Own Boutique</em>
          </h1>
          <p className="vda-hero-desc">
            A professional 6-month program designed to transform beginners into confident
            fashion designers — with live sessions, practical training, and lifetime access.
          </p>
          <div className="vda-hero-actions">
            <button className="vda-btn-gold">Enrol for ₹19,999</button>
            <button className="vda-btn-ghost">View Course Details</button>
          </div>
          <div className="vda-hero-stats">
            <div>
              <div className="vda-stat-num">6</div>
              <div className="vda-stat-label">Month Program</div>
            </div>
            <div>
              <div className="vda-stat-num">4+1</div>
              <div className="vda-stat-label">Days Per Week</div>
            </div>
            <div>
              <div className="vda-stat-num">∞</div>
              <div className="vda-stat-label">Lifetime Access</div>
            </div>
          </div>
        </div>

        {/* Tutor Card */}
        <div className="vda-tutor-wrap">
          <div className="vda-tutor-card">
            <div className="vda-tutor-img-wrap">
              <img src={image} alt="Vaidheeshwari" onError={e => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }} />
              <span className="vda-tutor-initials" style={{display:'none'}}>V</span>
            </div>
            <div className="vda-tutor-name">Vaidheeshwari</div>
            <div className="vda-tutor-role">Founder, Vaidhee Design Academy</div>
            <div className="vda-tutor-divider" />
            <div className="vda-tutor-points">
              <div className="vda-tutor-point"><div className="vda-tp-dot"/><span>Hi, I'm the founder of Vaidhee Design Academy</span></div>
              <div className="vda-tutor-point"><div className="vda-tp-dot"/><span>Passionate about teaching fashion designing &amp; tailoring</span></div>
              <div className="vda-tutor-point"><div className="vda-tp-dot"/><span>My goal is to help beginners become confident designers and start their own boutique</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BANNER IMAGE ── */}
      {/* <div className="vda-banner">
        <img src={ban} alt="Vaidhee Design Academy" className="vda-banner-img" />
        <div className="vda-banner-overlay">
          <div className="vda-strip-item">
            <span className="vda-strip-icon">📅</span>
            <span className="vda-strip-label">Starts&nbsp;</span>
            <span className="vda-strip-val">May 4, 2025</span>
          </div>
          <div className="vda-strip-item">
            <span className="vda-strip-icon">🕑</span>
            <span className="vda-strip-label">Timing&nbsp;</span>
            <span className="vda-strip-val">Mon–Fri · 2:00–4:00 PM</span>
          </div>
          <div className="vda-strip-item">
            <span className="vda-strip-icon">🎓</span>
            <span className="vda-strip-val">Beginner Friendly</span>
          </div>
          <div className="vda-strip-item">
            <span className="vda-strip-icon">💳</span>
            <span className="vda-strip-val">Easy Installments</span>
          </div>
        </div>
      </div> */}

      {/* ── COURSE ── */}
      <section className="vda-section">
        <div className="vda-section-label">Our Flagship Program</div>
        <h2 className="vda-section-title">6-Month Fashion Designing<br/>&amp; Boutique Skill Course</h2>
        <p className="vda-section-sub">Everything you need to go from zero to running your own fashion boutique — in just six months.</p>

        <div className="vda-course-grid">
          {/* Pricing card */}
          <div className="vda-price-card">
            <div className="vda-price-head">
              <div className="vda-price-head-badge">Most Popular</div>
              <h3>Fashion Designing &amp; Boutique</h3>
              <p>6-Month Comprehensive Course</p>
            </div>
            <div className="vda-price-body">
              <div className="vda-price-row">
                <span className="vda-price-main">₹19,999</span>
                <span className="vda-price-slash">₹20,999</span>
                <span className="vda-price-offer">Save ₹1,000 on full pay</span>
              </div>
              <div className="vda-install-label">Installment Plan</div>
              <div className="vda-install-rows">
                <div className="vda-install-row"><span>Before class starts</span><span>₹8,999</span></div>
                <div className="vda-install-row"><span>On or before June 1</span><span>₹5,500</span></div>
                <div className="vda-install-row"><span>On or before July 1</span><span>₹5,500</span></div>
              </div>
              <button className="vda-enroll-btn">Enrol Now →</button>
            </div>
          </div>

          {/* Detail cards */}
          <div className="vda-detail-cards">
            <div className="vda-detail-card">
              <div className="vda-detail-title">Schedule</div>
              <div className="vda-sched-grid">
                <div className="vda-sched-item"><div className="vda-sched-item-label">Start Date</div><div className="vda-sched-item-val">May 4, 2025</div></div>
                <div className="vda-sched-item"><div className="vda-sched-item-label">Class Days</div><div className="vda-sched-item-val">Mon – Fri</div></div>
                <div className="vda-sched-item"><div className="vda-sched-item-label">Timing</div><div className="vda-sched-item-val">2:00 – 4:00 PM</div></div>
                <div className="vda-sched-item"><div className="vda-sched-item-label">Duration</div><div className="vda-sched-item-val">6 Months</div></div>
              </div>
            </div>
            <div className="vda-detail-card">
              <div className="vda-detail-title">What's Included</div>
              <div className="vda-includes">
                {[
                  'Live practical sessions — 4 days per week',
                  'Friday pre-recorded theory classes',
                  'Lifetime access to all recordings',
                  'Boutique startup guidance & career support',
                  'Course completion certificate',
                ].map((item, i) => (
                  <div className="vda-inc-row" key={i}>
                    <div className="vda-inc-check">
                      <svg viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ── */}
      <section className="vda-why">
        <div className="vda-section-label">Why Choose Us</div>
        <h2 className="vda-section-title">Built for Aspiring<br/>Fashion Entrepreneurs</h2>
        <div className="vda-why-grid">
          {[
            {
              title: 'Expert-Led Learning',
              desc: 'Learn directly from Vaidheeshwari — a passionate educator with hands-on experience in fashion designing and boutique management.',
              icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
            },
            {
              title: 'Live + Recorded Classes',
              desc: 'Attend 4 live practical sessions every week. All classes are recorded — watch anytime, forever.',
              icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>,
            },
            {
              title: 'Career-Focused Curriculum',
              desc: 'From basic stitching to advanced design and boutique operations — every module is built to make you job-ready and business-ready.',
              icon: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></>,
            },
            {
              title: 'Affordable Fees',
              desc: 'Premium training at just ₹19,999 with flexible 3-part installments — making quality education accessible for everyone.',
              icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>,
            },
            {
              title: 'Flexible Timing',
              desc: 'Classes run Monday to Friday, 2–4 PM — ideal for homemakers, students, and working professionals.',
              icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
            },
            {
              title: 'Certified Completion',
              desc: 'Earn a recognized certificate that validates your skills for boutique launches, job applications, and freelance work.',
              icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>,
            },
          ].map(({ title, desc, icon }, i) => (
            <div className="vda-why-card" key={i}>
              <div className="vda-why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0c4563" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="vda-cta">
        <div className="vda-cta-label">Limited Seats Available</div>
        <h2 className="vda-cta-title">Begin Your Fashion Journey This May</h2>
        <p className="vda-cta-sub">Seats are filling fast. Reserve your spot before the May 4 batch closes.</p>
        <div className="vda-cta-actions">
          <button className="vda-btn-gold">Enrol Now — ₹19,999</button>
          <button className="vda-btn-ghost">Contact Us for Details</button>
        </div>
      </section>


    </div>
  )
}