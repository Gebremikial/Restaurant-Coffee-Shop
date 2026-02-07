// src/components/FoodCategory.jsx
import Image from 'next/image';

const items = [
  { id: 1, img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500' },
  { id: 2, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500' },
  { id: 3, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500' },
  { id: 4, img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=500' },
];

export default function FoodCategory() {
  return (
    <section className="bg-[#0D0D0D] py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[hsl(34,37%,58%)] font-serif italic text-2xl">Food Category</p>
        <h2 className="text-white text-4xl font-bold mb-12 mt-2">
          <span className="text-[hsl(34,37%,58%)]">Ch</span>oose Food Item
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative aspect-square overflow-hidden rounded-xl">
              <Image src={item.img} alt="food" fill className="object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}