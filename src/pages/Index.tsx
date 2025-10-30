
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/hero/Hero';
import Features from '@/components/features/Features';
import Communities from '@/components/communities/Communities';
import Download from '@/components/download/Download';
import Footer from '@/components/layout/Footer';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';

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
        <Download />
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
