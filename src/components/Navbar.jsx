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
  const [authOpen, setAuthOpen] = useState(false); // New state for User Dropdown
  const [query, setQuery] = useState("");
  const searchInputRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Menu', href: '#our-favorites' },
    { name: 'Blog', href: '#blog' },
    { name: 'Pages', href: '#categories' },
    { name: 'About', href: '#about' },
    { name: 'Shop', href: '#chefs' },
    { name: 'Contact', href: '#footer' },
  ];

  const handleSearch = (e) => {
    if (e.key === 'Enter' && query.trim() !== "") {
      const searchText = query.toLowerCase();
      const elements = document.querySelectorAll('h2, h3, p');
      const target = Array.from(elements).find(el => el.textContent.toLowerCase().includes(searchText));

      if (target) {
        window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
        const originalColor = target.style.color;
        target.style.color = "#BC9A6C";
        setTimeout(() => target.style.color = originalColor, 2000);
        setSearchOpen(false);
        setQuery("");
      } else {
        alert("No matches found!");
      }
    }
  };

  const handleScroll = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({ top: elem.offsetTop - 80, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-[#0d0d0d] py-5 px-6 lg:px-20 border-b border-white/5 sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#hero" onClick={(e) => handleScroll(e, '#hero')} className="text-xl lg:text-2xl font-bold tracking-tight">
            <span className="text-white">Food</span>
            <span className="text-[#BC9A6C]">tuck</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={(e) => handleScroll(e, link.href)} className="text-[11px] font-bold uppercase tracking-[0.15em] text-white hover:text-[#BC9A6C] transition-all relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 h-[1.5px] bg-[#BC9A6C] transition-all duration-300 w-0 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Action Icons */}
        <div className="flex items-center space-x-5 text-white">
          <div className="relative flex items-center">
            <input 
              ref={searchInputRef}
              type="text" 
              placeholder="Search..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleSearch}
              className={`bg-white/10 border border-white/20 rounded-sm px-3 py-1 text-xs focus:outline-none transition-all duration-500 ${searchOpen ? 'w-32 lg:w-48 opacity-100 mr-2' : 'w-0 opacity-0 pointer-events-none'}`}
            />
            <button onClick={() => setSearchOpen(!searchOpen)}>
              {searchOpen ? <XMarkIcon className="w-5 h-5 text-[#BC9A6C]" /> : <MagnifyingGlassIcon className="w-5 h-5 hover:text-[#BC9A6C]" />}
            </button>
          </div>

          {/* USER ICON WITH DROPDOWN */}
          <div className="relative">
            <button onClick={() => setAuthOpen(!authOpen)} className="focus:outline-none block">
              <UserIcon className="w-5 h-5 hover:text-[#BC9A6C] transition-colors" />
            </button>
            
            {authOpen && (
              <div className="absolute right-0 mt-3 w-40 bg-white shadow-xl rounded-sm py-2 z-50 animate-in fade-in zoom-in duration-200">
                <Link href="/login" className="block px-4 py-2 text-[12px] font-bold uppercase text-gray-700 hover:bg-[#BC9A6C] hover:text-white transition-colors">
                  Login
                </Link>
                <Link href="/signup" className="block px-4 py-2 text-[12px] font-bold uppercase text-gray-700 hover:bg-[#BC9A6C] hover:text-white border-t border-gray-100 transition-colors">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

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