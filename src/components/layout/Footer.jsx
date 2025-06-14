import React, { useEffect, useState } from 'react';
import Logo from '../../assets/images/smart-city-logo-new.png';
import LinkedIn from '../../assets/images/linkedin.png'
import Twitter from '../../assets/images/twitter.png'
import Instagram from '../../assets/images/instagram.png'
import Location from '../../assets/images/location.png'
import Mail from '../../assets/images/mail.png'
import Mobile from '../../assets/images/mobile.png'
const Footer = () => {
  const [dateTime, setDateTime] = useState({
    date: '',
    time: '',
    day: '',
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      const date = `${now.getFullYear()}-${(now.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;

      const time = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes()
        .toString()
        .padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

      const day = days[now.getDay()];
      setDateTime({ date, time, day });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bg-gradient-to-br from-[#1E6091] to-[#0d3b61] text-white px-4 py-10 w-full mt-auto'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {/* CONTACT US */}
        <div className='md:col-span-1'>
          <p className='text-lg font-bold mb-4 pb-2 uppercase border-b-2 border-[#34A0A4]'>Contact Us</p>
          <ul className='text-sm space-y-3'>
            <li className='flex items-start gap-2 '>
              <img className='w-5' src={Location} alt="Location" />
              <div className='space-y-1'>
                <p className='font-medium'>4th Floor, Felicity Square Building</p>
                <p>Opp AG Office, Statue</p>
                <p>Thiruvananthapuram</p>
                <p className='font-semibold text-[#B5E48C]'>Pincode: 695001</p>
              </div>
            </li>
            <li className='flex items-center mt-4 gap-2'>
              <img className='w-5' src={Mobile} alt="" />
              <span className='font-medium'>+91 - 0471 - 4010374</span>
            </li>
            <li className='flex items-center mt-4 gap-2 '>
              <img className='w-5' src={Mail} alt="" />
              <span className='font-medium'>info@smartcitytvm.in</span>
            </li>
          </ul>
        </div>

        {/* INFO LINKS - Expanded to 2 columns */}
        <div className='md:col-span-1'>
          <p className='text-lg font-bold mb-4 pb-2 uppercase border-b-2 border-[#34A0A4]'>Quick Links</p>
          <div className='grid grid-cols-2 gap-6'>
            <ul className='space-y-3'>
              <li className='hover:text-[#B5E48C] transition-colors cursor-pointer flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#52B69A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Terms and Conditions
              </li>
              <li className='hover:text-[#B5E48C] transition-colors cursor-pointer flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#52B69A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Copyright policy
              </li>
              <li className='hover:text-[#B5E48C] transition-colors cursor-pointer flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#52B69A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Hyperlink Policy
              </li>
              <li className='hover:text-[#B5E48C] transition-colors cursor-pointer flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#52B69A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Privacy Policy
              </li>
              <li className='hover:text-[#B5E48C] transition-colors cursor-pointer flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#52B69A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Downloads
              </li>
            </ul>
            <ul className='space-y-3'>
              <li className='hover:text-[#B5E48C] transition-colors cursor-pointer flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#52B69A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Disclaimer
              </li>
              <li className='hover:text-[#B5E48C] transition-colors cursor-pointer flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#52B69A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                FAQ
              </li>
              <li className='hover:text-[#B5E48C] transition-colors cursor-pointer flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#52B69A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                RTI
              </li>
              <li className='hover:text-[#B5E48C] transition-colors cursor-pointer flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#52B69A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Tenders
              </li>
              <li className='hover:text-[#B5E48C] transition-colors cursor-pointer flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-[#52B69A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Gallery
              </li>
            </ul>
          </div>
        </div>

        {/* DATE TIME & LOGO - Expanded section */}
        <div className='flex flex-col justify-between md:col-span-1'>
          <div className='bg-[#184E77] p-5 rounded-lg mb-6 border border-[#34A0A4]'>
            <p className='font-bold mb-3 text-[#B5E48C] flex items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Current Status
            </p>
            <div className='space-y-2'>
              <div className='flex justify-between items-center'>
                <span className='text-[#99D98C] font-medium'>Date:</span> 
                <span className='font-mono bg-[#1E6091]/50 px-2 py-1 rounded'>{dateTime.date}</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-[#99D98C] font-medium'>Time:</span> 
                <span className='font-mono bg-[#1E6091]/50 px-2 py-1 rounded'>{dateTime.time}</span>
              </div>
              <div className='flex justify-between items-center'>
                <span className='text-[#99D98C] font-medium'>Day:</span> 
                <span className='font-mono bg-[#1E6091]/50 px-2 py-1 rounded'>{dateTime.day}</span>
              </div>
            </div>
          </div>
          
          <div className='flex flex-col items-center'>
            <img 
              src={Logo} 
              alt="Smart City Trivandrum Logo" 
              className='bg-white p-2 max-w-[220px] rounded-lg shadow-lg hover:opacity-100 transition-opacity opacity-95 mb-4' 
            />
            <div className='text-center'>
              <p className='text-sm text-[#B5E48C] mb-2'>Connect with us</p>
              <div className='flex justify-center space-x-4'>
                <a href="#" className='bg-[#1E6091] p-2 rounded-full hover:bg-[#34A0A4] transition-colors'>
                  <img className='w-6 rounded-full' src={LinkedIn} alt="linkedin" />
                </a>
                <a href="#" className='bg-[#1E6091] p-2 rounded-full hover:bg-[#34A0A4] transition-colors'>
                  <img className='w-6 rounded-full' src={Twitter} alt="twitter" />
                </a>
                <a href="#" className='bg-[#1E6091] p-2 rounded-full hover:bg-[#34A0A4] transition-colors'>
                  <img className='w-6 rounded-full ' src={Instagram} alt="instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className='mt-10 pt-6 border-t border-[#34A0A4]/30 text-center text-sm text-[#B5E48C]'>
        <p className='mb-1'>© {new Date().getFullYear()} Smart City Trivandrum Limited. All rights reserved.</p>
        <p className='text-xs opacity-80'>Designed and developed with ❤️ for the people of Thiruvananthapuram</p>
      </div>
    </div>
  );
};

export default Footer;