import Image from 'next/image';

export default function OurCustomerSay() {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row overflow-hidden shadow-2xl">
        
        {/* LEFT SIDE: TESTIMONIAL CONTENT */}
        <div className="flex-1 bg-[#1a1a1a] p-12 lg:p-20 flex flex-col justify-center relative">
          {/* Background Texture (Subtle coffee bean pattern) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Image 
              src="/images/img-1.png" 
              alt="pattern" 
              fill 
              className="object-cover grayscale" 
            />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#BC9A6C] font-serif italic text-lg">Testimonials</span>
              {/* Decorative Circle Icon */}
              <div className="w-6 h-6 border border-[#BC9A6C]/40 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-[#BC9A6C]/40 rounded-full"></div>
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8">
              Our customer say
            </h2>

            {/* Gold Quote Icon */}
            <div className="mb-6">
              <svg width="45" height="35" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 0C6.045 0 0 6.045 0 13.5C0 20.955 6.045 27 13.5 27H15.75V33.75L24.75 24.75V13.5C24.75 6.045 18.705 0 11.25 0H13.5ZM33.75 0C26.295 0 20.25 6.045 20.25 13.5C20.25 20.955 26.295 27 33.75 27H36V33.75L45 24.75V13.5C45 6.045 38.955 0 31.5 0H33.75Z" fill="#BC9A6C" fillOpacity="0.6"/>
              </svg>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh est nisi, ultricies. Consectetur et faucibus vivamus lorem hendrerit enim donec ut. Nec blandit vulputate varius at quis non.
            </p>

            {/* User Profile */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-[#BC9A6C] p-1">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image 
                    src="/images/img-14.png" // User Avatar png
                    alt="William carry"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h4 className="text-white font-bold text-xl">William carry</h4>
              <p className="text-[#BC9A6C] text-sm">Founder & CEO</p>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-3 mt-10 justify-center lg:justify-start">
              <div className="w-2.5 h-2.5 rounded-full bg-white/20 cursor-pointer"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#BC9A6C] cursor-pointer"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#BC9A6C]/30 cursor-pointer"></div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: FEATURE IMAGE WITH VIDEO BUTTON */}
        <div className="flex-1 relative min-h-[500px] lg:min-h-[700px]">
          <Image 
            src="/images/img-18.png" // Updated to .png
            alt="Customer enjoying coffee" 
            fill 
            className="object-cover"
            priority
          />
          
          {/* Play Button Overlay - Matches the screenshot circular play icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 group">
              <div className="w-14 h-14 border border-[#BC9A6C] rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-[#BC9A6C] border-b-[8px] border-b-transparent ml-1"></div>
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}