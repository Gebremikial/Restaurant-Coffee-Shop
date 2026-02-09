import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative bg-[#0d0d0d] pt-32 overflow-hidden">
      
      {/* Background Image: img-20.png */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Image 
          src="/images/img-20.png" 
          alt="Coffee Background" 
          fill 
          className="object-cover grayscale brightness-[0.3]" 
          priority
        />
      </div>

      {/* 1. NEWSLETTER BAR */}
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="bg-white p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 -translate-y-16 shadow-2xl rounded-sm">
          <div className="max-w-xs">
            <h3 className="text-3xl font-bold text-[#1a1a1a] leading-tight">
              Subscribe <br /> To Our Newsletter
            </h3>
          </div>

          <div className="flex w-full max-w-xl">
            <input 
              type="email" 
              placeholder="Enter your mail" 
              className="flex-1 border border-gray-200 px-6 py-4 focus:outline-none focus:border-[#BC9A6C] text-gray-600 placeholder:text-gray-300"
            />
            <button className="bg-[#BC9A6C] hover:bg-[#a6865a] text-white px-8 py-4 font-bold transition-colors whitespace-nowrap">
              Subscribe now
            </button>
          </div>

          {/* Social Icons (Gold Backgrounds) */}
          <div className="flex gap-2">
            {['f', 't', 'i', 'y'].map((social) => (
              <div 
                key={social} 
                className="w-10 h-10 bg-[#BC9A6C]/20 flex items-center justify-center text-[#1a1a1a] hover:bg-[#BC9A6C] hover:text-white cursor-pointer transition-all rounded-sm text-sm font-bold uppercase"
              >
                {social}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Branding Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Food<span className="text-[#BC9A6C]">tuck</span></h2>
          <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
          </p>
        </div>

        {/* Explore Column */}
        <div className="space-y-6">
          <h4 className="text-xl font-bold text-white">Explore</h4>
          <ul className="space-y-4">
            {[['Home', 'Blog'], ['About us', 'Team'], ['Contact us', 'Our Menu']].map(([left, right], idx) => (
              <div key={idx} className="flex gap-8">
                <li className="text-gray-400 hover:text-[#BC9A6C] cursor-pointer text-sm flex items-center gap-2 flex-1">
                  <span className="text-[#BC9A6C] text-xs">›</span> {left}
                </li>
                <li className="text-gray-400 hover:text-[#BC9A6C] cursor-pointer text-sm flex items-center gap-2 flex-1">
                  <span className="text-[#BC9A6C] text-xs">›</span> {right}
                </li>
              </div>
            ))}
          </ul>
        </div>

        {/* Contact Us Column */}
        <div className="space-y-6 lg:col-span-2">
          <h4 className="text-xl font-bold text-white">Contact us</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-4">
            <div className="flex items-start gap-3 text-gray-400">
              <span className="text-[#BC9A6C] mt-1">📍</span>
              <p className="text-sm">Kolkata India , 3rd Floor, Office 45</p>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <span className="text-[#BC9A6C]">📞</span>
              <p className="text-sm">00965 - 96659986</p>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <span className="text-[#BC9A6C]">✉️</span>
              <p className="text-sm">M.Alyaout@4house.Co</p>
            </div>
            <div className="flex items-center gap-3 text-gray-400">
              <span className="text-[#BC9A6C]">🕒</span>
              <p className="text-sm">Sun - Sat / 10:00 AM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. COPYRIGHT BAR */}
      <div className="bg-[#BC9A6C]/90 py-4 relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-white/90 text-xs">
          <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
          
          {/* Small leaf decoration on the far right like the screenshot */}
          <div className="hidden lg:block absolute right-10 bottom-0 opacity-40 translate-y-1/4">
            <Image src="/images/img-21.png" alt="decoration" width={120} height={120} className="rotate-45" />
          </div>
        </div>
      </div>
    </footer>
  );
}