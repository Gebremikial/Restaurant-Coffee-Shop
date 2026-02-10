"use client";
import { useState } from 'react';

const faqs = [
  { q: "What are your opening hours?", a: "We are open Monday to Friday from 7 AM to 9 PM, and weekends from 8 AM to 10 PM." },
  { q: "Do you offer vegan options?", a: "Yes! We have a wide range of vegan pastries and we offer oat, almond, and soy milk for all our coffees." },
  { q: "Can I book a table for events?", a: "Absolutely. Please contact us via the contact form or call us directly for event bookings." }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#1a1a1a]">Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-100 rounded-sm overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 transition-all text-left"
              >
                <span className="font-bold text-[#1a1a1a]">{faq.q}</span>
                <span className="text-[#BC9A6C] text-2xl">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="p-5 text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}