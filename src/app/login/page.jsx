"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Get saved credentials
    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    setTimeout(() => {
      // Logic Check
      if (formData.email === savedEmail && formData.password === savedPassword) {
        router.push('/'); 
      } else {
        setError("Incorrect email or password. Please try again.");
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-6">
      <div className="bg-white p-8 rounded-sm w-full max-w-md shadow-2xl">
        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-2 text-center">Sign In</h2>
        <p className="text-gray-500 text-sm text-center mb-8">Please enter your details to continue.</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase text-gray-400">Email Address</label>
            <input 
              type="email" 
              required
              className={`w-full p-3 border rounded-sm outline-none transition-all text-sm ${error ? 'border-red-500' : 'border-gray-200 focus:border-[#BC9A6C]'}`}
              placeholder="hello@example.com"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold uppercase text-gray-400">Password</label>
            <input 
              type="password" 
              required
              className={`w-full p-3 border rounded-sm outline-none transition-all text-sm ${error ? 'border-red-500' : 'border-gray-200 focus:border-[#BC9A6C]'}`}
              placeholder="••••••••"
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          {/* ERROR MESSAGE DISPLAY */}
          {error && (
            <p className="text-red-500 text-[11px] font-bold animate-shake uppercase tracking-tighter">
              {error}
            </p>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-[#1a1a1a] text-white py-3 font-bold hover:bg-[#BC9A6C] transition-all disabled:opacity-50 uppercase text-xs tracking-widest"
          >
            {loading ? "Checking..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account? <Link href="/signup" className="text-[#BC9A6C] font-bold hover:underline">Sign up for free</Link>
          </p>
        </div>
      </div>
    </div>
  );
}