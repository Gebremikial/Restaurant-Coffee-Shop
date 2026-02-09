import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-[#0d0d0d] pt-24 overflow-hidden">
      
      {/* Background Image: subtle coffee atmosphere */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image 
          src="/images/img-20.png" 
          alt="Coffee Background" 
          fill 
          className="object-cover grayscale brightness-[0.2]" 
          priority
        />
      </div>

      {/* 1. NEWSLETTER BAR: Reduced height and tightened width */}
      <div className="max-w-5xl mx-auto px-6 relative z-20">
        <div className="bg-white p-6 lg:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 -translate-y-12 shadow-xl rounded-sm">
          <div className="max-w-xs text-center lg:text-left">
            <h3 className="text-2xl font-bold text-[#1a1a1a] leading-tight">
              Subscribe <br /> To Our Newsletter
            </h3>
          </div>

          <div className="flex w-full max-w-lg border border-gray-100 overflow-hidden">
            <input 
              type="email" 
              placeholder="Enter your mail" 
              className="flex-1 px-5 py-3.5 focus:outline-none text-[13px] text-gray-600 placeholder:text-gray-300"
            />
            <button className="bg-[#BC9A6C] hover:bg-[#a6865a] text-white px-6 py-3.5 font-bold text-xs uppercase tracking-widest transition-colors">
              Subscribe
            </button>
          </div>

          <div className="flex gap-2">
            {['f', 't', 'i', 'y'].map((social) => (
              <div 
                key={social} 
                className="w-8 h-8 bg-[#BC9A6C]/10 flex items-center justify-center text-[#BC9A6C] hover:bg-[#BC9A6C] hover:text-white cursor-pointer transition-all rounded-sm text-[10px] font-bold uppercase"
              >
                {social}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT: Centered and Bolded info */}
      <div className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
        
        {/* Branding */}
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-white">Food<span className="text-[#BC9A6C]">tuck</span></h2>
          <p className="text-gray-400 font-bold leading-relaxed text-[13px] max-w-xs">
            Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC.
          </p>
        </div>

        {/* Explore Links */}
        <div className="space-y-5">
          <h4 className="text-lg font-bold text-white uppercase tracking-wider text-[14px]">Explore</h4>
          <ul className="space-y-3">
            {[
              ['Home', 'Blog'], 
              ['About us', 'Team'], 
              ['Contact us', 'Menu']
            ].map(([left, right], idx) => (
              <div key={idx} className="flex gap-4">
                <li className="text-gray-400 font-bold hover:text-[#BC9A6C] cursor-pointer text-[12px] flex items-center gap-2 flex-1 transition-colors">
                  <span className="text-[#BC9A6C]">›</span> {left}
                </li>
                <li className="text-gray-400 font-bold hover:text-[#BC9A6C] cursor-pointer text-[12px] flex items-center gap-2 flex-1 transition-colors">
                  <span className="text-[#BC9A6C]">›</span> {right}
                </li>
              </div>
            ))}
          </ul>
        </div>

        {/* Contact Info: Styled with Gold and Bold text */}
        <div className="space-y-5 lg:col-span-2">
          <h4 className="text-lg font-bold text-white uppercase tracking-wider text-[14px]">Contact us</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-4">
            {[
              { icon: "📍", text: "Kolkata India, 3rd Floor, Office 45" },
              { icon: "📞", text: "00965 - 96659986" },
              { icon: "✉️", text: "M.Alyaout@4house.Co" },
              { icon: "🕒", text: "Sun - Sat / 10AM - 8PM" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="text-[#BC9A6C] text-sm">{item.icon}</span>
                <p className="text-gray-400 font-bold text-[12px] leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. COPYRIGHT BAR */}
      <div className="bg-[#BC9A6C] py-5 relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-white font-bold text-[11px] uppercase tracking-widest">
          <p>Copyright © 2026 by Ayeman. All Rights Reserved.</p>
          
          <div className="hidden lg:block absolute right-10 bottom-0 opacity-20 translate-y-1/3">
            <Image src="/images/img-21.png" alt="decoration" width={100} height={100} className="rotate-45" />
          </div>
        </div>
      </div>
    </footer>
  );
}