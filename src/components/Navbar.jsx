"use client";
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
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
  const searchInputRef = useRef(null); // Ref to focus the input

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Menu', href: '#our-favorites' },
    { name: 'Blog', href: '#blog' },
    { name: 'Pages', href: '#categories' },
    { name: 'About', href: '#about' },
    { name: 'Shop', href: '#chefs' },
    { name: 'Contact', href: '#footer' },
  ];

  // Auto-focus logic when magnifying glass is clicked
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

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
          
          {/* ENHANCED SEARCH BAR */}
          <div className="relative flex items-center">
            <input 
              ref={searchInputRef}
              type="text" 
              placeholder="Search..." 
              onBlur={() => setSearchOpen(false)} // Hides bar when clicking outside
              className={`bg-white/10 border border-white/20 rounded-sm px-3 py-1 text-xs focus:outline-none focus:border-[#BC9A6C] transition-all duration-500 ease-in-out ${
                searchOpen ? 'w-32 lg:w-48 opacity-100 mr-2 translate-x-0' : 'w-0 opacity-0 pointer-events-none translate-x-4'
              }`}
            />
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="focus:outline-none"
            >
              {searchOpen ? (
                <XMarkIcon className="w-5 h-5 text-[#BC9A6C] transition-colors" />
              ) : (
                <MagnifyingGlassIcon className="w-5 h-5 cursor-pointer hover:text-[#BC9A6C] transition-colors" />
              )}
            </button>
          </div>

          {/* User Icon -> Login/Signup */}
          <Link href="/login" className="hover:text-[#BC9A6C] transition-colors">
            <UserIcon className="w-5 h-5" />
          </Link>

          {/* Cart Icon */}
          <div className="relative">
            <ShoppingBagIcon className="w-5 h-5 cursor-pointer hover:text-[#BC9A6C] transition-colors" />
            <span className="absolute -top-1.5 -right-1.5 bg-[#BC9A6C] text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full">3</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden text-white ml-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer (Consistent style) */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0d0d0d] py-6 px-6 flex flex-col space-y-5 border-t border-white/5 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-white text-xs font-bold uppercase tracking-widest hover:text-[#BC9A6C]"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  ); 
}