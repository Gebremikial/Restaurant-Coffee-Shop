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
    <section className="py-24 px-6 lg:px-24 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold mb-4 text-[#1a1a1a]">Our Favorites Menu</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Varius sed pharetra dictum neque massa congue
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* LEFT SIDE: CATEGORY SIDEBAR */}
        <div className="w-full lg:w-1/4 bg-[#F9F7F2] p-6 h-fit">
          <div className="space-y-4">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-sm font-bold transition-all ${
                  cat.active 
                    ? 'bg-[#BC9A6C] text-white shadow-lg' 
                    : 'bg-white text-[#1a1a1a] hover:bg-gray-50'
                }`}
              >
                <span className={`text-2xl ${cat.active ? 'text-white' : 'text-[#BC9A6C]'}`}>
                  {cat.icon}
                </span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE: PRODUCT GRID */}
        <div className="w-full lg:w-3/4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6">
            {products.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                {/* Image Container - Now using .png extension */}
                <div className="relative aspect-[4/3] overflow-hidden mb-4 bg-gray-100">
                  <Image
                    src={`/images/img-${item.id}.png`}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Action Icons Overlay */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 bg-white flex items-center justify-center shadow-md rounded-sm">
                        <span className="text-xs">🛒</span>
                    </div>
                    <div className="w-8 h-8 bg-white flex items-center justify-center shadow-md rounded-sm">
                        <span className="text-xs">❤️</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-1">
                  <div className="flex justify-between items-center">
                    <h3 className="font-bold text-lg text-[#1a1a1a]">{item.name}</h3>
                    <div className="flex text-[#BC9A6C] text-xs">
                      {[...Array(item.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-[#BC9A6C] font-medium">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-16">
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-[#BC9A6C]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
}