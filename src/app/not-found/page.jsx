import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center text-white p-6">
      <h1 className="text-9xl font-bold text-[#BC9A6C]">404</h1>
      <h2 className="text-2xl font-bold mt-4">Oops! Page not found.</h2>
      <p className="text-gray-500 mt-2 mb-8">The page you are looking for doesn't exist or has been moved.</p>
      <Link href="/" className="border border-[#BC9A6C] text-[#BC9A6C] px-6 py-2 hover:bg-[#BC9A6C] hover:text-black transition-all">
        Back to Home
      </Link>
    </div>
  );
}