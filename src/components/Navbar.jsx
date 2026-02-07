"use client";
import React, { useState } from 'react';
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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pages', href: '/pages' },
    { name: 'About', href: '/about' },
    { name: 'Shop', href: '/shop' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-black py-6 px-6 lg:px-20 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold">
            <span className="text-white">Food</span>
            <span className="text-brandGold">tuck</span>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-white text-base font-normal hover:text-brandGold transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Icons (Top Right) */}
        <div className="flex items-center space-x-6">
          <div className="hidden sm:flex items-center space-x-6 text-white">
            <MagnifyingGlassIcon className="w-6 h-6 cursor-pointer hover:text-brandGold transition-colors" />
            <UserIcon className="w-6 h-6 cursor-pointer hover:text-brandGold transition-colors" />
            <ShoppingBagIcon className="w-6 h-6 cursor-pointer hover:text-brandGold transition-colors" />
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-8 h-8" />
            ) : (
              <Bars3Icon className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden mt-4 bg-black border-t border-white/10 pt-4 flex flex-col space-y-4 pb-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-white text-lg hover:text-brandGold px-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex space-x-6 px-2 pt-4 border-t border-white/5 text-white">
            <MagnifyingGlassIcon className="w-6 h-6" />
            <UserIcon className="w-6 h-6" />
            <ShoppingBagIcon className="w-6 h-6" />
          </div>
        </div>
      )}
    </nav>
  );
}