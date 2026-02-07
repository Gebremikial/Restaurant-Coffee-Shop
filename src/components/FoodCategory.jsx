import Image from 'next/image';

const categories = [
  { id: 1, name: 'Main Course', img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500', label: 'Save 30%' },
  { id: 2, name: 'Appetizers', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500', label: 'Fast Food' },
  { id: 3, name: 'Desserts', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500', label: 'Delicious' },
  { id: 4, name: 'Drinks', img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500', label: 'Fresh' },
];

export default function FoodCategory() {
  return (
    <section className="relative py-20 px-6 lg:px-24 z-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[hsl(34,37%,58%)] font-serif italic text-2xl">Food Category</p>
        <h2 className="text-white text-4xl lg:text-5xl font-bold mb-12 mt-2">
          <span className="text-[hsl(34,37%,58%)]">Ch</span>oose Food Item
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item) => (
            <div key={item.id} className="group relative aspect-square overflow-hidden rounded-xl border border-white/10">
              {/* Overlay Label */}
              <div className="absolute top-4 left-4 z-20 bg-[hsl(34,37%,58%)] text-white text-xs font-bold py-1 px-3 rounded shadow-lg">
                {item.label}
              </div>
              
              <Image 
                src={item.img} 
                alt={item.name} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              
              {/* Dark Gradient Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-xl">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
