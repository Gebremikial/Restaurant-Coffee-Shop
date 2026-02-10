import Image from 'next/image';

const features = [
  {
    title: "High quality coffee",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z" />
      </svg>
    )
  },
  {
    title: "Best chef & Team",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh.",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 lg:py-32 px-6 lg:px-20 bg-white">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* LEFT SIDE: Image Container */}
        <div className="relative w-full">
          {/* Main Image Wrapper */}
          <div className="relative aspect-[4/3] lg:aspect-[4/5] w-full rounded-sm shadow-lg">
            <Image 
              src="/images/img-7.png" 
              alt="Coffee Brewing" 
              fill 
              className="object-cover rounded-sm"
              priority
            />
          </div>

          {/* TESTIMONIAL BOX: Positioned outside to overlap the bottom center */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] bg-white p-6 lg:p-8 rounded-sm shadow-2xl z-10 border border-gray-100">
            <p className="text-gray-600 text-[13px] lg:text-[14px] leading-relaxed mb-4 italic">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa turpis pulvinar interdum in imperdiet pellentesque. At duis dolor massa elit consequat"
            </p>
            <h4 className="font-bold text-[#1a1a1a] text-sm lg:text-base">
              Alen Barg
            </h4>
          </div>
        </div>

        {/* RIGHT SIDE: Content */}
        <div className="space-y-6 lg:pl-10">
          <div className="flex items-center gap-2">
            <span className="text-[#BC9A6C] font-semibold tracking-[0.15em] uppercase text-[11px]">
              Why Choose us
            </span>
            <div className="h-[1px] w-8 bg-[#BC9A6C]"></div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-[#1a1a1a]">
            Best quality food and <br className="hidden lg:block" /> coffee maker
          </h2>

          <p className="text-gray-500 font-bold text-[13px] leading-relaxed max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>

          {/* Features */}
          <div className="space-y-6 pt-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#BC9A6C] rounded-sm flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-[12px] font-bold leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}