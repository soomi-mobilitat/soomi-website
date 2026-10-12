
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/hero/Hero';
import Features from '@/components/features/Features';
import Contact from '@/components/contact/Contact';
import Footer from '@/components/layout/Footer';
import ScrollToTopButton from '@/components/ui/scroll-to-top-button';
import Mission from '@/components/mission/Mission';
import Services from '@/components/services/Services';

const Index = () => {
  // Reveal `.animate-on-scroll` elements once they enter the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Mission />
        <Services />
        <Contact />
        <ScrollToTopButton />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
