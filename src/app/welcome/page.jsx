"use client";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';

// 1. Create a sub-component for the content that uses searchParams
function WelcomeContent() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Guest';

  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
        Welcome, <span className="text-[#BC9A6C]">{name}</span>!
      </h1>
      <p className="text-gray-400 font-bold text-[13px] max-w-sm mx-auto">
        Your account has been created successfully. You're now ready to heal the world with coffee.
      </p>
      <div className="pt-4">
        <Link 
          href="/" 
          className="bg-[#BC9A6C] hover:bg-[#a6865a] text-white font-bold py-3 px-8 rounded-sm transition-all text-xs uppercase tracking-widest"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

// 2. The main Page component exports the Suspense boundary
export default function WelcomePage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0d0d0d] px-6">
      {/* Optional: Add your img-1 background here to match the Hero/Footer style */}
      
      <Suspense fallback={<div className="text-white font-bold">Loading...</div>}>
        <WelcomeContent />
      </Suspense>
    </section>
  );
}