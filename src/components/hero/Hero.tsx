import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Users, MapPin, Calendar } from 'lucide-react';
import { heroContent, heroScreenshots } from './Hero.data.js';
import ScreenshotCarousel from './ScreenshotCarousel';
import SpacedSoomiLogo from '@/components/ui/spaced-soomi-logo';

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
    <section id="inici" className="relative overflow-hidden min-h-screen flex items-center pt-28 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-soomi-50/50 to-white -z-10"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC41Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjxwYXRoIGQ9Ik0xNiAxNmMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTR6TTM2IDE2YzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNHpNMTYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] -z-10"></div>

      <div className="container px-4 sm:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="animate-on-scroll">
            {/* Logo + slogan */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8 xl:space-x-0 mb-4">
              {/* Logo only on wide screens: on smaller screens it already shows in the header */}
              <div className="hidden xl:block shrink-0">
                <SpacedSoomiLogo
                  height={12 * 16} // 12 rem in px (~ h-48 tailwind)
                  type="main"
                  src="/assets/icons/main_logo_mark-cropped.svg"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-snug sm:leading-none mb-2 mt-0 sm:mt-4 text-center md:text-right md:mr-24 xl:text-left xl:mr-0">
                {heroContent.slogan.main} <span className="text-soomi-500">{heroContent.slogan.highlight}</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
              <b className="text-gray-900 ">{heroContent.descriptionInBold}</b>
              {heroContent.description.map((part, index) => (
                <span
                  key={index}
                  className={part.emphasis ? 'font-semibold text-soomi-600' : ''}
                >
                  {part.text}
                </span>
              ))}
            </p>


            {/* CTA */}
            <div className="flex flex-col gap-4 mb-12 mt-8">
              <Button
                asChild
                variant="outline"
                className="rounded-full px-8 py-6 bg-soomi-500 hover:bg-soomi-400 text-gray-900 font-bold button-hover-effect lg:text-lg"
              >
                <a href="#caracteristiques">{heroContent.cta}</a>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {heroContent.features.map((feature, i) => {
                const Icon = icons[feature.icon];
                return (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="rounded-full p-2 bg-soomi-100 text-soomi-700">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{feature.title}</p>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column - App visualization */}
          <div className="relative flex justify-center lg:justify-end animate-on-scroll">
            <ScreenshotCarousel screenshots={heroScreenshots} />

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 h-64 w-64 bg-soomi-200/30 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-20 -left-20 h-72 w-72 bg-soomi-100/40 rounded-full blur-3xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
