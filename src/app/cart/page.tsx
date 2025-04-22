'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { products } from '@/data/products';
import QuantitySelector from '@/components/QuantitySelector';

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  // Get full product details for cart items
  const cartProducts = items.map(item => {
    const product = products.find(p => p.id === item.id);
    return {
      ...product,
      quantity: item.quantity
    };
  }).filter(item => item.id !== undefined);
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate a checkout process
    setTimeout(() => {
      clearCart();
      setIsCheckingOut(false);
      // You would typically redirect to a success page here
      alert('Thank you for your order!');
    }, 2000);
  };
  
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center py-16 bg-white rounded-lg shadow-sm">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-16 w-16 text-gray-400 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
            />
          </svg>
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you have not added anything to your cart yet.</p>
          <Link 
            href="/products" 
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            Let&apos;s go shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Your Shopping Cart ({totalItems} items)</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {cartProducts.map(product => (
                product && (
                  <li key={product.id} className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      {/* Product Image */}
                      <div className="relative h-24 w-24 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
                        <Image
                          src={product.images?.[0] || '/placeholder-product.jpg'}
                          alt={product.name || 'Product'}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Product Details */}
                      <div className="flex-grow">
                        <div className="flex justify-between gap-4">
                          <Link href={`/products/${product.id}`} className="text-lg font-medium text-gray-800 hover:text-blue-600">
                            {product.name}
                          </Link>
                          <span className="text-lg font-semibold">
                            ${((product.price || 0) * product.quantity).toFixed(2)}
                          </span>
                        </div>
                        
                        <p className="text-sm text-gray-500 mt-1">${(product.price || 0).toFixed(2)} each</p>
                        
                        {/* Quantity Selector */}
                        <div className="mt-4">
                          <QuantitySelector
                            quantity={product.quantity}
                            onIncrease={() => product?.id && updateQuantity(product.id, (product.quantity || 1) + 1)}
                            onDecrease={() => product?.id && updateQuantity(product.id, (product.quantity || 1) - 1)}
                            onRemove={() => product?.id && removeItem(product.id)}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                )
              ))}
            </ul>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            
            <dl className="space-y-3">
              <div className="flex justify-between">
                <dt className="text-gray-600">Subtotal</dt>
                <dd className="text-gray-900 font-medium">${totalPrice.toFixed(2)}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Shipping</dt>
                <dd className="text-gray-900 font-medium">$0.00</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Tax</dt>
                <dd className="text-gray-900 font-medium">${(totalPrice * 0.1).toFixed(2)}</dd>
              </div>
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between">
                  <dt className="font-semibold text-lg">Total</dt>
                  <dd className="font-bold text-lg text-blue-600">${(totalPrice + (totalPrice * 0.1)).toFixed(2)}</dd>
                </div>
              </div>
            </dl>
            
            <div className="mt-6">
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors disabled:opacity-70"
              >
                {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
              </button>
            </div>
            
            <div className="mt-4">
              <Link
                href="/products"
                className="block text-center text-blue-600 hover:text-blue-800"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
