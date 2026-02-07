"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { MagnifyingGlassIcon, UserIcon, ShoppingBagIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-sm border-b border-white/5 py-4 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo - Fixed Position Left */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-white">Food</span>
          <span className="text-[hsl(34,37%,58%)]">tuck</span>
        </Link>

        {/* Desktop Links - Centered */}
        <div className="hidden lg:flex gap-6 text-white text-[15px]">
          {['Home', 'Menu', 'Blog', 'Pages', 'About', 'Shop', 'Contact'].map((item) => (
            <Link key={item} href="#" className="hover:text-[hsl(34,37%,58%)] transition-colors">
              {item}
            </Link>
          ))}
        </div>

        {/* Icons - Fixed Position Right (Small & Elegant) */}
        <div className="flex items-center gap-4 text-white">
          {/* Change <MagnifyingGlassIcon className="w-5 h-5" /> to: */}
          <MagnifyingGlassIcon style={{ width: '20px', height: '20px' }} className="text-white" />
          <UserIcon className="w-5 h-5 cursor-pointer hover:text-[hsl(34,37%,58%)] transition-all" />
          <ShoppingBagIcon className="w-5 h-5 cursor-pointer hover:text-[hsl(34,37%,58%)] transition-all" />
          
          {/* Mobile Toggle */}
          <button className="lg:hidden ml-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 flex flex-col gap-4">
          {['Home', 'Menu', 'Blog', 'Shop', 'Contact'].map((item) => (
            <Link key={item} href="#" className="text-white text-lg font-medium">{item}</Link>
          ))}
        </div>
      )}
    </nav>
  );
}