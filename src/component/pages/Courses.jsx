import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BASE_URL from "../../apiConfig";

const API_URL = `${BASE_URL}/api/courses`;

// ── Shimmer Skeleton ──────────────────────────────────────────────
function Skeleton({ w = "100%", h = "18px", r = "8px", mb = "0" }) {
  return (
    <div
      style={{
        width: w, height: h, borderRadius: r,
        marginBottom: mb,
        background: "linear-gradient(90deg,#e8e0d5 25%,#f5efe8 50%,#e8e0d5 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.5s infinite",
      }}
    />
  );
}

// ── Check Icon ────────────────────────────────────────────────────
function Check() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Tag Icon ──────────────────────────────────────────────────────
function TagIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  );
}

// ── Clock Icon ────────────────────────────────────────────────────
function ClockIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

// ── Calendar Icon ─────────────────────────────────────────────────
function CalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

// ── Users Icon ────────────────────────────────────────────────────
function UsersIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

// ── Payment Icon ──────────────────────────────────────────────────
function PayIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  );
}

// ── Single Course Card ────────────────────────────────────────────
function CourseCard({ course, index }) {
  const [enrolled, setEnrolled] = useState(false);
  const delay = `${index * 0.12}s`;

  const includes = [
    "Live practical sessions",
    "Recorded theory classes",
    "Lifetime access to materials",
    "Boutique setup guidance",
    "Certificate on completion",
  ];
const navigate = useNavigate();
  return (
    <article
      className="course-card"
      style={{ animationDelay: delay }}
    >
      {/* ── Card Header ── */}
      <div className="card-header">
        <div className="header-badge">
          <TagIcon /> Most Popular
        </div>
        <h3 className="card-title">{course.title}</h3>
        <div className="card-meta-row">
          <span className="meta-chip"><ClockIcon />{course.timing}</span>
          <span className="meta-chip"><CalIcon />{course.schedule}</span>
        </div>
      </div>

      {/* ── Price Block ── */}
      <div className="price-block">
        <div className="price-row">
          <span className="price-main">₹{course.fees}</span>
          <span className="price-duration">/ {course.duration}</span>
        </div>
        {course.tagLine && (
          <div className="tagline-pill">{course.tagLine}</div>
        )}
      </div>

      {/* ── Description ── */}
      {course.description && (
        <p className="card-desc">{course.description}</p>
      )}

      {/* ── Info Grid ── */}
      <div className="info-grid">
        <div className="info-item">
          <span className="info-label"><UsersIcon />Eligibility</span>
          <span className="info-val">{course.eligibility}</span>
        </div>
        <div className="info-item">
          <span className="info-label"><PayIcon />Payment</span>
          <span className="info-val">{course.payment}</span>
        </div>
        {course.training && (
          <div className="info-item full">
            <span className="info-label">Training</span>
            <span className="info-val">{course.training}</span>
          </div>
        )}
      </div>

      {/* ── Includes ── */}
      <div className="includes-block">
        <p className="includes-label">What's Included</p>
        <div className="includes-grid">
          {includes.map((item, i) => (
            <div className="inc-row" key={i}>
              <span className="inc-check"><Check /></span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <button
        className={`enroll-btn ${enrolled ? "enrolled" : ""}`}
        // onClick={() => setEnrolled(true)}
        onClick={() => navigate('/admission', { state: { courseName: course.title, fees: course.fees } })}
      >
        {/* {enrolled ? "✓ Enrolled Successfully!" : "Enroll Now →"} */}
        Enroll Now 
      </button>
    </article>
  );
}

// ── Loading Skeleton Card ─────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <div style={{ padding: "28px 28px 22px" }}>
        <Skeleton w="80px" h="22px" r="100px" mb="14px" />
        <Skeleton w="70%" h="24px" r="6px" mb="10px" />
        <Skeleton w="50%" h="16px" r="6px" />
      </div>
      <div style={{ padding: "0 28px 22px" }}>
        <Skeleton w="40%" h="38px" r="8px" mb="10px" />
        <Skeleton w="65%" h="16px" r="100px" />
      </div>
      <div style={{ padding: "0 28px 22px" }}>
        <Skeleton h="14px" r="6px" mb="8px" />
        <Skeleton w="80%" h="14px" r="6px" mb="8px" />
        <Skeleton w="60%" h="14px" r="6px" />
      </div>
    </div>
  );
}

// ── Error State ───────────────────────────────────────────────────
function ErrorState({ message, onRetry }) {
  return (
    <div className="error-state">
      <div className="error-icon">⚠</div>
      <p className="error-title">Unable to load courses</p>
      <p className="error-msg">{message}</p>
      <button className="retry-btn" onClick={onRetry}>Try Again</button>
    </div>
  );
}

// ── Empty State ───────────────────────────────────────────────────
function EmptyState() {
  return (
    <div className="error-state">
      <div className="error-icon" style={{ fontSize: "36px" }}>🎓</div>
      <p className="error-title">No courses yet</p>
      <p className="error-msg">Check back soon — new batches are being added.</p>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────
export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCourses = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data } = await axios.get(API_URL);
      if (data.success) {
        setCourses(data.data);
      } else {
        setError("Unexpected response from server.");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.message ||
        "Failed to connect to server."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Outfit:wght@300;400;500;600&display=swap');

    :root {
      --navy: #0c4563;
      --navy-dark: #082f45;
      --navy-light: #e8f0f6;
      --gold: #c9a84c;
      --gold-light: #f7efd9;
      --cream: #fdf8f2;
      --cream-dark: #f3ebe0;
      --white: #ffffff;
      --text: #1a1a1a;
      --text-muted: #7a7060;
      --border: #e8e0d5;
      --success: #2d7a4f;
      --success-bg: #edf7f2;
      --radius: 20px;
      --shadow: 0 8px 40px rgba(12,69,99,0.10);
      --shadow-hover: 0 20px 60px rgba(12,69,99,0.18);
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      font-family: 'Outfit', sans-serif;
      background: var(--cream);
      color: var(--text);
    }

    /* ── SECTION ─────────────────────────────── */
    .courses-section {
      padding: 90px 6vw 100px;
      min-height: 60vh;
    }

    /* ── HEADER ──────────────────────────────── */
    .section-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: var(--gold);
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-bottom: 18px;
    }

    .section-eyebrow::before,
    .section-eyebrow::after {
      content: '';
      display: block;
      height: 1px;
      width: 28px;
      background: var(--gold);
      opacity: 0.6;
    }

    .section-heading {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(32px, 4vw, 52px);
      font-weight: 700;
      color: var(--navy);
      line-height: 1.15;
      margin: 0 0 16px;
    }

    .section-sub {
      font-size: 15px;
      color: var(--text-muted);
      max-width: 500px;
      line-height: 1.7;
      margin: 0 0 56px;
    }

    .section-count {
      display: inline-block;
      background: var(--navy-light);
      color: var(--navy);
      font-size: 12px;
      font-weight: 600;
      padding: 4px 14px;
      border-radius: 100px;
      margin-left: 12px;
      vertical-align: middle;
    }

    /* ── GRID ────────────────────────────────── */
    .courses-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 28px;
    }

    /* ── COURSE CARD ─────────────────────────── */
    .course-card {
      background: var(--white);
      border-radius: var(--radius);
      overflow: hidden;
      box-shadow: var(--shadow);
      display: flex;
      flex-direction: column;
      transition: transform 0.35s cubic-bezier(.22,.68,0,1.2), box-shadow 0.35s ease;
      animation: fadeUp 0.55s cubic-bezier(.22,.68,0,1.2) both;
      border: 1px solid rgba(201,168,76,0.12);
    }

    .course-card:hover {
      transform: translateY(-6px);
      box-shadow: var(--shadow-hover);
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(28px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    @keyframes shimmer {
      from { background-position: 200% 0; }
      to   { background-position: -200% 0; }
    }

    /* ── CARD HEADER ─────────────────────────── */
    .card-header {
      background: linear-gradient(135deg, var(--navy) 0%, var(--navy-dark) 100%);
      padding: 28px 28px 24px;
      position: relative;
      overflow: hidden;
    }

    .card-header::after {
      content: '';
      position: absolute;
      top: -30px; right: -30px;
      width: 120px; height: 120px;
      background: radial-gradient(circle, rgba(201,168,76,0.15) 0%, transparent 70%);
      border-radius: 50%;
    }

    .header-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: var(--gold);
      color: var(--navy-dark);
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.06em;
      padding: 4px 12px;
      border-radius: 100px;
      margin-bottom: 12px;
      text-transform: uppercase;
    }

    .card-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 20px;
      font-weight: 700;
      color: white;
      margin: 0 0 14px;
      line-height: 1.3;
    }

    .card-meta-row {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }

    .meta-chip {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: rgba(255,255,255,0.12);
      color: rgba(255,255,255,0.85);
      font-size: 11px;
      padding: 4px 10px;
      border-radius: 100px;
      backdrop-filter: blur(4px);
    }

    /* ── PRICE BLOCK ─────────────────────────── */
    .price-block {
      padding: 22px 28px 18px;
      border-bottom: 1px solid var(--border);
    }

    .price-row {
      display: flex;
      align-items: baseline;
      gap: 6px;
      margin-bottom: 10px;
    }

    .price-main {
      font-family: 'Cormorant Garamond', serif;
      font-size: 38px;
      font-weight: 700;
      color: var(--navy);
      line-height: 1;
    }

    .price-duration {
      font-size: 13px;
      color: var(--text-muted);
      font-weight: 400;
    }

    .tagline-pill {
      background: var(--gold-light);
      color: #8a6a1a;
      font-size: 11.5px;
      font-weight: 500;
      padding: 6px 14px;
      border-radius: 8px;
      border-left: 3px solid var(--gold);
      line-height: 1.5;
    }

    /* ── DESC ────────────────────────────────── */
    .card-desc {
      font-size: 13.5px;
      color: var(--text-muted);
      line-height: 1.7;
      padding: 18px 28px 0;
      margin: 0;
    }

    /* ── INFO GRID ───────────────────────────── */
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1px;
      background: var(--border);
      margin: 18px 0 0;
      border-top: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }

    .info-item {
      background: var(--cream);
      padding: 14px 18px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .info-item.full {
      grid-column: 1 / -1;
    }

    .info-label {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--gold);
    }

    .info-val {
      font-size: 12.5px;
      color: var(--text);
      line-height: 1.5;
    }

    /* ── INCLUDES ────────────────────────────── */
    .includes-block {
      padding: 20px 28px 0;
      flex: 1;
    }

    .includes-label {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: var(--text-muted);
      margin: 0 0 12px;
    }

    .includes-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .inc-row {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 12.5px;
      color: var(--text);
    }

    .inc-check {
      width: 18px;
      height: 18px;
      min-width: 18px;
      background: var(--navy);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* ── CTA BUTTON ──────────────────────────── */
    .enroll-btn {
      margin: 22px 28px 28px;
      background: var(--navy);
      color: white;
      padding: 14px 20px;
      border-radius: 12px;
      border: none;
      font-family: 'Outfit', sans-serif;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 0.04em;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .enroll-btn::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(201,168,76,0.2) 0%, transparent 60%);
      opacity: 0;
      transition: opacity 0.3s;
    }

    .enroll-btn:hover {
      background: var(--navy-dark);
      transform: translateY(-1px);
      box-shadow: 0 8px 20px rgba(12,69,99,0.3);
    }

    .enroll-btn:hover::before { opacity: 1; }

    .enroll-btn.enrolled {
      background: var(--success);
      cursor: default;
      transform: none;
      box-shadow: none;
    }

    /* ── SKELETON ────────────────────────────── */
    .skeleton-card {
      background: white;
      border-radius: var(--radius);
      overflow: hidden;
      box-shadow: var(--shadow);
      border: 1px solid var(--border);
    }

    /* ── ERROR / EMPTY ───────────────────────── */
    .error-state {
      text-align: center;
      padding: 80px 20px;
      grid-column: 1 / -1;
    }

    .error-icon {
      font-size: 42px;
      margin-bottom: 16px;
    }

    .error-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 24px;
      font-weight: 700;
      color: var(--navy);
      margin: 0 0 8px;
    }

    .error-msg {
      font-size: 14px;
      color: var(--text-muted);
      margin: 0 0 24px;
    }

    .retry-btn {
      background: var(--navy);
      color: white;
      border: none;
      padding: 12px 28px;
      border-radius: 10px;
      font-family: 'Outfit', sans-serif;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s;
    }

    .retry-btn:hover { background: var(--navy-dark); }

    /* ── RESPONSIVE ──────────────────────────── */
    @media (max-width: 640px) {
      .courses-section { padding: 60px 5vw 70px; }
      .courses-grid { grid-template-columns: 1fr; }
      .includes-grid { grid-template-columns: 1fr; }
      .info-grid { grid-template-columns: 1fr; }
    }
  `;

  return (
    <div>
      <style>{styles}</style>

      <section className="courses-section">

        {/* ── Header ── */}
        <div className="section-eyebrow">Our Programs</div>
        <h2 className="section-heading">
          Tailoring &amp; Fashion Courses
          {!loading && !error && courses.length > 0 && (
            <span className="section-count">{courses.length} available</span>
          )}
        </h2>
        <p className="section-sub">
          From beginner stitching to advanced boutique design — find the course
          that fits your goals and schedule.
        </p>

        {/* ── Grid ── */}
        <div className="courses-grid">
          {loading && [0, 1, 2].map((i) => <SkeletonCard key={i} />)}

          {!loading && error && (
            <ErrorState message={error} onRetry={fetchCourses} />
          )}

          {!loading && !error && courses.length === 0 && <EmptyState />}

          {!loading && !error && courses.map((course, i) => (
            <CourseCard key={course._id} course={course} index={i} />
          ))}
        </div>

      </section>
    </div>
  );
}