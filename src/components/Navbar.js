'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, MapPin, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Contact tab yahan se nikal diya gaya hai
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Admissions', href: '/admissions' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 transition-all duration-300 shadow-md">
      
      {/* 1. TOP CONTACT BAR */}
      <div className="bg-[#0F4C36] text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex space-x-6">
            <span className="flex items-center gap-1.5 font-medium tracking-wide">
              <MapPin size={14} className="text-[#D4AF37]" /> 
              Spencer Eye Hospital, KMC, Siddiq Wahab Road, Lyari, Karachi
            </span>
            <span className="flex items-center gap-1.5 font-medium tracking-wide">
              <Mail size={14} className="text-[#D4AF37]" /> 
              kmc.vconhs@gmail.com
            </span>
          </div>
          <div>
            <span className="flex items-center gap-1.5 font-bold tracking-widest">
              <Phone size={14} className="text-[#D4AF37]" /> 
              0310 1152938
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
           {/* LOGO SECTION WITH IMAGE */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-4 group">
                
                {/* Logo Image (Size Barha Diya Gaya Hai) */}
                <div className="relative w-16 h-16 sm:w-24 sm:h-24 transition-transform duration-300 group-hover:scale-105">
                  <Image 
                    src="/logo.png" 
                    alt="KMC Vision Logo" 
                    width={96}
                    height={96}
                    className="object-contain w-full h-full"
                  />
                </div>

                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 mb-1 transition-transform duration-300 ease-in-out group-hover:scale-105">
                    <span className="text-3xl font-extrabold text-[#0F4C36] tracking-tight leading-none transition-colors duration-300 group-hover:text-[#136346]">
                      KMC
                    </span>
                    <span className="text-3xl font-extrabold text-[#D4AF37] tracking-tight leading-none transition-colors duration-300 group-hover:text-[#F0C73E]">
                      VISION
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-widest transition-colors duration-300 group-hover:text-[#D4AF37]">
                    College of Nursing & Health Sciences
                  </span>
                </div>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-800 hover:text-[#0F4C36] transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all group-hover:w-full"></span>
                </Link>
              ))}
              <Link
                href="/admissions"
                className="bg-[#0F4C36] text-white px-6 py-2.5 rounded-md hover:bg-[#0F4C36]/90 transition-all duration-300 text-sm font-medium transform hover:-translate-y-0.5"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#0F4C36] hover:text-[#D4AF37] focus:outline-none transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-md text-base font-medium text-gray-800 hover:text-[#0F4C36] hover:bg-gray-50 transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Contact Info Display */}
              <div className="pt-4 mt-2 border-t border-gray-100 space-y-3 px-4">
                <div className="flex items-center gap-3 text-sm font-bold text-[#0F4C36]">
                  <Phone size={16} className="text-[#D4AF37]" />
                  0310 1152938
                </div>
                <div className="flex items-start gap-3 text-xs font-medium text-gray-600">
                  <MapPin size={16} className="text-[#0F4C36] mt-0.5 flex-shrink-0" />
                  Spencer Eye Hospital, KMC, Siddiq Wahab Road, Lyari
                </div>
              </div>

              <Link
                href="/admissions"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center mt-6 bg-[#0F4C36] text-white px-5 py-3 rounded-md hover:bg-[#0F4C36]/90 font-medium shadow-md"
              >
                Apply Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}