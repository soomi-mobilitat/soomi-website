
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Communities from '@/components/Communities';
import Rides from '@/components/Rides';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (elementPosition.top < windowHeight * 0.85) {
          element.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger on initial load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <Features />
        <Communities />
        <Rides />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
