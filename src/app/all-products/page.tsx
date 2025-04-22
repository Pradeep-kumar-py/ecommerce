import React from 'react';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import Link from 'next/link';

export default function AllProductsPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">All Products</h1>
          <div className="flex items-center space-x-2">
            {/* Could add sorting/filtering options here */}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              rating={product.rating}
              images={product.images}
              discount={product.discount}
            />
          ))}
        </div>
        
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found.</p>
            <Link href="/" className="mt-4 inline-block text-blue-600 hover:text-blue-800">
              Return to Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
