"use client";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function WelcomePage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center text-white text-center px-6">
      <h1 className="text-5xl font-bold mb-4">Welcome, <span className="text-[#BC9A6C]">{name || 'Guest'}</span>!</h1>
      <p className="text-gray-400 max-w-md mb-8">Your account has been successfully created. You can now explore our premium coffee selection and exclusive offers.</p>
      <Link href="/" className="bg-[#BC9A6C] px-8 py-3 font-bold text-black hover:bg-white transition-all">
        Go to Home
      </Link>
    </div>
  );
}