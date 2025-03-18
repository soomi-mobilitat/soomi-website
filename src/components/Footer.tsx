
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-somi-400 to-somi-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="font-bold text-2xl text-gray-900 dark:text-white">
                Somi
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
              Community-based carpooling platform that connects trusted networks for shared, sustainable, and cost-effective transportation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-somi-600 dark:text-gray-400 dark:hover:text-somi-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-somi-600 dark:text-gray-400 dark:hover:text-somi-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-somi-600 dark:text-gray-400 dark:hover:text-somi-400">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-somi-600 dark:text-gray-400 dark:hover:text-somi-400">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
                  Communities
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
                  Rides
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
                  Calendar
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
                  Mobile App
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
                  Safety Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Somi. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-somi-600 dark:hover:text-somi-400 text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
