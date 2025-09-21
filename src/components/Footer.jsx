import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-gray-900 text-gray-100 pt-12">
    {/* Feature Highlights */}
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      {[
        {
          icon: (
            <svg width={50} className="text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18s8-4 8-10V4H4v4c0 6 8 10 8 10z" />
            </svg>
          ),
          title: "High Quality",
          desc: "Crafted from premium materials"
        },
        {
          icon: (
            <svg width={50} className="text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 21l-7-7m7 7l7-7m-7 7v-13M10 21v-13" />
            </svg>
          ),
          title: "Warranty Protection",
          desc: "Over 2 years"
        },
        {
          icon: (
            <svg width={50} className="text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-8z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 8V6a2 2 0 012-2h0a2 2 0 012 2v2M8 12h8m-8 4h8" />
            </svg>
          ),
          title: "Free Shipping",
          desc: "Order over $150"
        },
        {
          icon: (
            <svg width={50} className="text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m-8 4h8m-8 4h4" />
            </svg>
          ),
          title: "24/7 Support",
          desc: "Dedicated support team"
        },
      ].map((feature, index) => (
        <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
          {feature.icon}
          <h3 className="font-semibold text-lg mt-4">{feature.title}</h3>
          <p className="text-sm text-gray-300 mt-1">{feature.desc}</p>
        </div>
      ))}
    </div>

    {/* Main Footer Content */}
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 pb-12 border-t border-gray-700">
      {/* Company Info */}
      <div>
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">Furniro</h2>
        <p className="text-gray-400 text-sm">
          400 University Drive Suite 200<br />
          Coral Gables, FL, 33134 USA
        </p>
      </div>

      {/* Links */}
      <div>
        <h3 className="font-semibold text-gray-300 mb-4">Quick Links</h3>
        <ul className="space-y-2 text-gray-400">
          <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
          <li><Link to="/shop" className="hover:text-yellow-400 transition">Shop</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400 transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
        </ul>
      </div>

      {/* Help */}
      <div>
        <h3 className="font-semibold text-gray-300 mb-4">Help & Support</h3>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-yellow-400 transition">Payment Options</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition">Returns</a></li>
          <li><a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a></li>
        </ul>
      </div>
    </div>

    {/* Copyright */}
    <div className="bg-gray-800 text-center py-4 text-sm text-gray-500">
      &copy; {new Date().getFullYear()} Furniro. All rights reserved.
    </div>
  </footer>
);

export default Footer;
