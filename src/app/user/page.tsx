"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function UserPage() {
  // Placeholder user data
  const user = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    joined: "January 2024",
    address: "123 Main Street, Anytown, ST 12345",
    phone: "+1 (555) 123-4567",
    profileImage: "/user.jpeg", // Add a placeholder image to your public folder
  };

  // Order history
  const orderHistory = [
    { id: "ORD-2024-001", date: "Jan 15, 2024", status: "Delivered", total: "$145.99" },
    { id: "ORD-2023-089", date: "Dec 22, 2023", status: "Delivered", total: "$67.50" },
    { id: "ORD-2023-042", date: "Nov 03, 2023", status: "Delivered", total: "$212.30" },
  ];

  // Tab state management
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* User header section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-blue-100">
            <Image 
              src={user.profileImage} 
              alt={user.name} 
              fill 
              className="object-cover" 
              priority
            />
          </div>
          <div className="text-center sm:text-left flex-grow">
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-500">Member since {user.joined}</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm transition-colors">
            Edit Profile
          </button>
        </div>

        {/* Navigation tabs */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="flex space-x-8" aria-label="Tabs">
            <button 
              onClick={() => setActiveTab("profile")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "profile" 
                  ? "border-blue-600 text-blue-600" 
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Profile
            </button>
            <button 
              onClick={() => setActiveTab("orders")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "orders" 
                  ? "border-blue-600 text-blue-600" 
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Orders
            </button>
            <button 
              onClick={() => setActiveTab("wishlist")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "wishlist" 
                  ? "border-blue-600 text-blue-600" 
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Wishlist
            </button>
            <button 
              onClick={() => setActiveTab("settings")}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === "settings" 
                  ? "border-blue-600 text-blue-600" 
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              Settings
            </button>
          </nav>
        </div>

        {/* Tab content */}
        {activeTab === "profile" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Full Name</label>
                <p className="text-gray-800">{user.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
                <p className="text-gray-800">{user.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Phone Number</label>
                <p className="text-gray-800">{user.phone}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">Member Since</label>
                <p className="text-gray-800">{user.joined}</p>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-500 mb-1">Address</label>
                <p className="text-gray-800">{user.address}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order History</h2>
            {orderHistory.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {orderHistory.map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{order.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {order.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.total}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href="#" className="text-blue-600 hover:text-blue-900">View Details</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500">No orders found.</p>
            )}
          </div>
        )}

        {activeTab === "wishlist" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Wishlist</h2>
            <p className="text-gray-500">Your wishlist is currently empty.</p>
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm transition-colors">
              Browse Products
            </button>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Account Settings</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Password</h3>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-md text-sm transition-colors">
                  Change Password
                </button>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Notifications</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input id="email-notif" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="email-notif" className="ml-2 text-gray-700">Email notifications</label>
                  </div>
                  <div className="flex items-center">
                    <input id="sms-notif" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                    <label htmlFor="sms-notif" className="ml-2 text-gray-700">SMS notifications</label>
                  </div>
                </div>
              </div>
              <div className="pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Account Actions</h3>
                <button className="bg-red-50 hover:bg-red-100 text-red-600 py-2 px-4 rounded-md text-sm transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
