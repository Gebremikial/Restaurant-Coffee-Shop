"use client";
import React, { useState } from 'react';
import Link from 'next/link'; // <--- This was missing!
import { 
  MagnifyingGlassIcon, 
  UserIcon, 
  ShoppingBagIcon, 
  Bars3Icon, 
  XMarkIcon 
} from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Menu', href: '#our-favorites' },
    { name: 'Blog', href: '#blog' },
    { name: 'Pages', href: '#categories' },
    { name: 'About', href: '#about' },
    { name: 'Shop', href: '#chefs' },
    { name: 'Contact', href: '#footer' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#0d0d0d] py-5 px-6 lg:px-20 border-b border-white/5 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#hero" onClick={(e) => handleScroll(e, '#hero')} className="text-xl lg:text-2xl font-bold tracking-tight cursor-pointer">
            <span className="text-white">Food</span>
            <span className="text-[#BC9A6C]">tuck</span>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-[11px] font-bold uppercase tracking-[0.15em] text-white hover:text-[#BC9A6C] transition-all duration-300 relative group cursor-pointer"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 h-[1.5px] bg-[#BC9A6C] transition-all duration-300 w-0 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-5 text-white">
          {/* Search Toggle */}
          <div className="relative flex items-center">
            <input 
              type="text" 
              placeholder="Search..." 
              className={`bg-white/10 border border-white/20 rounded-sm px-3 py-1 text-xs focus:outline-none transition-all duration-300 ${searchOpen ? 'w-32 lg:w-48 opacity-100 mr-2' : 'w-0 opacity-0 pointer-events-none'}`}
            />
            <MagnifyingGlassIcon 
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-5 h-5 cursor-pointer hover:text-[#BC9A6C] transition-colors" 
            />
          </div>

          {/* User Icon -> Login/Signup (Fixed with Link) */}
          <Link href="/login" className="hover:text-[#BC9A6C] transition-colors">
            <UserIcon className="w-5 h-5" />
          </Link>

          <div className="relative">
            <ShoppingBagIcon className="w-5 h-5 cursor-pointer hover:text-[#BC9A6C]" />
            <span className="absolute -top-1.5 -right-1.5 bg-[#BC9A6C] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">3</span>
          </div>

          <button className="lg:hidden text-white ml-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
          </button>
        </div>
      </div>
    </nav>
  );
}