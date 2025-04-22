'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { banners } from '@/data/products';

export default function Banner() {
  const [currentBanner, setCurrentBanner] = useState(0);
  
  // Auto rotate banners
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative overflow-hidden w-full h-64 sm:h-80 md:h-96 rounded-lg shadow-md">
      {/* Banners */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentBanner ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="relative h-full w-full">
            <Image
              src={banner.image || '/banners/default-banner.jpg'}
              alt={banner.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="text-white p-6 md:p-10 max-w-2xl">
                <h2 className="text-2xl md:text-4xl font-bold mb-2">{banner.title}</h2>
                <p className="text-sm md:text-lg mb-6">{banner.subtitle}</p>
                <Link
                  href={banner.link}
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentBanner ? 'bg-white w-4' : 'bg-white/50'
            }`}
            onClick={() => setCurrentBanner(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
