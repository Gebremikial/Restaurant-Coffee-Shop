"use client";
import React, { useState } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() === "") return;
    setStatus("Successful! Thank you for subscribing.");
    setEmail("");
    setTimeout(() => setStatus(""), 5000);
  };

  const handleFooterScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const socials = [
    { name: 'Facebook', path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
    { name: 'Twitter', path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
    { name: 'Instagram', path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.28.058 1.688.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
    { name: 'YouTube', path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" }
  ];

  return (
    <footer id="footer" className="relative bg-[#1a1a1a] pt-24 overflow-hidden">
      
      {/* BACKGROUND IMAGE - High Visibility Settings */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/img-20.png" 
          alt="Coffee Background" 
          fill 
          className="object-cover opacity-85 brightness-110 saturate-[0.8]" 
          priority
        />
        {/* Minimal Gradient Overlay for text protection only */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-20">
        {/* Newsletter Box */}
        <div className="bg-white p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 -translate-y-12 shadow-2xl rounded-sm border-b-4 border-[#BC9A6C]">
          <div className="text-center lg:text-left">
            <h3 className="text-xl lg:text-2xl font-black text-[#1a1a1a] leading-tight">
              Subscribe <br /> <span className="text-[#BC9A6C]">To Our Newsletter</span>
            </h3>
          </div>

          <div className="w-full max-w-xl">
            <form onSubmit={handleSubscribe} className="flex border-2 border-gray-100 rounded-sm overflow-hidden h-12 lg:h-14">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your mail" 
                className="flex-1 px-5 focus:outline-none text-[13px] text-gray-800 font-bold placeholder:text-gray-400 bg-white"
                required
              />
              <button type="submit" className="bg-[#1a1a1a] hover:bg-[#BC9A6C] text-white px-8 font-bold text-[10px] lg:text-xs uppercase tracking-widest transition-all whitespace-nowrap">
                Subscribe now
              </button>
            </form>
            {status && <p className="text-[#BC9A6C] text-[11px] font-bold mt-2">{status}</p>}
          </div>

          <div className="flex gap-3">
            {socials.map((social) => (
              <div key={social.name} className="w-9 h-9 bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#BC9A6C] cursor-pointer transition-all rounded-full shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={social.path} /></svg>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        <div className="space-y-5">
          <h2 className="text-3xl font-black text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Food<span className="text-[#BC9A6C]">tuck</span></h2>
          <p className="text-white font-bold leading-relaxed text-[13px] max-w-xs drop-shadow-[0_1px_1px_rgba(0,0,0,0.9)]">
            Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC.
          </p>
        </div>

        <div className="space-y-5">
          <h4 className="text-sm font-black text-white uppercase tracking-[0.2em] drop-shadow-md">Explore</h4>
          <ul className="space-y-3">
            {[
              { name: 'Home', id: 'hero' },
              { name: 'About us', id: 'about' },
              { name: 'Contact us', id: 'footer' },
              { name: 'Blog', id: 'blog' },
              { name: 'Team', id: 'chefs' },
              { name: 'Menu', id: 'our-favorites' }
            ].reduce((acc, curr, i) => {
               if (i % 2 === 0) acc.push([curr, null]);
               else acc[acc.length - 1][1] = curr;
               return acc;
            }, []).map(([left, right], idx) => (
              <div key={idx} className="flex gap-4">
                <li onClick={(e) => handleFooterScroll(e, left.id)} className="text-white font-bold hover:text-[#BC9A6C] cursor-pointer text-[12px] flex items-center gap-2 flex-1 transition-colors drop-shadow-md">
                  <span className="text-[#BC9A6C]">›</span> {left.name}
                </li>
                {right && (
                  <li onClick={(e) => handleFooterScroll(e, right.id)} className="text-white font-bold hover:text-[#BC9A6C] cursor-pointer text-[12px] flex items-center gap-2 flex-1 transition-colors drop-shadow-md">
                    <span className="text-[#BC9A6C]">›</span> {right.name}
                  </li>
                )}
              </div>
            ))}
          </ul>
        </div>

        <div className="space-y-5 lg:col-span-2">
          <h4 className="text-sm font-black text-white uppercase tracking-[0.2em] drop-shadow-md">Contact us</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-4">
            {[
              { icon: "📍", text: "Kolkata India, 3rd Floor, Office 45" },
              { icon: "📞", text: "00965 - 96659986" },
              { icon: "✉️", text: "M.Alyaout@4house.Co" },
              { icon: "🕒", text: "Sun - Sat / 10AM - 8PM" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-[#BC9A6C] text-sm filter drop-shadow-sm">{item.icon}</span>
                <p className="text-white font-bold text-[12px] leading-snug drop-shadow-md">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#111111]/90 backdrop-blur-sm py-5 relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-white/80 font-bold text-[10px] uppercase tracking-[0.3em]">
          <p>© 2026 Foodtuck. Crafted with Passion.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-[#BC9A6C] cursor-pointer">Privacy</span>
            <span className="hover:text-[#BC9A6C] cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}