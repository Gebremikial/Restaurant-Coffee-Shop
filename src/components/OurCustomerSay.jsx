import Image from 'next/image';

export default function OurCustomerSay() {
  return (
    <section className="w-full bg-white py-16 lg:py-20 px-6 lg:px-20">
      {/* Container reduced to max-w-6xl for better centering */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row overflow-hidden shadow-xl rounded-sm">
        
        {/* LEFT SIDE: TESTIMONIAL CONTENT */}
        <div className="flex-1 bg-[#1a1a1a] p-10 lg:p-16 flex flex-col justify-center relative">
          {/* Background Texture */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <Image 
              src="/images/img-1.png" 
              alt="pattern" 
              fill 
              className="object-cover grayscale" 
            />
          </div>

          <div className="relative z-10">
            {/* Consistent small label style */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#BC9A6C] font-semibold tracking-[0.15em] uppercase text-[10px] lg:text-[11px]">
                Testimonials
              </span>
              <div className="h-[1px] w-8 bg-[#BC9A6C]/50"></div>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Our customer say
            </h2>

            {/* Gold Quote Icon - Scaled down */}
            <div className="mb-5 opacity-80">
              <svg width="35" height="27" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 0C6.045 0 0 6.045 0 13.5C0 20.955 6.045 27 13.5 27H15.75V33.75L24.75 24.75V13.5C24.75 6.045 18.705 0 11.25 0H13.5ZM33.75 0C26.295 0 20.25 6.045 20.25 13.5C20.25 20.955 26.295 27 33.75 27H36V33.75L45 24.75V13.5C45 6.045 38.955 0 31.5 0H33.75Z" fill="#BC9A6C" />
              </svg>
            </div>

            {/* Description - Made bold and sized to 13px per your theme */}
            <p className="text-gray-400 text-[13px] font-bold leading-relaxed mb-8 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi, ultricies. Consectetur et faucibus vivamus lorem hendrerit enim donec ut.
            </p>

            {/* User Profile */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mb-3 border border-[#BC9A6C]/50 p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image 
                    src="/images/img-14.png" 
                    alt="William carry"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h4 className="text-white font-bold text-lg">William carry</h4>
              <p className="text-[#BC9A6C] font-bold text-[11px] uppercase tracking-wider">Founder & CEO</p>
            </div>

            {/* Pagination Dots - Smaller */}
            <div className="flex gap-2.5 mt-8 justify-center lg:justify-start">
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 cursor-pointer"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#BC9A6C] cursor-pointer"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#BC9A6C]/30 cursor-pointer"></div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: IMAGE WITH VIDEO BUTTON */}
        <div className="flex-1 relative min-h-[400px] lg:min-h-[600px]">
          <Image 
            src="/images/img-18.png" 
            alt="Customer enjoying coffee" 
            fill 
            className="object-cover"
            priority
          />
          
          {/* Play Button - Reduced size to match compact layout */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-105 active:scale-95 group">
              <div className="w-12 h-12 border border-[#BC9A6C] rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[11px] border-l-[#BC9A6C] border-b-[6px] border-b-transparent ml-1"></div>
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}