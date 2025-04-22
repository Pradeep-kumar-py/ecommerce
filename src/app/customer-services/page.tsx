'use client';

import { useState } from 'react';

export default function CustomerServicePage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the form data to your backend
  };

  return (
    <div className="w-full min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Customer Service</h1>
        <p className="mb-6 text-gray-800">
          Need help? We&rsquo;re here for you. Check our FAQs below or contact our team directly.
        </p>

        {/* Contact Info */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Contact Information</h2>
          <ul className="text-gray-800 space-y-1">
            <li>Email: <a href="mailto:support@flipmart.com" className="text-blue-600 hover:underline">support@flipmart.com</a></li>
            <li>Phone: <a href="tel:1234567890" className="text-blue-600 hover:underline">(123) 456-7890</a></li>
            <li>Address: 123 Shopping Avenue, Market City, ST 12345</li>
          </ul>
        </section>

        {/* FAQs */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white border rounded p-3">
              <summary className="font-medium cursor-pointer text-gray-900">How can I track my order?</summary>
              <p className="mt-2 text-gray-700">After placing your order, you&rsquo;ll receive a confirmation email with a tracking link.</p>
            </details>
            <details className="bg-white border rounded p-3">
              <summary className="font-medium cursor-pointer text-gray-900">What is your return policy?</summary>
              <p className="mt-2 text-gray-700">We accept returns within 30 days of delivery. Please contact us for a return label.</p>
            </details>
            <details className="bg-white border rounded p-3">
              <summary className="font-medium cursor-pointer text-gray-900">How do I contact customer support?</summary>
              <p className="mt-2 text-gray-700">You can use the form below, email us, or call our support number during business hours.</p>
            </details>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Send Us a Message</h2>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-700 rounded p-4 mb-4">
              Thank you for contacting us! We&rsquo;ll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 bg-white border rounded p-4">
              <div>
                <label htmlFor="name" className="block text-gray-800 font-medium mb-1">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 bg-white text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-800 font-medium mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 bg-white text-gray-900"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-800 font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 bg-white text-gray-900"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
