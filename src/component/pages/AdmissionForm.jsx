import React, { useState } from "react";

const NAVY = "#0c4563";
const GOLD = "#b8933a";
const LIGHT_NAVY = "#e8f2f8";
const MID_NAVY = "#1a6b97";

const SectionHeader = ({ number, title, icon }) => (
  <div className="flex items-center gap-3 mb-6">
    <div
      className="flex items-center justify-center w-8 h-8 rounded-full text-white text-xs font-bold flex-shrink-0"
      style={{ background: NAVY, fontFamily: "'DM Sans', sans-serif" }}
    >
      {number}
    </div>
    <div className="flex items-center gap-2">
      <span style={{ fontSize: 16 }}>{icon}</span>
      <h3
        className="text-sm font-semibold tracking-widest uppercase"
        style={{ color: NAVY, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.12em" }}
      >
        {title}
      </h3>
    </div>
    <div className="flex-1 h-px ml-2" style={{ background: `linear-gradient(90deg, ${NAVY}30, transparent)` }} />
  </div>
);

const Field = ({ label, children, half }) => (
  <div className={half ? "col-span-1" : "col-span-2"}>
    <label
      className="block text-xs font-semibold uppercase tracking-widest mb-1.5"
      style={{ color: `${NAVY}99`, fontFamily: "'DM Sans', sans-serif" }}
    >
      {label}
    </label>
    {children}
  </div>
);

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  border: `1.5px solid ${NAVY}22`,
  borderRadius: 8,
  fontSize: 14,
  color: NAVY,
  background: "#fff",
  outline: "none",
  fontFamily: "'DM Sans', sans-serif",
  transition: "border-color 0.2s",
};

const Input = ({ ...props }) => {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...props}
      style={{ ...inputStyle, borderColor: focused ? MID_NAVY : `${NAVY}22` }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  );
};

