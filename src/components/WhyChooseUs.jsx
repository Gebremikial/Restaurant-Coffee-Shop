import Image from 'next/image';

const features = [
  {
    title: "High quality coffee",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12z" />
      </svg>
    )
  },
  {
    title: "Best chef & Team",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: "Promo and deal",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo augue nibh.",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: FEATURED IMAGE & TESTIMONIAL */}
        <div className="relative h-[600px] w-full">
          <div className="relative w-full h-full">
            <Image 
              src="/images/img-7.png" 
              alt="Coffee Brewing Equipment" 
              fill 
              className="object-cover rounded-sm"
            />
          </div>

          {/* Testimonial Box Overlay */}
          <div className="absolute bottom-10 left-6 right-6 lg:left-10 lg:right-10 bg-white p-8 shadow-2xl z-20">
            <p className="text-gray-500 italic leading-relaxed mb-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa turpis pulvinar interdum in imperdiet pellentesque. At duis dolor massa elit consequat."
            </p>
            <h4 className="font-bold text-[#1a1a1a] text-lg">Alen Barg</h4>
          </div>
        </div>

        {/* RIGHT SIDE: CONTENT & FEATURES */}
        <div className="space-y-8">
          <div className="relative inline-block">
             <span className="text-[#BC9A6C] font-serif italic text-lg relative z-10">Why Choose us</span>
             <div className="absolute -top-1 -left-2 w-8 h-8 border border-[#BC9A6C]/30 rounded-full z-0"></div>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold leading-tight text-[#1a1a1a]">
            Best quality food and <br /> coffee maker
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi,
          </p>

          {/* Features Vertical List */}
          <div className="space-y-8 pt-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-[#BC9A6C] rounded-sm flex items-center justify-center shadow-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed max-w-sm">
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