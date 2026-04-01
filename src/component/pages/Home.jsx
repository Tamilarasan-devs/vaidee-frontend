import React, { useState } from 'react'
import image from '../../assets/vaide.jpeg'
import ban from '../../assets/ban.png'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap');

  :root {
    --navy:       #0c4563;
    --navy-dark:  #071e2c;
    --navy-mid:   #0e5278;
    --gold:       #c9a84c;
    --gold-light: #e8c97a;
    --gold-pale:  #f7edd2;
    --cream:      #fdf9f4;
    --cream2:     #f5ede0;
    --white:      #ffffff;
    --text:       #1a1a1a;
    --muted:      #6b7280;
    --border:     rgba(12,69,99,0.1);
  }

  .hw * , .hw *::before, .hw *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .hw {
    font-family: 'Outfit', sans-serif;
    color: var(--text);
    background: var(--white);
    overflow-x: hidden;
    line-height: 1;
  }

  /* ─────── HERO ─────── */
  .hw-hero {
    min-height: 100svh;
    background: var(--navy-dark);
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    position: relative;
    overflow: hidden;
  }
  .hw-hero::before {
    content: '';
    position: absolute; inset: 0; z-index: 0;
    background:
      radial-gradient(ellipse 70% 60% at 110% 50%, rgba(12,69,99,0.9) 0%, transparent 65%),
      radial-gradient(ellipse 50% 80% at -10% 80%, rgba(201,168,76,0.05) 0%, transparent 60%);
    pointer-events: none;
  }
  .hw-hero-deco {
    position: absolute; inset: 0; z-index: 0; pointer-events: none; overflow: hidden;
  }
  .hw-hero-deco span {
    position: absolute; 
    border: 1px solid rgba(201,168,76,0.1);
  }
  .hw-hero-deco span:nth-child(1) { width: 620px; height: 620px; right: -170px; top: -170px; }
  .hw-hero-deco span:nth-child(2) { width: 400px; height: 400px; right: 50px; top: 50px; border-color: rgba(201,168,76,0.06); }
  .hw-hero-deco span:nth-child(3) { width: 160px; height: 160px; left: 43%; bottom: 70px; border-color: rgba(255,255,255,0.04); }

  .hw-hero-left {
    padding: 100px 60px 80px 7vw;
    display: flex; flex-direction: column; justify-content: center;
    position: relative; z-index: 1;
  }
  .hw-pill {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(201,168,76,0.12);
    border: 1px solid rgba(201,168,76,0.28);
    color: var(--gold-light);
    padding: 6px 16px 6px 8px; border-radius: 100px;
    font-size: 11px; font-weight: 500; letter-spacing: 0.09em; text-transform: uppercase;
    width: fit-content; margin-bottom: 28px;
    animation: slideUp 0.7s 0.1s both;
  }
  .hw-pill-pulse {
    width: 22px; height: 22px; border-radius: 50%;
    background: rgba(201,168,76,0.18);
    display: flex; align-items: center; justify-content: center;
  }
  .hw-pill-pulse::after {
    content: ''; width: 8px; height: 8px; border-radius: 50%;
    background: var(--gold); box-shadow: 0 0 8px var(--gold);
  }
  .hw-hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(40px, 4.5vw, 66px);
    font-weight: 700; color: var(--white); line-height: 1.1;
    margin-bottom: 24px;
    animation: slideUp 0.7s 0.2s both;
  }
  .hw-hero-title em { color: var(--gold-light); font-style: italic; display: block; }
  .hw-hero-desc {
    font-size: 16px; color: rgba(255,255,255,0.62);
    line-height: 1.8; max-width: 440px;
    margin-bottom: 40px; font-weight: 300;
    animation: slideUp 0.7s 0.3s both;
  }
  .hw-hero-btns {
    display: flex; gap: 12px; flex-wrap: wrap;
    margin-bottom: 56px;
    animation: slideUp 0.7s 0.4s both;
  }
  .hw-btn-gold {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--gold); color: var(--navy-dark);
    padding: 14px 28px; border-radius: 12px;
    font-size: 14px; font-weight: 600; border: none; cursor: pointer;
    font-family: 'Outfit', sans-serif; transition: all 0.25s; letter-spacing: 0.02em;
  }
  .hw-btn-gold:hover { background: var(--gold-light); transform: translateY(-2px); box-shadow: 0 10px 28px rgba(201,168,76,0.28); }
  .hw-btn-gold svg { width: 15px; height: 15px; transition: transform 0.2s; }
  .hw-btn-gold:hover svg { transform: translateX(3px); }
  .hw-btn-ghost {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(255,255,255,0.05); color: rgba(255,255,255,0.82);
    padding: 14px 28px; border-radius: 12px; font-size: 14px;
    font-weight: 400; border: 1px solid rgba(255,255,255,0.18);
    cursor: pointer; font-family: 'Outfit', sans-serif; transition: all 0.25s;
  }
  .hw-btn-ghost:hover { border-color: rgba(255,255,255,0.45); background: rgba(255,255,255,0.09); }

  .hw-stats {
    display: flex;
    border-top: 1px solid rgba(255,255,255,0.08);
    padding-top: 40px;
    animation: slideUp 0.7s 0.5s both;
  }
  .hw-stat { flex: 1; }
  .hw-stat + .hw-stat { border-left: 1px solid rgba(255,255,255,0.08); padding-left: 28px; }
  .hw-stat:not(:last-child) { padding-right: 28px; }
  .hw-stat-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 38px; font-weight: 700; color: var(--gold-light); line-height: 1; margin-bottom: 6px;
  }
  .hw-stat-lbl { font-size: 11px; color: rgba(255,255,255,0.38); font-weight: 300; letter-spacing: 0.07em; text-transform: uppercase; }

  /* Hero right */
  .hw-hero-right {
    position: relative; z-index: 1;
    display: flex; align-items: center; justify-content: center;
    padding: 80px 7vw 80px 40px;
  }
  .hw-tutor-frame { position: relative; width: 100%; max-width: 390px; }
  .hw-tutor-frame::before {
    content: '';
    position: absolute; width: 260px; height: 260px;
    background: rgba(201,168,76,0.06); border-radius: 40px;
    top: -30px; right: -28px; transform: rotate(14deg); z-index: 0;
  }
  .hw-tutor-card {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.11);
    border-radius: 28px; padding: 36px 30px 30px;
    backdrop-filter: blur(20px);
    position: relative; z-index: 1;
    animation: slideUp 0.8s 0.3s both;
  }
  .hw-photo-ring {
    width: 500; height: 100%; border-radius: 30%;
    margin: 0 auto 20px;
    position: relative;
  }
  .hw-photo-ring::before {
    content: '';
    position: absolute; inset: -4px; border-radius: 50%;
    background: conic-gradient(var(--gold) 0deg, rgba(201,168,76,0.1) 180deg, var(--gold) 360deg);
    z-index: 0;
  }
  .hw-photo-inner {
    position: relative; z-index: 1;
    width: 100%; height: 100%; border-radius: 50%;
    overflow: hidden;
    background: linear-gradient(135deg, var(--gold), var(--gold-light));
    display: flex; align-items: center; justify-content: center;
    border: 3px solid var(--navy-dark);
  }
  .hw-photo-inner img { width: 100%; height: 100%; object-fit: cover; }
  .hw-photo-initials {
    font-family: 'Cormorant Garamond', serif;
    font-size: 42px; color: var(--navy-dark); font-weight: 700;
  }
  .hw-tutor-badge-row { text-align: center; margin-bottom: 8px; }
  .hw-tutor-badge {
    display: inline-flex; align-items: center; gap: 5px;
    background: rgba(201,168,76,0.14); border: 1px solid rgba(201,168,76,0.28);
    color: var(--gold-light); font-size: 10px; font-weight: 500;
    padding: 4px 12px; border-radius: 100px; letter-spacing: 0.07em; text-transform: uppercase;
  }
  .hw-tutor-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 24px; color: var(--white); font-weight: 600;
    text-align: center; margin-bottom: 2px;
  }
  .hw-tutor-role { font-size: 11px; color: rgba(255,255,255,0.4); text-align: center; font-weight: 300; letter-spacing: 0.05em; }
  .hw-tutor-sep { height: 1px; background: rgba(255,255,255,0.07); margin: 20px 0; }
  .hw-tutor-pts { display: flex; flex-direction: column; gap: 12px; }
  .hw-tutor-pt { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: rgba(255,255,255,0.68); line-height: 1.55; font-weight: 300; }
  .hw-pt-icon {
    width: 24px; height: 24px; border-radius: 7px;
    background: rgba(201,168,76,0.14);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0; margin-top: 1px; font-size: 12px;
  }
  .hw-float {
    position: absolute;
    background: var(--white); border-radius: 14px; padding: 12px 16px;
    box-shadow: 0 12px 40px rgba(0,0,0,0.18);
    display: flex; align-items: center; gap: 10px;
    animation: floatBob 3.5s ease-in-out infinite; z-index: 2;
  }
  .hw-float-1 { bottom: -18px; left: -28px; animation-delay: 0s; }
  .hw-float-2 { top: 18px; right: -28px; animation-delay: 1.8s; }
  .hw-float-icon { width: 34px; height: 34px; border-radius: 9px; background: var(--gold-pale); display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; }
  .hw-float-num { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 700; color: var(--navy); line-height: 1; }
  .hw-float-lbl { font-size: 11px; color: var(--muted); }

  @keyframes floatBob {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(-7px); }
  }

  /* ─────── BANNER ─────── */
  .hw-banner {
    position: relative; overflow: hidden;
    height: 280px; background: var(--navy-dark);
  }
  .hw-banner-img { width: 100%; height: 100%; object-fit: cover; opacity: 0.22; }
  .hw-banner-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(105deg, rgba(7,30,44,0.97) 0%, rgba(12,69,99,0.7) 55%, transparent 100%);
    display: flex; align-items: center; padding: 0 7vw;
  }
  .hw-banner-content { max-width: 620px; }
  .hw-banner-eyebrow { font-size: 11px; color: var(--gold); font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px; }
  .hw-banner-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(24px, 3vw, 40px); color: var(--white); font-weight: 700;
    margin-bottom: 20px; line-height: 1.2;
  }
  .hw-banner-chips { display: flex; gap: 10px; flex-wrap: wrap; }
  .hw-chip {
    display: flex; align-items: center; gap: 7px;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    color: rgba(255,255,255,0.82);
    padding: 7px 14px; border-radius: 100px; font-size: 12px; font-weight: 400;
  }

  /* ─────── SECTIONS ─────── */
  .hw-section { padding: 96px 7vw; }
  .hw-sec-eyebrow {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 11px; font-weight: 600; letter-spacing: 0.13em;
    text-transform: uppercase; color: var(--gold); margin-bottom: 14px;
  }
  .hw-sec-eyebrow::before { content: ''; width: 28px; height: 2px; background: var(--gold); border-radius: 2px; }
  .hw-sec-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(30px, 3vw, 46px); font-weight: 700;
    color: var(--navy); line-height: 1.2; margin-bottom: 16px;
  }
  .hw-sec-sub { font-size: 15px; color: var(--muted); max-width: 500px; line-height: 1.75; font-weight: 300; margin-bottom: 56px; }

  /* Course layout */
  .hw-course-layout { display: grid; grid-template-columns: 360px 1fr; gap: 32px; align-items: start; }

  /* Price card */
  .hw-price-card {
    border-radius: 24px; overflow: hidden;
    box-shadow: 0 8px 48px rgba(12,69,99,0.12);
    border: 1px solid var(--border);
    position: sticky; top: 90px;
  }
  .hw-price-head {
    background: linear-gradient(145deg, var(--navy) 0%, var(--navy-mid) 100%);
    padding: 32px 28px; position: relative; overflow: hidden;
  }
  .hw-price-head::after {
    content: ''; position: absolute;
    right: -70px; bottom: -70px;
    width: 200px; height: 200px; border-radius: 50%;
    background: rgba(255,255,255,0.04);
  }
  .hw-price-badge {
    display: inline-block; background: var(--gold); color: var(--navy-dark);
    font-size: 10px; font-weight: 700; padding: 4px 14px; border-radius: 100px;
    letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 14px;
  }
  .hw-price-head h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px; color: var(--white); font-weight: 700; margin-bottom: 4px;
  }
  .hw-price-head p { font-size: 12px; color: rgba(255,255,255,0.48); font-weight: 300; }
  .hw-price-body { background: var(--white); padding: 28px; }
  .hw-price-amt-row { display: flex; align-items: baseline; gap: 10px; margin-bottom: 6px; flex-wrap: wrap; }
  .hw-price-main {
    font-family: 'Cormorant Garamond', serif;
    font-size: 42px; font-weight: 700; color: var(--navy); line-height: 1;
  }
  .hw-price-old { font-size: 18px; color: #ccc; text-decoration: line-through; font-weight: 300; }
  .hw-price-save { font-size: 11px; background: #ecfdf5; color: #065f46; padding: 3px 10px; border-radius: 100px; font-weight: 600; }
  .hw-price-note { font-size: 12px; color: var(--muted); margin-bottom: 24px; font-weight: 300; }
  .hw-install-hd {
    font-size: 10px; font-weight: 600; text-transform: uppercase;
    letter-spacing: 0.1em; color: var(--muted); margin-bottom: 10px;
  }
  .hw-install-list { display: flex; flex-direction: column; gap: 8px; margin-bottom: 24px; }
  .hw-install-row {
    display: flex; justify-content: space-between; align-items: center;
    padding: 11px 14px; background: var(--cream); border-radius: 10px; font-size: 13px;
  }
  .hw-install-row span:first-child { color: var(--muted); font-weight: 300; }
  .hw-install-row span:last-child { font-weight: 600; color: var(--navy); }
  .hw-enroll-btn {
    width: 100%;
    background: linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%);
    color: var(--white); border: none; padding: 15px;
    border-radius: 12px; font-size: 14px; font-weight: 600;
    cursor: pointer; font-family: 'Outfit', sans-serif;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    transition: all 0.25s; letter-spacing: 0.02em;
  }
  .hw-enroll-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(12,69,99,0.28); }
  .hw-enroll-btn svg { width: 15px; height: 15px; }

  /* Detail cards */
  .hw-detail-col { display: flex; flex-direction: column; gap: 20px; }
  .hw-detail-card {
    background: var(--white); border: 1px solid var(--border);
    border-radius: 20px; padding: 28px;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .hw-detail-card:hover { border-color: rgba(12,69,99,0.18); box-shadow: 0 4px 24px rgba(12,69,99,0.06); }
  .hw-card-hd {
    display: flex; align-items: center; gap: 10px;
    font-size: 10px; font-weight: 600; text-transform: uppercase;
    letter-spacing: 0.1em; color: var(--muted); margin-bottom: 20px;
  }
  .hw-card-hd-line { flex: 1; height: 1px; background: var(--border); }

  .hw-sched-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
  .hw-sched-cell {
    background: var(--cream); border-radius: 12px; padding: 14px;
    text-align: center; border: 1px solid rgba(12,69,99,0.05);
  }
  .hw-sched-cell-lbl { font-size: 10px; color: var(--muted); font-weight: 400; text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 6px; }
  .hw-sched-cell-val { font-size: 14px; font-weight: 600; color: var(--navy); line-height: 1.3; }

  .hw-includes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .hw-inc-item {
    display: flex; align-items: flex-start; gap: 10px;
    padding: 14px; background: var(--cream); border-radius: 12px;
    font-size: 13px; color: var(--text); font-weight: 400; line-height: 1.5;
    border: 1px solid rgba(12,69,99,0.04);
  }
  .hw-inc-check {
    width: 22px; height: 22px; border-radius: 7px;
    background: var(--navy); flex-shrink: 0;
    display: flex; align-items: center; justify-content: center; margin-top: 1px;
  }
  .hw-inc-check svg { width: 11px; height: 11px; }

  /* ─────── WHY SECTION ─────── */
  .hw-why { background: var(--cream); padding: 96px 7vw; }
  .hw-why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 56px; }
  .hw-why-card {
    background: var(--white); border: 1px solid var(--border);
    border-radius: 20px; padding: 30px 26px;
    transition: all 0.3s; cursor: default;
    position: relative; overflow: hidden;
  }
  .hw-why-card::after {
    content: ''; position: absolute; bottom: 0; left: 0;
    width: 100%; height: 3px;
    background: linear-gradient(90deg, var(--gold), var(--gold-light));
    transform: scaleX(0); transform-origin: left; transition: transform 0.3s;
  }
  .hw-why-card:hover { border-color: rgba(12,69,99,0.14); box-shadow: 0 8px 32px rgba(12,69,99,0.09); transform: translateY(-3px); }
  .hw-why-card:hover::after { transform: scaleX(1); }
  .hw-why-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 52px; font-weight: 700;
    color: rgba(12,69,99,0.05); line-height: 1;
    position: absolute; top: 14px; right: 18px;
  }
  .hw-why-icon {
    width: 48px; height: 48px;
    background: linear-gradient(135deg, rgba(12,69,99,0.08), rgba(12,69,99,0.04));
    border-radius: 14px; display: flex; align-items: center; justify-content: center;
    margin-bottom: 18px; border: 1px solid rgba(12,69,99,0.07);
  }
  .hw-why-icon svg { width: 22px; height: 22px; }
  .hw-why-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 19px; color: var(--navy); font-weight: 700; margin-bottom: 10px;
  }
  .hw-why-desc { font-size: 13px; color: var(--muted); line-height: 1.7; font-weight: 300; }

  /* ─────── CTA ─────── */
  .hw-cta {
    background: linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%);
    padding: 100px 7vw; text-align: center; position: relative; overflow: hidden;
  }
  .hw-cta::before {
    content: ''; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
    width: 800px; height: 400px;
    background: radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 65%);
  }
  .hw-cta-inner { position: relative; z-index: 1; max-width: 600px; margin: 0 auto; }
  .hw-cta-eyebrow { font-size: 11px; font-weight: 600; letter-spacing: 0.13em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; }
  .hw-cta-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(28px, 3.5vw, 50px); color: var(--white); font-weight: 700;
    margin-bottom: 16px; line-height: 1.2;
  }
  .hw-cta-sub { font-size: 16px; color: rgba(255,255,255,0.58); margin-bottom: 40px; font-weight: 300; line-height: 1.7; }
  .hw-cta-btns { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; }
  .hw-cta-note { margin-top: 20px; font-size: 12px; color: rgba(255,255,255,0.3); font-weight: 300; }

  /* ─────── FOOTER ─────── */
  .hw-footer {
    background: #040f17; padding: 40px 7vw;
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 16px;
    border-top: 1px solid rgba(255,255,255,0.04);
  }
  .hw-footer-brand {
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px; color: rgba(255,255,255,0.6); font-weight: 600;
  }
  .hw-footer-copy { font-size: 12px; color: rgba(255,255,255,0.28); font-weight: 300; }
  .hw-footer-links { display: flex; gap: 22px; }
  .hw-footer-links a { font-size: 12px; color: rgba(255,255,255,0.3); text-decoration: none; transition: color 0.2s; }
  .hw-footer-links a:hover { color: rgba(255,255,255,0.7); }

  /* ─────── ANIMATIONS ─────── */
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ─────── RESPONSIVE ─────── */
  @media (max-width: 1080px) {
    .hw-course-layout { grid-template-columns: 1fr; }
    .hw-price-card { position: static; }
    .hw-sched-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 860px) {
    .hw-hero { grid-template-columns: 1fr; min-height: auto; }
    .hw-hero-left { padding: 80px 6vw 56px; }
    .hw-hero-right { display: none; }
    .hw-why-grid { grid-template-columns: repeat(2, 1fr); }
    .hw-includes-grid { grid-template-columns: 1fr; }
    .hw-stats { flex-wrap: wrap; }
    .hw-stat { border: none !important; padding: 0 !important; }
    .hw-stats { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; padding-top: 36px; }
    .hw-banner { height: auto; }
    .hw-banner-overlay { padding: 52px 6vw; }
  }
  @media (max-width: 600px) {
    .hw-hero-left { padding: 64px 5vw 48px; }
    .hw-why-grid { grid-template-columns: 1fr; }
    .hw-sched-grid { grid-template-columns: repeat(2, 1fr); }
    .hw-hero-btns { flex-direction: column; }
    .hw-btn-gold, .hw-btn-ghost { width: 100%; justify-content: center; }
    .hw-stats { grid-template-columns: repeat(3,1fr); }
    .hw-section, .hw-why { padding: 64px 5vw; }
    .hw-cta { padding: 72px 5vw; }
    .hw-footer { flex-direction: column; align-items: flex-start; gap: 12px; }
    .hw-banner-chips { gap: 8px; }
  }
  @media (max-width: 380px) {
    .hw-stats { grid-template-columns: 1fr; }
    .hw-banner-chips { flex-direction: column; }
  }
