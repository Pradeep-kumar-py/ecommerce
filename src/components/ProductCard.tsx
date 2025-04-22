'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Rating from './Rating';

type ProductCardProps = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  images: string[];
  discount?: number;
  onAddToCart?: (id: number) => void;
};

export default function ProductCard({ 
  id, 
  name, 
  price, 
  originalPrice, 
  rating, 
  images, 
  discount,
  onAddToCart 
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(id);
    }
  };
  
  return (
    <Link 
      href={`/products/${id}`}
      className="group"
    >
      <div 
        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Image */}
        <div className="aspect-square relative overflow-hidden">
          <Image 
            src={images[0] || '/placeholder-product.jpg'} 
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover transition-transform duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}
          />
          
          {/* Discount Badge */}
          {discount && discount > 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold py-1 px-2 rounded-md">
              {discount}% OFF
            </div>
          )}
        </div>
        
        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-sm sm:text-base font-medium text-gray-800 line-clamp-2 mb-1">
            {name}
          </h3>
          
          {/* Rating */}
          <div className="mb-2">
            <Rating value={rating} />
          </div>
          
          {/* Price */}
          <div className="flex items-center">
            <span className="text-lg font-semibold text-gray-900">${price.toFixed(2)}</span>
            
            {originalPrice && originalPrice > price && (
              <span className="ml-2 text-sm text-gray-500 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          
          {/* Add to Cart Button (only visible on hover on desktop) */}
          <button
            onClick={handleAddToCart}
            className={`w-full mt-3 py-2 px-4 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all ${
              isHovered ? 'opacity-100' : 'opacity-0 md:opacity-0 opacity-100'
            }`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}
