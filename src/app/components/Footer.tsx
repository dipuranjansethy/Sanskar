import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    'About Us', 'Media', 'Daily Horoscope', 'Daily Panchangam', 'Blog',
    'Privacy Policy', 'Terms & Conditions', 'Returns and Refunds Policy',
    'Hiring', 'Shop Agarbathi, Dhoop, Cones', 'How to Order Flowers', 'Contact Us'
  ];

  return (
    <footer className="bg-rose-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="text-xl mb-4">Quick links</h3>
          <ul className="space-y-2">
            {quickLinks.map(link => (
              <li key={link}>
                <a href="#" className="hover:underline">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl mb-4">Newsletter</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="dipuranjansethyl432@gmail.com"
              className="flex-grow px-4 py-2 rounded-l-full text-gray-800"
            />
            <button className="bg-teal-600 px-6 py-2 rounded-r-full hover:bg-teal-700 transition-colors">
              SUBSCRIBE
            </button>
          </div>
        </div>

        {/* Available At */}
        <div>
          <h3 className="text-xl mb-4">Available at:</h3>
          <div className="grid grid-cols-3 gap-2 mb-8">
            {['Bangalore', 'Hyderabad', 'Mumbai'].map(city => (
              <div key={city} className="aspect-square">
                <h1>{city}</h1>
              </div>
            ))}
          </div>
          <h4 className="text-lg mb-4">AVAILABLE AT:</h4>
          <div className="flex gap-4 mb-4">
            {['BigBasket', 'Amazon', 'Flipkart', 'JioMart', 'More'].map(store => (
              <div key={store} className="aspect-square">
              <h1>{store}</h1>
            </div>
            ))}
          </div>
          <p>Get fresh puja flowers today!</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-rose-500">
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            {[Facebook, Twitter , Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="hover:text-rose-200">
                <Icon size={24} />
              </a>
            ))}
          </div>
          <p className="text-sm">
            © 2025, Rosebazaar India Powered by Shopify
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;