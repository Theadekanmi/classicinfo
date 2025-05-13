'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-cyan-900 text-white fixed w-full top-0 left-0 z-50">
  <div className="container mx-auto flex justify-between items-center px-4 py-3">
    <img 
      src="https://res.cloudinary.com/dpuj2f1h3/image/upload/v1746186375/csil_logo_1_ergdiu.webp" 
      alt="CSIL Logo" className="h-10 rounded-sm"/>


        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 font-bold">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/Services">Services</Link>
          <Link href="/Contact">Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={handleToggle}
          className="md:hidden text-2xl"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-cyan-900 w-full px-4 py-4">
          <nav className="flex flex-col gap-4 text-md font-medium text-gray-300">
            <Link href="/" onClick={handleToggle}>Home</Link>
            <Link href="/About" onClick={handleToggle}>About</Link>
            <Link href="/Services" onClick={handleToggle}>Services</Link>
            <Link href="/Training" onClick={handleToggle}>Training</Link>
            <Link href="/Contact" onClick={handleToggle}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
