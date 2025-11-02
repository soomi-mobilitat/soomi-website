import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Users, MapPin, Calendar } from 'lucide-react';
import { heroContent } from './Hero.data.js';

const Hero = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const icons = { Users, MapPin, Calendar };

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center pt-28 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-somi-50/50 to-white -z-10"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC41Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjxwYXRoIGQ9Ik0xNiAxNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTR6TTM2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHpNMTYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] -z-10"></div>

      <div className="container px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="animate-on-scroll">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-somi-100 text-somi-800 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-somi-500 mr-2"></span>
              {heroContent.badge}
            </div>

            {/* Logo + slogan */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8 mb-8">
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <img src="/assets/icons/main_logo_mark.svg" alt="Somi Logo" className="h-48 w-auto" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-snug mb-2 mt-4">
                {heroContent.slogan.main} <span className="text-somi-500">{heroContent.slogan.highlight}</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
              <b className="text-gray-900">{heroContent.descriptionInBold}</b>
              {heroContent.description.map((part, index) => (
                <span
                  key={index}
                  className={part.emphasis ? 'font-semibold text-somi-600' : ''}
                >
                  {part.text}
                </span>
              ))}
            </p>


            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 mt-8">
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 border-gray-300 hover:bg-gray-50 button-hover-effect"
              >
                <a href="#features">{heroContent.cta}</a>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {heroContent.features.map((feature, i) => {
                const Icon = icons[feature.icon];
                return (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="rounded-full p-2 bg-somi-100 text-somi-700">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column - App visualization */}
          <div className="relative flex justify-center lg:justify-end animate-on-scroll">
            <div className="relative z-10 w-[280px] sm:w-[320px] h-[580px] sm:h-[620px] rounded-[2.5rem] border-[12px] border-gray-900 overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-6 bg-gray-900 z-20 rounded-t-lg flex items-center justify-center">
                <div className="h-1.5 w-20 bg-gray-800 rounded-full"></div>
              </div>
              <img
                src="/assets/images/journey-list-popup-somi.jpg"
                alt="Somi App Mockup"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 h-64 w-64 bg-somi-200/30 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-20 -left-20 h-72 w-72 bg-somi-100/40 rounded-full blur-3xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
