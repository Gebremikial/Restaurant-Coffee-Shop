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
    <section className="py-16 lg:py-20 px-6 lg:px-20 bg-white overflow-hidden">
      {/* Container reduced to 5xl for a tighter, centered feel */}
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* LEFT SIDE: Scaled down Image & Testimonial */}
        <div className="relative h-[450px] lg:h-[500px] w-full flex justify-center lg:justify-start">
          <div className="relative w-full h-full lg:w-[90%]">
            <Image 
              src="/images/img-7.png" 
              alt="Coffee Brewing" 
              fill 
              className="object-cover rounded-sm shadow-md"
            />
          </div>

          {/* Scaled down Testimonial Box */}
          <div className="absolute -bottom-6 left-4 right-4 lg:left-8 lg:-right-4 bg-white p-6 shadow-xl z-20 border-l-4 border-[#BC9A6C]">
            <p className="text-gray-500 italic text-[13px] leading-relaxed mb-3">
              "Sed massa turpis pulvinar interdum in imperdiet pellentesque. At duis dolor massa elit consequat."
            </p>
            <h4 className="font-bold text-[#1a1a1a] text-sm tracking-wide">Alen Barg</h4>
          </div>
        </div>

        {/* RIGHT SIDE: CONTENT & FEATURES */}
        <div className="space-y-6 text-center lg:text-left">
          {/* Matching the "About Us" small label style */}
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <span className="text-[#BC9A6C] font-semibold tracking-[0.15em] uppercase text-[10px] lg:text-[11px]">
              Why Choose us
            </span>
            <div className="h-[1px] w-8 bg-[#BC9A6C]/70"></div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-[#1a1a1a]">
            Best quality food and <br className="hidden lg:block" /> coffee maker
          </h2>

          <p className="text-gray-500 text-[13px] leading-relaxed max-w-md mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>

          {/* Features List scaled down */}
          <div className="space-y-6 pt-2">
            {features.map((item, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#BC9A6C] rounded-sm flex items-center justify-center shadow-md">
                  {item.icon}
                </div>
                <div className="max-w-xs">
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