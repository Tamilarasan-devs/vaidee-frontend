import React, { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../../apiConfig";

const NAVY = "#0c4563";
const GOLD = "#b8933a";

export default function RecordedCourses() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Static credentials
  const STATIC_USER = "1234567890";
  const STATIC_PASS = "1234567890";

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.username === STATIC_USER && loginData.password === STATIC_PASS) {
      setIsAuthenticated(true);
      setError(null);
    } else {
      setError("Invalid username or password");
    }
  };

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${BASE_URL}/api/recorded-courses`);
      if (data.success) {
        setCourses(data.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchCourses();
    }
  }, [isAuthenticated]);

  // Login Gate UI
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 bg-[#fdf8f2]">
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl w-full max-w-md border border-[#e8e0d5]">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#0c4563] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-[#0c4563]">Student Library</h2>
            <p className="text-[#7a7060] text-sm mt-2">Please enter your credentials to access lessons</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-[10px] font-bold text-[#7a7060] uppercase tracking-widest mb-2 ml-1">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full p-4 bg-[#fdf8f2] border border-[#e8e0d5] rounded-2xl focus:ring-2 focus:ring-[#c9a84c] outline-none transition-all"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-[10px] font-bold text-[#7a7060] uppercase tracking-widest mb-2 ml-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full p-4 bg-[#fdf8f2] border border-[#e8e0d5] rounded-2xl focus:ring-2 focus:ring-[#c9a84c] outline-none transition-all"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required
              />
            </div>
            
            {error && (
              <div className="bg-red-50 text-red-600 text-xs font-semibold p-4 rounded-xl text-center animate-shake">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#0c4563] text-white py-4 rounded-2xl font-bold hover:bg-[#082f45] transition-all shadow-xl shadow-[#0c4563]/20 text-sm tracking-wide"
            >
              Access Library →
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Course List UI
  return (
    <div className="min-h-screen bg-[#fdf8f2] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-[#e8e0d5] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[#c9a84c] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
              <span className="w-8 h-px bg-[#c9a84c] opacity-40"></span>
              Recorded Video Library
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0c4563] tracking-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Tailoring Lessons
            </h1>
          </div>
          <p className="text-[#7a7060] max-w-sm text-sm leading-relaxed">
            Welcome to your digital learning space. Explore our collection of high-definition tailoring video lessons.
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-10 h-10 border-4 border-[#0c4563] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : courses.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-[40px] border border-[#e8e0d5] shadow-sm">
            <p className="text-[#7a7060] italic">No lessons available in the library yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {courses.map((c) => (
              <div key={c._id} className="bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#e8e0d5] group">
                <div className="aspect-video bg-slate-900 relative">
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={formatVideoUrl(c.videoUrl)}
                    title={c.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-2 h-2 rounded-full bg-[#c9a84c]"></span>
                    <span className="text-[10px] font-bold text-[#c9a84c] uppercase tracking-widest">Masterclass</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0c4563] mb-4 group-hover:text-[#c9a84c] transition-colors duration-300">
                    {c.title}
                  </h3>
                  <p className="text-[#7a7060] text-sm leading-relaxed line-clamp-3">
                    {c.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Helper to handle YouTube links (simple version)
function formatVideoUrl(url) {
  if (url.includes("youtube.com/watch?v=")) {
    const videoId = url.split("v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
}
