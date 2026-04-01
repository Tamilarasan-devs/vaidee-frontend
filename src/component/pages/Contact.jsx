import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", course: "", message: "" });
  const [focused, setFocused] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New Enquiry – Vaidhee Design Academy*%0A%0A👤 *Name:* ${encodeURIComponent(form.name)}%0A📞 *Phone:* ${encodeURIComponent(form.phone)}%0A🎓 *Course:* ${encodeURIComponent(form.course)}%0A💬 *Message:* ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/919943999854?text=${text}`, "_blank");
  };

  const inputBase =
    "w-full bg-transparent border-b-2 py-3 px-0 text-[#0c4563] placeholder-[#7fa3bc] text-sm font-medium outline-none transition-all duration-300 focus:placeholder-transparent";

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f0f6fa 0%, #e8f2f8 40%, #ddeef7 100%)",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
      {/* Decorative background shapes */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0c4563 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0c4563 0%, transparent 70%)", transform: "translate(-40%, 40%)" }}
      />

      {/* Gold decorative lines */}
      <div className="absolute top-0 left-0 w-full h-1" style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />
      <div className="absolute bottom-0 left-0 w-full h-1" style={{ background: "linear-gradient(90deg, transparent, #c9a84c, transparent)" }} />

      <div className="relative max-w-6xl mx-auto px-6 py-20">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-3 font-sans"
            style={{ color: "#c9a84c", letterSpacing: "0.35em" }}
          >
            Vaidhee Design Academy
          </p>
          <h1
            className="text-5xl md:text-6xl font-light text-[#0c4563] mb-4"
            style={{ letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            Get in <em className="italic" style={{ color: "#c9a84c" }}>Touch</em>
          </h1>
          <div className="flex items-center justify-center gap-4 mt-5">
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, #c9a84c)" }} />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#c9a84c]" />
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, #c9a84c, transparent)" }} />
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">

          {/* LEFT — Contact Info */}
          <div className="md:col-span-2 space-y-10">

            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(12,69,99,0.05)",
                border: "1px solid rgba(12,69,99,0.12)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p
                className="text-xs tracking-widest uppercase mb-6 font-sans"
                style={{ color: "#c9a84c" }}
              >
                Contact Details
              </p>

              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                  ),
                  label: "Phone / WhatsApp",
                  value: "+91 99439 99854",
                  link: "tel:+919943999854",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                  ),
                  label: "Email",
                  value: "vaidheedesignacademy@gmail.com",
                  link: "mailto:vaidheedesignacademy@gmail.com",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>
                  ),
                  label: "Address",
                  value: "Vaidhee Design Academy, Coimbatore",
                  link: null,
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-[#0c4563]"
                    style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-sans mb-1" style={{ color: "#7fa3bc" }}>
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="text-sm font-semibold text-[#0c4563] hover:text-[#c9a84c] transition-colors duration-200 font-sans break-all"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-[#0c4563] font-sans">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp quick button */}
            <a
              href="https://wa.me/919943999854"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 justify-center w-full py-4 rounded-xl font-sans font-semibold text-sm tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background: "linear-gradient(135deg, #25d366, #128c47)",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
              }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* RIGHT — Form */}
          <div
            className="md:col-span-3 rounded-2xl p-10"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(201,168,76,0.2)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 20px 60px rgba(12,69,99,0.1)",
            }}
          >
            <p
              className="text-xs tracking-[0.35em] uppercase font-sans mb-2"
              style={{ color: "#c9a84c" }}
            >
              Send a Message
            </p>
            <h2 className="text-3xl font-light text-[#0c4563] mb-8" style={{ letterSpacing: "-0.01em" }}>
              We'd love to hear from you
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {[
                { name: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                { name: "course", label: "Course Interested", type: "text", placeholder: "e.g. Fashion Design, Pattern Making…" },
              ].map((field) => (
                <div key={field.name} className="relative">
                  <label
                    className="block text-xs uppercase tracking-widest mb-2 font-sans transition-colors duration-200"
                    style={{ color: focused === field.name ? "#c9a84c" : "#7fa3bc" }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    onFocus={() => setFocused(field.name)}
                    onBlur={() => setFocused("")}
                    className={inputBase}
                    style={{
                      borderBottom: `2px solid ${focused === field.name ? "#c9a84c" : "rgba(12,69,99,0.2)"}`,
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                    required
                  />
                </div>
              ))}

              <div className="relative">
                <label
                  className="block text-xs uppercase tracking-widest mb-2 font-sans transition-colors duration-200"
                  style={{ color: focused === "message" ? "#c9a84c" : "#7fa3bc" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your goals…"
                  rows={4}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused("")}
                  className={inputBase + " resize-none"}
                  style={{
                    borderBottom: `2px solid ${focused === "message" ? "#c9a84c" : "rgba(12,69,99,0.2)"}`,
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                />
              </div>

              <button
                type="submit"
                className="group relative w-full py-4 rounded-xl font-sans font-semibold text-sm tracking-[0.2em] uppercase overflow-hidden transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                style={{
                  background: "linear-gradient(135deg, #0c4563, #1a6b97)",
                  color: "#fff",
                  boxShadow: "0 8px 30px rgba(12,69,99,0.35)",
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Send via WhatsApp
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(135deg, #1a6b97, #0c4563)" }}
                />
              </button>

              <p className="text-xs text-center font-sans" style={{ color: "#7fa3bc" }}>
                Clicking submit will open WhatsApp with your message pre-filled.
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Google Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');
        * { box-sizing: border-box; }
        input::placeholder, textarea::placeholder { color: #7fa3bc; }
      `}</style>
    </div>
  );
}