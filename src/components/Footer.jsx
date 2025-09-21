import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="bg-white text-gray-800 border-t border-gray-200 mt-13 ">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap  items-center justify-between py-6  border-b border-gray-200">
                <div className="flex items-center text-center p-4">
                    <svg width={50} className="text-gray-800 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18s8-4 8-10V4H4v4c0 6 8 10 8 10z" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg mt-2">High Quality</h3>
                      <p className="text-sm text-gray-500">crafted from materials</p>
                    </div>
                </div>
                <div className="flex  items-center text-center p-4">
                    <svg width={50} className="text-gray-800 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 21l-7-7m7 7l7-7m-7 7v-13M10 21v-13" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg mt-2">Warranty Protection</h3>
                      <p className="text-sm text-gray-500">Over 2 years</p>
                    </div>
                </div>
                <div className="flex  items-center text-center p-4">
                    <svg width={50} className="text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-8z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 8V6a2 2 0 012-2h0a2 2 0 012 2v2M8 12h8m-8 4h8" />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-lg mt-2">Free Shipping</h3>
                      <p className="text-sm text-gray-500">Order over 150 $</p>
                    </div>
                </div>
                <div className="flex  items-center text-center p-4 gap-2">
                    <svg width={50} className=" text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m-8 4h8m-8 4h4" />
                    </svg>
                    <div>

                    <h3 className="font-semibold text-lg mt-2">24 / 7 Support</h3>
                    <p className="text-sm text-gray-500">Dedicated support</p>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="flex flex-col md:flex-row justify-between py-6 space-y-8 md:space-y-0 md:space-x-8">
                {/* Company Info */}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold">Furniro.</h2>
                    <p className="mt-4 text-sm text-gray-600">
                        400 University Drive Suite 200 Coral Gables,<br />
                        FL, 33134 USA
                    </p>
                </div>

                {/* Links Section */}
                <div className="flex-1 md:text-center gap-4">
                    <h3 className="font-semibold text-gray-600">Links</h3>
                    <ul className="mt-4 text-sm space-y-2">
                        <li><Link to="/" className="text-gray-800 hover:text-yellow-600">Home</Link></li>
                        <li><Link to="/shop" className="text-gray-800 hover:text-yellow-600">Shop</Link></li>
                        <li><Link to="/about" className="text-gray-800 hover:text-yellow-600">About</Link></li>
                        <li><Link to="/contact" className="text-gray-800 hover:text-yellow-600">Contact</Link></li>
                    </ul>
                </div>

                {/* Help Section */}
                <div className="flex-1 md:text-center gap-3">
                    <h3 className="font-semibold text-gray-600">Help</h3>
                    <ul className="mt-4 text-sm space-y-2">
                        <li><a href="#" className="text-gray-800 hover:text-yellow-600">Payment Options</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-yellow-600">Returns</a></li>
                        <li><a href="#" className="text-gray-800 hover:text-yellow-600">Privacy Policies</a></li>
                    </ul>
                </div>

                
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
                <p>2023 furniro. All rights reserved</p>
            </div>
        </div>
    </footer>
);

export default Footer;
