import Image from 'next/image';

const categories = [
  { name: "Americano", icon: "☕" },
  { name: "Esperesso", icon: "🫘", active: true },
  { name: "Arabica", icon: "🥤" },
  { name: "Coffee stimy", icon: "🍵" },
  { name: "Organic Pack", icon: "🛍️" },
];

const products = [
  { id: 8, name: "Coffee Beans", price: "43.78$", rating: 5 },
  { id: 9, name: "Coffee Beans", price: "43.78$", rating: 5 },
  { id: 10, name: "Coffee Beans", price: "43.78$", rating: 5 },
  { id: 11, name: "Coffee Beans", price: "43.78$", rating: 5 },
  { id: 12, name: "Coffee Beans", price: "43.78$", rating: 5 },
  { id: 13, name: "Coffee Beans", price: "43.78$", rating: 5 },
];

export default function OurFavoritesMenu() {
  return (
    <section id="our-favorites" className="py-16 lg:py-20 px-6 lg:px-20 bg-white">
      {/* Refined Header - matching smaller scale */}
      <div className="max-w-5xl mx-auto text-center mb-12">
         <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-[#BC9A6C] font-semibold tracking-[0.15em] uppercase text-[10px] lg:text-[11px]">
              Our Menu
            </span>
            <div className="h-[1px] w-8 bg-[#BC9A6C]/70"></div>
          </div>
        <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-[#1a1a1a]">Our Favorites Menu</h2>
        <p className="text-gray-400 max-w-lg mx-auto text-[13px] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Varius sed pharetra dictum neque massa congue
        </p>
      </div>

      {/* Reduced max-width to 6xl for centering */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10">
        
        {/* LEFT SIDE: CATEGORY SIDEBAR - Made slimmer */}
        <div className="w-full lg:w-[22%] bg-[#F9F7F2] p-4 h-fit rounded-sm">
          <div className="space-y-2.5">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-sm text-[13px] font-bold transition-all ${
                  cat.active 
                    ? 'bg-[#BC9A6C] text-white shadow-md' 
                    : 'bg-white text-[#1a1a1a] hover:bg-gray-50 border border-gray-100'
                }`}
              >
                <span className="text-lg">
                  {cat.icon}
                </span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: PRODUCT GRID - Scaled down info */}
        <div className="w-full lg:w-[78%]">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-5">
            {products.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                {/* Image Container */}
                <div className="relative aspect-[1/1] overflow-hidden mb-3 bg-gray-50 rounded-sm">
                  <Image
                    src={`/images/img-${item.id}.png`}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Action Icons Overlay */}
                  <div className="absolute top-3 right-3 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all">
                    <div className="w-7 h-7 bg-white flex items-center justify-center shadow-md rounded-sm hover:bg-[#BC9A6C] hover:text-white transition-colors">
                        <span className="text-[10px]">🛒</span>
                    </div>
                    <div className="w-7 h-7 bg-white flex items-center justify-center shadow-md rounded-sm hover:bg-[#BC9A6C] hover:text-white transition-colors">
                        <span className="text-[10px]">❤️</span>
                    </div>
                  </div>
                </div>

                {/* Info - Bolded and resized */}
                <div className="space-y-0.5">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-sm lg:text-base text-[#1a1a1a]">{item.name}</h3>
                    <div className="flex text-[#BC9A6C] text-[10px]">
                      {[...Array(item.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-[#BC9A6C] font-bold text-xs lg:text-sm">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots - Scaled down */}
          <div className="flex justify-center gap-2 mt-12">
            <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-[#BC9A6C]"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
}