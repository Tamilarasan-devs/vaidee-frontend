import React from 'react'

export default function Courses() {
  const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500&display=swap');

  :root {
    --navy: #0c4563;
    --navy-dark: #082f45;
    --gold: #c9a84c;
    --cream: #fdf8f2;
    --white: #ffffff;
    --text: #1a1a1a;
    --text-muted: #5c6170;
  }

  body {
    margin: 0;
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
  }

  /* SECTION */
  .vda-section {
    padding: 80px 8vw;
    text-align: center;
  }

  .vda-section-label {
    color: var(--gold);
    font-size: 12px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 12px;
    font-weight: 500;
  }

  .vda-section-title {
    font-family: 'Playfair Display', serif;
    font-size: 34px;
    color: var(--navy);
    margin-bottom: 12px;
  }

  .vda-section-sub {
    font-size: 15px;
    color: var(--text-muted);
    max-width: 520px;
    margin: 0 auto 50px;
  }

  /* GRID */
  .vda-course-grid {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 30px;
    align-items: start;
    text-align: left;
  }

  /* PRICE CARD */
  .vda-price-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  }

  .vda-price-head {
    background: var(--navy);
    padding: 28px;
  }

  .vda-price-head-badge {
    background: var(--gold);
    color: var(--navy-dark);
    font-size: 10px;
    padding: 4px 12px;
    border-radius: 100px;
    display: inline-block;
    margin-bottom: 10px;
  }

  .vda-price-head h3 {
    color: white;
    margin: 0;
    font-size: 20px;
  }

  .vda-price-head p {
    color: rgba(255,255,255,0.6);
    font-size: 12px;
  }

  .vda-price-body {
    padding: 25px;
  }

  .vda-price-main {
    font-size: 34px;
    font-weight: 700;
    color: var(--navy);
  }

  .vda-price-slash {
    text-decoration: line-through;
    color: #aaa;
    margin-left: 10px;
  }

  .vda-price-offer {
    background: #eef8f0;
    color: green;
    font-size: 11px;
    padding: 3px 10px;
    border-radius: 20px;
    margin-left: 10px;
  }

  .vda-install-row {
    display: flex;
    justify-content: space-between;
    background: var(--cream);
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 8px;
    font-size: 13px;
  }

  .vda-enroll-btn {
    width: 100%;
    background: var(--navy);
    color: white;
    padding: 14px;
    border-radius: 10px;
    border: none;
    margin-top: 15px;
    cursor: pointer;
    transition: 0.3s;
  }

  .vda-enroll-btn:hover {
    background: var(--navy-dark);
  }

  /* DETAIL CARDS */
  .vda-detail-cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .vda-detail-card {
    background: white;
    border-radius: 16px;
    padding: 24px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.06);
  }

  .vda-detail-title {
    font-weight: 600;
    margin-bottom: 16px;
    color: var(--navy);
  }

  /* SCHEDULE */
  .vda-sched-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
  }

  .vda-sched-item-label {
    font-size: 12px;
    color: var(--text-muted);
  }

  .vda-sched-item-val {
    font-weight: 500;
    margin-top: 3px;
  }

  /* INCLUDES */
  .vda-inc-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    font-size: 14px;
  }

  .vda-inc-check {
    width: 20px;
    height: 20px;
    background: var(--navy);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vda-inc-check svg {
    width: 10px;
  }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    .vda-course-grid {
      grid-template-columns: 1fr;
    }

    .vda-sched-grid {
      grid-template-columns: 1fr;
    }
  }
  `

  return (
    <div>
      <style>{styles}</style>

      <section className="vda-section">
        <div className="vda-section-label">Our Flagship Program</div>
        <h2 className="vda-section-title">
          6-Month Fashion Designing <br /> & Boutique Skill Course
        </h2>
        <p className="vda-section-sub">
          Everything you need to go from zero to running your own boutique.
        </p>

        <div className="vda-course-grid">

          {/* PRICE CARD */}
          <div className="vda-price-card">
            <div className="vda-price-head">
              <div className="vda-price-head-badge">Most Popular</div>
              <h3>Fashion Designing & Boutique</h3>
              <p>6-Month Course</p>
            </div>

            <div className="vda-price-body">
              <div>
                <span className="vda-price-main">₹19,999</span>
                <span className="vda-price-slash">₹20,999</span>
                <span className="vda-price-offer">Save ₹1,000</span>
              </div>

              <br />

              <div className="vda-install-row">
                <span>Before class</span>
                <span>₹8,999</span>
              </div>
              <div className="vda-install-row">
                <span>June 1</span>
                <span>₹5,500</span>
              </div>
              <div className="vda-install-row">
                <span>July 1</span>
                <span>₹5,500</span>
              </div>

              <button className="vda-enroll-btn">Enroll Now →</button>
            </div>
          </div>

          {/* DETAILS */}
          <div className="vda-detail-cards">

            {/* SCHEDULE */}
            <div className="vda-detail-card">
              <div className="vda-detail-title">Schedule</div>

              <div className="vda-sched-grid">
                <div>
                  <div className="vda-sched-item-label">Start Date</div>
                  <div className="vda-sched-item-val">May 4</div>
                </div>

                <div>
                  <div className="vda-sched-item-label">Days</div>
                  <div className="vda-sched-item-val">Mon – Fri</div>
                </div>

                <div>
                  <div className="vda-sched-item-label">Time</div>
                  <div className="vda-sched-item-val">2–4 PM</div>
                </div>

                <div>
                  <div className="vda-sched-item-label">Duration</div>
                  <div className="vda-sched-item-val">6 Months</div>
                </div>
              </div>
            </div>

            {/* INCLUDES */}
            <div className="vda-detail-card">
              <div className="vda-detail-title">What's Included</div>

              {[
                'Live practical sessions',
                'Recorded theory classes',
                'Lifetime access',
                'Boutique guidance',
                'Certificate',
              ].map((item, i) => (
                <div className="vda-inc-row" key={i}>
                  <div className="vda-inc-check">
                    <svg viewBox="0 0 12 12">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}