import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 p-5 text-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
          {/* Column 1 */}
          <div>
            <h4 className="text-lg font-bold mb-4">Classic Systems Infotech</h4>
            <p className="text-md text-gray-500 font-bold hover:text-white">
              Providing innovative IT solutions and services to help businesses
              transform and thrive in the digital age.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="text-md text-gray-500 font-bold hover:text-white">
              <li><Link href="/About">About Us</Link></li>
              <li><Link href="/Services">Services</Link></li>
              <li><Link href="/Portfolio">Portfolio</Link></li>
              <li><Link href="/Training">Training</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="text-md text-gray-500 font-bold hover:text-white">
              <li>Web Development</li>
              <li>Mobile Application</li>
              <li>Cloud Solutions</li>
              <li>IT Consulting</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="text-md text-gray-500 font-bold hover:text-white">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> No 39 Mayfair, Ile-Ife, Osun State, Nigeria
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt />
                <a href="tel:+2348053628635" className="hover:underline">+234 805 362 8635</a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope />
                <a href="mailto:info@classicsystemsinfotech.ng" className="hover:underline">
                  info@classicsystemsinfotech.ng
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-700" />

<div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
  <p className="mb-2 md:mb-0">&copy; 2025 Classic Systems Infotech. All Rights Reserved.</p>
  <div className="flex gap-4">
    <Link href="/PrivacyPolicy" className="hover:text-white">Privacy Policy</Link>
    <Link href="/Terms" className="hover:text-white">Terms of Service</Link>
    <Link href="/Sitemap" className="hover:text-white">Sitemap</Link>
  </div>
</div>

    </footer>
  );
};

export default Footer;
