"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignUp() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save to localStorage for the password check logic
    localStorage.setItem("userEmail", formData.email);
    localStorage.setItem("userPassword", formData.password);
    localStorage.setItem("userName", formData.name);
    
    router.push(`/welcome?name=${formData.name}`);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center px-6">
      <div className="bg-white p-8 rounded-sm w-full max-w-md shadow-2xl">
        <h2 className="text-2xl font-bold text-[#1a1a1a] mb-6 text-center">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="text" placeholder="Full Name" required
            className="w-full p-3 border border-gray-200 rounded-sm focus:border-[#BC9A6C] outline-none text-sm"
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input 
            type="email" placeholder="Email Address" required
            className="w-full p-3 border border-gray-200 rounded-sm focus:border-[#BC9A6C] outline-none text-sm"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input 
            type="password" placeholder="Password" required
            className="w-full p-3 border border-gray-200 rounded-sm focus:border-[#BC9A6C] outline-none text-sm"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
          <button type="submit" className="w-full bg-[#BC9A6C] text-white py-3 font-bold hover:bg-[#a3855c] transition-colors uppercase text-xs tracking-widest">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account? <Link href="/login" className="text-[#BC9A6C] font-bold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}