`

const whyCards = [
  {
    title: 'Expert-Led Learning',
    desc: 'Learn directly from Vaidheeshwari — hands-on experience in fashion design and boutique management.',
    icon: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
  },
  {
    title: 'Live + Recorded Classes',
    desc: 'Attend 4 live practical sessions weekly. Every class recorded — watch anytime, forever.',
    icon: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>,
  },
  {
    title: 'Career-Focused',
    desc: 'From basic stitching to advanced boutique operations — go from zero to business-ready in 6 months.',
    icon: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></>,
  },
  {
    title: 'Affordable Fees',
    desc: 'Premium training at just ₹19,999 with easy 3-part installments — quality education for all.',
    icon: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></>,
  },
  {
    title: 'Flexible Timing',
    desc: 'Classes Mon–Fri, 2–4 PM — perfect for homemakers, students, and working professionals.',
    icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
  },
  {
    title: 'Certified Completion',
    desc: 'Earn a recognized certificate for boutique launches, job applications, and freelance work.',
    icon: <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>,
  },
]

const ArrowRight = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width:15,height:15}}>
    <path d="M3 8h10M9 4l4 4-4 4"/>
  </svg>
)

export default function Home() {
  const [imgErr, setImgErr] = useState(false)

  return (
    <div className="hw">
      <style>{styles}</style>

      {/* ── HERO ── */}
      <section className="hw-hero">
        <div className="hw-hero-deco"><span/><span/><span/></div>

        <div className="hw-hero-left">
          <div className="hw-pill">
            <div className="hw-pill-pulse"/>
            Now Enrolling — May 4 Batch
          </div>
          <h1 className="hw-hero-title">
            Learn Fashion<br/>Design &amp; Start<br/>
            <em>Your Own Boutique</em>
          </h1>
          <p className="hw-hero-desc">
            A professional 6-month program designed to transform beginners into confident
            fashion designers — with live sessions, practical training, and lifetime access.
          </p>
          <div className="hw-hero-btns">
            <button className="hw-btn-gold">Enrol for ₹19,999 <ArrowRight/></button>
            <button className="hw-btn-ghost">View Course Details</button>
          </div>
          <div className="hw-stats">
            <div className="hw-stat"><div className="hw-stat-num">6</div><div className="hw-stat-lbl">Month Program</div></div>
            <div className="hw-stat"><div className="hw-stat-num">4+1</div><div className="hw-stat-lbl">Days Per Week</div></div>
            <div className="hw-stat"><div className="hw-stat-num">∞</div><div className="hw-stat-lbl">Lifetime Access</div></div>
          </div>
        </div>

        <div className="hw-hero-right">
          <div className="hw-tutor-frame">
            <div className="hw-float hw-float-1">
              <div className="hw-float-icon">🎓</div>
              <div><div className="hw-float-num">100%</div><div className="hw-float-lbl">Beginner Friendly</div></div>
            </div>
            <div className="hw-float hw-float-2">
              <div className="hw-float-icon">✂️</div>
              <div><div className="hw-float-num">Live</div><div className="hw-float-lbl">Practical Sessions</div></div>
            </div>

            <div className="hw-tutor-card">
              <div className="hw-photo-ring">
                <div className="hw-photo-inner">
                  {!imgErr
                    ? <img src={image} alt="Vaidheeshwari" onError={() => setImgErr(true)}/>
                    : <span className="hw-photo-initials">V</span>
                  }
                </div>
              </div>
              <div className="hw-tutor-badge-row">
                <span className="hw-tutor-badge">⭐ Your Tutor</span>
              </div>
              <div className="hw-tutor-name">Vaidheeshwari</div>
              <div className="hw-tutor-role">Founder, Vaidhee Design Academy</div>
              <div className="hw-tutor-sep"/>
              <div className="hw-tutor-pts">
                {[
                  { icon: '👋', text: 'Founder of Vaidhee Design Academy' },
                  { icon: '✂️', text: 'Passionate about fashion designing & tailoring' },
                  { icon: '🎯', text: 'Helps beginners launch their own boutiques' },
                ].map(({ icon, text }, i) => (
                  <div className="hw-tutor-pt" key={i}>
                    <div className="hw-pt-icon">{icon}</div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BANNER ── */}
      <div className="hw-banner">
        <img src={ban} alt="Vaidhee Design Academy" className="hw-banner-img"/>
        <div className="hw-banner-overlay">
          <div className="hw-banner-content">
            <div className="hw-banner-eyebrow">New Batch · May 2025</div>
            <div className="hw-banner-title">Fashion Designing &amp; Boutique Skill Course</div>
            <div className="hw-banner-chips">
              <div className="hw-chip">📅 Starts May 4</div>
              <div className="hw-chip">🕑 Mon–Fri · 2–4 PM</div>
              <div className="hw-chip">🎓 Beginner Friendly</div>
              <div className="hw-chip">💳 Easy Installments</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── COURSE ── */}
      <section className="hw-section">
        <div className="hw-sec-eyebrow">Our Flagship Program</div>
        <h2 className="hw-sec-title">6-Month Fashion Designing<br/>&amp; Boutique Skill Course</h2>
        <p className="hw-sec-sub">Everything you need to go from zero to running your own fashion boutique — in just six months.</p>

        <div className="hw-course-layout">
          <div className="hw-price-card">
            <div className="hw-price-head">
              <div className="hw-price-badge">Most Popular</div>
              <h3>Fashion Designing &amp; Boutique</h3>
              <p>6-Month Comprehensive Course</p>
            </div>
            <div className="hw-price-body">
              <div className="hw-price-amt-row">
                <span className="hw-price-main">₹19,999</span>
                <span className="hw-price-old">₹20,999</span>
              </div>
              <div style={{marginBottom:6}}><span className="hw-price-save">🎁 Save ₹1,000 on full payment</span></div>
              <p className="hw-price-note">Or pay in easy installments below</p>
              <div className="hw-install-hd">Installment Plan</div>
              <div className="hw-install-list">
                <div className="hw-install-row"><span>Before class starts</span><span>₹8,999</span></div>
                <div className="hw-install-row"><span>On or before June 1</span><span>₹5,500</span></div>
                <div className="hw-install-row"><span>On or before July 1</span><span>₹5,500</span></div>
              </div>
              <button className="hw-enroll-btn">Enrol Now <ArrowRight/></button>
            </div>
          </div>

          <div className="hw-detail-col">
            <div className="hw-detail-card">
              <div className="hw-card-hd">Schedule <div className="hw-card-hd-line"/></div>
              <div className="hw-sched-grid">
                {[
                  { l: 'Start Date', v: 'May 4, 2025' },
                  { l: 'Class Days', v: 'Mon – Fri' },
                  { l: 'Timing',     v: '2:00 – 4:00 PM' },
                  { l: 'Duration',   v: '6 Months' },
                ].map(({ l, v }) => (
                  <div className="hw-sched-cell" key={l}>
                    <div className="hw-sched-cell-lbl">{l}</div>
                    <div className="hw-sched-cell-val">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hw-detail-card">
              <div className="hw-card-hd">What's Included <div className="hw-card-hd-line"/></div>
              <div className="hw-includes-grid">
                {[
                  'Live practical sessions — 4 days per week',
                  'Friday pre-recorded theory classes',
                  'Lifetime access to all recordings',
                  'Boutique startup guidance & career support',
                  'Course completion certificate',
                  'Dedicated mentor support throughout',
                ].map((item, i) => (
                  <div className="hw-inc-item" key={i}>
                    <div className="hw-inc-check">
                      <svg viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
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
      <section className="hw-why">
        <div className="hw-sec-eyebrow">Why Choose Us</div>
        <h2 className="hw-sec-title">Built for Aspiring<br/>Fashion Entrepreneurs</h2>
        <div className="hw-why-grid">
          {whyCards.map(({ title, desc, icon }, i) => (
            <div className="hw-why-card" key={i}>
              <div className="hw-why-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="hw-why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="#0c4563" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>
              </div>
              <div className="hw-why-title">{title}</div>
              <div className="hw-why-desc">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="hw-cta">
        <div className="hw-cta-inner">
          <div className="hw-cta-eyebrow">⚡ Limited Seats Available</div>
          <h2 className="hw-cta-title">Begin Your Fashion Journey This May</h2>
          <p className="hw-cta-sub">
            Seats are filling fast for the May 4 batch.<br/>
            Secure your spot today and start building your dream boutique.
          </p>
          <div className="hw-cta-btns">
            <button className="hw-btn-gold">Enrol Now — ₹19,999 <ArrowRight/></button>
            <button className="hw-btn-ghost">Contact Us for Details</button>
          </div>
          <p className="hw-cta-note">No commitment — reach out and we'll answer all your questions</p>
        </div>
      </section>

    </div>
  )
}