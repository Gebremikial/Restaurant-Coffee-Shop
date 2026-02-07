import Link from 'next/link';
import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-24 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Food<span className="text-[#BC9A6C]">tuck</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Home', 'Menu', 'Blog', 'Pages', 'About', 'Shop', 'Contact'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="text-gray-600 hover:text-[#BC9A6C] transition-colors font-medium">
              {item}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 text-gray-800">
          <MagnifyingGlassIcon className="w-6 h-6 cursor-pointer hover:text-[#BC9A6C]" />
          <ShoppingBagIcon className="w-6 h-6 cursor-pointer hover:text-[#BC9A6C]" />
        </div>
      </div>
    </nav>
  );
}