import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">MY<span className="text-amber-400">pms</span></h2>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Experience luxury and comfort at our premium hotel. Your perfect getaway awaits.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <span className="text-lg">📘</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <span className="text-lg">🐦</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">
                <span className="text-lg">💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#rooms" className="text-gray-300 hover:text-amber-400 transition-colors">Rooms & Suites</a></li>
              <li><a href="#amenities" className="text-gray-300 hover:text-amber-400 transition-colors">Amenities</a></li>
              <li><a href="#dining" className="text-gray-300 hover:text-amber-400 transition-colors">Dining</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">📍</span>
                <span className="text-gray-300">123 Luxury Street<br />Hotel District, NY 10001</span>
              </li>
              <li className="flex items-center">
                <span className="text-amber-400 mr-2">📞</span>
                <span className="text-gray-300">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <span className="text-amber-400 mr-2">✉️</span>
                <span className="text-gray-300">info@mypms.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Subscribe for exclusive offers and updates</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none"
              />
              <button className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} MYpms Hotel. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;