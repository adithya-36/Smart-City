import React from 'react';
import Logo from '../../assets/images/SCTLLogo.png';
import { FaXTwitter } from "react-icons/fa6";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="bg-[#184E77] text-white px-6 md:px-16 py-10 w-full transition-opacity duration-100"
      style={{
        position: 'relative',
      }}
    >
      <div className="grid md:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div>
          <img src={Logo} alt="Smart City Thiruvananthapuram Logo" className="w-24" />
          <p className="text-sm leading-relaxed mb-4">
            Smart City Thiruvananthapuram is an integrated knowledge-based initiative for sustainable urban development.
          </p>
          <div className="text-sm space-y-1">
            <p className="flex items-center gap-2"><span>📅</span> 22-06-2025 (Sunday)</p>
            <p className="flex items-center gap-2"><span>⏰</span> 13 : 46 : 42</p>
            <p className="flex items-center gap-2"><span>👤</span> Visitors: 125,847</p>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-500 pb-1">In Media</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <p className="font-semibold hover:text-gray-300 transition">Smart City Thiruvananthapuram launches new digital governance initiative</p>
              <span className="text-gray-300">December 15, 2024</span>
            </li>
            <li>
              <p className="font-semibold hover:text-gray-300 transition">Public Wi-Fi expansion project reaches 500 hotspots across the city</p>
              <span className="text-gray-300">December 12, 2024</span>
            </li>
            <li>
              <p className="font-semibold hover:text-gray-300 transition">Smart traffic management system reduces congestion by 30%</p>
              <span className="text-gray-300">December 10, 2024</span>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-500 pb-1">Recent Events</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <div className="w-14 h-10 bg-gray-300" />
              <div>
                <p className="font-semibold hover:text-gray-300 transition">Smart City Innovation Summit 2024</p>
                <span className="text-gray-300">January 15, 2025</span>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="w-14 h-10 bg-gray-300" />
              <div>
                <p className="font-semibold hover:text-gray-300 transition">Digital Literacy Workshop for Citizens</p>
                <span className="text-gray-300">January 20, 2025</span>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="w-14 h-10 bg-gray-300" />
              <div>
                <p className="font-semibold hover:text-gray-300 transition">Green Energy Initiative Launch</p>
                <span className="text-gray-300">January 25, 2025</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-500 pb-1">Contact Us</h3>
          <div className="space-y-4 text-sm">
            <p className="flex items-start gap-2"><FaPhoneAlt className="mt-1" /> +91 - 0471 - 4010374</p>
            <p className="flex items-start gap-2"><FaEnvelope className="mt-1" /> info@smartcitytvm.in</p>
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                4th Floor, Felicity Square Building<br />
                Opp AG Office, Statue<br />
                Thiruvananthapuram<br />
                <strong>Pincode: 695001</strong>
              </span>
            </p>
          </div>

          <div className="mt-6">
            <p className="mb-2 font-semibold">Follow Us</p>
            <div className="flex gap-4 text-white text-lg">
              <a href="https://www.facebook.com/smarttrivandrum/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-gray-300" />
              </a>
              <a href="https://www.linkedin.com/company/smart-city-thiruvananthapuram-limited/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-gray-300" />
              </a>
              <a href="https://x.com/smarttrivandrum/" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-gray-300" />
              </a>
              <a href="https://www.instagram.com/smarttrivandrum/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-gray-300" />
              </a>
              <a href="https://www.youtube.com/@smartcitythiruvananthapura7226/videos" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="cursor-pointer hover:scale-110 transition-transform duration-300 hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-10 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-300">
        <p>Copyright © 2025 Smart City Thiruvananthapuram - All Rights Reserved</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="/terms" className="hover:text-white transition">Terms & Conditions</a>
          <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
          <a href="/disclaimer" className="hover:text-white transition">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
