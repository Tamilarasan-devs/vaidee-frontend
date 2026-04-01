import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../../assets/logo.png.jpg"; // 👉 add your logo image here

export default function PremiumFooter() {
  return (
    <footer className="bg-[#0c4563] text-gray-200 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={logo}
              alt="Logo"
              className="w-30 h-30"
            />
           
          </div>

        

          {/* SOCIAL */}
       
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Courses</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Web Development</a></li>
            <li><a href="#" className="hover:text-white">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-white">Digital Marketing</a></li>
            <li><a href="#" className="hover:text-white">Consulting</a></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Tamil Nadu, India
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> info@yourbrand.com
            </p>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
   <div className="border-t border-white/20 mt-10 pt-6">
  <div className="flex flex-col md:flex-row items-center justify-center">
    
    <p className="text-gray-300 text-sm text-center md:text-left">
      © {new Date().getFullYear()} YourBrand. All rights reserved  .
    </p>

    <div className="flex items-center gap-5">
      <FaFacebookF className="text-lg cursor-pointer hover:text-white hover:scale-110 transition duration-300" />
      <FaInstagram className="text-lg cursor-pointer hover:text-white hover:scale-110 transition duration-300" />
      <FaTwitter className="text-lg cursor-pointer hover:text-white hover:scale-110 transition duration-300" />
    </div>

  </div>
</div>
    </footer>
  );
}
