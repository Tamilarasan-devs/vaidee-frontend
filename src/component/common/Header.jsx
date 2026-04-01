import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png.jpg"; // 👉 add your logo image here
import { Link } from "react-router-dom";
export default function PremiumHeader() {
  const [open, setOpen] = useState(false);

 const navItems = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Admission Form", path: "/admission" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Gallery", path: "/gallery" },
];

  return (
    <header className="w-full shadow-md bg-[#0c4563] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-3 px-6 py-3 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="w-30 h-25 mb-1"
          />
          
        </div>

        <nav className="hidden md:flex items-center gap-8">
  {navItems.map((item, index) => (
    <Link
      key={index}
      to={item.path}
      className="relative group font-medium"
    >
      {item.name}
      <span className="absolute left-0 bottom-0 w-0  bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  ))}
</nav>

        {/* BUTTON */}
        <div className="hidden md:block">
          <button className="bg-white text-[#10277A] px-5 py-2 rounded-xl font-semibold hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#10277A] px-6 pb-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className="border-b border-white/20 pb-2"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}

            <button className="mt-4 bg-white text-[#10277A] px-5 py-2 rounded-xl font-semibold">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
