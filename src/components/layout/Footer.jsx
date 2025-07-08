import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
import axios from 'axios';
import { useTranslation } from 'react-i18next'; // ✅ Added i18n hook

const Footer = () => {
  const { t } = useTranslation(); // ✅ Initialize i18n hook
  const [mediaItems, setMediaItems] = useState([]);
  const [eventItems, setEventItems] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/media/')
      .then(res => setMediaItems(res.data))
      .catch(err => console.error("Error fetching media items:", err));

    axios.get('http://127.0.0.1:8000/api/events/')
      .then(res => setEventItems(res.data))
      .catch(err => console.error("Error fetching event items:", err));
  }, []);

  return (
    <footer className="bg-[#184E77] text-white px-6 md:px-16 py-10 w-full" data-aos="fade-up">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div data-aos="fade-up">
          <img src={Logo} alt="Smart City Thiruvananthapuram Logo" className="w-24" />
          <p className="text-sm leading-relaxed mb-4">
            {t('footer.description')} {/* ✅ i18n key */}
          </p>
          <div className="text-sm space-y-1">
            <p className="flex items-center gap-2"><span>📅</span> {t('footer.date')}</p>
            <p className="flex items-center gap-2"><span>⏰</span> {t('footer.time')}</p>
            <p className="flex items-center gap-2"><span>👤</span> {t('footer.visitors')}: 125,847</p>
          </div>
        </div>

        {/* Column 2: In Media */}
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-500 pb-1">{t('footer.in_media')}</h3> {/* ✅ i18n key */}
          <ul className="space-y-4 text-sm">
            {mediaItems.map((item) => (
              <li key={item.id} className="flex gap-3">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-10 object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold hover:text-gray-300 transition">{item.title}</p>
                  <span className="text-gray-300">{item.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Recent Events */}
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-500 pb-1">{t('footer.recent_events')}</h3> {/* ✅ i18n key */}
          <ul className="space-y-4 text-sm">
            {eventItems.map((event) => (
              <li key={event.id} className="flex gap-3">
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-14 h-10 object-cover"
                  />
                )}
                <div>
                  <p className="font-semibold hover:text-gray-300 transition">{event.title}</p>
                  <span className="text-gray-300">{event.date}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info + Social Links */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-lg font-semibold mb-4 border-b border-gray-500 pb-1">{t('footer.contact_us')}</h3> {/* ✅ i18n key */}
          <div className="space-y-4 text-sm">
            <p className="flex items-start gap-2"><FaPhoneAlt className="mt-1" /> +91 - 0471 - 4010374</p>
            <p className="flex items-start gap-2"><FaEnvelope className="mt-1" /> info@smartcitytvm.in</p>
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              <span>
                4th Floor, Felicity Square Building<br />
                Opp AG Office, Statue<br />
                Thiruvananthapuram<br />
                <strong>{t('footer.pincode')}: 695001</strong> {/* ✅ i18n key */}
              </span>
            </p>
          </div>

          <div className="mt-6">
            <p className="mb-2 font-semibold">{t('footer.follow_us')}</p> {/* ✅ i18n key */}
            <div className="flex gap-4 text-white text-lg">
              <a href="https://www.facebook.com/smarttrivandrum/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:scale-110 transition-transform duration-300 hover:text-gray-300" />
              </a>
              <a href="https://www.linkedin.com/company/smart-city-thiruvananthapuram-limited/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="hover:scale-110 transition-transform duration-300 hover:text-gray-300" />
              </a>
              <a href="https://x.com/smarttrivandrum/" target="_blank" rel="noopener noreferrer">
                <FaXTwitter className="hover:scale-110 transition-transform duration-300 hover:text-gray-300" />
              </a>
              <a href="https://www.instagram.com/smarttrivandrum/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:scale-110 transition-transform duration-300 hover:text-gray-300" />
              </a>
              <a href="https://www.youtube.com/@smartcitythiruvananthapura7226/videos" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="hover:scale-110 transition-transform duration-300 hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 mt-10 pt-4 flex flex-col md:flex-row justify-between text-sm text-gray-300" data-aos="fade-in">
        <p>{t('footer.copyright')}</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="/covid" className="hover:text-white transition">{t('footer.covid')}</a>
          <a href="/terms" className="hover:text-white transition">{t('footer.terms')}</a>
          <a href="/privacy" className="hover:text-white transition">{t('footer.privacy')}</a>
          <a href="/disclaimer" className="hover:text-white transition">{t('footer.disclaimer')}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
