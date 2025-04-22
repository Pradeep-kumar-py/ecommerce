'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/all-products', label: 'All Products' },
    { href: '/deals', label: 'Deals' },
    { href: '/customer-services', label: 'Customer Service' },
  ];

  return (
    <header className="bg-blue-600 text-white sticky top-0 z-50 shadow-md backdrop-blur-md bg-opacity-90 transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* Replace with your logo image if needed */}
            <span className="font-bold text-2xl tracking-tight">FlipMart</span>
          </Link>

          {/* Search - md and up */}
          <div className="hidden md:flex flex-1 mx-6 max-w-xl">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="search"
                placeholder="Search for products, brands, categories..."
                className="w-full py-2.5 pl-10 pr-16 rounded-lg border border-white/30 bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-200"
                aria-label="Search"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-700 hover:bg-blue-800 text-white py-1.5 px-3 rounded-md text-sm font-medium transition duration-200">
                Search
              </button>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 font-medium">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-yellow-300 transition ${
                  pathname === link.href ? 'underline underline-offset-4 font-semibold' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* User Icons */}
          <div className="flex items-center gap-4">
            {/* Account */}
            <Link href="/user" className="hover:text-yellow-300 text-xl transition">
            🙍
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative text-xl hover:text-yellow-300 transition">
              🛒
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden focus:outline-none text-white"
            >
              {isMenuOpen ? '✖' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 rounded-md text-black focus:outline-none"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-white p-1.5 rounded-md">
              🔍
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-700 px-4 py-4 transition-all duration-300 animate-fade-down">
          <nav className="flex flex-col gap-3 font-medium">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-yellow-300 transition ${
                  pathname === link.href ? 'font-semibold underline' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
