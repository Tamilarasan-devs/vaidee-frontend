import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import logo from "../../assets/logo.png.jpg";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Admission Form", path: "/admission" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Gallery", path: "/gallery" },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap');

  .hdr-root {
    font-family: 'DM Sans', sans-serif;
    position: sticky;
    top: 0;
    z-index: 200;
    width: 100%;
  }

  /* ── TOP ANNOUNCEMENT BAR ── */
  .hdr-topbar {
    background: #c9a84c;
    color: #071e2c;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
    padding: 7px 16px;
    letter-spacing: 0.04em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .hdr-topbar-dot {
    width: 5px; height: 5px;
    background: #071e2c;
    border-radius: 50%;
    opacity: 0.5;
  }

  /* ── MAIN HEADER ── */
  .hdr-main {
    background: #0c4563;
    transition: box-shadow 0.3s, background 0.3s;
  }
  .hdr-main.scrolled {
    background: rgba(7,30,44,0.97);
    backdrop-filter: blur(16px);
    box-shadow: 0 2px 24px rgba(0,0,0,0.25);
  }
  .hdr-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 32px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }

  /* ── LOGO ── */
  .hdr-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    flex-shrink: 0;
  }
  .hdr-logo-img-wrap {
    width: 48px; height: 48px;
    border-radius: 12px;
    overflow: hidden;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  .hdr-logo-img-wrap img {
    width: 100%; height: 100%; object-fit: cover;
  }
  .hdr-logo-fallback {
    font-family: 'Playfair Display', serif;
    font-size: 20px; font-weight: 700;
    color: #c9a84c;
  }
  .hdr-logo-text { line-height: 1.2; }
  .hdr-logo-name {
    font-family: 'Playfair Display', serif;
    font-size: 15px; font-weight: 700;
    color: #ffffff;
    white-space: nowrap;
  }
  .hdr-logo-sub {
    font-size: 10px; font-weight: 300;
    color: rgba(255,255,255,0.5);
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  /* ── DESKTOP NAV ── */
  .hdr-nav {
    display: flex;
    align-items: center;
    gap: 4px;
    flex: 1;
    justify-content: center;
  }
  .hdr-nav-link {
    position: relative;
    display: flex; align-items: center;
    gap: 4px;
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 400;
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    white-space: nowrap;
    transition: color 0.2s, background 0.2s;
  }
  .hdr-nav-link:hover {
    color: #ffffff;
    background: rgba(255,255,255,0.07);
  }
  .hdr-nav-link.active {
    color: #c9a84c;
    background: rgba(201,168,76,0.1);
  }
  .hdr-nav-link::after {
    content: '';
    position: absolute;
    bottom: 4px; left: 50%;
    transform: translateX(-50%);
    width: 0; height: 2px;
    background: #c9a84c;
    border-radius: 2px;
    transition: width 0.25s ease;
  }
  .hdr-nav-link.active::after,
  .hdr-nav-link:hover::after {
    width: calc(100% - 24px);
  }

  /* ── CTA BUTTON ── */
  .hdr-cta-wrap { flex-shrink: 0; }
  .hdr-cta {
    display: flex; align-items: center; gap: 7px;
    background: #c9a84c;
    color: #071e2c;
    border: none;
    padding: 10px 22px;
    border-radius: 10px;
    font-size: 13px; font-weight: 600;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    white-space: nowrap;
    transition: background 0.2s, transform 0.15s;
    letter-spacing: 0.02em;
  }
  .hdr-cta:hover {
    background: #e8c97a;
    transform: translateY(-1px);
  }
  .hdr-cta:active { transform: scale(0.98); }
  .hdr-cta svg { width: 14px; height: 14px; }

  /* ── MOBILE TOGGLE ── */
  .hdr-mobile-btn {
    display: none;
    background: rgba(255,255,255,0.08);
    border: 1px solid rgba(255,255,255,0.15);
    color: white;
    width: 40px; height: 40px;
    border-radius: 10px;
    cursor: pointer;
    align-items: center; justify-content: center;
    transition: background 0.2s;
    flex-shrink: 0;
  }
  .hdr-mobile-btn:hover { background: rgba(255,255,255,0.14); }

  /* ── MOBILE DRAWER ── */
  .hdr-drawer {
    background: #071e2c;
    border-top: 1px solid rgba(255,255,255,0.07);
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.3s;
    opacity: 0;
  }
  .hdr-drawer.open {
    max-height: 600px;
    opacity: 1;
  }
  .hdr-drawer-inner {
    padding: 16px 20px 24px;
    display: flex; flex-direction: column; gap: 4px;
  }
  .hdr-drawer-link {
    display: flex; align-items: center; justify-content: space-between;
    padding: 12px 16px;
    border-radius: 10px;
    font-size: 14px; font-weight: 400;
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    transition: background 0.2s, color 0.2s;
    border: 1px solid transparent;
  }
  .hdr-drawer-link:hover {
    background: rgba(255,255,255,0.06);
    color: white;
    border-color: rgba(255,255,255,0.08);
  }
  .hdr-drawer-link.active {
    background: rgba(201,168,76,0.1);
    color: #c9a84c;
    border-color: rgba(201,168,76,0.2);
  }
  .hdr-drawer-link svg { width: 14px; height: 14px; opacity: 0.4; }
  .hdr-drawer-divider {
    height: 1px; background: rgba(255,255,255,0.07);
    margin: 8px 0;
  }
  .hdr-drawer-cta {
    display: flex; align-items: center; justify-content: center; gap: 8px;
    background: #c9a84c; color: #071e2c;
    border: none; padding: 13px;
    border-radius: 12px; font-size: 14px; font-weight: 600;
    cursor: pointer; font-family: 'DM Sans', sans-serif;
    margin-top: 8px; transition: background 0.2s;
  }
  .hdr-drawer-cta:hover { background: #e8c97a; }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .hdr-nav { display: none; }
    .hdr-cta-wrap { display: none; }
    .hdr-mobile-btn { display: flex; }
    .hdr-inner { padding: 0 20px; }
  }
  @media (max-width: 480px) {
    .hdr-topbar { font-size: 11px; }
    .hdr-logo-text { display: none; }
  }
`;

export default function PremiumHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="hdr-root">
      <style>{styles}</style>

      {/* ── ANNOUNCEMENT BAR ── */}
      <div className="hdr-topbar">
        <span className="hdr-topbar-dot" />
        🎓 New Batch Starting May 4 · Limited Seats Available
        <span className="hdr-topbar-dot" />
        Call to Enrol · Easy Installments Available
        <span className="hdr-topbar-dot" />
      </div>

      {/* ── MAIN HEADER ── */}
      <div className={`hdr-main${scrolled ? " scrolled" : ""}`}>
        <div className="hdr-inner">

          {/* LOGO */}
          <Link to="/" className="hdr-logo">
            <div className="hdr-logo-img-wrap">
              <img
                src={logo}
                alt="Vaidhee Design Academy"
                onError={e => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <span className="hdr-logo-fallback" style={{ display: "none" }}>V</span>
            </div>
            <div className="hdr-logo-text">
              <div className="hdr-logo-name">Vaidhee Design Academy</div>
              <div className="hdr-logo-sub">Fashion · Design · Boutique</div>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hdr-nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hdr-nav-link${location.pathname === item.path ? " active" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hdr-cta-wrap">
            <button className="hdr-cta">
              <Sparkles size={14} />
              Enrol Now
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="hdr-mobile-btn"
            onClick={() => setOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* ── MOBILE DRAWER ── */}
      <div className={`hdr-drawer${open ? " open" : ""}`}>
        <div className="hdr-drawer-inner">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`hdr-drawer-link${location.pathname === item.path ? " active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {item.name}
              <ChevronDown size={14} style={{ transform: "rotate(-90deg)" }} />
            </Link>
          ))}
          <div className="hdr-drawer-divider" />
          <button className="hdr-drawer-cta">
            <Sparkles size={15} />
            Enrol Now — May 4 Batch
          </button>
        </div>
      </div>
    </header>
  );
}