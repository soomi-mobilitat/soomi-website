
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

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

  const navItems = [
    { name: 'Inici', href: '#home' },
    { name: 'Característiques', href: '#features' },
    { name: 'Comunitats', href: '#communities' },
    { name: 'Viatges', href: '#rides' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-6',
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-somi-400 to-somi-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
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
                  ? "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" 
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              )}
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center space-x-2 ml-4">
            <Button 
              variant="outline" 
              className="rounded-full bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white"
            >
              Iniciar Sessió
            </Button>
            <Button 
              className="rounded-full bg-somi-500 hover:bg-somi-600 text-somi-900"
            >
              Registrar-se
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white dark:bg-gray-900 z-40 transition-transform duration-300 ease-in-out transform md:hidden pt-20",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-3 p-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-3 text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="flex flex-col space-y-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Button 
              variant="outline" 
              className="w-full justify-center rounded-full"
            >
              Iniciar Sessió
            </Button>
            <Button 
              className="w-full justify-center rounded-full bg-somi-500 hover:bg-somi-600 text-somi-900"
            >
              Registrar-se
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
