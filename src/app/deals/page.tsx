'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { useCart } from '@/context/CartContext';

// Define the Product type based on how you're using it
type Product = {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  images: string[];
  discount?: number;
};

export default function DealsPage() {
  const { addItem } = useCart();
  const [sortMethod, setSortMethod] = useState<string>('discount');
  const [dealsProducts, setDealsProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  // Filter products that have a discount
  useEffect(() => {
    setLoading(true);
    
    // Simulate a small delay to prevent UI flashing (optional)
    const timer = setTimeout(() => {
      const discountedProducts = products.filter(product => 
        product.discount && product.discount > 0
      );
      
      // Sort the products based on the selected method
      const sortedProducts = [...discountedProducts].sort((a, b) => {
        switch(sortMethod) {
          case 'discount':
            return (b.discount || 0) - (a.discount || 0);
          case 'priceAsc':
            return a.price - b.price;
          case 'priceDesc':
            return b.price - a.price;
          case 'nameAsc':
            return a.name.localeCompare(b.name);
          default:
            return (b.discount || 0) - (a.discount || 0);
        }
      });
      
      setDealsProducts(sortedProducts);
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [sortMethod]);
  
  const handleAddToCart = (productId: string | number) => {
    addItem(Number(productId), 1);
  };

  return (
    <div className="px-4 w-full  py-8 bg-gray-50">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-700 mb-2">Special Deals & Discounts</h1>
        <p className="text-gray-500">Discover our best offers and save big on these selected items</p>
      </div>
      
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
        <span className="text-gray-500 mb-3 md:mb-0">
          {loading ? 'Loading deals...' : `${dealsProducts.length} products on sale`}
        </span>
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-gray-500">Sort by:</label>
          <select 
            id="sort"
            value={sortMethod}
            onChange={(e) => setSortMethod(e.target.value)}
            className="border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm text-gray-600"
            disabled={loading}
          >
            <option value="discount">Highest Discount</option>
            <option value="priceAsc">Price: Low to High</option>
            <option value="priceDesc">Price: High to Low</option>
            <option value="nameAsc">Name: A to Z</option>
          </select>
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-400"></div>
        </div>
      ) : dealsProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 transition-all duration-300">
          {dealsProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="transform transition-all duration-300 hover:scale-105"
              style={{ 
                animationDelay: `${index * 0.05}s`,
                animation: 'fadeIn 0.5s ease forwards',
                opacity: 0 
              }}
            >
              <ProductCard
                id={Number(product.id)}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                rating={product.rating}
                images={product.images}
                discount={product.discount}
                onAddToCart={() => handleAddToCart(Number(product.id))}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">No deals available at the moment</h2>
          <p className="text-gray-500 mb-6">Please check back soon for new offers and discounts.</p>
          <Link 
            href="/products"
            className="px-6 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
          >
            Browse All Products
          </Link>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
