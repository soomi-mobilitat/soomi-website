
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { navItems } from './Layout.data.js';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-6',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <img src="/assets/icons/logo_compact.svg" alt="Somi logo" className="h-12 w-auto"></img>
          <span className={cn(
            "font-bold text-2xl transition-colors duration-300",
            isScrolled ? "text-gray-900 dark:text-white" : "text-gray-900 dark:text-white"
          )}>
            Somi
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300",
                isScrolled
                  ? "text-gray-600 hover:text-gray-900"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-500 hover:text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform md:hidden pt-20",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-3 p-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