const Select = ({ children, ...props }) => {
  const [focused, setFocused] = useState(false);
  return (
    <select
      {...props}
      style={{ ...inputStyle, borderColor: focused ? MID_NAVY : `${NAVY}22`, cursor: "pointer" }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {children}
    </select>
  );
};

const RadioGroup = ({ options, name, value, onChange }) => (
  <div className="flex flex-wrap gap-3 mt-1">
    {options.map((opt) => (
      <label
        key={opt}
        className="flex items-center gap-2 cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
        style={{
          border: `1.5px solid ${value === opt ? NAVY : `${NAVY}22`}`,
          background: value === opt ? `${NAVY}08` : "#fff",
          color: value === opt ? NAVY : `${NAVY}88`,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 13,
        }}
      >
        <input
          type="radio"
          name={name}
          value={opt}
          checked={value === opt}
          onChange={() => onChange(opt)}
          className="hidden"
        />
        <span
          className="w-3.5 h-3.5 rounded-full border-2 flex items-center justify-center flex-shrink-0"
          style={{ borderColor: value === opt ? NAVY : `${NAVY}44` }}
        >
          {value === opt && (
            <span className="w-2 h-2 rounded-full" style={{ background: NAVY }} />
          )}
        </span>
        {opt}
      </label>
    ))}
  </div>
);

export default function AdmissionForm() {
  const [form, setForm] = useState({
    fullName: "", fatherName: "", dob: "", gender: "",
    phone: "", whatsapp: "", email: "",
    address: "", city: "", pincode: "",
    qualification: "", college: "",
    batch: "", joiningDate: "",
    paymentMode: "", advancePaid: "",
    // declaration: false,
  });

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });
  const setRadio = (key) => (val) => setForm({ ...form, [key]: val });

  const balance = () => {
    const adv = parseFloat(form.advancePaid) || 0;
    return (19999 - adv).toLocaleString("en-IN");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Admission form submitted successfully! 🎉");
  };

  return (
    <div
      className="min-h-screen py-10 px-4"
      style={{
        background: `linear-gradient(160deg, #f4f9fc 0%, #eaf3f9 50%, #f0f6fa 100%)`,
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600&display=swap');`}</style>

      <div className="max-w-3xl mx-auto">

        {/* ── HEADER ── */}
        <div
          className="rounded-2xl overflow-hidden mb-6"
          style={{ background: NAVY, boxShadow: "0 12px 40px rgba(12,69,99,0.25)" }}
        >
          {/* gold top bar */}
          <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />

          <div className="px-8 py-8 flex flex-col items-center text-center">
            {/* logo circle */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
              style={{ background: "rgba(255,255,255,0.1)", border: `2px solid ${GOLD}55` }}
            >
              <svg viewBox="0 0 40 40" fill="none" width="32" height="32">
                <path d="M20 4 L36 14 L36 26 L20 36 L4 26 L4 14 Z" stroke={GOLD} strokeWidth="1.5" fill="none"/>
                <path d="M20 10 L30 16 L30 24 L20 30 L10 24 L10 16 Z" fill={`${GOLD}22`} stroke={GOLD} strokeWidth="1"/>
                <circle cx="20" cy="20" r="3" fill={GOLD}/>
              </svg>
            </div>

            <p
              className="text-xs tracking-[0.4em] uppercase mb-1"
              style={{ color: `${GOLD}bb`, fontFamily: "'DM Sans', sans-serif" }}
            >
              Admission Form
            </p>
            <h1
              className="text-3xl font-semibold text-white mb-1"
              style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "-0.01em" }}
            >
              Vaidhee Design Academy
            </h1>
            <div className="flex items-center gap-3 mt-2">
              <div className="h-px w-10" style={{ background: `${GOLD}66` }} />
              <p className="text-xs uppercase tracking-widest" style={{ color: `${GOLD}99` }}>
                6 Months Fashion Designing Course
              </p>
              <div className="h-px w-10" style={{ background: `${GOLD}66` }} />
            </div>
          </div>

          {/* bottom stats strip */}
          <div
            className="grid grid-cols-3 divide-x"
            style={{ borderTop: `1px solid rgba(255,255,255,0.1)`, divideColor: "rgba(255,255,255,0.1)" }}
          >
            {[["Duration", "6 Months"], ["Fees", "₹19,999"], ["Batches", "3 Daily"]].map(([label, val]) => (
              <div key={label} className="py-3 flex flex-col items-center" style={{ borderRight: "1px solid rgba(255,255,255,0.1)" }}>
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</span>
                <span className="text-sm font-semibold text-white">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── FORM CARD ── */}
        <form onSubmit={handleSubmit}>
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "#fff",
              border: `1px solid ${NAVY}15`,
              boxShadow: "0 4px 24px rgba(12,69,99,0.08)",
            }}
          >

            {/* ── Section 1: Personal ── */}
            <div className="p-7 pb-5" style={{ borderBottom: `1px solid ${NAVY}10` }}>
              <SectionHeader number="1" title="Personal Details" icon="👤" />
              <div className="grid grid-cols-2 gap-x-5 gap-y-5">
                <Field label="Full Name"><Input value={form.fullName} onChange={set("fullName")} placeholder="Enter full name" /></Field>
                <Field label="Father / Husband Name"><Input value={form.fatherName} onChange={set("fatherName")} placeholder="Enter name" /></Field>
                <Field label="Date of Birth" half><Input type="date" value={form.dob} onChange={set("dob")} /></Field>
                <Field label="Gender" half>
                  <RadioGroup options={["Male", "Female", "Other"]} name="gender" value={form.gender} onChange={setRadio("gender")} />
                </Field>
                <Field label="Phone Number" half><Input type="tel" value={form.phone} onChange={set("phone")} placeholder="+91 XXXXX XXXXX" /></Field>
                <Field label="WhatsApp Number" half><Input type="tel" value={form.whatsapp} onChange={set("whatsapp")} placeholder="+91 XXXXX XXXXX" /></Field>
                <Field label="Email ID"><Input type="email" value={form.email} onChange={set("email")} placeholder="example@email.com" /></Field>
              </div>
            </div>

            {/* ── Section 2: Address ── */}
            <div className="p-7 pb-5" style={{ borderBottom: `1px solid ${NAVY}10` }}>
              <SectionHeader number="2" title="Address Details" icon="📍" />
              <div className="grid grid-cols-2 gap-x-5 gap-y-5">
                <Field label="Full Address">
                  <textarea
                    value={form.address}
                    onChange={set("address")}
                    placeholder="Door No, Street, Area..."
                    rows={3}
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </Field>
                <div className="col-span-1 grid grid-cols-1 gap-5">
                  <Field label="City"><Input value={form.city} onChange={set("city")} placeholder="City" /></Field>
                  <Field label="Pincode"><Input value={form.pincode} onChange={set("pincode")} placeholder="6-digit pincode" /></Field>
                </div>
              </div>
            </div>

            {/* ── Section 3: Education ── */}
            <div className="p-7 pb-5" style={{ borderBottom: `1px solid ${NAVY}10` }}>
              <SectionHeader number="3" title="Educational Details" icon="🎓" />
              <div className="grid grid-cols-2 gap-x-5 gap-y-5">
                <Field label="Highest Qualification" half>
                  <Select value={form.qualification} onChange={set("qualification")}>
                    <option value="">Select qualification</option>
                    {["10th / SSLC", "12th / HSC", "Diploma", "UG Degree", "PG Degree", "Other"].map(q => (
                      <option key={q} value={q}>{q}</option>
                    ))}
                  </Select>
                </Field>
                <Field label="College / School Name" half><Input value={form.college} onChange={set("college")} placeholder="Institution name" /></Field>
              </div>
            </div>

            {/* ── Section 4: Course ── */}
            <div className="p-7 pb-5" style={{ borderBottom: `1px solid ${NAVY}10` }}>
              <SectionHeader number="4" title="Course Details" icon="📚" />
              <div className="grid grid-cols-2 gap-x-5 gap-y-5">
                <Field label="Course Name">
                  <div
                    className="px-4 py-2.5 rounded-lg text-sm font-semibold"
                    style={{ background: `${NAVY}08`, color: NAVY, border: `1.5px solid ${NAVY}20` }}
                  >
                    6 Months Fashion Designing Course
                  </div>
                </Field>
                <Field label="Joining Date" half><Input type="date" value={form.joiningDate} onChange={set("joiningDate")} /></Field>
                <Field label="Preferred Batch" half>
                  <RadioGroup options={["Morning", "Afternoon", "Evening"]} name="batch" value={form.batch} onChange={setRadio("batch")} />
                </Field>
              </div>
            </div>

            {/* ── Section 5: Payment ── */}
            <div className="p-7 pb-5" style={{ borderBottom: `1px solid ${NAVY}10` }}>
              <SectionHeader number="5" title="Payment Details" icon="💳" />

              {/* Fee summary card */}
              <div
                className="rounded-xl p-4 mb-5 grid grid-cols-3 gap-4"
                style={{ background: `linear-gradient(135deg, ${NAVY}08, ${NAVY}04)`, border: `1px solid ${NAVY}15` }}
              >
                {[["Total Fees", "₹19,999"], ["Advance Paid", `₹${parseFloat(form.advancePaid || 0).toLocaleString("en-IN")}`], ["Balance Due", `₹${balance()}`]].map(([lbl, val]) => (
                  <div key={lbl} className="text-center">
                    <p className="text-xs uppercase tracking-wider mb-1" style={{ color: `${NAVY}77` }}>{lbl}</p>
                    <p className="text-base font-bold" style={{ color: NAVY }}>{val}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-x-5 gap-y-5">
                <Field label="Payment Mode">
                  <RadioGroup options={["Cash", "UPI", "Bank Transfer"]} name="paymentMode" value={form.paymentMode} onChange={setRadio("paymentMode")} />
                </Field>
                <Field label="Advance Amount Paid" half>
                  <Input type="number" value={form.advancePaid} onChange={set("advancePaid")} placeholder="Enter amount" />
                </Field>
              </div>
            </div>

            {/* ── Section 6: Declaration ── */}
            

            {/* ── For Office Use ── */}
            <div className="p-7 pb-5" style={{ borderBottom: `1px solid ${NAVY}10`, background: `${NAVY}03` }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1" style={{ background: `${NAVY}15` }} />
                <span className="text-xs tracking-widest uppercase px-3" style={{ color: `${NAVY}55` }}>
                  For Office Use Only
                </span>
                <div className="h-px flex-1" style={{ background: `${NAVY}15` }} />
              </div>
              <div className="grid grid-cols-3 gap-5">
                {["Admission No.", "Received By", "Remarks"].map((lbl) => (
                  <Field key={lbl} label={lbl} half><Input placeholder="—" /></Field>
                ))}
              </div>
            </div>

            {/* ── Submit Button ── */}
            <div className="p-7">
              <button
                type="submit"
                className="w-full py-4 rounded-xl text-white font-semibold text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90 active:scale-[0.99]"
                style={{
                  background: `linear-gradient(135deg, ${NAVY}, ${MID_NAVY})`,
                  boxShadow: `0 8px 24px ${NAVY}40`,
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.12em",
                }}
              >
                Submit Admission Form
              </button>
              <p className="text-center text-xs mt-3" style={{ color: `${NAVY}55` }}>
                Please review all fields before submitting
              </p>
            </div>
          </div>
        </form>

        {/* Footer */}
        <p className="text-center text-xs mt-6" style={{ color: `${NAVY}44` }}>
          © 2025 Vaidhee Design Academy · Coimbatore · vaidheedesignacademy@gmail.com
        </p>
      </div>
    </div>
  );
}