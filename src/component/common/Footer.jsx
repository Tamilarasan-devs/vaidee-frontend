import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.png.jpg";

export default function PremiumFooter() {
  return (
    <footer className="bg-[#0c4563] text-gray-200 pt-16 pb-6">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Logo" className="w-20 h-auto object-contain" />
          </div>

          <p className="text-sm text-gray-300 leading-relaxed">
            Vaidhee Design Academy helps you transform your passion for fashion
            into a successful boutique business with hands-on training.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-5">
            <a href="https://www.instagram.com/vaidheedesign_academy" target="_blank">
              <FaInstagram className="text-lg hover:text-white hover:scale-110 transition" />
            </a>

            <a href="https://youtube.com/@vaidheedesignacademy" target="_blank">
              <FaYoutube className="text-lg hover:text-white hover:scale-110 transition" />
            </a>

            <a href="https://wa.me/919943999854" target="_blank">
              <FaWhatsapp className="text-lg hover:text-green-400 hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Courses</a></li>
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* PROGRAMS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Programs</h3>
          <ul className="space-y-2 text-sm">
            <li>Fashion Designing Course</li>
            <li>Boutique Setup Training</li>
            <li>Online Classes</li>
            <li>Certification Program</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>

          <div className="space-y-3 text-sm">
            
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Coimbatore, Tamil Nadu
            </p>

            <a href="tel:9943999854" className="flex items-center gap-2 hover:text-white">
              <Phone size={16} /> 9943999854
            </a>

            <a href="mailto:vaidheedesignacademy@gmail.com" className="flex items-center gap-2 hover:text-white">
              <Mail size={16} /> vaidheedesignacademy@gmail.com
            </a>

            <a 
              href="https://wa.me/919943999854"
              target="_blank"
              className="flex items-center gap-2 text-green-400 hover:text-green-300 mt-2"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>

          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/20 mt-12 pt-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-7xl mx-auto px-6">
          
          <p className="text-gray-300 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Vaidhee Design Academy. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a href="https://www.instagram.com/vaidheedesign_academy" target="_blank">
              <FaInstagram className="cursor-pointer hover:text-white hover:scale-110 transition" />
            </a>

            <a href="https://youtube.com/@vaidheedesignacademy" target="_blank">
              <FaYoutube className="cursor-pointer hover:text-white hover:scale-110 transition" />
            </a>

            <a href="https://wa.me/919943999854" target="_blank">
              <FaWhatsapp className="cursor-pointer hover:text-green-400 hover:scale-110 transition" />
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}