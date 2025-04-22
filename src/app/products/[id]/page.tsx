'use client';

import { useState } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '@/data/products';
import { useCart } from '@/context/CartContext';
import Rating from '@/components/Rating';
import QuantitySelector from '@/components/QuantitySelector';

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addItem } = useCart();
  
  const product = getProductById(parseInt(params.id));
  
  if (!product) {
    notFound();
  }
  
  const handleAddToCart = () => {
    addItem(product.id, quantity);
  };
  
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square relative rounded-lg overflow-hidden border">
              <Image
                src={product.images[activeImage] || '/placeholder-product.jpg'}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`w-20 h-20 flex-shrink-0 relative border rounded ${
                      activeImage === index ? 'border-blue-500 ring-2 ring-blue-300' : 'border-gray-200'
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image
                      src={image || '/placeholder-product.jpg'}
                      alt={`${product.name} - View ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Product Details */}
          <div className="space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{product.name}</h1>
            
            <div className="flex items-center space-x-2">
              <Rating value={product.rating} />
              <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              
              {product.originalPrice && product.originalPrice > product.price && (
                <>
                  <span className="text-lg text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                  <span className="text-sm font-semibold text-red-500">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </>
              )}
            </div>
            
            <div className="prose prose-sm max-w-none text-gray-700">
              <p>{product.description}</p>
            </div>
            
            {/* Features list */}
            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Features:</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Stock info */}
            <div className="flex items-center">
              <span className={`text-sm font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
              </span>
            </div>
            
            {/* Quantity selector and add to cart */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 font-medium">Quantity:</span>
                <QuantitySelector
                  quantity={quantity}
                  onIncrease={() => setQuantity(prev => Math.min(prev + 1, product.stock))}
                  onDecrease={() => setQuantity(prev => Math.max(prev - 1, 1))}
                  max={product.stock}
                />
              </div>
              
              <button 
                onClick={handleAddToCart}
                disabled={product.stock <= 0}
                className="w-full py-3 px-6 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
