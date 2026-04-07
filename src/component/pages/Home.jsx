import React, { useState } from 'react'
import image from '../../assets/vaide.jpeg'
import ban from '../../assets/ban.png'

// Inject Google Fonts + minimal keyframes (Tailwind doesn't handle @import or @keyframes)
const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600&display=swap');

  .font-cormorant { font-family: 'Cormorant Garamond', serif; }
  .font-outfit    { font-family: 'Outfit', sans-serif; }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes floatBob {
    0%,100% { transform: translateY(0); }
    50%     { transform: translateY(-7px); }
  }

  .anim-slide-1 { animation: slideUp 0.7s 0.1s both; }
  .anim-slide-2 { animation: slideUp 0.7s 0.2s both; }
  .anim-slide-3 { animation: slideUp 0.7s 0.3s both; }
  .anim-slide-4 { animation: slideUp 0.7s 0.4s both; }
  .anim-slide-5 { animation: slideUp 0.7s 0.5s both; }
  .anim-card    { animation: slideUp 0.8s 0.3s both; }
  .float-0      { animation: floatBob 3.5s 0s ease-in-out infinite; }
  .float-1      { animation: floatBob 3.5s 1.8s ease-in-out infinite; }

  /* gold bar hover on why cards */
  .why-card::after {
    content: '';
    position: absolute; bottom: 0; left: 0;
    width: 100%; height: 3px;
    background: linear-gradient(90deg, #c9a84c, #e8c97a);
    transform: scaleX(0); transform-origin: left; transition: transform 0.3s;
  }
  .why-card:hover::after { transform: scaleX(1); }

  /* pill pulse dot */
  .pulse-dot::after {
    content: '';
    display: block;
    width: 8px; height: 8px; border-radius: 50%;
    background: #c9a84c;
    box-shadow: 0 0 8px #c9a84c;
  }
`

const whyCards = [
  {
    title: 'Expert-Led Learning',
    desc: 'Learn directly from Vaidheeshwari — hands-on experience in fashion design and boutique management.',
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </>
    ),
  },
  {
    title: 'Live + Recorded Classes',
    desc: 'Attend 4 live practical sessions weekly. Every class recorded — watch anytime, forever.',
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </>
    ),
  },
  {
    title: 'Career-Focused',
    desc: 'From basic stitching to advanced boutique operations — go from zero to business-ready in 6 months.',
    icon: (
      <>
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
      </>
    ),
  },
  {
    title: 'Affordable Fees',
    desc: 'Premium training at just ₹19,999 with easy 3-part installments — quality education for all.',
    icon: (
      <>
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </>
    ),
  },
  {
    title: 'Flexible Timing',
    desc: 'Classes Mon–Fri, 2–4 PM — perfect for homemakers, students, and working professionals.',
    icon: (
      <>
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </>
    ),
  },
  {
    title: 'Certified Completion',
    desc: 'Earn a recognized certificate for boutique launches, job applications, and freelance work.',
    icon: (
      <>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </>
    ),
  },
]

const ArrowRight = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <path d="M3 8h10M9 4l4 4-4 4"/>
  </svg>
)

export default function Home() {
  const [imgErr, setImgErr] = useState(false)

  return (
    <div className="font-outfit text-[#1a1a1a] bg-white overflow-x-hidden leading-none">
      <style>{globalStyles}</style>

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section
        className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-stretch relative overflow-hidden"
        style={{ background: '#071e2c' }}
      >
        {/* radial bg overlays */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 110% 50%, rgba(12,69,99,0.9) 0%, transparent 65%), radial-gradient(ellipse 50% 80% at -10% 80%, rgba(201,168,76,0.05) 0%, transparent 60%)',
          }}
        />
        {/* decorative rings */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <span className="absolute border border-[rgba(201,168,76,0.1)] w-[620px] h-[620px] -right-[170px] -top-[170px]" style={{borderRadius:0}}/>
          <span className="absolute border border-[rgba(201,168,76,0.06)] w-[400px] h-[400px] right-[50px] top-[50px]" style={{borderRadius:0}}/>
          <span className="absolute border border-[rgba(255,255,255,0.04)] w-[160px] h-[160px] left-[43%] bottom-[70px]" style={{borderRadius:0}}/>
        </div>

        {/* ── Hero Left ── */}
        <div className="relative z-10 flex flex-col justify-center px-[7vw] pt-24 pb-20 sm:px-[6vw] sm:pt-20 sm:pb-14 xs:px-[5vw] xs:pt-16 xs:pb-12">
          {/* pill */}
          <div className="anim-slide-1 inline-flex items-center gap-2 self-start mb-7
            bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.28)]
            text-[#e8c97a] px-3 py-1.5 rounded-full
            text-[11px] font-medium tracking-widest uppercase">
            <div className="w-[22px] h-[22px] rounded-full bg-[rgba(201,168,76,0.18)] flex items-center justify-center pulse-dot"/>
            Now Enrolling — May 4 Batch
          </div>

          {/* title */}
          <h1 className="anim-slide-2 font-cormorant font-bold text-white leading-[1.1] mb-6
            text-[clamp(36px,4.5vw,66px)]">
            Learn Fashion<br/>Design &amp; Start<br/>
            <em className="text-[#e8c97a] italic">Your Own Boutique</em>
          </h1>

          {/* desc */}
          <p className="anim-slide-3 text-[rgba(255,255,255,0.62)] leading-[1.8] font-light
            max-w-[440px] mb-10 text-base">
            A professional 6-month program designed to transform beginners into confident
            fashion designers — with live sessions, practical training, and lifetime access.
          </p>

          {/* buttons */}
          <div className="anim-slide-4 flex flex-wrap gap-3 mb-14 sm:flex-col sm:w-full">
            <button className="font-outfit inline-flex items-center gap-2 bg-[#c9a84c] text-[#071e2c]
              px-7 py-3.5 rounded-xl text-sm font-semibold border-none cursor-pointer
              tracking-wide transition-all duration-200
              hover:-translate-y-0.5 hover:bg-[#e8c97a] hover:shadow-[0_10px_28px_rgba(201,168,76,0.28)]
              sm:justify-center">
              Enrol for ₹19,999 <ArrowRight/>
            </button>
            <button className="font-outfit inline-flex items-center gap-2
              bg-[rgba(255,255,255,0.05)] text-[rgba(255,255,255,0.82)]
              px-7 py-3.5 rounded-xl text-sm font-normal
              border border-[rgba(255,255,255,0.18)] cursor-pointer
              transition-all duration-200
              hover:border-[rgba(255,255,255,0.45)] hover:bg-[rgba(255,255,255,0.09)]
              sm:justify-center">
              View Course Details
            </button>
          </div>

          {/* stats */}
          <div className="anim-slide-5 border-t border-[rgba(255,255,255,0.08)] pt-10
            grid grid-cols-3 gap-5 xs:grid-cols-3">
            {[
              { num: '6',   lbl: 'Month Program' },
              { num: '4+1', lbl: 'Days Per Week' },
              { num: '∞',   lbl: 'Lifetime Access' },
            ].map(({ num, lbl }, i) => (
              <div key={i} className={i > 0 ? 'border-l border-[rgba(255,255,255,0.08)] pl-5 sm:border-none sm:pl-0' : ''}>
                <div className="font-cormorant font-bold text-[#e8c97a] text-[38px] leading-none mb-1.5">{num}</div>
                <div className="text-[11px] text-[rgba(255,255,255,0.38)] font-light tracking-widest uppercase">{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Hero Right (hidden on mobile) ── */}
        <div className="hidden lg:flex relative z-10 items-center justify-center px-[7vw] py-20 pl-10">
          <div className="relative w-full max-w-[390px]">
            {/* gold deco box */}
            <div className="absolute w-[260px] h-[260px] bg-[rgba(201,168,76,0.06)] rounded-[40px] -top-8 -right-7 rotate-[14deg] z-0"/>

            {/* float 1 */}
            <div className="float-0 absolute -bottom-5 -left-7 z-20
              bg-white rounded-2xl px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.18)]
              flex items-center gap-2.5">
              <div className="w-[34px] h-[34px] rounded-[9px] bg-[#f7edd2] flex items-center justify-center text-base flex-shrink-0">🎓</div>
              <div>
                <div className="font-cormorant font-bold text-[#0c4563] text-xl leading-none">100%</div>
                <div className="text-[11px] text-[#6b7280]">Beginner Friendly</div>
              </div>
            </div>

            {/* float 2 */}
            <div className="float-1 absolute top-4 -right-7 z-20
              bg-white rounded-2xl px-4 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.18)]
              flex items-center gap-2.5">
              <div className="w-[34px] h-[34px] rounded-[9px] bg-[#f7edd2] flex items-center justify-center text-base flex-shrink-0">✂️</div>
              <div>
                <div className="font-cormorant font-bold text-[#0c4563] text-xl leading-none">Live</div>
                <div className="text-[11px] text-[#6b7280]">Practical Sessions</div>
              </div>
            </div>

            {/* tutor card */}
            <div className="anim-card relative z-10 rounded-[28px] p-9 pb-7
              bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.11)]
              backdrop-blur-xl">
              {/* photo */}
              <div className="w-full mb-5">
                <div className="relative w-[340px] h-[540px] mx-auto  ">
                  <div className="absolute inset-[-4px]  z-0 rounded-full"
                    style={{ background: 'conic-gradient(#c9a84c 0deg, rgba(201,168,76,0.1) 180deg, #c9a84c 360deg)' }}/>
                  <div className="relative z-10 w-full h-full rounded-full overflow-hidden
                    border-[3px] border-[#071e2c]
                    bg-gradient-to-br from-[#c9a84c] to-[#e8c97a]
                    flex items-center justify-center">
                    {!imgErr
                      ? <img src={image} alt="Vaidheeshwari" onError={() => setImgErr(true)} className="w-full h-full object-cover"/>
                      : <span className="font-cormorant font-bold text-[#071e2c] text-[42px]">V</span>
                    }
                  </div>
                </div>
              </div>

              {/* badge */}
              <div className="text-center mb-2">
                <span className="inline-flex items-center gap-1
                  bg-[rgba(201,168,76,0.14)] border border-[rgba(201,168,76,0.28)]
                  text-[#e8c97a] text-[10px] font-medium
                  px-3 py-1 rounded-full tracking-widest uppercase">
                  ⭐ Your Tutor
                </span>
              </div>
              <div className="font-cormorant font-semibold text-white text-2xl text-center mb-0.5">Vaidheeshwari</div>
              <div className="text-[11px] text-[rgba(255,255,255,0.4)] text-center font-light tracking-wide">Founder, Vaidhee Design Academy</div>

              <div className="h-px bg-[rgba(255,255,255,0.07)] my-5"/>

              <div className="flex flex-col gap-3">
                {[
                  { icon: '👋', text: 'Founder of Vaidhee Design Academy' },
                  { icon: '✂️', text: 'Passionate about fashion designing & tailoring' },
                  { icon: '🎯', text: 'Helps beginners launch their own boutiques' },
                ].map(({ icon, text }, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[13px] text-[rgba(255,255,255,0.68)] leading-[1.55] font-light">
                    <div className="w-6 h-6 rounded-[7px] bg-[rgba(201,168,76,0.14)] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">{icon}</div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TUTOR CARD (mobile only — visible below hero)
      ══════════════════════════════════════════ */}
      <div className="lg:hidden bg-[#071e2c] px-[5vw] pb-14 flex justify-center">
        <div className="w-full max-w-sm rounded-[28px] p-8 pb-7
          bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.11)]
          backdrop-blur-xl">
          <div className="w-[120px] h-[120px] mx-auto mb-5 relative">
            <div className="absolute inset-[-4px] rounded-full"
              style={{ background: 'conic-gradient(#c9a84c 0deg, rgba(201,168,76,0.1) 180deg, #c9a84c 360deg)' }}/>
            <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-[#071e2c]
              bg-gradient-to-br from-[#c9a84c] to-[#e8c97a] flex items-center justify-center">
              {!imgErr
                ? <img src={image} alt="Vaidheeshwari" onError={() => setImgErr(true)} className="w-full h-full object-cover"/>
                : <span className="font-cormorant font-bold text-[#071e2c] text-[36px]">V</span>
              }
            </div>
          </div>
          <div className="text-center mb-2">
            <span className="inline-flex items-center gap-1 bg-[rgba(201,168,76,0.14)] border border-[rgba(201,168,76,0.28)] text-[#e8c97a] text-[10px] font-medium px-3 py-1 rounded-full tracking-widest uppercase">⭐ Your Tutor</span>
          </div>
          <div className="font-cormorant font-semibold text-white text-2xl text-center mb-0.5">Vaidheeshwari</div>
          <div className="text-[11px] text-[rgba(255,255,255,0.4)] text-center font-light tracking-wide mb-5">Founder, Vaidhee Design Academy</div>
          <div className="h-px bg-[rgba(255,255,255,0.07)] mb-5"/>
          <div className="flex flex-col gap-3">
            {[
              { icon: '👋', text: 'Founder of Vaidhee Design Academy' },
              { icon: '✂️', text: 'Passionate about fashion designing & tailoring' },
              { icon: '🎯', text: 'Helps beginners launch their own boutiques' },
            ].map(({ icon, text }, i) => (
              <div key={i} className="flex items-start gap-2.5 text-[13px] text-[rgba(255,255,255,0.68)] leading-relaxed font-light">
                <div className="w-6 h-6 rounded-[7px] bg-[rgba(201,168,76,0.14)] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">{icon}</div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          BANNER
      ══════════════════════════════════════════ */}
      <div className="relative overflow-hidden bg-[#071e2c] min-h-[200px] sm:min-h-[240px] md:h-[280px]">
        <img src={ban} alt="Vaidhee Design Academy" className="w-full h-full object-cover opacity-20 absolute inset-0"/>
        <div
          className="absolute inset-0 flex items-center px-[7vw] sm:px-[6vw] xs:px-[5vw] py-12"
          style={{ background: 'linear-gradient(105deg, rgba(7,30,44,0.97) 0%, rgba(12,69,99,0.7) 55%, transparent 100%)' }}>
          <div className="max-w-[620px]">
            <div className="text-[11px] text-[#c9a84c] font-semibold tracking-[0.12em] uppercase mb-3">New Batch · May 2025</div>
            <div className="font-cormorant font-bold text-white leading-snug mb-5
              text-[clamp(20px,3vw,40px)]">
              Fashion Designing &amp; Boutique Skill Course
            </div>
            <div className="flex flex-wrap gap-2">
              {['📅 Starts May 4','🕑 Mon–Fri · 2–4 PM','🎓 Beginner Friendly','💳 Easy Installments'].map(c => (
                <div key={c} className="flex items-center gap-1.5 bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.12)] text-[rgba(255,255,255,0.82)] px-3 py-1.5 rounded-full text-xs font-normal">{c}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          COURSE SECTION
      ══════════════════════════════════════════ */}
      <section className="px-[7vw] py-24 sm:px-[6vw] sm:py-16 xs:px-[5vw] xs:py-14">
        <div className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.13em] uppercase text-[#c9a84c] mb-3.5
          before:content-[''] before:w-7 before:h-0.5 before:bg-[#c9a84c] before:rounded">
          Our Flagship Program
        </div>
        <h2 className="font-cormorant font-bold text-[#0c4563] leading-snug mb-4
          text-[clamp(28px,3vw,46px)]">
          6-Month Fashion Designing<br/>&amp; Boutique Skill Course
        </h2>
        <p className="text-[15px] text-[#6b7280] max-w-[500px] leading-[1.75] font-light mb-14">
          Everything you need to go from zero to running your own fashion boutique — in just six months.
        </p>

        {/* course layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[360px_1fr] gap-8 items-start">

          {/* price card */}
          <div className="rounded-3xl overflow-hidden shadow-[0_8px_48px_rgba(12,69,99,0.12)] border border-[rgba(12,69,99,0.1)] xl:sticky xl:top-[90px]">
            <div className="relative overflow-hidden px-7 py-8"
              style={{ background: 'linear-gradient(145deg,#0c4563 0%,#0e5278 100%)' }}>
              <div className="absolute -right-[70px] -bottom-[70px] w-[200px] h-[200px] rounded-full bg-[rgba(255,255,255,0.04)] pointer-events-none"/>
              <div className="inline-block bg-[#c9a84c] text-[#071e2c] text-[10px] font-bold px-3.5 py-1 rounded-full tracking-wide uppercase mb-3.5">Most Popular</div>
              <h3 className="font-cormorant font-bold text-white text-[22px] mb-1">Fashion Designing &amp; Boutique</h3>
              <p className="text-[12px] text-[rgba(255,255,255,0.48)] font-light">6-Month Comprehensive Course</p>
            </div>
            <div className="bg-white px-7 py-7">
              <div className="flex items-baseline gap-2.5 flex-wrap mb-1.5">
                <span className="font-cormorant font-bold text-[#0c4563] text-[42px] leading-none">₹19,999</span>
                <span className="text-lg text-gray-300 line-through font-light">₹20,999</span>
              </div>
              <div className="mb-1.5">
                <span className="text-[11px] bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full font-semibold">🎁 Save ₹1,000 on full payment</span>
              </div>
              <p className="text-[12px] text-[#6b7280] mb-6 font-light">Or pay in easy installments below</p>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-[#6b7280] mb-2.5">Installment Plan</div>
              <div className="flex flex-col gap-2 mb-6">
                {[
                  { l: 'Before class starts',   v: '₹8,999' },
                  { l: 'On or before June 1',   v: '₹5,500' },
                  { l: 'On or before July 1',   v: '₹5,500' },
                ].map(({ l, v }) => (
                  <div key={l} className="flex justify-between items-center px-3.5 py-3 bg-[#fdf9f4] rounded-[10px] text-sm">
                    <span className="text-[#6b7280] font-light">{l}</span>
                    <span className="font-semibold text-[#0c4563]">{v}</span>
                  </div>
                ))}
              </div>
              <button
                className="font-outfit w-full flex items-center justify-center gap-2
                  text-white border-none px-4 py-4 rounded-xl text-sm font-semibold cursor-pointer
                  tracking-wide transition-all duration-200
                  hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(12,69,99,0.28)]"
                style={{ background: 'linear-gradient(135deg,#0c4563 0%,#0e5278 100%)' }}>
                Enrol Now <ArrowRight/>
              </button>
            </div>
          </div>

          {/* detail cards */}
          <div className="flex flex-col gap-5">
            {/* schedule */}
            <div className="bg-white border border-[rgba(12,69,99,0.1)] rounded-[20px] p-7
              hover:border-[rgba(12,69,99,0.18)] hover:shadow-[0_4px_24px_rgba(12,69,99,0.06)] transition-all">
              <div className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-widest text-[#6b7280] mb-5">
                Schedule
                <div className="flex-1 h-px bg-[rgba(12,69,99,0.1)]"/>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { l: 'Start Date', v: 'May 4, 2025' },
                  { l: 'Class Days', v: 'Mon – Fri' },
                  { l: 'Timing',     v: '2:00 – 4:00 PM' },
                  { l: 'Duration',   v: '6 Months' },
                ].map(({ l, v }) => (
                  <div key={l} className="bg-[#fdf9f4] rounded-xl p-3.5 text-center border border-[rgba(12,69,99,0.05)]">
                    <div className="text-[10px] text-[#6b7280] font-normal uppercase tracking-wide mb-1.5">{l}</div>
                    <div className="text-sm font-semibold text-[#0c4563] leading-snug">{v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* what's included */}
            <div className="bg-white border border-[rgba(12,69,99,0.1)] rounded-[20px] p-7
              hover:border-[rgba(12,69,99,0.18)] hover:shadow-[0_4px_24px_rgba(12,69,99,0.06)] transition-all">
              <div className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-widest text-[#6b7280] mb-5">
                What's Included
                <div className="flex-1 h-px bg-[rgba(12,69,99,0.1)]"/>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  'Live practical sessions — 4 days per week',
                  'Friday pre-recorded theory classes',
                  'Lifetime access to all recordings',
                  'Boutique startup guidance & career support',
                  'Course completion certificate',
                  'Dedicated mentor support throughout',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3.5 bg-[#fdf9f4] rounded-xl text-sm text-[#1a1a1a] leading-relaxed border border-[rgba(12,69,99,0.04)]">
                    <div className="w-[22px] h-[22px] rounded-[7px] bg-[#0c4563] flex-shrink-0 flex items-center justify-center mt-0.5">
                      <svg viewBox="0 0 12 12" fill="none" className="w-[11px] h-[11px]">
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

      {/* ══════════════════════════════════════════
          WHY SECTION
      ══════════════════════════════════════════ */}
      <section className="bg-[#fdf9f4] px-[7vw] py-24 sm:px-[6vw] sm:py-16 xs:px-[5vw] xs:py-14">
        <div className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.13em] uppercase text-[#c9a84c] mb-3.5
          before:content-[''] before:w-7 before:h-0.5 before:bg-[#c9a84c] before:rounded">
          Why Choose Us
        </div>
        <h2 className="font-cormorant font-bold text-[#0c4563] leading-snug
          text-[clamp(28px,3vw,46px)]">
          Built for Aspiring<br/>Fashion Entrepreneurs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {whyCards.map(({ title, desc, icon }, i) => (
            <div key={i}
              className="why-card relative overflow-hidden bg-white border border-[rgba(12,69,99,0.1)] rounded-[20px] p-7 pb-8
                transition-all duration-300 cursor-default
                hover:border-[rgba(12,69,99,0.14)] hover:shadow-[0_8px_32px_rgba(12,69,99,0.09)] hover:-translate-y-1">
              {/* big faint number */}
              <div className="font-cormorant font-bold text-[rgba(12,69,99,0.05)] text-[52px] leading-none absolute top-3.5 right-4 select-none">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="w-12 h-12 rounded-[14px] flex items-center justify-center mb-4 border border-[rgba(12,69,99,0.07)]"
                style={{ background: 'linear-gradient(135deg,rgba(12,69,99,0.08),rgba(12,69,99,0.04))' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#0c4563" strokeWidth="1.8"
                  strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                  {icon}
                </svg>
              </div>
              <div className="font-cormorant font-bold text-[#0c4563] text-[19px] mb-2.5">{title}</div>
              <div className="text-[13px] text-[#6b7280] leading-[1.7] font-light">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden text-center px-[7vw] py-24 xs:px-[5vw] xs:py-16"
        style={{ background: 'linear-gradient(135deg,#071e2c 0%,#0c4563 100%)' }}>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse,rgba(201,168,76,0.07) 0%,transparent 65%)' }}/>
        <div className="relative z-10 max-w-[600px] mx-auto">
          <div className="text-[11px] font-semibold tracking-[0.13em] uppercase text-[#c9a84c] mb-4">⚡ Limited Seats Available</div>
          <h2 className="font-cormorant font-bold text-white leading-snug mb-4
            text-[clamp(26px,3.5vw,50px)]">
            Begin Your Fashion Journey This May
          </h2>
          <p className="text-[rgba(255,255,255,0.58)] mb-10 font-light leading-[1.7] text-base">
            Seats are filling fast for the May 4 batch.<br/>
            Secure your spot today and start building your dream boutique.
          </p>
          <div className="flex justify-center gap-3.5 flex-wrap">
            <button className="font-outfit inline-flex items-center gap-2 bg-[#c9a84c] text-[#071e2c]
              px-7 py-3.5 rounded-xl text-sm font-semibold border-none cursor-pointer
              tracking-wide transition-all duration-200
              hover:-translate-y-0.5 hover:bg-[#e8c97a] hover:shadow-[0_10px_28px_rgba(201,168,76,0.28)]">
              Enrol Now — ₹19,999 <ArrowRight/>
            </button>
            <button className="font-outfit inline-flex items-center gap-2
              bg-[rgba(255,255,255,0.05)] text-[rgba(255,255,255,0.82)]
              px-7 py-3.5 rounded-xl text-sm font-normal
              border border-[rgba(255,255,255,0.18)] cursor-pointer
              transition-all duration-200
              hover:border-[rgba(255,255,255,0.45)] hover:bg-[rgba(255,255,255,0.09)]">
              Contact Us for Details
            </button>
          </div>
          <p className="mt-5 text-xs text-[rgba(255,255,255,0.3)] font-light">No commitment — reach out and we'll answer all your questions</p>
        </div>
      </section>


    </div>
  )
}